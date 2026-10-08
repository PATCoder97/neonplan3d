var Fh=0,pc=1,Dh=2;var Ss=1,Uh=2,Fr=3,vi=0,en=1,we=2,Bn=0,yi=1,Fe=2,mc=3,ws=4,Nh=5;var qi=100,Oh=101,Bh=102,zh=103,kh=104,Vh=200,Gh=201,Hh=202,Wh=203,gc=204,xc=205,Xh=206,qh=207,Yh=208,$h=209,Zh=210,Jh=211,Kh=212,Qh=213,jh=214,No=0,Oo=1,Bo=2,Sr=3,zo=4,ko=5,Vo=6,Go=7,bc=0,tf=1,ef=2,Tn=0,_c=1,vc=2,yc=3,Mc=4,Sc=5,wc=6,Tc=7;var Ec=300,Mi=301,Yi=302,ga=303,xa=304,Ts=306,ki=1e3,ln=1001,Ho=1002,ke=1003,nf=1004;var Es=1005;var Ge=1006,ba=1007;var Si=1008;var hn=1009,Ac=1010,Rc=1011,Dr=1012,_a=1013,En=1014,An=1015,Rn=1016,va=1017,ya=1018,Ur=1020,Cc=35902,Ic=35899,Pc=1021,Lc=1022,bn=1023,Un=1026,wi=1027,Fc=1028,Ma=1029,Ti=1030,Sa=1031;var wa=1033,As=33776,Rs=33777,Cs=33778,Is=33779,Ta=35840,Ea=35841,Aa=35842,Ra=35843,Ca=36196,Ia=37492,Pa=37496,La=37488,Fa=37489,Ps=37490,Da=37491,Ua=37808,Na=37809,Oa=37810,Ba=37811,za=37812,ka=37813,Va=37814,Ga=37815,Ha=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,$a=37821,Za=36492,Ja=36494,Ka=36495,Qa=36283,ja=36284,Ls=36285,tl=36286;var is=2300,Wo=2301,Fo=2302,ic=2303,rc=2400,sc=2401,oc=2402;var rf=3200;var Dc=0,sf=1,Kn="",Ce="srgb",rs="srgb-linear",ss="linear",fe="srgb";var Do=7680;var of=519,af=512,lf=513,cf=514,el=515,uf=516,hf=517,nl=518,ff=519,df=35044,Uc=35048;var Nc="300 es",wn=2e3,os=2001;function Kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){let i=wr("canvas");return i.style.display="block",i}var nh={},Tr=null;function Oc(...i){let t="THREE."+i.shift();Tr?Tr("log",t,...i):console.log(t,...i)}function mf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=mf(i);let t="THREE."+i.shift();if(Tr)Tr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=mf(i);let t="THREE."+i.shift();if(Tr)Tr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zi(...i){let t=i.join(" ");t in nh||(nh[t]=!0,Bt(...i))}function gf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var xf={[No]:Oo,[Bo]:Vo,[zo]:Go,[Sr]:ko,[Oo]:No,[Vo]:Bo,[Go]:zo,[ko]:Sr},Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dl=Math.PI/180,Xo=180/Math.PI;function Fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function jp(i,t){return(i%t+t)%t}function Ul(i,t,e){return(1-e)*i+e*t}function Jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var $t=Gc,On=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==p){let g=l*f+c*d+u*p+h*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,a=Math.sin(a*v)/M,l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+x*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hc=class Hc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hc.prototype.isVector3=!0;var V=Hc,Nl=new V,ih=new On,Wc=class Wc{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],x=r[0],g=r[3],m=r[6],v=r[1],M=r[4],b=r[7],y=r[2],T=r[5],w=r[8];return s[0]=o*x+a*v+l*y,s[3]=o*g+a*M+l*T,s[6]=o*m+a*b+l*w,s[1]=c*x+u*v+h*y,s[4]=c*g+u*M+h*T,s[7]=c*m+u*b+h*w,s[2]=f*x+d*v+p*y,s[5]=f*g+d*M+p*T,s[8]=f*m+d*b+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ol.makeScale(t,e)),this}rotate(t){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ol.makeRotation(-t)),this}translate(t,e){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;var Vt=Wc,Ol=new Vt,rh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){let i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===fe&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?ss:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:t,whitePoint:n,transfer:ss,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ee=tm();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lr,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{lr===void 0&&(lr=wr("canvas")),lr.width=t.width,lr.height=t.height;let r=lr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=lr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$n(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},em=0,Er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bl(r[o].image)):s.push(Bl(r[o]))}else s=Bl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var nm=0,zl=new V,Je=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,r=ln,s=Ge,o=Si,a=bn,l=hn,c=i.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Fs(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Ec;Je.DEFAULT_ANISOTROPY=1;var Xc=class Xc{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,b=(d+1)/2,y=(m+1)/2,T=(u+f)/4,w=(h+x)/4,_=(p+g)/4;return M>b&&M>y?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=T/n,s=w/n):b>y?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=_/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=w/s,r=_/s),this.set(n,r,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;var Ae=Xc,Yo=class extends Nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Je(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Er(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},as=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ma=class ma{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,x,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ma().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/cr.setFromMatrixColumn(t,0).length(),s=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,rm)}lookAt(t,e,n){let r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),oi.crossVectors(n,on),oi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),oi.crossVectors(n,on)),oi.normalize(),ao.crossVectors(on,oi),r[0]=oi.x,r[4]=ao.x,r[8]=on.x,r[1]=oi.y,r[5]=ao.y,r[9]=on.y,r[2]=oi.z,r[6]=ao.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],M=n[7],b=n[11],y=n[15],T=r[0],w=r[4],_=r[8],E=r[12],I=r[1],D=r[5],R=r[9],C=r[13],P=r[2],L=r[6],U=r[10],N=r[14],z=r[3],B=r[7],k=r[11],H=r[15];return s[0]=o*T+a*I+l*P+c*z,s[4]=o*w+a*D+l*L+c*B,s[8]=o*_+a*R+l*U+c*k,s[12]=o*E+a*C+l*N+c*H,s[1]=u*T+h*I+f*P+d*z,s[5]=u*w+h*D+f*L+d*B,s[9]=u*_+h*R+f*U+d*k,s[13]=u*E+h*C+f*N+d*H,s[2]=p*T+x*I+g*P+m*z,s[6]=p*w+x*D+g*L+m*B,s[10]=p*_+x*R+g*U+m*k,s[14]=p*E+x*C+g*N+m*H,s[3]=v*T+M*I+b*P+y*z,s[7]=v*w+M*D+b*L+y*B,s[11]=v*_+M*R+b*U+y*k,s[15]=v*E+M*C+b*N+y*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*d-c*f,M=a*d-c*h,b=a*f-l*h,y=o*d-c*u,T=o*f-l*u,w=o*h-a*u;return e*(x*v-g*M+m*b)-n*(p*v-g*y+m*T)+r*(p*M-x*y+m*w)-s*(p*b-x*T+g*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*a-n*o,M=e*l-r*o,b=e*c-s*o,y=n*l-r*a,T=n*c-s*a,w=r*c-s*l,_=u*x-h*p,E=u*g-f*p,I=u*m-d*p,D=h*g-f*x,R=h*m-d*x,C=f*m-d*g,P=v*C-M*R+b*D+y*I-T*E+w*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return t[0]=(a*C-l*R+c*D)*L,t[1]=(r*R-n*C-s*D)*L,t[2]=(x*w-g*T+m*y)*L,t[3]=(f*T-h*w-d*y)*L,t[4]=(l*I-o*C-c*E)*L,t[5]=(e*C-r*I+s*E)*L,t[6]=(g*b-p*w-m*M)*L,t[7]=(u*w-f*b+d*M)*L,t[8]=(o*R-a*I+c*_)*L,t[9]=(n*I-e*R-s*_)*L,t[10]=(p*T-x*b+m*v)*L,t[11]=(h*b-u*T-d*v)*L,t[12]=(a*E-o*D-l*_)*L,t[13]=(e*D-n*E+r*_)*L,t[14]=(x*M-p*y-g*v)*L,t[15]=(u*y-h*M+f*v)*L,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,x=o*u,g=o*h,m=a*h,v=l*c,M=l*u,b=l*h,y=n.x,T=n.y,w=n.z;return r[0]=(1-(x+m))*y,r[1]=(d+b)*y,r[2]=(p-M)*y,r[3]=0,r[4]=(d-b)*T,r[5]=(1-(f+m))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(p+M)*w,r[9]=(g-v)*w,r[10]=(1-(f+x))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=cr.set(r[0],r[1],r[2]).length(),a=cr.set(r[4],r[5],r[6]).length(),l=cr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),vn.copy(this);let c=1/o,u=1/a,h=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=wn,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===wn)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===os)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=wn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===wn)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===os)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ma.prototype.isMatrix4=!0;var Se=ma,cr=new V,vn=new Se,im=new V(0,0,0),rm=new V(1,1,1),oi=new V,ao=new V,on=new V,oh=new Se,ah=new On,fi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sm=0,lh=new V,ur=new On,Hn=new Se,lo=new V,Kr=new V,om=new V,am=new On,ch=new V(1,0,0),uh=new V(0,1,0),hh=new V(0,0,1),fh={type:"added"},lm={type:"removed"},hr={type:"childadded",child:null},kl={type:"childremoved",child:null},sn=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new fi,n=new On,r=new V(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new Vt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Kr,lo,this.up):Hn.lookAt(lo,Kr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Hn),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),hr.child=t,this.dispatchEvent(hr),hr.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new V(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},cm={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},co={h:0,s:0,l:0};function Vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var st=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=jp(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Vl(o,s,t+1/3),this.g=Vl(o,s,t),this.b=Vl(o,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ee.workingToColorSpace(Ye.copy(this),t),Math.round(ne(Ye.r*255,0,255))*65536+Math.round(ne(Ye.g*255,0,255))*256+Math.round(ne(Ye.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,r=Ye.g,s=Ye.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ce){ee.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,r=Ye.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(co);let n=Ul(ai.h,co.h,e),r=Ul(ai.s,co.s,e),s=Ul(ai.l,co.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new st;st.NAMES=bf;var ls=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vi=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new V,Wn=new V,Gl=new V,Xn=new V,fr=new V,dr=new V,dh=new V,Hl=new V,Wl=new V,Xl=new V,ql=new Ae,Yl=new Ae,$l=new Ae,hi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),yn.subVectors(t,e),r.cross(yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){yn.subVectors(r,e),Wn.subVectors(n,e),Gl.subVectors(t,e);let o=yn.dot(yn),a=yn.dot(Wn),l=yn.dot(Gl),c=Wn.dot(Wn),u=Wn.dot(Gl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ql.setScalar(0),Yl.setScalar(0),$l.setScalar(0),ql.fromBufferAttribute(t,e),Yl.fromBufferAttribute(t,n),$l.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ql,s.x),o.addScaledVector(Yl,s.y),o.addScaledVector($l,s.z),o}static isFrontFacing(t,e,n,r){return yn.subVectors(n,e),Wn.subVectors(t,e),yn.cross(Wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;fr.subVectors(r,n),dr.subVectors(s,n),Hl.subVectors(t,n);let l=fr.dot(Hl),c=dr.dot(Hl);if(l<=0&&c<=0)return e.copy(n);Wl.subVectors(t,r);let u=fr.dot(Wl),h=dr.dot(Wl);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(fr,o);Xl.subVectors(t,s);let d=fr.dot(Xl),p=dr.dot(Xl);if(p>=0&&d<=p)return e.copy(s);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(dr,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return dh.subVectors(s,r),a=(h-u)/(h-u+(d-p)),e.copy(r).addScaledVector(dh,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(fr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qe=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),ho.subVectors(this.max,Qr),pr.subVectors(t.a,Qr),mr.subVectors(t.b,Qr),gr.subVectors(t.c,Qr),li.subVectors(mr,pr),ci.subVectors(gr,mr),Ui.subVectors(pr,gr);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ui.z,Ui.y,li.z,0,-li.x,ci.z,0,-ci.x,Ui.z,0,-Ui.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ui.y,Ui.x,0];return!Zl(e,pr,mr,gr,ho)||(e=[1,0,0,0,1,0,0,0,1],!Zl(e,pr,mr,gr,ho))?!1:(fo.crossVectors(li,ci),e=[fo.x,fo.y,fo.z],Zl(e,pr,mr,gr,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new V,new V,new V,new V,new V,new V,new V,new V],Mn=new V,uo=new Qe,pr=new V,mr=new V,gr=new V,li=new V,ci=new V,Ui=new V,Qr=new V,ho=new V,fo=new V,Ni=new V;function Zl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ni.fromArray(i,s);let a=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Le=new V,po=new $t,um=0,mn=class extends Nn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=df,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var cs=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gi=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},hm=new Qe,jr=new V,Jl=new V,di=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);let e=jr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(jr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add(Jl)),this.expandByPoint(jr.copy(t.center).sub(Jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fm=0,pn=new Se,Kl=new sn,xr=new V,an=new Qe,ts=new Qe,ze=new V,Zt=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kp(t)?Gi:cs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(an.min,ts.min),an.expandByPoint(ze),ze.addVectors(an.max,ts.max),an.expandByPoint(ze)):(an.expandByPoint(ts.min),an.expandByPoint(ts.max))}an.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(xr.fromBufferAttribute(t,c),ze.add(xr)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new V,l[_]=new V;let c=new V,u=new V,h=new V,f=new $t,d=new $t,p=new $t,x=new V,g=new V;function m(_,E,I){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,I),f.fromBufferAttribute(s,_),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,I),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(D),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(D),a[_].add(x),a[E].add(x),a[I].add(x),l[_].add(g),l[E].add(g),l[I].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,E=v.length;_<E;++_){let I=v[_],D=I.start,R=I.count;for(let C=D,P=D+R;C<P;C+=3)m(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let M=new V,b=new V,y=new V,T=new V;function w(_){y.fromBufferAttribute(r,_),T.copy(y);let E=a[_];M.copy(E),M.sub(y.multiplyScalar(y.dot(E))).normalize(),b.crossVectors(T,E);let D=b.dot(l[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,D)}for(let _=0,E=v.length;_<E;++_){let I=v[_],D=I.start,R=I.count;for(let C=D,P=D+R;C<P;C+=3)w(t.getX(C+0)),w(t.getX(C+1)),w(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new mn(f,u,h)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ql=new V,dm=new V,pm=new Vt,Sn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Ql.subVectors(n,e).cross(dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Ql),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pm.getNormalMatrix(t),r=this.coplanarPoint(Ql).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},mm=0,Zn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=yi,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new st().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new V,jl=new V,mo=new V,go=new V,Hi=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){jl.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),go.copy(this.origin).sub(jl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=go.dot(this.direction),l=-go.dot(mo),c=go.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jl).addScaledVector(mo,f),d}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,v=n.y-o.y,M=n.z-o.z,b=Math.abs(l),y=Math.abs(c),T=Math.abs(u),w,_,E,I,D,R,C,P,L,U,N,z;if(b>=y&&b>=T?(E=l,R=h,L=p,z=m,l>=0?(w=c,_=u,I=f,D=d,C=x,P=g,U=v,N=M):(w=u,_=c,I=d,D=f,C=g,P=x,U=M,N=v)):y>=T?(E=c,R=f,L=x,z=v,c>=0?(w=u,_=l,I=d,D=h,C=g,P=p,U=M,N=m):(w=l,_=u,I=h,D=d,C=p,P=g,U=m,N=M)):(E=u,R=d,L=g,z=M,u>=0?(w=l,_=c,I=h,D=f,C=p,P=x,U=m,N=v):(w=c,_=l,I=f,D=h,C=x,P=p,U=v,N=m)),E===0)return null;let B=w/E,k=_/E,H=1/E,nt=I-B*R,J=D-k*R,et=C-B*L,lt=P-k*L,mt=U-B*z,q=N-k*z,K=mt*lt-q*et,ut=nt*q-J*mt,yt=et*J-lt*nt;if(r){if(K<0||ut<0||yt<0)return null}else if((K<0||ut<0||yt<0)&&(K>0||ut>0||yt>0))return null;let ft=K+ut+yt;if(ft===0)return null;let Nt=H*(K*R+ut*L+yt*z);return(ft>0?Nt<0:Nt>0)?null:this.at(Nt/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ph=new Se,Oi=new Hi,xo=new di,mh=new V,bo=new V,_o=new V,vo=new V,tc=new V,yo=new V,gh=new V,Mo=new V,Xt=class extends sn{constructor(t=new Zt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(tc.fromBufferAttribute(h,t),o?yo.addScaledVector(tc,u):yo.addScaledVector(tc.sub(e),u))}e.add(yo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),Oi.copy(t.ray).recast(t.near),!(xo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(xo,mh)===null||Oi.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(s).invert(),Oi.copy(t.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=v,y=M;b<y;b+=3){let T=a.getX(b),w=a.getX(b+1),_=a.getX(b+2);r=So(this,m,t,n,c,u,h,T,w,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),M=a.getX(g+1),b=a.getX(g+2);r=So(this,o,t,n,c,u,h,v,M,b),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=v,y=M;b<y;b+=3){let T=b,w=b+1,_=b+2;r=So(this,m,t,n,c,u,h,T,w,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=g,M=g+1,b=g+2;r=So(this,o,t,n,c,u,h,v,M,b),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function gm(i,t,e,n,r,s,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===vi,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:i}}function So(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,bo),i.getVertexPosition(l,_o),i.getVertexPosition(c,vo);let u=gm(i,t,e,n,bo,_o,vo,gh);if(u){let h=new V;hi.getBarycoord(gh,bo,_o,vo,h),r&&(u.uv=hi.getInterpolatedAttribute(r,a,l,c,h,new $t)),s&&(u.uv1=hi.getInterpolatedAttribute(s,a,l,c,h,new $t)),o&&(u.normal=hi.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};hi.getNormal(bo,_o,vo,f.normal),u.face=f,u.barycoord=h}return u}var Zo=class extends Je{constructor(t=null,e=1,n=1,r,s,o,a,l,c=ke,u=ke,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=new di,xm=new $t(.5,.5),wo=new V,us=class{constructor(t=new Sn,e=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],x=s[9],g=s[10],m=s[11],v=s[12],M=s[13],b=s[14],y=s[15];if(r[0].setComponents(c-o,d-u,m-p,y-v).normalize(),r[1].setComponents(c+o,d+u,m+p,y+v).normalize(),r[2].setComponents(c+a,d+h,m+x,y+M).normalize(),r[3].setComponents(c-a,d-h,m-x,y-M).normalize(),n)r[4].setComponents(l,f,g,b).normalize(),r[5].setComponents(c-l,d-f,m-g,y-b).normalize();else if(r[4].setComponents(c-l,d-f,m-g,y-b).normalize(),e===wn)r[5].setComponents(c+l,d+f,m+g,y+b).normalize();else if(e===os)r[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);let e=xm.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(wo.x=r.normal.x>0?t.max.x:t.min.x,wo.y=r.normal.y>0?t.max.y:t.min.y,wo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gn=class extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jo=new V,Ko=new V,xh=new Se,es=new Hi,To=new di,ec=new V,bh=new V,Qo=class extends sn{constructor(t=new Zt,e=new gn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Jo.fromBufferAttribute(e,r-1),Ko.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Jo.distanceTo(Ko);t.setAttribute("lineDistance",new kt(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),To.radius+=s,t.ray.intersectsSphere(To)===!1)return;xh.copy(r).invert(),es.copy(t.ray).applyMatrix4(xh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=u.getX(x),v=u.getX(x+1),M=Eo(this,t,es,l,m,v,x);M&&e.push(M)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(d),m=Eo(this,t,es,l,x,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=Eo(this,t,es,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Eo(this,t,es,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Eo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Jo.fromBufferAttribute(a,r),Ko.fromBufferAttribute(a,s),e.distanceSqToSegment(Jo,Ko,ec,bh)>n)return;ec.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ec);if(!(c<t.near||c>t.far))return{distance:c,point:bh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _h=new V,vh=new V,xn=class extends Qo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)_h.fromBufferAttribute(e,r),vh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+_h.distanceTo(vh);t.setAttribute("lineDistance",new kt(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wi=class extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yh=new Se,ac=new Hi,Ao=new di,Ro=new V,Cr=class extends sn{constructor(t=new Zt,e=new Wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,t.ray.intersectsSphere(Ao)===!1)return;yh.copy(r).invert(),ac.copy(t.ray).applyMatrix4(yh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Ro.fromBufferAttribute(h,g),Mh(Ro,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Ro.fromBufferAttribute(h,p),Mh(Ro,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Mh(i,t,e,n,r,s,o){let a=ac.distanceSqToPoint(i);if(a<e){let l=new V;ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var hs=class extends Je{constructor(t=[],e=Mi,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pi=class extends Je{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class extends Je{constructor(t,e,n=En,r,s,o,a=ke,l=ke,c,u=Un,h=1){if(u!==Un&&u!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jo=class extends mi{constructor(t,e=En,n=Mi,r,s,o=ke,a=ke,l,c=Un){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fs=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ir=class i extends Zt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function p(x,g,m,v,M,b,y,T,w,_,E){let I=b/w,D=y/_,R=b/2,C=y/2,P=T/2,L=w+1,U=_+1,N=0,z=0,B=new V;for(let k=0;k<U;k++){let H=k*D-C;for(let nt=0;nt<L;nt++){let J=nt*I-R;B[x]=J*v,B[g]=H*M,B[m]=P,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[m]=T>0?1:-1,u.push(B.x,B.y,B.z),h.push(nt/w),h.push(1-k/_),N+=1}}for(let k=0;k<_;k++)for(let H=0;H<w;H++){let nt=f+H+L*k,J=f+H+L*(k+1),et=f+(H+1)+L*(k+1),lt=f+(H+1)+L*k;l.push(nt,J,lt),l.push(J,et,lt),z+=6}a.addGroup(d,z,E),d+=z,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ds=class i extends Zt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new V,u=new $t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function bm(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=_f(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Sm(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ps(s,o,e,a,l,c,0),o}function _f(i,t,e,n,r){let s;if(r===Dm(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Sh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Sh(o/n|0,i[o],i[o+1],s);return s&&Pr(s,s.next)&&(gs(s),s=s.next),s}function Xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||Ee(e.prev,e,e.next)===0)){if(gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ps(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Rm(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?vm(i,n,r,s):_m(i)){t.push(l.i,i.i,c.i),gs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ym(Xi(i),t),ps(i,t,e,n,r,s,2)):o===2&&Mm(i,t,e,n,r,s):ps(Xi(i),t,e,n,r,s,1);break}}}function _m(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&ns(r,a,s,l,o,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vm(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ee(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),m=lc(d,p,t,e,n),v=lc(x,g,t,e,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=m&&b&&b.z<=v;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&ns(a,u,l,h,c,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==r&&b!==o&&ns(a,u,l,h,c,f,b.x,b.y)&&Ee(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&ns(a,u,l,h,c,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==r&&b!==o&&ns(a,u,l,h,c,f,b.x,b.y)&&Ee(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ym(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Pr(n,r)&&yf(n,e,e.next,r)&&ms(n,r)&&ms(r,n)&&(t.push(n.i,e.i,r.i),gs(e),gs(e.next),e=i=r),e=e.next}while(e!==i);return Xi(e)}function Mm(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pm(o,a)){let l=Mf(o,a);o=Xi(o,o.next),l=Xi(l,l.next),ps(o,t,e,n,r,s,0),ps(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Sm(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=_f(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Im(c))}r.sort(wm);for(let s=0;s<r.length;s++)e=Tm(r[s],e);return e}function wm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Tm(i,t){let e=Em(i,t);if(!e)return t;let n=Mf(e,i);return Xi(n,n.next),Xi(e,e.next)}function Em(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Pr(i,e))return e;do{if(Pr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&vf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);ms(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Am(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Am(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Rm(i,t,e,n){let r=i;do r.z===0&&(r.z=lc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Cm(r)}function Cm(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function lc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Im(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function ns(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&vf(i,t,e,n,r,s,o,a)}function Pm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lm(i,t)&&(ms(i,t)&&ms(t,i)&&Fm(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Pr(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pr(i,t){return i.x===t.x&&i.y===t.y}function yf(i,t,e,n){let r=Io(Ee(i,t,e)),s=Io(Ee(i,t,n)),o=Io(Ee(e,n,i)),a=Io(Ee(e,n,t));return!!(r!==s&&o!==a||r===0&&Co(i,e,t)||s===0&&Co(i,n,t)||o===0&&Co(e,i,n)||a===0&&Co(e,t,n))}function Co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Io(i){return i>0?1:i<0?-1:0}function Lm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ms(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Fm(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mf(i,t){let e=cc(i.i,i.x,i.y),n=cc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Sh(i,t,e,n){let r=cc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dm(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var uc=class{static triangulate(t,e,n=2){return bm(t,e,n)}},xs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];wh(t),Th(n,t);let o=t.length;e.forEach(wh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Th(n,e[l]);let a=uc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function wh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Th(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gi=class i extends Zt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let v=m*f-o;for(let M=0;M<c;M++){let b=M*h-s;p.push(b,-v,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let M=v+c*m,b=v+c*(m+1),y=v+1+c*(m+1),T=v+1+c*m;d.push(M,b,T),d.push(b,y,T)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},bs=class i extends Zt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new V,p=new $t;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let x=0;x<r;x++){let g=x*(n+1);for(let m=0;m<n;m++){let v=m+g,M=v,b=v+n+1,y=v+n+2,T=v+1;a.push(M,b,T),a.push(b,y,T)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Eh(r))r.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Eh(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let r in n)t[r]=n[r]}return t}function Eh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Um(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Sf={clone:$i,merge:je},Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Um(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new st().setHex(r.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(r.value);break;case"v3":this.uniforms[n].value=new V().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ta=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ea=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},na=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function br(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ia=class extends xi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case sc:s=t,a=2*e-n;break;case oc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:o=t,l=2*n-e;break;case oc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-d)*g+(1.5+d)*x+.5*p,b=d*g-d*x;for(let y=0;y!==a;++y)s[y]=m*o[u+y]+v*o[c+y]+M*o[l+y]+b*o[h+y];return s}},ra=class extends xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},sa=class extends xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},oa=class extends xi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-e)/(r-e),x=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*f+p*2,v=h[m],M=h[m+1],b=t*f+p*2,y=u[b],T=u[b+1],w=zm(n,e,v,y,r);s[p]=wf(w,x,M,T,g)}return s}};function wf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Bm(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function zm(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=wf(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Bm(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var un=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=br(e,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:br(t.times,Array),values:br(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),nc(t.settings)&&(n.settings={inTangents:br(t.settings.inTangents,Array),outTangents:br(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case is:e=this.InterpolantFactoryMethodDiscrete;break;case Wo:e=this.InterpolantFactoryMethodLinear;break;case Fo:e=this.InterpolantFactoryMethodSmooth;break;case ic:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Fo;case this.InterpolantFactoryMethodBezier:return ic}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;nc(this.settings)&&(Ah(this.settings.inTangents,t),Ah(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Qp(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let x=e[h+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,nc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ah(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Wo;var bi=class extends un{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=is;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends un{constructor(t,e,n,r){super(t,e,n,r)}};aa.prototype.ValueTypeName="color";var la=class extends un{constructor(t,e,n,r){super(t,e,n,r)}};la.prototype.ValueTypeName="number";var ca=class extends xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)On.slerpFlat(s,0,o,c-a,o,c,l);return s}},_s=class extends un{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends un{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=is;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends un{constructor(t,e,n,r){super(t,e,n,r)}};ua.prototype.ValueTypeName="vector";var Uo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Rh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Rh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Rh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ha=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tf=new ha,Lr=class{constructor(t){this.manager=t!==void 0?t:Tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=new WeakMap,fa=class extends Lr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Uo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=_r.get(o);h===void 0&&(h=[],_r.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=wr("img");function l(){u(),e&&e(this);let h=_r.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}_r.delete(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),Uo.remove(`image:${t}`);let f=_r.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}_r.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Uo.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var vs=class extends Lr{constructor(t){super(t)}load(t,e,n,r){let s=new Je,o=new fa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Po=new V,Lo=new On,Dn=new V,ys=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Lo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Po,Lo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ui=new V,Ch=new $t,Ih=new $t,$e=class extends ys{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ih),e.subVectors(Ih,Ch)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jn=class extends ys{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var vr=-90,yr=1,da=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $e(vr,yr,t,e);r.layers=this.layers,this.add(r);let s=new $e(vr,yr,t,e);s.layers=this.layers,this.add(s);let o=new $e(vr,yr,t,e);o.layers=this.layers,this.add(o);let a=new $e(vr,yr,t,e);a.layers=this.layers,this.add(a);let l=new $e(vr,yr,t,e);l.layers=this.layers,this.add(l);let c=new $e(vr,yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},pa=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zc="\\[\\]\\.:\\/",km=new RegExp("["+zc+"]","g"),kc="[^"+zc+"]",Vm="[^"+zc.replace("\\.","")+"]",Gm=/((?:WC+[\/:])*)/.source.replace("WC",kc),Hm=/(WCOD+)?/.source.replace("WCOD",Vm),Wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),Xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),qm=new RegExp("^"+Gm+Hm+Wm+Xm+"$"),Ym=["material","materials","bones","map"],hc=class{constructor(t,e,n){let r=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(km,"")}static parseTrackName(t){let e=qm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ym.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=hc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GM=new Float32Array(1);var Ph=new Se,Ms=class{constructor(t,e,n=0,r=1/0){this.ray=new Hi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(t,e=!0,n=[]){return fc(t,this,n,e),n.sort(Lh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)fc(t[r],this,n,e);return n.sort(Lh),n}};function Lh(i,t){return i.distance-t.distance}function fc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)fc(s[o],t,e,!0)}}var qc=class qc{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};qc.prototype.isMatrix2=!0;var dc=qc;function Vc(i,t,e,n){let r=$m(n);switch(e){case Pc:return i*t;case Fc:return i*t/r.components*r.byteLength;case Ma:return i*t/r.components*r.byteLength;case Ti:return i*t*2/r.components*r.byteLength;case Sa:return i*t*2/r.components*r.byteLength;case Lc:return i*t*3/r.components*r.byteLength;case bn:return i*t*4/r.components*r.byteLength;case wa:return i*t*4/r.components*r.byteLength;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case Ta:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Ia:case La:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Ps:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Za:case Ja:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ls:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case hn:case Ac:return{byteLength:1,components:1};case Dr:case Rc:case Rn:return{byteLength:2,components:1};case va:case ya:return{byteLength:2,components:4};case En:case _a:case An:return{byteLength:4,components:1};case Cc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Yf(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Jm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,v0=`#define PI 3.141592653589793
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
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
#endif`,Z0=`uniform sampler2D dfgLUT;
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
}`,J0=`
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,ox=`#define DISTANCE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,px=`#define LAMBERT
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,xx=`#define NORMAL
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
}`,bx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,vx=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,Sx=`#define TOON
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
}`,wx=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,Cx=`uniform float rotation;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Km,alphahash_pars_fragment:Qm,alphamap_fragment:jm,alphamap_pars_fragment:t0,alphatest_fragment:e0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:r0,batching_pars_vertex:s0,batching_vertex:o0,begin_vertex:a0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:u0,bumpmap_pars_fragment:h0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:x0,color_pars_vertex:b0,color_vertex:_0,common:v0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:M0,displacementmap_pars_vertex:S0,displacementmap_vertex:w0,emissivemap_fragment:T0,emissivemap_pars_fragment:E0,colorspace_fragment:A0,colorspace_pars_fragment:R0,envmap_fragment:C0,envmap_common_pars_fragment:I0,envmap_pars_fragment:P0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:H0,envmap_vertex:F0,fog_vertex:D0,fog_pars_vertex:U0,fog_fragment:N0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:V0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:$0,lights_physical_pars_fragment:Z0,lights_fragment_begin:J0,lights_fragment_maps:K0,lights_fragment_end:Q0,lightprobes_pars_fragment:j0,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:sg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:ug,morphcolor_vertex:hg,morphnormal_vertex:fg,morphtarget_pars_vertex:dg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:xg,normal_pars_vertex:bg,normal_vertex:_g,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:wg,opaque_fragment:Tg,packing:Eg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Ig,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Ug,shadowmask_pars_fragment:Ng,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:kg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:$g,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:Kg,background_frag:Qg,backgroundCube_vert:jg,backgroundCube_frag:tx,cube_vert:ex,cube_frag:nx,depth_vert:ix,depth_frag:rx,distance_vert:sx,distance_frag:ox,equirect_vert:ax,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:ux,meshbasic_vert:hx,meshbasic_frag:fx,meshlambert_vert:dx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:xx,meshnormal_frag:bx,meshphong_vert:_x,meshphong_frag:vx,meshphysical_vert:yx,meshphysical_frag:Mx,meshtoon_vert:Sx,meshtoon_frag:wx,points_vert:Tx,points_frag:Ex,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Ix},St={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},kn={basic:{uniforms:je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new st(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([St.points,St.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([St.common,St.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([St.sprite,St.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:je([St.common,St.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:je([St.lights,St.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};kn.physical={uniforms:je([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var il={r:0,b:0,g:0},Px=new Se,$f=new Vt;$f.set(-1,0,0,0,1,0,0,0,1);function Lx(i,t,e,n,r,s){let o=new st(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let b=v.backgroundBlurriness>0;M=t.get(M,b)}return M}function p(v){let M=!1,b=d(v);b===null?g(o,a):b&&b.isColor&&(g(b,1),M=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,M){let b=d(M);b&&(b.isCubeTexture||b.mapping===Ts)?(c===void 0&&(c=new Xt(new Ir(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:$i(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($f),c.material.toneMapped=ee.getTransfer(b.colorSpace)!==fe,(u!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xt(new gi(2,2),new cn({name:"BackgroundMaterial",uniforms:$i(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ee.getTransfer(b.colorSpace)!==fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(il,Bc(i)),e.buffers.color.setClear(il.r,il.g,il.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:p,addToRenderList:x,dispose:m}}function Fx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(D,R,C,P,L){let U=!1,N=h(D,P,C,R);s!==N&&(s=N,c(s.object)),U=d(D,P,C,L),U&&p(D,P,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,b(D,R,C,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function h(D,R,C,P){let L=P.wireframe===!0,U=n[R.id];U===void 0&&(U={},n[R.id]=U);let N=D.isInstancedMesh===!0?D.id:0,z=U[N];z===void 0&&(z={},U[N]=z);let B=z[C.id];B===void 0&&(B={},z[C.id]=B);let k=B[L];return k===void 0&&(k=f(l()),B[L]=k),k}function f(D){let R=[],C=[],P=[];for(let L=0;L<e;L++)R[L]=0,C[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,R,C,P){let L=s.attributes,U=R.attributes,N=0,z=C.getAttributes();for(let B in z)if(z[B].location>=0){let H=L[B],nt=U[B];if(nt===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),H===void 0||H.attribute!==nt||nt&&H.data!==nt.data)return!0;N++}return s.attributesNum!==N||s.index!==P}function p(D,R,C,P){let L={},U=R.attributes,N=0,z=C.getAttributes();for(let B in z)if(z[B].location>=0){let H=U[B];H===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(H=D.instanceColor));let nt={};nt.attribute=H,H&&H.data&&(nt.data=H.data),L[B]=nt,N++}s.attributes=L,s.attributesNum=N,s.index=P}function x(){let D=s.newAttributes;for(let R=0,C=D.length;R<C;R++)D[R]=0}function g(D){m(D,0)}function m(D,R){let C=s.newAttributes,P=s.enabledAttributes,L=s.attributeDivisors;C[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),L[D]!==R&&(i.vertexAttribDivisor(D,R),L[D]=R)}function v(){let D=s.newAttributes,R=s.enabledAttributes;for(let C=0,P=R.length;C<P;C++)R[C]!==D[C]&&(i.disableVertexAttribArray(C),R[C]=0)}function M(D,R,C,P,L,U,N){N===!0?i.vertexAttribIPointer(D,R,C,L,U):i.vertexAttribPointer(D,R,C,P,L,U)}function b(D,R,C,P){x();let L=P.attributes,U=C.getAttributes(),N=R.defaultAttributeValues;for(let z in U){let B=U[z];if(B.location>=0){let k=L[z];if(k===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),k!==void 0){let H=k.normalized,nt=k.itemSize,J=t.get(k);if(J===void 0)continue;let et=J.buffer,lt=J.type,mt=J.bytesPerElement,q=lt===i.INT||lt===i.UNSIGNED_INT||k.gpuType===_a;if(k.isInterleavedBufferAttribute){let K=k.data,ut=K.stride,yt=k.offset;if(K.isInstancedInterleavedBuffer){for(let ft=0;ft<B.locationSize;ft++)m(B.location+ft,K.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ft=0;ft<B.locationSize;ft++)g(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ft=0;ft<B.locationSize;ft++)M(B.location+ft,nt/B.locationSize,lt,H,ut*mt,(yt+nt/B.locationSize*ft)*mt,q)}else{if(k.isInstancedBufferAttribute){for(let K=0;K<B.locationSize;K++)m(B.location+K,k.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let K=0;K<B.locationSize;K++)g(B.location+K);i.bindBuffer(i.ARRAY_BUFFER,et);for(let K=0;K<B.locationSize;K++)M(B.location+K,nt/B.locationSize,lt,H,nt*mt,nt/B.locationSize*K*mt,q)}}else if(N!==void 0){let H=N[z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(B.location,H);break;case 3:i.vertexAttrib3fv(B.location,H);break;case 4:i.vertexAttrib4fv(B.location,H);break;default:i.vertexAttrib1fv(B.location,H)}}}}v()}function y(){E();for(let D in n){let R=n[D];for(let C in R){let P=R[C];for(let L in P){let U=P[L];for(let N in U)u(U[N].object),delete U[N];delete P[L]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let R=n[D.id];for(let C in R){let P=R[C];for(let L in P){let U=P[L];for(let N in U)u(U[N].object),delete U[N];delete P[L]}}delete n[D.id]}function w(D){for(let R in n){let C=n[R];for(let P in C){let L=C[P];if(L[D.id]===void 0)continue;let U=L[D.id];for(let N in U)u(U[N].object),delete U[N];delete L[D.id]}}}function _(D){for(let R in n){let C=n[R],P=D.isInstancedMesh===!0?D.id:0,L=C[P];if(L!==void 0){for(let U in L){let N=L[U];for(let z in N)u(N[z].object),delete N[z];delete L[U]}delete C[P],Object.keys(C).length===0&&delete n[R]}}}function E(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Dx(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Ux(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let _=w===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&w!==An&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:b,maxSamples:y,samples:T}}function Nx(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Sn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let v=s?0:n,M=v*4,b=m.clippingState||null;l.value=b,b=u(p,f,M,d);for(let y=0;y!==M;++y)b[y]=e[y];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,b=d;M!==x;++M,b+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Or=4,Ox=6,Bx=20,zx=256,Ds=new Jn,Ef=new st,Yc=null,$c=0,Zc=0,Jc=!1,kx=new V,Zi=new V,sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=kx}=s;Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yc,$c,Zc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Rn,format:bn,colorSpace:rs,depthBuffer:!1},r=Af(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vx(s)),this._blurMaterial=Hx(s,t,e),this._ggxMaterial=Gx(s,t,e)}return r}_compileMaterial(t){let e=new Xt(new Zt,t);this._renderer.compile(e,Ds)}_sceneToCubeUV(t,e,n,r,s){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ef),h.toneMapping=Tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new Ir,new le({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Ef),m=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let y=this._cubeSize;Nr(r,b*y,M>2?y:0,y,y),h.setRenderTarget(r),m&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Mi||t.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ds)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Or?n-p+Or:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Nr(s,g,m,3*x,2*x),r.setRenderTarget(s),r.render(a,Ds),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Nr(t,g,m,3*x,2*x),r.setRenderTarget(t),r.render(a,Ds)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Or?r-this._lodMax+Or:0),f=4*(this._cubeSize-u);Nr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Ds)}};function Vx(i){let t=[],e=[],n=i,r=i-Or+1+Ox;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let m=0;m<h;m++){let v=m%3*2/3-1,M=m>2?0:-1,b=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];p.set(b,d*f*m);for(let y=0;y<f;y++){let T=u[y*2]*2-1,w=u[y*2+1]*2-1;m===0?Zi.set(1,w,T):m===1?Zi.set(-T,1,-w):m===2?Zi.set(-T,w,1):m===3?Zi.set(-1,w,-T):m===4?Zi.set(-T,-1,w):Zi.set(T,w,-1),Zi.toArray(x,(m*f+y)*d)}}let g=new Zt;g.setAttribute("position",new mn(p,d)),g.setAttribute("outputDirection",new mn(x,d)),e.push(new Xt(g,null)),n>Or&&n--}return{lodMeshes:e,sizeLods:t}}function Af(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Gx(i,t,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Hx(i,t,e){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Rf(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Cf(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ol=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new hs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ir(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Bn});s.uniforms.tEquirect.value=e;let o=new Xt(r,s),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Ge),new da(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Wx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===ga||d===xa)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new ol(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===ga||d===xa,x=d===Mi||d===Yi;if(p||x){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new sl(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new sl(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===ga?f.mapping=Mi:d===xa&&(f.mapping=Yi),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Xx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&zi("WebGLRenderer: "+n+" extension not supported."),r}}}function qx(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let M=0,b=v.length;M<b;M+=3){let y=v[M+0],T=v[M+1],w=v[M+2];f.push(y,T,T,w,w,y)}}else{let v=p.array;x=p.version;for(let M=0,b=v.length/3-1;M<b;M+=3){let y=M+0,T=M+1,w=M+2;f.push(y,T,T,w,w,y)}}let g=new(p.count>=65535?Gi:cs)(f,1);g.version=x;let m=s.get(h);m&&t.remove(m),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Yx(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $x(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Zx(i,t,e){let n=new WeakMap,r=new Ae;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let b=a.attributes.position.count*M,y=1;b>t.maxTextureSize&&(y=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*y*4*h),w=new as(T,b,y,h);w.type=An,w.needsUpdate=!0;let _=M*4;for(let I=0;I<h;I++){let D=g[I],R=m[I],C=v[I],P=b*y*4*I;for(let L=0;L<D.count;L++){let U=L*_;d===!0&&(r.fromBufferAttribute(D,L),T[P+U+0]=r.x,T[P+U+1]=r.y,T[P+U+2]=r.z,T[P+U+3]=0),p===!0&&(r.fromBufferAttribute(R,L),T[P+U+4]=r.x,T[P+U+5]=r.y,T[P+U+6]=r.z,T[P+U+7]=0),x===!0&&(r.fromBufferAttribute(C,L),T[P+U+8]=r.x,T[P+U+9]=r.y,T[P+U+10]=r.z,T[P+U+11]=C.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new $t(b,y)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Jx(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Kx={[_c]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[yc]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[wc]:"AGX_TONE_MAPPING",[Tc]:"NEUTRAL_TONE_MAPPING",[Sc]:"CUSTOM_TONE_MAPPING"};function Qx(i,t,e,n,r,s){let o=new Ke(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Zt;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));let u=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Xt(c,u),f=new Jn(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,v=[],M=!1;this.setSize=function(b,y){o.setSize(b,y),a!==null&&a.setSize(b,y),l!==null&&l.setSize(b,y);for(let T=0;T<v.length;T++){let w=v[T];w.setSize&&w.setSize(b,y)}},this.setEffects=function(b){v=b,M=v.length>0&&v[0].isRenderPass===!0;let y=o.width,T=o.height;v.length>0&&a===null&&(a=new Ke(y,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(y,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let _=v[w];_.setSize&&_.setSize(y,T)}},this.begin=function(b,y){if(x||b.toneMapping===Tn&&v.length===0)return!1;if(m=y,y!==null){let T=y.width,w=y.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Tn,!0},this.hasRenderPass=function(){return M},this.end=function(b,y){b.toneMapping=g,x=!0;let T=o,w=a;for(let _=0;_<v.length;_++){let E=v[_];E.enabled!==!1&&(E.render(b,w,T,y),E.needsSwap!==!1&&(T=w,w=w===a?l:a))}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,u.defines={},ee.getTransfer(d)===fe&&(u.defines.SRGB_TRANSFER="");let _=Kx[p];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(h,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Zf=new Je,jc=new mi(1,1),Jf=new as,Kf=new $o,Qf=new hs,If=[],Pf=[],Lf=new Float32Array(16),Ff=new Float32Array(9),Df=new Float32Array(4);function kr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=If[r];if(s===void 0&&(s=new Float32Array(r),If[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ll(i,t){let e=Pf[t];e===void 0&&(e=new Int32Array(t),Pf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function eb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function nb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function ib(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),Ne(e,n)}}function rb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ff.set(n),i.uniformMatrix3fv(this.addr,!1,Ff),Ne(e,n)}}function sb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Lf.set(n),i.uniformMatrix4fv(this.addr,!1,Lf),Ne(e,n)}}function ob(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ab(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function lb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function cb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function ub(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function fb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function db(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function pb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(jc.compareFunction=e.isReversedDepthBuffer()?nl:el,s=jc):s=Zf,e.setTexture2D(t||s,r)}function mb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Kf,r)}function gb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Qf,r)}function xb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Jf,r)}function bb(i){switch(i){case 5126:return jx;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ob;case 35667:case 35671:return ab;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return hb;case 36295:return fb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return xb}}function _b(i,t){i.uniform1fv(this.addr,t)}function vb(i,t){let e=kr(t,this.size,2);i.uniform2fv(this.addr,e)}function yb(i,t){let e=kr(t,this.size,3);i.uniform3fv(this.addr,e)}function Mb(i,t){let e=kr(t,this.size,4);i.uniform4fv(this.addr,e)}function Sb(i,t){let e=kr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wb(i,t){let e=kr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tb(i,t){let e=kr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Eb(i,t){i.uniform1iv(this.addr,t)}function Ab(i,t){i.uniform2iv(this.addr,t)}function Rb(i,t){i.uniform3iv(this.addr,t)}function Cb(i,t){i.uniform4iv(this.addr,t)}function Ib(i,t){i.uniform1uiv(this.addr,t)}function Pb(i,t){i.uniform2uiv(this.addr,t)}function Lb(i,t){i.uniform3uiv(this.addr,t)}function Fb(i,t){i.uniform4uiv(this.addr,t)}function Db(i,t,e){let n=this.cache,r=t.length,s=ll(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=jc:o=Zf;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Ub(i,t,e){let n=this.cache,r=t.length,s=ll(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Kf,s[o])}function Nb(i,t,e){let n=this.cache,r=t.length,s=ll(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Qf,s[o])}function Ob(i,t,e){let n=this.cache,r=t.length,s=ll(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Jf,s[o])}function Bb(i){switch(i){case 5126:return _b;case 35664:return vb;case 35665:return yb;case 35666:return Mb;case 35674:return Sb;case 35675:return wb;case 35676:return Tb;case 5124:case 35670:return Eb;case 35667:case 35671:return Ab;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return Ib;case 36294:return Pb;case 36295:return Lb;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ob}}var tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bb(e.type)}},eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bb(e.type)}},nu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Uf(i,t){i.seq.push(t),i.map[t.id]=t}function zb(i,t,e){let n=i.name,r=n.length;for(Kc.lastIndex=0;;){let s=Kc.exec(n),o=Kc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Uf(e,c===void 0?new tu(a,i,t):new eu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new nu(a),Uf(e,h)),e=h}}}var Br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);zb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Nf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var kb=37297,Vb=0;function Gb(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Of=new Vt;function Hb(i){ee._getMatrix(Of,ee.workingColorSpace,i);let t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case ss:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Gb(i.getShaderSource(t),a)}else return s}function Wb(i,t){let e=Hb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Xb={[_c]:"Linear",[vc]:"Reinhard",[yc]:"Cineon",[Mc]:"ACESFilmic",[wc]:"AgX",[Tc]:"Neutral",[Sc]:"Custom"};function qb(i,t){let e=Xb[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rl=new V;function Yb(){ee.getLuminanceCoefficients(rl);let i=rl.x.toFixed(4),t=rl.y.toFixed(4),e=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Zb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ns(i){return i!==""}function zf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(i){return i.replace(Kb,jb)}var Qb=new Map;function jb(i,t){let e=Yt[t];if(e===void 0){let n=Qb.get(t);if(n!==void 0)e=Yt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return iu(e)}var t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(i){return i.replace(t_,e_)}function e_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var n_={[Ss]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function i_(i){return n_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r_={[Mi]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE_UV"};function s_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var o_={[Yi]:"ENVMAP_MODE_REFRACTION"};function a_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":o_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var l_={[bc]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function c_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l_[i.combine]||"ENVMAP_BLENDING_NONE"}function u_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=i_(e),c=s_(e),u=a_(e),h=c_(e),f=u_(e),d=$b(e),p=Zb(s),x=r.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ns).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(g=[Gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[Gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?qb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Wb("linearToOutputTexel",e.outputColorSpace),Yb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=iu(o),o=zf(o,e),o=kf(o,e),a=iu(a),a=zf(a,e),a=kf(a,e),o=Vf(o),a=Vf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=v+g+o,b=v+m+a,y=Nf(r,r.VERTEX_SHADER,M),T=Nf(r,r.FRAGMENT_SHADER,b);r.attachShader(x,y),r.attachShader(x,T),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(D){if(i.debug.checkShaderErrors){let R=r.getProgramInfoLog(x)||"",C=r.getShaderInfoLog(y)||"",P=r.getShaderInfoLog(T)||"",L=R.trim(),U=C.trim(),N=P.trim(),z=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,y,T);else{let k=Bf(r,y,"vertex"),H=Bf(r,T,"fragment");zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+k+`
`+H)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(U===""||N==="")&&(B=!1);B&&(D.diagnostics={runnable:z,programLog:L,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:m}})}r.deleteShader(y),r.deleteShader(T),_=new Br(r,x),E=Jb(r,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(x,kb)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=T,this}var f_=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new su(t),e.set(t,n)),n}},su=class{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}};function d_(i){return i===Ti||i===Ps||i===Ls}function p_(i,t,e,n,r,s){let o=new Ar,a=new ru,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,I,D,R,C){let P=D.fog,L=R.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||U,N),B=z&&z.mapping===Ts?z.image.height:null,k=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,nt=H!==void 0?H.length:0,J=0;L.morphAttributes.position!==void 0&&(J=1),L.morphAttributes.normal!==void 0&&(J=2),L.morphAttributes.color!==void 0&&(J=3);let et,lt,mt,q;if(k){let xe=kn[k];et=xe.vertexShader,lt=xe.fragmentShader}else{et=_.vertexShader,lt=_.fragmentShader;let xe=a.getVertexShaderStage(_),ue=a.getFragmentShaderStage(_);a.update(_,xe,ue),mt=xe.id,q=ue.id}let K=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),yt=R.isInstancedMesh===!0,ft=R.isBatchedMesh===!0,Nt=!!_.map,de=!!_.matcap,Ht=!!z,Kt=!!_.aoMap,ae=!!_.lightMap,Jt=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,Be=!!_.displacementMap,nn=!!_.emissiveMap,Te=!!_.metalnessMap,Ie=!!_.roughnessMap,X=_.anisotropy>0,We=_.clearcoat>0,pe=_.dispersion>0,O=_.retroreflectivity>0,A=_.iridescence>0,Y=_.sheen>0,Q=_.transmission>0,it=X&&!!_.anisotropyMap,ht=We&&!!_.clearcoatMap,gt=We&&!!_.clearcoatNormalMap,rt=We&&!!_.clearcoatRoughnessMap,at=A&&!!_.iridescenceMap,xt=A&&!!_.iridescenceThicknessMap,Ft=Y&&!!_.sheenColorMap,Mt=Y&&!!_.sheenRoughnessMap,bt=!!_.specularMap,Dt=!!_.specularColorMap,Ot=!!_.specularIntensityMap,Wt=Q&&!!_.transmissionMap,W=Q&&!!_.thicknessMap,_t=!!_.gradientMap,ot=!!_.alphaMap,vt=_.alphaTest>0,Et=!!_.alphaHash,ct=!!_.extensions,Ut=Tn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let Pt={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:lt,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ft,batchingColor:ft&&R._colorsTexture!==null,instancing:yt,instancingColor:yt&&R.instanceColor!==null,instancingMorph:yt&&R.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:de,envMap:Ht,envMapMode:Ht&&z.mapping,envMapCubeUVHeight:B,aoMap:Kt,lightMap:ae,bumpMap:Jt,normalMap:Me,displacementMap:Be,emissiveMap:nn,normalMapObjectSpace:Me&&_.normalMapType===sf,normalMapTangentSpace:Me&&_.normalMapType===Dc,packedNormalMap:Me&&_.normalMapType===Dc&&d_(_.normalMap.format),metalnessMap:Te,roughnessMap:Ie,anisotropy:X,anisotropyMap:it,clearcoat:We,clearcoatMap:ht,clearcoatNormalMap:gt,clearcoatRoughnessMap:rt,dispersion:pe,retroreflection:O,iridescence:A,iridescenceMap:at,iridescenceThicknessMap:xt,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:Mt,specularMap:bt,specularColorMap:Dt,specularIntensityMap:Ot,transmission:Q,transmissionMap:Wt,thicknessMap:W,gradientMap:_t,opaque:_.transparent===!1&&_.blending===yi&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:vt,alphaHash:Et,combine:_.combine,mapUv:Nt&&p(_.map.channel),aoMapUv:Kt&&p(_.aoMap.channel),lightMapUv:ae&&p(_.lightMap.channel),bumpMapUv:Jt&&p(_.bumpMap.channel),normalMapUv:Me&&p(_.normalMap.channel),displacementMapUv:Be&&p(_.displacementMap.channel),emissiveMapUv:nn&&p(_.emissiveMap.channel),metalnessMapUv:Te&&p(_.metalnessMap.channel),roughnessMapUv:Ie&&p(_.roughnessMap.channel),anisotropyMapUv:it&&p(_.anisotropyMap.channel),clearcoatMapUv:ht&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(_.sheenRoughnessMap.channel),specularMapUv:bt&&p(_.specularMap.channel),specularColorMapUv:Dt&&p(_.specularColorMap.channel),specularIntensityMapUv:Ot&&p(_.specularIntensityMap.channel),transmissionMapUv:Wt&&p(_.transmissionMap.channel),thicknessMapUv:W&&p(_.thicknessMap.channel),alphaMapUv:ot&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Me||X),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(Nt||ot),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ut,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:J,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:nn&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===we,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(E,_),v(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let E=d[_.type],I;if(E){let D=kn[E];I=Sf.clone(D.uniforms)}else I=_.uniforms;return I}function b(_,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new h_(i,E,_,r),c.push(I),u.set(E,I)),I}function y(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:w}}function m_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function g_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wf(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=g,v.group=m),t++,v}function l(f,d,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let M=a(f,d,p,x,g,m);p.transmission>0?n.push(M):p.transparent===!0?r.push(M):e.push(M)}function c(f,d,p,x,g,m){let v=a(f,d,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?r.unshift(v):e.unshift(v)}function u(f,d){e.length>1&&e.sort(f||g_),n.length>1&&n.sort(d||Hf),r.length>1&&r.sort(d||Hf)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function x_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Wf,i.set(n,[o])):r>=s.length?(o=new Wf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new st};break;case"SpotLight":e={position:new V,direction:new V,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function __(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var v_=0;function y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M_(i){let t=new b_,e=__(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let r=new V,s=new Se,o=new Se;function a(c){let u=0,h=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,v=0,M=0,b=0,y=0,T=0,w=0,_=0,E=0,I=0;c.sort(y_);for(let R=0,C=c.length;R<C;R++){let P=c[R],L=P.color,U=P.intensity,N=P.distance,z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ti?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*U,h+=L.g*U,f+=L.b*U;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],U);I++}else if(P.isSunLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,H=e.get(P);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=H,n.sunShadowMap[p]=z;let nt=k.getViewportCount();for(let J=0;J<nt;J++)n.sunShadowMatrix[x+J]=k.getMatrix(J),n.sunShadowCascade[x+J]=k._cascadeData[J];x+=nt,p++}n.sun[d]=B,d++}else if(P.isDirectionalLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,H=e.get(P);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=P.shadow.matrix,y++}n.directional[g]=B,g++}else if(P.isSpotLight){let B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(L).multiplyScalar(U),B.distance=N,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[v]=B;let k=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,k.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=k.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=z,w++}v++}else if(P.isRectAreaLight){let B=t.get(P);B.color.copy(L).multiplyScalar(U),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=B,M++}else if(P.isPointLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let k=P.shadow,H=e.get(P);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=B,m++}else if(P.isHemisphereLight){let B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(U),B.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[b]=B,b++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==M||D.hemiLength!==b||D.numSunShadows!==p||D.numDirectionalShadows!==y||D.numPointShadows!==T||D.numSpotShadows!==w||D.numSpotMaps!==_||D.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=M,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,D.sunLength=d,D.directionalLength=g,D.pointLength=m,D.spotLength=v,D.rectAreaLength=M,D.hemiLength=b,D.numSunShadows=p,D.numDirectionalShadows=y,D.numPointShadows=T,D.numSpotShadows=w,D.numSpotMaps=_,D.numLightProbes=I,n.version=v_++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let b=c[v];if(b.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),h++}else if(b.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(b.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Xf(i){let t=new M_(i),e=[],n=[],r=[];function s(f){h.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function S_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Xf(i),t.set(r,[a])):s>=o.length?(a=new Xf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`,E_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],A_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],qf=new Se,Us=new V,Qc=new V;function R_(i,t,e){let n=new us,r=new $t,s=new $t,o=new Ae,a=new ea,l=new na,c={},u=e.maxTextureSize,h={[vi]:en,[en]:vi,[we]:we},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:w_,fragmentShader:T_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Zt;p.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let m=this.type;this.render=function(T,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Uh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Bn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let C=m!==this.type;C&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(L=>L.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,L=T.length;P<L;P++){let U=T[P],N=U.shadow;if(N===void 0){Bt("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let z=N.getFrameExtents();r.multiply(z),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,N.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=B,N.map===null||C===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Fr){if(U.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ke(r.x,r.y,{format:Ti,type:Rn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new mi(r.x,r.y,An),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=Un,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke}else U.isPointLight?(N.map=new ol(r.x),N.map.depthTexture=new jo(r.x,En)):(N.map=new Ke(r.x,r.y),N.map.depthTexture=new mi(r.x,r.y,En)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=Un,this.type===Ss?(N.map.depthTexture.compareFunction=B?nl:el,N.map.depthTexture.minFilter=Ge,N.map.depthTexture.magFilter=Ge):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ke,N.map.depthTexture.magFilter=ke);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let k=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();U.isPointLight!==!0&&N.updateMatrices(U,_);for(let H=0;H<k;H++){let nt=N.getCamera(H);if(U.isPointLight){let J=N.camera,et=N.matrix,lt=U.distance||J.far;lt!==J.far&&(J.far=lt,J.updateProjectionMatrix()),Us.setFromMatrixPosition(U.matrixWorld),J.position.copy(Us),Qc.copy(J.position),Qc.add(E_[H]),J.up.copy(A_[H]),J.lookAt(Qc),J.updateMatrixWorld(),et.makeTranslation(-Us.x,-Us.y,-Us.z),qf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),N._frustum.setFromProjectionMatrix(qf,J.coordinateSystem,J.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,H),i.clear();else{H===0&&(i.setRenderTarget(N.map),i.clear());let J=N.getViewport(H);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),R.viewport(o)}n=N.getFrustum(H),b(w,_,nt,U,this.type)}N.isPointLightShadow!==!0&&this.type===Fr&&v(N,_),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,I,D)};function v(T,w){let _=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ke(r.x,r.y,{format:Ti,type:Rn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,_,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,_,d,x,null)}function M(T,w,_,E){let I=null,D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)I=D;else if(I=_.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let R=I.uuid,C=w.uuid,P=c[R];P===void 0&&(P={},c[R]=P);let L=P[C];L===void 0&&(L=I.clone(),P[C]=L,w.addEventListener("dispose",y)),I=L}if(I.visible=w.visible,I.wireframe=w.wireframe,E===Fr?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:h[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let R=i.properties.get(I);R.light=_}return I}function b(T,w,_,E,I){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Fr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let C=t.update(T),P=T.material;if(Array.isArray(P)){let L=C.groups;for(let U=0,N=L.length;U<N;U++){let z=L[U],B=P[z.materialIndex];if(B&&B.visible){let k=M(T,B,E,I);T.onBeforeShadow(i,T,w,_,C,k,z),i.renderBufferDirect(_,null,C,k,T,z),T.onAfterShadow(i,T,w,_,C,k,z)}}}else if(P.visible){let L=M(T,P,E,I);T.onBeforeShadow(i,T,w,_,C,L,null),i.renderBufferDirect(_,null,C,L,T,null),T.onAfterShadow(i,T,w,_,C,L,null)}}let R=T.children;for(let C=0,P=R.length;C<P;C++)b(R[C],w,_,E,I)}function y(T){T.target.removeEventListener("dispose",y);for(let _ in c){let E=c[_],I=T.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function C_(i,t){function e(){let W=!1,_t=new Ae,ot=null,vt=new Ae(0,0,0,0);return{setMask:function(Et){ot!==Et&&!W&&(i.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){W=Et},setClear:function(Et,ct,Ut,Pt,xe){xe===!0&&(Et*=Pt,ct*=Pt,Ut*=Pt),_t.set(Et,ct,Ut,Pt),vt.equals(_t)===!1&&(i.clearColor(Et,ct,Ut,Pt),vt.copy(_t))},reset:function(){W=!1,ot=null,vt.set(-1,0,0,0)}}}function n(){let W=!1,_t=!1,ot=null,vt=null,Et=null;return{setReversed:function(ct){if(_t!==ct){let Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=ct;let Pt=Et;Et=null,this.setClear(Pt)}},getReversed:function(){return _t},setTest:function(ct){ct?K(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(ct){ot!==ct&&!W&&(i.depthMask(ct),ot=ct)},setFunc:function(ct){if(_t&&(ct=xf[ct]),vt!==ct){switch(ct){case No:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ct}},setLocked:function(ct){W=ct},setClear:function(ct){Et!==ct&&(Et=ct,_t&&(ct=1-ct),i.clearDepth(ct))},reset:function(){W=!1,ot=null,vt=null,Et=null,_t=!1}}}function r(){let W=!1,_t=null,ot=null,vt=null,Et=null,ct=null,Ut=null,Pt=null,xe=null;return{setTest:function(ue){W||(ue?K(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(ue){_t!==ue&&!W&&(i.stencilMask(ue),_t=ue)},setFunc:function(ue,_n,Ln){(ot!==ue||vt!==_n||Et!==Ln)&&(i.stencilFunc(ue,_n,Ln),ot=ue,vt=_n,Et=Ln)},setOp:function(ue,_n,Ln){(ct!==ue||Ut!==_n||Pt!==Ln)&&(i.stencilOp(ue,_n,Ln),ct=ue,Ut=_n,Pt=Ln)},setLocked:function(ue){W=ue},setClear:function(ue){xe!==ue&&(i.clearStencil(ue),xe=ue)},reset:function(){W=!1,_t=null,ot=null,vt=null,Et=null,ct=null,Ut=null,Pt=null,xe=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,b=null,y=null,T=null,w=null,_=new st(0,0,0),E=0,I=!1,D=null,R=null,C=null,P=null,L=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,z=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=z>=2);let k=null,H={},nt=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),et=new Ae().fromArray(nt),lt=new Ae().fromArray(J);function mt(W,_t,ot,vt){let Et=new Uint8Array(4),ct=i.createTexture();i.bindTexture(W,ct),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<ot;Ut++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ct}let q={};q[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Sr),Jt(!1),Me(pc),K(i.CULL_FACE),Kt(Bn);function K(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function ut(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function yt(W,_t){return f[W]!==_t?(i.bindFramebuffer(W,_t),f[W]=_t,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_t),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function ft(W,_t){let ot=p,vt=!1;if(W){ot=d.get(_t),ot===void 0&&(ot=[],d.set(_t,ot));let Et=W.textures;if(ot.length!==Et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ut=Et.length;ct<Ut;ct++)ot[ct]=i.COLOR_ATTACHMENT0+ct;ot.length=Et.length,vt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ot)}function Nt(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let de={[qi]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};de[zh]=i.MIN,de[kh]=i.MAX;let Ht={[Vh]:i.ZERO,[Gh]:i.ONE,[Hh]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[Wh]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[Kh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(W,_t,ot,vt,Et,ct,Ut,Pt,xe,ue){if(W===Bn){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),W!==Nh){if(W!==m||ue!==I){if((v!==qi||y!==qi)&&(i.blendEquation(i.FUNC_ADD),v=qi,y=qi),ue)switch(W){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",W);break}else switch(W){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ws:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",W);break}M=null,b=null,T=null,w=null,_.set(0,0,0),E=0,m=W,I=ue}return}Et=Et||_t,ct=ct||ot,Ut=Ut||vt,(_t!==v||Et!==y)&&(i.blendEquationSeparate(de[_t],de[Et]),v=_t,y=Et),(ot!==M||vt!==b||ct!==T||Ut!==w)&&(i.blendFuncSeparate(Ht[ot],Ht[vt],Ht[ct],Ht[Ut]),M=ot,b=vt,T=ct,w=Ut),(Pt.equals(_)===!1||xe!==E)&&(i.blendColor(Pt.r,Pt.g,Pt.b,xe),_.copy(Pt),E=xe),m=W,I=!1}function ae(W,_t){W.side===we?ut(i.CULL_FACE):K(i.CULL_FACE);let ot=W.side===en;_t&&(ot=!ot),Jt(ot),W.blending===yi&&W.transparent===!1?Kt(Bn):Kt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);let vt=W.stencilWrite;a.setTest(vt),vt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(W){D!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),D=W)}function Me(W){W!==Fh?(K(i.CULL_FACE),W!==R&&(W===pc?i.cullFace(i.BACK):W===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),R=W}function Be(W){W!==C&&(N&&i.lineWidth(W),C=W)}function nn(W,_t,ot){W?(K(i.POLYGON_OFFSET_FILL),(P!==_t||L!==ot)&&(P=_t,L=ot,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,ot))):ut(i.POLYGON_OFFSET_FILL)}function Te(W){W?K(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Ie(W){W===void 0&&(W=i.TEXTURE0+U-1),k!==W&&(i.activeTexture(W),k=W)}function X(W,_t,ot){ot===void 0&&(k===null?ot=i.TEXTURE0+U-1:ot=k);let vt=H[ot];vt===void 0&&(vt={type:void 0,texture:void 0},H[ot]=vt),(vt.type!==W||vt.texture!==_t)&&(k!==ot&&(i.activeTexture(ot),k=ot),i.bindTexture(W,_t||q[W]),vt.type=W,vt.texture=_t)}function We(){let W=H[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function A(){try{i.texSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function ht(){try{i.texStorage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function gt(){try{i.texStorage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function rt(){try{i.texImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function at(){try{i.texImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function xt(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Ft(W,_t){h[W]!==_t&&(i.pixelStorei(W,_t),h[W]=_t)}function Mt(W){et.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),et.copy(W))}function bt(W){lt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),lt.copy(W))}function Dt(W,_t){let ot=c.get(_t);ot===void 0&&(ot=new WeakMap,c.set(_t,ot));let vt=ot.get(W);vt===void 0&&(vt=i.getUniformBlockIndex(_t,W.name),ot.set(W,vt))}function Ot(W,_t){let vt=c.get(_t).get(W);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,W.__bindingPointIndex),l.set(_t,vt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},k=null,H={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,b=null,y=null,T=null,w=null,_=new st(0,0,0),E=0,I=!1,D=null,R=null,C=null,P=null,L=null,et.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:ut,bindFramebuffer:yt,drawBuffers:ft,useProgram:Nt,setBlending:Kt,setMaterial:ae,setFlipSided:Jt,setCullFace:Me,setLineWidth:Be,setPolygonOffset:nn,setScissorTest:Te,activeTexture:Ie,bindTexture:X,unbindTexture:We,compressedTexImage2D:pe,compressedTexImage3D:O,texImage2D:rt,texImage3D:at,pixelStorei:Ft,getParameter:xt,updateUBOMapping:Dt,uniformBlockBinding:Ot,texStorage2D:ht,texStorage3D:gt,texSubImage2D:A,texSubImage3D:Y,compressedTexSubImage2D:Q,compressedTexSubImage3D:it,scissor:Mt,viewport:bt,reset:Wt}}function I_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,A){return p?new OffscreenCanvas(O,A):wr("canvas")}function g(O,A,Y){let Q=1,it=pe(O);if((it.width>Y||it.height>Y)&&(Q=Y/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let ht=Math.floor(Q*it.width),gt=Math.floor(Q*it.height);f===void 0&&(f=x(ht,gt));let rt=A?x(ht,gt):f;return rt.width=ht,rt.height=gt,rt.getContext("2d").drawImage(O,0,0,ht,gt),Bt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ht+"x"+gt+")."),rt}else return"data"in O&&Bt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),O;return O}function m(O){return O.generateMipmaps}function v(O){i.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(O,A,Y,Q,it,ht=!1){if(O!==null){if(i[O]!==void 0)return i[O];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let gt;Q&&(gt=t.get("EXT_texture_norm16"),gt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=A;if(A===i.RED&&(Y===i.FLOAT&&(rt=i.R32F),Y===i.HALF_FLOAT&&(rt=i.R16F),Y===i.UNSIGNED_BYTE&&(rt=i.R8),Y===i.UNSIGNED_SHORT&&gt&&(rt=gt.R16_EXT),Y===i.SHORT&&gt&&(rt=gt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.R8UI),Y===i.UNSIGNED_SHORT&&(rt=i.R16UI),Y===i.UNSIGNED_INT&&(rt=i.R32UI),Y===i.BYTE&&(rt=i.R8I),Y===i.SHORT&&(rt=i.R16I),Y===i.INT&&(rt=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(rt=i.RG32F),Y===i.HALF_FLOAT&&(rt=i.RG16F),Y===i.UNSIGNED_BYTE&&(rt=i.RG8),Y===i.UNSIGNED_SHORT&&gt&&(rt=gt.RG16_EXT),Y===i.SHORT&&gt&&(rt=gt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Y===i.UNSIGNED_INT&&(rt=i.RG32UI),Y===i.BYTE&&(rt=i.RG8I),Y===i.SHORT&&(rt=i.RG16I),Y===i.INT&&(rt=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Y===i.UNSIGNED_INT&&(rt=i.RGB32UI),Y===i.BYTE&&(rt=i.RGB8I),Y===i.SHORT&&(rt=i.RGB16I),Y===i.INT&&(rt=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Y===i.BYTE&&(rt=i.RGBA8I),Y===i.SHORT&&(rt=i.RGBA16I),Y===i.INT&&(rt=i.RGBA32I)),A===i.RGB&&(Y===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGB16_EXT),Y===i.SHORT&&gt&&(rt=gt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),A===i.RGBA){let at=ht?ss:ee.getTransfer(it);Y===i.FLOAT&&(rt=i.RGBA32F),Y===i.HALF_FLOAT&&(rt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(rt=at===fe?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGBA16_EXT),Y===i.SHORT&&gt&&(rt=gt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function y(O,A){let Y;return O?A===null||A===En||A===Ur?Y=i.DEPTH24_STENCIL8:A===An?Y=i.DEPTH32F_STENCIL8:A===Dr&&(Y=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===En||A===Ur?Y=i.DEPTH_COMPONENT24:A===An?Y=i.DEPTH_COMPONENT32F:A===Dr&&(Y=i.DEPTH_COMPONENT16),Y}function T(O,A){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==ke&&O.minFilter!==Ge?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function w(O){let A=O.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function _(O){let A=O.target;A.removeEventListener("dispose",_),D(A)}function E(O){let A=n.get(O);if(A.__webglInit===void 0)return;let Y=O.source,Q=d.get(Y);if(Q){let it=Q[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&I(O),Object.keys(Q).length===0&&d.delete(Y)}n.remove(O)}function I(O){let A=n.get(O);i.deleteTexture(A.__webglTexture);let Y=O.source,Q=d.get(Y);delete Q[A.__cacheKey],o.memory.textures--}function D(O){let A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let it=0;it<A.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(A.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Q]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Y=O.textures;for(let Q=0,it=Y.length;Q<it;Q++){let ht=n.get(Y[Q]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(O)}let R=0;function C(){R=0}function P(){return R}function L(O){R=O}function U(){let O=R;return O>=r.maxTextures&&Bt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+r.maxTextures),R+=1,O}function N(O){let A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function z(O,A){let Y=n.get(O);if(O.isVideoTexture&&X(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){let Q=O.image;if(Q===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Y,O,A);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function B(O,A){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ut(Y,O,A);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function k(O,A){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ut(Y,O,A);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function H(O,A){let Y=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){yt(Y,O,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}let nt={[ki]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},J={[ke]:i.NEAREST,[nf]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},et={[af]:i.NEVER,[ff]:i.ALWAYS,[lf]:i.LESS,[el]:i.LEQUAL,[cf]:i.EQUAL,[nl]:i.GEQUAL,[uf]:i.GREATER,[hf]:i.NOTEQUAL};function lt(O,A){if(A.type===An&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ge||A.magFilter===ba||A.magFilter===Es||A.magFilter===Si||A.minFilter===Ge||A.minFilter===ba||A.minFilter===Es||A.minFilter===Si)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,nt[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,nt[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,nt[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,J[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ke||A.minFilter!==Es&&A.minFilter!==Si||A.type===An&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function mt(O,A){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",w));let Q=A.source,it=d.get(Q);it===void 0&&(it={},d.set(Q,it));let ht=N(A);if(ht!==O.__cacheKey){it[ht]===void 0&&(it[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[ht].usedTimes++;let gt=it[O.__cacheKey];gt!==void 0&&(it[O.__cacheKey].usedTimes--,gt.usedTimes===0&&I(A)),O.__cacheKey=ht,O.__webglTexture=it[ht].texture}return Y}function q(O,A,Y){return Math.floor(Math.floor(O/Y)/A)}function K(O,A,Y,Q){let ht=O.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Y,Q,A.data);else{ht.sort((Ft,Mt)=>Ft.start-Mt.start);let gt=0;for(let Ft=1;Ft<ht.length;Ft++){let Mt=ht[gt],bt=ht[Ft],Dt=Mt.start+Mt.count,Ot=q(bt.start,A.width,4),Wt=q(Mt.start,A.width,4);bt.start<=Dt+1&&Ot===Wt&&q(bt.start+bt.count-1,A.width,4)===Ot?Mt.count=Math.max(Mt.count,bt.start+bt.count-Mt.start):(++gt,ht[gt]=bt)}ht.length=gt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ft=0,Mt=ht.length;Ft<Mt;Ft++){let bt=ht[Ft],Dt=Math.floor(bt.start/4),Ot=Math.ceil(bt.count/4),Wt=Dt%A.width,W=Math.floor(Dt/A.width),_t=Ot,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Wt,W,_t,ot,Y,Q,A.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function ut(O,A,Y){let Q=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=i.TEXTURE_3D);let it=mt(O,A),ht=A.source;e.bindTexture(Q,O.__webglTexture,i.TEXTURE0+Y);let gt=n.get(ht);if(ht.version!==gt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ot=ee.getPrimaries(ee.workingColorSpace),vt=A.colorSpace===Kn?null:ee.getPrimaries(A.colorSpace),Et=A.colorSpace===Kn||ot===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=g(A.image,!1,r.maxTextureSize);at=We(A,at);let xt=s.convert(A.format,A.colorSpace),Ft=s.convert(A.type),Mt=b(A.internalFormat,xt,Ft,A.normalized,A.colorSpace,A.isVideoTexture);lt(Q,A);let bt,Dt=A.mipmaps,Ot=A.isVideoTexture!==!0,Wt=gt.__version===void 0||it===!0,W=ht.dataReady,_t=T(A,at);if(A.isDepthTexture)Mt=y(A.format===wi,A.type),Wt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Mt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,xt,Ft,null));else if(A.isDataTexture)if(Dt.length>0){Ot&&Wt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Dt[0].width,Dt[0].height);for(let ot=0,vt=Dt.length;ot<vt;ot++)bt=Dt[ot],Ot?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,xt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,ot,Mt,bt.width,bt.height,0,xt,Ft,bt.data);A.generateMipmaps=!1}else Ot?(Wt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,at.width,at.height),W&&K(A,at,xt,Ft)):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,xt,Ft,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ot&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,Dt[0].width,Dt[0].height,at.depth);for(let ot=0,vt=Dt.length;ot<vt;ot++)if(bt=Dt[ot],A.format!==bn)if(xt!==null)if(Ot){if(W)if(A.layerUpdates.size>0){let Et=Vc(bt.width,bt.height,A.format,A.type);for(let ct of A.layerUpdates){let Ut=bt.data.subarray(ct*Et/bt.data.BYTES_PER_ELEMENT,(ct+1)*Et/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ct,bt.width,bt.height,1,xt,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,at.depth,xt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Mt,bt.width,bt.height,at.depth,0,bt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,at.depth,xt,Ft,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Mt,bt.width,bt.height,at.depth,0,xt,Ft,bt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ot&&Wt&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,Dt[0].width,Dt[0].height);for(let ot=0,vt=Dt.length;ot<vt;ot++)bt=Dt[ot],A.format!==bn?xt!==null?Ot?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Mt,bt.width,bt.height,0,bt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,xt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,ot,Mt,bt.width,bt.height,0,xt,Ft,bt.data)}else if(A.isDataArrayTexture)if(Ot){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,at.width,at.height,at.depth),W)if(A.layerUpdates.size>0){let ot=Vc(at.width,at.height,A.format,A.type);for(let vt of A.layerUpdates){let Et=at.data.subarray(vt*ot/at.data.BYTES_PER_ELEMENT,(vt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,at.width,at.height,1,xt,Ft,Et)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,xt,Ft,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,at.width,at.height,at.depth,0,xt,Ft,at.data);else if(A.isData3DTexture)Ot?(Wt&&e.texStorage3D(i.TEXTURE_3D,_t,Mt,at.width,at.height,at.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,xt,Ft,at.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,at.width,at.height,at.depth,0,xt,Ft,at.data);else if(A.isFramebufferTexture){if(Wt)if(Ot)e.texStorage2D(i.TEXTURE_2D,_t,Mt,at.width,at.height);else{let ot=at.width,vt=at.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,ot,vt,0,xt,Ft,null),ot>>=1,vt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),h.add(A),ot.onpaint=vt=>{let Et=vt.changedElements;for(let ct of h)Et.includes(ct.image)&&(ct.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Et=i.RGBA,ct=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ct,Ut,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ot&&Wt){let ot=pe(Dt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Mt,ot.width,ot.height)}for(let ot=0,vt=Dt.length;ot<vt;ot++)bt=Dt[ot],Ot?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt,Ft,bt):e.texImage2D(i.TEXTURE_2D,ot,Mt,xt,Ft,bt);A.generateMipmaps=!1}else if(Ot){if(Wt){let ot=pe(at);e.texStorage2D(i.TEXTURE_2D,_t,Mt,ot.width,ot.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ft,at)}else e.texImage2D(i.TEXTURE_2D,0,Mt,xt,Ft,at);m(A)&&v(Q),gt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function yt(O,A,Y){if(A.image.length!==6)return;let Q=mt(O,A),it=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Y);let ht=n.get(it);if(it.version!==ht.__version||Q===!0){e.activeTexture(i.TEXTURE0+Y);let gt=ee.getPrimaries(ee.workingColorSpace),rt=A.colorSpace===Kn?null:ee.getPrimaries(A.colorSpace),at=A.colorSpace===Kn||gt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let xt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ft=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let ct=0;ct<6;ct++)!xt&&!Ft?Mt[ct]=g(A.image[ct],!0,r.maxCubemapSize):Mt[ct]=Ft?A.image[ct].image:A.image[ct],Mt[ct]=We(A,Mt[ct]);let bt=Mt[0],Dt=s.convert(A.format,A.colorSpace),Ot=s.convert(A.type),Wt=b(A.internalFormat,Dt,Ot,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,_t=ht.__version===void 0||Q===!0,ot=it.dataReady,vt=T(A,bt);lt(i.TEXTURE_CUBE_MAP,A);let Et;if(xt){W&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,bt.width,bt.height);for(let ct=0;ct<6;ct++){Et=Mt[ct].mipmaps;for(let Ut=0;Ut<Et.length;Ut++){let Pt=Et[Ut];A.format!==bn?Dt!==null?W?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut,0,0,Pt.width,Pt.height,Dt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut,Wt,Pt.width,Pt.height,0,Pt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut,0,0,Pt.width,Pt.height,Dt,Ot,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut,Wt,Pt.width,Pt.height,0,Dt,Ot,Pt.data)}}}else{if(Et=A.mipmaps,W&&_t){Et.length>0&&vt++;let ct=pe(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ft){W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Mt[ct].width,Mt[ct].height,Dt,Ot,Mt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Wt,Mt[ct].width,Mt[ct].height,0,Dt,Ot,Mt[ct].data);for(let Ut=0;Ut<Et.length;Ut++){let xe=Et[Ut].image[ct].image;W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut+1,0,0,xe.width,xe.height,Dt,Ot,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut+1,Wt,xe.width,xe.height,0,Dt,Ot,xe.data)}}else{W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Dt,Ot,Mt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Wt,Dt,Ot,Mt[ct]);for(let Ut=0;Ut<Et.length;Ut++){let Pt=Et[Ut];W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut+1,0,0,Dt,Ot,Pt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ut+1,Wt,Dt,Ot,Pt.image[ct])}}}m(A)&&v(i.TEXTURE_CUBE_MAP),ht.__version=it.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ft(O,A,Y,Q,it,ht){let gt=s.convert(Y.format,Y.colorSpace),rt=s.convert(Y.type),at=b(Y.internalFormat,gt,rt,Y.normalized,Y.colorSpace),xt=n.get(A),Ft=n.get(Y);if(Ft.__renderTarget=A,!xt.__hasExternalTextures){let Mt=Math.max(1,A.width>>ht),bt=Math.max(1,A.height>>ht);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,ht,at,Mt,bt,A.depth,0,gt,rt,null):e.texImage2D(it,ht,at,Mt,bt,0,gt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,Ft.__webglTexture,0,Te(A)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,Ft.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(O,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){let Q=A.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,ht=y(A.stencilBuffer,it),gt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(A),ht,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(A),ht,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ht,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,O)}else{let Q=A.textures;for(let it=0;it<Q.length;it++){let ht=Q[it],gt=s.convert(ht.format,ht.colorSpace),rt=s.convert(ht.type),at=b(ht.internalFormat,gt,rt,ht.normalized,ht.colorSpace);Ie(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(A),at,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(O,A,Y){let Q=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(A.depthTexture);if(it.__renderTarget=A,(!it.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q){if(it.__webglInit===void 0&&(it.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),lt(i.TEXTURE_CUBE_MAP,A.depthTexture);let xt=s.convert(A.depthTexture.format),Ft=s.convert(A.depthTexture.type),Mt;A.depthTexture.format===Un?Mt=i.DEPTH_COMPONENT24:A.depthTexture.format===wi&&(Mt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Mt,A.width,A.height,0,xt,Ft,null)}}else z(A.depthTexture,0);let ht=it.__webglTexture,gt=Te(A),rt=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,at=A.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Un)Ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,ht,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,ht,0);else if(A.depthTexture.format===wi)Ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,ht,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(O){let A=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){let Q=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){let it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=Q}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let Q=0;Q<6;Q++)de(A.__webglFramebuffer[Q],O,Q);else{let Q=O.texture.mipmaps;Q&&Q.length>0?de(A.__webglFramebuffer[0],O,0):de(A.__webglFramebuffer,O,0)}else if(Y){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=i.createRenderbuffer(),Nt(A.__webglDepthbuffer[Q],O,!1);else{let it=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ht)}}else{let Q=O.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Nt(A.__webglDepthbuffer,O,!1);else{let it=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(O,A,Y){let Q=n.get(O);A!==void 0&&ft(Q.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ht(O)}function ae(O){let A=O.texture,Y=n.get(O),Q=n.get(A);O.addEventListener("dispose",_);let it=O.textures,ht=O.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=A.version,o.memory.textures++),ht){Y.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[rt]=[];for(let at=0;at<A.mipmaps.length;at++)Y.__webglFramebuffer[rt][at]=i.createFramebuffer()}else Y.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let rt=0;rt<A.mipmaps.length;rt++)Y.__webglFramebuffer[rt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(gt)for(let rt=0,at=it.length;rt<at;rt++){let xt=n.get(it[rt]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Ie(O)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let rt=0;rt<it.length;rt++){let at=it[rt];Y.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[rt]);let xt=s.convert(at.format,at.colorSpace),Ft=s.convert(at.type),Mt=b(at.internalFormat,xt,Ft,at.normalized,at.colorSpace,O.isXRRenderTarget===!0),bt=Te(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Mt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(Y.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(i.TEXTURE_CUBE_MAP,A);for(let rt=0;rt<6;rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)ft(Y.__webglFramebuffer[rt][at],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else ft(Y.__webglFramebuffer[rt],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(A)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let rt=0,at=it.length;rt<at;rt++){let xt=it[rt],Ft=n.get(xt),Mt=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ft.__webglTexture),lt(Mt,xt),ft(Y.__webglFramebuffer,O,xt,i.COLOR_ATTACHMENT0+rt,Mt,0),m(xt)&&v(Mt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(rt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Q.__webglTexture),lt(rt,A),A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)ft(Y.__webglFramebuffer[at],O,A,i.COLOR_ATTACHMENT0,rt,at);else ft(Y.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,rt,0);m(A)&&v(rt),e.unbindTexture()}O.depthBuffer&&Ht(O)}function Jt(O){let A=O.textures;for(let Y=0,Q=A.length;Y<Q;Y++){let it=A[Y];if(m(it)){let ht=M(O),gt=n.get(it).__webglTexture;e.bindTexture(ht,gt),v(ht),e.unbindTexture()}}}let Me=[],Be=[];function nn(O){if(O.samples>0){if(Ie(O)===!1){let A=O.textures,Y=O.width,Q=O.height,it=i.COLOR_BUFFER_BIT,ht=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(O),rt=A.length>1;if(rt)for(let xt=0;xt<A.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let at=O.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<A.length;xt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ft=n.get(A[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,it,i.NEAREST),l===!0&&(Me.length=0,Be.length=0,Me.push(i.COLOR_ATTACHMENT0+xt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Me.push(ht),Be.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let xt=0;xt<A.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ft=n.get(A[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Te(O){return Math.min(r.maxSamples,O.samples)}function Ie(O){let A=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(O){let A=o.render.frame;u.get(O)!==A&&(u.set(O,A),O.update())}function We(O,A){let Y=O.colorSpace,Q=O.format,it=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==rs&&Y!==Kn&&(ee.getTransfer(Y)===fe?(Q!==bn||it!==hn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",Y)),A}function pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=C,this.getTextureUnits=P,this.setTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=Kt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function P_(i,t){function e(n,r=Kn){let s,o=ee.getTransfer(r);if(n===hn)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===bn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===wa)return i.RGBA_INTEGER;if(n===As||n===Rs||n===Cs||n===Is)if(o===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===As)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===As)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Ea||n===Aa||n===Ra)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ta)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Ia||n===Pa||n===La||n===Fa||n===Ps||n===Da)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ca||n===Ia)return o===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return s.COMPRESSED_R11_EAC;if(n===Fa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return s.COMPRESSED_RG11_EAC;if(n===Da)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ua||n===Na||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===$a)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ua)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ja||n===Ka)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return o===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===ja||n===Ls||n===tl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ls)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var L_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`,ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:L_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},au=class extends Nn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new ou,m={},v=e.getContextAttributes(),M=null,b=null,y=[],T=[],w=new $t,_=null,E=null,I=new $e;I.viewport=new Ae;let D=new $e;D.viewport=new Ae;let R=[I,D],C=new pa,P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=y[q];return K===void 0&&(K=new Rr,y[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=y[q];return K===void 0&&(K=new Rr,y[q]=K),K.getGripSpace()},this.getHand=function(q){let K=y[q];return K===void 0&&(K=new Rr,y[q]=K),K.getHandSpace()};function U(q){let K=T.indexOf(q.inputSource);if(K===-1)return;let ut=y[K];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||o),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",z);for(let q=0;q<y.length;q++){let K=T[q];K!==null&&(T[q]=null,y[q].disconnect(K))}P=null,L=null,g.reset();for(let q in m)delete m[q];if(t.setRenderTarget(M),d=null,f=null,h=null,r=null,b=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(w.width,w.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,yt=null,ft=null;v.depth&&(ft=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=v.stencil?wi:Un,yt=v.stencil?Ur:En);let Nt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Nt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ke(f.textureWidth,f.textureHeight,{format:bn,type:hn,depthTexture:new mi(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ut={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ke(d.framebufferWidth,d.framebufferHeight,{format:bn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),mt.setContext(r),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(q){for(let K=0;K<q.removed.length;K++){let ut=q.removed[K],yt=T.indexOf(ut);yt>=0&&(T[yt]=null,y[yt].disconnect(ut))}for(let K=0;K<q.added.length;K++){let ut=q.added[K],yt=T.indexOf(ut);if(yt===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=T.length){T.push(ut),yt=Nt;break}else if(T[Nt]===null){T[Nt]=ut,yt=Nt;break}if(yt===-1)break}let ft=y[yt];ft&&ft.connect(ut)}}let B=new V,k=new V;function H(q,K,ut){B.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(ut.matrixWorld);let yt=B.distanceTo(k),ft=K.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,de=ft[14]/(ft[10]-1),Ht=ft[14]/(ft[10]+1),Kt=(ft[9]+1)/ft[5],ae=(ft[9]-1)/ft[5],Jt=(ft[8]-1)/ft[0],Me=(Nt[8]+1)/Nt[0],Be=de*Jt,nn=de*Me,Te=yt/(-Jt+Me),Ie=Te*-Jt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ft[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let X=de+Te,We=Ht+Te,pe=Be-Ie,O=nn+(yt-Ie),A=Kt*Ht/We*X,Y=ae*Ht/We*X;q.projectionMatrix.makePerspective(pe,O,A,Y,X,We),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let K=q.near,ut=q.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),C.near=D.near=I.near=K,C.far=D.far=I.far=ut,(P!==C.near||L!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,L=C.far),C.layers.mask=q.layers.mask|6,I.layers.mask=C.layers.mask&-5,D.layers.mask=C.layers.mask&-3;let yt=q.parent,ft=C.cameras;nt(C,yt);for(let Nt=0;Nt<ft.length;Nt++)nt(ft[Nt],yt);ft.length===2?H(C,I,D):C.projectionMatrix.copy(I.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),J(q,C,yt)};function J(q,K,ut){ut===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(q){return m[q]};let et=null;function lt(q,K){if(u=K.getViewerPose(c||o),p=K,u!==null){let ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let yt=!1;ut.length!==C.cameras.length&&(C.cameras.length=0,yt=!0);for(let Ht=0;Ht<ut.length;Ht++){let Kt=ut[Ht],ae=null;if(d!==null)ae=d.getViewport(Kt);else{let Me=h.getViewSubImage(f,Kt);ae=Me.viewport,Ht===0&&(t.setRenderTargetTextures(b,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(b))}let Jt=R[Ht];Jt===void 0&&(Jt=new $e,Jt.layers.enable(Ht),Jt.viewport=new Ae,R[Ht]=Jt),Jt.matrix.fromArray(Kt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Kt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ht===0&&(C.matrix.copy(Jt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),yt===!0&&C.cameras.push(Jt)}let ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Ht=h.getDepthInformation(ut[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,r.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Ht=0;Ht<ut.length;Ht++){let Kt=ut[Ht].camera;if(Kt){let ae=m[Kt];ae||(ae=new fs,m[Kt]=ae);let Jt=h.getCameraImage(Kt);ae.sourceTexture=Jt}}}}for(let ut=0;ut<y.length;ut++){let yt=T[ut],ft=y[ut];yt!==null&&ft!==void 0&&ft.update(yt,K,c||o)}et&&et(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let mt=new Yf;mt.setAnimationLoop(lt),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}},D_=new Se,jf=new Vt;jf.set(-1,0,0,0,1,0,0,0,1);function U_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,M,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),M=v.envMap,b=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let T=y.program;n.uniformBlockBinding(b,T)}function c(b,y){let T=r[b.id];T===void 0&&(g(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",v));let w=y.program;n.updateUBOMapping(b,w);let _=t.render.frame;s[b.id]!==_&&(f(b),s[b.id]=_)}function u(b){let y=h();b.__bindingPointIndex=y;let T=i.createBuffer(),w=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let y=r[b.id],T=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,E=T.length;_<E;_++){let I=T[_];if(Array.isArray(I))for(let D=0,R=I.length;D<R;D++)d(I[D],_,D,w);else d(I,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,y,T,w){if(x(b,y,T,w)===!0){let _=b.__offset,E=b.value;if(Array.isArray(E)){let I=0;for(let D=0;D<E.length;D++){let R=E[D],C=m(R);p(R,b.__data,I),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(I+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function p(b,y,T){typeof b=="number"||typeof b=="boolean"?y[0]=b:b.isMatrix3?(y[0]=b.elements[0],y[1]=b.elements[1],y[2]=b.elements[2],y[3]=0,y[4]=b.elements[3],y[5]=b.elements[4],y[6]=b.elements[5],y[7]=0,y[8]=b.elements[6],y[9]=b.elements[7],y[10]=b.elements[8],y[11]=0):ArrayBuffer.isView(b)?y.set(new b.constructor(b.buffer,b.byteOffset,y.length)):b.toArray(y,T)}function x(b,y,T,w){let _=b.value,E=y+"_"+T;if(w[E]===void 0)return typeof _=="number"||typeof _=="boolean"?w[E]=_:ArrayBuffer.isView(_)?w[E]=_.slice():w[E]=_.clone(),!0;{let I=w[E];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return w[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(b){let y=b.uniforms,T=0,w=16;for(let E=0,I=y.length;E<I;E++){let D=Array.isArray(y[E])?y[E]:[y[E]];for(let R=0,C=D.length;R<C;R++){let P=D[R],L=Array.isArray(P.value)?P.value:[P.value];for(let U=0,N=L.length;U<N;U++){let z=L[U],B=m(z),k=T%w,H=k%B.boundary,nt=k+H;T+=H,nt!==0&&w-nt<B.storage&&(T+=w-nt),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=B.storage}}}let _=T%w;return _>0&&(T+=w-_),b.__size=T,b.__cache={},this}function m(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",b),y}function v(b){let y=b.target;y.removeEventListener("dispose",v);let T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function M(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}var O_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function B_(){return zn===null&&(zn=new Zo(O_,16,16,Ti,Rn),zn.name="DFG_LUT",zn.minFilter=Ge,zn.magFilter=Ge,zn.wrapS=ln,zn.wrapT=ln,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var zr=class{constructor(t={}){let{canvas:e=pf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([wa,Sa,Ma]),m=new Set([hn,En,Dr,Ur,va,ya]),v=new Uint32Array(4),M=new Int32Array(4),b=new V,y=null,T=null,w=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,R=null,C=null,P=null,L=null;this._outputColorSpace=Ce;let U=0,N=0,z=null,B=-1,k=null,H=new Ae,nt=new Ae,J=null,et=new st(0),lt=0,mt=e.width,q=e.height,K=1,ut=null,yt=null,ft=new Ae(0,0,mt,q),Nt=new Ae(0,0,mt,q),de=!1,Ht=new us,Kt=!1,ae=!1,Jt=new Se,Me=new V,Be=new Ae,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ie(){return z===null?K:1}let X=n;function We(F,G){return e.getContext(F,G)}let pe,O,A,Y,Q,it,ht,gt,rt,at,xt,Ft,Mt,bt,Dt,Ot,Wt,W,_t,ot,vt,Et,ct;try{let F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",_n,!1),X===null){let G="webgl2";if(X=We(G,F),X===null)throw We(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(F){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),zt("WebGLRenderer: "+F.message),F}function Ut(){pe=new Xx(X),pe.init(),vt=new P_(X,pe),O=new Ux(X,pe,t,vt),A=new C_(X,pe),O.reversedDepthBuffer&&f&&A.buffers.depth.setReversed(!0),C=X.createFramebuffer(),P=X.createFramebuffer(),L=X.createFramebuffer(),Y=new $x(X),Q=new m_,it=new I_(X,pe,A,Q,O,vt,Y),ht=new Wx(I),gt=new Jm(X),Et=new Fx(X,gt),rt=new qx(X,gt,Y,Et),at=new Jx(X,rt,gt,Et,Y),W=new Zx(X,O,it),Dt=new Nx(Q),xt=new p_(I,ht,pe,O,Et,Dt),Ft=new U_(I,Q),Mt=new x_,bt=new S_(pe),Wt=new Lx(I,ht,A,at,p,l),Ot=new R_(I,at,O),ct=new N_(X,Y,O,A),_t=new Dx(X,pe,Y),ot=new Yx(X,pe,Y),Y.programs=xt.programs,I.capabilities=O,I.extensions=pe,I.properties=Q,I.renderLists=Mt,I.shadowMap=Ot,I.state=A,I.info=Y}x!==hn&&(E=new Qx(x,e.width,e.height,a,r,s));let Pt=new au(I,X);this.xr=Pt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let F=pe.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=pe.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(F){F!==void 0&&(K=F,this.setSize(mt,q,!1))},this.getSize=function(F){return F.set(mt,q)},this.setSize=function(F,G,tt=!0){if(Pt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=F,q=G,e.width=Math.floor(F*K),e.height=Math.floor(G*K),tt===!0&&(e.style.width=F+"px",e.style.height=G+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,F,G)},this.getDrawingBufferSize=function(F){return F.set(mt*K,q*K).floor()},this.setDrawingBufferSize=function(F,G,tt){mt=F,q=G,K=tt,e.width=Math.floor(F*tt),e.height=Math.floor(G*tt),this.setViewport(0,0,F,G)},this.setEffects=function(F){if(x===hn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let G=0;G<F.length;G++)if(F[G].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(H)},this.getViewport=function(F){return F.copy(ft)},this.setViewport=function(F,G,tt,$){F.isVector4?ft.set(F.x,F.y,F.z,F.w):ft.set(F,G,tt,$),A.viewport(H.copy(ft).multiplyScalar(K).round())},this.getScissor=function(F){return F.copy(Nt)},this.setScissor=function(F,G,tt,$){F.isVector4?Nt.set(F.x,F.y,F.z,F.w):Nt.set(F,G,tt,$),A.scissor(nt.copy(Nt).multiplyScalar(K).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(F){A.setScissorTest(de=F)},this.setOpaqueSort=function(F){ut=F},this.setTransparentSort=function(F){yt=F},this.getClearColor=function(F){return F.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(F=!0,G=!0,tt=!0){let $=0;if(F){let Z=!1;if(z!==null){let Tt=z.texture.format;Z=g.has(Tt)}if(Z){let Tt=z.texture.type,Rt=m.has(Tt),wt=Wt.getClearColor(),Ct=Wt.getClearAlpha(),Lt=wt.r,qt=wt.g,Qt=wt.b;Rt?(v[0]=Lt,v[1]=qt,v[2]=Qt,v[3]=Ct,X.clearBufferuiv(X.COLOR,0,v)):(M[0]=Lt,M[1]=qt,M[2]=Qt,M[3]=Ct,X.clearBufferiv(X.COLOR,0,M))}else $|=X.COLOR_BUFFER_BIT}G&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),R=F},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Wt.dispose(),Mt.dispose(),bt.dispose(),Q.dispose(),ht.dispose(),at.dispose(),Et.dispose(),ct.dispose(),xt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Yu),Pt.removeEventListener("sessionend",$u),Di.stop()};function xe(F){F.preventDefault(),Oc("WebGLRenderer: Context Lost."),D=!0}function ue(){Oc("WebGLRenderer: Context Restored."),D=!1;let F=Y.autoReset,G=Ot.enabled,tt=Ot.autoUpdate,$=Ot.needsUpdate,Z=Ot.type;Ut(),Y.autoReset=F,Ot.enabled=G,Ot.autoUpdate=tt,Ot.needsUpdate=$,Ot.type=Z}function _n(F){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Ln(F){let G=F.target;G.removeEventListener("dispose",Ln),Wp(G)}function Wp(F){Xp(F),Q.remove(F)}function Xp(F){let G=Q.get(F).programs;G!==void 0&&(G.forEach(function(tt){xt.releaseProgram(tt)}),F.isShaderMaterial&&xt.releaseShaderCache(F))}this.renderBufferDirect=function(F,G,tt,$,Z,Tt){G===null&&(G=nn);let Rt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,wt=$p(F,G,tt,$,Z);A.setMaterial($,Rt);let Ct=tt.index,Lt=1;if($.wireframe===!0){if(Ct=rt.getWireframeAttribute(tt),Ct===void 0)return;Lt=2}let qt=tt.drawRange,Qt=tt.attributes.position,It=qt.start*Lt,he=(qt.start+qt.count)*Lt;Tt!==null&&(It=Math.max(It,Tt.start*Lt),he=Math.min(he,(Tt.start+Tt.count)*Lt)),Ct!==null?(It=Math.max(It,0),he=Math.min(he,Ct.count)):Qt!=null&&(It=Math.max(It,0),he=Math.min(he,Qt.count));let Pe=he-It;if(Pe<0||Pe===1/0)return;Et.setup(Z,$,wt,tt,Ct);let ve,ge=_t;if(Ct!==null&&(ve=gt.get(Ct),ge=ot,ge.setIndex(ve)),Z.isMesh)$.wireframe===!0?(A.setLineWidth($.wireframeLinewidth*Ie()),ge.setMode(X.LINES)):ge.setMode(X.TRIANGLES);else if(Z.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),A.setLineWidth(Xe*Ie()),Z.isLineSegments?ge.setMode(X.LINES):Z.isLineLoop?ge.setMode(X.LINE_LOOP):ge.setMode(X.LINE_STRIP)}else Z.isPoints?ge.setMode(X.POINTS):Z.isSprite&&ge.setMode(X.TRIANGLES);if(Z.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Xe=Z._multiDrawStarts,At=Z._multiDrawCounts,tn=Z._multiDrawCount,ie=Ct?gt.get(Ct).bytesPerElement:1,dn=Q.get($).currentProgram.getUniforms();for(let Fn=0;Fn<tn;Fn++)dn.setValue(X,"_gl_DrawID",Fn),ge.render(Xe[Fn]/ie,At[Fn])}else if(Z.isInstancedMesh)ge.renderInstances(It,Pe,Z.count);else if(tt.isInstancedBufferGeometry){let Xe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,Xe);ge.renderInstances(It,Pe,At)}else ge.render(It,Pe)};function qu(F,G,tt,$){R!==null&&F.isNodeMaterial&&R.setObject($,F),Kt===!0&&Dt.setState(F,tt,!1),F.transparent===!0&&F.side===we&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,oo(F,G,$),F.side=vi,F.needsUpdate=!0,oo(F,G,$),F.side=we):oo(F,G,$)}this.compile=function(F,G,tt=null){tt===null&&(tt=F),R!==null&&R.renderStart(F,G,tt),T=bt.get(tt),T.init(G),_.push(T),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),F!==tt&&F.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),R!==null&&R.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,Kt=Dt.init(this.clippingPlanes,ae),Kt===!0&&Dt.setGlobalState(this.clippingPlanes,G),R!==null&&Ot.render(T.state.shadowsArray,tt,G);let $=new Set;return F.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Rt=0;Rt<Tt.length;Rt++){let wt=Tt[Rt];qu(wt,tt,G,Z),$.add(wt)}else qu(Tt,tt,G,Z),$.add(Tt)}),T=_.pop(),R!==null&&R.renderEnd(),$},this.compileAsync=function(F,G,tt=null){let $=this.compile(F,G,tt);return new Promise(Z=>{function Tt(){if($.forEach(function(Rt){let Ct=Q.get(Rt).currentProgram;(Ct===void 0||Ct.isReady())&&$.delete(Rt)}),$.size===0){Z(F);return}setTimeout(Tt,10)}pe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ll=null;function qp(F){Ll&&Ll(F)}function Yu(){Di.stop()}function $u(){Di.start()}let Di=new Yf;Di.setAnimationLoop(qp),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(F){Ll=F,Pt.setAnimationLoop(F),F===null?Di.stop():Di.start()},Pt.addEventListener("sessionstart",Yu),Pt.addEventListener("sessionend",$u),this.render=function(F,G){if(G!==void 0&&G.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;R!==null&&R.renderStart(F,G);let tt=Pt.enabled===!0&&Pt.isPresenting===!0,$=E!==null&&(z===null||tt)&&E.begin(I,z);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(G),G=Pt.getCamera()),F.isScene===!0&&F.onBeforeRender(I,F,G,z),T=bt.get(F,_.length),T.init(G),T.state.textureUnits=it.getTextureUnits(),_.push(T),Jt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ht.setFromProjectionMatrix(Jt,wn,G.reversedDepth),ae=this.localClippingEnabled,Kt=Dt.init(this.clippingPlanes,ae),y=Mt.get(F,w.length),y.init(),w.push(y),Pt.enabled===!0&&Pt.isPresenting===!0){let Rt=I.xr.getDepthSensingMesh();Rt!==null&&Fl(Rt,G,-1/0,I.sortObjects)}Fl(F,G,0,I.sortObjects),y.finish(),R!==null&&R.updateLights(T.state.lightsArray),I.sortObjects===!0&&y.sort(ut,yt),Te=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Te&&Wt.addToRenderList(y,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Dt.beginShadows();let Z=T.state.shadowsArray;if(Ot.render(Z,F,G),Kt===!0&&Dt.endShadows(),($&&E.hasRenderPass())===!1){let Rt=y.opaque,wt=y.transmissive;if(T.setupLights(),G.isArrayCamera){let Ct=G.cameras;if(wt.length>0)for(let Lt=0,qt=Ct.length;Lt<qt;Lt++){let Qt=Ct[Lt];Ju(Rt,wt,F,Qt)}Te&&Wt.render(F);for(let Lt=0,qt=Ct.length;Lt<qt;Lt++){let Qt=Ct[Lt];Zu(y,F,Qt,Qt.viewport)}}else wt.length>0&&Ju(Rt,wt,F,G),Te&&Wt.render(F),Zu(y,F,G)}z!==null&&N===0&&(it.updateMultisampleRenderTarget(z),it.updateRenderTargetMipmap(z)),$&&E.end(I),F.isScene===!0&&F.onAfterRender(I,F,G),Et.resetDefaultState(),B=-1,k=null,_.pop(),_.length>0?(T=_[_.length-1],it.setTextureUnits(T.state.textureUnits),Kt===!0&&Dt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,R!==null&&R.renderEnd()};function Fl(F,G,tt,$){if(F.visible===!1)return;if(F.layers.test(G.layers)){if(F.isGroup)tt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(G);else if(F.isLightProbeGrid)T.pushLightProbeGrid(F);else if(F.isLight)T.pushLight(F),F.castShadow&&T.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(Ht)){$&&Be.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Jt);let Rt=at.update(F),wt=F.material;wt.visible&&y.push(F,Rt,wt,tt,Be.z,null,G)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(Ht))){let Rt=at.update(F),wt=F.material;if($&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Be.copy(F.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Be.copy(Rt.boundingSphere.center)),Be.applyMatrix4(F.matrixWorld).applyMatrix4(Jt)),Array.isArray(wt)){let Ct=Rt.groups;for(let Lt=0,qt=Ct.length;Lt<qt;Lt++){let Qt=Ct[Lt],It=wt[Qt.materialIndex];It&&It.visible&&y.push(F,Rt,It,tt,Be.z,Qt,G)}}else wt.visible&&y.push(F,Rt,wt,tt,Be.z,null,G)}}let Tt=F.children;for(let Rt=0,wt=Tt.length;Rt<wt;Rt++)Fl(Tt[Rt],G,tt,$)}function Zu(F,G,tt,$){let{opaque:Z,transmissive:Tt,transparent:Rt}=F;T.setupLightsView(tt),Kt===!0&&Dt.setGlobalState(I.clippingPlanes,tt),$&&A.viewport(H.copy($)),Z.length>0&&so(Z,G,tt),Tt.length>0&&so(Tt,G,tt),Rt.length>0&&so(Rt,G,tt),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Ju(F,G,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let It=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new Ke(1,1,{generateMipmaps:!0,type:It?Rn:hn,minFilter:Si,samples:Math.max(4,O.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let Tt=T.state.transmissionRenderTarget[$.id],Rt=$.viewport||H;Tt.setSize(Rt.z*I.transmissionResolutionScale,Rt.w*I.transmissionResolutionScale);let wt=I.getRenderTarget(),Ct=I.getActiveCubeFace(),Lt=I.getActiveMipmapLevel();I.setRenderTarget(Tt),I.getClearColor(et),lt=I.getClearAlpha(),lt<1&&I.setClearColor(16777215,.5),I.clear(),Te&&Wt.render(tt);let qt=I.toneMapping;I.toneMapping=Tn;let Qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),Kt===!0&&Dt.setGlobalState(I.clippingPlanes,$),so(F,tt,$),it.updateMultisampleRenderTarget(Tt),it.updateRenderTargetMipmap(Tt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let he=0,Pe=G.length;he<Pe;he++){let ve=G[he],{object:ge,geometry:Xe,material:At,group:tn}=ve;if(At.side===we&&ge.layers.test($.layers)){let ie=At.side;At.side=en,At.needsUpdate=!0,Ku(ge,tt,$,Xe,At,tn),At.side=ie,At.needsUpdate=!0,It=!0}}It===!0&&(it.updateMultisampleRenderTarget(Tt),it.updateRenderTargetMipmap(Tt))}I.setRenderTarget(wt,Ct,Lt),I.setClearColor(et,lt),Qt!==void 0&&($.viewport=Qt),I.toneMapping=qt}function so(F,G,tt){let $=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Tt=F.length;Z<Tt;Z++){let Rt=F[Z],{object:wt,geometry:Ct,group:Lt}=Rt,qt=Rt.material;qt.allowOverride===!0&&$!==null&&(qt=$),wt.layers.test(tt.layers)&&Ku(wt,G,tt,Ct,qt,Lt)}}function Ku(F,G,tt,$,Z,Tt){R!==null&&Z.isNodeMaterial&&R.setObject(F,Z),F.onBeforeRender(I,G,tt,$,Z,Tt),F.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),Z.onBeforeRender(I,G,tt,$,F,Tt),Z.transparent===!0&&Z.side===we&&Z.forceSinglePass===!1?(Z.side=en,Z.needsUpdate=!0,I.renderBufferDirect(tt,G,$,Z,F,Tt),Z.side=vi,Z.needsUpdate=!0,I.renderBufferDirect(tt,G,$,Z,F,Tt),Z.side=we):I.renderBufferDirect(tt,G,$,Z,F,Tt),F.onAfterRender(I,G,tt,$,Z,Tt)}function oo(F,G,tt){G.isScene!==!0&&(G=nn);let $=Q.get(F),Z=T.state.lights,Tt=T.state.shadowsArray,Rt=Z.state.version,wt=xt.getParameters(F,Z.state,Tt,G,tt,T.state.lightProbeGridArray),Ct=xt.getProgramCacheKey(wt),Lt=$.programs;$.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let qt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;$.envMap=ht.get(F.envMap||$.environment,qt),$.envMapRotation=$.environment!==null&&F.envMap===null?G.environmentRotation:F.envMapRotation,Lt===void 0&&(F.addEventListener("dispose",Ln),Lt=new Map,$.programs=Lt);let Qt=Lt.get(Ct);if(Qt!==void 0){if($.currentProgram===Qt&&$.lightsStateVersion===Rt)return ju(F,wt),Qt}else wt.uniforms=xt.getUniforms(F),R!==null&&F.isNodeMaterial&&R.build(F,tt,wt),F.onBeforeCompile(wt,I),Qt=xt.acquireProgram(wt,Ct),Lt.set(Ct,Qt),$.uniforms=wt.uniforms;let It=$.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(It.clippingPlanes=Dt.uniform),ju(F,wt),$.needsLights=Jp(F),$.lightsStateVersion=Rt,$.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.sunLights.value=Z.state.sun,It.sunLightShadows.value=Z.state.sunShadow,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.sunShadowMatrix.value=Z.state.sunShadowMatrix,It.sunShadowCascade.value=Z.state.sunShadowCascade,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=T.state.lightProbeGridArray.length>0,$.currentProgram=Qt,$.uniformsList=null,Qt}function Qu(F){if(F.uniformsList===null){let G=F.currentProgram.getUniforms();F.uniformsList=Br.seqWithValue(G.seq,F.uniforms)}return F.uniformsList}function ju(F,G){let tt=Q.get(F);tt.outputColorSpace=G.outputColorSpace,tt.batching=G.batching,tt.batchingColor=G.batchingColor,tt.instancing=G.instancing,tt.instancingColor=G.instancingColor,tt.instancingMorph=G.instancingMorph,tt.skinning=G.skinning,tt.morphTargets=G.morphTargets,tt.morphNormals=G.morphNormals,tt.morphColors=G.morphColors,tt.morphTargetsCount=G.morphTargetsCount,tt.numClippingPlanes=G.numClippingPlanes,tt.numIntersection=G.numClipIntersection,tt.vertexAlphas=G.vertexAlphas,tt.vertexTangents=G.vertexTangents,tt.toneMapping=G.toneMapping}function Yp(F,G){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let tt=0,$=F.length;tt<$;tt++){let Z=F[tt];if(Z.texture!==null&&Z.boundingBox.containsPoint(b))return Z}return null}function $p(F,G,tt,$,Z){G.isScene!==!0&&(G=nn),it.resetTextureUnits();let Tt=G.fog,Rt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,wt=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ee.workingColorSpace,Ct=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Lt=ht.get($.envMap||Rt,Ct),qt=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Qt=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),It=!!tt.morphAttributes.position,he=!!tt.morphAttributes.normal,Pe=!!tt.morphAttributes.color,ve=Tn;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ve=I.toneMapping);let ge=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Xe=ge!==void 0?ge.length:0,At=Q.get($),tn=T.state.lights;if(Kt===!0&&(ae===!0||F!==k)){let be=F===k&&$.id===B;Dt.setState($,F,be)}let ie=!1;$.version===At.__version?(At.needsLights&&At.lightsStateVersion!==tn.state.version||At.outputColorSpace!==wt||Z.isBatchedMesh&&At.batching===!1||!Z.isBatchedMesh&&At.batching===!0||Z.isBatchedMesh&&At.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&At.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&At.instancing===!1||!Z.isInstancedMesh&&At.instancing===!0||Z.isSkinnedMesh&&At.skinning===!1||!Z.isSkinnedMesh&&At.skinning===!0||Z.isInstancedMesh&&At.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&At.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&At.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&At.instancingMorph===!1&&Z.morphTexture!==null||At.envMap!==Lt||$.fog===!0&&At.fog!==Tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Dt.numPlanes||At.numIntersection!==Dt.numIntersection)||At.vertexAlphas!==qt||At.vertexTangents!==Qt||At.morphTargets!==It||At.morphNormals!==he||At.morphColors!==Pe||At.toneMapping!==ve||At.morphTargetsCount!==Xe||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,At.__version=$.version);let dn=At.currentProgram;ie===!0&&(dn=oo($,G,Z),R&&$.isNodeMaterial&&R.onUpdateProgram($,dn,At));let Fn=!1,ii=!1,or=!1,me=dn.getUniforms(),Re=At.uniforms;if(A.useProgram(dn.program)&&(Fn=!0,ii=!0,or=!0),$.id!==B&&(B=$.id,ii=!0),At.needsLights){let be=Yp(T.state.lightProbeGridArray,Z);At.lightProbeGrid!==be&&(At.lightProbeGrid=be,ii=!0)}if(Fn||k!==F){A.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),me.setValue(X,"projectionMatrix",F.projectionMatrix),me.setValue(X,"viewMatrix",F.matrixWorldInverse);let si=me.map.cameraPosition;si!==void 0&&si.setValue(X,Me.setFromMatrixPosition(F.matrixWorld)),O.logarithmicDepthBuffer&&me.setValue(X,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&me.setValue(X,"isOrthographic",F.isOrthographicCamera===!0),k!==F&&(k=F,ii=!0,or=!0)}if(At.needsLights&&(tn.state.sunShadowMap.length>0&&me.setValue(X,"sunShadowMap",tn.state.sunShadowMap,it),tn.state.directionalShadowMap.length>0&&me.setValue(X,"directionalShadowMap",tn.state.directionalShadowMap,it),tn.state.spotShadowMap.length>0&&me.setValue(X,"spotShadowMap",tn.state.spotShadowMap,it),tn.state.pointShadowMap.length>0&&me.setValue(X,"pointShadowMap",tn.state.pointShadowMap,it)),Z.isSkinnedMesh){me.setOptional(X,Z,"bindMatrix"),me.setOptional(X,Z,"bindMatrixInverse");let be=Z.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),me.setValue(X,"boneTexture",be.boneTexture,it))}Z.isBatchedMesh&&(me.setOptional(X,Z,"batchingTexture"),me.setValue(X,"batchingTexture",Z._matricesTexture,it),me.setOptional(X,Z,"batchingIdTexture"),me.setValue(X,"batchingIdTexture",Z._indirectTexture,it),me.setOptional(X,Z,"batchingColorTexture"),Z._colorsTexture!==null&&me.setValue(X,"batchingColorTexture",Z._colorsTexture,it));let ri=tt.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&W.update(Z,tt,dn),(ii||At.receiveShadow!==Z.receiveShadow)&&(At.receiveShadow=Z.receiveShadow,me.setValue(X,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Re.envMapIntensity.value=G.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=B_()),ii){if(me.setValue(X,"toneMappingExposure",I.toneMappingExposure),At.needsLights&&Zp(Re,or),Tt&&$.fog===!0&&Ft.refreshFogUniforms(Re,Tt),Ft.refreshMaterialUniforms(Re,$,K,q,T.state.transmissionRenderTarget[F.id]),At.needsLights&&At.lightProbeGrid){let be=At.lightProbeGrid;Re.probesSH.value=be.texture,Re.probesMin.value.copy(be.boundingBox.min),Re.probesMax.value.copy(be.boundingBox.max),Re.probesResolution.value.copy(be.resolution)}Br.upload(X,Qu(At),Re,it)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Br.upload(X,Qu(At),Re,it),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&me.setValue(X,"center",Z.center),me.setValue(X,"modelViewMatrix",Z.modelViewMatrix),me.setValue(X,"normalMatrix",Z.normalMatrix),me.setValue(X,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let be=$.uniformsGroups;for(let si=0,ar=be.length;si<ar;si++){let eh=be[si];ct.update(eh,dn),ct.bind(eh,dn)}}return dn}function Zp(F,G){F.ambientLightColor.needsUpdate=G,F.lightProbe.needsUpdate=G,F.sunLights.needsUpdate=G,F.sunLightShadows.needsUpdate=G,F.directionalLights.needsUpdate=G,F.directionalLightShadows.needsUpdate=G,F.pointLights.needsUpdate=G,F.pointLightShadows.needsUpdate=G,F.spotLights.needsUpdate=G,F.spotLightShadows.needsUpdate=G,F.rectAreaLights.needsUpdate=G,F.hemisphereLights.needsUpdate=G}function Jp(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(F,G,tt){let $=Q.get(F);$.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Q.get(F.texture).__webglTexture=G,Q.get(F.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,G){let tt=Q.get(F);tt.__webglFramebuffer=G,tt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(F,G=0,tt=0){z=F,U=G,N=tt;let $=null,Z=!1,Tt=!1;if(F){let wt=Q.get(F);if(wt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(X.FRAMEBUFFER,wt.__webglFramebuffer),H.copy(F.viewport),nt.copy(F.scissor),J=F.scissorTest,A.viewport(H),A.scissor(nt),A.setScissorTest(J),B=-1;return}else if(wt.__webglFramebuffer===void 0)it.setupRenderTarget(F);else if(wt.__hasExternalTextures)it.rebindTextures(F,Q.get(F.texture).__webglTexture,Q.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let qt=F.depthTexture;if(wt.__boundDepthTexture!==qt){if(qt!==null&&Q.has(qt)&&(F.width!==qt.image.width||F.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(F)}}let Ct=F.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Tt=!0);let Lt=Q.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Lt[G])?$=Lt[G][tt]:$=Lt[G],Z=!0):F.samples>0&&it.useMultisampledRTT(F)===!1?$=Q.get(F).__webglMultisampledFramebuffer:Array.isArray(Lt)?$=Lt[tt]:$=Lt,H.copy(F.viewport),nt.copy(F.scissor),J=F.scissorTest}else H.copy(ft).multiplyScalar(K).floor(),nt.copy(Nt).multiplyScalar(K).floor(),J=de;if(tt!==0&&($=C),A.bindFramebuffer(X.FRAMEBUFFER,$)&&A.drawBuffers(F,$),A.viewport(H),A.scissor(nt),A.setScissorTest(J),Z){let wt=Q.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,wt.__webglTexture,tt)}else if(Tt){let wt=G;for(let Ct=0;Ct<F.textures.length;Ct++){let Lt=Q.get(F.textures[Ct]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,tt,wt)}}else if(F!==null&&tt!==0){let wt=Q.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,wt.__webglTexture,tt)}B=-1};function th(F){let G=Q.get(F);return(G.__readFormat!==F.format||G.__readType!==F.type)&&(G.__readFormat=F.format,G.__readType=F.type,G.__formatReadable=O.textureFormatReadable(F.format),G.__typeReadable=O.textureTypeReadable(F.type)),G}this.readRenderTargetPixels=function(F,G,tt,$,Z,Tt,Rt,wt=0){if(!(F&&F.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Q.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){A.bindFramebuffer(X.FRAMEBUFFER,Ct);try{let Lt=F.textures[wt],qt=Lt.format,Qt=Lt.type;F.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+wt);let It=th(Lt);if(It.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=F.width-$&&tt>=0&&tt<=F.height-Z&&X.readPixels(G,tt,$,Z,vt.convert(qt),vt.convert(Qt),Tt)}finally{let Lt=z!==null?Q.get(z).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(F,G,tt,$,Z,Tt,Rt,wt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Q.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(G>=0&&G<=F.width-$&&tt>=0&&tt<=F.height-Z){A.bindFramebuffer(X.FRAMEBUFFER,Ct);let Lt=F.textures[wt],qt=Lt.format,Qt=Lt.type;F.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+wt);let It=th(Lt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,he),X.bufferData(X.PIXEL_PACK_BUFFER,Tt.byteLength,X.STREAM_READ),X.readPixels(G,tt,$,Z,vt.convert(qt),vt.convert(Qt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Pe=z!==null?Q.get(z).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Pe);let ve=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await gf(X,ve,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,he),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Tt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(he),X.deleteSync(ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,G=null,tt=0){let $=Math.pow(2,-tt),Z=Math.floor(F.image.width*$),Tt=Math.floor(F.image.height*$),Rt=G!==null?G.x:0,wt=G!==null?G.y:0;it.setTexture2D(F,0),X.copyTexSubImage2D(X.TEXTURE_2D,tt,0,0,Rt,wt,Z,Tt),A.unbindTexture()},this.copyTextureToTexture=function(F,G,tt=null,$=null,Z=0,Tt=0){let Rt,wt,Ct,Lt,qt,Qt,It,he,Pe,ve=F.isCompressedTexture?F.mipmaps[Tt]:F.image;if(tt!==null)Rt=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Ct=tt.isBox3?tt.max.z-tt.min.z:1,Lt=tt.min.x,qt=tt.min.y,Qt=tt.isBox3?tt.min.z:0;else{let Re=Math.pow(2,-Z);Rt=Math.floor(ve.width*Re),wt=Math.floor(ve.height*Re),F.isDataArrayTexture?Ct=ve.depth:F.isData3DTexture?Ct=Math.floor(ve.depth*Re):Ct=1,Lt=0,qt=0,Qt=0}$!==null?(It=$.x,he=$.y,Pe=$.z):(It=0,he=0,Pe=0);let ge=vt.convert(G.format),Xe=vt.convert(G.type),At;G.isData3DTexture?(it.setTexture3D(G,0),At=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),At=X.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),At=X.TEXTURE_2D),A.activeTexture(X.TEXTURE0),A.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),A.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),A.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);let tn=A.getParameter(X.UNPACK_ROW_LENGTH),ie=A.getParameter(X.UNPACK_IMAGE_HEIGHT),dn=A.getParameter(X.UNPACK_SKIP_PIXELS),Fn=A.getParameter(X.UNPACK_SKIP_ROWS),ii=A.getParameter(X.UNPACK_SKIP_IMAGES);A.pixelStorei(X.UNPACK_ROW_LENGTH,ve.width),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ve.height),A.pixelStorei(X.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(X.UNPACK_SKIP_ROWS,qt),A.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt);let or=F.isDataArrayTexture||F.isData3DTexture,me=G.isDataArrayTexture||G.isData3DTexture;if(F.isDepthTexture){let Re=Q.get(F),ri=Q.get(G),be=Q.get(Re.__renderTarget),si=Q.get(ri.__renderTarget);A.bindFramebuffer(X.READ_FRAMEBUFFER,be.__webglFramebuffer),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ar=0;ar<Ct;ar++)or&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Q.get(F).__webglTexture,Z,Qt+ar),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,Tt,Pe+ar)),X.blitFramebuffer(Lt,qt,Rt,wt,It,he,Rt,wt,X.DEPTH_BUFFER_BIT,X.NEAREST);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Z!==0||F.isRenderTargetTexture||Q.has(F)){let Re=Q.get(F),ri=Q.get(G);A.bindFramebuffer(X.READ_FRAMEBUFFER,P),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,L);for(let be=0;be<Ct;be++)or?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Re.__webglTexture,Z,Qt+be):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Re.__webglTexture,Z),me?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ri.__webglTexture,Tt,Pe+be):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ri.__webglTexture,Tt),Z!==0?X.blitFramebuffer(Lt,qt,Rt,wt,It,he,Rt,wt,X.COLOR_BUFFER_BIT,X.NEAREST):me?X.copyTexSubImage3D(At,Tt,It,he,Pe+be,Lt,qt,Rt,wt):X.copyTexSubImage2D(At,Tt,It,he,Lt,qt,Rt,wt);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else me?F.isDataTexture||F.isData3DTexture?X.texSubImage3D(At,Tt,It,he,Pe,Rt,wt,Ct,ge,Xe,ve.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(At,Tt,It,he,Pe,Rt,wt,Ct,ge,ve.data):X.texSubImage3D(At,Tt,It,he,Pe,Rt,wt,Ct,ge,Xe,ve):F.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Tt,It,he,Rt,wt,ge,Xe,ve.data):F.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Tt,It,he,ve.width,ve.height,ge,ve.data):X.texSubImage2D(X.TEXTURE_2D,Tt,It,he,Rt,wt,ge,Xe,ve);A.pixelStorei(X.UNPACK_ROW_LENGTH,tn),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ie),A.pixelStorei(X.UNPACK_SKIP_PIXELS,dn),A.pixelStorei(X.UNPACK_SKIP_ROWS,Fn),A.pixelStorei(X.UNPACK_SKIP_IMAGES,ii),Tt===0&&G.generateMipmaps&&X.generateMipmap(At),A.unbindTexture()},this.initRenderTarget=function(F){Q.get(F).__webglFramebuffer===void 0&&it.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?it.setTextureCube(F,0):F.isData3DTexture?it.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?it.setTexture2DArray(F,0):it.setTexture2D(F,0),A.unbindTexture()},this.resetState=function(){U=0,N=0,z=null,A.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function td(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function ed(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var z_=[],lu=new Map,k_=0;function cl(i){z_=i,lu=new Map(i.flatMap(t=>t.items.map(e=>[V_(t.id,e.id),e]))),k_++}function V_(i,t){return`pack:${i}:${t}`}function G_(i){return i.startsWith("pack:")}var H_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function nd(i){return De(i)?.parts.find(t=>t.screen)}function De(i){if(!G_(i))return;let t=lu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=H_[e];return r?lu.get(`pack:${r}:${n.join(":")}`):void 0}function fn(i,t){let e=De(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return hl;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));if(t.type==="fan_ceiling")return Math.max(0,i.height-Math.max(.05,t.h));if(t.type==="altar_wall")return 1.45;if(t.type==="water_heater")return 1.7;if(t.type==="range_hood")return 1.35;if(t.type==="microwave")return cu(i,t.x,t.z);if(t.type==="water_pump"&&!i.rooms.some(n=>n.points.length>=3&&ce([t.x,t.z],n.points)))return ul(i,t.x,t.z);switch(e?.mount){case"surface":return cu(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Os(t)}}var Vr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,canopy:2.4,veranda:2.4},X_={canopy:.02,veranda:.12};function Cn(i){return X_[i]??null}function Qn(i){return i==="hedge"||i==="fence"||i==="pergola"||i==="canopy"||i==="veranda"}function Bs(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=s(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function q_(i,t,e,n){let r=Cn(t.type);return Ji(i)+(t.offset??0)+(r??Vr[t.type])-(r===null?Bs(t,e,n):0)}function Ji(i){return i.elevation>.3?0:-.2}function ul(i,t,e){let n=(i.outdoor??[]).filter(s=>(!Qn(s.type)||Cn(s.type)!==null)&&s.type!=="pool"&&ce([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?q_(i,r,t,e):Ji(i)}var Y_={type:"none",pitch:35,overhang:.4},ww={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Y_}};var id=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),hl=1.75;function rd(i){return id.has(i)||!!De(i)?.light}var $_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Os(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;default:return 0}}function cu(i,t,e){let n=0;for(let r of i.furniture)!($_.has(r.type)||De(r.type)?.surface)||!ce([t,e],fl(r))||(n=Math.max(n,r.h));return n}var W_=new Set([...id,"radiator","air_conditioner","water_pump","fan_ceiling","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Z_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],J_=["standard","bars","glass_wall"];function Ki(i,t){return i.type==="door"?i.style&&Z_.includes(i.style)?i.style:t?"front":"interior":i.style&&J_.includes(i.style)?i.style:"standard"}function sd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function od(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Qi(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function zs(i){return Math.abs(Qi(i))}function ad(i){let t=Qi(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function ld(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function cd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function fl(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function ce(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ei=(i,t)=>[i[0]+t[0],i[1]+t[1]],jn=(i,t)=>[i[0]*t,i[1]*t],Gs=(i,t)=>i[0]*t[0]+i[1]*t[1],ks=(i,t)=>i[0]*t[1]-i[1]*t[0],Vs=i=>Math.hypot(i[0],i[1]),ti=i=>{let t=Vs(i)||1;return[i[0]/t,i[1]/t]},ud=i=>[-i[1],i[0]],hd=i=>[i[1],-i[0]];function Hs(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),o=[],a=w=>{for(let _=0;_<o.length;_++)if(Math.abs(o[_][0]-w[0])<=n&&Math.abs(o[_][1]-w[1])<=n)return _;return o.push([w[0],w[1]]),o.length-1},l=[];for(let w of i){let _=w.points;if(_.length<3||Math.abs(Qi(_))<1e-6)continue;let E=Qi(_)>0,I=_.map(a);for(let D=0;D<_.length;D++){let R=I[D],C=I[(D+1)%_.length];R!==C&&l.push(E?{u:R,v:C,room:w.id,edge:D,forward:!0}:{u:C,v:R,room:w.id,edge:D,forward:!1})}}let c=s.map(w=>[a(w.a),a(w.b)]),u=new Set;for(let w of i){let _=w.points;_.length<3||(w.wall_splits??[]).forEach((E,I)=>{if(!E||I>=_.length)return;let D=_[I],R=He(_[(I+1)%_.length],D),C=Vs(R);for(let P of E)P>n&&P<C-n&&u.add(a(Ei(D,jn(R,P/C))))})}let h=[];for(let w of l){let _=o[w.u],E=o[w.v],I=He(E,_),D=Vs(I),R=jn(I,1/D),C=[];for(let L=0;L<o.length;L++){if(L===w.u||L===w.v)continue;let U=He(o[L],_),N=Gs(U,R);N<=n||N>=D-n||Math.abs(ks(R,U))<=n&&C.push({t:N,id:L})}C.sort((L,U)=>L.t-U.t);let P=[{t:0,id:w.u},...C,{t:D,id:w.v}];for(let L=0;L+1<P.length;L++){let U=P[L],N=P[L+1],z=w.forward?U.t:D-N.t,B=w.forward?N.t:D-U.t;h.push({u:U.id,v:N.id,room:w.room,edge:w.edge,t0:z,t1:B})}}let f=new Map;for(let w of h){let _=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,E=f.get(_);E||f.set(_,E=[]),E.push(w)}let d=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),p=new Map;for(let w of h){let _=`${w.room}:${w.edge}`;p.set(_,[...p.get(_)??[],w.t0].sort((E,I)=>E-I))}let x=w=>{let _=i.find(I=>I.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(_))return _;let E=p.get(`${w.room}:${w.edge}`)??[];return _[E.indexOf(w.t0)]??null},g=w=>{let _=w.map(x).filter(E=>typeof E=="number"&&E>0);return _.length?Math.min(..._):void 0},m=w=>{let _=w.map(E=>i.find(I=>I.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return _.length?Math.max(..._):void 0},v=w=>w.some(_=>x(_)===0),M=[],b=[];for(let w of f.values()){let _=w[0],E=w.find(I=>I!==_&&I.u===_.v&&I.v===_.u&&I.room!==_.room);for(let I of w)I!==_&&I!==E&&I.room!==_.room&&r.push(`overlap:${_.room}:${I.room}`);if(v(E?[_,E]:[_])){E&&M.push([_.room,E.room]);continue}if(E){let I=m([_,E])??t.interior;b.push({a:_.u,b:_.v,left:I/2,right:I/2,exterior:!1,roomLeft:_.room,roomRight:E.room,sources:[d(_),d(E)],height:g([_,E])})}else b.push({a:_.u,b:_.v,left:0,right:m([_])??t.exterior,exterior:!0,roomLeft:_.room,roomRight:null,sources:[d(_)],height:g([_])})}s.forEach((w,_)=>{let[E,I]=c[_];if(E===I)return;let D=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],R=i.find(L=>L.points.length>=3&&ce(D,L.points))?.id??null,C=(w.thickness??t.interior)/2,P=typeof w.height=="number"&&w.height>0?w.height:void 0;b.push({free:w.id,a:E,b:I,left:C,right:C,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:P})}),b=Q_(b,o,u);let y=tv(b,o);return{walls:b.map((w,_)=>{let E=o[w.a],I=o[w.b],D=y.get(`${_}:a`),R=y.get(`${_}:b`),C=ev([D.right,R.left,I,R.right,D.left,E],1e-6);return{id:K_(E,I),a:[E[0],E[1]],b:[I[0],I[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:C,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{}}}),warnings:[...new Set(r)],open:M}}function K_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function fd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Q_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=fd(l)),c.a!==o&&(c=fd(c)),l.a===c.b)continue;let u=ti(He(t[l.b],t[l.a])),h=ti(He(t[c.b],t[c.a]));if(Math.abs(ks(u,h))>1e-6||Gs(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:j_(l.sources,c.sources)},d=n.filter((p,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function j_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function tv(i,t){let e=new Map;i.forEach((r,s)=>{let o=ti(He(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:jn(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Ei(o,jn(ud(c.d),c.left)),right:Ei(o,jn(hd(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],h=s[(c+1)%s.length],f=Ei(o,jn(ud(u.d),u.left)),d=Ei(o,jn(hd(h.d),h.right)),p=ks(u.d,h.d);if(Math.abs(p)<1e-4)continue;let x=ks(He(d,f),h.d)/p,g=Ei(f,jn(u.d,x));Vs(He(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function ev(i,t){let e=i.filter((r,s)=>Vs(He(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=He(o,s),c=He(a,o);if(Math.abs(ks(ti(l),ti(c)))<1e-7&&Gs(l,c)>0){e=e.filter((u,h)=>h!==r),n=!0;break}}}return e}function dd(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=ti(He(r,n));return Ei(n,jn(s,e))}function pd(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=ti(He(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ei(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function md(i,t,e){if(!t.wall)return nv(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=dd(e.room,0,t.offset);return{wall:n,s:Gs(He(r,n.a),ti(He(n.b,n.a)))}}function nv(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=dd(t,e,n);return{wall:r,s:Gs(He(o,r.a),ti(He(r.b,r.a)))}}return null}var Xs=Math.PI/180;function Vn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function In(i){let t=Vn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Xs),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Xs);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=_d(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var iv=.14;function xd(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!ce([t,e],s.points))continue;let[u,h]=Ai(s,t,e),f=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((f?null:qs(Hr(s,{u0:d,u1:d,a:d,b:d}),u,h))??In(s).y(h))-iv;n=n===null?x:Math.max(n,x)}return n}function uu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=zs(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=gd([a[0]-o[0],a[1]-o[1]]),u=gd([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],p=h[1]+f[1],x=Math.hypot(d,p);if(x<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+p*h[1])/x,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/x*t*m,a[1]+p/x*t*m])}return r}function gd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function bd(i,t){if(i.points&&i.points.length>=3)return uu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var Ws=Math.tan(30*Xs);function _d(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Ws*(i-o+s))/(2*Ws))),u=a+(c-s)*Ws;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*Ws:f<=i-o?l+(i-o-f)*Ws:e+(i-f)*r}}function Hr(i,t){let e=Vn(i),n=In(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(v,M)=>[v,M,n.y(M)],u=c(a,-s),h=c(l,-s),f=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Xs),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Xs);if(i.shape==="pent"){let v=[u,h,f,d];return{faces:[v],rim:v,ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let v=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),M=[e.u0+v,n.vr,n.rh],b=[e.u1-v,n.vr,n.rh],y=i.shape==="pyramid"?[[u,h,M],[h,f,M],[f,d,M],[d,u,M]]:[[u,h,b,M],[M,b,f,d],[d,u,M],[h,f,b]],T=i.shape==="pyramid"?[[u,M],[d,M],[h,M],[f,M]]:[[M,b],[u,M],[d,M],[h,b],[f,b]];return{faces:y,rim:[u,h,f,d],ridges:T,gable:null}}if(i.shape==="halfhip"){let v=Math.min(n.y(0),n.y(r)),M=v+(n.rh-v)*.55,b=p>1e-6?Math.min(n.vr,(M-i.eave_a)/p):n.vr,y=x>1e-6?Math.max(n.vr,r-(M-i.eave_b)/x):n.vr,T=Math.min((e.u1-e.u0)/2-.1,(n.rh-M)/Math.max(.2,p)),w=[e.u0+T,n.vr,n.rh],_=[e.u1-T,n.vr,n.rh],E=[a,b,M],I=[a,y,M],D=[l,b,M],R=[l,y,M];return{faces:[[u,h,D,_,w,E],[w,_,R,f,d,I],[I,E,w],[D,R,_]],rim:[u,h,D,R,f,d,I,E],ridges:[[w,_],[E,w],[I,w],[D,_],[R,_]],gable:[[0,n.y(0)],[b,M],[y,M],[r,n.y(r)]]}}if(i.shape==="mansard"){let v=_d(r,i.eave_a,i.eave_b,p,x),M=[a,v.vla,v.yla],b=[l,v.vla,v.yla],y=[a,r-v.vlb,v.ylb],T=[l,r-v.vlb,v.ylb],w=[a,v.vr,v.rh],_=[l,v.vr,v.rh];return{faces:[[u,h,b,M],[M,b,_,w],[w,_,T,y],[y,T,f,d]],rim:[u,h,b,_,T,f,d,y,w,M],ridges:[[w,_],[M,b],[y,T]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[r-v.vlb,v.ylb],[r,n.y(r)]]}}let g=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[u,h,m,g],[g,m,f,d]],rim:[u,h,m,f,d,g],ridges:[[g,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function qs(i,t,e){let n=null;for(let r of i.faces){if(!ce([t,e],r.map(v=>[v[0],v[1]])))continue;let[s,o]=r,a=r.slice(2).find(v=>Math.abs((o[0]-s[0])*(v[1]-s[1])-(o[1]-s[1])*(v[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],h=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],p=c*d-u*f,x=u*h-l*d,g=l*f-c*h;if(Math.abs(x)<1e-9)continue;let m=s[2]-(p*(t-s[0])+g*(e-s[1]))/x;n=n===null?m:Math.min(n,m)}return n}function Ai(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function rv(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function hu(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=rv(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function fu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Vn(t),n=In(t).rh,r=Hr(i,{u0:0,u1:0,a:0,b:0}),s=In(i),o=p=>{let[x,g]=e.at(p,e.w/2),[m,v]=Ai(i,x,g);return qs(r,m,v)??s.y(v)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let p=.5;p<h;p+=.05)if(o(l+u*p)>=n-.02){f=l+u*p;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function vd(i,t){let e=fu(i,t),n=Vn(e),r=In(e),s=Hr(i,{u0:0,u1:0,a:0,b:0}),o=In(i),a=f=>{let[d,p]=n.at(f,n.w/2),[x,g]=Ai(i,d,p);return qs(s,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,p=c*(f+1)/h,x=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),v=1/0,M=-1/0;for(let _=0;_<=40;_++){let E=n.w*_/40;r.y(E)>m+.02&&(v=Math.min(v,E),M=Math.max(M,E))}if(!(M-v>.05))continue;let b=n.at(x,v),y=n.at(g,M),T=Ai(i,b[0],b[1]),w=Ai(i,y[0],y[1]);u.push({u0:Math.min(T[0],w[0]),u1:Math.max(T[0],w[0]),v0:Math.min(T[1],w[1]),v1:Math.max(T[1],w[1])})}return u}function Gr(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function yd(i,t){let e=Gr(i,0,t.u0,!0),n=Gr(i,0,t.u1,!1),r=Gr(Gr(i,0,t.u0,!1),0,t.u1,!0),s=Gr(r,1,t.v0,!0),o=Gr(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(zs(a.map(l=>[l[0],l[1]])))>1e-6)}function dl(i,t,e){let n=Vn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(h=>ce(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Md(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}var Pn=1e-4;function du(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Sd(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Pn&&a<1-Pn&&l>-Pn&&l<1+Pn?a:null}function pu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Pn||o>=1-Pn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Pn?o:null}function sv(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Sd(n,r,o,a)!==null||pu(o,n,r)!==null||pu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Pn)return!0}}return ce(i[0],t)||ce(t[0],i)}function ov(i){let t=i.map(s=>du(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let p=h[d],x=h[(d+1)%h.length],g=Sd(l,c,p,x)??pu(p,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Pn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==o&&ce(x,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Pn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Pn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&du(o)>1e-6&&n.push(o)}return n}function mu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&sv(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:ov(s))}function av(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function wd(i,t,e=.03){return i.every(n=>ce(n,t)||t.some((r,s)=>av(n,r,t[(s+1)%t.length])<=e))}function Td(i,t){let e=du(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var ji=Gt(3662079,.95),gu=Gt(3662079,1),Ri=Gt(5995775,.34),Ed=Gt(5995775,.22),pl=[-.55,.83],jt=-1,ml=16,tr=32,Ad=48,xu=64,oe=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Zt;return t.setAttribute("position",new kt(this.p,3)),t.setAttribute("color",new kt(this.c,3)),t.setAttribute("fold",new kt(this.f,1)),this.uv&&t.setAttribute("uv",new kt(this.uv,2)),this.tile&&t.setAttribute("tile",new kt(this.tile,2)),t.computeBoundingSphere(),t}},Ve=class{p=[];c=[];f=[];seg(t,e,n=ji,r=jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,jt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,jt),this.seg(c,a,n,s)}geometry(){let t=new Zt;return t.setAttribute("position",new kt(this.p,3)),t.setAttribute("color",new kt(this.c,3)),t.setAttribute("fold",new kt(this.f,1)),t}};function Rd(i,t,e,n){let s=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((p,x)=>p+(f.p[x]-p)*d),c:h.c.map((p,x)=>p+(f.c[x]-p)*d),uv:h.uv&&f.uv?h.uv.map((p,x)=>p+(f.uv[x]-p)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let p=0;p<3;p++){let x=h*3+p;for(let g=0;g<3;g++)i.p[x*3+g]=f[p].p[g],i.c[x*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<s;g++)i.uv[x*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[p].tile[g];i.f[x]=d}},c=(h,f)=>{let d=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(_=>_.p[1]>e+1e-6),p=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let _=0;_<3;_++)i.f[h*3+_]=n;continue}let x=i.f[h*3],g=(_,E)=>a(_,E,(e-_.p[1])/(E.p[1]-_.p[1])),m=d.filter(Boolean).length,v=m===1?d.indexOf(!0):d.indexOf(!1),M=f[v],b=f[(v+1)%3],y=f[(v+2)%3],T=g(M,b),w=g(y,M);m===1?(l(h,[M,T,w],n),c([T,b,y],x),c([T,y,w],x)):(l(h,[M,T,w],x),c([T,b,y],n),c([T,y,w],n))}}function Cd(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=h[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var re=Math.PI/180;function Gt(i,t){let e=new st(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function lv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function Wr(i,t=[]){let e=i.map(([n,r])=>new $t(n,r));return xs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new $t(r,s))))}function Id(i,t,e,n,r,s,o){let a=new st(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],x=t[(d+1)%4],g=e[d],m=e[(d+1)%4],v=x[0]-p[0],M=x[1]-p[1],b=Math.hypot(v,M);if(b<1e-6)continue;let T=.8+.28*((M/b*pl[0]-v/b*pl[1]+1)/2),w=(g[0]+m[0]-p[0]-x[0])/2*(-M/b)+(g[1]+m[1]-p[1]-x[1])/2*(v/b),_=Math.max(0,Math.min(1,w/Math.max(1e-6,Math.hypot(w,r-n)))),E=Gt(s,l(n)*T).lerp(a,_),I=Gt(s,l(r)*T).lerp(a,_);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],E,I,I),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[x[0],n,x[1]],E,I,E)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[h[0],r,h[1]],a))}function Pd(i,t,e,n,r,s,o,a,l,c){let u=new st(l),h=[];for(let d=0;d<c;d++){let p=d/c*Math.PI*2;h.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let f=(d,p)=>{let x=t(d,h[p%c].s);return[x[0],h[p%c].y,x[1]]};for(let d=0;d<c;d++){let p=(d+.5)/c*Math.PI*2,x=Gt(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(f(e,d),f(n,d+1),f(n,d),x),i.tri(f(e,d),f(e,d+1),f(n,d+1),x)}for(let d of[e,n]){let p=t(d,r),x=[p[0],s,p[1]];for(let g=0;g<c;g++)i.tri(x,f(d,g),f(d,g+1),u)}}function _e(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??jt,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(o.holes??[]).map(p=>lv(p)>0?[...p].reverse():p),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Wr(t,h);if(o.topFace!==!1){let p=new st(s);for(let[x,g,m]of d){let v=f[x],M=f[g],b=f[m];i.tri([v[0],a(v),v[1]],[b[0],a(b),b[1]],[M[0],a(M),M[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=Gt(r,.55);for(let[x,g,m]of d){let v=f[x],M=f[g],b=f[m];i.tri([v[0],e,v[1]],[M[0],e,M[1]],[b[0],e,b[1]],p,p,p,void 0,c)}}for(let p of[t,...h])for(let x=0;x<p.length;x++){let g=p[x],m=p[(x+1)%p.length],v=m[0]-g[0],M=m[1]-g[1],b=Math.hypot(v,M);if(b<1e-6)continue;let T=.8+.28*((M/b*pl[0]-v/b*pl[1]+1)/2),w=a(g),_=a(m),E=Gt(r,u(e)*T),I=Gt(r,u(w)*T),D=Gt(r,u(_)*T);i.tri([g[0],e,g[1]],[g[0],w,g[1]],[m[0],_,m[1]],E,I,D,void 0,c),i.tri([g[0],e,g[1]],[m[0],_,m[1]],[m[0],e,m[1]],E,D,E,void 0,c)}}var S={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},j=Gt(5995775,.3),dt=Gt(5995775,.17),pt=Gt(3662079,.45),Ci=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=zd(n)}rotated(t,e,n){let r=n*re,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];_e(this.buf,bu(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==bu(l)&&(l.reverse(),c.reverse()),Id(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,h=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,x=t==="x"?n:e,g=(v,M)=>t==="x"?this.tf(v,M):this.tf(M,v),m=this.buf.p.length;if(Pd(this.buf,g,p-o/2,p+o/2,x,d,f,l,c,u),this.mirrored&&gl(this.buf,m),h)for(let v of[p-o/2,p+o/2])for(let M=0;M<u;M++){let b=M/u*Math.PI*2,y=(M+1)/u*Math.PI*2;this.line(g(v,x+Math.sin(b)*f),g(v,x+Math.sin(y)*f),d+Math.cos(b)*f,d+Math.cos(y)*f,h)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(_e(this.buf,bu(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],s,s,c)}tubeYZ(t,e,n,r,s=8,o=null){if(e.length<2||n<1e-4)return;let a=e.map(([h,f],d)=>{let p=e[Math.max(0,d-1)],x=e[Math.min(e.length-1,d+1)],g=x[0]-p[0],m=x[1]-p[1],v=Math.hypot(g,m)||1;return Array.from({length:s},(M,b)=>{let y=b/s*Math.PI*2,T=t+Math.cos(y)*n,w=h-m/v*Math.sin(y)*n,_=f+g/v*Math.sin(y)*n,E=this.tf(T,_);return[E[0],w,E[1]]})}),l=this.buf.p.length,c=new st(r);for(let h=0;h<a.length-1;h++)for(let f=0;f<s;f++){let d=(f+1)%s;this.buf.tri(a[h][f],a[h+1][f],a[h+1][d],c),this.buf.tri(a[h][f],a[h+1][d],a[h][d],c)}let u=(h,f)=>{let d=this.tf(t,e[h][1]),p=[d[0],e[h][0],d[1]];for(let x=0;x<s;x++){let g=(x+1)%s;this.buf.tri(p,a[h][f?g:x],a[h][f?x:g],c)}};if(u(0,!0),u(e.length-1,!1),this.mirrored&&gl(this.buf,l),o)for(let h=0;h<e.length-1;h++)this.seg(t,e[h][0],e[h][1],t,e[h+1][0],e[h+1][1],o)}seg(t,e,n,r,s,o,a=j){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,jt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function zd(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function bu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function er(i,t,e,n,r,s,o=S.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function $s(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,s,h,r,s,dt)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),f,s+.012,h+Math.min(.1,c/4),f,s+.012,pt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,pt)}}}function Ld(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);er(i,t,e,.07,.05,.05,S.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,S.fabric,S.fabricTop,.04,j),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],u-.08,n,S.fabric,S.fabricTop,j),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,S.fabric,S.fabricTop,.04,j),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,S.fabric,S.fabricTop,.04,j);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let x=s+c+d*p+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,S.cushion,S.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,S.cushion)}}function Fd(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);er(i,t,e,.08,.06,.03,S.wood,!0),i.box(o,a,.08,l,r+.06,s,S.wood,S.woodTop,j),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,S.white,S.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,S.wood,S.woodTop,j),i.box(o,a,n-.05,n,r,r+.09,S.wood,S.woodTop,dt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,S.cushion,S.fabricTop,.025,dt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,S.cushion,S.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let p=o+.1+f*d,x=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,x+m*.5,x+g-m*.5],[p+.03,p+f-.03,x,x+g],c,c+.06,S.whiteTop),i.loft([p+.03,p+f-.03,x,x+g],[p+.03+m,p+f-.03-m,x+m*.5,x+g-m*.5],c+.06,c+.12,S.whiteTop,S.whiteTop,dt)}}function cv(i,t,e,n){let r=Math.min(.46,n*.52);er(i,t,e,r-.04,.035,.02,S.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,S.wood,S.woodTop,j),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,S.cushion,S.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,S.wood,S.woodTop,j)}function uv(i,t,e,n){er(i,t,e,n-.04,.06,.05,S.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,S.wood,S.woodTop,pt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,S.body)}function hv(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,S.wood,S.woodTop,j),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,S.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,S.body,S.bodyTop,j);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,dt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,pt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,S.dark,S.dark,pt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,S.metal)}function ei(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,S.body,S.bodyTop,j),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,S.dark),$s(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function fv(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,S.wood,S.woodTop,j),i.box(t/2-.025,t/2,0,n,-e/2,e/2,S.wood,S.woodTop,j),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,S.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,S.wood,S.woodTop,dt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?S.fabric:S.cushion,S.fabricTop),l+=u+.006,c++}}}}function dv(i,t,e,n){let r=Math.max(1,Math.round(t/.6));ei(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,S.whiteTop,S.whiteTop,j)}function pv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,S.white,S.whiteTop,j);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,dt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,pt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,pt)}function mv(i,t,e,n){let r=e/2-kd;i.box(-t/2,t/2,.02,n,-e/2,r,S.body,S.bodyTop,j),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,S.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,dt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,dt))}var kd=.06;function Vd(i,t,e,n,r){let s=i.p.length;gv(i,t,e,n,r),t.mirror&&gl(i,s)}function gv(i,t,e,n,r){let s=t.rotation*re,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(b,y)=>[t.x+l*b*o-y*a,t.z+l*b*a+y*o],u=e+.05,h=e+t.h-.02,f=new st(.75,.1,.14),d=new st(S.dark),p=new st(S.accent),x=t.w/2-.006,g=(b,y,T)=>{let w=T/m,_=new st(2043212).lerp(f,w),E=new st(S.body).lerp(f,w*.8),I=Math.cos(T),D=Math.sin(T),R=(L,U)=>c(b+y*(L*I-U*D),t.d/2+L*D+U*I),C=(L,U,N,z)=>{let[B,k,H,nt]=L;i.tri([B[0],U,B[1]],[k[0],U,k[1]],[H[0],N,H[1]],z),i.tri([B[0],U,B[1]],[H[0],N,H[1]],[nt[0],N,nt[1]],z)},P=(L,U,N,z,B,k,H,nt=H)=>{let J=[R(L,k),R(U,k),R(U,B),R(L,B)];C([J[0],J[1],J[1],J[0]],N,z,nt),C([J[3],J[2],J[2],J[3]],N,z,H),C([J[0],J[3],J[3],J[0]],N,z,H),C([J[1],J[2],J[2],J[1]],N,z,H),C([J[0],J[1],J[2],J[3]],z,z,H),C([J[3],J[2],J[1],J[0]],N,N,H)};return P(0,x,u,h,-kd,0,E,_),P(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),P},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function xv(i,t,e,n){ei(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,S.dark,S.dark,j);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,S.dark,1451583,12,pt)}}function bv(i,t,e,n){ei(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,S.whiteTop,S.whiteTop,j),i.box(r/2,t/2,n-.04,n,-e/2,e/2,S.whiteTop,S.whiteTop,j),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,S.whiteTop,S.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,S.whiteTop,S.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,S.metal,S.metal,pt),i.cyl(0,-e/2+.05,.02,n,n+.28,S.metal,S.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,S.metal)}function _v(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,S.white,S.whiteTop,j),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,S.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,S.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,S.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,S.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,S.glass,S.glass,pt),i.cyl(-t/2+.04,0,.02,n,n+.12,S.metal,S.metal,8)}function vv(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,S.whiteTop,S.whiteTop,j),i.cyl(0,0,.04,.05,.052,S.metal,S.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,pt),i.seg(r,n,s,o,n,a,pt),i.seg(o,.05,a,o,n,a,pt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,S.metal,S.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,S.metal,S.metal,12,pt)}function yv(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,S.white,S.whiteTop,j),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,S.white,S.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,S.white,S.whiteTop,12,j),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,S.whiteTop)}function Mv(i,t,e,n){ei(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,S.white,S.whiteTop,j),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,S.glass,S.glass,pt),i.cyl(0,-e/2+.06,.018,n,n+.2,S.metal,S.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,S.glass,S.glass,pt)}function Sv(i,t,e,n){ei(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,S.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,S.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,S.dark,S.dark,pt)}function Dd(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,S.pot,S.pot,10,j),i.cyl(0,0,r*.08,s,n*.55,S.wood,S.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,S.plant,S.plantTop,8,a===o-1?dt:null)}}function wv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,S.fabric,S.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,j)}function Tv(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let h=e/2-o*u,f=h-o,d=s*(u+1);i.box(-t/2,t/2,0,d,f,h,S.wood,S.woodTop),i.seg(-t/2,d,h,t/2,d,h,j)}i.seg(-t/2,0,e/2,-t/2,s,e/2,j);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,dt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),pt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=s*(u+1);i.seg(l,f,h,l,f+a,h,dt)}}function Ev(i,t,e,n){let r=Math.max(6,Math.round(n/.18)),s=Math.floor(r/2),o=r-s,a=n/r,l=a*s,c=Math.min(.16,t*.12),u=(t-c)/2,h=Math.min(e*.34,Math.max(e*.22,u)),f=-e/2+h,d=e-h,p=d/s,x=d/o,g=-t/2,m=-c/2,v=c/2,M=t/2;for(let C=0;C<s;C++){let P=e/2-p*C,L=P-p,U=a*(C+1);i.box(g,m,0,U,L,P,S.white,S.whiteTop),i.seg(g,U,P,m,U,P,j)}i.box(-t/2,t/2,0,l,-e/2,f,S.white,S.whiteTop,j);for(let C=0;C<o;C++){let P=f+x*C,L=P+x,U=l+a*(C+1);i.box(v,M,0,U,P,L,S.white,S.whiteTop),i.seg(v,U,P,M,U,P,j)}let b=Math.min(.9,Math.max(.55,n*.32)),y=[g+.03,m-.03],T=[v+.03,M-.03];for(let C of y){i.seg(C,a+b,e/2-p/2,C,l+b,f,pt);for(let P=0;P<s;P+=3){let L=e/2-p*(P+.5),U=a*(P+1);i.seg(C,U,L,C,U+b,L,dt)}}let w=Math.max(1,o-3);for(let C of T){i.seg(C,l+b,f,C,l+a*w+b,f+x*(w-.5),pt);for(let P=0;P<w;P+=3){let L=f+x*(P+.5),U=l+a*(P+1);i.seg(C,U,L,C,U+b,L,dt)}}let _=y[0],E=y[1],I=T[0],D=T[1],R=-e/2+.03;i.seg(E,l+b,f,I,l+b,f,pt),i.seg(_,l+b,f,_,l+b,R,pt),i.seg(_,l+b,R,D,l+b,R,pt),i.seg(D,l+b,R,D,l+b,f,pt);for(let[C,P]of[[E,f],[I,f],[_,f],[_,R],[D,R],[D,f]])i.seg(C,l,P,C,l+b,P,dt)}function Av(i,t,e,n){er(i,t,e,.12,.03,.04,S.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,S.wood,S.woodTop,j),$s(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Rv(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,S.wood,S.woodTop,j),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,S.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,dt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,pt)}}function Cv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,S.wood,S.woodTop,j),$s(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,S.body,S.bodyTop,j),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,S.wood,S.woodTop,j);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,S.metal,S.metal)}}function Ud(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,S.wood,S.woodTop,j),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,S.wood,S.woodTop,j),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,S.cushion,S.cushion,dt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,S.wood,S.woodTop,j),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,S.wood,S.woodTop,j),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,S.cushion,S.cushion,dt))}function Iv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,S.metal,S.metal,12),i.cyl(0,0,.025,.02,n-.05,S.metal,S.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,S.metal,S.metal,12,dt),i.cyl(0,0,r,n-.05,n,S.cushion,S.fabricTop,14,j)}function Pv(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,S.metal),i.box(-.03,.03,.04,.08,-r,r,S.metal),i.cyl(0,0,.06,.02,.1,S.dark,S.dark,8),i.cyl(0,0,.025,.1,.44,S.metal,S.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,S.fabric,S.cushion,j),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,S.fabric,S.fabricTop,j),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,S.metal)}function Lv(i,t,e,n){er(i,t,e,.08,.04,.05,S.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,S.fabric,S.cushion,j)}function Fv(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,S.body,S.bodyTop,j),$s(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function Dv(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,S.body,S.bodyTop,j),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,S.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,S.dark,S.dark,pt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,pt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,pt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,pt)}function Uv(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,S.body,S.bodyTop,j),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,S.dark),$s(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,S.whiteTop,S.whiteTop,j)}function Nv(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,S.body,S.bodyTop,j),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,S.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,pt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,S.whiteTop,S.whiteTop,j)}function Nd(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,S.white,S.whiteTop,j);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,dt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,pt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(h)*a,o+Math.sin(h)*a,s,pt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,dt)}}function Ov(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),S.wood,S.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,S.wood,S.woodTop,j),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,S.white,S.whiteTop,dt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,S.whiteTop,S.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,S.wood,S.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,j);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,dt)}function Bv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,S.metal,S.metal,12),i.cyl(0,0,.05,.03,n-.04,S.wood,S.wood,8),i.cyl(0,0,r,n-.04,n,S.wood,S.woodTop,20,j)}function zv(i,t,e,n){er(i,t,e,n-.03,.04,.03,S.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,S.wood,S.woodTop,j),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,S.body,S.bodyTop,dt)}function kv(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,S.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,S.dark,S.dark,pt)}function Vv(i,t,e,n){let r=vu;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,S.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,S.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,S.white,S.whiteTop,j);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,dt)}}function Gv(i,t,e,n){let r=yu,s=e/2;i.box(-t*.34,-t*.27,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,S.metal),i.box(t*.27,t*.34,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,S.metal),i.box(-t/2,t/2,r,r+n,-e/2,s,S.white,S.whiteTop,j),i.seg(-t*.42,r+n*.82,s+.003,t*.42,r+n*.82,s+.003,dt);let o=r+n*.08,a=r+n*.27;i.box(-t*.43,t*.43,o,a,s-.018,s+.006,S.dark,S.dark,dt),i.seg(-t*.42,o+n*.04,s+.009,t*.42,a-n*.025,s+.009,pt);for(let l=1;l<8;l++){let c=-t*.4+t*.8*(l/8);i.seg(c,o+n*.025,s+.011,c+t*.018,a-n*.025,s+.011,dt)}i.seg(t*.37,r+n*.67,s+.006,t*.4,r+n*.67,s+.006,pt)}function Hv(i,t,e,n){let r=Math.min(.045,n*.12),s=Math.min(t*.42,n*.48),o=r+n*.13,a=o+s;for(let d of[-t*.32,t*.32])i.box(d-t*.055,d+t*.055,0,r,-e*.34,e*.3,S.dark);i.box(-t*.43,t*.43,r,r+n*.06,-e*.4,e*.36,S.metal,S.metal,j),i.lyingCyl("z",0,-e*.13,o,a,e*.46,s,S.body,S.bodyTop,14,j),i.lyingCyl("z",0,-e*.39,o+s*.08,a-s*.08,e*.1,s*.84,S.dark,S.metal,12,dt);for(let d=-2;d<=2;d++){let p=-e*.23+d*e*.055;i.box(-s*.54,s*.54,o+s*.43,o+s*.57,p-e*.012,p+e*.012,S.metal,S.metal)}let l=Math.min(t*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,e*.17,c,c+l,e*.22,l,S.accent,S.bodyTop,16,j),i.lyingCyl("z",0,e*.39,c+l*.34,c+l*.66,e*.22,l*.32,S.metal,S.dark,12,pt);let u=t*.16,h=e*.13,f=Math.min(t,e)*.075;i.cyl(u,h,f*1.35,c+l*.72,c+l*.82,S.accent,S.accent,12,j),i.cyl(u,h,f,c+l*.82,n,S.metal,S.metal,12,pt),i.box(-t*.11,t*.11,c+l*.58,c+l*.72,e*.285,e*.3,S.dark,S.dark,pt)}function Wv(i,t,e,n){let r=n*.68,s=Math.min(.09,t*.08);for(let o of[-t/2+s,t/2-s])for(let a of[-e/2+s,e/2-s])i.loft([o-s*.36,o+s*.36,a-s*.36,a+s*.36],[o-s/2,o+s/2,a-s/2,a+s/2],0,r-.03,S.wood,S.woodTop);i.box(-t/2,t/2,r-.08,r,-e/2,e/2,S.wood,S.woodTop,j),i.box(-t*.43,t*.43,n*.18,r-.1,e/2-.065,e/2,S.wood,S.woodTop,j);for(let o of[-t*.28,0,t*.28])i.seg(o,n*.23,e/2+.004,o,r-.16,e/2+.004,dt);i.seg(-t*.12,n*.4,e/2+.006,0,n*.52,e/2+.006,pt),i.seg(0,n*.52,e/2+.006,t*.12,n*.4,e/2+.006,pt),i.seg(t*.12,n*.4,e/2+.006,0,n*.28,e/2+.006,pt),i.seg(0,n*.28,e/2+.006,-t*.12,n*.4,e/2+.006,pt),i.cyl(0,e*.06,Math.min(t,e)*.09,r,r+n*.075,S.accent,S.woodTop,14,pt);for(let o of[-t*.035,0,t*.035])i.box(o-.006,o+.006,r+n*.06,r+n*.2,e*.05,e*.065,S.accent);for(let o of[-t*.28,t*.28])i.cyl(o,e*.02,Math.min(t,e)*.035,r,r+n*.035,S.metal,S.metal,10),i.cyl(o,e*.02,Math.min(t,e)*.017,r+n*.035,r+n*.15,S.metal,S.metal,8);i.box(-t*.18,t*.18,r+n*.04,n*.85,-e*.33,-e*.27,S.wood,S.woodTop,pt),i.box(-t*.46,t*.46,n*.875,n*.92,-e*.42,e*.36,S.wood,S.woodTop,j);for(let o of[-t*.4,t*.4])i.box(o-s/2,o+s/2,r,n*.92,-e*.36,-e*.26,S.wood,S.woodTop,j);i.loft([-t/2,t/2,-e/2,e*.42],[-t*.42,t*.42,-e*.42,e*.31],n*.92,n,S.wood,S.woodTop,j)}function Xv(i,t,e,n){let r=n*.18;i.box(-t/2,t/2,r,r+n*.14,-e/2,e/2,S.wood,S.woodTop,j),i.box(-t*.43,t*.43,r+n*.14,n*.86,-e/2,-e/2+Math.min(.05,e*.18),S.wood,S.woodTop,j);for(let s of[-t*.36,t*.36])i.box(s-.025,s+.025,0,r,-e/2,-e*.18,S.wood,S.woodTop,j),i.seg(s,n*.02,-e*.18,s,r,e*.34,j);i.loft([-t/2,t/2,-e/2,e/2],[-t*.42,t*.42,-e*.42,e*.36],n*.86,n,S.wood,S.woodTop,j),i.cyl(0,e*.08,Math.min(t,e)*.09,r+n*.14,r+n*.28,S.accent,S.woodTop,12,pt);for(let s of[-t*.03,0,t*.03])i.box(s-.005,s+.005,r+n*.25,r+n*.5,e*.075,e*.09,S.accent)}function qv(i,t,e,n){i.box(-t*.43,t*.43,0,n*.06,-e*.34,e*.34,S.dark),ei(i,t,e,n-.025,Math.max(2,Math.round(t/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-t/2+.03,r,e/2+.003,t/2-.03,r,e/2+.003,dt);for(let r of[-t*.25,t*.25])for(let s=-1;s<=1;s++)i.seg(r-t*.07,n*(.32+s*.018),e/2+.006,r+t*.07,n*(.32+s*.018),e/2+.006,dt);i.box(-t/2,t/2,n-.025,n,-e/2,e/2,S.woodTop,S.woodTop,pt)}function Yv(i,t,e,n){let r=Math.min(t*.58,e*.22,n*.42),s=t*.66,o=e*.34,a=-e*.34;for(let l of[a,o])i.lyingCyl("x",0,l,0,r,s,r,S.dark,S.metal,14,j),i.lyingCyl("x",0,l,r*.16,r*.84,s+.012,r*.46,S.metal,S.metal,12,dt);i.loft([-t*.3,t*.3,a,e*.12],[-t*.2,t*.2,-e*.18,e*.06],r*.45,n*.58,S.body,S.bodyTop,j),i.box(-t*.3,t*.3,r*.37,r*.44,-e*.08,e*.22,S.dark,S.metal,dt),i.lyingCyl("z",t*.24,a-e*.04,r*.2,r*.47,e*.4,r*.25,S.metal,S.dark,10,dt),i.pad(-t*.3,t*.3,n*.52,n*.62,-e*.25,e*.05,S.dark,S.fabricTop,.025,j),i.seg(-t*.18,n*.48,e*.02,-t*.08,n*.86,o,j),i.seg(t*.18,n*.48,e*.02,t*.08,n*.86,o,j),i.seg(-t*.19,r*.63,a,-t*.21,n*.54,-e*.12,dt),i.seg(t*.19,r*.63,a,t*.21,n*.54,-e*.12,dt),i.seg(-t*.36,n*.9,o,t*.36,n*.9,o,pt),i.box(-t*.23,t*.23,n*.72,n*.98,o-e*.07,o+e*.07,S.body,S.bodyTop,j),i.cyl(0,o+e*.075,Math.min(t,e)*.07,n*.82,n*.94,S.white,S.accent,12,pt);for(let l of[-1,1])i.seg(l*t*.22,n*.9,o,l*t*.39,n,o-e*.04,j),i.cyl(l*t*.39,o-e*.04,t*.045,n*.97,n,S.glass,S.metal,10,pt);i.seg(-t*.31,n*.66,-e*.31,t*.31,n*.66,-e*.31,j)}function $v(i,t,e,n){let r=n*.18;i.cyl(0,0,Math.min(t,e)*.115,r,n*.62,S.body,S.bodyTop,16,j),i.cyl(0,0,Math.min(t,e)*.025,n*.7,n,S.metal,S.metal,8)}function Zv(i,t,e,n){i.loft([-t*.4,t*.4,-e*.33,e*.33],[-t*.34,t*.34,-e*.28,e*.28],0,n*.045,S.body,S.metal,j),i.cyl(0,0,Math.min(t,e)*.055,n*.04,n*.62,S.metal,S.metal,10),i.box(-t*.13,t*.13,n*.06,n*.14,-e*.2,e*.2,S.body,S.bodyTop,dt);for(let a of[-t*.07,0,t*.07])i.cyl(a,e*.12,t*.018,n*.14,n*.155,S.accent,S.accent,8,pt);let r=n*.78,s=Math.min(t,n*.42)*.46,o=e*.075;i.box(-t*.085,t*.085,n*.58,r-s*.18,-e*.1,e*.015,S.body,S.bodyTop,j),i.lyingCyl("z",0,-e*.11,r-s*.3,r+s*.3,e*.24,s*.6,S.body,S.bodyTop,16,j);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,dt)}Ys(i,0,r,s,a,32),Ys(i,0,r,s*.86,a,32),Ys(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,j)}}function xl(i,t,e,n,r,s){if(e==="fan_ceiling"){let d=new Ci(i,t,(x,g)=>[x,g]),p=Math.min(n,r)*.13;for(let x of[0,120,240])d.rotated(0,0,x).loft([n*.08,n*.48,-p*.52,p*.52],[n*.12,n*.46,-p*.32,p*.32],0,s*.07,S.wood,S.woodTop,j);d.cyl(0,0,Math.min(n,r)*.14,-s*.035,s*.08,S.body,S.bodyTop,18,pt);return}let o=Math.min(n,s*.42)*.46,a=-Math.max(.006,r*.012),l=-a,c=new st(S.bodyTop),u=new st(S.body),h=(d,p)=>[Math.cos(p)*d,Math.sin(p)*d];for(let d=0;d<3;d++){let p=d/3*Math.PI*2,x=[h(o*.14,p-.12),h(o*.46,p-.34),h(o*.84,p-.16),h(o*.72,p+.22),h(o*.24,p+.34)],g=(m,v)=>[m[0],m[1],v];for(let m=1;m<x.length-1;m++)i.tri(g(x[0],l),g(x[m],l),g(x[m+1],l),c),i.tri(g(x[0],a),g(x[m+1],a),g(x[m],a),u);for(let m=0;m<x.length;m++){let v=(m+1)%x.length;i.tri(g(x[m],a),g(x[v],l),g(x[v],a),u),i.tri(g(x[m],a),g(x[m],l),g(x[v],l),u),t.seg(g(x[m],l),g(x[v],l),j,jt)}}new Ci(i,t,(d,p)=>[d,p]).lyingCyl("z",0,0,-o*.14,o*.14,r*.1,o*.28,S.body,S.bodyTop,14,pt)}function Jv(i,t,e,n){let r=Math.min(e*.88,n*.92),s=(n-r)/2;i.lyingCyl("x",0,0,s,s+r,t*.9,r,S.white,S.whiteTop,22,j);for(let o of[-t*.46,t*.46])i.lyingCyl("x",o,0,s+r*.04,s+r*.96,t*.035,r*.92,S.white,S.whiteTop,18,dt);for(let o of[-t*.28,t*.28])i.box(o-.025,o+.025,0,s+r*.25,-e*.42,-e*.28,S.metal,S.metal);for(let[o,a]of[[-t*.2,S.accent],[t*.2,S.fabricTop]])i.cyl(o,e*.05,Math.min(t,e)*.025,0,s+r*.18,a,a,10,dt),i.cyl(o,e*.05,Math.min(t,e)*.04,s+r*.14,s+r*.2,S.metal,S.metal,10);i.box(t*.18,t*.4,s+r*.38,s+r*.68,e*.43,e*.48,S.body,S.glass,pt),i.seg(t*.24,s+r*.53,e*.485,t*.35,s+r*.53,e*.485,pt)}function Kv(i,t,e,n){let r=Math.min(.035,t*.025),s=t/2-r;for(let o of[-1,1]){i.box(o*s-r,o*s+r,0,n,-e/2,-e/2+r*2,S.metal,S.metal,j),i.box(o*s-r,o*s+r,0,n,e/2-r*2,e/2,S.metal,S.metal,j);for(let a of[-e/2+r,e/2-r])i.box(o*s-r*2.2,o*s+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,S.dark,S.dark)}for(let o=0;o<7;o++){let a=-e/2+r+(e-2*r)*o/6;i.box(-t/2+r,t/2-r,n-r*2,n,a-r/2,a+r/2,S.metal,S.metal,dt)}i.seg(-t/2,.05,-e/2,t/2,n-.05,-e/2,dt),i.seg(t/2,.05,-e/2,-t/2,n-.05,-e/2,dt),i.seg(-t/2,.05,e/2,t/2,n-.05,e/2,dt),i.seg(t/2,.05,e/2,-t/2,n-.05,e/2,dt)}function Qv(i,t,e,n){let r=Math.min(.045,t*.04);for(let o of[-t/2+r,t/2-r])i.box(o-r,o+r,0,n*.64,-e/2+r,e/2-r,S.wood,S.woodTop,j);for(let o of[n*.18,n*.4])i.box(-t/2+r,t/2-r,o-r/2,o+r/2,-e/2+r,e/2-r,S.wood,S.woodTop,dt);let s=Math.max(2,Math.round(t/.35));for(let o=1;o<s;o++)i.seg(-t/2+t*o/s,n*.08,e/2+.003,-t/2+t*o/s,n*.58,e/2+.003,dt);i.pad(-t/2,t/2,n*.62,n,-e/2,e/2,S.cushion,S.fabricTop,.025,j)}function jv(i,t,e,n){let r=Math.min(.05,t*.035);i.box(-t/2,t/2,0,r,-e/2,e/2,S.wood,S.woodTop,j),i.box(-t/2,t/2,n-r,n,-e/2,e/2,S.wood,S.woodTop,j);let s=Math.max(5,Math.round(t/.22));for(let o=0;o<s;o++){let a=-t/2+t*(o+.5)/s;i.box(a-r/2,a+r/2,r,n-r,-e/2,e/2,o%2?S.wood:S.body,S.woodTop,dt)}}function ty(i,t,e,n){i.box(-t*.16,t*.16,n*.42,n,-e/2,-e*.18,S.metal,S.metal,j),i.loft([-t/2,t/2,-e/2,e/2],[-t*.18,t*.18,-e/2,-e*.1],0,n*.48,S.metal,S.whiteTop,j),i.box(-t*.4,t*.4,0,n*.06,e*.18,e/2,S.dark,S.dark,pt)}function ey(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,S.body,S.bodyTop,j),i.box(-t*.4,t*.18,n*.17,n*.82,e/2,e/2+.006,S.dark,S.glass,pt),i.cyl(t*.34,e/2+.008,Math.min(t,n)*.055,n*.58,n*.69,S.accent,S.accent,10,pt),i.seg(t*.28,n*.34,e/2+.009,t*.4,n*.34,e/2+.009,dt)}function ny(i,t,e,n){let r=n*.8,s=e/2;i.box(-t*.46,t*.46,.025,r,-e/2,s,S.white,S.whiteTop,j),i.box(-t*.48,t*.48,0,.035,-e*.44,e*.44,S.dark,S.dark),i.box(-t*.42,t*.42,.055,r-.035,s,s+.012,S.white,S.whiteTop,j),i.seg(-t*.4,r*.28,s+.014,t*.4,r*.28,s+.014,dt),i.seg(-t*.28,r*.58,s+.015,t*.28,r*.58,s+.015,pt),i.seg(-t*.2,r*.62,s+.015,t*.2,r*.62,s+.015,dt),i.box(-t/2,t/2,r-.025,r,-e/2,e/2,S.white,S.whiteTop,j);let o=Math.min(.012,t*.03),a=t*.1,l=-e*.16,c=e*.08,u=6718637;i.cyl(a,l,o*1.55,r,r+o*1.8,u,u,12,j),i.cyl(a,c,t*.16,r,r+.01,S.whiteTop,S.whiteTop,18,dt),i.seg(a-t*.1,r+.012,c,a+t*.1,r+.012,c,dt),i.seg(a,r+.012,c-e*.11,a,r+.012,c+e*.11,dt);let h=n*.925,f=n*.055,d=(l+c)/2,p=(c-l)/2,x=[[r+o,l],[h,l]];for(let g=1;g<=8;g++){let m=Math.PI-Math.PI*g/8;x.push([h+Math.sin(m)*f,d+Math.cos(m)*p])}x.push([n*.89,c]),i.tubeYZ(a,x,o,u,10),i.cyl(a,c,o*1.25,n*.89-o,n*.905,S.dark,u,10,dt),i.lyingCyl("x",a+t*.055,l,r+o*1.6,r+o*2.5,t*.15,o*.9,S.dark,u,8)}function iy(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,S.white,S.whiteTop,Math.min(.04,t*.1),j);let r=e/2+.006;i.cyl(0,e/2,t*.095,n*.69,n*.705,S.dark,S.dark,18,pt);for(let s=0;s<7;s++){let o=n*(.16+s*.055);i.seg(-t*.34,o,r,t*.34,o,r,dt)}for(let s=-3;s<=3;s++)i.seg(s*t*.085,n+.003,-e*.27,s*t*.085,n+.003,e*.22,dt)}function ry(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r,n*.06,n*.9,S.dark,S.fabricTop,18,j),i.cyl(0,0,r*.94,n*.9,n,S.dark,S.dark,18,pt),i.cyl(0,0,r*.72,n,n+.006,S.dark,S.dark,18,dt);for(let s of[-t*.12,t*.12])i.cyl(s,0,t*.014,n+.007,n+.01,S.white,S.white,8)}function sy(i,t,e,n){i.box(-t*.28,t*.28,1.85,1.85+n*.7,-e/2,-e/2+e*.12,S.white,S.whiteTop,j),i.box(-t*.08,t*.08,1.85+n*.3,1.85+n*.45,-e/2+e*.1,0,S.metal,S.metal,dt),i.lyingCyl("z",0,e*.16,1.85+n*.17,1.85+n*.78,e*.58,n*.58,S.white,S.whiteTop,14,j),i.lyingCyl("z",0,e*.47,1.85+n*.28,1.85+n*.67,e*.08,n*.38,S.dark,S.dark,16,pt),i.lyingCyl("z",0,e*.515,1.85+n*.38,1.85+n*.57,e*.025,n*.18,S.accent,S.dark,14)}function oy(i,t,e,n){let s=e/2;i.pad(-t/2,t/2,.95,.95+n,-e/2,s,S.dark,S.metal,Math.min(.018,t*.12),j);for(let o=0;o<3;o++)for(let a=0;a<3;a++){let l=(a-1)*t*.22,c=.95+n*(.7-o*.105);i.seg(l-t*.025,c,s+.005,l+t*.025,c,s+.005,pt)}i.cyl(0,s,t*.12,.95+n*.22,.95+n*.235,S.accent,S.dark,14,pt),i.lyingCyl("x",t*.22,s+e*.12,.95+n*.31,.95+n*.4,t*.75,n*.085,S.metal,S.metal,10,j)}function ay(i,t,e,n){let r=n*.96;i.lyingCyl("x",0,-e*.18,r,n,t,e*.16,S.metal,S.metal,10,j),i.box(-t*.06,t*.06,r-n*.055,r+n*.015,-e*.28,e*.02,S.dark,S.dark,pt);let s=t*.12,o=6;for(let a of[-1,1]){let l=a<0?-t/2:s,u=((a<0?-s:t/2)-l)/o;for(let h=0;h<o;h++){let f=l+h*u,d=h%2?e*.12:-e*.04;i.box(f,f+u*.82,n*.04,r,d-e*.18,d+e*.18,S.fabric,S.fabricTop,h===0||h===o-1?j:null)}}}function ly(i,t,e,n){let r=Math.max(.42,Math.min(t,e)*.46);i.box(-t/2,t/2,0,n-.04,-e/2,-e/2+r,S.body,S.bodyTop,j),i.box(-t/2,-t/2+r,0,n-.04,-e/2+r,e/2,S.body,S.bodyTop,j),i.box(-t/2,t/2,n-.04,n,-e/2,-e/2+r,S.whiteTop,S.whiteTop,pt),i.box(-t/2,-t/2+r,n-.04,n,-e/2+r,e/2,S.whiteTop,S.whiteTop,pt),i.seg(-t/2+r,.08,-e/2+r,-t/2+r,n-.08,-e/2+r,dt)}function cy(i,t,e,n){let r=Math.min(.76,n*.52);i.box(-t/2,t/2,r-.06,r,-e/2,e/2,S.wood,S.woodTop,j);for(let s of[-t/2+.05,t/2-.05])i.box(s-.025,s+.025,0,r-.06,-e/2+.04,e/2-.04,S.wood);i.box(-t*.32,t*.32,r+.12,n,-e/2,-e/2+.025,S.glass,S.glass,pt),i.box(-t*.2,t*.2,r-.01,r+.09,-e*.1,e*.18,S.body,S.bodyTop,j)}function uy(i,t,e,n){let r=Math.min(.045,t*.06);i.box(-t/2,t/2,n*.24,n*.32,-e/2,e/2,S.wood,S.woodTop,j),i.pad(-t/2+r,t/2-r,n*.32,n*.42,-e/2+r,e/2-r,S.white,S.whiteTop,.025);for(let s of[-e/2,e/2]){for(let o=0;o<7;o++){let a=-t/2+r+(t-2*r)*o/6;i.box(a-r/2,a+r/2,n*.3,n,s-r/2,s+r/2,S.wood,S.woodTop,dt)}i.box(-t/2,t/2,n-r,n,s-r,s+r,S.wood,S.woodTop,j)}for(let s of[-t/2,t/2])i.box(s-r,s+r,0,n,-e/2,e/2,S.wood,S.woodTop,j)}function hy(i,t,e,n){let r=Math.min(.9,e*.53),s=Math.min(.9,t*.38),o=n*.52;i.pad(-t/2,t/2,.08,o,-e/2,-e/2+r,S.fabric,S.fabricTop,.04,j),i.pad(-t/2,-t/2+s,.08,o,-e/2+r,e/2,S.fabric,S.fabricTop,.04,j),i.box(-t/2,t/2,o,n,-e/2,-e/2+Math.min(.2,r*.25),S.fabric,S.fabricTop,j),i.box(-t/2,-t/2+Math.min(.2,s*.25),o,n,-e/2+r,e/2,S.fabric,S.fabricTop,j),i.seg(-t/2+s,o+.01,-e/2+r*.1,-t/2+s,o+.01,-e/2+r*.9,dt)}function fy(i,t,e,n){let r=n*.5;i.pad(-t/2,t/2,.08,r,-e/2+e*.12,e/2,S.fabric,S.fabricTop,.04,j),i.pad(-t/2+.05,t/2-.05,r,r+.1,-e/2+e*.3,e/2-.04,S.cushion,S.fabricTop,.03,dt),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,S.fabric,S.fabricTop,j),i.seg(0,r+.105,-e*.05,0,r+.105,e/2-.06,dt)}function dy(i,t,e,n){let r=Math.min(.025,Math.max(.01,e*.35));i.box(-t/2,t/2,0,.025,-r,r,S.metal,S.metal,pt);for(let s of[-t/2,0,t/2])i.box(s-r,s+r,0,n,-r,r,S.metal,S.metal,pt);i.seg(-t/2,n,0,t/2,n,0,pt),i.seg(t*.32,n*.42,r+.003,t*.32,n*.62,r+.003,j)}function py(i,t,e,n){let r=Math.min(.07,t*.035);for(let a of[-t/2+r,t/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,S.metal,S.metal,j),i.box(a-e*.25,a+e*.25,0,r,-e*.36,e*.36,S.metal,S.metal,j);let s=-t/2+r,o=t/2-r;i.loft([s,-t*.14,-e*.34,e*.34],[s+.08,-t*.14,-e*.3,e*.3],n*.36,n*.42,S.fabric,S.fabricTop,dt),i.loft([-t*.14,t*.14,-e*.34,e*.34],[-t*.13,t*.13,-e*.3,e*.3],n*.25,n*.31,S.fabric,S.fabricTop,dt),i.loft([t*.14,o,-e*.34,e*.34],[t*.14,o-.08,-e*.3,e*.3],n*.36,n*.42,S.fabric,S.fabricTop,dt),i.seg(s,n*.8,0,-t*.14,n*.42,0,j),i.seg(t*.14,n*.42,0,o,n*.8,0,j)}function my(i,t,e,n){let r=Math.min(t,e);i.cyl(0,0,r*.08,0,n-.07,S.metal,S.metal,12),i.cyl(0,0,r*.22,n-.07,n,S.body,S.bodyTop,16,j);for(let[s,o]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(s*t,o*e,r*.065,0,n*.52,S.metal,S.metal,10),i.cyl(s*t,o*e,r*.105,n*.52,n*.61,S.body,S.bodyTop,12,dt)}function gy(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r*.84,0,n*.08,S.metal,S.metal,12,j),i.cyl(0,0,r,n*.08,n*.92,S.metal,S.whiteTop,20,j);for(let s of[n*.28,n*.5,n*.72])for(let o=0;o<24;o++){let a=o/24*Math.PI*2,l=(o+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,s,Math.sin(a)*r,Math.cos(l)*r,s,Math.sin(l)*r,dt)}i.cyl(0,0,r*.18,n*.92,n,S.dark,S.bodyTop,12,dt)}function Od(i,t,e,n,r){let s=Math.min(.12,t*.05);for(let l of[-t/2+s/2,t/2-s/2])i.box(l-s/2,l+s/2,0,n,-e/2,e/2,S.body,S.bodyTop,j);let o=r?2:Math.max(3,Math.round(t/.4)),a=t-2*s;for(let l=0;l<o;l++){let c=-a/2+a*l/o+s*.25,u=-a/2+a*(l+1)/o-s*.25;i.box(c,u,n*.08,n*.92,-e*.18,e*.18,r?S.metal:S.wood,r?S.metal:S.woodTop,dt),r&&i.seg(l===0?u:c,n*.46,e*.2,l===0?u-.08:c+.08,n*.46,e*.2,pt)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-e/2,e/2,S.wood,S.woodTop,j)}function Ys(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,pt)}}function xy(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,S.dark,S.body,j),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,pt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,S.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,S.white,S.whiteTop,j),Ys(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,pt);for(let a of[-1,1])Ys(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,S.white,S.whiteTop,j),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,S.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,pt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,dt)}function by(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,S.dark,S.body,j),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,S.dark,S.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,pt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,dt)}function _y(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,S.dark,S.body,j);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,pt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,S.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,S.dark,S.body)}function vy(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,S.white,S.whiteTop,j),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,S.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,S.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,pt)}function yy(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,S.white,S.whiteTop,j),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,pt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,S.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,S.dark,S.body,j),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,pt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,S.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,S.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,S.white,S.whiteTop,j);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,pt)}}var vu=.12,yu=1.9;function Mu(i,t){let e=My(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function My(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=nd(i.type);if(s){let l=t?fn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?fn(t,i)-Os(i):0,a=Sy(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Sy(i,t,e,n,r){if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?fn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:vu+.02,y1:vu+n-.02,z:e/2+.004};if(i.type==="air_conditioner")return{x0:-t*.43,x1:t*.43,y0:yu+n*.08,y1:yu+n*.27,z:e/2+.008};if(i.type==="water_pump")return{x0:-t*.1,x1:t*.1,y0:n*.56,y1:n*.65,z:e*.3+.004};if(i.type==="water_heater"){let s=Math.min(e*.88,n*.92),o=(n-s)/2;return{x0:t*.18,x1:t*.4,y0:o+s*.38,y1:o+s*.68,z:e*.48+.006}}if(i.type==="range_hood")return{x0:-t*.4,x1:t*.4,y0:.005,y1:n*.06,z:e/2+.003};if(i.type==="microwave")return{x0:-t*.4,x1:t*.18,y0:n*.17,y1:n*.82,z:e/2+.008};if(i.type==="water_purifier")return{x0:-t*.28,x1:t*.28,y0:n*.8*.56,y1:n*.8*.64,z:e/2+.016};if(i.type==="air_purifier")return{x0:-t*.11,x1:t*.11,y0:n*.66,y1:n*.74,z:e/2+.008};if(i.type==="smart_speaker")return{x0:-t*.42,x1:t*.42,y0:n*.9,y1:n+.008,z:e*.05};if(i.type==="security_camera")return{x0:-t*.12,x1:t*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:e*.53};if(i.type==="smart_lock")return{x0:-t*.36,x1:t*.36,y0:.95+n*.43,y1:.95+n*.78,z:e/2+.006};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function wy(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new st(1-r,1-r,1-r),a=new st(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let p=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[p]),o,a,a),i.tri(h(c[d]),h(u[p]),h(c[p]),o,a,o)}zd(t)&&gl(i,f)}function bl(i,t,e,n,r=0){Ty(i,t,e,n,r)}function gl(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function Ty(i,t,e,n,r){let s=De(n.type)?0:r-Os(n);if(De(n.type)||Math.abs(s)<.001)return Bd(i,t,e,n,r);let o=i.p.length,a=t.p.length,l=e.p.length;Bd(i,t,r<.05?e:new oe,n,0);for(let c=o+1;c<i.p.length;c+=3)i.p[c]+=s;for(let c=a+1;c<t.p.length;c+=3)t.p[c]+=s;for(let c=l+1;c<e.p.length;c+=3)e.p[c]+=s}function Bd(i,t,e,n,r){let s=n.rotation*re,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(p,x)=>[n.x+l*p*o-x*a,n.z+l*p*a+x*o],u=new Ci(i,t,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"altar":Wv(u,h,f,d);break;case"altar_wall":Xv(u,h,f,d);return;case"shoe_cabinet":qv(u,h,f,d);break;case"motorbike":Yv(u,h,f,d);break;case"fan_ceiling":$v(u,h,f,d);return;case"fan_floor":Zv(u,h,f,d);break;case"water_heater":Jv(u,h,f,d);return;case"drying_rack":Kv(u,h,f,d);break;case"shoe_bench":Qv(u,h,f,d);break;case"room_divider":jv(u,h,f,d);break;case"range_hood":ty(u,h,f,d);return;case"microwave":if(ey(u,h,f,d),r>.05)return;break;case"water_purifier":ny(u,h,f,d);break;case"air_purifier":iy(u,h,f,d);break;case"smart_speaker":ry(u,h,f,d);break;case"security_camera":sy(u,h,f,d);return;case"smart_lock":oy(u,h,f,d);return;case"smart_curtain":ay(u,h,f,d);return;case"kitchen_corner":ly(u,h,f,d);break;case"vanity":cy(u,h,f,d);break;case"crib":uy(u,h,f,d);break;case"bed_single":case"bed_double":Fd(u,h,f,d);break;case"sofa_l":hy(u,h,f,d);break;case"sofa_bed":fy(u,h,f,d);break;case"shower_screen":dy(u,h,f,d);break;case"hammock":py(u,h,f,d);break;case"stone_table_set":my(u,h,f,d);break;case"planter_large":Dd(u,h,f,d);break;case"water_tank":gy(u,h,f,d);break;case"gate":Od(u,h,f,d,!0);break;case"fence":Od(u,h,f,d,!1);break;case"sofa":Ld(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":Ld(u,h,f,d,1);break;case"bed":Fd(u,h,f,d);break;case"chair":cv(u,h,f,d);break;case"table":uv(u,h,f,d);break;case"desk":hv(u,h,f,d);break;case"nightstand":ei(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,dt);break;case"wardrobe":ei(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":fv(u,h,f,d);break;case"kitchen":dv(u,h,f,d);break;case"fridge":pv(u,h,f,d);break;case"fridge_smart":mv(u,h,f,d);break;case"stove":xv(u,h,f,d);break;case"sink":bv(u,h,f,d);break;case"bathtub":_v(u,h,f,d);break;case"shower":vv(u,h,f,d);break;case"wc":yv(u,h,f,d);break;case"washbasin":Mv(u,h,f,d);break;case"tv_board":Sv(u,h,f,d);break;case"plant":Dd(u,h,f,d);break;case"rug":wv(u,h,f);return;case"stairs":Tv(u,h,f,d);break;case"stairs_landing":Ev(u,h,f,d);break;case"stairwell":return;case"sideboard":Av(u,h,f,d);break;case"dresser":Rv(u,h,f,d);break;case"tall_cabinet":ei(u,h,f,d,1,d*.5);break;case"coat_rack":Cv(u,h,f,d);break;case"bench":Ud(u,h,f,d,!1);break;case"corner_bench":Ud(u,h,f,d,!0);break;case"bar_stool":Iv(u,h,f,d);break;case"office_chair":Pv(u,h,f,d);break;case"stool":Lv(u,h,f,d);break;case"kitchen_wall":Fv(u,h,f,d);return;case"kitchen_tall":Dv(u,h,f,d);break;case"island":Uv(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,S.whiteTop,S.whiteTop,j);return;case"dishwasher":Nv(u,h,f,d);break;case"washer":Nd(u,h,f,d,!1);break;case"dryer":Nd(u,h,f,d,!0);break;case"bunk_bed":Ov(u,h,f,d);break;case"table_round":Bv(u,h,f,d);break;case"coffee_table":zv(u,h,f,d);break;case"tv_wall":kv(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],dt);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,j),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,j);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,S.white,S.whiteTop,j),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,S.accent);return;case"radiator":Vv(u,h,f,d);return;case"air_conditioner":Gv(u,h,f,d);return;case"water_pump":Hv(u,h,f,d);break;case"inverter":xy(u,h,f,d,n.variant??null);return;case"grid_point":by(u,h,f,d);break;case"wallbox":_y(u,h,f,d);return;case"meter":vy(u,h,f,d);return;case"home_battery":if(yy(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let p=De(n.type);if(p){if(Su(u,p,h,f,d,r,null),r>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,S.body,S.bodyTop,j)}}wy(e,c,h,f,n.type==="plant"?.35:.5)}function _u(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=S;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Su(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,h=u.glow&&o!==null,f=h?o:_u(u.color,!1)??S.body,d=h?o:_u(u.top,!1)??_u(u.color,!0)??Gt(f,1.25).getHex(),p=s+u.y*r,x=s+Math.min(r,(u.y+u.h)*r),g=u.edges==="glow"?ji:u.edges==="faint"?dt:u.edges?j:null,m=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))m.lyingCyl(u.axis,u.x*e,u.z*n,p,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,f,d,14,g);else if(u.shape==="cyl")m.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,p,x,f,d,14,g);else if(u.shape==="loft"){let v=u.tx??u.x,M=u.tz??u.z,b=u.tw??u.w,y=u.td??u.d;m.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-b/2)*e,(v+b/2)*e,(M-y/2)*n,(M+y/2)*n],p,x,f,d,g)}else m.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,p,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,f,d,g)}}function Gd(i,t,e,n,r,s){let o=s*re,a=Math.cos(o),l=Math.sin(o),c=(p,x)=>[e+p*a-x*l,r+p*l+x*a],u=new Ci(i,new Ve,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,S.accent,S.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,S.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function wu(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*re,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];Su(new Ci(i,new Ve,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function _l(i,t,e,n,r){let s=e.rotation*re,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*o-h*a,e.z+l*u*a+h*o];Su(new Ci(i,new Ve,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var Ey={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},canopy:{color:2503761,side:1581626,edge:3662079,edgeAlpha:.5},veranda:{color:14014952,side:6779274,edge:3662079,edgeAlpha:.58}},Hd={wood:3155231,oak:4863784,tiles:2634057,carpet:2434106,stone:3160138,concrete:2567482};function Wd(i,t){let e=i.roof_style==="glass"?3234418:i.roof_style==="tile"?2502730:t.color,n=i.roof_style==="glass"?2112592:i.roof_style==="tile"?1514797:t.side;return{roof:e,under:n,floor:Hd[i.floor_material??"tiles"]??Hd.tiles}}function qd(i,t){return Ji(i)+(t.offset??0)+(Cn(t.type)??(Qn(t.type)?.01:Vr[t.type]))}function nr(i){return Qi(i)>=0?i:[...i].reverse()}function Ay(i,t){let e=i[t];if(Qn(e.type)||e.type==="pool")return[];let n=[];for(let r=t+1;r<i.length;r++){let s=i[r];!s.cut||s.points.length<3||s.points.every(o=>ce(o,e.points))&&n.push(nr(s.points))}return n}function Xr(i,t,e,n,r,s,o,a){let l=e[0]-t[0],c=e[1]-t[1],u=Math.hypot(l,c);if(u<1e-6)return;let h=-c/u*n*.5,f=l/u*n*.5;_e(i,nr([[t[0]+h,t[1]+f],[e[0]+h,e[1]+f],[e[0]-h,e[1]-f],[t[0]-h,t[1]-f]]),r,s,o,a,{aoFrom:r-1})}function Xd(i,t,e,n,r,s){let o=new st(s),a=new st(Gt(r,.72)),l=new st(r);for(let[c,u,h]of Wr(t)){let f=t[c],d=t[u],p=t[h],x=[f[0],e(f[0],f[1]),f[1]],g=[d[0],e(d[0],d[1]),d[1]],m=[p[0],e(p[0],p[1]),p[1]],v=[x[0],x[1]-n,x[2]],M=[g[0],g[1]-n,g[2]],b=[m[0],m[1]-n,m[2]];i.tri(x,m,g,o,o,o,void 0,jt),i.tri(v,M,b,a,a,a,void 0,jt)}for(let c=0;c<t.length;c++){let u=t[c],h=t[(c+1)%t.length],f=[u[0],e(u[0],u[1]),u[1]],d=[h[0],e(h[0],h[1]),h[1]],p=[f[0],f[1]-n,f[2]],x=[d[0],d[1]-n,d[2]];i.tri(p,f,d,l,l,l,void 0,jt),i.tri(p,d,x,l,l,l,void 0,jt)}}function Yd(i,t,e){let n=Ji(e),r=e.outdoor??[],s=[];return r.forEach((o,a)=>{if(o.points.length<3)return;let l=i.count,c=n+(o.offset??0),u=(v,M)=>c-Bs(o,v,M),h=c-(o.type==="pool"?0:o.slope??0),f=Qn(o.type)&&o.height?o.height:Vr[o.type],d={...Ey[o.type],top:f},p=nr(o.points),x=Gt(d.edge,d.edgeAlpha),g=o.open&&(o.type==="fence"||o.type==="pergola"||o.type==="canopy"||o.type==="veranda")?p.length-1:-1,m=v=>{if(o.outline!==!1)for(let M=0;M<p.length;M++){if(M===g)continue;let b=p[M],y=p[(M+1)%p.length];t.seg([b[0],v(b[0],b[1]),b[1]],[y[0],v(y[0],y[1]),y[1]],x,jt)}};switch(o.type){case"pool":{let v=new st(d.color);for(let[b,y,T]of Wr(p)){let w=p[b],_=p[y],E=p[T];i.tri([w[0],c+d.top,w[1]],[E[0],c+d.top,E[1]],[_[0],c+d.top,_[1]],v,v,v,void 0,jt)}let M=new st(d.side);for(let b=0;b<p.length;b++){let y=p[b],T=p[(b+1)%p.length];i.tri([T[0],c+d.top,T[1]],[T[0],c+.06,T[1]],[y[0],c+.06,y[1]],M,M,M,void 0,jt),i.tri([T[0],c+d.top,T[1]],[y[0],c+.06,y[1]],[y[0],c+d.top,y[1]],M,M,M,void 0,jt)}m(()=>c+.06),m(()=>c+d.top+.005);break}case"fence":{for(let v=0;v<p.length;v++){if(v===g)continue;let M=p[v],b=p[(v+1)%p.length],y=Math.hypot(b[0]-M[0],b[1]-M[1]),T=Math.max(1,Math.round(y/2)),w=g>=0&&v===g-1?T:T-1;for(let _=0;_<=w;_++){let E=_/T,I=M[0]+(b[0]-M[0])*E,D=M[1]+(b[1]-M[1])*E,R=u(I,D);_e(i,nr([[I-.04,D-.04],[I+.04,D-.04],[I+.04,D+.04],[I-.04,D+.04]]),R,R+d.top,d.side,d.color)}for(let _ of[.35,.85])t.seg([M[0],u(M[0],M[1])+_*d.top,M[1]],[b[0],u(b[0],b[1])+_*d.top,b[1]],x,jt)}break}case"pergola":{let v=d.top;for(let[M,b]of p){let y=u(M,b);_e(i,nr([[M-.06,b-.06],[M+.06,b-.06],[M+.06,b+.06],[M-.06,b+.06]]),y,y+v,d.side,d.color)}for(let M=0;M<p.length;M++){if(M===g)continue;let b=p[M],y=p[(M+1)%p.length],T=u(b[0],b[1])+v;if(Xr(i,b,y,.12,T-.16,T,d.side,d.color),o.bracing){let w=u(b[0],b[1]),_=u(y[0],y[1]);t.seg([b[0],w+.25,b[1]],[y[0],_+v-.25,y[1]],x,jt),t.seg([y[0],_+.25,y[1]],[b[0],w+v-.25,b[1]],x,jt)}}if(ld(p)){let M=cd(p),b=M.x1-M.x0,y=M.z1-M.z0,T=b>=y,w=T?b:y,_=Math.max(1,Math.round(w/.6));for(let E=1;E<_;E++){let I=(T?M.x0:M.z0)+w*E/_,D=T?[I,M.z0+.06]:[M.x0+.06,I],R=T?[I,M.z1-.06]:[M.x1-.06,I],C=u(D[0],D[1])+v;Xr(i,D,R,.06,C-.04,C+.08,d.side,d.color)}}m((M,b)=>u(M,b)+v+.004);break}case"canopy":{let v=d.top,M=Wd(o,d),b=c+(Cn(o.type)??0),y=(w,_)=>b+v-Bs(o,w,_),T=Math.min(.4,Math.max(.04,(o.column_size??.12)/2));_e(i,p,c-.06,b,d.side,M.floor,{aoFrom:c-.06});for(let[w,_]of p){let E=y(w,_)-.08;_e(i,nr([[w-T,_-T],[w+T,_-T],[w+T,_+T],[w-T,_+T]]),b,E,M.under,M.roof)}for(let w=0;w<p.length;w++){if(w===g)continue;let _=p[w],E=p[(w+1)%p.length],I=(y(_[0],_[1])+y(E[0],E[1]))/2;Xr(i,_,E,.12,I-.18,I-.08,M.under,M.roof)}Xd(i,p,y,.08,M.under,M.roof),m((w,_)=>y(w,_)+.004);break}case"veranda":{let v=d.top,M=Wd(o,d),b=c+(Cn(o.type)??0),y=(L,U)=>b,T=(L,U)=>b+v-Bs(o,L,U),w=Math.min(1.1,v*.48),_=(L,U,N,z,B,k=d.side,H=d.color)=>_e(i,nr([[L-N,U-N],[L+N,U-N],[L+N,U+N],[L-N,U+N]]),z,B,k,H);if(_e(i,p,c-.12,b,d.side,M.floor,{aoFrom:c-.12}),o.railing!==!1)for(let L=0;L<p.length;L++){if(L===g)continue;let U=p[L],N=p[(L+1)%p.length],z=Math.hypot(N[0]-U[0],N[1]-U[1]),B=Math.max(1,Math.ceil(z/.22)),k=b;Xr(i,U,N,.07,k+.3,k+.38,M.under,M.roof),Xr(i,U,N,.09,k+w-.09,k+w,M.under,M.roof);for(let H=0;H<=B;H++){let nt=H/B,J=U[0]+(N[0]-U[0])*nt,et=U[1]+(N[1]-U[1])*nt,lt=y(J,et);_(J,et,.018,lt+.08,lt+w-.07,M.under,M.roof)}}let E=0;if(g>=0){let L=p[g],U=p[(g+1)%p.length],N=(L[0]+U[0])/2,z=(L[1]+U[1])/2,B=-1;for(let k=0;k<p.length;k++){if(k===g)continue;let H=p[k],nt=p[(k+1)%p.length],J=(H[0]+nt[0])/2-N,et=(H[1]+nt[1])/2-z,lt=J*J+et*et;lt>B&&([E,B]=[k,lt])}}else{let L=-1;for(let U=0;U<p.length;U++){let N=p[U],z=p[(U+1)%p.length],B=Math.hypot(z[0]-N[0],z[1]-N[1]);B>L&&([E,L]=[U,B])}}let I=p[E],D=p[(E+1)%p.length],R=Math.min(12,Math.max(0,Math.round(o.columns??2))),C=Math.min(.4,Math.max(.04,(o.column_size??.32)/2));for(let L=0;L<R;L++){let U=R===1?.5:L/(R-1),N=I[0]+(D[0]-I[0])*U,z=I[1]+(D[1]-I[1])*U,B=y(N,z);_(N,z,C*1.375,B,B+.28,M.under,M.roof),_(N,z,C,B+.2,T(N,z)-.2,M.under,M.roof),_(N,z,C*1.375,T(N,z)-.28,T(N,z),M.under,M.roof),t.seg([N,B+.28,z],[N,T(N,z)-.28,z],x,jt)}let P=(T(I[0],I[1])+T(D[0],D[1]))/2;Xr(i,I,D,Math.max(.2,C*2.6),P-.28,P,M.under,M.roof),Xd(i,p,T,.1,M.under,M.roof),m((L,U)=>y(L,U)+(o.railing===!1?.004:w+.004));break}default:{let v=(b,y)=>u(b,y)+d.top,M=Ay(r,a);if(_e(i,p,h,o.slope?v:c+d.top,d.side,d.color,{aoFrom:h,holes:M}),m((b,y)=>v(b,y)+.004),o.type==="hedge"&&m((b,y)=>u(b,y)+.004),o.outline!==!1)for(let b of M)for(let y=0;y<b.length;y++){let T=b[y],w=b[(y+1)%b.length];t.seg([T[0],v(T[0],T[1])+.004,T[1]],[w[0],v(w[0],w[1])+.004,w[1]],x,jt)}}}i.count>l&&s.push({id:o.id,start:l,end:i.count})}),s}var yl=Math.PI/180,Ry=1.13,Cy=1.72,Tu=.025,ir=.07,$d=.25;function Zd(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=Hs(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,u=-o/l,h=Math.min(n.height,s.height??n.height),f=(d,p,x,g)=>e.push({key:d,section:null,side:"top",flat:!1,o:p,eu:x,es:[0,1,0],n:g,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&f(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Eu="ground";function Au(i){return[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??i.floors[0]??null}function Jd(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Au(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:ul(s,o,a)):t.base??0;return{key:Eu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function Iy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function qr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>Py(v,dl(i,v,v.overhang??t.overhang)));let e=Iy(i);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(M=>M[0])),r=e.rooms.flatMap(v=>v.points.map(M=>M[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[Kd("main",null,o,l,a,c,u+$d)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*yl),x=(v,M,b)=>f?[v,u+b,(l+c)/2+M]:[(o+a)/2+M,u+b,v],[g,m]=f?[o,a]:[l,c];return[-1,1].map(v=>vl(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",x(g,v*d,0),x(m,v*d,0),x(g,0,p),t.pitch,()=>[0,m-g]))}function Py(i,t){let e=Vn(i),n=In(i),r=(x,g,m)=>{let[v,M]=e.at(x,g);return[v,m,M]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),g=e.at(l,e.w+o);return[Kd(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+$d)]}if(i.shape==="pent")return[vl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=u?e.u0+h-a:0,d=u?l-(e.u1-h):0,p=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));p.push(vl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));p.push(vl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(u){let x=n.y(-s),g=n.y(e.w+o),m=[[`${i.id}:c`,"c",r(a,e.w+o,g),r(a,-s,x),r(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,g),r(e.u1-h,n.vr,n.rh)]];for(let[v,M,b,y,T]of m){let w=Ly(v,i.id,M,b,y,T);w&&p.push(w)}}return p}function Ly(i,t,e,n,r,s){let o=Zs(rr(r,n));if(o<.3)return null;let a=Ii(rr(r,n)),l=rr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=Zs(u);if(h<.3)return null;let f=Ii(u),d=Ii(tp(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Ii([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/yl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:x,span:m=>{let v=Math.min(1,Math.max(0,m/h));return[c*v,o-(o-c)*v]},facing:[p[0],p[2]]}}function vl(i,t,e,n,r,s,o,a){let l=Ii(rr(r,n)),c=Ii(rr(s,n)),u=Ii(tp(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Ii([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:Zs(rr(r,n)),ls:Zs(rr(s,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function Kd(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Qd(i){let t=i.module_w||Ry,e=i.module_h||Cy;return i.portrait===!1?[e,t]:[t,e]}function Fy(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function jd(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*yl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*yl:0}function Dy(i,t){let[,e]=Qd(t),n=jd(i,t);return i.wall?e*Math.cos(n)+Tu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Tu}function Js(i,t,e=!1){let[n,r]=Qd(t),s=[],o=jd(i,t),a=r*Math.cos(o),l=Dy(i,t),c=Fy(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=(p,x,g)=>[i.o[0]+i.eu[0]*p+i.es[0]*x+i.n[0]*g,i.o[1]+i.eu[1]*p+i.es[1]*x+i.n[1]*g,i.o[2]+i.eu[2]*p+i.es[2]*x+i.n[2]*g],d=(p,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,m]=i.span(x);return p>=g-1e-6&&p<=m+1e-6};return c.forEach((p,x)=>{let g=t.align==="right"?u-p:t.align==="center"?(u-p)/2:0;for(let m=0;m<p;m++){let v=`${x}:${m}`,M=h.has(v);if(M&&!e)continue;let b=t.u+(m+g)*(n+Tu),y=t.v+x*l,T=b+n,w=y+(i.flat||i.wall?a:r);if(![[b,y],[T,y],[T,w],[b,w]].every(([C,P])=>d(C,P)))continue;if(i.wall&&o>.001){let C=ir+r*Math.sin(o),[P,L]=t.flip?[C,ir]:[ir,C],U=[f(b,y,P),f(T,y,P),f(T,w,L),f(b,w,L)],N=t.flip?y:w,z=[b+.05,T-.05].map(B=>[f(B,N,0),f(B,N,C)]);s.push({corners:U,posts:z,cell:v,skipped:M});continue}if(!i.flat){s.push({corners:[f(b,y,ir),f(T,y,ir),f(T,w,ir),f(b,w,ir)],posts:[],cell:v,skipped:M});continue}let _=.15,E=_+r*Math.sin(o),[I,D]=t.flip?[w,y]:[y,w],R=[f(b,I,_),f(T,I,_),f(T,D,E),f(b,D,E)];s.push({corners:R,posts:[b+.05,T-.05].flatMap(C=>[[f(C,I,0),f(C,I,_)],[f(C,D,0),f(C,D,E)]]),cell:v,skipped:M})}}),s}function rr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Zs(i){return Math.hypot(i[0],i[1],i[2])}function Ii(i){let t=Zs(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function tp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var Uy=.78,Ny=1.18;function Oy(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Uy,module_h:i.h||Ny}}function Ru(i,t){let e=Js(i,Oy(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var Ks=1712952,Qs=2239816,ip=1318193,sr=Gt(3662079,.9),Yr=Gt(5995775,.45),Oe=.14,By=9427199,zy=13226982,ky=14936565,Vy={black:{glass:new st(329483),edge:Gt(9082544,.32),cells:Gt(2766160,.22)},blue:{glass:new st(1386842),edge:Gt(10467583,.55),cells:Gt(4025599,.35)}},Gy=Gt(13226982,.5),Hy=Gt(13226982,.85),Wy=Gt(16757575,.95),ep=new st(2845583),np=new st(3818072);function Xy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function rp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:$y(i),r=e?.type==="custom"?Zy(i,e.sections??[],e.overhang):n?[n]:[];return Yy(i,r),qy(i,r,t),r}function qy(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(qr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Ru(o,s):null;if(!o||!a)continue;let l=o.section?t.find(D=>D.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=D=>[D[0],D[1]-c,D[2]],[h,f,d,p]=a.map(u),x=e.get(s.id)??{open:0,tilt:0,cover:0},g=(D,R)=>[D[0]+o.n[0]*R,D[1]+o.n[1]*R,D[2]+o.n[2]*R],m=(D,R,C)=>[D[0]+(R[0]-D[0])*C,D[1]+(R[1]-D[1])*C,D[2]+(R[2]-D[2])*C],v=x.open>.02||x.tilt>.02?Wy:Hy,M=[h,f,d,p].map(D=>g(D,.06));for(let D=0;D<4;D++)l.lines.seg(M[D],M[(D+1)%4],v);let b=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*re,y=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),T=D=>{let R=o.es;return[D[0]-R[0]*y*Math.cos(b)+o.n[0]*y*Math.sin(b),D[1]-R[1]*y*Math.cos(b)+o.n[1]*y*Math.sin(b),D[2]-R[2]*y*Math.cos(b)+o.n[2]*y*Math.sin(b)]},w=g(p,.065),_=g(d,.065),E=T(w),I=T(_);l.solid.tri(E,I,_,ep),l.solid.tri(E,_,w,ep);for(let[D,R]of[[E,I],[I,_],[_,w],[w,E]])l.lines.seg(D,R,v);if(x.cover>.02){let D=Math.min(1,x.cover),R=g(m(w,E,D),.01),C=g(m(_,I,D),.01),P=g(w,.01),L=g(_,.01);l.solid.tri(R,C,L,np),l.solid.tri(R,L,P,np)}}}function Yy(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(qr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Cu(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Cu(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=Vy[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Js(e,n)){let[u,h,f,d]=c.corners.map(s);i.tri(u,h,f,o.glass),i.tri(u,f,d,o.glass),i.tri(u,f,h,o.glass),i.tri(u,d,f,o.glass);let p=(m,v=.004)=>[m[0]+e.n[0]*v,m[1]+e.n[1]*v,m[2]+e.n[2]*v],x=(m,v,M)=>[m[0]+(v[0]-m[0])*M,m[1]+(v[1]-m[1])*M,m[2]+(v[2]-m[2])*M],g=[u,h,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(x(u,h,m/a)),p(x(d,f,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(x(u,d,m/l)),p(x(h,f,m/l)),o.cells);for(let[m,v]of c.posts)t.seg(s(m),s(v),Gy)}}function $y(i){let t=i.settings.roof,e=Xy(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(I=>I.points.map(D=>D[0])),r=e.rooms.flatMap(I=>I.points.map(D=>D[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new oe,h=new Ve;if(t.type==="flat"){_e(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,Ks,Qs,{bottom:!0});let I=.252;for(let[D,R]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([D[0],I,D[1]],[R[0],I,R[1]],sr),h.seg([D[0],0,D[1]],[R[0],0,R[1]],Yr);return{floor:e,base:e.height,solid:u,lines:h,glass:new oe}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,x=p*Math.tan(t.pitch*re),g=(I,D,R)=>d?[I,R,(l+c)/2+D]:[(o+a)/2+D,R,I],[m,v]=d?[o,a]:[l,c],M=new st(Qs),b=new st(Ks),y=(I,D,R,C,P)=>{u.tri(I,D,R,P),u.tri(I,R,C,P)};for(let I of[-1,1]){y(g(m,I*p,0),g(v,I*p,0),g(v,0,x),g(m,0,x),M),y(g(m,I*p,-Oe),g(m,0,x-Oe),g(v,0,x-Oe),g(v,I*p,-Oe),b),y(g(m,I*p,-Oe),g(v,I*p,-Oe),g(v,I*p,0),g(m,I*p,0),b);for(let D of[m,v])y(g(D,I*p,-Oe),g(D,I*p,0),g(D,0,x),g(D,0,x-Oe),b);h.seg(g(m,I*p,0),g(v,I*p,0),Yr);for(let D of[m,v])h.seg(g(D,I*p,0),g(D,0,x),Yr)}let T=t.overhang,w=new st(ip),_=p-T,E=_*Math.tan(t.pitch*re);for(let I of[m+T,v-T])u.tri(g(I,-_,-Oe),g(I,_,-Oe),g(I,0,E-Oe),w),u.tri(g(I,_,-Oe),g(I,-_,-Oe),g(I,0,E-Oe),w);return h.seg(g(m,0,x+.004),g(v,0,x+.004),sr),{floor:e,base:e.height,solid:u,lines:h,glass:new oe}}function Zy(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(qr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Md(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new oe,lines:new Ve,glass:new oe,sections:[],lift:!o.open}),c.sections.push(o.id);let u=hu(t,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=t.filter(x=>x!==o&&hu(t,x)===o).flatMap(x=>vd(o,x));for(let x of i.settings.roof.windows??[]){let g=s.get(x.face),m=g&&g.section===o.id?Ru(g,x):null;if(!m)continue;let v=m.map(M=>Ai(o,M[0],M[2]));f.push({u0:Math.min(...v.map(M=>M[0])),u1:Math.max(...v.map(M=>M[0])),v0:Math.min(...v.map(M=>M[1])),v1:Math.max(...v.map(M=>M[1]))})}let d=u?fu(u,o):o,p=null;if(u){let x=Vn(d),g=Hr(u,{u0:0,u1:0,a:0,b:0}),m=v=>{let[M,b]=x.at(v,x.w/2),[y,T]=Ai(u,M,b);return qs(g,y,T)??In(u).y(T)};p=m(x.u0)<=m(x.u1)?0:1}Jy(c.solid,c.lines,d,dl(i,d,d.overhang??e),a.elevation,c.glass,h,f,p)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function Jy(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Vn(e),u=In(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),p=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),m=(C,P,L)=>{let[U,N]=c.at(C,P);return[U,L-r,N]},v=new st(Qs),M=new st(Ks),b=new st(ip),y=(C,P)=>{for(let L=1;L+1<C.length;L++)i.tri(C[0],C[L],C[L+1],P)},T=[],w=[],_=[],E=null;if(e.shape==="flat"||e.shape==="parapet"){let C=e.eave_a,P=e.shape==="parapet",L=e.points&&e.points.length>=3?bd(e,P?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):P?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(x,-f),c.at(g,-f),c.at(g,p+d),c.at(x,p+d)];_e(i,L,C-r,C-r+.25,Ks,Qs,{bottom:!0});for(let U=0;U<L.length;U++){let N=L[U],z=L[(U+1)%L.length];t.seg([N[0],C-r+.252,N[1]],[z[0],C-r+.252,z[1]],sr),t.seg([N[0],C-r,N[1]],[z[0],C-r,z[1]],Yr)}if(P){let U=k=>zs(k)>=0?k:[...k].reverse(),N=U(L),z=uu(N,-.2),B=N.length;for(let k=0;k<B;k++){let H=U([N[k],N[(k+1)%B],z[(k+1)%B],z[k]]);_e(i,H,C-r+.25,C-r+.65,Ks,Qs),t.seg([N[k][0],C-r+.652,N[k][1]],[N[(k+1)%B][0],C-r+.652,N[(k+1)%B][1]],sr),t.seg([z[k][0],C-r+.652,z[k][1]],[z[(k+1)%B][0],C-r+.652,z[(k+1)%B][1]],sr)}}}else{let C=Hr(e,h);T=C.faces;for(let P of a)T=T.flatMap(L=>yd(L,P));w=C.rim,_=C.ridges,E=C.gable}let I=!!e.open,D=new st(By);for(let C of T){if(I){for(let P=1;P+1<C.length;P++)s.tri(m(C[0][0],C[0][1],C[0][2]),m(C[P][0],C[P][1],C[P][2]),m(C[P+1][0],C[P+1][1],C[P+1][2]),D);continue}y(C.map(([P,L,U])=>m(P,L,U)),v),y(C.map(([P,L,U])=>m(P,L,U-Oe)),M)}for(let C=0;C<w.length;C++){let[P,L,U]=w[C],[N,z,B]=w[(C+1)%w.length];I||y([m(P,L,U),m(N,z,B),m(N,z,B-Oe),m(P,L,U-Oe)],M),t.seg(m(P,L,U),m(N,z,B),I?sr:Yr)}if(I){Ky(i,t,c,u,h,m,r);return}for(let[[C,P,L],[U,N,z]]of _)t.seg(m(C,P,L+.004),m(U,N,z+.004),sr);let R=e.base;if(!o){if(E){let C=Qy(E,R-Oe),P=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(C.length>=3)for(let L of P)y(C.map(([U,N])=>m(L,U,N)),b)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let C of[0,p]){let P=u.y(C)-Oe;P>R+.02&&y([m(c.u0,C,R),m(c.u1,C,R),m(c.u1,C,P),m(c.u0,C,P)],b)}else if(e.eave_a>R+.02)for(let[C,P,L,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])y([m(C,P,R),m(L,U,R),m(L,U,e.eave_a),m(C,P,e.eave_a)],b)}}function Ky(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,h=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,v,M,b,y,T)=>{let w=[e.at(m,M),e.at(v,M),e.at(v,b),e.at(m,b)],_=(w[1][0]-w[0][0])*(w[2][1]-w[0][1])-(w[2][0]-w[0][0])*(w[1][1]-w[0][1]);_e(i,_<0?[...w].reverse():w,y-o,T-o,zy,ky,{bottom:!0})},x=o;for(let[m,v]of[[0,u],[a,h]]){if(!v)continue;let M=n.y(m)-.03,b=m===0?0:a-l;p(e.u0,e.u1,b,b+l,M-c,M),t.seg(s(e.u0,m,M-c),s(e.u1,m,M-c),Yr)}for(let[m,v]of[[e.u0,f],[e.u1-l,d]])if(v)for(let M=0;M<6;M++){let b=a*M/6,y=a*(M+1)/6,T=Math.min(n.y(b),n.y(y))-.03;p(m,m+l,b,y,T-c,T)}let g=[];for(let[m,v]of[[0,u],[a-l,h]]){if(!v)continue;let M=e.u1-e.u0-l,b=Math.max(1,Math.ceil(M/3.5));for(let y=0;y<=b;y++){let T=e.u0+M*y/b;y===0&&!f||y===b&&!d||g.push([T,m])}}if(!u&&!h)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,v]of g){let M=n.y(v+l/2)-.03-c;p(m,m+l,v,v+l,x,M)}}function Qy(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var js={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},sp={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Pi=.2,to=8,Ml=.42,Iu=.42;function up(i,t,e,n=[],r=[],s){let{walls:o,open:a}=Hs(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(R,C,P)=>{let L=s?s(R,C):null;return L===null?P:Math.max(.05,Math.min(P,L))},c=(R,C,P,L,U)=>{if(!s)return U;let N=U,z=Math.max(2,Math.ceil((L-P)/.25)+1);for(let B=0;B<z;B++){let k=P+(L-P)*B/(z-1);N=Math.min(N,l(R[0]+C[0]*k,R[1]+C[1]*k,U))}return N},u=new oe(!0,!0),h=[],f=new Ve,d=[];for(let R of i.rooms){if(R.points.length<3)continue;let C=cp(R.points),P=sp[R.floor_material]??sp.wood,L=new st(P.color),U=n.filter(H=>wd(H,C)).map(H=>Td(H,.003));d.push(...U);let N=[...C,...U.flat()],z=u.count;for(let[H,nt,J]of Wr(C,U)){let et=N[H],lt=N[nt],mt=N[J];u.tri([et[0],0,et[1]],[mt[0],0,mt[1]],[lt[0],0,lt[1]],L,L,L,[et[0],et[1],mt[0],mt[1],lt[0],lt[1]],jt,P.tile)}h.push({roomId:R.id,start:z,end:u.count,color:P.color});let B=new st(js.slab),k=H=>{for(let nt=0;nt<H.length;nt++){let J=H[nt],et=H[(nt+1)%H.length];u.tri([J[0],-Pi,J[1]],[J[0],0,J[1]],[et[0],0,et[1]],B),u.tri([J[0],-Pi,J[1]],[et[0],0,et[1]],[et[0],-Pi,et[1]],B)}};k(C);for(let H of U){k([...cp(H)].reverse());for(let nt=0;nt<H.length;nt++){let J=H[nt],et=H[(nt+1)%H.length];f.seg([J[0],.006,J[1]],[et[0],.006,et[1]],ji),f.seg([J[0],-Pi,J[1]],[et[0],-Pi,et[1]],Ri)}}}let p=new Map,x=[],g=new Map;for(let R of o){let C="interior",P=null;if(R.exterior){let U=R.b[0]-R.a[0],N=R.b[1]-R.a[1],z=Math.hypot(U,N)||1,B=[N/z,-U/z],k=(Math.round(Math.atan2(B[1],B[0])/(2*Math.PI)*to)%to+to)%to;C=`s${k}`;let H=k/to*2*Math.PI;P=[Math.cos(H),Math.sin(H)]}let L=p.get(C);L===void 0&&(L=x.length,p.set(C,L),x.push(P)),g.set(R,L)}let m=new Map,v=[];for(let R of i.openings){let C=pd(R,i.rooms,i.walls??[]);if(!C)continue;let P=md(o,R,C);if(!P)continue;let{wall:L,s:U}=P,N=Tl([L.b[0]-L.a[0],L.b[1]-L.a[1]]),z=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),B=Math.min(R.width,z),k=Math.max(0,Math.min(z-B,U-B/2)),H=C.room.points,nt=L.free?N[0]*(H[1][0]-H[0][0])+N[1]*(H[1][1]-H[0][1])>0:L.roomLeft===R.room_id,J=[-N[1],N[0]],et=nt?J:[-J[0],-J[1]],lt=Math.min(c(L.a,N,k,k+B,Sl(L,i.height))-.02,R.sill+R.height),mt=Math.max(0,Math.min(R.sill,lt-.1)),q=[et[1],-et[0]],K=N[0]*q[0]+N[1]*q[1]>0,ut={opening:R,bucket:g.get(L),start:[L.a[0]+N[0]*k,L.a[1]+N[1]*k],axis:N,width:B,toRoom:et,faceRoom:nt?L.left:L.right,faceOut:nt?L.right:L.left,sill:mt,top:lt,hingeAtStart:R.hinge==="left"===K,exterior:L.exterior};v.push(ut);let yt=m.get(L);yt||m.set(L,yt=[]),yt.push({s0:k,s1:k+B,sill:mt,top:lt,info:ut})}let M=Math.min(i.cut_height,i.height),b=new oe;for(let R of o){let C=g.get(R),P=Tl([R.b[0]-R.a[0],R.b[1]-R.a[1]]),L=(m.get(R)??[]).sort((nt,J)=>nt.s0-J.s0),U=Sl(R,i.height),N=[],z=[-1/0,...new Set(L.flatMap(nt=>[nt.s0,nt.s1])).values(),1/0].sort((nt,J)=>nt-J);for(let nt=0;nt+1<z.length;nt++){let J=z[nt],et=z[nt+1];if(et-J<1e-6)continue;let lt=Number.isFinite(J)&&Number.isFinite(et)?(J+et)/2:Number.isFinite(J)?J+1:et-1,mt=L.filter(ut=>ut.s0<lt&&ut.s1>lt).map(ut=>[ut.sill,ut.top]).sort((ut,yt)=>ut[0]-yt[0]),q=[],K=-Pi;for(let[ut,yt]of mt)ut>K+1e-4&&q.push([K,ut]),K=Math.max(K,yt);U>K+1e-4&&q.push([K,U]),N.push({t0:J,t1:et,ranges:q})}let B=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),k=s&&c(R.a,P,0,B,U)<U-.001,H=k?N.flatMap(nt=>{let J=Math.max(nt.t0,-.5),et=Math.min(nt.t1,B+.5),lt=Math.max(1,Math.ceil((et-J)/.3));return Array.from({length:lt},(mt,q)=>({t0:q===0?nt.t0:J+(et-J)*q/lt,t1:q===lt-1?nt.t1:J+(et-J)*(q+1)/lt,ranges:nt.ranges}))}):N;for(let nt of H){let J=tM(R.footprint,R.a,P,nt.t0,nt.t1);if(J.length<3)continue;let et=k?Math.min(...J.map(([lt,mt])=>l(lt,mt,U))):U;for(let[lt,mt]of nt.ranges){let q=Math.min(mt,k?Math.max(...J.map(([ft,Nt])=>l(ft,Nt,U))):mt);if(q-lt<1e-4||et-lt<.01)continue;let K=lt>.01,ut=k&&mt>et,yt=(ft,Nt)=>Math.min(mt,l(ft,Nt,U));if(lt<M-1e-6){let ft=q>M+1e-6?Ad+C:tr+C,Nt=ut&&et<M?(de,Ht)=>Math.min(M,yt(de,Ht)):Math.min(q,M);_e(b,J,lt,Nt,js.wall,js.wallTop,{aoFrom:0,bottom:K,fold:tr+C,topFold:ft})}q>M+1e-6&&et>M+1e-6&&_e(b,J,Math.max(lt,M),ut?yt:q,js.wall,js.wallTop,{aoFrom:0,fold:C,bottom:K&&lt>=M})}}}let y=o.flatMap(R=>R.footprint),T=nM(o,y),w=new Ve;w.p.push(...f.p),w.c.push(...f.c),w.f.push(...f.f);let _=(R,C)=>(m.get(R)??[]).filter(C);for(let R of T.edges){let C=g.get(R.wall);for(let[L,U]of wl(R,_(R.wall,N=>N.sill<=.005)))w.seg([L[0],.004,L[1]],[U[0],.004,U[1]],Ed);for(let[L,U]of wl(R,_(R.wall,N=>N.sill<M&&N.top>M)))w.seg([L[0],M,L[1]],[U[0],M,U[1]],gu,ml+C);let P=Sl(R.wall,i.height);for(let[L,U]of wl(R,_(R.wall,N=>N.top>=P-.021))){if(!s){w.seg([L[0],P,L[1]],[U[0],P,U[1]],ji,P<=M+1e-6?tr+C:C);continue}let N=Math.max(1,Math.ceil(Math.hypot(U[0]-L[0],U[1]-L[1])/.3));for(let z=0;z<N;z++){let B=[L[0]+(U[0]-L[0])*z/N,L[1]+(U[1]-L[1])*z/N],k=[L[0]+(U[0]-L[0])*(z+1)/N,L[1]+(U[1]-L[1])*(z+1)/N],H=l(B[0],B[1],P),nt=l(k[0],k[1],P);w.seg([B[0],H,B[1]],[k[0],nt,k[1]],ji,Math.max(H,nt)<=M+1e-6?tr+C:C)}}}for(let R of T.corners){let C=l(R.p[0],R.p[1],Sl(R.wall,i.height));w.segSplit([R.p[0],.004,R.p[1]],[R.p[0],C,R.p[1]],Ri,Math.min(M,C),g.get(R.wall))}for(let R of m.values())for(let C of R)jy(w,C,M);let E=iM(T.edges,i.rooms,m),I=Yd(b,w,i);for(let R of r)Cu(b,w,R.face,R.field,i.elevation);let D=[];for(let R of i.furniture){if(rd(R.type))continue;let C=b.count,P=w.p.length/6,L=fn(i,R);bl(b,w,E,R,L),L+R.h>M+.05&&(Rd(b,C,M,xu),Cd(w,P,M,xu)),D.push({id:R.id,start:C,end:b.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:b.geometry(),lines:w.geometry(),shadow:E.geometry(),buckets:x,openings:v,walls2d:o,openRooms:a,wallBuckets:o.map(R=>g.get(R)),furnitureTris:D,outdoorTris:I}}function jy(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Ri,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Ri,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Ri,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Ri,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Ri,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),gu,ml+r)}function tM(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=op(o,a=>s(a)-n)),Number.isFinite(r)&&(o=op(o,a=>r-s(a))),o}function op(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var ap=i=>Math.round(i*1e3),eo=i=>`${ap(i[0])},${ap(i[1])}`,lp=(i,t)=>{let e=eo(i),n=eo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function eM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-r[0])*o+(h[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=r;for(let h of c){let f=[r[0]+o*h,r[1]+a*h];eo(f)!==eo(u)&&e.push([u,f]),u=f}e.push([u,s])}return e}function nM(i,t){let e=i.map(l=>({wall:l,edges:eM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let h=lp(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let h=eo(l),f=s.get(h);f||s.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,h]of c){if(n.get(lp(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;r.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function wl(i,t){if(!t.length)return[[i.a,i.b]];let e=Tl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Tl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let p=[];return h.s0>f&&p.push([f,h.s0]),h.s1<d&&p.push([h.s1,d]),p});let u=h=>{let f=(h-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>s<=o?[u(h),u(f)]:[u(f),u(h)])}function iM(i,t,e){let n=new oe,r=new st(Iu,Iu,Iu),s=new st(1,1,1),o=.002;for(let a of i)for(let[l,c]of wl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&ce(p,m.points)))continue;let x=[l[0]+d[0]*Ml,l[1]+d[1]*Ml],g=[c[0]+d[0]*Ml,c[1]+d[1]*Ml];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function hp(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(fl),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return mu(e);let r=n.furniture.filter(s=>(s.type==="stairs"||s.type==="stairs_landing"||De(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(fl);return mu([...e,...r])}function Sl(i,t){return Math.min(t,i.height??t)}function Tl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function cp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var rM=500,fp=.12,dp=1.35,sM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,El=class{view={target:new V,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=sM(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Pu(this.view.phi+this.velocity.phi,fp,dp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},rM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,r);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-r/o*2.4;this.view.theta+=a,this.view.phi=Pu(this.view.phi+l,fp,dp),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Pu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new V(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new V(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Pu(i,t,e){return Math.min(e,Math.max(t,i))}function Li(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var no=(i,t,e,n,r)=>{i.expandByPoint(new V(t,n,e)),i.expandByPoint(new V(t,r,e))};function pp(i){let t=new Qe;for(let{floor:e,ty:n}of i){let r=e.elevation+n;for(let s of e.rooms)for(let[o,a]of s.points)no(t,o,a,r,r+e.height);for(let s of e.outdoor??[]){let o=r+Ji(e)+(s.offset??0),a=o-(s.type==="pool"||Cn(s.type)!==null?0:s.slope??0),l=Qn(s.type)&&s.height?s.height:Vr[s.type],c=o+(s.type==="pool"?.06:(Cn(s.type)??0)+l);for(let[u,h]of s.points)no(t,u,h,a,c)}for(let s of e.walls??[]){let o=r+Math.min(e.height,s.height??e.height);no(t,s.a[0],s.a[1],r,o),no(t,s.b[0],s.b[1],r,o)}}return t}function mp(i,t,e){let n=new Qe,r=i.elevation+e;for(let[s,o]of t.points)no(n,s,o,r,r+i.height);return n}function Lu(i,t,e,n,r,s=1){if(i.isEmpty())return 0;let o=i.getCenter(new V),a=new V(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),l=new V(Math.cos(t),0,-Math.sin(t)),c=new V(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),u=Math.tan(r/2),h=u*Math.max(.01,n),f=0;for(let d of[i.min.x,i.max.x])for(let p of[i.min.y,i.max.y])for(let x of[i.min.z,i.max.z]){let g=new V(d,p,x).sub(o),m=g.dot(a);f=Math.max(f,m+Math.abs(g.dot(l))*s/h,m+Math.abs(g.dot(c))*s/u)}return f}function gp(i,t,e,n,r=1){let s=i.getSize(new V),o=Math.max(.01,Math.min(s.x,s.z)),a=Math.max(s.x,s.z)/o>=2,l=-.6;return a&&e>=1.2&&(l=s.z>=s.x?-.95:-.35),{theta:l,radius:Lu(i,l,t,e,n,r)}}function Fu(i,t,e,n,r,s,o=8){if(i.isEmpty())return{radius:0,offset:new V};let a=Math.max(1,s.width),l=Math.max(1,s.height),c=-1+2*Math.max(0,s.left)/a,u=1-2*Math.max(0,s.right)/a,h=-1+2*Math.max(0,s.bottom)/l,f=1-2*Math.max(0,s.top)/l;if(c>=u||h>=f)return{radius:Lu(i,t,e,n,r),offset:new V};let d=i.getCenter(new V),p=new V(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),x=new V(Math.cos(t),0,-Math.sin(t)),g=new V(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),m=Math.tan(r/2),v=m*Math.max(.01,n),M=[];for(let R of[i.min.x,i.max.x])for(let C of[i.min.y,i.max.y])for(let P of[i.min.z,i.max.z]){let L=new V(R,C,P).sub(d);M.push({x:L.dot(x),y:L.dot(g),near:L.dot(p)})}let b=R=>{let C=-1/0,P=1/0,L=-1/0,U=1/0;for(let N of M){let z=R-N.near;C=Math.max(C,N.x-u*v*z),P=Math.min(P,N.x-c*v*z),L=Math.max(L,N.y-f*m*z),U=Math.min(U,N.y-h*m*z)}return{x0:C,x1:P,y0:L,y1:U}},y=Math.max(...M.map(R=>R.near))+.1,T=R=>{let C=b(R);return C.x0<=C.x1&&C.y0<=C.y1},w=Math.max(y,o),_=Math.max(w,Lu(i,t,e,n,r));for(;!T(_);)_*=2;for(let R=0;R<60;R++){let C=(w+_)/2;T(C)?_=C:w=C}let E=b(_),I=(E.x0+E.x1)/2,D=(E.y0+E.y1)/2;return{radius:_,offset:x.multiplyScalar(I).add(g.multiplyScalar(D))}}function oM(i,t){let e=De(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Du(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?oM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function Uu(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=aM(c.id)%1e3/1e3;for(let x of Js(l,c)){let[g,m,v,M]=x.corners.map(y=>[y[0]+l.n[0]*.006,y[1]+l.n[1]*.006-t,y[2]+l.n[2]*.006]),b=[[g,0,0],[m,1,0],[v,1,1],[M,0,1]];for(let y of[0,1,2,0,2,3]){let[T,w,_]=b[y];e.push(T[0],T[1],T[2]),n.push(w,_),r.push(h,f),s.push(d)}}let p=e.length/3-u;p&&o.push({id:c.id,start:u,count:p})}if(!e.length)return null;let a=new Zt;return a.setAttribute("position",new kt(e,3)),a.setAttribute("uv",new kt(n,2)),a.setAttribute("aCells",new kt(r,2)),a.setAttribute("aPhase",new kt(s,1)),a.setAttribute("aLevel",new kt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function io(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Nu(i){let t=new le({transparent:!0,blending:Fe,depthWrite:!1,side:we});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function aM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var xp=["neon","blueprint","day"];function bp(i){return xp.indexOf(i)}var Al={value:new V(.22,.88,1)},Rl={value:0};function _p(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var lM=`
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
`;function Gn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Al,s.uniforms.uAccentOn=Rl,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${lM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Cl(i){return i==="day"?yi:Fe}var ro=.012,cM=.012;function yp(i,t,e,n,r,s=[]){let o=[],a=[],l=[],c=[],u=(p,x,g,m,v,M,b)=>{for(let y of[p,x,g,p,g,m])o.push(y[0],y[1],y[2]),a.push(v[0],v[1],v[2]),l.push(M),c.push(b)};i.rooms.forEach((p,x)=>{if(p.points.length<3)return;let g=p.points.map(T=>T[0]),m=p.points.map(T=>T[1]),v=Math.min(...g),M=Math.min(...m),b=Math.max(1,Math.ceil((Math.max(...g)-v)/r)),y=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let T=0;T<b;T++)for(let w=0;w<y;w++){let _=v+(T+.5)*r,E=M+(w+.5)*r;if(!ce([_,E],p.points)||s.some(R=>ce([_,E],R)))continue;let I=v+T*r,D=M+w*r;u([I,ro,D],[I,ro,D+r],[I+r,ro,D+r],[I+r,ro,D],[0,1,0],x,-1)}});let h=i.rooms.length;for(let p of i.outdoor??[]){if(p.points.length<3||Qn(p.type)&&Cn(p.type)===null)continue;let x=qd(i,p)+ro,g=p.points.map(T=>T[0]),m=p.points.map(T=>T[1]),v=Math.min(...g),M=Math.min(...m),b=Math.max(1,Math.ceil((Math.max(...g)-v)/r)),y=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let T=0;T<b;T++)for(let w=0;w<y;w++){if(!ce([v+(T+.5)*r,M+(w+.5)*r],p.points))continue;let _=v+T*r,E=M+w*r;u([_,x,E],[_,x,E+r],[_+r,x,E+r],[_+r,x,E],[0,1,0],h,-1)}}let f=Math.min(i.cut_height,i.height);t.forEach((p,x)=>{let g=Math.min(i.height,p.height??i.height),m=Math.min(f,g-.02),v=p.b[0]-p.a[0],M=p.b[1]-p.a[1],b=Math.hypot(v,M);if(b<.05)return;let y=[v/b,M/b],T=[-y[1],y[0]],w=e[x],_=uM(p,y,b,n),E=(R,C,P)=>[C,P,...R.filter(L=>L>C+.005&&L<P-.005)].sort((L,U)=>L-U).filter((L,U,N)=>U===0||L>N[U-1]+.005),I=E([m,(m+g)/2,..._.flatMap(R=>[R.y0+.01,R.y1-.01])],.02,g-.02),D=E(_.flatMap(R=>[R.s0,R.s1]),0,b);for(let R of[1,-1]){let C=R>0?p.roomLeft:p.roomRight,P=C?i.rooms.findIndex(z=>z.id===C):p.exterior?h:-1;if(P<0)continue;let L=(R>0?p.left:p.right)+cM,U=[T[0]*R,T[1]*R],N=(z,B)=>[p.a[0]+y[0]*z+U[0]*L,B,p.a[1]+y[1]*z+U[1]*L];for(let z=0;z<D.length-1;z++){let B=D[z+1]-D[z],k=Math.max(1,Math.ceil(B/r));for(let H=0;H<k;H++){let nt=D[z]+B/k*H,J=D[z]+B/k*(H+1),et=(nt+J)/2;for(let lt=0;lt<I.length-1;lt++){let mt=I[lt],q=I[lt+1];if(q-mt<.01)continue;let K=(mt+q)/2;if(_.some(yt=>et>yt.s0&&et<yt.s1&&K>yt.y0&&K<yt.y1))continue;let ut=mt>=f-1e-6?w:tr+w;u(N(nt,mt),N(J,mt),N(J,q),N(nt,q),[U[0],0,U[1]],P,ut)}}}}});let d=[];for(let p of n){if(p.opening.type!=="door")continue;let x=t.find(v=>Mp(v,p));if(!x||!x.roomLeft||!x.roomRight)continue;let g=i.rooms.findIndex(v=>v.id===x.roomLeft),m=i.rooms.findIndex(v=>v.id===x.roomRight);g<0||m<0||d.push({id:p.opening.id,a:g,b:m,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(o),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:d}}function Mp(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function uM(i,t,e,n){let r=[];for(let s of n){if(!Mp(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function hM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function fM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function vp(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=fM(i),d=1/(1+u/(f*f)),p=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/h);return i.level*p*(.2+.8*x)*hM(i.kind,l/h)}function Sp(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,p]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let m of t){if(m.room!==d)continue;let v=m.x-u.x,M=m.y-u.y,b=m.z-u.z,y=Math.hypot(v,M,b)||1,T=vp(m,u.x,u.y,u.z,v/y,M/y,b/y);x[0]+=m.color[0]*T,x[1]+=m.color[1]*T,x[2]+=m.color[2]*T}let g=Math.max(x[0],x[1],x[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let s=new Map;for(let u of r){let h={...u,color:u.color.map(f=>Math.pow(f,1.5))};s.set(u.room,[...s.get(u.room)??[],h])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=s.get(l[u]);if(!h)continue;let f=u*3,d=0,p=0,x=0;for(let g of h){let m=vp(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,x+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function wp(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&ce([t,e],r.points));return n<0?i.rooms.length:n}function Tp(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Pl={open:0,open2:0,tilt:0,tilt2:0,cover:null},Ep=2043986,Ap=2769520,dM=2242399,Ou=1845831,pM=1450554,ni=16758087,mM=1.2,gM=1.5,xM=1846349,bM=2572395,_M=1120816,vM=1845831,Rp=5995775,Cp=9085695,$r=Gt(3662079,.08),yM=.2;function Il(i,t,e,n,r,s,o,a,l,c,u){let h=(d,p,x)=>t(d,p,x),f=[[h(e,r,a),h(n,r,a),h(n,s,a),h(e,s,a),c],[h(e,r,o),h(n,r,o),h(n,s,o),h(e,s,o),Gt(l.getHex(),.6)],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),l],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),Gt(l.getHex(),.85)],[h(e,r,o),h(e,s,o),h(e,s,a),h(e,r,a),Gt(l.getHex(),.92)],[h(n,r,o),h(n,s,o),h(n,s,a),h(n,r,a),Gt(l.getHex(),.92)]];for(let[d,p,x,g,m]of f)i.tri(d,p,x,m,m,m,void 0,u),i.tri(d,x,g,m,m,m,void 0,u)}function se(i,t,e,n,r,s,o,a,l,c,u,h){if(a<=u+1e-6)return Il(i,t,e,n,r,s,o,a,l,c,jt);if(o>=u-1e-6)return Il(i,t,e,n,r,s,o,a,l,c,h);Il(i,t,e,n,r,s,o,u,l,c,jt),Il(i,t,e,n,r,s,u,a,l,c,h)}function Fi(i,t,e,n,r,s,o,a,l,c,u=0){let h=(f,d,p)=>{let x=b=>u?(o-b)/u:.5,g=t(e,r,f),m=t(n,r,f),v=t(n,r,d),M=t(e,r,d);i.tri(g,m,v,a,a,a,[0,x(f),1,x(f),1,x(d)],p),i.tri(g,v,M,a,a,a,[0,x(f),1,x(d),0,x(d)],p)};o<=l+1e-6?h(s,o,jt):s>=l-1e-6?h(s,o,c):(h(s,l,jt),h(l,o,c))}function MM(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),h=t(n,r,o),f=t(n,s,o),d=t(e,s,o),p=0,x=(s-r)/c;i.tri(u,h,f,a,a,a,[0,p,1,p,1,x],l),i.tri(u,f,d,a,a,a,[0,p,1,x,0,x],l)}function Ip(i,t,e){let n=new oe,r=new oe,s=new oe(!0),o=new st(Ep),a=new st(Ap),l=[],c=[],u=[];for(let h of i){let f=n.count,d=r.count,p=s.count,x=t.get(h.opening.id)??Pl,g=h.width,{sill:m,top:v,bucket:M}=h,b=(_,E,I)=>[h.start[0]+h.axis[0]*_+h.toRoom[0]*E,I,h.start[1]+h.axis[1]*_+h.toRoom[1]*E],y=(h.faceRoom-h.faceOut)/2,T=h.opening.mark==="closed",w=h.opening.type==="door"&&Ki(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!w||h.opening.type==="garage"){let _=-h.faceOut-.012,E=h.faceRoom+.012,I=h.opening.type==="garage"&&(T?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),D=I?Gt(ni,.8):new st(Ep),R=I?Gt(ni,1):new st(Ap);se(n,b,-.045,.02,_,E,0,v+.045,D,R,e,M),se(n,b,g-.02,g+.045,_,E,0,v+.045,D,R,e,M),se(n,b,.02,g-.02,_,E,v-.02,v+.045,D,R,e,M)}if(h.opening.type==="door"){let _=Ki(h.opening,h.exterior),E=od(_),I=h.opening.swing==="out"?-1:1,D=I>0?h.faceRoom:-h.faceOut,R=h.opening.leaves===2,C=.02,P=g-.02,L=sd(g,_,h.hingeAtStart,h.opening);if(L){for(let[B,k]of L.panels)se(n,b,B,B+.04,y-.03,y+.03,.02,v-.02,o,a,e,M),se(n,b,k-.04,k,y-.03,y+.03,.02,v-.02,o,a,e,M),se(n,b,B,k,y-.03,y+.03,.02,.1,o,a,e,M),Fi(r,b,B+.04,k-.04,y,.1,v-.02,$r,e,M);C=L.x0,P=L.x1}let U=R?(P-C)/2-.004:P-C,N=E?.06:.04;E&&(se(n,b,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new st(Ou),a,e,M),h.exterior&&se(n,b,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,v+.1,v+.17,Gt(ni,.55),Gt(ni,.85),e,jt));let z=w?[]:[[h.hingeAtStart,x.open]];R&&!w&&z.push([!h.hingeAtStart,x.open2??0]);for(let[B,k]of z){let H=Math.min(1,Math.max(0,k)),nt=_==="sliding"?0:H*gM,J=_==="sliding"?H*U:0,et=(de,Ht,Kt)=>{let ae=de*Math.cos(nt)-Ht*Math.sin(nt)-J,Jt=D+I*(Ht*Math.cos(nt)+de*Math.sin(nt)+(J?.05:0));return b(B?C+ae:P-ae,Jt,Kt)},lt=H>.05?jt:M,mt=T?!!x.sensed&&H<.05:H>.9,q=mt?Gt(ni,.7):new st(E?_M:xM),K=mt?Gt(ni,.9):new st(E?vM:bM);_==="glass"?(se(n,et,0,.05,-N,0,.01,v-.01,q,K,e,lt),se(n,et,U-.05,U,-N,0,.01,v-.01,q,K,e,lt),se(n,et,.05,U-.05,-N,0,.01,.12,q,K,e,lt),se(n,et,.05,U-.05,-N,0,v-.08,v-.01,q,K,e,lt),Fi(r,et,.05,U-.05,-N/2,.12,v-.08,$r,e,lt)):se(n,et,0,U,-N,0,.01,v-.01,q,K,e,lt),_==="front_glass"?Fi(r,et,.12,U-.12,.001,v*.55,v-.18,$r,e,lt):E&&Fi(r,et,.1,.18,.001,.3,v-.3,$r,e,lt);let ut=Math.min(1.05,v*.5),yt=E?.3:.012,ft=E?U-.11:U-.16,Nt=E?U-.08:U-.05;se(n,et,ft,Nt,.004,.05,ut-yt,ut+yt,new st(Rp),new st(Cp),e,lt),se(n,et,ft,Nt,-N-.05,-N-.004,ut-yt,ut+yt,new st(Rp),new st(Cp),e,lt)}}else if(h.opening.type==="garage"){let _=Math.min(1,Math.max(0,x.cover??1)),E=new st(13951231),I=h.faceRoom-.03,D=v*(1-_);_>.01&&Fi(s,b,.02,g-.02,I,D,v,E,e,M,.5);let R=(1-_)*v;R>.01&&MM(s,b,.02,g-.02,I,I+R,v+.03,E,M,.5)}else if(Ki(h.opening,h.exterior)==="glass_wall"){se(n,b,0,.04,y-.025,y+.025,m,v,o,a,e,M),se(n,b,g-.04,g,y-.025,y+.025,m,v,o,a,e,M),se(n,b,.04,g-.04,y-.025,y+.025,m,m+.03,o,a,e,M),se(n,b,.04,g-.04,y-.025,y+.025,v-.04,v,o,a,e,M);let I=Math.max(1,Math.round((g-2*.04)/.9)),D=(g-2*.04)/I;for(let R=1;R<I;R++){let C=.04+R*D;se(n,b,C-.02,C+.02,y-.025,y+.025,m+.03,v-.04,o,a,e,M)}for(let R=0;R<I;R++){let C=.04+R*D+(R?.02:0),P=.04+(R+1)*D-(R<I-1?.02:0);Fi(r,b,C,P,y,m+.03,v-.04,$r,e,M)}}else{se(n,b,0,.06,y-.035,y+.035,m,v,o,a,e,M),se(n,b,g-.06,g,y-.035,y+.035,m,v,o,a,e,M),se(n,b,.06,g-.06,y-.035,y+.035,m,m+(m>.05?.06:.03),o,a,e,M),se(n,b,.06,g-.06,y-.035,y+.035,v-.06,v,o,a,e,M),m>.3&&(se(n,b,-.04,g+.04,y+.035,h.faceRoom+.07,m-.03,m,new st(Ou),a,e,M),h.exterior&&se(n,b,-.03,g+.03,-h.faceOut-.06,y-.035,m-.04,m-.02,new st(Ou),a,e,M));let I=.055,D=m+(m>.05?.06:.03),R=v-.06,C=y+.035,P=y+.035+.06,U=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let N of U){let z=N.open>.02||N.tilt>.02,B=T?!!x.sensed&&!z:z,k=B?Gt(ni,.75):new st(dM),H=B?Gt(ni,.95):a,nt=N.x0,J=N.x1,et=J-nt,lt=N.open*mM,mt=N.tilt*yM,q=(ut,yt,ft)=>{let Nt=ft-D,de=yt+Nt*Math.sin(mt),Ht=D+Nt*Math.cos(mt),Kt=ut*Math.cos(lt)-(de-C)*Math.sin(lt);de=C+(de-C)*Math.cos(lt)+ut*Math.sin(lt);let ae=N.atStart?nt+Kt:J-Kt;return b(ae,de,Ht)},K=lt>.05?jt:M;if(se(n,q,0,I,C,P,D,R,k,H,e,K),se(n,q,et-I,et,C,P,D,R,k,H,e,K),se(n,q,I,et-I,C,P,D,D+I,k,H,e,K),se(n,q,I,et-I,C,P,R-I,R,k,H,e,K),Fi(r,q,I,et-I,(C+P)/2,D+I,R-I,B?Gt(ni,.16):$r,e,K),Ki(h.opening,h.exterior)==="bars"){let ut=(D+R)/2,yt=(C+P)/2;se(n,q,I,et-I,yt-.012,yt+.012,ut-.012,ut+.012,k,H,e,K),se(n,q,et/2-.012,et/2+.012,yt-.012,yt+.012,D+I,R-I,k,H,e,K)}}}if(x.cover!==null){let _=-h.faceOut,E=v+.2;se(n,b,-.05,g+.05,_-.15,_,v,E,new st(pM),a,e,M);let I=Math.min(1,Math.max(0,x.cover));if(I>.01){let D=v-I*(v-m);Fi(s,b,0,g,_-.07,D,v,new st(16777215),e,M,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),u.push({id:h.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var SM=.3,Pp=2.6;function Lp(i,t=.32,e=.22,n=[]){let r=i.map(y=>y[0]),s=i.map(y=>y[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,h=e*.7071,f=y=>{let T=[y,[y[0]+e,y[1]],[y[0]-e,y[1]],[y[0],y[1]+e],[y[0],y[1]-e]],w=[...T,[y[0]+h,y[1]+h],[y[0]-h,y[1]+h],[y[0]+h,y[1]-h],[y[0]-h,y[1]-h]];return T.every(_=>ce(_,i))&&!n.some(_=>w.some(E=>ce(E,_)))},d=(y,T)=>f(u?[y,T]:[T,y]),p=(y,T)=>{let w=Math.ceil(Math.hypot(T[0]-y[0],T[1]-y[1])/.05);for(let _=1;_<w;_++)if(!f([y[0]+(T[0]-y[0])*_/w,y[1]+(T[1]-y[1])*_/w]))return!1;return!0},[x,g,m,v]=u?[o,a,l,c]:[l,c,o,a],M=[],b=!0;for(let y=x+e;y<=g-e+1e-6;y+=t){let T=null,w=null,_=.05;for(let R=m;R<=v+1e-6;R+=_)if(d(y,R)&&(w??=R),(!d(y,R)||R+_>v+1e-6)&&w!==null){let C=d(y,R)?R:R-_;(!T||C-w>T[1]-T[0])&&(T=[w,C]),w=null}if(!T||T[1]-T[0]<.2)continue;let E=R=>{let[C,P]=R?T:[T[1],T[0]];return[u?[y,C]:[C,y],u?[y,P]:[P,y]]},I=E(b),D=M[M.length-1];if(D&&n.length&&!p(D,I[0])){let R=E(!b);if(!p(D,R[0]))continue;I=R,b=!b}M.push(I[0],I[1]),b=!b}return M}function zu(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Bu=i=>Math.atan2(Math.sin(i),Math.cos(i));function Fp(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Bu(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Pp*e),!0)}let a=Math.atan2(r,s),l=Bu(a-i.heading);if(i.heading=Bu(i.heading+Math.sign(l)*Math.min(Math.abs(l),Pp*e)),Math.abs(l)<.35){let c=Math.min(o,SM*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Zr=null,Dp=new Map;function wM(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Dp.get(r);if(s)return s;e&&cl(e),Zr??=new zr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Zr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Zr.setSize(t,t,!1),Zr.setClearColor(0,0);let o=new oe,a=new Ve,l=De(i.type);if(l?.light)_l(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)ku(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let v={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(bl(o,a,new oe,v),i.type==="fan_ceiling"||i.type==="fan_floor"){let M=o.p.length,b=a.p.length;xl(o,a,i.type,i.w,i.d,i.h);let y=i.type==="fan_ceiling"?i.h*.18:i.h*.78,T=0;for(let w=M+1;w<o.p.length;w+=3)o.p[w]+=y;for(let w=M+2;w<o.p.length;w+=3)o.p[w]+=T;for(let w=b+1;w<a.p.length;w+=3)a.p[w]+=y;for(let w=b+2;w<a.p.length;w+=3)a.p[w]+=T}}let c=new Vi,u=new Xt(o.geometry(),new le({vertexColors:!0,color:new st(n,n,n)})),h=new xn(a.geometry(),new gn({vertexColors:!0,color:new st(n*1.8,n*1.8,n*1.8)}));c.add(u,h);let f=new Qe().setFromObject(u),d=f.getCenter(new V),p=new Jn(-1,1,1,-1,.01,100);p.position.copy(d).add(new V(.9,.75,1.3).normalize().multiplyScalar(20)),p.lookAt(d),p.updateMatrixWorld();let x=.05;for(let v of[f.min.x,f.max.x])for(let M of[f.min.y,f.max.y])for(let b of[f.min.z,f.max.z]){let y=new V(v,M,b).applyMatrix4(p.matrixWorldInverse);x=Math.max(x,Math.abs(y.x),Math.abs(y.y))}let g=x*1.12;p.left=-g,p.right=g,p.top=g,p.bottom=-g,p.updateProjectionMatrix(),Zr.render(c,p);let m=Zr.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),h.geometry.dispose(),h.material.dispose(),Dp.set(r,m),m}var Np={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},TM=2.4,EM=1.4,AM=.22,Op=140,Hu=32,RM=500,Bp=160,zp=33,kp=.028,CM=.09,te=2767456,IM=1911110,PM=1,Vp=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Vu=450,Gp=125,LM=.08,Wu={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},FM=new st(1714765);function DM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Xu=class{host;options;renderer;scene=new Vi;camera=new $e(38,1,.1,400);controls;labels;root=new Ze;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new xn(new Zt,new gn({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Cr(new Zt,new Wi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Xt(new ds(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=UM(),this.blindTexture=OM(),this.haloTexture=kM(),this.ground=new Xt(new gi(1,1),new le({transparent:!0,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){cl(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(l=>l.floor.rooms.some(c=>c.id===t)),n=e?.floor.rooms.find(l=>l.id===t);if(!e||!n)return;let r=mp(e.floor,n,e.ty),s=.72,o=this.controls.view.theta,a=Fu(r,o,s,this.camera.aspect,this.camera.fov*re,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new V).add(a.offset),radius:a.radius,phi:s})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t;let e=new Set(t.filter(r=>r.active&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,s]of this.fanRotors)s.active=e.has(r);this.labelsDirty=!0,this.effectFloors=new Set(t.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(t.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of t){n.add(r.id);let s=this.devicePins.get(r.id);s||(s={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,s),this.labels.append(s.el));let o=s.el;s.icon!==r.icon&&(s.icon=r.icon,o.querySelector(".fp3d-dev-icon").innerHTML=r.icon),s.text!==r.text&&(s.text=r.text,o.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;s.label!==c&&(s.label=c,o.title=r.name,o.setAttribute("aria-label",c)),s.active!==r.active&&(s.active=r.active,o.classList.toggle("fp3d-dev-on",r.active)),s.unavailable!==r.unavailable&&(s.unavailable=r.unavailable,o.classList.toggle("fp3d-dev-na",r.unavailable));let u=r.glow?`rgb(${r.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";s.glow!==u&&(s.glow=u,u?o.style.setProperty("--fp3d-glow",u):o.style.removeProperty("--fp3d-glow"))}for(let[r,s]of this.devicePins)n.has(r)||(s.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])io(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&io(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ze;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let h=new Xt(new bs(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:we}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let h=s.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new Zt;c.setAttribute("position",new kt(a,3));let u=new xn(c,new gn({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Gu(r),o=Hp(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=_p(t),n=e?1:0;n===Rl.value&&(!e||Al.value.equals(new V(...e)))||(Rl.value=n,e&&Al.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=bp(t);let e=Cl(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new st(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new ls(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),h=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new Zt;l.setAttribute("position",new kt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*re,o=(r?t.azimuth+180:t.azimuth)*re,a=Math.max(10,Math.abs(t.elevation))*re,l=this.weatherBox,c=new V((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new V(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Bp),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}stepFans(t){let e=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=t*(n.type==="fan_ceiling"?.0048:.009);n.type==="fan_ceiling"?n.rotor.rotation.y=(n.rotor.rotation.y-r)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-r)%(Math.PI*2),e=!0}return e}buildFridges(t){let e=new oe;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Vd(e,n,fn(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view;return{theta:t.theta,phi:t.phi,radius:t.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&DM();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new zr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new El(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&"roomId"in n&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},RM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=yp(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes),r=zM(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}t.lightSurface=n;let s=new Zt;s.setAttribute("position",new kt(n.pos,3)),s.setAttribute("color",new kt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new kt(n.fold,1));let o=new Gi(new Uint32Array(n.pos.length/3),1);o.setUsage(Uc),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let r of this.devices){let s=this.glowOf(r);if(r.floorId!==t.floor.id||!s)continue;let o=wp(t.floor,r.x,r.z),a=Tp(t.lightZones,o),[l,,c]=r.size??(r.lamp?Wu[r.lamp]:[.3,.3,.3]),u=r.base??0,h={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<PM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=r.lamp?h[r.lamp]:[r.y,"omni"],p=r.lightY??f,x=s.color;if(r.lamp==="strip"){let g=(r.rotation??0)*re,m=!!r.upright||Math.abs(r.roll??0)>45;for(let v of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:u+l*(.5+v),z:r.z,color:x,level:s.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(g)*l*v,y:p,z:r.z+Math.sin(g)*l*v,color:x,level:s.level*.55,kind:m?"omni":d,room:a})}else n.push({x:r.x,y:p,z:r.z,color:x,level:s.level,kind:d,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(h=>{let f=t.geo.openings.find(p=>p.opening.id===h.id);if(f&&Ki(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length||this.roomTint){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Sp(e,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Gn(new le({vertexColors:!0}),this.themeUniform),pattern:NM(this.patternTexture),wall:Gn(Li(new le({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:Li(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new le({vertexColors:!0,blending:ws,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:we,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Gn(Li(new gn({vertexColors:!0,transparent:!0,blending:Cl(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Li(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:we,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Gn(Li(new le({vertexColors:!0,side:we}),t),this.themeUniform),glass:Li(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:we}),t),blinds:Gn(Li(new le({map:this.blindTexture,vertexColors:!0,side:we}),t),this.themeUniform),flow:BM(this.flowTime),solarLive:Nu(this.flowTime),lamps:Gn(new le({vertexColors:!0}),this.themeUniform),halos:new Wi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:we}),screens:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:we})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Au(n)?.id===s.id?o.filter(et=>et.face===Eu).map(et=>({field:et,face:Jd(n,et)})):[],l=o.filter(et=>et.face.startsWith(`wall:${s.id}:`));if(l.length){let et=new Map(Zd(n,s.id).map(lt=>[lt.key,lt]));for(let lt of l){let mt=et.get(lt.face);mt&&a.push({field:lt,face:mt})}}let u=(n.settings.roof.sections??[]).some(et=>!et.open&&et.base<s.elevation+s.height-.05)?(et,lt)=>{let mt=xd(n,et,lt);return mt===null?null:mt-s.elevation}:void 0,h=up(Du(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,hp(n.floors,s),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Ze,x=new Xt(h.floor,d.floor),g=new Xt(h.shadow,d.shadow);g.renderOrder=1;let m=new Xt(h.floor,d.pattern);m.renderOrder=2;let v=new Xt(new Zt,d.glow);v.renderOrder=3,v.visible=!1;let M=new Xt(new Zt,d.frames),b=new Xt(new Zt,d.blinds),y=new Xt(new Zt,d.glass);y.renderOrder=4;let T=new Xt(new Zt,d.lamps);T.visible=!1;let w=new Xt(new Zt,d.cones);w.visible=!1,w.renderOrder=3;let _=new Cr(new Zt,d.halos);_.visible=!1,_.renderOrder=7;let E=new Xt(new Zt,d.cones);E.visible=!1,E.renderOrder=7;let I=new Xt(new Zt,d.cones);I.visible=!1,I.renderOrder=7;let D=new Xt(new Zt,d.lamps);D.visible=!1;let R=new Xt(new Zt,d.screens);R.visible=!1,R.renderOrder=5;let C=new Xt(new Zt,d.flow);C.renderOrder=5,C.frustumCulled=!1;let P=Uu(a,s.elevation),L=P?new Xt(P.geometry,d.solarLive):null;L&&(L.renderOrder=6,io(P,this.solarLevels));for(let et of[M,b,y])et.frustumCulled=!1;let U=new Xt(h.walls,d.glassWall),N=new Xt(h.walls,d.wall);U.renderOrder=6,p.add(x,g,m,v,N,new xn(h.lines,d.lines),M,b,y,C,T,w,_,E,I,D,R,U,...L?[L]:[]);for(let et of s.furniture){if(et.type!=="fan_ceiling"&&et.type!=="fan_floor")continue;let lt=new oe,mt=new Ve;xl(lt,mt,et.type,et.w,et.d,et.h);let q=new Ze;q.add(new Xt(lt.geometry(),d.wall),new xn(mt.geometry(),d.lines));let K=new Ze,ut=et.rotation*re;K.position.set(et.x,fn(s,et),et.z),K.rotation.y=-ut,q.position.set(0,et.type==="fan_ceiling"?et.h*.18:et.h*.78,0),K.add(q),p.add(K);let yt=this.devices.some(ft=>ft.furnitureId===et.id&&ft.active);this.fanRotors.set(et.id,{rotor:q,type:et.type,active:yt})}this.root.add(p);let z=document.createElement("button");z.className="fp3d-pin fp3d-pin-floor",z.dataset.floor=s.id;let B=document.createElement("b");B.textContent=s.name||"\u2013";let k=document.createElement("span");k.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",z.append(B,k),z.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(z);let H=t.get(s.id),nt=[],J=null;for(let et of s.rooms){let lt=document.createElement("button");lt.className="fp3d-pin",lt.dataset.room=et.id,lt.dataset.floor=s.id,this.fillRoomPin(lt,et.name,this.roomInfo.get(et.id)),lt.addEventListener("click",()=>this.options.onRoomTap?.(s.id,et.id)),this.labels.append(lt);let[mt,q]=ad(et.points);nt.push({pin:lt,room:et,cx:mt,cz:q});for(let[K,ut]of et.points)J??={x0:K,x1:K,z0:ut,z1:ut},J.x0=Math.min(J.x0,K),J.x1=Math.max(J.x1,K),J.z0=Math.min(J.z0,ut),J.z1=Math.max(J.z1,ut)}this.floors.push({floor:s,rank:r.indexOf(s),group:p,geo:h,floorMesh:x,shadowMesh:g,patternMesh:m,glowMesh:v,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:y,blindsMesh:b,flowMesh:C,solarMesh:L,solarLive:P,lampMesh:T,sunMesh:w,sunSig:"",haloMesh:_,coneMesh:E,trailMesh:I,fridgeMesh:D,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:N,screenMesh:R,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:J,roomPins:nt,labelSize:null,materials:d,mask:f,openings:new Map,y:H?.y??0,o:H?.o??1,ty:0,to:1,appliedO:-1,label:z})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Pl);this.buildOpenings(s),this.buildFlows(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(h=>h.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?rp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(qr(this.building).map(h=>[h.key,h])),n=this.building.settings.roof?.solar??[],r=Nu(this.flowTime),s=[],o=new Ze,a=Gn(new le({vertexColors:!0,transparent:!0,side:we}),this.themeUniform),l=Gn(new gn({vertexColors:!0,transparent:!0,blending:Cl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Gn(new le({vertexColors:!0,transparent:!0,side:we,depthWrite:!1}),this.themeUniform),u=t.map(h=>{let f=new Ze;f.add(new Xt(h.solid.geometry(),a),new xn(h.lines.geometry(),l)),h.glass.count&&f.add(new Xt(h.glass.geometry(),c));let d=n.flatMap(x=>{let g=e.get(x.face);return g&&(g.section?h.sections?.includes(g.section):h===t[0])?[{face:g,field:x}]:[]}),p=Uu(d,h.floor.elevation+h.base);if(p){let x=new Xt(p.geometry,r);x.renderOrder=9,f.add(x),s.push(p),io(p,this.solarLevels)}return f.renderOrder=8,o.add(f),{group:f,floorId:h.floor.id,base:h.base,lift:h.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:u,solid:a,lines:l,glass:c,live:r,lives:s},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,s=1-Math.exp(-t/Op),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*EM:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:AM)):r=this.explode?n.rank*TM:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Op);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Bp);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Pl,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,p=a[f]??0,x=d-p;Math.abs(x)<.003?u[f]=d:(u[f]=p+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=h}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new st(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*LM+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>Vu?.5+.5*Math.sin(f/140):f/Vu;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new oe,h=[],f=[],d=new Map,p=t.floor.height;for(let x of r){let g=x.lamp==="strip"?(x.base??p)>Math.min(t.floor.cut_height,p):x.lamp?Vp.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let m=u.count,v=x.pack?De(x.pack):void 0,[M,b,y]=x.size??[.3,.3,.3];x.model?Gd(u,x.model,x.x,x.model==="camera_ceiling"?p:x.y,x.z,x.rotation??0):v?_l(u,v,{x:x.x,z:x.z,rotation:x.rotation??0,w:M,d:b,h:y,mirror:x.mirror},x.base??0,65280):ku(u,{...x,lamp:x.lamp},p,65280),d.set(x.furnitureId??x.id,{start:m,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:m,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:m,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=td(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],p=d?.55+.45*d.level:0,x=d?new st(...d.color.map(v=>Math.min(1,v*p))):new st(IM),g=n(u.id);g>0&&x.lerp(new st(1,1,1),.7*g);let m=new st(x.getHex());ed(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.sun,n=(this.building?.settings.north??0)*re,r=this.weather?.cloud??0,s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(s===t.sunSig)return;t.sunSig=s;let o=new oe;if(e&&e.elevation>2&&r<.97){let a=Math.min(1,e.elevation/12)*(1-.8*r),l=e.elevation*re,c=e.azimuth*re,u=[Math.sin(n+c),-Math.cos(n+c)],h=1/Math.tan(l);for(let f of t.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let d=[-f.toRoom[0],-f.toRoom[1]],p=d[0]*u[0]+d[1]*u[1];if(p<.05)continue;let x=t.openings.get(f.opening.id),g=f.top-(x?.cover??0)*(f.top-f.sill);if(g-f.sill<.05)continue;let m=(_,E)=>{let I=Math.min(7,E*h);return[f.start[0]+f.axis[0]*_+f.toRoom[0]*f.faceRoom-u[0]*I,.02,f.start[1]+f.axis[1]*_+f.toRoom[1]*f.faceRoom-u[1]*I]},v=.14*a*Math.min(1,p*1.5),M=new st(1*v,.82*v,.55*v),b=M.clone().multiplyScalar(.45),y=t.floor.rooms.find(_=>_.id===f.opening.room_id);if(!y||y.points.length<3)continue;let T=Math.max(1,Math.ceil(Math.min(7,g*h)/.25)),w=Math.max(1,Math.ceil(f.width/.3));for(let _=0;_<T;_++){let E=f.sill+(g-f.sill)*_/T,I=f.sill+(g-f.sill)*(_+1)/T,D=_/T,R=(_+1)/T,C=M.clone().lerp(b,D),P=M.clone().lerp(b,R);for(let L=0;L<w;L++){let U=f.width*L/w,N=f.width*(L+1)/w,z=m((U+N)/2,(E+I)/2);if(!ce([z[0],z[2]],y.points))continue;let B=m(U,E),k=m(N,E),H=m(N,I),nt=m(U,I);o.tri(B,k,H,C,C,P),o.tri(B,H,nt,C,P,P)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new oe,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let m=(l.rotation??0)*re,v=[-Math.sin(m),Math.cos(m)],M=l.model==="camera_ceiling",b=l.reach??(M?3:4.5),y=(l.fov??(M?360:90))*re/2,T=l.motion?new st(.9,.12,.16):new st(.04,.22,.28),w=new st(0,0,0),_=Math.max(4,Math.round(y/.15)),E=.015,I=t.geo.walls2d,D=P=>{let L=v[0]*Math.cos(P)-v[1]*Math.sin(P),U=v[1]*Math.cos(P)+v[0]*Math.sin(P),N=b;for(let z of I){let B=z.b[0]-z.a[0],k=z.b[1]-z.a[1],H=L*k-U*B;if(Math.abs(H)<1e-9)continue;let nt=((z.a[0]-l.x)*k-(z.a[1]-l.z)*B)/H,J=((z.a[0]-l.x)*U-(z.a[1]-l.z)*L)/H;nt>.45&&nt<N&&J>=0&&J<=1&&(N=nt)}return N},R=P=>{let L=D(P);return[l.x+(v[0]*Math.cos(P)-v[1]*Math.sin(P))*L,E,l.z+(v[1]*Math.cos(P)+v[0]*Math.sin(P))*L]},C=s.count;for(let P=0;P<_;P++)s.tri([l.x,E,l.z],R(-y+2*y*(P+1)/_),R(-y+2*y*P/_),T,w,w);o.push({id:l.id,start:C,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Vp.has(l.lamp)&&this.wallMode==="cut")continue;let[u,h,f]=l.size??Wu[l.lamp],d=l.base??0,p=(l.rotation??0)*re,x={ceiling:e-.07,downlight:e-.03,spot:e-f,panel:e-.03,pendant:Math.max(.4,e-f)+.08,floor:d+f-.15,uplight:d+f,table:d+f-.09,wall:d+f/2,strip:d+Math.max(.02,f)-.01,bollard:d+f-.08,garden:d+f-.03}[l.lamp],g=(m,v,M=1)=>{n.push(m,x,v),r.push(...c.color.map(b=>b*c.level*.7*M))};if(l.lamp==="strip")for(let m of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+m),l.z),r.push(...c.color.map(v=>v*c.level*.7*.6))):g(l.x+Math.cos(p)*u*m,l.z+Math.sin(p)*u*m,.6);else l.lamp==="wall"?g(l.x-Math.sin(p)*(h/2+.05),l.z+Math.cos(p)*(h/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let m=new st(...c.color.map(T=>T*.09*c.level)),v=new st(0,0,0),M=Math.max(.03,u/2),b=.45+.35*c.level,y=16;for(let T=0;T<y;T++){let w=T/y*Math.PI*2,_=(T+1)/y*Math.PI*2,E=[l.x+Math.cos(w)*M,x,l.z+Math.sin(w)*M],I=[l.x+Math.cos(_)*M,x,l.z+Math.sin(_)*M],D=[l.x+Math.cos(w)*b,.02,l.z+Math.sin(w)*b],R=[l.x+Math.cos(_)*b,.02,l.z+Math.sin(_)*b];s.tri(E,D,R,m,v,v),s.tri(E,R,I,m,v,m)}}}let a=new Zt;a.setAttribute("position",new kt(n,3)),a.setAttribute("color",new kt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Du(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new oe;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*re,l=Math.cos(a),c=Math.sin(a),u=(b,y,T)=>[s.x+b*l-T*c,y,s.z+b*c+T*l];if(o.faces){let b=Math.max(.05,s.w)*(s.mirror?-1:1),y=Math.max(.05,s.d),T=Math.max(.005,s.h),w=fn(t.floor,s);for(let _ of o.faces){if(_.part==="cabin"){let B=De(s.type),k=H=>H.color.toLowerCase()==="#13283a"||H.color==="glass";if(B&&B.parts.some(k)){let H=new st(..._.color.map(nt=>Math.min(1,nt*(.3+.5*_.level))));wu(r,B,s,w,H.getHex(),k);continue}}if(_.part==="band"||_.part==="cabin"){let B=_.part==="cabin",k=w+T*(B?.6:.42),H=B?w+T*.86:k+.07,nt=new st(..._.color.map(mt=>Math.min(1,mt*(.3+.45*_.level)))),J=Math.abs(b)/2+(B?.012:.02),et=y/2+(B?.012:.02),lt=[[-J,-et],[J,-et],[J,et],[-J,et]];for(let mt=0;mt<4;mt++){let q=lt[mt],K=lt[(mt+1)%4],ut=u(q[0]*Math.sign(b),k,q[1]),yt=u(K[0]*Math.sign(b),k,K[1]),ft=u(K[0]*Math.sign(b),H,K[1]),Nt=u(q[0]*Math.sign(b),H,q[1]);r.tri(ut,yt,ft,nt),r.tri(ut,ft,Nt,nt)}continue}let E=_.part==="right"?.03:-Math.abs(b)/2+.03,I=_.part==="left"?-.03:Math.abs(b)/2-.03,D=w+(_.part==="bottom"?T*.45:T)+.006,R=new st(..._.color.map(B=>Math.min(1,B*(.35+.65*_.level)))),C=new st(0,0,0),P=(B,k,H=D)=>u(B*Math.sign(b),H,k),L=[P(E,-y/2+.03),P(I,-y/2+.03),P(I,y/2-.03),P(E,y/2-.03)];r.tri(L[0],L[2],L[1],R),r.tri(L[0],L[3],L[2],R);let U=.12+.1*_.level,N=R.clone().multiplyScalar(.5),z=[P(E-U,-y/2-U,D+.004),P(I+U,-y/2-U,D+.004),P(I+U,y/2+U,D+.004),P(E-U,y/2+U,D+.004)];for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(L[B],z[k],z[B],N,C,C),r.tri(L[B],L[k],z[k],N,N,C)}}continue}let h=De(s.type);if(h&&!h.light&&o.ring&&h.parts.some(b=>b.glow)){let b=new st(...o.color.map(y=>Math.min(1,y*(.45+.55*o.level))));wu(r,h,s,fn(t.floor,s),b.getHex())}let f=Mu(s,t.floor);if(!f)continue;let d=new st(...o.color.map(b=>Math.min(1,b*(.35+.65*o.level)))),p=new st(0,0,0),x=f.z+.004;if(r.tri(u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),d),r.tri(u(f.x0,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x),d),o.plain)continue;let g=.18+.12*o.level,m=d.clone().multiplyScalar(.5),v=[u(f.x0,f.y0,x),u(f.x1,f.y0,x),u(f.x1,f.y1,x),u(f.x0,f.y1,x)],M=[u(f.x0-g,f.y0-g,x+.01),u(f.x1+g,f.y0-g,x+.01),u(f.x1+g,f.y1+g,x+.01),u(f.x0-g,f.y1+g,x+.01)];for(let b=0;b<4;b++){let y=(b+1)%4;r.tri(v[b],M[b],M[y],m,p,p),r.tri(v[b],M[y],v[y],m,p,m)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Mu(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Xt(new gi(1,1),new le({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new vs().load(o.picture,h=>{if(t.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Ce,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,h=e.rotation*re,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-h,0),t.position.set(e.x+f*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+f*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(Gu).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(Gu(u))??{speed:Hp(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(v=>v*f),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let x=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],g=[];if(Math.abs(x[1])<.5){let v=Math.hypot(x[0],x[2])||1;g.push([-x[2]/v,0,x[0]/v])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[kp*1.4,1]]:[[CM,.25],[kp,1]];for(let[v,M]of m)for(let b of g){let y=v/2,T=(_,E)=>[_[0]+b[0]*y*E,_[1]+b[1]*y*E,_[2]+b[2]*y*E],w=[[T(u.a,-1),u.dist,0],[T(u.b,-1),u.dist+p,0],[T(u.b,1),u.dist+p,1],[T(u.a,1),u.dist,1]];for(let _ of[0,1,2,0,2,3]){let[E,I,D]=w[_];n.push(E[0],E[1],E[2]),r.push(d[0]*M,d[1]*M,d[2]*M),s.push(I,D),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Zt;c.setAttribute("position",new kt(n,3)),c.setAttribute("color",new kt(r,3)),c.setAttribute("uv",new kt(s,2)),c.setAttribute("flowSpeed",new kt(o,1)),c.setAttribute("flowOffset",new kt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Ip(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new st(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new st(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(FM,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=pp(this.activeFloors());e.isEmpty()&&e.set(new V(-4,0,-4),new V(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new V),r=e.getSize(new V),s=this.startView,o=this.floorId===null,a=s?s.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),u=c<1?1.12:1.06,h=gp(e,a,c,this.camera.fov*re,u),f=s?s.theta:h.theta,d=Fu(e,f,a,this.camera.aspect,this.camera.fov*re,l),p=Math.max(8,d.radius);this.controls.maxRadius=Math.max(40,p*3),s&&o?n.y=e.min.y+r.y*(this.houseView?.45:.3):n.add(d.offset),this.floorId===null&&(this.houseRadius=p),s&&o&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,s.radius*1.5)),this.controls.flyTo({target:n,radius:s&&o?s.radius:p,phi:a,theta:f},t)}cameraFrame(){let t=this.size.w<700?12:18,e=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:t);return{width:this.size.w,height:this.size.h,left:e,right:t,top:t,bottom:t}}placeGround(){let t=new Qe,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new V(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new V(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=VM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new V),r=t.getSize(new V),s=Hu*Math.ceil((Math.max(r.x,r.z)+16)/Hu);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Pi-.02,n.z)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Ms;return r.setFromCamera(new $t(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??jt;if(f!==jt&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.outdoorTris,l);if(u)return{floorId:c.floor.id,outdoorId:u};let h=o(c.geo.furnitureTris,l),f=h?this.pickFurniture.get(h):void 0;if(f)return{entity:f};if(a.face&&!h){let d=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,p=Math.floor(d/16),x=d%16,g=this.wallMode==="cut"&&p===0,m=(c.mask.glass.value&1<<x)!==0;if(!g){let v=n.ray.direction,M=Math.hypot(v.x,v.z)||1,b=[a.point.x-v.x/M*.3,a.point.z-v.z/M*.3],y=c.floor.rooms.find(T=>T.points.length>=3&&ce(b,T.points))?.id??null;if(this.roomId!==null){if(y===this.roomId)return{floorId:c.floor.id,roomId:y}}else if(!m&&y)return{floorId:c.floor.id,roomId:y}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Vu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}if(n&&"outdoorId"in n){this.options.onOutdoorTap?this.options.onOutdoorTap(n.floorId,n.outdoorId):this.options.onRoomTap?.(n.floorId,null);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(s,!1)){if(o.faceIndex==null)continue;let a=r.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let r=this.rayAt(e,n),s=t.floor.elevation+t.y,o=r.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(s-r.ray.origin.y)/o.y;return a<=0?null:[r.ray.origin.x+o.x*a,r.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e)}grabItem(t,e,n,r){let s=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,r);return!s||!o?!1:s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),u=l&&this.floorPoint(l,t,e);if(!l||!c||!u)return;let h=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/h)*h,n.z=c.z=Math.round((u[1]+n.offset[1])/h)*h,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=this.floorPoint(s,t,e);if(!o)return;let a=this.building?.settings.grid??.05;r.x=Math.round((o[0]+r.offset[0])/a)*a,r.z=Math.round((o[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(m=>m.floor.furniture.some(v=>v.id===t)):void 0,n=e?.floor.furniture.find(m=>m.id===t);if(!e||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=De(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?fn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:fn(e.floor,n),u=n.rotation*re,h=Math.cos(u),f=Math.sin(u),d=(m,v,M)=>[r+m*h-v*f,M,s+m*f+v*h],p=new Ve,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new st(.25,.9,1);for(let m=0;m<4;m++){let[v,M]=x[m],[b,y]=x[(m+1)%4];p.seg(d(v,M,c+.01),d(b,y,c+.01),g),p.seg(d(v,M,c+l),d(b,y,c+l),g),p.seg(d(v,M,c+.01),d(v,M,c+l),g)}p.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new st(1,1,1)),this.ghost=new xn(p.geometry(),new gn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(v=>v.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ke(s,o);a.texture.colorSpace=Ce;let l=new Jn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let x=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let C of this.floors)C.group.visible=C===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let v=m.floor.rooms.flatMap(C=>C.points),M=m.floor.elevation,b=new Qe(new V(Math.min(...v.map(C=>C[0]))-.3,M,Math.min(...v.map(C=>C[1]))-.3),new V(Math.max(...v.map(C=>C[0]))+.3,M+Math.min(m.floor.cut_height,m.floor.height),Math.max(...v.map(C=>C[1]))+.3)),y=b.getCenter(new V),T=-.6,w=.8,_=new V(Math.sin(w)*Math.sin(T),Math.cos(w),Math.sin(w)*Math.cos(T));l.position.copy(y).addScaledVector(_,100),l.lookAt(y),l.updateMatrixWorld();let E=.5,I=.5;for(let C of[b.min.x,b.max.x])for(let P of[b.min.y,b.max.y])for(let L of[b.min.z,b.max.z]){let U=new V(C,P,L).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(U.x)),I=Math.max(I,Math.abs(U.y))}let D=s/o;E/I>D?I=E/D:E=I*D,l.left=-E*1.05,l.right=E*1.05,l.top=I*1.05,l.bottom=-I*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let R=x.createImageData(s,o);for(let C=0;C<o;C++)R.data.set(d.subarray((o-1-C)*s*4,(o-C)*s*4),C*s*4);x.putImageData(R,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Lp(n.room,void 0,void 0,n.obstacles):zu(n.rest),l=a.length?a:zu(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!ce(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Np[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new oe,s=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);_e(r,f,l,c,u,h,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new le({vertexColors:!0});let o=new oe;_e(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ze,n=new le({color:Np[t.mode]});return e.add(new Xt(this.robotGeo,this.robotMat),new Xt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Fp(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t){let e=s=>new st(.25-.2*s,.95-.83*s,1-.7*s),n=new st(0,0,0),r=.02;for(let s of this.floors){let o=new oe,a=null;for(let l of t){if(l.floorId!==s.floor.id)continue;let c=e(l.age);if(a){let u=Math.hypot(l.x-a.x,l.z-a.z)||1,h=-(l.z-a.z)/u*.06,f=(l.x-a.x)/u*.06,d=e(a.age);o.tri([a.x+h,r,a.z+f],[l.x+h,r,l.z+f],[l.x-h,r,l.z-f],d,c,c),o.tri([a.x+h,r,a.z+f],[l.x-h,r,l.z-f],[a.x-h,r,a.z-f],d,c,d)}for(let u=0;u<12;u++){let h=u/12*Math.PI*2,f=(u+1)/12*Math.PI*2;o.tri([l.x,r,l.z],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],[l.x+Math.cos(h)*.22,r,l.z+Math.sin(h)*.22],c,n,n)}a=l}s.trailMesh.geometry.dispose(),s.trailMesh.geometry=o.geometry(),s.trailMesh.visible=o.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*re,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*re)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new V(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new V(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new V(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=this.stepFans(e),l=!1;if(this.flashes.size){let p=new Set;for(let[x,g]of this.flashes){let m=this.deviceFloor.get(x);m&&p.add(m),g<=t&&this.flashes.delete(x)}l=this.flashes.size>0;for(let x of this.floors)p.has(x.floor.id)&&this.buildLamps(x)}let c=this.placeRoof(e),u=this.stepRobots(t),h=this.stepWeather(t),f=r||s||o||a||l||c,d=[];if(r&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("fans"),l&&d.push("flash"),c&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),u&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*Gp:Gp;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},p)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*zp:zp))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/s+u[1]*r/s>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new V,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let m=(n.x+1)/2*t,v=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:v}),(!c||m>c.x)&&(c={x:m,y:v})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.floorId!==null&&(o.views!=="all"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new V(o.p[0],o.p[1]+(l?.y??0)+(o.roof?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length(),f=u.normalize().dot(new V(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new V,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function UM(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new pi(t);return s.flipY=!1,s.wrapS=ln,s.wrapT=ln,s.anisotropy=4,s.colorSpace=Ce,s}function NM(i){let t=new le({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function OM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new pi(i);return e.wrapS=ki,e.wrapT=ki,e.colorSpace=Ce,e}function Gu(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function Hp(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function BM(i){let t=new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:we});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function zM(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function kM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new pi(t);return r.colorSpace=Ce,r}function VM(){let t=Hu,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new pi(e);return s.anisotropy=4,s.colorSpace=Ce,s}function lE(i,t){return new Xu(i,t)}function ku(i,t,e,n){let[r,s,o]=t.size??Wu[t.lamp],a=t.base??0,l=(t.rotation??0)*re,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[t.x+x*c-g*u,t.z+x*u+g*c],f=(x,g,m,v,M,b=14)=>{let y=[];for(let T=0;T<b;T++){let w=T/b*Math.PI*2;y.push([t.x+Math.cos(w)*x,t.z+Math.sin(w)*x])}_e(i,y,g,m,v,M,{aoFrom:0,bottom:!0})},d=(x,g,m,v,M,b,y,T=y)=>_e(i,[h(x,m),h(g,m),h(g,v),h(x,v)],M,b,y,T,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":f(p*.25,e-.04,e,te,te,8),f(p,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,te,te,8);let g=t.variant==="globe"?x+2*p:t.variant==="drum"?x+.24:x+.2;if(f(.008,g,e-.02,te,te,5),t.variant==="globe")for(let v=0;v<7;v++){let M=Math.PI*(v/7),b=Math.PI*((v+1)/7);f(p*Math.max(.2,Math.sin((M+b)/2)),x+p-p*Math.cos(M),x+p-p*Math.cos(b),n,n,14)}else if(t.variant==="cone")for(let v=0;v<4;v++)f(p*(.25+.75*(4-v)/4),x+.06*v,x+.06*(v+1),n,n,16);else t.variant==="drum"?f(p,x,x+.24,n,n,18):(f(p*.35,x+.14,x+.2,n,n,12),f(p,x,x+.14,n,n,16));break}case"downlight":f(p,e-.012,e,te,te,12),f(p*.7,e-.02,e-.012,n,n,12);break;case"spot":f(p*.6,e-.02,e,te,te,10),f(p,e-Math.max(.06,o),e-.02,te,te,12),f(p*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,te,te),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,p*.6),a,a+.03,te,te),f(.014,a+.03,a+o-.12,te,te,6),f(p,a+o-.14,a+o-.02,te,te),f(p*.92,a+o-.02,a+o,n,n);break;case"bollard":f(p,a,a+o-.14,te,te,10),f(p*.9,a+o-.14,a+o-.03,n,n,10),f(p*1.1,a+o-.03,a+o,te,te,10);break;case"garden":f(.012,a,a+o-.08,te,te,5),f(p,a+o-.08,a+o-.01,te,te,10),f(p*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,p*.7),a,a+.03,te,te),f(.014,a+.03,a+o-.28,te,te,6),f(p,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,p*.55),a,a+.03,te,te),f(.012,a+.03,a+o-.16,te,te,6),f(p,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??hl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,te),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,g-x,g,n);break}let m=(t.roll??0)*re,v=Math.cos(m),M=Math.sin(m),b=t.upright?a+r/2:g-x/2,y=(I,D,R)=>{let C=I,P=D*v-R*M,L=D*M+R*v;return t.upright&&([C,P]=[-P,C]),[t.x+C*c-L*u,b+P,t.z+C*u+L*c]},T=[y(-r/2,-x/2,-s/2),y(r/2,-x/2,-s/2),y(r/2,-x/2,s/2),y(-r/2,-x/2,s/2),y(-r/2,x/2,-s/2),y(r/2,x/2,-s/2),y(r/2,x/2,s/2),y(-r/2,x/2,s/2)],w=new st(n),_=[t.x,b,t.z],E=(I,D,R,C)=>{let[P,L,U]=[T[I],T[D],T[R]],N=[(L[1]-P[1])*(U[2]-P[2])-(L[2]-P[2])*(U[1]-P[1]),(L[2]-P[2])*(U[0]-P[0])-(L[0]-P[0])*(U[2]-P[2]),(L[0]-P[0])*(U[1]-P[1])-(L[1]-P[1])*(U[0]-P[0])],z=[P[0]-_[0],P[1]-_[1],P[2]-_[2]],B=N[0]*z[0]+N[1]*z[1]+N[2]*z[2]<0,[k,H,nt,J]=B?[T[C],T[R],T[D],T[I]]:[T[I],T[D],T[R],T[C]];i.tri(k,H,nt,w,w,w),i.tri(k,nt,J,w,w,w)};E(0,1,2,3),E(4,5,6,7),E(0,1,5,4),E(1,2,6,5),E(2,3,7,6),E(3,0,4,7);break}}}export{Xu as FloorplanViewer,lE as createViewer,wM as furniturePreview,DM as isLowEnd,ku as pushLampModel};
