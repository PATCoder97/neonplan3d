var df=0,kc=1,pf=2;var No=1,mf=2,Wr=3,Pi=0,rn=1,Mt=2,Gn=0,Fi=1,Lt=2,zc=3,Bo=4,gf=5;var nr=100,_f=101,bf=102,xf=103,yf=104,vf=200,Mf=201,Sf=202,Tf=203,Vc=204,Gc=205,wf=206,Ef=207,Af=208,Rf=209,Cf=210,If=211,Pf=212,Ff=213,Lf=214,Ks=0,Js=1,Qs=2,Dr=3,js=4,ea=5,ta=6,na=7,Hc=0,Df=1,Uf=2,Cn=0,Wc=1,Xc=2,Yc=3,qc=4,$c=5,Zc=6,Kc=7;var Jc=300,Li=301,ir=302,Ia=303,Pa=304,Oo=306,Ki=1e3,hn=1001,ia=1002,zt=1003,Nf=1004;var ko=1005;var Ht=1006,Fa=1007;var Di=1008;var pn=1009,Qc=1010,jc=1011,Xr=1012,La=1013,In=1014,Pn=1015,Fn=1016,Da=1017,Ua=1018,Yr=1020,eu=35902,tu=35899,nu=1021,iu=1022,vn=1023,kn=1026,Ui=1027,ru=1028,Na=1029,Ni=1030,Ba=1031;var Oa=1033,zo=33776,Vo=33777,Go=33778,Ho=33779,ka=35840,za=35841,Va=35842,Ga=35843,Ha=36196,Wa=37492,Xa=37496,Ya=37488,qa=37489,Wo=37490,$a=37491,Za=37808,Ka=37809,Ja=37810,Qa=37811,ja=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,ol=37818,sl=37819,al=37820,ll=37821,cl=36492,ul=36494,hl=36495,fl=36283,dl=36284,Xo=36285,pl=36286;var go=2300,ra=2301,qs=2302,Rc=2303,Cc=2400,Ic=2401,Pc=2402;var Bf=3200;var ou=0,Of=1,si="",Ct="srgb",_o="srgb-linear",bo="linear",dt="srgb";var $s=7680;var kf=519,zf=512,Vf=513,Gf=514,ml=515,Hf=516,Wf=517,gl=518,Xf=519,Yf=35044,su=35048;var au="300 es",Rn=2e3,xo=2001;function Cm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Im(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){let i=Ur("canvas");return i.style.display="block",i}var Uh={},Nr=null;function lu(...i){let e="THREE."+i.shift();Nr?Nr("log",e,...i):console.log(e,...i)}function $f(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=$f(i);let e="THREE."+i.shift();if(Nr)Nr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ze(...i){i=$f(i);let e="THREE."+i.shift();if(Nr)Nr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Zi(...i){let e=i.join(" ");e in Uh||(Uh[e]=!0,ke(...i))}function Zf(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var Kf={[Ks]:Js,[Qs]:ta,[js]:na,[Dr]:ea,[Js]:Ks,[ta]:Qs,[na]:js,[ea]:Dr},zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oc=Math.PI/180,oa=180/Math.PI;function Yo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Pm(i,e){return(i%e+e)%e}function sc(i,e,t){return(1-t)*i+t*e}function lo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var du=class du{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};du.prototype.isVector2=!0;var Je=du,Vn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],f=o[s+0],p=o[s+1],g=o[s+2],b=o[s+3];if(d!==b||l!==f||c!==p||h!==g){let _=l*f+c*p+h*g+d*b;_<0&&(f=-f,p=-p,g=-g,b=-b,_=-_);let m=1-a;if(_<.9995){let y=Math.acos(_),M=Math.sin(y);m=Math.sin(m*y)/M,a=Math.sin(a*y)/M,l=l*m+f*a,c=c*m+p*a,h=h*m+g*a,d=d*m+b*a}else{l=l*m+f*a,c=c*m+p*a,h=h*m+g*a,d=d*m+b*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=o[s],f=o[s+1],p=o[s+2],g=o[s+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(o/2),f=l(n/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pu=class pu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),h=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*h,this.y=n+l*h+a*c-o*d,this.z=r+l*d+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;var X=pu,ac=new X,Nh=new Vn,mu=class mu{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],b=r[0],_=r[3],m=r[6],y=r[1],M=r[4],v=r[7],S=r[2],w=r[5],A=r[8];return o[0]=s*b+a*y+l*S,o[3]=s*_+a*M+l*w,o[6]=s*m+a*v+l*A,o[1]=c*b+h*y+d*S,o[4]=c*_+h*M+d*w,o[7]=c*m+h*v+d*A,o[2]=f*b+p*y+g*S,o[5]=f*_+p*M+g*w,o[8]=f*m+p*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*s-a*c,f=a*l-h*o,p=c*o-s*l,g=t*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=d*b,e[1]=(r*c-h*n)*b,e[2]=(a*n-r*s)*b,e[3]=f*b,e[4]=(h*t-r*l)*b,e[5]=(r*o-a*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(s*t-n*o)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(e,t)),this}rotate(e){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;var We=mu,lc=new We,Bh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fm(){let i={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===dt&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===dt&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_o]:{primaries:e,whitePoint:n,transfer:bo,toXYZ:Bh,fromXYZ:Oh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Bh,fromXYZ:Oh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var tt=Fm();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xr,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xr===void 0&&(xr=Ur("canvas")),xr.width=e.width,xr.height=e.height;let r=xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ii(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lm=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(cc(r[s].image)):o.push(cc(r[s]))}else o=cc(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Dm=0,uc=new X,Qt=class i extends zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hn,r=hn,o=Ht,s=Di,a=vn,l=pn,c=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Yo(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Jc;Qt.DEFAULT_ANISOTROPY=1;var gu=class gu{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],b=l[2],_=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,S=(m+1)/2,w=(h+f)/4,A=(d+b)/4,x=(g+_)/4;return M>v&&M>S?M<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(M),r=w/n,o=A/n):v>S?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=w/r,o=x/r):S<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),n=A/o,r=x/o),this.set(n,r,o,t),this}let y=Math.sqrt((_-g)*(_-g)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(_-g)/y,this.y=(d-b)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;var At=gu,aa=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new Qt(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends aa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yo=class extends Qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends Qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ca=class Ca{constructor(e,t,n,r,o,s,a,l,c,h,d,f,p,g,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,h,d,f,p,g,b,_)}set(e,t,n,r,o,s,a,l,c,h,d,f,p,g,b,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=b,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),o=1/yr.setFromMatrixColumn(e,1).length(),s=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let f=s*h,p=s*d,g=a*h,b=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-b*c,t[9]=-a*l,t[2]=b-f*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,g=c*h,b=c*d;t[0]=f+b*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-a,t[2]=p*a-g,t[6]=b+f*a,t[10]=s*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,g=c*h,b=c*d;t[0]=f-b*a,t[4]=-s*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*h,t[9]=b-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let f=s*h,p=s*d,g=a*h,b=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+b,t[1]=l*d,t[5]=b*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let f=s*l,p=s*c,g=a*l,b=a*c;t[0]=l*h,t[4]=b-f*d,t[8]=g*d+p,t[1]=d,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-b*d}else if(e.order==="XZY"){let f=s*l,p=s*c,g=a*l,b=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+b,t[5]=s*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Nm)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),_i.crossVectors(n,cn),_i.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),_i.crossVectors(n,cn)),_i.normalize(),Ms.crossVectors(cn,_i),r[0]=_i.x,r[4]=Ms.x,r[8]=cn.x,r[1]=_i.y,r[5]=Ms.y,r[9]=cn.y,r[2]=_i.z,r[6]=Ms.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],b=n[6],_=n[10],m=n[14],y=n[3],M=n[7],v=n[11],S=n[15],w=r[0],A=r[4],x=r[8],T=r[12],C=r[1],P=r[5],L=r[9],F=r[13],E=r[2],U=r[6],N=r[10],B=r[14],V=r[3],z=r[7],W=r[11],H=r[15];return o[0]=s*w+a*C+l*E+c*V,o[4]=s*A+a*P+l*U+c*z,o[8]=s*x+a*L+l*N+c*W,o[12]=s*T+a*F+l*B+c*H,o[1]=h*w+d*C+f*E+p*V,o[5]=h*A+d*P+f*U+p*z,o[9]=h*x+d*L+f*N+p*W,o[13]=h*T+d*F+f*B+p*H,o[2]=g*w+b*C+_*E+m*V,o[6]=g*A+b*P+_*U+m*z,o[10]=g*x+b*L+_*N+m*W,o[14]=g*T+b*F+_*B+m*H,o[3]=y*w+M*C+v*E+S*V,o[7]=y*A+M*P+v*U+S*z,o[11]=y*x+M*L+v*N+S*W,o[15]=y*T+M*F+v*B+S*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],b=e[7],_=e[11],m=e[15],y=l*p-c*f,M=a*p-c*d,v=a*f-l*d,S=s*p-c*h,w=s*f-l*h,A=s*d-a*h;return t*(b*y-_*M+m*v)-n*(g*y-_*S+m*w)+r*(g*M-b*S+m*A)-o*(g*v-b*w+_*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],b=e[13],_=e[14],m=e[15],y=t*a-n*s,M=t*l-r*s,v=t*c-o*s,S=n*l-r*a,w=n*c-o*a,A=r*c-o*l,x=h*b-d*g,T=h*_-f*g,C=h*m-p*g,P=d*_-f*b,L=d*m-p*b,F=f*m-p*_,E=y*F-M*L+v*P+S*C-w*T+A*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/E;return e[0]=(a*F-l*L+c*P)*U,e[1]=(r*L-n*F-o*P)*U,e[2]=(b*A-_*w+m*S)*U,e[3]=(f*w-d*A-p*S)*U,e[4]=(l*C-s*F-c*T)*U,e[5]=(t*F-r*C+o*T)*U,e[6]=(_*v-g*A-m*M)*U,e[7]=(h*A-f*v+p*M)*U,e[8]=(s*L-a*C+c*x)*U,e[9]=(n*C-t*L-o*x)*U,e[10]=(g*w-b*v+m*y)*U,e[11]=(d*v-h*w-p*y)*U,e[12]=(a*T-s*P-l*x)*U,e[13]=(t*P-n*T+r*x)*U,e[14]=(b*M-g*S-_*y)*U,e[15]=(h*S-d*M+f*y)*U,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,h=s+s,d=a+a,f=o*c,p=o*h,g=o*d,b=s*h,_=s*d,m=a*d,y=l*c,M=l*h,v=l*d,S=n.x,w=n.y,A=n.z;return r[0]=(1-(b+m))*S,r[1]=(p+v)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(p-v)*w,r[5]=(1-(f+m))*w,r[6]=(_+y)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(_-y)*A,r[10]=(1-(f+b))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=yr.set(r[0],r[1],r[2]).length(),a=yr.set(r[4],r[5],r[6]).length(),l=yr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Tn.copy(this);let c=1/s,h=1/a,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,t.setFromRotationMatrix(Tn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=Rn,l=!1){let c=this.elements,h=2*o/(t-e),d=2*o/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),g,b;if(l)g=o/(s-o),b=s*o/(s-o);else if(a===Rn)g=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===xo)g=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Rn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),g,b;if(l)g=1/(s-o),b=s/(s-o);else if(a===Rn)g=-2/(s-o),b=-(s+o)/(s-o);else if(a===xo)g=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ca.prototype.isMatrix4=!0;var Tt=Ca,yr=new X,Tn=new Tt,Um=new X(0,0,0),Nm=new X(1,1,1),_i=new X,Ms=new X,cn=new X,kh=new Tt,zh=new Vn,Si=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bm=0,Vh=new X,vr=new Vn,Qn=new Tt,Ss=new X,co=new X,Om=new X,km=new Vn,Gh=new X(1,0,0),Hh=new X(0,1,0),Wh=new X(0,0,1),Xh={type:"added"},zm={type:"removed"},Mr={type:"childadded",child:null},hc={type:"childremoved",child:null},an=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new X,t=new Si,n=new Vn,r=new X(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new We}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(co,Ss,this.up):Qn.lookAt(Ss,co,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Qn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xh),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zm),hc.child=e,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xh),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new X(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vm={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let b of e.hand.values()){let _=t.getJointPose(b,n),m=this._getHandJoint(c,b);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Pm(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=fc(s,o,e+1/3),this.g=fc(s,o,e),this.b=fc(s,o,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function n(o){o!==void 0&&parseFloat(o)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return tt.workingToColorSpace(Zt.copy(this),e),Math.round(nt(Zt.r*255,0,255))*65536+Math.round(nt(Zt.g*255,0,255))*256+Math.round(nt(Zt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Zt.copy(this),t);let n=Zt.r,r=Zt.g,o=Zt.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let d=s-a;switch(c=h<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ct){tt.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,r=Zt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Ts);let n=sc(bi.h,Ts.h,t),r=sc(bi.s,Ts.s,t),o=sc(bi.l,Ts.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new ae;ae.NAMES=Jf;var vo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ji=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new X,jn=new X,dc=new X,ei=new X,Sr=new X,Tr=new X,Yh=new X,pc=new X,mc=new X,gc=new X,_c=new At,bc=new At,xc=new At,Mi=class i{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){wn.subVectors(r,t),jn.subVectors(n,t),dc.subVectors(e,t);let s=wn.dot(wn),a=wn.dot(jn),l=wn.dot(dc),c=jn.dot(jn),h=jn.dot(dc),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,g=(s*h-a*l)*f;return o.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ei.x),l.addScaledVector(s,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return _c.setScalar(0),bc.setScalar(0),xc.setScalar(0),_c.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),xc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(_c,o.x),s.addScaledVector(bc,o.y),s.addScaledVector(xc,o.z),s}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),jn.subVectors(e,t),wn.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;Sr.subVectors(r,n),Tr.subVectors(o,n),pc.subVectors(e,n);let l=Sr.dot(pc),c=Tr.dot(pc);if(l<=0&&c<=0)return t.copy(n);mc.subVectors(e,r);let h=Sr.dot(mc),d=Tr.dot(mc);if(h>=0&&d<=h)return t.copy(r);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(Sr,s);gc.subVectors(e,o);let p=Sr.dot(gc),g=Tr.dot(gc);if(g>=0&&p<=g)return t.copy(o);let b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Tr,a);let _=h*g-p*d;if(_<=0&&d-h>=0&&p-g>=0)return Yh.subVectors(o,r),a=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(Yh,a);let m=1/(_+b+f);return s=b*m,a=f*m,t.copy(n).addScaledVector(Sr,s).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},en=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,En):En.fromBufferAttribute(o,s),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Es.subVectors(this.max,uo),wr.subVectors(e.a,uo),Er.subVectors(e.b,uo),Ar.subVectors(e.c,uo),xi.subVectors(Er,wr),yi.subVectors(Ar,Er),Xi.subVectors(wr,Ar);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Xi.z,Xi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Xi.z,0,-Xi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Xi.y,Xi.x,0];return!yc(t,wr,Er,Ar,Es)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,wr,Er,Ar,Es))?!1:(As.crossVectors(xi,yi),t=[As.x,As.y,As.z],yc(t,wr,Er,Ar,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new X,new X,new X,new X,new X,new X,new X,new X],En=new X,ws=new en,wr=new X,Er=new X,Ar=new X,xi=new X,yi=new X,Xi=new X,uo=new X,Es=new X,As=new X,Yi=new X;function yc(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Yi.fromArray(i,o);let a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ft=new X,Rs=new Je,Gm=0,bn=class extends zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=lo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),o=sn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Mo=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qi=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hm=new en,ho=new X,vc=new X,Ti=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);let t=ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ho,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(vc)),this.expandByPoint(ho.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wm=0,_n=new Tt,Mc=new an,Rr=new X,un=new en,fo=new en,kt=new X,Qe=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cm(e)?Qi:Mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new We().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];un.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(un.min,fo.min),un.expandByPoint(kt),kt.addVectors(un.max,fo.max),un.expandByPoint(kt)):(un.expandByPoint(fo.min),un.expandByPoint(fo.max))}un.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)kt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(e,c),kt.add(Rr)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new X,l[x]=new X;let c=new X,h=new X,d=new X,f=new Je,p=new Je,g=new Je,b=new X,_=new X;function m(x,T,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),f.fromBufferAttribute(o,x),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,C),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),_.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[x].add(b),a[T].add(b),a[C].add(b),l[x].add(_),l[T].add(_),l[C].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let C=y[x],P=C.start,L=C.count;for(let F=P,E=P+L;F<E;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new X,v=new X,S=new X,w=new X;function A(x){S.fromBufferAttribute(r,x),w.copy(S);let T=a[x];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(w,T);let P=v.dot(l[x])<0?-1:1;s.setXYZW(x,M.x,M.y,M.z,P)}for(let x=0,T=y.length;x<T;++x){let C=y[x],P=C.start,L=C.count;for(let F=P,E=P+L;F<E;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new X,o=new X,s=new X,a=new X,l=new X,c=new X,h=new X,d=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),b=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,b),s.fromBufferAttribute(t,_),h.subVectors(s,o),d.subVectors(r,o),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,o),d.subVectors(r,o),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let b=0,_=l.length;b<_;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new bn(f,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let o=e.morphAttributes;for(let c in o){let h=[],d=o[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sc=new X,Xm=new X,Ym=new We,An=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Sc.subVectors(n,t).cross(Xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Sc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ym.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qm=0,ri=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Fi,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ni=new X,Tc=new X,Cs=new X,Is=new X,ji=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tc.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Is.copy(this.origin).sub(Tc);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Cs),a=Is.dot(this.direction),l=-Is.dot(Cs),c=Is.lengthSq(),h=Math.abs(1-s*s),d,f,p,g;if(h>0)if(d=s*l-a,f=s*a-l,g=o*h,d>=0)if(f>=-g)if(f<=g){let b=1/h;d*=b,f*=b,p=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tc).addScaledVector(Cs,f),p}intersectSphere(e,t){if(e.radius<0)return null;ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(o=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-s.x,f=e.y-s.y,p=e.z-s.z,g=t.x-s.x,b=t.y-s.y,_=t.z-s.z,m=n.x-s.x,y=n.y-s.y,M=n.z-s.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(h),A,x,T,C,P,L,F,E,U,N,B,V;if(v>=S&&v>=w?(T=l,L=d,U=g,V=m,l>=0?(A=c,x=h,C=f,P=p,F=b,E=_,N=y,B=M):(A=h,x=c,C=p,P=f,F=_,E=b,N=M,B=y)):S>=w?(T=c,L=f,U=b,V=y,c>=0?(A=h,x=l,C=p,P=d,F=_,E=g,N=M,B=m):(A=l,x=h,C=d,P=p,F=g,E=_,N=m,B=M)):(T=h,L=p,U=_,V=M,h>=0?(A=l,x=c,C=d,P=f,F=g,E=b,N=m,B=y):(A=c,x=l,C=f,P=d,F=b,E=g,N=y,B=m)),T===0)return null;let z=A/T,W=x/T,H=1/T,ie=C-z*L,K=P-W*L,se=F-z*U,Q=E-W*U,he=N-z*V,q=B-W*V,j=he*Q-q*se,fe=ie*q-K*he,me=se*K-Q*ie;if(r){if(j<0||fe<0||me<0)return null}else if((j<0||fe<0||me<0)&&(j>0||fe>0||me>0))return null;let pe=j+fe+me;if(pe===0)return null;let Ae=H*(j*L+fe*U+me*V);return(pe>0?Ae<0:Ae>0)?null:this.at(Ae/pe,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qh=new Tt,qi=new ji,Ps=new Ti,$h=new X,Fs=new X,Ls=new X,Ds=new X,wc=new X,Us=new X,Zh=new X,Ns=new X,Ye=class extends an{constructor(e=new Qe,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Us.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],d=o[l];h!==0&&(wc.fromBufferAttribute(d,e),s?Us.addScaledVector(wc,h):Us.addScaledVector(wc.sub(t),h))}t.add(Us)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(o),qi.copy(e.ray).recast(e.near),!(Ps.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ps,$h)===null||qi.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(qh.copy(o).invert(),qi.copy(e.ray).applyMatrix4(qh),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,b=f.length;g<b;g++){let _=f[g],m=s[_.materialIndex],y=Math.max(_.start,p.start),M=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let v=y,S=M;v<S;v+=3){let w=a.getX(v),A=a.getX(v+1),x=a.getX(v+2);r=Bs(this,m,e,n,c,h,d,w,A,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let _=g,m=b;_<m;_+=3){let y=a.getX(_),M=a.getX(_+1),v=a.getX(_+2);r=Bs(this,s,e,n,c,h,d,y,M,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,b=f.length;g<b;g++){let _=f[g],m=s[_.materialIndex],y=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=y,S=M;v<S;v+=3){let w=v,A=v+1,x=v+2;r=Bs(this,m,e,n,c,h,d,w,A,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let _=g,m=b;_<m;_+=3){let y=_,M=_+1,v=_+2;r=Bs(this,s,e,n,c,h,d,y,M,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function $m(i,e,t,n,r,o,s,a){let l;if(e.side===rn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Pi,a),l===null)return null;Ns.copy(a),Ns.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ns);return c<t.near||c>t.far?null:{distance:c,point:Ns.clone(),object:i}}function Bs(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Fs),i.getVertexPosition(l,Ls),i.getVertexPosition(c,Ds);let h=$m(i,e,t,n,Fs,Ls,Ds,Zh);if(h){let d=new X;Mi.getBarycoord(Zh,Fs,Ls,Ds,d),r&&(h.uv=Mi.getInterpolatedAttribute(r,a,l,c,d,new Je)),o&&(h.uv1=Mi.getInterpolatedAttribute(o,a,l,c,d,new Je)),s&&(h.normal=Mi.getInterpolatedAttribute(s,a,l,c,d,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new X,materialIndex:0};Mi.getNormal(Fs,Ls,Ds,f.normal),h.face=f,h.barycoord=d}return h}var ca=class extends Qt{constructor(e=null,t=1,n=1,r,o,s,a,l,c=zt,h=zt,d,f){super(null,s,a,l,c,h,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=new Ti,Zm=new Je(.5,.5),Os=new X,So=class{constructor(e=new An,t=new An,n=new An,r=new An,o=new An,s=new An){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],d=o[5],f=o[6],p=o[7],g=o[8],b=o[9],_=o[10],m=o[11],y=o[12],M=o[13],v=o[14],S=o[15];if(r[0].setComponents(c-s,p-h,m-g,S-y).normalize(),r[1].setComponents(c+s,p+h,m+g,S+y).normalize(),r[2].setComponents(c+a,p+d,m+b,S+M).normalize(),r[3].setComponents(c-a,p-d,m-b,S-M).normalize(),n)r[4].setComponents(l,f,_,v).normalize(),r[5].setComponents(c-l,p-f,m-_,S-v).normalize();else if(r[4].setComponents(c-l,p-f,m-_,S-v).normalize(),t===Rn)r[5].setComponents(c+l,p+f,m+_,S+v).normalize();else if(t===xo)r[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=Zm.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Os.x=r.normal.x>0?e.max.x:e.min.x,Os.y=r.normal.y>0?e.max.y:e.min.y,Os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xn=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ua=new X,ha=new X,Kh=new Tt,po=new ji,ks=new Ti,Ec=new X,Jh=new X,fa=class extends an{constructor(e=new Qe,t=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)ua.fromBufferAttribute(t,r-1),ha.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ua.distanceTo(ha);e.setAttribute("lineDistance",new Ge(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ks.radius+=o,e.ray.intersectsSphere(ks)===!1)return;Kh.copy(r).invert(),po.copy(e.ray).applyMatrix4(Kh);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let b=p,_=g-1;b<_;b+=c){let m=h.getX(b),y=h.getX(b+1),M=zs(this,e,po,l,m,y,b);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(g-1),_=h.getX(p),m=zs(this,e,po,l,b,_,g-1);m&&t.push(m)}}else{let p=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let b=p,_=g-1;b<_;b+=c){let m=zs(this,e,po,l,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=zs(this,e,po,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function zs(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if(ua.fromBufferAttribute(a,r),ha.fromBufferAttribute(a,o),t.distanceSqToSegment(ua,ha,Ec,Jh)>n)return;Ec.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ec);if(!(c<e.near||c>e.far))return{distance:c,point:Jh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Qh=new X,jh=new X,yn=class extends fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Qh.fromBufferAttribute(t,r),jh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qh.distanceTo(jh);e.setAttribute("lineDistance",new Ge(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var er=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ef=new Tt,Fc=new ji,Vs=new Ti,Gs=new X,zr=class extends an{constructor(e=new Qe,t=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=o,e.ray.intersectsSphere(Vs)===!1)return;ef.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(ef);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=f,b=p;g<b;g++){let _=c.getX(g);Gs.fromBufferAttribute(d,_),tf(Gs,_,l,r,e,t,this)}}else{let f=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let g=f,b=p;g<b;g++)Gs.fromBufferAttribute(d,g),tf(Gs,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function tf(i,e,t,n,r,o,s){let a=Fc.distanceSqToPoint(i);if(a<t){let l=new X;Fc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var To=class extends Qt{constructor(e=[],t=Li,n,r,o,s,a,l,c,h){super(e,t,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wi=class extends Qt{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends Qt{constructor(e,t,n=In,r,o,s,a=zt,l=zt,c,h=kn,d=1){if(h!==kn&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},da=class extends Ei{constructor(e,t=In,n=Li,r,o,s=zt,a=zt,l,c=kn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,o,s,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wo=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vr=class i extends Qe{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,s,o,0),g("z","y","x",1,-1,n,t,-e,s,o,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,o,4),g("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(d,2));function g(b,_,m,y,M,v,S,w,A,x,T){let C=v/A,P=S/x,L=v/2,F=S/2,E=w/2,U=A+1,N=x+1,B=0,V=0,z=new X;for(let W=0;W<N;W++){let H=W*P-F;for(let ie=0;ie<U;ie++){let K=ie*C-L;z[b]=K*y,z[_]=H*M,z[m]=E,c.push(z.x,z.y,z.z),z[b]=0,z[_]=0,z[m]=w>0?1:-1,h.push(z.x,z.y,z.z),d.push(ie/A),d.push(1-W/x),B+=1}}for(let W=0;W<x;W++)for(let H=0;H<A;H++){let ie=f+H+U*W,K=f+H+U*(W+1),se=f+(H+1)+U*(W+1),Q=f+(H+1)+U*W;l.push(ie,K,Q),l.push(K,se,Q),V+=6}a.addGroup(p,V,T),p+=V,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Eo=class i extends Qe{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new X,h=new Je;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/e+1)/2,h.y=(s[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};function Km(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=Qf(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=tg(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let f=t;f<r;f+=t){let p=i[f],g=i[f+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ao(o,s,t,a,l,c,0),s}function Qf(i,e,t,n,r){let o;if(r===fg(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=nf(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=nf(s/n|0,i[s],i[s+1],o);return o&&Gr(o,o.next)&&(Co(o),o=o.next),o}function tr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||Et(t.prev,t,t.next)===0)){if(Co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ao(i,e,t,n,r,o,s){if(!i)return;!s&&o&&sg(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?Qm(i,n,r,o):Jm(i)){e.push(l.i,i.i,c.i),Co(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=jm(tr(i),e),Ao(i,e,t,n,r,o,2)):s===2&&eg(i,e,t,n,r,o):Ao(tr(i),e,t,n,r,o,1);break}}}function Jm(i){let e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,o,s),d=Math.min(a,l,c),f=Math.max(r,o,s),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=p&&mo(r,a,o,l,s,c,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qm(i,e,t,n){let r=i.prev,o=i,s=i.next;if(Et(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,d=o.y,f=s.y,p=Math.min(a,l,c),g=Math.min(h,d,f),b=Math.max(a,l,c),_=Math.max(h,d,f),m=Lc(p,g,e,t,n),y=Lc(b,_,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=y;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=_&&M!==r&&M!==s&&mo(a,h,l,d,c,f,M.x,M.y)&&Et(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=b&&v.y>=g&&v.y<=_&&v!==r&&v!==s&&mo(a,h,l,d,c,f,v.x,v.y)&&Et(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=_&&M!==r&&M!==s&&mo(a,h,l,d,c,f,M.x,M.y)&&Et(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=_&&v!==r&&v!==s&&mo(a,h,l,d,c,f,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function jm(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Gr(n,r)&&e0(n,t,t.next,r)&&Ro(n,r)&&Ro(r,n)&&(e.push(n.i,t.i,r.i),Co(t),Co(t.next),t=i=r),t=t.next}while(t!==i);return tr(t)}function eg(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&cg(s,a)){let l=t0(s,a);s=tr(s,s.next),l=tr(l,l.next),Ao(s,e,t,n,r,o,0),Ao(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function tg(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=Qf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(lg(c))}r.sort(ng);for(let o=0;o<r.length;o++)t=ig(r[o],t);return t}function ng(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function ig(i,e){let t=rg(i,e);if(!t)return e;let n=t0(t,i);return tr(n,n.next),tr(t,t.next)}function rg(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&jf(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let d=Math.abs(r-t.y)/(n-t.x);Ro(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&og(s,t)))&&(s=t,h=d)}t=t.next}while(t!==a);return s}function og(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function sg(i,e,t,n){let r=i;do r.z===0&&(r.z=Lc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ag(r)}function ag(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Lc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jf(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function mo(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&jf(i,e,t,n,r,o,s,a)}function cg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ug(i,e)&&(Ro(i,e)&&Ro(e,i)&&hg(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||Gr(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function e0(i,e,t,n){let r=Ws(Et(i,e,t)),o=Ws(Et(i,e,n)),s=Ws(Et(t,n,i)),a=Ws(Et(t,n,e));return!!(r!==o&&s!==a||r===0&&Hs(i,t,e)||o===0&&Hs(i,n,e)||s===0&&Hs(t,i,n)||a===0&&Hs(t,e,n))}function Hs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ws(i){return i>0?1:i<0?-1:0}function ug(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&e0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ro(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function hg(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function t0(i,e){let t=Dc(i.i,i.x,i.y),n=Dc(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function nf(i,e,t,n){let r=Dc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fg(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Uc=class{static triangulate(e,t,n=2){return Km(e,t,n)}},Io=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];rf(e),of(n,e);let s=e.length;t.forEach(rf);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,of(n,t[l]);let a=Uc.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function rf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function of(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ai=class i extends Qe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],b=[],_=[];for(let m=0;m<h;m++){let y=m*f-s;for(let M=0;M<c;M++){let v=M*d-o;g.push(v,-y,0),b.push(0,0,1),_.push(M/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let M=y+c*m,v=y+c*(m+1),S=y+1+c*(m+1),w=y+1+c*m;p.push(M,v,w),p.push(v,S,w)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Po=class i extends Qe{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],d=e,f=(t-e)/r,p=new X,g=new Je;for(let b=0;b<=r;b++){for(let _=0;_<=n;_++){let m=o+_/n*s;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let b=0;b<r;b++){let _=b*(n+1);for(let m=0;m<n;m++){let y=m+_,M=y,v=y+n+1,S=y+n+2,w=y+1;a.push(M,v,w),a.push(v,S,w)}}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(sf(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(sf(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let r in n)e[r]=n[r]}return e}function sf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var n0={clone:rr,merge:tn},pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(r.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[n].value=new X().fromArray(r.value);break;case"v4":this.uniforms[n].value=new At().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pa=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ma=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ga=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ac(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ri=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends Ri{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ic:o=e,a=2*t-n;break;case Pc:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ic:s=e,l=2*n-t;break;case Pc:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),b=g*g,_=b*g,m=-f*_+2*f*b-f*g,y=(1+f)*_+(-1.5-2*f)*b+(-.5+f)*g+1,M=(-1-p)*_+(1.5+p)*b+.5*g,v=p*_-p*b;for(let S=0;S!==a;++S)o[S]=m*s[h+S]+y*s[c+S]+M*s[l+S]+v*s[d+S];return o}},ba=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),d=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*d+s[l+f]*h;return o}},xa=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ya=class extends Ri{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(r-t),b=1-g;for(let _=0;_!==a;++_)o[_]=s[c+_]*b+s[l+_]*g;return o}let f=a*2,p=e-1;for(let g=0;g!==a;++g){let b=s[c+g],_=s[l+g],m=p*f+g*2,y=d[m],M=d[m+1],v=e*f+g*2,S=h[v],w=h[v+1],A=_g(n,t,y,S,r);o[g]=i0(A,b,M,w,_)}return o}};function i0(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function gg(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function _g(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=i0(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=gg(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var dn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ac(e.settings)&&(n.settings={inTangents:Cr(e.settings.inTangents,Array),outTangents:Cr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ya(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case qs:t=this.InterpolantFactoryMethodSmooth;break;case Rc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return qs;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ac(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){ze("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&Im(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qs,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let b=t[d+g];if(b!==t[f+g]||b!==t[p+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let d=a*n,f=s*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ac(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function af(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ra;var Ci=class extends dn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=go;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};va.prototype.ValueTypeName="color";var Ma=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};Ma.prototype.ValueTypeName="number";var Sa=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Vn.slerpFlat(o,0,s,c-a,s,c,l);return o}},Fo=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends dn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=go;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};Ta.prototype.ValueTypeName="vector";var Zs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(lf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!lf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function lf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var wa=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},r0=new wa,Hr=class{constructor(e){this.manager=e!==void 0?e:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=new WeakMap,Ea=class extends Hr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=Zs.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=Ir.get(s);d===void 0&&(d=[],Ir.set(s,d)),d.push({onLoad:t,onError:r})}return s}let a=Ur("img");function l(){h(),t&&t(this);let d=Ir.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onLoad&&p.onLoad(this)}Ir.delete(this),o.manager.itemEnd(e)}function c(d){h(),r&&r(d),Zs.remove(`image:${e}`);let f=Ir.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(d)}Ir.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Zs.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var Lo=class extends Hr{constructor(e){super(e)}load(e,t,n,r){let o=new Qt,s=new Ea(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var Xs=new X,Ys=new Vn,On=new X,Do=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xs,Ys,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,Ys,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xs,Ys,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,Ys,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new X,cf=new Je,uf=new Je,Kt=class extends Do{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,cf,uf),t.subVectors(uf,cf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var oi=class extends Do{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Pr=-90,Fr=1,Aa=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Pr,Fr,e,t);r.layers=this.layers,this.add(r);let o=new Kt(Pr,Fr,e,t);o.layers=this.layers,this.add(o);let s=new Kt(Pr,Fr,e,t);s.layers=this.layers,this.add(s);let a=new Kt(Pr,Fr,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Pr,Fr,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Pr,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ra=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var uu="\\[\\]\\.:\\/",bg=new RegExp("["+uu+"]","g"),hu="[^"+uu+"]",xg="[^"+uu.replace("\\.","")+"]",yg=/((?:WC+[\/:])*)/.source.replace("WC",hu),vg=/(WCOD+)?/.source.replace("WCOD",xg),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),Tg=new RegExp("^"+yg+vg+Mg+Sg+"$"),wg=["material","materials","bones","map"],Nc=class{constructor(e,t,n){let r=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){let t=Tg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);wg.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Nc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ew=new Float32Array(1);var hf=new Tt,Uo=class{constructor(e,t,n=0,r=1/0){this.ray=new ji(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hf),this}intersectObject(e,t=!0,n=[]){return Bc(e,this,n,t),n.sort(ff),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Bc(e[r],this,n,t);return n.sort(ff),n}};function ff(i,e){return i.distance-e.distance}function Bc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Bc(o[s],e,t,!0)}}var _u=class _u{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};_u.prototype.isMatrix2=!0;var Oc=_u;function fu(i,e,t,n){let r=Eg(n);switch(t){case nu:return i*e;case ru:return i*e/r.components*r.byteLength;case Na:return i*e/r.components*r.byteLength;case Ni:return i*e*2/r.components*r.byteLength;case Ba:return i*e*2/r.components*r.byteLength;case iu:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case Oa:return i*e*4/r.components*r.byteLength;case zo:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:case Ga:return Math.max(i,16)*Math.max(e,8)/4;case ka:case Va:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case Wa:case Ya:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Wo:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cl:case ul:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fl:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xo:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eg(i){switch(i){case pn:case Qc:return{byteLength:1,components:1};case Xr:case jc:case Fn:return{byteLength:2,components:1};case Da:case Ua:return{byteLength:2,components:4};case In:case La:case Pn:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function E0(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Rg(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],b=d[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,d[f]=b)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let b=d[p];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qg=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e_=`vec3 transformedNormal = objectNormal;
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
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g_=`#ifdef USE_GRADIENTMAP
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
}`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v_=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E_=`PhysicalMaterial material;
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
#endif`,A_=`uniform sampler2D dfgLUT;
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
}`,R_=`
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,F_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k_=`#if defined( USE_POINTS_UV )
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
#endif`,z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,j_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ib=`uniform sampler2D t2D;
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Xb=`#define LAMBERT
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
}`,Yb=`#define LAMBERT
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
}`,qb=`#define MATCAP
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
}`,$b=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,Jb=`#define PHONG
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
}`,Qb=`#define PHONG
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
}`,jb=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,nx=`#define TOON
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
}`,ix=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Cg,alphahash_pars_fragment:Ig,alphamap_fragment:Pg,alphamap_pars_fragment:Fg,alphatest_fragment:Lg,alphatest_pars_fragment:Dg,aomap_fragment:Ug,aomap_pars_fragment:Ng,batching_pars_vertex:Bg,batching_vertex:Og,begin_vertex:kg,beginnormal_vertex:zg,bsdfs:Vg,iridescence_fragment:Gg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:qg,color_fragment:$g,color_pars_fragment:Zg,color_pars_vertex:Kg,color_vertex:Jg,common:Qg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:e_,displacementmap_pars_vertex:t_,displacementmap_vertex:n_,emissivemap_fragment:i_,emissivemap_pars_fragment:r_,colorspace_fragment:o_,colorspace_pars_fragment:s_,envmap_fragment:a_,envmap_common_pars_fragment:l_,envmap_pars_fragment:c_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:v_,envmap_vertex:h_,fog_vertex:f_,fog_pars_vertex:d_,fog_fragment:p_,fog_pars_fragment:m_,gradientmap_pars_fragment:g_,lightmap_pars_fragment:__,lights_lambert_fragment:b_,lights_lambert_pars_fragment:x_,lights_pars_begin:y_,lights_toon_fragment:M_,lights_toon_pars_fragment:S_,lights_phong_fragment:T_,lights_phong_pars_fragment:w_,lights_physical_fragment:E_,lights_physical_pars_fragment:A_,lights_fragment_begin:R_,lights_fragment_maps:C_,lights_fragment_end:I_,lightprobes_pars_fragment:P_,logdepthbuf_fragment:F_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:D_,logdepthbuf_vertex:U_,map_fragment:N_,map_pars_fragment:B_,map_particle_fragment:O_,map_particle_pars_fragment:k_,metalnessmap_fragment:z_,metalnessmap_pars_fragment:V_,morphinstance_vertex:G_,morphcolor_vertex:H_,morphnormal_vertex:W_,morphtarget_pars_vertex:X_,morphtarget_vertex:Y_,normal_fragment_begin:q_,normal_fragment_maps:$_,normal_pars_fragment:Z_,normal_pars_vertex:K_,normal_vertex:J_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:j_,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:rb,premultiplied_alpha_fragment:ob,project_vertex:sb,dithering_fragment:ab,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:hb,shadowmap_pars_vertex:fb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:_b,skinnormal_vertex:bb,specularmap_fragment:xb,specularmap_pars_fragment:yb,tonemapping_fragment:vb,tonemapping_pars_fragment:Mb,transmission_fragment:Sb,transmission_pars_fragment:Tb,uv_pars_fragment:wb,uv_pars_vertex:Eb,uv_vertex:Ab,worldpos_vertex:Rb,background_vert:Cb,background_frag:Ib,backgroundCube_vert:Pb,backgroundCube_frag:Fb,cube_vert:Lb,cube_frag:Db,depth_vert:Ub,depth_frag:Nb,distance_vert:Bb,distance_frag:Ob,equirect_vert:kb,equirect_frag:zb,linedashed_vert:Vb,linedashed_frag:Gb,meshbasic_vert:Hb,meshbasic_frag:Wb,meshlambert_vert:Xb,meshlambert_frag:Yb,meshmatcap_vert:qb,meshmatcap_frag:$b,meshnormal_vert:Zb,meshnormal_frag:Kb,meshphong_vert:Jb,meshphong_frag:Qb,meshphysical_vert:jb,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:rx,shadow_vert:ox,shadow_frag:sx,sprite_vert:ax,sprite_frag:lx},Se={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Wn={basic:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ae(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:tn([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:tn([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:tn([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:tn([Se.common,Se.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:tn([Se.lights,Se.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Wn.physical={uniforms:tn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var _l={r:0,b:0,g:0},cx=new Tt,A0=new We;A0.set(-1,0,0,0,1,0,0,0,1);function ux(i,e,t,n,r,o){let s=new ae(0),a=r===!0?0:1,l,c,h=null,d=0,f=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(y){let M=!1,v=p(y);v===null?_(s,a):v&&v.isColor&&(_(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===Oo)?(c===void 0&&(c=new Ye(new Vr(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:rr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(A0),c.material.toneMapped=tt.getTransfer(v.colorSpace)!==dt,(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new Ai(2,2),new fn({name:"BackgroundMaterial",uniforms:rr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,M){y.getRGB(_l,cu(i)),t.buffers.color.setClear(_l.r,_l.g,_l.b,M,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,M=1){s.set(y),a=M,_(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,_(s,a)},render:g,addToRenderList:b,dispose:m}}function hx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(P,L,F,E,U){let N=!1,B=d(P,E,F,L);o!==B&&(o=B,c(o.object)),N=p(P,E,F,U),N&&g(P,E,F,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(N||s)&&(s=!1,v(P,L,F,E),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,L,F,E){let U=E.wireframe===!0,N=n[L.id];N===void 0&&(N={},n[L.id]=N);let B=P.isInstancedMesh===!0?P.id:0,V=N[B];V===void 0&&(V={},N[B]=V);let z=V[F.id];z===void 0&&(z={},V[F.id]=z);let W=z[U];return W===void 0&&(W=f(l()),z[U]=W),W}function f(P){let L=[],F=[],E=[];for(let U=0;U<t;U++)L[U]=0,F[U]=0,E[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:E,object:P,attributes:{},index:null}}function p(P,L,F,E){let U=o.attributes,N=L.attributes,B=0,V=F.getAttributes();for(let z in V)if(V[z].location>=0){let H=U[z],ie=N[z];if(ie===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),H===void 0||H.attribute!==ie||ie&&H.data!==ie.data)return!0;B++}return o.attributesNum!==B||o.index!==E}function g(P,L,F,E){let U={},N=L.attributes,B=0,V=F.getAttributes();for(let z in V)if(V[z].location>=0){let H=N[z];H===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let ie={};ie.attribute=H,H&&H.data&&(ie.data=H.data),U[z]=ie,B++}o.attributes=U,o.attributesNum=B,o.index=E}function b(){let P=o.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function _(P){m(P,0)}function m(P,L){let F=o.newAttributes,E=o.enabledAttributes,U=o.attributeDivisors;F[P]=1,E[P]===0&&(i.enableVertexAttribArray(P),E[P]=1),U[P]!==L&&(i.vertexAttribDivisor(P,L),U[P]=L)}function y(){let P=o.newAttributes,L=o.enabledAttributes;for(let F=0,E=L.length;F<E;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(P,L,F,E,U,N,B){B===!0?i.vertexAttribIPointer(P,L,F,U,N):i.vertexAttribPointer(P,L,F,E,U,N)}function v(P,L,F,E){b();let U=E.attributes,N=F.getAttributes(),B=L.defaultAttributeValues;for(let V in N){let z=N[V];if(z.location>=0){let W=U[V];if(W===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let H=W.normalized,ie=W.itemSize,K=e.get(W);if(K===void 0)continue;let se=K.buffer,Q=K.type,he=K.bytesPerElement,q=Q===i.INT||Q===i.UNSIGNED_INT||W.gpuType===La;if(W.isInterleavedBufferAttribute){let j=W.data,fe=j.stride,me=W.offset;if(j.isInstancedInterleavedBuffer){for(let pe=0;pe<z.locationSize;pe++)m(z.location+pe,j.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pe=0;pe<z.locationSize;pe++)_(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,se);for(let pe=0;pe<z.locationSize;pe++)M(z.location+pe,ie/z.locationSize,Q,H,fe*he,(me+ie/z.locationSize*pe)*he,q)}else{if(W.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)m(z.location+j,W.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let j=0;j<z.locationSize;j++)_(z.location+j);i.bindBuffer(i.ARRAY_BUFFER,se);for(let j=0;j<z.locationSize;j++)M(z.location+j,ie/z.locationSize,Q,H,ie*he,ie/z.locationSize*j*he,q)}}else if(B!==void 0){let H=B[V];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(z.location,H);break;case 3:i.vertexAttrib3fv(z.location,H);break;case 4:i.vertexAttrib4fv(z.location,H);break;default:i.vertexAttrib1fv(z.location,H)}}}}y()}function S(){T();for(let P in n){let L=n[P];for(let F in L){let E=L[F];for(let U in E){let N=E[U];for(let B in N)h(N[B].object),delete N[B];delete E[U]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let F in L){let E=L[F];for(let U in E){let N=E[U];for(let B in N)h(N[B].object),delete N[B];delete E[U]}}delete n[P.id]}function A(P){for(let L in n){let F=n[L];for(let E in F){let U=F[E];if(U[P.id]===void 0)continue;let N=U[P.id];for(let B in N)h(N[B].object),delete N[B];delete U[P.id]}}}function x(P){for(let L in n){let F=n[L],E=P.isInstancedMesh===!0?P.id:0,U=F[E];if(U!==void 0){for(let N in U){let B=U[N];for(let V in B)h(B[V].object),delete B[V];delete U[N]}delete F[E],Object.keys(F).length===0&&delete n[L]}}}function T(){C(),s=!0,o!==r&&(o=r,c(o.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:_,disableUnusedAttributes:y}}function fx(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function dx(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Pn&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:w}}function px(i){let e=this,t=null,n=0,r=!1,o=!1,s=new An,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,b=d.clipIntersection,_=d.clipShadows,m=i.get(d);if(!r||g===null||g.length===0||o&&!_)o?h(null):c();else{let y=o?0:n,M=y*4,v=m.clippingState||null;l.value=v,v=h(g,f,M,p);for(let S=0;S!==M;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){let b=d!==null?d.length:0,_=null;if(b!==0){if(_=l.value,g!==!0||_===null){let m=p+b*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,v=p;M!==b;++M,v+=4)s.copy(d[M]).applyMatrix4(y,a),s.normal.toArray(_,v),_[v+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}var $r=4,mx=6,gx=20,_x=256,qo=new oi,o0=new ae,bu=null,xu=0,yu=0,vu=!1,bx=new X,or=new X,xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=bx}=o;bu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,xu,yu),this._renderer.xr.enabled=vu,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Fn,format:vn,colorSpace:_o,depthBuffer:!1},r=s0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xx(o)),this._blurMaterial=vx(o,e,t),this._ggxMaterial=yx(o,e,t)}return r}_compileMaterial(e){let t=new Ye(new Qe,e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,r,o){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(o0),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Vr,new lt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,_=b.material,m=!1,y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,m=!0):(_.color.copy(o0),m=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));let S=this._cubeSize;qr(r,v*S,M>2?S:0,S,S),d.setRenderTarget(r),m&&d.render(b,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Li||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,p=d*f,{_lodMax:g}=this,b=this._sizeLods[n],_=3*b*(n>g-$r?n-g+$r:0),m=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,qr(o,_,m,3*b,2*b),r.setRenderTarget(o),r.render(a,qo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-n,qr(e,_,m,3*b,2*b),r.setRenderTarget(e),r.render(a,qo)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],d=3*h*(r>this._lodMax-$r?r-this._lodMax+$r:0),f=4*(this._cubeSize-h);qr(t,d,f,3*h,2*h),s.setRenderTarget(t),s.render(l,qo)}};function xx(i){let e=[],t=[],n=i,r=i-$r+1+mx;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,p=3,g=new Float32Array(p*f*d),b=new Float32Array(p*f*d);for(let m=0;m<d;m++){let y=m%3*2/3-1,M=m>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(v,p*f*m);for(let S=0;S<f;S++){let w=h[S*2]*2-1,A=h[S*2+1]*2-1;m===0?or.set(1,A,w):m===1?or.set(-w,1,-A):m===2?or.set(-w,A,1):m===3?or.set(-1,A,-w):m===4?or.set(-w,-1,A):or.set(w,A,-1),or.toArray(b,(m*f+S)*p)}}let _=new Qe;_.setAttribute("position",new bn(g,p)),_.setAttribute("outputDirection",new bn(b,p)),t.push(new Ye(_,null)),n>$r&&n--}return{lodMeshes:t,sizeLods:e}}function s0(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yx(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vx(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function a0(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function l0(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yl=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new To(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vr(5,5,5),o=new fn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Gn});o.uniforms.tEquirect.value=t;let s=new Ye(r,o),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Ht),new Aa(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function Mx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,p=!1){return f==null?null:p?s(f):o(f)}function o(f){if(f&&f.isTexture){let p=f.mapping;if(p===Ia||p===Pa)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let b=new yl(g.height);return b.fromEquirectangularTexture(i,f),e.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let p=f.mapping,g=p===Ia||p===Pa,b=p===Li||p===ir;if(g||b){let _=t.get(f),m=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new xl(i)),_=g?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{let y=f.image;return g&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new xl(i)),_=g?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",h),_.texture):null}}}return f}function a(f,p){return p===Ia?f.mapping=Li:p===Pa&&(f.mapping=ir),f}function l(f){let p=0,g=6;for(let b=0;b<g;b++)f[b]!==void 0&&p++;return p===g}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Sx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Zi("WebGLRenderer: "+n+" extension not supported."),r}}}function Tx(i,e,t,n){let r={},o=new WeakMap;function s(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];let p=o.get(f);p&&(e.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,b=0;if(g===void 0)return;if(p!==null){let y=p.array;b=p.version;for(let M=0,v=y.length;M<v;M+=3){let S=y[M+0],w=y[M+1],A=y[M+2];f.push(S,w,w,A,A,S)}}else{let y=g.array;b=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let S=M+0,w=M+1,A=M+2;f.push(S,w,w,A,A,S)}}let _=new(g.count>=65535?Qi:Mo)(f,1);_.version=b;let m=o.get(d);m&&e.remove(m),o.set(d,_)}function h(d){let f=o.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function wx(i,e,t){let n;function r(d){n=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*s),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,o,d*s,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let b=0;for(let _=0;_<p;_++)b+=f[_];t.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ex(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:ze("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ax(i,e,t){let n=new WeakMap,r=new At;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*d),A=new yo(w,v,S,d);A.type=Pn,A.needsUpdate=!0;let x=M*4;for(let C=0;C<d;C++){let P=_[C],L=m[C],F=y[C],E=v*S*4*C;for(let U=0;U<P.count;U++){let N=U*x;p===!0&&(r.fromBufferAttribute(P,U),w[E+N+0]=r.x,w[E+N+1]=r.y,w[E+N+2]=r.z,w[E+N+3]=0),g===!0&&(r.fromBufferAttribute(L,U),w[E+N+4]=r.x,w[E+N+5]=r.y,w[E+N+6]=r.z,w[E+N+7]=0),b===!0&&(r.fromBufferAttribute(F,U),w[E+N+8]=r.x,w[E+N+9]=r.y,w[E+N+10]=r.z,w[E+N+11]=F.itemSize===4?r.w:1)}}f={count:d,texture:A,size:new Je(v,S)},n.set(a,f),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Rx(i,e,t,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,d=c.geometry,f=e.get(c,d);if(o.get(f)!==h&&(e.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;o.get(p)!==h&&(p.update(),o.set(p,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}var Cx={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Kc]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function Ix(i,e,t,n,r,o){let s=new jt(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Qe;c.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let h=new pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ye(c,h),f=new oi(-1,1,1,-1,0,1),p=null,g=null,b=!1,_,m=null,y=[],M=!1;this.setSize=function(v,S){s.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let S=s.width,w=s.height;y.length>0&&a===null&&(a=new jt(S,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new jt(S,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let x=y[A];x.setSize&&x.setSize(S,w)}},this.begin=function(v,S){if(b||v.toneMapping===Cn&&y.length===0)return!1;if(m=S,S!==null){let w=S.width,A=S.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return M===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=Cn,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=_,b=!0;let w=s,A=a;for(let x=0;x<y.length;x++){let T=y[x];T.enabled!==!1&&(T.render(v,A,w,S),T.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,h.defines={},tt.getTransfer(p)===dt&&(h.defines.SRGB_TRANSFER="");let x=Cx[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(d,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var R0=new Qt,Tu=new Ei(1,1),C0=new yo,I0=new la,P0=new To,c0=[],u0=[],h0=new Float32Array(16),f0=new Float32Array(9),d0=new Float32Array(4);function Jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=c0[r];if(o===void 0&&(o=new Float32Array(r),c0[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=u0[e];t===void 0&&(t=new Int32Array(e),u0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Px(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;d0.set(n),i.uniformMatrix2fv(this.addr,!1,d0),Nt(t,n)}}function Nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;f0.set(n),i.uniformMatrix3fv(this.addr,!1,f0),Nt(t,n)}}function Bx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;h0.set(n),i.uniformMatrix4fv(this.addr,!1,h0),Nt(t,n)}}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Yx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Tu.compareFunction=t.isReversedDepthBuffer()?gl:ml,o=Tu):o=R0,t.setTexture2D(e||o,r)}function qx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||I0,r)}function $x(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||P0,r)}function Zx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||C0,r)}function Kx(i){switch(i){case 5126:return Px;case 35664:return Fx;case 35665:return Lx;case 35666:return Dx;case 35674:return Ux;case 35675:return Nx;case 35676:return Bx;case 5124:case 35670:return Ox;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Hx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Zx}}function Jx(i,e){i.uniform1fv(this.addr,e)}function Qx(i,e){let t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function jx(i,e){let t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function ey(i,e){let t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function ty(i,e){let t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ny(i,e){let t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function iy(i,e){let t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ry(i,e){i.uniform1iv(this.addr,e)}function oy(i,e){i.uniform2iv(this.addr,e)}function sy(i,e){i.uniform3iv(this.addr,e)}function ay(i,e){i.uniform4iv(this.addr,e)}function ly(i,e){i.uniform1uiv(this.addr,e)}function cy(i,e){i.uniform2uiv(this.addr,e)}function uy(i,e){i.uniform3uiv(this.addr,e)}function hy(i,e){i.uniform4uiv(this.addr,e)}function fy(i,e,t){let n=this.cache,r=e.length,o=Ml(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Tu:s=R0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function dy(i,e,t){let n=this.cache,r=e.length,o=Ml(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||I0,o[s])}function py(i,e,t){let n=this.cache,r=e.length,o=Ml(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||P0,o[s])}function my(i,e,t){let n=this.cache,r=e.length,o=Ml(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||C0,o[s])}function gy(i){switch(i){case 5126:return Jx;case 35664:return Qx;case 35665:return jx;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return ry;case 35667:case 35671:return oy;case 35668:case 35672:return sy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return uy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}},Eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gy(t.type)}},Au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function p0(i,e){i.seq.push(e),i.map[e.id]=e}function _y(i,e,t){let n=i.name,r=n.length;for(Mu.lastIndex=0;;){let o=Mu.exec(n),s=Mu.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){p0(t,c===void 0?new wu(a,i,e):new Eu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Au(a),p0(t,d)),t=d}}}var Zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);_y(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function m0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var by=37297,xy=0;function yy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var g0=new We;function vy(i){tt._getMatrix(g0,tt.workingColorSpace,i);let e=`mat3( ${g0.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case bo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+yy(i.getShaderSource(e),a)}else return o}function My(i,e){let t=vy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Sy={[Wc]:"Linear",[Xc]:"Reinhard",[Yc]:"Cineon",[qc]:"ACESFilmic",[Zc]:"AgX",[Kc]:"Neutral",[$c]:"Custom"};function Ty(i,e){let t=Sy[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bl=new X;function wy(){tt.getLuminanceCoefficients(bl);let i=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function Ay(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ry(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Zo(i){return i!==""}function b0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(Cy,Py)}var Iy=new Map;function Py(i,e){let t=Ze[e];if(t===void 0){let n=Iy.get(e);if(n!==void 0)t=Ze[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ru(t)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(i){return i.replace(Fy,Ly)}function Ly(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function v0(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Dy={[No]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function Uy(i){return Dy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ny={[Li]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function By(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ny[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Oy={[ir]:"ENVMAP_MODE_REFRACTION"};function ky(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zy={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[Df]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function Vy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zy[i.combine]||"ENVMAP_BLENDING_NONE"}function Gy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hy(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=Uy(t),c=By(t),h=ky(t),d=Vy(t),f=Gy(t),p=Ey(t),g=Ay(o),b=r.createProgram(),_,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`)):(_=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),m=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,My("linearToOutputTexel",t.outputColorSpace),wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zo).join(`
`)),s=Ru(s),s=b0(s,t),s=x0(s,t),a=Ru(a),a=b0(a,t),a=x0(a,t),s=y0(s),a=y0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+_+s,v=y+m+a,S=m0(r,r.VERTEX_SHADER,M),w=m0(r,r.FRAGMENT_SHADER,v);r.attachShader(b,S),r.attachShader(b,w),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(P){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(b)||"",F=r.getShaderInfoLog(S)||"",E=r.getShaderInfoLog(w)||"",U=L.trim(),N=F.trim(),B=E.trim(),V=!0,z=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,S,w);else{let W=_0(r,S,"vertex"),H=_0(r,w,"fragment");ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+W+`
`+H)}else U!==""?ke("WebGLProgram: Program Info Log:",U):(N===""||B==="")&&(z=!1);z&&(P.diagnostics={runnable:V,programLog:U,vertexShader:{log:N,prefix:_},fragmentShader:{log:B,prefix:m}})}r.deleteShader(S),r.deleteShader(w),x=new Zr(r,b),T=Ry(r,b)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,by)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xy++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=w,this}var Wy=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Iu(e),t.set(e,n)),n}},Iu=class{constructor(e){this.id=Wy++,this.code=e,this.usedTimes=0}};function Xy(i){return i===Ni||i===Wo||i===Xo}function Yy(i,e,t,n,r,o){let s=new Or,a=new Cu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,T,C,P,L,F){let E=P.fog,U=L.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||N,B),z=V&&V.mapping===Oo?V.image.height:null,W=p[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let H=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=H!==void 0?H.length:0,K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let se,Q,he,q;if(W){let bt=Wn[W];se=bt.vertexShader,Q=bt.fragmentShader}else{se=x.vertexShader,Q=x.fragmentShader;let bt=a.getVertexShaderStage(x),ht=a.getFragmentShaderStage(x);a.update(x,bt,ht),he=bt.id,q=ht.id}let j=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),me=L.isInstancedMesh===!0,pe=L.isBatchedMesh===!0,Ae=!!x.map,rt=!!x.matcap,Ve=!!V,Ke=!!x.aoMap,ot=!!x.lightMap,je=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,Ot=!!x.displacementMap,on=!!x.emissiveMap,wt=!!x.metalnessMap,It=!!x.roughnessMap,Z=x.anisotropy>0,Yt=x.clearcoat>0,pt=x.dispersion>0,k=x.retroreflectivity>0,R=x.iridescence>0,J=x.sheen>0,ne=x.transmission>0,oe=Z&&!!x.anisotropyMap,ge=Yt&&!!x.clearcoatMap,_e=Yt&&!!x.clearcoatNormalMap,le=Yt&&!!x.clearcoatRoughnessMap,ue=R&&!!x.iridescenceMap,be=R&&!!x.iridescenceThicknessMap,De=J&&!!x.sheenColorMap,Me=J&&!!x.sheenRoughnessMap,xe=!!x.specularMap,Ue=!!x.specularColorMap,Oe=!!x.specularIntensityMap,qe=ne&&!!x.transmissionMap,$=ne&&!!x.thicknessMap,ye=!!x.gradientMap,ce=!!x.alphaMap,ve=x.alphaTest>0,Ee=!!x.alphaHash,de=!!x.extensions,Ne=Cn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let Fe={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:Q,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:pe,batchingColor:pe&&L._colorsTexture!==null,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:rt,envMap:Ve,envMapMode:Ve&&V.mapping,envMapCubeUVHeight:z,aoMap:Ke,lightMap:ot,bumpMap:je,normalMap:St,displacementMap:Ot,emissiveMap:on,normalMapObjectSpace:St&&x.normalMapType===Of,normalMapTangentSpace:St&&x.normalMapType===ou,packedNormalMap:St&&x.normalMapType===ou&&Xy(x.normalMap.format),metalnessMap:wt,roughnessMap:It,anisotropy:Z,anisotropyMap:oe,clearcoat:Yt,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:le,dispersion:pt,retroreflection:k,iridescence:R,iridescenceMap:ue,iridescenceThicknessMap:be,sheen:J,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:xe,specularColorMap:Ue,specularIntensityMap:Oe,transmission:ne,transmissionMap:qe,thicknessMap:$,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Fi&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:ve,alphaHash:Ee,combine:x.combine,mapUv:Ae&&g(x.map.channel),aoMapUv:Ke&&g(x.aoMap.channel),lightMapUv:ot&&g(x.lightMap.channel),bumpMapUv:je&&g(x.bumpMap.channel),normalMapUv:St&&g(x.normalMap.channel),displacementMapUv:Ot&&g(x.displacementMap.channel),emissiveMapUv:on&&g(x.emissiveMap.channel),metalnessMapUv:wt&&g(x.metalnessMap.channel),roughnessMapUv:It&&g(x.roughnessMap.channel),anisotropyMapUv:oe&&g(x.anisotropyMap.channel),clearcoatMapUv:ge&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:Ue&&g(x.specularColorMap.channel),specularIntensityMapUv:Oe&&g(x.specularIntensityMap.channel),transmissionMapUv:qe&&g(x.transmissionMap.channel),thicknessMapUv:$&&g(x.thicknessMap.channel),alphaMapUv:ce&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(St||Z),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Ae||ce),fog:!!E,useFog:x.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:K,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:on&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mt,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function _(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function M(x){let T=p[x.type],C;if(T){let P=Wn[T];C=n0.clone(P.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Hy(i,T,x,r),c.push(C),h.set(T,C)),C}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function qy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function $y(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function M0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function S0(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,b,_,m){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:p,material:g,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:_,group:m},i[e]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=g,y.materialVariant=s(f),y.groupOrder=b,y.renderOrder=f.renderOrder,y.z=_,y.group=m),e++,y}function l(f,p,g,b,_,m,y){y.reversedDepth===!0&&(_=-_);let M=a(f,p,g,b,_,m);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function c(f,p,g,b,_,m){let y=a(f,p,g,b,_,m);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function h(f,p){t.length>1&&t.sort(f||$y),n.length>1&&n.sort(p||M0),r.length>1&&r.sort(p||M0)}function d(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:d,sort:h}}function Zy(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new S0,i.set(n,[s])):r>=o.length?(s=new S0,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ky(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new ae};break;case"SpotLight":t={position:new X,direction:new X,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function Jy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Qy=0;function jy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function e2(i){let e=new Ky,t=Jy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let r=new X,o=new Tt,s=new Tt;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,g=0,b=0,_=0,m=0,y=0,M=0,v=0,S=0,w=0,A=0,x=0,T=0,C=0;c.sort(jy);for(let L=0,F=c.length;L<F;L++){let E=c[L],U=E.color,N=E.intensity,B=E.distance,V=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ni?V=E.shadow.map.texture:V=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=U.r*N,d+=U.g*N,f+=U.b*N;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],N);C++}else if(E.isSunLight){let z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let W=E.shadow,H=t.get(E);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=H,n.sunShadowMap[g]=V;let ie=W.getViewportCount();for(let K=0;K<ie;K++)n.sunShadowMatrix[b+K]=W.getMatrix(K),n.sunShadowCascade[b+K]=W._cascadeData[K];b+=ie,g++}n.sun[p]=z,p++}else if(E.isDirectionalLight){let z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let W=E.shadow,H=t.get(E);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[_]=H,n.directionalShadowMap[_]=V,n.directionalShadowMatrix[_]=E.shadow.matrix,S++}n.directional[_]=z,_++}else if(E.isSpotLight){let z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(U).multiplyScalar(N),z.distance=B,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[y]=z;let W=E.shadow;if(E.map&&(n.spotLightMap[x]=E.map,x++,W.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[y]=W.matrix,E.castShadow){let H=t.get(E);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=V,A++}y++}else if(E.isRectAreaLight){let z=e.get(E);z.color.copy(U).multiplyScalar(N),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[M]=z,M++}else if(E.isPointLight){let z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let W=E.shadow,H=t.get(E);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=E.shadow.matrix,w++}n.point[m]=z,m++}else if(E.isHemisphereLight){let z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(N),z.groundColor.copy(E.groundColor).multiplyScalar(N),n.hemi[v]=z,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==_||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==w||P.numSpotShadows!==A||P.numSpotMaps!==x||P.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=_,n.spot.length=y,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.sunLength=p,P.directionalLength=_,P.pointLength=m,P.spotLength=y,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=w,P.numSpotShadows=A,P.numSpotMaps=x,P.numLightProbes=C,n.version=Qy++)}function l(c,h){let d=0,f=0,p=0,g=0,b=0,_=0,m=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function T0(i){let e=new e2(i),t=[],n=[],r=[];function o(f){d.camera=f,t.length=0,n.length=0,r.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:d,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function t2(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new T0(i),e.set(r,[a])):o>=s.length?(a=new T0(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var n2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i2=`uniform sampler2D shadow_pass;
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
}`,r2=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],o2=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],w0=new Tt,$o=new X,Su=new X;function s2(i,e,t){let n=new So,r=new Je,o=new Je,s=new At,a=new ma,l=new ga,c={},h=t.maxTextureSize,d={[Pi]:rn,[rn]:Pi,[Mt]:Mt},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:n2,fragmentShader:i2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ye(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let m=this.type;this.render=function(w,A,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===mf&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=m!==this.type;F&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(U=>U.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,U=w.length;E<U;E++){let N=w[E],B=N.shadow;if(B===void 0){ke("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let V=B.getFrameExtents();r.multiply(V),o.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/V.x),r.x=o.x*V.x,B.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/V.y),r.y=o.y*V.y,B.mapSize.y=o.y));let z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Wr){if(N.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new jt(r.x,r.y,{format:Ni,type:Fn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new Ei(r.x,r.y,Pn),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=kn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt}else N.isPointLight?(B.map=new yl(r.x),B.map.depthTexture=new da(r.x,In)):(B.map=new jt(r.x,r.y),B.map.depthTexture=new Ei(r.x,r.y,In)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=kn,this.type===No?(B.map.depthTexture.compareFunction=z?gl:ml,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);let W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();N.isPointLight!==!0&&B.updateMatrices(N,x);for(let H=0;H<W;H++){let ie=B.getCamera(H);if(N.isPointLight){let K=B.camera,se=B.matrix,Q=N.distance||K.far;Q!==K.far&&(K.far=Q,K.updateProjectionMatrix()),$o.setFromMatrixPosition(N.matrixWorld),K.position.copy($o),Su.copy(K.position),Su.add(r2[H]),K.up.copy(o2[H]),K.lookAt(Su),K.updateMatrixWorld(),se.makeTranslation(-$o.x,-$o.y,-$o.z),w0.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(w0,K.coordinateSystem,K.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,H),i.clear();else{H===0&&(i.setRenderTarget(B.map),i.clear());let K=B.getViewport(H);s.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),L.viewport(s)}n=B.getFrustum(H),v(A,x,ie,N,this.type)}B.isPointLightShadow!==!0&&this.type===Wr&&y(B,x),B.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(T,C,P)};function y(w,A){let x=e.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new jt(r.x,r.y,{format:Ni,type:Fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,x,f,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,x,p,b,null)}function M(w,A,x,T){let C=null,P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,F=A.uuid,E=c[L];E===void 0&&(E={},c[L]=E);let U=E[F];U===void 0&&(U=C.clone(),E[F]=U,A.addEventListener("dispose",S)),C=U}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Wr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=x}return C}function v(w,A,x,T,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Wr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let F=e.update(w),E=w.material;if(Array.isArray(E)){let U=F.groups;for(let N=0,B=U.length;N<B;N++){let V=U[N],z=E[V.materialIndex];if(z&&z.visible){let W=M(w,z,T,C);w.onBeforeShadow(i,w,A,x,F,W,V),i.renderBufferDirect(x,null,F,W,w,V),w.onAfterShadow(i,w,A,x,F,W,V)}}}else if(E.visible){let U=M(w,E,T,C);w.onBeforeShadow(i,w,A,x,F,U,null),i.renderBufferDirect(x,null,F,U,w,null),w.onAfterShadow(i,w,A,x,F,U,null)}}let L=w.children;for(let F=0,E=L.length;F<E;F++)v(L[F],A,x,T,C)}function S(w){w.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function a2(i,e){function t(){let $=!1,ye=new At,ce=null,ve=new At(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!$&&(i.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){$=Ee},setClear:function(Ee,de,Ne,Fe,bt){bt===!0&&(Ee*=Fe,de*=Fe,Ne*=Fe),ye.set(Ee,de,Ne,Fe),ve.equals(ye)===!1&&(i.clearColor(Ee,de,Ne,Fe),ve.copy(ye))},reset:function(){$=!1,ce=null,ve.set(-1,0,0,0)}}}function n(){let $=!1,ye=!1,ce=null,ve=null,Ee=null;return{setReversed:function(de){if(ye!==de){let Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ye=de;let Fe=Ee;Ee=null,this.setClear(Fe)}},getReversed:function(){return ye},setTest:function(de){de?j(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(de){ce!==de&&!$&&(i.depthMask(de),ce=de)},setFunc:function(de){if(ye&&(de=Kf[de]),ve!==de){switch(de){case Ks:i.depthFunc(i.NEVER);break;case Js:i.depthFunc(i.ALWAYS);break;case Qs:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case js:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=de}},setLocked:function(de){$=de},setClear:function(de){Ee!==de&&(Ee=de,ye&&(de=1-de),i.clearDepth(de))},reset:function(){$=!1,ce=null,ve=null,Ee=null,ye=!1}}}function r(){let $=!1,ye=null,ce=null,ve=null,Ee=null,de=null,Ne=null,Fe=null,bt=null;return{setTest:function(ht){$||(ht?j(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ht){ye!==ht&&!$&&(i.stencilMask(ht),ye=ht)},setFunc:function(ht,Sn,Nn){(ce!==ht||ve!==Sn||Ee!==Nn)&&(i.stencilFunc(ht,Sn,Nn),ce=ht,ve=Sn,Ee=Nn)},setOp:function(ht,Sn,Nn){(de!==ht||Ne!==Sn||Fe!==Nn)&&(i.stencilOp(ht,Sn,Nn),de=ht,Ne=Sn,Fe=Nn)},setLocked:function(ht){$=ht},setClear:function(ht){bt!==ht&&(i.clearStencil(ht),bt=ht)},reset:function(){$=!1,ye=null,ce=null,ve=null,Ee=null,de=null,Ne=null,Fe=null,bt=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},d={},f={},p=new WeakMap,g=[],b=null,_=!1,m=null,y=null,M=null,v=null,S=null,w=null,A=null,x=new ae(0,0,0),T=0,C=!1,P=null,L=null,F=null,E=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=V>=2);let W=null,H={},ie=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),se=new At().fromArray(ie),Q=new At().fromArray(K);function he($,ye,ce,ve){let Ee=new Uint8Array(4),de=i.createTexture();i.bindTexture($,de),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ce;Ne++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ye+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return de}let q={};q[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(i.DEPTH_TEST),s.setFunc(Dr),je(!1),St(kc),j(i.CULL_FACE),Ke(Gn);function j($){h[$]!==!0&&(i.enable($),h[$]=!0)}function fe($){h[$]!==!1&&(i.disable($),h[$]=!1)}function me($,ye){return f[$]!==ye?(i.bindFramebuffer($,ye),f[$]=ye,$===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ye),$===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function pe($,ye){let ce=g,ve=!1;if($){ce=p.get(ye),ce===void 0&&(ce=[],p.set(ye,ce));let Ee=$.textures;if(ce.length!==Ee.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ne=Ee.length;de<Ne;de++)ce[de]=i.COLOR_ATTACHMENT0+de;ce.length=Ee.length,ve=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ce)}function Ae($){return b!==$?(i.useProgram($),b=$,!0):!1}let rt={[nr]:i.FUNC_ADD,[_f]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};rt[xf]=i.MIN,rt[yf]=i.MAX;let Ve={[vf]:i.ZERO,[Mf]:i.ONE,[Sf]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[Cf]:i.SRC_ALPHA_SATURATE,[Af]:i.DST_COLOR,[wf]:i.DST_ALPHA,[Tf]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[Rf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[If]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Lf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke($,ye,ce,ve,Ee,de,Ne,Fe,bt,ht){if($===Gn){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),$!==gf){if($!==m||ht!==C){if((y!==nr||S!==nr)&&(i.blendEquation(i.FUNC_ADD),y=nr,S=nr),ht)switch($){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lt:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",$);break}else switch($){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bo:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",$);break}M=null,v=null,w=null,A=null,x.set(0,0,0),T=0,m=$,C=ht}return}Ee=Ee||ye,de=de||ce,Ne=Ne||ve,(ye!==y||Ee!==S)&&(i.blendEquationSeparate(rt[ye],rt[Ee]),y=ye,S=Ee),(ce!==M||ve!==v||de!==w||Ne!==A)&&(i.blendFuncSeparate(Ve[ce],Ve[ve],Ve[de],Ve[Ne]),M=ce,v=ve,w=de,A=Ne),(Fe.equals(x)===!1||bt!==T)&&(i.blendColor(Fe.r,Fe.g,Fe.b,bt),x.copy(Fe),T=bt),m=$,C=!1}function ot($,ye){$.side===Mt?fe(i.CULL_FACE):j(i.CULL_FACE);let ce=$.side===rn;ye&&(ce=!ce),je(ce),$.blending===Fi&&$.transparent===!1?Ke(Gn):Ke($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),s.setFunc($.depthFunc),s.setTest($.depthTest),s.setMask($.depthWrite),o.setMask($.colorWrite);let ve=$.stencilWrite;a.setTest(ve),ve&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),on($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function je($){P!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),P=$)}function St($){$!==df?(j(i.CULL_FACE),$!==L&&($===kc?i.cullFace(i.BACK):$===pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),L=$}function Ot($){$!==F&&(B&&i.lineWidth($),F=$)}function on($,ye,ce){$?(j(i.POLYGON_OFFSET_FILL),(E!==ye||U!==ce)&&(E=ye,U=ce,s.getReversed()&&(ye=-ye),i.polygonOffset(ye,ce))):fe(i.POLYGON_OFFSET_FILL)}function wt($){$?j(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function It($){$===void 0&&($=i.TEXTURE0+N-1),W!==$&&(i.activeTexture($),W=$)}function Z($,ye,ce){ce===void 0&&(W===null?ce=i.TEXTURE0+N-1:ce=W);let ve=H[ce];ve===void 0&&(ve={type:void 0,texture:void 0},H[ce]=ve),(ve.type!==$||ve.texture!==ye)&&(W!==ce&&(i.activeTexture(ce),W=ce),i.bindTexture($,ye||q[$]),ve.type=$,ve.texture=ye)}function Yt(){let $=H[W];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch($){ze("WebGLState:",$)}}function k(){try{i.compressedTexImage3D(...arguments)}catch($){ze("WebGLState:",$)}}function R(){try{i.texSubImage2D(...arguments)}catch($){ze("WebGLState:",$)}}function J(){try{i.texSubImage3D(...arguments)}catch($){ze("WebGLState:",$)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch($){ze("WebGLState:",$)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch($){ze("WebGLState:",$)}}function ge(){try{i.texStorage2D(...arguments)}catch($){ze("WebGLState:",$)}}function _e(){try{i.texStorage3D(...arguments)}catch($){ze("WebGLState:",$)}}function le(){try{i.texImage2D(...arguments)}catch($){ze("WebGLState:",$)}}function ue(){try{i.texImage3D(...arguments)}catch($){ze("WebGLState:",$)}}function be($){return d[$]!==void 0?d[$]:i.getParameter($)}function De($,ye){d[$]!==ye&&(i.pixelStorei($,ye),d[$]=ye)}function Me($){se.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),se.copy($))}function xe($){Q.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),Q.copy($))}function Ue($,ye){let ce=c.get(ye);ce===void 0&&(ce=new WeakMap,c.set(ye,ce));let ve=ce.get($);ve===void 0&&(ve=i.getUniformBlockIndex(ye,$.name),ce.set($,ve))}function Oe($,ye){let ve=c.get(ye).get($);l.get(ye)!==ve&&(i.uniformBlockBinding(ye,ve,$.__bindingPointIndex),l.set(ye,ve))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},W=null,H={},f={},p=new WeakMap,g=[],b=null,_=!1,m=null,y=null,M=null,v=null,S=null,w=null,A=null,x=new ae(0,0,0),T=0,C=!1,P=null,L=null,F=null,E=null,U=null,se.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:j,disable:fe,bindFramebuffer:me,drawBuffers:pe,useProgram:Ae,setBlending:Ke,setMaterial:ot,setFlipSided:je,setCullFace:St,setLineWidth:Ot,setPolygonOffset:on,setScissorTest:wt,activeTexture:It,bindTexture:Z,unbindTexture:Yt,compressedTexImage2D:pt,compressedTexImage3D:k,texImage2D:le,texImage3D:ue,pixelStorei:De,getParameter:be,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:ge,texStorage3D:_e,texSubImage2D:R,texSubImage3D:J,compressedTexSubImage2D:ne,compressedTexSubImage3D:oe,scissor:Me,viewport:xe,reset:qe}}function l2(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap,d=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,R){return g?new OffscreenCanvas(k,R):Ur("canvas")}function _(k,R,J){let ne=1,oe=pt(k);if((oe.width>J||oe.height>J)&&(ne=J/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let ge=Math.floor(ne*oe.width),_e=Math.floor(ne*oe.height);f===void 0&&(f=b(ge,_e));let le=R?b(ge,_e):f;return le.width=ge,le.height=_e,le.getContext("2d").drawImage(k,0,0,ge,_e),ke("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ge+"x"+_e+")."),le}else return"data"in k&&ke("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),k;return k}function m(k){return k.generateMipmaps}function y(k){i.generateMipmap(k)}function M(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(k,R,J,ne,oe,ge=!1){if(k!==null){if(i[k]!==void 0)return i[k];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let _e;ne&&(_e=e.get("EXT_texture_norm16"),_e||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=R;if(R===i.RED&&(J===i.FLOAT&&(le=i.R32F),J===i.HALF_FLOAT&&(le=i.R16F),J===i.UNSIGNED_BYTE&&(le=i.R8),J===i.UNSIGNED_SHORT&&_e&&(le=_e.R16_EXT),J===i.SHORT&&_e&&(le=_e.R16_SNORM_EXT)),R===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.R8UI),J===i.UNSIGNED_SHORT&&(le=i.R16UI),J===i.UNSIGNED_INT&&(le=i.R32UI),J===i.BYTE&&(le=i.R8I),J===i.SHORT&&(le=i.R16I),J===i.INT&&(le=i.R32I)),R===i.RG&&(J===i.FLOAT&&(le=i.RG32F),J===i.HALF_FLOAT&&(le=i.RG16F),J===i.UNSIGNED_BYTE&&(le=i.RG8),J===i.UNSIGNED_SHORT&&_e&&(le=_e.RG16_EXT),J===i.SHORT&&_e&&(le=_e.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.RG8UI),J===i.UNSIGNED_SHORT&&(le=i.RG16UI),J===i.UNSIGNED_INT&&(le=i.RG32UI),J===i.BYTE&&(le=i.RG8I),J===i.SHORT&&(le=i.RG16I),J===i.INT&&(le=i.RG32I)),R===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.RGB8UI),J===i.UNSIGNED_SHORT&&(le=i.RGB16UI),J===i.UNSIGNED_INT&&(le=i.RGB32UI),J===i.BYTE&&(le=i.RGB8I),J===i.SHORT&&(le=i.RGB16I),J===i.INT&&(le=i.RGB32I)),R===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),J===i.UNSIGNED_INT&&(le=i.RGBA32UI),J===i.BYTE&&(le=i.RGBA8I),J===i.SHORT&&(le=i.RGBA16I),J===i.INT&&(le=i.RGBA32I)),R===i.RGB&&(J===i.UNSIGNED_SHORT&&_e&&(le=_e.RGB16_EXT),J===i.SHORT&&_e&&(le=_e.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),R===i.RGBA){let ue=ge?bo:tt.getTransfer(oe);J===i.FLOAT&&(le=i.RGBA32F),J===i.HALF_FLOAT&&(le=i.RGBA16F),J===i.UNSIGNED_BYTE&&(le=ue===dt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&_e&&(le=_e.RGBA16_EXT),J===i.SHORT&&_e&&(le=_e.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function S(k,R){let J;return k?R===null||R===In||R===Yr?J=i.DEPTH24_STENCIL8:R===Pn?J=i.DEPTH32F_STENCIL8:R===Xr&&(J=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===In||R===Yr?J=i.DEPTH_COMPONENT24:R===Pn?J=i.DEPTH_COMPONENT32F:R===Xr&&(J=i.DEPTH_COMPONENT16),J}function w(k,R){return m(k)===!0||k.isFramebufferTexture&&k.minFilter!==zt&&k.minFilter!==Ht?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function A(k){let R=k.target;R.removeEventListener("dispose",A),T(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function x(k){let R=k.target;R.removeEventListener("dispose",x),P(R)}function T(k){let R=n.get(k);if(R.__webglInit===void 0)return;let J=k.source,ne=p.get(J);if(ne){let oe=ne[R.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(k),Object.keys(ne).length===0&&p.delete(J)}n.remove(k)}function C(k){let R=n.get(k);i.deleteTexture(R.__webglTexture);let J=k.source,ne=p.get(J);delete ne[R.__cacheKey],s.memory.textures--}function P(k){let R=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(R.__webglFramebuffer[ne]))for(let oe=0;oe<R.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(R.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(R.__webglFramebuffer[ne]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ne])}else{if(Array.isArray(R.__webglFramebuffer))for(let ne=0;ne<R.__webglFramebuffer.length;ne++)i.deleteFramebuffer(R.__webglFramebuffer[ne]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ne=0;ne<R.__webglColorRenderbuffer.length;ne++)R.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ne]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let J=k.textures;for(let ne=0,oe=J.length;ne<oe;ne++){let ge=n.get(J[ne]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),s.memory.textures--),n.remove(J[ne])}n.remove(k)}let L=0;function F(){L=0}function E(){return L}function U(k){L=k}function N(){let k=L;return k>=r.maxTextures&&ke("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,k}function B(k){let R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function V(k,R){let J=n.get(k);if(k.isVideoTexture&&Z(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&J.__version!==k.version){let ne=k.image;if(ne===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(J,k,R);return}}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+R)}function z(k,R){let J=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){fe(J,k,R);return}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+R)}function W(k,R){let J=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){fe(J,k,R);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+R)}function H(k,R){let J=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&J.__version!==k.version){me(J,k,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+R)}let ie={[Ki]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},K={[zt]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},se={[zf]:i.NEVER,[Xf]:i.ALWAYS,[Vf]:i.LESS,[ml]:i.LEQUAL,[Gf]:i.EQUAL,[gl]:i.GEQUAL,[Hf]:i.GREATER,[Wf]:i.NOTEQUAL};function Q(k,R){if(R.type===Pn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ht||R.magFilter===Fa||R.magFilter===ko||R.magFilter===Di||R.minFilter===Ht||R.minFilter===Fa||R.minFilter===ko||R.minFilter===Di)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,ie[R.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,ie[R.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,ie[R.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,K[R.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,K[R.minFilter]),R.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,se[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===zt||R.minFilter!==ko&&R.minFilter!==Di||R.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function he(k,R){let J=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",A));let ne=R.source,oe=p.get(ne);oe===void 0&&(oe={},p.set(ne,oe));let ge=B(R);if(ge!==k.__cacheKey){oe[ge]===void 0&&(oe[ge]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,J=!0),oe[ge].usedTimes++;let _e=oe[k.__cacheKey];_e!==void 0&&(oe[k.__cacheKey].usedTimes--,_e.usedTimes===0&&C(R)),k.__cacheKey=ge,k.__webglTexture=oe[ge].texture}return J}function q(k,R,J){return Math.floor(Math.floor(k/J)/R)}function j(k,R,J,ne){let ge=k.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,J,ne,R.data);else{ge.sort((De,Me)=>De.start-Me.start);let _e=0;for(let De=1;De<ge.length;De++){let Me=ge[_e],xe=ge[De],Ue=Me.start+Me.count,Oe=q(xe.start,R.width,4),qe=q(Me.start,R.width,4);xe.start<=Ue+1&&Oe===qe&&q(xe.start+xe.count-1,R.width,4)===Oe?Me.count=Math.max(Me.count,xe.start+xe.count-Me.start):(++_e,ge[_e]=xe)}ge.length=_e+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let De=0,Me=ge.length;De<Me;De++){let xe=ge[De],Ue=Math.floor(xe.start/4),Oe=Math.ceil(xe.count/4),qe=Ue%R.width,$=Math.floor(Ue/R.width),ye=Oe,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,$),t.texSubImage2D(i.TEXTURE_2D,0,qe,$,ye,ce,J,ne,R.data)}k.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function fe(k,R,J){let ne=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ne=i.TEXTURE_3D);let oe=he(k,R),ge=R.source;t.bindTexture(ne,k.__webglTexture,i.TEXTURE0+J);let _e=n.get(ge);if(ge.version!==_e.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ce=tt.getPrimaries(tt.workingColorSpace),ve=R.colorSpace===si?null:tt.getPrimaries(R.colorSpace),Ee=R.colorSpace===si||ce===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let ue=_(R.image,!1,r.maxTextureSize);ue=Yt(R,ue);let be=o.convert(R.format,R.colorSpace),De=o.convert(R.type),Me=v(R.internalFormat,be,De,R.normalized,R.colorSpace,R.isVideoTexture);Q(ne,R);let xe,Ue=R.mipmaps,Oe=R.isVideoTexture!==!0,qe=_e.__version===void 0||oe===!0,$=ge.dataReady,ye=w(R,ue);if(R.isDepthTexture)Me=S(R.format===Ui,R.type),qe&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Me,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Me,ue.width,ue.height,0,be,De,null));else if(R.isDataTexture)if(Ue.length>0){Oe&&qe&&t.texStorage2D(i.TEXTURE_2D,ye,Me,Ue[0].width,Ue[0].height);for(let ce=0,ve=Ue.length;ce<ve;ce++)xe=Ue[ce],Oe?$&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,be,De,xe.data):t.texImage2D(i.TEXTURE_2D,ce,Me,xe.width,xe.height,0,be,De,xe.data);R.generateMipmaps=!1}else Oe?(qe&&t.texStorage2D(i.TEXTURE_2D,ye,Me,ue.width,ue.height),$&&j(R,ue,be,De)):t.texImage2D(i.TEXTURE_2D,0,Me,ue.width,ue.height,0,be,De,ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Oe&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Me,Ue[0].width,Ue[0].height,ue.depth);for(let ce=0,ve=Ue.length;ce<ve;ce++)if(xe=Ue[ce],R.format!==vn)if(be!==null)if(Oe){if($)if(R.layerUpdates.size>0){let Ee=fu(xe.width,xe.height,R.format,R.type);for(let de of R.layerUpdates){let Ne=xe.data.subarray(de*Ee/xe.data.BYTES_PER_ELEMENT,(de+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,de,xe.width,xe.height,1,be,Ne)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,ue.depth,be,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Me,xe.width,xe.height,ue.depth,0,xe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,ue.depth,be,De,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Me,xe.width,xe.height,ue.depth,0,be,De,xe.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Oe&&qe&&t.texStorage2D(i.TEXTURE_2D,ye,Me,Ue[0].width,Ue[0].height);for(let ce=0,ve=Ue.length;ce<ve;ce++)xe=Ue[ce],R.format!==vn?be!==null?Oe?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Me,xe.width,xe.height,0,xe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?$&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,be,De,xe.data):t.texImage2D(i.TEXTURE_2D,ce,Me,xe.width,xe.height,0,be,De,xe.data)}else if(R.isDataArrayTexture)if(Oe){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Me,ue.width,ue.height,ue.depth),$)if(R.layerUpdates.size>0){let ce=fu(ue.width,ue.height,R.format,R.type);for(let ve of R.layerUpdates){let Ee=ue.data.subarray(ve*ce/ue.data.BYTES_PER_ELEMENT,(ve+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,ue.width,ue.height,1,be,De,Ee)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,De,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ue.width,ue.height,ue.depth,0,be,De,ue.data);else if(R.isData3DTexture)Oe?(qe&&t.texStorage3D(i.TEXTURE_3D,ye,Me,ue.width,ue.height,ue.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,De,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ue.width,ue.height,ue.depth,0,be,De,ue.data);else if(R.isFramebufferTexture){if(qe)if(Oe)t.texStorage2D(i.TEXTURE_2D,ye,Me,ue.width,ue.height);else{let ce=ue.width,ve=ue.height;for(let Ee=0;Ee<ye;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Me,ce,ve,0,be,De,null),ce>>=1,ve>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ue.parentNode!==ce){ce.appendChild(ue),d.add(R),ce.onpaint=ve=>{let Ee=ve.changedElements;for(let de of d)Ee.includes(de.image)&&(de.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Ee=i.RGBA,de=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,de,Ne,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Oe&&qe){let ce=pt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ye,Me,ce.width,ce.height)}for(let ce=0,ve=Ue.length;ce<ve;ce++)xe=Ue[ce],Oe?$&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,be,De,xe):t.texImage2D(i.TEXTURE_2D,ce,Me,be,De,xe);R.generateMipmaps=!1}else if(Oe){if(qe){let ce=pt(ue);t.texStorage2D(i.TEXTURE_2D,ye,Me,ce.width,ce.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,De,ue)}else t.texImage2D(i.TEXTURE_2D,0,Me,be,De,ue);m(R)&&y(ne),_e.__version=ge.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function me(k,R,J){if(R.image.length!==6)return;let ne=he(k,R),oe=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+J);let ge=n.get(oe);if(oe.version!==ge.__version||ne===!0){t.activeTexture(i.TEXTURE0+J);let _e=tt.getPrimaries(tt.workingColorSpace),le=R.colorSpace===si?null:tt.getPrimaries(R.colorSpace),ue=R.colorSpace===si||_e===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let be=R.isCompressedTexture||R.image[0].isCompressedTexture,De=R.image[0]&&R.image[0].isDataTexture,Me=[];for(let de=0;de<6;de++)!be&&!De?Me[de]=_(R.image[de],!0,r.maxCubemapSize):Me[de]=De?R.image[de].image:R.image[de],Me[de]=Yt(R,Me[de]);let xe=Me[0],Ue=o.convert(R.format,R.colorSpace),Oe=o.convert(R.type),qe=v(R.internalFormat,Ue,Oe,R.normalized,R.colorSpace),$=R.isVideoTexture!==!0,ye=ge.__version===void 0||ne===!0,ce=oe.dataReady,ve=w(R,xe);Q(i.TEXTURE_CUBE_MAP,R);let Ee;if(be){$&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,xe.width,xe.height);for(let de=0;de<6;de++){Ee=Me[de].mipmaps;for(let Ne=0;Ne<Ee.length;Ne++){let Fe=Ee[Ne];R.format!==vn?Ue!==null?$?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Fe.width,Fe.height,Ue,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,qe,Fe.width,Fe.height,0,Fe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Fe.width,Fe.height,Ue,Oe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,qe,Fe.width,Fe.height,0,Ue,Oe,Fe.data)}}}else{if(Ee=R.mipmaps,$&&ye){Ee.length>0&&ve++;let de=pt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,de.width,de.height)}for(let de=0;de<6;de++)if(De){$?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Me[de].width,Me[de].height,Ue,Oe,Me[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Me[de].width,Me[de].height,0,Ue,Oe,Me[de].data);for(let Ne=0;Ne<Ee.length;Ne++){let bt=Ee[Ne].image[de].image;$?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,bt.width,bt.height,Ue,Oe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,qe,bt.width,bt.height,0,Ue,Oe,bt.data)}}else{$?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,Oe,Me[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Ue,Oe,Me[de]);for(let Ne=0;Ne<Ee.length;Ne++){let Fe=Ee[Ne];$?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,Ue,Oe,Fe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,qe,Ue,Oe,Fe.image[de])}}}m(R)&&y(i.TEXTURE_CUBE_MAP),ge.__version=oe.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function pe(k,R,J,ne,oe,ge){let _e=o.convert(J.format,J.colorSpace),le=o.convert(J.type),ue=v(J.internalFormat,_e,le,J.normalized,J.colorSpace),be=n.get(R),De=n.get(J);if(De.__renderTarget=R,!be.__hasExternalTextures){let Me=Math.max(1,R.width>>ge),xe=Math.max(1,R.height>>ge);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ge,ue,Me,xe,R.depth,0,_e,le,null):t.texImage2D(oe,ge,ue,Me,xe,0,_e,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),It(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,De.__webglTexture,0,wt(R)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,De.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(k,R,J){if(i.bindRenderbuffer(i.RENDERBUFFER,k),R.depthBuffer){let ne=R.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,ge=S(R.stencilBuffer,oe),_e=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(R),ge,R.width,R.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(R),ge,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,k)}else{let ne=R.textures;for(let oe=0;oe<ne.length;oe++){let ge=ne[oe],_e=o.convert(ge.format,ge.colorSpace),le=o.convert(ge.type),ue=v(ge.internalFormat,_e,le,ge.normalized,ge.colorSpace);It(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(R),ue,R.width,R.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(R),ue,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ue,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(k,R,J){let ne=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(R.depthTexture);if(oe.__renderTarget=R,(!oe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ne){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(i.TEXTURE_CUBE_MAP,R.depthTexture);let be=o.convert(R.depthTexture.format),De=o.convert(R.depthTexture.type),Me;R.depthTexture.format===kn?Me=i.DEPTH_COMPONENT24:R.depthTexture.format===Ui&&(Me=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Me,R.width,R.height,0,be,De,null)}}else V(R.depthTexture,0);let ge=oe.__webglTexture,_e=wt(R),le=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,ue=R.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===kn)It(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,le,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ue,le,ge,0);else if(R.depthTexture.format===Ui)It(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,le,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ue,le,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(k){let R=n.get(k),J=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){let ne=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ne){let oe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),R.__depthDisposeCallback=oe}R.__boundDepthTexture=ne}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(J)for(let ne=0;ne<6;ne++)rt(R.__webglFramebuffer[ne],k,ne);else{let ne=k.texture.mipmaps;ne&&ne.length>0?rt(R.__webglFramebuffer[0],k,0):rt(R.__webglFramebuffer,k,0)}else if(J){R.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ne]),R.__webglDepthbuffer[ne]===void 0)R.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ae(R.__webglDepthbuffer[ne],k,!1);else{let oe=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ge)}}else{let ne=k.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Ae(R.__webglDepthbuffer,k,!1);else{let oe=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(k,R,J){let ne=n.get(k);R!==void 0&&pe(ne.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Ve(k)}function ot(k){let R=k.texture,J=n.get(k),ne=n.get(R);k.addEventListener("dispose",x);let oe=k.textures,ge=k.isWebGLCubeRenderTarget===!0,_e=oe.length>1;if(_e||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=R.version,s.memory.textures++),ge){J.__webglFramebuffer=[];for(let le=0;le<6;le++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[le]=[];for(let ue=0;ue<R.mipmaps.length;ue++)J.__webglFramebuffer[le][ue]=i.createFramebuffer()}else J.__webglFramebuffer[le]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let le=0;le<R.mipmaps.length;le++)J.__webglFramebuffer[le]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(_e)for(let le=0,ue=oe.length;le<ue;le++){let be=n.get(oe[le]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),s.memory.textures++)}if(k.samples>0&&It(k)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){let ue=oe[le];J.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[le]);let be=o.convert(ue.format,ue.colorSpace),De=o.convert(ue.type),Me=v(ue.internalFormat,be,De,ue.normalized,ue.colorSpace,k.isXRRenderTarget===!0),xe=wt(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Me,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,J.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(J.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Q(i.TEXTURE_CUBE_MAP,R);for(let le=0;le<6;le++)if(R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)pe(J.__webglFramebuffer[le][ue],k,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else pe(J.__webglFramebuffer[le],k,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(R)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let le=0,ue=oe.length;le<ue;le++){let be=oe[le],De=n.get(be),Me=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Me=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,De.__webglTexture),Q(Me,be),pe(J.__webglFramebuffer,k,be,i.COLOR_ATTACHMENT0+le,Me,0),m(be)&&y(Me)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(le=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),Q(le,R),R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)pe(J.__webglFramebuffer[ue],k,R,i.COLOR_ATTACHMENT0,le,ue);else pe(J.__webglFramebuffer,k,R,i.COLOR_ATTACHMENT0,le,0);m(R)&&y(le),t.unbindTexture()}k.depthBuffer&&Ve(k)}function je(k){let R=k.textures;for(let J=0,ne=R.length;J<ne;J++){let oe=R[J];if(m(oe)){let ge=M(k),_e=n.get(oe).__webglTexture;t.bindTexture(ge,_e),y(ge),t.unbindTexture()}}}let St=[],Ot=[];function on(k){if(k.samples>0){if(It(k)===!1){let R=k.textures,J=k.width,ne=k.height,oe=i.COLOR_BUFFER_BIT,ge=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(k),le=R.length>1;if(le)for(let be=0;be<R.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let ue=k.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let be=0;be<R.length;be++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let De=n.get(R[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,J,ne,0,0,J,ne,oe,i.NEAREST),l===!0&&(St.length=0,Ot.length=0,St.push(i.COLOR_ATTACHMENT0+be),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(St.push(ge),Ot.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<R.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let De=n.get(R[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&l){let R=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function wt(k){return Math.min(r.maxSamples,k.samples)}function It(k){let R=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Z(k){let R=s.render.frame;h.get(k)!==R&&(h.set(k,R),k.update())}function Yt(k,R){let J=k.colorSpace,ne=k.format,oe=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||J!==_o&&J!==si&&(tt.getTransfer(J)===dt?(ne!==vn||oe!==pn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",J)),R}function pt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.getTextureUnits=E,this.setTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function c2(i,e){function t(n,r=si){let o,s=tt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qc)return i.BYTE;if(n===jc)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===vn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===ru)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===zo||n===Vo||n===Go||n===Ho)if(s===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===za||n===Va||n===Ga)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ka)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Wa||n===Xa||n===Ya||n===qa||n===Wo||n===$a)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ha||n===Wa)return s===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Xa)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return o.COMPRESSED_R11_EAC;if(n===qa)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Wo)return o.COMPRESSED_RG11_EAC;if(n===$a)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ka||n===Ja||n===Qa||n===ja||n===el||n===tl||n===nl||n===il||n===rl||n===ol||n===sl||n===al||n===ll)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Za)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===ul||n===hl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===cl)return s===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===dl||n===Xo||n===pl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var u2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h2=`
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

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:u2,fragmentShader:h2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fu=class extends zn{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,b=typeof XRWebGLBinding<"u",_=new Pu,m={},y=t.getContextAttributes(),M=null,v=null,S=[],w=[],A=new Je,x=null,T=null,C=new Kt;C.viewport=new At;let P=new Kt;P.viewport=new At;let L=[C,P],F=new Ra,E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new kr,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new kr,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new kr,S[q]=j),j.getHandSpace()};function N(q){let j=w.indexOf(q.inputSource);if(j===-1)return;let fe=S[j];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||s),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",V);for(let q=0;q<S.length;q++){let j=w[q];j!==null&&(w[q]=null,S[q].disconnect(j))}E=null,U=null,_.reset();for(let q in m)delete m[q];if(e.setRenderTarget(M),p=null,f=null,d=null,r=null,v=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",B),r.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,me=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Ui:kn,me=y.stencil?Yr:In);let Ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new jt(f.textureWidth,f.textureHeight,{format:vn,type:pn,depthTexture:new Ei(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jt(p.framebufferWidth,p.framebufferHeight,{format:vn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(q){for(let j=0;j<q.removed.length;j++){let fe=q.removed[j],me=w.indexOf(fe);me>=0&&(w[me]=null,S[me].disconnect(fe))}for(let j=0;j<q.added.length;j++){let fe=q.added[j],me=w.indexOf(fe);if(me===-1){for(let Ae=0;Ae<S.length;Ae++)if(Ae>=w.length){w.push(fe),me=Ae;break}else if(w[Ae]===null){w[Ae]=fe,me=Ae;break}if(me===-1)break}let pe=S[me];pe&&pe.connect(fe)}}let z=new X,W=new X;function H(q,j,fe){z.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);let me=z.distanceTo(W),pe=j.projectionMatrix.elements,Ae=fe.projectionMatrix.elements,rt=pe[14]/(pe[10]-1),Ve=pe[14]/(pe[10]+1),Ke=(pe[9]+1)/pe[5],ot=(pe[9]-1)/pe[5],je=(pe[8]-1)/pe[0],St=(Ae[8]+1)/Ae[0],Ot=rt*je,on=rt*St,wt=me/(-je+St),It=wt*-je;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(It),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pe[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Z=rt+wt,Yt=Ve+wt,pt=Ot-It,k=on+(me-It),R=Ke*Ve/Yt*Z,J=ot*Ve/Yt*Z;q.projectionMatrix.makePerspective(pt,k,R,J,Z,Yt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,fe=q.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),F.near=P.near=C.near=j,F.far=P.far=C.far=fe,(E!==F.near||U!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),E=F.near,U=F.far),F.layers.mask=q.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let me=q.parent,pe=F.cameras;ie(F,me);for(let Ae=0;Ae<pe.length;Ae++)ie(pe[Ae],me);pe.length===2?H(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),K(q,F,me)};function K(q,j,fe){fe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(q){return m[q]};let se=null;function Q(q,j){if(h=j.getViewerPose(c||s),g=j,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let me=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let Ve=0;Ve<fe.length;Ve++){let Ke=fe[Ve],ot=null;if(p!==null)ot=p.getViewport(Ke);else{let St=d.getViewSubImage(f,Ke);ot=St.viewport,Ve===0&&(e.setRenderTargetTextures(v,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(v))}let je=L[Ve];je===void 0&&(je=new Kt,je.layers.enable(Ve),je.viewport=new At,L[Ve]=je),je.matrix.fromArray(Ke.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ke.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(F.matrix.copy(je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(je)}let pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let Ve=d.getDepthInformation(fe[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(Ve,r.renderState)}if(pe&&pe.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let Ve=0;Ve<fe.length;Ve++){let Ke=fe[Ve].camera;if(Ke){let ot=m[Ke];ot||(ot=new wo,m[Ke]=ot);let je=d.getCameraImage(Ke);ot.sourceTexture=je}}}}for(let fe=0;fe<S.length;fe++){let me=w[fe],pe=S[fe];me!==null&&pe!==void 0&&pe.update(me,j,c||s)}se&&se(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let he=new E0;he.setAnimationLoop(Q),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}},f2=new Tt,F0=new We;F0.set(-1,0,0,0,1,0,0,0,1);function d2(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,cu(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,y,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(_,m):m.isMeshLambertMaterial?(o(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(_,m),d(_,m)):m.isMeshPhongMaterial?(o(_,m),h(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(_,m),f(_,m),m.isMeshPhysicalMaterial&&p(_,m,v)):m.isMeshMatcapMaterial?(o(_,m),g(_,m)):m.isMeshDepthMaterial?o(_,m):m.isMeshDistanceMaterial?(o(_,m),b(_,m)):m.isMeshNormalMaterial?o(_,m):m.isLineBasicMaterial?(s(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,y,M):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===rn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===rn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let y=e.get(m),M=y.envMap,v=y.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(F0),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function s(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,y,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*y,_.scale.value=M*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,y){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function b(_,m){let y=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function p2(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=r[v.id];w===void 0&&(_(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",y));let A=S.program;n.updateUBOMapping(v,A);let x=e.render.frame;o[v.id]!==x&&(f(v),o[v.id]=x)}function h(v){let S=d();v.__bindingPointIndex=S;let w=i.createBuffer(),A=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,T=w.length;x<T;x++){let C=w[x];if(Array.isArray(C))for(let P=0,L=C.length;P<L;P++)p(C[P],x,P,A);else p(C,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,w,A){if(b(v,S,w,A)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let P=0;P<T.length;P++){let L=T[P],F=m(L);g(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function b(v,S,w,A){let x=v.value,T=S+"_"+w;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let C=A[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function _(v){let S=v.uniforms,w=0,A=16;for(let T=0,C=S.length;T<C;T++){let P=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,F=P.length;L<F;L++){let E=P[L],U=Array.isArray(E.value)?E.value:[E.value];for(let N=0,B=U.length;N<B;N++){let V=U[N],z=m(V),W=w%A,H=W%z.boundary,ie=W+H;w+=H,ie!==0&&A-ie<z.storage&&(w+=A-ie),E.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,w+=z.storage}}}let x=w%A;return x>0&&(w+=A-x),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let w=s.indexOf(S.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function M(){for(let v in r)i.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:M}}var m2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function g2(){return Hn===null&&(Hn=new ca(m2,16,16,Ni,Fn),Hn.name="DFG_LUT",Hn.minFilter=Ht,Hn.magFilter=Ht,Hn.wrapS=hn,Hn.wrapT=hn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Kr=class{constructor(e={}){let{canvas:t=qf(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;let b=p,_=new Set([Oa,Ba,Na]),m=new Set([pn,In,Xr,Yr,Da,Ua]),y=new Uint32Array(4),M=new Int32Array(4),v=new X,S=null,w=null,A=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,L=null,F=null,E=null,U=null;this._outputColorSpace=Ct;let N=0,B=0,V=null,z=-1,W=null,H=new At,ie=new At,K=null,se=new ae(0),Q=0,he=t.width,q=t.height,j=1,fe=null,me=null,pe=new At(0,0,he,q),Ae=new At(0,0,he,q),rt=!1,Ve=new So,Ke=!1,ot=!1,je=new Tt,St=new X,Ot=new At,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function It(){return V===null?j:1}let Z=n;function Yt(D,Y){return t.getContext(D,Y)}let pt,k,R,J,ne,oe,ge,_e,le,ue,be,De,Me,xe,Ue,Oe,qe,$,ye,ce,ve,Ee,de;try{let D={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),Z===null){let Y="webgl2";if(Z=Yt(Y,D),Z===null)throw Yt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(D){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),ze("WebGLRenderer: "+D.message),D}function Ne(){pt=new Sx(Z),pt.init(),ve=new c2(Z,pt),k=new dx(Z,pt,e,ve),R=new a2(Z,pt),k.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),F=Z.createFramebuffer(),E=Z.createFramebuffer(),U=Z.createFramebuffer(),J=new Ex(Z),ne=new qy,oe=new l2(Z,pt,R,ne,k,ve,J),ge=new Mx(C),_e=new Rg(Z),Ee=new hx(Z,_e),le=new Tx(Z,_e,J,Ee),ue=new Rx(Z,le,_e,Ee,J),$=new Ax(Z,k,oe),Ue=new px(ne),be=new Yy(C,ge,pt,k,Ee,Ue),De=new d2(C,ne),Me=new Zy,xe=new t2(pt),qe=new ux(C,ge,R,ue,g,l),Oe=new s2(C,ue,k),de=new p2(Z,J,k,R),ye=new fx(Z,pt,J),ce=new wx(Z,pt,J),J.programs=be.programs,C.capabilities=k,C.extensions=pt,C.properties=ne,C.renderLists=Me,C.shadowMap=Oe,C.state=R,C.info=J}b!==pn&&(T=new Ix(b,t.width,t.height,a,r,o));let Fe=new Fu(C,Z);this.xr=Fe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize(he,q,!1))},this.getSize=function(D){return D.set(he,q)},this.setSize=function(D,Y,re=!0){if(Fe.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}he=D,q=Y,t.width=Math.floor(D*j),t.height=Math.floor(Y*j),re===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(he*j,q*j).floor()},this.setDrawingBufferSize=function(D,Y,re){he=D,q=Y,j=re,t.width=Math.floor(D*re),t.height=Math.floor(Y*re),this.setViewport(0,0,D,Y)},this.setEffects=function(D){if(b===pn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Y=0;Y<D.length;Y++)if(D[Y].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(pe)},this.setViewport=function(D,Y,re,ee){D.isVector4?pe.set(D.x,D.y,D.z,D.w):pe.set(D,Y,re,ee),R.viewport(H.copy(pe).multiplyScalar(j).round())},this.getScissor=function(D){return D.copy(Ae)},this.setScissor=function(D,Y,re,ee){D.isVector4?Ae.set(D.x,D.y,D.z,D.w):Ae.set(D,Y,re,ee),R.scissor(ie.copy(Ae).multiplyScalar(j).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(D){R.setScissorTest(rt=D)},this.setOpaqueSort=function(D){fe=D},this.setTransparentSort=function(D){me=D},this.getClearColor=function(D){return D.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,re=!0){let ee=0;if(D){let te=!1;if(V!==null){let we=V.texture.format;te=_.has(we)}if(te){let we=V.texture.type,Ce=m.has(we),Te=qe.getClearColor(),Ie=qe.getClearAlpha(),Le=Te.r,$e=Te.g,et=Te.b;Ce?(y[0]=Le,y[1]=$e,y[2]=et,y[3]=Ie,Z.clearBufferuiv(Z.COLOR,0,y)):(M[0]=Le,M[1]=$e,M[2]=et,M[3]=Ie,Z.clearBufferiv(Z.COLOR,0,M))}else ee|=Z.COLOR_BUFFER_BIT}Y&&(ee|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),L=D},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),qe.dispose(),Me.dispose(),xe.dispose(),ne.dispose(),ge.dispose(),ue.dispose(),Ee.dispose(),de.dispose(),be.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Eh),Fe.removeEventListener("sessionend",Ah),Wi.stop()};function bt(D){D.preventDefault(),lu("WebGLRenderer: Context Lost."),P=!0}function ht(){lu("WebGLRenderer: Context Restored."),P=!1;let D=J.autoReset,Y=Oe.enabled,re=Oe.autoUpdate,ee=Oe.needsUpdate,te=Oe.type;Ne(),J.autoReset=D,Oe.enabled=Y,Oe.autoUpdate=re,Oe.needsUpdate=ee,Oe.type=te}function Sn(D){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Nn(D){let Y=D.target;Y.removeEventListener("dispose",Nn),Mm(Y)}function Mm(D){Sm(D),ne.remove(D)}function Sm(D){let Y=ne.get(D).programs;Y!==void 0&&(Y.forEach(function(re){be.releaseProgram(re)}),D.isShaderMaterial&&be.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,re,ee,te,we){Y===null&&(Y=on);let Ce=te.isMesh&&te.matrixWorld.determinantAffine()<0,Te=Em(D,Y,re,ee,te);R.setMaterial(ee,Ce);let Ie=re.index,Le=1;if(ee.wireframe===!0){if(Ie=le.getWireframeAttribute(re),Ie===void 0)return;Le=2}let $e=re.drawRange,et=re.attributes.position,Pe=$e.start*Le,ft=($e.start+$e.count)*Le;we!==null&&(Pe=Math.max(Pe,we.start*Le),ft=Math.min(ft,(we.start+we.count)*Le)),Ie!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,Ie.count)):et!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,et.count));let Pt=ft-Pe;if(Pt<0||Pt===1/0)return;Ee.setup(te,ee,Te,re,Ie);let yt,_t=ye;if(Ie!==null&&(yt=_e.get(Ie),_t=ce,_t.setIndex(yt)),te.isMesh)ee.wireframe===!0?(R.setLineWidth(ee.wireframeLinewidth*It()),_t.setMode(Z.LINES)):_t.setMode(Z.TRIANGLES);else if(te.isLine){let qt=ee.linewidth;qt===void 0&&(qt=1),R.setLineWidth(qt*It()),te.isLineSegments?_t.setMode(Z.LINES):te.isLineLoop?_t.setMode(Z.LINE_LOOP):_t.setMode(Z.LINE_STRIP)}else te.isPoints?_t.setMode(Z.POINTS):te.isSprite&&_t.setMode(Z.TRIANGLES);if(te.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))_t.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let qt=te._multiDrawStarts,Re=te._multiDrawCounts,nn=te._multiDrawCount,st=Ie?_e.get(Ie).bytesPerElement:1,gn=ne.get(ee).currentProgram.getUniforms();for(let Bn=0;Bn<nn;Bn++)gn.setValue(Z,"_gl_DrawID",Bn),_t.render(qt[Bn]/st,Re[Bn])}else if(te.isInstancedMesh)_t.renderInstances(Pe,Pt,te.count);else if(re.isInstancedBufferGeometry){let qt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Re=Math.min(re.instanceCount,qt);_t.renderInstances(Pe,Pt,Re)}else _t.render(Pe,Pt)};function wh(D,Y,re,ee){L!==null&&D.isNodeMaterial&&L.setObject(ee,D),Ke===!0&&Ue.setState(D,re,!1),D.transparent===!0&&D.side===Mt&&D.forceSinglePass===!1?(D.side=rn,D.needsUpdate=!0,vs(D,Y,ee),D.side=Pi,D.needsUpdate=!0,vs(D,Y,ee),D.side=Mt):vs(D,Y,ee)}this.compile=function(D,Y,re=null){re===null&&(re=D),L!==null&&L.renderStart(D,Y,re),w=xe.get(re),w.init(Y),x.push(w),re.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),D!==re&&D.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,Ke=Ue.init(this.clippingPlanes,ot),Ke===!0&&Ue.setGlobalState(this.clippingPlanes,Y),L!==null&&Oe.render(w.state.shadowsArray,re,Y);let ee=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let we=te.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){let Te=we[Ce];wh(Te,re,Y,te),ee.add(Te)}else wh(we,re,Y,te),ee.add(we)}),w=x.pop(),L!==null&&L.renderEnd(),ee},this.compileAsync=function(D,Y,re=null){let ee=this.compile(D,Y,re);return new Promise(te=>{function we(){if(ee.forEach(function(Ce){let Ie=ne.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&ee.delete(Ce)}),ee.size===0){te(D);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ic=null;function Tm(D){ic&&ic(D)}function Eh(){Wi.stop()}function Ah(){Wi.start()}let Wi=new E0;Wi.setAnimationLoop(Tm),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(D){ic=D,Fe.setAnimationLoop(D),D===null?Wi.stop():Wi.start()},Fe.addEventListener("sessionstart",Eh),Fe.addEventListener("sessionend",Ah),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(D,Y);let re=Fe.enabled===!0&&Fe.isPresenting===!0,ee=T!==null&&(V===null||re)&&T.begin(C,V);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(Y),Y=Fe.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,Y,V),w=xe.get(D,x.length),w.init(Y),w.state.textureUnits=oe.getTextureUnits(),x.push(w),je.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ve.setFromProjectionMatrix(je,Rn,Y.reversedDepth),ot=this.localClippingEnabled,Ke=Ue.init(this.clippingPlanes,ot),S=Me.get(D,A.length),S.init(),A.push(S),Fe.enabled===!0&&Fe.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&rc(Ce,Y,-1/0,C.sortObjects)}rc(D,Y,0,C.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),C.sortObjects===!0&&S.sort(fe,me),wt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,wt&&qe.addToRenderList(S,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Ue.beginShadows();let te=w.state.shadowsArray;if(Oe.render(te,D,Y),Ke===!0&&Ue.endShadows(),(ee&&T.hasRenderPass())===!1){let Ce=S.opaque,Te=S.transmissive;if(w.setupLights(),Y.isArrayCamera){let Ie=Y.cameras;if(Te.length>0)for(let Le=0,$e=Ie.length;Le<$e;Le++){let et=Ie[Le];Ch(Ce,Te,D,et)}wt&&qe.render(D);for(let Le=0,$e=Ie.length;Le<$e;Le++){let et=Ie[Le];Rh(S,D,et,et.viewport)}}else Te.length>0&&Ch(Ce,Te,D,Y),wt&&qe.render(D),Rh(S,D,Y)}V!==null&&B===0&&(oe.updateMultisampleRenderTarget(V),oe.updateRenderTargetMipmap(V)),ee&&T.end(C),D.isScene===!0&&D.onAfterRender(C,D,Y),Ee.resetDefaultState(),z=-1,W=null,x.pop(),x.length>0?(w=x[x.length-1],oe.setTextureUnits(w.state.textureUnits),Ke===!0&&Ue.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function rc(D,Y,re,ee){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLightProbeGrid)w.pushLightProbeGrid(D);else if(D.isLight)w.pushLight(D),D.castShadow&&w.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(Ve)){ee&&Ot.setFromMatrixPosition(D.matrixWorld).applyMatrix4(je);let Ce=ue.update(D),Te=D.material;Te.visible&&S.push(D,Ce,Te,re,Ot.z,null,Y)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(Ve))){let Ce=ue.update(D),Te=D.material;if(ee&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ot.copy(D.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ot.copy(Ce.boundingSphere.center)),Ot.applyMatrix4(D.matrixWorld).applyMatrix4(je)),Array.isArray(Te)){let Ie=Ce.groups;for(let Le=0,$e=Ie.length;Le<$e;Le++){let et=Ie[Le],Pe=Te[et.materialIndex];Pe&&Pe.visible&&S.push(D,Ce,Pe,re,Ot.z,et,Y)}}else Te.visible&&S.push(D,Ce,Te,re,Ot.z,null,Y)}}let we=D.children;for(let Ce=0,Te=we.length;Ce<Te;Ce++)rc(we[Ce],Y,re,ee)}function Rh(D,Y,re,ee){let{opaque:te,transmissive:we,transparent:Ce}=D;w.setupLightsView(re),Ke===!0&&Ue.setGlobalState(C.clippingPlanes,re),ee&&R.viewport(H.copy(ee)),te.length>0&&ys(te,Y,re),we.length>0&&ys(we,Y,re),Ce.length>0&&ys(Ce,Y,re),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Ch(D,Y,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ee.id]===void 0){let Pe=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ee.id]=new jt(1,1,{generateMipmaps:!0,type:Pe?Fn:pn,minFilter:Di,samples:Math.max(4,k.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let we=w.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||H;we.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let Te=C.getRenderTarget(),Ie=C.getActiveCubeFace(),Le=C.getActiveMipmapLevel();C.setRenderTarget(we),C.getClearColor(se),Q=C.getClearAlpha(),Q<1&&C.setClearColor(16777215,.5),C.clear(),wt&&qe.render(re);let $e=C.toneMapping;C.toneMapping=Cn;let et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),w.setupLightsView(ee),Ke===!0&&Ue.setGlobalState(C.clippingPlanes,ee),ys(D,re,ee),oe.updateMultisampleRenderTarget(we),oe.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,Pt=Y.length;ft<Pt;ft++){let yt=Y[ft],{object:_t,geometry:qt,material:Re,group:nn}=yt;if(Re.side===Mt&&_t.layers.test(ee.layers)){let st=Re.side;Re.side=rn,Re.needsUpdate=!0,Ih(_t,re,ee,qt,Re,nn),Re.side=st,Re.needsUpdate=!0,Pe=!0}}Pe===!0&&(oe.updateMultisampleRenderTarget(we),oe.updateRenderTargetMipmap(we))}C.setRenderTarget(Te,Ie,Le),C.setClearColor(se,Q),et!==void 0&&(ee.viewport=et),C.toneMapping=$e}function ys(D,Y,re){let ee=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,we=D.length;te<we;te++){let Ce=D[te],{object:Te,geometry:Ie,group:Le}=Ce,$e=Ce.material;$e.allowOverride===!0&&ee!==null&&($e=ee),Te.layers.test(re.layers)&&Ih(Te,Y,re,Ie,$e,Le)}}function Ih(D,Y,re,ee,te,we){L!==null&&te.isNodeMaterial&&L.setObject(D,te),D.onBeforeRender(C,Y,re,ee,te,we),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(C,Y,re,ee,D,we),te.transparent===!0&&te.side===Mt&&te.forceSinglePass===!1?(te.side=rn,te.needsUpdate=!0,C.renderBufferDirect(re,Y,ee,te,D,we),te.side=Pi,te.needsUpdate=!0,C.renderBufferDirect(re,Y,ee,te,D,we),te.side=Mt):C.renderBufferDirect(re,Y,ee,te,D,we),D.onAfterRender(C,Y,re,ee,te,we)}function vs(D,Y,re){Y.isScene!==!0&&(Y=on);let ee=ne.get(D),te=w.state.lights,we=w.state.shadowsArray,Ce=te.state.version,Te=be.getParameters(D,te.state,we,Y,re,w.state.lightProbeGridArray),Ie=be.getProgramCacheKey(Te),Le=ee.programs;ee.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Y.environment:null,ee.fog=Y.fog;let $e=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ee.envMap=ge.get(D.envMap||ee.environment,$e),ee.envMapRotation=ee.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,Le===void 0&&(D.addEventListener("dispose",Nn),Le=new Map,ee.programs=Le);let et=Le.get(Ie);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Ce)return Fh(D,Te),et}else Te.uniforms=be.getUniforms(D),L!==null&&D.isNodeMaterial&&L.build(D,re,Te),D.onBeforeCompile(Te,C),et=be.acquireProgram(Te,Ie),Le.set(Ie,et),ee.uniforms=Te.uniforms;let Pe=ee.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),Fh(D,Te),ee.needsLights=Rm(D),ee.lightsStateVersion=Ce,ee.needsLights&&(Pe.ambientLightColor.value=te.state.ambient,Pe.lightProbe.value=te.state.probe,Pe.sunLights.value=te.state.sun,Pe.sunLightShadows.value=te.state.sunShadow,Pe.directionalLights.value=te.state.directional,Pe.directionalLightShadows.value=te.state.directionalShadow,Pe.spotLights.value=te.state.spot,Pe.spotLightShadows.value=te.state.spotShadow,Pe.rectAreaLights.value=te.state.rectArea,Pe.ltc_1.value=te.state.rectAreaLTC1,Pe.ltc_2.value=te.state.rectAreaLTC2,Pe.pointLights.value=te.state.point,Pe.pointLightShadows.value=te.state.pointShadow,Pe.hemisphereLights.value=te.state.hemi,Pe.sunShadowMatrix.value=te.state.sunShadowMatrix,Pe.sunShadowCascade.value=te.state.sunShadowCascade,Pe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Pe.spotLightMatrix.value=te.state.spotLightMatrix,Pe.spotLightMap.value=te.state.spotLightMap,Pe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=w.state.lightProbeGridArray.length>0,ee.currentProgram=et,ee.uniformsList=null,et}function Ph(D){if(D.uniformsList===null){let Y=D.currentProgram.getUniforms();D.uniformsList=Zr.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function Fh(D,Y){let re=ne.get(D);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function wm(D,Y){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;v.setFromMatrixPosition(Y.matrixWorld);for(let re=0,ee=D.length;re<ee;re++){let te=D[re];if(te.texture!==null&&te.boundingBox.containsPoint(v))return te}return null}function Em(D,Y,re,ee,te){Y.isScene!==!0&&(Y=on),oe.resetTextureUnits();let we=Y.fog,Ce=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Y.environment:null,Te=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:tt.workingColorSpace,Ie=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Le=ge.get(ee.envMap||Ce,Ie),$e=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Pe=!!re.morphAttributes.position,ft=!!re.morphAttributes.normal,Pt=!!re.morphAttributes.color,yt=Cn;ee.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(yt=C.toneMapping);let _t=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,qt=_t!==void 0?_t.length:0,Re=ne.get(ee),nn=w.state.lights;if(Ke===!0&&(ot===!0||D!==W)){let xt=D===W&&ee.id===z;Ue.setState(ee,D,xt)}let st=!1;ee.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==nn.state.version||Re.outputColorSpace!==Te||te.isBatchedMesh&&Re.batching===!1||!te.isBatchedMesh&&Re.batching===!0||te.isBatchedMesh&&Re.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Re.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Re.instancing===!1||!te.isInstancedMesh&&Re.instancing===!0||te.isSkinnedMesh&&Re.skinning===!1||!te.isSkinnedMesh&&Re.skinning===!0||te.isInstancedMesh&&Re.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Re.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Re.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Re.instancingMorph===!1&&te.morphTexture!==null||Re.envMap!==Le||ee.fog===!0&&Re.fog!==we||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ue.numPlanes||Re.numIntersection!==Ue.numIntersection)||Re.vertexAlphas!==$e||Re.vertexTangents!==et||Re.morphTargets!==Pe||Re.morphNormals!==ft||Re.morphColors!==Pt||Re.toneMapping!==yt||Re.morphTargetsCount!==qt||!!Re.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Re.__version=ee.version);let gn=Re.currentProgram;st===!0&&(gn=vs(ee,Y,te),L&&ee.isNodeMaterial&&L.onUpdateProgram(ee,gn,Re));let Bn=!1,pi=!1,_r=!1,gt=gn.getUniforms(),Rt=Re.uniforms;if(R.useProgram(gn.program)&&(Bn=!0,pi=!0,_r=!0),ee.id!==z&&(z=ee.id,pi=!0),Re.needsLights){let xt=wm(w.state.lightProbeGridArray,te);Re.lightProbeGrid!==xt&&(Re.lightProbeGrid=xt,pi=!0)}if(Bn||W!==D){R.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),gt.setValue(Z,"projectionMatrix",D.projectionMatrix),gt.setValue(Z,"viewMatrix",D.matrixWorldInverse);let gi=gt.map.cameraPosition;gi!==void 0&&gi.setValue(Z,St.setFromMatrixPosition(D.matrixWorld)),k.logarithmicDepthBuffer&&gt.setValue(Z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&gt.setValue(Z,"isOrthographic",D.isOrthographicCamera===!0),W!==D&&(W=D,pi=!0,_r=!0)}if(Re.needsLights&&(nn.state.sunShadowMap.length>0&&gt.setValue(Z,"sunShadowMap",nn.state.sunShadowMap,oe),nn.state.directionalShadowMap.length>0&&gt.setValue(Z,"directionalShadowMap",nn.state.directionalShadowMap,oe),nn.state.spotShadowMap.length>0&&gt.setValue(Z,"spotShadowMap",nn.state.spotShadowMap,oe),nn.state.pointShadowMap.length>0&&gt.setValue(Z,"pointShadowMap",nn.state.pointShadowMap,oe)),te.isSkinnedMesh){gt.setOptional(Z,te,"bindMatrix"),gt.setOptional(Z,te,"bindMatrixInverse");let xt=te.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),gt.setValue(Z,"boneTexture",xt.boneTexture,oe))}te.isBatchedMesh&&(gt.setOptional(Z,te,"batchingTexture"),gt.setValue(Z,"batchingTexture",te._matricesTexture,oe),gt.setOptional(Z,te,"batchingIdTexture"),gt.setValue(Z,"batchingIdTexture",te._indirectTexture,oe),gt.setOptional(Z,te,"batchingColorTexture"),te._colorsTexture!==null&&gt.setValue(Z,"batchingColorTexture",te._colorsTexture,oe));let mi=re.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&$.update(te,re,gn),(pi||Re.receiveShadow!==te.receiveShadow)&&(Re.receiveShadow=te.receiveShadow,gt.setValue(Z,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Y.environment!==null&&(Rt.envMapIntensity.value=Y.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=g2()),pi){if(gt.setValue(Z,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&Am(Rt,_r),we&&ee.fog===!0&&De.refreshFogUniforms(Rt,we),De.refreshMaterialUniforms(Rt,ee,j,q,w.state.transmissionRenderTarget[D.id]),Re.needsLights&&Re.lightProbeGrid){let xt=Re.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}Zr.upload(Z,Ph(Re),Rt,oe)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Zr.upload(Z,Ph(Re),Rt,oe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&gt.setValue(Z,"center",te.center),gt.setValue(Z,"modelViewMatrix",te.modelViewMatrix),gt.setValue(Z,"normalMatrix",te.normalMatrix),gt.setValue(Z,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let xt=ee.uniformsGroups;for(let gi=0,br=xt.length;gi<br;gi++){let Dh=xt[gi];de.update(Dh,gn),de.bind(Dh,gn)}}return gn}function Am(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.sunLights.needsUpdate=Y,D.sunLightShadows.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function Rm(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,Y,re){let ee=ne.get(D);ee.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ne.get(D.texture).__webglTexture=Y,ne.get(D.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){let re=ne.get(D);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,re=0){V=D,N=Y,B=re;let ee=null,te=!1,we=!1;if(D){let Te=ne.get(D);if(Te.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(Z.FRAMEBUFFER,Te.__webglFramebuffer),H.copy(D.viewport),ie.copy(D.scissor),K=D.scissorTest,R.viewport(H),R.scissor(ie),R.setScissorTest(K),z=-1;return}else if(Te.__webglFramebuffer===void 0)oe.setupRenderTarget(D);else if(Te.__hasExternalTextures)oe.rebindTextures(D,ne.get(D.texture).__webglTexture,ne.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let $e=D.depthTexture;if(Te.__boundDepthTexture!==$e){if($e!==null&&ne.has($e)&&(D.width!==$e.image.width||D.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(D)}}let Ie=D.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Le=ne.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Le[Y])?ee=Le[Y][re]:ee=Le[Y],te=!0):D.samples>0&&oe.useMultisampledRTT(D)===!1?ee=ne.get(D).__webglMultisampledFramebuffer:Array.isArray(Le)?ee=Le[re]:ee=Le,H.copy(D.viewport),ie.copy(D.scissor),K=D.scissorTest}else H.copy(pe).multiplyScalar(j).floor(),ie.copy(Ae).multiplyScalar(j).floor(),K=rt;if(re!==0&&(ee=F),R.bindFramebuffer(Z.FRAMEBUFFER,ee)&&R.drawBuffers(D,ee),R.viewport(H),R.scissor(ie),R.setScissorTest(K),te){let Te=ne.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Te.__webglTexture,re)}else if(we){let Te=Y;for(let Ie=0;Ie<D.textures.length;Ie++){let Le=ne.get(D.textures[Ie]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Ie,Le.__webglTexture,re,Te)}}else if(D!==null&&re!==0){let Te=ne.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Te.__webglTexture,re)}z=-1};function Lh(D){let Y=ne.get(D);return(Y.__readFormat!==D.format||Y.__readType!==D.type)&&(Y.__readFormat=D.format,Y.__readType=D.type,Y.__formatReadable=k.textureFormatReadable(D.format),Y.__typeReadable=k.textureTypeReadable(D.type)),Y}this.readRenderTargetPixels=function(D,Y,re,ee,te,we,Ce,Te=0){if(!(D&&D.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){R.bindFramebuffer(Z.FRAMEBUFFER,Ie);try{let Le=D.textures[Te],$e=Le.format,et=Le.type;D.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Te);let Pe=Lh(Le);if(Pe.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-ee&&re>=0&&re<=D.height-te&&Z.readPixels(Y,re,ee,te,ve.convert($e),ve.convert(et),we)}finally{let Le=V!==null?ne.get(V).__webglFramebuffer:null;R.bindFramebuffer(Z.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(D,Y,re,ee,te,we,Ce,Te=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(Y>=0&&Y<=D.width-ee&&re>=0&&re<=D.height-te){R.bindFramebuffer(Z.FRAMEBUFFER,Ie);let Le=D.textures[Te],$e=Le.format,et=Le.type;D.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Te);let Pe=Lh(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ft),Z.bufferData(Z.PIXEL_PACK_BUFFER,we.byteLength,Z.STREAM_READ),Z.readPixels(Y,re,ee,te,ve.convert($e),ve.convert(et),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let Pt=V!==null?ne.get(V).__webglFramebuffer:null;R.bindFramebuffer(Z.FRAMEBUFFER,Pt);let yt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Zf(Z,yt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ft),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,we),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ft),Z.deleteSync(yt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,re=0){let ee=Math.pow(2,-re),te=Math.floor(D.image.width*ee),we=Math.floor(D.image.height*ee),Ce=Y!==null?Y.x:0,Te=Y!==null?Y.y:0;oe.setTexture2D(D,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,re,0,0,Ce,Te,te,we),R.unbindTexture()},this.copyTextureToTexture=function(D,Y,re=null,ee=null,te=0,we=0){let Ce,Te,Ie,Le,$e,et,Pe,ft,Pt,yt=D.isCompressedTexture?D.mipmaps[we]:D.image;if(re!==null)Ce=re.max.x-re.min.x,Te=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,Le=re.min.x,$e=re.min.y,et=re.isBox3?re.min.z:0;else{let Rt=Math.pow(2,-te);Ce=Math.floor(yt.width*Rt),Te=Math.floor(yt.height*Rt),D.isDataArrayTexture?Ie=yt.depth:D.isData3DTexture?Ie=Math.floor(yt.depth*Rt):Ie=1,Le=0,$e=0,et=0}ee!==null?(Pe=ee.x,ft=ee.y,Pt=ee.z):(Pe=0,ft=0,Pt=0);let _t=ve.convert(Y.format),qt=ve.convert(Y.type),Re;Y.isData3DTexture?(oe.setTexture3D(Y,0),Re=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(oe.setTexture2DArray(Y,0),Re=Z.TEXTURE_2D_ARRAY):(oe.setTexture2D(Y,0),Re=Z.TEXTURE_2D),R.activeTexture(Z.TEXTURE0),R.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),R.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),R.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);let nn=R.getParameter(Z.UNPACK_ROW_LENGTH),st=R.getParameter(Z.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(Z.UNPACK_SKIP_PIXELS),Bn=R.getParameter(Z.UNPACK_SKIP_ROWS),pi=R.getParameter(Z.UNPACK_SKIP_IMAGES);R.pixelStorei(Z.UNPACK_ROW_LENGTH,yt.width),R.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,yt.height),R.pixelStorei(Z.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(Z.UNPACK_SKIP_ROWS,$e),R.pixelStorei(Z.UNPACK_SKIP_IMAGES,et);let _r=D.isDataArrayTexture||D.isData3DTexture,gt=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){let Rt=ne.get(D),mi=ne.get(Y),xt=ne.get(Rt.__renderTarget),gi=ne.get(mi.__renderTarget);R.bindFramebuffer(Z.READ_FRAMEBUFFER,xt.__webglFramebuffer),R.bindFramebuffer(Z.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let br=0;br<Ie;br++)_r&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ne.get(D).__webglTexture,te,et+br),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ne.get(Y).__webglTexture,we,Pt+br)),Z.blitFramebuffer(Le,$e,Ce,Te,Pe,ft,Ce,Te,Z.DEPTH_BUFFER_BIT,Z.NEAREST);R.bindFramebuffer(Z.READ_FRAMEBUFFER,null),R.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||ne.has(D)){let Rt=ne.get(D),mi=ne.get(Y);R.bindFramebuffer(Z.READ_FRAMEBUFFER,E),R.bindFramebuffer(Z.DRAW_FRAMEBUFFER,U);for(let xt=0;xt<Ie;xt++)_r?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Rt.__webglTexture,te,et+xt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Rt.__webglTexture,te),gt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,mi.__webglTexture,we,Pt+xt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,mi.__webglTexture,we),te!==0?Z.blitFramebuffer(Le,$e,Ce,Te,Pe,ft,Ce,Te,Z.COLOR_BUFFER_BIT,Z.NEAREST):gt?Z.copyTexSubImage3D(Re,we,Pe,ft,Pt+xt,Le,$e,Ce,Te):Z.copyTexSubImage2D(Re,we,Pe,ft,Le,$e,Ce,Te);R.bindFramebuffer(Z.READ_FRAMEBUFFER,null),R.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else gt?D.isDataTexture||D.isData3DTexture?Z.texSubImage3D(Re,we,Pe,ft,Pt,Ce,Te,Ie,_t,qt,yt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(Re,we,Pe,ft,Pt,Ce,Te,Ie,_t,yt.data):Z.texSubImage3D(Re,we,Pe,ft,Pt,Ce,Te,Ie,_t,qt,yt):D.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,we,Pe,ft,Ce,Te,_t,qt,yt.data):D.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,we,Pe,ft,yt.width,yt.height,_t,yt.data):Z.texSubImage2D(Z.TEXTURE_2D,we,Pe,ft,Ce,Te,_t,qt,yt);R.pixelStorei(Z.UNPACK_ROW_LENGTH,nn),R.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,st),R.pixelStorei(Z.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(Z.UNPACK_SKIP_ROWS,Bn),R.pixelStorei(Z.UNPACK_SKIP_IMAGES,pi),we===0&&Y.generateMipmaps&&Z.generateMipmap(Re),R.unbindTexture()},this.initRenderTarget=function(D){ne.get(D).__webglFramebuffer===void 0&&oe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?oe.setTextureCube(D,0):D.isData3DTexture?oe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?oe.setTexture2DArray(D,0):oe.setTexture2D(D,0),R.unbindTexture()},this.resetState=function(){N=0,B=0,V=null,R.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};function L0(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function D0(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}var _2=[],Lu=new Map,b2=0;function Tl(i){_2=i,Lu=new Map(i.flatMap(e=>e.items.map(t=>[x2(e.id,t.id),t]))),b2++}function x2(i,e){return`pack:${i}:${e}`}function y2(i){return i.startsWith("pack:")}var v2={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function U0(i){return Dt(i)?.parts.find(e=>e.screen)}function Dt(i){if(!y2(i))return;let e=Lu.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=v2[t];return r?Lu.get(`pack:${r}:${n.join(":")}`):void 0}function mn(i,e){let t=Dt(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall"||e.type==="lamp_wall_updown")return Ko;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));if(e.type==="fan_ceiling"||e.type==="fan_ceiling_light")return Math.max(0,i.height-Math.max(.05,e.h));if(e.type==="access_point"||e.type==="smoke_detector")return Math.max(0,i.height-Math.max(.02,e.h));if(e.type==="fan_wall")return 1.55;if(e.type==="altar_wall")return 1.45;if(e.type==="floating_shelf")return 1.35;if(e.type==="nightstand_floating")return .48;if(e.type==="water_heater")return 1.7;if(e.type==="range_hood")return 1.35;if(e.type==="microwave")return Sl(i,e.x,e.z);if(e.type==="modem_router"||e.type==="smart_display"||e.type==="monitor_single"||e.type==="monitor_dual")return Sl(i,e.x,e.z);if((e.type==="water_pump"||e.type==="heat_pump_outdoor")&&!i.rooms.some(n=>n.points.length>=3&&ut([e.x,e.z],n.points)))return El(i,e.x,e.z);switch(t?.mount){case"surface":return Sl(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return t?0:Jo(e)}}var Du=new Set(["stairs","stairs_landing","stairs_landing_l","stairs_winder_l","stairs_spiral","stairs_open","stairs_concrete","stairs_compact"]),Al=["motorbike","bicycle_city","bicycle_cargo","scooter","motorcycle_touring","car_sedan","car_hatchback","car_suv","car_pickup","car_van","car_wagon","car_compact","car_electric","car_minibus"],M2={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_panel_round","lamp_pendant","lamp_floor","lamp_uplight","lamp_column","lamp_tv_bars","lamp_table","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_wall","lamp_wall_updown","led_strip","lamp_bollard","lamp_garden","lamp_garden_spots"],living:["sofa","sofa_2","sofa_3","sofa_4","sofa_l","sofa_corner_left","sofa_corner_right","sofa_chesterfield","sofa_velvet_3","sofa_modular_5","sofa_armless","sofa_chaise","sofa_u","sofa_bed","chaise_longue","armchair","club_chair","cocktail_chair","wingback_chair","recliner","rocking_chair","bean_bag","ottoman","stool","chair_upholstered","chair_shell","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","tv_console","lowboard_120","lowboard_160","lowboard_200","tv_board","tv_wall","tv_stand","media_wall_tv","smart_display","smart_speaker","smart_curtain","sideboard","highboard","chest_drawers_3","display_cabinet","shelf","bookshelf_wide","cube_shelf_2x2","cube_shelf_4x2","cube_shelf_4x4","room_divider_shelf","floating_shelf","builtin_shelf_niche","window_seat","room_divider","sliding_wall","wood_stove","fireplace_builtin","fireplace_wall_electric","piano_upright","vase_pampas","plant","plant_monstera","rug","rug_round","altar","altar_table","altar_cabinet","altar_wall"],dining:["table","table_120","table_160","table_200","table_solid_220","table_round","chair","bench","bench_dining_160","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_corner","kitchen_wall","kitchen_tall","kitchen_display","island","worktop","sink","stove","range_hood","microwave","water_purifier","dishwasher","fridge"],sleeping:["bed","bed_single","bed_double","bed_90","bed_140","bed_160","bed_180","bed_200","bed_upholstered_180","bed_boxspring_180","bed_futon_160","bed_canopy","bed_ambient_180","bunk_bed","crib","nightstand","nightstand_drawer","nightstand_slim","nightstand_floating","wardrobe","wardrobe_2door","wardrobe_3door","wardrobe_4door","wardrobe_6door","wardrobe_mirror","wardrobe_corner","wardrobe_sliding","wardrobe_light","closet_walkin","dresser","dresser_80_3","dresser_140_6","chest_tall_5","chest_tall","clothes_rail","vanity","vanity_mirror","vanity_light","bed_bench","changing_table","mirror_floor","reading_nook","alarm_sunrise"],bath:["bathtub","bathtub_builtin","bathtub_corner","bathtub_freestanding","whirlpool_indoor","shower","shower_corner_90","shower_niche_120","shower_walkin_140","rain_shower_led","shower_screen","wc","toilet_close_coupled","toilet_wall_hung","bidet","washbasin","vanity_60","vanity_80","vanity_100","double_vanity_120","pedestal_basin","bathroom_cabinet_tall","bathroom_cabinet_mid","mirror_round_light","mirror_80_light","mirror_cabinet_light","mirror_led_clock","bathroom_wall_shelf","towel_rail","towel_radiator","electric_towel_heater","ladder_shelf_towels","sauna","bathroom_fan","washing_machine_cabinet","washer_vanity","laundry_basket","laundry_cabinet_basket","water_heater","hot_water_tank","washer","dryer","washer_dryer_tower","drying_rack"],climate:["air_conditioner","heat_pump_outdoor","air_purifier","humidifier","radiator","wall_thermostat","temperature_humidity_sensor","ventilation_fan","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor"],outdoor:["security_camera","video_doorbell","smart_lock","water_pump","robot_mower","balcony_solar","hammock","stone_table_set","planter_large","water_tank","gate","fence","gas_grill","lounge_set_outdoor","sun_lounger","parasol","pergola","raised_bed","greenhouse","hot_tub_outdoor","fire_bowl","garden_torch","play_tower_slide","garden_shed","trampoline","flower_pots_3","lawn_sprinkler","irrigation_valve_box","rain_barrel","garden_lantern","outdoor_kitchen","patio_heater","tree_oak","tree_lime","tree_birch","tree_maple","tree_fruit","tree_spruce","tree_pine","tree_thuja","shrub","shrub_flowering","brush_wild","trees_group_3"],work:["desk","desk_l","desk_corner","desk_sit_stand","office_chair","chair_ergonomic","chair_visitor","filing_cabinet","drawer_unit_office","bookcase_office","monitor_single","monitor_dual","pc_tower","worktop","tall_cabinet","coat_rack","shoe_cabinet","shoe_bench","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","network_cabinet","nas_server","modem_router","electrical_panel","ups_unit","access_point","smoke_detector","siren_alarm","stairs","stairs_landing","stairs_landing_l","stairs_winder_l","stairs_spiral","stairs_open","stairs_concrete","stairs_compact","railing_glass","railing_metal","railing_wood","railing_cable","workbench","workbench_pegboard","tool_cabinet","tool_chest","storage_rack_garage","wall_shelf_garage","air_compressor","shop_vacuum","ladder_step","ladder_extension","storage_boxes","tire_stack","bike_rack","repair_stand","parts_bin","utility_sink_garage","charging_bay","robot_vacuum","column_round","column_square","column_steel","ceiling_beams","downstand_beam","chimney_inside","led_niche","light_cove","platform_steps","gallery_railing_glass"],vehicles:[...Al,"parking"]};var Uu=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown"]),N0=new Set([...Uu,"radiator","air_conditioner","water_pump","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","tv_board","tv_wall","tv_stand","media_wall_tv","fireplace_wall_electric","bed_ambient_180","wardrobe_light","alarm_sunrise","vanity_light","mirror_round_light","mirror_80_light","mirror_cabinet_light","electric_towel_heater","bathroom_fan","washer_vanity","rain_shower_led","mirror_led_clock","fireplace_builtin","led_niche","light_cove","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","washer_dryer_tower","balcony_solar","kitchen","island","sink"]),wl={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],vanity_60:[.6,.48,.86],vanity_80:[.8,.5,.86],vanity_100:[1,.52,.86],double_vanity_120:[1.2,.52,.86],pedestal_basin:[.58,.48,.86],bathtub_builtin:[1.7,.75,.58],bathtub_corner:[1.4,1.4,.6],shower_corner_90:[.9,.9,2.05],shower_niche_120:[1.2,.9,2.05],shower_walkin_140:[1.4,.9,2.05],toilet_close_coupled:[.38,.65,.78],toilet_wall_hung:[.38,.54,.42],bidet:[.38,.58,.42],bathroom_cabinet_tall:[.42,.36,1.8],bathroom_cabinet_mid:[.65,.36,1.15],mirror_round_light:[.7,.08,.7],mirror_80_light:[.8,.08,.6],bathroom_wall_shelf:[.7,.22,.5],towel_rail:[.65,.12,.75],bathtub_freestanding:[1.75,.8,.62],sauna:[1.8,1.5,2.1],towel_radiator:[.6,.12,1.2],whirlpool_indoor:[1.8,1.2,.68],washing_machine_cabinet:[.72,.72,2.1],laundry_basket:[.48,.4,.62],ladder_shelf_towels:[.62,.32,1.65],mirror_cabinet_light:[.8,.18,.72],electric_towel_heater:[.62,.12,1.25],bathroom_fan:[.24,.1,.24],washer_vanity:[1.25,.66,.92],rain_shower_led:[.45,.45,2.1],mirror_led_clock:[1,.08,.7],laundry_cabinet_basket:[.75,.58,1.9],column_round:[.3,.3,2.7],column_square:[.3,.3,2.7],column_steel:[.22,.22,2.7],ceiling_beams:[3.2,2.4,.2],downstand_beam:[3,.24,.35],chimney_inside:[.65,.55,2.7],fireplace_builtin:[1.2,.35,1.1],sliding_wall:[2.4,.18,2.35],builtin_shelf_niche:[1.2,.24,1.8],led_niche:[1.2,.16,.5],light_cove:[2.4,.4,.14],platform_steps:[1.8,1.2,.32],gallery_railing_glass:[2,.1,1.05],window_seat:[1.4,.55,.5],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_landing:[2.1,3.2,2.75],stairs_landing_l:[2.8,2.8,2.75],stairs_winder_l:[2.4,2.4,2.75],stairs_spiral:[1.8,1.8,2.75],stairs_open:[1,3.2,2.75],stairs_concrete:[1.1,3.4,2.75],stairs_compact:[.8,2.2,2.75],railing_glass:[2,.1,1.05],railing_metal:[2,.1,1.05],railing_wood:[2,.12,1],railing_cable:[2,.1,1.05],workbench:[1.8,.72,.92],workbench_pegboard:[1.8,.72,1.9],tool_cabinet:[.9,.5,1.9],tool_chest:[1.1,.55,1],storage_rack_garage:[1.8,.55,2],wall_shelf_garage:[1.4,.35,.7],air_compressor:[.9,.48,.75],shop_vacuum:[.5,.5,.75],ladder_step:[.65,1,1.6],ladder_extension:[.55,.18,2.4],storage_boxes:[1.2,.7,.9],tire_stack:[.75,.75,1.05],bike_rack:[1.8,.65,1.25],repair_stand:[.8,.8,1.8],parts_bin:[.8,.32,1.2],utility_sink_garage:[.7,.55,1.1],charging_bay:[1,.45,1.65],desk_l:[1.8,1.6,.75],desk_corner:[1.5,1.5,.75],desk_sit_stand:[1.6,.75,1.15],chair_ergonomic:[.68,.68,1.18],chair_visitor:[.58,.62,.9],filing_cabinet:[.48,.62,1.3],drawer_unit_office:[.45,.55,.65],bookcase_office:[1.2,.36,1.9],monitor_single:[.62,.22,.48],monitor_dual:[1.2,.28,.5],pc_tower:[.26,.48,.52],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],lamp_column:[.12,.12,1.45],lamp_tv_bars:[.65,.16,.38],lamp_orb_table:[.28,.28,.24],lamp_portable:[.24,.24,.26],lamp_ambient_spot:[.2,.2,.2],lamp_cube:[.26,.26,.24],lamp_panel_round:[.42,.42,.045],lamp_garden_spots:[.65,.18,.32],lamp_wall_updown:[.14,.12,.32],radiator:[1,.1,.6],air_conditioner:[1,.22,.3],water_pump:[.55,.4,.45],altar:[1.27,.61,1.53],altar_wall:[.89,.48,.48],shoe_cabinet:[1,.35,1],motorbike:[.72,1.9,1.15],bicycle_city:[.65,1.8,1.15],bicycle_cargo:[.75,2.35,1.2],scooter:[.72,1.85,1.15],motorcycle_touring:[.9,2.25,1.4],car_sedan:[1.82,4.65,1.45],car_hatchback:[1.78,4.15,1.5],car_suv:[1.92,4.65,1.72],car_pickup:[1.95,5.25,1.78],car_van:[1.95,5.05,2.05],car_wagon:[1.84,4.75,1.5],car_compact:[1.7,3.75,1.48],car_electric:[1.86,4.55,1.48],car_minibus:[2,5.4,2.25],fan_ceiling:[1.4,1.4,.32],fan_ceiling_light:[1.4,1.4,.4],fan_wall:[.5,.3,.5],fan_floor:[.45,.45,1.25],water_heater:[.75,.35,.45],drying_rack:[1.6,.6,1.7],shoe_bench:[1,.38,.48],room_divider:[1.6,.3,2.1],range_hood:[.75,.5,.5],microwave:[.5,.4,.3],water_purifier:[.42,.38,1.2],air_purifier:[.32,.32,.65],smart_speaker:[.14,.14,.19],security_camera:[.2,.24,.22],smart_lock:[.1,.08,.32],smart_curtain:[2,.16,2.2],network_cabinet:[.6,.65,1.35],nas_server:[.42,.45,.34],access_point:[.24,.24,.055],wall_thermostat:[.18,.065,.24],smoke_detector:[.15,.15,.055],siren_alarm:[.22,.085,.28],electrical_panel:[.55,.14,.8],ups_unit:[.45,.5,.72],modem_router:[.34,.22,.12],heat_pump_outdoor:[1,.48,.86],hot_water_tank:[.55,.55,1.3],ventilation_fan:[.32,.14,.32],humidifier:[.38,.38,.8],smart_display:[.55,.16,.36],wall_switch:[.09,.045,.09],wall_outlet:[.09,.045,.09],smart_plug:[.1,.08,.12],motion_sensor:[.11,.08,.11],contact_sensor:[.11,.04,.05],water_leak_sensor:[.09,.09,.035],temperature_humidity_sensor:[.1,.045,.1],video_doorbell:[.055,.045,.14],kitchen_corner:[1.25,1.25,.92],kitchen_display:[.8,.42,2.1],vanity:[1,.45,1.55],crib:[.75,1.25,.95],bed_single:[1,2.05,.9],bed_double:[1.8,2.05,.9],bed_90:[.9,2,.88],bed_140:[1.4,2,.9],bed_160:[1.6,2,.92],bed_180:[1.8,2,.95],bed_200:[2,2,.95],bed_upholstered_180:[1.95,2.15,1.05],bed_boxspring_180:[1.9,2.1,1.1],bed_futon_160:[1.7,2.1,.65],wardrobe_2door:[1,.6,2.1],wardrobe_3door:[1.5,.6,2.1],wardrobe_4door:[2,.6,2.1],wardrobe_6door:[3,.6,2.1],wardrobe_mirror:[1.5,.6,2.1],wardrobe_corner:[1.25,1.25,2.1],nightstand_drawer:[.5,.42,.55],nightstand_slim:[.32,.38,.56],nightstand_floating:[.48,.34,.24],dresser_80_3:[.8,.45,.82],dresser_140_6:[1.4,.48,.86],chest_tall_5:[.65,.45,1.2],clothes_rail:[1.2,.5,1.65],bed_canopy:[1.8,2.1,2.15],wardrobe_sliding:[2,.65,2.15],closet_walkin:[2.2,1.4,2.2],vanity_mirror:[1.1,.48,1.55],bed_bench:[1.3,.45,.48],changing_table:[.95,.58,.95],mirror_floor:[.65,.45,1.75],chest_tall:[.75,.48,1.25],reading_nook:[1.2,1,1.15],bed_ambient_180:[1.9,2.1,1],wardrobe_light:[1.5,.62,2.15],alarm_sunrise:[.22,.16,.18],vanity_light:[1.1,.48,1.6],sofa_2:[1.65,.9,.82],sofa_3:[2.15,.92,.82],sofa_4:[2.75,.95,.84],sofa_corner_left:[2.5,1.7,.82],sofa_corner_right:[2.5,1.7,.82],sofa_chesterfield:[2.15,.92,.78],sofa_velvet_3:[2.1,.9,.8],sofa_modular_5:[2.8,1.5,.76],sofa_armless:[1.8,.82,.76],sofa_chaise:[2.35,1.55,.82],sofa_u:[3,1.8,.84],club_chair:[.82,.82,.78],wingback_chair:[.82,.9,1.12],rocking_chair:[.72,1,1.05],chaise_longue:[.82,1.75,.9],cocktail_chair:[.72,.72,.78],recliner:[.85,1.55,1.05],bean_bag:[.85,.85,.72],chair_upholstered:[.5,.56,.92],chair_shell:[.52,.56,.86],ottoman:[.75,.55,.43],tv_console:[1.8,.42,.55],display_cabinet:[1,.42,1.9],cube_shelf_4x4:[1.6,.35,1.6],room_divider_shelf:[1.6,.32,1.9],console_table:[1.2,.35,.78],lowboard_120:[1.2,.42,.5],lowboard_160:[1.6,.42,.5],lowboard_200:[2,.42,.5],highboard:[1.2,.42,1.25],chest_drawers_3:[.9,.45,.82],tv_stand:[1.4,.5,1.45],wood_stove:[.55,.5,1.05],media_wall_tv:[2.4,.42,2.1],piano_upright:[1.45,.62,1.25],vase_pampas:[.5,.5,1.35],plant_monstera:[.7,.7,1.55],rug_round:[1.8,1.8,.01],fireplace_wall_electric:[1.2,.18,.55],table_120:[1.2,.9,.75],table_160:[1.6,.9,.75],table_200:[2,.9,.75],table_solid_220:[2.2,1,.76],bench_dining_160:[1.6,.42,.48],sofa_l:[2.5,1.7,.82],sofa_bed:[2,1.35,.78],shower_screen:[1,.08,1.9],hammock:[2.6,.9,1.2],stone_table_set:[2.2,2.2,.75],planter_large:[.8,.8,1.6],water_tank:[1.25,1.25,1.55],gate:[3.2,.18,1.8],fence:[2.4,.16,1.5],gas_grill:[1.35,.72,1.2],lounge_set_outdoor:[3.2,2.6,.82],sun_lounger:[.76,2,.82],parasol:[2.6,2.6,2.35],pergola:[3.6,3,2.45],raised_bed:[1.8,.9,.72],greenhouse:[2.6,3.4,2.35],hot_tub_outdoor:[2.2,2.2,.9],fire_bowl:[.9,.9,.45],garden_torch:[.28,.28,1.25],play_tower_slide:[2.8,3.8,2.7],garden_shed:[2.4,2,2.35],trampoline:[3,3,2.1],flower_pots_3:[1.25,.6,.75],lawn_sprinkler:[.55,.55,.25],irrigation_valve_box:[.55,.4,.18],rain_barrel:[.75,.75,1.05],garden_lantern:[.32,.32,1],outdoor_kitchen:[2.4,.75,.95],patio_heater:[.82,.82,2.2],tree_oak:[4.2,4.2,6.5],tree_lime:[3.8,3.4,6],tree_birch:[2.4,2.4,6.8],tree_maple:[3.6,3.6,5.4],tree_fruit:[3.2,3.2,4.2],tree_spruce:[3,3,6.2],tree_pine:[3.6,3.6,6.5],tree_thuja:[1.4,1.4,3.2],shrub:[1.6,1.4,1.25],shrub_flowering:[1.5,1.4,1.2],brush_wild:[2.2,1.8,1.1],trees_group_3:[6.5,5.2,6.2],robot_vacuum:[.42,.62,.72],robot_mower:[.85,1.15,.48],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],coffee_table_round:[.9,.9,.42],coffee_table_glass:[1.1,.6,.42],nesting_tables:[1,.65,.46],side_table_round:[.55,.55,.55],bookshelf_wide:[1.6,.35,1.9],cube_shelf_2x2:[.82,.35,.82],cube_shelf_4x2:[1.6,.35,.82],floating_shelf:[1.2,.25,.08],altar_table:[1.07,.56,1.35],altar_cabinet:[1.53,.68,1.62],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],washer_dryer_tower:[.66,.68,1.75],balcony_solar:[1.65,.72,1.05],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Xn(i){return i.kind==="veranda"||i.kind==="balcony"||i.kind==="canopy"}function Rl(i,e){if(i.length<2)return 0;if(e<0){let d=0,f=-1;for(let p=0;p<i.length;p++){let g=i[p],b=i[(p+1)%i.length],_=Math.hypot(b[0]-g[0],b[1]-g[1]);_>f&&([d,f]=[p,_])}return d}let t=i[e],n=i[(e+1)%i.length],r=n[0]-t[0],o=n[1]-t[1],s=Math.hypot(r,o)||1,a=(t[0]+n[0])/2,l=(t[1]+n[1])/2,c=0,h=-1;for(let d=0;d<i.length;d++){if(d===e)continue;let f=i[d],p=i[(d+1)%i.length],g=p[0]-f[0],b=p[1]-f[1],_=Math.hypot(g,b)||1,m=Math.abs((g*r+b*o)/(_*s)),M=Math.abs(r*((f[1]+p[1])/2-l)-o*((f[0]+p[0])/2-a))/s*m;M>h&&([c,h]=[d,M])}return c}var Qr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2},S2={canopy:.02,veranda:.12,balcony:.12};function Qo(i){return S2[i]}function ai(i){return i==="hedge"||i==="fence"||i==="pergola"}function jo(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let d=o(c,h);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function T2(i,e,t,n){return li(i)+(e.offset??0)+Qr[e.type]-jo(e,t,n)}function li(i){return i.elevation>.3?0:-.2}function El(i,e,t){let n=(i.outdoor??[]).filter(o=>!ai(o.type)&&o.type!=="pool"&&ut([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?T2(i,r,e,t):li(i)}var w2={type:"none",pitch:35,overhang:.4},kA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...w2}};var Ko=1.75;function B0(i){return Uu.has(i)||!!Dt(i)?.light}var E2=new Set(["table","table_round","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","lowboard_120","lowboard_160","lowboard_200","table_120","table_160","table_200","table_solid_220","tv_console","desk","desk_l","desk_corner","desk_sit_stand","nightstand","nightstand_drawer","nightstand_slim","nightstand_floating","vanity_mirror","vanity_light","changing_table","vanity_60","vanity_80","vanity_100","double_vanity_120","bathroom_cabinet_mid","bathroom_wall_shelf","washer_vanity","builtin_shelf_niche","window_seat","platform_steps","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Jo(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"floating_shelf":return 1.35;case"wall_shelf_garage":return 1.25;case"nightstand_floating":return .48;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;case"wall_thermostat":return 1.35;case"siren_alarm":return 1.85;case"electrical_panel":return .85;case"ventilation_fan":return 1.8;case"wall_switch":return 1.05;case"wall_outlet":case"smart_plug":return .3;case"motion_sensor":return 1.9;case"contact_sensor":return 1.1;case"temperature_humidity_sensor":return 1.35;case"video_doorbell":return 1.25;default:return 0}}function Sl(i,e,t){let n=0;for(let r of i.furniture)!(E2.has(r.type)||Dt(r.type)?.surface)||!ut([e,t],Cl(r))||(n=Math.max(n,r.h));return n}var A2=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],R2=["standard","bars","glass_wall"];function sr(i,e){return i.type==="door"?i.style&&A2.includes(i.style)?i.style:e?"front":"interior":i.style&&R2.includes(i.style)?i.style:"standard"}function O0(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function k0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function ar(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function es(i){return Math.abs(ar(i))}function z0(i){let e=ar(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function V0(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function G0(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function Cl(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function ut(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}var Wt=(i,e)=>[i[0]-e[0],i[1]-e[1]],Bi=(i,e)=>[i[0]+e[0],i[1]+e[1]],ci=(i,e)=>[i[0]*e,i[1]*e],is=(i,e)=>i[0]*e[0]+i[1]*e[1],ts=(i,e)=>i[0]*e[1]-i[1]*e[0],ns=i=>Math.hypot(i[0],i[1]),ui=i=>{let e=ns(i)||1;return[i[0]/e,i[1]/e]},H0=i=>[-i[1],i[0]],W0=i=>[i[1],-i[0]];function rs(i,e,t=[]){let n=e.eps??.005,r=[],o=i.filter(x=>!Xn(x)),s=t.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),a=[],l=x=>{for(let T=0;T<a.length;T++)if(Math.abs(a[T][0]-x[0])<=n&&Math.abs(a[T][1]-x[1])<=n)return T;return a.push([x[0],x[1]]),a.length-1},c=[];for(let x of o){let T=x.points;if(T.length<3||Math.abs(ar(T))<1e-6)continue;let C=ar(T)>0,P=T.map(l);for(let L=0;L<T.length;L++){let F=P[L],E=P[(L+1)%T.length];F!==E&&c.push(C?{u:F,v:E,room:x.id,edge:L,forward:!0}:{u:E,v:F,room:x.id,edge:L,forward:!1})}}let h=s.map(x=>[l(x.a),l(x.b)]),d=new Set;for(let x of o){let T=x.points;T.length<3||(x.wall_splits??[]).forEach((C,P)=>{if(!C||P>=T.length)return;let L=T[P],F=Wt(T[(P+1)%T.length],L),E=ns(F);for(let U of C)U>n&&U<E-n&&d.add(l(Bi(L,ci(F,U/E))))})}let f=[];for(let x of c){let T=a[x.u],C=a[x.v],P=Wt(C,T),L=ns(P),F=ci(P,1/L),E=[];for(let N=0;N<a.length;N++){if(N===x.u||N===x.v)continue;let B=Wt(a[N],T),V=is(B,F);V<=n||V>=L-n||Math.abs(ts(F,B))<=n&&E.push({t:V,id:N})}E.sort((N,B)=>N.t-B.t);let U=[{t:0,id:x.u},...E,{t:L,id:x.v}];for(let N=0;N+1<U.length;N++){let B=U[N],V=U[N+1],z=x.forward?B.t:L-V.t,W=x.forward?V.t:L-B.t;f.push({u:B.id,v:V.id,room:x.room,edge:x.edge,t0:z,t1:W})}}let p=new Map;for(let x of f){let T=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,C=p.get(T);C||p.set(T,C=[]),C.push(x)}let g=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),b=new Map;for(let x of f){let T=`${x.room}:${x.edge}`;b.set(T,[...b.get(T)??[],x.t0].sort((C,P)=>C-P))}let _=x=>{let T=o.find(P=>P.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray(T))return T;let C=b.get(`${x.room}:${x.edge}`)??[];return T[C.indexOf(x.t0)]??null},m=x=>{let T=x.map(_).filter(C=>typeof C=="number"&&C>0);return T.length?Math.min(...T):void 0},y=x=>{let T=x.map(C=>o.find(P=>P.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return T.length?Math.max(...T):void 0},M=x=>x.some(T=>_(T)===0),v=[],S=[];for(let x of p.values()){let T=x[0],C=x.find(P=>P!==T&&P.u===T.v&&P.v===T.u&&P.room!==T.room);for(let P of x)P!==T&&P!==C&&P.room!==T.room&&r.push(`overlap:${T.room}:${P.room}`);if(M(C?[T,C]:[T])){C&&v.push([T.room,C.room]);continue}if(C){let P=y([T,C])??e.interior;S.push({a:T.u,b:T.v,left:P/2,right:P/2,exterior:!1,roomLeft:T.room,roomRight:C.room,sources:[g(T),g(C)],height:m([T,C])})}else S.push({a:T.u,b:T.v,left:0,right:y([T])??e.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[g(T)],height:m([T])})}s.forEach((x,T)=>{let[C,P]=h[T];if(C===P)return;let L=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],F=i.find(N=>N.points.length>=3&&ut(L,N.points))?.id??null,E=(x.thickness??e.interior)/2,U=typeof x.height=="number"&&x.height>0?x.height:void 0;S.push({free:x.id,a:C,b:P,left:E,right:E,exterior:!1,roomLeft:F,roomRight:F,sources:[],height:U})}),S=I2(S,a,d);let w=F2(S,a);return{walls:S.map((x,T)=>{let C=a[x.a],P=a[x.b],L=w.get(`${T}:a`),F=w.get(`${T}:b`),E=L2([L.right,F.left,P,F.right,L.left,C],1e-6);return{id:C2(C,P),a:[C[0],C[1]],b:[P[0],P[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:E,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{}}}),warnings:[...new Set(r)],open:v}}function C2(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function X0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function I2(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=X0(l)),c.a!==s&&(c=X0(c)),l.a===c.b)continue;let h=ui(Wt(e[l.b],e[l.a])),d=ui(Wt(e[c.b],e[c.a]));if(Math.abs(ts(h,d))>1e-6||is(h,d)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:P2(l.sources,c.sources)},p=n.filter((g,b)=>b!==a[0]&&b!==a[1]);p.push(f),n.length=0,n.push(...p),r=!0;break}}return n}function P2(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function F2(i,e){let t=new Map;i.forEach((r,o)=>{let s=ui(Wt(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:ci(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=t.get(l);h||t.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:Bi(s,ci(H0(c.d),c.left)),right:Bi(s,ci(W0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],d=o[(c+1)%o.length],f=Bi(s,ci(H0(h.d),h.left)),p=Bi(s,ci(W0(d.d),d.right)),g=ts(h.d,d.d);if(Math.abs(g)<1e-4)continue;let b=ts(Wt(p,f),d.d)/g,_=Bi(f,ci(h.d,b));ns(Wt(_,s))>l||(n.get(h.key).left=_,n.get(d.key).right=_)}}return n}function L2(i,e){let t=i.filter((r,o)=>ns(Wt(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Wt(s,o),c=Wt(a,s);if(Math.abs(ts(ui(l),ui(c)))<1e-7&&is(l,c)>0){t=t.filter((h,d)=>d!==r),n=!0;break}}}return t}function Y0(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=ui(Wt(r,n));return Bi(n,ci(o,t))}function q0(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=ui(Wt(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Bi(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function $0(i,e,t){if(!e.wall)return D2(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=Y0(t.room,0,e.offset);return{wall:n,s:is(Wt(r,n.a),ui(Wt(n.b,n.a)))}}function D2(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Y0(e,t,n);return{wall:r,s:is(Wt(s,r.a),ui(Wt(r.b,r.a)))}}return null}var ss=Math.PI/180;function Yn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(o,s)=>[i.flip?t-s:e+s,o]}}function Ln(i){let e=Yn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ss),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ss);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=Q0(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}var U2=.14;function K0(i,e,t){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let o of i.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),c=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||o.points&&o.points.length>=3&&!ut([e,t],o.points))continue;let[h,d]=Oi(o,e,t),f=o.shape==="flat"||o.shape==="parapet",p=Math.max(0,o.overhang??r),b=((f?null:ls(eo(o,{u0:p,u1:p,a:p,b:p}),h,d))??Ln(o).y(d))-U2;n=n===null?b:Math.max(n,b)}return n}function as(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=es(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=Z0([a[0]-s[0],a[1]-s[1]]),h=Z0([l[0]-a[0],l[1]-a[1]]),d=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],p=d[0]+f[0],g=d[1]+f[1],b=Math.hypot(p,g);if(b<1e-6){r.push([a[0]+d[0]*e,a[1]+d[1]*e]);continue}let _=(p*d[0]+g*d[1])/b,m=Math.min(4,1/Math.max(.25,_));r.push([a[0]+p/b*e*m,a[1]+g/b*e*m])}return r}function Z0(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function J0(i,e){if(i.points&&i.points.length>=3)return as(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,o],[t,o]]}var os=Math.tan(30*ss);function Q0(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+os*(i-s+o))/(2*os))),h=a+(c-o)*os;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?e+f*n:f<=c?a+(f-o)*os:f<=i-s?l+(i-s-f)*os:t+(i-f)*r}}function eo(i,e){let t=Yn(i),n=Ln(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(y,M)=>[y,M,n.y(M)],h=c(a,-o),d=c(l,-o),f=c(l,r+s),p=c(a,r+s),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ss),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ss);if(i.shape==="pent"){let y=[h,d,f,p];return{faces:[y],rim:y,ridges:[[f,p]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let y=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),M=[t.u0+y,n.vr,n.rh],v=[t.u1-y,n.vr,n.rh],S=i.shape==="pyramid"?[[h,d,M],[d,f,M],[f,p,M],[p,h,M]]:[[h,d,v,M],[M,v,f,p],[p,h,M],[d,f,v]],w=i.shape==="pyramid"?[[h,M],[p,M],[d,M],[f,M]]:[[M,v],[h,M],[p,M],[d,v],[f,v]];return{faces:S,rim:[h,d,f,p],ridges:w,gable:null}}if(i.shape==="halfhip"){let y=Math.min(n.y(0),n.y(r)),M=y+(n.rh-y)*.55,v=g>1e-6?Math.min(n.vr,(M-i.eave_a)/g):n.vr,S=b>1e-6?Math.max(n.vr,r-(M-i.eave_b)/b):n.vr,w=Math.min((t.u1-t.u0)/2-.1,(n.rh-M)/Math.max(.2,g)),A=[t.u0+w,n.vr,n.rh],x=[t.u1-w,n.vr,n.rh],T=[a,v,M],C=[a,S,M],P=[l,v,M],L=[l,S,M];return{faces:[[h,d,P,x,A,T],[A,x,L,f,p,C],[C,T,A],[P,L,x]],rim:[h,d,P,L,f,p,C,T],ridges:[[A,x],[T,A],[C,A],[P,x],[L,x]],gable:[[0,n.y(0)],[v,M],[S,M],[r,n.y(r)]]}}if(i.shape==="mansard"){let y=Q0(r,i.eave_a,i.eave_b,g,b),M=[a,y.vla,y.yla],v=[l,y.vla,y.yla],S=[a,r-y.vlb,y.ylb],w=[l,r-y.vlb,y.ylb],A=[a,y.vr,y.rh],x=[l,y.vr,y.rh];return{faces:[[h,d,v,M],[M,v,x,A],[A,x,w,S],[S,w,f,p]],rim:[h,d,v,x,w,f,p,S,A,M],ridges:[[A,x],[M,v],[S,w]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[r-y.vlb,y.ylb],[r,n.y(r)]]}}let _=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[h,d,m,_],[_,m,f,p]],rim:[h,d,m,f,p,_],ridges:[[_,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function ls(i,e,t){let n=null;for(let r of i.faces){if(!ut([e,t],r.map(y=>[y[0],y[1]])))continue;let[o,s]=r,a=r.slice(2).find(y=>Math.abs((s[0]-o[0])*(y[1]-o[1])-(s[1]-o[1])*(y[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],d=a[0]-o[0],f=a[2]-o[2],p=a[1]-o[1],g=c*p-h*f,b=h*d-l*p,_=l*f-c*d;if(Math.abs(b)<1e-9)continue;let m=o[2]-(g*(e-o[0])+_*(t-o[1]))/b;n=n===null?m:Math.min(n,m)}return n}function Oi(i,e,t){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?s-t:t-o]:[t,i.flip?r-e:e-n]}function N2(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Nu(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=N2(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function Bu(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Yn(e),n=Ln(e).rh,r=eo(i,{u0:0,u1:0,a:0,b:0}),o=Ln(i),s=g=>{let[b,_]=t.at(g,t.w/2),[m,y]=Oi(i,b,_);return ls(r,m,y)??o.y(y)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,h=a?1:-1,d=Math.abs(c-l),f=c;for(let g=.5;g<d;g+=.05)if(s(l+h*g)>=n-.02){f=l+h*g;break}if(Math.abs(f-c)<.05)return e;let p={...e};return e.axis==="x"?c===t.u1?p.x1=f:p.x0=f:c===t.u1?p.z1=f:p.z0=f,p}function j0(i,e){let t=Bu(i,e),n=Yn(t),r=Ln(t),o=eo(i,{u0:0,u1:0,a:0,b:0}),s=Ln(i),a=f=>{let[p,g]=n.at(f,n.w/2),[b,_]=Oi(i,p,g);return ls(o,b,_)??s.y(_)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],d=Math.max(1,Math.ceil(c/.15));for(let f=0;f<d;f++){let p=c*f/d,g=c*(f+1)/d,b=l?n.u0+p:n.u1-p,_=l?n.u0+g:n.u1-g,m=a(_),y=1/0,M=-1/0;for(let x=0;x<=40;x++){let T=n.w*x/40;r.y(T)>m+.02&&(y=Math.min(y,T),M=Math.max(M,T))}if(!(M-y>.05))continue;let v=n.at(b,y),S=n.at(_,M),w=Oi(i,v[0],v[1]),A=Oi(i,S[0],S[1]);h.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return h}function jr(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let d=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*d,a[1]+(l[1]-a[1])*d,a[2]+(l[2]-a[2])*d])}}return o}function ed(i,e){let t=jr(i,0,e.u0,!0),n=jr(i,0,e.u1,!1),r=jr(jr(i,0,e.u0,!1),0,e.u1,!0),o=jr(r,1,e.v0,!0),s=jr(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(es(a.map(l=>[l[0],l[1]])))>1e-6)}function Il(i,e,t){let n=Yn(e),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(h=>r.some(d=>ut(h,d.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function td(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}var Dn=1e-4;function Ou(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function nd(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>Dn&&a<1-Dn&&l>-Dn&&l<1+Dn?a:null}function ku(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=Dn||s>=1-Dn?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<Dn?s:null}function B2(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if(nd(n,r,s,a)!==null||ku(s,n,r)!==null||ku(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Dn)return!0}}return ut(i[0],e)||ut(e[0],i)}function O2(i){let e=i.map(o=>Ou(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];e.forEach((d,f)=>{if(f!==s)for(let p=0;p<d.length;p++){let g=d[p],b=d[(p+1)%d.length],_=nd(l,c,g,b)??ku(g,l,c);_!==null&&h.push(_)}}),h.sort((d,f)=>d-f);for(let d=1;d<h.length;d++){if(h[d]-h[d-1]<Dn)continue;let f=[l[0]+(c[0]-l[0])*h[d-1],l[1]+(c[1]-l[1])*h[d-1]],p=[l[0]+(c[0]-l[0])*h[d],l[1]+(c[1]-l[1])*h[d]],g=Math.hypot(p[0]-f[0],p[1]-f[1]),b=[(f[0]+p[0])/2+(p[1]-f[1])/g*.001,(f[1]+p[1])/2-(p[0]-f[0])/g*.001];e.some((_,m)=>m!==s&&ut(b,_))||t.some(([_,m])=>Math.hypot(_[0]-f[0],_[1]-f[1])<Dn&&Math.hypot(m[0]-p[0],m[1]-p[1])<Dn)||t.push([f,p])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([h],d)=>!r.has(d)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&Ou(s)>1e-6&&n.push(s)}return n}function zu(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&B2(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:O2(o))}function k2(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function id(i,e,t=.03){return i.every(n=>ut(n,e)||e.some((r,o)=>k2(n,r,e[(o+1)%e.length])<=t))}function rd(i,e){let t=Ou(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}var lr=He(3662079,.95),Vu=He(3662079,1),ki=He(5995775,.34),od=He(5995775,.22),Pl=[-.55,.83],Xe=-1,Fl=16,cr=32,sd=48,Gu=64,ct=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,o=r,s=r,a,l=Xe,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Qe;return e.setAttribute("position",new Ge(this.p,3)),e.setAttribute("color",new Ge(this.c,3)),e.setAttribute("fold",new Ge(this.f,1)),this.uv&&e.setAttribute("uv",new Ge(this.uv,2)),this.tile&&e.setAttribute("tile",new Ge(this.tile,2)),e.computeBoundingSphere(),e}},Vt=class{p=[];c=[];f=[];seg(e,t,n=lr,r=Xe){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Xe);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Xe),this.seg(c,a,n,o)}geometry(){let e=new Qe;return e.setAttribute("position",new Ge(this.p,3)),e.setAttribute("color",new Ge(this.c,3)),e.setAttribute("fold",new Ge(this.f,1)),e}};function ad(i,e,t,n){let o=i.uv?2:0,s=(d,f)=>{let p=d*3+f;return{p:i.p.slice(p*3,p*3+3),c:i.c.slice(p*3,p*3+3),uv:i.uv?i.uv.slice(p*2,p*2+2):null,tile:i.tile?i.tile.slice(p*2,p*2+2):null}},a=(d,f,p)=>({p:d.p.map((g,b)=>g+(f.p[b]-g)*p),c:d.c.map((g,b)=>g+(f.c[b]-g)*p),uv:d.uv&&f.uv?d.uv.map((g,b)=>g+(f.uv[b]-g)*p):null,tile:d.tile}),l=(d,f,p)=>{for(let g=0;g<3;g++){let b=d*3+g;for(let _=0;_<3;_++)i.p[b*3+_]=f[g].p[_],i.c[b*3+_]=f[g].c[_];if(i.uv&&f[g].uv)for(let _=0;_<o;_++)i.uv[b*2+_]=f[g].uv[_];if(i.tile&&f[g].tile)for(let _=0;_<2;_++)i.tile[b*2+_]=f[g].tile[_];i.f[b]=p}},c=(d,f)=>{let p=i.p.length/9;for(let g of d)i.p.push(...g.p),i.c.push(...g.c),i.f.push(f),i.uv?.push(...g.uv??[.5,.5]),i.tile?.push(...g.tile??[0,1]);return p},h=i.p.length/9;for(let d=e;d<h;d++){let f=[s(d,0),s(d,1),s(d,2)],p=f.map(x=>x.p[1]>t+1e-6),g=f.map(x=>x.p[1]<t-1e-6);if(!p.some(Boolean))continue;if(!g.some(Boolean)){for(let x=0;x<3;x++)i.f[d*3+x]=n;continue}let b=i.f[d*3],_=(x,T)=>a(x,T,(t-x.p[1])/(T.p[1]-x.p[1])),m=p.filter(Boolean).length,y=m===1?p.indexOf(!0):p.indexOf(!1),M=f[y],v=f[(y+1)%3],S=f[(y+2)%3],w=_(M,v),A=_(S,M);m===1?(l(d,[M,w,A],n),c([w,v,S],b),c([w,S,A],b)):(l(d,[M,w,A],b),c([w,v,S],n),c([w,S,A],n))}}function ld(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(t-l[1])/(c[1]-l[1]),d=[l[0]+(c[0]-l[0])*h,t,l[2]+(c[2]-l[2])*h];for(let p=0;p<3;p++)i.p[o*6+p]=l[p],i.p[o*6+3+p]=d[p];let f=i.c.slice(o*6,o*6+3);i.p.push(...d,...c),i.c.push(...f,...f),i.f.push(n,n)}}var it=Math.PI/180;function He(i,e){let t=new ae(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function z2(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function to(i,e=[]){let t=i.map(([n,r])=>new Je(n,r));return Io.triangulateShape(t,e.map(n=>n.map(([r,o])=>new Je(r,o))))}function cd(i,e,t,n,r,o,s){let a=new ae(s),l=p=>.5+.5*Math.min(1,Math.max(0,p/1.6));for(let p=0;p<4;p++){let g=e[p],b=e[(p+1)%4],_=t[p],m=t[(p+1)%4],y=b[0]-g[0],M=b[1]-g[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Pl[0]-y/v*Pl[1]+1)/2),A=(_[0]+m[0]-g[0]-b[0])/2*(-M/v)+(_[1]+m[1]-g[1]-b[1])/2*(y/v),x=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),T=He(o,l(n)*w).lerp(a,x),C=He(o,l(r)*w).lerp(a,x);i.tri([g[0],n,g[1]],[_[0],r,_[1]],[m[0],r,m[1]],T,C,C),i.tri([g[0],n,g[1]],[m[0],r,m[1]],[b[0],n,b[1]],T,C,T)}let[c,h,d,f]=t;Math.hypot(d[0]-c[0],d[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[d[0],r,d[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[d[0],r,d[1]],a))}function ud(i,e,t,n,r,o,s,a,l,c){let h=new ae(l),d=[];for(let p=0;p<c;p++){let g=p/c*Math.PI*2;d.push({y:o+Math.cos(g)*s,s:r+Math.sin(g)*s})}let f=(p,g)=>{let b=e(p,d[g%c].s);return[b[0],d[g%c].y,b[1]]};for(let p=0;p<c;p++){let g=(p+.5)/c*Math.PI*2,b=He(a,.62+.4*Math.max(0,Math.cos(g)));i.tri(f(t,p),f(n,p+1),f(n,p),b),i.tri(f(t,p),f(t,p+1),f(n,p+1),b)}for(let p of[t,n]){let g=e(p,r),b=[g[0],o,g[1]];for(let _=0;_<c;_++)i.tri(b,f(p,_),f(p,_+1),h)}}function mt(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:g=>Math.max(t+.002,n(g[0],g[1])),l=s.aoFrom??t,c=s.fold??Xe,h=g=>.5+.5*Math.min(1,Math.max(0,(g-l)/1.6)),d=(s.holes??[]).map(g=>z2(g)>0?[...g].reverse():g),f=d.length?[...e,...d.flat()]:e,p=s.topFace===!1&&!s.bottom?[]:to(e,d);if(s.topFace!==!1){let g=new ae(o);for(let[b,_,m]of p){let y=f[b],M=f[_],v=f[m];i.tri([y[0],a(y),y[1]],[v[0],a(v),v[1]],[M[0],a(M),M[1]],g,g,g,void 0,s.topFold??c)}}if(s.bottom){let g=He(r,.55);for(let[b,_,m]of p){let y=f[b],M=f[_],v=f[m];i.tri([y[0],t,y[1]],[M[0],t,M[1]],[v[0],t,v[1]],g,g,g,void 0,c)}}for(let g of[e,...d])for(let b=0;b<g.length;b++){let _=g[b],m=g[(b+1)%g.length],y=m[0]-_[0],M=m[1]-_[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Pl[0]-y/v*Pl[1]+1)/2),A=a(_),x=a(m),T=He(r,h(t)*w),C=He(r,h(A)*w),P=He(r,h(x)*w);i.tri([_[0],t,_[1]],[_[0],A,_[1]],[m[0],x,m[1]],T,C,P,void 0,c),i.tri([_[0],t,_[1]],[m[0],x,m[1]],[m[0],t,m[1]],T,P,T,void 0,c)}}var u={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},I=He(5995775,.3),O=He(5995775,.17),G=He(3662079,.45),qn=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=Wu(n)}rotated(e,t,n){let r=n*it,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];mt(this.buf,Hu(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Hu(l)&&(l.reverse(),c.reverse()),cd(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,h);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,h),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,h=12,d=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let p=(r+o)/2,g=e==="x"?t:n,b=e==="x"?n:t,_=(y,M)=>e==="x"?this.tf(y,M):this.tf(M,y),m=this.buf.p.length;if(ud(this.buf,_,g-s/2,g+s/2,b,p,f,l,c,h),this.mirrored&&ur(this.buf,m),d)for(let y of[g-s/2,g+s/2])for(let M=0;M<h;M++){let v=M/h*Math.PI*2,S=(M+1)/h*Math.PI*2;this.line(_(y,b+Math.sin(v)*f),_(y,b+Math.sin(S)*f),p+Math.cos(v)*f,p+Math.cos(S)*f,d)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let h=[];for(let d=0;d<l;d++){let f=d/l*Math.PI*2;h.push(this.tf(e+Math.cos(f)*n,t+Math.sin(f)*n))}if(mt(this.buf,Hu(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let d=0;d<l;d++)this.line(h[d],h[(d+1)%l],o,o,c)}tubeYZ(e,t,n,r,o=8,s=null){if(t.length<2||n<1e-4)return;let a=t.map(([d,f],p)=>{let g=t[Math.max(0,p-1)],b=t[Math.min(t.length-1,p+1)],_=b[0]-g[0],m=b[1]-g[1],y=Math.hypot(_,m)||1;return Array.from({length:o},(M,v)=>{let S=v/o*Math.PI*2,w=this.tf(e+Math.cos(S)*n,f+_/y*Math.sin(S)*n);return[w[0],d-m/y*Math.sin(S)*n,w[1]]})}),l=this.buf.p.length,c=new ae(r);for(let d=0;d<a.length-1;d++)for(let f=0;f<o;f++){let p=(f+1)%o;this.buf.tri(a[d][f],a[d+1][f],a[d+1][p],c),this.buf.tri(a[d][f],a[d+1][p],a[d][p],c)}let h=(d,f)=>{let p=this.tf(e,t[d][1]),g=[p[0],t[d][0],p[1]];for(let b=0;b<o;b++){let _=(b+1)%o;this.buf.tri(g,a[d][f?_:b],a[d][f?b:_],c)}};if(h(0,!0),h(t.length-1,!1),this.mirrored&&ur(this.buf,l),s)for(let d=0;d<t.length-1;d++)this.seg(e,t[d][0],t[d][1],e,t[d+1][0],t[d+1][1],s)}seg(e,t,n,r,o,s,a=I){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,Xe)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o];this.line(s,e[(o+1)%4],n,n,r),this.line(s,s,t,n,r)}}};function Wu(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Hu(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function ur(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s;[n[a],n[l]]=[n[l],n[a]]}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function Gt(i,e,t,n,r,o,s=u.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let h of[-1,1])for(let d of[-1,1]){let f=h*l,p=d*c;a?i.loft([f-r*.3,f+r*.3,p-r*.3,p+r*.3],[f-r/2,f+r/2,p-r/2,p+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,p-r/2,p+r/2,s)}}function hr(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let h=1;h<s;h++){let d=e+c*h;i.seg(d,n,o,d,r,o,O)}for(let h=0;h<s;h++){let d=e+c*(h+.5),f=a??r-.08;if(l)i.seg(d-Math.min(.1,c/4),f,o+.012,d+Math.min(.1,c/4),f,o+.012,G);else{let p=s>1?d+(h%2?-c/2+.06:c/2-.06):d+c/2-.06;i.seg(p,f-.08,o+.012,p,f+.08,o+.012,G)}}}function ln(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,u.body,u.bodyTop,I),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,u.dark),hr(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function $n(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,G)}}var Ll=.12,Dl=1.9;function V2(i,e,t,n){let r=Ll;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,u.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,u.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,u.white,u.whiteTop,I);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,O)}}function G2(i,e,t,n){let r=Dl,o=t/2;i.box(-e*.34,-e*.27,r+n*.2,r+n*.75,-t/2-.015,-t/2+.025,u.metal),i.box(e*.27,e*.34,r+n*.2,r+n*.75,-t/2-.015,-t/2+.025,u.metal),i.box(-e/2,e/2,r,r+n,-t/2,o,u.white,u.whiteTop,I),i.seg(-e*.42,r+n*.82,o+.003,e*.42,r+n*.82,o+.003,O);let s=r+n*.08,a=r+n*.27;i.box(-e*.43,e*.43,s,a,o-.018,o+.006,u.dark,u.dark,O),i.seg(-e*.42,s+n*.04,o+.009,e*.42,a-n*.025,o+.009,G);for(let l=1;l<8;l++){let c=-e*.4+e*.8*(l/8);i.seg(c,s+n*.025,o+.011,c+e*.018,a-n*.025,o+.011,O)}i.seg(e*.37,r+n*.67,o+.006,e*.4,r+n*.67,o+.006,G)}function H2(i,e,t,n){let r=Math.min(.045,n*.12),o=Math.min(e*.42,n*.48),s=r+n*.13,a=s+o;for(let p of[-e*.32,e*.32])i.box(p-e*.055,p+e*.055,0,r,-t*.34,t*.3,u.dark);i.box(-e*.43,e*.43,r,r+n*.06,-t*.4,t*.36,u.metal,u.metal,I),i.lyingCyl("z",0,-t*.13,s,a,t*.46,o,u.body,u.bodyTop,14,I),i.lyingCyl("z",0,-t*.39,s+o*.08,a-o*.08,t*.1,o*.84,u.dark,u.metal,12,O);for(let p=-2;p<=2;p++){let g=-t*.23+p*t*.055;i.box(-o*.54,o*.54,s+o*.43,s+o*.57,g-t*.012,g+t*.012,u.metal,u.metal)}let l=Math.min(e*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,t*.17,c,c+l,t*.22,l,u.accent,u.bodyTop,16,I),i.lyingCyl("z",0,t*.39,c+l*.34,c+l*.66,t*.22,l*.32,u.metal,u.dark,12,G);let h=e*.16,d=t*.13,f=Math.min(e,t)*.075;i.cyl(h,d,f*1.35,c+l*.72,c+l*.82,u.accent,u.accent,12,I),i.cyl(h,d,f,c+l*.82,n,u.metal,u.metal,12,G),i.box(-e*.11,e*.11,c+l*.58,c+l*.72,t*.285,t*.3,u.dark,u.dark,G)}function hd(i,e,t,n){let r=n*.18,o=Math.min(e,t);i.cyl(0,0,o*.105,r,n*.34,u.dark,u.bodyTop,18,G),i.cyl(0,0,o*.035,n*.3,n*.76,u.metal,u.bodyTop,10,I),i.cyl(0,0,o*.075,n*.74,n*.94,u.body,u.bodyTop,16,I),i.cyl(0,0,o*.095,n*.92,n,u.body,u.bodyTop,16,O)}function W2(i,e,t,n){i.loft([-e*.4,e*.4,-t*.33,t*.33],[-e*.34,e*.34,-t*.28,t*.28],0,n*.045,u.body,u.metal,I),i.cyl(0,0,Math.min(e,t)*.055,n*.04,n*.62,u.metal,u.metal,10),i.box(-e*.13,e*.13,n*.06,n*.14,-t*.2,t*.2,u.body,u.bodyTop,O);for(let a of[-e*.07,0,e*.07])i.cyl(a,t*.12,e*.018,n*.14,n*.155,u.accent,u.accent,8,G);let r=n*.78,o=Math.min(e,n*.42)*.46,s=t*.075;i.box(-e*.085,e*.085,n*.58,r-o*.18,-t*.1,t*.015,u.body,u.bodyTop,I),i.lyingCyl("z",0,-t*.11,r-o*.3,r+o*.3,t*.24,o*.6,u.body,u.bodyTop,16,I);for(let a of[-s,s]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*o*.18,r+Math.sin(c)*o*.18,a,Math.cos(c)*o,r+Math.sin(c)*o,a,O)}$n(i,0,r,o,a,32),$n(i,0,r,o*.86,a,32),$n(i,0,r,o*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*o,c=r+Math.sin(a)*o;i.seg(l,c,-s,l,c,s,I)}}function X2(i,e,t,n){let r=n*.5,o=Math.min(e,n)*.46,s=t*.16;i.box(-e*.15,e*.15,n*.28,n*.72,-t/2,-t*.4,u.body,u.bodyTop,I),i.box(-e*.06,e*.06,r-n*.06,r+n*.06,-t*.42,-t*.18,u.metal,u.metal,I),i.lyingCyl("z",0,-t*.12,r-o*.3,r+o*.3,t*.24,o*.6,u.body,u.bodyTop,16,I);for(let a of[-s,s]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*o*.18,r+Math.sin(c)*o*.18,a,Math.cos(c)*o,r+Math.sin(c)*o,a,O)}$n(i,0,r,o,a,32),$n(i,0,r,o*.86,a,32),$n(i,0,r,o*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*o,c=r+Math.sin(a)*o;i.seg(l,c,-s,l,c,s,I)}}function cs(i,e,t,n,r,o,s=null){if(t==="fan_ceiling"||t==="fan_ceiling_light"){let g=new qn(i,e,(y,M)=>[y,M]),b=Math.min(n,r),_=b*.115,m=s==="3"?3:s==="4"?4:5;for(let y=0;y<m;y++){let M=y/m*360;g.rotated(0,0,M).loft([b*.08,b*.48,-_*.42,_*.42],[b*.105,b*.465,-_*.52,_*.52],0,o*.06,u.fabric,u.fabricTop,I)}g.cyl(0,0,b*.115,-o*.025,o*.07,u.dark,u.bodyTop,18,G);return}let a=Math.min(n,o*.42)*.46,l=-Math.max(.006,r*.012),c=-l,h=new ae(u.bodyTop),d=new ae(u.body),f=(g,b)=>[Math.cos(b)*g,Math.sin(b)*g];for(let g=0;g<3;g++){let b=g/3*Math.PI*2,_=[f(a*.14,b-.12),f(a*.46,b-.34),f(a*.84,b-.16),f(a*.72,b+.22),f(a*.24,b+.34)],m=(y,M)=>[y[0],y[1],M];for(let y=1;y<_.length-1;y++)i.tri(m(_[0],c),m(_[y],c),m(_[y+1],c),h),i.tri(m(_[0],l),m(_[y+1],l),m(_[y],l),d);for(let y=0;y<_.length;y++){let M=(y+1)%_.length;i.tri(m(_[y],l),m(_[M],c),m(_[M],l),d),i.tri(m(_[y],l),m(_[y],c),m(_[M],c),d),e.seg(m(_[y],c),m(_[M],c),I,Xe)}}new qn(i,e,(g,b)=>[g,b]).lyingCyl("z",0,0,-a*.14,a*.14,r*.1,a*.28,u.body,u.bodyTop,14,G)}function Y2(i,e,t,n){let r=Math.min(t*.88,n*.92),o=(n-r)/2;i.lyingCyl("x",0,0,o,o+r,e*.9,r,u.white,u.whiteTop,22,I);for(let s of[-e*.46,e*.46])i.lyingCyl("x",s,0,o+r*.04,o+r*.96,e*.035,r*.92,u.white,u.whiteTop,18,O);for(let s of[-e*.28,e*.28])i.box(s-.025,s+.025,0,o+r*.25,-t*.42,-t*.28,u.metal,u.metal);for(let[s,a]of[[-e*.2,u.accent],[e*.2,u.fabricTop]])i.cyl(s,t*.05,Math.min(e,t)*.025,0,o+r*.18,a,a,10,O),i.cyl(s,t*.05,Math.min(e,t)*.04,o+r*.14,o+r*.2,u.metal,u.metal,10);i.box(e*.18,e*.4,o+r*.38,o+r*.68,t*.43,t*.48,u.body,u.glass,G),i.seg(e*.24,o+r*.53,t*.485,e*.35,o+r*.53,t*.485,G)}function q2(i,e,t,n){let r=Math.min(.035,e*.025),o=e/2-r;for(let s of[-1,1]){i.box(s*o-r,s*o+r,0,n,-t/2,-t/2+r*2,u.metal,u.metal,I),i.box(s*o-r,s*o+r,0,n,t/2-r*2,t/2,u.metal,u.metal,I);for(let a of[-t/2+r,t/2-r])i.box(s*o-r*2.2,s*o+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,u.dark,u.dark)}for(let s=0;s<7;s++){let a=-t/2+r+(t-2*r)*s/6;i.box(-e/2+r,e/2-r,n-r*2,n,a-r/2,a+r/2,u.metal,u.metal,O)}i.seg(-e/2,.05,-t/2,e/2,n-.05,-t/2,O),i.seg(e/2,.05,-t/2,-e/2,n-.05,-t/2,O),i.seg(-e/2,.05,t/2,e/2,n-.05,t/2,O),i.seg(e/2,.05,t/2,-e/2,n-.05,t/2,O)}var fd={air_conditioner:({b:i,w:e,d:t,h:n})=>(G2(i,e,t,n),!1),drying_rack:({b:i,w:e,d:t,h:n})=>(q2(i,e,t,n),.5),fan_ceiling:({b:i,w:e,d:t,h:n})=>(hd(i,e,t,n),!1),fan_ceiling_light:({b:i,w:e,d:t,h:n})=>(hd(i,e,t,n),!1),fan_floor:({b:i,w:e,d:t,h:n})=>(W2(i,e,t,n),.5),fan_wall:({b:i,w:e,d:t,h:n})=>(X2(i,e,t,n),!1),radiator:({b:i,w:e,d:t,h:n})=>(V2(i,e,t,n),!1),water_heater:({b:i,w:e,d:t,h:n})=>(Y2(i,e,t,n),!1),water_pump:({b:i,w:e,d:t,h:n})=>(H2(i,e,t,n),.5)};function $2(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=t/r;for(let h=0;h<r;h++){let d=t/2-s*h,f=d-s,p=o*(h+1);i.box(-e/2,e/2,0,p,f,d,u.wood,u.woodTop),i.seg(-e/2,p,d,e/2,p,d,I)}i.seg(-e/2,0,t/2,-e/2,o,t/2,I);for(let h of[-e/2,e/2])i.seg(h,o,t/2,h,n,-t/2+s,O);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,t/2-s/2,l,o*c+a,t/2-s*(c-.5),G);for(let h=0;h<c;h+=3){let d=t/2-s*(h+.5),f=o*(h+1);i.seg(l,f,d,l,f+a,d,O)}}function Z2(i,e,t,n){let r=Math.max(6,Math.round(n/.18)),o=Math.floor(r/2),s=r-o,a=n/r,l=a*o,c=Math.min(.16,e*.12),h=(e-c)/2,d=Math.min(t*.34,Math.max(t*.22,h)),f=-t/2+d,p=t-d,g=p/o,b=p/s,_=-e/2,m=-c/2,y=c/2,M=e/2;for(let F=0;F<o;F++){let E=t/2-g*F,U=E-g,N=a*(F+1);i.box(_,m,0,N,U,E,u.white,u.whiteTop),i.seg(_,N,E,m,N,E,I)}i.box(-e/2,e/2,0,l,-t/2,f,u.white,u.whiteTop,I);for(let F=0;F<s;F++){let E=f+b*F,U=E+b,N=l+a*(F+1);i.box(y,M,0,N,E,U,u.white,u.whiteTop),i.seg(y,N,E,M,N,E,I)}let v=Math.min(.9,Math.max(.55,n*.32)),S=[_+.03,m-.03],w=[y+.03,M-.03];for(let F of S){i.seg(F,a+v,t/2-g/2,F,l+v,f,G);for(let E=0;E<o;E+=3){let U=t/2-g*(E+.5),N=a*(E+1);i.seg(F,N,U,F,N+v,U,O)}}let A=Math.max(1,s-3);for(let F of w){i.seg(F,l+v,f,F,l+a*A+v,f+b*(A-.5),G);for(let E=0;E<A;E+=3){let U=f+b*(E+.5),N=l+a*(E+1);i.seg(F,N,U,F,N+v,U,O)}}let x=S[0],T=S[1],C=w[0],P=w[1],L=-t/2+.03;i.seg(T,l+v,f,C,l+v,f,G),i.seg(x,l+v,f,x,l+v,L,G),i.seg(x,l+v,L,P,l+v,L,G),i.seg(P,l+v,L,P,l+v,f,G);for(let[F,E]of[[T,f],[C,f],[x,f],[x,L],[P,L],[P,f]])i.seg(F,l,E,F,l+v,E,O)}function K2(i,e,t,n){let r=Math.min(e*.58,t*.22,n*.42),o=e*.66,s=t*.34,a=-t*.34;for(let l of[a,s])i.lyingCyl("x",0,l,0,r,o,r,u.dark,u.metal,14,I),i.lyingCyl("x",0,l,r*.16,r*.84,o+.012,r*.46,u.metal,u.metal,12,O);i.loft([-e*.3,e*.3,a,t*.12],[-e*.2,e*.2,-t*.18,t*.06],r*.45,n*.58,u.body,u.bodyTop,I),i.box(-e*.3,e*.3,r*.37,r*.44,-t*.08,t*.22,u.dark,u.metal,O),i.lyingCyl("z",e*.24,a-t*.04,r*.2,r*.47,t*.4,r*.25,u.metal,u.dark,10,O),i.pad(-e*.3,e*.3,n*.52,n*.62,-t*.25,t*.05,u.dark,u.fabricTop,.025,I),i.seg(-e*.18,n*.48,t*.02,-e*.08,n*.86,s,I),i.seg(e*.18,n*.48,t*.02,e*.08,n*.86,s,I),i.seg(-e*.19,r*.63,a,-e*.21,n*.54,-t*.12,O),i.seg(e*.19,r*.63,a,e*.21,n*.54,-t*.12,O),i.seg(-e*.36,n*.9,s,e*.36,n*.9,s,G),i.box(-e*.23,e*.23,n*.72,n*.98,s-t*.07,s+t*.07,u.body,u.bodyTop,I),i.cyl(0,s+t*.075,Math.min(e,t)*.07,n*.82,n*.94,u.white,u.accent,12,G);for(let l of[-1,1])i.seg(l*e*.22,n*.9,s,l*e*.39,n,s-t*.04,I),i.cyl(l*e*.39,s-t*.04,e*.045,n*.97,n,u.glass,u.metal,10,G);i.seg(-e*.31,n*.66,-t*.31,e*.31,n*.66,-t*.31,I)}function J2(i,e,t,n){let r=Math.min(.07,e*.035);for(let a of[-e/2+r,e/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,u.metal,u.metal,I),i.box(a-t*.25,a+t*.25,0,r,-t*.36,t*.36,u.metal,u.metal,I);let o=-e/2+r,s=e/2-r;i.loft([o,-e*.14,-t*.34,t*.34],[o+.08,-e*.14,-t*.3,t*.3],n*.36,n*.42,u.fabric,u.fabricTop,O),i.loft([-e*.14,e*.14,-t*.34,t*.34],[-e*.13,e*.13,-t*.3,t*.3],n*.25,n*.31,u.fabric,u.fabricTop,O),i.loft([e*.14,s,-t*.34,t*.34],[e*.14,s-.08,-t*.3,t*.3],n*.36,n*.42,u.fabric,u.fabricTop,O),i.seg(o,n*.8,0,-e*.14,n*.42,0,I),i.seg(e*.14,n*.42,0,s,n*.8,0,I)}function Q2(i,e,t,n){let r=Math.min(e,t);i.cyl(0,0,r*.08,0,n-.07,u.metal,u.metal,12),i.cyl(0,0,r*.22,n-.07,n,u.body,u.bodyTop,16,I);for(let[o,s]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(o*e,s*t,r*.065,0,n*.52,u.metal,u.metal,10),i.cyl(o*e,s*t,r*.105,n*.52,n*.61,u.body,u.bodyTop,12,O)}function j2(i,e,t,n){let r=Math.min(e,t)*.46;i.cyl(0,0,r*.84,0,n*.08,u.metal,u.metal,12,I),i.cyl(0,0,r,n*.08,n*.92,u.metal,u.whiteTop,20,I);for(let o of[n*.28,n*.5,n*.72])for(let s=0;s<24;s++){let a=s/24*Math.PI*2,l=(s+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,o,Math.sin(a)*r,Math.cos(l)*r,o,Math.sin(l)*r,O)}i.cyl(0,0,r*.18,n*.92,n,u.dark,u.bodyTop,12,O)}function dd(i,e,t,n,r){let o=Math.min(.12,e*.05);for(let l of[-e/2+o/2,e/2-o/2])i.box(l-o/2,l+o/2,0,n,-t/2,t/2,u.body,u.bodyTop,I);let s=r?2:Math.max(3,Math.round(e/.4)),a=e-2*o;for(let l=0;l<s;l++){let c=-a/2+a*l/s+o*.25,h=-a/2+a*(l+1)/s-o*.25;i.box(c,h,n*.08,n*.92,-t*.18,t*.18,r?u.metal:u.wood,r?u.metal:u.woodTop,O),r&&i.seg(l===0?h:c,n*.46,t*.2,l===0?h-.08:c+.08,n*.46,t*.2,G)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-t/2,t/2,u.wood,u.woodTop,I)}var pd={fence:({b:i,w:e,d:t,h:n})=>(dd(i,e,t,n,!1),.5),gate:({b:i,w:e,d:t,h:n})=>(dd(i,e,t,n,!0),.5),hammock:({b:i,w:e,d:t,h:n})=>(J2(i,e,t,n),.5),motorbike:({b:i,w:e,d:t,h:n})=>(K2(i,e,t,n),.5),stairs:({b:i,w:e,d:t,h:n})=>($2(i,e,t,n),.5),stairs_landing:({b:i,w:e,d:t,h:n})=>(Z2(i,e,t,n),.5),stone_table_set:({b:i,w:e,d:t,h:n})=>(Q2(i,e,t,n),.5),water_tank:({b:i,w:e,d:t,h:n})=>(j2(i,e,t,n),.5)};function Xu(i,e,t,n,r){r==="round"?i.cyl(0,0,Math.min(e,t)/2,0,n,u.white,u.whiteTop,20,I):r==="square"?i.box(-e/2,e/2,0,n,-t/2,t/2,u.white,u.whiteTop,I):(i.box(-e/2,e/2,0,n,-t*.12,t*.12,u.metal,u.metal,I),i.box(-e*.12,e*.12,0,n,-t/2,t/2,u.metal,u.metal,O))}function e1(i,e,t,n){let r=2.7-n;for(let o=0;o<5;o++){let s=-t/2+t*o/4;i.box(-e/2,e/2,r,r+n,s-.055,s+.055,u.wood,u.woodTop,I)}}function t1(i,e,t,n){i.box(-e/2,e/2,2.7-n,2.7,-t/2,t/2,u.white,u.whiteTop,I)}function n1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.body,u.bodyTop,I);for(let r=.24;r<n;r+=.24)i.seg(-e/2,r,t/2+.003,e/2,r,t/2+.003,O)}function i1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e*.38,e*.38,n*.14,n*.68,t/2,t/2+.012,u.dark,u.dark,G),i.box(-e*.31,e*.31,n*.18,n*.24,t/2+.014,t/2+.025,u.accent,u.accent,G)}function r1(i,e,t,n){for(let o=0;o<3;o++){let s=-e/2+e*o/3,a=-e/2+e*(o+1)/3,l=(o-1)*t*.16;i.box(s+.015,a-.015,.04,n,l-t*.12,l+t*.12,u.body,u.bodyTop,I),i.seg(a-.07,n*.42,l+t*.13,a-.07,n*.58,l+t*.13,G)}i.box(-e/2,e/2,n,n+.04,-t/2,t/2,u.metal,u.metal,O)}function md(i,e,t,n,r){i.box(-e/2,-e/2+.06,0,n,-t/2,t/2,u.body,u.bodyTop,I),i.box(e/2-.06,e/2,0,n,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e/2,e/2,n-.06,n,-t/2,t/2,u.body,u.bodyTop,I);for(let s of[n*.25,n*.5,n*.75])i.box(-e/2+.06,e/2-.06,s-.018,s+.018,-t/2,t/2,u.wood,u.woodTop,r?G:O);r&&i.box(-e*.42,e*.42,n*.08,n*.12,t/2,t/2+.012,u.accent,u.accent,G)}function o1(i,e,t,n){let r=2.7-n;i.box(-e/2,e/2,r,r+n,-t/2,t/2,u.white,u.whiteTop,I),i.box(-e*.44,e*.44,r-.015,r+.015,t*.22,t*.4,u.accent,u.accent,G)}function s1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t*.12,u.wood,u.woodTop,I),i.box(-e/2,e/2,0,n*.5,t*.12,t/2,u.wood,u.woodTop,O)}function a1(i,e,t,n){for(let r of[-e/2,0,e/2])i.box(r-.02,r+.02,0,n,-t/2,t/2,u.metal,u.metal,I);i.box(-e/2,e/2,n-.045,n,-t/2,t/2,u.metal,u.metal,G),i.seg(-e/2,n*.08,0,e/2,n*.08,0,O)}function l1(i,e,t,n){i.box(-e/2,e/2,0,n*.72,-t/2,t/2,u.wood,u.woodTop,I),i.pad(-e*.47,e*.47,n*.7,n,-t*.46,t*.46,u.fabric,u.cushion,.035,G),i.seg(0,.06,t/2+.004,0,n*.58,t/2+.004,O)}var c1=(i,e,t)=>({x0:-i*.37,x1:i*.37,y0:t*.15,y1:t*.67,z:e/2+.014}),u1=(i,e,t)=>({x0:-i*.4,x1:i*.4,y0:t*.07,y1:t*.13,z:e/2+.014}),h1=(i,e,t)=>({x0:-i*.42,x1:i*.42,y0:2.7-t-.018,y1:2.7-t+.018,z:e*.32}),gd={column_round:({b:i,w:e,d:t,h:n})=>(Xu(i,e,t,n,"round"),.5),column_square:({b:i,w:e,d:t,h:n})=>(Xu(i,e,t,n,"square"),.5),column_steel:({b:i,w:e,d:t,h:n})=>(Xu(i,e,t,n,"steel"),.5),ceiling_beams:({b:i,w:e,d:t,h:n})=>(e1(i,e,t,n),!1),downstand_beam:({b:i,w:e,d:t,h:n})=>(t1(i,e,t,n),!1),chimney_inside:({b:i,w:e,d:t,h:n})=>(n1(i,e,t,n),.5),fireplace_builtin:({b:i,w:e,d:t,h:n})=>(i1(i,e,t,n),.5),sliding_wall:({b:i,w:e,d:t,h:n})=>(r1(i,e,t,n),.5),builtin_shelf_niche:({b:i,w:e,d:t,h:n})=>(md(i,e,t,n,!1),!1),led_niche:({b:i,w:e,d:t,h:n})=>(md(i,e,t,n,!0),!1),light_cove:({b:i,w:e,d:t,h:n})=>(o1(i,e,t,n),!1),platform_steps:({b:i,w:e,d:t,h:n})=>(s1(i,e,t,n),.5),gallery_railing_glass:({b:i,w:e,d:t,h:n})=>(a1(i,e,t,n),.5),window_seat:({b:i,w:e,d:t,h:n})=>(l1(i,e,t,n),.5)},_d={fireplace_builtin:c1,led_niche:u1,light_cove:h1};function Zn(i,e,t,n,r){let o=r==="futon"?n*.72:n,s=r==="boxspring"?n*.42:r==="futon"?n*.22:n*.3,a=r==="boxspring"?n*.34:Math.min(.24,n*.3),l=r==="upholstered"?u.fabric:u.wood;i.box(-e/2,e/2,.08,s,-t/2,t/2,l,r==="upholstered"?u.fabricTop:u.woodTop,I),r==="boxspring"&&i.pad(-e/2,e/2,.08,s,-t/2,t/2,u.fabric,u.fabricTop,.04,I),i.pad(-e*.48,e*.48,s,s+a,-t*.47,t*.47,u.white,u.whiteTop,.035,O);let c=r==="upholstered"?.12:.075;r==="upholstered"?i.pad(-e/2,e/2,.08,o,-t/2,-t/2+c,u.fabric,u.cushion,.045,I):i.box(-e/2,e/2,.08,o,-t/2,-t/2+c,l,r==="futon"?u.woodTop:u.wood,I);let h=e<1.2?1:2,d=e*.84/h;for(let f=0;f<h;f++){let p=-e*.42+d*f+.035;i.pad(p,p+d-.07,s+a,s+a+.08,-t*.4,-t*.22,u.cushion,u.whiteTop,.025,O)}if(r==="upholstered")for(let f of[-e*.24,0,e*.24])i.seg(f,n*.48,-t/2-.002,f,n*.92,-t/2-.002,G)}function us(i,e,t,n,r,o=!1){i.box(-e/2,e/2,0,n,-t/2,t/2,u.wood,u.woodTop,I);let s=t/2+.004;for(let a=1;a<r;a++){let l=-e/2+e*a/r;i.seg(l,.04,s,l,n-.04,s,O)}for(let a=0;a<r;a++){let l=-e/2+e*(a+.5)/r,c=a<r/2?1:-1;i.seg(l+c*e/r*.3,n*.45,s,l+c*e/r*.3,n*.58,s,G)}o&&i.box(-e*.14,e*.14,n*.08,n*.92,t/2+.006,t/2+.012,u.glass,u.glass,G)}function f1(i,e,t,n){let r=Math.min(e,t)*.48;i.box(-e/2,-e/2+r,0,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2+r,e/2,0,n,-t/2,-t/2+r,u.wood,u.woodTop,I),i.seg(-e/2+r,.04,t/2,-e/2+r,n-.04,t/2,O),i.seg(e/2,.04,-t/2+r,e/2,n-.04,-t/2+r,O)}function fr(i,e,t,n,r,o=1){i.box(-e/2,e/2,0,n,-t/2,t/2,u.wood,u.woodTop,I);let s=t/2+.004;for(let a=1;a<r;a++)i.seg(-e/2+.025,n*a/r,s,e/2-.025,n*a/r,s,O);for(let a=1;a<o;a++)i.seg(-e/2+e*a/o,.03,s,-e/2+e*a/o,n-.03,s,O);for(let a=0;a<r;a++)for(let l=0;l<o;l++){let c=-e/2+e*(l+.5)/o,h=n*(a+.5)/r;i.seg(c-Math.min(.06,e/o*.16),h,s,c+Math.min(.06,e/o*.16),h,s,G)}for(let a of[-e*.4,e*.4])i.box(a-.02,a+.02,0,.06,-t*.4,t*.4,u.dark,u.dark)}function d1(i,e,t,n){i.box(-e/2,e/2,.48,.48+n,-t/2,t/2,u.wood,u.woodTop,I),i.seg(-e/2+.025,.48+n*.55,t/2+.004,e/2-.025,.48+n*.55,t/2+.004,O),i.seg(-e*.08,.48+n*.28,t/2+.006,e*.08,.48+n*.28,t/2+.006,G)}function p1(i,e,t,n){for(let r of[-e*.44,e*.44])i.box(r-.025,r+.025,0,n,-.025,.025,u.metal,u.metal,I);i.box(-e*.46,e*.46,n*.82,n*.86,-.025,.025,u.metal,u.metal,G),i.box(-e/2,e/2,0,.045,-t/2,t/2,u.wood,u.woodTop,O)}function m1(i,e,t,n){Zn(i,e,t,n*.46,"frame");for(let r of[-e*.47,e*.47])for(let o of[-t*.47,t*.47])i.box(r-.025,r+.025,0,n,o-.025,o+.025,u.wood,u.wood,I);i.box(-e*.48,e*.48,n*.94,n,-t*.48,-t*.45,u.wood,u.wood,O),i.box(-e*.48,e*.48,n*.94,n,t*.45,t*.48,u.wood,u.wood,O)}function bd(i,e,t,n,r=!1){i.box(-e/2,e/2,0,n,-t/2,t/2,u.wood,u.woodTop,I);let o=t/2+.005;i.seg(0,.04,o,0,n-.04,o,I),i.seg(-e*.46,n*.04,o,e*.46,n*.04,o,O),i.seg(-e*.46,n*.96,o,e*.46,n*.96,o,O),r&&i.box(-e*.42,e*.42,n*.86,n*.89,o,o+.012,u.accent,u.accent,G)}function g1(i,e,t,n){let r=Math.min(.38,Math.min(e,t)*.24);i.box(-e/2,-e/2+r,0,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2+r,e/2,0,n,-t/2,-t/2+r,u.wood,u.woodTop,I);for(let o of[n*.32,n*.65])i.seg(-e/2,o,t/2,-e/2+r,o,t/2,O),i.seg(e/2,o,-t/2,e/2,o,-t/2+r,O)}function xd(i,e,t,n,r){let o=n*.48;i.box(-e/2,e/2,o-.06,o,-t/2,t/2,u.wood,u.woodTop,I);for(let s of[-e*.43,e*.43])i.box(s-.025,s+.025,0,o,-t*.38,t*.38,u.wood,u.wood);i.box(-e*.32,e*.32,o+.08,n,-t/2,-t/2+.035,u.glass,u.glass,r?G:I)}function _1(i,e,t,n){for(let r of[-e*.4,e*.4])i.box(r-.025,r+.025,0,n*.72,-t*.35,t*.35,u.wood,u.wood);i.pad(-e/2,e/2,n*.68,n,-t/2,t/2,u.fabric,u.cushion,.035,I)}function b1(i,e,t,n){fr(i,e,t,n*.78,3),i.pad(-e/2,e/2,n*.78,n,-t/2,t/2,u.white,u.whiteTop,.04,I)}function x1(i,e,t,n){i.box(-e*.46,e*.46,.08,n,-.035,.035,u.glass,u.glass,G),i.box(-e/2,e/2,0,.06,-t/2,t/2,u.wood,u.woodTop,I)}function y1(i,e,t,n){i.pad(-e*.42,e*.42,.12,n*.45,-t*.3,t*.42,u.fabric,u.fabricTop,.05,I),i.pad(-e*.38,e*.38,n*.42,n,-t*.42,-t*.25,u.fabric,u.cushion,.04,I),i.box(e*.38,e/2,0,n*.52,-t/2,t/2,u.wood,u.woodTop,O)}function v1(i,e,t,n){i.box(-e/2,e/2,0,n*.28,-t/2,t/2,u.dark,u.dark,I),i.cyl(0,0,Math.min(e,t)*.42,n*.28,n,u.white,u.whiteTop,18,G)}var M1=(i,e,t)=>({x0:-i*.44,x1:i*.44,y0:t*.22,y1:t*.27,z:e/2+.006}),S1=(i,e,t)=>({x0:-i*.42,x1:i*.42,y0:t*.86,y1:t*.89,z:e/2+.018}),T1=(i,e,t)=>({x0:-i*.3,x1:i*.3,y0:t*.42,y1:t*.8,z:e*.43}),w1=(i,e,t)=>({x0:-i*.33,x1:i*.33,y0:t*.55,y1:t*.96,z:-e/2-.004}),yd={bed_90:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_140:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_160:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_200:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_upholstered_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"upholstered"),.5),bed_boxspring_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"boxspring"),.5),bed_futon_160:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"futon"),.5),wardrobe_2door:({b:i,w:e,d:t,h:n})=>(us(i,e,t,n,2),.5),wardrobe_3door:({b:i,w:e,d:t,h:n})=>(us(i,e,t,n,3),.5),wardrobe_4door:({b:i,w:e,d:t,h:n})=>(us(i,e,t,n,4),.5),wardrobe_6door:({b:i,w:e,d:t,h:n})=>(us(i,e,t,n,6),.5),wardrobe_mirror:({b:i,w:e,d:t,h:n})=>(us(i,e,t,n,3,!0),.5),wardrobe_corner:({b:i,w:e,d:t,h:n})=>(f1(i,e,t,n),.5),nightstand_drawer:({b:i,w:e,d:t,h:n})=>(fr(i,e,t,n,1),.5),nightstand_slim:({b:i,w:e,d:t,h:n})=>(fr(i,e,t,n,2),.5),nightstand_floating:({b:i,w:e,d:t,h:n})=>(d1(i,e,t,n),!1),dresser_80_3:({b:i,w:e,d:t,h:n})=>(fr(i,e,t,n,3),.5),dresser_140_6:({b:i,w:e,d:t,h:n})=>(fr(i,e,t,n,3,2),.5),chest_tall_5:({b:i,w:e,d:t,h:n})=>(fr(i,e,t,n,5),.5),clothes_rail:({b:i,w:e,d:t,h:n})=>(p1(i,e,t,n),.35),bed_canopy:({b:i,w:e,d:t,h:n})=>(m1(i,e,t,n),.5),wardrobe_sliding:({b:i,w:e,d:t,h:n})=>(bd(i,e,t,n),.5),closet_walkin:({b:i,w:e,d:t,h:n})=>(g1(i,e,t,n),.5),vanity_mirror:({b:i,w:e,d:t,h:n})=>(xd(i,e,t,n,!1),.5),bed_bench:({b:i,w:e,d:t,h:n})=>(_1(i,e,t,n),.5),changing_table:({b:i,w:e,d:t,h:n})=>(b1(i,e,t,n),.5),mirror_floor:({b:i,w:e,d:t,h:n})=>(x1(i,e,t,n),.35),chest_tall:({b:i,w:e,d:t,h:n})=>(fr(i,e,t,n,4),.5),reading_nook:({b:i,w:e,d:t,h:n})=>(y1(i,e,t,n),.5),bed_ambient_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"upholstered"),.5),wardrobe_light:({b:i,w:e,d:t,h:n})=>(bd(i,e,t,n,!0),.5),alarm_sunrise:({b:i,w:e,d:t,h:n})=>(v1(i,e,t,n),.35),vanity_light:({b:i,w:e,d:t,h:n})=>(xd(i,e,t,n,!0),.5)},vd={bed_ambient_180:M1,wardrobe_light:S1,alarm_sunrise:T1,vanity_light:w1};function no(i,e,t,n,r){ln(i,e,t-.02,n-.12,Math.max(1,Math.round(e/.48)),n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,u.white,u.whiteTop,I);for(let o=0;o<r;o++){let s=-e/2+e*(o+.5)/r,a=Math.min(e/r*.34,.24);i.cyl(s,.03,a,n-.006,n+.004,u.glass,u.glass,18,G),i.cyl(s,-t*.3,.018,n,n+.2,u.metal,u.metal,8),i.box(s-.015,s+.015,n+.16,n+.2,-t*.3,-t*.08,u.metal,u.metal)}}function E1(i,e,t,n){i.loft([-e*.18,e*.18,-t*.2,t*.18],[-e*.28,e*.28,-t*.36,t*.36],0,n*.78,u.white,u.whiteTop,I),i.box(-e/2,e/2,n*.76,n,-t/2,t/2,u.white,u.whiteTop,I),i.cyl(0,.04,Math.min(e,t)*.3,n-.006,n+.004,u.glass,u.glass,18,G),i.cyl(0,-t*.3,.018,n,n+.2,u.metal,u.metal,8)}function Nl(i,e,t,n,r){let o=r?.09:.07;i.box(-e/2,e/2,0,n-.02,-t/2,t/2,u.white,u.whiteTop,I),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+o,u.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-o,t/2,u.whiteTop),i.box(-e/2,-e/2+o,n-.02,n,-t/2+o,t/2-o,u.whiteTop),i.box(e/2-o,e/2,n-.02,n,-t/2+o,t/2-o,u.whiteTop),i.box(-e/2+o,e/2-o,n-.03,n-.02,-t/2+o,t/2-o,u.glass,u.glass,G),i.cyl(-e/2+o*.7,0,.02,n,n+.12,u.metal,u.metal,8)}function A1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.white,u.whiteTop,I),i.cyl(e*.08,t*.08,Math.min(e,t)*.38,n-.018,n+.003,u.glass,u.glass,24,G),i.box(-e*.42,e*.42,n-.02,n+.004,-t/2,-t*.34,u.whiteTop,u.whiteTop),i.box(-e/2,-e*.34,n-.02,n+.004,-t*.42,t*.42,u.whiteTop,u.whiteTop)}function Ul(i,e,t,n,r){i.box(-e/2,e/2,0,.045,-t/2,t/2,u.whiteTop,u.whiteTop,I),i.cyl(0,0,.04,.045,.05,u.metal,u.metal,10);let o=r==="corner"?[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]]:r==="niche"?[[-e/2,t/2,e/2,t/2]]:[[-e*.05,t/2,e/2,t/2],[e*.12,-t/2,e*.12,t/2]];for(let[s,a,l,c]of o)i.seg(s,.05,a,l,.05,c,G),i.seg(s,n,a,l,n,c,G),i.seg(s,.05,a,s,n,a,O),i.seg(l,.05,c,l,n,c,G);i.cyl(-e/2+.07,-t/2+.07,.015,.05,n-.08,u.metal,u.metal,7),i.cyl(-e/2+.2,-t/2+.2,.1,n-.1,n-.07,u.metal,u.metal,14,G)}function R1(i,e,t,n){let r=Math.min(.025,Math.max(.01,t*.35));i.box(-e/2,e/2,0,.025,-r,r,u.metal,u.metal,G);for(let o of[-e/2,0,e/2])i.box(o-r,o+r,0,n,-r,r,u.metal,u.metal,G);i.seg(-e/2,n,0,e/2,n,0,G),i.seg(e*.32,n*.42,r+.003,e*.32,n*.62,r+.003,I)}function Md(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,u.white,u.whiteTop,I),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,u.white,u.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,u.white,u.whiteTop,12,I)}function Sd(i,e,t,n,r=!1){let o=r?0:.18;i.loft([-e*.34,e*.34,-t/2,t*.22],[-e/2,e/2,-t/2,t/2],o,n*.82,u.white,u.whiteTop,I),i.cyl(0,t*.08,e*.36,n*.8,n,u.white,u.whiteTop,18,I),r&&(i.cyl(0,-t*.26,.016,n,n+.17,u.metal,u.metal,8),i.box(-.012,.012,n+.13,n+.17,-t*.26,-t*.04,u.metal,u.metal))}function Td(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,u.body,u.bodyTop,I);let r=t/2+.004,o=n>1.5?4:3;for(let s=1;s<o;s++)i.seg(-e/2+.02,n*s/o,r,e/2-.02,n*s/o,r,O);i.seg(0,.08,r,0,n-.04,r,O),i.seg(-e*.08,n*.5,r+.004,e*.08,n*.5,r+.004,G)}function Yu(i,e,t,n,r){r?i.lyingCyl("z",0,0,1.12,1.12+n,t,Math.min(e,n),u.glass,u.glass,28,G):i.box(-e/2,e/2,1.12,1.12+n,-t/2,t/2,u.glass,u.glass,G)}function C1(i,e,t,n){for(let o of[1.15,1.15+n*.48,1.15+n])i.box(-e/2,e/2,o-.018,o+.018,-t/2,t/2,u.wood,u.woodTop,I);for(let o of[-e/2,e/2])i.box(o-.018,o+.018,1.15,1.15+n,-t/2,-t/2+.04,u.metal,u.metal,O)}function I1(i,e,t,n){for(let o of[-e*.46,e*.46])i.box(o-.018,o+.018,.85,.85+n,-t*.1,t*.1,u.metal,u.metal,I);for(let o=0;o<5;o++){let s=.85+n*o/4;i.box(-e*.46,e*.46,s-.012,s+.012,-t*.1,t*.1,u.metal,u.metal,G)}i.pad(-e*.32,e*.32,.85+n*.23,.85+n*.66,0,t/2,u.fabric,u.cushion,.018,O)}function P1(i,e,t,n){i.box(-e/2,-e/2+.06,0,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(e/2-.06,e/2,0,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2,e/2,0,n,-t/2,-t/2+.06,u.wood,u.woodTop,I),i.box(-e/2,e/2,n-.06,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e*.42,e*.42,n*.18,n*.38,-t*.32,t*.3,u.wood,u.woodTop,O),i.box(-e*.18,e*.18,0,n*.2,t*.12,t*.42,u.dark,u.metal,G)}function wd(i,e,t,n,r){for(let s of[-e*.46,e*.46])i.box(s-.018,s+.018,.55,.55+n,-t*.1,t*.1,u.metal,u.metal,I);for(let s=0;s<8;s++){let a=.55+n*s/7;i.box(-e*.46,e*.46,a-.012,a+.012,-t*.1,t*.1,r?u.accent:u.metal,u.metal,r?G:O)}}function F1(i,e,t,n){Nl(i,e,t,n,!0);for(let r of[-e*.28,0,e*.28])for(let o of[-t*.25,t*.25])i.cyl(r,o,.025,n-.012,n+.006,u.accent,u.accent,8,G)}function Ed(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2,u.body,u.bodyTop,I);let o=t/2+.006;i.cyl(0,o,e*.31,.12,Math.min(n*.38,.68),u.dark,u.glass,20,G),i.seg(-e*.42,n*.5,o,e*.42,n*.5,o,O),r&&i.box(-e*.38,e*.38,n*.56,n*.86,-t*.34,t*.38,u.fabric,u.fabricTop,I)}function L1(i,e,t,n){i.loft([-e*.42,e*.42,-t*.42,t*.42],[-e/2,e/2,-t/2,t/2],0,n,u.fabric,u.fabricTop,I);for(let r of[-e*.28,0,e*.28])i.seg(r,n*.12,t/2+.002,r,n*.88,t/2+.002,O)}function D1(i,e,t,n){for(let r of[-e*.45,e*.45])i.box(r-.025,r+.025,0,n,-t*.18,t*.18,u.wood,u.wood,I);for(let r=1;r<5;r++){let o=n*r/5;i.box(-e*.45,e*.45,o-.018,o+.018,-t*.18,t*.18,u.wood,u.wood,O)}i.pad(-e*.32,e*.32,n*.52,n*.76,0,t/2,u.fabric,u.cushion,.015,G)}function U1(i,e,t,n){i.box(-e/2,e/2,1.05,1.05+n,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e*.46,e*.46,1.05+n*.06,1.05+n*.94,t/2,t/2+.012,u.glass,u.glass,G),i.seg(0,1.05+n*.08,t/2+.014,0,1.05+n*.92,t/2+.014,O)}function N1(i,e,t,n){i.box(-e/2,e/2,1.75,1.75+n,-t/2,t/2,u.white,u.whiteTop,I),i.lyingCyl("z",0,t*.51,1.75+n*.12,1.75+n*.88,t*.08,n*.76,u.dark,u.metal,16,G)}function B1(i,e,t,n){let r=Math.min(.62,e*.5);i.box(-e/2,-e/2+r,0,n-.05,-t/2,t/2,u.white,u.whiteTop,I),i.lyingCyl("z",-e/2+r/2,t/2+.006,n*.18,n*.72,.03,r*.54,u.dark,u.glass,18,G),no(i,e-r,t,n,1),i.box(-e/2,e/2,n-.05,n,-t/2,t/2,u.whiteTop,u.whiteTop,I)}function O1(i,e,t,n){i.cyl(0,-t*.35,.018,.1,n,u.metal,u.metal,8,I),i.box(-e*.38,e*.38,n-.035,n,-t*.35,t*.25,u.metal,u.metal,G),i.box(-e*.32,e*.32,n-.041,n-.035,-t*.29,t*.19,u.accent,u.accent,G)}var k1=(i,e,t)=>({x0:-i*.46,x1:i*.46,y0:1.12+t*.04,y1:1.12+t*.96,z:e/2+.004}),Ad=(i,e,t)=>({x0:-i*.47,x1:i*.47,y0:1.12+t*.03,y1:1.12+t*.97,z:e/2+.004}),z1=(i,e,t)=>({x0:-i*.44,x1:i*.44,y0:1.05+t*.08,y1:1.05+t*.92,z:e/2+.016}),V1=(i,e,t)=>({x0:-i*.44,x1:i*.44,y0:.55+t*.08,y1:.55+t*.92,z:e/2+.004}),G1=(i,e,t)=>({x0:-i*.36,x1:i*.36,y0:1.75+t*.14,y1:1.75+t*.86,z:e/2+.008}),H1=(i,e,t)=>({x0:-i*.3,x1:i*.3,y0:t-.045,y1:t-.032,z:e*.18}),Rd={bathtub:({b:i,w:e,d:t,h:n})=>(Nl(i,e,t,n,!0),.5),bathtub_builtin:({b:i,w:e,d:t,h:n})=>(Nl(i,e,t,n,!1),.5),bathtub_corner:({b:i,w:e,d:t,h:n})=>(A1(i,e,t,n),.5),shower:({b:i,w:e,d:t,h:n})=>(Ul(i,e,t,n,"corner"),.5),shower_corner_90:({b:i,w:e,d:t,h:n})=>(Ul(i,e,t,n,"corner"),.5),shower_niche_120:({b:i,w:e,d:t,h:n})=>(Ul(i,e,t,n,"niche"),.5),shower_walkin_140:({b:i,w:e,d:t,h:n})=>(Ul(i,e,t,n,"walkin"),.5),shower_screen:({b:i,w:e,d:t,h:n})=>(R1(i,e,t,n),.5),wc:({b:i,w:e,d:t,h:n})=>(Md(i,e,t,n),.5),washbasin:({b:i,w:e,d:t,h:n})=>(no(i,e,t,n,1),.5),vanity_60:({b:i,w:e,d:t,h:n})=>(no(i,e,t,n,1),.5),vanity_80:({b:i,w:e,d:t,h:n})=>(no(i,e,t,n,1),.5),vanity_100:({b:i,w:e,d:t,h:n})=>(no(i,e,t,n,1),.5),double_vanity_120:({b:i,w:e,d:t,h:n})=>(no(i,e,t,n,2),.5),pedestal_basin:({b:i,w:e,d:t,h:n})=>(E1(i,e,t,n),.5),toilet_close_coupled:({b:i,w:e,d:t,h:n})=>(Md(i,e,t,n),.5),toilet_wall_hung:({b:i,w:e,d:t,h:n})=>(Sd(i,e,t,n),!1),bidet:({b:i,w:e,d:t,h:n})=>(Sd(i,e,t,n,!0),.5),bathroom_cabinet_tall:({b:i,w:e,d:t,h:n})=>(Td(i,e,t,n),.5),bathroom_cabinet_mid:({b:i,w:e,d:t,h:n})=>(Td(i,e,t,n),.5),mirror_round_light:({b:i,w:e,d:t,h:n})=>(Yu(i,e,t,n,!0),!1),mirror_80_light:({b:i,w:e,d:t,h:n})=>(Yu(i,e,t,n,!1),!1),bathroom_wall_shelf:({b:i,w:e,d:t,h:n})=>(C1(i,e,t,n),!1),towel_rail:({b:i,w:e,d:t,h:n})=>(I1(i,e,t,n),!1),bathtub_freestanding:({b:i,w:e,d:t,h:n})=>(Nl(i,e,t,n,!0),.5),sauna:({b:i,w:e,d:t,h:n})=>(P1(i,e,t,n),.5),towel_radiator:({b:i,w:e,d:t,h:n})=>(wd(i,e,t,n,!1),!1),whirlpool_indoor:({b:i,w:e,d:t,h:n})=>(F1(i,e,t,n),.5),washing_machine_cabinet:({b:i,w:e,d:t,h:n})=>(Ed(i,e,t,n,!1),.5),laundry_basket:({b:i,w:e,d:t,h:n})=>(L1(i,e,t,n),.5),ladder_shelf_towels:({b:i,w:e,d:t,h:n})=>(D1(i,e,t,n),.5),mirror_cabinet_light:({b:i,w:e,d:t,h:n})=>(U1(i,e,t,n),!1),electric_towel_heater:({b:i,w:e,d:t,h:n})=>(wd(i,e,t,n,!0),!1),bathroom_fan:({b:i,w:e,d:t,h:n})=>(N1(i,e,t,n),!1),washer_vanity:({b:i,w:e,d:t,h:n})=>(B1(i,e,t,n),.5),rain_shower_led:({b:i,w:e,d:t,h:n})=>(O1(i,e,t,n),!1),mirror_led_clock:({b:i,w:e,d:t,h:n})=>(Yu(i,e,t,n,!1),!1),laundry_cabinet_basket:({b:i,w:e,d:t,h:n})=>(Ed(i,e,t,n,!0),.5)},Cd={mirror_round_light:k1,mirror_80_light:Ad,mirror_cabinet_light:z1,electric_towel_heater:V1,bathroom_fan:G1,rain_shower_led:H1,mirror_led_clock:Ad};function W1(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,u.dark,u.body,I),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,G),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,u.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,u.white,u.whiteTop,I),$n(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,G);for(let a of[-1,1])$n(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,u.white,u.whiteTop,I),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,u.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,G);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,O)}function X1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.dark,u.body,I),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,u.dark,u.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,G),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,O)}function Y1(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,u.dark,u.body,I);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,t/2+.003,G)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,u.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,u.dark,u.body)}function q1(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,u.white,u.whiteTop,I),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,O),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,O),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,u.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,u.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,G)}function $1(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,u.white,u.whiteTop,I),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,G),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,O);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,u.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,u.dark,u.body,I),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,G),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,u.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,u.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,u.white,u.whiteTop,I);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,G)}}var Id={grid_point:({b:i,w:e,d:t,h:n})=>(X1(i,e,t,n),.5),home_battery:({b:i,w:e,d:t,h:n,variant:r})=>($1(i,e,t,n,r),r==="wall"?!1:.5),inverter:({b:i,w:e,d:t,h:n,variant:r})=>(W1(i,e,t,n,r),!1),meter:({b:i,w:e,d:t,h:n})=>(q1(i,e,t,n),!1),wallbox:({b:i,w:e,d:t,h:n})=>(Y1(i,e,t,n),!1)};function dr(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),h=n*.5,d=Math.min(.24,t*.28);Gt(i,e,t,.07,.05,.05,u.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,u.fabric,u.fabricTop,.04,I),i.loft([o,s,a,a+d],[o+.01,s-.01,a,a+d*.5],h-.08,n,u.fabric,u.fabricTop,I),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,u.fabric,u.fabricTop,.04,I),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,u.fabric,u.fabricTop,.04,I);let p=(s-c-(o+c))/r;for(let g=0;g<r;g++){let b=o+c+p*g+.02,_=b+p-.04;i.pad(b,_,h-.08,h+.05,a+d+.02,l-.06,u.cushion,u.cushion,.04),i.loft([b+.01,_-.01,a+d*.55,a+d+.14],[b+.03,_-.03,a+d*.4,a+d*.4+.06],h+.03,n*.93,u.cushion)}}function qu(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Gt(i,e,t,.08,.06,.03,u.wood,!0),i.box(s,a,.08,l,r+.06,o,u.wood,u.woodTop,I),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,u.white,u.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,u.wood,u.woodTop,I),i.box(s,a,n-.05,n,r,r+.09,u.wood,u.woodTop,O);let c=l+.2,h=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,u.cushion,u.fabricTop,.025,O),i.lyingCyl("x",0,h+.05,c-.02,c+.09,e-.02,.1,u.cushion,u.fabricTop,8);let d=e>1.2?2:1,f=(e-.2)/d;for(let p=0;p<d;p++){let g=s+.1+f*p,b=r+.12,_=Math.min(.42,t*.2),m=.1;i.loft([g+.03+m,g+f-.03-m,b+m*.5,b+_-m*.5],[g+.03,g+f-.03,b,b+_],c,c+.06,u.whiteTop),i.loft([g+.03,g+f-.03,b,b+_],[g+.03+m,g+f-.03-m,b+m*.5,b+_-m*.5],c+.06,c+.12,u.whiteTop,u.whiteTop,O)}}function Ku(i,e,t,n){let r=Math.min(.46,n*.52);Gt(i,e,t,r-.04,.035,.02,u.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,u.wood,u.woodTop,I),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,u.cushion,u.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,u.wood,u.woodTop,I)}function Z1(i,e,t,n){Gt(i,e,t,n-.04,.06,.05,u.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,u.wood,u.woodTop,G),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,u.body)}function K1(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,u.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,u.body,u.bodyTop,I);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,O);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,G);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,u.dark,u.dark,G),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,u.metal)}function Pd(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(e/2-.025,e/2,0,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,u.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,u.wood,u.woodTop,O),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let h=.03+c*7%5*.008,d=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+d,-t/2+.04,t/2-.05,c%3?u.fabric:u.cushion,u.fabricTop),l+=h+.006,c++}}}}function J1(i,e,t,n){ln(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,u.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,u.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,u.dark,u.dark,G)}function Fd(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,u.pot,u.pot,10,I),i.cyl(0,0,r*.08,o,n*.55,u.wood,u.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,u.plant,u.plantTop,8,a===s-1?O:null)}}function Q1(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,u.fabric,u.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,I)}function j1(i,e,t,n){Gt(i,e,t,.12,.03,.04,u.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,u.wood,u.woodTop,I),hr(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function Ld(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,u.wood,u.woodTop,I),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,u.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,O)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,G)}}function ev(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,u.wood,u.woodTop,I),hr(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,u.body,u.bodyTop,I),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,u.wood,u.woodTop,I);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,u.metal,u.metal)}}function Dd(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,u.wood,u.woodTop,I),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,u.wood,u.woodTop,I),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,u.cushion,u.cushion,O),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,u.wood,u.woodTop,I),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,u.wood,u.woodTop,I),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,u.cushion,u.cushion,O))}function tv(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,u.metal,u.metal,12),i.cyl(0,0,.025,.02,n-.05,u.metal,u.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,u.metal,u.metal,12,O),i.cyl(0,0,r,n-.05,n,u.cushion,u.fabricTop,14,I)}function nv(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,u.metal),i.box(-.03,.03,.04,.08,-r,r,u.metal),i.cyl(0,0,.06,.02,.1,u.dark,u.dark,8),i.cyl(0,0,.025,.1,.44,u.metal,u.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,u.fabric,u.cushion,I),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,u.fabric,u.fabricTop,I),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,u.metal)}function iv(i,e,t,n){Gt(i,e,t,.08,.04,.05,u.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,u.fabric,u.cushion,I)}function rv(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),u.wood,u.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,u.white,u.whiteTop,O),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,u.whiteTop,u.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,u.wood,u.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,I);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,O)}function ov(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,u.metal,u.metal,12),i.cyl(0,0,.05,.03,n-.04,u.wood,u.wood,8),i.cyl(0,0,r,n-.04,n,u.wood,u.woodTop,20,I)}function sv(i,e,t,n){Gt(i,e,t,n-.03,.04,.03,u.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,u.body,u.bodyTop,O)}function Ud(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.42,0,.035,u.dark,u.dark,14),i.cyl(0,0,Math.min(.075,r*.18),.03,n-.045,u.metal,u.metal,10),i.cyl(0,0,r,n-.045,n,u.wood,u.woodTop,24,I)}function av(i,e,t,n){let r=Math.min(.1,Math.min(e,t)*.15);Gt(i,e-r,t-r,n-.035,.025,.03,u.metal),i.box(-e/2,e/2,n-.035,n,-t/2,t/2,u.glass,u.glass,G),i.box(-e/2+r,e/2-r,n*.28,n*.31,-t/2+r,t/2-r,u.glass,u.glass,O)}function lv(i,e,t,n){let r=[[-e*.22,-t*.12,e*.58,t*.72,n],[e*.22,t*.12,e*.48,t*.62,n*.82]];for(let[o,s,a,l,c]of r){for(let d of[o-a/2+.025,o+a/2-.025])for(let f of[s-l/2+.025,s+l/2-.025])i.box(d-.025,d+.025,0,c-.03,f-.025,f+.025,u.metal);i.box(o-a/2,o+a/2,c-.03,c,s-l/2,s+l/2,u.wood,u.woodTop,I)}}function Ol(i,e,t,n,r,o){let s=Math.min(.035,Math.min(e/r,n/o)*.12);for(let a=0;a<=r;a++){let l=-e/2+e*a/r;i.box(l-s/2,l+s/2,0,n,-t/2,t/2,u.wood,u.woodTop,a===0||a===r?I:O)}for(let a=0;a<=o;a++){let l=n*a/o;i.box(-e/2,e/2,Math.max(0,l-s/2),Math.min(n,l+s/2),-t/2,t/2,u.wood,u.woodTop,a===0||a===o?I:O)}}function cv(i,e,t,n){i.box(-e/2,e/2,1.35,1.35+n,-t/2,t/2,u.wood,u.woodTop,I);for(let o of[-e*.34,e*.34])i.box(o-.018,o+.018,1.35,1.35+n,-t/2-.012,-t*.12,u.metal,u.metal,O)}function uv(i,e,t,n){let r=n*.72;Gt(i,e,t,r-.06,.055,.04,u.wood,!0),i.box(-e/2,e/2,r-.07,r,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e*.43,e*.43,r-n*.22,r-.07,t/2-.045,t/2,u.wood,u.woodTop,O),i.cyl(0,t*.06,Math.min(e,t)*.085,r,r+n*.07,u.accent,u.woodTop,12,G),i.box(-e*.2,e*.2,r+n*.04,n,-t*.35,-t*.29,u.wood,u.woodTop,I)}function hv(i,e,t,n){let r=n*.7;ln(i,e,t,r,3,r*.58,!0);let o=t/2+.006;for(let s of[-e*.27,0,e*.27])i.seg(s,r*.18,o,s,r*.82,o,O);i.cyl(0,t*.08,Math.min(e,t)*.08,r,r+n*.06,u.accent,u.woodTop,12,G),i.box(-e*.19,e*.19,r+n*.04,n*.9,-t*.36,-t*.3,u.wood,u.woodTop,I),i.loft([-e*.28,e*.28,-t*.4,-t*.25],[-e*.22,e*.22,-t*.37,-t*.28],n*.9,n,u.wood,u.woodTop,I)}function fv(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,u.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,u.dark,u.dark,G)}function dv(i,e,t,n){let r=n*.68,o=Math.min(.09,e*.08);for(let s of[-e/2+o,e/2-o])for(let a of[-t/2+o,t/2-o])i.loft([s-o*.36,s+o*.36,a-o*.36,a+o*.36],[s-o/2,s+o/2,a-o/2,a+o/2],0,r-.03,u.wood,u.woodTop);i.box(-e/2,e/2,r-.08,r,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e*.43,e*.43,n*.18,r-.1,t/2-.065,t/2,u.wood,u.woodTop,I);for(let s of[-e*.28,0,e*.28])i.seg(s,n*.23,t/2+.004,s,r-.16,t/2+.004,O);i.seg(-e*.12,n*.4,t/2+.006,0,n*.52,t/2+.006,G),i.seg(0,n*.52,t/2+.006,e*.12,n*.4,t/2+.006,G),i.seg(e*.12,n*.4,t/2+.006,0,n*.28,t/2+.006,G),i.seg(0,n*.28,t/2+.006,-e*.12,n*.4,t/2+.006,G),i.cyl(0,t*.06,Math.min(e,t)*.09,r,r+n*.075,u.accent,u.woodTop,14,G);for(let s of[-e*.035,0,e*.035])i.box(s-.006,s+.006,r+n*.06,r+n*.2,t*.05,t*.065,u.accent);for(let s of[-e*.28,e*.28])i.cyl(s,t*.02,Math.min(e,t)*.035,r,r+n*.035,u.metal,u.metal,10),i.cyl(s,t*.02,Math.min(e,t)*.017,r+n*.035,r+n*.15,u.metal,u.metal,8);i.box(-e*.18,e*.18,r+n*.04,n*.85,-t*.33,-t*.27,u.wood,u.woodTop,G),i.box(-e*.46,e*.46,n*.875,n*.92,-t*.42,t*.36,u.wood,u.woodTop,I);for(let s of[-e*.4,e*.4])i.box(s-o/2,s+o/2,r,n*.92,-t*.36,-t*.26,u.wood,u.woodTop,I);i.loft([-e/2,e/2,-t/2,t*.42],[-e*.42,e*.42,-t*.42,t*.31],n*.92,n,u.wood,u.woodTop,I)}function pv(i,e,t,n){let r=n*.18;i.box(-e/2,e/2,r,r+n*.14,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e*.43,e*.43,r+n*.14,n*.86,-t/2,-t/2+Math.min(.05,t*.18),u.wood,u.woodTop,I);for(let o of[-e*.36,e*.36])i.box(o-.025,o+.025,0,r,-t/2,-t*.18,u.wood,u.woodTop,I),i.seg(o,n*.02,-t*.18,o,r,t*.34,I);i.loft([-e/2,e/2,-t/2,t/2],[-e*.42,e*.42,-t*.42,t*.36],n*.86,n,u.wood,u.woodTop,I),i.cyl(0,t*.08,Math.min(e,t)*.09,r+n*.14,r+n*.28,u.accent,u.woodTop,12,G);for(let o of[-e*.03,0,e*.03])i.box(o-.005,o+.005,r+n*.25,r+n*.5,t*.075,t*.09,u.accent)}function mv(i,e,t,n){i.box(-e*.43,e*.43,0,n*.06,-t*.34,t*.34,u.dark),ln(i,e,t,n-.025,Math.max(2,Math.round(e/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-e/2+.03,r,t/2+.003,e/2-.03,r,t/2+.003,O);for(let r of[-e*.25,e*.25])for(let o=-1;o<=1;o++)i.seg(r-e*.07,n*(.32+o*.018),t/2+.006,r+e*.07,n*(.32+o*.018),t/2+.006,O);i.box(-e/2,e/2,n-.025,n,-t/2,t/2,u.woodTop,u.woodTop,G)}function gv(i,e,t,n){let r=Math.min(.045,e*.04);for(let s of[-e/2+r,e/2-r])i.box(s-r,s+r,0,n*.64,-t/2+r,t/2-r,u.wood,u.woodTop,I);for(let s of[n*.18,n*.4])i.box(-e/2+r,e/2-r,s-r/2,s+r/2,-t/2+r,t/2-r,u.wood,u.woodTop,O);let o=Math.max(2,Math.round(e/.35));for(let s=1;s<o;s++)i.seg(-e/2+e*s/o,n*.08,t/2+.003,-e/2+e*s/o,n*.58,t/2+.003,O);i.pad(-e/2,e/2,n*.62,n,-t/2,t/2,u.cushion,u.fabricTop,.025,I)}function _v(i,e,t,n){let r=Math.min(.05,e*.035);i.box(-e/2,e/2,0,r,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2,e/2,n-r,n,-t/2,t/2,u.wood,u.woodTop,I);let o=Math.max(5,Math.round(e/.22));for(let s=0;s<o;s++){let a=-e/2+e*(s+.5)/o;i.box(a-r/2,a+r/2,r,n-r,-t/2,t/2,s%2?u.wood:u.body,u.woodTop,O)}}function bv(i,e,t,n){let r=Math.min(.76,n*.52);i.box(-e/2,e/2,r-.06,r,-t/2,t/2,u.wood,u.woodTop,I);for(let o of[-e/2+.05,e/2-.05])i.box(o-.025,o+.025,0,r-.06,-t/2+.04,t/2-.04,u.wood);i.box(-e*.32,e*.32,r+.12,n,-t/2,-t/2+.025,u.glass,u.glass,G),i.box(-e*.2,e*.2,r-.01,r+.09,-t*.1,t*.18,u.body,u.bodyTop,I)}function xv(i,e,t,n){let r=Math.min(.045,e*.06);i.box(-e/2,e/2,n*.24,n*.32,-t/2,t/2,u.wood,u.woodTop,I),i.pad(-e/2+r,e/2-r,n*.32,n*.42,-t/2+r,t/2-r,u.white,u.whiteTop,.025);for(let o of[-t/2,t/2]){for(let s=0;s<7;s++){let a=-e/2+r+(e-2*r)*s/6;i.box(a-r/2,a+r/2,n*.3,n,o-r/2,o+r/2,u.wood,u.woodTop,O)}i.box(-e/2,e/2,n-r,n,o-r,o+r,u.wood,u.woodTop,I)}for(let o of[-e/2,e/2])i.box(o-r,o+r,0,n,-t/2,t/2,u.wood,u.woodTop,I)}function $u(i,e,t,n,r="left"){let o=Math.min(.9,t*.53),s=Math.min(.9,e*.38),a=n*.52,l=r==="left"?-e/2:e/2-s,c=r==="left"?-e/2+s:e/2,h=r==="left"?-e/2:e/2-Math.min(.2,s*.25),d=r==="left"?-e/2+Math.min(.2,s*.25):e/2,f=r==="left"?c:l;i.pad(-e/2,e/2,.08,a,-t/2,-t/2+o,u.fabric,u.fabricTop,.04,I),i.pad(l,c,.08,a,-t/2+o,t/2,u.fabric,u.fabricTop,.04,I),i.box(-e/2,e/2,a,n,-t/2,-t/2+Math.min(.2,o*.25),u.fabric,u.fabricTop,I),i.box(h,d,a,n,-t/2+o,t/2,u.fabric,u.fabricTop,I),i.seg(f,a+.01,-t/2+o*.1,f,a+.01,-t/2+o*.9,O)}function yv(i,e,t,n){dr(i,e,t,n,3);let r=n*.73,o=-t/2+Math.min(.22,t*.28)+.006;for(let s=0;s<2;s++)for(let a=0;a<7;a++){let l=-e*.34+e*.68*a/6+(s?e*.035:0);i.seg(l-.012,r+s*n*.12,o,l+.012,r+s*n*.12,o,G)}}function vv(i,e,t,n){let r=n*.5;Gt(i,e,t,.08,.045,.035,u.wood,!0),i.pad(-e/2,e/2,.08,r,-t/2+t*.18,t/2,u.fabric,u.fabricTop,.04,I),i.loft([-e/2,e/2,-t/2,-t/2+t*.22],[-e/2+.03,e/2-.03,-t/2,-t/2+t*.1],r,n,u.fabric,u.fabricTop,I);for(let o=1;o<3;o++)i.seg(-e/2+e*o/3,r+.006,-t*.18,-e/2+e*o/3,r+.006,t/2-.04,O)}function Mv(i,e,t,n){let r=n*.5,o=Math.min(e*.36,.88),s=Math.min(t*.52,.82);i.pad(-e/2,e/2,.08,r,-t/2,-t/2+s,u.fabric,u.fabricTop,.04,I),i.pad(-e/2,-e/2+o,.08,r,-t/2+s,t/2,u.fabric,u.fabricTop,.04,I),i.box(-e/2,e/2,r,n,-t/2,-t/2+.18,u.fabric,u.fabricTop,I),i.pad(-e/2,-e/2+.18,r,n*.72,-t/2+.03,t/2,u.fabric,u.fabricTop,.035,I),i.pad(e/2-.18,e/2,r,n*.72,-t/2+.03,-t/2+s,u.fabric,u.fabricTop,.035,I)}function Sv(i,e,t,n){let r=n*.5,o=Math.min(e*.27,.82),s=Math.min(t*.48,.82);i.pad(-e/2,e/2,.08,r,-t/2,-t/2+s,u.fabric,u.fabricTop,.04,I);for(let[a,l]of[[-e/2,-e/2+o],[e/2-o,e/2]])i.pad(a,l,.08,r,-t/2+s,t/2,u.fabric,u.fabricTop,.04,I);i.box(-e/2,e/2,r,n,-t/2,-t/2+.18,u.fabric,u.fabricTop,I);for(let a of[-e/2,e/2-.18])i.box(a,a+.18,r,n*.76,-t/2+.18,t/2,u.fabric,u.fabricTop,I)}function Nd(i,e,t,n){let r=n*.48;i.pad(-e/2,e/2,.06,r,-t/2,t/2,u.fabric,u.fabricTop,.06,I),i.pad(-e/2,-e*.28,r,n*.78,-t/2,t/2,u.fabric,u.cushion,.05,I),i.pad(e*.28,e/2,r,n*.78,-t/2,t/2,u.fabric,u.cushion,.05,I),i.loft([-e/2,e/2,-t/2,-t*.2],[-e*.42,e*.42,-t/2,-t*.34],r,n,u.fabric,u.cushion,I)}function Tv(i,e,t,n){Nd(i,e,t,n*.72),i.loft([-e*.42,e*.42,-t/2,-t*.3],[-e/2,e/2,-t/2,-t*.34],n*.48,n,u.fabric,u.cushion,I);for(let r of[-e/2,e/2-e*.14])i.pad(r,r+e*.14,n*.68,n,-t/2,-t*.02,u.fabric,u.cushion,.04,I)}function wv(i,e,t,n){Ku(i,e*.86,t*.72,n);let r=.035;for(let o of[-e*.38,e*.38])i.seg(o,r,-t/2,o,.005,t*.3,I),i.seg(o,.005,t*.3,o,r,t/2,I);for(let o of[-t*.25,t*.25])i.seg(-e*.38,.05,o,e*.38,.05,o,O)}function Ev(i,e,t,n){Ol(i,e,t,n,5,4);let r=e/5,o=n/4;for(let[s,a]of[[0,0],[2,0],[4,0],[1,1],[3,1],[0,2],[2,2],[4,2]]){let l=-e/2+r*(s+.5);i.box(l-r*.28,l+r*.28,o*a+.04,o*(a+1)-.05,-t*.18,t*.18,u.body,u.bodyTop,O)}}function Av(i,e,t,n){Gt(i,e,t,n-.12,.035,.035,u.wood,!0),i.box(-e/2,e/2,n-.12,n-.035,-t/2,t/2,u.wood,u.woodTop,I),i.box(-e/2,e/2,n-.035,n,-t/2,t/2,u.woodTop,u.woodTop,G),i.seg(0,n-.115,t/2+.004,0,n-.04,t/2+.004,O);for(let r of[-e*.25,e*.25])i.seg(r-.045,n-.077,t/2+.008,r+.045,n-.077,t/2+.008,G)}function Rv(i,e,t,n){let r=n*.42;Gt(i,e,t,.09,.04,.04,u.wood,!0),i.pad(-e/2,e/2,.09,r,-t/2+t*.28,t/2,u.fabric,u.fabricTop,.05,I),i.loft([-e/2,e/2,-t/2,-t/2+t*.4],[-e*.44,e*.44,-t/2,-t/2+t*.2],r*.85,n,u.fabric,u.cushion,I),i.pad(-e/2,-e/2+e*.13,r,n*.62,-t/2+t*.22,t/2-.04,u.fabric,u.cushion,.035,O)}function Cv(i,e,t,n){let r=n*.46;i.cyl(0,0,Math.min(e,t)*.42,.04,r,u.fabric,u.cushion,14,I),i.loft([-e/2,e/2,-t/2,t*.08],[-e*.38,e*.38,-t*.44,-t*.18],r*.7,n,u.fabric,u.cushion,I),i.pad(-e*.34,e*.34,r,r+n*.08,-t*.12,t*.34,u.cushion,u.fabricTop,.03,O)}function Iv(i,e,t,n){let r=t*.58,o=n*.43,s=-t/2;i.pad(-e/2,e/2,.08,o,s,s+r,u.fabric,u.cushion,.05,I),i.loft([-e*.46,e*.46,s,s+r*.32],[-e*.4,e*.4,s,s+r*.16],o,n,u.fabric,u.cushion,I);for(let l of[-e/2,e/2-e*.14])i.pad(l,l+e*.14,o,n*.64,s+.03,s+r,u.fabric,u.cushion,.04,I);let a=t*.31;i.box(-e*.34,e*.34,0,o*.55,a-t*.14,a+t*.14,u.dark,u.dark),i.pad(-e*.4,e*.4,o*.5,o*.72,a-t*.16,a+t*.16,u.fabric,u.cushion,.04,I)}function Pv(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.92,0,n*.28,u.fabric,u.cushion,16,I),i.loft([-r*.92,r*.92,-r*.92,r*.92],[-r*.58,r*.58,-r*.62,r*.62],n*.28,n*.78,u.fabric,u.cushion,O),i.loft([-r*.58,r*.58,-r*.62,r*.62],[-r*.18,r*.18,-r*.2,r*.2],n*.78,n,u.cushion,u.cushion,I)}function Fv(i,e,t,n){Ku(i,e,t,n);let r=Math.min(.46,n*.52);i.pad(-e/2+.035,e/2-.035,r,r+.055,-t/2+.08,t/2-.025,u.fabric,u.cushion,.018,O),i.pad(-e/2+.04,e/2-.04,r+.08,n-.04,-t/2,-t/2+.065,u.fabric,u.cushion,.025,I)}function Lv(i,e,t,n){let r=n*.5;i.cyl(0,0,Math.min(e,t)*.34,0,.025,u.metal,u.metal,12),i.cyl(0,0,.035,.025,r,u.metal,u.metal,8),i.loft([-e*.46,e*.46,-t*.38,t*.4],[-e*.4,e*.4,-t*.46,t*.2],r,n*.66,u.body,u.bodyTop,I),i.loft([-e*.4,e*.4,-t*.46,-t*.18],[-e*.3,e*.3,-t*.42,-t*.28],n*.66,n,u.body,u.bodyTop,I)}function Zu(i,e,t,n){let r=Math.min(.1,n*.2);Gt(i,e,t,r,.025,.04,u.metal),i.box(-e/2,e/2,r,n,-t/2,t/2,u.wood,u.woodTop,I);let o=Math.max(2,Math.round(e/.55)),s=t/2+.005;for(let a=1;a<o;a++){let l=-e/2+e*a/o;i.seg(l,r+.03,s,l,n-.03,s,O)}i.seg(-e/2+.03,r+(n-r)*.52,s,e/2-.03,r+(n-r)*.52,s,O);for(let a=0;a<o;a++){let l=-e/2+e*(a+.5)/o;i.seg(l-.045,n*.58,s+.004,l+.045,n*.58,s+.004,G)}}function Dv(i,e,t,n){ln(i,e,t,n,3,n*.58,!0);let r=t/2+.005;for(let o of[n*.34,n*.68])i.seg(-e/2+.03,o,r,e/2-.03,o,r,O)}function Uv(i,e,t,n){dr(i,e,t,n,3);let r=-t/2+Math.min(.24,t*.28)+.008;for(let o=1;o<6;o++){let s=-e*.4+e*.8*o/6;i.seg(s,n*.56,r,s,n*.9,r,O)}}function Nv(i,e,t,n){let r=Math.min(.025,e*.01),o=(e-r*2)/3,s=t*.58,a=n*.52;for(let l=0;l<3;l++){let c=-e/2+l*(o+r),h=c+o;i.pad(c,h,.07,a,-t/2,-t/2+s,u.fabric,u.fabricTop,.045,I),i.pad(c,h,a,n,-t/2,-t/2+t*.14,u.fabric,u.cushion,.04,I)}for(let l of[0,2]){let c=-e/2+l*(o+r);i.pad(c,c+o,.07,a,-t/2+s+r,t/2,u.fabric,u.fabricTop,.045,I)}}function Bl(i,e,t,n,r){let o=r?.075:.045;Gt(i,e,t,n-o,r?.085:.055,.05,u.wood,!0),i.box(-e/2,e/2,n-o,n,-t/2,t/2,u.wood,u.woodTop,I),r&&(i.box(-e*.38,e*.38,n-o-.1,n-o,-t*.36,t*.36,u.wood,u.woodTop,O),i.seg(-e*.38,n+.003,-t*.05,e*.38,n+.003,t*.04,G))}function Bv(i,e,t,n){Gt(i,e,t,n-.08,.055,.045,u.wood,!0),i.pad(-e/2,e/2,n-.08,n,-t/2,t/2,u.fabric,u.cushion,.025,I)}function Ov(i,e,t,n){let r=e*.9,o=Math.min(n*.56,r*.56),s=n-o;i.box(-e*.32,e*.32,0,.035,-t*.34,t*.34,u.metal,u.metal,I),i.box(-.045,.045,.035,s+o*.45,-t*.08,t*.08,u.metal,u.metal),i.box(-r/2,r/2,s,n,-.035,.035,u.dark,u.dark,G)}var kv=(i,e,t)=>{let n=i*.9,r=Math.min(t*.56,n*.56);return{x0:-n/2+.02,x1:n/2-.02,y0:t-r+.02,y1:t-.02,z:.039}};function zv(i,e,t,n){let r=n*.75;Gt(i,e,t,n*.1,.035,.035,u.dark),i.box(-e/2,e/2,n*.1,r,-t/2,t/2,u.dark,u.metal,I),i.box(-e*.34,e*.34,n*.25,n*.62,t/2,t/2+.012,u.glass,u.glass,G),i.box(-e*.25,e*.25,n*.28,n*.35,t/2+.014,t/2+.02,u.accent,u.accent,G),i.cyl(0,0,Math.min(e,t)*.13,r,n,u.dark,u.dark,12,O)}function Vv(i,e,t,n){i.box(-e*.42,e*.42,0,n*.14,-t*.4,t*.4,u.dark,u.dark),i.pad(-e/2,e/2,n*.12,n,-t/2,t/2,u.fabric,u.cushion,.06,I),i.seg(0,n+.002,-t*.42,0,n+.002,t*.42,O),i.seg(-e*.42,n+.002,0,e*.42,n+.002,0,O)}function Gv(i,e,t,n){let r=Math.min(.12,n*.22);Gt(i,e,t,r,.025,.04,u.metal),i.box(-e/2,e/2,r,n,-t/2,t/2,u.wood,u.woodTop,I);let o=Math.min(e*.38,.72),s=t/2+.004;i.box(-o/2,o/2,r+n*.13,n-n*.1,-t/2+.04,t/2+.008,u.dark,u.dark,O),i.seg(-o/2,r+(n-r)*.52,s,o/2,r+(n-r)*.52,s,O);for(let a of[-o/2,o/2])i.seg(a,r+.03,s,a,n-.03,s,I);for(let a of[-e*.34,e*.34])i.seg(a-.055,n*.53,s,a+.055,n*.53,s,G)}function Hv(i,e,t,n){let r=Math.min(.055,e*.06),o=t/2;i.box(-e/2,e/2,0,r,-t/2,o,u.wood,u.woodTop,I),i.box(-e/2,e/2,n-r,n,-t/2,o,u.wood,u.woodTop,I);for(let a of[-e/2,e/2-r])i.box(a,a+r,r,n-r,-t/2,o,u.wood,u.woodTop,I);i.box(-e/2+r,e/2-r,r,n-r,-t/2,-t/2+.025,u.body,u.bodyTop);let s=Math.max(3,Math.round(n/.45));for(let a=1;a<s;a++){let l=n*a/s;i.box(-e/2+r,e/2-r,l-.018,l+.018,-t/2+.025,o-.025,u.glass,u.glass,O)}i.box(-e/2+r,-.012,r,n-r,o-.025,o,u.glass,u.glass,G),i.box(.012,e/2-r,r,n-r,o-.025,o,u.glass,u.glass,G);for(let a of[-.035,.035])i.box(a-.008,a+.008,n*.46,n*.59,o,o+.018,u.metal,u.metal)}function Wv(i,e,t,n){let r=n*.5;i.pad(-e/2,e/2,.08,r,-t/2+t*.12,t/2,u.fabric,u.fabricTop,.04,I),i.pad(-e/2+.05,e/2-.05,r,r+.1,-t/2+t*.3,t/2-.04,u.cushion,u.fabricTop,.03,O),i.loft([-e/2,e/2,-t/2,-t/2+t*.22],[-e/2+.03,e/2-.03,-t/2,-t/2+t*.1],r,n,u.fabric,u.fabricTop,I),i.seg(0,r+.105,-t*.05,0,r+.105,t/2-.06,O)}var Bd={altar:({b:i,w:e,d:t,h:n})=>(dv(i,e,t,n),.5),altar_table:({b:i,w:e,d:t,h:n})=>(uv(i,e,t,n),.5),altar_cabinet:({b:i,w:e,d:t,h:n})=>(hv(i,e,t,n),.5),altar_wall:({b:i,w:e,d:t,h:n})=>(pv(i,e,t,n),!1),armchair:({b:i,w:e,d:t,h:n})=>(dr(i,e,t,n,1),.5),club_chair:({b:i,w:e,d:t,h:n})=>(Nd(i,e,t,n),.5),cocktail_chair:({b:i,w:e,d:t,h:n})=>(Cv(i,e,t,n),.5),wingback_chair:({b:i,w:e,d:t,h:n})=>(Tv(i,e,t,n),.5),recliner:({b:i,w:e,d:t,h:n})=>(Iv(i,e,t,n),.5),rocking_chair:({b:i,w:e,d:t,h:n})=>(wv(i,e,t,n),.5),chaise_longue:({b:i,w:e,d:t,h:n})=>(Rv(i,e,t,n),.5),bean_bag:({b:i,w:e,d:t,h:n})=>(Pv(i,e,t,n),.5),chair_upholstered:({b:i,w:e,d:t,h:n})=>(Fv(i,e,t,n),.5),chair_shell:({b:i,w:e,d:t,h:n})=>(Lv(i,e,t,n),.5),bar_stool:({b:i,w:e,d:t,h:n})=>(tv(i,e,t,n),.5),bed:({b:i,w:e,d:t,h:n})=>(qu(i,e,t,n),.5),bed_double:({b:i,w:e,d:t,h:n})=>(qu(i,e,t,n),.5),bed_single:({b:i,w:e,d:t,h:n})=>(qu(i,e,t,n),.5),bench:({b:i,w:e,d:t,h:n})=>(Dd(i,e,t,n,!1),.5),bunk_bed:({b:i,w:e,d:t,h:n})=>(rv(i,e,t,n),.5),chair:({b:i,w:e,d:t,h:n})=>(Ku(i,e,t,n),.5),coat_rack:({b:i,w:e,d:t,h:n})=>(ev(i,e,t,n),.5),coffee_table:({b:i,w:e,d:t,h:n})=>(sv(i,e,t,n),.5),coffee_table_round:({b:i,w:e,d:t,h:n})=>(Ud(i,e,t,n),.5),coffee_table_glass:({b:i,w:e,d:t,h:n})=>(av(i,e,t,n),.5),nesting_tables:({b:i,w:e,d:t,h:n})=>(lv(i,e,t,n),.5),side_table_round:({b:i,w:e,d:t,h:n})=>(Ud(i,e,t,n),.5),console_table:({b:i,w:e,d:t,h:n})=>(Av(i,e,t,n),.5),lowboard_120:({b:i,w:e,d:t,h:n})=>(Zu(i,e,t,n),.5),lowboard_160:({b:i,w:e,d:t,h:n})=>(Zu(i,e,t,n),.5),lowboard_200:({b:i,w:e,d:t,h:n})=>(Zu(i,e,t,n),.5),highboard:({b:i,w:e,d:t,h:n})=>(Dv(i,e,t,n),.5),chest_drawers_3:({b:i,w:e,d:t,h:n})=>(Ld(i,e,t,n),.5),corner_bench:({b:i,w:e,d:t,h:n})=>(Dd(i,e,t,n,!0),.5),crib:({b:i,w:e,d:t,h:n})=>(xv(i,e,t,n),.5),desk:({b:i,w:e,d:t,h:n})=>(K1(i,e,t,n),.5),dresser:({b:i,w:e,d:t,h:n})=>(Ld(i,e,t,n),.5),nightstand:({b:i,w:e,d:t,h:n})=>(ln(i,e,t,n,1,n*.72,!0),i.seg(-e/2,n*.5,t/2-.02,e/2,n*.5,t/2-.02,O),.5),office_chair:({b:i,w:e,d:t,h:n})=>(nv(i,e,t,n),.5),plant:({b:i,w:e,d:t,h:n})=>(Fd(i,e,t,n),.35),planter_large:({b:i,w:e,d:t,h:n})=>(Fd(i,e,t,n),.5),room_divider:({b:i,w:e,d:t,h:n})=>(_v(i,e,t,n),.5),rug:({b:i,w:e,d:t})=>(Q1(i,e,t),!1),shelf:({b:i,w:e,d:t,h:n})=>(Pd(i,e,t,n),.5),bookshelf_wide:({b:i,w:e,d:t,h:n})=>(Pd(i,e,t,n),.5),cube_shelf_2x2:({b:i,w:e,d:t,h:n})=>(Ol(i,e,t,n,2,2),.5),cube_shelf_4x2:({b:i,w:e,d:t,h:n})=>(Ol(i,e,t,n,4,2),.5),cube_shelf_4x4:({b:i,w:e,d:t,h:n})=>(Ol(i,e,t,n,4,4),.5),room_divider_shelf:({b:i,w:e,d:t,h:n})=>(Ev(i,e,t,n),.5),floating_shelf:({b:i,w:e,d:t,h:n})=>(cv(i,e,t,n),!1),shoe_bench:({b:i,w:e,d:t,h:n})=>(gv(i,e,t,n),.5),shoe_cabinet:({b:i,w:e,d:t,h:n})=>(mv(i,e,t,n),.5),sideboard:({b:i,w:e,d:t,h:n})=>(j1(i,e,t,n),.5),sofa:({b:i,w:e,d:t,h:n})=>(dr(i,e,t,n,Math.max(1,Math.round((e-.4)/.62))),.5),sofa_2:({b:i,w:e,d:t,h:n})=>(dr(i,e,t,n,2),.5),sofa_3:({b:i,w:e,d:t,h:n})=>(dr(i,e,t,n,3),.5),sofa_4:({b:i,w:e,d:t,h:n})=>(dr(i,e,t,n,4),.5),sofa_bed:({b:i,w:e,d:t,h:n})=>(Wv(i,e,t,n),.5),sofa_l:({b:i,w:e,d:t,h:n})=>($u(i,e,t,n),.5),sofa_corner_left:({b:i,w:e,d:t,h:n})=>($u(i,e,t,n,"left"),.5),sofa_corner_right:({b:i,w:e,d:t,h:n})=>($u(i,e,t,n,"right"),.5),sofa_chesterfield:({b:i,w:e,d:t,h:n})=>(yv(i,e,t,n),.5),sofa_velvet_3:({b:i,w:e,d:t,h:n})=>(Uv(i,e,t,n),.5),sofa_modular_5:({b:i,w:e,d:t,h:n})=>(Nv(i,e,t,n),.5),sofa_armless:({b:i,w:e,d:t,h:n})=>(vv(i,e,t,n),.5),sofa_chaise:({b:i,w:e,d:t,h:n})=>(Mv(i,e,t,n),.5),sofa_u:({b:i,w:e,d:t,h:n})=>(Sv(i,e,t,n),.5),ottoman:({b:i,w:e,d:t,h:n})=>(Vv(i,e,t,n),.5),tv_console:({b:i,w:e,d:t,h:n})=>(Gv(i,e,t,n),.5),display_cabinet:({b:i,w:e,d:t,h:n})=>(Hv(i,e,t,n),.5),stool:({b:i,w:e,d:t,h:n})=>(iv(i,e,t,n),.5),table:({b:i,w:e,d:t,h:n})=>(Z1(i,e,t,n),.5),table_120:({b:i,w:e,d:t,h:n})=>(Bl(i,e,t,n,!1),.5),table_160:({b:i,w:e,d:t,h:n})=>(Bl(i,e,t,n,!1),.5),table_200:({b:i,w:e,d:t,h:n})=>(Bl(i,e,t,n,!1),.5),table_solid_220:({b:i,w:e,d:t,h:n})=>(Bl(i,e,t,n,!0),.5),bench_dining_160:({b:i,w:e,d:t,h:n})=>(Bv(i,e,t,n),.5),table_round:({b:i,w:e,d:t,h:n})=>(ov(i,e,t,n),.5),tall_cabinet:({b:i,w:e,d:t,h:n})=>(ln(i,e,t,n,1,n*.5),.5),tv_board:({b:i,w:e,d:t,h:n})=>(J1(i,e,t,n),.5),tv_stand:({b:i,w:e,d:t,h:n})=>(Ov(i,e,t,n),.5),tv_wall:({b:i,w:e,d:t,h:n})=>(fv(i,e,t,n),!1),wood_stove:({b:i,w:e,d:t,h:n})=>(zv(i,e,t,n),.5),vanity:({b:i,w:e,d:t,h:n})=>(bv(i,e,t,n),.5),wardrobe:({b:i,w:e,d:t,h:n})=>(ln(i,e,t,n,Math.max(2,Math.round(e/.5)),n*.5),.5)},Od={tv_stand:kv};function Xv(i,e,t,n){i.box(-e*.38,e*.38,n*.42,n*.72,-t*.4,t*.36,u.dark,u.metal,I),i.loft([-e*.38,e*.38,-t*.4,t*.36],[-e*.34,e*.34,-t*.34,t*.3],n*.72,n*.9,u.metal,u.bodyTop,I);for(let r of[-e*.3,e*.3])i.box(r-.025,r+.025,.08,n*.42,-t*.28,t*.24,u.metal,u.metal,O);for(let r of[-e*.48,e*.38])i.box(r,r+e*.1,n*.62,n*.68,-t*.34,t*.28,u.metal,u.metal,O);for(let r of[-e*.22,0,e*.22])i.cyl(r,t*.375,.035,n*.55,n*.63,u.dark,u.accent,10,G)}function Yv(i,e,t,n){let r=(o,s,a,l,c=0)=>{let h=i.rotated(o,s,c);h.box(o-a/2,o+a/2,.08,n*.32,s-l/2,s+l/2,u.wood,u.woodTop,O),h.pad(o-a*.46,o+a*.46,n*.32,n*.47,s-l*.42,s+l*.32,u.fabric,u.cushion,.035,I),h.box(o-a/2,o+a/2,n*.4,n,s-l/2,s-l*.42,u.wood,u.woodTop,I)};r(0,-t*.3,e*.58,t*.3),r(-e*.34,t*.18,e*.28,t*.28,90),r(e*.34,t*.18,e*.28,t*.28,-90),i.box(-e*.2,e*.2,n*.24,n*.32,t*.05,t*.35,u.wood,u.woodTop,I)}function qv(i,e,t,n){i.box(-e*.42,e*.42,.08,n*.28,-t*.46,t*.18,u.wood,u.woodTop,O),i.rotated(0,t*.18,-20).pad(-e*.4,e*.4,n*.24,n*.37,t*.08,t*.48,u.fabric,u.cushion,.025,I);for(let r of[-e*.34,e*.34])for(let o of[-t*.36,t*.34])i.box(r-.025,r+.025,0,n*.25,o-.025,o+.025,u.metal,u.metal)}function $v(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,Math.min(e,t)*.04,.08,n*.88,u.metal,u.metal,12,O),i.cyl(0,0,r*.22,0,.1,u.body,u.bodyTop,16,I),i.loft([-r*.08,r*.08,-r*.08,r*.08],[-r,r,-r,r],n*.88,n,u.fabric,u.fabricTop,I);for(let o=0;o<8;o++){let s=o*Math.PI/4;i.seg(0,n*.89,0,Math.cos(s)*r,n,Math.sin(s)*r,O)}}function Zv(i,e,t,n){let r=Math.min(e,t)*.035;for(let o of[-e/2+r,e/2-r])for(let s of[-t/2+r,t/2-r])i.box(o-r,o+r,0,n,s-r,s+r,u.wood,u.woodTop,I);for(let o=0;o<7;o++){let s=-e/2+e*o/6;i.box(s-r*.45,s+r*.45,n*.93,n,-t/2,t/2,u.wood,u.woodTop,O)}for(let o of[-t/2+r,t/2-r])i.box(-e/2,e/2,n*.86,n*.94,o-r,o+r,u.wood,u.woodTop,I)}function Kv(i,e,t,n){let r=Math.min(.1,e*.08,t*.08);i.box(-e/2,e/2,0,n,-t/2,-t/2+r,u.wood,u.woodTop,I),i.box(-e/2,e/2,0,n,t/2-r,t/2,u.wood,u.woodTop,I),i.box(-e/2,-e/2+r,0,n,-t/2+r,t/2-r,u.wood,u.woodTop,I),i.box(e/2-r,e/2,0,n,-t/2+r,t/2-r,u.wood,u.woodTop,I),i.box(-e/2+r,e/2-r,n*.72,n*.8,-t/2+r,t/2-r,u.plant,u.plantTop);for(let o of[-e*.28,0,e*.28])i.cyl(o,0,Math.min(e,t)*.07,n*.8,n,u.plant,u.plantTop,7,O)}function Jv(i,e,t,n){let r=Math.min(e,t)*.025;for(let o of[-e/2,e/2])for(let s of[-t/2,t/2])i.box(o-r,o+r,0,n*.68,s-r,s+r,u.metal,u.metal,I);for(let o of[-e/2,e/2])i.seg(o,n*.68,-t/2,0,n,-t/2,I),i.seg(o,n*.68,t/2,0,n,t/2,I);i.seg(0,n,-t/2,0,n,t/2,G);for(let o of[-t/2,t/2])i.seg(-e/2,n*.68,o,e/2,n*.68,o,O);i.box(-e*.15,e*.15,0,n*.62,t/2-r,t/2+r,u.glass,u.glass,G)}function Qv(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r,0,n,u.body,u.bodyTop,20,I),i.cyl(0,0,r*.8,n*.78,n*.9,u.glass,u.accent,20,G);for(let o=0;o<6;o++){let s=o*Math.PI/3;i.cyl(Math.cos(s)*r*.62,Math.sin(s)*r*.62,r*.04,n*.89,n*.93,u.white,u.accent,8)}}function jv(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r,n*.22,n*.38,u.dark,u.metal,18,I),i.cyl(0,0,r*.78,n*.35,n*.4,u.accent,u.accent,16,G);for(let o of[-r*.58,r*.58])i.seg(o,n*.25,0,o*.82,0,0,O)}function eM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.16,0,n*.75,u.wood,u.woodTop,10,O),i.loft([-r*.35,r*.35,-r*.35,r*.35],[-r*.55,r*.55,-r*.55,r*.55],n*.68,n*.9,u.metal,u.metal,I),i.loft([-r*.3,r*.3,-r*.3,r*.3],[-r*.08,r*.08,-r*.08,r*.08],n*.9,n,u.accent,u.accent,G)}function tM(i,e,t,n){let r=n*.48;for(let o of[-e*.28,e*.28])for(let s of[-t*.28,t*.08])i.box(o-.04,o+.04,0,n*.78,s-.04,s+.04,u.wood,u.woodTop,I);i.box(-e*.32,e*.32,r,r+.08,-t*.34,t*.14,u.wood,u.woodTop,I),i.loft([-e*.38,e*.38,-t*.38,t*.18],[-e*.05,e*.05,-t*.32,t*.12],n*.75,n,u.fabric,u.fabricTop,G),i.loft([-e*.23,e*.23,t*.12,t*.28],[-e*.32,e*.32,t*.42,t*.5],r*.78,r,u.accent,u.accent,I);for(let o of[-e*.27,e*.27])i.seg(o,0,-t*.38,o,r,-t*.38,O);for(let o=n*.12;o<r;o+=n*.11)i.seg(-e*.27,o,-t*.385,e*.27,o,-t*.385,O)}function nM(i,e,t,n){i.box(-e/2,e/2,0,n*.75,-t/2,t/2,u.wood,u.woodTop,I),i.loft([-e*.54,e*.54,-t*.54,t*.54],[-e*.08,e*.08,-t*.54,t*.54],n*.75,n,u.body,u.bodyTop,I),i.box(-e*.2,e*.2,0,n*.64,t/2,t/2+.025,u.dark,u.bodyTop,G),i.seg(e*.13,n*.3,t/2+.03,e*.17,n*.3,t/2+.03,G)}function iM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r,n*.34,n*.42,u.metal,u.dark,24,I),i.cyl(0,0,r*.82,n*.41,n*.43,u.dark,u.dark,24,O);for(let o=0;o<8;o++){let s=o*Math.PI/4,a=Math.cos(s)*r*.9,l=Math.sin(s)*r*.9;i.seg(a,0,l,a,n,l,I)}for(let o=0;o<24;o++){let s=o*Math.PI*2/24,a=(o+1)*Math.PI*2/24;i.seg(Math.cos(s)*r*.9,n,Math.sin(s)*r*.9,Math.cos(a)*r*.9,n,Math.sin(a)*r*.9,O)}}function rM(i,e,t,n){let r=[[-e*.28,0,.24],[0,t*.08,.32],[e*.3,-t*.05,.2]];for(let[o,s,a]of r){let l=Math.min(e,t)*a;i.loft([o-l*.72,o+l*.72,s-l*.72,s+l*.72],[o-l,o+l,s-l,s+l],0,n*(.35+a),u.pot,u.bodyTop,I),i.cyl(o,s,l*.65,n*(.35+a),n*(.72+a*.5),u.plant,u.plantTop,7,O)}}function oM(i,e,t,n){i.cyl(0,0,Math.min(e,t)*.2,0,n*.45,u.metal,u.metal,12,I),i.box(-e*.38,e*.38,n*.42,n*.55,-t*.06,t*.06,u.metal,u.metal,O);for(let r of[-e*.33,e*.33])i.seg(r,n*.52,0,r,n,r>0?t*.35:-t*.35,G)}function sM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.plant,u.plantTop,I),i.box(-e*.43,e*.43,n,n+.035,-t*.43,t*.43,u.dark,u.bodyTop,G),i.cyl(-e*.18,0,Math.min(e,t)*.08,n*.7,n*.98,u.accent,u.metal,10,O),i.cyl(e*.18,0,Math.min(e,t)*.08,n*.7,n*.98,u.accent,u.metal,10,O)}function aM(i,e,t,n){let r=Math.min(e,t)*.46;i.cyl(0,0,r,0,n*.94,u.body,u.bodyTop,18,I);for(let o of[n*.16,n*.48,n*.8])for(let s=0;s<18;s++){let a=s*Math.PI*2/18,l=(s+1)*Math.PI*2/18;i.seg(Math.cos(a)*r,o,Math.sin(a)*r,Math.cos(l)*r,o,Math.sin(l)*r,O)}i.box(r*.72,r*1.02,n*.16,n*.24,-.035,.035,u.metal,u.metal,G),i.cyl(0,0,r*.78,n*.94,n,u.dark,u.bodyTop,18,I)}function lM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.22,0,n*.58,u.metal,u.metal,10,O),i.cyl(0,0,r*.46,n*.55,n*.64,u.metal,u.metal,10,I),i.loft([-r*.34,r*.34,-r*.34,r*.34],[-r*.48,r*.48,-r*.48,r*.48],n*.64,n*.9,u.glass,u.accent,G),i.loft([-r*.5,r*.5,-r*.5,r*.5],[-r*.08,r*.08,-r*.08,r*.08],n*.9,n,u.metal,u.metal,I)}function cM(i,e,t,n){i.box(-e/2,e/2,0,n*.86,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e/2,e/2,n*.86,n,-t/2,t/2,u.metal,u.metal,G),i.box(-e*.38,-e*.05,n*.82,n*.99,-t*.32,t*.18,u.dark,u.metal,O),i.cyl(e*.24,-t*.05,Math.min(e,t)*.18,n*.92,n*1.01,u.dark,u.metal,14,I);for(let r of[-e*.25,0,e*.25])i.seg(r,.08,t/2+.003,r,n*.76,t/2+.003,O)}function uM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.5,0,n*.08,u.body,u.bodyTop,16,I),i.cyl(0,0,r*.14,n*.08,n*.77,u.metal,u.metal,12,O),i.cyl(0,0,r*.42,n*.76,n*.86,u.dark,u.accent,16,G),i.loft([-r*.65,r*.65,-r*.65,r*.65],[-r,r,-r,r],n*.86,n,u.metal,u.metal,I)}function zi(i,e,t,n,r){let o=Math.min(e,t)/2,s=n*(r==="tiered"?.3:.38);if(i.cyl(0,0,o*.12,0,s,u.wood,u.woodTop,10,O),r==="tiered"){for(let l=0;l<4;l++){let c=n*(.2+l*.16),h=o*(1-l*.16);i.loft([-h,h,-h,h],[-o*.08,o*.08,-o*.08,o*.08],c,Math.min(n,c+n*.34),u.plant,u.plantTop,l===3?I:O)}return}let a=r==="column"?4:3;for(let l=0;l<a;l++){let c=s+(n-s)*(l/(a+.3)),h=r==="column"?o*(.52-l*.06):o*(.72-l*.08),d=r==="oval"?.72:1;i.loft([-h,h,-h*d,h*d],[-h*.62,h*.62,-h*d*.62,h*d*.62],c,Math.min(n,c+n*.28),u.plant,u.plantTop,l===a-1?I:O)}if(r==="fruit")for(let l=0;l<7;l++){let c=l*Math.PI*2/7;i.cyl(Math.cos(c)*o*.46,Math.sin(c)*o*.4,o*.045,n*(.55+l%3*.08),n*(.58+l%3*.08),u.accent,u.accent,7,G)}}function kd(i,e,t,n,r){let o=Math.min(e,t)/2;for(let[s,a,l]of[[-.25,-.12,.58],[.18,-.18,.7],[-.08,.24,.64],[.3,.2,.48]])i.cyl(s*e,a*t,o*l,.04,n*(.7+l*.3),u.plant,u.plantTop,9,O),r&&i.cyl(s*e+o*.08,a*t,o*.09,n*(.68+l*.3),n*(.72+l*.3),u.accent,u.accent,7,G)}function hM(i,e,t,n){for(let r=0;r<13;r++){let o=(r*37%13/12-.5)*e*.88,s=(r*17%11/10-.5)*t*.88,a=n*(.45+r%5*.12);i.seg(o,0,s,o+(r%3-1)*.06,a,s+(r%4-1.5)*.04,r%3===0?G:O)}}function fM(i,e,t,n){for(let[r,o,s]of[[-.27,-.12,.78],[.22,-.2,1],[.05,.28,.86]]){let a=r*e,l=o*t,c=Math.min(e,t)*.16*s,h=n*s;i.cyl(a,l,c*.18,0,h*.4,u.wood,u.woodTop,9,O);for(let d=0;d<3;d++){let f=h*(.34+d*.16),p=c*(1-d*.12);i.loft([a-p,a+p,l-p,l+p],[a-p*.58,a+p*.58,l-p*.58,l+p*.58],f,Math.min(h,f+h*.3),u.plant,u.plantTop,d===2?I:O)}}}var zd={gas_grill:({b:i,w:e,d:t,h:n})=>(Xv(i,e,t,n),.5),lounge_set_outdoor:({b:i,w:e,d:t,h:n})=>(Yv(i,e,t,n),.5),sun_lounger:({b:i,w:e,d:t,h:n})=>(qv(i,e,t,n),.5),parasol:({b:i,w:e,d:t,h:n})=>($v(i,e,t,n),.5),pergola:({b:i,w:e,d:t,h:n})=>(Zv(i,e,t,n),.5),raised_bed:({b:i,w:e,d:t,h:n})=>(Kv(i,e,t,n),.5),greenhouse:({b:i,w:e,d:t,h:n})=>(Jv(i,e,t,n),.5),hot_tub_outdoor:({b:i,w:e,d:t,h:n})=>(Qv(i,e,t,n),.5),fire_bowl:({b:i,w:e,d:t,h:n})=>(jv(i,e,t,n),.5),garden_torch:({b:i,w:e,d:t,h:n})=>(eM(i,e,t,n),.5),play_tower_slide:({b:i,w:e,d:t,h:n})=>(tM(i,e,t,n),.5),garden_shed:({b:i,w:e,d:t,h:n})=>(nM(i,e,t,n),.5),trampoline:({b:i,w:e,d:t,h:n})=>(iM(i,e,t,n),.5),flower_pots_3:({b:i,w:e,d:t,h:n})=>(rM(i,e,t,n),.5),lawn_sprinkler:({b:i,w:e,d:t,h:n})=>(oM(i,e,t,n),.5),irrigation_valve_box:({b:i,w:e,d:t,h:n})=>(sM(i,e,t,n),.5),rain_barrel:({b:i,w:e,d:t,h:n})=>(aM(i,e,t,n),.5),garden_lantern:({b:i,w:e,d:t,h:n})=>(lM(i,e,t,n),.5),outdoor_kitchen:({b:i,w:e,d:t,h:n})=>(cM(i,e,t,n),.5),patio_heater:({b:i,w:e,d:t,h:n})=>(uM(i,e,t,n),.5),tree_oak:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"round"),.5),tree_lime:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"oval"),.5),tree_birch:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"column"),.5),tree_maple:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"round"),.5),tree_fruit:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"fruit"),.5),tree_spruce:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"tiered"),.5),tree_pine:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"tiered"),.5),tree_thuja:({b:i,w:e,d:t,h:n})=>(zi(i,e,t,n,"column"),.5),shrub:({b:i,w:e,d:t,h:n})=>(kd(i,e,t,n,!1),.5),shrub_flowering:({b:i,w:e,d:t,h:n})=>(kd(i,e,t,n,!0),.5),brush_wild:({b:i,w:e,d:t,h:n})=>(hM(i,e,t,n),.5),trees_group_3:({b:i,w:e,d:t,h:n})=>(fM(i,e,t,n),.5)};function Vd(i,e,t,n,r){i.box(-e/2,e/2,n*.43,n*.49,-t/2,t/2,u.wood,u.woodTop,I);for(let o of[-e*.44,e*.44])for(let s of[-t*.38,t*.38])i.box(o-.035,o+.035,0,n*.43,s-.035,s+.035,u.metal,u.metal,O);if(r){i.box(-e/2,e/2,n*.5,n,-t/2,-t/2+.035,u.body,u.bodyTop,I);for(let o=0;o<6;o++)i.seg(-e*.42+o*e*.168,n*.58,-t/2-.003,-e*.42+o*e*.168,n*.9,-t/2-.003,O)}}function Gd(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2,u.body,u.metal,I);let o=r?6:2;for(let s=1;s<o;s++)i.seg(-e*.46,n*s/o,t/2+.003,e*.46,n*s/o,t/2+.003,O);r||i.seg(0,.06,t/2+.004,0,n-.06,t/2+.004,O)}function Hd(i,e,t,n,r){for(let o of[0,n/3,n*2/3,n])i.box(-e/2,e/2,o,o+.035,-t/2,t/2,u.metal,u.metal,I);if(!r)for(let o of[-e/2,e/2])for(let s of[-t/2,t/2])i.box(o-.025,o+.025,0,n,s-.025,s+.025,u.metal,u.metal,O)}function Wd(i,e,t,n,r){let o=Math.min(e,t)*(r?.36:.28);r?i.cyl(0,0,o,.08,n*.72,u.body,u.bodyTop,14,I):i.lyingCyl("x",0,0,n*.24,o,e*.72,o,u.body,u.bodyTop,14,I),i.box(-e*.18,e*.18,n*.68,n*.9,-t*.12,t*.12,u.dark,u.metal,G);for(let s of[-e*.3,e*.3])i.cyl(s,t*.28,.06,0,.12,u.dark,u.dark,10,O)}function Xd(i,e,t,n,r){let o=r?t*.42:t*.22;for(let s of[-e*.42,e*.42])i.seg(s,0,o,s,n,-o,I),r&&i.seg(s,0,-o,s,n,-o,O);for(let s=1;s<8;s++)i.seg(-e*.42,n*s/8,o-o*2*s/8,e*.42,n*s/8,o-o*2*s/8,G)}function Yd(i,e,t,n,r){let o=r?4:2,s=r?5:2;for(let a=0;a<s;a++)for(let l=0;l<o;l++){let c=-e/2+e*l/o+.015,h=-e/2+e*(l+1)/o-.015,d=n*a/s,f=n*(a+1)/s-.018;i.box(c,h,d,f,-t/2,t/2,r?u.body:u.wood,r?u.bodyTop:u.woodTop,O)}}function dM(i,e,t,n){for(let r=0;r<4;r++)i.cyl(0,0,Math.min(e,t)*.46,n*r/4,n*(r+1)/4-.02,u.dark,u.metal,16,I)}function pM(i,e,t,n){i.box(-e/2,e/2,0,.06,-t/2,t/2,u.metal,u.metal,I);for(let r=0;r<4;r++){let o=-e*.38+r*e*.25;i.seg(o,.05,-t*.35,o,n,0,G),i.seg(o,n,0,o,.05,t*.35,G)}}function mM(i,e,t,n){i.box(-e*.4,e*.4,0,.06,-t*.4,t*.4,u.metal,u.metal,I),i.box(-.035,.035,0,n,-.035,.035,u.metal,u.metal,I),i.seg(0,n*.85,0,e*.35,n*.85,0,G)}function gM(i,e,t,n){i.box(-e/2,e/2,0,n*.72,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e*.4,e*.4,n*.72,n*.82,-t*.38,t*.38,u.metal,u.metal,G),i.seg(0,n*.82,-t*.2,0,n,-t*.2,I)}function _M(i,e,t,n){i.box(-e*.28,e*.28,0,n,-t*.3,t*.3,u.body,u.bodyTop,I),i.box(-e*.18,e*.18,n*.62,n*.78,t*.31,t*.34,u.dark,u.dark,G),i.seg(e*.28,n*.7,0,e*.48,n*.25,t*.25,G)}var qd={workbench:({b:i,w:e,d:t,h:n})=>(Vd(i,e,t,n,!1),.5),workbench_pegboard:({b:i,w:e,d:t,h:n})=>(Vd(i,e,t,n,!0),.5),tool_cabinet:({b:i,w:e,d:t,h:n})=>(Gd(i,e,t,n,!1),.5),tool_chest:({b:i,w:e,d:t,h:n})=>(Gd(i,e,t,n,!0),.5),storage_rack_garage:({b:i,w:e,d:t,h:n})=>(Hd(i,e,t,n,!1),.5),wall_shelf_garage:({b:i,w:e,d:t,h:n})=>(Hd(i,e,t,n,!0),!1),air_compressor:({b:i,w:e,d:t,h:n})=>(Wd(i,e,t,n,!1),.5),shop_vacuum:({b:i,w:e,d:t,h:n})=>(Wd(i,e,t,n,!0),.5),ladder_step:({b:i,w:e,d:t,h:n})=>(Xd(i,e,t,n,!0),.5),ladder_extension:({b:i,w:e,d:t,h:n})=>(Xd(i,e,t,n,!1),.5),storage_boxes:({b:i,w:e,d:t,h:n})=>(Yd(i,e,t,n,!1),.5),parts_bin:({b:i,w:e,d:t,h:n})=>(Yd(i,e,t,n,!0),.5),tire_stack:({b:i,w:e,d:t,h:n})=>(dM(i,e,t,n),.5),bike_rack:({b:i,w:e,d:t,h:n})=>(pM(i,e,t,n),.5),repair_stand:({b:i,w:e,d:t,h:n})=>(mM(i,e,t,n),.5),utility_sink_garage:({b:i,w:e,d:t,h:n})=>(gM(i,e,t,n),.5),charging_bay:({b:i,w:e,d:t,h:n})=>(_M(i,e,t,n),.5)};var $d=.06;function bM(i,e,t,n){let r=Math.max(1,Math.round(e/.6));ln(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,u.whiteTop,u.whiteTop,I)}function xM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.white,u.whiteTop,I);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,O);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,G),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,G)}function yM(i,e,t,n){let r=t/2-$d;i.box(-e/2,e/2,.02,n,-t/2,r,u.body,u.bodyTop,I),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,u.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,O),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,O))}function Ju(i,e,t,n,r){let o=i.p.length;vM(i,e,t,n,r),e.mirror&&ur(i,o)}function vM(i,e,t,n,r){let o=e.rotation*it,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(v,S)=>[e.x+l*v*s-S*a,e.z+l*v*a+S*s],h=t+.05,d=t+e.h-.02,f=new ae(.75,.1,.14),p=new ae(u.dark),g=new ae(u.accent),b=e.w/2-.006,_=(v,S,w)=>{let A=w/m,x=new ae(2043212).lerp(f,A),T=new ae(u.body).lerp(f,A*.8),C=Math.cos(w),P=Math.sin(w),L=(U,N)=>c(v+S*(U*C-N*P),e.d/2+U*P+N*C),F=(U,N,B,V)=>{let[z,W,H,ie]=U;i.tri([z[0],N,z[1]],[W[0],N,W[1]],[H[0],B,H[1]],V),i.tri([z[0],N,z[1]],[H[0],B,H[1]],[ie[0],B,ie[1]],V)},E=(U,N,B,V,z,W,H,ie=H)=>{let K=[L(U,W),L(N,W),L(N,z),L(U,z)];F([K[0],K[1],K[1],K[0]],B,V,ie),F([K[3],K[2],K[2],K[3]],B,V,H),F([K[0],K[3],K[3],K[0]],B,V,H),F([K[1],K[2],K[2],K[1]],B,V,H),F([K[0],K[1],K[2],K[3]],V,V,H),F([K[3],K[2],K[1],K[0]],B,B,H)};return E(0,b,h,d,-$d,0,T,x),E(b-.05,b-.03,t+e.h*.45,t+e.h*.75,.005,.025,g),E},m=1.83;_(-e.w/2,1,n*m)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,p),_(e.w/2,-1,r*m)(.06,b-.06,t+e.h*.52,t+e.h*.86,.001,.005,p)}function MM(i,e,t,n){ln(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,u.dark,u.dark,I);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,u.dark,1451583,12,G)}}function SM(i,e,t,n){ln(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,u.whiteTop,u.whiteTop,I),i.box(r/2,e/2,n-.04,n,-t/2,t/2,u.whiteTop,u.whiteTop,I),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,u.whiteTop,u.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,u.whiteTop,u.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,u.metal,u.metal,G),i.cyl(0,-t/2+.05,.02,n,n+.28,u.metal,u.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,u.metal)}function TM(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,u.body,u.bodyTop,I),hr(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function wM(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,u.body,u.bodyTop,I),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,u.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,u.dark,u.dark,G),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,G);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,O);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,G),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,G)}function EM(i,e,t,n){let r=Math.min(.055,e*.075),o=t/2,s=-t/2,a=Math.min(.62,n*.3);i.box(-e/2,e/2,.02,n,s,s+.035,u.body,u.bodyTop,I),i.box(-e/2,-e/2+r,.02,n,s,o,u.body,u.bodyTop,I),i.box(e/2-r,e/2,.02,n,s,o,u.body,u.bodyTop,I),i.box(-e/2,e/2,n-r,n,s,o,u.body,u.bodyTop,I),i.box(-e/2,e/2,.02,a,s,o-.015,u.body,u.bodyTop,I),i.box(-e/2+.02,e/2-.02,0,.08,s+.02,o-.04,u.dark),i.box(-e/2+r,e/2-r,a,n-r,s+.036,s+.05,u.dark,u.dark);for(let l of[a+(n-a)*.25,a+(n-a)*.5,a+(n-a)*.75])i.box(-e/2+r,e/2-r,l-.012,l+.012,s+.05,o-.025,u.glass,u.glass,G);i.box(-e/2+r,-r*.35,a+r,n-r*1.5,o-.012,o,u.glass,u.glass,O),i.box(r*.35,e/2-r,a+r,n-r*1.5,o-.012,o,u.glass,u.glass,O),i.box(-r*.35,r*.35,a,n-r,o-.02,o+.005,u.metal,u.metal,I),i.box(-e/2,e/2,a-r*.5,a+r*.5,o-.02,o+.005,u.body,u.bodyTop,I),i.seg(-r*1.4,a+(n-a)*.46,o+.012,-r*1.4,a+(n-a)*.62,o+.012,G),i.seg(r*1.4,a+(n-a)*.46,o+.012,r*1.4,a+(n-a)*.62,o+.012,G),i.seg(0,.12,o+.012,0,a-.12,o+.012,O)}function AM(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,u.body,u.bodyTop,I),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,u.dark),hr(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,u.whiteTop,u.whiteTop,I)}function RM(i,e,t,n){i.box(-e*.16,e*.16,n*.42,n,-t/2,-t*.18,u.metal,u.metal,I),i.loft([-e/2,e/2,-t/2,t/2],[-e*.18,e*.18,-t/2,-t*.1],0,n*.48,u.metal,u.whiteTop,I),i.box(-e*.4,e*.4,0,n*.06,t*.18,t/2,u.dark,u.dark,G)}function CM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e*.4,e*.18,n*.17,n*.82,t/2,t/2+.006,u.dark,u.glass,G),i.cyl(e*.34,t/2+.008,Math.min(e,n)*.055,n*.58,n*.69,u.accent,u.accent,10,G),i.seg(e*.28,n*.34,t/2+.009,e*.4,n*.34,t/2+.009,O)}function IM(i,e,t,n){let r=n*.8,o=t/2;i.box(-e*.46,e*.46,.025,r,-t/2,o,u.white,u.whiteTop,I),i.box(-e*.48,e*.48,0,.035,-t*.44,t*.44,u.dark,u.dark),i.box(-e*.42,e*.42,.055,r-.035,o,o+.012,u.white,u.whiteTop,I),i.seg(-e*.4,r*.28,o+.014,e*.4,r*.28,o+.014,O),i.seg(-e*.28,r*.58,o+.015,e*.28,r*.58,o+.015,G),i.seg(-e*.2,r*.62,o+.015,e*.2,r*.62,o+.015,O),i.box(-e/2,e/2,r-.025,r,-t/2,t/2,u.white,u.whiteTop,I);let s=Math.min(.012,e*.03),a=e*.1,l=-t*.16,c=t*.08,h=6718637;i.cyl(a,l,s*1.55,r,r+s*1.8,h,h,12,I),i.cyl(a,c,e*.16,r,r+.01,u.whiteTop,u.whiteTop,18,O),i.seg(a-e*.1,r+.012,c,a+e*.1,r+.012,c,O),i.seg(a,r+.012,c-t*.11,a,r+.012,c+t*.11,O);let d=n*.925,f=n*.055,p=(l+c)/2,g=(c-l)/2,b=[[r+s,l],[d,l]];for(let _=1;_<=8;_++){let m=Math.PI-Math.PI*_/8;b.push([d+Math.sin(m)*f,p+Math.cos(m)*g])}b.push([n*.89,c]),i.tubeYZ(a,b,s,h,10),i.cyl(a,c,s*1.25,n*.89-s,n*.905,u.dark,h,10,O),i.lyingCyl("x",a+e*.055,l,r+s*1.6,r+s*2.5,e*.15,s*.9,u.dark,h,8)}function PM(i,e,t,n){let r=Math.max(.42,Math.min(e,t)*.46);i.box(-e/2,e/2,0,n-.04,-t/2,-t/2+r,u.body,u.bodyTop,I),i.box(-e/2,-e/2+r,0,n-.04,-t/2+r,t/2,u.body,u.bodyTop,I),i.box(-e/2,e/2,n-.04,n,-t/2,-t/2+r,u.whiteTop,u.whiteTop,G),i.box(-e/2,-e/2+r,n-.04,n,-t/2+r,t/2,u.whiteTop,u.whiteTop,G),i.seg(-e/2+r,.08,-t/2+r,-e/2+r,n-.08,-t/2+r,O);let o=-t/2+r+.006,s=-e/2+r+.006;for(let a=1;a<3;a++){let l=-e/2+r+(e-r)*a/3;i.seg(l,.08,o,l,n-.08,o,O);let c=-t/2+r+(t-r)*a/3;i.seg(s,.08,c,s,n-.08,c,O)}i.seg(-e/2+r+.08,n*.72,o+.004,-e/2+r+.22,n*.72,o+.004,G),i.seg(s+.004,n*.72,-t/2+r+.08,s+.004,n*.72,-t/2+r+.22,G)}var Zd={fridge:({b:i,w:e,d:t,h:n})=>(xM(i,e,t,n),.5),fridge_smart:({b:i,w:e,d:t,h:n})=>(yM(i,e,t,n),.5),island:({b:i,w:e,d:t,h:n})=>(AM(i,e,t,n),.5),kitchen:({b:i,w:e,d:t,h:n})=>(bM(i,e,t,n),.5),kitchen_corner:({b:i,w:e,d:t,h:n})=>(PM(i,e,t,n),.5),kitchen_display:({b:i,w:e,d:t,h:n})=>(EM(i,e,t,n),.5),kitchen_tall:({b:i,w:e,d:t,h:n})=>(wM(i,e,t,n),.5),kitchen_wall:({b:i,w:e,d:t,h:n})=>(TM(i,e,t,n),!1),microwave:({b:i,w:e,d:t,h:n,base:r})=>(CM(i,e,t,n),r>.05?!1:.5),range_hood:({b:i,w:e,d:t,h:n})=>(RM(i,e,t,n),!1),sink:({b:i,w:e,d:t,h:n})=>(SM(i,e,t,n),.5),stove:({b:i,w:e,d:t,h:n})=>(MM(i,e,t,n),.5),water_purifier:({b:i,w:e,d:t,h:n})=>(IM(i,e,t,n),.5)};function FM(i,e,t,n){let r=e*.56,o=n*.45,s=n*.38;i.box(-e/2,e/2,0,n,-t/2,-t/2+.06,u.wood,u.woodTop,I),i.box(-r/2,r/2,s,s+o,t/2-.045,t/2,u.dark,u.dark,G),i.box(-e/2,e/2,.04,n*.2,-t/2,t/2,u.wood,u.woodTop,I);for(let a of[-1,1]){let l=a<0?-e/2:e*.37,c=a<0?-e*.37:e/2;i.box(l,c,n*.23,n*.92,-t/2+.04,t*.22,u.wood,u.woodTop,I);for(let h of[n*.45,n*.68])i.seg(l+.025,h,t*.225,c-.025,h,t*.225,O)}}var LM=(i,e,t)=>({x0:-i*.28+.02,x1:i*.28-.02,y0:t*.38+.02,y1:t*.83-.02,z:e/2+.004});function DM(i,e,t,n){let r=t*.48;i.box(-e/2,e/2,0,n,-t/2,-t/2+r,u.wood,u.woodTop,I);let o=n*.58;i.box(-e*.43,e*.43,o,o+.055,-t/2+r,t*.05,u.white,u.whiteTop,I);for(let s=1;s<14;s++){let a=-e*.43+e*.86*s/14;i.seg(a,o+.057,-t/2+r,a,o+.057,t*.05,O)}i.box(-e*.32,e*.32,0,n*.36,t*.16,t/2,u.wood,u.woodTop,I),i.box(-e*.38,e*.38,n*.36,n*.43,t*.12,t/2,u.fabric,u.cushion,I)}function UM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.44,0,n*.35,u.pot,u.pot,12,I);for(let o=0;o<7;o++){let s=o/7*Math.PI*2,a=Math.cos(s)*r*.2,l=Math.sin(s)*r*.2;i.seg(0,n*.3,0,a,n*.87,l,O),i.cyl(a,l,r*.08,n*.72,n,u.wood,u.woodTop,7,o<3?G:null)}}function NM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.38,0,n*.25,u.pot,u.pot,12,I),i.cyl(0,0,r*.07,n*.2,n*.8,u.wood,u.wood,7);for(let o=0;o<8;o++){let s=o/8*Math.PI*2,a=Math.cos(s)*r*.38,l=Math.sin(s)*r*.38,c=n*(.42+o%3*.14);i.rotated(a,l,s*180/Math.PI).loft([-r*.28,r*.28,-.03,.03],[-r*.08,r*.08,-.02,.02],c,c+n*.12,u.plant,u.plantTop,O)}}function BM(i,e,t,n){i.cyl(0,0,Math.min(e,t)/2,0,n,u.fabric,u.fabricTop,28,O)}function OM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.dark,u.metal,I),i.box(-e*.42,e*.42,n*.14,n*.82,t/2,t/2+.012,u.glass,u.glass,G);for(let r=0;r<6;r++){let o=-e*.34+e*.68*r/5;i.loft([o-.045,o+.045,t/2+.014,t/2+.024],[o-.012,o+.012,t/2+.014,t/2+.024],n*.18,n*(.43+r%2*.1),u.accent,u.accent,G)}}var Kd={media_wall_tv:({b:i,w:e,d:t,h:n})=>(FM(i,e,t,n),.5),piano_upright:({b:i,w:e,d:t,h:n})=>(DM(i,e,t,n),.5),vase_pampas:({b:i,w:e,d:t,h:n})=>(UM(i,e,t,n),.35),plant_monstera:({b:i,w:e,d:t,h:n})=>(NM(i,e,t,n),.4),rug_round:({b:i,w:e,d:t,h:n})=>(BM(i,e,t,n),!1),fireplace_wall_electric:({b:i,w:e,d:t,h:n})=>(OM(i,e,t,n),.25)},Jd={media_wall_tv:LM};function kM(i,e,t,n){i.box(-e/2,e/2,Math.max(0,n-.04),n,-t/2,t/2,u.whiteTop,u.whiteTop,I)}function zM(i,e,t){let r=[[-e/2,-t/2],[e/2,-t/2],[e/2,t/2],[-e/2,t/2]];for(let o=0;o<4;o++)i.seg(r[o][0],.012,r[o][1],r[(o+1)%4][0],.012,r[(o+1)%4][1],O);i.seg(-e*.15,.012,t/2-.45,0,.012,t/2-.2,I),i.seg(0,.012,t/2-.2,e*.15,.012,t/2-.45,I)}function VM(i,e,t,n){i.box(-e*.38,e*.38,0,n*.05,-t/2-t*.02,-t*.1,u.dark,u.body,O),i.box(-e*.32,e*.32,n*.04,n*.92,-t/2,-t*.18,u.body,u.bodyTop,I),i.box(-e*.34,e*.34,n*.9,n,-t/2-t*.01,-t*.17,u.metal,u.bodyTop,I),i.box(-e*.23,e*.23,n*.75,n*.82,-t*.175,-t*.15,u.accent,u.accent,G),i.box(-e*.22,e*.22,n*.02,n*.055,-t*.18,t*.17,u.dark,u.bodyTop,O)}function GM(i,e,t,n){let r=Math.min(.055,e*.07);i.box(-e*.48,e*.48,0,n*.045,-t*.48,t*.4,u.dark,u.bodyTop,O);for(let o of[-e*.43,e*.43])i.box(o-r/2,o+r/2,n*.04,n*.7,-t*.44,t*.28,u.body,u.bodyTop,I);i.box(-e*.45,e*.45,n*.06,n*.52,-t*.48,-t*.42,u.body,u.bodyTop,O),i.box(-e/2,e/2,n*.69,n*.84,-t/2,t*.42,u.body,u.metal,I),i.loft([-e*.33,e*.33,-t*.17,t*.34],[-e*.27,e*.27,-t*.12,t*.27],n*.05,n*.31,u.white,u.whiteTop,I),i.box(-e*.23,e*.23,n*.16,n*.22,t*.325,t*.345,u.accent,u.accent,G);for(let o of[-e*.29,e*.29])i.lyingCyl("x",o,t*.08,n*.015,n*.145,r*2,n*.13,u.dark,u.metal,10,O)}var Qd={parking:({b:i,w:e,d:t})=>(zM(i,e,t),!1),robot_mower:({b:i,w:e,d:t,h:n})=>(GM(i,e,t,n),!1),robot_vacuum:({b:i,w:e,d:t,h:n})=>(VM(i,e,t,n),!1),stairwell:()=>!1,worktop:({b:i,w:e,d:t,h:n})=>(kM(i,e,t,n),!1)};function Qu(i,e,t,n,r){let o=r==="stand"?n*.72:n*.92;if(i.box(-e/2,e/2,o,n,-t/2,t*.05,u.wood,u.woodTop,I),r!=="stand"){let s=r==="corner"?e*.15:-e*.08;i.box(-e/2,s,o,n,t*.05,t/2,u.wood,u.woodTop,O)}for(let s of[-e*.44,e*.44])i.box(s-.035,s+.035,0,o,-t*.38,-t*.3,u.metal,u.metal,O);if(r==="stand"){for(let s of[-e*.4,e*.4])i.box(s-.06,s+.06,0,o,-t*.15,t*.15,u.metal,u.metal,G);i.box(-e*.45,e*.45,0,.05,-t*.32,t*.32,u.metal,u.metal,O)}}function jd(i,e,t,n,r){if(i.pad(-e*.38,e*.38,n*.38,n*.48,-t*.32,t*.2,u.fabric,u.cushion,.03,I),i.pad(-e*.4,e*.4,n*.48,n*(r?.96:.85),-t*.34,-t*.22,u.fabric,u.cushion,.04,G),r){i.cyl(0,0,.045,.08,n*.42,u.metal,u.metal,10,O);for(let o=0;o<5;o++){let s=o*Math.PI*2/5;i.seg(0,.08,0,Math.cos(s)*e*.42,.03,Math.sin(s)*t*.42,O)}}else for(let o of[-e*.34,e*.34])for(let s of[-t*.25,t*.16])i.box(o-.025,o+.025,0,n*.4,s-.025,s+.025,u.metal,u.metal,O)}function ep(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2,u.body,u.metal,I);for(let o=1;o<r;o++)i.seg(-e*.44,n*o/r,t/2+.003,e*.44,n*o/r,t/2+.003,O)}function HM(i,e,t,n){for(let r of[0,.25,.5,.75,1])i.box(-e/2,e/2,n*r,n*r+.035,-t/2,t/2,u.wood,u.woodTop,I);for(let r of[-e/2,e/2])i.box(r-.025,r+.025,0,n,-t/2,t/2,u.wood,u.woodTop,O)}function tp(i,e,t,n,r){let o=e/r;for(let s=0;s<r;s++){let a=-e/2+o*(s+.5);i.box(a-o*.44,a+o*.44,n*.25,n,-t*.08,t*.08,u.dark,u.dark,G)}i.box(-.025,.025,0,n*.28,-.025,.025,u.metal,u.metal,O),i.box(-e*.18,e*.18,0,.025,-t*.4,t*.4,u.metal,u.metal,O)}function WM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.dark,u.metal,I),i.box(-e*.36,e*.36,n*.12,n*.86,t/2,t/2+.01,u.glass,u.dark,G);for(let r=0;r<3;r++)i.cyl(0,t/2+.015,e*.12,n*(.2+r*.25),n*(.32+r*.25),u.accent,u.accent,10,G)}var np={desk_l:({b:i,w:e,d:t,h:n})=>(Qu(i,e,t,n,"l"),.5),desk_corner:({b:i,w:e,d:t,h:n})=>(Qu(i,e,t,n,"corner"),.5),desk_sit_stand:({b:i,w:e,d:t,h:n})=>(Qu(i,e,t,n,"stand"),.5),chair_ergonomic:({b:i,w:e,d:t,h:n})=>(jd(i,e,t,n,!0),.5),chair_visitor:({b:i,w:e,d:t,h:n})=>(jd(i,e,t,n,!1),.5),filing_cabinet:({b:i,w:e,d:t,h:n})=>(ep(i,e,t,n,4),.5),drawer_unit_office:({b:i,w:e,d:t,h:n})=>(ep(i,e,t,n,3),.5),bookcase_office:({b:i,w:e,d:t,h:n})=>(HM(i,e,t,n),.5),monitor_single:({b:i,w:e,d:t,h:n})=>(tp(i,e,t,n,1),!1),monitor_dual:({b:i,w:e,d:t,h:n})=>(tp(i,e,t,n,2),!1),pc_tower:({b:i,w:e,d:t,h:n})=>(WM(i,e,t,n),.5)};function XM(i,e,t,n){i.pad(-e/2,e/2,0,n,-t/2,t/2,u.white,u.whiteTop,Math.min(.04,e*.1),I);let r=t/2+.006;i.cyl(0,t/2,e*.095,n*.69,n*.705,u.dark,u.dark,18,G);for(let o=0;o<7;o++){let s=n*(.16+o*.055);i.seg(-e*.34,s,r,e*.34,s,r,O)}for(let o=-3;o<=3;o++)i.seg(o*e*.085,n+.003,-t*.27,o*e*.085,n+.003,t*.22,O)}function YM(i,e,t,n){let r=Math.min(e,t)*.46;i.cyl(0,0,r,n*.06,n*.9,u.dark,u.fabricTop,18,I),i.cyl(0,0,r*.94,n*.9,n,u.dark,u.dark,18,G),i.cyl(0,0,r*.72,n,n+.006,u.dark,u.dark,18,O);for(let o of[-e*.12,e*.12])i.cyl(o,0,e*.014,n+.007,n+.01,u.white,u.white,8)}function qM(i,e,t,n){i.box(-e*.28,e*.28,1.85,1.85+n*.7,-t/2,-t/2+t*.12,u.white,u.whiteTop,I),i.box(-e*.08,e*.08,1.85+n*.3,1.85+n*.45,-t/2+t*.1,0,u.metal,u.metal,O),i.lyingCyl("z",0,t*.16,1.85+n*.17,1.85+n*.78,t*.58,n*.58,u.white,u.whiteTop,14,I),i.lyingCyl("z",0,t*.47,1.85+n*.28,1.85+n*.67,t*.08,n*.38,u.dark,u.dark,16,G),i.lyingCyl("z",0,t*.515,1.85+n*.38,1.85+n*.57,t*.025,n*.18,u.accent,u.dark,14)}function $M(i,e,t,n){let o=t/2;i.pad(-e/2,e/2,.95,.95+n,-t/2,o,u.dark,u.metal,Math.min(.018,e*.12),I);for(let s=0;s<3;s++)for(let a=0;a<3;a++){let l=(a-1)*e*.22,c=.95+n*(.7-s*.105);i.seg(l-e*.025,c,o+.005,l+e*.025,c,o+.005,G)}i.cyl(0,o,e*.12,.95+n*.22,.95+n*.235,u.accent,u.dark,14,G),i.lyingCyl("x",e*.22,o+t*.12,.95+n*.31,.95+n*.4,e*.75,n*.085,u.metal,u.metal,10,I)}function ZM(i,e,t,n){let r=n*.96;i.lyingCyl("x",0,-t*.18,r,n,e,t*.16,u.metal,u.metal,10,I),i.box(-e*.06,e*.06,r-n*.055,r+n*.015,-t*.28,t*.02,u.dark,u.dark,G);let o=e*.12,s=6;for(let a of[-1,1]){let l=a<0?-e/2:o,h=((a<0?-o:e/2)-l)/s;for(let d=0;d<s;d++){let f=l+d*h,p=d%2?t*.12:-t*.04;i.box(f,f+h*.82,n*.04,r,p-t*.18,p+t*.18,u.fabric,u.fabricTop,d===0||d===s-1?I:null)}}}function KM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.dark,u.bodyTop,I),i.box(-e*.42,e*.42,n*.06,n*.94,t*.48,t*.515,u.glass,u.glass,O);for(let r=0;r<7;r++){let o=n*(.16+r*.105);i.box(-e*.34,e*.34,o,o+n*.035,t*.505,t*.535,r%3===1?u.metal:u.bodyTop,u.bodyTop,O)}i.box(-e*.22,e*.22,n*.82,n*.86,t*.525,t*.545,u.accent,u.accent,G),i.cyl(e*.38,t*.525,e*.018,n*.48,n*.5,u.metal,u.metal,8,O)}function JM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.dark,u.bodyTop,I);let r=e*.035,o=(e*.72-r*3)/4;for(let s=0;s<4;s++){let a=-e*.36+s*(o+r);i.box(a,a+o,n*.13,n*.86,t*.49,t*.525,u.body,u.metal,O),i.box(a+o*.18,a+o*.82,n*.18,n*.205,t*.52,t*.54,u.accent,u.accent,G)}i.cyl(e*.41,t*.52,e*.025,n*.7,n*.73,u.accent,u.accent,10,G)}function QM(i,e,t,n){let r=Math.min(e,t)*.47;i.cyl(0,0,r,0,n*.58,u.white,u.whiteTop,16,I),i.cyl(0,0,r*.82,n*.58,n,u.white,u.whiteTop,16,O),i.seg(-e*.16,n*.18,t*.455,e*.16,n*.18,t*.455,G)}function jM(i,e,t,n){i.pad(-e/2,e/2,1.35,1.35+n,-t/2,t/2,u.body,u.bodyTop,Math.min(.018,e*.1),I),i.box(-e*.37,e*.37,1.35+n*.34,1.35+n*.82,t*.48,t*.54,u.glass,u.glass,G),i.box(-e*.28,e*.28,1.35+n*.12,1.35+n*.22,t*.5,t*.55,u.metal,u.metal,O)}function eS(i,e,t,n){let r=Math.min(e,t)*.47;i.cyl(0,0,r,0,n*.7,u.white,u.whiteTop,16,I),i.cyl(0,0,r*.78,n*.7,n,u.white,u.whiteTop,16,O);for(let o=0;o<8;o++){let s=o/8*Math.PI*2,a=Math.cos(s)*r*.62,l=Math.sin(s)*r*.62;i.cyl(a,l,r*.055,n*.12,n*.16,u.dark,u.dark,6)}i.seg(-e*.1,n*.12,t*.46,e*.1,n*.12,t*.46,G)}function tS(i,e,t,n){i.box(-e/2,e/2,1.85,1.85+n,-t/2,t/2,u.body,u.bodyTop,I),i.loft([-e*.32,e*.32,t*.42,t*.56],[-e*.25,e*.25,t*.45,t*.58],1.85+n*.48,1.85+n*.82,8003636,16725592,G),i.box(-e*.23,e*.23,1.85+n*.13,1.85+n*.25,t*.48,t*.56,u.accent,u.accent,O)}function nS(i,e,t,n){i.box(-e/2,e/2,.85,.85+n,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e*.43,e*.43,.85+n*.07,.85+n*.93,t*.47,t*.54,u.glass,u.glass,O);for(let o=0;o<3;o++)for(let s=0;s<5;s++){let a=(s-2)*e*.145,l=.85+n*(.22+o*.25);i.box(a-e*.045,a+e*.045,l,l+n*.075,t*.51,t*.56,o===0?u.accent:u.metal,u.metal,O)}}function iS(i,e,t,n){i.pad(-e/2,e/2,0,n,-t/2,t/2,u.dark,u.bodyTop,Math.min(.025,e*.06),I),i.box(-e*.32,e*.32,n*.58,n*.78,t*.49,t*.54,u.glass,u.glass,G),i.cyl(0,t*.51,e*.045,n*.4,n*.43,u.accent,u.accent,10,O);for(let r=0;r<4;r++)i.seg(-e*.28,n*(.12+r*.06),t*.51,e*.28,n*(.12+r*.06),t*.51,O)}function rS(i,e,t,n){i.pad(-e/2,e/2,0,n*.62,-t/2,t/2,u.body,u.bodyTop,Math.min(.018,n*.12),I);for(let r of[-e*.38,e*.38])i.cyl(r,-t*.35,e*.025,n*.2,n,u.dark,u.metal,8,O);for(let r=-2;r<=2;r++)i.cyl(r*e*.095,t*.48,e*.012,n*.2,n*.23,r===0?u.accent:u.metal,r===0?u.accent:u.metal,6,G)}function oS(i,e,t,n){i.box(-e/2,e/2,n*.04,n,-t/2,t/2,u.white,u.whiteTop,I),i.box(-e*.42,e*.2,n*.17,n*.82,t*.5,t*.54,u.dark,u.dark,O);for(let r=0;r<6;r++){let o=n*(.23+r*.09);i.box(-e*.4,e*.18,o,o+n*.025,t*.535,t*.555,u.bodyTop,u.bodyTop,O)}i.box(e*.29,e*.43,n*.2,n*.8,t*.5,t*.54,u.body,u.bodyTop,O),i.box(e*.32,e*.41,n*.62,n*.69,t*.53,t*.56,u.accent,u.accent,G)}function sS(i,e,t,n){let r=Math.min(e,t)*.45;i.cyl(0,0,r,n*.035,n*.94,u.white,u.whiteTop,18,I),i.cyl(0,0,r*.88,n*.94,n,u.white,u.whiteTop,18,O),i.box(-e*.12,e*.12,n*.57,n*.66,t*.44,t*.49,u.glass,u.glass,G);for(let o of[-e*.18,e*.18])i.cyl(o,0,e*.035,0,n*.05,u.metal,u.metal,8,O)}function aS(i,e,t,n){i.box(-e/2,e/2,1.8,1.8+n,-t/2,-t*.18,u.white,u.whiteTop,I);let o=Math.min(e,n)*.38;i.lyingCyl("z",0,t*.12,1.8+n*.12,1.8+n*.12+o*2,t*.52,o*2,u.dark,u.bodyTop,16,I);for(let s=0;s<6;s++){let a=1.8+n*(.24+s*.09);i.seg(-e*.34,a,t*.42,e*.34,a,t*.42,O)}}function lS(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,u.body,u.bodyTop,I),i.box(-e*.34,e*.34,n*.12,n*.56,t*.49,t*.54,u.dark,u.dark,O),i.box(-e*.35,e*.35,n*.61,n*.69,t*.49,t*.55,u.accent,u.accent,G),i.box(e*.12,e*.31,n*.78,n*.84,t*.5,t*.55,u.accent,u.accent,O);for(let r=-2;r<=2;r++)i.seg(r*e*.11,n+.003,-t*.22,r*e*.11,n+.003,t*.18,O)}function cS(i,e,t,n){i.box(-e*.48,e*.48,n*.18,n,-t*.2,t*.2,u.dark,u.bodyTop,I),i.box(-e*.39,e*.39,n*.35,n*.89,t*.19,t*.24,u.glass,u.glass,G),i.box(-e*.28,e*.28,n*.03,n*.17,-t*.03,t*.25,u.body,u.bodyTop,I)}function uS(i,e,t,n){i.pad(-e/2,e/2,1.05,1.05+n,-t/2,t/2,u.white,u.whiteTop,Math.min(.012,e*.12),I),i.box(-e*.32,e*.32,1.05+n*.14,1.05+n*.82,t*.42,t*.55,u.body,u.bodyTop,O),i.seg(-e*.16,1.05+n*.2,t*.56,e*.16,1.05+n*.2,t*.56,G)}function hS(i,e,t,n){i.pad(-e/2,e/2,.3,.3+n,-t/2,t/2,u.white,u.whiteTop,Math.min(.012,e*.12),I);for(let o of[-e*.17,e*.17])i.cyl(o,t*.51,e*.065,.3+n*.38,.3+n*.43,u.dark,u.dark,8,O);i.seg(-e*.12,.3+n*.18,t*.55,e*.12,.3+n*.18,t*.55,G)}function fS(i,e,t,n){i.pad(-e/2,e/2,.3,.3+n,-t/2,t/2,u.body,u.bodyTop,Math.min(.014,e*.12),I),i.cyl(0,t*.49,e*.27,.3+n*.28,.3+n*.34,u.dark,u.dark,14,O),i.box(-e*.25,e*.25,.3+n*.1,.3+n*.17,t*.48,t*.56,u.accent,u.accent,G)}function dS(i,e,t,n){i.pad(-e/2,e/2,1.9,1.9+n,-t/2,t/2,u.white,u.whiteTop,Math.min(.014,e*.13),I),i.loft([-e*.38,e*.38,t*.4,t*.55],[-e*.27,e*.27,t*.43,t*.58],1.9+n*.3,1.9+n*.78,u.glass,u.glass,G);for(let o=0;o<3;o++)i.seg(-e*.23,1.9+n*(.39+o*.1),t*.59,e*.23,1.9+n*(.39+o*.1),t*.59,O)}function pS(i,e,t,n){i.pad(-e/2,e*.12,1.1,1.1+n,-t/2,t/2,u.white,u.whiteTop,Math.min(.008,n*.14),I),i.pad(e*.24,e/2,1.1+n*.12,1.1+n*.88,-t*.42,t*.42,u.metal,u.metal,Math.min(.006,n*.1),O),i.seg(-e*.28,1.1+n*.16,t*.54,-e*.03,1.1+n*.16,t*.54,G)}function mS(i,e,t,n){let r=Math.min(e,t)*.47;i.cyl(0,0,r,0,n,u.white,u.whiteTop,12,I),i.cyl(0,t*.12,r*.2,n,n*1.08,u.accent,u.accent,8,G);for(let o of[-e*.24,e*.24])i.box(o-e*.055,o+e*.055,0,n*.12,-t*.18,t*.18,u.metal,u.metal,O)}function gS(i,e,t,n){i.pad(-e/2,e/2,1.35,1.35+n,-t/2,t/2,u.white,u.whiteTop,Math.min(.012,e*.12),I),i.box(-e*.35,e*.35,1.35+n*.3,1.35+n*.78,t*.46,t*.55,u.glass,u.glass,G),i.seg(-e*.22,1.35+n*.18,t*.56,e*.22,1.35+n*.18,t*.56,O)}function _S(i,e,t,n){i.pad(-e/2,e/2,1.25,1.25+n,-t/2,t/2,u.dark,u.bodyTop,Math.min(.012,e*.18),I),i.cyl(0,t*.48,e*.25,1.25+n*.67,1.25+n*.7,u.glass,u.glass,12,G),i.cyl(0,t*.49,e*.2,1.25+n*.18,1.25+n*.21,u.body,u.bodyTop,12,O),i.seg(-e*.18,1.25+n*.1,t*.56,e*.18,1.25+n*.1,t*.56,G)}var ip={air_purifier:({b:i,w:e,d:t,h:n})=>(XM(i,e,t,n),.5),smart_speaker:({b:i,w:e,d:t,h:n})=>(YM(i,e,t,n),.5),security_camera:({b:i,w:e,d:t,h:n})=>(qM(i,e,t,n),!1),smart_lock:({b:i,w:e,d:t,h:n})=>($M(i,e,t,n),!1),smart_curtain:({b:i,w:e,d:t,h:n})=>(ZM(i,e,t,n),!1),network_cabinet:({b:i,w:e,d:t,h:n})=>(KM(i,e,t,n),.5),nas_server:({b:i,w:e,d:t,h:n})=>(JM(i,e,t,n),.5),access_point:({b:i,w:e,d:t,h:n})=>(QM(i,e,t,n),!1),wall_thermostat:({b:i,w:e,d:t,h:n})=>(jM(i,e,t,n),!1),smoke_detector:({b:i,w:e,d:t,h:n})=>(eS(i,e,t,n),!1),siren_alarm:({b:i,w:e,d:t,h:n})=>(tS(i,e,t,n),!1),electrical_panel:({b:i,w:e,d:t,h:n})=>(nS(i,e,t,n),!1),ups_unit:({b:i,w:e,d:t,h:n})=>(iS(i,e,t,n),.5),heat_pump_outdoor:({b:i,w:e,d:t,h:n})=>(oS(i,e,t,n),.5),hot_water_tank:({b:i,w:e,d:t,h:n})=>(sS(i,e,t,n),.5),ventilation_fan:({b:i,w:e,d:t,h:n})=>(aS(i,e,t,n),!1),humidifier:({b:i,w:e,d:t,h:n})=>(lS(i,e,t,n),.5),wall_switch:({b:i,w:e,d:t,h:n})=>(uS(i,e,t,n),!1),wall_outlet:({b:i,w:e,d:t,h:n})=>(hS(i,e,t,n),!1),smart_plug:({b:i,w:e,d:t,h:n})=>(fS(i,e,t,n),!1),motion_sensor:({b:i,w:e,d:t,h:n})=>(dS(i,e,t,n),!1),contact_sensor:({b:i,w:e,d:t,h:n})=>(pS(i,e,t,n),!1),water_leak_sensor:({b:i,w:e,d:t,h:n})=>(mS(i,e,t,n),.5),temperature_humidity_sensor:({b:i,w:e,d:t,h:n})=>(gS(i,e,t,n),!1),video_doorbell:({b:i,w:e,d:t,h:n})=>(_S(i,e,t,n),!1),modem_router:({b:i,w:e,d:t,h:n,base:r})=>(rS(i,e,t,n),r>.05?!1:.5),smart_display:({b:i,w:e,d:t,h:n,base:r})=>(cS(i,e,t,n),r>.05?!1:.5)};function ju(i,e,t,n,r){let o=Math.max(8,Math.round(n/(r==="compact"?.21:.18))),s=n/o,a=t/o;for(let c=0;c<o;c++){let h=t/2-a*c,d=h-a,f=s*(c+1);r==="open"?i.box(-e/2,e/2,f-.055,f,d,h,u.wood,u.woodTop,I):i.box(-e/2,e/2,0,f,d,h,r==="concrete"?u.white:u.wood,r==="concrete"?u.whiteTop:u.woodTop,O),i.seg(-e/2,f,h,e/2,f,h,I)}if(r==="open")for(let c of[-e*.34,e*.34])i.seg(c,.05,t/2,c,n-s,-t/2+a,O);let l=e/2-.035;i.seg(l,s+.88,t/2-a/2,l,n+.88-s*4,-t/2+a*3.5,G);for(let c=0;c<o-3;c+=3){let h=t/2-a*(c+.5),d=s*(c+1);i.seg(l,d,h,l,d+.88,h,O)}}function rp(i,e,t,n,r){let o=Math.max(12,Math.round(n/.18)),s=Math.floor(o/2),a=o-s,l=n/o,c=Math.min(e,t)*.38,h=Math.min(e,t)*.38,d=(t-h)/s,f=(e-h)/a;for(let g=0;g<s;g++){let b=t/2-d*g;i.box(e/2-c,e/2,0,l*(g+1),b-d,b,u.wood,u.woodTop,O)}let p=l*s;if(!r)i.box(e/2-h,e/2,0,p,-t/2,-t/2+h,u.wood,u.woodTop,I);else for(let g=0;g<3;g++)i.box(e/2-h,e/2-h*g/3,0,p+l*g,-t/2,-t/2+h,u.wood,u.woodTop,O);for(let g=0;g<a;g++){let b=e/2-h-f*g;i.box(b-f,b,0,p+l*(g+1),-t/2,-t/2+c,u.wood,u.woodTop,O)}i.seg(e/2-.03,l+.88,t/2-d/2,e/2-.03,p+.88,-t/2+h,G),i.seg(e/2-h,p+.88,-t/2+.03,-e/2+f*3,n-l*3+.88,-t/2+.03,G)}function bS(i,e,t,n){let r=Math.min(e,t)/2,o=Math.max(14,Math.round(n/.18));i.cyl(0,0,r*.07,0,n,u.metal,u.metal,12,I);for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=n*(s+1)/o,c=Math.cos(a)*r*.48,h=Math.sin(a)*r*.48;i.box(Math.min(0,c)-.08,Math.max(0,c)+.08,l-.055,l,Math.min(0,h)-.08,Math.max(0,h)+.08,u.wood,u.woodTop,O),i.seg(Math.cos(a)*r*.9,l,Math.sin(a)*r*.9,Math.cos(a)*r*.9,Math.min(n+.8,l+.8),Math.sin(a)*r*.9,O)}}function kl(i,e,t,n,r){let o=r==="wood"?5:3;for(let a=0;a<o;a++){let l=-e/2+e*a/(o-1);i.box(l-.022,l+.022,0,n,-t/2,t/2,r==="wood"?u.wood:u.metal,r==="wood"?u.woodTop:u.metal,I)}i.box(-e/2,e/2,n-.045,n,-t/2,t/2,r==="wood"?u.wood:u.metal,r==="wood"?u.woodTop:u.metal,G);let s=r==="glass"?1:r==="cable"?5:3;for(let a=1;a<=s;a++)i.seg(-e/2,n*a/(s+1),0,e/2,n*a/(s+1),0,r==="glass"?O:I)}var op={stairs_landing_l:({b:i,w:e,d:t,h:n})=>(rp(i,e,t,n,!1),.5),stairs_winder_l:({b:i,w:e,d:t,h:n})=>(rp(i,e,t,n,!0),.5),stairs_spiral:({b:i,w:e,d:t,h:n})=>(bS(i,e,t,n),.5),stairs_open:({b:i,w:e,d:t,h:n})=>(ju(i,e,t,n,"open"),.5),stairs_concrete:({b:i,w:e,d:t,h:n})=>(ju(i,e,t,n,"concrete"),.5),stairs_compact:({b:i,w:e,d:t,h:n})=>(ju(i,e,t,n,"compact"),.5),railing_glass:({b:i,w:e,d:t,h:n})=>(kl(i,e,t,n,"glass"),.5),railing_metal:({b:i,w:e,d:t,h:n})=>(kl(i,e,t,n,"metal"),.5),railing_wood:({b:i,w:e,d:t,h:n})=>(kl(i,e,t,n,"wood"),.5),railing_cable:({b:i,w:e,d:t,h:n})=>(kl(i,e,t,n,"cable"),.5)};function zl(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,G)}}function xS(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,u.body,u.bodyTop,I),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,u.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,G),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,u.whiteTop,u.whiteTop,I)}function sp(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,u.white,u.whiteTop,I);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,O),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,G);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42);zl(i,0,s,a,o),r||zl(i,0,s,a*.72,o)}function yS(i,e,t,n){let r=Math.min(.035,n*.025),o=(n-r)/2,s=t/2-.012;for(let a=0;a<2;a++){let l=a*(o+r);i.box(-e/2,e/2,l,l+o,-t/2,t/2-.02,u.white,u.whiteTop,I),i.seg(-e/2,l+o-.14,s,e/2,l+o-.14,s,O),i.seg(e/2-.16,l+o-.07,s,e/2-.08,l+o-.07,s,G);let c=l+(o-.14)/2+.04,h=Math.min(e*.34,(o-.2)*.42);zl(i,0,c,h,s),a===0&&zl(i,0,c,h*.72,s+.002)}i.box(-e*.46,e*.46,o,o+r,-t*.46,t*.46,u.dark,u.metal,O)}function vS(i,e,t,n){let r=Math.min(.045,e*.035);for(let s of[-e*.4,e*.4])i.box(s-r,s+r,0,n*.88,-t*.32,-t*.23,u.metal,u.metal,I),i.box(s-r,s+r,0,n*.62,t*.23,t*.32,u.metal,u.metal,I);i.loft([-e/2,e/2,-t*.43,t*.43],[-e/2,e/2,-t*.38,t*.48],n*.88,n*.98,u.dark,u.glass,G);let o=n*.985;for(let s=1;s<6;s++)i.seg(-e/2+e*s/6,o,-t*.37,-e/2+e*s/6,o,t*.47,O);for(let s=1;s<3;s++)i.seg(-e/2,o,-t*.37+t*.84*s/3,e/2,o,-t*.37+t*.84*s/3,O);i.box(-e*.16,e*.16,n*.34,n*.48,t*.2,t*.34,u.body,u.bodyTop,I),i.seg(-e*.1,n*.43,t*.345,e*.1,n*.43,t*.345,G)}var lp={dishwasher:({b:i,w:e,d:t,h:n})=>(xS(i,e,t,n),.5),washer:({b:i,w:e,d:t,h:n})=>(sp(i,e,t,n,!1),.5),dryer:({b:i,w:e,d:t,h:n})=>(sp(i,e,t,n,!0),.5),washer_dryer_tower:({b:i,w:e,d:t,h:n})=>(yS(i,e,t,n),.5),balcony_solar:({b:i,w:e,d:t,h:n})=>(vS(i,e,t,n),.5)},ap=(i,e,t)=>{let n=(t-.14)/2+.04,r=Math.min(i*.36,(t-.2)*.42)*.8;return{x0:-r,x1:r,y0:n-r,y1:n+r,z:e/2-.004}},cp={dishwasher:(i,e,t)=>({x0:-i/2+.06,x1:i/2-.06,y0:t-.16,y1:t-.08,z:e/2-.004}),washer:ap,dryer:ap,washer_dryer_tower:(i,e,t)=>({x0:i*.22,x1:i*.39,y0:t*.91,y1:t*.96,z:e/2-.004}),balcony_solar:(i,e,t)=>({x0:-i*.1,x1:i*.1,y0:t*.4,y1:t*.46,z:e*.35})};function MS(i,e,t,n,r=n*.18){for(let o of[-e*.47,e*.47])for(let s of[-t*.31,t*.31])i.lyingCyl("x",o,s,r,r,e*.12,r,u.dark,u.metal,12,I)}function hi(i,e,t,n,r){MS(i,e,t,n);let o=n*.2,s=r==="suv"||r==="van"||r==="minibus"?n*.58:n*.5;if(i.loft([-e*.47,e*.47,-t*.46,t*.46],[-e*.44,e*.44,-t*.42,t*.42],o,s,u.body,u.bodyTop,I),r==="pickup")i.loft([-e*.4,e*.4,t*.02,t*.4],[-e*.33,e*.33,t*.08,t*.27],s,n*.92,u.body,u.glass,G),i.box(-e*.42,e*.42,s,s+.06,-t*.4,-t*.02,u.dark,u.bodyTop,O);else{let l=r==="wagon"||r==="van"||r==="minibus"||r==="suv"?-t*.36:-t*.22,c=r==="van"||r==="minibus"?t*.36:t*.24;i.loft([-e*.39,e*.39,l,c],[-e*.34,e*.34,l+t*.04,c-t*.06],s,n*.94,u.glass,u.bodyTop,G)}for(let a of[-e*.27,e*.27])i.box(a-e*.1,a+e*.1,n*.32,n*.4,t*.46,t*.475,u.white,u.accent,G);r==="electric"&&i.box(-e*.22,e*.22,o+.02,o+.06,-t*.47,-t*.455,u.accent,u.accent,G)}function up(i,e,t,n,r){let o=Math.min(n*.34,t*.19);for(let s of[-t*.36,t*.36])i.lyingCyl("x",0,s,o,o,e*.12,o,u.dark,u.metal,14,I);i.seg(0,o,-t*.36,0,n*.58,0,G),i.seg(0,n*.58,0,0,o,t*.36,G),i.seg(0,o,-t*.36,0,o,t*.36,O),i.seg(-e*.32,n*.72,t*.28,e*.32,n*.72,t*.28,I),r&&i.box(-e*.42,e*.42,o*.8,o*1.55,-t*.3,-t*.02,u.wood,u.woodTop,I)}function hp(i,e,t,n,r){let o=Math.min(e*.38,t*.14,n*.25);for(let s of[-t*.34,t*.34])i.lyingCyl("x",0,s,o,o,e*.62,o,u.dark,u.metal,12,I);if(i.loft([-e*.3,e*.3,-t*.27,t*.18],[-e*.2,e*.2,-t*.16,t*.08],o*.8,n*.62,u.body,u.bodyTop,I),i.pad(-e*.28,e*.28,n*.55,n*.65,-t*.28,t*.02,u.dark,u.fabricTop,.02,O),i.seg(0,n*.55,t*.05,0,n*.9,t*.33,G),r)for(let s of[-e*.38,e*.38])i.box(s-e*.1,s+e*.1,n*.38,n*.64,-t*.3,-t*.08,u.body,u.bodyTop,O)}var fp={bicycle_city:({b:i,w:e,d:t,h:n})=>(up(i,e,t,n,!1),.5),bicycle_cargo:({b:i,w:e,d:t,h:n})=>(up(i,e,t,n,!0),.5),scooter:({b:i,w:e,d:t,h:n})=>(hp(i,e,t,n,!1),.5),motorcycle_touring:({b:i,w:e,d:t,h:n})=>(hp(i,e,t,n,!0),.5),car_sedan:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"sedan"),.5),car_hatchback:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"hatch"),.5),car_suv:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"suv"),.5),car_pickup:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"pickup"),.5),car_van:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"van"),.5),car_wagon:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"wagon"),.5),car_compact:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"compact"),.5),car_electric:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"electric"),.5),car_minibus:({b:i,w:e,d:t,h:n})=>(hi(i,e,t,n,"minibus"),.5)};var SS={...Bd,...yd,...Kd,...Zd,...Rd,...pd,...gd,...zd,...qd,...fd,...ip,...op,...Id,...Qd,...np,...lp,...fp},TS={..._d,...Cd,...vd,...Od,...Jd,...cp};function dp(i,e){let t=SS[i];return t?t(e):null}function pp(i,e,t,n){let r=TS[i];return r?r(e,t,n):void 0}function nh(i,e){let t=wS(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function wS(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=U0(i.type);if(o){let l=e?mn(e,i):0,c=(o.x-o.w/2)*t,h=(o.x+o.w/2)*t,d=Math.min(.02,(h-c)*.05);return{x0:c+d,x1:h-d,y0:l+o.y*r+d,y1:l+(o.y+o.h)*r-d,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?mn(e,i)-Jo(i):0,a=ES(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function ES(i,e,t,n,r){let o=pp(i.type,e,t,n);if(o!==void 0)return o;if(i.type==="tv_board"){let s=Math.min(e*.8,1.45),a=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+a,z:-t/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:s+.02,y1:s+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let s=r?mn(r,i):0;return{x0:.06,x1:e/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Ll+.02,y1:Ll+n-.02,z:t/2+.004};if(i.type==="air_conditioner")return{x0:-e*.43,x1:e*.43,y0:Dl+n*.08,y1:Dl+n*.27,z:t/2+.008};if(i.type==="water_pump")return{x0:-e*.1,x1:e*.1,y0:n*.56,y1:n*.65,z:t*.3+.004};if(i.type==="water_heater"){let s=Math.min(t*.88,n*.92),a=(n-s)/2;return{x0:e*.18,x1:e*.4,y0:a+s*.38,y1:a+s*.68,z:t*.48+.006}}return i.type==="range_hood"?{x0:-e*.4,x1:e*.4,y0:.005,y1:n*.06,z:t/2+.003}:i.type==="microwave"?{x0:-e*.4,x1:e*.18,y0:n*.17,y1:n*.82,z:t/2+.008}:i.type==="water_purifier"?{x0:-e*.28,x1:e*.28,y0:n*.8*.56,y1:n*.8*.64,z:t/2+.016}:i.type==="air_purifier"?{x0:-e*.11,x1:e*.11,y0:n*.66,y1:n*.74,z:t/2+.008}:i.type==="robot_mower"?{x0:-e*.22,x1:e*.22,y0:n*.16,y1:n*.24,z:t*.31+.008}:i.type==="smart_speaker"?{x0:-e*.42,x1:e*.42,y0:n*.9,y1:n+.008,z:t*.05}:i.type==="security_camera"?{x0:-e*.12,x1:e*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:t*.53}:i.type==="smart_lock"?{x0:-e*.36,x1:e*.36,y0:.95+n*.43,y1:.95+n*.78,z:t/2+.006}:i.type==="network_cabinet"?{x0:-e*.22,x1:e*.22,y0:n*.82,y1:n*.86,z:t*.545}:i.type==="nas_server"?{x0:-e*.34,x1:e*.34,y0:n*.18,y1:n*.205,z:t*.54}:i.type==="access_point"?{x0:-e*.16,x1:e*.16,y0:n*.12,y1:n*.24,z:t*.47}:i.type==="wall_thermostat"?{x0:-e*.37,x1:e*.37,y0:1.35+n*.34,y1:1.35+n*.82,z:t*.54}:i.type==="smoke_detector"?{x0:-e*.1,x1:e*.1,y0:n*.05,y1:n*.22,z:t*.47}:i.type==="siren_alarm"?{x0:-e*.32,x1:e*.32,y0:1.85+n*.48,y1:1.85+n*.82,z:t*.58}:i.type==="electrical_panel"?{x0:-e*.34,x1:e*.34,y0:.85+n*.2,y1:.85+n*.8,z:t*.56}:i.type==="ups_unit"?{x0:-e*.32,x1:e*.32,y0:n*.58,y1:n*.78,z:t*.54}:i.type==="modem_router"?{x0:-e*.25,x1:e*.25,y0:n*.16,y1:n*.3,z:t*.54}:i.type==="heat_pump_outdoor"?{x0:e*.32,x1:e*.41,y0:n*.62,y1:n*.69,z:t*.56}:i.type==="hot_water_tank"?{x0:-e*.12,x1:e*.12,y0:n*.57,y1:n*.66,z:t*.49}:i.type==="ventilation_fan"?{x0:-e*.12,x1:e*.12,y0:1.8+n*.44,y1:1.8+n*.58,z:t*.45}:i.type==="humidifier"?{x0:-e*.35,x1:e*.35,y0:n*.61,y1:n*.69,z:t*.55}:i.type==="smart_display"?{x0:-e*.39,x1:e*.39,y0:n*.35,y1:n*.89,z:t*.24}:i.type==="wall_switch"?{x0:-e*.2,x1:e*.2,y0:1.05+n*.13,y1:1.05+n*.25,z:t*.56}:i.type==="wall_outlet"?{x0:-e*.16,x1:e*.16,y0:.3+n*.12,y1:.3+n*.24,z:t*.56}:i.type==="smart_plug"?{x0:-e*.25,x1:e*.25,y0:.3+n*.1,y1:.3+n*.17,z:t*.56}:i.type==="motion_sensor"?{x0:-e*.27,x1:e*.27,y0:1.9+n*.3,y1:1.9+n*.78,z:t*.59}:i.type==="contact_sensor"?{x0:-e*.28,x1:-e*.03,y0:1.1+n*.1,y1:1.1+n*.24,z:t*.54}:i.type==="water_leak_sensor"?{x0:-e*.2,x1:e*.2,y0:n*.72,y1:n*1.08,z:t*.12}:i.type==="temperature_humidity_sensor"?{x0:-e*.35,x1:e*.35,y0:1.35+n*.3,y1:1.35+n*.78,z:t*.55}:i.type==="video_doorbell"?{x0:-e*.2,x1:e*.2,y0:1.25+n*.06,y1:1.25+n*.18,z:t*.56}:null}function eh(i,e,t,n,r){let o=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),s=new ae(1-r,1-r,1-r),a=new ae(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],h=[e(-t/2-o,-n/2-o),e(t/2+o,-n/2-o),e(t/2+o,n/2+o),e(-t/2-o,n/2+o)],d=p=>[p[0],l,p[1]],f=i.p.length;i.tri(d(c[0]),d(c[1]),d(c[2]),s),i.tri(d(c[0]),d(c[2]),d(c[3]),s);for(let p=0;p<4;p++){let g=(p+1)%4;i.tri(d(c[p]),d(h[p]),d(h[g]),s,a,a),i.tri(d(c[p]),d(h[g]),d(c[g]),s,a,s)}Wu(e)&&ur(i,f)}function Vl(i,e,t,n,r=0){AS(i,e,t,n,r)}function AS(i,e,t,n,r){let o=Dt(n.type)?0:r-Jo(n);if(Dt(n.type)||Math.abs(o)<.001)return mp(i,e,t,n,r);let s=i.p.length,a=e.p.length,l=t.p.length;mp(i,e,r<.05?t:new ct,n,0);for(let c=s+1;c<i.p.length;c+=3)i.p[c]+=o;for(let c=a+1;c<e.p.length;c+=3)e.p[c]+=o;for(let c=l+1;c<t.p.length;c+=3)t.p[c]+=o}function mp(i,e,t,n,r){let o=n.rotation*it,s=Math.cos(o),a=Math.sin(o),l=n.mirror?-1:1,c=(_,m)=>[n.x+l*_*s-m*a,n.z+l*_*a+m*s],h=new qn(i,e,c),d=Math.max(.05,n.w),f=Math.max(.05,n.d),p=Math.max(.005,n.h),g=dp(n.type,{b:h,w:d,d:f,h:p,base:r,variant:n.variant??null});if(g!==null){g!==!1&&eh(t,c,d,f,g);return}let b=Dt(n.type);if(b){ih(h,b,d,f,p,r,null),r<=.05&&eh(t,c,d,f,.5);return}h.box(-d/2,d/2,0,p,-f/2,f/2,u.body,u.bodyTop,I),eh(t,c,d,f,.5)}function th(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=u;return(e?t[`${i}Top`]:void 0)??t[i]??null}function ih(i,e,t,n,r,o,s,a=null){let l=!!a;for(let c of e.parts){if(a&&!a(c))continue;let h=l?{...c,glow:!0,w:c.w+.006/t,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,d=h.glow&&s!==null,f=d?s:th(h.color,!1)??u.body,p=d?s:th(h.top,!1)??th(h.color,!0)??He(f,1.25).getHex(),g=o+h.y*r,b=o+Math.min(r,(h.y+h.h)*r),_=h.edges==="glow"?lr:h.edges==="faint"?O:h.edges?I:null,m=h.rot?i.rotated(h.x*t,h.z*n,h.rot):i;if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))m.lyingCyl(h.axis,h.x*t,h.z*n,g,b,h.axis==="x"?h.w*t:h.d*n,h.axis==="x"?h.d*n:h.w*t,f,p,14,_);else if(h.shape==="cyl")m.cyl(h.x*t,h.z*n,Math.min(h.w*t,h.d*n)/2,g,b,f,p,14,_);else if(h.shape==="loft"){let y=h.tx??h.x,M=h.tz??h.z,v=h.tw??h.w,S=h.td??h.d;m.loft([(h.x-h.w/2)*t,(h.x+h.w/2)*t,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(y-v/2)*t,(y+v/2)*t,(M-S/2)*n,(M+S/2)*n],g,b,f,p,_)}else m.box((h.x-h.w/2)*t,(h.x+h.w/2)*t,g,b,(h.z-h.d/2)*n,(h.z+h.d/2)*n,f,p,_)}}function gp(i,e,t,n,r,o){let s=o*it,a=Math.cos(s),l=Math.sin(s),c=(g,b)=>[t+g*a-b*l,r+g*l+b*a],h=new qn(i,new Vt,c),d=1713728,f=2373216,p=725279;if(e==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,d,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,p,d),h.cyl(0,0,.012,n-.075,n-.06,u.accent,u.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,d,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,d,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,d,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,p,u.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function rh(i,e,t,n,r,o=s=>!!s.glow){let s=t.rotation*it,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,h=(d,f)=>[t.x+c*d*a-f*l,t.z+c*d*l+f*a];ih(new qn(i,new Vt,h),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o)}function Gl(i,e,t,n,r){let o=t.rotation*it,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(h,d)=>[t.x+l*h*s-d*a,t.z+l*h*a+d*s];ih(new qn(i,new Vt,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r)}var Xt={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},io={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}};var RS={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}},CS={canopy:{color:Xt.wallTop,side:Xt.wall,edge:Xt.edge,edgeAlpha:.5},veranda:{color:Xt.wallTop,side:Xt.wall,edge:Xt.edge,edgeAlpha:.58},balcony:{color:Xt.wallTop,side:Xt.wall,edge:Xt.edge,edgeAlpha:.58}},IS=.35,yp=3232102,PS=5404812,FS=5,LS=i=>i.type==="canopy"||i.type==="veranda"||i.type==="balcony";function _p(i,e){let t=i.roof_style==="glass"?3234418:i.roomColor??e.color,n=i.roof_style==="glass"?2112592:e.side;return{roof:t,under:n}}function vp(i,e){return li(i)+(e.offset??0)+(ai(e.type)?.01:Qr[e.type])}function Kn(i){return ar(i)>=0?i:[...i].reverse()}function DS(i,e){let t=i[e];if(ai(t.type)||t.type==="pool")return[];let n=[];for(let r=e+1;r<i.length;r++){let o=i[r];!o.cut||o.points.length<3||o.points.every(s=>ut(s,t.points))&&n.push(Kn(o.points))}return n}function Mn(i,e,t,n,r,o,s,a){let l=t[0]-e[0],c=t[1]-e[1],h=Math.hypot(l,c);if(h<1e-6)return;let d=-c/h*n*.5,f=l/h*n*.5;mt(i,Kn([[e[0]+d,e[1]+f],[t[0]+d,t[1]+f],[t[0]-d,t[1]-f],[e[0]-d,e[1]-f]]),r,o,s,a,{aoFrom:r-1})}function Jn(i,e,t,n,r){i.seg([e[0],n+.004,e[1]],[t[0],n+.004,t[1]],r,Xe)}function bp(i,e,t,n,r,o,s){for(let[a,l]of[[-n,-n],[n,-n],[n,n],[-n,n]])i.seg([e+a,r,t+l],[e+a,o,t+l],s,Xe)}function Hl(i,e,t,n,r,o,s,a,l){let c=Math.hypot(n[0]-t[0],n[1]-t[1]);if(c<.04||o<.2)return;Mn(i,t,n,.14,r,r+Math.min(.24,o*.24),s,a),Mn(i,t,n,.07,r+o*.5,r+o*.57,s,a),Mn(i,t,n,.1,r+o-.1,r+o,s,a),Jn(e,t,n,r+Math.min(.24,o*.24),l),Jn(e,t,n,r+o*.57,l),Jn(e,t,n,r+o,l);let h=Math.max(2,Math.ceil(c/.22));for(let d=0;d<=h;d++){let f=d/h,p=t[0]+(n[0]-t[0])*f,g=t[1]+(n[1]-t[1])*f;mt(i,Kn([[p-.018,g-.018],[p+.018,g-.018],[p+.018,g+.018],[p-.018,g+.018]]),r+.12,r+o-.07,s,a),e.seg([p,r+.12,g],[p,r+o-.07,g],l,Xe)}}function US(i,e,t,n,r,o,s,a,l){let c=n[0]-t[0],h=n[1]-t[1],d=Math.hypot(c,h);if(d<.3)return;let f=c/d,p=h/d,g=M=>[t[0]+f*M,t[1]+p*M],b=(M,v,S,w)=>{let[A,x]=g(M);mt(i,Kn([[A-v,x-v],[A+v,x-v],[A+v,x+v],[A-v,x+v]]),S,w,s,a)},_=Math.min(.45,o*.32),m=M=>r+o+_*Math.sin(Math.PI*M),y=Math.max(8,Math.ceil(d/.18));Mn(i,t,n,.11,r+.06,r+.16,s,a),Mn(i,t,n,.08,r+o*.47,r+o*.54,s,a),Jn(e,t,n,r+.16,l),Jn(e,t,n,r+o*.54,l);for(let M=0;M<=y;M++){let v=M/y,S=M===0||M===y||Math.abs(v-.5)<.5/y;b(d*v,S?.038:.016,r+.08,m(v)-.04);let[w,A]=g(d*v);if(e.seg([w,r+.08,A],[w,m(v)-.04,A],l,Xe),M<y){let x=g(d*v),T=g(d*(M+1)/y),C=(m(v)+m((M+1)/y))/2;Mn(i,x,T,.075,C-.045,C+.02,s,a),Jn(e,x,T,C+.02,l)}}}function xp(i,e,t,n,r,o,s=Xe){let a=new ae(o),l=new ae(He(r,.72)),c=new ae(r);for(let[h,d,f]of to(e)){let p=e[h],g=e[d],b=e[f],_=[p[0],t(p[0],p[1]),p[1]],m=[g[0],t(g[0],g[1]),g[1]],y=[b[0],t(b[0],b[1]),b[1]],M=[_[0],_[1]-n,_[2]],v=[m[0],m[1]-n,m[2]],S=[y[0],y[1]-n,y[2]];i.tri(_,y,m,a,a,a,void 0,s),i.tri(M,v,S,l,l,l,void 0,s)}for(let h=0;h<e.length;h++){let d=e[h],f=e[(h+1)%e.length],p=[d[0],t(d[0],d[1]),d[1]],g=[f[0],t(f[0],f[1]),f[1]],b=[p[0],p[1]-n,p[2]],_=[g[0],g[1]-n,g[2]];i.tri(b,p,g,c,c,c,void 0,s),i.tri(b,g,_,c,c,c,void 0,s)}}function NS(i,e,t){let n=Rl(i,e),r=as(i,t),o=r[n],s=r[(n+1)%r.length],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l);if(c<1e-6)return r;let h=Math.max(0,IS-t),d=l/c*h,f=-a/c*h;return r.map(([p,g],b)=>b===n||b===(n+1)%r.length?[p+d,g+f]:[p,g])}function BS(i,e,t,n,r){let o=[];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],h=l[0]-e[0],d=l[1]-e[1],f=c[0]-e[0],p=c[1]-e[1],g=h*n[0]+d*n[1],b=f*n[0]+p*n[1];if(!(g<=r&&b>r||b<=r&&g>r))continue;let _=(r-g)/(b-g),m=h*t[0]+d*t[1],y=f*t[0]+p*t[1];o.push(m+(y-m)*_)}o.sort((a,l)=>a-l);let s=[];for(let a=0;a+1<o.length;a+=2)o[a+1]-o[a]>.05&&s.push([o[a],o[a+1]]);return s}function OS(i,e,t,n,r){let o=e[n],s=e[(n+1)%e.length],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l);if(c<1e-6)return;let h=o,d=[a/c,l/c],f=[d[1],-d[0]],p=e.map(([M,v])=>(M-h[0])*d[0]+(v-h[1])*d[1]),g=Math.min(...p),b=Math.max(...p),_=Math.max(1,Math.ceil((b-g)/.18)),m=new ae(yp),y=new ae(PS);for(let M=0;M<_;M++){let v=g+(M+.5)*(b-g)/_;for(let[S,w]of BS(e,h,f,d,v)){let A=[h[0]+f[0]*S+d[0]*v,h[1]+f[1]*S+d[1]*v],x=[h[0]+f[0]*w+d[0]*v,h[1]+f[1]*w+d[1]*v],T=x[0]-A[0],C=x[1]-A[1],P=Math.hypot(T,C),L=-C/P*.018,F=T/P*.018,E=-C/P*.007,U=T/P*.007,N=(Q,he)=>[Q[0],t(Q[0],Q[1])+he,Q[1]],B=N([A[0]+L,A[1]+F],.004),V=N([A[0]-L,A[1]-F],.004),z=N([x[0]+L,x[1]+F],.004),W=N([x[0]-L,x[1]-F],.004),H=N([A[0]+E,A[1]+U],.03),ie=N([A[0]-E,A[1]-U],.03),K=N([x[0]+E,x[1]+U],.03),se=N([x[0]-E,x[1]-U],.03);i.tri(H,K,se,y,y,y,void 0,r),i.tri(H,se,ie,y,y,y,void 0,r),i.tri(B,z,K,m,m,m,void 0,r),i.tri(B,K,H,m,m,m,void 0,r),i.tri(ie,se,W,m,m,m,void 0,r),i.tri(ie,W,V,m,m,m,void 0,r)}}}function Mp(i,e,t,n,r){let o=li(t),s=[];return n.forEach((a,l)=>{if(a.points.length<3)return;let c=i.count,h,d,f=o+(a.offset??0),p=(w,A)=>f-jo(a,w,A),g=f-(a.type==="pool"?0:a.slope??0),b=LS(a),_=b?a.height??2.4:ai(a.type)&&a.height?a.height:Qr[a.type],m={...b?CS[a.type]:RS[a.type],top:_},y=Kn(a.points),M=He(m.edge,m.edgeAlpha),v=a.open&&(a.type==="fence"||a.type==="pergola"||b)?y.length-1:-1,S=(w,A=Xe)=>{if(a.outline!==!1)for(let x=0;x<y.length;x++){if(x===v)continue;let T=y[x],C=y[(x+1)%y.length];e.seg([T[0],w(T[0],T[1]),T[1]],[C[0],w(C[0],C[1]),C[1]],M,A)}};switch(a.type){case"pool":{let w=new ae(m.color);for(let[x,T,C]of to(y)){let P=y[x],L=y[T],F=y[C];i.tri([P[0],f+m.top,P[1]],[F[0],f+m.top,F[1]],[L[0],f+m.top,L[1]],w,w,w,void 0,Xe)}let A=new ae(m.side);for(let x=0;x<y.length;x++){let T=y[x],C=y[(x+1)%y.length];i.tri([C[0],f+m.top,C[1]],[C[0],f+.06,C[1]],[T[0],f+.06,T[1]],A,A,A,void 0,Xe),i.tri([C[0],f+m.top,C[1]],[T[0],f+.06,T[1]],[T[0],f+m.top,T[1]],A,A,A,void 0,Xe)}S(()=>f+.06),S(()=>f+m.top+.005);break}case"fence":{for(let w=0;w<y.length;w++){if(w===v)continue;let A=y[w],x=y[(w+1)%y.length],T=Math.hypot(x[0]-A[0],x[1]-A[1]),C=Math.max(1,Math.round(T/2)),P=v>=0&&w===v-1?C:C-1;for(let L=0;L<=P;L++){let F=L/C,E=A[0]+(x[0]-A[0])*F,U=A[1]+(x[1]-A[1])*F,N=p(E,U);mt(i,Kn([[E-.04,U-.04],[E+.04,U-.04],[E+.04,U+.04],[E-.04,U+.04]]),N,N+m.top,m.side,m.color)}for(let L of[.35,.85])e.seg([A[0],p(A[0],A[1])+L*m.top,A[1]],[x[0],p(x[0],x[1])+L*m.top,x[1]],M,Xe)}break}case"pergola":{let w=m.top;for(let[A,x]of y){let T=p(A,x);mt(i,Kn([[A-.06,x-.06],[A+.06,x-.06],[A+.06,x+.06],[A-.06,x+.06]]),T,T+w,m.side,m.color)}for(let A=0;A<y.length;A++){if(A===v)continue;let x=y[A],T=y[(A+1)%y.length],C=p(x[0],x[1])+w;if(Mn(i,x,T,.12,C-.16,C,m.side,m.color),a.bracing){let P=p(x[0],x[1]),L=p(T[0],T[1]);e.seg([x[0],P+.25,x[1]],[T[0],L+w-.25,T[1]],M,Xe),e.seg([T[0],L+.25,T[1]],[x[0],P+w-.25,x[1]],M,Xe)}}if(V0(y)){let A=G0(y),x=A.x1-A.x0,T=A.z1-A.z0,C=x>=T,P=C?x:T,L=Math.max(1,Math.round(P/.6));for(let F=1;F<L;F++){let E=(C?A.x0:A.z0)+P*F/L,U=C?[E,A.z0+.06]:[A.x0+.06,E],N=C?[E,A.z1-.06]:[A.x1-.06,E],B=p(U[0],U[1])+w;Mn(i,U,N,.06,B-.04,B+.08,m.side,m.color)}}S((A,x)=>p(A,x)+w+.004);break}case"canopy":{let w=m.top,A=_p(a,m),x=f+Qo(a.type),T=(U,N)=>x+w-jo(a,U,N),C=Rl(y,v),P=r===Xe?Xe:r+FS*16,L=Math.min(.4,Math.max(.04,(a.column_size??.12)/2)),F=Math.max(L,(a.wallThickness??.24)/2);for(let[U,N]of y){let B=T(U,N)-.08;mt(i,Kn([[U-L,N-L],[U+L,N-L],[U+L,N+L],[U-L,N+L]]),x,B,A.under,A.roof),bp(e,U,N,L,x,B,M)}if(a.railing!==!1&&w>=.4){let U=Math.min(1.45,w*.62);for(let N=0;N<y.length;N++){if(N===v)continue;let B=y[N],V=y[(N+1)%y.length];if(N!==C){Hl(i,e,B,V,x,U,A.under,A.roof,M);continue}let z=Math.hypot(V[0]-B[0],V[1]-B[1]);if(z<.6){Hl(i,e,B,V,x,U,A.under,A.roof,M);continue}let W=Math.min(2.4,Math.max(.9,z*.45),Math.max(.3,z-.3)),H=Math.max(0,(z-W)/(2*z)),ie=Math.min(1,1-H),K=[B[0]+(V[0]-B[0])*H,B[1]+(V[1]-B[1])*H],se=[B[0]+(V[0]-B[0])*ie,B[1]+(V[1]-B[1])*ie];Hl(i,e,B,K,x,U,A.under,A.roof,M),Hl(i,e,se,V,x,U,A.under,A.roof,M),US(i,e,K,se,x,U,A.under,A.roof,M)}}for(let U=0;U<y.length;U++){if(U===v)continue;let N=y[U],B=y[(U+1)%y.length],V=(T(N[0],N[1])+T(B[0],B[1]))/2;Mn(i,N,B,.12,V-.18,V-.08,A.under,A.roof),Jn(e,N,B,V-.08,M)}let E=NS(y,v,F);if(h=i.count,xp(i,E,T,.045,A.under,yp,P),OS(i,E,T,C,P),d=i.count,a.outline!==!1)for(let U=0;U<E.length;U++){if(U===v)continue;let N=E[U],B=E[(U+1)%E.length];e.seg([N[0],T(N[0],N[1])+.034,N[1]],[B[0],T(B[0],B[1])+.034,B[1]],M,P)}break}case"balcony":case"veranda":{let w=m.top,A=a.type==="veranda",x=_p(a,m),T=f+Qo(a.type),C=(H,ie)=>T,P=(H,ie)=>T+w-jo(a,H,ie),L=A?P:(H,ie)=>T+w,F=Math.min(1.1,w*.48),E=(H,ie,K,se,Q,he=m.side,q=m.color)=>{mt(i,Kn([[H-K,ie-K],[H+K,ie-K],[H+K,ie+K],[H-K,ie+K]]),se,Q,he,q),bp(e,H,ie,K,se,Q,M)};if(a.railing!==!1)for(let H=0;H<y.length;H++){if(H===v)continue;let ie=y[H],K=y[(H+1)%y.length],se=Math.hypot(K[0]-ie[0],K[1]-ie[1]),Q=Math.max(1,Math.ceil(se/.36)),he=T;Mn(i,ie,K,.07,he+.3,he+.38,x.under,x.roof),Mn(i,ie,K,.09,he+F-.09,he+F,x.under,x.roof),Jn(e,ie,K,he+.38,M),Jn(e,ie,K,he+F,M);for(let q=0;q<=Q;q++){let j=q/Q,fe=ie[0]+(K[0]-ie[0])*j,me=ie[1]+(K[1]-ie[1])*j,pe=C(fe,me),Ae=.012;mt(i,Kn([[fe-Ae,me-Ae],[fe+Ae,me-Ae],[fe+Ae,me+Ae],[fe-Ae,me+Ae]]),pe+.08,pe+F-.07,x.under,x.roof),e.seg([fe,pe+.08,me],[fe,pe+F-.07,me],M,Xe)}}let U=Rl(y,v),N=y[U],B=y[(U+1)%y.length],V=Math.min(12,Math.max(0,Math.round(a.columns??2))),z=Math.min(.4,Math.max(.04,(a.column_size??.32)/2));for(let H=0;H<V;H++){let ie=V===1?.5:H/(V-1),K=N[0]+(B[0]-N[0])*ie,se=N[1]+(B[1]-N[1])*ie,Q=C(K,se);E(K,se,z*1.375,Q,Q+.28,x.under,x.roof),E(K,se,z,Q+.2,L(K,se)-.2,x.under,x.roof),E(K,se,z*1.375,L(K,se)-.28,L(K,se),x.under,x.roof),e.seg([K,Q+.28,se],[K,L(K,se)-.28,se],M,Xe)}let W=(L(N[0],N[1])+L(B[0],B[1]))/2;Mn(i,N,B,Math.max(.2,z*2.6),W-.28,W,x.under,x.roof),Jn(e,N,B,W,M),A&&(h=i.count,xp(i,y,P,.1,x.under,x.roof,r),d=i.count,S((H,ie)=>P(H,ie)+.004,r)),S((H,ie)=>C(H,ie)+(a.railing===!1?.004:F+.004));break}default:{let w=(x,T)=>p(x,T)+m.top,A=DS(n,l);if(mt(i,y,g,a.slope?w:f+m.top,m.side,m.color,{aoFrom:g,holes:A}),S((x,T)=>w(x,T)+.004),a.type==="hedge"&&S((x,T)=>p(x,T)+.004),a.outline!==!1)for(let x of A)for(let T=0;T<x.length;T++){let C=x[T],P=x[(T+1)%x.length];e.seg([C[0],w(C[0],C[1])+.004,C[1]],[P[0],w(P[0],P[1])+.004,P[1]],M,Xe)}}}i.count>c&&s.push({id:a.id,start:c,end:i.count,...h!==void 0&&d!==void 0?{roofStart:h,roofEnd:d}:{}})}),s}function Sp(i,e,t){return Mp(i,e,t,t.outdoor??[],Xe)}function Tp(i,e,t,n,r=Xe){return Mp(i,e,t,n,r)}var Xl=Math.PI/180,kS=1.13,zS=1.72,oh=.025,pr=.07,wp=.25;function Ep(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=rs(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<1.2)continue;let c=a/l,h=-s/l,d=Math.min(n.height,o.height??n.height),f=(p,g,b,_)=>t.push({key:p,section:null,side:"top",flat:!1,o:g,eu:b,es:[0,1,0],n:_,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&f(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return t}var sh="ground";function ah(i){return[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation)[0]??i.floors[0]??null}function Ap(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=ah(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:El(o,s,a)):e.base??0;return{key:sh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function VS(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function ro(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>GS(y,Il(i,y,y.overhang??e.overhang)));let t=VS(i);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(M=>M[0])),r=t.rooms.flatMap(y=>y.points.map(M=>M[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=t.elevation+t.height;if(e.type==="flat")return[Rp("main",null,s,l,a,c,h+wp)];let d=a-s>=c-l,f=e.ridge==="short"?!d:d,p=(f?c-l:a-s)/2,g=p*Math.tan(e.pitch*Xl),b=(y,M,v)=>f?[y,h+v,(l+c)/2+M]:[(s+a)/2+M,h+v,y],[_,m]=f?[s,a]:[l,c];return[-1,1].map(y=>Wl(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",b(_,y*p,0),b(m,y*p,0),b(_,0,g),e.pitch,()=>[0,m-_]))}function GS(i,e){let t=Yn(i),n=Ln(i),r=(b,_,m)=>{let[y,M]=t.at(b,_);return[y,m,M]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let b=t.at(a,-o),_=t.at(l,t.w+s);return[Rp(i.id,i.id,Math.min(b[0],_[0]),Math.min(b[1],_[1]),Math.max(b[0],_[0]),Math.max(b[1],_[1]),i.eave_a+wp)]}if(i.shape==="pent")return[Wl(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let h=i.shape==="hip"||i.shape==="pyramid",d=i.shape==="pyramid"?(t.u1-t.u0)/2:h?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,f=h?t.u0+d-a:0,p=h?l-(t.u1-d):0,g=[];if(n.vr>.3){let b=Math.hypot(n.vr+o,n.rh-n.y(-o));g.push(Wl(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,_=>[f*(_/b),c-p*(_/b)]))}if(t.w-n.vr>.3){let b=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));g.push(Wl(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,_=>[p*(_/b),c-f*(_/b)]))}if(h){let b=n.y(-o),_=n.y(t.w+s),m=[[`${i.id}:c`,"c",r(a,t.w+s,_),r(a,-o,b),r(t.u0+d,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-o,b),r(l,t.w+s,_),r(t.u1-d,n.vr,n.rh)]];for(let[y,M,v,S,w]of m){let A=HS(y,i.id,M,v,S,w);A&&g.push(A)}}return g}function HS(i,e,t,n,r,o){let s=hs(mr(r,n));if(s<.3)return null;let a=Vi(mr(r,n)),l=mr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=hs(h);if(d<.3)return null;let f=Vi(h),p=Vi(Pp(a,f));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let g=Vi([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Xl;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:f,n:p,lu:s,ls:d,pitch:b,span:m=>{let y=Math.min(1,Math.max(0,m/d));return[c*y,s-(s-c)*y]},facing:[g[0],g[2]]}}function Wl(i,e,t,n,r,o,s,a){let l=Vi(mr(r,n)),c=Vi(mr(o,n)),h=Vi(Pp(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let d=Vi([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:h,lu:hs(mr(r,n)),ls:hs(mr(o,n)),pitch:s,span:a,facing:[d[0],d[2]]}}function Rp(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Cp(i){let e=i.module_w||kS,t=i.module_h||zS;return i.portrait===!1?[t,e]:[e,t]}function WS(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Ip(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*Xl:i.wall?Math.min(90,Math.max(0,e.tilt??0))*Xl:0}function XS(i,e){let[,t]=Cp(e),n=Ip(i,e);return i.wall?t*Math.cos(n)+oh:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+oh}function fs(i,e,t=!1){let[n,r]=Cp(e),o=[],s=Ip(i,e),a=r*Math.cos(s),l=XS(i,e),c=WS(e),h=Math.max(1,...c),d=new Set(e.skip??[]),f=(g,b,_)=>[i.o[0]+i.eu[0]*g+i.es[0]*b+i.n[0]*_,i.o[1]+i.eu[1]*g+i.es[1]*b+i.n[1]*_,i.o[2]+i.eu[2]*g+i.es[2]*b+i.n[2]*_],p=(g,b)=>{if(i.unbounded)return!0;if(b<-1e-6||b>i.ls+1e-6)return!1;let[_,m]=i.span(b);return g>=_-1e-6&&g<=m+1e-6};return c.forEach((g,b)=>{let _=e.align==="right"?h-g:e.align==="center"?(h-g)/2:0;for(let m=0;m<g;m++){let y=`${b}:${m}`,M=d.has(y);if(M&&!t)continue;let v=e.u+(m+_)*(n+oh),S=e.v+b*l,w=v+n,A=S+(i.flat||i.wall?a:r);if(![[v,S],[w,S],[w,A],[v,A]].every(([F,E])=>p(F,E)))continue;if(i.wall&&s>.001){let F=pr+r*Math.sin(s),[E,U]=e.flip?[F,pr]:[pr,F],N=[f(v,S,E),f(w,S,E),f(w,A,U),f(v,A,U)],B=e.flip?S:A,V=[v+.05,w-.05].map(z=>[f(z,B,0),f(z,B,F)]);o.push({corners:N,posts:V,cell:y,skipped:M});continue}if(!i.flat){o.push({corners:[f(v,S,pr),f(w,S,pr),f(w,A,pr),f(v,A,pr)],posts:[],cell:y,skipped:M});continue}let x=.15,T=x+r*Math.sin(s),[C,P]=e.flip?[A,S]:[S,A],L=[f(v,C,x),f(w,C,x),f(w,P,T),f(v,P,T)];o.push({corners:L,posts:[v+.05,w-.05].flatMap(F=>[[f(F,C,0),f(F,C,x)],[f(F,P,0),f(F,P,T)]]),cell:y,skipped:M})}}),o}function mr(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function hs(i){return Math.hypot(i[0],i[1],i[2])}function Vi(i){let e=hs(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function Pp(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var YS=.78,qS=1.18;function $S(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||YS,module_h:i.h||qS}}function lh(i,e){let t=fs(i,$S(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}var ds=1712952,ps=2239816,Dp=1318193,gr=He(3662079,.9),oo=He(5995775,.45),Bt=.14,ZS=9427199,KS=13226982,JS=14936565,QS={black:{glass:new ae(329483),edge:He(9082544,.32),cells:He(2766160,.22)},blue:{glass:new ae(1386842),edge:He(10467583,.55),cells:He(4025599,.35)}},jS=He(13226982,.5),eT=He(13226982,.85),tT=He(16757575,.95),Fp=new ae(2845583),Lp=new ae(3818072);function nT(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Up(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:oT(i),r=t?.type==="custom"?sT(i,t.sections??[],t.overhang):n?[n]:[];return rT(i,r),iT(i,r,e),r}function iT(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map(ro(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?lh(s,o):null;if(!s||!a)continue;let l=s.section?e.find(P=>P.sections?.includes(s.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,h=P=>[P[0],P[1]-c,P[2]],[d,f,p,g]=a.map(h),b=t.get(o.id)??{open:0,tilt:0,cover:0},_=(P,L)=>[P[0]+s.n[0]*L,P[1]+s.n[1]*L,P[2]+s.n[2]*L],m=(P,L,F)=>[P[0]+(L[0]-P[0])*F,P[1]+(L[1]-P[1])*F,P[2]+(L[2]-P[2])*F],y=b.open>.02||b.tilt>.02?tT:eT,M=[d,f,p,g].map(P=>_(P,.06));for(let P=0;P<4;P++)l.lines.seg(M[P],M[(P+1)%4],y);let v=(b.open>.02?30*Math.min(1,b.open):b.tilt>.5?12:0)*it,S=Math.hypot(p[0]-f[0],p[1]-f[1],p[2]-f[2]),w=P=>{let L=s.es;return[P[0]-L[0]*S*Math.cos(v)+s.n[0]*S*Math.sin(v),P[1]-L[1]*S*Math.cos(v)+s.n[1]*S*Math.sin(v),P[2]-L[2]*S*Math.cos(v)+s.n[2]*S*Math.sin(v)]},A=_(g,.065),x=_(p,.065),T=w(A),C=w(x);l.solid.tri(T,C,x,Fp),l.solid.tri(T,x,A,Fp);for(let[P,L]of[[T,C],[C,x],[x,A],[A,T]])l.lines.seg(P,L,y);if(b.cover>.02){let P=Math.min(1,b.cover),L=_(m(A,T,P),.01),F=_(m(x,C,P),.01),E=_(A,.01),U=_(x,.01);l.solid.tri(L,F,U,Lp),l.solid.tri(L,U,E,Lp)}}}function rT(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(ro(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];s&&ch(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function ch(i,e,t,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=QS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of fs(t,n)){let[h,d,f,p]=c.corners.map(o);i.tri(h,d,f,s.glass),i.tri(h,f,p,s.glass),i.tri(h,f,d,s.glass),i.tri(h,p,f,s.glass);let g=(m,y=.004)=>[m[0]+t.n[0]*y,m[1]+t.n[1]*y,m[2]+t.n[2]*y],b=(m,y,M)=>[m[0]+(y[0]-m[0])*M,m[1]+(y[1]-m[1])*M,m[2]+(y[2]-m[2])*M],_=[h,d,f,p].map(m=>g(m));for(let m=0;m<4;m++)e.seg(_[m],_[(m+1)%4],s.edge);for(let m=1;m<a;m++)e.seg(g(b(h,d,m/a)),g(b(p,f,m/a)),s.cells);for(let m=1;m<l;m++)e.seg(g(b(h,p,m/l)),g(b(d,f,m/l)),s.cells);for(let[m,y]of c.posts)e.seg(o(m),o(y),jS)}}function oT(i){let e=i.settings.roof,t=nT(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(C=>C.points.map(P=>P[0])),r=t.rooms.flatMap(C=>C.points.map(P=>P[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new ct,d=new Vt;if(e.type==="flat"){mt(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,ds,ps,{bottom:!0});let C=.252;for(let[P,L]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])d.seg([P[0],C,P[1]],[L[0],C,L[1]],gr),d.seg([P[0],0,P[1]],[L[0],0,L[1]],oo);return{floor:t,base:t.height,solid:h,lines:d,glass:new ct}}let f=a-s>=c-l,p=e.ridge==="short"?!f:f,g=(p?c-l:a-s)/2,b=g*Math.tan(e.pitch*it),_=(C,P,L)=>p?[C,L,(l+c)/2+P]:[(s+a)/2+P,L,C],[m,y]=p?[s,a]:[l,c],M=new ae(ps),v=new ae(ds),S=(C,P,L,F,E)=>{h.tri(C,P,L,E),h.tri(C,L,F,E)};for(let C of[-1,1]){S(_(m,C*g,0),_(y,C*g,0),_(y,0,b),_(m,0,b),M),S(_(m,C*g,-Bt),_(m,0,b-Bt),_(y,0,b-Bt),_(y,C*g,-Bt),v),S(_(m,C*g,-Bt),_(y,C*g,-Bt),_(y,C*g,0),_(m,C*g,0),v);for(let P of[m,y])S(_(P,C*g,-Bt),_(P,C*g,0),_(P,0,b),_(P,0,b-Bt),v);d.seg(_(m,C*g,0),_(y,C*g,0),oo);for(let P of[m,y])d.seg(_(P,C*g,0),_(P,0,b),oo)}let w=e.overhang,A=new ae(Dp),x=g-w,T=x*Math.tan(e.pitch*it);for(let C of[m+w,y-w])h.tri(_(C,-x,-Bt),_(C,x,-Bt),_(C,0,T-Bt),A),h.tri(_(C,x,-Bt),_(C,-x,-Bt),_(C,0,T-Bt),A);return d.seg(_(m,0,b+.004),_(y,0,b+.004),gr),{floor:t,base:t.height,solid:h,lines:d,glass:new ct}}function sT(i,e,t){let n=i.floors.filter(s=>s.rooms.length>0).sort((s,a)=>s.elevation-a.elevation);if(!n.length)return[];let r=new Map,o=new Map(ro(i).map(s=>[s.key,s]));for(let s of e){if(Math.abs(s.x1-s.x0)<.1||Math.abs(s.z1-s.z0)<.1)continue;let a=td(i,s)??n[0],l=s.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ct,lines:new Vt,glass:new ct,sections:[],lift:!s.open}),c.sections.push(s.id);let h=Nu(e,s),d=a.elevation+a.height>s.base+.05&&!s.dormer&&!h,f=e.filter(b=>b!==s&&Nu(e,b)===s).flatMap(b=>j0(s,b));for(let b of i.settings.roof.windows??[]){let _=o.get(b.face),m=_&&_.section===s.id?lh(_,b):null;if(!m)continue;let y=m.map(M=>Oi(s,M[0],M[2]));f.push({u0:Math.min(...y.map(M=>M[0])),u1:Math.max(...y.map(M=>M[0])),v0:Math.min(...y.map(M=>M[1])),v1:Math.max(...y.map(M=>M[1]))})}let p=h?Bu(h,s):s,g=null;if(h){let b=Yn(p),_=eo(h,{u0:0,u1:0,a:0,b:0}),m=y=>{let[M,v]=b.at(y,b.w/2),[S,w]=Oi(h,M,v);return ls(_,S,w)??Ln(h).y(w)};g=m(b.u0)<=m(b.u1)?0:1}aT(c.solid,c.lines,p,Il(i,p,p.overhang??t),a.elevation,c.glass,d,f,g)}return[...r.values()].sort((s,a)=>+(s.lift===!1)-+(a.lift===!1))}function aT(i,e,t,n,r,o=i,s=!1,a=[],l=null){let c=Yn(t),h=Ln(t),d=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,d.a),p=Math.max(0,d.b),g=c.w,b=c.u0-Math.max(0,d.u0),_=c.u1+Math.max(0,d.u1),m=(F,E,U)=>{let[N,B]=c.at(F,E);return[N,U-r,B]},y=new ae(ps),M=new ae(ds),v=new ae(Dp),S=(F,E)=>{for(let U=1;U+1<F.length;U++)i.tri(F[0],F[U],F[U+1],E)},w=[],A=[],x=[],T=null;if(t.shape==="flat"||t.shape==="parapet"){let F=t.eave_a,E=t.shape==="parapet",U=t.points&&t.points.length>=3?J0(t,E?0:Math.max(0,Math.min(d.a,d.b,d.u0,d.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(b,-f),c.at(_,-f),c.at(_,g+p),c.at(b,g+p)];mt(i,U,F-r,F-r+.25,ds,ps,{bottom:!0});for(let N=0;N<U.length;N++){let B=U[N],V=U[(N+1)%U.length];e.seg([B[0],F-r+.252,B[1]],[V[0],F-r+.252,V[1]],gr),e.seg([B[0],F-r,B[1]],[V[0],F-r,V[1]],oo)}if(E){let N=W=>es(W)>=0?W:[...W].reverse(),B=N(U),V=as(B,-.2),z=B.length;for(let W=0;W<z;W++){let H=N([B[W],B[(W+1)%z],V[(W+1)%z],V[W]]);mt(i,H,F-r+.25,F-r+.65,ds,ps),e.seg([B[W][0],F-r+.652,B[W][1]],[B[(W+1)%z][0],F-r+.652,B[(W+1)%z][1]],gr),e.seg([V[W][0],F-r+.652,V[W][1]],[V[(W+1)%z][0],F-r+.652,V[(W+1)%z][1]],gr)}}}else{let F=eo(t,d);w=F.faces;for(let E of a)w=w.flatMap(U=>ed(U,E));A=F.rim,x=F.ridges,T=F.gable}let C=!!t.open,P=new ae(ZS);for(let F of w){if(C){for(let E=1;E+1<F.length;E++)o.tri(m(F[0][0],F[0][1],F[0][2]),m(F[E][0],F[E][1],F[E][2]),m(F[E+1][0],F[E+1][1],F[E+1][2]),P);continue}S(F.map(([E,U,N])=>m(E,U,N)),y),S(F.map(([E,U,N])=>m(E,U,N-Bt)),M)}for(let F=0;F<A.length;F++){let[E,U,N]=A[F],[B,V,z]=A[(F+1)%A.length];C||S([m(E,U,N),m(B,V,z),m(B,V,z-Bt),m(E,U,N-Bt)],M),e.seg(m(E,U,N),m(B,V,z),C?gr:oo)}if(C){lT(i,e,c,h,d,m,r);return}for(let[[F,E,U],[N,B,V]]of x)e.seg(m(F,E,U+.004),m(N,B,V+.004),gr);let L=t.base;if(!s){if(T){let F=cT(T,L-Bt),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(F.length>=3)for(let U of E)S(F.map(([N,B])=>m(U,N,B)),v)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let F of[0,g]){let E=h.y(F)-Bt;E>L+.02&&S([m(c.u0,F,L),m(c.u1,F,L),m(c.u1,F,E),m(c.u0,F,E)],v)}else if(t.eave_a>L+.02)for(let[F,E,U,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])S([m(F,E,L),m(U,N,L),m(U,N,t.eave_a),m(F,E,t.eave_a)],v)}}function lT(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,h=r.a>0,d=r.b>0,f=r.u0>0,p=r.u1>0,g=(m,y,M,v,S,w)=>{let A=[t.at(m,M),t.at(y,M),t.at(y,v),t.at(m,v)],x=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);mt(i,x<0?[...A].reverse():A,S-s,w-s,KS,JS,{bottom:!0})},b=s;for(let[m,y]of[[0,h],[a,d]]){if(!y)continue;let M=n.y(m)-.03,v=m===0?0:a-l;g(t.u0,t.u1,v,v+l,M-c,M),e.seg(o(t.u0,m,M-c),o(t.u1,m,M-c),oo)}for(let[m,y]of[[t.u0,f],[t.u1-l,p]])if(y)for(let M=0;M<6;M++){let v=a*M/6,S=a*(M+1)/6,w=Math.min(n.y(v),n.y(S))-.03;g(m,m+l,v,S,w-c,w)}let _=[];for(let[m,y]of[[0,h],[a-l,d]]){if(!y)continue;let M=t.u1-t.u0-l,v=Math.max(1,Math.ceil(M/3.5));for(let S=0;S<=v;S++){let w=t.u0+M*S/v;S===0&&!f||S===v&&!p||_.push([w,m])}}if(!h&&!d)for(let m of[t.u0,t.u1-l])(m===t.u0&&f||m!==t.u0&&p)&&_.push([m,a/2-l/2]);for(let[m,y]of _){let M=n.y(y+l/2)-.03-c;g(m,m+l,y,y+l,b,M)}}function cT(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var Gi=.2,zp=15;function Vp(i){return i?65535&~(1<<zp):65535}var ms=8,Yl=.42,uh=.42;function Gp(i,e,t,n=[],r=[],o){let{walls:s,open:a}=rs(i.rooms,{exterior:e,interior:t},i.walls??[]),l=(E,U,N)=>{let B=o?o(E,U):null;return B===null?N:Math.max(.05,Math.min(N,B))},c=(E,U,N,B,V)=>{if(!o)return V;let z=V,W=Math.max(2,Math.ceil((B-N)/.25)+1);for(let H=0;H<W;H++){let ie=N+(B-N)*H/(W-1);z=Math.min(z,l(E[0]+U[0]*ie,E[1]+U[1]*ie,V))}return z},h=new ct(!0,!0),d=[],f=new Vt,p=[];for(let E of i.rooms){if(E.points.length<3)continue;let U=kp(Xn(E)?mT(E):E.points),N=io[E.floor_material]??io.wood,B=new ae(N.color),V=n.filter(K=>id(K,U)).map(K=>rd(K,.003));p.push(...V);let z=[...U,...V.flat()],W=h.count;for(let[K,se,Q]of to(U,V)){let he=z[K],q=z[se],j=z[Q];h.tri([he[0],0,he[1]],[j[0],0,j[1]],[q[0],0,q[1]],B,B,B,[he[0],he[1],j[0],j[1],q[0],q[1]],Xe,N.tile)}d.push({roomId:E.id,start:W,end:h.count,color:N.color});let H=new ae(Xt.slab),ie=K=>{for(let se=0;se<K.length;se++){let Q=K[se],he=K[(se+1)%K.length];h.tri([Q[0],-Gi,Q[1]],[Q[0],0,Q[1]],[he[0],0,he[1]],H),h.tri([Q[0],-Gi,Q[1]],[he[0],0,he[1]],[he[0],-Gi,he[1]],H)}};ie(U);for(let K of V){ie([...kp(K)].reverse());for(let se=0;se<K.length;se++){let Q=K[se],he=K[(se+1)%K.length];f.seg([Q[0],.006,Q[1]],[he[0],.006,he[1]],lr),f.seg([Q[0],-Gi,Q[1]],[he[0],-Gi,he[1]],ki)}}}let g=new Map,b=[],_=new Map;for(let E of s){let U="interior",N=null;if(E.exterior){let V=E.b[0]-E.a[0],z=E.b[1]-E.a[1],W=Math.hypot(V,z)||1,H=[z/W,-V/W],ie=(Math.round(Math.atan2(H[1],H[0])/(2*Math.PI)*ms)%ms+ms)%ms;U=`s${ie}`;let K=ie/ms*2*Math.PI;N=[Math.cos(K),Math.sin(K)]}let B=g.get(U);B===void 0&&(B=b.length,g.set(U,B),b.push(N)),_.set(E,B)}let m=new Map,y=[];for(let E of i.openings){let U=q0(E,i.rooms,i.walls??[]);if(!U)continue;let N=$0(s,E,U);if(!N)continue;let{wall:B,s:V}=N,z=Zl([B.b[0]-B.a[0],B.b[1]-B.a[1]]),W=Math.hypot(B.b[0]-B.a[0],B.b[1]-B.a[1]),H=Math.min(E.width,W),ie=Math.max(0,Math.min(W-H,V-H/2)),K=U.room.points,se=B.free?z[0]*(K[1][0]-K[0][0])+z[1]*(K[1][1]-K[0][1])>0:B.roomLeft===E.room_id,Q=[-z[1],z[0]],he=se?Q:[-Q[0],-Q[1]],q=Math.min(c(B.a,z,ie,ie+H,ql(B,i.height))-.02,E.sill+E.height),j=Math.max(0,Math.min(E.sill,q-.1)),fe=[he[1],-he[0]],me=z[0]*fe[0]+z[1]*fe[1]>0,pe={opening:E,bucket:_.get(B),start:[B.a[0]+z[0]*ie,B.a[1]+z[1]*ie],axis:z,width:H,toRoom:he,faceRoom:se?B.left:B.right,faceOut:se?B.right:B.left,sill:j,top:q,hingeAtStart:E.hinge==="left"===me,exterior:B.exterior};y.push(pe);let Ae=m.get(B);Ae||m.set(B,Ae=[]),Ae.push({s0:ie,s1:ie+H,sill:j,top:q,info:pe})}let M=Math.min(i.cut_height,i.height),v=new ct;for(let E of s){let U=_.get(E),N=Zl([E.b[0]-E.a[0],E.b[1]-E.a[1]]),B=(m.get(E)??[]).sort((se,Q)=>se.s0-Q.s0),V=ql(E,i.height),z=[],W=[-1/0,...new Set(B.flatMap(se=>[se.s0,se.s1])).values(),1/0].sort((se,Q)=>se-Q);for(let se=0;se+1<W.length;se++){let Q=W[se],he=W[se+1];if(he-Q<1e-6)continue;let q=Number.isFinite(Q)&&Number.isFinite(he)?(Q+he)/2:Number.isFinite(Q)?Q+1:he-1,j=B.filter(pe=>pe.s0<q&&pe.s1>q).map(pe=>[pe.sill,pe.top]).sort((pe,Ae)=>pe[0]-Ae[0]),fe=[],me=-Gi;for(let[pe,Ae]of j)pe>me+1e-4&&fe.push([me,pe]),me=Math.max(me,Ae);V>me+1e-4&&fe.push([me,V]),z.push({t0:Q,t1:he,ranges:fe})}let H=Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1]),ie=o&&c(E.a,N,0,H,V)<V-.001,K=ie?z.flatMap(se=>{let Q=Math.max(se.t0,-.5),he=Math.min(se.t1,H+.5),q=Math.max(1,Math.ceil((he-Q)/.3));return Array.from({length:q},(j,fe)=>({t0:fe===0?se.t0:Q+(he-Q)*fe/q,t1:fe===q-1?se.t1:Q+(he-Q)*(fe+1)/q,ranges:se.ranges}))}):z;for(let se of K){let Q=hT(E.footprint,E.a,N,se.t0,se.t1);if(Q.length<3)continue;let he=ie?Math.min(...Q.map(([q,j])=>l(q,j,V))):V;for(let[q,j]of se.ranges){let fe=Math.min(j,ie?Math.max(...Q.map(([rt,Ve])=>l(rt,Ve,V))):j);if(fe-q<1e-4||he-q<.01)continue;let me=q>.01,pe=ie&&j>he,Ae=(rt,Ve)=>Math.min(j,l(rt,Ve,V));if(q<M-1e-6){let rt=fe>M+1e-6?sd+U:cr+U,Ve=pe&&he<M?(Ke,ot)=>Math.min(M,Ae(Ke,ot)):Math.min(fe,M);mt(v,Q,q,Ve,Xt.wall,Xt.wallTop,{aoFrom:0,bottom:me,fold:cr+U,topFold:rt})}fe>M+1e-6&&he>M+1e-6&&mt(v,Q,Math.max(q,M),pe?Ae:fe,Xt.wall,Xt.wallTop,{aoFrom:0,fold:U,bottom:me&&q>=M})}}}let S=s.flatMap(E=>E.footprint),w=dT(s,S),A=new Vt;A.p.push(...f.p),A.c.push(...f.c),A.f.push(...f.f);let x=(E,U)=>(m.get(E)??[]).filter(U);for(let E of w.edges){let U=_.get(E.wall);for(let[B,V]of $l(E,x(E.wall,z=>z.sill<=.005)))A.seg([B[0],.004,B[1]],[V[0],.004,V[1]],od);for(let[B,V]of $l(E,x(E.wall,z=>z.sill<M&&z.top>M)))A.seg([B[0],M,B[1]],[V[0],M,V[1]],Vu,Fl+U);let N=ql(E.wall,i.height);for(let[B,V]of $l(E,x(E.wall,z=>z.top>=N-.021))){if(!o){A.seg([B[0],N,B[1]],[V[0],N,V[1]],lr,N<=M+1e-6?cr+U:U);continue}let z=Math.max(1,Math.ceil(Math.hypot(V[0]-B[0],V[1]-B[1])/.3));for(let W=0;W<z;W++){let H=[B[0]+(V[0]-B[0])*W/z,B[1]+(V[1]-B[1])*W/z],ie=[B[0]+(V[0]-B[0])*(W+1)/z,B[1]+(V[1]-B[1])*(W+1)/z],K=l(H[0],H[1],N),se=l(ie[0],ie[1],N);A.seg([H[0],K,H[1]],[ie[0],se,ie[1]],lr,Math.max(K,se)<=M+1e-6?cr+U:U)}}}for(let E of w.corners){let U=l(E.p[0],E.p[1],ql(E.wall,i.height));A.segSplit([E.p[0],.004,E.p[1]],[E.p[0],U,E.p[1]],ki,Math.min(M,U),_.get(E.wall))}for(let E of m.values())for(let U of E)uT(A,U,M);let T=pT(w.edges,i.rooms,m),C=i.rooms.filter(Xn).map(E=>({id:E.id,type:E.kind,points:E.points,roof_style:E.roof_style,railing:E.railing,columns:E.columns,column_size:E.column_size,height:E.height??i.height,slope:E.slope,slope_dir:E.slope_dir,open:E.open??!0,roomColor:(io[E.floor_material]??io.wood).color,wallThickness:e,offset:-li(i)-Qo(E.kind)})),P=Tp(v,A,i,C,zp),L=Sp(v,A,i);for(let E of r)ch(v,A,E.face,E.field,i.elevation);let F=[];for(let E of i.furniture){if(B0(E.type))continue;let U=v.count,N=A.p.length/6,B=mn(i,E);Vl(v,A,T,E,B),B+E.h>M+.05&&(ad(v,U,M,Gu),ld(A,N,M,Gu)),F.push({id:E.id,start:U,end:v.count})}return{floor:h.geometry(),roomTris:d,holes:p,walls:v.geometry(),lines:A.geometry(),shadow:T.geometry(),buckets:b,openings:y,walls2d:s,openRooms:a,wallBuckets:s.map(E=>_.get(E)),furnitureTris:F,outdoorTris:L,coveredRoomTris:P}}function uT(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:Xe,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),ki,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),ki,s(e.top)),e.sill>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),ki,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),ki,s(e.top)),e.sill>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),ki,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),Vu,Fl+r)}function hT(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=Np(s,a=>o(a)-n)),Number.isFinite(r)&&(s=Np(s,a=>r-o(a))),s}function Np(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var Bp=i=>Math.round(i*1e3),gs=i=>`${Bp(i[0])},${Bp(i[1])}`,Op=(i,e)=>{let t=gs(i),n=gs(e);return t<n?`${t}|${n}`:`${n}|${t}`};function fT(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let d of e){let f=((d[0]-r[0])*s+(d[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((d[0]-r[0])*a-(d[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((d,f)=>d-f);let h=r;for(let d of c){let f=[r[0]+s*d,r[1]+a*d];gs(f)!==gs(h)&&t.push([h,f]),h=f}t.push([h,o])}return t}function dT(i,e){let t=i.map(l=>({wall:l,edges:fT(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,h]of l){let d=Op(c,h);n.set(d,(n.get(d)??0)+1)}let r=[],o=new Map,s=(l,c,h)=>{let d=gs(l),f=o.get(d);f||o.set(d,f={p:l,wall:c,d:[]}),f.d.push(h)};for(let{wall:l,edges:c}of t)for(let[h,d]of c){if(n.get(Op(h,d))!==1)continue;let f=Math.hypot(d[0]-h[0],d[1]-h[1]);if(f<1e-4)continue;r.push({a:h,b:d,wall:l});let p=[(d[0]-h[0])/f,(d[1]-h[1])/f];s(h,l,p),s(d,l,p)}let a=[];for(let{p:l,wall:c,d:h}of o.values())h.some(d=>h.some(f=>Math.abs(d[0]*f[1]-d[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function $l(i,e){if(!e.length)return[[i.a,i.b]];let t=Zl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Zl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=d=>(d[0]-i.wall.a[0])*t[0]+(d[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let d of e)c=c.flatMap(([f,p])=>{if(d.s1<=f||d.s0>=p)return[[f,p]];let g=[];return d.s0>f&&g.push([f,d.s0]),d.s1<p&&g.push([d.s1,p]),g});let h=d=>{let f=(d-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([d,f])=>f-d>1e-4).map(([d,f])=>o<=s?[h(d),h(f)]:[h(f),h(d)])}function pT(i,e,t){let n=new ct,r=new ae(uh,uh,uh),o=new ae(1,1,1),s=.002;for(let a of i)for(let[l,c]of $l(a,(t.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],d=c[1]-l[1],f=Math.hypot(h,d);if(f<.05)continue;let p=[d/f,-h/f],g=[(l[0]+c[0])/2+p[0]*.05,(l[1]+c[1])/2+p[1]*.05];if(!e.some(m=>m.points.length>=3&&ut(g,m.points)))continue;let b=[l[0]+p[0]*Yl,l[1]+p[1]*Yl],_=[c[0]+p[0]*Yl,c[1]+p[1]*Yl];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[_[0],s,_[1]],r,o,o),n.tri([l[0],s,l[1]],[_[0],s,_[1]],[c[0],s,c[1]],r,o,r)}return n}function Hp(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(Cl),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return zu(t);let r=n.furniture.filter(o=>(Du.has(o.type)||Dt(o.type)?.hole)&&n.elevation+o.h>=e.elevation-.3).map(Cl);return zu([...t,...r])}function ql(i,e){return Math.min(e,i.height??e)}function Zl(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function kp(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function mT(i){let e=i.points,t=e.length;if(t<3)return e;let n=0;for(let c=0;c<t;c++)n+=e[c][0]*e[(c+1)%t][1]-e[(c+1)%t][0]*e[c][1];let r=n>=0?1:-1,o=(i.column_size??(i.kind==="canopy"?.12:.32))/2,s=i.kind==="canopy"?o:o*1.375,a=i.open!==!1?t-1:-1,l=e.map((c,h)=>{let d=e[(h+1)%t],f=d[0]-c[0],p=d[1]-c[1],g=Math.hypot(f,p)||1,b=h===a?0:s,_=[p/g*r,-f/g*r];return{p:[c[0]+_[0]*b,c[1]+_[1]*b],d:[f/g,p/g],normal:_,offset:b}});return e.map((c,h)=>{let d=l[(h-1+t)%t],f=l[h],p=d.d[0]*f.d[1]-d.d[1]*f.d[0];if(Math.abs(p)<1e-6)return[c[0]+f.normal[0]*f.offset,c[1]+f.normal[1]*f.offset];let g=((f.p[0]-d.p[0])*f.d[1]-(f.p[1]-d.p[1])*f.d[0])/p;return[d.p[0]+d.d[0]*g,d.p[1]+d.d[1]*g]})}var gT=500,Wp=.12,Xp=1.35,_T=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Kl=class{view={target:new X,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,d=Math.min(1,(e-c)/h),f=_T(d);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,d>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=hh(this.view.phi+this.velocity.phi,Wp,Xp),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},r=e.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let o={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:r,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:n,to:o,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},gT)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}if(t.button===1||t.button===2||e.shiftKey)this.pan(n,r);else{let s=this.el.clientHeight||1,a=-n/s*3.2,l=-r/s*2.4;this.view.theta+=a,this.view.phi=hh(this.view.phi+l,Wp,Xp),this.velocity={theta:a,phi:l}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=hh(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new X(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new X(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function hh(i,e,t){return Math.min(t,Math.max(e,i))}function fi(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;
varying float vFp3dCanopy;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        vFp3dCanopy = 0.0;
        bool fp3dShow = ${t==="glass"||t==="roof"?"false":"true"};
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
          ${t==="solid"?"if ((fp3dGlass && fp3dWall) || (fp3dBucket == 15 && (fp3dKind == 0 || fp3dKind == 5))) fp3dShow = false;":""}
          ${t==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
          ${t==="roof"?"fp3dShow = fp3dShow && fp3dBucket == 15 && (fp3dKind == 0 || fp3dKind == 5);":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),t==="glass"?n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`):t==="roof"&&(n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vFp3dCanopy;`).replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb *= ${1.35.toFixed(2)};
        diffuseColor.a *= mix(${.78.toFixed(2)}, ${.42.toFixed(2)}, vFp3dCanopy);`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i}var _s=(i,e,t,n,r)=>{i.expandByPoint(new X(e,n,t)),i.expandByPoint(new X(e,r,t))};function Yp(i){let e=new en;for(let{floor:t,ty:n}of i){let r=t.elevation+n;for(let o of t.rooms)for(let[s,a]of o.points)_s(e,s,a,r,r+t.height);for(let o of t.outdoor??[]){let s=r+li(t)+(o.offset??0),a=s-(o.type==="pool"?0:o.slope??0),l=ai(o.type)&&o.height?o.height:Qr[o.type],c=s+(o.type==="pool"?.06:l);for(let[h,d]of o.points)_s(e,h,d,a,c)}for(let o of t.walls??[]){let s=r+Math.min(t.height,o.height??t.height);_s(e,o.a[0],o.a[1],r,s),_s(e,o.b[0],o.b[1],r,s)}}return e}function qp(i,e,t){let n=new en,r=i.elevation+t;for(let[o,s]of e.points)_s(n,o,s,r,r+(Xn(e)?e.height??i.height:i.height));return n}function fh(i,e,t,n,r,o=1){if(i.isEmpty())return 0;let s=i.getCenter(new X),a=new X(Math.sin(t)*Math.sin(e),Math.cos(t),Math.sin(t)*Math.cos(e)),l=new X(Math.cos(e),0,-Math.sin(e)),c=new X(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),h=Math.tan(r/2),d=h*Math.max(.01,n),f=0;for(let p of[i.min.x,i.max.x])for(let g of[i.min.y,i.max.y])for(let b of[i.min.z,i.max.z]){let _=new X(p,g,b).sub(s),m=_.dot(a);f=Math.max(f,m+Math.abs(_.dot(l))*o/d,m+Math.abs(_.dot(c))*o/h)}return f}function $p(i,e,t,n,r=1){let o=i.getSize(new X),s=Math.max(.01,Math.min(o.x,o.z)),a=Math.max(o.x,o.z)/s>=2,l=-.6;return a&&t>=1.2&&(l=o.z>=o.x?-.95:-.35),{theta:l,radius:fh(i,l,e,t,n,r)}}function dh(i,e,t,n,r,o,s=8){if(i.isEmpty())return{radius:0,offset:new X};let a=Math.max(1,o.width),l=Math.max(1,o.height),c=-1+2*Math.max(0,o.left)/a,h=1-2*Math.max(0,o.right)/a,d=-1+2*Math.max(0,o.bottom)/l,f=1-2*Math.max(0,o.top)/l;if(c>=h||d>=f)return{radius:fh(i,e,t,n,r),offset:new X};let p=i.getCenter(new X),g=new X(Math.sin(t)*Math.sin(e),Math.cos(t),Math.sin(t)*Math.cos(e)),b=new X(Math.cos(e),0,-Math.sin(e)),_=new X(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),m=Math.tan(r/2),y=m*Math.max(.01,n),M=[];for(let L of[i.min.x,i.max.x])for(let F of[i.min.y,i.max.y])for(let E of[i.min.z,i.max.z]){let U=new X(L,F,E).sub(p);M.push({x:U.dot(b),y:U.dot(_),near:U.dot(g)})}let v=L=>{let F=-1/0,E=1/0,U=-1/0,N=1/0;for(let B of M){let V=L-B.near;F=Math.max(F,B.x-h*y*V),E=Math.min(E,B.x-c*y*V),U=Math.max(U,B.y-f*m*V),N=Math.min(N,B.y-d*m*V)}return{x0:F,x1:E,y0:U,y1:N}},S=Math.max(...M.map(L=>L.near))+.1,w=L=>{let F=v(L);return F.x0<=F.x1&&F.y0<=F.y1},A=Math.max(S,s),x=Math.max(A,fh(i,e,t,n,r));for(;!w(x);)x*=2;for(let L=0;L<60;L++){let F=(A+x)/2;w(F)?x=F:A=F}let T=v(x),C=(T.x0+T.x1)/2,P=(T.y0+T.y1)/2;return{radius:x,offset:b.multiplyScalar(C).add(_.multiplyScalar(P))}}function bT(i,e){let n=Dt(e)?.size??(Al.includes(e)?wl[e]:null);if(!n)return null;let r=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,w:n[0]*r,d:n[1]*r,h:n[2]*r,variant:null,entity:null,power:null}}function ph(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?bT(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function mh(i,e){let t=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=t.length/3,d=c.portrait===!1?10:6,f=c.portrait===!1?6:10,p=xT(c.id)%1e3/1e3;for(let b of fs(l,c)){let[_,m,y,M]=b.corners.map(S=>[S[0]+l.n[0]*.006,S[1]+l.n[1]*.006-e,S[2]+l.n[2]*.006]),v=[[_,0,0],[m,1,0],[y,1,1],[M,0,1]];for(let S of[0,1,2,0,2,3]){let[w,A,x]=v[S];t.push(w[0],w[1],w[2]),n.push(A,x),r.push(d,f),o.push(p)}}let g=t.length/3-h;g&&s.push({id:c.id,start:h,count:g})}if(!t.length)return null;let a=new Qe;return a.setAttribute("position",new Ge(t,3)),a.setAttribute("uv",new Ge(n,2)),a.setAttribute("aCells",new Ge(r,2)),a.setAttribute("aPhase",new Ge(o,1)),a.setAttribute("aLevel",new Ge(new Float32Array(t.length/3),1)),{geometry:a,ranges:s}}function bs(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function gh(i){let e=new lt({transparent:!0,blending:Lt,depthWrite:!1,side:Mt});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
vLiveUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function xT(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var Zp=["neon","blueprint","day"];function Kp(i){return Zp.indexOf(i)}var Jl={value:new X(.22,.88,1)},Ql={value:0};function Jp(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var yT=`
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
`;function Un(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=Jl,o.uniforms.uAccentOn=Ql,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${yT}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}function jl(i){return i==="day"?Fi:Lt}var xs=.012,vT=.012;function jp(i,e,t,n,r,o=[]){let s=[],a=[],l=[],c=[],h=(g,b,_,m,y,M,v)=>{for(let S of[g,b,_,g,_,m])s.push(S[0],S[1],S[2]),a.push(y[0],y[1],y[2]),l.push(M),c.push(v)};i.rooms.forEach((g,b)=>{if(g.points.length<3)return;let _=g.points.map(w=>w[0]),m=g.points.map(w=>w[1]),y=Math.min(..._),M=Math.min(...m),v=Math.max(1,Math.ceil((Math.max(..._)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){let x=y+(w+.5)*r,T=M+(A+.5)*r;if(!ut([x,T],g.points)||o.some(L=>ut([x,T],L)))continue;let C=y+w*r,P=M+A*r;h([C,xs,P],[C,xs,P+r],[C+r,xs,P+r],[C+r,xs,P],[0,1,0],b,-1)}});let d=i.rooms.length;for(let g of i.outdoor??[]){if(g.points.length<3||ai(g.type))continue;let b=vp(i,g)+xs,_=g.points.map(w=>w[0]),m=g.points.map(w=>w[1]),y=Math.min(..._),M=Math.min(...m),v=Math.max(1,Math.ceil((Math.max(..._)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){if(!ut([y+(w+.5)*r,M+(A+.5)*r],g.points))continue;let x=y+w*r,T=M+A*r;h([x,b,T],[x,b,T+r],[x+r,b,T+r],[x+r,b,T],[0,1,0],d,-1)}}let f=Math.min(i.cut_height,i.height);e.forEach((g,b)=>{let _=Math.min(i.height,g.height??i.height),m=Math.min(f,_-.02),y=g.b[0]-g.a[0],M=g.b[1]-g.a[1],v=Math.hypot(y,M);if(v<.05)return;let S=[y/v,M/v],w=[-S[1],S[0]],A=t[b],x=MT(g,S,v,n),T=(L,F,E)=>[F,E,...L.filter(U=>U>F+.005&&U<E-.005)].sort((U,N)=>U-N).filter((U,N,B)=>N===0||U>B[N-1]+.005),C=T([m,(m+_)/2,...x.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,_-.02),P=T(x.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let F=L>0?g.roomLeft:g.roomRight,E=F?i.rooms.findIndex(V=>V.id===F):g.exterior?d:-1;if(E<0)continue;let U=(L>0?g.left:g.right)+vT,N=[w[0]*L,w[1]*L],B=(V,z)=>[g.a[0]+S[0]*V+N[0]*U,z,g.a[1]+S[1]*V+N[1]*U];for(let V=0;V<P.length-1;V++){let z=P[V+1]-P[V],W=Math.max(1,Math.ceil(z/r));for(let H=0;H<W;H++){let ie=P[V]+z/W*H,K=P[V]+z/W*(H+1),se=(ie+K)/2;for(let Q=0;Q<C.length-1;Q++){let he=C[Q],q=C[Q+1];if(q-he<.01)continue;let j=(he+q)/2;if(x.some(me=>se>me.s0&&se<me.s1&&j>me.y0&&j<me.y1))continue;let fe=he>=f-1e-6?A:cr+A;h(B(ie,he),B(K,he),B(K,q),B(ie,q),[N[0],0,N[1]],E,fe)}}}}});let p=[];for(let g of n){if(g.opening.type!=="door")continue;let b=e.find(y=>em(y,g));if(!b||!b.roomLeft||!b.roomRight)continue;let _=i.rooms.findIndex(y=>y.id===b.roomLeft),m=i.rooms.findIndex(y=>y.id===b.roomRight);_<0||m<0||p.push({id:g.opening.id,a:_,b:m,x:g.start[0]+g.axis[0]*(g.width/2),y:Math.min(1.1,g.top*.55),z:g.start[1]+g.axis[1]*(g.width/2)})}return{pos:new Float32Array(s),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:p}}function em(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function MT(i,e,t,n){let r=[];for(let o of n){if(!em(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function ST(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function TT(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Qp(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,h=a*a+l*l+c*c,d=Math.sqrt(h)||1e-6,f=TT(i),p=1/(1+h/(f*f)),g=p*Math.sqrt(p),b=Math.max(0,-(a*r+l*o+c*s)/d);return i.level*g*(.2+.8*b)*ST(i.kind,l/d)}function tm(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((h,d)=>{let f=n[d]??.5;if(!(f<=.01))for(let[p,g]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let m of e){if(m.room!==p)continue;let y=m.x-h.x,M=m.y-h.y,v=m.z-h.z,S=Math.hypot(y,M,v)||1,w=Qp(m,h.x,h.y,h.z,y/S,M/S,v/S);b[0]+=m.color[0]*w,b[1]+=m.color[1]*w,b[2]+=m.color[2]*w}let _=Math.max(b[0],b[1],b[2]);_<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/_,b[1]/_,b[2]/_],level:Math.min(1,_*.9*(.35+.65*f)),kind:"wall",room:g})}});let o=new Map;for(let h of r){let d={...h,color:h.color.map(f=>Math.pow(f,1.5))};o.set(h.room,[...o.get(h.room)??[],d])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let d=o.get(l[h]);if(!d)continue;let f=h*3,p=0,g=0,b=0;for(let _ of d){let m=Qp(_,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);p+=_.color[0]*m,g+=_.color[1]*m,b+=_.color[2]*m}c[f]=1-Math.exp(-p*t*1.6),c[f+1]=1-Math.exp(-g*t*1.6),c[f+2]=1-Math.exp(-b*t*1.6)}return c}function nm(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&ut([e,t],r.points));return n<0?i.rooms.length:n}function im(i,e){return i&&e>=0&&e<i.length?i[e]:e}var tc={open:0,open2:0,tilt:0,tilt2:0,cover:null},rm=2043986,om=2769520,wT=2242399,_h=1845831,ET=1450554,di=16758087,AT=1.2,RT=1.5,CT=1846349,IT=2572395,PT=1120816,FT=1845831,sm=5995775,am=9085695,so=He(3662079,.08),LT=.2;function ec(i,e,t,n,r,o,s,a,l,c,h){let d=(p,g,b)=>e(p,g,b),f=[[d(t,r,a),d(n,r,a),d(n,o,a),d(t,o,a),c],[d(t,r,s),d(n,r,s),d(n,o,s),d(t,o,s),He(l.getHex(),.6)],[d(t,o,s),d(n,o,s),d(n,o,a),d(t,o,a),l],[d(t,r,s),d(n,r,s),d(n,r,a),d(t,r,a),He(l.getHex(),.85)],[d(t,r,s),d(t,o,s),d(t,o,a),d(t,r,a),He(l.getHex(),.92)],[d(n,r,s),d(n,o,s),d(n,o,a),d(n,r,a),He(l.getHex(),.92)]];for(let[p,g,b,_,m]of f)i.tri(p,g,b,m,m,m,void 0,h),i.tri(p,b,_,m,m,m,void 0,h)}function at(i,e,t,n,r,o,s,a,l,c,h,d){if(a<=h+1e-6)return ec(i,e,t,n,r,o,s,a,l,c,Xe);if(s>=h-1e-6)return ec(i,e,t,n,r,o,s,a,l,c,d);ec(i,e,t,n,r,o,s,h,l,c,Xe),ec(i,e,t,n,r,o,h,a,l,c,d)}function Hi(i,e,t,n,r,o,s,a,l,c,h=0){let d=(f,p,g)=>{let b=v=>h?(s-v)/h:.5,_=e(t,r,f),m=e(n,r,f),y=e(n,r,p),M=e(t,r,p);i.tri(_,m,y,a,a,a,[0,b(f),1,b(f),1,b(p)],g),i.tri(_,y,M,a,a,a,[0,b(f),1,b(p),0,b(p)],g)};s<=l+1e-6?d(o,s,Xe):o>=l-1e-6?d(o,s,c):(d(o,l,Xe),d(l,s,c))}function DT(i,e,t,n,r,o,s,a,l,c){let h=e(t,r,s),d=e(n,r,s),f=e(n,o,s),p=e(t,o,s),g=0,b=(o-r)/c;i.tri(h,d,f,a,a,a,[0,g,1,g,1,b],l),i.tri(h,f,p,a,a,a,[0,g,1,b,0,b],l)}function lm(i,e,t){let n=new ct,r=new ct,o=new ct(!0),s=new ae(rm),a=new ae(om),l=[],c=[],h=[];for(let d of i){let f=n.count,p=r.count,g=o.count,b=e.get(d.opening.id)??tc,_=d.width,{sill:m,top:y,bucket:M}=d,v=(x,T,C)=>[d.start[0]+d.axis[0]*x+d.toRoom[0]*T,C,d.start[1]+d.axis[1]*x+d.toRoom[1]*T],S=(d.faceRoom-d.faceOut)/2,w=d.opening.mark==="closed",A=d.opening.type==="door"&&sr(d.opening,d.exterior)==="passage";if(d.opening.type==="door"&&!A||d.opening.type==="garage"){let x=-d.faceOut-.012,T=d.faceRoom+.012,C=d.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),P=C?He(di,.8):new ae(rm),L=C?He(di,1):new ae(om);at(n,v,-.045,.02,x,T,0,y+.045,P,L,t,M),at(n,v,_-.02,_+.045,x,T,0,y+.045,P,L,t,M),at(n,v,.02,_-.02,x,T,y-.02,y+.045,P,L,t,M)}if(d.opening.type==="door"){let x=sr(d.opening,d.exterior),T=k0(x),C=d.opening.swing==="out"?-1:1,P=C>0?d.faceRoom:-d.faceOut,L=d.opening.leaves===2,F=.02,E=_-.02,U=O0(_,x,d.hingeAtStart,d.opening);if(U){for(let[z,W]of U.panels)at(n,v,z,z+.04,S-.03,S+.03,.02,y-.02,s,a,t,M),at(n,v,W-.04,W,S-.03,S+.03,.02,y-.02,s,a,t,M),at(n,v,z,W,S-.03,S+.03,.02,.1,s,a,t,M),Hi(r,v,z+.04,W-.04,S,.1,y-.02,so,t,M);F=U.x0,E=U.x1}let N=L?(E-F)/2-.004:E-F,B=T?.06:.04;T&&(at(n,v,.02,_-.02,-d.faceOut-.02,d.faceRoom,0,.02,new ae(_h),a,t,M),d.exterior&&at(n,v,_/2-.08,_/2+.08,-d.faceOut-.1,-d.faceOut,y+.1,y+.17,He(di,.55),He(di,.85),t,Xe));let V=A?[]:[[d.hingeAtStart,b.open]];L&&!A&&V.push([!d.hingeAtStart,b.open2??0]);for(let[z,W]of V){let H=Math.min(1,Math.max(0,W)),ie=x==="sliding"?0:H*RT,K=x==="sliding"?H*N:0,se=(rt,Ve,Ke)=>{let ot=rt*Math.cos(ie)-Ve*Math.sin(ie)-K,je=P+C*(Ve*Math.cos(ie)+rt*Math.sin(ie)+(K?.05:0));return v(z?F+ot:E-ot,je,Ke)},Q=H>.05?Xe:M,he=w?!!b.sensed&&H<.05:H>.9,q=he?He(di,.7):new ae(T?PT:CT),j=he?He(di,.9):new ae(T?FT:IT);x==="glass"?(at(n,se,0,.05,-B,0,.01,y-.01,q,j,t,Q),at(n,se,N-.05,N,-B,0,.01,y-.01,q,j,t,Q),at(n,se,.05,N-.05,-B,0,.01,.12,q,j,t,Q),at(n,se,.05,N-.05,-B,0,y-.08,y-.01,q,j,t,Q),Hi(r,se,.05,N-.05,-B/2,.12,y-.08,so,t,Q)):at(n,se,0,N,-B,0,.01,y-.01,q,j,t,Q),x==="front_glass"?Hi(r,se,.12,N-.12,.001,y*.55,y-.18,so,t,Q):T&&Hi(r,se,.1,.18,.001,.3,y-.3,so,t,Q);let fe=Math.min(1.05,y*.5),me=T?.3:.012,pe=T?N-.11:N-.16,Ae=T?N-.08:N-.05;at(n,se,pe,Ae,.004,.05,fe-me,fe+me,new ae(sm),new ae(am),t,Q),at(n,se,pe,Ae,-B-.05,-B-.004,fe-me,fe+me,new ae(sm),new ae(am),t,Q)}}else if(d.opening.type==="garage"){let x=Math.min(1,Math.max(0,b.cover??1)),T=new ae(13951231),C=d.faceRoom-.03,P=y*(1-x);x>.01&&Hi(o,v,.02,_-.02,C,P,y,T,t,M,.5);let L=(1-x)*y;L>.01&&DT(o,v,.02,_-.02,C,C+L,y+.03,T,M,.5)}else if(sr(d.opening,d.exterior)==="glass_wall"){at(n,v,0,.04,S-.025,S+.025,m,y,s,a,t,M),at(n,v,_-.04,_,S-.025,S+.025,m,y,s,a,t,M),at(n,v,.04,_-.04,S-.025,S+.025,m,m+.03,s,a,t,M),at(n,v,.04,_-.04,S-.025,S+.025,y-.04,y,s,a,t,M);let C=Math.max(1,Math.round((_-2*.04)/.9)),P=(_-2*.04)/C;for(let L=1;L<C;L++){let F=.04+L*P;at(n,v,F-.02,F+.02,S-.025,S+.025,m+.03,y-.04,s,a,t,M)}for(let L=0;L<C;L++){let F=.04+L*P+(L?.02:0),E=.04+(L+1)*P-(L<C-1?.02:0);Hi(r,v,F,E,S,m+.03,y-.04,so,t,M)}}else{at(n,v,0,.06,S-.035,S+.035,m,y,s,a,t,M),at(n,v,_-.06,_,S-.035,S+.035,m,y,s,a,t,M),at(n,v,.06,_-.06,S-.035,S+.035,m,m+(m>.05?.06:.03),s,a,t,M),at(n,v,.06,_-.06,S-.035,S+.035,y-.06,y,s,a,t,M),m>.3&&(at(n,v,-.04,_+.04,S+.035,d.faceRoom+.07,m-.03,m,new ae(_h),a,t,M),d.exterior&&at(n,v,-.03,_+.03,-d.faceOut-.06,S-.035,m-.04,m-.02,new ae(_h),a,t,M));let C=.055,P=m+(m>.05?.06:.03),L=y-.06,F=S+.035,E=S+.035+.06,N=d.opening.leaves===2?[{atStart:d.hingeAtStart,x0:d.hingeAtStart?.06:_/2,x1:d.hingeAtStart?_/2:_-.06,open:b.open,tilt:b.tilt},{atStart:!d.hingeAtStart,x0:d.hingeAtStart?_/2:.06,x1:d.hingeAtStart?_-.06:_/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:d.hingeAtStart,x0:.06,x1:_-.06,open:b.open,tilt:b.tilt}];for(let B of N){let V=B.open>.02||B.tilt>.02,z=w?!!b.sensed&&!V:V,W=z?He(di,.75):new ae(wT),H=z?He(di,.95):a,ie=B.x0,K=B.x1,se=K-ie,Q=B.open*AT,he=B.tilt*LT,q=(fe,me,pe)=>{let Ae=pe-P,rt=me+Ae*Math.sin(he),Ve=P+Ae*Math.cos(he),Ke=fe*Math.cos(Q)-(rt-F)*Math.sin(Q);rt=F+(rt-F)*Math.cos(Q)+fe*Math.sin(Q);let ot=B.atStart?ie+Ke:K-Ke;return v(ot,rt,Ve)},j=Q>.05?Xe:M;if(at(n,q,0,C,F,E,P,L,W,H,t,j),at(n,q,se-C,se,F,E,P,L,W,H,t,j),at(n,q,C,se-C,F,E,P,P+C,W,H,t,j),at(n,q,C,se-C,F,E,L-C,L,W,H,t,j),Hi(r,q,C,se-C,(F+E)/2,P+C,L-C,z?He(di,.16):so,t,j),sr(d.opening,d.exterior)==="bars"){let fe=(P+L)/2,me=(F+E)/2;at(n,q,C,se-C,me-.012,me+.012,fe-.012,fe+.012,W,H,t,j),at(n,q,se/2-.012,se/2+.012,me-.012,me+.012,P+C,L-C,W,H,t,j)}}}if(b.cover!==null){let x=-d.faceOut,T=y+.2;at(n,v,-.05,_+.05,x-.15,x,y,T,new ae(ET),a,t,M);let C=Math.min(1,Math.max(0,b.cover));if(C>.01){let P=y-C*(y-m);Hi(o,v,0,_,x-.07,P,y,new ae(16777215),t,M,.045)}}l.push({id:d.opening.id,start:f,end:n.count}),c.push({id:d.opening.id,start:p,end:r.count}),h.push({id:d.opening.id,start:g,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var UT=.3,cm=2.6;function um(i,e=.32,t=.22,n=[]){let r=i.map(S=>S[0]),o=i.map(S=>S[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,d=t*.7071,f=S=>{let w=[S,[S[0]+t,S[1]],[S[0]-t,S[1]],[S[0],S[1]+t],[S[0],S[1]-t]],A=[...w,[S[0]+d,S[1]+d],[S[0]-d,S[1]+d],[S[0]+d,S[1]-d],[S[0]-d,S[1]-d]];return w.every(x=>ut(x,i))&&!n.some(x=>A.some(T=>ut(T,x)))},p=(S,w)=>f(h?[S,w]:[w,S]),g=(S,w)=>{let A=Math.ceil(Math.hypot(w[0]-S[0],w[1]-S[1])/.05);for(let x=1;x<A;x++)if(!f([S[0]+(w[0]-S[0])*x/A,S[1]+(w[1]-S[1])*x/A]))return!1;return!0},[b,_,m,y]=h?[s,a,l,c]:[l,c,s,a],M=[],v=!0;for(let S=b+t;S<=_-t+1e-6;S+=e){let w=null,A=null,x=.05;for(let L=m;L<=y+1e-6;L+=x)if(p(S,L)&&(A??=L),(!p(S,L)||L+x>y+1e-6)&&A!==null){let F=p(S,L)?L:L-x;(!w||F-A>w[1]-w[0])&&(w=[A,F]),A=null}if(!w||w[1]-w[0]<.2)continue;let T=L=>{let[F,E]=L?w:[w[1],w[0]];return[h?[S,F]:[F,S],h?[S,E]:[E,S]]},C=T(v),P=M[M.length-1];if(P&&n.length&&!g(P,C[0])){let L=T(!v);if(!g(P,L[0]))continue;C=L,v=!v}M.push(C[0],C[1]),v=!v}return M}function xh(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var bh=i=>Math.atan2(Math.sin(i),Math.cos(i));function hm(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=bh(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),cm*t),!0)}let a=Math.atan2(r,o),l=bh(a-i.heading);if(i.heading=bh(i.heading+Math.sign(l)*Math.min(Math.abs(l),cm*t)),Math.abs(l)<.35){let c=Math.min(s,UT*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var ao=null,fm=new Map;function NT(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=fm.get(r);if(o)return o;t&&Tl(t),ao??=new Kr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),ao.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ao.setSize(e,e,!1),ao.setClearColor(0,0);let s=new ct,a=new Vt,l=Dt(i.type);if(l?.light)Gl(s,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)nc(s,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let y={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(Vl(s,a,new ct,y),i.type==="robot_vacuum"){let M=(w,A,x,T,C,P,L)=>{let F=Array.from({length:20},(E,U)=>{let N=U/20*Math.PI*2;return[w+Math.cos(N)*x,A+Math.sin(N)*x]});mt(s,F,T,C,P,L,{aoFrom:0,bottom:!1})},v=i.d*.28,S=Math.min(i.w*.4,i.d*.27);M(0,v,S,.012,.08,2371657,3424863),M(0,v,S*.32,.08,.1,3820138,5070726)}if(i.type==="fan_ceiling"||i.type==="fan_ceiling_light"||i.type==="fan_wall"||i.type==="fan_floor"){let M=s.p.length,v=a.p.length;cs(s,a,i.type,i.w,i.d,i.h,i.variant??null);let S=i.type==="fan_ceiling"||i.type==="fan_ceiling_light"?i.h*.18:i.type==="fan_wall"?i.h*.5:i.h*.78,w=0;for(let A=M+1;A<s.p.length;A+=3)s.p[A]+=S;for(let A=M+2;A<s.p.length;A+=3)s.p[A]+=w;for(let A=v+1;A<a.p.length;A+=3)a.p[A]+=S;for(let A=v+2;A<a.p.length;A+=3)a.p[A]+=w;i.type==="fan_ceiling_light"&&nc(s,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:null,lamp:"fan"},i.h,16758087)}}let c=new Ji,h=new Ye(s.geometry(),new lt({vertexColors:!0,color:new ae(n,n,n)})),d=new yn(a.geometry(),new xn({vertexColors:!0,color:new ae(n*1.8,n*1.8,n*1.8)}));c.add(h,d);let f=new en().setFromObject(c),p=f.getCenter(new X),g=new oi(-1,1,1,-1,.01,100);g.position.copy(p).add(new X(.9,.75,1.3).normalize().multiplyScalar(20)),g.lookAt(p),g.updateMatrixWorld();let b=.05;for(let y of[f.min.x,f.max.x])for(let M of[f.min.y,f.max.y])for(let v of[f.min.z,f.max.z]){let S=new X(y,M,v).applyMatrix4(g.matrixWorldInverse);b=Math.max(b,Math.abs(S.x),Math.abs(S.y))}let _=b*1.12;g.left=-_,g.right=_,g.top=_,g.bottom=-_,g.updateProjectionMatrix(),ao.render(c,g);let m=ao.domElement.toDataURL("image/png");return h.geometry.dispose(),h.material.dispose(),d.geometry.dispose(),d.material.dispose(),fm.set(r,m),m}var pm={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},BT=2.4,OT=1.4,kT=.22,mm=140,Mh=32,zT=500,gm=160,_m=33,bm=.028,VT=.09,Be=2767456,GT=1911110,HT=1,xm=new Set(["ceiling","downlight","spot","panel","round_panel","pendant","strip","fan"]),yh=450,ym=125,WT=.08,Sh={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03],fan:[1.4,1.4,.4],column:[.12,.12,1.45],tv_bars:[.65,.16,.38],orb_table:[.28,.28,.24],portable:[.24,.24,.26],ambient:[.2,.2,.2],cube:[.26,.26,.24],round_panel:[.42,.42,.045],garden_set:[.65,.18,.32],wall_updown:[.14,.12,.32]},XT=new ae(1714765);function YT(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Th=class{host;options;renderer;scene=new Ji;camera=new Kt(38,1,.1,400);controls;labels;root=new Jt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new yn(new Qe,new xn({color:10471679,transparent:!0,opacity:.4,blending:Lt,depthWrite:!1}));snow=new zr(new Qe,new er({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ye(new Eo(1,28),new lt({color:16767370,transparent:!0,opacity:0,blending:Lt,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=qT(),this.blindTexture=ZT(),this.haloTexture=QT(),this.ground=new Ye(new Ai(1,1),new lt({transparent:!0,blending:Lt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(e){Tl(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(l=>l.floor.rooms.some(c=>c.id===e)),n=t?.floor.rooms.find(l=>l.id===e);if(!t||!n)return;let r=qp(t.floor,n,t.ty),o=.72,s=this.controls.view.theta,a=dh(r,s,o,this.camera.aspect,this.camera.fov*it,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new X).add(a.offset),radius:a.radius,phi:o})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e;let t=new Set(e.filter(r=>r.active&&r.fanMotor!==!1&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,o]of this.fanRotors)o.active=t.has(r);this.labelsDirty=!0,this.effectFloors=new Set(e.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(e.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of e){n.add(r.id);let o=this.devicePins.get(r.id);o||(o={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,o),this.labels.append(o.el));let s=o.el;o.icon!==r.icon&&(o.icon=r.icon,s.querySelector(".fp3d-dev-icon").innerHTML=r.icon),o.text!==r.text&&(o.text=r.text,s.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";o.caption!==a&&(o.caption=a,s.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";o.watt!==l&&(o.watt=l,s.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;o.label!==c&&(o.label=c,s.title=r.name,s.setAttribute("aria-label",c)),o.active!==r.active&&(o.active=r.active,s.classList.toggle("fp3d-dev-on",r.active)),o.unavailable!==r.unavailable&&(o.unavailable=r.unavailable,s.classList.toggle("fp3d-dev-na",r.unavailable));let h=r.glow?`rgb(${r.glow.color.map(d=>Math.round(d*255)).join(", ")})`:"";o.glow!==h&&(o.glow=h,h?s.style.setProperty("--fp3d-glow",h):s.style.removeProperty("--fp3d-glow"))}for(let[r,o]of this.devicePins)n.has(r)||(o.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])bs(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&bs(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Jt;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=n.floor.elevation+.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let d=new Ye(new Po(.92,1,48),new lt({color:3662079,transparent:!0,opacity:0,blending:Lt,depthWrite:!1,side:Mt}));d.rotation.x=-Math.PI/2,d.position.set(c.x,s+h*.002,c.z),d.userData={sound:!0,phase:h/3,level:c.level},d.frustumCulled=!1,r.add(d)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let d=o.find(p=>p.id===h);if(!d||d===c)continue;let f=[c.id,d.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,d.x,s+.02,d.z))}if(a.length){let c=new Qe;c.setAttribute("position",new Ge(a,3));let h=new yn(c,new xn({color:3662079,transparent:!0,opacity:.45,blending:Lt,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=vh(r),s=vm(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=Jp(e),n=t?1:0;n===Ql.value&&(!t||Jl.value.equals(new X(...t)))||(Ql.value=n,t&&Jl.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=Kp(e);let t=jl(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.placeSky(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new ae(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new vo(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),d=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,d,f],c*3),n&&s.set([h,d-.45,f],c*3+3)}e.geometry.dispose();let l=new Qe;l.setAttribute("position",new Ge(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let h=0;h<l.length;h+=6){let d=l[h+1]-c,f=l[h]+s*n;d<r.y0&&(d+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=d,l[h+3]=f-s*.05,l[h+4]=d-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let h=0;h<l.length;h+=3){let d=l[h+1]-(.9+.6*t.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;d<r.y0&&(d+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=d}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*it,s=(r?e.azimuth+180:e.azimuth)*it,a=Math.max(10,Math.abs(e.elevation))*it,l=this.weatherBox,c=new X((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),h=Math.min(300,Math.max(80,this.houseRadius*5)),d=new X(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(d,h),this.skyDisc.scale.setScalar(h*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/gm),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}stepFans(e){let t=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=n.type==="fan_ceiling"||n.type==="fan_ceiling_light",o=e*(r?.0048:.009);r?n.rotor.rotation.y=(n.rotor.rotation.y-o)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-o)%(Math.PI*2),t=!0}return t}buildFridges(e){let t=new ct;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Ju(t,n,mn(e.floor,n),r?.l??0,r?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view;return{theta:e.theta,phi:e.phi,radius:e.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&YT();this.lowQuality=t,this.applyWeather(),this.highQuality=e==="high";let n=new Kr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ct,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Kl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&"roomId"in n&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let t of e.screenPics.values())t.mesh.material.dispose(),t.texture?.dispose();e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=e;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let d=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,d.left+d.width/2-f.left,d.top+d.height/2-f.top)},zT)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let d=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,d.left+d.width/2-f.left,d.top+d.height/2-f.top)}),t.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let d=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,d.left+d.width/2-f.left,d.top+d.height/2-f.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=jp(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes),r=JT(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}e.lightSurface=n;let o=new Qe;o.setAttribute("position",new Ge(n.pos,3)),o.setAttribute("color",new Ge(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Ge(n.fold,1));let s=new Qi(new Uint32Array(n.pos.length/3),1);s.setUsage(su),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=o,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=e.floor.height,n=[];for(let r of this.devices){let o=this.glowOf(r);if(r.floorId!==e.floor.id||!o)continue;let s=nm(e.floor,r.x,r.z),a=im(e.lightZones,s),[l,,c]=r.size??(r.lamp?Sh[r.lamp]:[.3,.3,.3]),h=r.base??0,d={ceiling:[t-.12,"ceiling"],downlight:[t-.03,"spot"],spot:[t-c,"spot"],panel:[t-.05,"ceiling"],pendant:[Math.max(.5,t-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<HT?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"],fan:[h+c*.08,"ceiling"],column:[h+c*.55,"omni"],tv_bars:[h+c*.55,"omni"],orb_table:[h+c*.55,"omni"],portable:[h+c*.55,"omni"],ambient:[h+c,"up"],cube:[h+c*.55,"omni"],round_panel:[t-.05,"ceiling"],garden_set:[h+c,"up"],wall_updown:[h+c/2,"wall"]},[f,p]=r.lamp?d[r.lamp]:[r.y,"omni"],g=r.lightY??f,b=o.color;if(r.lamp==="strip"){let _=(r.rotation??0)*it,m=!!r.upright||Math.abs(r.roll??0)>45;for(let y of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:h+l*(.5+y),z:r.z,color:b,level:o.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(_)*l*y,y:g,z:r.z+Math.sin(_)*l*y,color:b,level:o.level*.55,kind:m?"omni":p,room:a})}else n.push({x:r.x,y:g,z:r.z,color:b,level:o.level,kind:p,room:a})}return n}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),r=t.doors.map(d=>{let f=e.geo.openings.find(g=>g.opening.id===d.id);if(f&&sr(f.opening,f.exterior)==="passage")return 1;let p=e.openings.get(d.id);return p?Math.max(p.open,p.open2??0):.5}),o=n.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)},${d.z.toFixed(2)},${d.kind},${d.level.toFixed(3)},${d.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(d=>d.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length||this.roomTint){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=tm(t,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let d=0;d<l.length/18;d++){let f=!1;for(let p=d*18;p<d*18+18&&!f;p++)f=l[p]>.004;if(f)for(let p=0;p<6;p++)c[h++]=d*6+p}s.index.needsUpdate=!0,s.setDrawRange(0,h),e.glowMesh.visible=h>0}makeMaterials(e){return{floor:Un(new lt({vertexColors:!0}),this.themeUniform),pattern:$T(this.patternTexture),wall:Un(fi(new lt({vertexColors:!0}),e,"solid"),this.themeUniform),glassWall:fi(new lt({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),coveredRoof:Un(fi(new lt({vertexColors:!0,transparent:!0,depthWrite:!1,side:Mt}),e,"roof"),this.themeUniform),shadow:new lt({vertexColors:!0,blending:Bo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Un(fi(new xn({vertexColors:!0,transparent:!0,blending:jl(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:fi(new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:Un(fi(new lt({vertexColors:!0,side:Mt}),e),this.themeUniform),glass:fi(new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt}),e),blinds:Un(fi(new lt({map:this.blindTexture,vertexColors:!0,side:Mt}),e),this.themeUniform),flow:KT(this.flowTime),solarLive:gh(this.flowTime),lamps:Un(new lt({vertexColors:!0}),this.themeUniform),halos:new er({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1}),cones:new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt}),screens:new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt})}}rebuild(){let e=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),t=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=ah(n)?.id===o.id?s.filter(Q=>Q.face===sh).map(Q=>({field:Q,face:Ap(n,Q)})):[],l=s.filter(Q=>Q.face.startsWith(`wall:${o.id}:`));if(l.length){let Q=new Map(Ep(n,o.id).map(he=>[he.key,he]));for(let he of l){let q=Q.get(he.face);q&&a.push({field:he,face:q})}}let h=(n.settings.roof.sections??[]).some(Q=>!Q.open&&Q.base<o.elevation+o.height-.05)?(Q,he)=>{let q=K0(n,Q,he);return q===null?null:q-o.elevation}:void 0,d=Gp(ph(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Hp(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(f),g=new Jt,b=new Ye(d.floor,p.floor),_=new Ye(d.shadow,p.shadow);_.renderOrder=1;let m=new Ye(d.floor,p.pattern);m.renderOrder=2;let y=new Ye(new Qe,p.glow);y.renderOrder=3,y.visible=!1;let M=new Ye(new Qe,p.frames),v=new Ye(new Qe,p.blinds),S=new Ye(new Qe,p.glass);S.renderOrder=4;let w=new Ye(new Qe,p.lamps);w.visible=!1;let A=new Ye(new Qe,p.cones);A.visible=!1,A.renderOrder=3;let x=new zr(new Qe,p.halos);x.visible=!1,x.renderOrder=7;let T=new Ye(new Qe,p.cones);T.visible=!1,T.renderOrder=7;let C=new Ye(new Qe,p.cones);C.visible=!1,C.renderOrder=7;let P=new Ye(new Qe,p.lamps);P.visible=!1;let L=new Ye(new Qe,p.screens);L.visible=!1,L.renderOrder=5;let F=new Ye(new Qe,p.flow);F.renderOrder=5,F.frustumCulled=!1;let E=mh(a,o.elevation),U=E?new Ye(E.geometry,p.solarLive):null;U&&(U.renderOrder=6,bs(E,this.solarLevels));for(let Q of[M,v,S])Q.frustumCulled=!1;let N=new Ye(d.walls,p.glassWall),B=new Ye(d.walls,p.coveredRoof),V=new Ye(d.walls,p.wall);N.renderOrder=6,B.renderOrder=5,g.add(b,_,m,y,V,new yn(d.lines,p.lines),M,v,S,F,w,A,x,T,C,P,L,B,N,...U?[U]:[]);for(let Q of o.furniture){if(Q.type!=="fan_ceiling"&&Q.type!=="fan_ceiling_light"&&Q.type!=="fan_wall"&&Q.type!=="fan_floor")continue;let he=new ct,q=new Vt;cs(he,q,Q.type,Q.w,Q.d,Q.h,Q.variant);let j=new Jt;j.add(new Ye(he.geometry(),p.wall),new yn(q.geometry(),p.lines));let fe=new Jt,me=Q.rotation*it;fe.position.set(Q.x,mn(o,Q),Q.z),fe.rotation.y=-me,j.position.set(0,Q.type==="fan_ceiling"||Q.type==="fan_ceiling_light"?Q.h*.18:Q.type==="fan_wall"?Q.h*.5:Q.h*.78,0),fe.add(j),g.add(fe);let pe=this.devices.some(Ae=>Ae.furnitureId===Q.id&&Ae.active);this.fanRotors.set(Q.id,{rotor:j,type:Q.type,active:pe})}this.root.add(g);let z=document.createElement("button");z.className="fp3d-pin fp3d-pin-floor",z.dataset.floor=o.id;let W=document.createElement("b");W.textContent=o.name||"\u2013";let H=document.createElement("span");H.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",z.append(W,H),z.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(z);let ie=e.get(o.id),K=[],se=null;for(let Q of o.rooms){let he=document.createElement("button");he.className="fp3d-pin",he.dataset.room=Q.id,he.dataset.floor=o.id,this.fillRoomPin(he,Q.name,this.roomInfo.get(Q.id)),he.addEventListener("click",()=>this.options.onRoomTap?.(o.id,Q.id)),this.labels.append(he);let[q,j]=z0(Q.points);K.push({pin:he,room:Q,cx:q,cz:j});for(let[fe,me]of Q.points)se??={x0:fe,x1:fe,z0:me,z1:me},se.x0=Math.min(se.x0,fe),se.x1=Math.max(se.x1,fe),se.z0=Math.min(se.z0,me),se.z1=Math.max(se.z1,me)}this.floors.push({floor:o,rank:r.indexOf(o),group:g,geo:d,floorMesh:b,shadowMesh:_,patternMesh:m,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:S,blindsMesh:v,flowMesh:F,solarMesh:U,solarLive:E,lampMesh:w,sunMesh:A,sunSig:"",haloMesh:x,coneMesh:T,trailMesh:C,fridgeMesh:P,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:V,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:se,roomPins:K,labelSize:null,materials:p,mask:f,openings:new Map,y:ie?.y??0,o:ie?.o??1,ty:0,to:1,appliedO:-1,label:z})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=t.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??tc);this.buildOpenings(o),this.buildFlows(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(d=>d.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?Up(this.building,this.roofWindows):[];if(!e.length)return;let t=new Map(ro(this.building).map(d=>[d.key,d])),n=this.building.settings.roof?.solar??[],r=gh(this.flowTime),o=[],s=new Jt,a=Un(new lt({vertexColors:!0,transparent:!0,side:Mt}),this.themeUniform),l=Un(new xn({vertexColors:!0,transparent:!0,blending:jl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Un(new lt({vertexColors:!0,transparent:!0,side:Mt,depthWrite:!1}),this.themeUniform),h=e.map(d=>{let f=new Jt;f.add(new Ye(d.solid.geometry(),a),new yn(d.lines.geometry(),l)),d.glass.count&&f.add(new Ye(d.glass.geometry(),c));let p=n.flatMap(b=>{let _=t.get(b.face);return _&&(_.section?d.sections?.includes(_.section):d===e[0])?[{face:_,field:b}]:[]}),g=mh(p,d.floor.elevation+d.base);if(g){let b=new Ye(g.geometry,r);b.renderOrder=9,f.add(b),o.push(g),bs(g,this.solarLevels)}return f.renderOrder=8,s.add(f),{group:f,floorId:d.floor.id,base:d.base,lift:d.lift!==!1}});s.renderOrder=8,this.scene.add(s),this.roof={group:s,parts:h,solid:a,lines:l,glass:c,live:r,lives:o},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-e/mm),s=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let a of t.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*OT:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.live.opacity=this.roofO,this.roofO!==s&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:kT)):r=this.explode?n.rank*BT:0,n.ty=r,n.to=o,e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.coveredRoof.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/mm);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/gm);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??tc,c=(f,p)=>(f??null)===(p??null)||typeof f=="number"&&typeof p=="number"&&Math.abs(f-p)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let h={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},d=!1;for(let f of["open","open2","tilt","tilt2"]){let p=l[f]??0,g=a[f]??0,b=p-g;Math.abs(b)<.003?h[f]=p:(h[f]=g+b*n,d=!0)}if(l.cover===null||a.cover===null)h.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?h.cover=l.cover:(h.cover=a.cover+f*n,d=!0)}(h.open!==a.open||h.open2!==(a.open2??0)||h.tilt!==a.tilt||h.tilt2!==(a.tilt2??0)||h.cover!==a.cover||!!h.sensed!=!!a.sensed)&&(r.openings.set(s,h),o=!0),t||=d}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new ae(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*WT+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=h=>{let d=this.flashes.get(h);if(!d||d<=t)return 0;let f=d-t,p=f>yh?.5+.5*Math.sin(f/140):f/yh;return Math.round(p*10)/10},r=this.devices.filter(h=>h.floorId===e.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,d)=>`${n(h.id)},${s[d]?`${s[d].level.toFixed(3)},${s[d].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let h=new ct,d=[],f=[],p=new Map,g=e.floor.height;for(let b of r){let _=b.lamp==="strip"?(b.base??g)>Math.min(e.floor.cut_height,g):b.lamp?xm.has(b.lamp):b.model==="camera_ceiling";if(!b.lamp&&!b.model||_&&this.wallMode==="cut")continue;let m=h.count,y=b.pack?Dt(b.pack):void 0,[M,v,S]=b.size??[.3,.3,.3];b.model?gp(h,b.model,b.x,b.model==="camera_ceiling"?g:b.y,b.z,b.rotation??0):y?Gl(h,y,{x:b.x,z:b.z,rotation:b.rotation??0,w:M,d:v,h:S,mirror:b.mirror},b.base??0,65280):nc(h,{...b,lamp:b.lamp},g,65280),p.set(b.furnitureId??b.id,{start:m,end:h.count}),b.pickable!==!1&&d.push({id:b.id,start:m,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:m,end:h.count})}e.lampTris=d,e.lampFurnTris=f,e.lampRanges=p,e.lampShade=L0(h.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=h.geometry(),e.lampMesh.visible=h.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,d)=>{let f=e.lampRanges.get(h.furnitureId??h.id);if(!f)return;let p=s[d],g=p?.55+.45*p.level:0,b=p?new ae(...p.color.map(y=>Math.min(1,y*g))):new ae(GT),_=n(h.id);_>0&&b.lerp(new ae(1,1,1),.7*_);let m=new ae(b.getHex());D0(c,e.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.sun,n=(this.building?.settings.north??0)*it,r=this.weather?.cloud??0,o=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(o===e.sunSig)return;e.sunSig=o;let s=new ct;if(t&&t.elevation>2&&r<.97){let a=Math.min(1,t.elevation/12)*(1-.8*r),l=t.elevation*it,c=t.azimuth*it,h=[Math.sin(n+c),-Math.cos(n+c)],d=1/Math.tan(l);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let p=[-f.toRoom[0],-f.toRoom[1]],g=p[0]*h[0]+p[1]*h[1];if(g<.05)continue;let b=e.openings.get(f.opening.id),_=f.top-(b?.cover??0)*(f.top-f.sill);if(_-f.sill<.05)continue;let m=(x,T)=>{let C=Math.min(7,T*d);return[f.start[0]+f.axis[0]*x+f.toRoom[0]*f.faceRoom-h[0]*C,.02,f.start[1]+f.axis[1]*x+f.toRoom[1]*f.faceRoom-h[1]*C]},y=.14*a*Math.min(1,g*1.5),M=new ae(1*y,.82*y,.55*y),v=M.clone().multiplyScalar(.45),S=e.floor.rooms.find(x=>x.id===f.opening.room_id);if(!S||S.points.length<3)continue;let w=Math.max(1,Math.ceil(Math.min(7,_*d)/.25)),A=Math.max(1,Math.ceil(f.width/.3));for(let x=0;x<w;x++){let T=f.sill+(_-f.sill)*x/w,C=f.sill+(_-f.sill)*(x+1)/w,P=x/w,L=(x+1)/w,F=M.clone().lerp(v,P),E=M.clone().lerp(v,L);for(let U=0;U<A;U++){let N=f.width*U/A,B=f.width*(U+1)/A,V=m((N+B)/2,(T+C)/2);if(!ut([V[0],V[2]],S.points))continue;let z=m(N,T),W=m(B,T),H=m(B,C),ie=m(N,C);s.tri(z,W,H,F,F,E),s.tri(z,H,ie,F,E,E)}}}}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=s.geometry(),e.sunMesh.visible=s.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new ct,s=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let m=(l.rotation??0)*it,y=[-Math.sin(m),Math.cos(m)],M=l.model==="camera_ceiling",v=l.reach??(M?3:4.5),S=(l.fov??(M?360:90))*it/2,w=l.motion?new ae(.9,.12,.16):new ae(.04,.22,.28),A=new ae(0,0,0),x=Math.max(4,Math.round(S/.15)),T=.015,C=e.geo.walls2d,P=E=>{let U=y[0]*Math.cos(E)-y[1]*Math.sin(E),N=y[1]*Math.cos(E)+y[0]*Math.sin(E),B=v;for(let V of C){let z=V.b[0]-V.a[0],W=V.b[1]-V.a[1],H=U*W-N*z;if(Math.abs(H)<1e-9)continue;let ie=((V.a[0]-l.x)*W-(V.a[1]-l.z)*z)/H,K=((V.a[0]-l.x)*N-(V.a[1]-l.z)*U)/H;ie>.45&&ie<B&&K>=0&&K<=1&&(B=ie)}return B},L=E=>{let U=P(E);return[l.x+(y[0]*Math.cos(E)-y[1]*Math.sin(E))*U,T,l.z+(y[1]*Math.cos(E)+y[0]*Math.sin(E))*U]},F=o.count;for(let E=0;E<x;E++)o.tri([l.x,T,l.z],L(-S+2*S*(E+1)/x),L(-S+2*S*E/x),w,A,A);s.push({id:l.id,start:F,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||xm.has(l.lamp)&&this.wallMode==="cut")continue;let[h,d,f]=l.size??Sh[l.lamp],p=l.base??0,g=(l.rotation??0)*it,b={ceiling:t-.07,downlight:t-.03,spot:t-f,panel:t-.03,pendant:Math.max(.4,t-f)+.08,floor:p+f-.15,uplight:p+f,table:p+f-.09,wall:p+f/2,strip:p+Math.max(.02,f)-.01,bollard:p+f-.08,garden:p+f-.03,fan:p+f*.08,column:p+f*.55,tv_bars:p+f*.55,orb_table:p+f*.55,portable:p+f*.55,ambient:p+f,cube:p+f*.55,round_panel:t-.03,garden_set:p+f-.03,wall_updown:p+f/2}[l.lamp],_=(m,y,M=1)=>{n.push(m,b,y),r.push(...c.color.map(v=>v*c.level*.7*M))};if(l.lamp==="strip")for(let m of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+h*(.5+m),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):_(l.x+Math.cos(g)*h*m,l.z+Math.sin(g)*h*m,.6);else l.lamp==="wall"||l.lamp==="wall_updown"?_(l.x-Math.sin(g)*(d/2+.05),l.z+Math.cos(g)*(d/2+.05)):_(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let m=new ae(...c.color.map(w=>w*.09*c.level)),y=new ae(0,0,0),M=Math.max(.03,h/2),v=.45+.35*c.level,S=16;for(let w=0;w<S;w++){let A=w/S*Math.PI*2,x=(w+1)/S*Math.PI*2,T=[l.x+Math.cos(A)*M,b,l.z+Math.sin(A)*M],C=[l.x+Math.cos(x)*M,b,l.z+Math.sin(x)*M],P=[l.x+Math.cos(A)*v,.02,l.z+Math.sin(A)*v],L=[l.x+Math.cos(x)*v,.02,l.z+Math.sin(x)*v];o.tri(T,P,L,m,y,y),o.tri(T,L,C,m,y,m)}}}let a=new Qe;a.setAttribute("position",new Ge(n,3)),a.setAttribute("color",new Ge(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0,e.coneTris=s}buildScreens(e){let t=ph(e.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),n=t.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=n;let r=new ct;for(let o of t){let s=this.screens.get(o.id),a=o.rotation*it,l=Math.cos(a),c=Math.sin(a),h=(v,S,w)=>[o.x+v*l-w*c,S,o.z+v*c+w*l];if(s.faces){let v=Math.max(.05,o.w)*(o.mirror?-1:1),S=Math.max(.05,o.d),w=Math.max(.005,o.h),A=mn(e.floor,o);for(let x of s.faces){if(x.part==="cabin"){let z=Dt(o.type),W=H=>H.color.toLowerCase()==="#13283a"||H.color==="glass";if(z&&z.parts.some(W)){let H=new ae(...x.color.map(ie=>Math.min(1,ie*(.3+.5*x.level))));rh(r,z,o,A,H.getHex(),W);continue}}if(x.part==="band"||x.part==="cabin"){let z=x.part==="cabin",W=A+w*(z?.6:.42),H=z?A+w*.86:W+.07,ie=new ae(...x.color.map(he=>Math.min(1,he*(.3+.45*x.level)))),K=Math.abs(v)/2+(z?.012:.02),se=S/2+(z?.012:.02),Q=[[-K,-se],[K,-se],[K,se],[-K,se]];for(let he=0;he<4;he++){let q=Q[he],j=Q[(he+1)%4],fe=h(q[0]*Math.sign(v),W,q[1]),me=h(j[0]*Math.sign(v),W,j[1]),pe=h(j[0]*Math.sign(v),H,j[1]),Ae=h(q[0]*Math.sign(v),H,q[1]);r.tri(fe,me,pe,ie),r.tri(fe,pe,Ae,ie)}continue}let T=x.part==="right"?.03:-Math.abs(v)/2+.03,C=x.part==="left"?-.03:Math.abs(v)/2-.03,P=A+(x.part==="bottom"?w*.45:w)+.006,L=new ae(...x.color.map(z=>Math.min(1,z*(.35+.65*x.level)))),F=new ae(0,0,0),E=(z,W,H=P)=>h(z*Math.sign(v),H,W),U=[E(T,-S/2+.03),E(C,-S/2+.03),E(C,S/2-.03),E(T,S/2-.03)];r.tri(U[0],U[2],U[1],L),r.tri(U[0],U[3],U[2],L);let N=.12+.1*x.level,B=L.clone().multiplyScalar(.5),V=[E(T-N,-S/2-N,P+.004),E(C+N,-S/2-N,P+.004),E(C+N,S/2+N,P+.004),E(T-N,S/2+N,P+.004)];for(let z=0;z<4;z++){let W=(z+1)%4;r.tri(U[z],V[W],V[z],B,F,F),r.tri(U[z],U[W],V[W],B,B,F)}}continue}let d=Dt(o.type);if(d&&!d.light&&s.ring&&d.parts.some(v=>v.glow)){let v=new ae(...s.color.map(S=>Math.min(1,S*(.45+.55*s.level))));rh(r,d,o,mn(e.floor,o),v.getHex())}let f=nh(o,e.floor);if(!f)continue;let p=new ae(...s.color.map(v=>Math.min(1,v*(.35+.65*s.level)))),g=new ae(0,0,0),b=f.z+.004;if(r.tri(h(f.x0,f.y0,b),h(f.x1,f.y0,b),h(f.x1,f.y1,b),p),r.tri(h(f.x0,f.y0,b),h(f.x1,f.y1,b),h(f.x0,f.y1,b),p),s.plain)continue;let _=.18+.12*s.level,m=p.clone().multiplyScalar(.5),y=[h(f.x0,f.y0,b),h(f.x1,f.y0,b),h(f.x1,f.y1,b),h(f.x0,f.y1,b)],M=[h(f.x0-_,f.y0-_,b+.01),h(f.x1+_,f.y0-_,b+.01),h(f.x1+_,f.y1+_,b+.01),h(f.x0-_,f.y1+_,b+.01)];for(let v=0;v<4;v++){let S=(v+1)%4;r.tri(y[v],M[v],M[S],m,g,g),r.tri(y[v],M[S],y[S],m,g,m)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=nh(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new Ye(new Ai(1,1),new lt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let h=l;new Lo().load(s.picture,d=>{if(e.screenPics.get(r)!==h){d.dispose();return}d.colorSpace=Ct,h.texture=d;let f=h.mesh.material;f.map=d,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,d),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(e,t,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*s),h=c/s,d=t.rotation*it,f=(n.x0+n.x1)/2,p=n.z+.008;e.scale.set(c,h,1),e.rotation.set(0,-d,0),e.position.set(t.x+f*Math.cos(d)-p*Math.sin(d),(n.y0+n.y1)/2,t.z+f*Math.sin(d)+p*Math.cos(d))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){let t=this.flows.filter(h=>h.floorId===e.floor.id).map(vh).join(";"),n=[],r=[],o=[],s=[],a=[];for(let h of this.flows){if(h.floorId!==e.floor.id)continue;let d=this.flowPhase.get(vh(h))??{speed:vm(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,p=h.color.map(y=>y*f),g=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(g<1e-4)continue;let b=[(h.b[0]-h.a[0])/g,(h.b[1]-h.a[1])/g,(h.b[2]-h.a[2])/g],_=[];if(Math.abs(b[1])<.5){let y=Math.hypot(b[0],b[2])||1;_.push([-b[2]/y,0,b[0]/y])}else _.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[bm*1.4,1]]:[[VT,.25],[bm,1]];for(let[y,M]of m)for(let v of _){let S=y/2,w=(x,T)=>[x[0]+v[0]*S*T,x[1]+v[1]*S*T,x[2]+v[2]*S*T],A=[[w(h.a,-1),h.dist,0],[w(h.b,-1),h.dist+g,0],[w(h.b,1),h.dist+g,1],[w(h.a,1),h.dist,1]];for(let x of[0,1,2,0,2,3]){let[T,C,P]=A[x];n.push(T[0],T[1],T[2]),r.push(p[0]*M,p[1]*M,p[2]*M),o.push(C,P),s.push(d.speed),a.push(d.offset)}}}let l=e.flowMesh.geometry;if(t===e.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,d]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(d),f.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let c=new Qe;c.setAttribute("position",new Ge(n,3)),c.setAttribute("color",new Ge(r,3)),c.setAttribute("uv",new Ge(o,2)),c.setAttribute("flowSpeed",new Ge(s,1)),c.setAttribute("flowOffset",new Ge(a,1)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=c,e.flowMesh.visible=n.length>0}buildOpenings(e){let t=lm(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new ae(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new ae(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(XT,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)t.setXYZ(s,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=Yp(this.activeFloors());t.isEmpty()&&t.set(new X(-4,0,-4),new X(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new X),r=t.getSize(new X),o=this.startView,s=this.floorId===null,a=o?o.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),h=c<1?1.12:1.06,d=$p(t,a,c,this.camera.fov*it,h),f=o?o.theta:d.theta,p=dh(t,f,a,this.camera.aspect,this.camera.fov*it,l),g=Math.max(8,p.radius);this.controls.maxRadius=Math.max(40,g*3),o&&s?n.y=t.min.y+r.y*(this.houseView?.45:.3):n.add(p.offset),this.floorId===null&&(this.houseRadius=g),o&&s&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,o.radius*1.5)),this.controls.flyTo({target:n,radius:o&&s?o.radius:g,phi:a,theta:f},e)}cameraFrame(){let e=this.size.w<700?12:18,t=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:e);return{width:this.size.w,height:this.size.h,left:t,right:e,top:e,bottom:e}}placeGround(){let e=new en,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new X(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new X(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=jT();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new X),r=e.getSize(new X),o=Mh*Math.ceil((Math.max(r.x,r.z)+16)/Mh);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-Gi-.02,n.z)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new Uo;return r.setFromCamera(new Je(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Xe;if(f!==Xe&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),d=h?this.pickOpenings.get(h):void 0;if(d)return{entity:d}}else if(a.object===c.wallMesh){let h=c.geo.coveredRoomTris.find(g=>l>=g.start&&l<g.end);if(h){if(this.roomId!==null&&c.floor.rooms.some(b=>b.id===this.roomId&&Xn(b))&&h.roofStart!==void 0&&h.roofEnd!==void 0&&l>=h.roofStart&&l<h.roofEnd)continue;return{floorId:c.floor.id,roomId:h.id}}let d=s(c.geo.outdoorTris,l);if(d)return{floorId:c.floor.id,outdoorId:d};let f=s(c.geo.furnitureTris,l),p=f?this.pickFurniture.get(f):void 0;if(p)return{entity:p};if(a.face&&!f){let g=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,b=Math.floor(g/16),_=g%16,m=this.wallMode==="cut"&&b===0,y=(c.mask.glass.value&1<<_)!==0;if(!m){let M=n.ray.direction,v=Math.hypot(M.x,M.z)||1,S=[a.point.x-M.x/v*.3,a.point.z-M.z/v*.3],w=c.floor.rooms.find(A=>A.points.length>=3&&ut(S,A.points))?.id??null;if(this.roomId!==null){if(w===this.roomId)return{floorId:c.floor.id,roomId:w}}else if(!y&&w)return{floorId:c.floor.id,roomId:w}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+yh),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}if(n&&"outdoorId"in n){this.options.onOutdoorTap?this.options.onOutdoorTap(n.floorId,n.outdoorId):this.options.onRoomTap?.(n.floorId,null);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=r.flatMap(s=>[s.lampMesh,s.wallMesh].filter(a=>a.visible));for(let s of n.intersectObjects(o,!1)){if(s.faceIndex==null)continue;let a=r.find(h=>h.group===s.object.parent),c=(s.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(h=>s.faceIndex>=h.start&&s.faceIndex<h.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let r=this.rayAt(t,n),o=e.floor.elevation+e.y,s=r.ray.direction;if(Math.abs(s.y)<1e-4)return null;let a=(o-r.ray.origin.y)/s.y;return a<=0?null:[r.ray.origin.x+s.x*a,r.ray.origin.z+s.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(d=>d.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(d=>d.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(d=>d.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t)}grabItem(e,t,n,r){let o=e.floor.furniture.find(a=>a.id===t),s=this.floorPoint(e,n,r);return!o||!s?!1:o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:e.floor.id,id:o.id,offset:[o.x-s[0],o.z-s[1]],x:o.x,z:o.z,moved:!1},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),h=l&&this.floorPoint(l,e,t);if(!l||!c||!h)return;let d=this.building?.settings.grid??.05;n.x=c.x=Math.round((h[0]+n.offset[0])/d)*d,n.z=c.z=Math.round((h[1]+n.offset[1])/d)*d,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=this.floorPoint(o,e,t);if(!s)return;let a=this.building?.settings.grid??.05;r.x=Math.round((s[0]+r.offset[0])/a)*a,r.z=Math.round((s[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(m=>m.floor.furniture.some(y=>y.id===e)):void 0,n=t?.floor.furniture.find(m=>m.id===e);if(!t||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,s=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=Dt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?mn(t.floor,n):a?n.type==="lamp_pendant"?s-n.h-.1:s-l:mn(t.floor,n),h=n.rotation*it,d=Math.cos(h),f=Math.sin(h),p=(m,y,M)=>[r+m*d-y*f,M,o+m*f+y*d],g=new Vt,b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],_=new ae(.25,.9,1);for(let m=0;m<4;m++){let[y,M]=b[m],[v,S]=b[(m+1)%4];g.seg(p(y,M,c+.01),p(v,S,c+.01),_),g.seg(p(y,M,c+l),p(v,S,c+l),_),g.seg(p(y,M,c+.01),p(y,M,c+l),_)}g.seg(p(-n.w/2,n.d/2+.03,c+.02),p(n.w/2,n.d/2+.03,c+.02),new ae(1,1,1)),this.ghost=new yn(g.geometry(),new xn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(m=>m.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new jt(o,s);a.texture.colorSpace=Ct;let l=new oi(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,d=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),p=new Uint8Array(o*s*4),g=document.createElement("canvas");g.width=o,g.height=s;let b=g.getContext("2d"),_=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let F of this.floors)F.group.visible=F===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let y=m.floor.rooms.flatMap(F=>F.points),M=m.floor.elevation,v=new en(new X(Math.min(...y.map(F=>F[0]))-.3,M,Math.min(...y.map(F=>F[1]))-.3),new X(Math.max(...y.map(F=>F[0]))+.3,M+Math.min(m.floor.cut_height,m.floor.height),Math.max(...y.map(F=>F[1]))+.3)),S=v.getCenter(new X),w=-.6,A=.8,x=new X(Math.sin(A)*Math.sin(w),Math.cos(A),Math.sin(A)*Math.cos(w));l.position.copy(S).addScaledVector(x,100),l.lookAt(S),l.updateMatrixWorld();let T=.5,C=.5;for(let F of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let U of[v.min.z,v.max.z]){let N=new X(F,E,U).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(N.x)),C=Math.max(C,Math.abs(N.y))}let P=o/s;T/C>P?C=T/P:T=C*P,l.left=-T*1.05,l.right=T*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,p);let L=b.createImageData(o,s);for(let F=0;F<s;F++)L.data.set(p.subarray((s-1-F)*o*4,(s-F)*o*4),F*o*4);b.putImageData(L,0,0),_.push({floorId:m.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h),this.ghost&&(this.ghost.visible=d),a.dispose(),this.invalidate()}return _}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?um(n.room,void 0,void 0,n.obstacles):xh(n.rest),l=a.length?a:xh(n.rest),c=0;l.forEach((h,d)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=d)}),r.motion.path=l,r.motion.next=c,n.room&&!ut(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(pm[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new ct,o=(a,l,c,h,d)=>{let f=[];for(let p=0;p<20;p++)f.push([Math.cos(p/20*Math.PI*2)*a,Math.sin(p/20*Math.PI*2)*a]);mt(r,f,l,c,h,d,{aoFrom:0,bottom:!1})};o(.17,.012,.08,2371657,3424863),o(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new lt({vertexColors:!0});let s=new ct;mt(s,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=s.geometry()}let t=new Jt,n=new lt({color:pm[e.mode]});return t.add(new Ye(this.robotGeo,this.robotMat),new Ye(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=hm(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e){let t=o=>new ae(.25-.2*o,.95-.83*o,1-.7*o),n=new ae(0,0,0),r=.02;for(let o of this.floors){let s=new ct,a=null;for(let l of e){if(l.floorId!==o.floor.id)continue;let c=t(l.age);if(a){let h=Math.hypot(l.x-a.x,l.z-a.z)||1,d=-(l.z-a.z)/h*.06,f=(l.x-a.x)/h*.06,p=t(a.age);s.tri([a.x+d,r,a.z+f],[l.x+d,r,l.z+f],[l.x-d,r,l.z-f],p,c,c),s.tri([a.x+d,r,a.z+f],[l.x-d,r,l.z-f],[a.x-d,r,a.z-f],p,c,p)}for(let h=0;h<12;h++){let d=h/12*Math.PI*2,f=(h+1)/12*Math.PI*2;s.tri([l.x,r,l.z],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],[l.x+Math.cos(d)*.22,r,l.z+Math.sin(d)*.22],c,n,n)}a=l}o.trailMesh.geometry.dispose(),o.trailMesh.geometry=s.geometry(),o.trailMesh.visible=s.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*it,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*it)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:t.y),l=new X(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new X(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(e,t,n,r,o){let s=this.floorMap.get(e);if(s){if(this.controls.flyTo({target:new X(t,s.floor.elevation+s.ty+r,n),radius:5.5,phi:.78},900),o){this.flashes.set(o,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=this.stepOpenings(t)||this.stepFridges(t),a=this.stepFans(t),l=!1;if(this.flashes.size){let g=new Set;for(let[b,_]of this.flashes){let m=this.deviceFloor.get(b);m&&g.add(m),_<=e&&this.flashes.delete(b)}l=this.flashes.size>0;for(let b of this.floors)g.has(b.floor.id)&&this.buildLamps(b)}let c=this.placeRoof(t),h=this.stepRobots(e),d=this.stepWeather(e),f=r||o||s||a||l||c,p=[];if(r&&p.push("camera"),o&&p.push("floors"),s&&p.push("openings"),a&&p.push("fans"),l&&p.push("flash"),c&&p.push("roof"),this.flowActive&&p.push("flow"),this.soundActive&&p.push("sound"),this.solarActive&&p.push("solar"),this.effectTick&&p.push("effect"),h&&p.push("robot"),n&&p.push("orbit"),this.tintTick&&p.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,p),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let g=this.lowQuality?2*ym:ym;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let b of this.floors)b.o<.02||!this.effectFloors.has(b.floor.id)||(this.buildLamps(b),this.buildGlow(b));this.invalidate()},g)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&d&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&h&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*_m:_m))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(d=>d.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((d,f)=>{let p=d?d[0]*n/o+d[1]*r/o>=.25:a;!l&&p&&(c|=1<<f)});let h=this.roomId!==null&&s.floor.rooms.some(d=>d.id===this.roomId&&Xn(d));s.mask.standing.value=l?0:Vp(this.floorId!==null||h),s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new X,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let _ of[a.z0,a.z1]){n.set(b,h,_).project(this.camera);let m=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||m<l.x)&&(l={x:m,y}),(!c||m>c.x)&&(c={x:m,y})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let d=s.labelSize.w,f=8+this.labelInset,p=l.x-d-14,g=l.y;p<f&&this.labelInset&&(p=c.x+14,g=c.y),o.push({fv:s,left:Math.max(f,Math.min(e-d-8,p)),y:g,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.floorId!==null&&(s.views!=="all"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new X(s.p[0],s.p[1]+(l?.y??0)+(s.roof?(1-this.roofO)*2.2:0),s.p[2]),h=this.camera.position.clone().sub(c),d=h.length(),f=h.normalize().dot(new X(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let p=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,d)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!p,g,f)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new X,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function qT(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,h)=>{t.strokeStyle=`rgba(55,224,255,${h})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let d of[h,h+256/2])n(s+d+.75,c,s+d+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new wi(e);return o.flipY=!1,o.wrapS=hn,o.wrapT=hn,o.anisotropy=4,o.colorSpace=Ct,o}function $T(i){let e=new lt({map:i,transparent:!0,blending:Lt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function ZT(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new wi(i);return t.wrapS=Ki,t.wrapT=Ki,t.colorSpace=Ct,t}function vh(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}`}function vm(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function KT(i){let e=new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function JT(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function QT(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new wi(e);return r.colorSpace=Ct,r}function jT(){let e=Mh,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new wi(t);return o.anisotropy=4,o.colorSpace=Ct,o}function K5(i,e){return new Th(i,e)}function nc(i,e,t,n){let[r,o,s]=e.size??Sh[e.lamp],a=e.base??0,l=(e.rotation??0)*it,c=Math.cos(l),h=Math.sin(l),d=(b,_)=>[e.x+b*c-_*h,e.z+b*h+_*c],f=(b,_,m,y,M,v=14)=>{let S=[];for(let w=0;w<v;w++){let A=w/v*Math.PI*2;S.push([e.x+Math.cos(A)*b,e.z+Math.sin(A)*b])}mt(i,S,_,m,y,M,{aoFrom:0,bottom:!0})},p=(b,_,m,y,M,v,S,w=S)=>mt(i,[d(b,m),d(_,m),d(_,y),d(b,y)],M,v,S,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,o)/2);switch(e.lamp){case"ceiling":f(g*.25,t-.04,t,Be,Be,8),f(g,t-Math.max(.04,s)-.035,t-.04,n,n);break;case"fan":{let b=Math.min(r,o)*.105;f(b*1.18,a,a+s*.05,Be,Be,12),f(b,a-s*.065,a,n,n,6);break}case"pendant":{let b=Math.max(.4,t-s);f(.06,t-.02,t,Be,Be,8);let _=e.variant==="globe"?b+2*g:e.variant==="drum"?b+.24:b+.2;if(f(.008,_,t-.02,Be,Be,5),e.variant==="globe")for(let y=0;y<7;y++){let M=Math.PI*(y/7),v=Math.PI*((y+1)/7);f(g*Math.max(.2,Math.sin((M+v)/2)),b+g-g*Math.cos(M),b+g-g*Math.cos(v),n,n,14)}else if(e.variant==="cone")for(let y=0;y<4;y++)f(g*(.25+.75*(4-y)/4),b+.06*y,b+.06*(y+1),n,n,16);else e.variant==="drum"?f(g,b,b+.24,n,n,18):(f(g*.35,b+.14,b+.2,n,n,12),f(g,b,b+.14,n,n,16));break}case"downlight":f(g,t-.012,t,Be,Be,12),f(g*.7,t-.02,t-.012,n,n,12);break;case"spot":f(g*.6,t-.02,t,Be,Be,10),f(g,t-Math.max(.06,s),t-.02,Be,Be,12),f(g*.8,t-Math.max(.06,s)-.008,t-Math.max(.06,s),n,n,12);break;case"panel":p(-r/2,r/2,-o/2,o/2,t-Math.max(.015,s),t,Be,Be),p(-r/2+.02,r/2-.02,-o/2+.02,o/2-.02,t-Math.max(.015,s)-.004,t-Math.max(.015,s),n);break;case"round_panel":f(g,t-Math.max(.025,s),t,Be,Be,18),f(g*.92,t-Math.max(.025,s)-.006,t-Math.max(.025,s),n,n,18);break;case"uplight":f(Math.max(.1,g*.6),a,a+.03,Be,Be),f(.014,a+.03,a+s-.12,Be,Be,6),f(g,a+s-.14,a+s-.02,Be,Be),f(g*.92,a+s-.02,a+s,n,n);break;case"bollard":f(g,a,a+s-.14,Be,Be,10),f(g*.9,a+s-.14,a+s-.03,n,n,10),f(g*1.1,a+s-.03,a+s,Be,Be,10);break;case"garden":f(.012,a,a+s-.08,Be,Be,5),f(g,a+s-.08,a+s-.01,Be,Be,10),f(g*.8,a+s-.01,a+s,n,n,10);break;case"floor":f(Math.max(.1,g*.7),a,a+.03,Be,Be),f(.014,a+.03,a+s-.28,Be,Be,6),f(g,a+s-.3,a+s,n,n);break;case"table":f(Math.max(.05,g*.55),a,a+.03,Be,Be),f(.012,a+.03,a+s-.16,Be,Be,6),f(g,a+s-.18,a+s,n,n);break;case"column":p(-r*.42,r*.42,-o*.42,o*.42,a,a+s*.035,Be),p(-r*.18,r*.18,-o*.18,o*.18,a+s*.035,a+s,n);break;case"tv_bars":for(let b of[-r*.31,r*.31])p(b-r*.13,b+r*.13,-o*.42,o*.42,a,a+s*.06,Be),p(b-r*.065,b+r*.065,-o*.18,o*.18,a+s*.06,a+s,n);break;case"orb_table":{f(g*.52,a,a+s*.08,Be,Be,14);let b=[.55,.82,1,.92,.66];for(let _=0;_<b.length;_++)f(g*b[_],a+s*(.08+_*.18),a+s*(.08+(_+1)*.18),n,n,12);break}case"portable":{p(-r*.42,r*.42,-o*.42,o*.42,a,a+s*.06,Be);for(let b=0;b<4;b++){let _=.48-b*.07;p(-r*_,r*_,-o*_,o*_,a+s*(.06+b*.2),a+s*(.06+(b+1)*.2),n)}p(-r*.18,r*.18,-o*.18,o*.18,a+s*.86,a+s,Be);break}case"ambient":f(g*.92,a,a+s*.22,Be,Be,14),p(-r*.42,r*.42,-o*.42,o*.42,a+s*.22,a+s,n);break;case"cube":p(-r/2,r/2,-o/2,o/2,a,a+s*.08,Be),p(-r*.46,r*.46,-o*.46,o*.46,a+s*.08,a+s,n);break;case"garden_set":for(let b of[-r*.34,0,r*.34])p(b-r*.012,b+r*.012,-o*.06,o*.06,a,a+s*.68,Be),p(b-r*.065,b+r*.065,-o*.25,o*.25,a+s*.68,a+s*.92,Be),p(b-r*.052,b+r*.052,-o*.2,o*.2,a+s*.92,a+s,n);break;case"wall":{let b=e.base??Ko;p(-r/2+.03,r/2-.03,-o/2,-o/2+.02,b,b+s,Be),p(-r/2,r/2,-o/2+.02,o/2,b+s*.15,b+s*.85,n);break}case"wall_updown":{let b=e.base??Ko;p(-r*.42,r*.42,-o/2,-o*.25,b+s*.08,b+s*.92,Be),p(-r/2,r/2,-o*.24,o/2,b,b+s*.18,n),p(-r/2,r/2,-o*.24,o/2,b+s*.82,b+s,n);break}case"strip":{let b=Math.max(.02,s),_=e.base!=null?e.base+b:t-.04;if(!e.roll&&!e.upright){p(-r/2,r/2,-o/2,o/2,_-b,_,n);break}let m=(e.roll??0)*it,y=Math.cos(m),M=Math.sin(m),v=e.upright?a+r/2:_-b/2,S=(C,P,L)=>{let F=C,E=P*y-L*M,U=P*M+L*y;return e.upright&&([F,E]=[-E,F]),[e.x+F*c-U*h,v+E,e.z+F*h+U*c]},w=[S(-r/2,-b/2,-o/2),S(r/2,-b/2,-o/2),S(r/2,-b/2,o/2),S(-r/2,-b/2,o/2),S(-r/2,b/2,-o/2),S(r/2,b/2,-o/2),S(r/2,b/2,o/2),S(-r/2,b/2,o/2)],A=new ae(n),x=[e.x,v,e.z],T=(C,P,L,F)=>{let[E,U,N]=[w[C],w[P],w[L]],B=[(U[1]-E[1])*(N[2]-E[2])-(U[2]-E[2])*(N[1]-E[1]),(U[2]-E[2])*(N[0]-E[0])-(U[0]-E[0])*(N[2]-E[2]),(U[0]-E[0])*(N[1]-E[1])-(U[1]-E[1])*(N[0]-E[0])],V=[E[0]-x[0],E[1]-x[1],E[2]-x[2]],z=B[0]*V[0]+B[1]*V[1]+B[2]*V[2]<0,[W,H,ie,K]=z?[w[F],w[L],w[P],w[C]]:[w[C],w[P],w[L],w[F]];i.tri(W,H,ie,A,A,A),i.tri(W,ie,K,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{Th as FloorplanViewer,K5 as createViewer,NT as furniturePreview,YT as isLowEnd,nc as pushLampModel};
