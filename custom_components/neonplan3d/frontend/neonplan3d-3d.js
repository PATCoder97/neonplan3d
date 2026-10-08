var kh=0,_c=1,Vh=2;var Es=1,Gh=2,Ur=3,Ei=0,nn=1,Me=2,kn=0,Ai=1,Fe=2,vc=3,As=4,Hh=5;var Ki=100,Wh=101,Xh=102,qh=103,Yh=104,$h=200,Zh=201,Jh=202,Kh=203,yc=204,Mc=205,Qh=206,jh=207,tf=208,ef=209,nf=210,rf=211,sf=212,of=213,af=214,zo=0,ko=1,Vo=2,Er=3,Go=4,Ho=5,Wo=6,Xo=7,Sc=0,lf=1,cf=2,An=0,wc=1,Tc=2,Ec=3,Ac=4,Rc=5,Cc=6,Ic=7;var Pc=300,Ri=301,Qi=302,_a=303,va=304,Rs=306,Xi=1e3,cn=1001,qo=1002,ke=1003,uf=1004;var Cs=1005;var Ge=1006,ya=1007;var Ci=1008;var fn=1009,Lc=1010,Fc=1011,Or=1012,Ma=1013,Rn=1014,Cn=1015,In=1016,Sa=1017,wa=1018,Br=1020,Dc=35902,Nc=35899,Uc=1021,Oc=1022,_n=1023,On=1026,Ii=1027,Bc=1028,Ta=1029,Pi=1030,Ea=1031;var Aa=1033,Is=33776,Ps=33777,Ls=33778,Fs=33779,Ra=35840,Ca=35841,Ia=35842,Pa=35843,La=36196,Fa=37492,Da=37496,Na=37488,Ua=37489,Ds=37490,Oa=37491,Ba=37808,za=37809,ka=37810,Va=37811,Ga=37812,Ha=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,$a=37818,Za=37819,Ja=37820,Ka=37821,Qa=36492,ja=36494,tl=36495,el=36283,nl=36284,Ns=36285,il=36286;var os=2300,Yo=2301,Uo=2302,lc=2303,cc=2400,uc=2401,hc=2402;var hf=3200;var zc=0,ff=1,ei="",Ce="srgb",as="srgb-linear",ls="linear",de="srgb";var Oo=7680;var df=519,pf=512,mf=513,gf=514,rl=515,xf=516,bf=517,sl=518,_f=519,vf=35044,kc=35048;var Vc="300 es",En=2e3,cs=2001;function o0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function a0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yf(){let i=Ar("canvas");return i.style.display="block",i}var ch={},Rr=null;function Gc(...i){let t="THREE."+i.shift();Rr?Rr("log",t,...i):console.log(t,...i)}function Mf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Mf(i);let t="THREE."+i.shift();if(Rr)Rr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=Mf(i);let t="THREE."+i.shift();if(Rr)Rr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Wi(...i){let t=i.join(" ");t in ch||(ch[t]=!0,Bt(...i))}function Sf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var wf={[zo]:ko,[Vo]:Wo,[Go]:Xo,[Er]:Ho,[ko]:zo,[Wo]:Vo,[Xo]:Go,[Ho]:Er},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zl=Math.PI/180,$o=180/Math.PI;function Us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function l0(i,t){return(i%t+t)%t}function kl(i,t,e){return(1-e)*i+e*t}function jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yc=class Yc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yc.prototype.isVector2=!0;var Jt=Yc,zn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);p=Math.sin(p*_)/S,a=Math.sin(a*_)/S,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$c=class $c{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vl.copy(this).projectOnVector(t),this.sub(Vl)}reflect(t){return this.sub(Vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$c.prototype.isVector3=!0;var G=$c,Vl=new G,uh=new zn,Zc=class Zc{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=r[0],g=r[3],p=r[6],_=r[1],S=r[4],v=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*x+a*_+l*M,s[3]=o*g+a*S+l*T,s[6]=o*p+a*v+l*A,s[1]=c*x+u*_+h*M,s[4]=c*g+u*S+h*T,s[7]=c*p+u*v+h*A,s[2]=f*x+d*_+m*M,s[5]=f*g+d*S+m*T,s[8]=f*p+d*v+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=e*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gl.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gl.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zc.prototype.isMatrix3=!0;var Gt=Zc,Gl=new Gt,hh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c0(){let i={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?ls:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[as]:{primaries:t,whitePoint:n,transfer:ls,toXYZ:hh,fromXYZ:fh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:de,toXYZ:hh,fromXYZ:fh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ee=c0();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,Zo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hr===void 0&&(hr=Ar("canvas")),hr.width=t.width,hr.height=t.height;let r=hr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=hr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},u0=0,Cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hl(r[o].image)):s.push(Hl(r[o]))}else s=Hl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var h0=0,Wl=new G,Ke=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=cn,r=cn,s=Ge,o=Ci,a=_n,l=fn,c=i.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Us(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Pc;Ke.DEFAULT_ANISOTROPY=1;var Jc=class Jc{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(d+1)/2,M=(p+1)/2,T=(u+f)/4,A=(h+x)/4,b=(m+g)/4;return S>v&&S>M?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=A/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=b/s),this.set(n,r,s,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jc.prototype.isVector4=!0;var Ae=Jc,Jo=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Ke(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},us=class extends Ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends Ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ba=class ba{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ba().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/fr.setFromMatrixColumn(t,0).length(),s=1/fr.setFromMatrixColumn(t,1).length(),o=1/fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f0,t,d0)}lookAt(t,e,n){let r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),fi.crossVectors(n,an),fi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),fi.crossVectors(n,an)),fi.normalize(),uo.crossVectors(an,fi),r[0]=fi.x,r[4]=uo.x,r[8]=an.x,r[1]=fi.y,r[5]=uo.y,r[9]=an.y,r[2]=fi.z,r[6]=uo.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],S=n[7],v=n[11],M=n[15],T=r[0],A=r[4],b=r[8],w=r[12],R=r[1],P=r[5],L=r[9],I=r[13],E=r[2],D=r[6],U=r[10],N=r[14],z=r[3],B=r[7],k=r[11],V=r[15];return s[0]=o*T+a*R+l*E+c*z,s[4]=o*A+a*P+l*D+c*B,s[8]=o*b+a*L+l*U+c*k,s[12]=o*w+a*I+l*N+c*V,s[1]=u*T+h*R+f*E+d*z,s[5]=u*A+h*P+f*D+d*B,s[9]=u*b+h*L+f*U+d*k,s[13]=u*w+h*I+f*N+d*V,s[2]=m*T+x*R+g*E+p*z,s[6]=m*A+x*P+g*D+p*B,s[10]=m*b+x*L+g*U+p*k,s[14]=m*w+x*I+g*N+p*V,s[3]=_*T+S*R+v*E+M*z,s[7]=_*A+S*P+v*D+M*B,s[11]=_*b+S*L+v*U+M*k,s[15]=_*w+S*I+v*N+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],_=l*d-c*f,S=a*d-c*h,v=a*f-l*h,M=o*d-c*u,T=o*f-l*u,A=o*h-a*u;return e*(x*_-g*S+p*v)-n*(m*_-g*M+p*T)+r*(m*S-x*M+p*A)-s*(m*v-x*T+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=e*a-n*o,S=e*l-r*o,v=e*c-s*o,M=n*l-r*a,T=n*c-s*a,A=r*c-s*l,b=u*x-h*m,w=u*g-f*m,R=u*p-d*m,P=h*g-f*x,L=h*p-d*x,I=f*p-d*g,E=_*I-S*L+v*P+M*R-T*w+A*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return t[0]=(a*I-l*L+c*P)*D,t[1]=(r*L-n*I-s*P)*D,t[2]=(x*A-g*T+p*M)*D,t[3]=(f*T-h*A-d*M)*D,t[4]=(l*R-o*I-c*w)*D,t[5]=(e*I-r*R+s*w)*D,t[6]=(g*v-m*A-p*S)*D,t[7]=(u*A-f*v+d*S)*D,t[8]=(o*L-a*R+c*b)*D,t[9]=(n*R-e*L-s*b)*D,t[10]=(m*T-x*v+p*_)*D,t[11]=(h*v-u*T-d*_)*D,t[12]=(a*w-o*P-l*b)*D,t[13]=(e*P-n*w+r*b)*D,t[14]=(x*S-m*M-g*_)*D,t[15]=(u*M-h*S+f*_)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,x=o*u,g=o*h,p=a*h,_=l*c,S=l*u,v=l*h,M=n.x,T=n.y,A=n.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(m-S)*M,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(f+p))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(m+S)*A,r[9]=(g-_)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=fr.set(r[0],r[1],r[2]).length(),a=fr.set(r[4],r[5],r[6]).length(),l=fr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Mn.copy(this);let c=1/o,u=1/a,h=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,e.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=En,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===En)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===cs)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=En,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===En)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===cs)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ba.prototype.isMatrix4=!0;var we=ba,fr=new G,Mn=new we,f0=new G(0,0,0),d0=new G(1,1,1),fi=new G,uo=new G,an=new G,dh=new we,ph=new zn,bi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},p0=0,mh=new G,dr=new zn,Yn=new we,ho=new G,ts=new G,m0=new G,g0=new zn,gh=new G(1,0,0),xh=new G(0,1,0),bh=new G(0,0,1),_h={type:"added"},x0={type:"removed"},pr={type:"childadded",child:null},Xl={type:"childremoved",child:null},on=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new bi,n=new zn,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Gt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ts,ho,this.up):Yn.lookAt(ho,ts,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(Yn),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_h),pr.child=t,this.dispatchEvent(pr),pr.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x0),Xl.child=t,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_h),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,m0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,g0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new G(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},b0={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},fo={h:0,s:0,l:0};function ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var st=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=l0(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ql(o,s,t+1/3),this.g=ql(o,s,t),this.b=ql(o,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ee.workingToColorSpace($e.copy(this),t),Math.round(ne($e.r*255,0,255))*65536+Math.round(ne($e.g*255,0,255))*256+Math.round(ne($e.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace($e.copy(this),e);let n=$e.r,r=$e.g,s=$e.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ce){ee.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,r=$e.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(fo);let n=kl(di.h,fo.h,e),r=kl(di.s,fo.s,e),s=kl(di.l,fo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new st;st.NAMES=Tf;var hs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qi=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sn=new G,$n=new G,Yl=new G,Zn=new G,mr=new G,gr=new G,vh=new G,$l=new G,Zl=new G,Jl=new G,Kl=new Ae,Ql=new Ae,jl=new Ae,xi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sn.subVectors(t,e),r.cross(Sn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Sn.subVectors(r,e),$n.subVectors(n,e),Yl.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot($n),l=Sn.dot(Yl),c=$n.dot($n),u=$n.dot(Yl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Kl.setScalar(0),Ql.setScalar(0),jl.setScalar(0),Kl.fromBufferAttribute(t,e),Ql.fromBufferAttribute(t,n),jl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Kl,s.x),o.addScaledVector(Ql,s.y),o.addScaledVector(jl,s.z),o}static isFrontFacing(t,e,n,r){return Sn.subVectors(n,e),$n.subVectors(t,e),Sn.cross($n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Sn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;mr.subVectors(r,n),gr.subVectors(s,n),$l.subVectors(t,n);let l=mr.dot($l),c=gr.dot($l);if(l<=0&&c<=0)return e.copy(n);Zl.subVectors(t,r);let u=mr.dot(Zl),h=gr.dot(Zl);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(mr,o);Jl.subVectors(t,s);let d=mr.dot(Jl),m=gr.dot(Jl);if(m>=0&&d<=m)return e.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(gr,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return vh.subVectors(s,r),a=(h-u)/(h-u+(d-m)),e.copy(r).addScaledVector(vh,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(mr,o).addScaledVector(gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},je=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),mo.subVectors(this.max,es),xr.subVectors(t.a,es),br.subVectors(t.b,es),_r.subVectors(t.c,es),pi.subVectors(br,xr),mi.subVectors(_r,br),ki.subVectors(xr,_r);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-ki.z,ki.y,pi.z,0,-pi.x,mi.z,0,-mi.x,ki.z,0,-ki.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-ki.y,ki.x,0];return!tc(e,xr,br,_r,mo)||(e=[1,0,0,0,1,0,0,0,1],!tc(e,xr,br,_r,mo))?!1:(go.crossVectors(pi,mi),e=[go.x,go.y,go.z],tc(e,xr,br,_r,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new G,new G,new G,new G,new G,new G,new G,new G],wn=new G,po=new je,xr=new G,br=new G,_r=new G,pi=new G,mi=new G,ki=new G,es=new G,mo=new G,go=new G,Vi=new G;function tc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Vi.fromArray(i,s);let a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Le=new G,xo=new Jt,_0=0,gn=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vf,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fs=class extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yi=class extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},v0=new je,ns=new G,ec=new G,_i=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):v0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ns,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ec)),this.expandByPoint(ns.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},y0=0,mn=new we,nc=new on,vr=new G,ln=new je,is=new je,ze=new G,Kt=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(o0(t)?Yi:fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new je);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];is.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,is.min),ln.expandByPoint(ze),ze.addVectors(ln.max,is.max),ln.expandByPoint(ze)):(ln.expandByPoint(is.min),ln.expandByPoint(is.max))}ln.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(t,c),ze.add(vr)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new G,l[b]=new G;let c=new G,u=new G,h=new G,f=new Jt,d=new Jt,m=new Jt,x=new G,g=new G;function p(b,w,R){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),f.fromBufferAttribute(s,b),d.fromBufferAttribute(s,w),m.fromBufferAttribute(s,R),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[b].add(x),a[w].add(x),a[R].add(x),l[b].add(g),l[w].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,w=_.length;b<w;++b){let R=_[b],P=R.start,L=R.count;for(let I=P,E=P+L;I<E;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new G,v=new G,M=new G,T=new G;function A(b){M.fromBufferAttribute(r,b),T.copy(M);let w=a[b];S.copy(w),S.sub(M.multiplyScalar(M.dot(w))).normalize(),v.crossVectors(T,w);let P=v.dot(l[b])<0?-1:1;o.setXYZW(b,S.x,S.y,S.z,P)}for(let b=0,w=_.length;b<w;++b){let R=_[b],P=R.start,L=R.count;for(let I=P,E=P+L;I<E;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new gn(f,u,h)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ic=new G,M0=new G,S0=new Gt,Tn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=ic.subVectors(n,e).cross(M0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(ic),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||S0.getNormalMatrix(t),r=this.coplanarPoint(ic).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},w0=0,jn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Ai,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=Mc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new st().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Kn=new G,rc=new G,bo=new G,_o=new G,$i=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){rc.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),_o.copy(this.origin).sub(rc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=_o.dot(this.direction),l=-_o.dot(bo),c=_o.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(rc).addScaledVector(bo,f),d}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),r=Kn.dot(Kn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,_=n.y-o.y,S=n.z-o.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(u),A,b,w,R,P,L,I,E,D,U,N,z;if(v>=M&&v>=T?(w=l,L=h,D=m,z=p,l>=0?(A=c,b=u,R=f,P=d,I=x,E=g,U=_,N=S):(A=u,b=c,R=d,P=f,I=g,E=x,U=S,N=_)):M>=T?(w=c,L=f,D=x,z=_,c>=0?(A=u,b=l,R=d,P=h,I=g,E=m,U=S,N=p):(A=l,b=u,R=h,P=d,I=m,E=g,U=p,N=S)):(w=u,L=d,D=g,z=S,u>=0?(A=l,b=c,R=h,P=f,I=m,E=x,U=p,N=_):(A=c,b=l,R=f,P=h,I=x,E=m,U=_,N=p)),w===0)return null;let B=A/w,k=b/w,V=1/w,nt=R-B*L,$=P-k*L,ot=I-B*D,j=E-k*D,ut=U-B*z,W=N-k*z,Z=ut*j-W*ot,ct=nt*W-$*ut,dt=ot*$-j*nt;if(r){if(Z<0||ct<0||dt<0)return null}else if((Z<0||ct<0||dt<0)&&(Z>0||ct>0||dt>0))return null;let ft=Z+ct+dt;if(ft===0)return null;let At=V*(Z*L+ct*D+dt*z);return(ft>0?At<0:At>0)?null:this.at(At/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yh=new we,Gi=new $i,vo=new _i,Mh=new G,yo=new G,Mo=new G,So=new G,sc=new G,wo=new G,Sh=new G,To=new G,Wt=class extends on{constructor(t=new Kt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(sc.fromBufferAttribute(h,t),o?wo.addScaledVector(sc,u):wo.addScaledVector(sc.sub(e),u))}e.add(wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),Gi.copy(t.ray).recast(t.near),!(vo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(vo,Mh)===null||Gi.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(yh.copy(s).invert(),Gi.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=S;v<M;v+=3){let T=a.getX(v),A=a.getX(v+1),b=a.getX(v+2);r=Eo(this,p,t,n,c,u,h,T,A,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);r=Eo(this,o,t,n,c,u,h,_,S,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=S;v<M;v+=3){let T=v,A=v+1,b=v+2;r=Eo(this,p,t,n,c,u,h,T,A,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,S=g+1,v=g+2;r=Eo(this,o,t,n,c,u,h,_,S,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function T0(i,t,e,n,r,s,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Ei,a),l===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:i}}function Eo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,yo),i.getVertexPosition(l,Mo),i.getVertexPosition(c,So);let u=T0(i,t,e,n,yo,Mo,So,Sh);if(u){let h=new G;xi.getBarycoord(Sh,yo,Mo,So,h),r&&(u.uv=xi.getInterpolatedAttribute(r,a,l,c,h,new Jt)),s&&(u.uv1=xi.getInterpolatedAttribute(s,a,l,c,h,new Jt)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};xi.getNormal(yo,Mo,So,f.normal),u.face=f,u.barycoord=h}return u}var Qo=class extends Ke{constructor(t=null,e=1,n=1,r,s,o,a,l,c=ke,u=ke,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=new _i,E0=new Jt(.5,.5),Ao=new G,ds=class{constructor(t=new Tn,e=new Tn,n=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],_=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-m,M-_).normalize(),r[1].setComponents(c+o,d+u,p+m,M+_).normalize(),r[2].setComponents(c+a,d+h,p+x,M+S).normalize(),r[3].setComponents(c-a,d-h,p-x,M-S).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),e===En)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(e===cs)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=E0.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ao.x=r.normal.x>0?t.max.x:t.min.x,Ao.y=r.normal.y>0?t.max.y:t.min.y,Ao.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xn=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jo=new G,ta=new G,wh=new we,rs=new $i,Ro=new _i,oc=new G,Th=new G,ea=class extends on{constructor(t=new Kt,e=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)jo.fromBufferAttribute(e,r-1),ta.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=jo.distanceTo(ta);t.setAttribute("lineDistance",new Vt(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,t.ray.intersectsSphere(Ro)===!1)return;wh.copy(r).invert(),rs.copy(t.ray).applyMatrix4(wh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),_=u.getX(x+1),S=Co(this,t,rs,l,p,_,x);S&&e.push(S)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=Co(this,t,rs,l,x,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Co(this,t,rs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Co(this,t,rs,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Co(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(jo.fromBufferAttribute(a,r),ta.fromBufferAttribute(a,s),e.distanceSqToSegment(jo,ta,oc,Th)>n)return;oc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oc);if(!(c<t.near||c>t.far))return{distance:c,point:Th.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Eh=new G,Ah=new G,bn=class extends ea{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Eh.fromBufferAttribute(e,r),Ah.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Eh.distanceTo(Ah);t.setAttribute("lineDistance",new Vt(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zi=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rh=new we,fc=new $i,Io=new _i,Po=new G,Lr=class extends on{constructor(t=new Kt,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,t.ray.intersectsSphere(Io)===!1)return;Rh.copy(r).invert(),fc.copy(t.ray).applyMatrix4(Rh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Po.fromBufferAttribute(h,g),Ch(Po,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Po.fromBufferAttribute(h,m),Ch(Po,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ch(i,t,e,n,r,s,o){let a=fc.distanceSqToPoint(i);if(a<e){let l=new G;fc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ps=class extends Ke{constructor(t=[],e=Ri,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vi=class extends Ke{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends Ke{constructor(t,e,n=Rn,r,s,o,a=ke,l=ke,c,u=On,h=1){if(u!==On&&u!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},na=class extends yi{constructor(t,e=Rn,n=Ri,r,s,o=ke,a=ke,l,c=On){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ms=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fr=class i extends Kt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,r,o,2),m("x","z","y",1,-1,t,n,-e,r,o,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(h,2));function m(x,g,p,_,S,v,M,T,A,b,w){let R=v/A,P=M/b,L=v/2,I=M/2,E=T/2,D=A+1,U=b+1,N=0,z=0,B=new G;for(let k=0;k<U;k++){let V=k*P-I;for(let nt=0;nt<D;nt++){let $=nt*R-L;B[x]=$*_,B[g]=V*S,B[p]=E,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=T>0?1:-1,u.push(B.x,B.y,B.z),h.push(nt/A),h.push(1-k/b),N+=1}}for(let k=0;k<b;k++)for(let V=0;V<A;V++){let nt=f+V+D*k,$=f+V+D*(k+1),ot=f+(V+1)+D*(k+1),j=f+(V+1)+D*k;l.push(nt,$,j),l.push($,ot,j),z+=6}a.addGroup(d,z,w),d+=z,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var gs=class i extends Kt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new G,u=new Jt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function A0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Ef(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=L0(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<r;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return xs(s,o,e,a,l,c,0),o}function Ef(i,t,e,n,r){let s;if(r===H0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Ih(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Ih(o/n|0,i[o],i[o+1],s);return s&&Dr(s,s.next)&&(_s(s),s=s.next),s}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dr(e,e.next)||Ee(e.prev,e,e.next)===0)){if(_s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&O0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?C0(i,n,r,s):R0(i)){t.push(l.i,i.i,c.i),_s(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=I0(Ji(i),t),xs(i,t,e,n,r,s,2)):o===2&&P0(i,t,e,n,r,s):xs(Ji(i),t,e,n,r,s,1);break}}}function R0(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&ss(r,a,s,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function C0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ee(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),p=dc(d,m,t,e,n),_=dc(x,g,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=_;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&ss(a,u,l,h,c,f,S.x,S.y)&&Ee(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&ss(a,u,l,h,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&ss(a,u,l,h,c,f,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&ss(a,u,l,h,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function I0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Dr(n,r)&&Rf(n,e,e.next,r)&&bs(n,r)&&bs(r,n)&&(t.push(n.i,e.i,r.i),_s(e),_s(e.next),e=i=r),e=e.next}while(e!==i);return Ji(e)}function P0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k0(o,a)){let l=Cf(o,a);o=Ji(o,o.next),l=Ji(l,l.next),xs(o,t,e,n,r,s,0),xs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function L0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Ef(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(z0(c))}r.sort(F0);for(let s=0;s<r.length;s++)e=D0(r[s],e);return e}function F0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function D0(i,t){let e=N0(i,t);if(!e)return t;let n=Cf(e,i);return Ji(n,n.next),Ji(e,e.next)}function N0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Dr(i,e))return e;do{if(Dr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Af(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);bs(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&U0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function U0(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function O0(i,t,e,n){let r=i;do r.z===0&&(r.z=dc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,B0(r)}function B0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function dc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function z0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Af(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function ss(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Af(i,t,e,n,r,s,o,a)}function k0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!V0(i,t)&&(bs(i,t)&&bs(t,i)&&G0(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Dr(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dr(i,t){return i.x===t.x&&i.y===t.y}function Rf(i,t,e,n){let r=Fo(Ee(i,t,e)),s=Fo(Ee(i,t,n)),o=Fo(Ee(e,n,i)),a=Fo(Ee(e,n,t));return!!(r!==s&&o!==a||r===0&&Lo(i,e,t)||s===0&&Lo(i,n,t)||o===0&&Lo(e,i,n)||a===0&&Lo(e,t,n))}function Lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fo(i){return i>0?1:i<0?-1:0}function V0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function bs(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function G0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cf(i,t){let e=pc(i.i,i.x,i.y),n=pc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ih(i,t,e,n){let r=pc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function _s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function H0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var mc=class{static triangulate(t,e,n=2){return A0(t,e,n)}},vs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Ph(t),Lh(n,t);let o=t.length;e.forEach(Ph);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Lh(n,e[l]);let a=mc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Ph(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mi=class i extends Kt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let _=p*f-o;for(let S=0;S<c;S++){let v=S*h-s;m.push(v,-_,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let S=_+c*p,v=_+c*(p+1),M=_+1+c*(p+1),T=_+1+c*p;d.push(S,v,T),d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ys=class i extends Kt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new G,m=new Jt;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let x=0;x<r;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,S=_,v=_+n+1,M=_+n+2,T=_+1;a.push(S,v,T),a.push(v,M,T)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Fh(r))r.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Fh(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let r in n)t[r]=n[r]}return t}function Fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function W0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var If={clone:ji,merge:tn},X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=W0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new st().setHex(r.value);break;case"v2":this.uniforms[n].value=new Jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new we().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ia=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ra=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sa=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ac(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Si=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oa=class extends Si{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case uc:s=t,a=2*e-n;break;case hc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uc:o=t,l=2*n-e;break;case hc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,S=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+_*o[c+M]+S*o[l+M]+v*o[h+M];return s}},aa=class extends Si{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},la=class extends Si{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ca=class extends Si{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(r-e),x=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*m;return s}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,_=h[p],S=h[p+1],v=t*f+m*2,M=u[v],T=u[v+1],A=$0(n,e,_,M,r);s[m]=Pf(A,x,S,T,g)}return s}};function Pf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Y0(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function $0(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Pf(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Y0(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var hn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),ac(t.settings)&&(n.settings={inTangents:yr(t.settings.inTangents,Array),outTangents:yr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case os:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Uo:e=this.InterpolantFactoryMethodSmooth;break;case lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;ac(this.settings)&&(Dh(this.settings.inTangents,t),Dh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&a0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Uo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,ac(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Dh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Yo;var wi=class extends hn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=os;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};ua.prototype.ValueTypeName="color";var ha=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};ha.prototype.ValueTypeName="number";var fa=class extends Si{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)zn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ms=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends hn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=os;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};da.prototype.ValueTypeName="vector";var Bo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Nh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Nh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var pa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lf=new pa,Nr=class{constructor(t){this.manager=t!==void 0?t:Lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=new WeakMap,ma=class extends Nr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Bo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=Mr.get(o);h===void 0&&(h=[],Mr.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=Ar("img");function l(){u(),e&&e(this);let h=Mr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Mr.delete(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),Bo.remove(`image:${t}`);let f=Mr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}Mr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bo.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Ss=class extends Nr{constructor(t){super(t)}load(t,e,n,r){let s=new Ke,o=new ma(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Do=new G,No=new zn,Un=new G,ws=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Do,No,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Do,No,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new G,Uh=new Jt,Oh=new Jt,Ze=class extends ws{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Oh),e.subVectors(Oh,Uh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ti=class extends ws{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Sr=-90,wr=1,ga=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ze(Sr,wr,t,e);r.layers=this.layers,this.add(r);let s=new Ze(Sr,wr,t,e);s.layers=this.layers,this.add(s);let o=new Ze(Sr,wr,t,e);o.layers=this.layers,this.add(o);let a=new Ze(Sr,wr,t,e);a.layers=this.layers,this.add(a);let l=new Ze(Sr,wr,t,e);l.layers=this.layers,this.add(l);let c=new Ze(Sr,wr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xa=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wc="\\[\\]\\.:\\/",Z0=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",J0="[^"+Wc.replace("\\.","")+"]",K0=/((?:WC+[\/:])*)/.source.replace("WC",Xc),Q0=/(WCOD+)?/.source.replace("WCOD",J0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),em=new RegExp("^"+K0+Q0+j0+tm+"$"),nm=["material","materials","bones","map"],gc=class{constructor(t,e,n){let r=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(t){let e=em.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);nm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=gc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oM=new Float32Array(1);var Bh=new we,Ts=class{constructor(t,e,n=0,r=1/0){this.ray=new $i(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(t,e=!0,n=[]){return xc(t,this,n,e),n.sort(zh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)xc(t[r],this,n,e);return n.sort(zh),n}};function zh(i,t){return i.distance-t.distance}function xc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)xc(s[o],t,e,!0)}}var Kc=class Kc{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Kc.prototype.isMatrix2=!0;var bc=Kc;function qc(i,t,e,n){let r=im(n);switch(e){case Uc:return i*t;case Bc:return i*t/r.components*r.byteLength;case Ta:return i*t/r.components*r.byteLength;case Pi:return i*t*2/r.components*r.byteLength;case Ea:return i*t*2/r.components*r.byteLength;case Oc:return i*t*3/r.components*r.byteLength;case _n:return i*t*4/r.components*r.byteLength;case Aa:return i*t*4/r.components*r.byteLength;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Ia:return Math.max(i,8)*Math.max(t,8)/2;case La:case Fa:case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Ds:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case ja:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ns:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(i){switch(i){case fn:case Lc:return{byteLength:1,components:1};case Or:case Fc:case In:return{byteLength:2,components:1};case Sa:case wa:return{byteLength:2,components:4};case Rn:case Ma:case Cn:return{byteLength:4,components:1};case Dc:case Nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function td(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function sm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ig=`PhysicalMaterial material;
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
#endif`,rg=`uniform sampler2D dfgLUT;
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
}`,sg=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xg=`float getShadowMask() {
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
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,px=`#define DISTANCE
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
}`,mx=`#define DISTANCE
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Ax=`#define NORMAL
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
}`,Rx=`#define PHONG
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
}`,Cx=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Px=`#define STANDARD
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
}`,Lx=`#define TOON
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
}`,Fx=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:om,alphahash_pars_fragment:am,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:um,alphatest_pars_fragment:hm,aomap_fragment:fm,aomap_pars_fragment:dm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:xm,bsdfs:bm,iridescence_fragment:_m,bumpmap_pars_fragment:vm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:wm,color_fragment:Tm,color_pars_fragment:Em,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Fm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Om,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:km,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:Qm,envmap_vertex:Gm,fog_vertex:Hm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:$m,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Jm,lights_pars_begin:Km,lights_toon_fragment:jm,lights_toon_pars_fragment:tg,lights_phong_fragment:eg,lights_phong_pars_fragment:ng,lights_physical_fragment:ig,lights_physical_pars_fragment:rg,lights_fragment_begin:sg,lights_fragment_maps:og,lights_fragment_end:ag,lightprobes_pars_fragment:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:bg,morphinstance_vertex:_g,morphcolor_vertex:vg,morphnormal_vertex:yg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Sg,normal_fragment_begin:wg,normal_fragment_maps:Tg,normal_pars_fragment:Eg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Pg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Fg,opaque_fragment:Dg,packing:Ng,premultiplied_alpha_fragment:Ug,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:$g,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:Kg,tonemapping_fragment:Qg,tonemapping_pars_fragment:jg,transmission_fragment:tx,transmission_pars_fragment:ex,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:rx,worldpos_vertex:sx,background_vert:ox,background_frag:ax,backgroundCube_vert:lx,backgroundCube_frag:cx,cube_vert:ux,cube_frag:hx,depth_vert:fx,depth_frag:dx,distance_vert:px,distance_frag:mx,equirect_vert:gx,equirect_frag:xx,linedashed_vert:bx,linedashed_frag:_x,meshbasic_vert:vx,meshbasic_frag:yx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:wx,meshmatcap_frag:Tx,meshnormal_vert:Ex,meshnormal_frag:Ax,meshphong_vert:Rx,meshphong_frag:Cx,meshphysical_vert:Ix,meshphysical_frag:Px,meshtoon_vert:Lx,meshtoon_frag:Fx,points_vert:Dx,points_frag:Nx,shadow_vert:Ux,shadow_frag:Ox,sprite_vert:Bx,sprite_frag:zx},St={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Gn={basic:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:tn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:tn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new st(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:tn([St.points,St.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:tn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:tn([St.common,St.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:tn([St.sprite,St.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:tn([St.common,St.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:tn([St.lights,St.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Gn.physical={uniforms:tn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var ol={r:0,b:0,g:0},kx=new we,ed=new Gt;ed.set(-1,0,0,0,1,0,0,0,1);function Vx(i,t,e,n,r,s){let o=new st(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=t.get(S,v)}return S}function m(_){let S=!1,v=d(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,S){let v=d(S);v&&(v.isCubeTexture||v.mapping===Rs)?(c===void 0&&(c=new Wt(new Fr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ji(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ed),c.material.toneMapped=ee.getTransfer(v.colorSpace)!==de,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Wt(new Mi(2,2),new un({name:"BackgroundMaterial",uniforms:ji(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(ol,Hc(i)),e.buffers.color.setClear(ol.r,ol.g,ol.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Gx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(P,L,I,E,D){let U=!1,N=h(P,E,I,L);s!==N&&(s=N,c(s.object)),U=d(P,E,I,D),U&&m(P,E,I,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(P,L,I,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,L,I,E){let D=E.wireframe===!0,U=n[L.id];U===void 0&&(U={},n[L.id]=U);let N=P.isInstancedMesh===!0?P.id:0,z=U[N];z===void 0&&(z={},U[N]=z);let B=z[I.id];B===void 0&&(B={},z[I.id]=B);let k=B[D];return k===void 0&&(k=f(l()),B[D]=k),k}function f(P){let L=[],I=[],E=[];for(let D=0;D<e;D++)L[D]=0,I[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:E,object:P,attributes:{},index:null}}function d(P,L,I,E){let D=s.attributes,U=L.attributes,N=0,z=I.getAttributes();for(let B in z)if(z[B].location>=0){let V=D[B],nt=U[B];if(nt===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),V===void 0||V.attribute!==nt||nt&&V.data!==nt.data)return!0;N++}return s.attributesNum!==N||s.index!==E}function m(P,L,I,E){let D={},U=L.attributes,N=0,z=I.getAttributes();for(let B in z)if(z[B].location>=0){let V=U[B];V===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));let nt={};nt.attribute=V,V&&V.data&&(nt.data=V.data),D[B]=nt,N++}s.attributes=D,s.attributesNum=N,s.index=E}function x(){let P=s.newAttributes;for(let L=0,I=P.length;L<I;L++)P[L]=0}function g(P){p(P,0)}function p(P,L){let I=s.newAttributes,E=s.enabledAttributes,D=s.attributeDivisors;I[P]=1,E[P]===0&&(i.enableVertexAttribArray(P),E[P]=1),D[P]!==L&&(i.vertexAttribDivisor(P,L),D[P]=L)}function _(){let P=s.newAttributes,L=s.enabledAttributes;for(let I=0,E=L.length;I<E;I++)L[I]!==P[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function S(P,L,I,E,D,U,N){N===!0?i.vertexAttribIPointer(P,L,I,D,U):i.vertexAttribPointer(P,L,I,E,D,U)}function v(P,L,I,E){x();let D=E.attributes,U=I.getAttributes(),N=L.defaultAttributeValues;for(let z in U){let B=U[z];if(B.location>=0){let k=D[z];if(k===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let V=k.normalized,nt=k.itemSize,$=t.get(k);if($===void 0)continue;let ot=$.buffer,j=$.type,ut=$.bytesPerElement,W=j===i.INT||j===i.UNSIGNED_INT||k.gpuType===Ma;if(k.isInterleavedBufferAttribute){let Z=k.data,ct=Z.stride,dt=k.offset;if(Z.isInstancedInterleavedBuffer){for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft,Z.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ft=0;ft<B.locationSize;ft++)g(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ft=0;ft<B.locationSize;ft++)S(B.location+ft,nt/B.locationSize,j,V,ct*ut,(dt+nt/B.locationSize*ft)*ut,W)}else{if(k.isInstancedBufferAttribute){for(let Z=0;Z<B.locationSize;Z++)p(B.location+Z,k.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Z=0;Z<B.locationSize;Z++)g(B.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Z=0;Z<B.locationSize;Z++)S(B.location+Z,nt/B.locationSize,j,V,nt*ut,nt/B.locationSize*Z*ut,W)}}else if(N!==void 0){let V=N[z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(B.location,V);break;case 3:i.vertexAttrib3fv(B.location,V);break;case 4:i.vertexAttrib4fv(B.location,V);break;default:i.vertexAttrib1fv(B.location,V)}}}}_()}function M(){w();for(let P in n){let L=n[P];for(let I in L){let E=L[I];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let I in L){let E=L[I];for(let D in E){let U=E[D];for(let N in U)u(U[N].object),delete U[N];delete E[D]}}delete n[P.id]}function A(P){for(let L in n){let I=n[L];for(let E in I){let D=I[E];if(D[P.id]===void 0)continue;let U=D[P.id];for(let N in U)u(U[N].object),delete U[N];delete D[P.id]}}}function b(P){for(let L in n){let I=n[L],E=P.isInstancedMesh===!0?P.id:0,D=I[E];if(D!==void 0){for(let U in D){let N=D[U];for(let z in N)u(N[z].object),delete N[z];delete D[U]}delete I[E],Object.keys(I).length===0&&delete n[L]}}}function w(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Hx(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Wx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==fn&&A!==Cn&&!b&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:T}}function Xx(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Tn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let _=s?0:n,S=_*4,v=p.clippingState||null;l.value=v,v=u(m,f,S,d);for(let M=0;M!==S;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(h[S]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var kr=4,qx=6,Yx=20,$x=256,Os=new ti,Ff=new st,Qc=null,jc=0,tu=0,eu=!1,Zx=new G,tr=new G,ll=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Zx}=s;Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qc,jc,tu),this._renderer.xr.enabled=eu,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:In,format:_n,colorSpace:as,depthBuffer:!1},r=Df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jx(s)),this._blurMaterial=Qx(s,t,e),this._ggxMaterial=Kx(s,t,e)}return r}_compileMaterial(t){let e=new Wt(new Kt,t);this._renderer.compile(e,Os)}_sceneToCubeUV(t,e,n,r,s){let l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ff),h.toneMapping=An,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Fr,new le({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,p=!0):(g.color.copy(Ff),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));let M=this._cubeSize;zr(r,v*M,S>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ri||t.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Os)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-kr?n-m+kr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,zr(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Os),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,zr(t,g,p,3*x,2*x),r.setRenderTarget(t),r.render(a,Os)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-kr?r-this._lodMax+kr:0),f=4*(this._cubeSize-u);zr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Os)}};function Jx(i){let t=[],e=[],n=i,r=i-kr+1+qx;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let _=p%3*2/3-1,S=p>2?0:-1,v=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let T=u[M*2]*2-1,A=u[M*2+1]*2-1;p===0?tr.set(1,A,T):p===1?tr.set(-T,1,-A):p===2?tr.set(-T,A,1):p===3?tr.set(-1,A,-T):p===4?tr.set(-T,-1,A):tr.set(T,A,-1),tr.toArray(x,(p*f+M)*d)}}let g=new Kt;g.setAttribute("position",new gn(m,d)),g.setAttribute("outputDirection",new gn(x,d)),e.push(new Wt(g,null)),n>kr&&n--}return{lodMeshes:e,sizeLods:t}}function Df(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Kx(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qx(i,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Nf(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Uf(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var cl=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ps(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:kn});s.uniforms.tEquirect.value=e;let o=new Wt(r,s),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Ge),new ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function jx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===_a||d===va)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new cl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===_a||d===va,x=d===Ri||d===Qi;if(m||x){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ll(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new ll(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===_a?f.mapping=Ri:d===va&&(f.mapping=Qi),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function tb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Wi("WebGLRenderer: "+n+" extension not supported."),r}}}function eb(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let S=0,v=_.length;S<v;S+=3){let M=_[S+0],T=_[S+1],A=_[S+2];f.push(M,T,T,A,A,M)}}else{let _=m.array;x=m.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let M=S+0,T=S+1,A=S+2;f.push(M,T,T,A,A,M)}}let g=new(m.count>=65535?Yi:fs)(f,1);g.version=x;let p=s.get(h);p&&t.remove(p),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function nb(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ib(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function rb(i,t,e){let n=new WeakMap,r=new Ae;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*M*4*h),A=new us(T,v,M,h);A.type=Cn,A.needsUpdate=!0;let b=S*4;for(let R=0;R<h;R++){let P=g[R],L=p[R],I=_[R],E=v*M*4*R;for(let D=0;D<P.count;D++){let U=D*b;d===!0&&(r.fromBufferAttribute(P,D),T[E+U+0]=r.x,T[E+U+1]=r.y,T[E+U+2]=r.z,T[E+U+3]=0),m===!0&&(r.fromBufferAttribute(L,D),T[E+U+4]=r.x,T[E+U+5]=r.y,T[E+U+6]=r.z,T[E+U+7]=0),x===!0&&(r.fromBufferAttribute(I,D),T[E+U+8]=r.x,T[E+U+9]=r.y,T[E+U+10]=r.z,T[E+U+11]=I.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new Jt(v,M)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function sb(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var ob={[wc]:"LINEAR_TONE_MAPPING",[Tc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[Ac]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Ic]:"NEUTRAL_TONE_MAPPING",[Rc]:"CUSTOM_TONE_MAPPING"};function ab(i,t,e,n,r,s){let o=new Qe(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Kt;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let u=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Wt(c,u),f=new ti(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,_=[],S=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let T=0;T<_.length;T++){let A=_[T];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){_=v,S=_.length>0&&_[0].isRenderPass===!0;let M=o.width,T=o.height;_.length>0&&a===null&&(a=new Qe(M,T,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(M,T,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let b=_[A];b.setSize&&b.setSize(M,T)}},this.begin=function(v,M){if(x||v.toneMapping===An&&_.length===0)return!1;if(p=M,M!==null){let T=M.width,A=M.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return S===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=An,!0},this.hasRenderPass=function(){return S},this.end=function(v,M){v.toneMapping=g,x=!0;let T=o,A=a;for(let b=0;b<_.length;b++){let w=_[b];w.enabled!==!1&&(w.render(v,A,T,M),w.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,u.defines={},ee.getTransfer(d)===de&&(u.defines.SRGB_TRANSFER="");let b=ob[m];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var nd=new Ke,ru=new yi(1,1),id=new us,rd=new Ko,sd=new ps,Of=[],Bf=[],zf=new Float32Array(16),kf=new Float32Array(9),Vf=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Of[r];if(s===void 0&&(s=new Float32Array(r),Of[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hl(i,t){let e=Bf[t];e===void 0&&(e=new Int32Array(t),Bf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function ub(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function hb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function fb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Vf.set(n),i.uniformMatrix2fv(this.addr,!1,Vf),Ue(e,n)}}function db(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;kf.set(n),i.uniformMatrix3fv(this.addr,!1,kf),Ue(e,n)}}function pb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;zf.set(n),i.uniformMatrix4fv(this.addr,!1,zf),Ue(e,n)}}function mb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function bb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function _b(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function yb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Mb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Sb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=e.isReversedDepthBuffer()?sl:rl,s=ru):s=nd,e.setTexture2D(t||s,r)}function wb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rd,r)}function Tb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sd,r)}function Eb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||id,r)}function Ab(i){switch(i){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return hb;case 35674:return fb;case 35675:return db;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return xb;case 35669:case 35673:return bb;case 5125:return _b;case 36294:return vb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Rb(i,t){i.uniform1fv(this.addr,t)}function Cb(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ib(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function Pb(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Lb(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fb(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Db(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nb(i,t){i.uniform1iv(this.addr,t)}function Ub(i,t){i.uniform2iv(this.addr,t)}function Ob(i,t){i.uniform3iv(this.addr,t)}function Bb(i,t){i.uniform4iv(this.addr,t)}function zb(i,t){i.uniform1uiv(this.addr,t)}function kb(i,t){i.uniform2uiv(this.addr,t)}function Vb(i,t){i.uniform3uiv(this.addr,t)}function Gb(i,t){i.uniform4uiv(this.addr,t)}function Hb(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ru:o=nd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Wb(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||rd,s[o])}function Xb(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||sd,s[o])}function qb(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||id,s[o])}function Yb(i){switch(i){case 5126:return Rb;case 35664:return Cb;case 35665:return Ib;case 35666:return Pb;case 35674:return Lb;case 35675:return Fb;case 35676:return Db;case 5124:case 35670:return Nb;case 35667:case 35671:return Ub;case 35668:case 35672:return Ob;case 35669:case 35673:return Bb;case 5125:return zb;case 36294:return kb;case 36295:return Vb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return qb}}var su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ab(e.type)}},ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yb(e.type)}},au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function Gf(i,t){i.seq.push(t),i.map[t.id]=t}function $b(i,t,e){let n=i.name,r=n.length;for(nu.lastIndex=0;;){let s=nu.exec(n),o=nu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gf(e,c===void 0?new su(a,i,t):new ou(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new au(a),Gf(e,h)),e=h}}}var Vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$b(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Hf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Zb=37297,Jb=0;function Kb(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Wf=new Gt;function Qb(i){ee._getMatrix(Wf,ee.workingColorSpace,i);let t=`mat3( ${Wf.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case ls:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Kb(i.getShaderSource(t),a)}else return s}function jb(i,t){let e=Qb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var t_={[wc]:"Linear",[Tc]:"Reinhard",[Ec]:"Cineon",[Ac]:"ACESFilmic",[Cc]:"AgX",[Ic]:"Neutral",[Rc]:"Custom"};function e_(i,t){let e=t_[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var al=new G;function n_(){ee.getLuminanceCoefficients(al);let i=al.x.toFixed(4),t=al.y.toFixed(4),e=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function r_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function qf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(o_,l_)}var a_=new Map;function l_(i,t){let e=$t[t];if(e===void 0){let n=a_.get(t);if(n!==void 0)e=$t[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lu(e)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(i){return i.replace(c_,u_)}function u_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var h_={[Es]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function f_(i){return h_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d_={[Ri]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE_UV"};function p_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":d_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var m_={[Qi]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x_={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[lf]:"ENVMAP_BLENDING_MIX",[cf]:"ENVMAP_BLENDING_ADD"};function b_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function __(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=f_(e),c=p_(e),u=g_(e),h=b_(e),f=__(e),d=i_(e),m=r_(s),x=r.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(g=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?$t.tonemapping_pars_fragment:"",e.toneMapping!==An?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,jb("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=lu(o),o=qf(o,e),o=Yf(o,e),a=lu(a),a=qf(a,e),a=Yf(a,e),o=$f(o),a=$f(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+g+o,v=_+p+a,M=Hf(r,r.VERTEX_SHADER,S),T=Hf(r,r.FRAGMENT_SHADER,v);r.attachShader(x,M),r.attachShader(x,T),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(x)||"",I=r.getShaderInfoLog(M)||"",E=r.getShaderInfoLog(T)||"",D=L.trim(),U=I.trim(),N=E.trim(),z=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,T);else{let k=Xf(r,M,"vertex"),V=Xf(r,T,"fragment");zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+k+`
`+V)}else D!==""?Bt("WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(B=!1);B&&(P.diagnostics={runnable:z,programLog:D,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(M),r.deleteShader(T),b=new Vr(r,x),w=s_(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(x,Zb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}var y_=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uu(t),e.set(t,n)),n}},uu=class{constructor(t){this.id=y_++,this.code=t,this.usedTimes=0}};function M_(i){return i===Pi||i===Ds||i===Ns}function S_(i,t,e,n,r,s){let o=new Ir,a=new cu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,w,R,P,L,I){let E=P.fog,D=L.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z=t.get(b.envMap||U,N),B=z&&z.mapping===Rs?z.image.height:null,k=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Bt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=V!==void 0?V.length:0,$=0;D.morphAttributes.position!==void 0&&($=1),D.morphAttributes.normal!==void 0&&($=2),D.morphAttributes.color!==void 0&&($=3);let ot,j,ut,W;if(k){let be=Gn[k];ot=be.vertexShader,j=be.fragmentShader}else{ot=b.vertexShader,j=b.fragmentShader;let be=a.getVertexShaderStage(b),he=a.getFragmentShaderStage(b);a.update(b,be,he),ut=be.id,W=he.id}let Z=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),dt=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,At=!!b.map,ie=!!b.matcap,kt=!!z,Zt=!!b.aoMap,re=!!b.lightMap,Qt=!!b.bumpMap&&b.wireframe===!1,Se=!!b.normalMap,Be=!!b.displacementMap,rn=!!b.emissiveMap,Te=!!b.metalnessMap,Ie=!!b.roughnessMap,q=b.anisotropy>0,Xe=b.clearcoat>0,pe=b.dispersion>0,O=b.retroreflectivity>0,C=b.iridescence>0,Y=b.sheen>0,tt=b.transmission>0,it=q&&!!b.anisotropyMap,gt=Xe&&!!b.clearcoatMap,xt=Xe&&!!b.clearcoatNormalMap,rt=Xe&&!!b.clearcoatRoughnessMap,lt=C&&!!b.iridescenceMap,bt=C&&!!b.iridescenceThicknessMap,Dt=Y&&!!b.sheenColorMap,Mt=Y&&!!b.sheenRoughnessMap,_t=!!b.specularMap,Nt=!!b.specularColorMap,Ot=!!b.specularIntensityMap,Xt=tt&&!!b.transmissionMap,X=tt&&!!b.thicknessMap,vt=!!b.gradientMap,at=!!b.alphaMap,yt=b.alphaTest>0,Et=!!b.alphaHash,ht=!!b.extensions,Ut=An;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let Lt={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:ot,fragmentShader:j,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:W,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:dt,instancingColor:dt&&L.instanceColor!==null,instancingMorph:dt&&L.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:ie,envMap:kt,envMapMode:kt&&z.mapping,envMapCubeUVHeight:B,aoMap:Zt,lightMap:re,bumpMap:Qt,normalMap:Se,displacementMap:Be,emissiveMap:rn,normalMapObjectSpace:Se&&b.normalMapType===ff,normalMapTangentSpace:Se&&b.normalMapType===zc,packedNormalMap:Se&&b.normalMapType===zc&&M_(b.normalMap.format),metalnessMap:Te,roughnessMap:Ie,anisotropy:q,anisotropyMap:it,clearcoat:Xe,clearcoatMap:gt,clearcoatNormalMap:xt,clearcoatRoughnessMap:rt,dispersion:pe,retroreflection:O,iridescence:C,iridescenceMap:lt,iridescenceThicknessMap:bt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:_t,specularColorMap:Nt,specularIntensityMap:Ot,transmission:tt,transmissionMap:Xt,thicknessMap:X,gradientMap:vt,opaque:b.transparent===!1&&b.blending===Ai&&b.alphaToCoverage===!1,alphaMap:at,alphaTest:yt,alphaHash:Et,combine:b.combine,mapUv:At&&m(b.map.channel),aoMapUv:Zt&&m(b.aoMap.channel),lightMapUv:re&&m(b.lightMap.channel),bumpMapUv:Qt&&m(b.bumpMap.channel),normalMapUv:Se&&m(b.normalMap.channel),displacementMapUv:Be&&m(b.displacementMap.channel),emissiveMapUv:rn&&m(b.emissiveMap.channel),metalnessMapUv:Te&&m(b.metalnessMap.channel),roughnessMapUv:Ie&&m(b.roughnessMap.channel),anisotropyMapUv:it&&m(b.anisotropyMap.channel),clearcoatMapUv:gt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&m(b.sheenRoughnessMap.channel),specularMapUv:_t&&m(b.specularMap.channel),specularColorMapUv:Nt&&m(b.specularColorMap.channel),specularIntensityMapUv:Ot&&m(b.specularIntensityMap.channel),transmissionMapUv:Xt&&m(b.transmissionMap.channel),thicknessMapUv:X&&m(b.thicknessMap.channel),alphaMapUv:at&&m(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Se||q),vertexNormals:!!D.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(At||at),fog:!!E,useFog:b.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||D.attributes.normal===void 0&&Se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ct,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:$,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:rn&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Me,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)w.push(R),w.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(p(w,b),_(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function p(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numSunLights),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numSunLightShadows),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function S(b){let w=d[b.type],R;if(w){let P=Gn[w];R=If.clone(P.uniforms)}else R=b.uniforms;return R}function v(b,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new v_(i,w,b,r),c.push(R),u.set(w,R)),R}function M(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function T(b){a.remove(b)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function w_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function T_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Jf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kf(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=p),t++,_}function l(f,d,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let S=a(f,d,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?r.push(S):e.push(S)}function c(f,d,m,x,g,p){let _=a(f,d,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function u(f,d){e.length>1&&e.sort(f||T_),n.length>1&&n.sort(d||Jf),r.length>1&&r.sort(d||Jf)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function E_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Kf,i.set(n,[o])):r>=s.length?(o=new Kf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new st};break;case"SpotLight":e={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function R_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i){let t=new A_,e=R_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let r=new G,s=new we,o=new we;function a(c){let u=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,S=0,v=0,M=0,T=0,A=0,b=0,w=0,R=0;c.sort(I_);for(let L=0,I=c.length;L<I;L++){let E=c[L],D=E.color,U=E.intensity,N=E.distance,z=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Pi?z=E.shadow.map.texture:z=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=D.r*U,h+=D.g*U,f+=D.b*U;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],U);R++}else if(E.isSunLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=z;let nt=k.getViewportCount();for(let $=0;$<nt;$++)n.sunShadowMatrix[x+$]=k.getMatrix($),n.sunShadowCascade[x+$]=k._cascadeData[$];x+=nt,m++}n.sun[d]=B,d++}else if(E.isDirectionalLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=E.shadow.matrix,M++}n.directional[g]=B,g++}else if(E.isSpotLight){let B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(D).multiplyScalar(U),B.distance=N,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[_]=B;let k=E.shadow;if(E.map&&(n.spotLightMap[b]=E.map,b++,k.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=k.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=z,A++}_++}else if(E.isRectAreaLight){let B=t.get(E);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[S]=B,S++}else if(E.isPointLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){let k=E.shadow,V=e.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=E.shadow.matrix,T++}n.point[p]=B,p++}else if(E.isHemisphereLight){let B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(U),B.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[v]=B,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==S||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==M||P.numPointShadows!==T||P.numSpotShadows!==A||P.numSpotMaps!==b||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=_,P.rectAreaLength=S,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=M,P.numPointShadows=T,P.numSpotShadows=A,P.numSpotMaps=b,P.numLightProbes=R,n.version=C_++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Qf(i){let t=new P_(i),e=[],n=[],r=[];function s(f){h.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function L_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Qf(i),t.set(r,[a])):s>=o.length?(a=new Qf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`,N_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],U_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],jf=new we,Bs=new G,iu=new G;function O_(i,t,e){let n=new ds,r=new Jt,s=new Jt,o=new Ae,a=new ra,l=new sa,c={},u=e.maxTextureSize,h={[Ei]:nn,[nn]:Ei,[Me]:Me},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:F_,fragmentShader:D_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Kt;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Wt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let p=this.type;this.render=function(T,A,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Gh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Es);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(kn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==this.type;I&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=T.length;E<D;E++){let U=T[E],N=U.shadow;if(N===void 0){Bt("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let z=N.getFrameExtents();r.multiply(z),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,N.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=B,N.map===null||I===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Ur){if(U.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Qe(r.x,r.y,{format:Pi,type:In,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new yi(r.x,r.y,Cn),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=On,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke}else U.isPointLight?(N.map=new cl(r.x),N.map.depthTexture=new na(r.x,Rn)):(N.map=new Qe(r.x,r.y),N.map.depthTexture=new yi(r.x,r.y,Rn)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=On,this.type===Es?(N.map.depthTexture.compareFunction=B?sl:rl,N.map.depthTexture.minFilter=Ge,N.map.depthTexture.magFilter=Ge):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let k=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();U.isPointLight!==!0&&N.updateMatrices(U,b);for(let V=0;V<k;V++){let nt=N.getCamera(V);if(U.isPointLight){let $=N.camera,ot=N.matrix,j=U.distance||$.far;j!==$.far&&($.far=j,$.updateProjectionMatrix()),Bs.setFromMatrixPosition(U.matrixWorld),$.position.copy(Bs),iu.copy($.position),iu.add(N_[V]),$.up.copy(U_[V]),$.lookAt(iu),$.updateMatrixWorld(),ot.makeTranslation(-Bs.x,-Bs.y,-Bs.z),jf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),N._frustum.setFromProjectionMatrix(jf,$.coordinateSystem,$.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,V),i.clear();else{V===0&&(i.setRenderTarget(N.map),i.clear());let $=N.getViewport(V);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),L.viewport(o)}n=N.getFrustum(V),v(A,b,nt,U,this.type)}N.isPointLightShadow!==!0&&this.type===Ur&&_(N,b),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,R,P)};function _(T,A){let b=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qe(r.x,r.y,{format:Pi,type:In}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,b,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,b,d,x,null)}function S(T,A,b,w){let R=null,P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=b.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=R.uuid,I=A.uuid,E=c[L];E===void 0&&(E={},c[L]=E);let D=E[I];D===void 0&&(D=R.clone(),E[I]=D,A.addEventListener("dispose",M)),R=D}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Ur?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:h[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=b}return R}function v(T,A,b,w,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Ur)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let I=t.update(T),E=T.material;if(Array.isArray(E)){let D=I.groups;for(let U=0,N=D.length;U<N;U++){let z=D[U],B=E[z.materialIndex];if(B&&B.visible){let k=S(T,B,w,R);T.onBeforeShadow(i,T,A,b,I,k,z),i.renderBufferDirect(b,null,I,k,T,z),T.onAfterShadow(i,T,A,b,I,k,z)}}}else if(E.visible){let D=S(T,E,w,R);T.onBeforeShadow(i,T,A,b,I,D,null),i.renderBufferDirect(b,null,I,D,T,null),T.onAfterShadow(i,T,A,b,I,D,null)}}let L=T.children;for(let I=0,E=L.length;I<E;I++)v(L[I],A,b,w,R)}function M(T){T.target.removeEventListener("dispose",M);for(let b in c){let w=c[b],R=T.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function B_(i,t){function e(){let X=!1,vt=new Ae,at=null,yt=new Ae(0,0,0,0);return{setMask:function(Et){at!==Et&&!X&&(i.colorMask(Et,Et,Et,Et),at=Et)},setLocked:function(Et){X=Et},setClear:function(Et,ht,Ut,Lt,be){be===!0&&(Et*=Lt,ht*=Lt,Ut*=Lt),vt.set(Et,ht,Ut,Lt),yt.equals(vt)===!1&&(i.clearColor(Et,ht,Ut,Lt),yt.copy(vt))},reset:function(){X=!1,at=null,yt.set(-1,0,0,0)}}}function n(){let X=!1,vt=!1,at=null,yt=null,Et=null;return{setReversed:function(ht){if(vt!==ht){let Ut=t.get("EXT_clip_control");ht?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;let Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return vt},setTest:function(ht){ht?Z(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(ht){at!==ht&&!X&&(i.depthMask(ht),at=ht)},setFunc:function(ht){if(vt&&(ht=wf[ht]),yt!==ht){switch(ht){case zo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ht}},setLocked:function(ht){X=ht},setClear:function(ht){Et!==ht&&(Et=ht,vt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){X=!1,at=null,yt=null,Et=null,vt=!1}}}function r(){let X=!1,vt=null,at=null,yt=null,Et=null,ht=null,Ut=null,Lt=null,be=null;return{setTest:function(he){X||(he?Z(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(he){vt!==he&&!X&&(i.stencilMask(he),vt=he)},setFunc:function(he,yn,Dn){(at!==he||yt!==yn||Et!==Dn)&&(i.stencilFunc(he,yn,Dn),at=he,yt=yn,Et=Dn)},setOp:function(he,yn,Dn){(ht!==he||Ut!==yn||Lt!==Dn)&&(i.stencilOp(he,yn,Dn),ht=he,Ut=yn,Lt=Dn)},setLocked:function(he){X=he},setClear:function(he){be!==he&&(i.clearStencil(he),be=he)},reset:function(){X=!1,vt=null,at=null,yt=null,Et=null,ht=null,Ut=null,Lt=null,be=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,v=null,M=null,T=null,A=null,b=new st(0,0,0),w=0,R=!1,P=null,L=null,I=null,E=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,z=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=z>=2);let k=null,V={},nt=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ot=new Ae().fromArray(nt),j=new Ae().fromArray($);function ut(X,vt,at,yt){let Et=new Uint8Array(4),ht=i.createTexture();i.bindTexture(X,ht),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<at;Ut++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ht}let W={};W[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Er),Qt(!1),Se(_c),Z(i.CULL_FACE),Zt(kn);function Z(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function ct(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function dt(X,vt){return f[X]!==vt?(i.bindFramebuffer(X,vt),f[X]=vt,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ft(X,vt){let at=m,yt=!1;if(X){at=d.get(vt),at===void 0&&(at=[],d.set(vt,at));let Et=X.textures;if(at.length!==Et.length||at[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=Et.length;ht<Ut;ht++)at[ht]=i.COLOR_ATTACHMENT0+ht;at.length=Et.length,yt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,yt=!0);yt&&i.drawBuffers(at)}function At(X){return x!==X?(i.useProgram(X),x=X,!0):!1}let ie={[Ki]:i.FUNC_ADD,[Wh]:i.FUNC_SUBTRACT,[Xh]:i.FUNC_REVERSE_SUBTRACT};ie[qh]=i.MIN,ie[Yh]=i.MAX;let kt={[$h]:i.ZERO,[Zh]:i.ONE,[Jh]:i.SRC_COLOR,[yc]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[Kh]:i.ONE_MINUS_SRC_COLOR,[Mc]:i.ONE_MINUS_SRC_ALPHA,[ef]:i.ONE_MINUS_DST_COLOR,[jh]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[sf]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[af]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(X,vt,at,yt,Et,ht,Ut,Lt,be,he){if(X===kn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),X!==Hh){if(X!==p||he!==R){if((_!==Ki||M!==Ki)&&(i.blendEquation(i.FUNC_ADD),_=Ki,M=Ki),he)switch(X){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case As:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",X);break}else switch(X){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case As:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",X);break}S=null,v=null,T=null,A=null,b.set(0,0,0),w=0,p=X,R=he}return}Et=Et||vt,ht=ht||at,Ut=Ut||yt,(vt!==_||Et!==M)&&(i.blendEquationSeparate(ie[vt],ie[Et]),_=vt,M=Et),(at!==S||yt!==v||ht!==T||Ut!==A)&&(i.blendFuncSeparate(kt[at],kt[yt],kt[ht],kt[Ut]),S=at,v=yt,T=ht,A=Ut),(Lt.equals(b)===!1||be!==w)&&(i.blendColor(Lt.r,Lt.g,Lt.b,be),b.copy(Lt),w=be),p=X,R=!1}function re(X,vt){X.side===Me?ct(i.CULL_FACE):Z(i.CULL_FACE);let at=X.side===nn;vt&&(at=!at),Qt(at),X.blending===Ai&&X.transparent===!1?Zt(kn):Zt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);let yt=X.stencilWrite;a.setTest(yt),yt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),rn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(X){P!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),P=X)}function Se(X){X!==kh?(Z(i.CULL_FACE),X!==L&&(X===_c?i.cullFace(i.BACK):X===Vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),L=X}function Be(X){X!==I&&(N&&i.lineWidth(X),I=X)}function rn(X,vt,at){X?(Z(i.POLYGON_OFFSET_FILL),(E!==vt||D!==at)&&(E=vt,D=at,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,at))):ct(i.POLYGON_OFFSET_FILL)}function Te(X){X?Z(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Ie(X){X===void 0&&(X=i.TEXTURE0+U-1),k!==X&&(i.activeTexture(X),k=X)}function q(X,vt,at){at===void 0&&(k===null?at=i.TEXTURE0+U-1:at=k);let yt=V[at];yt===void 0&&(yt={type:void 0,texture:void 0},V[at]=yt),(yt.type!==X||yt.texture!==vt)&&(k!==at&&(i.activeTexture(at),k=at),i.bindTexture(X,vt||W[X]),yt.type=X,yt.texture=vt)}function Xe(){let X=V[k];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(X){zt("WebGLState:",X)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(X){zt("WebGLState:",X)}}function C(){try{i.texSubImage2D(...arguments)}catch(X){zt("WebGLState:",X)}}function Y(){try{i.texSubImage3D(...arguments)}catch(X){zt("WebGLState:",X)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){zt("WebGLState:",X)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(X){zt("WebGLState:",X)}}function gt(){try{i.texStorage2D(...arguments)}catch(X){zt("WebGLState:",X)}}function xt(){try{i.texStorage3D(...arguments)}catch(X){zt("WebGLState:",X)}}function rt(){try{i.texImage2D(...arguments)}catch(X){zt("WebGLState:",X)}}function lt(){try{i.texImage3D(...arguments)}catch(X){zt("WebGLState:",X)}}function bt(X){return h[X]!==void 0?h[X]:i.getParameter(X)}function Dt(X,vt){h[X]!==vt&&(i.pixelStorei(X,vt),h[X]=vt)}function Mt(X){ot.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ot.copy(X))}function _t(X){j.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function Nt(X,vt){let at=c.get(vt);at===void 0&&(at=new WeakMap,c.set(vt,at));let yt=at.get(X);yt===void 0&&(yt=i.getUniformBlockIndex(vt,X.name),at.set(X,yt))}function Ot(X,vt){let yt=c.get(vt).get(X);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,X.__bindingPointIndex),l.set(vt,yt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},k=null,V={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,v=null,M=null,T=null,A=null,b=new st(0,0,0),w=0,R=!1,P=null,L=null,I=null,E=null,D=null,ot.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:ct,bindFramebuffer:dt,drawBuffers:ft,useProgram:At,setBlending:Zt,setMaterial:re,setFlipSided:Qt,setCullFace:Se,setLineWidth:Be,setPolygonOffset:rn,setScissorTest:Te,activeTexture:Ie,bindTexture:q,unbindTexture:Xe,compressedTexImage2D:pe,compressedTexImage3D:O,texImage2D:rt,texImage3D:lt,pixelStorei:Dt,getParameter:bt,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:gt,texStorage3D:xt,texSubImage2D:C,texSubImage3D:Y,compressedTexSubImage2D:tt,compressedTexSubImage3D:it,scissor:Mt,viewport:_t,reset:Xt}}function z_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,C){return m?new OffscreenCanvas(O,C):Ar("canvas")}function g(O,C,Y){let tt=1,it=pe(O);if((it.width>Y||it.height>Y)&&(tt=Y/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let gt=Math.floor(tt*it.width),xt=Math.floor(tt*it.height);f===void 0&&(f=x(gt,xt));let rt=C?x(gt,xt):f;return rt.width=gt,rt.height=xt,rt.getContext("2d").drawImage(O,0,0,gt,xt),Bt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+gt+"x"+xt+")."),rt}else return"data"in O&&Bt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),O;return O}function p(O){return O.generateMipmaps}function _(O){i.generateMipmap(O)}function S(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(O,C,Y,tt,it,gt=!1){if(O!==null){if(i[O]!==void 0)return i[O];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xt;tt&&(xt=t.get("EXT_texture_norm16"),xt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=C;if(C===i.RED&&(Y===i.FLOAT&&(rt=i.R32F),Y===i.HALF_FLOAT&&(rt=i.R16F),Y===i.UNSIGNED_BYTE&&(rt=i.R8),Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.R16_EXT),Y===i.SHORT&&xt&&(rt=xt.R16_SNORM_EXT)),C===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.R8UI),Y===i.UNSIGNED_SHORT&&(rt=i.R16UI),Y===i.UNSIGNED_INT&&(rt=i.R32UI),Y===i.BYTE&&(rt=i.R8I),Y===i.SHORT&&(rt=i.R16I),Y===i.INT&&(rt=i.R32I)),C===i.RG&&(Y===i.FLOAT&&(rt=i.RG32F),Y===i.HALF_FLOAT&&(rt=i.RG16F),Y===i.UNSIGNED_BYTE&&(rt=i.RG8),Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.RG16_EXT),Y===i.SHORT&&xt&&(rt=xt.RG16_SNORM_EXT)),C===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Y===i.UNSIGNED_INT&&(rt=i.RG32UI),Y===i.BYTE&&(rt=i.RG8I),Y===i.SHORT&&(rt=i.RG16I),Y===i.INT&&(rt=i.RG32I)),C===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Y===i.UNSIGNED_INT&&(rt=i.RGB32UI),Y===i.BYTE&&(rt=i.RGB8I),Y===i.SHORT&&(rt=i.RGB16I),Y===i.INT&&(rt=i.RGB32I)),C===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Y===i.BYTE&&(rt=i.RGBA8I),Y===i.SHORT&&(rt=i.RGBA16I),Y===i.INT&&(rt=i.RGBA32I)),C===i.RGB&&(Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.RGB16_EXT),Y===i.SHORT&&xt&&(rt=xt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),C===i.RGBA){let lt=gt?ls:ee.getTransfer(it);Y===i.FLOAT&&(rt=i.RGBA32F),Y===i.HALF_FLOAT&&(rt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(rt=lt===de?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&xt&&(rt=xt.RGBA16_EXT),Y===i.SHORT&&xt&&(rt=xt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function M(O,C){let Y;return O?C===null||C===Rn||C===Br?Y=i.DEPTH24_STENCIL8:C===Cn?Y=i.DEPTH32F_STENCIL8:C===Or&&(Y=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Rn||C===Br?Y=i.DEPTH_COMPONENT24:C===Cn?Y=i.DEPTH_COMPONENT32F:C===Or&&(Y=i.DEPTH_COMPONENT16),Y}function T(O,C){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==ke&&O.minFilter!==Ge?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function A(O){let C=O.target;C.removeEventListener("dispose",A),w(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function b(O){let C=O.target;C.removeEventListener("dispose",b),P(C)}function w(O){let C=n.get(O);if(C.__webglInit===void 0)return;let Y=O.source,tt=d.get(Y);if(tt){let it=tt[C.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(O),Object.keys(tt).length===0&&d.delete(Y)}n.remove(O)}function R(O){let C=n.get(O);i.deleteTexture(C.__webglTexture);let Y=O.source,tt=d.get(Y);delete tt[C.__cacheKey],o.memory.textures--}function P(O){let C=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(C.__webglFramebuffer[tt]))for(let it=0;it<C.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(C.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(C.__webglFramebuffer[tt]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[tt])}else{if(Array.isArray(C.__webglFramebuffer))for(let tt=0;tt<C.__webglFramebuffer.length;tt++)i.deleteFramebuffer(C.__webglFramebuffer[tt]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let tt=0;tt<C.__webglColorRenderbuffer.length;tt++)C.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[tt]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let Y=O.textures;for(let tt=0,it=Y.length;tt<it;tt++){let gt=n.get(Y[tt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(Y[tt])}n.remove(O)}let L=0;function I(){L=0}function E(){return L}function D(O){L=O}function U(){let O=L;return O>=r.maxTextures&&Bt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,O}function N(O){let C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function z(O,C){let Y=n.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){let tt=O.image;if(tt===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(Y,O,C);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+C)}function B(O,C){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ct(Y,O,C);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+C)}function k(O,C){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ct(Y,O,C);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+C)}function V(O,C){let Y=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){dt(Y,O,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+C)}let nt={[Xi]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},$={[ke]:i.NEAREST,[uf]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},ot={[pf]:i.NEVER,[_f]:i.ALWAYS,[mf]:i.LESS,[rl]:i.LEQUAL,[gf]:i.EQUAL,[sl]:i.GEQUAL,[xf]:i.GREATER,[bf]:i.NOTEQUAL};function j(O,C){if(C.type===Cn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Ge||C.magFilter===ya||C.magFilter===Cs||C.magFilter===Ci||C.minFilter===Ge||C.minFilter===ya||C.minFilter===Cs||C.minFilter===Ci)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,nt[C.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,nt[C.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,nt[C.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,$[C.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,$[C.minFilter]),C.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ot[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ke||C.minFilter!==Cs&&C.minFilter!==Ci||C.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function ut(O,C){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",A));let tt=C.source,it=d.get(tt);it===void 0&&(it={},d.set(tt,it));let gt=N(C);if(gt!==O.__cacheKey){it[gt]===void 0&&(it[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[gt].usedTimes++;let xt=it[O.__cacheKey];xt!==void 0&&(it[O.__cacheKey].usedTimes--,xt.usedTimes===0&&R(C)),O.__cacheKey=gt,O.__webglTexture=it[gt].texture}return Y}function W(O,C,Y){return Math.floor(Math.floor(O/Y)/C)}function Z(O,C,Y,tt){let gt=O.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,Y,tt,C.data);else{gt.sort((Dt,Mt)=>Dt.start-Mt.start);let xt=0;for(let Dt=1;Dt<gt.length;Dt++){let Mt=gt[xt],_t=gt[Dt],Nt=Mt.start+Mt.count,Ot=W(_t.start,C.width,4),Xt=W(Mt.start,C.width,4);_t.start<=Nt+1&&Ot===Xt&&W(_t.start+_t.count-1,C.width,4)===Ot?Mt.count=Math.max(Mt.count,_t.start+_t.count-Mt.start):(++xt,gt[xt]=_t)}gt.length=xt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let Dt=0,Mt=gt.length;Dt<Mt;Dt++){let _t=gt[Dt],Nt=Math.floor(_t.start/4),Ot=Math.ceil(_t.count/4),Xt=Nt%C.width,X=Math.floor(Nt/C.width),vt=Ot,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,Xt,X,vt,at,Y,tt,C.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function ct(O,C,Y){let tt=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(tt=i.TEXTURE_3D);let it=ut(O,C),gt=C.source;e.bindTexture(tt,O.__webglTexture,i.TEXTURE0+Y);let xt=n.get(gt);if(gt.version!==xt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let at=ee.getPrimaries(ee.workingColorSpace),yt=C.colorSpace===ei?null:ee.getPrimaries(C.colorSpace),Et=C.colorSpace===ei||at===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let lt=g(C.image,!1,r.maxTextureSize);lt=Xe(C,lt);let bt=s.convert(C.format,C.colorSpace),Dt=s.convert(C.type),Mt=v(C.internalFormat,bt,Dt,C.normalized,C.colorSpace,C.isVideoTexture);j(tt,C);let _t,Nt=C.mipmaps,Ot=C.isVideoTexture!==!0,Xt=xt.__version===void 0||it===!0,X=gt.dataReady,vt=T(C,lt);if(C.isDepthTexture)Mt=M(C.format===Ii,C.type),Xt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Mt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,lt.width,lt.height,0,bt,Dt,null));else if(C.isDataTexture)if(Nt.length>0){Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,Nt[0].width,Nt[0].height);for(let at=0,yt=Nt.length;at<yt;at++)_t=Nt[at],Ot?X&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,bt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,at,Mt,_t.width,_t.height,0,bt,Dt,_t.data);C.generateMipmaps=!1}else Ot?(Xt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,lt.width,lt.height),X&&Z(C,lt,bt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Mt,lt.width,lt.height,0,bt,Dt,lt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ot&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,Nt[0].width,Nt[0].height,lt.depth);for(let at=0,yt=Nt.length;at<yt;at++)if(_t=Nt[at],C.format!==_n)if(bt!==null)if(Ot){if(X)if(C.layerUpdates.size>0){let Et=qc(_t.width,_t.height,C.format,C.type);for(let ht of C.layerUpdates){let Ut=_t.data.subarray(ht*Et/_t.data.BYTES_PER_ELEMENT,(ht+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,ht,_t.width,_t.height,1,bt,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,lt.depth,bt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Mt,_t.width,_t.height,lt.depth,0,_t.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,lt.depth,bt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Mt,_t.width,_t.height,lt.depth,0,bt,Dt,_t.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,Nt[0].width,Nt[0].height);for(let at=0,yt=Nt.length;at<yt;at++)_t=Nt[at],C.format!==_n?bt!==null?Ot?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,bt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Mt,_t.width,_t.height,0,_t.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?X&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,bt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,at,Mt,_t.width,_t.height,0,bt,Dt,_t.data)}else if(C.isDataArrayTexture)if(Ot){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,lt.width,lt.height,lt.depth),X)if(C.layerUpdates.size>0){let at=qc(lt.width,lt.height,C.format,C.type);for(let yt of C.layerUpdates){let Et=lt.data.subarray(yt*at/lt.data.BYTES_PER_ELEMENT,(yt+1)*at/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,lt.width,lt.height,1,bt,Dt,Et)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,lt.width,lt.height,lt.depth,0,bt,Dt,lt.data);else if(C.isData3DTexture)Ot?(Xt&&e.texStorage3D(i.TEXTURE_3D,vt,Mt,lt.width,lt.height,lt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,lt.width,lt.height,lt.depth,0,bt,Dt,lt.data);else if(C.isFramebufferTexture){if(Xt)if(Ot)e.texStorage2D(i.TEXTURE_2D,vt,Mt,lt.width,lt.height);else{let at=lt.width,yt=lt.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,at,yt,0,bt,Dt,null),at>>=1,yt>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),lt.parentNode!==at){at.appendChild(lt),h.add(C),at.onpaint=yt=>{let Et=yt.changedElements;for(let ht of h)Et.includes(ht.image)&&(ht.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let Et=i.RGBA,ht=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ht,Ut,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ot&&Xt){let at=pe(Nt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Mt,at.width,at.height)}for(let at=0,yt=Nt.length;at<yt;at++)_t=Nt[at],Ot?X&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,bt,Dt,_t):e.texImage2D(i.TEXTURE_2D,at,Mt,bt,Dt,_t);C.generateMipmaps=!1}else if(Ot){if(Xt){let at=pe(lt);e.texStorage2D(i.TEXTURE_2D,vt,Mt,at.width,at.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,bt,Dt,lt);p(C)&&_(tt),xt.__version=gt.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function dt(O,C,Y){if(C.image.length!==6)return;let tt=ut(O,C),it=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Y);let gt=n.get(it);if(it.version!==gt.__version||tt===!0){e.activeTexture(i.TEXTURE0+Y);let xt=ee.getPrimaries(ee.workingColorSpace),rt=C.colorSpace===ei?null:ee.getPrimaries(C.colorSpace),lt=C.colorSpace===ei||xt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let bt=C.isCompressedTexture||C.image[0].isCompressedTexture,Dt=C.image[0]&&C.image[0].isDataTexture,Mt=[];for(let ht=0;ht<6;ht++)!bt&&!Dt?Mt[ht]=g(C.image[ht],!0,r.maxCubemapSize):Mt[ht]=Dt?C.image[ht].image:C.image[ht],Mt[ht]=Xe(C,Mt[ht]);let _t=Mt[0],Nt=s.convert(C.format,C.colorSpace),Ot=s.convert(C.type),Xt=v(C.internalFormat,Nt,Ot,C.normalized,C.colorSpace),X=C.isVideoTexture!==!0,vt=gt.__version===void 0||tt===!0,at=it.dataReady,yt=T(C,_t);j(i.TEXTURE_CUBE_MAP,C);let Et;if(bt){X&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,_t.width,_t.height);for(let ht=0;ht<6;ht++){Et=Mt[ht].mipmaps;for(let Ut=0;Ut<Et.length;Ut++){let Lt=Et[Ut];C.format!==_n?Nt!==null?X?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Xt,Lt.width,Lt.height,0,Lt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Lt.width,Lt.height,Nt,Ot,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Xt,Lt.width,Lt.height,0,Nt,Ot,Lt.data)}}}else{if(Et=C.mipmaps,X&&vt){Et.length>0&&yt++;let ht=pe(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Dt){X?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Mt[ht].width,Mt[ht].height,Nt,Ot,Mt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Xt,Mt[ht].width,Mt[ht].height,0,Nt,Ot,Mt[ht].data);for(let Ut=0;Ut<Et.length;Ut++){let be=Et[Ut].image[ht].image;X?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,be.width,be.height,Nt,Ot,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Xt,be.width,be.height,0,Nt,Ot,be.data)}}else{X?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt,Ot,Mt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Xt,Nt,Ot,Mt[ht]);for(let Ut=0;Ut<Et.length;Ut++){let Lt=Et[Ut];X?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,Nt,Ot,Lt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Xt,Nt,Ot,Lt.image[ht])}}}p(C)&&_(i.TEXTURE_CUBE_MAP),gt.__version=it.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ft(O,C,Y,tt,it,gt){let xt=s.convert(Y.format,Y.colorSpace),rt=s.convert(Y.type),lt=v(Y.internalFormat,xt,rt,Y.normalized,Y.colorSpace),bt=n.get(C),Dt=n.get(Y);if(Dt.__renderTarget=C,!bt.__hasExternalTextures){let Mt=Math.max(1,C.width>>gt),_t=Math.max(1,C.height>>gt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,gt,lt,Mt,_t,C.depth,0,xt,rt,null):e.texImage2D(it,gt,lt,Mt,_t,0,xt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Ie(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,Dt.__webglTexture,0,Te(C)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,Dt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(O,C,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,O),C.depthBuffer){let tt=C.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,gt=M(C.stencilBuffer,it),xt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(C),gt,C.width,C.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(C),gt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,gt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,O)}else{let tt=C.textures;for(let it=0;it<tt.length;it++){let gt=tt[it],xt=s.convert(gt.format,gt.colorSpace),rt=s.convert(gt.type),lt=v(gt.internalFormat,xt,rt,gt.normalized,gt.colorSpace);Ie(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(C),lt,C.width,C.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(C),lt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,lt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(O,C,Y){let tt=C.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(C.depthTexture);if(it.__renderTarget=C,(!it.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),tt){if(it.__webglInit===void 0&&(it.__webglInit=!0,C.depthTexture.addEventListener("dispose",A)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),j(i.TEXTURE_CUBE_MAP,C.depthTexture);let bt=s.convert(C.depthTexture.format),Dt=s.convert(C.depthTexture.type),Mt;C.depthTexture.format===On?Mt=i.DEPTH_COMPONENT24:C.depthTexture.format===Ii&&(Mt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Mt,C.width,C.height,0,bt,Dt,null)}}else z(C.depthTexture,0);let gt=it.__webglTexture,xt=Te(C),rt=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,lt=C.depthTexture.format===Ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===On)Ie(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,rt,gt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,rt,gt,0);else if(C.depthTexture.format===Ii)Ie(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,rt,gt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,rt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(O){let C=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){let tt=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),tt){let it=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),C.__depthDisposeCallback=it}C.__boundDepthTexture=tt}if(O.depthTexture&&!C.__autoAllocateDepthBuffer)if(Y)for(let tt=0;tt<6;tt++)ie(C.__webglFramebuffer[tt],O,tt);else{let tt=O.texture.mipmaps;tt&&tt.length>0?ie(C.__webglFramebuffer[0],O,0):ie(C.__webglFramebuffer,O,0)}else if(Y){C.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[tt]),C.__webglDepthbuffer[tt]===void 0)C.__webglDepthbuffer[tt]=i.createRenderbuffer(),At(C.__webglDepthbuffer[tt],O,!1);else{let it=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=C.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,gt)}}else{let tt=O.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),At(C.__webglDepthbuffer,O,!1);else{let it=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(O,C,Y){let tt=n.get(O);C!==void 0&&ft(tt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&kt(O)}function re(O){let C=O.texture,Y=n.get(O),tt=n.get(C);O.addEventListener("dispose",b);let it=O.textures,gt=O.isWebGLCubeRenderTarget===!0,xt=it.length>1;if(xt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=C.version,o.memory.textures++),gt){Y.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer[rt]=[];for(let lt=0;lt<C.mipmaps.length;lt++)Y.__webglFramebuffer[rt][lt]=i.createFramebuffer()}else Y.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer=[];for(let rt=0;rt<C.mipmaps.length;rt++)Y.__webglFramebuffer[rt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(xt)for(let rt=0,lt=it.length;rt<lt;rt++){let bt=n.get(it[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Ie(O)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let rt=0;rt<it.length;rt++){let lt=it[rt];Y.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[rt]);let bt=s.convert(lt.format,lt.colorSpace),Dt=s.convert(lt.type),Mt=v(lt.internalFormat,bt,Dt,lt.normalized,lt.colorSpace,O.isXRRenderTarget===!0),_t=Te(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Mt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),At(Y.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),j(i.TEXTURE_CUBE_MAP,C);for(let rt=0;rt<6;rt++)if(C.mipmaps&&C.mipmaps.length>0)for(let lt=0;lt<C.mipmaps.length;lt++)ft(Y.__webglFramebuffer[rt][lt],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else ft(Y.__webglFramebuffer[rt],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(C)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,lt=it.length;rt<lt;rt++){let bt=it[rt],Dt=n.get(bt),Mt=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Dt.__webglTexture),j(Mt,bt),ft(Y.__webglFramebuffer,O,bt,i.COLOR_ATTACHMENT0+rt,Mt,0),p(bt)&&_(Mt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(rt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),j(rt,C),C.mipmaps&&C.mipmaps.length>0)for(let lt=0;lt<C.mipmaps.length;lt++)ft(Y.__webglFramebuffer[lt],O,C,i.COLOR_ATTACHMENT0,rt,lt);else ft(Y.__webglFramebuffer,O,C,i.COLOR_ATTACHMENT0,rt,0);p(C)&&_(rt),e.unbindTexture()}O.depthBuffer&&kt(O)}function Qt(O){let C=O.textures;for(let Y=0,tt=C.length;Y<tt;Y++){let it=C[Y];if(p(it)){let gt=S(O),xt=n.get(it).__webglTexture;e.bindTexture(gt,xt),_(gt),e.unbindTexture()}}}let Se=[],Be=[];function rn(O){if(O.samples>0){if(Ie(O)===!1){let C=O.textures,Y=O.width,tt=O.height,it=i.COLOR_BUFFER_BIT,gt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(O),rt=C.length>1;if(rt)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let lt=O.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(C[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,it,i.NEAREST),l===!0&&(Se.length=0,Be.length=0,Se.push(i.COLOR_ATTACHMENT0+bt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Se.push(gt),Be.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(C[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let C=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Te(O){return Math.min(r.maxSamples,O.samples)}function Ie(O){let C=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function q(O){let C=o.render.frame;u.get(O)!==C&&(u.set(O,C),O.update())}function Xe(O,C){let Y=O.colorSpace,tt=O.format,it=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==as&&Y!==ei&&(ee.getTransfer(Y)===de?(tt!==_n||it!==fn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",Y)),C}function pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.getTextureUnits=E,this.setTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=Zt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function k_(i,t){function e(n,r=ei){let s,o=ee.getTransfer(r);if(n===fn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===_n)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===Ta)return i.RED_INTEGER;if(n===Pi)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===Is||n===Ps||n===Ls||n===Fs)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Is)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Is)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Ia||n===Pa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Fa||n===Da||n===Na||n===Ua||n===Ds||n===Oa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===La||n===Fa)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Da)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Na)return s.COMPRESSED_R11_EAC;if(n===Ua)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ds)return s.COMPRESSED_RG11_EAC;if(n===Oa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ba)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===ja||n===tl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qa)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===nl||n===Ns||n===il)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ns)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
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

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ms(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:V_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Bn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new hu,p={},_=e.getContextAttributes(),S=null,v=null,M=[],T=[],A=new Jt,b=null,w=null,R=new Ze;R.viewport=new Ae;let P=new Ze;P.viewport=new Ae;let L=[R,P],I=new xa,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=M[W];return Z===void 0&&(Z=new Pr,M[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=M[W];return Z===void 0&&(Z=new Pr,M[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=M[W];return Z===void 0&&(Z=new Pr,M[W]=Z),Z.getHandSpace()};function U(W){let Z=T.indexOf(W.inputSource);if(Z===-1)return;let ct=M[Z];ct!==void 0&&(ct.update(W.inputSource,W.frame,c||o),ct.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",z);for(let W=0;W<M.length;W++){let Z=T[W];Z!==null&&(T[W]=null,M[W].disconnect(Z))}E=null,D=null,g.reset();for(let W in p)delete p[W];if(t.setRenderTarget(S),d=null,f=null,h=null,r=null,v=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),w!==null){let W=w.camera;W.fov=w.fov,W.zoom=w.zoom,W.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,dt=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?Ii:On,dt=_.stencil?Br:Rn);let At={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(At),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Qe(f.textureWidth,f.textureHeight,{format:_n,type:fn,depthTexture:new yi(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Qe(d.framebufferWidth,d.framebufferHeight,{format:_n,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(W){for(let Z=0;Z<W.removed.length;Z++){let ct=W.removed[Z],dt=T.indexOf(ct);dt>=0&&(T[dt]=null,M[dt].disconnect(ct))}for(let Z=0;Z<W.added.length;Z++){let ct=W.added[Z],dt=T.indexOf(ct);if(dt===-1){for(let At=0;At<M.length;At++)if(At>=T.length){T.push(ct),dt=At;break}else if(T[At]===null){T[At]=ct,dt=At;break}if(dt===-1)break}let ft=M[dt];ft&&ft.connect(ct)}}let B=new G,k=new G;function V(W,Z,ct){B.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(ct.matrixWorld);let dt=B.distanceTo(k),ft=Z.projectionMatrix.elements,At=ct.projectionMatrix.elements,ie=ft[14]/(ft[10]-1),kt=ft[14]/(ft[10]+1),Zt=(ft[9]+1)/ft[5],re=(ft[9]-1)/ft[5],Qt=(ft[8]-1)/ft[0],Se=(At[8]+1)/At[0],Be=ie*Qt,rn=ie*Se,Te=dt/(-Qt+Se),Ie=Te*-Qt;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ie),W.translateZ(Te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ft[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let q=ie+Te,Xe=kt+Te,pe=Be-Ie,O=rn+(dt-Ie),C=Zt*kt/Xe*q,Y=re*kt/Xe*q;W.projectionMatrix.makePerspective(pe,O,C,Y,q,Xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function nt(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Z=W.near,ct=W.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),I.near=P.near=R.near=Z,I.far=P.far=R.far=ct,(E!==I.near||D!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),E=I.near,D=I.far),I.layers.mask=W.layers.mask|6,R.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;let dt=W.parent,ft=I.cameras;nt(I,dt);for(let At=0;At<ft.length;At++)nt(ft[At],dt);ft.length===2?V(I,R,P):I.projectionMatrix.copy(R.projectionMatrix),w===null&&W.isPerspectiveCamera&&(w={camera:W,fov:W.fov,zoom:W.zoom}),$(W,I,dt)};function $(W,Z,ct){ct===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=$o*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(W){return p[W]};let ot=null;function j(W,Z){if(u=Z.getViewerPose(c||o),m=Z,u!==null){let ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let dt=!1;ct.length!==I.cameras.length&&(I.cameras.length=0,dt=!0);for(let kt=0;kt<ct.length;kt++){let Zt=ct[kt],re=null;if(d!==null)re=d.getViewport(Zt);else{let Se=h.getViewSubImage(f,Zt);re=Se.viewport,kt===0&&(t.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(v))}let Qt=L[kt];Qt===void 0&&(Qt=new Ze,Qt.layers.enable(kt),Qt.viewport=new Ae,L[kt]=Qt),Qt.matrix.fromArray(Zt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Zt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(re.x,re.y,re.width,re.height),kt===0&&(I.matrix.copy(Qt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),dt===!0&&I.cameras.push(Qt)}let ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let kt=h.getDepthInformation(ct[0]);kt&&kt.isValid&&kt.texture&&g.init(kt,r.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let kt=0;kt<ct.length;kt++){let Zt=ct[kt].camera;if(Zt){let re=p[Zt];re||(re=new ms,p[Zt]=re);let Qt=h.getCameraImage(Zt);re.sourceTexture=Qt}}}}for(let ct=0;ct<M.length;ct++){let dt=T[ct],ft=M[ct];dt!==null&&ft!==void 0&&ft.update(dt,Z,c||o)}ot&&ot(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}let ut=new td;ut.setAnimationLoop(j),this.setAnimationLoop=function(W){ot=W},this.dispose=function(){}}},H_=new we,od=new Gt;od.set(-1,0,0,0,1,0,0,0,1);function W_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),S=_.envMap,v=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(od),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let T=M.program;n.uniformBlockBinding(v,T)}function c(v,M){let T=r[v.id];T===void 0&&(g(v),T=u(v),r[v.id]=T,v.addEventListener("dispose",_));let A=M.program;n.updateUBOMapping(v,A);let b=t.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function u(v){let M=h();v.__bindingPointIndex=M;let T=i.createBuffer(),A=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],T=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,w=T.length;b<w;b++){let R=T[b];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],b,P,A);else d(R,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,T,A){if(x(v,M,T,A)===!0){let b=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let L=w[P],I=p(L);m(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function m(v,M,T){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,T)}function x(v,M,T,A){let b=v.value,w=M+"_"+T;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:ArrayBuffer.isView(b)?A[w]=b.slice():A[w]=b.clone(),!0;{let R=A[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return A[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function g(v){let M=v.uniforms,T=0,A=16;for(let w=0,R=M.length;w<R;w++){let P=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,I=P.length;L<I;L++){let E=P[L],D=Array.isArray(E.value)?E.value:[E.value];for(let U=0,N=D.length;U<N;U++){let z=D[U],B=p(z),k=T%A,V=k%B.boundary,nt=k+V;T+=V,nt!==0&&A-nt<B.storage&&(T+=A-nt),E.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,T+=B.storage}}}let b=T%A;return b>0&&(T+=A-b),v.__size=T,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){let M=v.target;M.removeEventListener("dispose",_);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function S(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}var q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function Y_(){return Vn===null&&(Vn=new Qo(q_,16,16,Pi,In),Vn.name="DFG_LUT",Vn.minFilter=Ge,Vn.magFilter=Ge,Vn.wrapS=cn,Vn.wrapT=cn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var Gr=class{constructor(t={}){let{canvas:e=yf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=fn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Aa,Ea,Ta]),p=new Set([fn,Rn,Or,Br,Sa,wa]),_=new Uint32Array(4),S=new Int32Array(4),v=new G,M=null,T=null,A=[],b=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,I=null,E=null,D=null;this._outputColorSpace=Ce;let U=0,N=0,z=null,B=-1,k=null,V=new Ae,nt=new Ae,$=null,ot=new st(0),j=0,ut=e.width,W=e.height,Z=1,ct=null,dt=null,ft=new Ae(0,0,ut,W),At=new Ae(0,0,ut,W),ie=!1,kt=new ds,Zt=!1,re=!1,Qt=new we,Se=new G,Be=new Ae,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ie(){return z===null?Z:1}let q=n;function Xe(F,H){return e.getContext(F,H)}let pe,O,C,Y,tt,it,gt,xt,rt,lt,bt,Dt,Mt,_t,Nt,Ot,Xt,X,vt,at,yt,Et,ht;try{let F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",yn,!1),q===null){let H="webgl2";if(q=Xe(H,F),q===null)throw Xe(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(F){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),zt("WebGLRenderer: "+F.message),F}function Ut(){pe=new tb(q),pe.init(),yt=new k_(q,pe),O=new Wx(q,pe,t,yt),C=new B_(q,pe),O.reversedDepthBuffer&&f&&C.buffers.depth.setReversed(!0),I=q.createFramebuffer(),E=q.createFramebuffer(),D=q.createFramebuffer(),Y=new ib(q),tt=new w_,it=new z_(q,pe,C,tt,O,yt,Y),gt=new jx(R),xt=new sm(q),Et=new Gx(q,xt),rt=new eb(q,xt,Y,Et),lt=new sb(q,rt,xt,Et,Y),X=new rb(q,O,it),Nt=new Xx(tt),bt=new S_(R,gt,pe,O,Et,Nt),Dt=new W_(R,tt),Mt=new E_,_t=new L_(pe),Xt=new Vx(R,gt,C,lt,m,l),Ot=new O_(R,lt,O),ht=new X_(q,Y,O,C),vt=new Hx(q,pe,Y),at=new nb(q,pe,Y),Y.programs=bt.programs,R.capabilities=O,R.extensions=pe,R.properties=tt,R.renderLists=Mt,R.shadowMap=Ot,R.state=C,R.info=Y}x!==fn&&(w=new ab(x,e.width,e.height,a,r,s));let Lt=new fu(R,q);this.xr=Lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let F=pe.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=pe.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(F){F!==void 0&&(Z=F,this.setSize(ut,W,!1))},this.getSize=function(F){return F.set(ut,W)},this.setSize=function(F,H,et=!0){if(Lt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=F,W=H,e.width=Math.floor(F*Z),e.height=Math.floor(H*Z),et===!0&&(e.style.width=F+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,F,H)},this.getDrawingBufferSize=function(F){return F.set(ut*Z,W*Z).floor()},this.setDrawingBufferSize=function(F,H,et){ut=F,W=H,Z=et,e.width=Math.floor(F*et),e.height=Math.floor(H*et),this.setViewport(0,0,F,H)},this.setEffects=function(F){if(x===fn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let H=0;H<F.length;H++)if(F[H].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(V)},this.getViewport=function(F){return F.copy(ft)},this.setViewport=function(F,H,et,J){F.isVector4?ft.set(F.x,F.y,F.z,F.w):ft.set(F,H,et,J),C.viewport(V.copy(ft).multiplyScalar(Z).round())},this.getScissor=function(F){return F.copy(At)},this.setScissor=function(F,H,et,J){F.isVector4?At.set(F.x,F.y,F.z,F.w):At.set(F,H,et,J),C.scissor(nt.copy(At).multiplyScalar(Z).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(F){C.setScissorTest(ie=F)},this.setOpaqueSort=function(F){ct=F},this.setTransparentSort=function(F){dt=F},this.getClearColor=function(F){return F.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(F=!0,H=!0,et=!0){let J=0;if(F){let K=!1;if(z!==null){let Tt=z.texture.format;K=g.has(Tt)}if(K){let Tt=z.texture.type,Ct=p.has(Tt),wt=Xt.getClearColor(),It=Xt.getClearAlpha(),Ft=wt.r,Yt=wt.g,jt=wt.b;Ct?(_[0]=Ft,_[1]=Yt,_[2]=jt,_[3]=It,q.clearBufferuiv(q.COLOR,0,_)):(S[0]=Ft,S[1]=Yt,S[2]=jt,S[3]=It,q.clearBufferiv(q.COLOR,0,S))}else J|=q.COLOR_BUFFER_BIT}H&&(J|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),L=F},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Xt.dispose(),Mt.dispose(),_t.dispose(),tt.dispose(),gt.dispose(),lt.dispose(),Et.dispose(),ht.dispose(),bt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",th),Lt.removeEventListener("sessionend",eh),zi.stop()};function be(F){F.preventDefault(),Gc("WebGLRenderer: Context Lost."),P=!0}function he(){Gc("WebGLRenderer: Context Restored."),P=!1;let F=Y.autoReset,H=Ot.enabled,et=Ot.autoUpdate,J=Ot.needsUpdate,K=Ot.type;Ut(),Y.autoReset=F,Ot.enabled=H,Ot.autoUpdate=et,Ot.needsUpdate=J,Ot.type=K}function yn(F){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Dn(F){let H=F.target;H.removeEventListener("dispose",Dn),jp(H)}function jp(F){t0(F),tt.remove(F)}function t0(F){let H=tt.get(F).programs;H!==void 0&&(H.forEach(function(et){bt.releaseProgram(et)}),F.isShaderMaterial&&bt.releaseShaderCache(F))}this.renderBufferDirect=function(F,H,et,J,K,Tt){H===null&&(H=rn);let Ct=K.isMesh&&K.matrixWorld.determinantAffine()<0,wt=i0(F,H,et,J,K);C.setMaterial(J,Ct);let It=et.index,Ft=1;if(J.wireframe===!0){if(It=rt.getWireframeAttribute(et),It===void 0)return;Ft=2}let Yt=et.drawRange,jt=et.attributes.position,Pt=Yt.start*Ft,fe=(Yt.start+Yt.count)*Ft;Tt!==null&&(Pt=Math.max(Pt,Tt.start*Ft),fe=Math.min(fe,(Tt.start+Tt.count)*Ft)),It!==null?(Pt=Math.max(Pt,0),fe=Math.min(fe,It.count)):jt!=null&&(Pt=Math.max(Pt,0),fe=Math.min(fe,jt.count));let Pe=fe-Pt;if(Pe<0||Pe===1/0)return;Et.setup(K,J,wt,et,It);let ve,ge=vt;if(It!==null&&(ve=xt.get(It),ge=at,ge.setIndex(ve)),K.isMesh)J.wireframe===!0?(C.setLineWidth(J.wireframeLinewidth*Ie()),ge.setMode(q.LINES)):ge.setMode(q.TRIANGLES);else if(K.isLine){let qe=J.linewidth;qe===void 0&&(qe=1),C.setLineWidth(qe*Ie()),K.isLineSegments?ge.setMode(q.LINES):K.isLineLoop?ge.setMode(q.LINE_LOOP):ge.setMode(q.LINE_STRIP)}else K.isPoints?ge.setMode(q.POINTS):K.isSprite&&ge.setMode(q.TRIANGLES);if(K.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let qe=K._multiDrawStarts,Rt=K._multiDrawCounts,en=K._multiDrawCount,se=It?xt.get(It).bytesPerElement:1,pn=tt.get(J).currentProgram.getUniforms();for(let Nn=0;Nn<en;Nn++)pn.setValue(q,"_gl_DrawID",Nn),ge.render(qe[Nn]/se,Rt[Nn])}else if(K.isInstancedMesh)ge.renderInstances(Pt,Pe,K.count);else if(et.isInstancedBufferGeometry){let qe=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Rt=Math.min(et.instanceCount,qe);ge.renderInstances(Pt,Pe,Rt)}else ge.render(Pt,Pe)};function ju(F,H,et,J){L!==null&&F.isNodeMaterial&&L.setObject(J,F),Zt===!0&&Nt.setState(F,et,!1),F.transparent===!0&&F.side===Me&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,co(F,H,J),F.side=Ei,F.needsUpdate=!0,co(F,H,J),F.side=Me):co(F,H,J)}this.compile=function(F,H,et=null){et===null&&(et=F),L!==null&&L.renderStart(F,H,et),T=_t.get(et),T.init(H),b.push(T),et.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),F!==et&&F.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),re=this.localClippingEnabled,Zt=Nt.init(this.clippingPlanes,re),Zt===!0&&Nt.setGlobalState(this.clippingPlanes,H),L!==null&&Ot.render(T.state.shadowsArray,et,H);let J=new Set;return F.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){let wt=Tt[Ct];ju(wt,et,H,K),J.add(wt)}else ju(Tt,et,H,K),J.add(Tt)}),T=b.pop(),L!==null&&L.renderEnd(),J},this.compileAsync=function(F,H,et=null){let J=this.compile(F,H,et);return new Promise(K=>{function Tt(){if(J.forEach(function(Ct){let It=tt.get(Ct).currentProgram;(It===void 0||It.isReady())&&J.delete(Ct)}),J.size===0){K(F);return}setTimeout(Tt,10)}pe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ol=null;function e0(F){Ol&&Ol(F)}function th(){zi.stop()}function eh(){zi.start()}let zi=new td;zi.setAnimationLoop(e0),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(F){Ol=F,Lt.setAnimationLoop(F),F===null?zi.stop():zi.start()},Lt.addEventListener("sessionstart",th),Lt.addEventListener("sessionend",eh),this.render=function(F,H){if(H!==void 0&&H.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(F,H);let et=Lt.enabled===!0&&Lt.isPresenting===!0,J=w!==null&&(z===null||et)&&w.begin(R,z);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(H),H=Lt.getCamera()),F.isScene===!0&&F.onBeforeRender(R,F,H,z),T=_t.get(F,b.length),T.init(H),T.state.textureUnits=it.getTextureUnits(),b.push(T),Qt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),kt.setFromProjectionMatrix(Qt,En,H.reversedDepth),re=this.localClippingEnabled,Zt=Nt.init(this.clippingPlanes,re),M=Mt.get(F,A.length),M.init(),A.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&Bl(Ct,H,-1/0,R.sortObjects)}Bl(F,H,0,R.sortObjects),M.finish(),L!==null&&L.updateLights(T.state.lightsArray),R.sortObjects===!0&&M.sort(ct,dt),Te=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Te&&Xt.addToRenderList(M,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Nt.beginShadows();let K=T.state.shadowsArray;if(Ot.render(K,F,H),Zt===!0&&Nt.endShadows(),(J&&w.hasRenderPass())===!1){let Ct=M.opaque,wt=M.transmissive;if(T.setupLights(),H.isArrayCamera){let It=H.cameras;if(wt.length>0)for(let Ft=0,Yt=It.length;Ft<Yt;Ft++){let jt=It[Ft];ih(Ct,wt,F,jt)}Te&&Xt.render(F);for(let Ft=0,Yt=It.length;Ft<Yt;Ft++){let jt=It[Ft];nh(M,F,jt,jt.viewport)}}else wt.length>0&&ih(Ct,wt,F,H),Te&&Xt.render(F),nh(M,F,H)}z!==null&&N===0&&(it.updateMultisampleRenderTarget(z),it.updateRenderTargetMipmap(z)),J&&w.end(R),F.isScene===!0&&F.onAfterRender(R,F,H),Et.resetDefaultState(),B=-1,k=null,b.pop(),b.length>0?(T=b[b.length-1],it.setTextureUnits(T.state.textureUnits),Zt===!0&&Nt.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,L!==null&&L.renderEnd()};function Bl(F,H,et,J){if(F.visible===!1)return;if(F.layers.test(H.layers)){if(F.isGroup)et=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(H);else if(F.isLightProbeGrid)T.pushLightProbeGrid(F);else if(F.isLight)T.pushLight(F),F.castShadow&&T.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(kt)){J&&Be.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Qt);let Ct=lt.update(F),wt=F.material;wt.visible&&M.push(F,Ct,wt,et,Be.z,null,H)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(kt))){let Ct=lt.update(F),wt=F.material;if(J&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Be.copy(F.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Be.copy(Ct.boundingSphere.center)),Be.applyMatrix4(F.matrixWorld).applyMatrix4(Qt)),Array.isArray(wt)){let It=Ct.groups;for(let Ft=0,Yt=It.length;Ft<Yt;Ft++){let jt=It[Ft],Pt=wt[jt.materialIndex];Pt&&Pt.visible&&M.push(F,Ct,Pt,et,Be.z,jt,H)}}else wt.visible&&M.push(F,Ct,wt,et,Be.z,null,H)}}let Tt=F.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)Bl(Tt[Ct],H,et,J)}function nh(F,H,et,J){let{opaque:K,transmissive:Tt,transparent:Ct}=F;T.setupLightsView(et),Zt===!0&&Nt.setGlobalState(R.clippingPlanes,et),J&&C.viewport(V.copy(J)),K.length>0&&lo(K,H,et),Tt.length>0&&lo(Tt,H,et),Ct.length>0&&lo(Ct,H,et),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function ih(F,H,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Pt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new Qe(1,1,{generateMipmaps:!0,type:Pt?In:fn,minFilter:Ci,samples:Math.max(4,O.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let Tt=T.state.transmissionRenderTarget[J.id],Ct=J.viewport||V;Tt.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let wt=R.getRenderTarget(),It=R.getActiveCubeFace(),Ft=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(ot),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear(),Te&&Xt.render(et);let Yt=R.toneMapping;R.toneMapping=An;let jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),Zt===!0&&Nt.setGlobalState(R.clippingPlanes,J),lo(F,et,J),it.updateMultisampleRenderTarget(Tt),it.updateRenderTargetMipmap(Tt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let fe=0,Pe=H.length;fe<Pe;fe++){let ve=H[fe],{object:ge,geometry:qe,material:Rt,group:en}=ve;if(Rt.side===Me&&ge.layers.test(J.layers)){let se=Rt.side;Rt.side=nn,Rt.needsUpdate=!0,rh(ge,et,J,qe,Rt,en),Rt.side=se,Rt.needsUpdate=!0,Pt=!0}}Pt===!0&&(it.updateMultisampleRenderTarget(Tt),it.updateRenderTargetMipmap(Tt))}R.setRenderTarget(wt,It,Ft),R.setClearColor(ot,j),jt!==void 0&&(J.viewport=jt),R.toneMapping=Yt}function lo(F,H,et){let J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Tt=F.length;K<Tt;K++){let Ct=F[K],{object:wt,geometry:It,group:Ft}=Ct,Yt=Ct.material;Yt.allowOverride===!0&&J!==null&&(Yt=J),wt.layers.test(et.layers)&&rh(wt,H,et,It,Yt,Ft)}}function rh(F,H,et,J,K,Tt){L!==null&&K.isNodeMaterial&&L.setObject(F,K),F.onBeforeRender(R,H,et,J,K,Tt),F.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),K.onBeforeRender(R,H,et,J,F,Tt),K.transparent===!0&&K.side===Me&&K.forceSinglePass===!1?(K.side=nn,K.needsUpdate=!0,R.renderBufferDirect(et,H,J,K,F,Tt),K.side=Ei,K.needsUpdate=!0,R.renderBufferDirect(et,H,J,K,F,Tt),K.side=Me):R.renderBufferDirect(et,H,J,K,F,Tt),F.onAfterRender(R,H,et,J,K,Tt)}function co(F,H,et){H.isScene!==!0&&(H=rn);let J=tt.get(F),K=T.state.lights,Tt=T.state.shadowsArray,Ct=K.state.version,wt=bt.getParameters(F,K.state,Tt,H,et,T.state.lightProbeGridArray),It=bt.getProgramCacheKey(wt),Ft=J.programs;J.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;let Yt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;J.envMap=gt.get(F.envMap||J.environment,Yt),J.envMapRotation=J.environment!==null&&F.envMap===null?H.environmentRotation:F.envMapRotation,Ft===void 0&&(F.addEventListener("dispose",Dn),Ft=new Map,J.programs=Ft);let jt=Ft.get(It);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===Ct)return oh(F,wt),jt}else wt.uniforms=bt.getUniforms(F),L!==null&&F.isNodeMaterial&&L.build(F,et,wt),F.onBeforeCompile(wt,R),jt=bt.acquireProgram(wt,It),Ft.set(It,jt),J.uniforms=wt.uniforms;let Pt=J.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Pt.clippingPlanes=Nt.uniform),oh(F,wt),J.needsLights=s0(F),J.lightsStateVersion=Ct,J.needsLights&&(Pt.ambientLightColor.value=K.state.ambient,Pt.lightProbe.value=K.state.probe,Pt.sunLights.value=K.state.sun,Pt.sunLightShadows.value=K.state.sunShadow,Pt.directionalLights.value=K.state.directional,Pt.directionalLightShadows.value=K.state.directionalShadow,Pt.spotLights.value=K.state.spot,Pt.spotLightShadows.value=K.state.spotShadow,Pt.rectAreaLights.value=K.state.rectArea,Pt.ltc_1.value=K.state.rectAreaLTC1,Pt.ltc_2.value=K.state.rectAreaLTC2,Pt.pointLights.value=K.state.point,Pt.pointLightShadows.value=K.state.pointShadow,Pt.hemisphereLights.value=K.state.hemi,Pt.sunShadowMatrix.value=K.state.sunShadowMatrix,Pt.sunShadowCascade.value=K.state.sunShadowCascade,Pt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Pt.spotLightMatrix.value=K.state.spotLightMatrix,Pt.spotLightMap.value=K.state.spotLightMap,Pt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=jt,J.uniformsList=null,jt}function sh(F){if(F.uniformsList===null){let H=F.currentProgram.getUniforms();F.uniformsList=Vr.seqWithValue(H.seq,F.uniforms)}return F.uniformsList}function oh(F,H){let et=tt.get(F);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function n0(F,H){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let et=0,J=F.length;et<J;et++){let K=F[et];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function i0(F,H,et,J,K){H.isScene!==!0&&(H=rn),it.resetTextureUnits();let Tt=H.fog,Ct=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,wt=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ee.workingColorSpace,It=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ft=gt.get(J.envMap||Ct,It),Yt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,jt=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Pt=!!et.morphAttributes.position,fe=!!et.morphAttributes.normal,Pe=!!et.morphAttributes.color,ve=An;J.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ve=R.toneMapping);let ge=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,qe=ge!==void 0?ge.length:0,Rt=tt.get(J),en=T.state.lights;if(Zt===!0&&(re===!0||F!==k)){let _e=F===k&&J.id===B;Nt.setState(J,F,_e)}let se=!1;J.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==en.state.version||Rt.outputColorSpace!==wt||K.isBatchedMesh&&Rt.batching===!1||!K.isBatchedMesh&&Rt.batching===!0||K.isBatchedMesh&&Rt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Rt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Rt.instancing===!1||!K.isInstancedMesh&&Rt.instancing===!0||K.isSkinnedMesh&&Rt.skinning===!1||!K.isSkinnedMesh&&Rt.skinning===!0||K.isInstancedMesh&&Rt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Rt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Rt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Rt.instancingMorph===!1&&K.morphTexture!==null||Rt.envMap!==Ft||J.fog===!0&&Rt.fog!==Tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Nt.numPlanes||Rt.numIntersection!==Nt.numIntersection)||Rt.vertexAlphas!==Yt||Rt.vertexTangents!==jt||Rt.morphTargets!==Pt||Rt.morphNormals!==fe||Rt.morphColors!==Pe||Rt.toneMapping!==ve||Rt.morphTargetsCount!==qe||!!Rt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Rt.__version=J.version);let pn=Rt.currentProgram;se===!0&&(pn=co(J,H,K),L&&J.isNodeMaterial&&L.onUpdateProgram(J,pn,Rt));let Nn=!1,ci=!1,cr=!1,me=pn.getUniforms(),Re=Rt.uniforms;if(C.useProgram(pn.program)&&(Nn=!0,ci=!0,cr=!0),J.id!==B&&(B=J.id,ci=!0),Rt.needsLights){let _e=n0(T.state.lightProbeGridArray,K);Rt.lightProbeGrid!==_e&&(Rt.lightProbeGrid=_e,ci=!0)}if(Nn||k!==F){C.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),me.setValue(q,"projectionMatrix",F.projectionMatrix),me.setValue(q,"viewMatrix",F.matrixWorldInverse);let hi=me.map.cameraPosition;hi!==void 0&&hi.setValue(q,Se.setFromMatrixPosition(F.matrixWorld)),O.logarithmicDepthBuffer&&me.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&me.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),k!==F&&(k=F,ci=!0,cr=!0)}if(Rt.needsLights&&(en.state.sunShadowMap.length>0&&me.setValue(q,"sunShadowMap",en.state.sunShadowMap,it),en.state.directionalShadowMap.length>0&&me.setValue(q,"directionalShadowMap",en.state.directionalShadowMap,it),en.state.spotShadowMap.length>0&&me.setValue(q,"spotShadowMap",en.state.spotShadowMap,it),en.state.pointShadowMap.length>0&&me.setValue(q,"pointShadowMap",en.state.pointShadowMap,it)),K.isSkinnedMesh){me.setOptional(q,K,"bindMatrix"),me.setOptional(q,K,"bindMatrixInverse");let _e=K.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),me.setValue(q,"boneTexture",_e.boneTexture,it))}K.isBatchedMesh&&(me.setOptional(q,K,"batchingTexture"),me.setValue(q,"batchingTexture",K._matricesTexture,it),me.setOptional(q,K,"batchingIdTexture"),me.setValue(q,"batchingIdTexture",K._indirectTexture,it),me.setOptional(q,K,"batchingColorTexture"),K._colorsTexture!==null&&me.setValue(q,"batchingColorTexture",K._colorsTexture,it));let ui=et.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&X.update(K,et,pn),(ci||Rt.receiveShadow!==K.receiveShadow)&&(Rt.receiveShadow=K.receiveShadow,me.setValue(q,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Re.envMapIntensity.value=H.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Y_()),ci){if(me.setValue(q,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&r0(Re,cr),Tt&&J.fog===!0&&Dt.refreshFogUniforms(Re,Tt),Dt.refreshMaterialUniforms(Re,J,Z,W,T.state.transmissionRenderTarget[F.id]),Rt.needsLights&&Rt.lightProbeGrid){let _e=Rt.lightProbeGrid;Re.probesSH.value=_e.texture,Re.probesMin.value.copy(_e.boundingBox.min),Re.probesMax.value.copy(_e.boundingBox.max),Re.probesResolution.value.copy(_e.resolution)}Vr.upload(q,sh(Rt),Re,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vr.upload(q,sh(Rt),Re,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&me.setValue(q,"center",K.center),me.setValue(q,"modelViewMatrix",K.modelViewMatrix),me.setValue(q,"normalMatrix",K.normalMatrix),me.setValue(q,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let _e=J.uniformsGroups;for(let hi=0,ur=_e.length;hi<ur;hi++){let lh=_e[hi];ht.update(lh,pn),ht.bind(lh,pn)}}return pn}function r0(F,H){F.ambientLightColor.needsUpdate=H,F.lightProbe.needsUpdate=H,F.sunLights.needsUpdate=H,F.sunLightShadows.needsUpdate=H,F.directionalLights.needsUpdate=H,F.directionalLightShadows.needsUpdate=H,F.pointLights.needsUpdate=H,F.pointLightShadows.needsUpdate=H,F.spotLights.needsUpdate=H,F.spotLightShadows.needsUpdate=H,F.rectAreaLights.needsUpdate=H,F.hemisphereLights.needsUpdate=H}function s0(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(F,H,et){let J=tt.get(F);J.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),tt.get(F.texture).__webglTexture=H,tt.get(F.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,H){let et=tt.get(F);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(F,H=0,et=0){z=F,U=H,N=et;let J=null,K=!1,Tt=!1;if(F){let wt=tt.get(F);if(wt.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(q.FRAMEBUFFER,wt.__webglFramebuffer),V.copy(F.viewport),nt.copy(F.scissor),$=F.scissorTest,C.viewport(V),C.scissor(nt),C.setScissorTest($),B=-1;return}else if(wt.__webglFramebuffer===void 0)it.setupRenderTarget(F);else if(wt.__hasExternalTextures)it.rebindTextures(F,tt.get(F.texture).__webglTexture,tt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Yt=F.depthTexture;if(wt.__boundDepthTexture!==Yt){if(Yt!==null&&tt.has(Yt)&&(F.width!==Yt.image.width||F.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(F)}}let It=F.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Tt=!0);let Ft=tt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ft[H])?J=Ft[H][et]:J=Ft[H],K=!0):F.samples>0&&it.useMultisampledRTT(F)===!1?J=tt.get(F).__webglMultisampledFramebuffer:Array.isArray(Ft)?J=Ft[et]:J=Ft,V.copy(F.viewport),nt.copy(F.scissor),$=F.scissorTest}else V.copy(ft).multiplyScalar(Z).floor(),nt.copy(At).multiplyScalar(Z).floor(),$=ie;if(et!==0&&(J=I),C.bindFramebuffer(q.FRAMEBUFFER,J)&&C.drawBuffers(F,J),C.viewport(V),C.scissor(nt),C.setScissorTest($),K){let wt=tt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,wt.__webglTexture,et)}else if(Tt){let wt=H;for(let It=0;It<F.textures.length;It++){let Ft=tt.get(F.textures[It]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+It,Ft.__webglTexture,et,wt)}}else if(F!==null&&et!==0){let wt=tt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,wt.__webglTexture,et)}B=-1};function ah(F){let H=tt.get(F);return(H.__readFormat!==F.format||H.__readType!==F.type)&&(H.__readFormat=F.format,H.__readType=F.type,H.__formatReadable=O.textureFormatReadable(F.format),H.__typeReadable=O.textureTypeReadable(F.type)),H}this.readRenderTargetPixels=function(F,H,et,J,K,Tt,Ct,wt=0){if(!(F&&F.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=tt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){C.bindFramebuffer(q.FRAMEBUFFER,It);try{let Ft=F.textures[wt],Yt=Ft.format,jt=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+wt);let Pt=ah(Ft);if(Pt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=F.width-J&&et>=0&&et<=F.height-K&&q.readPixels(H,et,J,K,yt.convert(Yt),yt.convert(jt),Tt)}finally{let Ft=z!==null?tt.get(z).__webglFramebuffer:null;C.bindFramebuffer(q.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(F,H,et,J,K,Tt,Ct,wt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=tt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(H>=0&&H<=F.width-J&&et>=0&&et<=F.height-K){C.bindFramebuffer(q.FRAMEBUFFER,It);let Ft=F.textures[wt],Yt=Ft.format,jt=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+wt);let Pt=ah(Ft);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.bufferData(q.PIXEL_PACK_BUFFER,Tt.byteLength,q.STREAM_READ),q.readPixels(H,et,J,K,yt.convert(Yt),yt.convert(jt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Pe=z!==null?tt.get(z).__webglFramebuffer:null;C.bindFramebuffer(q.FRAMEBUFFER,Pe);let ve=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Sf(q,ve,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Tt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(fe),q.deleteSync(ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,H=null,et=0){let J=Math.pow(2,-et),K=Math.floor(F.image.width*J),Tt=Math.floor(F.image.height*J),Ct=H!==null?H.x:0,wt=H!==null?H.y:0;it.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,et,0,0,Ct,wt,K,Tt),C.unbindTexture()},this.copyTextureToTexture=function(F,H,et=null,J=null,K=0,Tt=0){let Ct,wt,It,Ft,Yt,jt,Pt,fe,Pe,ve=F.isCompressedTexture?F.mipmaps[Tt]:F.image;if(et!==null)Ct=et.max.x-et.min.x,wt=et.max.y-et.min.y,It=et.isBox3?et.max.z-et.min.z:1,Ft=et.min.x,Yt=et.min.y,jt=et.isBox3?et.min.z:0;else{let Re=Math.pow(2,-K);Ct=Math.floor(ve.width*Re),wt=Math.floor(ve.height*Re),F.isDataArrayTexture?It=ve.depth:F.isData3DTexture?It=Math.floor(ve.depth*Re):It=1,Ft=0,Yt=0,jt=0}J!==null?(Pt=J.x,fe=J.y,Pe=J.z):(Pt=0,fe=0,Pe=0);let ge=yt.convert(H.format),qe=yt.convert(H.type),Rt;H.isData3DTexture?(it.setTexture3D(H,0),Rt=q.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(it.setTexture2DArray(H,0),Rt=q.TEXTURE_2D_ARRAY):(it.setTexture2D(H,0),Rt=q.TEXTURE_2D),C.activeTexture(q.TEXTURE0),C.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);let en=C.getParameter(q.UNPACK_ROW_LENGTH),se=C.getParameter(q.UNPACK_IMAGE_HEIGHT),pn=C.getParameter(q.UNPACK_SKIP_PIXELS),Nn=C.getParameter(q.UNPACK_SKIP_ROWS),ci=C.getParameter(q.UNPACK_SKIP_IMAGES);C.pixelStorei(q.UNPACK_ROW_LENGTH,ve.width),C.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ve.height),C.pixelStorei(q.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(q.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(q.UNPACK_SKIP_IMAGES,jt);let cr=F.isDataArrayTexture||F.isData3DTexture,me=H.isDataArrayTexture||H.isData3DTexture;if(F.isDepthTexture){let Re=tt.get(F),ui=tt.get(H),_e=tt.get(Re.__renderTarget),hi=tt.get(ui.__renderTarget);C.bindFramebuffer(q.READ_FRAMEBUFFER,_e.__webglFramebuffer),C.bindFramebuffer(q.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ur=0;ur<It;ur++)cr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(F).__webglTexture,K,jt+ur),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(H).__webglTexture,Tt,Pe+ur)),q.blitFramebuffer(Ft,Yt,Ct,wt,Pt,fe,Ct,wt,q.DEPTH_BUFFER_BIT,q.NEAREST);C.bindFramebuffer(q.READ_FRAMEBUFFER,null),C.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(K!==0||F.isRenderTargetTexture||tt.has(F)){let Re=tt.get(F),ui=tt.get(H);C.bindFramebuffer(q.READ_FRAMEBUFFER,E),C.bindFramebuffer(q.DRAW_FRAMEBUFFER,D);for(let _e=0;_e<It;_e++)cr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Re.__webglTexture,K,jt+_e):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Re.__webglTexture,K),me?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ui.__webglTexture,Tt,Pe+_e):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ui.__webglTexture,Tt),K!==0?q.blitFramebuffer(Ft,Yt,Ct,wt,Pt,fe,Ct,wt,q.COLOR_BUFFER_BIT,q.NEAREST):me?q.copyTexSubImage3D(Rt,Tt,Pt,fe,Pe+_e,Ft,Yt,Ct,wt):q.copyTexSubImage2D(Rt,Tt,Pt,fe,Ft,Yt,Ct,wt);C.bindFramebuffer(q.READ_FRAMEBUFFER,null),C.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else me?F.isDataTexture||F.isData3DTexture?q.texSubImage3D(Rt,Tt,Pt,fe,Pe,Ct,wt,It,ge,qe,ve.data):H.isCompressedArrayTexture?q.compressedTexSubImage3D(Rt,Tt,Pt,fe,Pe,Ct,wt,It,ge,ve.data):q.texSubImage3D(Rt,Tt,Pt,fe,Pe,Ct,wt,It,ge,qe,ve):F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Tt,Pt,fe,Ct,wt,ge,qe,ve.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Tt,Pt,fe,ve.width,ve.height,ge,ve.data):q.texSubImage2D(q.TEXTURE_2D,Tt,Pt,fe,Ct,wt,ge,qe,ve);C.pixelStorei(q.UNPACK_ROW_LENGTH,en),C.pixelStorei(q.UNPACK_IMAGE_HEIGHT,se),C.pixelStorei(q.UNPACK_SKIP_PIXELS,pn),C.pixelStorei(q.UNPACK_SKIP_ROWS,Nn),C.pixelStorei(q.UNPACK_SKIP_IMAGES,ci),Tt===0&&H.generateMipmaps&&q.generateMipmap(Rt),C.unbindTexture()},this.initRenderTarget=function(F){tt.get(F).__webglFramebuffer===void 0&&it.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?it.setTextureCube(F,0):F.isData3DTexture?it.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?it.setTexture2DArray(F,0):it.setTexture2D(F,0),C.unbindTexture()},this.resetState=function(){U=0,N=0,z=null,C.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function ad(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function ld(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var $_=[],du=new Map,Z_=0;function fl(i){$_=i,du=new Map(i.flatMap(t=>t.items.map(e=>[J_(t.id,e.id),e]))),Z_++}function J_(i,t){return`pack:${i}:${t}`}function K_(i){return i.startsWith("pack:")}var Q_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function cd(i){return De(i)?.parts.find(t=>t.screen)}function De(i){if(!K_(i))return;let t=du.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=Q_[e];return r?du.get(`pack:${r}:${n.join(":")}`):void 0}function dn(i,t){let e=De(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return pl;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));if(t.type==="fan_ceiling")return Math.max(0,i.height-Math.max(.05,t.h));if(t.type==="altar_wall")return 1.45;if(t.type==="water_heater")return 1.7;if(t.type==="range_hood")return 1.35;if(t.type==="microwave")return pu(i,t.x,t.z);if(t.type==="water_pump"&&!i.rooms.some(n=>n.points.length>=3&&ue([t.x,t.z],n.points)))return dl(i,t.x,t.z);switch(e?.mount){case"surface":return pu(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:ks(t)}}function Hn(i){return i.kind==="veranda"||i.kind==="balcony"||i.kind==="canopy"}function ml(i,t){if(i.length<2)return 0;if(t<0){let h=0,f=-1;for(let d=0;d<i.length;d++){let m=i[d],x=i[(d+1)%i.length],g=Math.hypot(x[0]-m[0],x[1]-m[1]);g>f&&([h,f]=[d,g])}return h}let e=i[t],n=i[(t+1)%i.length],r=n[0]-e[0],s=n[1]-e[1],o=Math.hypot(r,s)||1,a=(e[0]+n[0])/2,l=(e[1]+n[1])/2,c=0,u=-1;for(let h=0;h<i.length;h++){if(h===t)continue;let f=i[h],d=i[(h+1)%i.length],m=d[0]-f[0],x=d[1]-f[1],g=Math.hypot(m,x)||1,p=Math.abs((m*r+x*s)/(g*o)),S=Math.abs(r*((f[1]+d[1])/2-l)-s*((f[0]+d[0])/2-a))/o*p;S>u&&([c,u]=[h,S])}return c}var Wr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2},tv={canopy:.02,veranda:.12,balcony:.12};function Vs(i){return tv[i]}function ni(i){return i==="hedge"||i==="fence"||i==="pergola"}function Gs(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=s(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function ev(i,t,e,n){return ii(i)+(t.offset??0)+Wr[t.type]-Gs(t,e,n)}function ii(i){return i.elevation>.3?0:-.2}function dl(i,t,e){let n=(i.outdoor??[]).filter(s=>!ni(s.type)&&s.type!=="pool"&&ue([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?ev(i,r,t,e):ii(i)}var nv={type:"none",pitch:35,overhang:.4},Gw={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...nv}};var ud=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),pl=1.75;function hd(i){return ud.has(i)||!!De(i)?.light}var iv=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ks(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;default:return 0}}function pu(i,t,e){let n=0;for(let r of i.furniture)!(iv.has(r.type)||De(r.type)?.surface)||!ue([t,e],gl(r))||(n=Math.max(n,r.h));return n}var j_=new Set([...ud,"radiator","air_conditioner","water_pump","fan_ceiling","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","kitchen","island","sink"]);var rv=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],sv=["standard","bars","glass_wall"];function er(i,t){return i.type==="door"?i.style&&rv.includes(i.style)?i.style:t?"front":"interior":i.style&&sv.includes(i.style)?i.style:"standard"}function fd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function dd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function nr(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Hs(i){return Math.abs(nr(i))}function pd(i){let t=nr(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function md(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function mu(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function gl(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function ue(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Li=(i,t)=>[i[0]+t[0],i[1]+t[1]],ri=(i,t)=>[i[0]*t,i[1]*t],qs=(i,t)=>i[0]*t[0]+i[1]*t[1],Ws=(i,t)=>i[0]*t[1]-i[1]*t[0],Xs=i=>Math.hypot(i[0],i[1]),si=i=>{let t=Xs(i)||1;return[i[0]/t,i[1]/t]},gd=i=>[-i[1],i[0]],xd=i=>[i[1],-i[0]];function Ys(i,t,e=[]){let n=t.eps??.005,r=[],s=i.filter(b=>!Hn(b)),o=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),a=[],l=b=>{for(let w=0;w<a.length;w++)if(Math.abs(a[w][0]-b[0])<=n&&Math.abs(a[w][1]-b[1])<=n)return w;return a.push([b[0],b[1]]),a.length-1},c=[];for(let b of s){let w=b.points;if(w.length<3||Math.abs(nr(w))<1e-6)continue;let R=nr(w)>0,P=w.map(l);for(let L=0;L<w.length;L++){let I=P[L],E=P[(L+1)%w.length];I!==E&&c.push(R?{u:I,v:E,room:b.id,edge:L,forward:!0}:{u:E,v:I,room:b.id,edge:L,forward:!1})}}let u=o.map(b=>[l(b.a),l(b.b)]),h=new Set;for(let b of s){let w=b.points;w.length<3||(b.wall_splits??[]).forEach((R,P)=>{if(!R||P>=w.length)return;let L=w[P],I=He(w[(P+1)%w.length],L),E=Xs(I);for(let D of R)D>n&&D<E-n&&h.add(l(Li(L,ri(I,D/E))))})}let f=[];for(let b of c){let w=a[b.u],R=a[b.v],P=He(R,w),L=Xs(P),I=ri(P,1/L),E=[];for(let U=0;U<a.length;U++){if(U===b.u||U===b.v)continue;let N=He(a[U],w),z=qs(N,I);z<=n||z>=L-n||Math.abs(Ws(I,N))<=n&&E.push({t:z,id:U})}E.sort((U,N)=>U.t-N.t);let D=[{t:0,id:b.u},...E,{t:L,id:b.v}];for(let U=0;U+1<D.length;U++){let N=D[U],z=D[U+1],B=b.forward?N.t:L-z.t,k=b.forward?z.t:L-N.t;f.push({u:N.id,v:z.id,room:b.room,edge:b.edge,t0:B,t1:k})}}let d=new Map;for(let b of f){let w=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,R=d.get(w);R||d.set(w,R=[]),R.push(b)}let m=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),x=new Map;for(let b of f){let w=`${b.room}:${b.edge}`;x.set(w,[...x.get(w)??[],b.t0].sort((R,P)=>R-P))}let g=b=>{let w=s.find(P=>P.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(w))return w;let R=x.get(`${b.room}:${b.edge}`)??[];return w[R.indexOf(b.t0)]??null},p=b=>{let w=b.map(g).filter(R=>typeof R=="number"&&R>0);return w.length?Math.min(...w):void 0},_=b=>{let w=b.map(R=>s.find(P=>P.id===R.room)?.wall_thickness?.[R.edge]).filter(R=>typeof R=="number"&&R>0);return w.length?Math.max(...w):void 0},S=b=>b.some(w=>g(w)===0),v=[],M=[];for(let b of d.values()){let w=b[0],R=b.find(P=>P!==w&&P.u===w.v&&P.v===w.u&&P.room!==w.room);for(let P of b)P!==w&&P!==R&&P.room!==w.room&&r.push(`overlap:${w.room}:${P.room}`);if(S(R?[w,R]:[w])){R&&v.push([w.room,R.room]);continue}if(R){let P=_([w,R])??t.interior;M.push({a:w.u,b:w.v,left:P/2,right:P/2,exterior:!1,roomLeft:w.room,roomRight:R.room,sources:[m(w),m(R)],height:p([w,R])})}else M.push({a:w.u,b:w.v,left:0,right:_([w])??t.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[m(w)],height:p([w])})}o.forEach((b,w)=>{let[R,P]=u[w];if(R===P)return;let L=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],I=i.find(U=>U.points.length>=3&&ue(L,U.points))?.id??null,E=(b.thickness??t.interior)/2,D=typeof b.height=="number"&&b.height>0?b.height:void 0;M.push({free:b.id,a:R,b:P,left:E,right:E,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:D})}),M=av(M,a,h);let T=cv(M,a);return{walls:M.map((b,w)=>{let R=a[b.a],P=a[b.b],L=T.get(`${w}:a`),I=T.get(`${w}:b`),E=uv([L.right,I.left,P,I.right,L.left,R],1e-6);return{id:ov(R,P),a:[R[0],R[1]],b:[P[0],P[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:E,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(r)],open:v}}function ov(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function bd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function av(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=bd(l)),c.a!==o&&(c=bd(c)),l.a===c.b)continue;let u=si(He(t[l.b],t[l.a])),h=si(He(t[c.b],t[c.a]));if(Math.abs(Ws(u,h))>1e-6||qs(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:lv(l.sources,c.sources)},d=n.filter((m,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function lv(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function cv(i,t){let e=new Map;i.forEach((r,s)=>{let o=si(He(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:ri(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Li(o,ri(gd(c.d),c.left)),right:Li(o,ri(xd(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],h=s[(c+1)%s.length],f=Li(o,ri(gd(u.d),u.left)),d=Li(o,ri(xd(h.d),h.right)),m=Ws(u.d,h.d);if(Math.abs(m)<1e-4)continue;let x=Ws(He(d,f),h.d)/m,g=Li(f,ri(u.d,x));Xs(He(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function uv(i,t){let e=i.filter((r,s)=>Xs(He(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=He(o,s),c=He(a,o);if(Math.abs(Ws(si(l),si(c)))<1e-7&&qs(l,c)>0){e=e.filter((u,h)=>h!==r),n=!0;break}}}return e}function _d(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=si(He(r,n));return Li(n,ri(s,e))}function vd(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=si(He(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Li(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function yd(i,t,e){if(!t.wall)return hv(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=_d(e.room,0,t.offset);return{wall:n,s:qs(He(r,n.a),si(He(n.b,n.a)))}}function hv(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=_d(t,e,n);return{wall:r,s:qs(He(o,r.a),si(He(r.b,r.a)))}}return null}var Zs=Math.PI/180;function Wn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function Pn(i){let t=Wn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Zs),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Zs);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=Td(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var fv=.14;function Sd(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!ue([t,e],s.points))continue;let[u,h]=Fi(s,t,e),f=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((f?null:Js(qr(s,{u0:d,u1:d,a:d,b:d}),u,h))??Pn(s).y(h))-fv;n=n===null?x:Math.max(n,x)}return n}function gu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Hs(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=Md([a[0]-o[0],a[1]-o[1]]),u=Md([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],m=h[1]+f[1],x=Math.hypot(d,m);if(x<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+m*h[1])/x,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/x*t*p,a[1]+m/x*t*p])}return r}function Md(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function wd(i,t){if(i.points&&i.points.length>=3)return gu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var $s=Math.tan(30*Zs);function Td(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+$s*(i-o+s))/(2*$s))),u=a+(c-s)*$s;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*$s:f<=i-o?l+(i-o-f)*$s:e+(i-f)*r}}function qr(i,t){let e=Wn(i),n=Pn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,S)=>[_,S,n.y(S)],u=c(a,-s),h=c(l,-s),f=c(l,r+o),d=c(a,r+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Zs),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Zs);if(i.shape==="pent"){let _=[u,h,f,d];return{faces:[_],rim:_,ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),S=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],M=i.shape==="pyramid"?[[u,h,S],[h,f,S],[f,d,S],[d,u,S]]:[[u,h,v,S],[S,v,f,d],[d,u,S],[h,f,v]],T=i.shape==="pyramid"?[[u,S],[d,S],[h,S],[f,S]]:[[S,v],[u,S],[d,S],[h,v],[f,v]];return{faces:M,rim:[u,h,f,d],ridges:T,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(r)),S=_+(n.rh-_)*.55,v=m>1e-6?Math.min(n.vr,(S-i.eave_a)/m):n.vr,M=x>1e-6?Math.max(n.vr,r-(S-i.eave_b)/x):n.vr,T=Math.min((e.u1-e.u0)/2-.1,(n.rh-S)/Math.max(.2,m)),A=[e.u0+T,n.vr,n.rh],b=[e.u1-T,n.vr,n.rh],w=[a,v,S],R=[a,M,S],P=[l,v,S],L=[l,M,S];return{faces:[[u,h,P,b,A,w],[A,b,L,f,d,R],[R,w,A],[P,L,b]],rim:[u,h,P,L,f,d,R,w],ridges:[[A,b],[w,A],[R,A],[P,b],[L,b]],gable:[[0,n.y(0)],[v,S],[M,S],[r,n.y(r)]]}}if(i.shape==="mansard"){let _=Td(r,i.eave_a,i.eave_b,m,x),S=[a,_.vla,_.yla],v=[l,_.vla,_.yla],M=[a,r-_.vlb,_.ylb],T=[l,r-_.vlb,_.ylb],A=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[u,h,v,S],[S,v,b,A],[A,b,T,M],[M,T,f,d]],rim:[u,h,v,b,T,f,d,M,A,S],ridges:[[A,b],[S,v],[M,T]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[r-_.vlb,_.ylb],[r,n.y(r)]]}}let g=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,h,p,g],[g,p,f,d]],rim:[u,h,p,f,d,g],ridges:[[g,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function Js(i,t,e){let n=null;for(let r of i.faces){if(!ue([t,e],r.map(_=>[_[0],_[1]])))continue;let[s,o]=r,a=r.slice(2).find(_=>Math.abs((o[0]-s[0])*(_[1]-s[1])-(o[1]-s[1])*(_[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],h=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],m=c*d-u*f,x=u*h-l*d,g=l*f-c*h;if(Math.abs(x)<1e-9)continue;let p=s[2]-(m*(t-s[0])+g*(e-s[1]))/x;n=n===null?p:Math.min(n,p)}return n}function Fi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function dv(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function xu(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=dv(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function bu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Wn(t),n=Pn(t).rh,r=qr(i,{u0:0,u1:0,a:0,b:0}),s=Pn(i),o=m=>{let[x,g]=e.at(m,e.w/2),[p,_]=Fi(i,x,g);return Js(r,p,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let m=.5;m<h;m+=.05)if(o(l+u*m)>=n-.02){f=l+u*m;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function Ed(i,t){let e=bu(i,t),n=Wn(e),r=Pn(e),s=qr(i,{u0:0,u1:0,a:0,b:0}),o=Pn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[x,g]=Fi(i,d,m);return Js(s,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,m=c*(f+1)/h,x=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),_=1/0,S=-1/0;for(let b=0;b<=40;b++){let w=n.w*b/40;r.y(w)>p+.02&&(_=Math.min(_,w),S=Math.max(S,w))}if(!(S-_>.05))continue;let v=n.at(x,_),M=n.at(g,S),T=Fi(i,v[0],v[1]),A=Fi(i,M[0],M[1]);u.push({u0:Math.min(T[0],A[0]),u1:Math.max(T[0],A[0]),v0:Math.min(T[1],A[1]),v1:Math.max(T[1],A[1])})}return u}function Xr(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function Ad(i,t){let e=Xr(i,0,t.u0,!0),n=Xr(i,0,t.u1,!1),r=Xr(Xr(i,0,t.u0,!1),0,t.u1,!0),s=Xr(r,1,t.v0,!0),o=Xr(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Hs(a.map(l=>[l[0],l[1]])))>1e-6)}function xl(i,t,e){let n=Wn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(h=>ue(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Rd(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}var Ln=1e-4;function _u(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Cd(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Ln&&a<1-Ln&&l>-Ln&&l<1+Ln?a:null}function vu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Ln||o>=1-Ln?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Ln?o:null}function pv(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Cd(n,r,o,a)!==null||vu(o,n,r)!==null||vu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Ln)return!0}}return ue(i[0],t)||ue(t[0],i)}function mv(i){let t=i.map(s=>_u(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let m=h[d],x=h[(d+1)%h.length],g=Cd(l,c,m,x)??vu(m,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Ln)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==o&&ue(x,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Ln&&Math.hypot(p[0]-d[0],p[1]-d[1])<Ln)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&_u(o)>1e-6&&n.push(o)}return n}function yu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&pv(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:mv(s))}function gv(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Id(i,t,e=.03){return i.every(n=>ue(n,t)||t.some((r,s)=>gv(n,r,t[(s+1)%t.length])<=e))}function Pd(i,t){let e=_u(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var ir=Ht(3662079,.95),Mu=Ht(3662079,1),Di=Ht(5995775,.34),Ld=Ht(5995775,.22),bl=[-.55,.83],qt=-1,_l=16,rr=32,Fd=48,Su=64,ce=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=qt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Kt;return t.setAttribute("position",new Vt(this.p,3)),t.setAttribute("color",new Vt(this.c,3)),t.setAttribute("fold",new Vt(this.f,1)),this.uv&&t.setAttribute("uv",new Vt(this.uv,2)),this.tile&&t.setAttribute("tile",new Vt(this.tile,2)),t.computeBoundingSphere(),t}},Ve=class{p=[];c=[];f=[];seg(t,e,n=ir,r=qt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,qt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,qt),this.seg(c,a,n,s)}geometry(){let t=new Kt;return t.setAttribute("position",new Vt(this.p,3)),t.setAttribute("color",new Vt(this.c,3)),t.setAttribute("fold",new Vt(this.f,1)),t}};function Dd(i,t,e,n){let s=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((m,x)=>m+(f.p[x]-m)*d),c:h.c.map((m,x)=>m+(f.c[x]-m)*d),uv:h.uv&&f.uv?h.uv.map((m,x)=>m+(f.uv[x]-m)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let m=0;m<3;m++){let x=h*3+m;for(let g=0;g<3;g++)i.p[x*3+g]=f[m].p[g],i.c[x*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<s;g++)i.uv[x*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[m].tile[g];i.f[x]=d}},c=(h,f)=>{let d=i.p.length/9;for(let m of h)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv?.push(...m.uv??[.5,.5]),i.tile?.push(...m.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(b=>b.p[1]>e+1e-6),m=f.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let b=0;b<3;b++)i.f[h*3+b]=n;continue}let x=i.f[h*3],g=(b,w)=>a(b,w,(e-b.p[1])/(w.p[1]-b.p[1])),p=d.filter(Boolean).length,_=p===1?d.indexOf(!0):d.indexOf(!1),S=f[_],v=f[(_+1)%3],M=f[(_+2)%3],T=g(S,v),A=g(M,S);p===1?(l(h,[S,T,A],n),c([T,v,M],x),c([T,M,A],x)):(l(h,[S,T,A],x),c([T,v,M],n),c([T,M,A],n))}}function Nd(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=h[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var oe=Math.PI/180;function Ht(i,t){let e=new st(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function xv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function Yr(i,t=[]){let e=i.map(([n,r])=>new Jt(n,r));return vs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new Jt(r,s))))}function Ud(i,t,e,n,r,s,o){let a=new st(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],x=t[(d+1)%4],g=e[d],p=e[(d+1)%4],_=x[0]-m[0],S=x[1]-m[1],v=Math.hypot(_,S);if(v<1e-6)continue;let T=.8+.28*((S/v*bl[0]-_/v*bl[1]+1)/2),A=(g[0]+p[0]-m[0]-x[0])/2*(-S/v)+(g[1]+p[1]-m[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),w=Ht(s,l(n)*T).lerp(a,b),R=Ht(s,l(r)*T).lerp(a,b);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],w,R,R),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[x[0],n,x[1]],w,R,w)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[h[0],r,h[1]],a))}function Od(i,t,e,n,r,s,o,a,l,c){let u=new st(l),h=[];for(let d=0;d<c;d++){let m=d/c*Math.PI*2;h.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let f=(d,m)=>{let x=t(d,h[m%c].s);return[x[0],h[m%c].y,x[1]]};for(let d=0;d<c;d++){let m=(d+.5)/c*Math.PI*2,x=Ht(a,.62+.4*Math.max(0,Math.cos(m)));i.tri(f(e,d),f(n,d+1),f(n,d),x),i.tri(f(e,d),f(e,d+1),f(n,d+1),x)}for(let d of[e,n]){let m=t(d,r),x=[m[0],s,m[1]];for(let g=0;g<c;g++)i.tri(x,f(d,g),f(d,g+1),u)}}function xe(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??qt,u=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),h=(o.holes??[]).map(m=>xv(m)>0?[...m].reverse():m),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Yr(t,h);if(o.topFace!==!1){let m=new st(s);for(let[x,g,p]of d){let _=f[x],S=f[g],v=f[p];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[S[0],a(S),S[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=Ht(r,.55);for(let[x,g,p]of d){let _=f[x],S=f[g],v=f[p];i.tri([_[0],e,_[1]],[S[0],e,S[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...h])for(let x=0;x<m.length;x++){let g=m[x],p=m[(x+1)%m.length],_=p[0]-g[0],S=p[1]-g[1],v=Math.hypot(_,S);if(v<1e-6)continue;let T=.8+.28*((S/v*bl[0]-_/v*bl[1]+1)/2),A=a(g),b=a(p),w=Ht(r,u(e)*T),R=Ht(r,u(A)*T),P=Ht(r,u(b)*T);i.tri([g[0],e,g[1]],[g[0],A,g[1]],[p[0],b,p[1]],w,R,P,void 0,c),i.tri([g[0],e,g[1]],[p[0],b,p[1]],[p[0],e,p[1]],w,P,w,void 0,c)}}var y={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},Q=Ht(5995775,.3),pt=Ht(5995775,.17),mt=Ht(3662079,.45),Ni=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Xd(n)}rotated(t,e,n){let r=n*oe,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];xe(this.buf,wu(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==wu(l)&&(l.reverse(),c.reverse()),Ud(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,h=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,m=t==="x"?e:n,x=t==="x"?n:e,g=(_,S)=>t==="x"?this.tf(_,S):this.tf(S,_),p=this.buf.p.length;if(Od(this.buf,g,m-o/2,m+o/2,x,d,f,l,c,u),this.mirrored&&vl(this.buf,p),h)for(let _ of[m-o/2,m+o/2])for(let S=0;S<u;S++){let v=S/u*Math.PI*2,M=(S+1)/u*Math.PI*2;this.line(g(_,x+Math.sin(v)*f),g(_,x+Math.sin(M)*f),d+Math.cos(v)*f,d+Math.cos(M)*f,h)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(xe(this.buf,wu(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],s,s,c)}tubeYZ(t,e,n,r,s=8,o=null){if(e.length<2||n<1e-4)return;let a=e.map(([h,f],d)=>{let m=e[Math.max(0,d-1)],x=e[Math.min(e.length-1,d+1)],g=x[0]-m[0],p=x[1]-m[1],_=Math.hypot(g,p)||1;return Array.from({length:s},(S,v)=>{let M=v/s*Math.PI*2,T=t+Math.cos(M)*n,A=h-p/_*Math.sin(M)*n,b=f+g/_*Math.sin(M)*n,w=this.tf(T,b);return[w[0],A,w[1]]})}),l=this.buf.p.length,c=new st(r);for(let h=0;h<a.length-1;h++)for(let f=0;f<s;f++){let d=(f+1)%s;this.buf.tri(a[h][f],a[h+1][f],a[h+1][d],c),this.buf.tri(a[h][f],a[h+1][d],a[h][d],c)}let u=(h,f)=>{let d=this.tf(t,e[h][1]),m=[d[0],e[h][0],d[1]];for(let x=0;x<s;x++){let g=(x+1)%s;this.buf.tri(m,a[h][f?g:x],a[h][f?x:g],c)}};if(u(0,!0),u(e.length-1,!1),this.mirrored&&vl(this.buf,l),o)for(let h=0;h<e.length-1;h++)this.seg(t,e[h][0],e[h][1],t,e[h+1][0],e[h+1][1],o)}seg(t,e,n,r,s,o,a=Q){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,qt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Xd(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function wu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function sr(i,t,e,n,r,s,o=y.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function Qs(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,s,h,r,s,pt)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),f,s+.012,h+Math.min(.1,c/4),f,s+.012,mt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,mt)}}}function Bd(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);sr(i,t,e,.07,.05,.05,y.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,y.fabric,y.fabricTop,.04,Q),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],u-.08,n,y.fabric,y.fabricTop,Q),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,y.fabric,y.fabricTop,.04,Q),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,y.fabric,y.fabricTop,.04,Q);let d=(o-c-(s+c))/r;for(let m=0;m<r;m++){let x=s+c+d*m+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,y.cushion,y.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,y.cushion)}}function zd(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);sr(i,t,e,.08,.06,.03,y.wood,!0),i.box(o,a,.08,l,r+.06,s,y.wood,y.woodTop,Q),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,y.white,y.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,y.wood,y.woodTop,Q),i.box(o,a,n-.05,n,r,r+.09,y.wood,y.woodTop,pt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,y.cushion,y.fabricTop,.025,pt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,y.cushion,y.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let m=o+.1+f*d,x=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,y.whiteTop),i.loft([m+.03,m+f-.03,x,x+g],[m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,y.whiteTop,y.whiteTop,pt)}}function bv(i,t,e,n){let r=Math.min(.46,n*.52);sr(i,t,e,r-.04,.035,.02,y.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,y.wood,y.woodTop,Q),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,y.cushion,y.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,y.wood,y.woodTop,Q)}function _v(i,t,e,n){sr(i,t,e,n-.04,.06,.05,y.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.wood,y.woodTop,mt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,y.body)}function vv(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,y.wood,y.woodTop,Q),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,y.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,y.body,y.bodyTop,Q);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,pt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,mt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,y.dark,y.dark,mt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,y.metal)}function oi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,y.body,y.bodyTop,Q),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,y.dark),Qs(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function yv(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,y.wood,y.woodTop,Q),i.box(t/2-.025,t/2,0,n,-e/2,e/2,y.wood,y.woodTop,Q),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,y.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,y.wood,y.woodTop,pt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?y.fabric:y.cushion,y.fabricTop),l+=u+.006,c++}}}}function Mv(i,t,e,n){let r=Math.max(1,Math.round(t/.6));oi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,Q)}function Sv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,y.white,y.whiteTop,Q);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,pt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,mt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,mt)}function wv(i,t,e,n){let r=e/2-qd;i.box(-t/2,t/2,.02,n,-e/2,r,y.body,y.bodyTop,Q),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,y.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,pt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,pt))}var qd=.06;function Yd(i,t,e,n,r){let s=i.p.length;Tv(i,t,e,n,r),t.mirror&&vl(i,s)}function Tv(i,t,e,n,r){let s=t.rotation*oe,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],u=e+.05,h=e+t.h-.02,f=new st(.75,.1,.14),d=new st(y.dark),m=new st(y.accent),x=t.w/2-.006,g=(v,M,T)=>{let A=T/p,b=new st(2043212).lerp(f,A),w=new st(y.body).lerp(f,A*.8),R=Math.cos(T),P=Math.sin(T),L=(D,U)=>c(v+M*(D*R-U*P),t.d/2+D*P+U*R),I=(D,U,N,z)=>{let[B,k,V,nt]=D;i.tri([B[0],U,B[1]],[k[0],U,k[1]],[V[0],N,V[1]],z),i.tri([B[0],U,B[1]],[V[0],N,V[1]],[nt[0],N,nt[1]],z)},E=(D,U,N,z,B,k,V,nt=V)=>{let $=[L(D,k),L(U,k),L(U,B),L(D,B)];I([$[0],$[1],$[1],$[0]],N,z,nt),I([$[3],$[2],$[2],$[3]],N,z,V),I([$[0],$[3],$[3],$[0]],N,z,V),I([$[1],$[2],$[2],$[1]],N,z,V),I([$[0],$[1],$[2],$[3]],z,z,V),I([$[3],$[2],$[1],$[0]],N,N,V)};return E(0,x,u,h,-qd,0,w,b),E(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),E},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function Ev(i,t,e,n){oi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.dark,y.dark,Q);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,y.dark,1451583,12,mt)}}function Av(i,t,e,n){oi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,Q),i.box(r/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,Q),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,y.whiteTop,y.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,y.whiteTop,y.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,y.metal,y.metal,mt),i.cyl(0,-e/2+.05,.02,n,n+.28,y.metal,y.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,y.metal)}function Rv(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,y.white,y.whiteTop,Q),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,y.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,y.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,y.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,y.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,y.glass,y.glass,mt),i.cyl(-t/2+.04,0,.02,n,n+.12,y.metal,y.metal,8)}function Cv(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,y.whiteTop,y.whiteTop,Q),i.cyl(0,0,.04,.05,.052,y.metal,y.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,mt),i.seg(r,n,s,o,n,a,mt),i.seg(o,.05,a,o,n,a,mt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,y.metal,y.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,y.metal,y.metal,12,mt)}function Iv(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,y.white,y.whiteTop,Q),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,y.white,y.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,y.white,y.whiteTop,12,Q),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,y.whiteTop)}function Pv(i,t,e,n){oi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,y.white,y.whiteTop,Q),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,y.glass,y.glass,mt),i.cyl(0,-e/2+.06,.018,n,n+.2,y.metal,y.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,y.glass,y.glass,mt)}function Lv(i,t,e,n){oi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,y.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,y.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,y.dark,y.dark,mt)}function kd(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,y.pot,y.pot,10,Q),i.cyl(0,0,r*.08,s,n*.55,y.wood,y.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,y.plant,y.plantTop,8,a===o-1?pt:null)}}function Fv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,y.fabric,y.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,Q)}function Dv(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let h=e/2-o*u,f=h-o,d=s*(u+1);i.box(-t/2,t/2,0,d,f,h,y.wood,y.woodTop),i.seg(-t/2,d,h,t/2,d,h,Q)}i.seg(-t/2,0,e/2,-t/2,s,e/2,Q);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,pt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),mt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=s*(u+1);i.seg(l,f,h,l,f+a,h,pt)}}function Nv(i,t,e,n){let r=Math.max(6,Math.round(n/.18)),s=Math.floor(r/2),o=r-s,a=n/r,l=a*s,c=Math.min(.16,t*.12),u=(t-c)/2,h=Math.min(e*.34,Math.max(e*.22,u)),f=-e/2+h,d=e-h,m=d/s,x=d/o,g=-t/2,p=-c/2,_=c/2,S=t/2;for(let I=0;I<s;I++){let E=e/2-m*I,D=E-m,U=a*(I+1);i.box(g,p,0,U,D,E,y.white,y.whiteTop),i.seg(g,U,E,p,U,E,Q)}i.box(-t/2,t/2,0,l,-e/2,f,y.white,y.whiteTop,Q);for(let I=0;I<o;I++){let E=f+x*I,D=E+x,U=l+a*(I+1);i.box(_,S,0,U,E,D,y.white,y.whiteTop),i.seg(_,U,E,S,U,E,Q)}let v=Math.min(.9,Math.max(.55,n*.32)),M=[g+.03,p-.03],T=[_+.03,S-.03];for(let I of M){i.seg(I,a+v,e/2-m/2,I,l+v,f,mt);for(let E=0;E<s;E+=3){let D=e/2-m*(E+.5),U=a*(E+1);i.seg(I,U,D,I,U+v,D,pt)}}let A=Math.max(1,o-3);for(let I of T){i.seg(I,l+v,f,I,l+a*A+v,f+x*(A-.5),mt);for(let E=0;E<A;E+=3){let D=f+x*(E+.5),U=l+a*(E+1);i.seg(I,U,D,I,U+v,D,pt)}}let b=M[0],w=M[1],R=T[0],P=T[1],L=-e/2+.03;i.seg(w,l+v,f,R,l+v,f,mt),i.seg(b,l+v,f,b,l+v,L,mt),i.seg(b,l+v,L,P,l+v,L,mt),i.seg(P,l+v,L,P,l+v,f,mt);for(let[I,E]of[[w,f],[R,f],[b,f],[b,L],[P,L],[P,f]])i.seg(I,l,E,I,l+v,E,pt)}function Uv(i,t,e,n){sr(i,t,e,.12,.03,.04,y.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,y.wood,y.woodTop,Q),Qs(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Ov(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,y.wood,y.woodTop,Q),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,y.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,pt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,mt)}}function Bv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,y.wood,y.woodTop,Q),Qs(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,y.body,y.bodyTop,Q),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.wood,y.woodTop,Q);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,y.metal,y.metal)}}function Vd(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,y.wood,y.woodTop,Q),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,y.wood,y.woodTop,Q),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,y.cushion,y.cushion,pt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,y.wood,y.woodTop,Q),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,y.wood,y.woodTop,Q),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,y.cushion,y.cushion,pt))}function zv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,y.metal,y.metal,12),i.cyl(0,0,.025,.02,n-.05,y.metal,y.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,y.metal,y.metal,12,pt),i.cyl(0,0,r,n-.05,n,y.cushion,y.fabricTop,14,Q)}function kv(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,y.metal),i.box(-.03,.03,.04,.08,-r,r,y.metal),i.cyl(0,0,.06,.02,.1,y.dark,y.dark,8),i.cyl(0,0,.025,.1,.44,y.metal,y.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,y.fabric,y.cushion,Q),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,y.fabric,y.fabricTop,Q),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,y.metal)}function Vv(i,t,e,n){sr(i,t,e,.08,.04,.05,y.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,y.fabric,y.cushion,Q)}function Gv(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,y.body,y.bodyTop,Q),Qs(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function Hv(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,y.body,y.bodyTop,Q),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,y.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,y.dark,y.dark,mt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,mt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,pt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,mt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,mt)}function Wv(i,t,e,n){let r=Math.min(.055,t*.075),s=e/2,o=-e/2,a=Math.min(.62,n*.3);i.box(-t/2,t/2,.02,n,o,o+.035,y.body,y.bodyTop,Q),i.box(-t/2,-t/2+r,.02,n,o,s,y.body,y.bodyTop,Q),i.box(t/2-r,t/2,.02,n,o,s,y.body,y.bodyTop,Q),i.box(-t/2,t/2,n-r,n,o,s,y.body,y.bodyTop,Q),i.box(-t/2,t/2,.02,a,o,s-.015,y.body,y.bodyTop,Q),i.box(-t/2+.02,t/2-.02,0,.08,o+.02,s-.04,y.dark),i.box(-t/2+r,t/2-r,a,n-r,o+.036,o+.05,y.dark,y.dark);for(let l of[a+(n-a)*.25,a+(n-a)*.5,a+(n-a)*.75])i.box(-t/2+r,t/2-r,l-.012,l+.012,o+.05,s-.025,y.glass,y.glass,mt);i.box(-t/2+r,-r*.35,a+r,n-r*1.5,s-.012,s,y.glass,y.glass,pt),i.box(r*.35,t/2-r,a+r,n-r*1.5,s-.012,s,y.glass,y.glass,pt),i.box(-r*.35,r*.35,a,n-r,s-.02,s+.005,y.metal,y.metal,Q),i.box(-t/2,t/2,a-r*.5,a+r*.5,s-.02,s+.005,y.body,y.bodyTop,Q),i.seg(-r*1.4,a+(n-a)*.46,s+.012,-r*1.4,a+(n-a)*.62,s+.012,mt),i.seg(r*1.4,a+(n-a)*.46,s+.012,r*1.4,a+(n-a)*.62,s+.012,mt),i.seg(0,.12,s+.012,0,a-.12,s+.012,pt)}function Xv(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,y.body,y.bodyTop,Q),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,y.dark),Qs(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,Q)}function qv(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,y.body,y.bodyTop,Q),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,y.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,y.whiteTop,y.whiteTop,Q)}function Gd(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,y.white,y.whiteTop,Q);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,pt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,mt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(h)*a,o+Math.sin(h)*a,s,mt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,pt)}}function Yv(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),y.wood,y.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,y.wood,y.woodTop,Q),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,y.white,y.whiteTop,pt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,y.whiteTop,y.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,y.wood,y.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,Q);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,pt)}function $v(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,y.metal,y.metal,12),i.cyl(0,0,.05,.03,n-.04,y.wood,y.wood,8),i.cyl(0,0,r,n-.04,n,y.wood,y.woodTop,20,Q)}function Zv(i,t,e,n){sr(i,t,e,n-.03,.04,.03,y.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,y.wood,y.woodTop,Q),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,y.body,y.bodyTop,pt)}function Jv(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,y.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,y.dark,y.dark,mt)}function Kv(i,t,e,n){let r=Eu;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,y.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,y.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,y.white,y.whiteTop,Q);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,pt)}}function Qv(i,t,e,n){let r=Au,s=e/2;i.box(-t*.34,-t*.27,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,y.metal),i.box(t*.27,t*.34,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,y.metal),i.box(-t/2,t/2,r,r+n,-e/2,s,y.white,y.whiteTop,Q),i.seg(-t*.42,r+n*.82,s+.003,t*.42,r+n*.82,s+.003,pt);let o=r+n*.08,a=r+n*.27;i.box(-t*.43,t*.43,o,a,s-.018,s+.006,y.dark,y.dark,pt),i.seg(-t*.42,o+n*.04,s+.009,t*.42,a-n*.025,s+.009,mt);for(let l=1;l<8;l++){let c=-t*.4+t*.8*(l/8);i.seg(c,o+n*.025,s+.011,c+t*.018,a-n*.025,s+.011,pt)}i.seg(t*.37,r+n*.67,s+.006,t*.4,r+n*.67,s+.006,mt)}function jv(i,t,e,n){let r=Math.min(.045,n*.12),s=Math.min(t*.42,n*.48),o=r+n*.13,a=o+s;for(let d of[-t*.32,t*.32])i.box(d-t*.055,d+t*.055,0,r,-e*.34,e*.3,y.dark);i.box(-t*.43,t*.43,r,r+n*.06,-e*.4,e*.36,y.metal,y.metal,Q),i.lyingCyl("z",0,-e*.13,o,a,e*.46,s,y.body,y.bodyTop,14,Q),i.lyingCyl("z",0,-e*.39,o+s*.08,a-s*.08,e*.1,s*.84,y.dark,y.metal,12,pt);for(let d=-2;d<=2;d++){let m=-e*.23+d*e*.055;i.box(-s*.54,s*.54,o+s*.43,o+s*.57,m-e*.012,m+e*.012,y.metal,y.metal)}let l=Math.min(t*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,e*.17,c,c+l,e*.22,l,y.accent,y.bodyTop,16,Q),i.lyingCyl("z",0,e*.39,c+l*.34,c+l*.66,e*.22,l*.32,y.metal,y.dark,12,mt);let u=t*.16,h=e*.13,f=Math.min(t,e)*.075;i.cyl(u,h,f*1.35,c+l*.72,c+l*.82,y.accent,y.accent,12,Q),i.cyl(u,h,f,c+l*.82,n,y.metal,y.metal,12,mt),i.box(-t*.11,t*.11,c+l*.58,c+l*.72,e*.285,e*.3,y.dark,y.dark,mt)}function ty(i,t,e,n){let r=n*.68,s=Math.min(.09,t*.08);for(let o of[-t/2+s,t/2-s])for(let a of[-e/2+s,e/2-s])i.loft([o-s*.36,o+s*.36,a-s*.36,a+s*.36],[o-s/2,o+s/2,a-s/2,a+s/2],0,r-.03,y.wood,y.woodTop);i.box(-t/2,t/2,r-.08,r,-e/2,e/2,y.wood,y.woodTop,Q),i.box(-t*.43,t*.43,n*.18,r-.1,e/2-.065,e/2,y.wood,y.woodTop,Q);for(let o of[-t*.28,0,t*.28])i.seg(o,n*.23,e/2+.004,o,r-.16,e/2+.004,pt);i.seg(-t*.12,n*.4,e/2+.006,0,n*.52,e/2+.006,mt),i.seg(0,n*.52,e/2+.006,t*.12,n*.4,e/2+.006,mt),i.seg(t*.12,n*.4,e/2+.006,0,n*.28,e/2+.006,mt),i.seg(0,n*.28,e/2+.006,-t*.12,n*.4,e/2+.006,mt),i.cyl(0,e*.06,Math.min(t,e)*.09,r,r+n*.075,y.accent,y.woodTop,14,mt);for(let o of[-t*.035,0,t*.035])i.box(o-.006,o+.006,r+n*.06,r+n*.2,e*.05,e*.065,y.accent);for(let o of[-t*.28,t*.28])i.cyl(o,e*.02,Math.min(t,e)*.035,r,r+n*.035,y.metal,y.metal,10),i.cyl(o,e*.02,Math.min(t,e)*.017,r+n*.035,r+n*.15,y.metal,y.metal,8);i.box(-t*.18,t*.18,r+n*.04,n*.85,-e*.33,-e*.27,y.wood,y.woodTop,mt),i.box(-t*.46,t*.46,n*.875,n*.92,-e*.42,e*.36,y.wood,y.woodTop,Q);for(let o of[-t*.4,t*.4])i.box(o-s/2,o+s/2,r,n*.92,-e*.36,-e*.26,y.wood,y.woodTop,Q);i.loft([-t/2,t/2,-e/2,e*.42],[-t*.42,t*.42,-e*.42,e*.31],n*.92,n,y.wood,y.woodTop,Q)}function ey(i,t,e,n){let r=n*.18;i.box(-t/2,t/2,r,r+n*.14,-e/2,e/2,y.wood,y.woodTop,Q),i.box(-t*.43,t*.43,r+n*.14,n*.86,-e/2,-e/2+Math.min(.05,e*.18),y.wood,y.woodTop,Q);for(let s of[-t*.36,t*.36])i.box(s-.025,s+.025,0,r,-e/2,-e*.18,y.wood,y.woodTop,Q),i.seg(s,n*.02,-e*.18,s,r,e*.34,Q);i.loft([-t/2,t/2,-e/2,e/2],[-t*.42,t*.42,-e*.42,e*.36],n*.86,n,y.wood,y.woodTop,Q),i.cyl(0,e*.08,Math.min(t,e)*.09,r+n*.14,r+n*.28,y.accent,y.woodTop,12,mt);for(let s of[-t*.03,0,t*.03])i.box(s-.005,s+.005,r+n*.25,r+n*.5,e*.075,e*.09,y.accent)}function ny(i,t,e,n){i.box(-t*.43,t*.43,0,n*.06,-e*.34,e*.34,y.dark),oi(i,t,e,n-.025,Math.max(2,Math.round(t/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-t/2+.03,r,e/2+.003,t/2-.03,r,e/2+.003,pt);for(let r of[-t*.25,t*.25])for(let s=-1;s<=1;s++)i.seg(r-t*.07,n*(.32+s*.018),e/2+.006,r+t*.07,n*(.32+s*.018),e/2+.006,pt);i.box(-t/2,t/2,n-.025,n,-e/2,e/2,y.woodTop,y.woodTop,mt)}function iy(i,t,e,n){let r=Math.min(t*.58,e*.22,n*.42),s=t*.66,o=e*.34,a=-e*.34;for(let l of[a,o])i.lyingCyl("x",0,l,0,r,s,r,y.dark,y.metal,14,Q),i.lyingCyl("x",0,l,r*.16,r*.84,s+.012,r*.46,y.metal,y.metal,12,pt);i.loft([-t*.3,t*.3,a,e*.12],[-t*.2,t*.2,-e*.18,e*.06],r*.45,n*.58,y.body,y.bodyTop,Q),i.box(-t*.3,t*.3,r*.37,r*.44,-e*.08,e*.22,y.dark,y.metal,pt),i.lyingCyl("z",t*.24,a-e*.04,r*.2,r*.47,e*.4,r*.25,y.metal,y.dark,10,pt),i.pad(-t*.3,t*.3,n*.52,n*.62,-e*.25,e*.05,y.dark,y.fabricTop,.025,Q),i.seg(-t*.18,n*.48,e*.02,-t*.08,n*.86,o,Q),i.seg(t*.18,n*.48,e*.02,t*.08,n*.86,o,Q),i.seg(-t*.19,r*.63,a,-t*.21,n*.54,-e*.12,pt),i.seg(t*.19,r*.63,a,t*.21,n*.54,-e*.12,pt),i.seg(-t*.36,n*.9,o,t*.36,n*.9,o,mt),i.box(-t*.23,t*.23,n*.72,n*.98,o-e*.07,o+e*.07,y.body,y.bodyTop,Q),i.cyl(0,o+e*.075,Math.min(t,e)*.07,n*.82,n*.94,y.white,y.accent,12,mt);for(let l of[-1,1])i.seg(l*t*.22,n*.9,o,l*t*.39,n,o-e*.04,Q),i.cyl(l*t*.39,o-e*.04,t*.045,n*.97,n,y.glass,y.metal,10,mt);i.seg(-t*.31,n*.66,-e*.31,t*.31,n*.66,-e*.31,Q)}function ry(i,t,e,n){let r=n*.18;i.cyl(0,0,Math.min(t,e)*.115,r,n*.62,y.body,y.bodyTop,16,Q),i.cyl(0,0,Math.min(t,e)*.025,n*.7,n,y.metal,y.metal,8)}function sy(i,t,e,n){i.loft([-t*.4,t*.4,-e*.33,e*.33],[-t*.34,t*.34,-e*.28,e*.28],0,n*.045,y.body,y.metal,Q),i.cyl(0,0,Math.min(t,e)*.055,n*.04,n*.62,y.metal,y.metal,10),i.box(-t*.13,t*.13,n*.06,n*.14,-e*.2,e*.2,y.body,y.bodyTop,pt);for(let a of[-t*.07,0,t*.07])i.cyl(a,e*.12,t*.018,n*.14,n*.155,y.accent,y.accent,8,mt);let r=n*.78,s=Math.min(t,n*.42)*.46,o=e*.075;i.box(-t*.085,t*.085,n*.58,r-s*.18,-e*.1,e*.015,y.body,y.bodyTop,Q),i.lyingCyl("z",0,-e*.11,r-s*.3,r+s*.3,e*.24,s*.6,y.body,y.bodyTop,16,Q);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,pt)}Ks(i,0,r,s,a,32),Ks(i,0,r,s*.86,a,32),Ks(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,Q)}}function yl(i,t,e,n,r,s){if(e==="fan_ceiling"){let d=new Ni(i,t,(x,g)=>[x,g]),m=Math.min(n,r)*.13;for(let x of[0,120,240])d.rotated(0,0,x).loft([n*.08,n*.48,-m*.52,m*.52],[n*.12,n*.46,-m*.32,m*.32],0,s*.07,y.wood,y.woodTop,Q);d.cyl(0,0,Math.min(n,r)*.14,-s*.035,s*.08,y.body,y.bodyTop,18,mt);return}let o=Math.min(n,s*.42)*.46,a=-Math.max(.006,r*.012),l=-a,c=new st(y.bodyTop),u=new st(y.body),h=(d,m)=>[Math.cos(m)*d,Math.sin(m)*d];for(let d=0;d<3;d++){let m=d/3*Math.PI*2,x=[h(o*.14,m-.12),h(o*.46,m-.34),h(o*.84,m-.16),h(o*.72,m+.22),h(o*.24,m+.34)],g=(p,_)=>[p[0],p[1],_];for(let p=1;p<x.length-1;p++)i.tri(g(x[0],l),g(x[p],l),g(x[p+1],l),c),i.tri(g(x[0],a),g(x[p+1],a),g(x[p],a),u);for(let p=0;p<x.length;p++){let _=(p+1)%x.length;i.tri(g(x[p],a),g(x[_],l),g(x[_],a),u),i.tri(g(x[p],a),g(x[p],l),g(x[_],l),u),t.seg(g(x[p],l),g(x[_],l),Q,qt)}}new Ni(i,t,(d,m)=>[d,m]).lyingCyl("z",0,0,-o*.14,o*.14,r*.1,o*.28,y.body,y.bodyTop,14,mt)}function oy(i,t,e,n){let r=Math.min(e*.88,n*.92),s=(n-r)/2;i.lyingCyl("x",0,0,s,s+r,t*.9,r,y.white,y.whiteTop,22,Q);for(let o of[-t*.46,t*.46])i.lyingCyl("x",o,0,s+r*.04,s+r*.96,t*.035,r*.92,y.white,y.whiteTop,18,pt);for(let o of[-t*.28,t*.28])i.box(o-.025,o+.025,0,s+r*.25,-e*.42,-e*.28,y.metal,y.metal);for(let[o,a]of[[-t*.2,y.accent],[t*.2,y.fabricTop]])i.cyl(o,e*.05,Math.min(t,e)*.025,0,s+r*.18,a,a,10,pt),i.cyl(o,e*.05,Math.min(t,e)*.04,s+r*.14,s+r*.2,y.metal,y.metal,10);i.box(t*.18,t*.4,s+r*.38,s+r*.68,e*.43,e*.48,y.body,y.glass,mt),i.seg(t*.24,s+r*.53,e*.485,t*.35,s+r*.53,e*.485,mt)}function ay(i,t,e,n){let r=Math.min(.035,t*.025),s=t/2-r;for(let o of[-1,1]){i.box(o*s-r,o*s+r,0,n,-e/2,-e/2+r*2,y.metal,y.metal,Q),i.box(o*s-r,o*s+r,0,n,e/2-r*2,e/2,y.metal,y.metal,Q);for(let a of[-e/2+r,e/2-r])i.box(o*s-r*2.2,o*s+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,y.dark,y.dark)}for(let o=0;o<7;o++){let a=-e/2+r+(e-2*r)*o/6;i.box(-t/2+r,t/2-r,n-r*2,n,a-r/2,a+r/2,y.metal,y.metal,pt)}i.seg(-t/2,.05,-e/2,t/2,n-.05,-e/2,pt),i.seg(t/2,.05,-e/2,-t/2,n-.05,-e/2,pt),i.seg(-t/2,.05,e/2,t/2,n-.05,e/2,pt),i.seg(t/2,.05,e/2,-t/2,n-.05,e/2,pt)}function ly(i,t,e,n){let r=Math.min(.045,t*.04);for(let o of[-t/2+r,t/2-r])i.box(o-r,o+r,0,n*.64,-e/2+r,e/2-r,y.wood,y.woodTop,Q);for(let o of[n*.18,n*.4])i.box(-t/2+r,t/2-r,o-r/2,o+r/2,-e/2+r,e/2-r,y.wood,y.woodTop,pt);let s=Math.max(2,Math.round(t/.35));for(let o=1;o<s;o++)i.seg(-t/2+t*o/s,n*.08,e/2+.003,-t/2+t*o/s,n*.58,e/2+.003,pt);i.pad(-t/2,t/2,n*.62,n,-e/2,e/2,y.cushion,y.fabricTop,.025,Q)}function cy(i,t,e,n){let r=Math.min(.05,t*.035);i.box(-t/2,t/2,0,r,-e/2,e/2,y.wood,y.woodTop,Q),i.box(-t/2,t/2,n-r,n,-e/2,e/2,y.wood,y.woodTop,Q);let s=Math.max(5,Math.round(t/.22));for(let o=0;o<s;o++){let a=-t/2+t*(o+.5)/s;i.box(a-r/2,a+r/2,r,n-r,-e/2,e/2,o%2?y.wood:y.body,y.woodTop,pt)}}function uy(i,t,e,n){i.box(-t*.16,t*.16,n*.42,n,-e/2,-e*.18,y.metal,y.metal,Q),i.loft([-t/2,t/2,-e/2,e/2],[-t*.18,t*.18,-e/2,-e*.1],0,n*.48,y.metal,y.whiteTop,Q),i.box(-t*.4,t*.4,0,n*.06,e*.18,e/2,y.dark,y.dark,mt)}function hy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,y.body,y.bodyTop,Q),i.box(-t*.4,t*.18,n*.17,n*.82,e/2,e/2+.006,y.dark,y.glass,mt),i.cyl(t*.34,e/2+.008,Math.min(t,n)*.055,n*.58,n*.69,y.accent,y.accent,10,mt),i.seg(t*.28,n*.34,e/2+.009,t*.4,n*.34,e/2+.009,pt)}function fy(i,t,e,n){let r=n*.8,s=e/2;i.box(-t*.46,t*.46,.025,r,-e/2,s,y.white,y.whiteTop,Q),i.box(-t*.48,t*.48,0,.035,-e*.44,e*.44,y.dark,y.dark),i.box(-t*.42,t*.42,.055,r-.035,s,s+.012,y.white,y.whiteTop,Q),i.seg(-t*.4,r*.28,s+.014,t*.4,r*.28,s+.014,pt),i.seg(-t*.28,r*.58,s+.015,t*.28,r*.58,s+.015,mt),i.seg(-t*.2,r*.62,s+.015,t*.2,r*.62,s+.015,pt),i.box(-t/2,t/2,r-.025,r,-e/2,e/2,y.white,y.whiteTop,Q);let o=Math.min(.012,t*.03),a=t*.1,l=-e*.16,c=e*.08,u=6718637;i.cyl(a,l,o*1.55,r,r+o*1.8,u,u,12,Q),i.cyl(a,c,t*.16,r,r+.01,y.whiteTop,y.whiteTop,18,pt),i.seg(a-t*.1,r+.012,c,a+t*.1,r+.012,c,pt),i.seg(a,r+.012,c-e*.11,a,r+.012,c+e*.11,pt);let h=n*.925,f=n*.055,d=(l+c)/2,m=(c-l)/2,x=[[r+o,l],[h,l]];for(let g=1;g<=8;g++){let p=Math.PI-Math.PI*g/8;x.push([h+Math.sin(p)*f,d+Math.cos(p)*m])}x.push([n*.89,c]),i.tubeYZ(a,x,o,u,10),i.cyl(a,c,o*1.25,n*.89-o,n*.905,y.dark,u,10,pt),i.lyingCyl("x",a+t*.055,l,r+o*1.6,r+o*2.5,t*.15,o*.9,y.dark,u,8)}function dy(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,y.white,y.whiteTop,Math.min(.04,t*.1),Q);let r=e/2+.006;i.cyl(0,e/2,t*.095,n*.69,n*.705,y.dark,y.dark,18,mt);for(let s=0;s<7;s++){let o=n*(.16+s*.055);i.seg(-t*.34,o,r,t*.34,o,r,pt)}for(let s=-3;s<=3;s++)i.seg(s*t*.085,n+.003,-e*.27,s*t*.085,n+.003,e*.22,pt)}function py(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r,n*.06,n*.9,y.dark,y.fabricTop,18,Q),i.cyl(0,0,r*.94,n*.9,n,y.dark,y.dark,18,mt),i.cyl(0,0,r*.72,n,n+.006,y.dark,y.dark,18,pt);for(let s of[-t*.12,t*.12])i.cyl(s,0,t*.014,n+.007,n+.01,y.white,y.white,8)}function my(i,t,e,n){i.box(-t*.28,t*.28,1.85,1.85+n*.7,-e/2,-e/2+e*.12,y.white,y.whiteTop,Q),i.box(-t*.08,t*.08,1.85+n*.3,1.85+n*.45,-e/2+e*.1,0,y.metal,y.metal,pt),i.lyingCyl("z",0,e*.16,1.85+n*.17,1.85+n*.78,e*.58,n*.58,y.white,y.whiteTop,14,Q),i.lyingCyl("z",0,e*.47,1.85+n*.28,1.85+n*.67,e*.08,n*.38,y.dark,y.dark,16,mt),i.lyingCyl("z",0,e*.515,1.85+n*.38,1.85+n*.57,e*.025,n*.18,y.accent,y.dark,14)}function gy(i,t,e,n){let s=e/2;i.pad(-t/2,t/2,.95,.95+n,-e/2,s,y.dark,y.metal,Math.min(.018,t*.12),Q);for(let o=0;o<3;o++)for(let a=0;a<3;a++){let l=(a-1)*t*.22,c=.95+n*(.7-o*.105);i.seg(l-t*.025,c,s+.005,l+t*.025,c,s+.005,mt)}i.cyl(0,s,t*.12,.95+n*.22,.95+n*.235,y.accent,y.dark,14,mt),i.lyingCyl("x",t*.22,s+e*.12,.95+n*.31,.95+n*.4,t*.75,n*.085,y.metal,y.metal,10,Q)}function xy(i,t,e,n){let r=n*.96;i.lyingCyl("x",0,-e*.18,r,n,t,e*.16,y.metal,y.metal,10,Q),i.box(-t*.06,t*.06,r-n*.055,r+n*.015,-e*.28,e*.02,y.dark,y.dark,mt);let s=t*.12,o=6;for(let a of[-1,1]){let l=a<0?-t/2:s,u=((a<0?-s:t/2)-l)/o;for(let h=0;h<o;h++){let f=l+h*u,d=h%2?e*.12:-e*.04;i.box(f,f+u*.82,n*.04,r,d-e*.18,d+e*.18,y.fabric,y.fabricTop,h===0||h===o-1?Q:null)}}}function by(i,t,e,n){let r=Math.max(.42,Math.min(t,e)*.46);i.box(-t/2,t/2,0,n-.04,-e/2,-e/2+r,y.body,y.bodyTop,Q),i.box(-t/2,-t/2+r,0,n-.04,-e/2+r,e/2,y.body,y.bodyTop,Q),i.box(-t/2,t/2,n-.04,n,-e/2,-e/2+r,y.whiteTop,y.whiteTop,mt),i.box(-t/2,-t/2+r,n-.04,n,-e/2+r,e/2,y.whiteTop,y.whiteTop,mt),i.seg(-t/2+r,.08,-e/2+r,-t/2+r,n-.08,-e/2+r,pt);let s=-e/2+r+.006,o=-t/2+r+.006;for(let a=1;a<3;a++){let l=-t/2+r+(t-r)*a/3;i.seg(l,.08,s,l,n-.08,s,pt);let c=-e/2+r+(e-r)*a/3;i.seg(o,.08,c,o,n-.08,c,pt)}i.seg(-t/2+r+.08,n*.72,s+.004,-t/2+r+.22,n*.72,s+.004,mt),i.seg(o+.004,n*.72,-e/2+r+.08,o+.004,n*.72,-e/2+r+.22,mt)}function _y(i,t,e,n){let r=Math.min(.76,n*.52);i.box(-t/2,t/2,r-.06,r,-e/2,e/2,y.wood,y.woodTop,Q);for(let s of[-t/2+.05,t/2-.05])i.box(s-.025,s+.025,0,r-.06,-e/2+.04,e/2-.04,y.wood);i.box(-t*.32,t*.32,r+.12,n,-e/2,-e/2+.025,y.glass,y.glass,mt),i.box(-t*.2,t*.2,r-.01,r+.09,-e*.1,e*.18,y.body,y.bodyTop,Q)}function vy(i,t,e,n){let r=Math.min(.045,t*.06);i.box(-t/2,t/2,n*.24,n*.32,-e/2,e/2,y.wood,y.woodTop,Q),i.pad(-t/2+r,t/2-r,n*.32,n*.42,-e/2+r,e/2-r,y.white,y.whiteTop,.025);for(let s of[-e/2,e/2]){for(let o=0;o<7;o++){let a=-t/2+r+(t-2*r)*o/6;i.box(a-r/2,a+r/2,n*.3,n,s-r/2,s+r/2,y.wood,y.woodTop,pt)}i.box(-t/2,t/2,n-r,n,s-r,s+r,y.wood,y.woodTop,Q)}for(let s of[-t/2,t/2])i.box(s-r,s+r,0,n,-e/2,e/2,y.wood,y.woodTop,Q)}function yy(i,t,e,n){let r=Math.min(.9,e*.53),s=Math.min(.9,t*.38),o=n*.52;i.pad(-t/2,t/2,.08,o,-e/2,-e/2+r,y.fabric,y.fabricTop,.04,Q),i.pad(-t/2,-t/2+s,.08,o,-e/2+r,e/2,y.fabric,y.fabricTop,.04,Q),i.box(-t/2,t/2,o,n,-e/2,-e/2+Math.min(.2,r*.25),y.fabric,y.fabricTop,Q),i.box(-t/2,-t/2+Math.min(.2,s*.25),o,n,-e/2+r,e/2,y.fabric,y.fabricTop,Q),i.seg(-t/2+s,o+.01,-e/2+r*.1,-t/2+s,o+.01,-e/2+r*.9,pt)}function My(i,t,e,n){let r=n*.5;i.pad(-t/2,t/2,.08,r,-e/2+e*.12,e/2,y.fabric,y.fabricTop,.04,Q),i.pad(-t/2+.05,t/2-.05,r,r+.1,-e/2+e*.3,e/2-.04,y.cushion,y.fabricTop,.03,pt),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,y.fabric,y.fabricTop,Q),i.seg(0,r+.105,-e*.05,0,r+.105,e/2-.06,pt)}function Sy(i,t,e,n){let r=Math.min(.025,Math.max(.01,e*.35));i.box(-t/2,t/2,0,.025,-r,r,y.metal,y.metal,mt);for(let s of[-t/2,0,t/2])i.box(s-r,s+r,0,n,-r,r,y.metal,y.metal,mt);i.seg(-t/2,n,0,t/2,n,0,mt),i.seg(t*.32,n*.42,r+.003,t*.32,n*.62,r+.003,Q)}function wy(i,t,e,n){let r=Math.min(.07,t*.035);for(let a of[-t/2+r,t/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,y.metal,y.metal,Q),i.box(a-e*.25,a+e*.25,0,r,-e*.36,e*.36,y.metal,y.metal,Q);let s=-t/2+r,o=t/2-r;i.loft([s,-t*.14,-e*.34,e*.34],[s+.08,-t*.14,-e*.3,e*.3],n*.36,n*.42,y.fabric,y.fabricTop,pt),i.loft([-t*.14,t*.14,-e*.34,e*.34],[-t*.13,t*.13,-e*.3,e*.3],n*.25,n*.31,y.fabric,y.fabricTop,pt),i.loft([t*.14,o,-e*.34,e*.34],[t*.14,o-.08,-e*.3,e*.3],n*.36,n*.42,y.fabric,y.fabricTop,pt),i.seg(s,n*.8,0,-t*.14,n*.42,0,Q),i.seg(t*.14,n*.42,0,o,n*.8,0,Q)}function Ty(i,t,e,n){let r=Math.min(t,e);i.cyl(0,0,r*.08,0,n-.07,y.metal,y.metal,12),i.cyl(0,0,r*.22,n-.07,n,y.body,y.bodyTop,16,Q);for(let[s,o]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(s*t,o*e,r*.065,0,n*.52,y.metal,y.metal,10),i.cyl(s*t,o*e,r*.105,n*.52,n*.61,y.body,y.bodyTop,12,pt)}function Ey(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r*.84,0,n*.08,y.metal,y.metal,12,Q),i.cyl(0,0,r,n*.08,n*.92,y.metal,y.whiteTop,20,Q);for(let s of[n*.28,n*.5,n*.72])for(let o=0;o<24;o++){let a=o/24*Math.PI*2,l=(o+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,s,Math.sin(a)*r,Math.cos(l)*r,s,Math.sin(l)*r,pt)}i.cyl(0,0,r*.18,n*.92,n,y.dark,y.bodyTop,12,pt)}function Hd(i,t,e,n,r){let s=Math.min(.12,t*.05);for(let l of[-t/2+s/2,t/2-s/2])i.box(l-s/2,l+s/2,0,n,-e/2,e/2,y.body,y.bodyTop,Q);let o=r?2:Math.max(3,Math.round(t/.4)),a=t-2*s;for(let l=0;l<o;l++){let c=-a/2+a*l/o+s*.25,u=-a/2+a*(l+1)/o-s*.25;i.box(c,u,n*.08,n*.92,-e*.18,e*.18,r?y.metal:y.wood,r?y.metal:y.woodTop,pt),r&&i.seg(l===0?u:c,n*.46,e*.2,l===0?u-.08:c+.08,n*.46,e*.2,mt)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-e/2,e/2,y.wood,y.woodTop,Q)}function Ks(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,mt)}}function Ay(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,y.dark,y.body,Q),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,mt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,y.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,y.white,y.whiteTop,Q),Ks(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,mt);for(let a of[-1,1])Ks(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,y.white,y.whiteTop,Q),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,y.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,mt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,pt)}function Ry(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,y.dark,y.body,Q),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,y.dark,y.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,mt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,pt)}function Cy(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,y.dark,y.body,Q);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,mt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,y.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,y.dark,y.body)}function Iy(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,y.white,y.whiteTop,Q),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,pt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,pt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,y.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,y.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,mt)}function Py(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,y.white,y.whiteTop,Q),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,mt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,pt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,y.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,y.dark,y.body,Q),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,mt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,y.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,y.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,y.white,y.whiteTop,Q);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,mt)}}var Eu=.12,Au=1.9;function Ru(i,t){let e=Ly(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function Ly(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=cd(i.type);if(s){let l=t?dn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?dn(t,i)-ks(i):0,a=Fy(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Fy(i,t,e,n,r){if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?dn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Eu+.02,y1:Eu+n-.02,z:e/2+.004};if(i.type==="air_conditioner")return{x0:-t*.43,x1:t*.43,y0:Au+n*.08,y1:Au+n*.27,z:e/2+.008};if(i.type==="water_pump")return{x0:-t*.1,x1:t*.1,y0:n*.56,y1:n*.65,z:e*.3+.004};if(i.type==="water_heater"){let s=Math.min(e*.88,n*.92),o=(n-s)/2;return{x0:t*.18,x1:t*.4,y0:o+s*.38,y1:o+s*.68,z:e*.48+.006}}if(i.type==="range_hood")return{x0:-t*.4,x1:t*.4,y0:.005,y1:n*.06,z:e/2+.003};if(i.type==="microwave")return{x0:-t*.4,x1:t*.18,y0:n*.17,y1:n*.82,z:e/2+.008};if(i.type==="water_purifier")return{x0:-t*.28,x1:t*.28,y0:n*.8*.56,y1:n*.8*.64,z:e/2+.016};if(i.type==="air_purifier")return{x0:-t*.11,x1:t*.11,y0:n*.66,y1:n*.74,z:e/2+.008};if(i.type==="smart_speaker")return{x0:-t*.42,x1:t*.42,y0:n*.9,y1:n+.008,z:e*.05};if(i.type==="security_camera")return{x0:-t*.12,x1:t*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:e*.53};if(i.type==="smart_lock")return{x0:-t*.36,x1:t*.36,y0:.95+n*.43,y1:.95+n*.78,z:e/2+.006};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function Dy(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new st(1-r,1-r,1-r),a=new st(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[m]),o,a,a),i.tri(h(c[d]),h(u[m]),h(c[m]),o,a,o)}Xd(t)&&vl(i,f)}function Ml(i,t,e,n,r=0){Ny(i,t,e,n,r)}function vl(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function Ny(i,t,e,n,r){let s=De(n.type)?0:r-ks(n);if(De(n.type)||Math.abs(s)<.001)return Wd(i,t,e,n,r);let o=i.p.length,a=t.p.length,l=e.p.length;Wd(i,t,r<.05?e:new ce,n,0);for(let c=o+1;c<i.p.length;c+=3)i.p[c]+=s;for(let c=a+1;c<t.p.length;c+=3)t.p[c]+=s;for(let c=l+1;c<e.p.length;c+=3)e.p[c]+=s}function Wd(i,t,e,n,r){let s=n.rotation*oe,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],u=new Ni(i,t,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"altar":ty(u,h,f,d);break;case"altar_wall":ey(u,h,f,d);return;case"shoe_cabinet":ny(u,h,f,d);break;case"motorbike":iy(u,h,f,d);break;case"fan_ceiling":ry(u,h,f,d);return;case"fan_floor":sy(u,h,f,d);break;case"water_heater":oy(u,h,f,d);return;case"drying_rack":ay(u,h,f,d);break;case"shoe_bench":ly(u,h,f,d);break;case"room_divider":cy(u,h,f,d);break;case"range_hood":uy(u,h,f,d);return;case"microwave":if(hy(u,h,f,d),r>.05)return;break;case"water_purifier":fy(u,h,f,d);break;case"air_purifier":dy(u,h,f,d);break;case"smart_speaker":py(u,h,f,d);break;case"security_camera":my(u,h,f,d);return;case"smart_lock":gy(u,h,f,d);return;case"smart_curtain":xy(u,h,f,d);return;case"kitchen_corner":by(u,h,f,d);break;case"kitchen_display":Wv(u,h,f,d);break;case"vanity":_y(u,h,f,d);break;case"crib":vy(u,h,f,d);break;case"bed_single":case"bed_double":zd(u,h,f,d);break;case"sofa_l":yy(u,h,f,d);break;case"sofa_bed":My(u,h,f,d);break;case"shower_screen":Sy(u,h,f,d);break;case"hammock":wy(u,h,f,d);break;case"stone_table_set":Ty(u,h,f,d);break;case"planter_large":kd(u,h,f,d);break;case"water_tank":Ey(u,h,f,d);break;case"gate":Hd(u,h,f,d,!0);break;case"fence":Hd(u,h,f,d,!1);break;case"sofa":Bd(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":Bd(u,h,f,d,1);break;case"bed":zd(u,h,f,d);break;case"chair":bv(u,h,f,d);break;case"table":_v(u,h,f,d);break;case"desk":vv(u,h,f,d);break;case"nightstand":oi(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,pt);break;case"wardrobe":oi(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":yv(u,h,f,d);break;case"kitchen":Mv(u,h,f,d);break;case"fridge":Sv(u,h,f,d);break;case"fridge_smart":wv(u,h,f,d);break;case"stove":Ev(u,h,f,d);break;case"sink":Av(u,h,f,d);break;case"bathtub":Rv(u,h,f,d);break;case"shower":Cv(u,h,f,d);break;case"wc":Iv(u,h,f,d);break;case"washbasin":Pv(u,h,f,d);break;case"tv_board":Lv(u,h,f,d);break;case"plant":kd(u,h,f,d);break;case"rug":Fv(u,h,f);return;case"stairs":Dv(u,h,f,d);break;case"stairs_landing":Nv(u,h,f,d);break;case"stairwell":return;case"sideboard":Uv(u,h,f,d);break;case"dresser":Ov(u,h,f,d);break;case"tall_cabinet":oi(u,h,f,d,1,d*.5);break;case"coat_rack":Bv(u,h,f,d);break;case"bench":Vd(u,h,f,d,!1);break;case"corner_bench":Vd(u,h,f,d,!0);break;case"bar_stool":zv(u,h,f,d);break;case"office_chair":kv(u,h,f,d);break;case"stool":Vv(u,h,f,d);break;case"kitchen_wall":Gv(u,h,f,d);return;case"kitchen_tall":Hv(u,h,f,d);break;case"island":Xv(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,y.whiteTop,y.whiteTop,Q);return;case"dishwasher":qv(u,h,f,d);break;case"washer":Gd(u,h,f,d,!1);break;case"dryer":Gd(u,h,f,d,!0);break;case"bunk_bed":Yv(u,h,f,d);break;case"table_round":$v(u,h,f,d);break;case"coffee_table":Zv(u,h,f,d);break;case"tv_wall":Jv(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],pt);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,Q),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,Q);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,y.white,y.whiteTop,Q),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,y.accent);return;case"radiator":Kv(u,h,f,d);return;case"air_conditioner":Qv(u,h,f,d);return;case"water_pump":jv(u,h,f,d);break;case"inverter":Ay(u,h,f,d,n.variant??null);return;case"grid_point":Ry(u,h,f,d);break;case"wallbox":Cy(u,h,f,d);return;case"meter":Iy(u,h,f,d);return;case"home_battery":if(Py(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let m=De(n.type);if(m){if(Cu(u,m,h,f,d,r,null),r>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,y.body,y.bodyTop,Q)}}Dy(e,c,h,f,n.type==="plant"?.35:.5)}function Tu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=y;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Cu(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,h=u.glow&&o!==null,f=h?o:Tu(u.color,!1)??y.body,d=h?o:Tu(u.top,!1)??Tu(u.color,!0)??Ht(f,1.25).getHex(),m=s+u.y*r,x=s+Math.min(r,(u.y+u.h)*r),g=u.edges==="glow"?ir:u.edges==="faint"?pt:u.edges?Q:null,p=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))p.lyingCyl(u.axis,u.x*e,u.z*n,m,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,f,d,14,g);else if(u.shape==="cyl")p.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,m,x,f,d,14,g);else if(u.shape==="loft"){let _=u.tx??u.x,S=u.tz??u.z,v=u.tw??u.w,M=u.td??u.d;p.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(_-v/2)*e,(_+v/2)*e,(S-M/2)*n,(S+M/2)*n],m,x,f,d,g)}else p.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,m,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,f,d,g)}}function $d(i,t,e,n,r,s){let o=s*oe,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[e+m*a-x*l,r+m*l+x*a],u=new Ni(i,new Ve,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,y.accent,y.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,y.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Iu(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*oe,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];Cu(new Ni(i,new Ve,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Sl(i,t,e,n,r){let s=e.rotation*oe,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*o-h*a,e.z+l*u*a+h*o];Cu(new Ni(i,new Ve,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var We={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},$r={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}};var Uy={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}},Oy={canopy:{color:We.wallTop,side:We.wall,edge:We.edge,edgeAlpha:.5},veranda:{color:We.wallTop,side:We.wall,edge:We.edge,edgeAlpha:.58},balcony:{color:We.wallTop,side:We.wall,edge:We.edge,edgeAlpha:.58}},Zd=.35,jd=3232102,By=5404812,zy=i=>i.type==="canopy"||i.type==="veranda"||i.type==="balcony";function Jd(i,t){let e=i.roof_style==="glass"?3234418:i.roomColor??t.color,n=i.roof_style==="glass"?2112592:t.side;return{roof:e,under:n}}function tp(i,t){return ii(i)+(t.offset??0)+(ni(t.type)?.01:Wr[t.type])}function Xn(i){return nr(i)>=0?i:[...i].reverse()}function ky(i,t){let e=i[t];if(ni(e.type)||e.type==="pool")return[];let n=[];for(let r=t+1;r<i.length;r++){let s=i[r];!s.cut||s.points.length<3||s.points.every(o=>ue(o,e.points))&&n.push(Xn(s.points))}return n}function vn(i,t,e,n,r,s,o,a){let l=e[0]-t[0],c=e[1]-t[1],u=Math.hypot(l,c);if(u<1e-6)return;let h=-c/u*n*.5,f=l/u*n*.5;xe(i,Xn([[t[0]+h,t[1]+f],[e[0]+h,e[1]+f],[e[0]-h,e[1]-f],[t[0]-h,t[1]-f]]),r,s,o,a,{aoFrom:r-1})}function qn(i,t,e,n,r){i.seg([t[0],n+.004,t[1]],[e[0],n+.004,e[1]],r,qt)}function Kd(i,t,e,n,r,s,o){for(let[a,l]of[[-n,-n],[n,-n],[n,n],[-n,n]])i.seg([t+a,r,e+l],[t+a,s,e+l],o,qt)}function wl(i,t,e,n,r,s,o,a,l){let c=Math.hypot(n[0]-e[0],n[1]-e[1]);if(c<.04||s<.2)return;vn(i,e,n,.14,r,r+Math.min(.24,s*.24),o,a),vn(i,e,n,.07,r+s*.5,r+s*.57,o,a),vn(i,e,n,.1,r+s-.1,r+s,o,a),qn(t,e,n,r+Math.min(.24,s*.24),l),qn(t,e,n,r+s*.57,l),qn(t,e,n,r+s,l);let u=Math.max(2,Math.ceil(c/.22));for(let h=0;h<=u;h++){let f=h/u,d=e[0]+(n[0]-e[0])*f,m=e[1]+(n[1]-e[1])*f;xe(i,Xn([[d-.018,m-.018],[d+.018,m-.018],[d+.018,m+.018],[d-.018,m+.018]]),r+.12,r+s-.07,o,a),t.seg([d,r+.12,m],[d,r+s-.07,m],l,qt)}}function Vy(i,t,e,n,r,s,o,a,l){let c=n[0]-e[0],u=n[1]-e[1],h=Math.hypot(c,u);if(h<.3)return;let f=c/h,d=u/h,m=S=>[e[0]+f*S,e[1]+d*S],x=(S,v,M,T)=>{let[A,b]=m(S);xe(i,Xn([[A-v,b-v],[A+v,b-v],[A+v,b+v],[A-v,b+v]]),M,T,o,a)},g=Math.min(.45,s*.32),p=S=>r+s+g*Math.sin(Math.PI*S),_=Math.max(8,Math.ceil(h/.18));vn(i,e,n,.11,r+.06,r+.16,o,a),vn(i,e,n,.08,r+s*.47,r+s*.54,o,a),qn(t,e,n,r+.16,l),qn(t,e,n,r+s*.54,l);for(let S=0;S<=_;S++){let v=S/_,M=S===0||S===_||Math.abs(v-.5)<.5/_;x(h*v,M?.038:.016,r+.08,p(v)-.04);let[T,A]=m(h*v);if(t.seg([T,r+.08,A],[T,p(v)-.04,A],l,qt),S<_){let b=m(h*v),w=m(h*(S+1)/_),R=(p(v)+p((S+1)/_))/2;vn(i,b,w,.075,R-.045,R+.02,o,a),qn(t,b,w,R+.02,l)}}}function Qd(i,t,e,n,r,s,o=qt){let a=new st(s),l=new st(Ht(r,.72)),c=new st(r);for(let[u,h,f]of Yr(t)){let d=t[u],m=t[h],x=t[f],g=[d[0],e(d[0],d[1]),d[1]],p=[m[0],e(m[0],m[1]),m[1]],_=[x[0],e(x[0],x[1]),x[1]],S=[g[0],g[1]-n,g[2]],v=[p[0],p[1]-n,p[2]],M=[_[0],_[1]-n,_[2]];i.tri(g,_,p,a,a,a,void 0,o),i.tri(S,v,M,l,l,l,void 0,o)}for(let u=0;u<t.length;u++){let h=t[u],f=t[(u+1)%t.length],d=[h[0],e(h[0],h[1]),h[1]],m=[f[0],e(f[0],f[1]),f[1]],x=[d[0],d[1]-n,d[2]],g=[m[0],m[1]-n,m[2]];i.tri(x,d,m,c,c,c,void 0,o),i.tri(x,m,g,c,c,c,void 0,o)}}function Gy(i,t){let e=ml(i,t),n=i[e],r=i[(e+1)%i.length],s=r[0]-n[0],o=r[1]-n[1],a=Math.hypot(s,o);if(a<1e-6)return i;let l=o/a*Zd,c=-s/a*Zd;return i.map(([u,h],f)=>f===e||f===(e+1)%i.length?[u+l,h+c]:[u,h])}function Hy(i,t,e){let n=[];for(let s=0;s<i.length;s++){let o=i[s],a=i[(s+1)%i.length],l=t?o[1]:o[0],c=t?a[1]:a[0];if(!(l<=e&&c>e||c<=e&&l>e))continue;let u=(e-l)/(c-l);n.push((t?o[0]:o[1])+((t?a[0]:a[1])-(t?o[0]:o[1]))*u)}n.sort((s,o)=>s-o);let r=[];for(let s=0;s+1<n.length;s+=2)n[s+1]-n[s]>.05&&r.push([n[s],n[s+1]]);return r}function Wy(i,t,e,n,r){let s=n==="x"||n==="-x"||n===void 0,o=mu(t),a=s?o.z0:o.x0,l=s?o.z1:o.x1,c=Math.max(1,Math.ceil((l-a)/.18)),u=new st(jd),h=new st(By);for(let f=0;f<c;f++){let d=a+(f+.5)*(l-a)/c;for(let[m,x]of Hy(t,s,d)){let g=s?[m,d]:[d,m],p=s?[x,d]:[d,x],_=p[0]-g[0],S=p[1]-g[1],v=Math.hypot(_,S),M=-S/v*.018,T=_/v*.018,A=-S/v*.007,b=_/v*.007,w=(z,B)=>[z[0],e(z[0],z[1])+B,z[1]],R=w([g[0]+M,g[1]+T],.004),P=w([g[0]-M,g[1]-T],.004),L=w([p[0]+M,p[1]+T],.004),I=w([p[0]-M,p[1]-T],.004),E=w([g[0]+A,g[1]+b],.03),D=w([g[0]-A,g[1]-b],.03),U=w([p[0]+A,p[1]+b],.03),N=w([p[0]-A,p[1]-b],.03);i.tri(E,U,N,h,h,h,void 0,r),i.tri(E,N,D,h,h,h,void 0,r),i.tri(R,L,U,u,u,u,void 0,r),i.tri(R,U,E,u,u,u,void 0,r),i.tri(D,N,I,u,u,u,void 0,r),i.tri(D,I,P,u,u,u,void 0,r)}}}function ep(i,t,e,n,r){let s=ii(e),o=[];return n.forEach((a,l)=>{if(a.points.length<3)return;let c=i.count,u,h,f=s+(a.offset??0),d=(T,A)=>f-Gs(a,T,A),m=f-(a.type==="pool"?0:a.slope??0),x=zy(a),g=x?a.height??2.4:ni(a.type)&&a.height?a.height:Wr[a.type],p={...x?Oy[a.type]:Uy[a.type],top:g},_=Xn(a.points),S=Ht(p.edge,p.edgeAlpha),v=a.open&&(a.type==="fence"||a.type==="pergola"||x)?_.length-1:-1,M=(T,A=qt)=>{if(a.outline!==!1)for(let b=0;b<_.length;b++){if(b===v)continue;let w=_[b],R=_[(b+1)%_.length];t.seg([w[0],T(w[0],w[1]),w[1]],[R[0],T(R[0],R[1]),R[1]],S,A)}};switch(a.type){case"pool":{let T=new st(p.color);for(let[b,w,R]of Yr(_)){let P=_[b],L=_[w],I=_[R];i.tri([P[0],f+p.top,P[1]],[I[0],f+p.top,I[1]],[L[0],f+p.top,L[1]],T,T,T,void 0,qt)}let A=new st(p.side);for(let b=0;b<_.length;b++){let w=_[b],R=_[(b+1)%_.length];i.tri([R[0],f+p.top,R[1]],[R[0],f+.06,R[1]],[w[0],f+.06,w[1]],A,A,A,void 0,qt),i.tri([R[0],f+p.top,R[1]],[w[0],f+.06,w[1]],[w[0],f+p.top,w[1]],A,A,A,void 0,qt)}M(()=>f+.06),M(()=>f+p.top+.005);break}case"fence":{for(let T=0;T<_.length;T++){if(T===v)continue;let A=_[T],b=_[(T+1)%_.length],w=Math.hypot(b[0]-A[0],b[1]-A[1]),R=Math.max(1,Math.round(w/2)),P=v>=0&&T===v-1?R:R-1;for(let L=0;L<=P;L++){let I=L/R,E=A[0]+(b[0]-A[0])*I,D=A[1]+(b[1]-A[1])*I,U=d(E,D);xe(i,Xn([[E-.04,D-.04],[E+.04,D-.04],[E+.04,D+.04],[E-.04,D+.04]]),U,U+p.top,p.side,p.color)}for(let L of[.35,.85])t.seg([A[0],d(A[0],A[1])+L*p.top,A[1]],[b[0],d(b[0],b[1])+L*p.top,b[1]],S,qt)}break}case"pergola":{let T=p.top;for(let[A,b]of _){let w=d(A,b);xe(i,Xn([[A-.06,b-.06],[A+.06,b-.06],[A+.06,b+.06],[A-.06,b+.06]]),w,w+T,p.side,p.color)}for(let A=0;A<_.length;A++){if(A===v)continue;let b=_[A],w=_[(A+1)%_.length],R=d(b[0],b[1])+T;if(vn(i,b,w,.12,R-.16,R,p.side,p.color),a.bracing){let P=d(b[0],b[1]),L=d(w[0],w[1]);t.seg([b[0],P+.25,b[1]],[w[0],L+T-.25,w[1]],S,qt),t.seg([w[0],L+.25,w[1]],[b[0],P+T-.25,b[1]],S,qt)}}if(md(_)){let A=mu(_),b=A.x1-A.x0,w=A.z1-A.z0,R=b>=w,P=R?b:w,L=Math.max(1,Math.round(P/.6));for(let I=1;I<L;I++){let E=(R?A.x0:A.z0)+P*I/L,D=R?[E,A.z0+.06]:[A.x0+.06,E],U=R?[E,A.z1-.06]:[A.x1-.06,E],N=d(D[0],D[1])+T;vn(i,D,U,.06,N-.04,N+.08,p.side,p.color)}}M((A,b)=>d(A,b)+T+.004);break}case"canopy":{let T=p.top,A=Jd(a,p),b=f+Vs(a.type),w=(L,I)=>b+T-Gs(a,L,I),R=Math.min(.4,Math.max(.04,(a.column_size??.12)/2));for(let[L,I]of _){let E=w(L,I)-.08;xe(i,Xn([[L-R,I-R],[L+R,I-R],[L+R,I+R],[L-R,I+R]]),b,E,A.under,A.roof),Kd(t,L,I,R,b,E,S)}if(a.railing!==!1&&T>=.4){let L=Math.min(1.45,T*.62),I=ml(_,v);for(let E=0;E<_.length;E++){if(E===v)continue;let D=_[E],U=_[(E+1)%_.length];if(E!==I){wl(i,t,D,U,b,L,A.under,A.roof,S);continue}let N=Math.hypot(U[0]-D[0],U[1]-D[1]);if(N<.6){wl(i,t,D,U,b,L,A.under,A.roof,S);continue}let z=Math.min(2.4,Math.max(.9,N*.45),Math.max(.3,N-.3)),B=Math.max(0,(N-z)/(2*N)),k=Math.min(1,1-B),V=[D[0]+(U[0]-D[0])*B,D[1]+(U[1]-D[1])*B],nt=[D[0]+(U[0]-D[0])*k,D[1]+(U[1]-D[1])*k];wl(i,t,D,V,b,L,A.under,A.roof,S),wl(i,t,nt,U,b,L,A.under,A.roof,S),Vy(i,t,V,nt,b,L,A.under,A.roof,S)}}for(let L=0;L<_.length;L++){if(L===v)continue;let I=_[L],E=_[(L+1)%_.length],D=(w(I[0],I[1])+w(E[0],E[1]))/2;vn(i,I,E,.12,D-.18,D-.08,A.under,A.roof),qn(t,I,E,D-.08,S)}let P=Gy(_,v);if(u=i.count,Qd(i,P,w,.045,A.under,jd,r),Wy(i,P,w,a.slope_dir,r),h=i.count,a.outline!==!1)for(let L=0;L<P.length;L++){if(L===v)continue;let I=P[L],E=P[(L+1)%P.length];t.seg([I[0],w(I[0],I[1])+.034,I[1]],[E[0],w(E[0],E[1])+.034,E[1]],S,r)}break}case"balcony":case"veranda":{let T=p.top,A=a.type==="veranda",b=Jd(a,p),w=f+Vs(a.type),R=(V,nt)=>w,P=(V,nt)=>w+T-Gs(a,V,nt),L=A?P:(V,nt)=>w+T,I=Math.min(1.1,T*.48),E=(V,nt,$,ot,j,ut=p.side,W=p.color)=>{xe(i,Xn([[V-$,nt-$],[V+$,nt-$],[V+$,nt+$],[V-$,nt+$]]),ot,j,ut,W),Kd(t,V,nt,$,ot,j,S)};if(a.railing!==!1)for(let V=0;V<_.length;V++){if(V===v)continue;let nt=_[V],$=_[(V+1)%_.length],ot=Math.hypot($[0]-nt[0],$[1]-nt[1]),j=Math.max(1,Math.ceil(ot/.36)),ut=w;vn(i,nt,$,.07,ut+.3,ut+.38,b.under,b.roof),vn(i,nt,$,.09,ut+I-.09,ut+I,b.under,b.roof),qn(t,nt,$,ut+.38,S),qn(t,nt,$,ut+I,S);for(let W=0;W<=j;W++){let Z=W/j,ct=nt[0]+($[0]-nt[0])*Z,dt=nt[1]+($[1]-nt[1])*Z,ft=R(ct,dt),At=.012;xe(i,Xn([[ct-At,dt-At],[ct+At,dt-At],[ct+At,dt+At],[ct-At,dt+At]]),ft+.08,ft+I-.07,b.under,b.roof),t.seg([ct,ft+.08,dt],[ct,ft+I-.07,dt],S,qt)}}let D=ml(_,v),U=_[D],N=_[(D+1)%_.length],z=Math.min(12,Math.max(0,Math.round(a.columns??2))),B=Math.min(.4,Math.max(.04,(a.column_size??.32)/2));for(let V=0;V<z;V++){let nt=z===1?.5:V/(z-1),$=U[0]+(N[0]-U[0])*nt,ot=U[1]+(N[1]-U[1])*nt,j=R($,ot);E($,ot,B*1.375,j,j+.28,b.under,b.roof),E($,ot,B,j+.2,L($,ot)-.2,b.under,b.roof),E($,ot,B*1.375,L($,ot)-.28,L($,ot),b.under,b.roof),t.seg([$,j+.28,ot],[$,L($,ot)-.28,ot],S,qt)}let k=(L(U[0],U[1])+L(N[0],N[1]))/2;vn(i,U,N,Math.max(.2,B*2.6),k-.28,k,b.under,b.roof),qn(t,U,N,k,S),A&&(u=i.count,Qd(i,_,P,.1,b.under,b.roof,r),h=i.count,M((V,nt)=>P(V,nt)+.004,r)),M((V,nt)=>R(V,nt)+(a.railing===!1?.004:I+.004));break}default:{let T=(b,w)=>d(b,w)+p.top,A=ky(n,l);if(xe(i,_,m,a.slope?T:f+p.top,p.side,p.color,{aoFrom:m,holes:A}),M((b,w)=>T(b,w)+.004),a.type==="hedge"&&M((b,w)=>d(b,w)+.004),a.outline!==!1)for(let b of A)for(let w=0;w<b.length;w++){let R=b[w],P=b[(w+1)%b.length];t.seg([R[0],T(R[0],R[1])+.004,R[1]],[P[0],T(P[0],P[1])+.004,P[1]],S,qt)}}}i.count>c&&o.push({id:a.id,start:c,end:i.count,...u!==void 0&&h!==void 0?{roofStart:u,roofEnd:h}:{}})}),o}function np(i,t,e){return ep(i,t,e,e.outdoor??[],qt)}function ip(i,t,e,n,r=qt){return ep(i,t,e,n,r)}var El=Math.PI/180,Xy=1.13,qy=1.72,Pu=.025,or=.07,rp=.25;function sp(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=Ys(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,u=-o/l,h=Math.min(n.height,s.height??n.height),f=(d,m,x,g)=>e.push({key:d,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&f(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Lu="ground";function Fu(i){return[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??i.floors[0]??null}function op(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Fu(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:dl(s,o,a)):t.base??0;return{key:Lu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function Yy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Zr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>$y(_,xl(i,_,_.overhang??t.overhang)));let e=Yy(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(S=>S[0])),r=e.rooms.flatMap(_=>_.points.map(S=>S[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[ap("main",null,o,l,a,c,u+rp)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,m=d*Math.tan(t.pitch*El),x=(_,S,v)=>f?[_,u+v,(l+c)/2+S]:[(o+a)/2+S,u+v,_],[g,p]=f?[o,a]:[l,c];return[-1,1].map(_=>Tl(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(g,_*d,0),x(p,_*d,0),x(g,0,m),t.pitch,()=>[0,p-g]))}function $y(i,t){let e=Wn(i),n=Pn(i),r=(x,g,p)=>{let[_,S]=e.at(x,g);return[_,p,S]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),g=e.at(l,e.w+o);return[ap(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+rp)]}if(i.shape==="pent")return[Tl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=u?e.u0+h-a:0,d=u?l-(e.u1-h):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));m.push(Tl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));m.push(Tl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(u){let x=n.y(-s),g=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,g),r(a,-s,x),r(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,g),r(e.u1-h,n.vr,n.rh)]];for(let[_,S,v,M,T]of p){let A=Zy(_,i.id,S,v,M,T);A&&m.push(A)}}return m}function Zy(i,t,e,n,r,s){let o=js(ar(r,n));if(o<.3)return null;let a=Ui(ar(r,n)),l=ar(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=js(u);if(h<.3)return null;let f=Ui(u),d=Ui(up(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=Ui([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/El;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:x,span:p=>{let _=Math.min(1,Math.max(0,p/h));return[c*_,o-(o-c)*_]},facing:[m[0],m[2]]}}function Tl(i,t,e,n,r,s,o,a){let l=Ui(ar(r,n)),c=Ui(ar(s,n)),u=Ui(up(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Ui([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:js(ar(r,n)),ls:js(ar(s,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function ap(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function lp(i){let t=i.module_w||Xy,e=i.module_h||qy;return i.portrait===!1?[e,t]:[t,e]}function Jy(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function cp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*El:i.wall?Math.min(90,Math.max(0,t.tilt??0))*El:0}function Ky(i,t){let[,e]=lp(t),n=cp(i,t);return i.wall?e*Math.cos(n)+Pu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Pu}function to(i,t,e=!1){let[n,r]=lp(t),s=[],o=cp(i,t),a=r*Math.cos(o),l=Ky(i,t),c=Jy(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=(m,x,g)=>[i.o[0]+i.eu[0]*m+i.es[0]*x+i.n[0]*g,i.o[1]+i.eu[1]*m+i.es[1]*x+i.n[1]*g,i.o[2]+i.eu[2]*m+i.es[2]*x+i.n[2]*g],d=(m,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,p]=i.span(x);return m>=g-1e-6&&m<=p+1e-6};return c.forEach((m,x)=>{let g=t.align==="right"?u-m:t.align==="center"?(u-m)/2:0;for(let p=0;p<m;p++){let _=`${x}:${p}`,S=h.has(_);if(S&&!e)continue;let v=t.u+(p+g)*(n+Pu),M=t.v+x*l,T=v+n,A=M+(i.flat||i.wall?a:r);if(![[v,M],[T,M],[T,A],[v,A]].every(([I,E])=>d(I,E)))continue;if(i.wall&&o>.001){let I=or+r*Math.sin(o),[E,D]=t.flip?[I,or]:[or,I],U=[f(v,M,E),f(T,M,E),f(T,A,D),f(v,A,D)],N=t.flip?M:A,z=[v+.05,T-.05].map(B=>[f(B,N,0),f(B,N,I)]);s.push({corners:U,posts:z,cell:_,skipped:S});continue}if(!i.flat){s.push({corners:[f(v,M,or),f(T,M,or),f(T,A,or),f(v,A,or)],posts:[],cell:_,skipped:S});continue}let b=.15,w=b+r*Math.sin(o),[R,P]=t.flip?[A,M]:[M,A],L=[f(v,R,b),f(T,R,b),f(T,P,w),f(v,P,w)];s.push({corners:L,posts:[v+.05,T-.05].flatMap(I=>[[f(I,R,0),f(I,R,b)],[f(I,P,0),f(I,P,w)]]),cell:_,skipped:S})}}),s}function ar(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function js(i){return Math.hypot(i[0],i[1],i[2])}function Ui(i){let t=js(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function up(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var Qy=.78,jy=1.18;function t1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Qy,module_h:i.h||jy}}function Du(i,t){let e=to(i,t1(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var eo=1712952,no=2239816,dp=1318193,lr=Ht(3662079,.9),Jr=Ht(5995775,.45),Oe=.14,e1=9427199,n1=13226982,i1=14936565,r1={black:{glass:new st(329483),edge:Ht(9082544,.32),cells:Ht(2766160,.22)},blue:{glass:new st(1386842),edge:Ht(10467583,.55),cells:Ht(4025599,.35)}},s1=Ht(13226982,.5),o1=Ht(13226982,.85),a1=Ht(16757575,.95),hp=new st(2845583),fp=new st(3818072);function l1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function pp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:h1(i),r=e?.type==="custom"?f1(i,e.sections??[],e.overhang):n?[n]:[];return u1(i,r),c1(i,r,t),r}function c1(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Zr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Du(o,s):null;if(!o||!a)continue;let l=o.section?t.find(P=>P.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=P=>[P[0],P[1]-c,P[2]],[h,f,d,m]=a.map(u),x=e.get(s.id)??{open:0,tilt:0,cover:0},g=(P,L)=>[P[0]+o.n[0]*L,P[1]+o.n[1]*L,P[2]+o.n[2]*L],p=(P,L,I)=>[P[0]+(L[0]-P[0])*I,P[1]+(L[1]-P[1])*I,P[2]+(L[2]-P[2])*I],_=x.open>.02||x.tilt>.02?a1:o1,S=[h,f,d,m].map(P=>g(P,.06));for(let P=0;P<4;P++)l.lines.seg(S[P],S[(P+1)%4],_);let v=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*oe,M=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),T=P=>{let L=o.es;return[P[0]-L[0]*M*Math.cos(v)+o.n[0]*M*Math.sin(v),P[1]-L[1]*M*Math.cos(v)+o.n[1]*M*Math.sin(v),P[2]-L[2]*M*Math.cos(v)+o.n[2]*M*Math.sin(v)]},A=g(m,.065),b=g(d,.065),w=T(A),R=T(b);l.solid.tri(w,R,b,hp),l.solid.tri(w,b,A,hp);for(let[P,L]of[[w,R],[R,b],[b,A],[A,w]])l.lines.seg(P,L,_);if(x.cover>.02){let P=Math.min(1,x.cover),L=g(p(A,w,P),.01),I=g(p(b,R,P),.01),E=g(A,.01),D=g(b,.01);l.solid.tri(L,I,D,fp),l.solid.tri(L,D,E,fp)}}}function u1(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Zr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Nu(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Nu(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=r1[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of to(e,n)){let[u,h,f,d]=c.corners.map(s);i.tri(u,h,f,o.glass),i.tri(u,f,d,o.glass),i.tri(u,f,h,o.glass),i.tri(u,d,f,o.glass);let m=(p,_=.004)=>[p[0]+e.n[0]*_,p[1]+e.n[1]*_,p[2]+e.n[2]*_],x=(p,_,S)=>[p[0]+(_[0]-p[0])*S,p[1]+(_[1]-p[1])*S,p[2]+(_[2]-p[2])*S],g=[u,h,f,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(m(x(u,h,p/a)),m(x(d,f,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(m(x(u,d,p/l)),m(x(h,f,p/l)),o.cells);for(let[p,_]of c.posts)t.seg(s(p),s(_),s1)}}function h1(i){let t=i.settings.roof,e=l1(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(R=>R.points.map(P=>P[0])),r=e.rooms.flatMap(R=>R.points.map(P=>P[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new ce,h=new Ve;if(t.type==="flat"){xe(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,eo,no,{bottom:!0});let R=.252;for(let[P,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([P[0],R,P[1]],[L[0],R,L[1]],lr),h.seg([P[0],0,P[1]],[L[0],0,L[1]],Jr);return{floor:e,base:e.height,solid:u,lines:h,glass:new ce}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,m=(d?c-l:a-o)/2,x=m*Math.tan(t.pitch*oe),g=(R,P,L)=>d?[R,L,(l+c)/2+P]:[(o+a)/2+P,L,R],[p,_]=d?[o,a]:[l,c],S=new st(no),v=new st(eo),M=(R,P,L,I,E)=>{u.tri(R,P,L,E),u.tri(R,L,I,E)};for(let R of[-1,1]){M(g(p,R*m,0),g(_,R*m,0),g(_,0,x),g(p,0,x),S),M(g(p,R*m,-Oe),g(p,0,x-Oe),g(_,0,x-Oe),g(_,R*m,-Oe),v),M(g(p,R*m,-Oe),g(_,R*m,-Oe),g(_,R*m,0),g(p,R*m,0),v);for(let P of[p,_])M(g(P,R*m,-Oe),g(P,R*m,0),g(P,0,x),g(P,0,x-Oe),v);h.seg(g(p,R*m,0),g(_,R*m,0),Jr);for(let P of[p,_])h.seg(g(P,R*m,0),g(P,0,x),Jr)}let T=t.overhang,A=new st(dp),b=m-T,w=b*Math.tan(t.pitch*oe);for(let R of[p+T,_-T])u.tri(g(R,-b,-Oe),g(R,b,-Oe),g(R,0,w-Oe),A),u.tri(g(R,b,-Oe),g(R,-b,-Oe),g(R,0,w-Oe),A);return h.seg(g(p,0,x+.004),g(_,0,x+.004),lr),{floor:e,base:e.height,solid:u,lines:h,glass:new ce}}function f1(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(Zr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Rd(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ce,lines:new Ve,glass:new ce,sections:[],lift:!o.open}),c.sections.push(o.id);let u=xu(t,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=t.filter(x=>x!==o&&xu(t,x)===o).flatMap(x=>Ed(o,x));for(let x of i.settings.roof.windows??[]){let g=s.get(x.face),p=g&&g.section===o.id?Du(g,x):null;if(!p)continue;let _=p.map(S=>Fi(o,S[0],S[2]));f.push({u0:Math.min(..._.map(S=>S[0])),u1:Math.max(..._.map(S=>S[0])),v0:Math.min(..._.map(S=>S[1])),v1:Math.max(..._.map(S=>S[1]))})}let d=u?bu(u,o):o,m=null;if(u){let x=Wn(d),g=qr(u,{u0:0,u1:0,a:0,b:0}),p=_=>{let[S,v]=x.at(_,x.w/2),[M,T]=Fi(u,S,v);return Js(g,M,T)??Pn(u).y(T)};m=p(x.u0)<=p(x.u1)?0:1}d1(c.solid,c.lines,d,xl(i,d,d.overhang??e),a.elevation,c.glass,h,f,m)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function d1(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Wn(e),u=Pn(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),m=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),p=(I,E,D)=>{let[U,N]=c.at(I,E);return[U,D-r,N]},_=new st(no),S=new st(eo),v=new st(dp),M=(I,E)=>{for(let D=1;D+1<I.length;D++)i.tri(I[0],I[D],I[D+1],E)},T=[],A=[],b=[],w=null;if(e.shape==="flat"||e.shape==="parapet"){let I=e.eave_a,E=e.shape==="parapet",D=e.points&&e.points.length>=3?wd(e,E?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+d),c.at(x,m+d)];xe(i,D,I-r,I-r+.25,eo,no,{bottom:!0});for(let U=0;U<D.length;U++){let N=D[U],z=D[(U+1)%D.length];t.seg([N[0],I-r+.252,N[1]],[z[0],I-r+.252,z[1]],lr),t.seg([N[0],I-r,N[1]],[z[0],I-r,z[1]],Jr)}if(E){let U=k=>Hs(k)>=0?k:[...k].reverse(),N=U(D),z=gu(N,-.2),B=N.length;for(let k=0;k<B;k++){let V=U([N[k],N[(k+1)%B],z[(k+1)%B],z[k]]);xe(i,V,I-r+.25,I-r+.65,eo,no),t.seg([N[k][0],I-r+.652,N[k][1]],[N[(k+1)%B][0],I-r+.652,N[(k+1)%B][1]],lr),t.seg([z[k][0],I-r+.652,z[k][1]],[z[(k+1)%B][0],I-r+.652,z[(k+1)%B][1]],lr)}}}else{let I=qr(e,h);T=I.faces;for(let E of a)T=T.flatMap(D=>Ad(D,E));A=I.rim,b=I.ridges,w=I.gable}let R=!!e.open,P=new st(e1);for(let I of T){if(R){for(let E=1;E+1<I.length;E++)s.tri(p(I[0][0],I[0][1],I[0][2]),p(I[E][0],I[E][1],I[E][2]),p(I[E+1][0],I[E+1][1],I[E+1][2]),P);continue}M(I.map(([E,D,U])=>p(E,D,U)),_),M(I.map(([E,D,U])=>p(E,D,U-Oe)),S)}for(let I=0;I<A.length;I++){let[E,D,U]=A[I],[N,z,B]=A[(I+1)%A.length];R||M([p(E,D,U),p(N,z,B),p(N,z,B-Oe),p(E,D,U-Oe)],S),t.seg(p(E,D,U),p(N,z,B),R?lr:Jr)}if(R){p1(i,t,c,u,h,p,r);return}for(let[[I,E,D],[U,N,z]]of b)t.seg(p(I,E,D+.004),p(U,N,z+.004),lr);let L=e.base;if(!o){if(w){let I=m1(w,L-Oe),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(I.length>=3)for(let D of E)M(I.map(([U,N])=>p(D,U,N)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let I of[0,m]){let E=u.y(I)-Oe;E>L+.02&&M([p(c.u0,I,L),p(c.u1,I,L),p(c.u1,I,E),p(c.u0,I,E)],v)}else if(e.eave_a>L+.02)for(let[I,E,D,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])M([p(I,E,L),p(D,U,L),p(D,U,e.eave_a),p(I,E,e.eave_a)],v)}}function p1(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,h=r.b>0,f=r.u0>0,d=r.u1>0,m=(p,_,S,v,M,T)=>{let A=[e.at(p,S),e.at(_,S),e.at(_,v),e.at(p,v)],b=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);xe(i,b<0?[...A].reverse():A,M-o,T-o,n1,i1,{bottom:!0})},x=o;for(let[p,_]of[[0,u],[a,h]]){if(!_)continue;let S=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,S-c,S),t.seg(s(e.u0,p,S-c),s(e.u1,p,S-c),Jr)}for(let[p,_]of[[e.u0,f],[e.u1-l,d]])if(_)for(let S=0;S<6;S++){let v=a*S/6,M=a*(S+1)/6,T=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,T-c,T)}let g=[];for(let[p,_]of[[0,u],[a-l,h]]){if(!_)continue;let S=e.u1-e.u0-l,v=Math.max(1,Math.ceil(S/3.5));for(let M=0;M<=v;M++){let T=e.u0+S*M/v;M===0&&!f||M===v&&!d||g.push([T,p])}}if(!u&&!h)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,_]of g){let S=n.y(_+l/2)-.03-c;m(p,p+l,_,_+l,x,S)}}function m1(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Oi=.2,Ou=15,io=8,Al=.42,Uu=.42;function _p(i,t,e,n=[],r=[],s){let{walls:o,open:a}=Ys(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(E,D,U)=>{let N=s?s(E,D):null;return N===null?U:Math.max(.05,Math.min(U,N))},c=(E,D,U,N,z)=>{if(!s)return z;let B=z,k=Math.max(2,Math.ceil((N-U)/.25)+1);for(let V=0;V<k;V++){let nt=U+(N-U)*V/(k-1);B=Math.min(B,l(E[0]+D[0]*nt,E[1]+D[1]*nt,z))}return B},u=new ce(!0,!0),h=[],f=new Ve,d=[];for(let E of i.rooms){if(E.points.length<3)continue;let D=bp(Hn(E)?y1(E):E.points),U=$r[E.floor_material]??$r.wood,N=new st(U.color),z=n.filter($=>Id($,D)).map($=>Pd($,.003));d.push(...z);let B=[...D,...z.flat()],k=u.count;for(let[$,ot,j]of Yr(D,z)){let ut=B[$],W=B[ot],Z=B[j];u.tri([ut[0],0,ut[1]],[Z[0],0,Z[1]],[W[0],0,W[1]],N,N,N,[ut[0],ut[1],Z[0],Z[1],W[0],W[1]],qt,U.tile)}h.push({roomId:E.id,start:k,end:u.count,color:U.color});let V=new st(We.slab),nt=$=>{for(let ot=0;ot<$.length;ot++){let j=$[ot],ut=$[(ot+1)%$.length];u.tri([j[0],-Oi,j[1]],[j[0],0,j[1]],[ut[0],0,ut[1]],V),u.tri([j[0],-Oi,j[1]],[ut[0],0,ut[1]],[ut[0],-Oi,ut[1]],V)}};nt(D);for(let $ of z){nt([...bp($)].reverse());for(let ot=0;ot<$.length;ot++){let j=$[ot],ut=$[(ot+1)%$.length];f.seg([j[0],.006,j[1]],[ut[0],.006,ut[1]],ir),f.seg([j[0],-Oi,j[1]],[ut[0],-Oi,ut[1]],Di)}}}let m=new Map,x=[],g=new Map;for(let E of o){let D="interior",U=null;if(E.exterior){let z=E.b[0]-E.a[0],B=E.b[1]-E.a[1],k=Math.hypot(z,B)||1,V=[B/k,-z/k],nt=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*io)%io+io)%io;D=`s${nt}`;let $=nt/io*2*Math.PI;U=[Math.cos($),Math.sin($)]}let N=m.get(D);N===void 0&&(N=x.length,m.set(D,N),x.push(U)),g.set(E,N)}let p=new Map,_=[];for(let E of i.openings){let D=vd(E,i.rooms,i.walls??[]);if(!D)continue;let U=yd(o,E,D);if(!U)continue;let{wall:N,s:z}=U,B=Il([N.b[0]-N.a[0],N.b[1]-N.a[1]]),k=Math.hypot(N.b[0]-N.a[0],N.b[1]-N.a[1]),V=Math.min(E.width,k),nt=Math.max(0,Math.min(k-V,z-V/2)),$=D.room.points,ot=N.free?B[0]*($[1][0]-$[0][0])+B[1]*($[1][1]-$[0][1])>0:N.roomLeft===E.room_id,j=[-B[1],B[0]],ut=ot?j:[-j[0],-j[1]],W=Math.min(c(N.a,B,nt,nt+V,Rl(N,i.height))-.02,E.sill+E.height),Z=Math.max(0,Math.min(E.sill,W-.1)),ct=[ut[1],-ut[0]],dt=B[0]*ct[0]+B[1]*ct[1]>0,ft={opening:E,bucket:g.get(N),start:[N.a[0]+B[0]*nt,N.a[1]+B[1]*nt],axis:B,width:V,toRoom:ut,faceRoom:ot?N.left:N.right,faceOut:ot?N.right:N.left,sill:Z,top:W,hingeAtStart:E.hinge==="left"===dt,exterior:N.exterior};_.push(ft);let At=p.get(N);At||p.set(N,At=[]),At.push({s0:nt,s1:nt+V,sill:Z,top:W,info:ft})}let S=Math.min(i.cut_height,i.height),v=new ce;for(let E of o){let D=g.get(E),U=Il([E.b[0]-E.a[0],E.b[1]-E.a[1]]),N=(p.get(E)??[]).sort((ot,j)=>ot.s0-j.s0),z=Rl(E,i.height),B=[],k=[-1/0,...new Set(N.flatMap(ot=>[ot.s0,ot.s1])).values(),1/0].sort((ot,j)=>ot-j);for(let ot=0;ot+1<k.length;ot++){let j=k[ot],ut=k[ot+1];if(ut-j<1e-6)continue;let W=Number.isFinite(j)&&Number.isFinite(ut)?(j+ut)/2:Number.isFinite(j)?j+1:ut-1,Z=N.filter(ft=>ft.s0<W&&ft.s1>W).map(ft=>[ft.sill,ft.top]).sort((ft,At)=>ft[0]-At[0]),ct=[],dt=-Oi;for(let[ft,At]of Z)ft>dt+1e-4&&ct.push([dt,ft]),dt=Math.max(dt,At);z>dt+1e-4&&ct.push([dt,z]),B.push({t0:j,t1:ut,ranges:ct})}let V=Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1]),nt=s&&c(E.a,U,0,V,z)<z-.001,$=nt?B.flatMap(ot=>{let j=Math.max(ot.t0,-.5),ut=Math.min(ot.t1,V+.5),W=Math.max(1,Math.ceil((ut-j)/.3));return Array.from({length:W},(Z,ct)=>({t0:ct===0?ot.t0:j+(ut-j)*ct/W,t1:ct===W-1?ot.t1:j+(ut-j)*(ct+1)/W,ranges:ot.ranges}))}):B;for(let ot of $){let j=x1(E.footprint,E.a,U,ot.t0,ot.t1);if(j.length<3)continue;let ut=nt?Math.min(...j.map(([W,Z])=>l(W,Z,z))):z;for(let[W,Z]of ot.ranges){let ct=Math.min(Z,nt?Math.max(...j.map(([ie,kt])=>l(ie,kt,z))):Z);if(ct-W<1e-4||ut-W<.01)continue;let dt=W>.01,ft=nt&&Z>ut,At=(ie,kt)=>Math.min(Z,l(ie,kt,z));if(W<S-1e-6){let ie=ct>S+1e-6?Fd+D:rr+D,kt=ft&&ut<S?(Zt,re)=>Math.min(S,At(Zt,re)):Math.min(ct,S);xe(v,j,W,kt,We.wall,We.wallTop,{aoFrom:0,bottom:dt,fold:rr+D,topFold:ie})}ct>S+1e-6&&ut>S+1e-6&&xe(v,j,Math.max(W,S),ft?At:ct,We.wall,We.wallTop,{aoFrom:0,fold:D,bottom:dt&&W>=S})}}}let M=o.flatMap(E=>E.footprint),T=_1(o,M),A=new Ve;A.p.push(...f.p),A.c.push(...f.c),A.f.push(...f.f);let b=(E,D)=>(p.get(E)??[]).filter(D);for(let E of T.edges){let D=g.get(E.wall);for(let[N,z]of Cl(E,b(E.wall,B=>B.sill<=.005)))A.seg([N[0],.004,N[1]],[z[0],.004,z[1]],Ld);for(let[N,z]of Cl(E,b(E.wall,B=>B.sill<S&&B.top>S)))A.seg([N[0],S,N[1]],[z[0],S,z[1]],Mu,_l+D);let U=Rl(E.wall,i.height);for(let[N,z]of Cl(E,b(E.wall,B=>B.top>=U-.021))){if(!s){A.seg([N[0],U,N[1]],[z[0],U,z[1]],ir,U<=S+1e-6?rr+D:D);continue}let B=Math.max(1,Math.ceil(Math.hypot(z[0]-N[0],z[1]-N[1])/.3));for(let k=0;k<B;k++){let V=[N[0]+(z[0]-N[0])*k/B,N[1]+(z[1]-N[1])*k/B],nt=[N[0]+(z[0]-N[0])*(k+1)/B,N[1]+(z[1]-N[1])*(k+1)/B],$=l(V[0],V[1],U),ot=l(nt[0],nt[1],U);A.seg([V[0],$,V[1]],[nt[0],ot,nt[1]],ir,Math.max($,ot)<=S+1e-6?rr+D:D)}}}for(let E of T.corners){let D=l(E.p[0],E.p[1],Rl(E.wall,i.height));A.segSplit([E.p[0],.004,E.p[1]],[E.p[0],D,E.p[1]],Di,Math.min(S,D),g.get(E.wall))}for(let E of p.values())for(let D of E)g1(A,D,S);let w=v1(T.edges,i.rooms,p),R=i.rooms.filter(Hn).map(E=>({id:E.id,type:E.kind,points:E.points,roof_style:E.roof_style,railing:E.railing,columns:E.columns,column_size:E.column_size,height:E.height??i.height,slope:E.slope,slope_dir:E.slope_dir,open:E.open??!0,roomColor:($r[E.floor_material]??$r.wood).color,offset:-ii(i)-Vs(E.kind)})),P=ip(v,A,i,R,Ou),L=np(v,A,i);for(let E of r)Nu(v,A,E.face,E.field,i.elevation);let I=[];for(let E of i.furniture){if(hd(E.type))continue;let D=v.count,U=A.p.length/6,N=dn(i,E);Ml(v,A,w,E,N),N+E.h>S+.05&&(Dd(v,D,S,Su),Nd(A,U,S,Su)),I.push({id:E.id,start:D,end:v.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:v.geometry(),lines:A.geometry(),shadow:w.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(E=>g.get(E)),furnitureTris:I,outdoorTris:L,coveredRoomTris:P}}function g1(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:qt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Di,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Di,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Di,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Di,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Di,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Mu,_l+r)}function x1(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=mp(o,a=>s(a)-n)),Number.isFinite(r)&&(o=mp(o,a=>r-s(a))),o}function mp(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var gp=i=>Math.round(i*1e3),ro=i=>`${gp(i[0])},${gp(i[1])}`,xp=(i,t)=>{let e=ro(i),n=ro(t);return e<n?`${e}|${n}`:`${n}|${e}`};function b1(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-r[0])*o+(h[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=r;for(let h of c){let f=[r[0]+o*h,r[1]+a*h];ro(f)!==ro(u)&&e.push([u,f]),u=f}e.push([u,s])}return e}function _1(i,t){let e=i.map(l=>({wall:l,edges:b1(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let h=xp(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let h=ro(l),f=s.get(h);f||s.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,h]of c){if(n.get(xp(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;r.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Cl(i,t){if(!t.length)return[[i.a,i.b]];let e=Il([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Il([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let m=[];return h.s0>f&&m.push([f,h.s0]),h.s1<d&&m.push([h.s1,d]),m});let u=h=>{let f=(h-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>s<=o?[u(h),u(f)]:[u(f),u(h)])}function v1(i,t,e){let n=new ce,r=new st(Uu,Uu,Uu),s=new st(1,1,1),o=.002;for(let a of i)for(let[l,c]of Cl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&ue(m,p.points)))continue;let x=[l[0]+d[0]*Al,l[1]+d[1]*Al],g=[c[0]+d[0]*Al,c[1]+d[1]*Al];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function vp(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(gl),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return yu(e);let r=n.furniture.filter(s=>(s.type==="stairs"||s.type==="stairs_landing"||De(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(gl);return yu([...e,...r])}function Rl(i,t){return Math.min(t,i.height??t)}function Il(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function bp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function y1(i){let t=i.points,e=t.length;if(e<3)return t;let n=0;for(let c=0;c<e;c++)n+=t[c][0]*t[(c+1)%e][1]-t[(c+1)%e][0]*t[c][1];let r=n>=0?1:-1,s=(i.column_size??(i.kind==="canopy"?.12:.32))/2,o=i.kind==="canopy"?s:s*1.375,a=i.open!==!1?e-1:-1,l=t.map((c,u)=>{let h=t[(u+1)%e],f=h[0]-c[0],d=h[1]-c[1],m=Math.hypot(f,d)||1,x=u===a?0:o,g=[d/m*r,-f/m*r];return{p:[c[0]+g[0]*x,c[1]+g[1]*x],d:[f/m,d/m],normal:g,offset:x}});return t.map((c,u)=>{let h=l[(u-1+e)%e],f=l[u],d=h.d[0]*f.d[1]-h.d[1]*f.d[0];if(Math.abs(d)<1e-6)return[c[0]+f.normal[0]*f.offset,c[1]+f.normal[1]*f.offset];let m=((f.p[0]-h.p[0])*f.d[1]-(f.p[1]-h.p[1])*f.d[0])/d;return[h.p[0]+h.d[0]*m,h.p[1]+h.d[1]*m]})}var M1=500,yp=.12,Mp=1.35,S1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Pl=class{view={target:new G,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=S1(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Bu(this.view.phi+this.velocity.phi,yp,Mp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},M1)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,r);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-r/o*2.4;this.view.theta+=a,this.view.phi=Bu(this.view.phi+l,yp,Mp),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Bu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new G(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new G(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Bu(i,t,e){return Math.min(e,Math.max(t,i))}function ai(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= ${1.35.toFixed(2)};
        diffuseColor.a *= ${.78.toFixed(2)};`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var so=(i,t,e,n,r)=>{i.expandByPoint(new G(t,n,e)),i.expandByPoint(new G(t,r,e))};function Sp(i){let t=new je;for(let{floor:e,ty:n}of i){let r=e.elevation+n;for(let s of e.rooms)for(let[o,a]of s.points)so(t,o,a,r,r+e.height);for(let s of e.outdoor??[]){let o=r+ii(e)+(s.offset??0),a=o-(s.type==="pool"?0:s.slope??0),l=ni(s.type)&&s.height?s.height:Wr[s.type],c=o+(s.type==="pool"?.06:l);for(let[u,h]of s.points)so(t,u,h,a,c)}for(let s of e.walls??[]){let o=r+Math.min(e.height,s.height??e.height);so(t,s.a[0],s.a[1],r,o),so(t,s.b[0],s.b[1],r,o)}}return t}function wp(i,t,e){let n=new je,r=i.elevation+e;for(let[s,o]of t.points)so(n,s,o,r,r+(Hn(t)?t.height??i.height:i.height));return n}function zu(i,t,e,n,r,s=1){if(i.isEmpty())return 0;let o=i.getCenter(new G),a=new G(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),l=new G(Math.cos(t),0,-Math.sin(t)),c=new G(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),u=Math.tan(r/2),h=u*Math.max(.01,n),f=0;for(let d of[i.min.x,i.max.x])for(let m of[i.min.y,i.max.y])for(let x of[i.min.z,i.max.z]){let g=new G(d,m,x).sub(o),p=g.dot(a);f=Math.max(f,p+Math.abs(g.dot(l))*s/h,p+Math.abs(g.dot(c))*s/u)}return f}function Tp(i,t,e,n,r=1){let s=i.getSize(new G),o=Math.max(.01,Math.min(s.x,s.z)),a=Math.max(s.x,s.z)/o>=2,l=-.6;return a&&e>=1.2&&(l=s.z>=s.x?-.95:-.35),{theta:l,radius:zu(i,l,t,e,n,r)}}function ku(i,t,e,n,r,s,o=8){if(i.isEmpty())return{radius:0,offset:new G};let a=Math.max(1,s.width),l=Math.max(1,s.height),c=-1+2*Math.max(0,s.left)/a,u=1-2*Math.max(0,s.right)/a,h=-1+2*Math.max(0,s.bottom)/l,f=1-2*Math.max(0,s.top)/l;if(c>=u||h>=f)return{radius:zu(i,t,e,n,r),offset:new G};let d=i.getCenter(new G),m=new G(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),x=new G(Math.cos(t),0,-Math.sin(t)),g=new G(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),p=Math.tan(r/2),_=p*Math.max(.01,n),S=[];for(let L of[i.min.x,i.max.x])for(let I of[i.min.y,i.max.y])for(let E of[i.min.z,i.max.z]){let D=new G(L,I,E).sub(d);S.push({x:D.dot(x),y:D.dot(g),near:D.dot(m)})}let v=L=>{let I=-1/0,E=1/0,D=-1/0,U=1/0;for(let N of S){let z=L-N.near;I=Math.max(I,N.x-u*_*z),E=Math.min(E,N.x-c*_*z),D=Math.max(D,N.y-f*p*z),U=Math.min(U,N.y-h*p*z)}return{x0:I,x1:E,y0:D,y1:U}},M=Math.max(...S.map(L=>L.near))+.1,T=L=>{let I=v(L);return I.x0<=I.x1&&I.y0<=I.y1},A=Math.max(M,o),b=Math.max(A,zu(i,t,e,n,r));for(;!T(b);)b*=2;for(let L=0;L<60;L++){let I=(A+b)/2;T(I)?b=I:A=I}let w=v(b),R=(w.x0+w.x1)/2,P=(w.y0+w.y1)/2;return{radius:b,offset:x.multiplyScalar(R).add(g.multiplyScalar(P))}}function w1(i,t){let e=De(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Vu(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?w1(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function Gu(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=T1(c.id)%1e3/1e3;for(let x of to(l,c)){let[g,p,_,S]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[_,1,1],[S,0,1]];for(let M of[0,1,2,0,2,3]){let[T,A,b]=v[M];e.push(T[0],T[1],T[2]),n.push(A,b),r.push(h,f),s.push(d)}}let m=e.length/3-u;m&&o.push({id:c.id,start:u,count:m})}if(!e.length)return null;let a=new Kt;return a.setAttribute("position",new Vt(e,3)),a.setAttribute("uv",new Vt(n,2)),a.setAttribute("aCells",new Vt(r,2)),a.setAttribute("aPhase",new Vt(s,1)),a.setAttribute("aLevel",new Vt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function oo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Hu(i){let t=new le({transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function T1(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Ep=["neon","blueprint","day"];function Ap(i){return Ep.indexOf(i)}var Ll={value:new G(.22,.88,1)},Fl={value:0};function Rp(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var E1=`
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
`;function Fn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Ll,s.uniforms.uAccentOn=Fl,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${E1}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Dl(i){return i==="day"?Ai:Fe}var ao=.012,A1=.012;function Ip(i,t,e,n,r,s=[]){let o=[],a=[],l=[],c=[],u=(m,x,g,p,_,S,v)=>{for(let M of[m,x,g,m,g,p])o.push(M[0],M[1],M[2]),a.push(_[0],_[1],_[2]),l.push(S),c.push(v)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let g=m.points.map(T=>T[0]),p=m.points.map(T=>T[1]),_=Math.min(...g),S=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...g)-_)/r)),M=Math.max(1,Math.ceil((Math.max(...p)-S)/r));for(let T=0;T<v;T++)for(let A=0;A<M;A++){let b=_+(T+.5)*r,w=S+(A+.5)*r;if(!ue([b,w],m.points)||s.some(L=>ue([b,w],L)))continue;let R=_+T*r,P=S+A*r;u([R,ao,P],[R,ao,P+r],[R+r,ao,P+r],[R+r,ao,P],[0,1,0],x,-1)}});let h=i.rooms.length;for(let m of i.outdoor??[]){if(m.points.length<3||ni(m.type))continue;let x=tp(i,m)+ao,g=m.points.map(T=>T[0]),p=m.points.map(T=>T[1]),_=Math.min(...g),S=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...g)-_)/r)),M=Math.max(1,Math.ceil((Math.max(...p)-S)/r));for(let T=0;T<v;T++)for(let A=0;A<M;A++){if(!ue([_+(T+.5)*r,S+(A+.5)*r],m.points))continue;let b=_+T*r,w=S+A*r;u([b,x,w],[b,x,w+r],[b+r,x,w+r],[b+r,x,w],[0,1,0],h,-1)}}let f=Math.min(i.cut_height,i.height);t.forEach((m,x)=>{let g=Math.min(i.height,m.height??i.height),p=Math.min(f,g-.02),_=m.b[0]-m.a[0],S=m.b[1]-m.a[1],v=Math.hypot(_,S);if(v<.05)return;let M=[_/v,S/v],T=[-M[1],M[0]],A=e[x],b=R1(m,M,v,n),w=(L,I,E)=>[I,E,...L.filter(D=>D>I+.005&&D<E-.005)].sort((D,U)=>D-U).filter((D,U,N)=>U===0||D>N[U-1]+.005),R=w([p,(p+g)/2,...b.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,g-.02),P=w(b.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let I=L>0?m.roomLeft:m.roomRight,E=I?i.rooms.findIndex(z=>z.id===I):m.exterior?h:-1;if(E<0)continue;let D=(L>0?m.left:m.right)+A1,U=[T[0]*L,T[1]*L],N=(z,B)=>[m.a[0]+M[0]*z+U[0]*D,B,m.a[1]+M[1]*z+U[1]*D];for(let z=0;z<P.length-1;z++){let B=P[z+1]-P[z],k=Math.max(1,Math.ceil(B/r));for(let V=0;V<k;V++){let nt=P[z]+B/k*V,$=P[z]+B/k*(V+1),ot=(nt+$)/2;for(let j=0;j<R.length-1;j++){let ut=R[j],W=R[j+1];if(W-ut<.01)continue;let Z=(ut+W)/2;if(b.some(dt=>ot>dt.s0&&ot<dt.s1&&Z>dt.y0&&Z<dt.y1))continue;let ct=ut>=f-1e-6?A:rr+A;u(N(nt,ut),N($,ut),N($,W),N(nt,W),[U[0],0,U[1]],E,ct)}}}}});let d=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(_=>Pp(_,m));if(!x||!x.roomLeft||!x.roomRight)continue;let g=i.rooms.findIndex(_=>_.id===x.roomLeft),p=i.rooms.findIndex(_=>_.id===x.roomRight);g<0||p<0||d.push({id:m.opening.id,a:g,b:p,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(o),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:d}}function Pp(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function R1(i,t,e,n){let r=[];for(let s of n){if(!Pp(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function C1(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function I1(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Cp(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=I1(i),d=1/(1+u/(f*f)),m=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/h);return i.level*m*(.2+.8*x)*C1(i.kind,l/h)}function Lp(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,m]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let _=p.x-u.x,S=p.y-u.y,v=p.z-u.z,M=Math.hypot(_,S,v)||1,T=Cp(p,u.x,u.y,u.z,_/M,S/M,v/M);x[0]+=p.color[0]*T,x[1]+=p.color[1]*T,x[2]+=p.color[2]*T}let g=Math.max(x[0],x[1],x[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let s=new Map;for(let u of r){let h={...u,color:u.color.map(f=>Math.pow(f,1.5))};s.set(u.room,[...s.get(u.room)??[],h])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=s.get(l[u]);if(!h)continue;let f=u*3,d=0,m=0,x=0;for(let g of h){let p=Cp(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,x+=g.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-m*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function Fp(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&ue([t,e],r.points));return n<0?i.rooms.length:n}function Dp(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Ul={open:0,open2:0,tilt:0,tilt2:0,cover:null},Np=2043986,Up=2769520,P1=2242399,Wu=1845831,L1=1450554,li=16758087,F1=1.2,D1=1.5,N1=1846349,U1=2572395,O1=1120816,B1=1845831,Op=5995775,Bp=9085695,Kr=Ht(3662079,.08),z1=.2;function Nl(i,t,e,n,r,s,o,a,l,c,u){let h=(d,m,x)=>t(d,m,x),f=[[h(e,r,a),h(n,r,a),h(n,s,a),h(e,s,a),c],[h(e,r,o),h(n,r,o),h(n,s,o),h(e,s,o),Ht(l.getHex(),.6)],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),l],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),Ht(l.getHex(),.85)],[h(e,r,o),h(e,s,o),h(e,s,a),h(e,r,a),Ht(l.getHex(),.92)],[h(n,r,o),h(n,s,o),h(n,s,a),h(n,r,a),Ht(l.getHex(),.92)]];for(let[d,m,x,g,p]of f)i.tri(d,m,x,p,p,p,void 0,u),i.tri(d,x,g,p,p,p,void 0,u)}function ae(i,t,e,n,r,s,o,a,l,c,u,h){if(a<=u+1e-6)return Nl(i,t,e,n,r,s,o,a,l,c,qt);if(o>=u-1e-6)return Nl(i,t,e,n,r,s,o,a,l,c,h);Nl(i,t,e,n,r,s,o,u,l,c,qt),Nl(i,t,e,n,r,s,u,a,l,c,h)}function Bi(i,t,e,n,r,s,o,a,l,c,u=0){let h=(f,d,m)=>{let x=v=>u?(o-v)/u:.5,g=t(e,r,f),p=t(n,r,f),_=t(n,r,d),S=t(e,r,d);i.tri(g,p,_,a,a,a,[0,x(f),1,x(f),1,x(d)],m),i.tri(g,_,S,a,a,a,[0,x(f),1,x(d),0,x(d)],m)};o<=l+1e-6?h(s,o,qt):s>=l-1e-6?h(s,o,c):(h(s,l,qt),h(l,o,c))}function k1(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),h=t(n,r,o),f=t(n,s,o),d=t(e,s,o),m=0,x=(s-r)/c;i.tri(u,h,f,a,a,a,[0,m,1,m,1,x],l),i.tri(u,f,d,a,a,a,[0,m,1,x,0,x],l)}function zp(i,t,e){let n=new ce,r=new ce,s=new ce(!0),o=new st(Np),a=new st(Up),l=[],c=[],u=[];for(let h of i){let f=n.count,d=r.count,m=s.count,x=t.get(h.opening.id)??Ul,g=h.width,{sill:p,top:_,bucket:S}=h,v=(b,w,R)=>[h.start[0]+h.axis[0]*b+h.toRoom[0]*w,R,h.start[1]+h.axis[1]*b+h.toRoom[1]*w],M=(h.faceRoom-h.faceOut)/2,T=h.opening.mark==="closed",A=h.opening.type==="door"&&er(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!A||h.opening.type==="garage"){let b=-h.faceOut-.012,w=h.faceRoom+.012,R=h.opening.type==="garage"&&(T?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),P=R?Ht(li,.8):new st(Np),L=R?Ht(li,1):new st(Up);ae(n,v,-.045,.02,b,w,0,_+.045,P,L,e,S),ae(n,v,g-.02,g+.045,b,w,0,_+.045,P,L,e,S),ae(n,v,.02,g-.02,b,w,_-.02,_+.045,P,L,e,S)}if(h.opening.type==="door"){let b=er(h.opening,h.exterior),w=dd(b),R=h.opening.swing==="out"?-1:1,P=R>0?h.faceRoom:-h.faceOut,L=h.opening.leaves===2,I=.02,E=g-.02,D=fd(g,b,h.hingeAtStart,h.opening);if(D){for(let[B,k]of D.panels)ae(n,v,B,B+.04,M-.03,M+.03,.02,_-.02,o,a,e,S),ae(n,v,k-.04,k,M-.03,M+.03,.02,_-.02,o,a,e,S),ae(n,v,B,k,M-.03,M+.03,.02,.1,o,a,e,S),Bi(r,v,B+.04,k-.04,M,.1,_-.02,Kr,e,S);I=D.x0,E=D.x1}let U=L?(E-I)/2-.004:E-I,N=w?.06:.04;w&&(ae(n,v,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new st(Wu),a,e,S),h.exterior&&ae(n,v,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,_+.1,_+.17,Ht(li,.55),Ht(li,.85),e,qt));let z=A?[]:[[h.hingeAtStart,x.open]];L&&!A&&z.push([!h.hingeAtStart,x.open2??0]);for(let[B,k]of z){let V=Math.min(1,Math.max(0,k)),nt=b==="sliding"?0:V*D1,$=b==="sliding"?V*U:0,ot=(ie,kt,Zt)=>{let re=ie*Math.cos(nt)-kt*Math.sin(nt)-$,Qt=P+R*(kt*Math.cos(nt)+ie*Math.sin(nt)+($?.05:0));return v(B?I+re:E-re,Qt,Zt)},j=V>.05?qt:S,ut=T?!!x.sensed&&V<.05:V>.9,W=ut?Ht(li,.7):new st(w?O1:N1),Z=ut?Ht(li,.9):new st(w?B1:U1);b==="glass"?(ae(n,ot,0,.05,-N,0,.01,_-.01,W,Z,e,j),ae(n,ot,U-.05,U,-N,0,.01,_-.01,W,Z,e,j),ae(n,ot,.05,U-.05,-N,0,.01,.12,W,Z,e,j),ae(n,ot,.05,U-.05,-N,0,_-.08,_-.01,W,Z,e,j),Bi(r,ot,.05,U-.05,-N/2,.12,_-.08,Kr,e,j)):ae(n,ot,0,U,-N,0,.01,_-.01,W,Z,e,j),b==="front_glass"?Bi(r,ot,.12,U-.12,.001,_*.55,_-.18,Kr,e,j):w&&Bi(r,ot,.1,.18,.001,.3,_-.3,Kr,e,j);let ct=Math.min(1.05,_*.5),dt=w?.3:.012,ft=w?U-.11:U-.16,At=w?U-.08:U-.05;ae(n,ot,ft,At,.004,.05,ct-dt,ct+dt,new st(Op),new st(Bp),e,j),ae(n,ot,ft,At,-N-.05,-N-.004,ct-dt,ct+dt,new st(Op),new st(Bp),e,j)}}else if(h.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),w=new st(13951231),R=h.faceRoom-.03,P=_*(1-b);b>.01&&Bi(s,v,.02,g-.02,R,P,_,w,e,S,.5);let L=(1-b)*_;L>.01&&k1(s,v,.02,g-.02,R,R+L,_+.03,w,S,.5)}else if(er(h.opening,h.exterior)==="glass_wall"){ae(n,v,0,.04,M-.025,M+.025,p,_,o,a,e,S),ae(n,v,g-.04,g,M-.025,M+.025,p,_,o,a,e,S),ae(n,v,.04,g-.04,M-.025,M+.025,p,p+.03,o,a,e,S),ae(n,v,.04,g-.04,M-.025,M+.025,_-.04,_,o,a,e,S);let R=Math.max(1,Math.round((g-2*.04)/.9)),P=(g-2*.04)/R;for(let L=1;L<R;L++){let I=.04+L*P;ae(n,v,I-.02,I+.02,M-.025,M+.025,p+.03,_-.04,o,a,e,S)}for(let L=0;L<R;L++){let I=.04+L*P+(L?.02:0),E=.04+(L+1)*P-(L<R-1?.02:0);Bi(r,v,I,E,M,p+.03,_-.04,Kr,e,S)}}else{ae(n,v,0,.06,M-.035,M+.035,p,_,o,a,e,S),ae(n,v,g-.06,g,M-.035,M+.035,p,_,o,a,e,S),ae(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,S),ae(n,v,.06,g-.06,M-.035,M+.035,_-.06,_,o,a,e,S),p>.3&&(ae(n,v,-.04,g+.04,M+.035,h.faceRoom+.07,p-.03,p,new st(Wu),a,e,S),h.exterior&&ae(n,v,-.03,g+.03,-h.faceOut-.06,M-.035,p-.04,p-.02,new st(Wu),a,e,S));let R=.055,P=p+(p>.05?.06:.03),L=_-.06,I=M+.035,E=M+.035+.06,U=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let N of U){let z=N.open>.02||N.tilt>.02,B=T?!!x.sensed&&!z:z,k=B?Ht(li,.75):new st(P1),V=B?Ht(li,.95):a,nt=N.x0,$=N.x1,ot=$-nt,j=N.open*F1,ut=N.tilt*z1,W=(ct,dt,ft)=>{let At=ft-P,ie=dt+At*Math.sin(ut),kt=P+At*Math.cos(ut),Zt=ct*Math.cos(j)-(ie-I)*Math.sin(j);ie=I+(ie-I)*Math.cos(j)+ct*Math.sin(j);let re=N.atStart?nt+Zt:$-Zt;return v(re,ie,kt)},Z=j>.05?qt:S;if(ae(n,W,0,R,I,E,P,L,k,V,e,Z),ae(n,W,ot-R,ot,I,E,P,L,k,V,e,Z),ae(n,W,R,ot-R,I,E,P,P+R,k,V,e,Z),ae(n,W,R,ot-R,I,E,L-R,L,k,V,e,Z),Bi(r,W,R,ot-R,(I+E)/2,P+R,L-R,B?Ht(li,.16):Kr,e,Z),er(h.opening,h.exterior)==="bars"){let ct=(P+L)/2,dt=(I+E)/2;ae(n,W,R,ot-R,dt-.012,dt+.012,ct-.012,ct+.012,k,V,e,Z),ae(n,W,ot/2-.012,ot/2+.012,dt-.012,dt+.012,P+R,L-R,k,V,e,Z)}}}if(x.cover!==null){let b=-h.faceOut,w=_+.2;ae(n,v,-.05,g+.05,b-.15,b,_,w,new st(L1),a,e,S);let R=Math.min(1,Math.max(0,x.cover));if(R>.01){let P=_-R*(_-p);Bi(s,v,0,g,b-.07,P,_,new st(16777215),e,S,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),u.push({id:h.opening.id,start:m,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var V1=.3,kp=2.6;function Vp(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,h=e*.7071,f=M=>{let T=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...T,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return T.every(b=>ue(b,i))&&!n.some(b=>A.some(w=>ue(w,b)))},d=(M,T)=>f(u?[M,T]:[T,M]),m=(M,T)=>{let A=Math.ceil(Math.hypot(T[0]-M[0],T[1]-M[1])/.05);for(let b=1;b<A;b++)if(!f([M[0]+(T[0]-M[0])*b/A,M[1]+(T[1]-M[1])*b/A]))return!1;return!0},[x,g,p,_]=u?[o,a,l,c]:[l,c,o,a],S=[],v=!0;for(let M=x+e;M<=g-e+1e-6;M+=t){let T=null,A=null,b=.05;for(let L=p;L<=_+1e-6;L+=b)if(d(M,L)&&(A??=L),(!d(M,L)||L+b>_+1e-6)&&A!==null){let I=d(M,L)?L:L-b;(!T||I-A>T[1]-T[0])&&(T=[A,I]),A=null}if(!T||T[1]-T[0]<.2)continue;let w=L=>{let[I,E]=L?T:[T[1],T[0]];return[u?[M,I]:[I,M],u?[M,E]:[E,M]]},R=w(v),P=S[S.length-1];if(P&&n.length&&!m(P,R[0])){let L=w(!v);if(!m(P,L[0]))continue;R=L,v=!v}S.push(R[0],R[1]),v=!v}return S}function qu(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Xu=i=>Math.atan2(Math.sin(i),Math.cos(i));function Gp(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Xu(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),kp*e),!0)}let a=Math.atan2(r,s),l=Xu(a-i.heading);if(i.heading=Xu(i.heading+Math.sign(l)*Math.min(Math.abs(l),kp*e)),Math.abs(l)<.35){let c=Math.min(o,V1*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Qr=null,Hp=new Map;function G1(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Hp.get(r);if(s)return s;e&&fl(e),Qr??=new Gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Qr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Qr.setSize(t,t,!1),Qr.setClearColor(0,0);let o=new ce,a=new Ve,l=De(i.type);if(l?.light)Sl(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Yu(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let _={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(Ml(o,a,new ce,_),i.type==="fan_ceiling"||i.type==="fan_floor"){let S=o.p.length,v=a.p.length;yl(o,a,i.type,i.w,i.d,i.h);let M=i.type==="fan_ceiling"?i.h*.18:i.h*.78,T=0;for(let A=S+1;A<o.p.length;A+=3)o.p[A]+=M;for(let A=S+2;A<o.p.length;A+=3)o.p[A]+=T;for(let A=v+1;A<a.p.length;A+=3)a.p[A]+=M;for(let A=v+2;A<a.p.length;A+=3)a.p[A]+=T}}let c=new qi,u=new Wt(o.geometry(),new le({vertexColors:!0,color:new st(n,n,n)})),h=new bn(a.geometry(),new xn({vertexColors:!0,color:new st(n*1.8,n*1.8,n*1.8)}));c.add(u,h);let f=new je().setFromObject(u),d=f.getCenter(new G),m=new ti(-1,1,1,-1,.01,100);m.position.copy(d).add(new G(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(d),m.updateMatrixWorld();let x=.05;for(let _ of[f.min.x,f.max.x])for(let S of[f.min.y,f.max.y])for(let v of[f.min.z,f.max.z]){let M=new G(_,S,v).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(M.x),Math.abs(M.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),Qr.render(c,m);let p=Qr.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),h.geometry.dispose(),h.material.dispose(),Hp.set(r,p),p}var Xp={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},H1=2.4,W1=1.4,X1=.22,qp=140,Ju=32,q1=500,Yp=160,$p=33,Zp=.028,Y1=.09,te=2767456,$1=1911110,Z1=1,Jp=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),$u=450,Kp=125,J1=.08,Ku={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},K1=new st(1714765);function Q1(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Qu=class{host;options;renderer;scene=new qi;camera=new Ze(38,1,.1,400);controls;labels;root=new Je;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new bn(new Kt,new xn({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Lr(new Kt,new Zi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Wt(new gs(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=j1(),this.blindTexture=eM(),this.haloTexture=rM(),this.ground=new Wt(new Mi(1,1),new le({transparent:!0,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){fl(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(l=>l.floor.rooms.some(c=>c.id===t)),n=e?.floor.rooms.find(l=>l.id===t);if(!e||!n)return;let r=wp(e.floor,n,e.ty),s=.72,o=this.controls.view.theta,a=ku(r,o,s,this.camera.aspect,this.camera.fov*oe,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new G).add(a.offset),radius:a.radius,phi:s})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t;let e=new Set(t.filter(r=>r.active&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,s]of this.fanRotors)s.active=e.has(r);this.labelsDirty=!0,this.effectFloors=new Set(t.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(t.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of t){n.add(r.id);let s=this.devicePins.get(r.id);s||(s={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,s),this.labels.append(s.el));let o=s.el;s.icon!==r.icon&&(s.icon=r.icon,o.querySelector(".fp3d-dev-icon").innerHTML=r.icon),s.text!==r.text&&(s.text=r.text,o.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;s.label!==c&&(s.label=c,o.title=r.name,o.setAttribute("aria-label",c)),s.active!==r.active&&(s.active=r.active,o.classList.toggle("fp3d-dev-on",r.active)),s.unavailable!==r.unavailable&&(s.unavailable=r.unavailable,o.classList.toggle("fp3d-dev-na",r.unavailable));let u=r.glow?`rgb(${r.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";s.glow!==u&&(s.glow=u,u?o.style.setProperty("--fp3d-glow",u):o.style.removeProperty("--fp3d-glow"))}for(let[r,s]of this.devicePins)n.has(r)||(s.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])oo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&oo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Je;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let h=new Wt(new ys(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:Me}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let h=s.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new Kt;c.setAttribute("position",new Vt(a,3));let u=new bn(c,new xn({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Zu(r),o=Qp(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Rp(t),n=e?1:0;n===Fl.value&&(!e||Ll.value.equals(new G(...e)))||(Fl.value=n,e&&Ll.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Ap(t);let e=Dl(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new st(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new hs(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),h=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new Kt;l.setAttribute("position",new Vt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*oe,o=(r?t.azimuth+180:t.azimuth)*oe,a=Math.max(10,Math.abs(t.elevation))*oe,l=this.weatherBox,c=new G((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new G(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Yp),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}stepFans(t){let e=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=t*(n.type==="fan_ceiling"?.0048:.009);n.type==="fan_ceiling"?n.rotor.rotation.y=(n.rotor.rotation.y-r)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-r)%(Math.PI*2),e=!0}return e}buildFridges(t){let e=new ce;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Yd(e,n,dn(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view;return{theta:t.theta,phi:t.phi,radius:t.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&Q1();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Gr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Pl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&"roomId"in n&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},q1)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Ip(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes),r=iM(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}t.lightSurface=n;let s=new Kt;s.setAttribute("position",new Vt(n.pos,3)),s.setAttribute("color",new Vt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Vt(n.fold,1));let o=new Yi(new Uint32Array(n.pos.length/3),1);o.setUsage(kc),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let r of this.devices){let s=this.glowOf(r);if(r.floorId!==t.floor.id||!s)continue;let o=Fp(t.floor,r.x,r.z),a=Dp(t.lightZones,o),[l,,c]=r.size??(r.lamp?Ku[r.lamp]:[.3,.3,.3]),u=r.base??0,h={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<Z1?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=r.lamp?h[r.lamp]:[r.y,"omni"],m=r.lightY??f,x=s.color;if(r.lamp==="strip"){let g=(r.rotation??0)*oe,p=!!r.upright||Math.abs(r.roll??0)>45;for(let _ of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:u+l*(.5+_),z:r.z,color:x,level:s.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(g)*l*_,y:m,z:r.z+Math.sin(g)*l*_,color:x,level:s.level*.55,kind:p?"omni":d,room:a})}else n.push({x:r.x,y:m,z:r.z,color:x,level:s.level,kind:d,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(h=>{let f=t.geo.openings.find(m=>m.opening.id===h.id);if(f&&er(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length||this.roomTint){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Lp(e,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Fn(new le({vertexColors:!0}),this.themeUniform),pattern:tM(this.patternTexture),wall:Fn(ai(new le({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:ai(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),coveredRoof:Fn(ai(new le({vertexColors:!0,transparent:!0,depthWrite:!1,side:Me}),t,"roof"),this.themeUniform),shadow:new le({vertexColors:!0,blending:As,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Fn(ai(new xn({vertexColors:!0,transparent:!0,blending:Dl(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ai(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Fn(ai(new le({vertexColors:!0,side:Me}),t),this.themeUniform),glass:ai(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),t),blinds:Fn(ai(new le({map:this.blindTexture,vertexColors:!0,side:Me}),t),this.themeUniform),flow:nM(this.flowTime),solarLive:Hu(this.flowTime),lamps:Fn(new le({vertexColors:!0}),this.themeUniform),halos:new Zi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me}),screens:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Fu(n)?.id===s.id?o.filter(j=>j.face===Lu).map(j=>({field:j,face:op(n,j)})):[],l=o.filter(j=>j.face.startsWith(`wall:${s.id}:`));if(l.length){let j=new Map(sp(n,s.id).map(ut=>[ut.key,ut]));for(let ut of l){let W=j.get(ut.face);W&&a.push({field:ut,face:W})}}let u=(n.settings.roof.sections??[]).some(j=>!j.open&&j.base<s.elevation+s.height-.05)?(j,ut)=>{let W=Sd(n,j,ut);return W===null?null:W-s.elevation}:void 0,h=_p(Vu(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,vp(n.floors,s),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new Je,x=new Wt(h.floor,d.floor),g=new Wt(h.shadow,d.shadow);g.renderOrder=1;let p=new Wt(h.floor,d.pattern);p.renderOrder=2;let _=new Wt(new Kt,d.glow);_.renderOrder=3,_.visible=!1;let S=new Wt(new Kt,d.frames),v=new Wt(new Kt,d.blinds),M=new Wt(new Kt,d.glass);M.renderOrder=4;let T=new Wt(new Kt,d.lamps);T.visible=!1;let A=new Wt(new Kt,d.cones);A.visible=!1,A.renderOrder=3;let b=new Lr(new Kt,d.halos);b.visible=!1,b.renderOrder=7;let w=new Wt(new Kt,d.cones);w.visible=!1,w.renderOrder=7;let R=new Wt(new Kt,d.cones);R.visible=!1,R.renderOrder=7;let P=new Wt(new Kt,d.lamps);P.visible=!1;let L=new Wt(new Kt,d.screens);L.visible=!1,L.renderOrder=5;let I=new Wt(new Kt,d.flow);I.renderOrder=5,I.frustumCulled=!1;let E=Gu(a,s.elevation),D=E?new Wt(E.geometry,d.solarLive):null;D&&(D.renderOrder=6,oo(E,this.solarLevels));for(let j of[S,v,M])j.frustumCulled=!1;let U=new Wt(h.walls,d.glassWall),N=new Wt(h.walls,d.coveredRoof),z=new Wt(h.walls,d.wall);U.renderOrder=6,N.renderOrder=5,m.add(x,g,p,_,z,new bn(h.lines,d.lines),S,v,M,I,T,A,b,w,R,P,L,N,U,...D?[D]:[]);for(let j of s.furniture){if(j.type!=="fan_ceiling"&&j.type!=="fan_floor")continue;let ut=new ce,W=new Ve;yl(ut,W,j.type,j.w,j.d,j.h);let Z=new Je;Z.add(new Wt(ut.geometry(),d.wall),new bn(W.geometry(),d.lines));let ct=new Je,dt=j.rotation*oe;ct.position.set(j.x,dn(s,j),j.z),ct.rotation.y=-dt,Z.position.set(0,j.type==="fan_ceiling"?j.h*.18:j.h*.78,0),ct.add(Z),m.add(ct);let ft=this.devices.some(At=>At.furnitureId===j.id&&At.active);this.fanRotors.set(j.id,{rotor:Z,type:j.type,active:ft})}this.root.add(m);let B=document.createElement("button");B.className="fp3d-pin fp3d-pin-floor",B.dataset.floor=s.id;let k=document.createElement("b");k.textContent=s.name||"\u2013";let V=document.createElement("span");V.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",B.append(k,V),B.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(B);let nt=t.get(s.id),$=[],ot=null;for(let j of s.rooms){let ut=document.createElement("button");ut.className="fp3d-pin",ut.dataset.room=j.id,ut.dataset.floor=s.id,this.fillRoomPin(ut,j.name,this.roomInfo.get(j.id)),ut.addEventListener("click",()=>this.options.onRoomTap?.(s.id,j.id)),this.labels.append(ut);let[W,Z]=pd(j.points);$.push({pin:ut,room:j,cx:W,cz:Z});for(let[ct,dt]of j.points)ot??={x0:ct,x1:ct,z0:dt,z1:dt},ot.x0=Math.min(ot.x0,ct),ot.x1=Math.max(ot.x1,ct),ot.z0=Math.min(ot.z0,dt),ot.z1=Math.max(ot.z1,dt)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:h,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:S,glassMesh:M,blindsMesh:v,flowMesh:I,solarMesh:D,solarLive:E,lampMesh:T,sunMesh:A,sunSig:"",haloMesh:b,coneMesh:w,trailMesh:R,fridgeMesh:P,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:z,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ot,roomPins:$,labelSize:null,materials:d,mask:f,openings:new Map,y:nt?.y??0,o:nt?.o??1,ty:0,to:1,appliedO:-1,label:B})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Ul);this.buildOpenings(s),this.buildFlows(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(h=>h.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?pp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Zr(this.building).map(h=>[h.key,h])),n=this.building.settings.roof?.solar??[],r=Hu(this.flowTime),s=[],o=new Je,a=Fn(new le({vertexColors:!0,transparent:!0,side:Me}),this.themeUniform),l=Fn(new xn({vertexColors:!0,transparent:!0,blending:Dl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Fn(new le({vertexColors:!0,transparent:!0,side:Me,depthWrite:!1}),this.themeUniform),u=t.map(h=>{let f=new Je;f.add(new Wt(h.solid.geometry(),a),new bn(h.lines.geometry(),l)),h.glass.count&&f.add(new Wt(h.glass.geometry(),c));let d=n.flatMap(x=>{let g=e.get(x.face);return g&&(g.section?h.sections?.includes(g.section):h===t[0])?[{face:g,field:x}]:[]}),m=Gu(d,h.floor.elevation+h.base);if(m){let x=new Wt(m.geometry,r);x.renderOrder=9,f.add(x),s.push(m),oo(m,this.solarLevels)}return f.renderOrder=8,o.add(f),{group:f,floorId:h.floor.id,base:h.base,lift:h.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:u,solid:a,lines:l,glass:c,live:r,lives:s},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,s=1-Math.exp(-t/qp),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*W1:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:X1)):r=this.explode?n.rank*H1:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.coveredRoof.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/qp);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Yp);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Ul,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,m=a[f]??0,x=d-m;Math.abs(x)<.003?u[f]=d:(u[f]=m+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=h}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new st(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*J1+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>$u?.5+.5*Math.sin(f/140):f/$u;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new ce,h=[],f=[],d=new Map,m=t.floor.height;for(let x of r){let g=x.lamp==="strip"?(x.base??m)>Math.min(t.floor.cut_height,m):x.lamp?Jp.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=u.count,_=x.pack?De(x.pack):void 0,[S,v,M]=x.size??[.3,.3,.3];x.model?$d(u,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):_?Sl(u,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:S,d:v,h:M,mirror:x.mirror},x.base??0,65280):Yu(u,{...x,lamp:x.lamp},m,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:p,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=ad(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],m=d?.55+.45*d.level:0,x=d?new st(...d.color.map(_=>Math.min(1,_*m))):new st($1),g=n(u.id);g>0&&x.lerp(new st(1,1,1),.7*g);let p=new st(x.getHex());ld(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.sun,n=(this.building?.settings.north??0)*oe,r=this.weather?.cloud??0,s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(s===t.sunSig)return;t.sunSig=s;let o=new ce;if(e&&e.elevation>2&&r<.97){let a=Math.min(1,e.elevation/12)*(1-.8*r),l=e.elevation*oe,c=e.azimuth*oe,u=[Math.sin(n+c),-Math.cos(n+c)],h=1/Math.tan(l);for(let f of t.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let d=[-f.toRoom[0],-f.toRoom[1]],m=d[0]*u[0]+d[1]*u[1];if(m<.05)continue;let x=t.openings.get(f.opening.id),g=f.top-(x?.cover??0)*(f.top-f.sill);if(g-f.sill<.05)continue;let p=(b,w)=>{let R=Math.min(7,w*h);return[f.start[0]+f.axis[0]*b+f.toRoom[0]*f.faceRoom-u[0]*R,.02,f.start[1]+f.axis[1]*b+f.toRoom[1]*f.faceRoom-u[1]*R]},_=.14*a*Math.min(1,m*1.5),S=new st(1*_,.82*_,.55*_),v=S.clone().multiplyScalar(.45),M=t.floor.rooms.find(b=>b.id===f.opening.room_id);if(!M||M.points.length<3)continue;let T=Math.max(1,Math.ceil(Math.min(7,g*h)/.25)),A=Math.max(1,Math.ceil(f.width/.3));for(let b=0;b<T;b++){let w=f.sill+(g-f.sill)*b/T,R=f.sill+(g-f.sill)*(b+1)/T,P=b/T,L=(b+1)/T,I=S.clone().lerp(v,P),E=S.clone().lerp(v,L);for(let D=0;D<A;D++){let U=f.width*D/A,N=f.width*(D+1)/A,z=p((U+N)/2,(w+R)/2);if(!ue([z[0],z[2]],M.points))continue;let B=p(U,w),k=p(N,w),V=p(N,R),nt=p(U,R);o.tri(B,k,V,I,I,E),o.tri(B,V,nt,I,E,E)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ce,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*oe,_=[-Math.sin(p),Math.cos(p)],S=l.model==="camera_ceiling",v=l.reach??(S?3:4.5),M=(l.fov??(S?360:90))*oe/2,T=l.motion?new st(.9,.12,.16):new st(.04,.22,.28),A=new st(0,0,0),b=Math.max(4,Math.round(M/.15)),w=.015,R=t.geo.walls2d,P=E=>{let D=_[0]*Math.cos(E)-_[1]*Math.sin(E),U=_[1]*Math.cos(E)+_[0]*Math.sin(E),N=v;for(let z of R){let B=z.b[0]-z.a[0],k=z.b[1]-z.a[1],V=D*k-U*B;if(Math.abs(V)<1e-9)continue;let nt=((z.a[0]-l.x)*k-(z.a[1]-l.z)*B)/V,$=((z.a[0]-l.x)*U-(z.a[1]-l.z)*D)/V;nt>.45&&nt<N&&$>=0&&$<=1&&(N=nt)}return N},L=E=>{let D=P(E);return[l.x+(_[0]*Math.cos(E)-_[1]*Math.sin(E))*D,w,l.z+(_[1]*Math.cos(E)+_[0]*Math.sin(E))*D]},I=s.count;for(let E=0;E<b;E++)s.tri([l.x,w,l.z],L(-M+2*M*(E+1)/b),L(-M+2*M*E/b),T,A,A);o.push({id:l.id,start:I,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Jp.has(l.lamp)&&this.wallMode==="cut")continue;let[u,h,f]=l.size??Ku[l.lamp],d=l.base??0,m=(l.rotation??0)*oe,x={ceiling:e-.07,downlight:e-.03,spot:e-f,panel:e-.03,pendant:Math.max(.4,e-f)+.08,floor:d+f-.15,uplight:d+f,table:d+f-.09,wall:d+f/2,strip:d+Math.max(.02,f)-.01,bollard:d+f-.08,garden:d+f-.03}[l.lamp],g=(p,_,S=1)=>{n.push(p,x,_),r.push(...c.color.map(v=>v*c.level*.7*S))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+p),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6))):g(l.x+Math.cos(m)*u*p,l.z+Math.sin(m)*u*p,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(h/2+.05),l.z+Math.cos(m)*(h/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new st(...c.color.map(T=>T*.09*c.level)),_=new st(0,0,0),S=Math.max(.03,u/2),v=.45+.35*c.level,M=16;for(let T=0;T<M;T++){let A=T/M*Math.PI*2,b=(T+1)/M*Math.PI*2,w=[l.x+Math.cos(A)*S,x,l.z+Math.sin(A)*S],R=[l.x+Math.cos(b)*S,x,l.z+Math.sin(b)*S],P=[l.x+Math.cos(A)*v,.02,l.z+Math.sin(A)*v],L=[l.x+Math.cos(b)*v,.02,l.z+Math.sin(b)*v];s.tri(w,P,L,p,_,_),s.tri(w,L,R,p,_,p)}}}let a=new Kt;a.setAttribute("position",new Vt(n,3)),a.setAttribute("color",new Vt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Vu(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new ce;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*oe,l=Math.cos(a),c=Math.sin(a),u=(v,M,T)=>[s.x+v*l-T*c,M,s.z+v*c+T*l];if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),M=Math.max(.05,s.d),T=Math.max(.005,s.h),A=dn(t.floor,s);for(let b of o.faces){if(b.part==="cabin"){let B=De(s.type),k=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(B&&B.parts.some(k)){let V=new st(...b.color.map(nt=>Math.min(1,nt*(.3+.5*b.level))));Iu(r,B,s,A,V.getHex(),k);continue}}if(b.part==="band"||b.part==="cabin"){let B=b.part==="cabin",k=A+T*(B?.6:.42),V=B?A+T*.86:k+.07,nt=new st(...b.color.map(ut=>Math.min(1,ut*(.3+.45*b.level)))),$=Math.abs(v)/2+(B?.012:.02),ot=M/2+(B?.012:.02),j=[[-$,-ot],[$,-ot],[$,ot],[-$,ot]];for(let ut=0;ut<4;ut++){let W=j[ut],Z=j[(ut+1)%4],ct=u(W[0]*Math.sign(v),k,W[1]),dt=u(Z[0]*Math.sign(v),k,Z[1]),ft=u(Z[0]*Math.sign(v),V,Z[1]),At=u(W[0]*Math.sign(v),V,W[1]);r.tri(ct,dt,ft,nt),r.tri(ct,ft,At,nt)}continue}let w=b.part==="right"?.03:-Math.abs(v)/2+.03,R=b.part==="left"?-.03:Math.abs(v)/2-.03,P=A+(b.part==="bottom"?T*.45:T)+.006,L=new st(...b.color.map(B=>Math.min(1,B*(.35+.65*b.level)))),I=new st(0,0,0),E=(B,k,V=P)=>u(B*Math.sign(v),V,k),D=[E(w,-M/2+.03),E(R,-M/2+.03),E(R,M/2-.03),E(w,M/2-.03)];r.tri(D[0],D[2],D[1],L),r.tri(D[0],D[3],D[2],L);let U=.12+.1*b.level,N=L.clone().multiplyScalar(.5),z=[E(w-U,-M/2-U,P+.004),E(R+U,-M/2-U,P+.004),E(R+U,M/2+U,P+.004),E(w-U,M/2+U,P+.004)];for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(D[B],z[k],z[B],N,I,I),r.tri(D[B],D[k],z[k],N,N,I)}}continue}let h=De(s.type);if(h&&!h.light&&o.ring&&h.parts.some(v=>v.glow)){let v=new st(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));Iu(r,h,s,dn(t.floor,s),v.getHex())}let f=Ru(s,t.floor);if(!f)continue;let d=new st(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),m=new st(0,0,0),x=f.z+.004;if(r.tri(u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),d),r.tri(u(f.x0,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x),d),o.plain)continue;let g=.18+.12*o.level,p=d.clone().multiplyScalar(.5),_=[u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x)],S=[u(f.x0-g,f.y0-g,x+.01),u(f.x1+g,f.y0-g,x+.01),u(f.x1+g,f.y1+g,x+.01),u(f.x0-g,f.y1+g,x+.01)];for(let v=0;v<4;v++){let M=(v+1)%4;r.tri(_[v],S[v],S[M],p,m,m),r.tri(_[v],S[M],_[M],p,m,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Ru(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Wt(new Mi(1,1),new le({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new Ss().load(o.picture,h=>{if(t.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Ce,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,h=e.rotation*oe,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-h,0),t.position.set(e.x+f*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+f*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(Zu).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(Zu(u))??{speed:Qp(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(_=>_*f),m=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(m<1e-4)continue;let x=[(u.b[0]-u.a[0])/m,(u.b[1]-u.a[1])/m,(u.b[2]-u.a[2])/m],g=[];if(Math.abs(x[1])<.5){let _=Math.hypot(x[0],x[2])||1;g.push([-x[2]/_,0,x[0]/_])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[Zp*1.4,1]]:[[Y1,.25],[Zp,1]];for(let[_,S]of p)for(let v of g){let M=_/2,T=(b,w)=>[b[0]+v[0]*M*w,b[1]+v[1]*M*w,b[2]+v[2]*M*w],A=[[T(u.a,-1),u.dist,0],[T(u.b,-1),u.dist+m,0],[T(u.b,1),u.dist+m,1],[T(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[w,R,P]=A[b];n.push(w[0],w[1],w[2]),r.push(d[0]*S,d[1]*S,d[2]*S),s.push(R,P),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Kt;c.setAttribute("position",new Vt(n,3)),c.setAttribute("color",new Vt(r,3)),c.setAttribute("uv",new Vt(s,2)),c.setAttribute("flowSpeed",new Vt(o,1)),c.setAttribute("flowOffset",new Vt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=zp(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new st(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new st(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(K1,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=Sp(this.activeFloors());e.isEmpty()&&e.set(new G(-4,0,-4),new G(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new G),r=e.getSize(new G),s=this.startView,o=this.floorId===null,a=s?s.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),u=c<1?1.12:1.06,h=Tp(e,a,c,this.camera.fov*oe,u),f=s?s.theta:h.theta,d=ku(e,f,a,this.camera.aspect,this.camera.fov*oe,l),m=Math.max(8,d.radius);this.controls.maxRadius=Math.max(40,m*3),s&&o?n.y=e.min.y+r.y*(this.houseView?.45:.3):n.add(d.offset),this.floorId===null&&(this.houseRadius=m),s&&o&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,s.radius*1.5)),this.controls.flyTo({target:n,radius:s&&o?s.radius:m,phi:a,theta:f},t)}cameraFrame(){let t=this.size.w<700?12:18,e=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:t);return{width:this.size.w,height:this.size.h,left:e,right:t,top:t,bottom:t}}placeGround(){let t=new je,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=sM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new G),r=t.getSize(new G),s=Ju*Math.ceil((Math.max(r.x,r.z)+16)/Ju);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Oi-.02,n.z)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Ts;return r.setFromCamera(new Jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??qt;if(f!==qt&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=c.geo.coveredRoomTris.find(m=>l>=m.start&&l<m.end);if(u){if(this.roomId!==null&&c.floor.rooms.some(x=>x.id===this.roomId&&Hn(x))&&u.roofStart!==void 0&&u.roofEnd!==void 0&&l>=u.roofStart&&l<u.roofEnd)continue;return{floorId:c.floor.id,roomId:u.id}}let h=o(c.geo.outdoorTris,l);if(h)return{floorId:c.floor.id,outdoorId:h};let f=o(c.geo.furnitureTris,l),d=f?this.pickFurniture.get(f):void 0;if(d)return{entity:d};if(a.face&&!f){let m=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,x=Math.floor(m/16),g=m%16,p=this.wallMode==="cut"&&x===0,_=(c.mask.glass.value&1<<g)!==0;if(!p){let S=n.ray.direction,v=Math.hypot(S.x,S.z)||1,M=[a.point.x-S.x/v*.3,a.point.z-S.z/v*.3],T=c.floor.rooms.find(A=>A.points.length>=3&&ue(M,A.points))?.id??null;if(this.roomId!==null){if(T===this.roomId)return{floorId:c.floor.id,roomId:T}}else if(!_&&T)return{floorId:c.floor.id,roomId:T}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+$u),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}if(n&&"outdoorId"in n){this.options.onOutdoorTap?this.options.onOutdoorTap(n.floorId,n.outdoorId):this.options.onRoomTap?.(n.floorId,null);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(s,!1)){if(o.faceIndex==null)continue;let a=r.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let r=this.rayAt(e,n),s=t.floor.elevation+t.y,o=r.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(s-r.ray.origin.y)/o.y;return a<=0?null:[r.ray.origin.x+o.x*a,r.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e)}grabItem(t,e,n,r){let s=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,r);return!s||!o?!1:s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),u=l&&this.floorPoint(l,t,e);if(!l||!c||!u)return;let h=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/h)*h,n.z=c.z=Math.round((u[1]+n.offset[1])/h)*h,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=this.floorPoint(s,t,e);if(!o)return;let a=this.building?.settings.grid??.05;r.x=Math.round((o[0]+r.offset[0])/a)*a,r.z=Math.round((o[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(p=>p.floor.furniture.some(_=>_.id===t)):void 0,n=e?.floor.furniture.find(p=>p.id===t);if(!e||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=De(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?dn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:dn(e.floor,n),u=n.rotation*oe,h=Math.cos(u),f=Math.sin(u),d=(p,_,S)=>[r+p*h-_*f,S,s+p*f+_*h],m=new Ve,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new st(.25,.9,1);for(let p=0;p<4;p++){let[_,S]=x[p],[v,M]=x[(p+1)%4];m.seg(d(_,S,c+.01),d(v,M,c+.01),g),m.seg(d(_,S,c+l),d(v,M,c+l),g),m.seg(d(_,S,c+.01),d(_,S,c+l),g)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new st(1,1,1)),this.ghost=new bn(m.geometry(),new xn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Qe(s,o);a.texture.colorSpace=Ce;let l=new ti(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),m=document.createElement("canvas");m.width=s,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let I of this.floors)I.group.visible=I===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let _=p.floor.rooms.flatMap(I=>I.points),S=p.floor.elevation,v=new je(new G(Math.min(..._.map(I=>I[0]))-.3,S,Math.min(..._.map(I=>I[1]))-.3),new G(Math.max(..._.map(I=>I[0]))+.3,S+Math.min(p.floor.cut_height,p.floor.height),Math.max(..._.map(I=>I[1]))+.3)),M=v.getCenter(new G),T=-.6,A=.8,b=new G(Math.sin(A)*Math.sin(T),Math.cos(A),Math.sin(A)*Math.cos(T));l.position.copy(M).addScaledVector(b,100),l.lookAt(M),l.updateMatrixWorld();let w=.5,R=.5;for(let I of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let D of[v.min.z,v.max.z]){let U=new G(I,E,D).applyMatrix4(l.matrixWorldInverse);w=Math.max(w,Math.abs(U.x)),R=Math.max(R,Math.abs(U.y))}let P=s/o;w/R>P?R=w/P:w=R*P,l.left=-w*1.05,l.right=w*1.05,l.top=R*1.05,l.bottom=-R*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let L=x.createImageData(s,o);for(let I=0;I<o;I++)L.data.set(d.subarray((o-1-I)*s*4,(o-I)*s*4),I*s*4);x.putImageData(L,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Vp(n.room,void 0,void 0,n.obstacles):qu(n.rest),l=a.length?a:qu(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!ue(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Xp[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new ce,s=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);xe(r,f,l,c,u,h,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new le({vertexColors:!0});let o=new ce;xe(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Je,n=new le({color:Xp[t.mode]});return e.add(new Wt(this.robotGeo,this.robotMat),new Wt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Gp(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t){let e=s=>new st(.25-.2*s,.95-.83*s,1-.7*s),n=new st(0,0,0),r=.02;for(let s of this.floors){let o=new ce,a=null;for(let l of t){if(l.floorId!==s.floor.id)continue;let c=e(l.age);if(a){let u=Math.hypot(l.x-a.x,l.z-a.z)||1,h=-(l.z-a.z)/u*.06,f=(l.x-a.x)/u*.06,d=e(a.age);o.tri([a.x+h,r,a.z+f],[l.x+h,r,l.z+f],[l.x-h,r,l.z-f],d,c,c),o.tri([a.x+h,r,a.z+f],[l.x-h,r,l.z-f],[a.x-h,r,a.z-f],d,c,d)}for(let u=0;u<12;u++){let h=u/12*Math.PI*2,f=(u+1)/12*Math.PI*2;o.tri([l.x,r,l.z],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],[l.x+Math.cos(h)*.22,r,l.z+Math.sin(h)*.22],c,n,n)}a=l}s.trailMesh.geometry.dispose(),s.trailMesh.geometry=o.geometry(),s.trailMesh.visible=o.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*oe,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*oe)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new G(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new G(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new G(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=this.stepFans(e),l=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let p=this.deviceFloor.get(x);p&&m.add(p),g<=t&&this.flashes.delete(x)}l=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let c=this.placeRoof(e),u=this.stepRobots(t),h=this.stepWeather(t),f=r||s||o||a||l||c,d=[];if(r&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("fans"),l&&d.push("flash"),c&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),u&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*Kp:Kp;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*$p:$p))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,f)=>{let d=h?h[0]*n/s+h[1]*r/s>=.25:a;!l&&d&&(c|=1<<f)});let u=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId&&Hn(h));o.mask.standing.value=l?0:u?65535&~(1<<Ou):65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new G,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let p=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:_}),(!c||p>c.x)&&(c={x:p,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:m,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.floorId!==null&&(o.views!=="all"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new G(o.p[0],o.p[1]+(l?.y??0)+(o.roof?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length(),f=u.normalize().dot(new G(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new G,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function j1(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new vi(t);return s.flipY=!1,s.wrapS=cn,s.wrapT=cn,s.anisotropy=4,s.colorSpace=Ce,s}function tM(i){let t=new le({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function eM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new vi(i);return e.wrapS=Xi,e.wrapT=Xi,e.colorSpace=Ce,e}function Zu(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function Qp(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function nM(i){let t=new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Me});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function iM(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function rM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new vi(t);return r.colorSpace=Ce,r}function sM(){let t=Ju,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new vi(e);return s.anisotropy=4,s.colorSpace=Ce,s}function IE(i,t){return new Qu(i,t)}function Yu(i,t,e,n){let[r,s,o]=t.size??Ku[t.lamp],a=t.base??0,l=(t.rotation??0)*oe,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[t.x+x*c-g*u,t.z+x*u+g*c],f=(x,g,p,_,S,v=14)=>{let M=[];for(let T=0;T<v;T++){let A=T/v*Math.PI*2;M.push([t.x+Math.cos(A)*x,t.z+Math.sin(A)*x])}xe(i,M,g,p,_,S,{aoFrom:0,bottom:!0})},d=(x,g,p,_,S,v,M,T=M)=>xe(i,[h(x,p),h(g,p),h(g,_),h(x,_)],S,v,M,T,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":f(m*.25,e-.04,e,te,te,8),f(m,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,te,te,8);let g=t.variant==="globe"?x+2*m:t.variant==="drum"?x+.24:x+.2;if(f(.008,g,e-.02,te,te,5),t.variant==="globe")for(let _=0;_<7;_++){let S=Math.PI*(_/7),v=Math.PI*((_+1)/7);f(m*Math.max(.2,Math.sin((S+v)/2)),x+m-m*Math.cos(S),x+m-m*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)f(m*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,e-.012,e,te,te,12),f(m*.7,e-.02,e-.012,n,n,12);break;case"spot":f(m*.6,e-.02,e,te,te,10),f(m,e-Math.max(.06,o),e-.02,te,te,12),f(m*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,te,te),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,te,te),f(.014,a+.03,a+o-.12,te,te,6),f(m,a+o-.14,a+o-.02,te,te),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,te,te,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,te,te,10);break;case"garden":f(.012,a,a+o-.08,te,te,5),f(m,a+o-.08,a+o-.01,te,te,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,te,te),f(.014,a+.03,a+o-.28,te,te,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,te,te),f(.012,a+.03,a+o-.16,te,te,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??pl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,te),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,g-x,g,n);break}let p=(t.roll??0)*oe,_=Math.cos(p),S=Math.sin(p),v=t.upright?a+r/2:g-x/2,M=(R,P,L)=>{let I=R,E=P*_-L*S,D=P*S+L*_;return t.upright&&([I,E]=[-E,I]),[t.x+I*c-D*u,v+E,t.z+I*u+D*c]},T=[M(-r/2,-x/2,-s/2),M(r/2,-x/2,-s/2),M(r/2,-x/2,s/2),M(-r/2,-x/2,s/2),M(-r/2,x/2,-s/2),M(r/2,x/2,-s/2),M(r/2,x/2,s/2),M(-r/2,x/2,s/2)],A=new st(n),b=[t.x,v,t.z],w=(R,P,L,I)=>{let[E,D,U]=[T[R],T[P],T[L]],N=[(D[1]-E[1])*(U[2]-E[2])-(D[2]-E[2])*(U[1]-E[1]),(D[2]-E[2])*(U[0]-E[0])-(D[0]-E[0])*(U[2]-E[2]),(D[0]-E[0])*(U[1]-E[1])-(D[1]-E[1])*(U[0]-E[0])],z=[E[0]-b[0],E[1]-b[1],E[2]-b[2]],B=N[0]*z[0]+N[1]*z[1]+N[2]*z[2]<0,[k,V,nt,$]=B?[T[I],T[L],T[P],T[R]]:[T[R],T[P],T[L],T[I]];i.tri(k,V,nt,A,A,A),i.tri(k,nt,$,A,A,A)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{Qu as FloorplanViewer,IE as createViewer,G1 as furniturePreview,Q1 as isLowEnd,Yu as pushLampModel};
