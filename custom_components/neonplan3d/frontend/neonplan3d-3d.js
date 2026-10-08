var Lh=0,dc=1,Fh=2;var Ms=1,Dh=2,Lr=3,_i=0,en=1,Se=2,On=0,vi=1,Fe=2,pc=3,Ss=4,Uh=5;var Xi=100,Nh=101,Oh=102,Bh=103,zh=104,kh=200,Vh=201,Gh=202,Hh=203,mc=204,gc=205,Wh=206,Xh=207,qh=208,Yh=209,$h=210,Zh=211,Jh=212,Kh=213,Qh=214,Do=0,Uo=1,No=2,Mr=3,Oo=4,Bo=5,zo=6,ko=7,xc=0,jh=1,tf=2,Tn=0,bc=1,_c=2,vc=3,yc=4,Mc=5,Sc=6,wc=7;var Tc=300,yi=301,qi=302,pa=303,ma=304,ws=306,zi=1e3,ln=1001,Vo=1002,ke=1003,ef=1004;var Ts=1005;var Ge=1006,ga=1007;var Mi=1008;var hn=1009,Ec=1010,Ac=1011,Fr=1012,xa=1013,En=1014,An=1015,Rn=1016,ba=1017,_a=1018,Dr=1020,Rc=35902,Cc=35899,Ic=1021,Pc=1022,bn=1023,Dn=1026,Si=1027,Lc=1028,va=1029,wi=1030,ya=1031;var Ma=1033,Es=33776,As=33777,Rs=33778,Cs=33779,Sa=35840,wa=35841,Ta=35842,Ea=35843,Aa=36196,Ra=37492,Ca=37496,Ia=37488,Pa=37489,Is=37490,La=37491,Fa=37808,Da=37809,Ua=37810,Na=37811,Oa=37812,Ba=37813,za=37814,ka=37815,Va=37816,Ga=37817,Ha=37818,Wa=37819,Xa=37820,qa=37821,Ya=36492,$a=36494,Za=36495,Ja=36283,Ka=36284,Ps=36285,Qa=36286;var ns=2300,Go=2301,Po=2302,nc=2303,ic=2400,rc=2401,sc=2402;var nf=3200;var Fc=0,rf=1,Jn="",Ce="srgb",is="srgb-linear",rs="linear",fe="srgb";var Lo=7680;var sf=519,of=512,af=513,lf=514,ja=515,cf=516,uf=517,tl=518,hf=519,ff=35044,Dc=35048;var Uc="300 es",wn=2e3,ss=2001;function Yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $p(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){let i=Sr("canvas");return i.style.display="block",i}var eh={},wr=null;function Nc(...i){let t="THREE."+i.shift();wr?wr("log",t,...i):console.log(t,...i)}function pf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=pf(i);let t="THREE."+i.shift();if(wr)wr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=pf(i);let t="THREE."+i.shift();if(wr)wr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Bi(...i){let t=i.join(" ");t in eh||(eh[t]=!0,Ot(...i))}function mf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var gf={[Do]:Uo,[No]:zo,[Oo]:ko,[Mr]:Bo,[Uo]:Do,[zo]:No,[ko]:Oo,[Bo]:Mr},Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fl=Math.PI/180,Ho=180/Math.PI;function Ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Zp(i,t){return(i%t+t)%t}function Dl(i,t,e){return(1-e)*i+e*t}function Zr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vc=class Vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;var $t=Vc,Nn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(f!==x||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);p=Math.sin(p*_)/y,a=Math.sin(a*_)/y,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+x*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gc=class Gc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ul.copy(this).projectOnVector(t),this.sub(Ul)}reflect(t){return this.sub(Ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gc.prototype.isVector3=!0;var z=Gc,Ul=new z,nh=new Nn,Hc=class Hc{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=r[0],m=r[3],p=r[6],_=r[1],y=r[4],v=r[7],S=r[2],T=r[5],w=r[8];return s[0]=o*x+a*_+l*S,s[3]=o*m+a*y+l*T,s[6]=o*p+a*v+l*w,s[1]=c*x+u*_+f*S,s[4]=c*m+u*y+f*T,s[7]=c*p+u*v+f*w,s[2]=h*x+d*_+g*S,s[5]=h*m+d*y+g*T,s[8]=h*p+d*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=h*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nl.makeScale(t,e)),this}rotate(t){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nl.makeRotation(-t)),this}translate(t,e){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hc.prototype.isMatrix3=!0;var Vt=Hc,Nl=new Vt,ih=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let i={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===fe&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[is]:{primaries:t,whitePoint:n,transfer:rs,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ee=Jp();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,Wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ar===void 0&&(ar=Sr("canvas")),ar.width=t.width,ar.height=t.height;let r=ar.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ar}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kp=0,Tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ol(r[o].image)):s.push(Ol(r[o]))}else s=Ol(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Qp=0,Bl=new z,Je=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,r=ln,s=Ge,o=Mi,a=bn,l=hn,c=i.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ls(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case Vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case Vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Tc;Je.DEFAULT_ANISOTROPY=1;var Wc=class Wc{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,S=(p+1)/2,T=(u+h)/4,w=(f+x)/4,b=(g+m)/4;return y>v&&y>S?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=w/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=b/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=b/s),this.set(n,r,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;var Ae=Wc,Xo=class extends Un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Je(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Tr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},os=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qo=class extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var da=class da{constructor(t,e,n,r,s,o,a,l,c,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,x,m)}set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new da().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/lr.setFromMatrixColumn(t,0).length(),s=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,tm)}lookAt(t,e,n){let r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),si.crossVectors(n,on),si.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),si.crossVectors(n,on)),si.normalize(),so.crossVectors(on,si),r[0]=si.x,r[4]=so.x,r[8]=on.x,r[1]=si.y,r[5]=so.y,r[9]=on.y,r[2]=si.z,r[6]=so.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],v=n[11],S=n[15],T=r[0],w=r[4],b=r[8],E=r[12],I=r[1],R=r[5],L=r[9],P=r[13],C=r[2],D=r[6],U=r[10],O=r[14],V=r[3],B=r[7],k=r[11],G=r[15];return s[0]=o*T+a*I+l*C+c*V,s[4]=o*w+a*R+l*D+c*B,s[8]=o*b+a*L+l*U+c*k,s[12]=o*E+a*P+l*O+c*G,s[1]=u*T+f*I+h*C+d*V,s[5]=u*w+f*R+h*D+d*B,s[9]=u*b+f*L+h*U+d*k,s[13]=u*E+f*P+h*O+d*G,s[2]=g*T+x*I+m*C+p*V,s[6]=g*w+x*R+m*D+p*B,s[10]=g*b+x*L+m*U+p*k,s[14]=g*E+x*P+m*O+p*G,s[3]=_*T+y*I+v*C+S*V,s[7]=_*w+y*R+v*D+S*B,s[11]=_*b+y*L+v*U+S*k,s[15]=_*E+y*P+v*O+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],_=l*d-c*h,y=a*d-c*f,v=a*h-l*f,S=o*d-c*u,T=o*h-l*u,w=o*f-a*u;return e*(x*_-m*y+p*v)-n*(g*_-m*S+p*T)+r*(g*y-x*S+p*w)-s*(g*v-x*T+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=e*a-n*o,y=e*l-r*o,v=e*c-s*o,S=n*l-r*a,T=n*c-s*a,w=r*c-s*l,b=u*x-f*g,E=u*m-h*g,I=u*p-d*g,R=f*m-h*x,L=f*p-d*x,P=h*p-d*m,C=_*P-y*L+v*R+S*I-T*E+w*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=(a*P-l*L+c*R)*D,t[1]=(r*L-n*P-s*R)*D,t[2]=(x*w-m*T+p*S)*D,t[3]=(h*T-f*w-d*S)*D,t[4]=(l*I-o*P-c*E)*D,t[5]=(e*P-r*I+s*E)*D,t[6]=(m*v-g*w-p*y)*D,t[7]=(u*w-h*v+d*y)*D,t[8]=(o*L-a*I+c*b)*D,t[9]=(n*I-e*L-s*b)*D,t[10]=(g*T-x*v+p*_)*D,t[11]=(f*v-u*T-d*_)*D,t[12]=(a*E-o*R-l*b)*D,t[13]=(e*R-n*E+r*b)*D,t[14]=(x*y-g*S-m*_)*D,t[15]=(u*S-f*y+h*_)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,x=o*u,m=o*f,p=a*f,_=l*c,y=l*u,v=l*f,S=n.x,T=n.y,w=n.z;return r[0]=(1-(x+p))*S,r[1]=(d+v)*S,r[2]=(g-y)*S,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(h+p))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(g+y)*w,r[9]=(m-_)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=lr.set(r[0],r[1],r[2]).length(),a=lr.set(r[4],r[5],r[6]).length(),l=lr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),vn.copy(this);let c=1/o,u=1/a,f=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,e.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=wn,l=!1){let c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===wn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ss)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=wn,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===wn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===ss)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};da.prototype.isMatrix4=!0;var Me=da,lr=new z,vn=new Me,jp=new z(0,0,0),tm=new z(1,1,1),si=new z,so=new z,on=new z,sh=new Me,oh=new Nn,hi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},em=0,ah=new z,cr=new Nn,Gn=new Me,oo=new z,Jr=new z,nm=new z,im=new Nn,lh=new z(1,0,0),ch=new z(0,1,0),uh=new z(0,0,1),hh={type:"added"},rm={type:"removed"},ur={type:"childadded",child:null},zl={type:"childremoved",child:null},sn=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new hi,n=new Nn,r=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Vt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Jr,oo,this.up):Gn.lookAt(oo,Jr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(Gn),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),ur.child=t,this.dispatchEvent(ur),ur.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rm),zl.child=t,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ee.workingColorSpace){if(t=Zp(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=kl(o,s,t+1/3),this.g=kl(o,s,t),this.b=kl(o,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ee.workingToColorSpace(Ye.copy(this),t),Math.round(ne(Ye.r*255,0,255))*65536+Math.round(ne(Ye.g*255,0,255))*256+Math.round(ne(Ye.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,r=Ye.g,s=Ye.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ce){ee.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,r=Ye.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(ao);let n=Dl(oi.h,ao.h,e),r=Dl(oi.s,ao.s,e),s=Dl(oi.l,ao.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new rt;rt.NAMES=xf;var as=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ki=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new z,Hn=new z,Vl=new z,Wn=new z,hr=new z,fr=new z,fh=new z,Gl=new z,Hl=new z,Wl=new z,Xl=new Ae,ql=new Ae,Yl=new Ae,ui=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),yn.subVectors(t,e),r.cross(yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){yn.subVectors(r,e),Hn.subVectors(n,e),Vl.subVectors(t,e);let o=yn.dot(yn),a=yn.dot(Hn),l=yn.dot(Vl),c=Hn.dot(Hn),u=Hn.dot(Vl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Xl.setScalar(0),ql.setScalar(0),Yl.setScalar(0),Xl.fromBufferAttribute(t,e),ql.fromBufferAttribute(t,n),Yl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Xl,s.x),o.addScaledVector(ql,s.y),o.addScaledVector(Yl,s.z),o}static isFrontFacing(t,e,n,r){return yn.subVectors(n,e),Hn.subVectors(t,e),yn.cross(Hn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;hr.subVectors(r,n),fr.subVectors(s,n),Gl.subVectors(t,n);let l=hr.dot(Gl),c=fr.dot(Gl);if(l<=0&&c<=0)return e.copy(n);Hl.subVectors(t,r);let u=hr.dot(Hl),f=fr.dot(Hl);if(u>=0&&f<=u)return e.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(hr,o);Wl.subVectors(t,s);let d=hr.dot(Wl),g=fr.dot(Wl);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fr,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return fh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(fh,a);let p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(hr,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qe=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),co.subVectors(this.max,Kr),dr.subVectors(t.a,Kr),pr.subVectors(t.b,Kr),mr.subVectors(t.c,Kr),ai.subVectors(pr,dr),li.subVectors(mr,pr),Di.subVectors(dr,mr);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Di.z,Di.y,ai.z,0,-ai.x,li.z,0,-li.x,Di.z,0,-Di.x,-ai.y,ai.x,0,-li.y,li.x,0,-Di.y,Di.x,0];return!$l(e,dr,pr,mr,co)||(e=[1,0,0,0,1,0,0,0,1],!$l(e,dr,pr,mr,co))?!1:(uo.crossVectors(ai,li),e=[uo.x,uo.y,uo.z],$l(e,dr,pr,mr,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,lo=new Qe,dr=new z,pr=new z,mr=new z,ai=new z,li=new z,Di=new z,Kr=new z,co=new z,uo=new z,Ui=new z;function $l(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ui.fromArray(i,s);let a=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Le=new z,ho=new $t,om=0,mn=class extends Un{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ff,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ls=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vi=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},am=new Qe,Qr=new z,Zl=new z,fi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):am.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Qr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(Zl)),this.expandByPoint(Qr.copy(t.center).sub(Zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lm=0,pn=new Me,Jl=new sn,gr=new z,an=new Qe,jr=new Qe,ze=new z,Zt=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yp(t)?Vi:ls)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(an.min,jr.min),an.expandByPoint(ze),ze.addVectors(an.max,jr.max),an.expandByPoint(ze)):(an.expandByPoint(jr.min),an.expandByPoint(jr.max))}an.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(t,c),ze.add(gr)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new z,l[b]=new z;let c=new z,u=new z,f=new z,h=new $t,d=new $t,g=new $t,x=new z,m=new z;function p(b,E,I){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,I),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,I),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[b].add(x),a[E].add(x),a[I].add(x),l[b].add(m),l[E].add(m),l[I].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,E=_.length;b<E;++b){let I=_[b],R=I.start,L=I.count;for(let P=R,C=R+L;P<C;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new z,v=new z,S=new z,T=new z;function w(b){S.fromBufferAttribute(r,b),T.copy(S);let E=a[b];y.copy(E),y.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(T,E);let R=v.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,R)}for(let b=0,E=_.length;b<E;++b){let I=_[b],R=I.start,L=I.count;for(let P=R,C=R+L;P<C;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new mn(h,u,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Kl=new z,cm=new z,um=new Vt,Sn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Kl.subVectors(n,e).cross(cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Kl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||um.getNormalMatrix(t),r=this.coplanarPoint(Kl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hm=0,$n=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=vi,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qn=new z,Ql=new z,fo=new z,po=new z,Gi=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ql.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),po.copy(this.origin).sub(Ql);let s=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=po.dot(this.direction),l=-po.dot(fo),c=po.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ql).addScaledVector(fo,h),d}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,_=n.y-o.y,y=n.z-o.z,v=Math.abs(l),S=Math.abs(c),T=Math.abs(u),w,b,E,I,R,L,P,C,D,U,O,V;if(v>=S&&v>=T?(E=l,L=f,D=g,V=p,l>=0?(w=c,b=u,I=h,R=d,P=x,C=m,U=_,O=y):(w=u,b=c,I=d,R=h,P=m,C=x,U=y,O=_)):S>=T?(E=c,L=h,D=x,V=_,c>=0?(w=u,b=l,I=d,R=f,P=m,C=g,U=y,O=p):(w=l,b=u,I=f,R=d,P=g,C=m,U=p,O=y)):(E=u,L=d,D=m,V=y,u>=0?(w=l,b=c,I=f,R=h,P=g,C=x,U=p,O=_):(w=c,b=l,I=h,R=f,P=x,C=g,U=_,O=p)),E===0)return null;let B=w/E,k=b/E,G=1/E,nt=I-B*L,Q=R-k*L,st=P-B*D,ut=C-k*D,mt=U-B*V,Y=O-k*V,$=mt*ut-Y*st,ct=nt*Y-Q*mt,Tt=st*Q-ut*nt;if(r){if($<0||ct<0||Tt<0)return null}else if(($<0||ct<0||Tt<0)&&($>0||ct>0||Tt>0))return null;let ft=$+ct+Tt;if(ft===0)return null;let zt=G*($*L+ct*D+Tt*V);return(ft>0?zt<0:zt>0)?null:this.at(zt/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dh=new Me,Ni=new Gi,mo=new fi,ph=new z,go=new z,xo=new z,bo=new z,jl=new z,_o=new z,mh=new z,vo=new z,Xt=class extends sn{constructor(t=new Zt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){_o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(jl.fromBufferAttribute(f,t),o?_o.addScaledVector(jl,u):_o.addScaledVector(jl.sub(e),u))}e.add(_o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),Ni.copy(t.ray).recast(t.near),!(mo.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(mo,ph)===null||Ni.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(dh.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=y;v<S;v+=3){let T=a.getX(v),w=a.getX(v+1),b=a.getX(v+2);r=yo(this,p,t,n,c,u,f,T,w,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=yo(this,o,t,n,c,u,f,_,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=y;v<S;v+=3){let T=v,w=v+1,b=v+2;r=yo(this,p,t,n,c,u,f,T,w,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,v=m+2;r=yo(this,o,t,n,c,u,f,_,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function fm(i,t,e,n,r,s,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===_i,a),l===null)return null;vo.copy(a),vo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vo);return c<e.near||c>e.far?null:{distance:c,point:vo.clone(),object:i}}function yo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,go),i.getVertexPosition(l,xo),i.getVertexPosition(c,bo);let u=fm(i,t,e,n,go,xo,bo,mh);if(u){let f=new z;ui.getBarycoord(mh,go,xo,bo,f),r&&(u.uv=ui.getInterpolatedAttribute(r,a,l,c,f,new $t)),s&&(u.uv1=ui.getInterpolatedAttribute(s,a,l,c,f,new $t)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};ui.getNormal(go,xo,bo,h.normal),u.face=h,u.barycoord=f}return u}var Yo=class extends Je{constructor(t=null,e=1,n=1,r,s,o,a,l,c=ke,u=ke,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=new fi,dm=new $t(.5,.5),Mo=new z,cs=class{constructor(t=new Sn,e=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],_=s[12],y=s[13],v=s[14],S=s[15];if(r[0].setComponents(c-o,d-u,p-g,S-_).normalize(),r[1].setComponents(c+o,d+u,p+g,S+_).normalize(),r[2].setComponents(c+a,d+f,p+x,S+y).normalize(),r[3].setComponents(c-a,d-f,p-x,S-y).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,d-h,p-m,S-v).normalize();else if(r[4].setComponents(c-l,d-h,p-m,S-v).normalize(),e===wn)r[5].setComponents(c+l,d+h,p+m,S+v).normalize();else if(e===ss)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);let e=dm.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Mo.x=r.normal.x>0?t.max.x:t.min.x,Mo.y=r.normal.y>0?t.max.y:t.min.y,Mo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gn=class extends $n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$o=new z,Zo=new z,gh=new Me,ts=new Gi,So=new fi,tc=new z,xh=new z,Jo=class extends sn{constructor(t=new Zt,e=new gn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)$o.fromBufferAttribute(e,r-1),Zo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=$o.distanceTo(Zo);t.setAttribute("lineDistance",new kt(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),So.radius+=s,t.ray.intersectsSphere(So)===!1)return;gh.copy(r).invert(),ts.copy(t.ray).applyMatrix4(gh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),_=u.getX(x+1),y=wo(this,t,ts,l,p,_,x);y&&e.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=wo(this,t,ts,l,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=wo(this,t,ts,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=wo(this,t,ts,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if($o.fromBufferAttribute(a,r),Zo.fromBufferAttribute(a,s),e.distanceSqToSegment($o,Zo,tc,xh)>n)return;tc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tc);if(!(c<t.near||c>t.far))return{distance:c,point:xh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var bh=new z,_h=new z,xn=class extends Jo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)bh.fromBufferAttribute(e,r),_h.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bh.distanceTo(_h);t.setAttribute("lineDistance",new kt(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hi=class extends $n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vh=new Me,oc=new Gi,To=new fi,Eo=new z,Rr=class extends sn{constructor(t=new Zt,e=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),To.radius+=s,t.ray.intersectsSphere(To)===!1)return;vh.copy(r).invert(),oc.copy(t.ray).applyMatrix4(vh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let m=c.getX(g);Eo.fromBufferAttribute(f,m),yh(Eo,m,l,r,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)Eo.fromBufferAttribute(f,g),yh(Eo,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function yh(i,t,e,n,r,s,o){let a=oc.distanceSqToPoint(i);if(a<e){let l=new z;oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var us=class extends Je{constructor(t=[],e=yi,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},di=class extends Je{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends Je{constructor(t,e,n=En,r,s,o,a=ke,l=ke,c,u=Dn,f=1){if(u!==Dn&&u!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ko=class extends pi{constructor(t,e=En,n=yi,r,s,o=ke,a=ke,l,c=Dn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hs=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Cr=class i extends Zt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function g(x,m,p,_,y,v,S,T,w,b,E){let I=v/w,R=S/b,L=v/2,P=S/2,C=T/2,D=w+1,U=b+1,O=0,V=0,B=new z;for(let k=0;k<U;k++){let G=k*R-P;for(let nt=0;nt<D;nt++){let Q=nt*I-L;B[x]=Q*_,B[m]=G*y,B[p]=C,c.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[p]=T>0?1:-1,u.push(B.x,B.y,B.z),f.push(nt/w),f.push(1-k/b),O+=1}}for(let k=0;k<b;k++)for(let G=0;G<w;G++){let nt=h+G+D*k,Q=h+G+D*(k+1),st=h+(G+1)+D*(k+1),ut=h+(G+1)+D*k;l.push(nt,Q,ut),l.push(Q,st,ut),V+=6}a.addGroup(d,V,E),d+=V,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fs=class i extends Zt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new z,u=new $t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function pm(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=bf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=_m(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<r;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ds(s,o,e,a,l,c,0),o}function bf(i,t,e,n,r){let s;if(r===Im(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Mh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Mh(o/n|0,i[o],i[o+1],s);return s&&Ir(s,s.next)&&(ms(s),s=s.next),s}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ir(e,e.next)||Ee(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ds(i,t,e,n,r,s,o){if(!i)return;!o&&s&&wm(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?gm(i,n,r,s):mm(i)){t.push(l.i,i.i,c.i),ms(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=xm(Wi(i),t),ds(i,t,e,n,r,s,2)):o===2&&bm(i,t,e,n,r,s):ds(Wi(i),t,e,n,r,s,1);break}}}function mm(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&es(r,a,s,l,o,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gm(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ee(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),g=Math.min(u,f,h),x=Math.max(a,l,c),m=Math.max(u,f,h),p=ac(d,g,t,e,n),_=ac(x,m,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&es(a,u,l,f,c,h,y.x,y.y)&&Ee(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&es(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&es(a,u,l,f,c,h,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&es(a,u,l,f,c,h,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xm(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Ir(n,r)&&vf(n,e,e.next,r)&&ps(n,r)&&ps(r,n)&&(t.push(n.i,e.i,r.i),ms(e),ms(e.next),e=i=r),e=e.next}while(e!==i);return Wi(e)}function bm(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Am(o,a)){let l=yf(o,a);o=Wi(o,o.next),l=Wi(l,l.next),ds(o,t,e,n,r,s,0),ds(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function _m(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=bf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Em(c))}r.sort(vm);for(let s=0;s<r.length;s++)e=ym(r[s],e);return e}function vm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function ym(i,t){let e=Mm(i,t);if(!e)return t;let n=yf(e,i);return Wi(n,n.next),Wi(e,e.next)}function Mm(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Ir(i,e))return e;do{if(Ir(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_f(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let f=Math.abs(r-e.y)/(n-e.x);ps(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Sm(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Sm(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function wm(i,t,e,n){let r=i;do r.z===0&&(r.z=ac(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Tm(r)}function Tm(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ac(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Em(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _f(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function es(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&_f(i,t,e,n,r,s,o,a)}function Am(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rm(i,t)&&(ps(i,t)&&ps(t,i)&&Cm(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Ir(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ir(i,t){return i.x===t.x&&i.y===t.y}function vf(i,t,e,n){let r=Ro(Ee(i,t,e)),s=Ro(Ee(i,t,n)),o=Ro(Ee(e,n,i)),a=Ro(Ee(e,n,t));return!!(r!==s&&o!==a||r===0&&Ao(i,e,t)||s===0&&Ao(i,n,t)||o===0&&Ao(e,i,n)||a===0&&Ao(e,t,n))}function Ao(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ro(i){return i>0?1:i<0?-1:0}function Rm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ps(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Cm(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yf(i,t){let e=lc(i.i,i.x,i.y),n=lc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Mh(i,t,e,n){let r=lc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Im(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var cc=class{static triangulate(t,e,n=2){return pm(t,e,n)}},gs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Sh(t),wh(n,t);let o=t.length;e.forEach(Sh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,wh(n,e[l]);let a=cc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Sh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var mi=class i extends Zt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let _=p*h-o;for(let y=0;y<c;y++){let v=y*f-s;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,v=_+c*(p+1),S=_+1+c*(p+1),T=_+1+c*p;d.push(y,v,T),d.push(v,S,T)}this.setIndex(d),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xs=class i extends Zt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=t,h=(e-t)/r,d=new z,g=new $t;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let p=s+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<r;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,y=_,v=_+n+1,S=_+n+2,T=_+1;a.push(y,v,T),a.push(v,S,T)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Th(r))r.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Th(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let r in n)t[r]=n[r]}return t}function Th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Mf={clone:Yi,merge:je},Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(r.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qo=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var jo=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ta=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ec(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ea=class extends gi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case rc:s=t,a=2*e-n;break;case sc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:o=t,l=2*n-e;break;case sc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+_*o[c+S]+y*o[l+S]+v*o[f+S];return s}},na=class extends gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},ia=class extends gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ra=class extends gi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(r-e),x=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*g;return s}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*h+g*2,_=f[p],y=f[p+1],v=t*h+g*2,S=u[v],T=u[v+1],w=Um(n,e,_,S,r);s[g]=Sf(w,x,y,T,m)}return s}};function Sf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Dm(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Um(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Sf(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Dm(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var un=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),ec(t.settings)&&(n.settings={inTangents:xr(t.settings.inTangents,Array),outTangents:xr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ra(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ns:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break;case nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Po;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;ec(this.settings)&&(Eh(this.settings.inTangents,t),Eh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Bt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&$p(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Po,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,ec(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Eh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Go;var xi=class extends un{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=ns;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends un{constructor(t,e,n,r){super(t,e,n,r)}};sa.prototype.ValueTypeName="color";var oa=class extends un{constructor(t,e,n,r){super(t,e,n,r)}};oa.prototype.ValueTypeName="number";var aa=class extends gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Nn.slerpFlat(s,0,o,c-a,o,c,l);return s}},bs=class extends un{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends un{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=ns;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends un{constructor(t,e,n,r){super(t,e,n,r)}};la.prototype.ValueTypeName="vector";var Fo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ah(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ah(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ah(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ca=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wf=new ca,Pr=class{constructor(t){this.manager=t!==void 0?t:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=new WeakMap,ua=class extends Pr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Fo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=br.get(o);f===void 0&&(f=[],br.set(o,f)),f.push({onLoad:e,onError:r})}return o}let a=Sr("img");function l(){u(),e&&e(this);let f=br.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}br.delete(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),Fo.remove(`image:${t}`);let h=br.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(f)}br.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fo.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var _s=class extends Pr{constructor(t){super(t)}load(t,e,n,r){let s=new Je,o=new ua(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Co=new z,Io=new Nn,Fn=new z,vs=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Co,Io,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Io,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Co,Io,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Io,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new z,Rh=new $t,Ch=new $t,$e=class extends vs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ch),e.subVectors(Ch,Rh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zn=class extends vs{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var _r=-90,vr=1,ha=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $e(_r,vr,t,e);r.layers=this.layers,this.add(r);let s=new $e(_r,vr,t,e);s.layers=this.layers,this.add(s);let o=new $e(_r,vr,t,e);o.layers=this.layers,this.add(o);let a=new $e(_r,vr,t,e);a.layers=this.layers,this.add(a);let l=new $e(_r,vr,t,e);l.layers=this.layers,this.add(l);let c=new $e(_r,vr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fa=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bc="\\[\\]\\.:\\/",Nm=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",Om="[^"+Bc.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",zc),zm=/(WCOD+)?/.source.replace("WCOD",Om),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Gm=new RegExp("^"+Bm+zm+km+Vm+"$"),Hm=["material","materials","bones","map"],uc=class{constructor(t,e,n){let r=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nm,"")}static parseTrackName(t){let e=Gm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Hm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=uc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BM=new Float32Array(1);var Ih=new Me,ys=class{constructor(t,e,n=0,r=1/0){this.ray=new Gi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(t,e=!0,n=[]){return hc(t,this,n,e),n.sort(Ph),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)hc(t[r],this,n,e);return n.sort(Ph),n}};function Ph(i,t){return i.distance-t.distance}function hc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)hc(s[o],t,e,!0)}}var Xc=class Xc{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Xc.prototype.isMatrix2=!0;var fc=Xc;function kc(i,t,e,n){let r=Wm(n);switch(e){case Ic:return i*t;case Lc:return i*t/r.components*r.byteLength;case va:return i*t/r.components*r.byteLength;case wi:return i*t*2/r.components*r.byteLength;case ya:return i*t*2/r.components*r.byteLength;case Pc:return i*t*3/r.components*r.byteLength;case bn:return i*t*4/r.components*r.byteLength;case Ma:return i*t*4/r.components*r.byteLength;case Es:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case Ra:case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Is:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ya:case $a:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ja:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ps:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(i){switch(i){case hn:case Ec:return{byteLength:1,components:1};case Fr:case Ac:case Rn:return{byteLength:2,components:1};case ba:case _a:return{byteLength:2,components:4};case En:case xa:case An:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qf(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function qm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,a0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`uniform sampler2D dfgLUT;
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,ux=`#define LAMBERT
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
}`,hx=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,xx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,yx=`uniform float size;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,wx=`uniform vec3 color;
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
}`,Tx=`uniform float rotation;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Ym,alphahash_pars_fragment:$m,alphamap_fragment:Zm,alphamap_pars_fragment:Jm,alphatest_fragment:Km,alphatest_pars_fragment:Qm,aomap_fragment:jm,aomap_pars_fragment:t0,batching_pars_vertex:e0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:r0,bsdfs:s0,iridescence_fragment:o0,bumpmap_pars_fragment:a0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:h0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:b0,displacementmap_pars_vertex:_0,displacementmap_vertex:v0,emissivemap_fragment:y0,emissivemap_pars_fragment:M0,colorspace_fragment:S0,colorspace_pars_fragment:w0,envmap_fragment:T0,envmap_common_pars_fragment:E0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:z0,envmap_vertex:C0,fog_vertex:I0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:F0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:U0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:k0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:H0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:$0,lightprobes_pars_fragment:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:j0,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:rg,metalnessmap_pars_fragment:sg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:ug,normal_fragment_begin:hg,normal_fragment_maps:fg,normal_pars_fragment:dg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:vg,opaque_fragment:yg,packing:Mg,premultiplied_alpha_fragment:Sg,project_vertex:wg,dithering_fragment:Tg,dithering_pars_fragment:Eg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Fg,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Ng,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:kg,transmission_fragment:Vg,transmission_pars_fragment:Gg,uv_pars_fragment:Hg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:Qg,depth_vert:jg,depth_frag:tx,distance_vert:ex,distance_frag:nx,equirect_vert:ix,equirect_frag:rx,linedashed_vert:sx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:ux,meshmatcap_vert:hx,meshmatcap_frag:fx,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:bx,meshtoon_vert:_x,meshtoon_frag:vx,points_vert:yx,points_frag:Mx,shadow_vert:Sx,shadow_frag:wx,sprite_vert:Tx,sprite_frag:Ex},Mt={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},zn={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};zn.physical={uniforms:je([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var el={r:0,b:0,g:0},Ax=new Me,Yf=new Vt;Yf.set(-1,0,0,0,1,0,0,0,1);function Rx(i,t,e,n,r,s){let o=new rt(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(_){let y=!1,v=d(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===ws)?(c===void 0&&(c=new Xt(new Cr(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Yi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yf),c.material.toneMapped=ee.getTransfer(v.colorSpace)!==fe,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new mi(2,2),new cn({name:"BackgroundMaterial",uniforms:Yi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(el,Oc(i)),e.buffers.color.setClear(el.r,el.g,el.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Cx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(R,L,P,C,D){let U=!1,O=f(R,C,P,L);s!==O&&(s=O,c(s.object)),U=d(R,C,P,D),U&&g(R,C,P,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(R,L,P,C),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function f(R,L,P,C){let D=C.wireframe===!0,U=n[L.id];U===void 0&&(U={},n[L.id]=U);let O=R.isInstancedMesh===!0?R.id:0,V=U[O];V===void 0&&(V={},U[O]=V);let B=V[P.id];B===void 0&&(B={},V[P.id]=B);let k=B[D];return k===void 0&&(k=h(l()),B[D]=k),k}function h(R){let L=[],P=[],C=[];for(let D=0;D<e;D++)L[D]=0,P[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:C,object:R,attributes:{},index:null}}function d(R,L,P,C){let D=s.attributes,U=L.attributes,O=0,V=P.getAttributes();for(let B in V)if(V[B].location>=0){let G=D[B],nt=U[B];if(nt===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),G===void 0||G.attribute!==nt||nt&&G.data!==nt.data)return!0;O++}return s.attributesNum!==O||s.index!==C}function g(R,L,P,C){let D={},U=L.attributes,O=0,V=P.getAttributes();for(let B in V)if(V[B].location>=0){let G=U[B];G===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(G=R.instanceColor));let nt={};nt.attribute=G,G&&G.data&&(nt.data=G.data),D[B]=nt,O++}s.attributes=D,s.attributesNum=O,s.index=C}function x(){let R=s.newAttributes;for(let L=0,P=R.length;L<P;L++)R[L]=0}function m(R){p(R,0)}function p(R,L){let P=s.newAttributes,C=s.enabledAttributes,D=s.attributeDivisors;P[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),D[R]!==L&&(i.vertexAttribDivisor(R,L),D[R]=L)}function _(){let R=s.newAttributes,L=s.enabledAttributes;for(let P=0,C=L.length;P<C;P++)L[P]!==R[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function y(R,L,P,C,D,U,O){O===!0?i.vertexAttribIPointer(R,L,P,D,U):i.vertexAttribPointer(R,L,P,C,D,U)}function v(R,L,P,C){x();let D=C.attributes,U=P.getAttributes(),O=L.defaultAttributeValues;for(let V in U){let B=U[V];if(B.location>=0){let k=D[V];if(k===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),k!==void 0){let G=k.normalized,nt=k.itemSize,Q=t.get(k);if(Q===void 0)continue;let st=Q.buffer,ut=Q.type,mt=Q.bytesPerElement,Y=ut===i.INT||ut===i.UNSIGNED_INT||k.gpuType===xa;if(k.isInterleavedBufferAttribute){let $=k.data,ct=$.stride,Tt=k.offset;if($.isInstancedInterleavedBuffer){for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft,$.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ft=0;ft<B.locationSize;ft++)m(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ft=0;ft<B.locationSize;ft++)y(B.location+ft,nt/B.locationSize,ut,G,ct*mt,(Tt+nt/B.locationSize*ft)*mt,Y)}else{if(k.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)p(B.location+$,k.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<B.locationSize;$++)m(B.location+$);i.bindBuffer(i.ARRAY_BUFFER,st);for(let $=0;$<B.locationSize;$++)y(B.location+$,nt/B.locationSize,ut,G,nt*mt,nt/B.locationSize*$*mt,Y)}}else if(O!==void 0){let G=O[V];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(B.location,G);break;case 3:i.vertexAttrib3fv(B.location,G);break;case 4:i.vertexAttrib4fv(B.location,G);break;default:i.vertexAttrib1fv(B.location,G)}}}}_()}function S(){E();for(let R in n){let L=n[R];for(let P in L){let C=L[P];for(let D in C){let U=C[D];for(let O in U)u(U[O].object),delete U[O];delete C[D]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let P in L){let C=L[P];for(let D in C){let U=C[D];for(let O in U)u(U[O].object),delete U[O];delete C[D]}}delete n[R.id]}function w(R){for(let L in n){let P=n[L];for(let C in P){let D=P[C];if(D[R.id]===void 0)continue;let U=D[R.id];for(let O in U)u(U[O].object),delete U[O];delete D[R.id]}}}function b(R){for(let L in n){let P=n[L],C=R.isInstancedMesh===!0?R.id:0,D=P[C];if(D!==void 0){for(let U in D){let O=D[U];for(let V in O)u(O[V].object),delete O[V];delete D[U]}delete P[C],Object.keys(P).length===0&&delete n[L]}}}function E(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Ix(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Px(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let b=w===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&w!==An&&!b&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:S,samples:T}}function Lx(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Sn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let _=s?0:n,y=_*4,v=p.clippingState||null;l.value=v,v=u(g,h,y,d);for(let S=0;S!==y;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(f[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Nr=4,Fx=6,Dx=20,Ux=256,Fs=new Zn,Tf=new rt,qc=null,Yc=0,$c=0,Zc=!1,Nx=new z,$i=new z,il=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Nx}=s;qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qc,Yc,$c),this._renderer.xr.enabled=Zc,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Rn,format:bn,colorSpace:is,depthBuffer:!1},r=Ef(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ox(s)),this._blurMaterial=zx(s,t,e),this._ggxMaterial=Bx(s,t,e)}return r}_compileMaterial(t){let e=new Xt(new Zt,t);this._renderer.compile(e,Fs)}_sceneToCubeUV(t,e,n,r,s){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Tf),f.toneMapping=Tn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new Cr,new le({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,p=!0):(m.color.copy(Tf),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));let S=this._cubeSize;Ur(r,v*S,y>2?S:0,S,S),f.setRenderTarget(r),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===yi||t.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Nr?n-g+Nr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ur(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Fs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ur(t,m,p,3*x,2*x),r.setRenderTarget(t),r.render(a,Fs)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Nr?r-this._lodMax+Nr:0),h=4*(this._cubeSize-u);Ur(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(l,Fs)}};function Ox(i){let t=[],e=[],n=i,r=i-Nr+1+Fx;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let _=p%3*2/3-1,y=p>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];g.set(v,d*h*p);for(let S=0;S<h;S++){let T=u[S*2]*2-1,w=u[S*2+1]*2-1;p===0?$i.set(1,w,T):p===1?$i.set(-T,1,-w):p===2?$i.set(-T,w,1):p===3?$i.set(-1,w,-T):p===4?$i.set(-T,-1,w):$i.set(T,w,-1),$i.toArray(x,(p*h+S)*d)}}let m=new Zt;m.setAttribute("position",new mn(g,d)),m.setAttribute("outputDirection",new mn(x,d)),e.push(new Xt(m,null)),n>Nr&&n--}return{lodMeshes:e,sizeLods:t}}function Ef(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Bx(i,t,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ux,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function zx(i,t,e){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Dx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Af(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Rf(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rl=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new us(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:On});s.uniforms.tEquirect.value=e;let o=new Xt(r,s),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Ge),new ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function kx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===pa||d===ma)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new rl(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===pa||d===ma,x=d===yi||d===qi;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new il(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return g&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new il(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===pa?h.mapping=yi:d===ma&&(h.mapping=qi),h}function l(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Vx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Bi("WebGLRenderer: "+n+" extension not supported."),r}}}function Gx(i,t,e,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let S=_[y+0],T=_[y+1],w=_[y+2];h.push(S,T,T,w,w,S)}}else{let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let S=y+0,T=y+1,w=y+2;h.push(S,T,T,w,w,S)}}let m=new(g.count>=65535?Vi:ls)(h,1);m.version=x;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Hx(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*o),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Wx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Bt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Xx(i,t,e){let n=new WeakMap,r=new Ae;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*S*4*f),w=new os(T,v,S,f);w.type=An,w.needsUpdate=!0;let b=y*4;for(let I=0;I<f;I++){let R=m[I],L=p[I],P=_[I],C=v*S*4*I;for(let D=0;D<R.count;D++){let U=D*b;d===!0&&(r.fromBufferAttribute(R,D),T[C+U+0]=r.x,T[C+U+1]=r.y,T[C+U+2]=r.z,T[C+U+3]=0),g===!0&&(r.fromBufferAttribute(L,D),T[C+U+4]=r.x,T[C+U+5]=r.y,T[C+U+6]=r.z,T[C+U+7]=0),x===!0&&(r.fromBufferAttribute(P,D),T[C+U+8]=r.x,T[C+U+9]=r.y,T[C+U+10]=r.z,T[C+U+11]=P.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new $t(v,S)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function qx(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Yx={[bc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function $x(i,t,e,n,r,s){let o=new Ke(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Zt;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));let u=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Xt(c,u),h=new Zn(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,_=[],y=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let T=0;T<_.length;T++){let w=_[T];w.setSize&&w.setSize(v,S)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;let S=o.width,T=o.height;_.length>0&&a===null&&(a=new Ke(S,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(S,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let b=_[w];b.setSize&&b.setSize(S,T)}},this.begin=function(v,S){if(x||v.toneMapping===Tn&&_.length===0)return!1;if(p=S,S!==null){let T=S.width,w=S.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return y===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Tn,!0},this.hasRenderPass=function(){return y},this.end=function(v,S){v.toneMapping=m,x=!0;let T=o,w=a;for(let b=0;b<_.length;b++){let E=_[b];E.enabled!==!1&&(E.render(v,w,T,S),E.needsSwap!==!1&&(T=w,w=w===a?l:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},ee.getTransfer(d)===fe&&(u.defines.SRGB_TRANSFER="");let b=Yx[g];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var $f=new Je,Qc=new pi(1,1),Zf=new os,Jf=new qo,Kf=new us,Cf=[],If=[],Pf=new Float32Array(16),Lf=new Float32Array(9),Ff=new Float32Array(4);function zr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Cf[r];if(s===void 0&&(s=new Float32Array(r),Cf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ol(i,t){let e=If[t];e===void 0&&(e=new Int32Array(t),If[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ff.set(n),i.uniformMatrix2fv(this.addr,!1,Ff),Ne(e,n)}}function tb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Lf.set(n),i.uniformMatrix3fv(this.addr,!1,Lf),Ne(e,n)}}function eb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Pf.set(n),i.uniformMatrix4fv(this.addr,!1,Pf),Ne(e,n)}}function nb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ib(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function rb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function ob(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ab(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function lb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function cb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function ub(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?tl:ja,s=Qc):s=$f,e.setTexture2D(t||s,r)}function hb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Jf,r)}function fb(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Kf,r)}function db(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Zf,r)}function pb(i){switch(i){case 5126:return Zx;case 35664:return Jx;case 35665:return Kx;case 35666:return Qx;case 35674:return jx;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return db}}function mb(i,t){i.uniform1fv(this.addr,t)}function gb(i,t){let e=zr(t,this.size,2);i.uniform2fv(this.addr,e)}function xb(i,t){let e=zr(t,this.size,3);i.uniform3fv(this.addr,e)}function bb(i,t){let e=zr(t,this.size,4);i.uniform4fv(this.addr,e)}function _b(i,t){let e=zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vb(i,t){let e=zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yb(i,t){let e=zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mb(i,t){i.uniform1iv(this.addr,t)}function Sb(i,t){i.uniform2iv(this.addr,t)}function wb(i,t){i.uniform3iv(this.addr,t)}function Tb(i,t){i.uniform4iv(this.addr,t)}function Eb(i,t){i.uniform1uiv(this.addr,t)}function Ab(i,t){i.uniform2uiv(this.addr,t)}function Rb(i,t){i.uniform3uiv(this.addr,t)}function Cb(i,t){i.uniform4uiv(this.addr,t)}function Ib(i,t,e){let n=this.cache,r=t.length,s=ol(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qc:o=$f;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Pb(i,t,e){let n=this.cache,r=t.length,s=ol(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Jf,s[o])}function Lb(i,t,e){let n=this.cache,r=t.length,s=ol(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Kf,s[o])}function Fb(i,t,e){let n=this.cache,r=t.length,s=ol(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Zf,s[o])}function Db(i){switch(i){case 5126:return mb;case 35664:return gb;case 35665:return xb;case 35666:return bb;case 35674:return _b;case 35675:return vb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return Sb;case 35668:case 35672:return wb;case 35669:case 35673:return Tb;case 5125:return Eb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Fb}}var jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pb(e.type)}},tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Db(e.type)}},eu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function Df(i,t){i.seq.push(t),i.map[t.id]=t}function Ub(i,t,e){let n=i.name,r=n.length;for(Jc.lastIndex=0;;){let s=Jc.exec(n),o=Jc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Df(e,c===void 0?new jc(a,i,t):new tu(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new eu(a),Df(e,f)),e=f}}}var Or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ub(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Uf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nb=37297,Ob=0;function Bb(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nf=new Vt;function zb(i){ee._getMatrix(Nf,ee.workingColorSpace,i);let t=`mat3( ${Nf.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case rs:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Of(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Bb(i.getShaderSource(t),a)}else return s}function kb(i,t){let e=zb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Vb={[bc]:"Linear",[_c]:"Reinhard",[vc]:"Cineon",[yc]:"ACESFilmic",[Sc]:"AgX",[wc]:"Neutral",[Mc]:"Custom"};function Gb(i,t){let e=Vb[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nl=new z;function Hb(){ee.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),t=nl.y.toFixed(4),e=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Xb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Us(i){return i!==""}function Bf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(i){return i.replace(Yb,Zb)}var $b=new Map;function Zb(i,t){let e=Yt[t];if(e===void 0){let n=$b.get(t);if(n!==void 0)e=Yt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nu(e)}var Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(i){return i.replace(Jb,Kb)}function Kb(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Qb={[Ms]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function jb(i){return Qb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t_={[yi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE_UV"};function e_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var n_={[qi]:"ENVMAP_MODE_REFRACTION"};function i_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[xc]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[tf]:"ENVMAP_BLENDING_ADD"};function s_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":r_[i.combine]||"ENVMAP_BLENDING_NONE"}function o_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jb(e),c=e_(e),u=i_(e),f=s_(e),h=o_(e),d=Wb(e),g=Xb(s),x=r.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Gb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,kb("linearToOutputTexel",e.outputColorSpace),Hb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=nu(o),o=Bf(o,e),o=zf(o,e),a=nu(a),a=Bf(a,e),a=zf(a,e),o=kf(o),a=kf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+o,v=_+p+a,S=Uf(r,r.VERTEX_SHADER,y),T=Uf(r,r.FRAGMENT_SHADER,v);r.attachShader(x,S),r.attachShader(x,T),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(x)||"",P=r.getShaderInfoLog(S)||"",C=r.getShaderInfoLog(T)||"",D=L.trim(),U=P.trim(),O=C.trim(),V=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,S,T);else{let k=Of(r,S,"vertex"),G=Of(r,T,"fragment");Bt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+k+`
`+G)}else D!==""?Ot("WebGLProgram: Program Info Log:",D):(U===""||O==="")&&(B=!1);B&&(R.diagnostics={runnable:V,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(S),r.deleteShader(T),b=new Or(r,x),E=qb(r,x)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(x,Nb)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ob++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=T,this}var l_=0,iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ru(t),e.set(t,n)),n}},ru=class{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}};function c_(i){return i===wi||i===Is||i===Ps}function u_(i,t,e,n,r,s){let o=new Er,a=new iu,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,E,I,R,L,P){let C=R.fog,D=L.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,V=t.get(b.envMap||U,O),B=V&&V.mapping===ws?V.image.height:null,k=d[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Ot("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let G=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=G!==void 0?G.length:0,Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let st,ut,mt,Y;if(k){let xe=zn[k];st=xe.vertexShader,ut=xe.fragmentShader}else{st=b.vertexShader,ut=b.fragmentShader;let xe=a.getVertexShaderStage(b),ue=a.getFragmentShaderStage(b);a.update(b,xe,ue),mt=xe.id,Y=ue.id}let $=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),Tt=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,zt=!!b.map,de=!!b.matcap,Ht=!!V,Kt=!!b.aoMap,ae=!!b.lightMap,Jt=!!b.bumpMap&&b.wireframe===!1,ye=!!b.normalMap,Be=!!b.displacementMap,nn=!!b.emissiveMap,Te=!!b.metalnessMap,Ie=!!b.roughnessMap,X=b.anisotropy>0,We=b.clearcoat>0,pe=b.dispersion>0,N=b.retroreflectivity>0,A=b.iridescence>0,q=b.sheen>0,K=b.transmission>0,et=X&&!!b.anisotropyMap,ht=We&&!!b.clearcoatMap,gt=We&&!!b.clearcoatNormalMap,it=We&&!!b.clearcoatRoughnessMap,at=A&&!!b.iridescenceMap,xt=A&&!!b.iridescenceThicknessMap,Ft=q&&!!b.sheenColorMap,yt=q&&!!b.sheenRoughnessMap,bt=!!b.specularMap,Dt=!!b.specularColorMap,Nt=!!b.specularIntensityMap,Wt=K&&!!b.transmissionMap,W=K&&!!b.thicknessMap,_t=!!b.gradientMap,ot=!!b.alphaMap,vt=b.alphaTest>0,Et=!!b.alphaHash,lt=!!b.extensions,Ut=Tn;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let Pt={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:st,fragmentShader:ut,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&L.instanceColor!==null,instancingMorph:Tt&&L.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:zt,matcap:de,envMap:Ht,envMapMode:Ht&&V.mapping,envMapCubeUVHeight:B,aoMap:Kt,lightMap:ae,bumpMap:Jt,normalMap:ye,displacementMap:Be,emissiveMap:nn,normalMapObjectSpace:ye&&b.normalMapType===rf,normalMapTangentSpace:ye&&b.normalMapType===Fc,packedNormalMap:ye&&b.normalMapType===Fc&&c_(b.normalMap.format),metalnessMap:Te,roughnessMap:Ie,anisotropy:X,anisotropyMap:et,clearcoat:We,clearcoatMap:ht,clearcoatNormalMap:gt,clearcoatRoughnessMap:it,dispersion:pe,retroreflection:N,iridescence:A,iridescenceMap:at,iridescenceThicknessMap:xt,sheen:q,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:bt,specularColorMap:Dt,specularIntensityMap:Nt,transmission:K,transmissionMap:Wt,thicknessMap:W,gradientMap:_t,opaque:b.transparent===!1&&b.blending===vi&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:vt,alphaHash:Et,combine:b.combine,mapUv:zt&&g(b.map.channel),aoMapUv:Kt&&g(b.aoMap.channel),lightMapUv:ae&&g(b.lightMap.channel),bumpMapUv:Jt&&g(b.bumpMap.channel),normalMapUv:ye&&g(b.normalMap.channel),displacementMapUv:Be&&g(b.displacementMap.channel),emissiveMapUv:nn&&g(b.emissiveMap.channel),metalnessMapUv:Te&&g(b.metalnessMap.channel),roughnessMapUv:Ie&&g(b.roughnessMap.channel),anisotropyMapUv:et&&g(b.anisotropyMap.channel),clearcoatMapUv:ht&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(b.sheenRoughnessMap.channel),specularMapUv:bt&&g(b.specularMap.channel),specularColorMapUv:Dt&&g(b.specularColorMap.channel),specularIntensityMapUv:Nt&&g(b.specularIntensityMap.channel),transmissionMapUv:Wt&&g(b.transmissionMap.channel),thicknessMapUv:W&&g(b.thicknessMap.channel),alphaMapUv:ot&&g(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ye||X),vertexNormals:!!D.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(zt||ot),fog:!!C,useFog:b.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||D.attributes.normal===void 0&&ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Q,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:zt&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===fe,decodeVideoTextureEmissive:nn&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Se,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:lt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&b.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)E.push(I),E.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(p(E,b),_(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function p(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numSunLights),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numSunLightShadows),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function _(b,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let E=d[b.type],I;if(E){let R=zn[E];I=Mf.clone(R.uniforms)}else I=b.uniforms;return I}function v(b,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new a_(i,E,b,r),c.push(I),u.set(E,I)),I}function S(b){if(--b.usedTimes===0){let E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function T(b){a.remove(b)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:w}}function h_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function f_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Gf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hf(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let _=i[t];return _===void 0?(_={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=g,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=m,_.group=p),t++,_}function l(h,d,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);let y=a(h,d,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):e.push(y)}function c(h,d,g,x,m,p){let _=a(h,d,g,x,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?r.unshift(_):e.unshift(_)}function u(h,d){e.length>1&&e.sort(h||f_),n.length>1&&n.sort(d||Gf),r.length>1&&r.sort(d||Gf)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function d_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Hf,i.set(n,[o])):r>=s.length?(o=new Hf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function p_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new rt};break;case"SpotLight":e={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function m_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var g_=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b_(i){let t=new p_,e=m_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let r=new z,s=new Me,o=new Me;function a(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,S=0,T=0,w=0,b=0,E=0,I=0;c.sort(x_);for(let L=0,P=c.length;L<P;L++){let C=c[L],D=C.color,U=C.intensity,O=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===wi?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=D.r*U,f+=D.g*U,h+=D.b*U;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],U);I++}else if(C.isSunLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,G=e.get(C);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=V;let nt=k.getViewportCount();for(let Q=0;Q<nt;Q++)n.sunShadowMatrix[x+Q]=k.getMatrix(Q),n.sunShadowCascade[x+Q]=k._cascadeData[Q];x+=nt,g++}n.sun[d]=B,d++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,G=e.get(C);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=C.shadow.matrix,S++}n.directional[m]=B,m++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(D).multiplyScalar(U),B.distance=O,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[_]=B;let k=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,k.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=k.matrix,C.castShadow){let G=e.get(C);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=V,w++}_++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[y]=B,y++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let k=C.shadow,G=e.get(C);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,G.shadowCameraNear=k.camera.near,G.shadowCameraFar=k.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=B,p++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(U),B.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[v]=B,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let R=n.hash;(R.sunLength!==d||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==v||R.numSunShadows!==g||R.numDirectionalShadows!==S||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==b||R.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=_,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,R.sunLength=d,R.directionalLength=m,R.pointLength=p,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=v,R.numSunShadows=g,R.numDirectionalShadows=S,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=b,R.numLightProbes=I,n.version=g_++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Wf(i){let t=new b_(i),e=[],n=[],r=[];function s(h){f.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function __(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Wf(i),t.set(r,[a])):s>=o.length?(a=new Wf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,M_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],S_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Xf=new Me,Ds=new z,Kc=new z;function w_(i,t,e){let n=new cs,r=new $t,s=new $t,o=new Ae,a=new jo,l=new ta,c={},u=e.maxTextureSize,f={[_i]:en,[en]:_i,[Se]:Se},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:v_,fragmentShader:y_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(T,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Dh&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(On),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=p!==this.type;P&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=T.length;C<D;C++){let U=T[C],O=U.shadow;if(O===void 0){Ot("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let V=O.getFrameExtents();r.multiply(V),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,O.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Lr){if(U.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ke(r.x,r.y,{format:wi,type:Rn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new pi(r.x,r.y,An),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=Dn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke}else U.isPointLight?(O.map=new rl(r.x),O.map.depthTexture=new Ko(r.x,En)):(O.map=new Ke(r.x,r.y),O.map.depthTexture=new pi(r.x,r.y,En)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=Dn,this.type===Ms?(O.map.depthTexture.compareFunction=B?tl:ja,O.map.depthTexture.minFilter=Ge,O.map.depthTexture.magFilter=Ge):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);let k=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,b);for(let G=0;G<k;G++){let nt=O.getCamera(G);if(U.isPointLight){let Q=O.camera,st=O.matrix,ut=U.distance||Q.far;ut!==Q.far&&(Q.far=ut,Q.updateProjectionMatrix()),Ds.setFromMatrixPosition(U.matrixWorld),Q.position.copy(Ds),Kc.copy(Q.position),Kc.add(M_[G]),Q.up.copy(S_[G]),Q.lookAt(Kc),Q.updateMatrixWorld(),st.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Xf.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Xf,Q.coordinateSystem,Q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,G),i.clear();else{G===0&&(i.setRenderTarget(O.map),i.clear());let Q=O.getViewport(G);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),L.viewport(o)}n=O.getFrustum(G),v(w,b,nt,U,this.type)}O.isPointLightShadow!==!0&&this.type===Lr&&_(O,b),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,I,R)};function _(T,w){let b=t.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ke(r.x,r.y,{format:wi,type:Rn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,b,h,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,b,d,x,null)}function y(T,w,b,E){let I=null,R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)I=R;else if(I=b.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=I.uuid,P=w.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let D=C[P];D===void 0&&(D=I.clone(),C[P]=D,w.addEventListener("dispose",S)),I=D}if(I.visible=w.visible,I.wireframe=w.wireframe,E===Lr?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=i.properties.get(I);L.light=b}return I}function v(T,w,b,E,I){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Lr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=t.update(T),C=T.material;if(Array.isArray(C)){let D=P.groups;for(let U=0,O=D.length;U<O;U++){let V=D[U],B=C[V.materialIndex];if(B&&B.visible){let k=y(T,B,E,I);T.onBeforeShadow(i,T,w,b,P,k,V),i.renderBufferDirect(b,null,P,k,T,V),T.onAfterShadow(i,T,w,b,P,k,V)}}}else if(C.visible){let D=y(T,C,E,I);T.onBeforeShadow(i,T,w,b,P,D,null),i.renderBufferDirect(b,null,P,D,T,null),T.onAfterShadow(i,T,w,b,P,D,null)}}let L=T.children;for(let P=0,C=L.length;P<C;P++)v(L[P],w,b,E,I)}function S(T){T.target.removeEventListener("dispose",S);for(let b in c){let E=c[b],I=T.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function T_(i,t){function e(){let W=!1,_t=new Ae,ot=null,vt=new Ae(0,0,0,0);return{setMask:function(Et){ot!==Et&&!W&&(i.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){W=Et},setClear:function(Et,lt,Ut,Pt,xe){xe===!0&&(Et*=Pt,lt*=Pt,Ut*=Pt),_t.set(Et,lt,Ut,Pt),vt.equals(_t)===!1&&(i.clearColor(Et,lt,Ut,Pt),vt.copy(_t))},reset:function(){W=!1,ot=null,vt.set(-1,0,0,0)}}}function n(){let W=!1,_t=!1,ot=null,vt=null,Et=null;return{setReversed:function(lt){if(_t!==lt){let Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=lt;let Pt=Et;Et=null,this.setClear(Pt)}},getReversed:function(){return _t},setTest:function(lt){lt?$(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(lt){ot!==lt&&!W&&(i.depthMask(lt),ot=lt)},setFunc:function(lt){if(_t&&(lt=gf[lt]),vt!==lt){switch(lt){case Do:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=lt}},setLocked:function(lt){W=lt},setClear:function(lt){Et!==lt&&(Et=lt,_t&&(lt=1-lt),i.clearDepth(lt))},reset:function(){W=!1,ot=null,vt=null,Et=null,_t=!1}}}function r(){let W=!1,_t=null,ot=null,vt=null,Et=null,lt=null,Ut=null,Pt=null,xe=null;return{setTest:function(ue){W||(ue?$(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(ue){_t!==ue&&!W&&(i.stencilMask(ue),_t=ue)},setFunc:function(ue,_n,Pn){(ot!==ue||vt!==_n||Et!==Pn)&&(i.stencilFunc(ue,_n,Pn),ot=ue,vt=_n,Et=Pn)},setOp:function(ue,_n,Pn){(lt!==ue||Ut!==_n||Pt!==Pn)&&(i.stencilOp(ue,_n,Pn),lt=ue,Ut=_n,Pt=Pn)},setLocked:function(ue){W=ue},setClear:function(ue){xe!==ue&&(i.clearStencil(ue),xe=ue)},reset:function(){W=!1,_t=null,ot=null,vt=null,Et=null,lt=null,Ut=null,Pt=null,xe=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,_=null,y=null,v=null,S=null,T=null,w=null,b=new rt(0,0,0),E=0,I=!1,R=null,L=null,P=null,C=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=V>=2);let k=null,G={},nt=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),st=new Ae().fromArray(nt),ut=new Ae().fromArray(Q);function mt(W,_t,ot,vt){let Et=new Uint8Array(4),lt=i.createTexture();i.bindTexture(W,lt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<ot;Ut++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return lt}let Y={};Y[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Mr),Jt(!1),ye(dc),$(i.CULL_FACE),Kt(On);function $(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function ct(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Tt(W,_t){return h[W]!==_t?(i.bindFramebuffer(W,_t),h[W]=_t,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function ft(W,_t){let ot=g,vt=!1;if(W){ot=d.get(_t),ot===void 0&&(ot=[],d.set(_t,ot));let Et=W.textures;if(ot.length!==Et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ut=Et.length;lt<Ut;lt++)ot[lt]=i.COLOR_ATTACHMENT0+lt;ot.length=Et.length,vt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ot)}function zt(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let de={[Xi]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};de[Bh]=i.MIN,de[zh]=i.MAX;let Ht={[kh]:i.ZERO,[Vh]:i.ONE,[Gh]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[Qh]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(W,_t,ot,vt,Et,lt,Ut,Pt,xe,ue){if(W===On){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),W!==Uh){if(W!==p||ue!==I){if((_!==Xi||S!==Xi)&&(i.blendEquation(i.FUNC_ADD),_=Xi,S=Xi),ue)switch(W){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",W);break}else switch(W){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ss:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",W);break}y=null,v=null,T=null,w=null,b.set(0,0,0),E=0,p=W,I=ue}return}Et=Et||_t,lt=lt||ot,Ut=Ut||vt,(_t!==_||Et!==S)&&(i.blendEquationSeparate(de[_t],de[Et]),_=_t,S=Et),(ot!==y||vt!==v||lt!==T||Ut!==w)&&(i.blendFuncSeparate(Ht[ot],Ht[vt],Ht[lt],Ht[Ut]),y=ot,v=vt,T=lt,w=Ut),(Pt.equals(b)===!1||xe!==E)&&(i.blendColor(Pt.r,Pt.g,Pt.b,xe),b.copy(Pt),E=xe),p=W,I=!1}function ae(W,_t){W.side===Se?ct(i.CULL_FACE):$(i.CULL_FACE);let ot=W.side===en;_t&&(ot=!ot),Jt(ot),W.blending===vi&&W.transparent===!1?Kt(On):Kt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);let vt=W.stencilWrite;a.setTest(vt),vt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(W){R!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),R=W)}function ye(W){W!==Lh?($(i.CULL_FACE),W!==L&&(W===dc?i.cullFace(i.BACK):W===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),L=W}function Be(W){W!==P&&(O&&i.lineWidth(W),P=W)}function nn(W,_t,ot){W?($(i.POLYGON_OFFSET_FILL),(C!==_t||D!==ot)&&(C=_t,D=ot,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,ot))):ct(i.POLYGON_OFFSET_FILL)}function Te(W){W?$(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Ie(W){W===void 0&&(W=i.TEXTURE0+U-1),k!==W&&(i.activeTexture(W),k=W)}function X(W,_t,ot){ot===void 0&&(k===null?ot=i.TEXTURE0+U-1:ot=k);let vt=G[ot];vt===void 0&&(vt={type:void 0,texture:void 0},G[ot]=vt),(vt.type!==W||vt.texture!==_t)&&(k!==ot&&(i.activeTexture(ot),k=ot),i.bindTexture(W,_t||Y[W]),vt.type=W,vt.texture=_t)}function We(){let W=G[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function A(){try{i.texSubImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function ht(){try{i.texStorage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function gt(){try{i.texStorage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function it(){try{i.texImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function at(){try{i.texImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function xt(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function Ft(W,_t){f[W]!==_t&&(i.pixelStorei(W,_t),f[W]=_t)}function yt(W){st.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),st.copy(W))}function bt(W){ut.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ut.copy(W))}function Dt(W,_t){let ot=c.get(_t);ot===void 0&&(ot=new WeakMap,c.set(_t,ot));let vt=ot.get(W);vt===void 0&&(vt=i.getUniformBlockIndex(_t,W.name),ot.set(W,vt))}function Nt(W,_t){let vt=c.get(_t).get(W);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,W.__bindingPointIndex),l.set(_t,vt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},k=null,G={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,_=null,y=null,v=null,S=null,T=null,w=null,b=new rt(0,0,0),E=0,I=!1,R=null,L=null,P=null,C=null,D=null,st.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:ct,bindFramebuffer:Tt,drawBuffers:ft,useProgram:zt,setBlending:Kt,setMaterial:ae,setFlipSided:Jt,setCullFace:ye,setLineWidth:Be,setPolygonOffset:nn,setScissorTest:Te,activeTexture:Ie,bindTexture:X,unbindTexture:We,compressedTexImage2D:pe,compressedTexImage3D:N,texImage2D:it,texImage3D:at,pixelStorei:Ft,getParameter:xt,updateUBOMapping:Dt,uniformBlockBinding:Nt,texStorage2D:ht,texStorage3D:gt,texSubImage2D:A,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:et,scissor:yt,viewport:bt,reset:Wt}}function E_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,A){return g?new OffscreenCanvas(N,A):Sr("canvas")}function m(N,A,q){let K=1,et=pe(N);if((et.width>q||et.height>q)&&(K=q/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ht=Math.floor(K*et.width),gt=Math.floor(K*et.height);h===void 0&&(h=x(ht,gt));let it=A?x(ht,gt):h;return it.width=ht,it.height=gt,it.getContext("2d").drawImage(N,0,0,ht,gt),Ot("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ht+"x"+gt+")."),it}else return"data"in N&&Ot("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),N;return N}function p(N){return N.generateMipmaps}function _(N){i.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,A,q,K,et,ht=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let gt;K&&(gt=t.get("EXT_texture_norm16"),gt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=A;if(A===i.RED&&(q===i.FLOAT&&(it=i.R32F),q===i.HALF_FLOAT&&(it=i.R16F),q===i.UNSIGNED_BYTE&&(it=i.R8),q===i.UNSIGNED_SHORT&&gt&&(it=gt.R16_EXT),q===i.SHORT&&gt&&(it=gt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.R8UI),q===i.UNSIGNED_SHORT&&(it=i.R16UI),q===i.UNSIGNED_INT&&(it=i.R32UI),q===i.BYTE&&(it=i.R8I),q===i.SHORT&&(it=i.R16I),q===i.INT&&(it=i.R32I)),A===i.RG&&(q===i.FLOAT&&(it=i.RG32F),q===i.HALF_FLOAT&&(it=i.RG16F),q===i.UNSIGNED_BYTE&&(it=i.RG8),q===i.UNSIGNED_SHORT&&gt&&(it=gt.RG16_EXT),q===i.SHORT&&gt&&(it=gt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RG8UI),q===i.UNSIGNED_SHORT&&(it=i.RG16UI),q===i.UNSIGNED_INT&&(it=i.RG32UI),q===i.BYTE&&(it=i.RG8I),q===i.SHORT&&(it=i.RG16I),q===i.INT&&(it=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGB8UI),q===i.UNSIGNED_SHORT&&(it=i.RGB16UI),q===i.UNSIGNED_INT&&(it=i.RGB32UI),q===i.BYTE&&(it=i.RGB8I),q===i.SHORT&&(it=i.RGB16I),q===i.INT&&(it=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),q===i.UNSIGNED_INT&&(it=i.RGBA32UI),q===i.BYTE&&(it=i.RGBA8I),q===i.SHORT&&(it=i.RGBA16I),q===i.INT&&(it=i.RGBA32I)),A===i.RGB&&(q===i.UNSIGNED_SHORT&&gt&&(it=gt.RGB16_EXT),q===i.SHORT&&gt&&(it=gt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),A===i.RGBA){let at=ht?rs:ee.getTransfer(et);q===i.FLOAT&&(it=i.RGBA32F),q===i.HALF_FLOAT&&(it=i.RGBA16F),q===i.UNSIGNED_BYTE&&(it=at===fe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&gt&&(it=gt.RGBA16_EXT),q===i.SHORT&&gt&&(it=gt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(N,A){let q;return N?A===null||A===En||A===Dr?q=i.DEPTH24_STENCIL8:A===An?q=i.DEPTH32F_STENCIL8:A===Fr&&(q=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===En||A===Dr?q=i.DEPTH_COMPONENT24:A===An?q=i.DEPTH_COMPONENT32F:A===Fr&&(q=i.DEPTH_COMPONENT16),q}function T(N,A){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==ke&&N.minFilter!==Ge?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function w(N){let A=N.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function b(N){let A=N.target;A.removeEventListener("dispose",b),R(A)}function E(N){let A=n.get(N);if(A.__webglInit===void 0)return;let q=N.source,K=d.get(q);if(K){let et=K[A.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(N),Object.keys(K).length===0&&d.delete(q)}n.remove(N)}function I(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let q=N.source,K=d.get(q);delete K[A.__cacheKey],o.memory.textures--}function R(N){let A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(A.__webglFramebuffer[K]))for(let et=0;et<A.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(A.__webglFramebuffer[K][et]);else i.deleteFramebuffer(A.__webglFramebuffer[K]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[K])}else{if(Array.isArray(A.__webglFramebuffer))for(let K=0;K<A.__webglFramebuffer.length;K++)i.deleteFramebuffer(A.__webglFramebuffer[K]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let K=0;K<A.__webglColorRenderbuffer.length;K++)A.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[K]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=N.textures;for(let K=0,et=q.length;K<et;K++){let ht=n.get(q[K]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(q[K])}n.remove(N)}let L=0;function P(){L=0}function C(){return L}function D(N){L=N}function U(){let N=L;return N>=r.maxTextures&&Ot("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,N}function O(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function V(N,A){let q=n.get(N);if(N.isVideoTexture&&X(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let K=N.image;if(K===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(q,N,A);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function B(N,A){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){ct(q,N,A);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function k(N,A){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){ct(q,N,A);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function G(N,A){let q=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){Tt(q,N,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}let nt={[zi]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},Q={[ke]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},st={[of]:i.NEVER,[hf]:i.ALWAYS,[af]:i.LESS,[ja]:i.LEQUAL,[lf]:i.EQUAL,[tl]:i.GEQUAL,[cf]:i.GREATER,[uf]:i.NOTEQUAL};function ut(N,A){if(A.type===An&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ge||A.magFilter===ga||A.magFilter===Ts||A.magFilter===Mi||A.minFilter===Ge||A.minFilter===ga||A.minFilter===Ts||A.minFilter===Mi)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,nt[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,nt[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,nt[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Q[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,st[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ke||A.minFilter!==Ts&&A.minFilter!==Mi||A.type===An&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function mt(N,A){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",w));let K=A.source,et=d.get(K);et===void 0&&(et={},d.set(K,et));let ht=O(A);if(ht!==N.__cacheKey){et[ht]===void 0&&(et[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),et[ht].usedTimes++;let gt=et[N.__cacheKey];gt!==void 0&&(et[N.__cacheKey].usedTimes--,gt.usedTimes===0&&I(A)),N.__cacheKey=ht,N.__webglTexture=et[ht].texture}return q}function Y(N,A,q){return Math.floor(Math.floor(N/q)/A)}function $(N,A,q,K){let ht=N.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,q,K,A.data);else{ht.sort((Ft,yt)=>Ft.start-yt.start);let gt=0;for(let Ft=1;Ft<ht.length;Ft++){let yt=ht[gt],bt=ht[Ft],Dt=yt.start+yt.count,Nt=Y(bt.start,A.width,4),Wt=Y(yt.start,A.width,4);bt.start<=Dt+1&&Nt===Wt&&Y(bt.start+bt.count-1,A.width,4)===Nt?yt.count=Math.max(yt.count,bt.start+bt.count-yt.start):(++gt,ht[gt]=bt)}ht.length=gt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ft=0,yt=ht.length;Ft<yt;Ft++){let bt=ht[Ft],Dt=Math.floor(bt.start/4),Nt=Math.ceil(bt.count/4),Wt=Dt%A.width,W=Math.floor(Dt/A.width),_t=Nt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Wt,W,_t,ot,q,K,A.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function ct(N,A,q){let K=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(K=i.TEXTURE_3D);let et=mt(N,A),ht=A.source;e.bindTexture(K,N.__webglTexture,i.TEXTURE0+q);let gt=n.get(ht);if(ht.version!==gt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ot=ee.getPrimaries(ee.workingColorSpace),vt=A.colorSpace===Jn?null:ee.getPrimaries(A.colorSpace),Et=A.colorSpace===Jn||ot===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=m(A.image,!1,r.maxTextureSize);at=We(A,at);let xt=s.convert(A.format,A.colorSpace),Ft=s.convert(A.type),yt=v(A.internalFormat,xt,Ft,A.normalized,A.colorSpace,A.isVideoTexture);ut(K,A);let bt,Dt=A.mipmaps,Nt=A.isVideoTexture!==!0,Wt=gt.__version===void 0||et===!0,W=ht.dataReady,_t=T(A,at);if(A.isDepthTexture)yt=S(A.format===Si,A.type),Wt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,yt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,yt,at.width,at.height,0,xt,Ft,null));else if(A.isDataTexture)if(Dt.length>0){Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,Dt[0].width,Dt[0].height);for(let ot=0,vt=Dt.length;ot<vt;ot++)bt=Dt[ot],Nt?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,xt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,ot,yt,bt.width,bt.height,0,xt,Ft,bt.data);A.generateMipmaps=!1}else Nt?(Wt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,at.width,at.height),W&&$(A,at,xt,Ft)):e.texImage2D(i.TEXTURE_2D,0,yt,at.width,at.height,0,xt,Ft,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Nt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,yt,Dt[0].width,Dt[0].height,at.depth);for(let ot=0,vt=Dt.length;ot<vt;ot++)if(bt=Dt[ot],A.format!==bn)if(xt!==null)if(Nt){if(W)if(A.layerUpdates.size>0){let Et=kc(bt.width,bt.height,A.format,A.type);for(let lt of A.layerUpdates){let Ut=bt.data.subarray(lt*Et/bt.data.BYTES_PER_ELEMENT,(lt+1)*Et/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,lt,bt.width,bt.height,1,xt,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,at.depth,xt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,yt,bt.width,bt.height,at.depth,0,bt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,at.depth,xt,Ft,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,yt,bt.width,bt.height,at.depth,0,xt,Ft,bt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,_t,yt,Dt[0].width,Dt[0].height);for(let ot=0,vt=Dt.length;ot<vt;ot++)bt=Dt[ot],A.format!==bn?xt!==null?Nt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,yt,bt.width,bt.height,0,bt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,xt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,ot,yt,bt.width,bt.height,0,xt,Ft,bt.data)}else if(A.isDataArrayTexture)if(Nt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,yt,at.width,at.height,at.depth),W)if(A.layerUpdates.size>0){let ot=kc(at.width,at.height,A.format,A.type);for(let vt of A.layerUpdates){let Et=at.data.subarray(vt*ot/at.data.BYTES_PER_ELEMENT,(vt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,at.width,at.height,1,xt,Ft,Et)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,xt,Ft,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,at.width,at.height,at.depth,0,xt,Ft,at.data);else if(A.isData3DTexture)Nt?(Wt&&e.texStorage3D(i.TEXTURE_3D,_t,yt,at.width,at.height,at.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,xt,Ft,at.data)):e.texImage3D(i.TEXTURE_3D,0,yt,at.width,at.height,at.depth,0,xt,Ft,at.data);else if(A.isFramebufferTexture){if(Wt)if(Nt)e.texStorage2D(i.TEXTURE_2D,_t,yt,at.width,at.height);else{let ot=at.width,vt=at.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,yt,ot,vt,0,xt,Ft,null),ot>>=1,vt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),f.add(A),ot.onpaint=vt=>{let Et=vt.changedElements;for(let lt of f)Et.includes(lt.image)&&(lt.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Et=i.RGBA,lt=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,lt,Ut,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Nt&&Wt){let ot=pe(Dt[0]);e.texStorage2D(i.TEXTURE_2D,_t,yt,ot.width,ot.height)}for(let ot=0,vt=Dt.length;ot<vt;ot++)bt=Dt[ot],Nt?W&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt,Ft,bt):e.texImage2D(i.TEXTURE_2D,ot,yt,xt,Ft,bt);A.generateMipmaps=!1}else if(Nt){if(Wt){let ot=pe(at);e.texStorage2D(i.TEXTURE_2D,_t,yt,ot.width,ot.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ft,at)}else e.texImage2D(i.TEXTURE_2D,0,yt,xt,Ft,at);p(A)&&_(K),gt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Tt(N,A,q){if(A.image.length!==6)return;let K=mt(N,A),et=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);let ht=n.get(et);if(et.version!==ht.__version||K===!0){e.activeTexture(i.TEXTURE0+q);let gt=ee.getPrimaries(ee.workingColorSpace),it=A.colorSpace===Jn?null:ee.getPrimaries(A.colorSpace),at=A.colorSpace===Jn||gt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let xt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ft=A.image[0]&&A.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!xt&&!Ft?yt[lt]=m(A.image[lt],!0,r.maxCubemapSize):yt[lt]=Ft?A.image[lt].image:A.image[lt],yt[lt]=We(A,yt[lt]);let bt=yt[0],Dt=s.convert(A.format,A.colorSpace),Nt=s.convert(A.type),Wt=v(A.internalFormat,Dt,Nt,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,_t=ht.__version===void 0||K===!0,ot=et.dataReady,vt=T(A,bt);ut(i.TEXTURE_CUBE_MAP,A);let Et;if(xt){W&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,bt.width,bt.height);for(let lt=0;lt<6;lt++){Et=yt[lt].mipmaps;for(let Ut=0;Ut<Et.length;Ut++){let Pt=Et[Ut];A.format!==bn?Dt!==null?W?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Pt.width,Pt.height,Dt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Wt,Pt.width,Pt.height,0,Pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Pt.width,Pt.height,Dt,Nt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Wt,Pt.width,Pt.height,0,Dt,Nt,Pt.data)}}}else{if(Et=A.mipmaps,W&&_t){Et.length>0&&vt++;let lt=pe(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ft){W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,Dt,Nt,yt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,yt[lt].width,yt[lt].height,0,Dt,Nt,yt[lt].data);for(let Ut=0;Ut<Et.length;Ut++){let xe=Et[Ut].image[lt].image;W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,xe.width,xe.height,Dt,Nt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Wt,xe.width,xe.height,0,Dt,Nt,xe.data)}}else{W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt,Nt,yt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Wt,Dt,Nt,yt[lt]);for(let Ut=0;Ut<Et.length;Ut++){let Pt=Et[Ut];W?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,Dt,Nt,Pt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Wt,Dt,Nt,Pt.image[lt])}}}p(A)&&_(i.TEXTURE_CUBE_MAP),ht.__version=et.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ft(N,A,q,K,et,ht){let gt=s.convert(q.format,q.colorSpace),it=s.convert(q.type),at=v(q.internalFormat,gt,it,q.normalized,q.colorSpace),xt=n.get(A),Ft=n.get(q);if(Ft.__renderTarget=A,!xt.__hasExternalTextures){let yt=Math.max(1,A.width>>ht),bt=Math.max(1,A.height>>ht);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ht,at,yt,bt,A.depth,0,gt,it,null):e.texImage2D(et,ht,at,yt,bt,0,gt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,Ft.__webglTexture,0,Te(A)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,Ft.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(N,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let K=A.depthTexture,et=K&&K.isDepthTexture?K.type:null,ht=S(A.stencilBuffer,et),gt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(A),ht,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(A),ht,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ht,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,N)}else{let K=A.textures;for(let et=0;et<K.length;et++){let ht=K[et],gt=s.convert(ht.format,ht.colorSpace),it=s.convert(ht.type),at=v(ht.internalFormat,gt,it,ht.normalized,ht.colorSpace);Ie(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(A),at,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(N,A,q){let K=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(A.depthTexture);if(et.__renderTarget=A,(!et.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K){if(et.__webglInit===void 0&&(et.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ut(i.TEXTURE_CUBE_MAP,A.depthTexture);let xt=s.convert(A.depthTexture.format),Ft=s.convert(A.depthTexture.type),yt;A.depthTexture.format===Dn?yt=i.DEPTH_COMPONENT24:A.depthTexture.format===Si&&(yt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,yt,A.width,A.height,0,xt,Ft,null)}}else V(A.depthTexture,0);let ht=et.__webglTexture,gt=Te(A),it=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,at=A.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Dn)Ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,ht,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,ht,0);else if(A.depthTexture.format===Si)Ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,ht,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(N){let A=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let K=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),K){let et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),A.__depthDisposeCallback=et}A.__boundDepthTexture=K}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(q)for(let K=0;K<6;K++)de(A.__webglFramebuffer[K],N,K);else{let K=N.texture.mipmaps;K&&K.length>0?de(A.__webglFramebuffer[0],N,0):de(A.__webglFramebuffer,N,0)}else if(q){A.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[K]),A.__webglDepthbuffer[K]===void 0)A.__webglDepthbuffer[K]=i.createRenderbuffer(),zt(A.__webglDepthbuffer[K],N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}}else{let K=N.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),zt(A.__webglDepthbuffer,N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(N,A,q){let K=n.get(N);A!==void 0&&ft(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ht(N)}function ae(N){let A=N.texture,q=n.get(N),K=n.get(A);N.addEventListener("dispose",b);let et=N.textures,ht=N.isWebGLCubeRenderTarget===!0,gt=et.length>1;if(gt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=A.version,o.memory.textures++),ht){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let at=0;at<A.mipmaps.length;at++)q.__webglFramebuffer[it][at]=i.createFramebuffer()}else q.__webglFramebuffer[it]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<A.mipmaps.length;it++)q.__webglFramebuffer[it]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(gt)for(let it=0,at=et.length;it<at;it++){let xt=n.get(et[it]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Ie(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let at=et[it];q.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[it]);let xt=s.convert(at.format,at.colorSpace),Ft=s.convert(at.type),yt=v(at.internalFormat,xt,Ft,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),bt=Te(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,yt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,q.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(q.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ut(i.TEXTURE_CUBE_MAP,A);for(let it=0;it<6;it++)if(A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)ft(q.__webglFramebuffer[it][at],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else ft(q.__webglFramebuffer[it],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(A)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let it=0,at=et.length;it<at;it++){let xt=et[it],Ft=n.get(xt),yt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(yt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ft.__webglTexture),ut(yt,xt),ft(q.__webglFramebuffer,N,xt,i.COLOR_ATTACHMENT0+it,yt,0),p(xt)&&_(yt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(it=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,K.__webglTexture),ut(it,A),A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)ft(q.__webglFramebuffer[at],N,A,i.COLOR_ATTACHMENT0,it,at);else ft(q.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,it,0);p(A)&&_(it),e.unbindTexture()}N.depthBuffer&&Ht(N)}function Jt(N){let A=N.textures;for(let q=0,K=A.length;q<K;q++){let et=A[q];if(p(et)){let ht=y(N),gt=n.get(et).__webglTexture;e.bindTexture(ht,gt),_(ht),e.unbindTexture()}}}let ye=[],Be=[];function nn(N){if(N.samples>0){if(Ie(N)===!1){let A=N.textures,q=N.width,K=N.height,et=i.COLOR_BUFFER_BIT,ht=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(N),it=A.length>1;if(it)for(let xt=0;xt<A.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let at=N.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<A.length;xt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ft=n.get(A[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,et,i.NEAREST),l===!0&&(ye.length=0,Be.length=0,ye.push(i.COLOR_ATTACHMENT0+xt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(ye.push(ht),Be.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let xt=0;xt<A.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ft=n.get(A[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Te(N){return Math.min(r.maxSamples,N.samples)}function Ie(N){let A=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(N){let A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function We(N,A){let q=N.colorSpace,K=N.format,et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==is&&q!==Jn&&(ee.getTransfer(q)===fe?(K!==bn||et!==hn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",q)),A}function pe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=G,this.rebindTextures=Kt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function A_(i,t){function e(n,r=Jn){let s,o=ee.getTransfer(r);if(n===hn)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Pc)return i.RGB;if(n===bn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Lc)return i.RED;if(n===va)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Es||n===As||n===Rs||n===Cs)if(o===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===wa||n===Ta||n===Ea)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===Is||n===La)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Aa||n===Ra)return o===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ia)return s.COMPRESSED_R11_EAC;if(n===Pa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Is)return s.COMPRESSED_RG11_EAC;if(n===La)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Da||n===Ua||n===Na||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===$a||n===Za)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ya)return o===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===Ka||n===Ps||n===Qa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ps)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`,su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:R_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends Un{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new su,p={},_=e.getContextAttributes(),y=null,v=null,S=[],T=[],w=new $t,b=null,E=null,I=new $e;I.viewport=new Ae;let R=new $e;R.viewport=new Ae;let L=[I,R],P=new fa,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=S[Y];return $===void 0&&($=new Ar,S[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=S[Y];return $===void 0&&($=new Ar,S[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=S[Y];return $===void 0&&($=new Ar,S[Y]=$),$.getHandSpace()};function U(Y){let $=T.indexOf(Y.inputSource);if($===-1)return;let ct=S[$];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",V);for(let Y=0;Y<S.length;Y++){let $=T[Y];$!==null&&(T[Y]=null,S[Y].disconnect($))}C=null,D=null,m.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(y),d=null,h=null,f=null,r=null,v=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Tt=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?Si:Dn,Tt=_.stencil?Dr:En);let zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(zt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Ke(h.textureWidth,h.textureHeight,{format:bn,type:hn,depthTexture:new pi(h.textureWidth,h.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ke(d.framebufferWidth,d.framebufferHeight,{format:bn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),mt.setContext(r),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Y){for(let $=0;$<Y.removed.length;$++){let ct=Y.removed[$],Tt=T.indexOf(ct);Tt>=0&&(T[Tt]=null,S[Tt].disconnect(ct))}for(let $=0;$<Y.added.length;$++){let ct=Y.added[$],Tt=T.indexOf(ct);if(Tt===-1){for(let zt=0;zt<S.length;zt++)if(zt>=T.length){T.push(ct),Tt=zt;break}else if(T[zt]===null){T[zt]=ct,Tt=zt;break}if(Tt===-1)break}let ft=S[Tt];ft&&ft.connect(ct)}}let B=new z,k=new z;function G(Y,$,ct){B.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(ct.matrixWorld);let Tt=B.distanceTo(k),ft=$.projectionMatrix.elements,zt=ct.projectionMatrix.elements,de=ft[14]/(ft[10]-1),Ht=ft[14]/(ft[10]+1),Kt=(ft[9]+1)/ft[5],ae=(ft[9]-1)/ft[5],Jt=(ft[8]-1)/ft[0],ye=(zt[8]+1)/zt[0],Be=de*Jt,nn=de*ye,Te=Tt/(-Jt+ye),Ie=Te*-Jt;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ie),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ft[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let X=de+Te,We=Ht+Te,pe=Be-Ie,N=nn+(Tt-Ie),A=Kt*Ht/We*X,q=ae*Ht/We*X;Y.projectionMatrix.makePerspective(pe,N,A,q,X,We),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let $=Y.near,ct=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),P.near=R.near=I.near=$,P.far=R.far=I.far=ct,(C!==P.near||D!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),C=P.near,D=P.far),P.layers.mask=Y.layers.mask|6,I.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let Tt=Y.parent,ft=P.cameras;nt(P,Tt);for(let zt=0;zt<ft.length;zt++)nt(ft[zt],Tt);ft.length===2?G(P,I,R):P.projectionMatrix.copy(I.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,P,Tt)};function Q(Y,$,ct){ct===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ho*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Y){return p[Y]};let st=null;function ut(Y,$){if(u=$.getViewerPose(c||o),g=$,u!==null){let ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Tt=!1;ct.length!==P.cameras.length&&(P.cameras.length=0,Tt=!0);for(let Ht=0;Ht<ct.length;Ht++){let Kt=ct[Ht],ae=null;if(d!==null)ae=d.getViewport(Kt);else{let ye=f.getViewSubImage(h,Kt);ae=ye.viewport,Ht===0&&(t.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(v))}let Jt=L[Ht];Jt===void 0&&(Jt=new $e,Jt.layers.enable(Ht),Jt.viewport=new Ae,L[Ht]=Jt),Jt.matrix.fromArray(Kt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Kt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ht===0&&(P.matrix.copy(Jt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Tt===!0&&P.cameras.push(Jt)}let ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Ht=f.getDepthInformation(ct[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,r.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Ht=0;Ht<ct.length;Ht++){let Kt=ct[Ht].camera;if(Kt){let ae=p[Kt];ae||(ae=new hs,p[Kt]=ae);let Jt=f.getCameraImage(Kt);ae.sourceTexture=Jt}}}}for(let ct=0;ct<S.length;ct++){let Tt=T[ct],ft=S[ct];Tt!==null&&ft!==void 0&&ft.update(Tt,$,c||o)}st&&st(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let mt=new qf;mt.setAnimationLoop(ut),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}},I_=new Me,Qf=new Vt;Qf.set(-1,0,0,0,1,0,0,0,1);function P_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function L_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let T=S.program;n.uniformBlockBinding(v,T)}function c(v,S){let T=r[v.id];T===void 0&&(m(v),T=u(v),r[v.id]=T,v.addEventListener("dispose",_));let w=S.program;n.updateUBOMapping(v,w);let b=t.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){let S=f();v.__bindingPointIndex=S;let T=i.createBuffer(),w=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=r[v.id],T=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,E=T.length;b<E;b++){let I=T[b];if(Array.isArray(I))for(let R=0,L=I.length;R<L;R++)d(I[R],b,R,w);else d(I,b,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,T,w){if(x(v,S,T,w)===!0){let b=v.__offset,E=v.value;if(Array.isArray(E)){let I=0;for(let R=0;R<E.length;R++){let L=E[R],P=p(L);g(L,v.__data,I),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(I+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function g(v,S,T){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,T)}function x(v,S,T,w){let b=v.value,E=S+"_"+T;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:ArrayBuffer.isView(b)?w[E]=b.slice():w[E]=b.clone(),!0;{let I=w[E];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return w[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function m(v){let S=v.uniforms,T=0,w=16;for(let E=0,I=S.length;E<I;E++){let R=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,P=R.length;L<P;L++){let C=R[L],D=Array.isArray(C.value)?C.value:[C.value];for(let U=0,O=D.length;U<O;U++){let V=D[U],B=p(V),k=T%w,G=k%B.boundary,nt=k+G;T+=G,nt!==0&&w-nt<B.storage&&(T+=w-nt),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=B.storage}}}let b=T%w;return b>0&&(T+=w-b),v.__size=T,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",v),S}function _(v){let S=v.target;S.removeEventListener("dispose",_);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function D_(){return Bn===null&&(Bn=new Yo(F_,16,16,wi,Rn),Bn.name="DFG_LUT",Bn.minFilter=Ge,Bn.magFilter=Ge,Bn.wrapS=ln,Bn.wrapT=ln,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Br=class{constructor(t={}){let{canvas:e=df(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Ma,ya,va]),p=new Set([hn,En,Fr,Dr,ba,_a]),_=new Uint32Array(4),y=new Int32Array(4),v=new z,S=null,T=null,w=[],b=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,R=!1,L=null,P=null,C=null,D=null;this._outputColorSpace=Ce;let U=0,O=0,V=null,B=-1,k=null,G=new Ae,nt=new Ae,Q=null,st=new rt(0),ut=0,mt=e.width,Y=e.height,$=1,ct=null,Tt=null,ft=new Ae(0,0,mt,Y),zt=new Ae(0,0,mt,Y),de=!1,Ht=new cs,Kt=!1,ae=!1,Jt=new Me,ye=new z,Be=new Ae,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ie(){return V===null?$:1}let X=n;function We(F,H){return e.getContext(F,H)}let pe,N,A,q,K,et,ht,gt,it,at,xt,Ft,yt,bt,Dt,Nt,Wt,W,_t,ot,vt,Et,lt;try{let F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",_n,!1),X===null){let H="webgl2";if(X=We(H,F),X===null)throw We(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(F){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Bt("WebGLRenderer: "+F.message),F}function Ut(){pe=new Vx(X),pe.init(),vt=new A_(X,pe),N=new Px(X,pe,t,vt),A=new T_(X,pe),N.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),P=X.createFramebuffer(),C=X.createFramebuffer(),D=X.createFramebuffer(),q=new Wx(X),K=new h_,et=new E_(X,pe,A,K,N,vt,q),ht=new kx(I),gt=new qm(X),Et=new Cx(X,gt),it=new Gx(X,gt,q,Et),at=new qx(X,it,gt,Et,q),W=new Xx(X,N,et),Dt=new Lx(K),xt=new u_(I,ht,pe,N,Et,Dt),Ft=new P_(I,K),yt=new d_,bt=new __(pe),Wt=new Rx(I,ht,A,at,g,l),Nt=new w_(I,at,N),lt=new L_(X,q,N,A),_t=new Ix(X,pe,q),ot=new Hx(X,pe,q),q.programs=xt.programs,I.capabilities=N,I.extensions=pe,I.properties=K,I.renderLists=yt,I.shadowMap=Nt,I.state=A,I.info=q}x!==hn&&(E=new $x(x,e.width,e.height,a,r,s));let Pt=new ou(I,X);this.xr=Pt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let F=pe.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=pe.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(F){F!==void 0&&($=F,this.setSize(mt,Y,!1))},this.getSize=function(F){return F.set(mt,Y)},this.setSize=function(F,H,tt=!0){if(Pt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=F,Y=H,e.width=Math.floor(F*$),e.height=Math.floor(H*$),tt===!0&&(e.style.width=F+"px",e.style.height=H+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,F,H)},this.getDrawingBufferSize=function(F){return F.set(mt*$,Y*$).floor()},this.setDrawingBufferSize=function(F,H,tt){mt=F,Y=H,$=tt,e.width=Math.floor(F*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,F,H)},this.setEffects=function(F){if(x===hn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let H=0;H<F.length;H++)if(F[H].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(G)},this.getViewport=function(F){return F.copy(ft)},this.setViewport=function(F,H,tt,Z){F.isVector4?ft.set(F.x,F.y,F.z,F.w):ft.set(F,H,tt,Z),A.viewport(G.copy(ft).multiplyScalar($).round())},this.getScissor=function(F){return F.copy(zt)},this.setScissor=function(F,H,tt,Z){F.isVector4?zt.set(F.x,F.y,F.z,F.w):zt.set(F,H,tt,Z),A.scissor(nt.copy(zt).multiplyScalar($).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(F){A.setScissorTest(de=F)},this.setOpaqueSort=function(F){ct=F},this.setTransparentSort=function(F){Tt=F},this.getClearColor=function(F){return F.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(F=!0,H=!0,tt=!0){let Z=0;if(F){let J=!1;if(V!==null){let wt=V.texture.format;J=m.has(wt)}if(J){let wt=V.texture.type,Rt=p.has(wt),St=Wt.getClearColor(),Ct=Wt.getClearAlpha(),Lt=St.r,qt=St.g,Qt=St.b;Rt?(_[0]=Lt,_[1]=qt,_[2]=Qt,_[3]=Ct,X.clearBufferuiv(X.COLOR,0,_)):(y[0]=Lt,y[1]=qt,y[2]=Qt,y[3]=Ct,X.clearBufferiv(X.COLOR,0,y))}else Z|=X.COLOR_BUFFER_BIT}H&&(Z|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Z|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&X.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),L=F},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Wt.dispose(),yt.dispose(),bt.dispose(),K.dispose(),ht.dispose(),at.dispose(),Et.dispose(),lt.dispose(),xt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",qu),Pt.removeEventListener("sessionend",Yu),Fi.stop()};function xe(F){F.preventDefault(),Nc("WebGLRenderer: Context Lost."),R=!0}function ue(){Nc("WebGLRenderer: Context Restored."),R=!1;let F=q.autoReset,H=Nt.enabled,tt=Nt.autoUpdate,Z=Nt.needsUpdate,J=Nt.type;Ut(),q.autoReset=F,Nt.enabled=H,Nt.autoUpdate=tt,Nt.needsUpdate=Z,Nt.type=J}function _n(F){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Pn(F){let H=F.target;H.removeEventListener("dispose",Pn),kp(H)}function kp(F){Vp(F),K.remove(F)}function Vp(F){let H=K.get(F).programs;H!==void 0&&(H.forEach(function(tt){xt.releaseProgram(tt)}),F.isShaderMaterial&&xt.releaseShaderCache(F))}this.renderBufferDirect=function(F,H,tt,Z,J,wt){H===null&&(H=nn);let Rt=J.isMesh&&J.matrixWorld.determinantAffine()<0,St=Wp(F,H,tt,Z,J);A.setMaterial(Z,Rt);let Ct=tt.index,Lt=1;if(Z.wireframe===!0){if(Ct=it.getWireframeAttribute(tt),Ct===void 0)return;Lt=2}let qt=tt.drawRange,Qt=tt.attributes.position,It=qt.start*Lt,he=(qt.start+qt.count)*Lt;wt!==null&&(It=Math.max(It,wt.start*Lt),he=Math.min(he,(wt.start+wt.count)*Lt)),Ct!==null?(It=Math.max(It,0),he=Math.min(he,Ct.count)):Qt!=null&&(It=Math.max(It,0),he=Math.min(he,Qt.count));let Pe=he-It;if(Pe<0||Pe===1/0)return;Et.setup(J,Z,St,tt,Ct);let _e,ge=_t;if(Ct!==null&&(_e=gt.get(Ct),ge=ot,ge.setIndex(_e)),J.isMesh)Z.wireframe===!0?(A.setLineWidth(Z.wireframeLinewidth*Ie()),ge.setMode(X.LINES)):ge.setMode(X.TRIANGLES);else if(J.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),A.setLineWidth(Xe*Ie()),J.isLineSegments?ge.setMode(X.LINES):J.isLineLoop?ge.setMode(X.LINE_LOOP):ge.setMode(X.LINE_STRIP)}else J.isPoints?ge.setMode(X.POINTS):J.isSprite&&ge.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Xe=J._multiDrawStarts,At=J._multiDrawCounts,tn=J._multiDrawCount,ie=Ct?gt.get(Ct).bytesPerElement:1,dn=K.get(Z).currentProgram.getUniforms();for(let Ln=0;Ln<tn;Ln++)dn.setValue(X,"_gl_DrawID",Ln),ge.render(Xe[Ln]/ie,At[Ln])}else if(J.isInstancedMesh)ge.renderInstances(It,Pe,J.count);else if(tt.isInstancedBufferGeometry){let Xe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,Xe);ge.renderInstances(It,Pe,At)}else ge.render(It,Pe)};function Xu(F,H,tt,Z){L!==null&&F.isNodeMaterial&&L.setObject(Z,F),Kt===!0&&Dt.setState(F,tt,!1),F.transparent===!0&&F.side===Se&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,ro(F,H,Z),F.side=_i,F.needsUpdate=!0,ro(F,H,Z),F.side=Se):ro(F,H,Z)}this.compile=function(F,H,tt=null){tt===null&&(tt=F),L!==null&&L.renderStart(F,H,tt),T=bt.get(tt),T.init(H),b.push(T),tt.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),F!==tt&&F.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,Kt=Dt.init(this.clippingPlanes,ae),Kt===!0&&Dt.setGlobalState(this.clippingPlanes,H),L!==null&&Nt.render(T.state.shadowsArray,tt,H);let Z=new Set;return F.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let wt=J.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){let St=wt[Rt];Xu(St,tt,H,J),Z.add(St)}else Xu(wt,tt,H,J),Z.add(wt)}),T=b.pop(),L!==null&&L.renderEnd(),Z},this.compileAsync=function(F,H,tt=null){let Z=this.compile(F,H,tt);return new Promise(J=>{function wt(){if(Z.forEach(function(Rt){let Ct=K.get(Rt).currentProgram;(Ct===void 0||Ct.isReady())&&Z.delete(Rt)}),Z.size===0){J(F);return}setTimeout(wt,10)}pe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Pl=null;function Gp(F){Pl&&Pl(F)}function qu(){Fi.stop()}function Yu(){Fi.start()}let Fi=new qf;Fi.setAnimationLoop(Gp),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(F){Pl=F,Pt.setAnimationLoop(F),F===null?Fi.stop():Fi.start()},Pt.addEventListener("sessionstart",qu),Pt.addEventListener("sessionend",Yu),this.render=function(F,H){if(H!==void 0&&H.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(F,H);let tt=Pt.enabled===!0&&Pt.isPresenting===!0,Z=E!==null&&(V===null||tt)&&E.begin(I,V);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(H),H=Pt.getCamera()),F.isScene===!0&&F.onBeforeRender(I,F,H,V),T=bt.get(F,b.length),T.init(H),T.state.textureUnits=et.getTextureUnits(),b.push(T),Jt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ht.setFromProjectionMatrix(Jt,wn,H.reversedDepth),ae=this.localClippingEnabled,Kt=Dt.init(this.clippingPlanes,ae),S=yt.get(F,w.length),S.init(),w.push(S),Pt.enabled===!0&&Pt.isPresenting===!0){let Rt=I.xr.getDepthSensingMesh();Rt!==null&&Ll(Rt,H,-1/0,I.sortObjects)}Ll(F,H,0,I.sortObjects),S.finish(),L!==null&&L.updateLights(T.state.lightsArray),I.sortObjects===!0&&S.sort(ct,Tt),Te=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Te&&Wt.addToRenderList(S,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Dt.beginShadows();let J=T.state.shadowsArray;if(Nt.render(J,F,H),Kt===!0&&Dt.endShadows(),(Z&&E.hasRenderPass())===!1){let Rt=S.opaque,St=S.transmissive;if(T.setupLights(),H.isArrayCamera){let Ct=H.cameras;if(St.length>0)for(let Lt=0,qt=Ct.length;Lt<qt;Lt++){let Qt=Ct[Lt];Zu(Rt,St,F,Qt)}Te&&Wt.render(F);for(let Lt=0,qt=Ct.length;Lt<qt;Lt++){let Qt=Ct[Lt];$u(S,F,Qt,Qt.viewport)}}else St.length>0&&Zu(Rt,St,F,H),Te&&Wt.render(F),$u(S,F,H)}V!==null&&O===0&&(et.updateMultisampleRenderTarget(V),et.updateRenderTargetMipmap(V)),Z&&E.end(I),F.isScene===!0&&F.onAfterRender(I,F,H),Et.resetDefaultState(),B=-1,k=null,b.pop(),b.length>0?(T=b[b.length-1],et.setTextureUnits(T.state.textureUnits),Kt===!0&&Dt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,L!==null&&L.renderEnd()};function Ll(F,H,tt,Z){if(F.visible===!1)return;if(F.layers.test(H.layers)){if(F.isGroup)tt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(H);else if(F.isLightProbeGrid)T.pushLightProbeGrid(F);else if(F.isLight)T.pushLight(F),F.castShadow&&T.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(Ht)){Z&&Be.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Jt);let Rt=at.update(F),St=F.material;St.visible&&S.push(F,Rt,St,tt,Be.z,null,H)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(Ht))){let Rt=at.update(F),St=F.material;if(Z&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Be.copy(F.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Be.copy(Rt.boundingSphere.center)),Be.applyMatrix4(F.matrixWorld).applyMatrix4(Jt)),Array.isArray(St)){let Ct=Rt.groups;for(let Lt=0,qt=Ct.length;Lt<qt;Lt++){let Qt=Ct[Lt],It=St[Qt.materialIndex];It&&It.visible&&S.push(F,Rt,It,tt,Be.z,Qt,H)}}else St.visible&&S.push(F,Rt,St,tt,Be.z,null,H)}}let wt=F.children;for(let Rt=0,St=wt.length;Rt<St;Rt++)Ll(wt[Rt],H,tt,Z)}function $u(F,H,tt,Z){let{opaque:J,transmissive:wt,transparent:Rt}=F;T.setupLightsView(tt),Kt===!0&&Dt.setGlobalState(I.clippingPlanes,tt),Z&&A.viewport(G.copy(Z)),J.length>0&&io(J,H,tt),wt.length>0&&io(wt,H,tt),Rt.length>0&&io(Rt,H,tt),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Zu(F,H,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let It=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new Ke(1,1,{generateMipmaps:!0,type:It?Rn:hn,minFilter:Mi,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let wt=T.state.transmissionRenderTarget[Z.id],Rt=Z.viewport||G;wt.setSize(Rt.z*I.transmissionResolutionScale,Rt.w*I.transmissionResolutionScale);let St=I.getRenderTarget(),Ct=I.getActiveCubeFace(),Lt=I.getActiveMipmapLevel();I.setRenderTarget(wt),I.getClearColor(st),ut=I.getClearAlpha(),ut<1&&I.setClearColor(16777215,.5),I.clear(),Te&&Wt.render(tt);let qt=I.toneMapping;I.toneMapping=Tn;let Qt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),Kt===!0&&Dt.setGlobalState(I.clippingPlanes,Z),io(F,tt,Z),et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let he=0,Pe=H.length;he<Pe;he++){let _e=H[he],{object:ge,geometry:Xe,material:At,group:tn}=_e;if(At.side===Se&&ge.layers.test(Z.layers)){let ie=At.side;At.side=en,At.needsUpdate=!0,Ju(ge,tt,Z,Xe,At,tn),At.side=ie,At.needsUpdate=!0,It=!0}}It===!0&&(et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt))}I.setRenderTarget(St,Ct,Lt),I.setClearColor(st,ut),Qt!==void 0&&(Z.viewport=Qt),I.toneMapping=qt}function io(F,H,tt){let Z=H.isScene===!0?H.overrideMaterial:null;for(let J=0,wt=F.length;J<wt;J++){let Rt=F[J],{object:St,geometry:Ct,group:Lt}=Rt,qt=Rt.material;qt.allowOverride===!0&&Z!==null&&(qt=Z),St.layers.test(tt.layers)&&Ju(St,H,tt,Ct,qt,Lt)}}function Ju(F,H,tt,Z,J,wt){L!==null&&J.isNodeMaterial&&L.setObject(F,J),F.onBeforeRender(I,H,tt,Z,J,wt),F.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),J.onBeforeRender(I,H,tt,Z,F,wt),J.transparent===!0&&J.side===Se&&J.forceSinglePass===!1?(J.side=en,J.needsUpdate=!0,I.renderBufferDirect(tt,H,Z,J,F,wt),J.side=_i,J.needsUpdate=!0,I.renderBufferDirect(tt,H,Z,J,F,wt),J.side=Se):I.renderBufferDirect(tt,H,Z,J,F,wt),F.onAfterRender(I,H,tt,Z,J,wt)}function ro(F,H,tt){H.isScene!==!0&&(H=nn);let Z=K.get(F),J=T.state.lights,wt=T.state.shadowsArray,Rt=J.state.version,St=xt.getParameters(F,J.state,wt,H,tt,T.state.lightProbeGridArray),Ct=xt.getProgramCacheKey(St),Lt=Z.programs;Z.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let qt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;Z.envMap=ht.get(F.envMap||Z.environment,qt),Z.envMapRotation=Z.environment!==null&&F.envMap===null?H.environmentRotation:F.envMapRotation,Lt===void 0&&(F.addEventListener("dispose",Pn),Lt=new Map,Z.programs=Lt);let Qt=Lt.get(Ct);if(Qt!==void 0){if(Z.currentProgram===Qt&&Z.lightsStateVersion===Rt)return Qu(F,St),Qt}else St.uniforms=xt.getUniforms(F),L!==null&&F.isNodeMaterial&&L.build(F,tt,St),F.onBeforeCompile(St,I),Qt=xt.acquireProgram(St,Ct),Lt.set(Ct,Qt),Z.uniforms=St.uniforms;let It=Z.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(It.clippingPlanes=Dt.uniform),Qu(F,St),Z.needsLights=qp(F),Z.lightsStateVersion=Rt,Z.needsLights&&(It.ambientLightColor.value=J.state.ambient,It.lightProbe.value=J.state.probe,It.sunLights.value=J.state.sun,It.sunLightShadows.value=J.state.sunShadow,It.directionalLights.value=J.state.directional,It.directionalLightShadows.value=J.state.directionalShadow,It.spotLights.value=J.state.spot,It.spotLightShadows.value=J.state.spotShadow,It.rectAreaLights.value=J.state.rectArea,It.ltc_1.value=J.state.rectAreaLTC1,It.ltc_2.value=J.state.rectAreaLTC2,It.pointLights.value=J.state.point,It.pointLightShadows.value=J.state.pointShadow,It.hemisphereLights.value=J.state.hemi,It.sunShadowMatrix.value=J.state.sunShadowMatrix,It.sunShadowCascade.value=J.state.sunShadowCascade,It.directionalShadowMatrix.value=J.state.directionalShadowMatrix,It.spotLightMatrix.value=J.state.spotLightMatrix,It.spotLightMap.value=J.state.spotLightMap,It.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=T.state.lightProbeGridArray.length>0,Z.currentProgram=Qt,Z.uniformsList=null,Qt}function Ku(F){if(F.uniformsList===null){let H=F.currentProgram.getUniforms();F.uniformsList=Or.seqWithValue(H.seq,F.uniforms)}return F.uniformsList}function Qu(F,H){let tt=K.get(F);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function Hp(F,H){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let tt=0,Z=F.length;tt<Z;tt++){let J=F[tt];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function Wp(F,H,tt,Z,J){H.isScene!==!0&&(H=nn),et.resetTextureUnits();let wt=H.fog,Rt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,St=V===null?I.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ee.workingColorSpace,Ct=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Lt=ht.get(Z.envMap||Rt,Ct),qt=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Qt=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!tt.morphAttributes.position,he=!!tt.morphAttributes.normal,Pe=!!tt.morphAttributes.color,_e=Tn;Z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_e=I.toneMapping);let ge=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Xe=ge!==void 0?ge.length:0,At=K.get(Z),tn=T.state.lights;if(Kt===!0&&(ae===!0||F!==k)){let be=F===k&&Z.id===B;Dt.setState(Z,F,be)}let ie=!1;Z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==tn.state.version||At.outputColorSpace!==St||J.isBatchedMesh&&At.batching===!1||!J.isBatchedMesh&&At.batching===!0||J.isBatchedMesh&&At.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&At.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&At.instancing===!1||!J.isInstancedMesh&&At.instancing===!0||J.isSkinnedMesh&&At.skinning===!1||!J.isSkinnedMesh&&At.skinning===!0||J.isInstancedMesh&&At.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&At.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&At.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&At.instancingMorph===!1&&J.morphTexture!==null||At.envMap!==Lt||Z.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Dt.numPlanes||At.numIntersection!==Dt.numIntersection)||At.vertexAlphas!==qt||At.vertexTangents!==Qt||At.morphTargets!==It||At.morphNormals!==he||At.morphColors!==Pe||At.toneMapping!==_e||At.morphTargetsCount!==Xe||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,At.__version=Z.version);let dn=At.currentProgram;ie===!0&&(dn=ro(Z,H,J),L&&Z.isNodeMaterial&&L.onUpdateProgram(Z,dn,At));let Ln=!1,ni=!1,sr=!1,me=dn.getUniforms(),Re=At.uniforms;if(A.useProgram(dn.program)&&(Ln=!0,ni=!0,sr=!0),Z.id!==B&&(B=Z.id,ni=!0),At.needsLights){let be=Hp(T.state.lightProbeGridArray,J);At.lightProbeGrid!==be&&(At.lightProbeGrid=be,ni=!0)}if(Ln||k!==F){A.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),me.setValue(X,"projectionMatrix",F.projectionMatrix),me.setValue(X,"viewMatrix",F.matrixWorldInverse);let ri=me.map.cameraPosition;ri!==void 0&&ri.setValue(X,ye.setFromMatrixPosition(F.matrixWorld)),N.logarithmicDepthBuffer&&me.setValue(X,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&me.setValue(X,"isOrthographic",F.isOrthographicCamera===!0),k!==F&&(k=F,ni=!0,sr=!0)}if(At.needsLights&&(tn.state.sunShadowMap.length>0&&me.setValue(X,"sunShadowMap",tn.state.sunShadowMap,et),tn.state.directionalShadowMap.length>0&&me.setValue(X,"directionalShadowMap",tn.state.directionalShadowMap,et),tn.state.spotShadowMap.length>0&&me.setValue(X,"spotShadowMap",tn.state.spotShadowMap,et),tn.state.pointShadowMap.length>0&&me.setValue(X,"pointShadowMap",tn.state.pointShadowMap,et)),J.isSkinnedMesh){me.setOptional(X,J,"bindMatrix"),me.setOptional(X,J,"bindMatrixInverse");let be=J.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),me.setValue(X,"boneTexture",be.boneTexture,et))}J.isBatchedMesh&&(me.setOptional(X,J,"batchingTexture"),me.setValue(X,"batchingTexture",J._matricesTexture,et),me.setOptional(X,J,"batchingIdTexture"),me.setValue(X,"batchingIdTexture",J._indirectTexture,et),me.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&me.setValue(X,"batchingColorTexture",J._colorsTexture,et));let ii=tt.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&W.update(J,tt,dn),(ni||At.receiveShadow!==J.receiveShadow)&&(At.receiveShadow=J.receiveShadow,me.setValue(X,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Re.envMapIntensity.value=H.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=D_()),ni){if(me.setValue(X,"toneMappingExposure",I.toneMappingExposure),At.needsLights&&Xp(Re,sr),wt&&Z.fog===!0&&Ft.refreshFogUniforms(Re,wt),Ft.refreshMaterialUniforms(Re,Z,$,Y,T.state.transmissionRenderTarget[F.id]),At.needsLights&&At.lightProbeGrid){let be=At.lightProbeGrid;Re.probesSH.value=be.texture,Re.probesMin.value.copy(be.boundingBox.min),Re.probesMax.value.copy(be.boundingBox.max),Re.probesResolution.value.copy(be.resolution)}Or.upload(X,Ku(At),Re,et)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Or.upload(X,Ku(At),Re,et),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&me.setValue(X,"center",J.center),me.setValue(X,"modelViewMatrix",J.modelViewMatrix),me.setValue(X,"normalMatrix",J.normalMatrix),me.setValue(X,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let be=Z.uniformsGroups;for(let ri=0,or=be.length;ri<or;ri++){let th=be[ri];lt.update(th,dn),lt.bind(th,dn)}}return dn}function Xp(F,H){F.ambientLightColor.needsUpdate=H,F.lightProbe.needsUpdate=H,F.sunLights.needsUpdate=H,F.sunLightShadows.needsUpdate=H,F.directionalLights.needsUpdate=H,F.directionalLightShadows.needsUpdate=H,F.pointLights.needsUpdate=H,F.pointLightShadows.needsUpdate=H,F.spotLights.needsUpdate=H,F.spotLightShadows.needsUpdate=H,F.rectAreaLights.needsUpdate=H,F.hemisphereLights.needsUpdate=H}function qp(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(F,H,tt){let Z=K.get(F);Z.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),K.get(F.texture).__webglTexture=H,K.get(F.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:tt,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,H){let tt=K.get(F);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(F,H=0,tt=0){V=F,U=H,O=tt;let Z=null,J=!1,wt=!1;if(F){let St=K.get(F);if(St.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(X.FRAMEBUFFER,St.__webglFramebuffer),G.copy(F.viewport),nt.copy(F.scissor),Q=F.scissorTest,A.viewport(G),A.scissor(nt),A.setScissorTest(Q),B=-1;return}else if(St.__webglFramebuffer===void 0)et.setupRenderTarget(F);else if(St.__hasExternalTextures)et.rebindTextures(F,K.get(F.texture).__webglTexture,K.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let qt=F.depthTexture;if(St.__boundDepthTexture!==qt){if(qt!==null&&K.has(qt)&&(F.width!==qt.image.width||F.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(F)}}let Ct=F.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(wt=!0);let Lt=K.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Lt[H])?Z=Lt[H][tt]:Z=Lt[H],J=!0):F.samples>0&&et.useMultisampledRTT(F)===!1?Z=K.get(F).__webglMultisampledFramebuffer:Array.isArray(Lt)?Z=Lt[tt]:Z=Lt,G.copy(F.viewport),nt.copy(F.scissor),Q=F.scissorTest}else G.copy(ft).multiplyScalar($).floor(),nt.copy(zt).multiplyScalar($).floor(),Q=de;if(tt!==0&&(Z=P),A.bindFramebuffer(X.FRAMEBUFFER,Z)&&A.drawBuffers(F,Z),A.viewport(G),A.scissor(nt),A.setScissorTest(Q),J){let St=K.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,St.__webglTexture,tt)}else if(wt){let St=H;for(let Ct=0;Ct<F.textures.length;Ct++){let Lt=K.get(F.textures[Ct]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,tt,St)}}else if(F!==null&&tt!==0){let St=K.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,St.__webglTexture,tt)}B=-1};function ju(F){let H=K.get(F);return(H.__readFormat!==F.format||H.__readType!==F.type)&&(H.__readFormat=F.format,H.__readType=F.type,H.__formatReadable=N.textureFormatReadable(F.format),H.__typeReadable=N.textureTypeReadable(F.type)),H}this.readRenderTargetPixels=function(F,H,tt,Z,J,wt,Rt,St=0){if(!(F&&F.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=K.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){A.bindFramebuffer(X.FRAMEBUFFER,Ct);try{let Lt=F.textures[St],qt=Lt.format,Qt=Lt.type;F.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+St);let It=ju(Lt);if(It.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=F.width-Z&&tt>=0&&tt<=F.height-J&&X.readPixels(H,tt,Z,J,vt.convert(qt),vt.convert(Qt),wt)}finally{let Lt=V!==null?K.get(V).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(F,H,tt,Z,J,wt,Rt,St=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=K.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(H>=0&&H<=F.width-Z&&tt>=0&&tt<=F.height-J){A.bindFramebuffer(X.FRAMEBUFFER,Ct);let Lt=F.textures[St],qt=Lt.format,Qt=Lt.type;F.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+St);let It=ju(Lt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,he),X.bufferData(X.PIXEL_PACK_BUFFER,wt.byteLength,X.STREAM_READ),X.readPixels(H,tt,Z,J,vt.convert(qt),vt.convert(Qt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Pe=V!==null?K.get(V).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Pe);let _e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await mf(X,_e,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,he),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,wt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(he),X.deleteSync(_e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,H=null,tt=0){let Z=Math.pow(2,-tt),J=Math.floor(F.image.width*Z),wt=Math.floor(F.image.height*Z),Rt=H!==null?H.x:0,St=H!==null?H.y:0;et.setTexture2D(F,0),X.copyTexSubImage2D(X.TEXTURE_2D,tt,0,0,Rt,St,J,wt),A.unbindTexture()},this.copyTextureToTexture=function(F,H,tt=null,Z=null,J=0,wt=0){let Rt,St,Ct,Lt,qt,Qt,It,he,Pe,_e=F.isCompressedTexture?F.mipmaps[wt]:F.image;if(tt!==null)Rt=tt.max.x-tt.min.x,St=tt.max.y-tt.min.y,Ct=tt.isBox3?tt.max.z-tt.min.z:1,Lt=tt.min.x,qt=tt.min.y,Qt=tt.isBox3?tt.min.z:0;else{let Re=Math.pow(2,-J);Rt=Math.floor(_e.width*Re),St=Math.floor(_e.height*Re),F.isDataArrayTexture?Ct=_e.depth:F.isData3DTexture?Ct=Math.floor(_e.depth*Re):Ct=1,Lt=0,qt=0,Qt=0}Z!==null?(It=Z.x,he=Z.y,Pe=Z.z):(It=0,he=0,Pe=0);let ge=vt.convert(H.format),Xe=vt.convert(H.type),At;H.isData3DTexture?(et.setTexture3D(H,0),At=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(et.setTexture2DArray(H,0),At=X.TEXTURE_2D_ARRAY):(et.setTexture2D(H,0),At=X.TEXTURE_2D),A.activeTexture(X.TEXTURE0),A.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);let tn=A.getParameter(X.UNPACK_ROW_LENGTH),ie=A.getParameter(X.UNPACK_IMAGE_HEIGHT),dn=A.getParameter(X.UNPACK_SKIP_PIXELS),Ln=A.getParameter(X.UNPACK_SKIP_ROWS),ni=A.getParameter(X.UNPACK_SKIP_IMAGES);A.pixelStorei(X.UNPACK_ROW_LENGTH,_e.width),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_e.height),A.pixelStorei(X.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(X.UNPACK_SKIP_ROWS,qt),A.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt);let sr=F.isDataArrayTexture||F.isData3DTexture,me=H.isDataArrayTexture||H.isData3DTexture;if(F.isDepthTexture){let Re=K.get(F),ii=K.get(H),be=K.get(Re.__renderTarget),ri=K.get(ii.__renderTarget);A.bindFramebuffer(X.READ_FRAMEBUFFER,be.__webglFramebuffer),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let or=0;or<Ct;or++)sr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(F).__webglTexture,J,Qt+or),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(H).__webglTexture,wt,Pe+or)),X.blitFramebuffer(Lt,qt,Rt,St,It,he,Rt,St,X.DEPTH_BUFFER_BIT,X.NEAREST);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||F.isRenderTargetTexture||K.has(F)){let Re=K.get(F),ii=K.get(H);A.bindFramebuffer(X.READ_FRAMEBUFFER,C),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,D);for(let be=0;be<Ct;be++)sr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Re.__webglTexture,J,Qt+be):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Re.__webglTexture,J),me?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ii.__webglTexture,wt,Pe+be):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ii.__webglTexture,wt),J!==0?X.blitFramebuffer(Lt,qt,Rt,St,It,he,Rt,St,X.COLOR_BUFFER_BIT,X.NEAREST):me?X.copyTexSubImage3D(At,wt,It,he,Pe+be,Lt,qt,Rt,St):X.copyTexSubImage2D(At,wt,It,he,Lt,qt,Rt,St);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else me?F.isDataTexture||F.isData3DTexture?X.texSubImage3D(At,wt,It,he,Pe,Rt,St,Ct,ge,Xe,_e.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(At,wt,It,he,Pe,Rt,St,Ct,ge,_e.data):X.texSubImage3D(At,wt,It,he,Pe,Rt,St,Ct,ge,Xe,_e):F.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,wt,It,he,Rt,St,ge,Xe,_e.data):F.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,wt,It,he,_e.width,_e.height,ge,_e.data):X.texSubImage2D(X.TEXTURE_2D,wt,It,he,Rt,St,ge,Xe,_e);A.pixelStorei(X.UNPACK_ROW_LENGTH,tn),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ie),A.pixelStorei(X.UNPACK_SKIP_PIXELS,dn),A.pixelStorei(X.UNPACK_SKIP_ROWS,Ln),A.pixelStorei(X.UNPACK_SKIP_IMAGES,ni),wt===0&&H.generateMipmaps&&X.generateMipmap(At),A.unbindTexture()},this.initRenderTarget=function(F){K.get(F).__webglFramebuffer===void 0&&et.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?et.setTextureCube(F,0):F.isData3DTexture?et.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?et.setTexture2DArray(F,0):et.setTexture2D(F,0),A.unbindTexture()},this.resetState=function(){U=0,O=0,V=null,A.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function jf(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function td(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var U_=[],au=new Map,N_=0;function al(i){U_=i,au=new Map(i.flatMap(t=>t.items.map(e=>[O_(t.id,e.id),e]))),N_++}function O_(i,t){return`pack:${i}:${t}`}function B_(i){return i.startsWith("pack:")}var z_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function ed(i){return De(i)?.parts.find(t=>t.screen)}function De(i){if(!B_(i))return;let t=au.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=z_[e];return r?au.get(`pack:${r}:${n.join(":")}`):void 0}function fn(i,t){let e=De(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return cl;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));if(t.type==="fan_ceiling")return Math.max(0,i.height-Math.max(.05,t.h));if(t.type==="altar_wall")return 1.45;if(t.type==="water_heater")return 1.7;if(t.type==="range_hood")return 1.35;if(t.type==="microwave")return lu(i,t.x,t.z);if(t.type==="water_pump"&&!i.rooms.some(n=>n.points.length>=3&&ce([t.x,t.z],n.points)))return ll(i,t.x,t.z);switch(e?.mount){case"surface":return lu(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Ns(t)}}var kr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,canopy:2.4,veranda:2.4};function Kn(i){return i==="hedge"||i==="fence"||i==="pergola"||i==="canopy"||i==="veranda"}function ul(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let f=s(c,u);o=Math.min(o,f),a=Math.max(a,f)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function V_(i,t,e,n){return Zi(i)+(t.offset??0)+kr[t.type]-ul(t,e,n)}function Zi(i){return i.elevation>.3?0:-.2}function ll(i,t,e){let n=(i.outdoor??[]).filter(s=>!Kn(s.type)&&s.type!=="pool"&&ce([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?V_(i,r,t,e):Zi(i)}var G_={type:"none",pitch:35,overhang:.4},vw={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...G_}};var nd=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),cl=1.75;function id(i){return nd.has(i)||!!De(i)?.light}var H_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ns(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;default:return 0}}function lu(i,t,e){let n=0;for(let r of i.furniture)!(H_.has(r.type)||De(r.type)?.surface)||!ce([t,e],hl(r))||(n=Math.max(n,r.h));return n}var k_=new Set([...nd,"radiator","air_conditioner","water_pump","fan_ceiling","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var W_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],X_=["standard","bars","glass_wall"];function Ji(i,t){return i.type==="door"?i.style&&W_.includes(i.style)?i.style:t?"front":"interior":i.style&&X_.includes(i.style)?i.style:"standard"}function rd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function sd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Ki(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Os(i){return Math.abs(Ki(i))}function od(i){let t=Ki(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function ad(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function ld(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function hl(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function ce(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ti=(i,t)=>[i[0]+t[0],i[1]+t[1]],Qn=(i,t)=>[i[0]*t,i[1]*t],ks=(i,t)=>i[0]*t[0]+i[1]*t[1],Bs=(i,t)=>i[0]*t[1]-i[1]*t[0],zs=i=>Math.hypot(i[0],i[1]),jn=i=>{let t=zs(i)||1;return[i[0]/t,i[1]/t]},cd=i=>[-i[1],i[0]],ud=i=>[i[1],-i[0]];function Vs(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),o=[],a=w=>{for(let b=0;b<o.length;b++)if(Math.abs(o[b][0]-w[0])<=n&&Math.abs(o[b][1]-w[1])<=n)return b;return o.push([w[0],w[1]]),o.length-1},l=[];for(let w of i){let b=w.points;if(b.length<3||Math.abs(Ki(b))<1e-6)continue;let E=Ki(b)>0,I=b.map(a);for(let R=0;R<b.length;R++){let L=I[R],P=I[(R+1)%b.length];L!==P&&l.push(E?{u:L,v:P,room:w.id,edge:R,forward:!0}:{u:P,v:L,room:w.id,edge:R,forward:!1})}}let c=s.map(w=>[a(w.a),a(w.b)]),u=new Set;for(let w of i){let b=w.points;b.length<3||(w.wall_splits??[]).forEach((E,I)=>{if(!E||I>=b.length)return;let R=b[I],L=He(b[(I+1)%b.length],R),P=zs(L);for(let C of E)C>n&&C<P-n&&u.add(a(Ti(R,Qn(L,C/P))))})}let f=[];for(let w of l){let b=o[w.u],E=o[w.v],I=He(E,b),R=zs(I),L=Qn(I,1/R),P=[];for(let D=0;D<o.length;D++){if(D===w.u||D===w.v)continue;let U=He(o[D],b),O=ks(U,L);O<=n||O>=R-n||Math.abs(Bs(L,U))<=n&&P.push({t:O,id:D})}P.sort((D,U)=>D.t-U.t);let C=[{t:0,id:w.u},...P,{t:R,id:w.v}];for(let D=0;D+1<C.length;D++){let U=C[D],O=C[D+1],V=w.forward?U.t:R-O.t,B=w.forward?O.t:R-U.t;f.push({u:U.id,v:O.id,room:w.room,edge:w.edge,t0:V,t1:B})}}let h=new Map;for(let w of f){let b=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,E=h.get(b);E||h.set(b,E=[]),E.push(w)}let d=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),g=new Map;for(let w of f){let b=`${w.room}:${w.edge}`;g.set(b,[...g.get(b)??[],w.t0].sort((E,I)=>E-I))}let x=w=>{let b=i.find(I=>I.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(b))return b;let E=g.get(`${w.room}:${w.edge}`)??[];return b[E.indexOf(w.t0)]??null},m=w=>{let b=w.map(x).filter(E=>typeof E=="number"&&E>0);return b.length?Math.min(...b):void 0},p=w=>{let b=w.map(E=>i.find(I=>I.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return b.length?Math.max(...b):void 0},_=w=>w.some(b=>x(b)===0),y=[],v=[];for(let w of h.values()){let b=w[0],E=w.find(I=>I!==b&&I.u===b.v&&I.v===b.u&&I.room!==b.room);for(let I of w)I!==b&&I!==E&&I.room!==b.room&&r.push(`overlap:${b.room}:${I.room}`);if(_(E?[b,E]:[b])){E&&y.push([b.room,E.room]);continue}if(E){let I=p([b,E])??t.interior;v.push({a:b.u,b:b.v,left:I/2,right:I/2,exterior:!1,roomLeft:b.room,roomRight:E.room,sources:[d(b),d(E)],height:m([b,E])})}else v.push({a:b.u,b:b.v,left:0,right:p([b])??t.exterior,exterior:!0,roomLeft:b.room,roomRight:null,sources:[d(b)],height:m([b])})}s.forEach((w,b)=>{let[E,I]=c[b];if(E===I)return;let R=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],L=i.find(D=>D.points.length>=3&&ce(R,D.points))?.id??null,P=(w.thickness??t.interior)/2,C=typeof w.height=="number"&&w.height>0?w.height:void 0;v.push({free:w.id,a:E,b:I,left:P,right:P,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:C})}),v=Y_(v,o,u);let S=Z_(v,o);return{walls:v.map((w,b)=>{let E=o[w.a],I=o[w.b],R=S.get(`${b}:a`),L=S.get(`${b}:b`),P=J_([R.right,L.left,I,L.right,R.left,E],1e-6);return{id:q_(E,I),a:[E[0],E[1]],b:[I[0],I[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:P,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{}}}),warnings:[...new Set(r)],open:y}}function q_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function hd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Y_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=hd(l)),c.a!==o&&(c=hd(c)),l.a===c.b)continue;let u=jn(He(t[l.b],t[l.a])),f=jn(He(t[c.b],t[c.a]));if(Math.abs(Bs(u,f))>1e-6||ks(u,f)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:$_(l.sources,c.sources)},d=n.filter((g,x)=>x!==a[0]&&x!==a[1]);d.push(h),n.length=0,n.push(...d),r=!0;break}}return n}function $_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function Z_(i,t){let e=new Map;i.forEach((r,s)=>{let o=jn(He(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:Qn(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Ti(o,Qn(cd(c.d),c.left)),right:Ti(o,Qn(ud(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],f=s[(c+1)%s.length],h=Ti(o,Qn(cd(u.d),u.left)),d=Ti(o,Qn(ud(f.d),f.right)),g=Bs(u.d,f.d);if(Math.abs(g)<1e-4)continue;let x=Bs(He(d,h),f.d)/g,m=Ti(h,Qn(u.d,x));zs(He(m,o))>l||(n.get(u.key).left=m,n.get(f.key).right=m)}}return n}function J_(i,t){let e=i.filter((r,s)=>zs(He(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=He(o,s),c=He(a,o);if(Math.abs(Bs(jn(l),jn(c)))<1e-7&&ks(l,c)>0){e=e.filter((u,f)=>f!==r),n=!0;break}}}return e}function fd(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=jn(He(r,n));return Ti(n,Qn(s,e))}function dd(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=jn(He(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ti(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function pd(i,t,e){if(!t.wall)return K_(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=fd(e.room,0,t.offset);return{wall:n,s:ks(He(r,n.a),jn(He(n.b,n.a)))}}function K_(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=fd(t,e,n);return{wall:r,s:ks(He(o,r.a),jn(He(r.b,r.a)))}}return null}var Hs=Math.PI/180;function kn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function Cn(i){let t=kn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Hs),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Hs);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=bd(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var Q_=.14;function gd(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!ce([t,e],s.points))continue;let[u,f]=Ei(s,t,e),h=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((h?null:Ws(Gr(s,{u0:d,u1:d,a:d,b:d}),u,f))??Cn(s).y(f))-Q_;n=n===null?x:Math.max(n,x)}return n}function cu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Os(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=md([a[0]-o[0],a[1]-o[1]]),u=md([l[0]-a[0],l[1]-a[1]]),f=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],d=f[0]+h[0],g=f[1]+h[1],x=Math.hypot(d,g);if(x<1e-6){r.push([a[0]+f[0]*t,a[1]+f[1]*t]);continue}let m=(d*f[0]+g*f[1])/x,p=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/x*t*p,a[1]+g/x*t*p])}return r}function md(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function xd(i,t){if(i.points&&i.points.length>=3)return cu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var Gs=Math.tan(30*Hs);function bd(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Gs*(i-o+s))/(2*Gs))),u=a+(c-s)*Gs;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*Gs:h<=i-o?l+(i-o-h)*Gs:e+(i-h)*r}}function Gr(i,t){let e=kn(i),n=Cn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,y)=>[_,y,n.y(y)],u=c(a,-s),f=c(l,-s),h=c(l,r+o),d=c(a,r+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Hs),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Hs);if(i.shape==="pent"){let _=[u,f,h,d];return{faces:[_],rim:_,ridges:[[h,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),y=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],S=i.shape==="pyramid"?[[u,f,y],[f,h,y],[h,d,y],[d,u,y]]:[[u,f,v,y],[y,v,h,d],[d,u,y],[f,h,v]],T=i.shape==="pyramid"?[[u,y],[d,y],[f,y],[h,y]]:[[y,v],[u,y],[d,y],[f,v],[h,v]];return{faces:S,rim:[u,f,h,d],ridges:T,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(r)),y=_+(n.rh-_)*.55,v=g>1e-6?Math.min(n.vr,(y-i.eave_a)/g):n.vr,S=x>1e-6?Math.max(n.vr,r-(y-i.eave_b)/x):n.vr,T=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,g)),w=[e.u0+T,n.vr,n.rh],b=[e.u1-T,n.vr,n.rh],E=[a,v,y],I=[a,S,y],R=[l,v,y],L=[l,S,y];return{faces:[[u,f,R,b,w,E],[w,b,L,h,d,I],[I,E,w],[R,L,b]],rim:[u,f,R,L,h,d,I,E],ridges:[[w,b],[E,w],[I,w],[R,b],[L,b]],gable:[[0,n.y(0)],[v,y],[S,y],[r,n.y(r)]]}}if(i.shape==="mansard"){let _=bd(r,i.eave_a,i.eave_b,g,x),y=[a,_.vla,_.yla],v=[l,_.vla,_.yla],S=[a,r-_.vlb,_.ylb],T=[l,r-_.vlb,_.ylb],w=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[u,f,v,y],[y,v,b,w],[w,b,T,S],[S,T,h,d]],rim:[u,f,v,b,T,h,d,S,w,y],ridges:[[w,b],[y,v],[S,T]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[r-_.vlb,_.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,f,p,m],[m,p,h,d]],rim:[u,f,p,h,d,m],ridges:[[m,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function Ws(i,t,e){let n=null;for(let r of i.faces){if(!ce([t,e],r.map(_=>[_[0],_[1]])))continue;let[s,o]=r,a=r.slice(2).find(_=>Math.abs((o[0]-s[0])*(_[1]-s[1])-(o[1]-s[1])*(_[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],f=a[0]-s[0],h=a[2]-s[2],d=a[1]-s[1],g=c*d-u*h,x=u*f-l*d,m=l*h-c*f;if(Math.abs(x)<1e-9)continue;let p=s[2]-(g*(t-s[0])+m*(e-s[1]))/x;n=n===null?p:Math.min(n,p)}return n}function Ei(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function j_(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function uu(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=j_(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function hu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=kn(t),n=Cn(t).rh,r=Gr(i,{u0:0,u1:0,a:0,b:0}),s=Cn(i),o=g=>{let[x,m]=e.at(g,e.w/2),[p,_]=Ei(i,x,m);return Ws(r,p,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,f=Math.abs(c-l),h=c;for(let g=.5;g<f;g+=.05)if(o(l+u*g)>=n-.02){h=l+u*g;break}if(Math.abs(h-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=h:d.x0=h:c===e.u1?d.z1=h:d.z0=h,d}function _d(i,t){let e=hu(i,t),n=kn(e),r=Cn(e),s=Gr(i,{u0:0,u1:0,a:0,b:0}),o=Cn(i),a=h=>{let[d,g]=n.at(h,n.w/2),[x,m]=Ei(i,d,g);return Ws(s,x,m)??o.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],f=Math.max(1,Math.ceil(c/.15));for(let h=0;h<f;h++){let d=c*h/f,g=c*(h+1)/f,x=l?n.u0+d:n.u1-d,m=l?n.u0+g:n.u1-g,p=a(m),_=1/0,y=-1/0;for(let b=0;b<=40;b++){let E=n.w*b/40;r.y(E)>p+.02&&(_=Math.min(_,E),y=Math.max(y,E))}if(!(y-_>.05))continue;let v=n.at(x,_),S=n.at(m,y),T=Ei(i,v[0],v[1]),w=Ei(i,S[0],S[1]);u.push({u0:Math.min(T[0],w[0]),u1:Math.max(T[0],w[0]),v0:Math.min(T[1],w[1]),v1:Math.max(T[1],w[1])})}return u}function Vr(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let f=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*f,a[1]+(l[1]-a[1])*f,a[2]+(l[2]-a[2])*f])}}return s}function vd(i,t){let e=Vr(i,0,t.u0,!0),n=Vr(i,0,t.u1,!1),r=Vr(Vr(i,0,t.u0,!1),0,t.u1,!0),s=Vr(r,1,t.v0,!0),o=Vr(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Os(a.map(l=>[l[0],l[1]])))>1e-6)}function fl(i,t,e){let n=kn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(f=>ce(u,f.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function yd(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}var In=1e-4;function fu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Md(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>In&&a<1-In&&l>-In&&l<1+In?a:null}function du(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=In||o>=1-In?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<In?o:null}function tv(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Md(n,r,o,a)!==null||du(o,n,r)!==null||du(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<In)return!0}}return ce(i[0],t)||ce(t[0],i)}function ev(i){let t=i.map(s=>fu(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((f,h)=>{if(h!==o)for(let d=0;d<f.length;d++){let g=f[d],x=f[(d+1)%f.length],m=Md(l,c,g,x)??du(g,l,c);m!==null&&u.push(m)}}),u.sort((f,h)=>f-h);for(let f=1;f<u.length;f++){if(u[f]-u[f-1]<In)continue;let h=[l[0]+(c[0]-l[0])*u[f-1],l[1]+(c[1]-l[1])*u[f-1]],d=[l[0]+(c[0]-l[0])*u[f],l[1]+(c[1]-l[1])*u[f]],g=Math.hypot(d[0]-h[0],d[1]-h[1]),x=[(h[0]+d[0])/2+(d[1]-h[1])/g*.001,(h[1]+d[1])/2-(d[0]-h[0])/g*.001];t.some((m,p)=>p!==o&&ce(x,m))||e.some(([m,p])=>Math.hypot(m[0]-h[0],m[1]-h[1])<In&&Math.hypot(p[0]-d[0],p[1]-d[1])<In)||e.push([h,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],f)=>!r.has(f)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&fu(o)>1e-6&&n.push(o)}return n}function pu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&tv(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:ev(s))}function nv(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Sd(i,t,e=.03){return i.every(n=>ce(n,t)||t.some((r,s)=>nv(n,r,t[(s+1)%t.length])<=e))}function wd(i,t){let e=fu(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var Qi=Gt(3662079,.95),mu=Gt(3662079,1),Ai=Gt(5995775,.34),Td=Gt(5995775,.22),dl=[-.55,.83],jt=-1,pl=16,ji=32,Ed=48,gu=64,oe=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Zt;return t.setAttribute("position",new kt(this.p,3)),t.setAttribute("color",new kt(this.c,3)),t.setAttribute("fold",new kt(this.f,1)),this.uv&&t.setAttribute("uv",new kt(this.uv,2)),this.tile&&t.setAttribute("tile",new kt(this.tile,2)),t.computeBoundingSphere(),t}},Ve=class{p=[];c=[];f=[];seg(t,e,n=Qi,r=jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,jt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,jt),this.seg(c,a,n,s)}geometry(){let t=new Zt;return t.setAttribute("position",new kt(this.p,3)),t.setAttribute("color",new kt(this.c,3)),t.setAttribute("fold",new kt(this.f,1)),t}};function Ad(i,t,e,n){let s=i.uv?2:0,o=(f,h)=>{let d=f*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(f,h,d)=>({p:f.p.map((g,x)=>g+(h.p[x]-g)*d),c:f.c.map((g,x)=>g+(h.c[x]-g)*d),uv:f.uv&&h.uv?f.uv.map((g,x)=>g+(h.uv[x]-g)*d):null,tile:f.tile}),l=(f,h,d)=>{for(let g=0;g<3;g++){let x=f*3+g;for(let m=0;m<3;m++)i.p[x*3+m]=h[g].p[m],i.c[x*3+m]=h[g].c[m];if(i.uv&&h[g].uv)for(let m=0;m<s;m++)i.uv[x*2+m]=h[g].uv[m];if(i.tile&&h[g].tile)for(let m=0;m<2;m++)i.tile[x*2+m]=h[g].tile[m];i.f[x]=d}},c=(f,h)=>{let d=i.p.length/9;for(let g of f)i.p.push(...g.p),i.c.push(...g.c),i.f.push(h),i.uv?.push(...g.uv??[.5,.5]),i.tile?.push(...g.tile??[0,1]);return d},u=i.p.length/9;for(let f=t;f<u;f++){let h=[o(f,0),o(f,1),o(f,2)],d=h.map(b=>b.p[1]>e+1e-6),g=h.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let b=0;b<3;b++)i.f[f*3+b]=n;continue}let x=i.f[f*3],m=(b,E)=>a(b,E,(e-b.p[1])/(E.p[1]-b.p[1])),p=d.filter(Boolean).length,_=p===1?d.indexOf(!0):d.indexOf(!1),y=h[_],v=h[(_+1)%3],S=h[(_+2)%3],T=m(y,v),w=m(S,y);p===1?(l(f,[y,T,w],n),c([T,v,S],x),c([T,S,w],x)):(l(f,[y,T,w],x),c([T,v,S],n),c([T,S,w],n))}}function Rd(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),f=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=f[d];let h=i.c.slice(s*6,s*6+3);i.p.push(...f,...c),i.c.push(...h,...h),i.f.push(n,n)}}var re=Math.PI/180;function Gt(i,t){let e=new rt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function iv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function Hr(i,t=[]){let e=i.map(([n,r])=>new $t(n,r));return gs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new $t(r,s))))}function Cd(i,t,e,n,r,s,o){let a=new rt(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],x=t[(d+1)%4],m=e[d],p=e[(d+1)%4],_=x[0]-g[0],y=x[1]-g[1],v=Math.hypot(_,y);if(v<1e-6)continue;let T=.8+.28*((y/v*dl[0]-_/v*dl[1]+1)/2),w=(m[0]+p[0]-g[0]-x[0])/2*(-y/v)+(m[1]+p[1]-g[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,w/Math.max(1e-6,Math.hypot(w,r-n)))),E=Gt(s,l(n)*T).lerp(a,b),I=Gt(s,l(r)*T).lerp(a,b);i.tri([g[0],n,g[1]],[m[0],r,m[1]],[p[0],r,p[1]],E,I,I),i.tri([g[0],n,g[1]],[p[0],r,p[1]],[x[0],n,x[1]],E,I,E)}let[c,u,f,h]=e;Math.hypot(f[0]-c[0],f[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[f[0],r,f[1]],a))}function Id(i,t,e,n,r,s,o,a,l,c){let u=new rt(l),f=[];for(let d=0;d<c;d++){let g=d/c*Math.PI*2;f.push({y:s+Math.cos(g)*o,s:r+Math.sin(g)*o})}let h=(d,g)=>{let x=t(d,f[g%c].s);return[x[0],f[g%c].y,x[1]]};for(let d=0;d<c;d++){let g=(d+.5)/c*Math.PI*2,x=Gt(a,.62+.4*Math.max(0,Math.cos(g)));i.tri(h(e,d),h(n,d+1),h(n,d),x),i.tri(h(e,d),h(e,d+1),h(n,d+1),x)}for(let d of[e,n]){let g=t(d,r),x=[g[0],s,g[1]];for(let m=0;m<c;m++)i.tri(x,h(d,m),h(d,m+1),u)}}function we(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:g=>Math.max(e+.002,n(g[0],g[1])),l=o.aoFrom??e,c=o.fold??jt,u=g=>.5+.5*Math.min(1,Math.max(0,(g-l)/1.6)),f=(o.holes??[]).map(g=>iv(g)>0?[...g].reverse():g),h=f.length?[...t,...f.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Hr(t,f);if(o.topFace!==!1){let g=new rt(s);for(let[x,m,p]of d){let _=h[x],y=h[m],v=h[p];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],g,g,g,void 0,o.topFold??c)}}if(o.bottom){let g=Gt(r,.55);for(let[x,m,p]of d){let _=h[x],y=h[m],v=h[p];i.tri([_[0],e,_[1]],[y[0],e,y[1]],[v[0],e,v[1]],g,g,g,void 0,c)}}for(let g of[t,...f])for(let x=0;x<g.length;x++){let m=g[x],p=g[(x+1)%g.length],_=p[0]-m[0],y=p[1]-m[1],v=Math.hypot(_,y);if(v<1e-6)continue;let T=.8+.28*((y/v*dl[0]-_/v*dl[1]+1)/2),w=a(m),b=a(p),E=Gt(r,u(e)*T),I=Gt(r,u(w)*T),R=Gt(r,u(b)*T);i.tri([m[0],e,m[1]],[m[0],w,m[1]],[p[0],b,p[1]],E,I,R,void 0,c),i.tri([m[0],e,m[1]],[p[0],b,p[1]],[p[0],e,p[1]],E,R,E,void 0,c)}}var M={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},j=Gt(5995775,.3),dt=Gt(5995775,.17),pt=Gt(3662079,.45),Ri=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Bd(n)}rotated(t,e,n){let r=n*re,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];we(this.buf,xu(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==xu(l)&&(l.reverse(),c.reverse()),Cd(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,f=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let d=(r+s)/2,g=t==="x"?e:n,x=t==="x"?n:e,m=(_,y)=>t==="x"?this.tf(_,y):this.tf(y,_),p=this.buf.p.length;if(Id(this.buf,m,g-o/2,g+o/2,x,d,h,l,c,u),this.mirrored&&ml(this.buf,p),f)for(let _ of[g-o/2,g+o/2])for(let y=0;y<u;y++){let v=y/u*Math.PI*2,S=(y+1)/u*Math.PI*2;this.line(m(_,x+Math.sin(v)*h),m(_,x+Math.sin(S)*h),d+Math.cos(v)*h,d+Math.cos(S)*h,f)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let f=0;f<l;f++){let h=f/l*Math.PI*2;u.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(we(this.buf,xu(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let f=0;f<l;f++)this.line(u[f],u[(f+1)%l],s,s,c)}tubeYZ(t,e,n,r,s=8,o=null){if(e.length<2||n<1e-4)return;let a=e.map(([f,h],d)=>{let g=e[Math.max(0,d-1)],x=e[Math.min(e.length-1,d+1)],m=x[0]-g[0],p=x[1]-g[1],_=Math.hypot(m,p)||1;return Array.from({length:s},(y,v)=>{let S=v/s*Math.PI*2,T=t+Math.cos(S)*n,w=f-p/_*Math.sin(S)*n,b=h+m/_*Math.sin(S)*n,E=this.tf(T,b);return[E[0],w,E[1]]})}),l=this.buf.p.length,c=new rt(r);for(let f=0;f<a.length-1;f++)for(let h=0;h<s;h++){let d=(h+1)%s;this.buf.tri(a[f][h],a[f+1][h],a[f+1][d],c),this.buf.tri(a[f][h],a[f+1][d],a[f][d],c)}let u=(f,h)=>{let d=this.tf(t,e[f][1]),g=[d[0],e[f][0],d[1]];for(let x=0;x<s;x++){let m=(x+1)%s;this.buf.tri(g,a[f][h?m:x],a[f][h?x:m],c)}};if(u(0,!0),u(e.length-1,!1),this.mirrored&&ml(this.buf,l),o)for(let f=0;f<e.length-1;f++)this.seg(t,e[f][0],e[f][1],t,e[f+1][0],e[f+1][1],o)}seg(t,e,n,r,s,o,a=j){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,jt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Bd(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function xu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function tr(i,t,e,n,r,s,o=M.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let f of[-1,1]){let h=u*l,d=f*c;a?i.loft([h-r*.3,h+r*.3,d-r*.3,d+r*.3],[h-r/2,h+r/2,d-r/2,d+r/2],0,n,o):i.box(h-r/2,h+r/2,0,n,d-r/2,d+r/2,o)}}function qs(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let f=t+c*u;i.seg(f,n,s,f,r,s,dt)}for(let u=0;u<o;u++){let f=t+c*(u+.5),h=a??r-.08;if(l)i.seg(f-Math.min(.1,c/4),h,s+.012,f+Math.min(.1,c/4),h,s+.012,pt);else{let d=o>1?f+(u%2?-c/2+.06:c/2-.06):f+c/2-.06;i.seg(d,h-.08,s+.012,d,h+.08,s+.012,pt)}}}function Pd(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,f=Math.min(.24,e*.28);tr(i,t,e,.07,.05,.05,M.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,M.fabric,M.fabricTop,.04,j),i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],u-.08,n,M.fabric,M.fabricTop,j),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,M.fabric,M.fabricTop,.04,j),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,M.fabric,M.fabricTop,.04,j);let d=(o-c-(s+c))/r;for(let g=0;g<r;g++){let x=s+c+d*g+.02,m=x+d-.04;i.pad(x,m,u-.08,u+.05,a+f+.02,l-.06,M.cushion,M.cushion,.04),i.loft([x+.01,m-.01,a+f*.55,a+f+.14],[x+.03,m-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,M.cushion)}}function Ld(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);tr(i,t,e,.08,.06,.03,M.wood,!0),i.box(o,a,.08,l,r+.06,s,M.wood,M.woodTop,j),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,M.white,M.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,M.wood,M.woodTop,j),i.box(o,a,n-.05,n,r,r+.09,M.wood,M.woodTop,dt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,M.cushion,M.fabricTop,.025,dt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,M.cushion,M.fabricTop,8);let f=t>1.2?2:1,h=(t-.2)/f;for(let d=0;d<f;d++){let g=o+.1+h*d,x=r+.12,m=Math.min(.42,e*.2),p=.1;i.loft([g+.03+p,g+h-.03-p,x+p*.5,x+m-p*.5],[g+.03,g+h-.03,x,x+m],c,c+.06,M.whiteTop),i.loft([g+.03,g+h-.03,x,x+m],[g+.03+p,g+h-.03-p,x+p*.5,x+m-p*.5],c+.06,c+.12,M.whiteTop,M.whiteTop,dt)}}function rv(i,t,e,n){let r=Math.min(.46,n*.52);tr(i,t,e,r-.04,.035,.02,M.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,M.wood,M.woodTop,j),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,M.cushion,M.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,M.wood,M.woodTop,j)}function sv(i,t,e,n){tr(i,t,e,n-.04,.06,.05,M.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,M.wood,M.woodTop,pt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,M.body)}function ov(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,M.wood,M.woodTop,j),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,M.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,M.body,M.bodyTop,j);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,dt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,pt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,M.dark,M.dark,pt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,M.metal)}function ti(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,M.body,M.bodyTop,j),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,M.dark),qs(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function av(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,M.wood,M.woodTop,j),i.box(t/2-.025,t/2,0,n,-e/2,e/2,M.wood,M.woodTop,j),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,M.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,M.wood,M.woodTop,dt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,f=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+f,-e/2+.04,e/2-.05,c%3?M.fabric:M.cushion,M.fabricTop),l+=u+.006,c++}}}}function lv(i,t,e,n){let r=Math.max(1,Math.round(t/.6));ti(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,M.whiteTop,M.whiteTop,j)}function cv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,M.white,M.whiteTop,j);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,dt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,pt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,pt)}function uv(i,t,e,n){let r=e/2-zd;i.box(-t/2,t/2,.02,n,-e/2,r,M.body,M.bodyTop,j),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,M.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,dt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,dt))}var zd=.06;function kd(i,t,e,n,r){let s=i.p.length;hv(i,t,e,n,r),t.mirror&&ml(i,s)}function hv(i,t,e,n,r){let s=t.rotation*re,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,S)=>[t.x+l*v*o-S*a,t.z+l*v*a+S*o],u=e+.05,f=e+t.h-.02,h=new rt(.75,.1,.14),d=new rt(M.dark),g=new rt(M.accent),x=t.w/2-.006,m=(v,S,T)=>{let w=T/p,b=new rt(2043212).lerp(h,w),E=new rt(M.body).lerp(h,w*.8),I=Math.cos(T),R=Math.sin(T),L=(D,U)=>c(v+S*(D*I-U*R),t.d/2+D*R+U*I),P=(D,U,O,V)=>{let[B,k,G,nt]=D;i.tri([B[0],U,B[1]],[k[0],U,k[1]],[G[0],O,G[1]],V),i.tri([B[0],U,B[1]],[G[0],O,G[1]],[nt[0],O,nt[1]],V)},C=(D,U,O,V,B,k,G,nt=G)=>{let Q=[L(D,k),L(U,k),L(U,B),L(D,B)];P([Q[0],Q[1],Q[1],Q[0]],O,V,nt),P([Q[3],Q[2],Q[2],Q[3]],O,V,G),P([Q[0],Q[3],Q[3],Q[0]],O,V,G),P([Q[1],Q[2],Q[2],Q[1]],O,V,G),P([Q[0],Q[1],Q[2],Q[3]],V,V,G),P([Q[3],Q[2],Q[1],Q[0]],O,O,G)};return C(0,x,u,f,-zd,0,E,b),C(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),C},p=1.83;m(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function fv(i,t,e,n){ti(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,M.dark,M.dark,j);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,M.dark,1451583,12,pt)}}function dv(i,t,e,n){ti(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,M.whiteTop,M.whiteTop,j),i.box(r/2,t/2,n-.04,n,-e/2,e/2,M.whiteTop,M.whiteTop,j),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,M.whiteTop,M.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,M.whiteTop,M.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,M.metal,M.metal,pt),i.cyl(0,-e/2+.05,.02,n,n+.28,M.metal,M.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,M.metal)}function pv(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,M.white,M.whiteTop,j),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,M.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,M.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,M.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,M.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,M.glass,M.glass,pt),i.cyl(-t/2+.04,0,.02,n,n+.12,M.metal,M.metal,8)}function mv(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,M.whiteTop,M.whiteTop,j),i.cyl(0,0,.04,.05,.052,M.metal,M.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,pt),i.seg(r,n,s,o,n,a,pt),i.seg(o,.05,a,o,n,a,pt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,M.metal,M.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,M.metal,M.metal,12,pt)}function gv(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,M.white,M.whiteTop,j),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,M.white,M.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,M.white,M.whiteTop,12,j),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,M.whiteTop)}function xv(i,t,e,n){ti(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,M.white,M.whiteTop,j),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,M.glass,M.glass,pt),i.cyl(0,-e/2+.06,.018,n,n+.2,M.metal,M.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,M.glass,M.glass,pt)}function bv(i,t,e,n){ti(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,M.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,M.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,M.dark,M.dark,pt)}function Fd(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,M.pot,M.pot,10,j),i.cyl(0,0,r*.08,s,n*.55,M.wood,M.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,M.plant,M.plantTop,8,a===o-1?dt:null)}}function _v(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,M.fabric,M.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,j)}function vv(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let f=e/2-o*u,h=f-o,d=s*(u+1);i.box(-t/2,t/2,0,d,h,f,M.wood,M.woodTop),i.seg(-t/2,d,f,t/2,d,f,j)}i.seg(-t/2,0,e/2,-t/2,s,e/2,j);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,dt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),pt);for(let u=0;u<c;u+=3){let f=e/2-o*(u+.5),h=s*(u+1);i.seg(l,h,f,l,h+a,f,dt)}}function yv(i,t,e,n){let r=Math.max(6,Math.round(n/.18)),s=Math.floor(r/2),o=r-s,a=n/r,l=a*s,c=Math.min(.16,t*.12),u=(t-c)/2,f=Math.min(e*.34,Math.max(e*.22,u)),h=-e/2+f,d=e-f,g=d/s,x=d/o,m=-t/2,p=-c/2,_=c/2,y=t/2;for(let P=0;P<s;P++){let C=e/2-g*P,D=C-g,U=a*(P+1);i.box(m,p,0,U,D,C,M.white,M.whiteTop),i.seg(m,U,C,p,U,C,j)}i.box(-t/2,t/2,0,l,-e/2,h,M.white,M.whiteTop,j);for(let P=0;P<o;P++){let C=h+x*P,D=C+x,U=l+a*(P+1);i.box(_,y,0,U,C,D,M.white,M.whiteTop),i.seg(_,U,C,y,U,C,j)}let v=Math.min(.9,Math.max(.55,n*.32)),S=[m+.03,p-.03],T=[_+.03,y-.03];for(let P of S){i.seg(P,a+v,e/2-g/2,P,l+v,h,pt);for(let C=0;C<s;C+=3){let D=e/2-g*(C+.5),U=a*(C+1);i.seg(P,U,D,P,U+v,D,dt)}}let w=Math.max(1,o-3);for(let P of T){i.seg(P,l+v,h,P,l+a*w+v,h+x*(w-.5),pt);for(let C=0;C<w;C+=3){let D=h+x*(C+.5),U=l+a*(C+1);i.seg(P,U,D,P,U+v,D,dt)}}let b=S[0],E=S[1],I=T[0],R=T[1],L=-e/2+.03;i.seg(E,l+v,h,I,l+v,h,pt),i.seg(b,l+v,h,b,l+v,L,pt),i.seg(b,l+v,L,R,l+v,L,pt),i.seg(R,l+v,L,R,l+v,h,pt);for(let[P,C]of[[E,h],[I,h],[b,h],[b,L],[R,L],[R,h]])i.seg(P,l,C,P,l+v,C,dt)}function Mv(i,t,e,n){tr(i,t,e,.12,.03,.04,M.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,M.wood,M.woodTop,j),qs(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Sv(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,M.wood,M.woodTop,j),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,M.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,dt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,pt)}}function wv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,M.wood,M.woodTop,j),qs(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,M.body,M.bodyTop,j),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,M.wood,M.woodTop,j);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,M.metal,M.metal)}}function Dd(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,M.wood,M.woodTop,j),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,M.wood,M.woodTop,j),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,M.cushion,M.cushion,dt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,M.wood,M.woodTop,j),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,M.wood,M.woodTop,j),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,M.cushion,M.cushion,dt))}function Tv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,M.metal,M.metal,12),i.cyl(0,0,.025,.02,n-.05,M.metal,M.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,M.metal,M.metal,12,dt),i.cyl(0,0,r,n-.05,n,M.cushion,M.fabricTop,14,j)}function Ev(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,M.metal),i.box(-.03,.03,.04,.08,-r,r,M.metal),i.cyl(0,0,.06,.02,.1,M.dark,M.dark,8),i.cyl(0,0,.025,.1,.44,M.metal,M.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,M.fabric,M.cushion,j),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,M.fabric,M.fabricTop,j),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,M.metal)}function Av(i,t,e,n){tr(i,t,e,.08,.04,.05,M.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,M.fabric,M.cushion,j)}function Rv(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,M.body,M.bodyTop,j),qs(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function Cv(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,M.body,M.bodyTop,j),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,M.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,M.dark,M.dark,pt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,pt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,pt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,pt)}function Iv(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,M.body,M.bodyTop,j),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,M.dark),qs(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,M.whiteTop,M.whiteTop,j)}function Pv(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,M.body,M.bodyTop,j),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,M.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,pt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,M.whiteTop,M.whiteTop,j)}function Ud(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,M.white,M.whiteTop,j);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,dt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,pt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,f=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(f)*a,o+Math.sin(f)*a,s,pt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,s,dt)}}function Lv(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),M.wood,M.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,M.wood,M.woodTop,j),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,M.white,M.whiteTop,dt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,M.whiteTop,M.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,M.wood,M.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,j);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,dt)}function Fv(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,M.metal,M.metal,12),i.cyl(0,0,.05,.03,n-.04,M.wood,M.wood,8),i.cyl(0,0,r,n-.04,n,M.wood,M.woodTop,20,j)}function Dv(i,t,e,n){tr(i,t,e,n-.03,.04,.03,M.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,M.wood,M.woodTop,j),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,M.body,M.bodyTop,dt)}function Uv(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,M.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,M.dark,M.dark,pt)}function Nv(i,t,e,n){let r=_u;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,M.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,M.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,M.white,M.whiteTop,j);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,dt)}}function Ov(i,t,e,n){let r=vu,s=e/2;i.box(-t*.34,-t*.27,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,M.metal),i.box(t*.27,t*.34,r+n*.2,r+n*.75,-e/2-.015,-e/2+.025,M.metal),i.box(-t/2,t/2,r,r+n,-e/2,s,M.white,M.whiteTop,j),i.seg(-t*.42,r+n*.82,s+.003,t*.42,r+n*.82,s+.003,dt);let o=r+n*.08,a=r+n*.27;i.box(-t*.43,t*.43,o,a,s-.018,s+.006,M.dark,M.dark,dt),i.seg(-t*.42,o+n*.04,s+.009,t*.42,a-n*.025,s+.009,pt);for(let l=1;l<8;l++){let c=-t*.4+t*.8*(l/8);i.seg(c,o+n*.025,s+.011,c+t*.018,a-n*.025,s+.011,dt)}i.seg(t*.37,r+n*.67,s+.006,t*.4,r+n*.67,s+.006,pt)}function Bv(i,t,e,n){let r=Math.min(.045,n*.12),s=Math.min(t*.42,n*.48),o=r+n*.13,a=o+s;for(let d of[-t*.32,t*.32])i.box(d-t*.055,d+t*.055,0,r,-e*.34,e*.3,M.dark);i.box(-t*.43,t*.43,r,r+n*.06,-e*.4,e*.36,M.metal,M.metal,j),i.lyingCyl("z",0,-e*.13,o,a,e*.46,s,M.body,M.bodyTop,14,j),i.lyingCyl("z",0,-e*.39,o+s*.08,a-s*.08,e*.1,s*.84,M.dark,M.metal,12,dt);for(let d=-2;d<=2;d++){let g=-e*.23+d*e*.055;i.box(-s*.54,s*.54,o+s*.43,o+s*.57,g-e*.012,g+e*.012,M.metal,M.metal)}let l=Math.min(t*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,e*.17,c,c+l,e*.22,l,M.accent,M.bodyTop,16,j),i.lyingCyl("z",0,e*.39,c+l*.34,c+l*.66,e*.22,l*.32,M.metal,M.dark,12,pt);let u=t*.16,f=e*.13,h=Math.min(t,e)*.075;i.cyl(u,f,h*1.35,c+l*.72,c+l*.82,M.accent,M.accent,12,j),i.cyl(u,f,h,c+l*.82,n,M.metal,M.metal,12,pt),i.box(-t*.11,t*.11,c+l*.58,c+l*.72,e*.285,e*.3,M.dark,M.dark,pt)}function zv(i,t,e,n){let r=n*.68,s=Math.min(.09,t*.08);for(let o of[-t/2+s,t/2-s])for(let a of[-e/2+s,e/2-s])i.loft([o-s*.36,o+s*.36,a-s*.36,a+s*.36],[o-s/2,o+s/2,a-s/2,a+s/2],0,r-.03,M.wood,M.woodTop);i.box(-t/2,t/2,r-.08,r,-e/2,e/2,M.wood,M.woodTop,j),i.box(-t*.43,t*.43,n*.18,r-.1,e/2-.065,e/2,M.wood,M.woodTop,j);for(let o of[-t*.28,0,t*.28])i.seg(o,n*.23,e/2+.004,o,r-.16,e/2+.004,dt);i.seg(-t*.12,n*.4,e/2+.006,0,n*.52,e/2+.006,pt),i.seg(0,n*.52,e/2+.006,t*.12,n*.4,e/2+.006,pt),i.seg(t*.12,n*.4,e/2+.006,0,n*.28,e/2+.006,pt),i.seg(0,n*.28,e/2+.006,-t*.12,n*.4,e/2+.006,pt),i.cyl(0,e*.06,Math.min(t,e)*.09,r,r+n*.075,M.accent,M.woodTop,14,pt);for(let o of[-t*.035,0,t*.035])i.box(o-.006,o+.006,r+n*.06,r+n*.2,e*.05,e*.065,M.accent);for(let o of[-t*.28,t*.28])i.cyl(o,e*.02,Math.min(t,e)*.035,r,r+n*.035,M.metal,M.metal,10),i.cyl(o,e*.02,Math.min(t,e)*.017,r+n*.035,r+n*.15,M.metal,M.metal,8);i.box(-t*.18,t*.18,r+n*.04,n*.85,-e*.33,-e*.27,M.wood,M.woodTop,pt),i.box(-t*.46,t*.46,n*.875,n*.92,-e*.42,e*.36,M.wood,M.woodTop,j);for(let o of[-t*.4,t*.4])i.box(o-s/2,o+s/2,r,n*.92,-e*.36,-e*.26,M.wood,M.woodTop,j);i.loft([-t/2,t/2,-e/2,e*.42],[-t*.42,t*.42,-e*.42,e*.31],n*.92,n,M.wood,M.woodTop,j)}function kv(i,t,e,n){let r=n*.18;i.box(-t/2,t/2,r,r+n*.14,-e/2,e/2,M.wood,M.woodTop,j),i.box(-t*.43,t*.43,r+n*.14,n*.86,-e/2,-e/2+Math.min(.05,e*.18),M.wood,M.woodTop,j);for(let s of[-t*.36,t*.36])i.box(s-.025,s+.025,0,r,-e/2,-e*.18,M.wood,M.woodTop,j),i.seg(s,n*.02,-e*.18,s,r,e*.34,j);i.loft([-t/2,t/2,-e/2,e/2],[-t*.42,t*.42,-e*.42,e*.36],n*.86,n,M.wood,M.woodTop,j),i.cyl(0,e*.08,Math.min(t,e)*.09,r+n*.14,r+n*.28,M.accent,M.woodTop,12,pt);for(let s of[-t*.03,0,t*.03])i.box(s-.005,s+.005,r+n*.25,r+n*.5,e*.075,e*.09,M.accent)}function Vv(i,t,e,n){i.box(-t*.43,t*.43,0,n*.06,-e*.34,e*.34,M.dark),ti(i,t,e,n-.025,Math.max(2,Math.round(t/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-t/2+.03,r,e/2+.003,t/2-.03,r,e/2+.003,dt);for(let r of[-t*.25,t*.25])for(let s=-1;s<=1;s++)i.seg(r-t*.07,n*(.32+s*.018),e/2+.006,r+t*.07,n*(.32+s*.018),e/2+.006,dt);i.box(-t/2,t/2,n-.025,n,-e/2,e/2,M.woodTop,M.woodTop,pt)}function Gv(i,t,e,n){let r=Math.min(t*.58,e*.22,n*.42),s=t*.66,o=e*.34,a=-e*.34;for(let l of[a,o])i.lyingCyl("x",0,l,0,r,s,r,M.dark,M.metal,14,j),i.lyingCyl("x",0,l,r*.16,r*.84,s+.012,r*.46,M.metal,M.metal,12,dt);i.loft([-t*.3,t*.3,a,e*.12],[-t*.2,t*.2,-e*.18,e*.06],r*.45,n*.58,M.body,M.bodyTop,j),i.box(-t*.3,t*.3,r*.37,r*.44,-e*.08,e*.22,M.dark,M.metal,dt),i.lyingCyl("z",t*.24,a-e*.04,r*.2,r*.47,e*.4,r*.25,M.metal,M.dark,10,dt),i.pad(-t*.3,t*.3,n*.52,n*.62,-e*.25,e*.05,M.dark,M.fabricTop,.025,j),i.seg(-t*.18,n*.48,e*.02,-t*.08,n*.86,o,j),i.seg(t*.18,n*.48,e*.02,t*.08,n*.86,o,j),i.seg(-t*.19,r*.63,a,-t*.21,n*.54,-e*.12,dt),i.seg(t*.19,r*.63,a,t*.21,n*.54,-e*.12,dt),i.seg(-t*.36,n*.9,o,t*.36,n*.9,o,pt),i.box(-t*.23,t*.23,n*.72,n*.98,o-e*.07,o+e*.07,M.body,M.bodyTop,j),i.cyl(0,o+e*.075,Math.min(t,e)*.07,n*.82,n*.94,M.white,M.accent,12,pt);for(let l of[-1,1])i.seg(l*t*.22,n*.9,o,l*t*.39,n,o-e*.04,j),i.cyl(l*t*.39,o-e*.04,t*.045,n*.97,n,M.glass,M.metal,10,pt);i.seg(-t*.31,n*.66,-e*.31,t*.31,n*.66,-e*.31,j)}function Hv(i,t,e,n){let r=n*.18;i.cyl(0,0,Math.min(t,e)*.115,r,n*.62,M.body,M.bodyTop,16,j),i.cyl(0,0,Math.min(t,e)*.025,n*.7,n,M.metal,M.metal,8)}function Wv(i,t,e,n){i.loft([-t*.4,t*.4,-e*.33,e*.33],[-t*.34,t*.34,-e*.28,e*.28],0,n*.045,M.body,M.metal,j),i.cyl(0,0,Math.min(t,e)*.055,n*.04,n*.62,M.metal,M.metal,10),i.box(-t*.13,t*.13,n*.06,n*.14,-e*.2,e*.2,M.body,M.bodyTop,dt);for(let a of[-t*.07,0,t*.07])i.cyl(a,e*.12,t*.018,n*.14,n*.155,M.accent,M.accent,8,pt);let r=n*.78,s=Math.min(t,n*.42)*.46,o=e*.075;i.box(-t*.085,t*.085,n*.58,r-s*.18,-e*.1,e*.015,M.body,M.bodyTop,j),i.lyingCyl("z",0,-e*.11,r-s*.3,r+s*.3,e*.24,s*.6,M.body,M.bodyTop,16,j);for(let a of[-o,o]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*s*.18,r+Math.sin(c)*s*.18,a,Math.cos(c)*s,r+Math.sin(c)*s,a,dt)}Xs(i,0,r,s,a,32),Xs(i,0,r,s*.86,a,32),Xs(i,0,r,s*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*s,c=r+Math.sin(a)*s;i.seg(l,c,-o,l,c,o,j)}}function gl(i,t,e,n,r,s){if(e==="fan_ceiling"){let d=new Ri(i,t,(x,m)=>[x,m]),g=Math.min(n,r)*.13;for(let x of[0,120,240])d.rotated(0,0,x).loft([n*.08,n*.48,-g*.52,g*.52],[n*.12,n*.46,-g*.32,g*.32],0,s*.07,M.wood,M.woodTop,j);d.cyl(0,0,Math.min(n,r)*.14,-s*.035,s*.08,M.body,M.bodyTop,18,pt);return}let o=Math.min(n,s*.42)*.46,a=-Math.max(.006,r*.012),l=-a,c=new rt(M.bodyTop),u=new rt(M.body),f=(d,g)=>[Math.cos(g)*d,Math.sin(g)*d];for(let d=0;d<3;d++){let g=d/3*Math.PI*2,x=[f(o*.14,g-.12),f(o*.46,g-.34),f(o*.84,g-.16),f(o*.72,g+.22),f(o*.24,g+.34)],m=(p,_)=>[p[0],p[1],_];for(let p=1;p<x.length-1;p++)i.tri(m(x[0],l),m(x[p],l),m(x[p+1],l),c),i.tri(m(x[0],a),m(x[p+1],a),m(x[p],a),u);for(let p=0;p<x.length;p++){let _=(p+1)%x.length;i.tri(m(x[p],a),m(x[_],l),m(x[_],a),u),i.tri(m(x[p],a),m(x[p],l),m(x[_],l),u),t.seg(m(x[p],l),m(x[_],l),j,jt)}}new Ri(i,t,(d,g)=>[d,g]).lyingCyl("z",0,0,-o*.14,o*.14,r*.1,o*.28,M.body,M.bodyTop,14,pt)}function Xv(i,t,e,n){let r=Math.min(e*.88,n*.92),s=(n-r)/2;i.lyingCyl("x",0,0,s,s+r,t*.9,r,M.white,M.whiteTop,22,j);for(let o of[-t*.46,t*.46])i.lyingCyl("x",o,0,s+r*.04,s+r*.96,t*.035,r*.92,M.white,M.whiteTop,18,dt);for(let o of[-t*.28,t*.28])i.box(o-.025,o+.025,0,s+r*.25,-e*.42,-e*.28,M.metal,M.metal);for(let[o,a]of[[-t*.2,M.accent],[t*.2,M.fabricTop]])i.cyl(o,e*.05,Math.min(t,e)*.025,0,s+r*.18,a,a,10,dt),i.cyl(o,e*.05,Math.min(t,e)*.04,s+r*.14,s+r*.2,M.metal,M.metal,10);i.box(t*.18,t*.4,s+r*.38,s+r*.68,e*.43,e*.48,M.body,M.glass,pt),i.seg(t*.24,s+r*.53,e*.485,t*.35,s+r*.53,e*.485,pt)}function qv(i,t,e,n){let r=Math.min(.035,t*.025),s=t/2-r;for(let o of[-1,1]){i.box(o*s-r,o*s+r,0,n,-e/2,-e/2+r*2,M.metal,M.metal,j),i.box(o*s-r,o*s+r,0,n,e/2-r*2,e/2,M.metal,M.metal,j);for(let a of[-e/2+r,e/2-r])i.box(o*s-r*2.2,o*s+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,M.dark,M.dark)}for(let o=0;o<7;o++){let a=-e/2+r+(e-2*r)*o/6;i.box(-t/2+r,t/2-r,n-r*2,n,a-r/2,a+r/2,M.metal,M.metal,dt)}i.seg(-t/2,.05,-e/2,t/2,n-.05,-e/2,dt),i.seg(t/2,.05,-e/2,-t/2,n-.05,-e/2,dt),i.seg(-t/2,.05,e/2,t/2,n-.05,e/2,dt),i.seg(t/2,.05,e/2,-t/2,n-.05,e/2,dt)}function Yv(i,t,e,n){let r=Math.min(.045,t*.04);for(let o of[-t/2+r,t/2-r])i.box(o-r,o+r,0,n*.64,-e/2+r,e/2-r,M.wood,M.woodTop,j);for(let o of[n*.18,n*.4])i.box(-t/2+r,t/2-r,o-r/2,o+r/2,-e/2+r,e/2-r,M.wood,M.woodTop,dt);let s=Math.max(2,Math.round(t/.35));for(let o=1;o<s;o++)i.seg(-t/2+t*o/s,n*.08,e/2+.003,-t/2+t*o/s,n*.58,e/2+.003,dt);i.pad(-t/2,t/2,n*.62,n,-e/2,e/2,M.cushion,M.fabricTop,.025,j)}function $v(i,t,e,n){let r=Math.min(.05,t*.035);i.box(-t/2,t/2,0,r,-e/2,e/2,M.wood,M.woodTop,j),i.box(-t/2,t/2,n-r,n,-e/2,e/2,M.wood,M.woodTop,j);let s=Math.max(5,Math.round(t/.22));for(let o=0;o<s;o++){let a=-t/2+t*(o+.5)/s;i.box(a-r/2,a+r/2,r,n-r,-e/2,e/2,o%2?M.wood:M.body,M.woodTop,dt)}}function Zv(i,t,e,n){i.box(-t*.16,t*.16,n*.42,n,-e/2,-e*.18,M.metal,M.metal,j),i.loft([-t/2,t/2,-e/2,e/2],[-t*.18,t*.18,-e/2,-e*.1],0,n*.48,M.metal,M.whiteTop,j),i.box(-t*.4,t*.4,0,n*.06,e*.18,e/2,M.dark,M.dark,pt)}function Jv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,M.body,M.bodyTop,j),i.box(-t*.4,t*.18,n*.17,n*.82,e/2,e/2+.006,M.dark,M.glass,pt),i.cyl(t*.34,e/2+.008,Math.min(t,n)*.055,n*.58,n*.69,M.accent,M.accent,10,pt),i.seg(t*.28,n*.34,e/2+.009,t*.4,n*.34,e/2+.009,dt)}function Kv(i,t,e,n){let r=n*.8,s=e/2;i.box(-t*.46,t*.46,.025,r,-e/2,s,M.white,M.whiteTop,j),i.box(-t*.48,t*.48,0,.035,-e*.44,e*.44,M.dark,M.dark),i.box(-t*.42,t*.42,.055,r-.035,s,s+.012,M.white,M.whiteTop,j),i.seg(-t*.4,r*.28,s+.014,t*.4,r*.28,s+.014,dt),i.seg(-t*.28,r*.58,s+.015,t*.28,r*.58,s+.015,pt),i.seg(-t*.2,r*.62,s+.015,t*.2,r*.62,s+.015,dt),i.box(-t/2,t/2,r-.025,r,-e/2,e/2,M.white,M.whiteTop,j);let o=Math.min(.012,t*.03),a=t*.1,l=-e*.16,c=e*.08,u=6718637;i.cyl(a,l,o*1.55,r,r+o*1.8,u,u,12,j),i.cyl(a,c,t*.16,r,r+.01,M.whiteTop,M.whiteTop,18,dt),i.seg(a-t*.1,r+.012,c,a+t*.1,r+.012,c,dt),i.seg(a,r+.012,c-e*.11,a,r+.012,c+e*.11,dt);let f=n*.925,h=n*.055,d=(l+c)/2,g=(c-l)/2,x=[[r+o,l],[f,l]];for(let m=1;m<=8;m++){let p=Math.PI-Math.PI*m/8;x.push([f+Math.sin(p)*h,d+Math.cos(p)*g])}x.push([n*.89,c]),i.tubeYZ(a,x,o,u,10),i.cyl(a,c,o*1.25,n*.89-o,n*.905,M.dark,u,10,dt),i.lyingCyl("x",a+t*.055,l,r+o*1.6,r+o*2.5,t*.15,o*.9,M.dark,u,8)}function Qv(i,t,e,n){i.pad(-t/2,t/2,0,n,-e/2,e/2,M.white,M.whiteTop,Math.min(.04,t*.1),j);let r=e/2+.006;i.cyl(0,e/2,t*.095,n*.69,n*.705,M.dark,M.dark,18,pt);for(let s=0;s<7;s++){let o=n*(.16+s*.055);i.seg(-t*.34,o,r,t*.34,o,r,dt)}for(let s=-3;s<=3;s++)i.seg(s*t*.085,n+.003,-e*.27,s*t*.085,n+.003,e*.22,dt)}function jv(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r,n*.06,n*.9,M.dark,M.fabricTop,18,j),i.cyl(0,0,r*.94,n*.9,n,M.dark,M.dark,18,pt),i.cyl(0,0,r*.72,n,n+.006,M.dark,M.dark,18,dt);for(let s of[-t*.12,t*.12])i.cyl(s,0,t*.014,n+.007,n+.01,M.white,M.white,8)}function ty(i,t,e,n){i.box(-t*.28,t*.28,1.85,1.85+n*.7,-e/2,-e/2+e*.12,M.white,M.whiteTop,j),i.box(-t*.08,t*.08,1.85+n*.3,1.85+n*.45,-e/2+e*.1,0,M.metal,M.metal,dt),i.lyingCyl("z",0,e*.16,1.85+n*.17,1.85+n*.78,e*.58,n*.58,M.white,M.whiteTop,14,j),i.lyingCyl("z",0,e*.47,1.85+n*.28,1.85+n*.67,e*.08,n*.38,M.dark,M.dark,16,pt),i.lyingCyl("z",0,e*.515,1.85+n*.38,1.85+n*.57,e*.025,n*.18,M.accent,M.dark,14)}function ey(i,t,e,n){let s=e/2;i.pad(-t/2,t/2,.95,.95+n,-e/2,s,M.dark,M.metal,Math.min(.018,t*.12),j);for(let o=0;o<3;o++)for(let a=0;a<3;a++){let l=(a-1)*t*.22,c=.95+n*(.7-o*.105);i.seg(l-t*.025,c,s+.005,l+t*.025,c,s+.005,pt)}i.cyl(0,s,t*.12,.95+n*.22,.95+n*.235,M.accent,M.dark,14,pt),i.lyingCyl("x",t*.22,s+e*.12,.95+n*.31,.95+n*.4,t*.75,n*.085,M.metal,M.metal,10,j)}function ny(i,t,e,n){let r=n*.96;i.lyingCyl("x",0,-e*.18,r,n,t,e*.16,M.metal,M.metal,10,j),i.box(-t*.06,t*.06,r-n*.055,r+n*.015,-e*.28,e*.02,M.dark,M.dark,pt);let s=t*.12,o=6;for(let a of[-1,1]){let l=a<0?-t/2:s,u=((a<0?-s:t/2)-l)/o;for(let f=0;f<o;f++){let h=l+f*u,d=f%2?e*.12:-e*.04;i.box(h,h+u*.82,n*.04,r,d-e*.18,d+e*.18,M.fabric,M.fabricTop,f===0||f===o-1?j:null)}}}function iy(i,t,e,n){let r=Math.max(.42,Math.min(t,e)*.46);i.box(-t/2,t/2,0,n-.04,-e/2,-e/2+r,M.body,M.bodyTop,j),i.box(-t/2,-t/2+r,0,n-.04,-e/2+r,e/2,M.body,M.bodyTop,j),i.box(-t/2,t/2,n-.04,n,-e/2,-e/2+r,M.whiteTop,M.whiteTop,pt),i.box(-t/2,-t/2+r,n-.04,n,-e/2+r,e/2,M.whiteTop,M.whiteTop,pt),i.seg(-t/2+r,.08,-e/2+r,-t/2+r,n-.08,-e/2+r,dt)}function ry(i,t,e,n){let r=Math.min(.76,n*.52);i.box(-t/2,t/2,r-.06,r,-e/2,e/2,M.wood,M.woodTop,j);for(let s of[-t/2+.05,t/2-.05])i.box(s-.025,s+.025,0,r-.06,-e/2+.04,e/2-.04,M.wood);i.box(-t*.32,t*.32,r+.12,n,-e/2,-e/2+.025,M.glass,M.glass,pt),i.box(-t*.2,t*.2,r-.01,r+.09,-e*.1,e*.18,M.body,M.bodyTop,j)}function sy(i,t,e,n){let r=Math.min(.045,t*.06);i.box(-t/2,t/2,n*.24,n*.32,-e/2,e/2,M.wood,M.woodTop,j),i.pad(-t/2+r,t/2-r,n*.32,n*.42,-e/2+r,e/2-r,M.white,M.whiteTop,.025);for(let s of[-e/2,e/2]){for(let o=0;o<7;o++){let a=-t/2+r+(t-2*r)*o/6;i.box(a-r/2,a+r/2,n*.3,n,s-r/2,s+r/2,M.wood,M.woodTop,dt)}i.box(-t/2,t/2,n-r,n,s-r,s+r,M.wood,M.woodTop,j)}for(let s of[-t/2,t/2])i.box(s-r,s+r,0,n,-e/2,e/2,M.wood,M.woodTop,j)}function oy(i,t,e,n){let r=Math.min(.9,e*.53),s=Math.min(.9,t*.38),o=n*.52;i.pad(-t/2,t/2,.08,o,-e/2,-e/2+r,M.fabric,M.fabricTop,.04,j),i.pad(-t/2,-t/2+s,.08,o,-e/2+r,e/2,M.fabric,M.fabricTop,.04,j),i.box(-t/2,t/2,o,n,-e/2,-e/2+Math.min(.2,r*.25),M.fabric,M.fabricTop,j),i.box(-t/2,-t/2+Math.min(.2,s*.25),o,n,-e/2+r,e/2,M.fabric,M.fabricTop,j),i.seg(-t/2+s,o+.01,-e/2+r*.1,-t/2+s,o+.01,-e/2+r*.9,dt)}function ay(i,t,e,n){let r=n*.5;i.pad(-t/2,t/2,.08,r,-e/2+e*.12,e/2,M.fabric,M.fabricTop,.04,j),i.pad(-t/2+.05,t/2-.05,r,r+.1,-e/2+e*.3,e/2-.04,M.cushion,M.fabricTop,.03,dt),i.loft([-t/2,t/2,-e/2,-e/2+e*.22],[-t/2+.03,t/2-.03,-e/2,-e/2+e*.1],r,n,M.fabric,M.fabricTop,j),i.seg(0,r+.105,-e*.05,0,r+.105,e/2-.06,dt)}function ly(i,t,e,n){let r=Math.min(.025,Math.max(.01,e*.35));i.box(-t/2,t/2,0,.025,-r,r,M.metal,M.metal,pt);for(let s of[-t/2,0,t/2])i.box(s-r,s+r,0,n,-r,r,M.metal,M.metal,pt);i.seg(-t/2,n,0,t/2,n,0,pt),i.seg(t*.32,n*.42,r+.003,t*.32,n*.62,r+.003,j)}function cy(i,t,e,n){let r=Math.min(.07,t*.035);for(let a of[-t/2+r,t/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,M.metal,M.metal,j),i.box(a-e*.25,a+e*.25,0,r,-e*.36,e*.36,M.metal,M.metal,j);let s=-t/2+r,o=t/2-r;i.loft([s,-t*.14,-e*.34,e*.34],[s+.08,-t*.14,-e*.3,e*.3],n*.36,n*.42,M.fabric,M.fabricTop,dt),i.loft([-t*.14,t*.14,-e*.34,e*.34],[-t*.13,t*.13,-e*.3,e*.3],n*.25,n*.31,M.fabric,M.fabricTop,dt),i.loft([t*.14,o,-e*.34,e*.34],[t*.14,o-.08,-e*.3,e*.3],n*.36,n*.42,M.fabric,M.fabricTop,dt),i.seg(s,n*.8,0,-t*.14,n*.42,0,j),i.seg(t*.14,n*.42,0,o,n*.8,0,j)}function uy(i,t,e,n){let r=Math.min(t,e);i.cyl(0,0,r*.08,0,n-.07,M.metal,M.metal,12),i.cyl(0,0,r*.22,n-.07,n,M.body,M.bodyTop,16,j);for(let[s,o]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(s*t,o*e,r*.065,0,n*.52,M.metal,M.metal,10),i.cyl(s*t,o*e,r*.105,n*.52,n*.61,M.body,M.bodyTop,12,dt)}function hy(i,t,e,n){let r=Math.min(t,e)*.46;i.cyl(0,0,r*.84,0,n*.08,M.metal,M.metal,12,j),i.cyl(0,0,r,n*.08,n*.92,M.metal,M.whiteTop,20,j);for(let s of[n*.28,n*.5,n*.72])for(let o=0;o<24;o++){let a=o/24*Math.PI*2,l=(o+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,s,Math.sin(a)*r,Math.cos(l)*r,s,Math.sin(l)*r,dt)}i.cyl(0,0,r*.18,n*.92,n,M.dark,M.bodyTop,12,dt)}function Nd(i,t,e,n,r){let s=Math.min(.12,t*.05);for(let l of[-t/2+s/2,t/2-s/2])i.box(l-s/2,l+s/2,0,n,-e/2,e/2,M.body,M.bodyTop,j);let o=r?2:Math.max(3,Math.round(t/.4)),a=t-2*s;for(let l=0;l<o;l++){let c=-a/2+a*l/o+s*.25,u=-a/2+a*(l+1)/o-s*.25;i.box(c,u,n*.08,n*.92,-e*.18,e*.18,r?M.metal:M.wood,r?M.metal:M.woodTop,dt),r&&i.seg(l===0?u:c,n*.46,e*.2,l===0?u-.08:c+.08,n*.46,e*.2,pt)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-e/2,e/2,M.wood,M.woodTop,j)}function Xs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,pt)}}function fy(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,M.dark,M.body,j),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,pt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,M.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,M.white,M.whiteTop,j),Xs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,pt);for(let a of[-1,1])Xs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,M.white,M.whiteTop,j),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,M.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,pt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,dt)}function dy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,M.dark,M.body,j),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,M.dark,M.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,pt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,dt)}function py(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,M.dark,M.body,j);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,pt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,M.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,M.dark,M.body)}function my(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,M.white,M.whiteTop,j),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,M.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,M.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,pt)}function gy(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,M.white,M.whiteTop,j),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,pt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,M.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,M.dark,M.body,j),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,pt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,M.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,M.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,M.white,M.whiteTop,j);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,pt)}}var _u=.12,vu=1.9;function yu(i,t){let e=xy(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function xy(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=ed(i.type);if(s){let l=t?fn(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,f=Math.min(.02,(u-c)*.05);return{x0:c+f,x1:u-f,y0:l+s.y*r+f,y1:l+(s.y+s.h)*r-f,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?fn(t,i)-Ns(i):0,a=by(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function by(i,t,e,n,r){if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?fn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:_u+.02,y1:_u+n-.02,z:e/2+.004};if(i.type==="air_conditioner")return{x0:-t*.43,x1:t*.43,y0:vu+n*.08,y1:vu+n*.27,z:e/2+.008};if(i.type==="water_pump")return{x0:-t*.1,x1:t*.1,y0:n*.56,y1:n*.65,z:e*.3+.004};if(i.type==="water_heater"){let s=Math.min(e*.88,n*.92),o=(n-s)/2;return{x0:t*.18,x1:t*.4,y0:o+s*.38,y1:o+s*.68,z:e*.48+.006}}if(i.type==="range_hood")return{x0:-t*.4,x1:t*.4,y0:.005,y1:n*.06,z:e/2+.003};if(i.type==="microwave")return{x0:-t*.4,x1:t*.18,y0:n*.17,y1:n*.82,z:e/2+.008};if(i.type==="water_purifier")return{x0:-t*.28,x1:t*.28,y0:n*.8*.56,y1:n*.8*.64,z:e/2+.016};if(i.type==="air_purifier")return{x0:-t*.11,x1:t*.11,y0:n*.66,y1:n*.74,z:e/2+.008};if(i.type==="smart_speaker")return{x0:-t*.42,x1:t*.42,y0:n*.9,y1:n+.008,z:e*.05};if(i.type==="security_camera")return{x0:-t*.12,x1:t*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:e*.53};if(i.type==="smart_lock")return{x0:-t*.36,x1:t*.36,y0:.95+n*.43,y1:.95+n*.78,z:e/2+.006};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function _y(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new rt(1-r,1-r,1-r),a=new rt(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],f=d=>[d[0],l,d[1]],h=i.p.length;i.tri(f(c[0]),f(c[1]),f(c[2]),o),i.tri(f(c[0]),f(c[2]),f(c[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(f(c[d]),f(u[d]),f(u[g]),o,a,a),i.tri(f(c[d]),f(u[g]),f(c[g]),o,a,o)}Bd(t)&&ml(i,h)}function xl(i,t,e,n,r=0){vy(i,t,e,n,r)}function ml(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function vy(i,t,e,n,r){let s=De(n.type)?0:r-Ns(n);if(De(n.type)||Math.abs(s)<.001)return Od(i,t,e,n,r);let o=i.p.length,a=t.p.length,l=e.p.length;Od(i,t,r<.05?e:new oe,n,0);for(let c=o+1;c<i.p.length;c+=3)i.p[c]+=s;for(let c=a+1;c<t.p.length;c+=3)t.p[c]+=s;for(let c=l+1;c<e.p.length;c+=3)e.p[c]+=s}function Od(i,t,e,n,r){let s=n.rotation*re,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(g,x)=>[n.x+l*g*o-x*a,n.z+l*g*a+x*o],u=new Ri(i,t,c),f=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"altar":zv(u,f,h,d);break;case"altar_wall":kv(u,f,h,d);return;case"shoe_cabinet":Vv(u,f,h,d);break;case"motorbike":Gv(u,f,h,d);break;case"fan_ceiling":Hv(u,f,h,d);return;case"fan_floor":Wv(u,f,h,d);break;case"water_heater":Xv(u,f,h,d);return;case"drying_rack":qv(u,f,h,d);break;case"shoe_bench":Yv(u,f,h,d);break;case"room_divider":$v(u,f,h,d);break;case"range_hood":Zv(u,f,h,d);return;case"microwave":if(Jv(u,f,h,d),r>.05)return;break;case"water_purifier":Kv(u,f,h,d);break;case"air_purifier":Qv(u,f,h,d);break;case"smart_speaker":jv(u,f,h,d);break;case"security_camera":ty(u,f,h,d);return;case"smart_lock":ey(u,f,h,d);return;case"smart_curtain":ny(u,f,h,d);return;case"kitchen_corner":iy(u,f,h,d);break;case"vanity":ry(u,f,h,d);break;case"crib":sy(u,f,h,d);break;case"bed_single":case"bed_double":Ld(u,f,h,d);break;case"sofa_l":oy(u,f,h,d);break;case"sofa_bed":ay(u,f,h,d);break;case"shower_screen":ly(u,f,h,d);break;case"hammock":cy(u,f,h,d);break;case"stone_table_set":uy(u,f,h,d);break;case"planter_large":Fd(u,f,h,d);break;case"water_tank":hy(u,f,h,d);break;case"gate":Nd(u,f,h,d,!0);break;case"fence":Nd(u,f,h,d,!1);break;case"sofa":Pd(u,f,h,d,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":Pd(u,f,h,d,1);break;case"bed":Ld(u,f,h,d);break;case"chair":rv(u,f,h,d);break;case"table":sv(u,f,h,d);break;case"desk":ov(u,f,h,d);break;case"nightstand":ti(u,f,h,d,1,d*.72,!0),u.seg(-f/2,d*.5,h/2-.02,f/2,d*.5,h/2-.02,dt);break;case"wardrobe":ti(u,f,h,d,Math.max(2,Math.round(f/.5)),d*.5);break;case"shelf":av(u,f,h,d);break;case"kitchen":lv(u,f,h,d);break;case"fridge":cv(u,f,h,d);break;case"fridge_smart":uv(u,f,h,d);break;case"stove":fv(u,f,h,d);break;case"sink":dv(u,f,h,d);break;case"bathtub":pv(u,f,h,d);break;case"shower":mv(u,f,h,d);break;case"wc":gv(u,f,h,d);break;case"washbasin":xv(u,f,h,d);break;case"tv_board":bv(u,f,h,d);break;case"plant":Fd(u,f,h,d);break;case"rug":_v(u,f,h);return;case"stairs":vv(u,f,h,d);break;case"stairs_landing":yv(u,f,h,d);break;case"stairwell":return;case"sideboard":Mv(u,f,h,d);break;case"dresser":Sv(u,f,h,d);break;case"tall_cabinet":ti(u,f,h,d,1,d*.5);break;case"coat_rack":wv(u,f,h,d);break;case"bench":Dd(u,f,h,d,!1);break;case"corner_bench":Dd(u,f,h,d,!0);break;case"bar_stool":Tv(u,f,h,d);break;case"office_chair":Ev(u,f,h,d);break;case"stool":Av(u,f,h,d);break;case"kitchen_wall":Rv(u,f,h,d);return;case"kitchen_tall":Cv(u,f,h,d);break;case"island":Iv(u,f,h,d);break;case"worktop":u.box(-f/2,f/2,Math.max(0,d-.04),d,-h/2,h/2,M.whiteTop,M.whiteTop,j);return;case"dishwasher":Pv(u,f,h,d);break;case"washer":Ud(u,f,h,d,!1);break;case"dryer":Ud(u,f,h,d,!0);break;case"bunk_bed":Lv(u,f,h,d);break;case"table_round":Fv(u,f,h,d);break;case"coffee_table":Dv(u,f,h,d);break;case"tv_wall":Uv(u,f,h,d);return;case"parking":{let x=[[-f/2,-h/2],[f/2,-h/2],[f/2,h/2],[-f/2,h/2]];for(let m=0;m<4;m++)u.seg(x[m][0],.012,x[m][1],x[(m+1)%4][0],.012,x[(m+1)%4][1],dt);u.seg(-f*.15,.012,h/2-.45,0,.012,h/2-.2,j),u.seg(0,.012,h/2-.2,f*.15,.012,h/2-.45,j);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,d,-h/2,-h/2+h*.3,M.white,M.whiteTop,j),u.box(-f*.2,f*.2,d*.5,d*.62,-h/2+h*.3,-h/2+h*.31,M.accent);return;case"radiator":Nv(u,f,h,d);return;case"air_conditioner":Ov(u,f,h,d);return;case"water_pump":Bv(u,f,h,d);break;case"inverter":fy(u,f,h,d,n.variant??null);return;case"grid_point":dy(u,f,h,d);break;case"wallbox":py(u,f,h,d);return;case"meter":my(u,f,h,d);return;case"home_battery":if(gy(u,f,h,d,n.variant??null),n.variant==="wall")return;break;default:{let g=De(n.type);if(g){if(Mu(u,g,f,h,d,r,null),r>.05)return}else u.box(-f/2,f/2,0,d,-h/2,h/2,M.body,M.bodyTop,j)}}_y(e,c,f,h,n.type==="plant"?.35:.5)}function bu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=M;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Mu(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,f=u.glow&&o!==null,h=f?o:bu(u.color,!1)??M.body,d=f?o:bu(u.top,!1)??bu(u.color,!0)??Gt(h,1.25).getHex(),g=s+u.y*r,x=s+Math.min(r,(u.y+u.h)*r),m=u.edges==="glow"?Qi:u.edges==="faint"?dt:u.edges?j:null,p=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))p.lyingCyl(u.axis,u.x*e,u.z*n,g,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,h,d,14,m);else if(u.shape==="cyl")p.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,g,x,h,d,14,m);else if(u.shape==="loft"){let _=u.tx??u.x,y=u.tz??u.z,v=u.tw??u.w,S=u.td??u.d;p.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(_-v/2)*e,(_+v/2)*e,(y-S/2)*n,(y+S/2)*n],g,x,h,d,m)}else p.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,g,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,h,d,m)}}function Vd(i,t,e,n,r,s){let o=s*re,a=Math.cos(o),l=Math.sin(o),c=(g,x)=>[e+g*a-x*l,r+g*l+x*a],u=new Ri(i,new Ve,c),f=1713728,h=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,f),u.cyl(0,0,.012,n-.075,n-.06,M.accent,M.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,M.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Su(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*re,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(f,h)=>[e.x+c*f*a-h*l,e.z+c*f*l+h*a];Mu(new Ri(i,new Ve,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function bl(i,t,e,n,r){let s=e.rotation*re,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(u,f)=>[e.x+l*u*o-f*a,e.z+l*u*a+f*o];Mu(new Ri(i,new Ve,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var yy={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},canopy:{color:2503761,side:1581626,edge:3662079,edgeAlpha:.5},veranda:{color:14014952,side:6779274,edge:3662079,edgeAlpha:.58}};function Gd(i,t){return Zi(i)+(t.offset??0)+(Kn(t.type)?.01:kr[t.type])}function er(i){return Ki(i)>=0?i:[...i].reverse()}function My(i,t){let e=i[t];if(Kn(e.type)||e.type==="pool")return[];let n=[];for(let r=t+1;r<i.length;r++){let s=i[r];!s.cut||s.points.length<3||s.points.every(o=>ce(o,e.points))&&n.push(er(s.points))}return n}function Wr(i,t,e,n,r,s,o,a){let l=e[0]-t[0],c=e[1]-t[1],u=Math.hypot(l,c);if(u<1e-6)return;let f=-c/u*n*.5,h=l/u*n*.5;we(i,er([[t[0]+f,t[1]+h],[e[0]+f,e[1]+h],[e[0]-f,e[1]-h],[t[0]-f,t[1]-h]]),r,s,o,a,{aoFrom:r-1})}function Sy(i,t,e,n,r,s){let o=new rt(s),a=new rt(Gt(r,.72)),l=new rt(r);for(let[c,u,f]of Hr(t)){let h=t[c],d=t[u],g=t[f],x=[h[0],e(h[0],h[1]),h[1]],m=[d[0],e(d[0],d[1]),d[1]],p=[g[0],e(g[0],g[1]),g[1]],_=[x[0],x[1]-n,x[2]],y=[m[0],m[1]-n,m[2]],v=[p[0],p[1]-n,p[2]];i.tri(x,p,m,o,o,o,void 0,jt),i.tri(_,y,v,a,a,a,void 0,jt)}for(let c=0;c<t.length;c++){let u=t[c],f=t[(c+1)%t.length],h=[u[0],e(u[0],u[1]),u[1]],d=[f[0],e(f[0],f[1]),f[1]],g=[h[0],h[1]-n,h[2]],x=[d[0],d[1]-n,d[2]];i.tri(g,h,d,l,l,l,void 0,jt),i.tri(g,d,x,l,l,l,void 0,jt)}}function Hd(i,t,e){let n=Zi(e),r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=n+(s.offset??0),l=(m,p)=>a-ul(s,m,p),c=a-(s.type==="pool"?0:s.slope??0),u=Kn(s.type)&&s.height?s.height:kr[s.type],f={...yy[s.type],top:u},h=er(s.points),d=Gt(f.edge,f.edgeAlpha),g=s.open&&(s.type==="fence"||s.type==="pergola"||s.type==="canopy"||s.type==="veranda")?h.length-1:-1,x=m=>{if(s.outline!==!1)for(let p=0;p<h.length;p++){if(p===g)continue;let _=h[p],y=h[(p+1)%h.length];t.seg([_[0],m(_[0],_[1]),_[1]],[y[0],m(y[0],y[1]),y[1]],d,jt)}};switch(s.type){case"pool":{let m=new rt(f.color);for(let[_,y,v]of Hr(h)){let S=h[_],T=h[y],w=h[v];i.tri([S[0],a+f.top,S[1]],[w[0],a+f.top,w[1]],[T[0],a+f.top,T[1]],m,m,m,void 0,jt)}let p=new rt(f.side);for(let _=0;_<h.length;_++){let y=h[_],v=h[(_+1)%h.length];i.tri([v[0],a+f.top,v[1]],[v[0],a+.06,v[1]],[y[0],a+.06,y[1]],p,p,p,void 0,jt),i.tri([v[0],a+f.top,v[1]],[y[0],a+.06,y[1]],[y[0],a+f.top,y[1]],p,p,p,void 0,jt)}x(()=>a+.06),x(()=>a+f.top+.005);break}case"fence":{for(let m=0;m<h.length;m++){if(m===g)continue;let p=h[m],_=h[(m+1)%h.length],y=Math.hypot(_[0]-p[0],_[1]-p[1]),v=Math.max(1,Math.round(y/2)),S=g>=0&&m===g-1?v:v-1;for(let T=0;T<=S;T++){let w=T/v,b=p[0]+(_[0]-p[0])*w,E=p[1]+(_[1]-p[1])*w,I=l(b,E);we(i,er([[b-.04,E-.04],[b+.04,E-.04],[b+.04,E+.04],[b-.04,E+.04]]),I,I+f.top,f.side,f.color)}for(let T of[.35,.85])t.seg([p[0],l(p[0],p[1])+T*f.top,p[1]],[_[0],l(_[0],_[1])+T*f.top,_[1]],d,jt)}break}case"pergola":{let m=f.top;for(let[p,_]of h){let y=l(p,_);we(i,er([[p-.06,_-.06],[p+.06,_-.06],[p+.06,_+.06],[p-.06,_+.06]]),y,y+m,f.side,f.color)}for(let p=0;p<h.length;p++){if(p===g)continue;let _=h[p],y=h[(p+1)%h.length],v=l(_[0],_[1])+m;if(Wr(i,_,y,.12,v-.16,v,f.side,f.color),s.bracing){let S=l(_[0],_[1]),T=l(y[0],y[1]);t.seg([_[0],S+.25,_[1]],[y[0],T+m-.25,y[1]],d,jt),t.seg([y[0],T+.25,y[1]],[_[0],S+m-.25,_[1]],d,jt)}}if(ad(h)){let p=ld(h),_=p.x1-p.x0,y=p.z1-p.z0,v=_>=y,S=v?_:y,T=Math.max(1,Math.round(S/.6));for(let w=1;w<T;w++){let b=(v?p.x0:p.z0)+S*w/T,E=v?[b,p.z0+.06]:[p.x0+.06,b],I=v?[b,p.z1-.06]:[p.x1-.06,b],R=l(E[0],E[1])+m;Wr(i,E,I,.06,R-.04,R+.08,f.side,f.color)}}x((p,_)=>l(p,_)+m+.004);break}case"canopy":{let m=f.top,p=(_,y)=>a+m-ul(s,_,y);for(let[_,y]of h){let v=p(_,y)-.08;we(i,er([[_-.06,y-.06],[_+.06,y-.06],[_+.06,y+.06],[_-.06,y+.06]]),a,v,f.side,f.color)}for(let _=0;_<h.length;_++){if(_===g)continue;let y=h[_],v=h[(_+1)%h.length],S=(p(y[0],y[1])+p(v[0],v[1]))/2;Wr(i,y,v,.12,S-.18,S-.08,f.side,f.color)}Sy(i,h,p,.08,f.side,f.color),x((_,y)=>p(_,y)+.004);break}case"veranda":{let m=f.top,p=Math.min(1.1,m*.48),_=(w,b,E,I,R,L=f.side,P=f.color)=>we(i,er([[w-E,b-E],[w+E,b-E],[w+E,b+E],[w-E,b+E]]),I,R,L,P);for(let w=0;w<h.length;w++){if(w===g)continue;let b=h[w],E=h[(w+1)%h.length],I=Math.hypot(E[0]-b[0],E[1]-b[1]),R=Math.max(1,Math.ceil(I/.22)),L=(l(b[0],b[1])+l(E[0],E[1]))/2;Wr(i,b,E,.07,L+.3,L+.38,f.side,f.color),Wr(i,b,E,.09,L+p-.09,L+p,f.side,f.color);for(let P=0;P<=R;P++){let C=P/R,D=b[0]+(E[0]-b[0])*C,U=b[1]+(E[1]-b[1])*C,O=l(D,U);_(D,U,.018,O+.08,O+p-.07)}}let y=0;if(g>=0){let w=h[g],b=h[(g+1)%h.length],E=(w[0]+b[0])/2,I=(w[1]+b[1])/2,R=-1;for(let L=0;L<h.length;L++){if(L===g)continue;let P=h[L],C=h[(L+1)%h.length],D=(P[0]+C[0])/2-E,U=(P[1]+C[1])/2-I,O=D*D+U*U;O>R&&([y,R]=[L,O])}}else{let w=-1;for(let b=0;b<h.length;b++){let E=h[b],I=h[(b+1)%h.length],R=Math.hypot(I[0]-E[0],I[1]-E[1]);R>w&&([y,w]=[b,R])}}let v=h[y],S=h[(y+1)%h.length];for(let[w,b]of[v,S]){let E=l(w,b);_(w,b,.22,E,E+.28),_(w,b,.16,E+.2,E+m-.2),_(w,b,.22,E+m-.28,E+m),t.seg([w,E+.28,b],[w,E+m-.28,b],d,jt)}let T=(l(v[0],v[1])+l(S[0],S[1]))/2+m;Wr(i,v,S,.42,T-.28,T,f.side,f.color),x((w,b)=>l(w,b)+p+.004);break}default:{let m=(_,y)=>l(_,y)+f.top,p=My(r,o);if(we(i,h,c,s.slope?m:a+f.top,f.side,f.color,{aoFrom:c,holes:p}),x((_,y)=>m(_,y)+.004),s.type==="hedge"&&x((_,y)=>l(_,y)+.004),s.outline!==!1)for(let _ of p)for(let y=0;y<_.length;y++){let v=_[y],S=_[(y+1)%_.length];t.seg([v[0],m(v[0],v[1])+.004,v[1]],[S[0],m(S[0],S[1])+.004,S[1]],d,jt)}}}})}var vl=Math.PI/180,wy=1.13,Ty=1.72,wu=.025,nr=.07,Wd=.25;function Xd(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=Vs(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,u=-o/l,f=Math.min(n.height,s.height??n.height),h=(d,g,x,m)=>e.push({key:d,section:null,side:"top",flat:!1,o:g,eu:x,es:[0,1,0],n:m,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[m[0],m[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&h(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var Tu="ground";function Eu(i){return[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??i.floors[0]??null}function qd(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Eu(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:ll(s,o,a)):t.base??0;return{key:Tu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function Ey(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Xr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>Ay(_,fl(i,_,_.overhang??t.overhang)));let e=Ey(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(y=>y[0])),r=e.rooms.flatMap(_=>_.points.map(y=>y[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=e.elevation+e.height;if(t.type==="flat")return[Yd("main",null,o,l,a,c,u+Wd)];let f=a-o>=c-l,h=t.ridge==="short"?!f:f,d=(h?c-l:a-o)/2,g=d*Math.tan(t.pitch*vl),x=(_,y,v)=>h?[_,u+v,(l+c)/2+y]:[(o+a)/2+y,u+v,_],[m,p]=h?[o,a]:[l,c];return[-1,1].map(_=>_l(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(m,_*d,0),x(p,_*d,0),x(m,0,g),t.pitch,()=>[0,p-m]))}function Ay(i,t){let e=kn(i),n=Cn(i),r=(x,m,p)=>{let[_,y]=e.at(x,m);return[_,p,y]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),m=e.at(l,e.w+o);return[Yd(i.id,i.id,Math.min(x[0],m[0]),Math.min(x[1],m[1]),Math.max(x[0],m[0]),Math.max(x[1],m[1]),i.eave_a+Wd)]}if(i.shape==="pent")return[_l(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",f=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=u?e.u0+f-a:0,d=u?l-(e.u1-f):0,g=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));g.push(_l(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,m=>[h*(m/x),c-d*(m/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(_l(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,m=>[d*(m/x),c-h*(m/x)]))}if(u){let x=n.y(-s),m=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,m),r(a,-s,x),r(e.u0+f,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,m),r(e.u1-f,n.vr,n.rh)]];for(let[_,y,v,S,T]of p){let w=Ry(_,i.id,y,v,S,T);w&&g.push(w)}}return g}function Ry(i,t,e,n,r,s){let o=Ys(ir(r,n));if(o<.3)return null;let a=Ci(ir(r,n)),l=ir(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],f=Ys(u);if(f<.3)return null;let h=Ci(u),d=Ci(Jd(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Ci([-h[0],0,-h[2]]),x=Math.atan2(h[1],Math.hypot(h[0],h[2]))/vl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:f,pitch:x,span:p=>{let _=Math.min(1,Math.max(0,p/f));return[c*_,o-(o-c)*_]},facing:[g[0],g[2]]}}function _l(i,t,e,n,r,s,o,a){let l=Ci(ir(r,n)),c=Ci(ir(s,n)),u=Ci(Jd(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=Ci([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:Ys(ir(r,n)),ls:Ys(ir(s,n)),pitch:o,span:a,facing:[f[0],f[2]]}}function Yd(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function $d(i){let t=i.module_w||wy,e=i.module_h||Ty;return i.portrait===!1?[e,t]:[t,e]}function Cy(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Zd(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*vl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*vl:0}function Iy(i,t){let[,e]=$d(t),n=Zd(i,t);return i.wall?e*Math.cos(n)+wu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+wu}function $s(i,t,e=!1){let[n,r]=$d(t),s=[],o=Zd(i,t),a=r*Math.cos(o),l=Iy(i,t),c=Cy(t),u=Math.max(1,...c),f=new Set(t.skip??[]),h=(g,x,m)=>[i.o[0]+i.eu[0]*g+i.es[0]*x+i.n[0]*m,i.o[1]+i.eu[1]*g+i.es[1]*x+i.n[1]*m,i.o[2]+i.eu[2]*g+i.es[2]*x+i.n[2]*m],d=(g,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[m,p]=i.span(x);return g>=m-1e-6&&g<=p+1e-6};return c.forEach((g,x)=>{let m=t.align==="right"?u-g:t.align==="center"?(u-g)/2:0;for(let p=0;p<g;p++){let _=`${x}:${p}`,y=f.has(_);if(y&&!e)continue;let v=t.u+(p+m)*(n+wu),S=t.v+x*l,T=v+n,w=S+(i.flat||i.wall?a:r);if(![[v,S],[T,S],[T,w],[v,w]].every(([P,C])=>d(P,C)))continue;if(i.wall&&o>.001){let P=nr+r*Math.sin(o),[C,D]=t.flip?[P,nr]:[nr,P],U=[h(v,S,C),h(T,S,C),h(T,w,D),h(v,w,D)],O=t.flip?S:w,V=[v+.05,T-.05].map(B=>[h(B,O,0),h(B,O,P)]);s.push({corners:U,posts:V,cell:_,skipped:y});continue}if(!i.flat){s.push({corners:[h(v,S,nr),h(T,S,nr),h(T,w,nr),h(v,w,nr)],posts:[],cell:_,skipped:y});continue}let b=.15,E=b+r*Math.sin(o),[I,R]=t.flip?[w,S]:[S,w],L=[h(v,I,b),h(T,I,b),h(T,R,E),h(v,R,E)];s.push({corners:L,posts:[v+.05,T-.05].flatMap(P=>[[h(P,I,0),h(P,I,b)],[h(P,R,0),h(P,R,E)]]),cell:_,skipped:y})}}),s}function ir(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Ys(i){return Math.hypot(i[0],i[1],i[2])}function Ci(i){let t=Ys(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Jd(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var Py=.78,Ly=1.18;function Fy(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Py,module_h:i.h||Ly}}function Au(i,t){let e=$s(i,Fy(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var Zs=1712952,Js=2239816,jd=1318193,rr=Gt(3662079,.9),qr=Gt(5995775,.45),Oe=.14,Dy=9427199,Uy=13226982,Ny=14936565,Oy={black:{glass:new rt(329483),edge:Gt(9082544,.32),cells:Gt(2766160,.22)},blue:{glass:new rt(1386842),edge:Gt(10467583,.55),cells:Gt(4025599,.35)}},By=Gt(13226982,.5),zy=Gt(13226982,.85),ky=Gt(16757575,.95),Kd=new rt(2845583),Qd=new rt(3818072);function Vy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function tp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:Wy(i),r=e?.type==="custom"?Xy(i,e.sections??[],e.overhang):n?[n]:[];return Hy(i,r),Gy(i,r,t),r}function Gy(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Xr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Au(o,s):null;if(!o||!a)continue;let l=o.section?t.find(R=>R.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=R=>[R[0],R[1]-c,R[2]],[f,h,d,g]=a.map(u),x=e.get(s.id)??{open:0,tilt:0,cover:0},m=(R,L)=>[R[0]+o.n[0]*L,R[1]+o.n[1]*L,R[2]+o.n[2]*L],p=(R,L,P)=>[R[0]+(L[0]-R[0])*P,R[1]+(L[1]-R[1])*P,R[2]+(L[2]-R[2])*P],_=x.open>.02||x.tilt>.02?ky:zy,y=[f,h,d,g].map(R=>m(R,.06));for(let R=0;R<4;R++)l.lines.seg(y[R],y[(R+1)%4],_);let v=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*re,S=Math.hypot(d[0]-h[0],d[1]-h[1],d[2]-h[2]),T=R=>{let L=o.es;return[R[0]-L[0]*S*Math.cos(v)+o.n[0]*S*Math.sin(v),R[1]-L[1]*S*Math.cos(v)+o.n[1]*S*Math.sin(v),R[2]-L[2]*S*Math.cos(v)+o.n[2]*S*Math.sin(v)]},w=m(g,.065),b=m(d,.065),E=T(w),I=T(b);l.solid.tri(E,I,b,Kd),l.solid.tri(E,b,w,Kd);for(let[R,L]of[[E,I],[I,b],[b,w],[w,E]])l.lines.seg(R,L,_);if(x.cover>.02){let R=Math.min(1,x.cover),L=m(p(w,E,R),.01),P=m(p(b,I,R),.01),C=m(w,.01),D=m(b,.01);l.solid.tri(L,P,D,Qd),l.solid.tri(L,D,C,Qd)}}}function Hy(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Xr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Ru(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Ru(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=Oy[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of $s(e,n)){let[u,f,h,d]=c.corners.map(s);i.tri(u,f,h,o.glass),i.tri(u,h,d,o.glass),i.tri(u,h,f,o.glass),i.tri(u,d,h,o.glass);let g=(p,_=.004)=>[p[0]+e.n[0]*_,p[1]+e.n[1]*_,p[2]+e.n[2]*_],x=(p,_,y)=>[p[0]+(_[0]-p[0])*y,p[1]+(_[1]-p[1])*y,p[2]+(_[2]-p[2])*y],m=[u,f,h,d].map(p=>g(p));for(let p=0;p<4;p++)t.seg(m[p],m[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(g(x(u,f,p/a)),g(x(d,h,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(g(x(u,d,p/l)),g(x(f,h,p/l)),o.cells);for(let[p,_]of c.posts)t.seg(s(p),s(_),By)}}function Wy(i){let t=i.settings.roof,e=Vy(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(I=>I.points.map(R=>R[0])),r=e.rooms.flatMap(I=>I.points.map(R=>R[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new oe,f=new Ve;if(t.type==="flat"){we(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,Zs,Js,{bottom:!0});let I=.252;for(let[R,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])f.seg([R[0],I,R[1]],[L[0],I,L[1]],rr),f.seg([R[0],0,R[1]],[L[0],0,L[1]],qr);return{floor:e,base:e.height,solid:u,lines:f,glass:new oe}}let h=a-o>=c-l,d=t.ridge==="short"?!h:h,g=(d?c-l:a-o)/2,x=g*Math.tan(t.pitch*re),m=(I,R,L)=>d?[I,L,(l+c)/2+R]:[(o+a)/2+R,L,I],[p,_]=d?[o,a]:[l,c],y=new rt(Js),v=new rt(Zs),S=(I,R,L,P,C)=>{u.tri(I,R,L,C),u.tri(I,L,P,C)};for(let I of[-1,1]){S(m(p,I*g,0),m(_,I*g,0),m(_,0,x),m(p,0,x),y),S(m(p,I*g,-Oe),m(p,0,x-Oe),m(_,0,x-Oe),m(_,I*g,-Oe),v),S(m(p,I*g,-Oe),m(_,I*g,-Oe),m(_,I*g,0),m(p,I*g,0),v);for(let R of[p,_])S(m(R,I*g,-Oe),m(R,I*g,0),m(R,0,x),m(R,0,x-Oe),v);f.seg(m(p,I*g,0),m(_,I*g,0),qr);for(let R of[p,_])f.seg(m(R,I*g,0),m(R,0,x),qr)}let T=t.overhang,w=new rt(jd),b=g-T,E=b*Math.tan(t.pitch*re);for(let I of[p+T,_-T])u.tri(m(I,-b,-Oe),m(I,b,-Oe),m(I,0,E-Oe),w),u.tri(m(I,b,-Oe),m(I,-b,-Oe),m(I,0,E-Oe),w);return f.seg(m(p,0,x+.004),m(_,0,x+.004),rr),{floor:e,base:e.height,solid:u,lines:f,glass:new oe}}function Xy(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(Xr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=yd(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new oe,lines:new Ve,glass:new oe,sections:[],lift:!o.open}),c.sections.push(o.id);let u=uu(t,o),f=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,h=t.filter(x=>x!==o&&uu(t,x)===o).flatMap(x=>_d(o,x));for(let x of i.settings.roof.windows??[]){let m=s.get(x.face),p=m&&m.section===o.id?Au(m,x):null;if(!p)continue;let _=p.map(y=>Ei(o,y[0],y[2]));h.push({u0:Math.min(..._.map(y=>y[0])),u1:Math.max(..._.map(y=>y[0])),v0:Math.min(..._.map(y=>y[1])),v1:Math.max(..._.map(y=>y[1]))})}let d=u?hu(u,o):o,g=null;if(u){let x=kn(d),m=Gr(u,{u0:0,u1:0,a:0,b:0}),p=_=>{let[y,v]=x.at(_,x.w/2),[S,T]=Ei(u,y,v);return Ws(m,S,T)??Cn(u).y(T)};g=p(x.u0)<=p(x.u1)?0:1}qy(c.solid,c.lines,d,fl(i,d,d.overhang??e),a.elevation,c.glass,f,h,g)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function qy(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=kn(e),u=Cn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,f.a),d=Math.max(0,f.b),g=c.w,x=c.u0-Math.max(0,f.u0),m=c.u1+Math.max(0,f.u1),p=(P,C,D)=>{let[U,O]=c.at(P,C);return[U,D-r,O]},_=new rt(Js),y=new rt(Zs),v=new rt(jd),S=(P,C)=>{for(let D=1;D+1<P.length;D++)i.tri(P[0],P[D],P[D+1],C)},T=[],w=[],b=[],E=null;if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,C=e.shape==="parapet",D=e.points&&e.points.length>=3?xd(e,C?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):C?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(x,-h),c.at(m,-h),c.at(m,g+d),c.at(x,g+d)];we(i,D,P-r,P-r+.25,Zs,Js,{bottom:!0});for(let U=0;U<D.length;U++){let O=D[U],V=D[(U+1)%D.length];t.seg([O[0],P-r+.252,O[1]],[V[0],P-r+.252,V[1]],rr),t.seg([O[0],P-r,O[1]],[V[0],P-r,V[1]],qr)}if(C){let U=k=>Os(k)>=0?k:[...k].reverse(),O=U(D),V=cu(O,-.2),B=O.length;for(let k=0;k<B;k++){let G=U([O[k],O[(k+1)%B],V[(k+1)%B],V[k]]);we(i,G,P-r+.25,P-r+.65,Zs,Js),t.seg([O[k][0],P-r+.652,O[k][1]],[O[(k+1)%B][0],P-r+.652,O[(k+1)%B][1]],rr),t.seg([V[k][0],P-r+.652,V[k][1]],[V[(k+1)%B][0],P-r+.652,V[(k+1)%B][1]],rr)}}}else{let P=Gr(e,f);T=P.faces;for(let C of a)T=T.flatMap(D=>vd(D,C));w=P.rim,b=P.ridges,E=P.gable}let I=!!e.open,R=new rt(Dy);for(let P of T){if(I){for(let C=1;C+1<P.length;C++)s.tri(p(P[0][0],P[0][1],P[0][2]),p(P[C][0],P[C][1],P[C][2]),p(P[C+1][0],P[C+1][1],P[C+1][2]),R);continue}S(P.map(([C,D,U])=>p(C,D,U)),_),S(P.map(([C,D,U])=>p(C,D,U-Oe)),y)}for(let P=0;P<w.length;P++){let[C,D,U]=w[P],[O,V,B]=w[(P+1)%w.length];I||S([p(C,D,U),p(O,V,B),p(O,V,B-Oe),p(C,D,U-Oe)],y),t.seg(p(C,D,U),p(O,V,B),I?rr:qr)}if(I){Yy(i,t,c,u,f,p,r);return}for(let[[P,C,D],[U,O,V]]of b)t.seg(p(P,C,D+.004),p(U,O,V+.004),rr);let L=e.base;if(!o){if(E){let P=$y(E,L-Oe),C=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(P.length>=3)for(let D of C)S(P.map(([U,O])=>p(D,U,O)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let P of[0,g]){let C=u.y(P)-Oe;C>L+.02&&S([p(c.u0,P,L),p(c.u1,P,L),p(c.u1,P,C),p(c.u0,P,C)],v)}else if(e.eave_a>L+.02)for(let[P,C,D,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])S([p(P,C,L),p(D,U,L),p(D,U,e.eave_a),p(P,C,e.eave_a)],v)}}function Yy(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,f=r.b>0,h=r.u0>0,d=r.u1>0,g=(p,_,y,v,S,T)=>{let w=[e.at(p,y),e.at(_,y),e.at(_,v),e.at(p,v)],b=(w[1][0]-w[0][0])*(w[2][1]-w[0][1])-(w[2][0]-w[0][0])*(w[1][1]-w[0][1]);we(i,b<0?[...w].reverse():w,S-o,T-o,Uy,Ny,{bottom:!0})},x=o;for(let[p,_]of[[0,u],[a,f]]){if(!_)continue;let y=n.y(p)-.03,v=p===0?0:a-l;g(e.u0,e.u1,v,v+l,y-c,y),t.seg(s(e.u0,p,y-c),s(e.u1,p,y-c),qr)}for(let[p,_]of[[e.u0,h],[e.u1-l,d]])if(_)for(let y=0;y<6;y++){let v=a*y/6,S=a*(y+1)/6,T=Math.min(n.y(v),n.y(S))-.03;g(p,p+l,v,S,T-c,T)}let m=[];for(let[p,_]of[[0,u],[a-l,f]]){if(!_)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let S=0;S<=v;S++){let T=e.u0+y*S/v;S===0&&!h||S===v&&!d||m.push([T,p])}}if(!u&&!f)for(let p of[e.u0,e.u1-l])(p===e.u0&&h||p!==e.u0&&d)&&m.push([p,a/2-l/2]);for(let[p,_]of m){let y=n.y(_+l/2)-.03-c;g(p,p+l,_,_+l,x,y)}}function $y(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Ks={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},ep={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ii=.2,Qs=8,yl=.42,Cu=.42;function op(i,t,e,n=[],r=[],s){let{walls:o,open:a}=Vs(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(R,L,P)=>{let C=s?s(R,L):null;return C===null?P:Math.max(.05,Math.min(P,C))},c=(R,L,P,C,D)=>{if(!s)return D;let U=D,O=Math.max(2,Math.ceil((C-P)/.25)+1);for(let V=0;V<O;V++){let B=P+(C-P)*V/(O-1);U=Math.min(U,l(R[0]+L[0]*B,R[1]+L[1]*B,D))}return U},u=new oe(!0,!0),f=[],h=new Ve,d=[];for(let R of i.rooms){if(R.points.length<3)continue;let L=sp(R.points),P=ep[R.floor_material]??ep.wood,C=new rt(P.color),D=n.filter(k=>Sd(k,L)).map(k=>wd(k,.003));d.push(...D);let U=[...L,...D.flat()],O=u.count;for(let[k,G,nt]of Hr(L,D)){let Q=U[k],st=U[G],ut=U[nt];u.tri([Q[0],0,Q[1]],[ut[0],0,ut[1]],[st[0],0,st[1]],C,C,C,[Q[0],Q[1],ut[0],ut[1],st[0],st[1]],jt,P.tile)}f.push({roomId:R.id,start:O,end:u.count,color:P.color});let V=new rt(Ks.slab),B=k=>{for(let G=0;G<k.length;G++){let nt=k[G],Q=k[(G+1)%k.length];u.tri([nt[0],-Ii,nt[1]],[nt[0],0,nt[1]],[Q[0],0,Q[1]],V),u.tri([nt[0],-Ii,nt[1]],[Q[0],0,Q[1]],[Q[0],-Ii,Q[1]],V)}};B(L);for(let k of D){B([...sp(k)].reverse());for(let G=0;G<k.length;G++){let nt=k[G],Q=k[(G+1)%k.length];h.seg([nt[0],.006,nt[1]],[Q[0],.006,Q[1]],Qi),h.seg([nt[0],-Ii,nt[1]],[Q[0],-Ii,Q[1]],Ai)}}}let g=new Map,x=[],m=new Map;for(let R of o){let L="interior",P=null;if(R.exterior){let D=R.b[0]-R.a[0],U=R.b[1]-R.a[1],O=Math.hypot(D,U)||1,V=[U/O,-D/O],B=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*Qs)%Qs+Qs)%Qs;L=`s${B}`;let k=B/Qs*2*Math.PI;P=[Math.cos(k),Math.sin(k)]}let C=g.get(L);C===void 0&&(C=x.length,g.set(L,C),x.push(P)),m.set(R,C)}let p=new Map,_=[];for(let R of i.openings){let L=dd(R,i.rooms,i.walls??[]);if(!L)continue;let P=pd(o,R,L);if(!P)continue;let{wall:C,s:D}=P,U=wl([C.b[0]-C.a[0],C.b[1]-C.a[1]]),O=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),V=Math.min(R.width,O),B=Math.max(0,Math.min(O-V,D-V/2)),k=L.room.points,G=C.free?U[0]*(k[1][0]-k[0][0])+U[1]*(k[1][1]-k[0][1])>0:C.roomLeft===R.room_id,nt=[-U[1],U[0]],Q=G?nt:[-nt[0],-nt[1]],st=Math.min(c(C.a,U,B,B+V,Ml(C,i.height))-.02,R.sill+R.height),ut=Math.max(0,Math.min(R.sill,st-.1)),mt=[Q[1],-Q[0]],Y=U[0]*mt[0]+U[1]*mt[1]>0,$={opening:R,bucket:m.get(C),start:[C.a[0]+U[0]*B,C.a[1]+U[1]*B],axis:U,width:V,toRoom:Q,faceRoom:G?C.left:C.right,faceOut:G?C.right:C.left,sill:ut,top:st,hingeAtStart:R.hinge==="left"===Y,exterior:C.exterior};_.push($);let ct=p.get(C);ct||p.set(C,ct=[]),ct.push({s0:B,s1:B+V,sill:ut,top:st,info:$})}let y=Math.min(i.cut_height,i.height),v=new oe;for(let R of o){let L=m.get(R),P=wl([R.b[0]-R.a[0],R.b[1]-R.a[1]]),C=(p.get(R)??[]).sort((G,nt)=>G.s0-nt.s0),D=Ml(R,i.height),U=[],O=[-1/0,...new Set(C.flatMap(G=>[G.s0,G.s1])).values(),1/0].sort((G,nt)=>G-nt);for(let G=0;G+1<O.length;G++){let nt=O[G],Q=O[G+1];if(Q-nt<1e-6)continue;let st=Number.isFinite(nt)&&Number.isFinite(Q)?(nt+Q)/2:Number.isFinite(nt)?nt+1:Q-1,ut=C.filter($=>$.s0<st&&$.s1>st).map($=>[$.sill,$.top]).sort(($,ct)=>$[0]-ct[0]),mt=[],Y=-Ii;for(let[$,ct]of ut)$>Y+1e-4&&mt.push([Y,$]),Y=Math.max(Y,ct);D>Y+1e-4&&mt.push([Y,D]),U.push({t0:nt,t1:Q,ranges:mt})}let V=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),B=s&&c(R.a,P,0,V,D)<D-.001,k=B?U.flatMap(G=>{let nt=Math.max(G.t0,-.5),Q=Math.min(G.t1,V+.5),st=Math.max(1,Math.ceil((Q-nt)/.3));return Array.from({length:st},(ut,mt)=>({t0:mt===0?G.t0:nt+(Q-nt)*mt/st,t1:mt===st-1?G.t1:nt+(Q-nt)*(mt+1)/st,ranges:G.ranges}))}):U;for(let G of k){let nt=Jy(R.footprint,R.a,P,G.t0,G.t1);if(nt.length<3)continue;let Q=B?Math.min(...nt.map(([st,ut])=>l(st,ut,D))):D;for(let[st,ut]of G.ranges){let mt=Math.min(ut,B?Math.max(...nt.map(([Tt,ft])=>l(Tt,ft,D))):ut);if(mt-st<1e-4||Q-st<.01)continue;let Y=st>.01,$=B&&ut>Q,ct=(Tt,ft)=>Math.min(ut,l(Tt,ft,D));if(st<y-1e-6){let Tt=mt>y+1e-6?Ed+L:ji+L,ft=$&&Q<y?(zt,de)=>Math.min(y,ct(zt,de)):Math.min(mt,y);we(v,nt,st,ft,Ks.wall,Ks.wallTop,{aoFrom:0,bottom:Y,fold:ji+L,topFold:Tt})}mt>y+1e-6&&Q>y+1e-6&&we(v,nt,Math.max(st,y),$?ct:mt,Ks.wall,Ks.wallTop,{aoFrom:0,fold:L,bottom:Y&&st>=y})}}}let S=o.flatMap(R=>R.footprint),T=Qy(o,S),w=new Ve;w.p.push(...h.p),w.c.push(...h.c),w.f.push(...h.f);let b=(R,L)=>(p.get(R)??[]).filter(L);for(let R of T.edges){let L=m.get(R.wall);for(let[C,D]of Sl(R,b(R.wall,U=>U.sill<=.005)))w.seg([C[0],.004,C[1]],[D[0],.004,D[1]],Td);for(let[C,D]of Sl(R,b(R.wall,U=>U.sill<y&&U.top>y)))w.seg([C[0],y,C[1]],[D[0],y,D[1]],mu,pl+L);let P=Ml(R.wall,i.height);for(let[C,D]of Sl(R,b(R.wall,U=>U.top>=P-.021))){if(!s){w.seg([C[0],P,C[1]],[D[0],P,D[1]],Qi,P<=y+1e-6?ji+L:L);continue}let U=Math.max(1,Math.ceil(Math.hypot(D[0]-C[0],D[1]-C[1])/.3));for(let O=0;O<U;O++){let V=[C[0]+(D[0]-C[0])*O/U,C[1]+(D[1]-C[1])*O/U],B=[C[0]+(D[0]-C[0])*(O+1)/U,C[1]+(D[1]-C[1])*(O+1)/U],k=l(V[0],V[1],P),G=l(B[0],B[1],P);w.seg([V[0],k,V[1]],[B[0],G,B[1]],Qi,Math.max(k,G)<=y+1e-6?ji+L:L)}}}for(let R of T.corners){let L=l(R.p[0],R.p[1],Ml(R.wall,i.height));w.segSplit([R.p[0],.004,R.p[1]],[R.p[0],L,R.p[1]],Ai,Math.min(y,L),m.get(R.wall))}for(let R of p.values())for(let L of R)Zy(w,L,y);let E=jy(T.edges,i.rooms,p);Hd(v,w,i);for(let R of r)Ru(v,w,R.face,R.field,i.elevation);let I=[];for(let R of i.furniture){if(id(R.type))continue;let L=v.count,P=w.p.length/6,C=fn(i,R);xl(v,w,E,R,C),C+R.h>y+.05&&(Ad(v,L,y,gu),Rd(w,P,y,gu)),I.push({id:R.id,start:L,end:v.count})}return{floor:u.geometry(),roomTris:f,holes:d,walls:v.geometry(),lines:w.geometry(),shadow:E.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(R=>m.get(R)),furnitureTris:I}}function Zy(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Ai,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Ai,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Ai,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Ai,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Ai,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),mu,pl+r)}function Jy(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=np(o,a=>s(a)-n)),Number.isFinite(r)&&(o=np(o,a=>r-s(a))),o}function np(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var ip=i=>Math.round(i*1e3),js=i=>`${ip(i[0])},${ip(i[1])}`,rp=(i,t)=>{let e=js(i),n=js(t);return e<n?`${e}|${n}`:`${n}|${e}`};function Ky(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let f of t){let h=((f[0]-r[0])*o+(f[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((f[0]-r[0])*a-(f[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((f,h)=>f-h);let u=r;for(let f of c){let h=[r[0]+o*f,r[1]+a*f];js(h)!==js(u)&&e.push([u,h]),u=h}e.push([u,s])}return e}function Qy(i,t){let e=i.map(l=>({wall:l,edges:Ky(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let f=rp(c,u);n.set(f,(n.get(f)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let f=js(l),h=s.get(f);h||s.set(f,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,f]of c){if(n.get(rp(u,f))!==1)continue;let h=Math.hypot(f[0]-u[0],f[1]-u[1]);if(h<1e-4)continue;r.push({a:u,b:f,wall:l});let d=[(f[0]-u[0])/h,(f[1]-u[1])/h];o(u,l,d),o(f,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(f=>u.some(h=>Math.abs(f[0]*h[1]-f[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Sl(i,t){if(!t.length)return[[i.a,i.b]];let e=wl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=wl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=f=>(f[0]-i.wall.a[0])*e[0]+(f[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let f of t)c=c.flatMap(([h,d])=>{if(f.s1<=h||f.s0>=d)return[[h,d]];let g=[];return f.s0>h&&g.push([h,f.s0]),f.s1<d&&g.push([f.s1,d]),g});let u=f=>{let h=(f-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([f,h])=>h-f>1e-4).map(([f,h])=>s<=o?[u(f),u(h)]:[u(h),u(f)])}function jy(i,t,e){let n=new oe,r=new rt(Cu,Cu,Cu),s=new rt(1,1,1),o=.002;for(let a of i)for(let[l,c]of Sl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],f=c[1]-l[1],h=Math.hypot(u,f);if(h<.05)continue;let d=[f/h,-u/h],g=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&ce(g,p.points)))continue;let x=[l[0]+d[0]*yl,l[1]+d[1]*yl],m=[c[0]+d[0]*yl,c[1]+d[1]*yl];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[m[0],o,m[1]],r,s,s),n.tri([l[0],o,l[1]],[m[0],o,m[1]],[c[0],o,c[1]],r,s,r)}return n}function ap(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(hl),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return pu(e);let r=n.furniture.filter(s=>(s.type==="stairs"||s.type==="stairs_landing"||De(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(hl);return pu([...e,...r])}function Ml(i,t){return Math.min(t,i.height??t)}function wl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function sp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var tM=500,lp=.12,cp=1.35,eM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Tl=class{view={target:new z,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,f=Math.min(1,(t-c)/u),h=eM(f);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,f>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Iu(this.view.phi+this.velocity.phi,lp,cp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},tM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,r);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-r/o*2.4;this.view.theta+=a,this.view.phi=Iu(this.view.phi+l,lp,cp),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Iu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new z(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new z(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Iu(i,t,e){return Math.min(e,Math.max(t,i))}function Pi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var to=(i,t,e,n,r)=>{i.expandByPoint(new z(t,n,e)),i.expandByPoint(new z(t,r,e))};function up(i){let t=new Qe;for(let{floor:e,ty:n}of i){let r=e.elevation+n;for(let s of e.rooms)for(let[o,a]of s.points)to(t,o,a,r,r+e.height);for(let s of e.outdoor??[]){let o=r+Zi(e)+(s.offset??0),a=o-(s.type==="pool"?0:s.slope??0),l=Kn(s.type)&&s.height?s.height:kr[s.type],c=o+(s.type==="pool"?.06:l);for(let[u,f]of s.points)to(t,u,f,a,c)}for(let s of e.walls??[]){let o=r+Math.min(e.height,s.height??e.height);to(t,s.a[0],s.a[1],r,o),to(t,s.b[0],s.b[1],r,o)}}return t}function hp(i,t,e){let n=new Qe,r=i.elevation+e;for(let[s,o]of t.points)to(n,s,o,r,r+i.height);return n}function Pu(i,t,e,n,r,s=1){if(i.isEmpty())return 0;let o=i.getCenter(new z),a=new z(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),l=new z(Math.cos(t),0,-Math.sin(t)),c=new z(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),u=Math.tan(r/2),f=u*Math.max(.01,n),h=0;for(let d of[i.min.x,i.max.x])for(let g of[i.min.y,i.max.y])for(let x of[i.min.z,i.max.z]){let m=new z(d,g,x).sub(o),p=m.dot(a);h=Math.max(h,p+Math.abs(m.dot(l))*s/f,p+Math.abs(m.dot(c))*s/u)}return h}function fp(i,t,e,n,r=1){let s=i.getSize(new z),o=Math.max(.01,Math.min(s.x,s.z)),a=Math.max(s.x,s.z)/o>=2,l=-.6;return a&&e>=1.2&&(l=s.z>=s.x?-.95:-.35),{theta:l,radius:Pu(i,l,t,e,n,r)}}function Lu(i,t,e,n,r,s,o=8){if(i.isEmpty())return{radius:0,offset:new z};let a=Math.max(1,s.width),l=Math.max(1,s.height),c=-1+2*Math.max(0,s.left)/a,u=1-2*Math.max(0,s.right)/a,f=-1+2*Math.max(0,s.bottom)/l,h=1-2*Math.max(0,s.top)/l;if(c>=u||f>=h)return{radius:Pu(i,t,e,n,r),offset:new z};let d=i.getCenter(new z),g=new z(Math.sin(e)*Math.sin(t),Math.cos(e),Math.sin(e)*Math.cos(t)),x=new z(Math.cos(t),0,-Math.sin(t)),m=new z(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e)),p=Math.tan(r/2),_=p*Math.max(.01,n),y=[];for(let L of[i.min.x,i.max.x])for(let P of[i.min.y,i.max.y])for(let C of[i.min.z,i.max.z]){let D=new z(L,P,C).sub(d);y.push({x:D.dot(x),y:D.dot(m),near:D.dot(g)})}let v=L=>{let P=-1/0,C=1/0,D=-1/0,U=1/0;for(let O of y){let V=L-O.near;P=Math.max(P,O.x-u*_*V),C=Math.min(C,O.x-c*_*V),D=Math.max(D,O.y-h*p*V),U=Math.min(U,O.y-f*p*V)}return{x0:P,x1:C,y0:D,y1:U}},S=Math.max(...y.map(L=>L.near))+.1,T=L=>{let P=v(L);return P.x0<=P.x1&&P.y0<=P.y1},w=Math.max(S,o),b=Math.max(w,Pu(i,t,e,n,r));for(;!T(b);)b*=2;for(let L=0;L<60;L++){let P=(w+b)/2;T(P)?b=P:w=P}let E=v(b),I=(E.x0+E.x1)/2,R=(E.y0+E.y1)/2;return{radius:b,offset:x.multiplyScalar(I).add(m.multiplyScalar(R))}}function nM(i,t){let e=De(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Fu(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?nM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function Du(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,f=c.portrait===!1?10:6,h=c.portrait===!1?6:10,d=iM(c.id)%1e3/1e3;for(let x of $s(l,c)){let[m,p,_,y]=x.corners.map(S=>[S[0]+l.n[0]*.006,S[1]+l.n[1]*.006-t,S[2]+l.n[2]*.006]),v=[[m,0,0],[p,1,0],[_,1,1],[y,0,1]];for(let S of[0,1,2,0,2,3]){let[T,w,b]=v[S];e.push(T[0],T[1],T[2]),n.push(w,b),r.push(f,h),s.push(d)}}let g=e.length/3-u;g&&o.push({id:c.id,start:u,count:g})}if(!e.length)return null;let a=new Zt;return a.setAttribute("position",new kt(e,3)),a.setAttribute("uv",new kt(n,2)),a.setAttribute("aCells",new kt(r,2)),a.setAttribute("aPhase",new kt(s,1)),a.setAttribute("aLevel",new kt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function eo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Uu(i){let t=new le({transparent:!0,blending:Fe,depthWrite:!1,side:Se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function iM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var dp=["neon","blueprint","day"];function pp(i){return dp.indexOf(i)}var El={value:new z(.22,.88,1)},Al={value:0};function mp(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var rM=`
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
`;function Vn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=El,s.uniforms.uAccentOn=Al,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${rM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Rl(i){return i==="day"?vi:Fe}var no=.012,sM=.012;function xp(i,t,e,n,r,s=[]){let o=[],a=[],l=[],c=[],u=(g,x,m,p,_,y,v)=>{for(let S of[g,x,m,g,m,p])o.push(S[0],S[1],S[2]),a.push(_[0],_[1],_[2]),l.push(y),c.push(v)};i.rooms.forEach((g,x)=>{if(g.points.length<3)return;let m=g.points.map(T=>T[0]),p=g.points.map(T=>T[1]),_=Math.min(...m),y=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),S=Math.max(1,Math.ceil((Math.max(...p)-y)/r));for(let T=0;T<v;T++)for(let w=0;w<S;w++){let b=_+(T+.5)*r,E=y+(w+.5)*r;if(!ce([b,E],g.points)||s.some(L=>ce([b,E],L)))continue;let I=_+T*r,R=y+w*r;u([I,no,R],[I,no,R+r],[I+r,no,R+r],[I+r,no,R],[0,1,0],x,-1)}});let f=i.rooms.length;for(let g of i.outdoor??[]){if(g.points.length<3||Kn(g.type))continue;let x=Gd(i,g)+no,m=g.points.map(T=>T[0]),p=g.points.map(T=>T[1]),_=Math.min(...m),y=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),S=Math.max(1,Math.ceil((Math.max(...p)-y)/r));for(let T=0;T<v;T++)for(let w=0;w<S;w++){if(!ce([_+(T+.5)*r,y+(w+.5)*r],g.points))continue;let b=_+T*r,E=y+w*r;u([b,x,E],[b,x,E+r],[b+r,x,E+r],[b+r,x,E],[0,1,0],f,-1)}}let h=Math.min(i.cut_height,i.height);t.forEach((g,x)=>{let m=Math.min(i.height,g.height??i.height),p=Math.min(h,m-.02),_=g.b[0]-g.a[0],y=g.b[1]-g.a[1],v=Math.hypot(_,y);if(v<.05)return;let S=[_/v,y/v],T=[-S[1],S[0]],w=e[x],b=oM(g,S,v,n),E=(L,P,C)=>[P,C,...L.filter(D=>D>P+.005&&D<C-.005)].sort((D,U)=>D-U).filter((D,U,O)=>U===0||D>O[U-1]+.005),I=E([p,(p+m)/2,...b.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,m-.02),R=E(b.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let P=L>0?g.roomLeft:g.roomRight,C=P?i.rooms.findIndex(V=>V.id===P):g.exterior?f:-1;if(C<0)continue;let D=(L>0?g.left:g.right)+sM,U=[T[0]*L,T[1]*L],O=(V,B)=>[g.a[0]+S[0]*V+U[0]*D,B,g.a[1]+S[1]*V+U[1]*D];for(let V=0;V<R.length-1;V++){let B=R[V+1]-R[V],k=Math.max(1,Math.ceil(B/r));for(let G=0;G<k;G++){let nt=R[V]+B/k*G,Q=R[V]+B/k*(G+1),st=(nt+Q)/2;for(let ut=0;ut<I.length-1;ut++){let mt=I[ut],Y=I[ut+1];if(Y-mt<.01)continue;let $=(mt+Y)/2;if(b.some(Tt=>st>Tt.s0&&st<Tt.s1&&$>Tt.y0&&$<Tt.y1))continue;let ct=mt>=h-1e-6?w:ji+w;u(O(nt,mt),O(Q,mt),O(Q,Y),O(nt,Y),[U[0],0,U[1]],C,ct)}}}}});let d=[];for(let g of n){if(g.opening.type!=="door")continue;let x=t.find(_=>bp(_,g));if(!x||!x.roomLeft||!x.roomRight)continue;let m=i.rooms.findIndex(_=>_.id===x.roomLeft),p=i.rooms.findIndex(_=>_.id===x.roomRight);m<0||p<0||d.push({id:g.opening.id,a:m,b:p,x:g.start[0]+g.axis[0]*(g.width/2),y:Math.min(1.1,g.top*.55),z:g.start[1]+g.axis[1]*(g.width/2)})}return{pos:new Float32Array(o),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:d}}function bp(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function oM(i,t,e,n){let r=[];for(let s of n){if(!bp(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function aM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function lM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function gp(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,f=Math.sqrt(u)||1e-6,h=lM(i),d=1/(1+u/(h*h)),g=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/f);return i.level*g*(.2+.8*x)*aM(i.kind,l/f)}function _p(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let h=n[f]??.5;if(!(h<=.01))for(let[d,g]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let _=p.x-u.x,y=p.y-u.y,v=p.z-u.z,S=Math.hypot(_,y,v)||1,T=gp(p,u.x,u.y,u.z,_/S,y/S,v/S);x[0]+=p.color[0]*T,x[1]+=p.color[1]*T,x[2]+=p.color[2]*T}let m=Math.max(x[0],x[1],x[2]);m<.01||r.push({x:u.x,y:u.y,z:u.z,color:[x[0]/m,x[1]/m,x[2]/m],level:Math.min(1,m*.9*(.35+.65*h)),kind:"wall",room:g})}});let s=new Map;for(let u of r){let f={...u,color:u.color.map(h=>Math.pow(h,1.5))};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let f=s.get(l[u]);if(!f)continue;let h=u*3,d=0,g=0,x=0;for(let m of f){let p=gp(m,o[h],o[h+1],o[h+2],a[h],a[h+1],a[h+2]);d+=m.color[0]*p,g+=m.color[1]*p,x+=m.color[2]*p}c[h]=1-Math.exp(-d*e*1.6),c[h+1]=1-Math.exp(-g*e*1.6),c[h+2]=1-Math.exp(-x*e*1.6)}return c}function vp(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&ce([t,e],r.points));return n<0?i.rooms.length:n}function yp(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Il={open:0,open2:0,tilt:0,tilt2:0,cover:null},Mp=2043986,Sp=2769520,cM=2242399,Nu=1845831,uM=1450554,ei=16758087,hM=1.2,fM=1.5,dM=1846349,pM=2572395,mM=1120816,gM=1845831,wp=5995775,Tp=9085695,Yr=Gt(3662079,.08),xM=.2;function Cl(i,t,e,n,r,s,o,a,l,c,u){let f=(d,g,x)=>t(d,g,x),h=[[f(e,r,a),f(n,r,a),f(n,s,a),f(e,s,a),c],[f(e,r,o),f(n,r,o),f(n,s,o),f(e,s,o),Gt(l.getHex(),.6)],[f(e,s,o),f(n,s,o),f(n,s,a),f(e,s,a),l],[f(e,r,o),f(n,r,o),f(n,r,a),f(e,r,a),Gt(l.getHex(),.85)],[f(e,r,o),f(e,s,o),f(e,s,a),f(e,r,a),Gt(l.getHex(),.92)],[f(n,r,o),f(n,s,o),f(n,s,a),f(n,r,a),Gt(l.getHex(),.92)]];for(let[d,g,x,m,p]of h)i.tri(d,g,x,p,p,p,void 0,u),i.tri(d,x,m,p,p,p,void 0,u)}function se(i,t,e,n,r,s,o,a,l,c,u,f){if(a<=u+1e-6)return Cl(i,t,e,n,r,s,o,a,l,c,jt);if(o>=u-1e-6)return Cl(i,t,e,n,r,s,o,a,l,c,f);Cl(i,t,e,n,r,s,o,u,l,c,jt),Cl(i,t,e,n,r,s,u,a,l,c,f)}function Li(i,t,e,n,r,s,o,a,l,c,u=0){let f=(h,d,g)=>{let x=v=>u?(o-v)/u:.5,m=t(e,r,h),p=t(n,r,h),_=t(n,r,d),y=t(e,r,d);i.tri(m,p,_,a,a,a,[0,x(h),1,x(h),1,x(d)],g),i.tri(m,_,y,a,a,a,[0,x(h),1,x(d),0,x(d)],g)};o<=l+1e-6?f(s,o,jt):s>=l-1e-6?f(s,o,c):(f(s,l,jt),f(l,o,c))}function bM(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),f=t(n,r,o),h=t(n,s,o),d=t(e,s,o),g=0,x=(s-r)/c;i.tri(u,f,h,a,a,a,[0,g,1,g,1,x],l),i.tri(u,h,d,a,a,a,[0,g,1,x,0,x],l)}function Ep(i,t,e){let n=new oe,r=new oe,s=new oe(!0),o=new rt(Mp),a=new rt(Sp),l=[],c=[],u=[];for(let f of i){let h=n.count,d=r.count,g=s.count,x=t.get(f.opening.id)??Il,m=f.width,{sill:p,top:_,bucket:y}=f,v=(b,E,I)=>[f.start[0]+f.axis[0]*b+f.toRoom[0]*E,I,f.start[1]+f.axis[1]*b+f.toRoom[1]*E],S=(f.faceRoom-f.faceOut)/2,T=f.opening.mark==="closed",w=f.opening.type==="door"&&Ji(f.opening,f.exterior)==="passage";if(f.opening.type==="door"&&!w||f.opening.type==="garage"){let b=-f.faceOut-.012,E=f.faceRoom+.012,I=f.opening.type==="garage"&&(T?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),R=I?Gt(ei,.8):new rt(Mp),L=I?Gt(ei,1):new rt(Sp);se(n,v,-.045,.02,b,E,0,_+.045,R,L,e,y),se(n,v,m-.02,m+.045,b,E,0,_+.045,R,L,e,y),se(n,v,.02,m-.02,b,E,_-.02,_+.045,R,L,e,y)}if(f.opening.type==="door"){let b=Ji(f.opening,f.exterior),E=sd(b),I=f.opening.swing==="out"?-1:1,R=I>0?f.faceRoom:-f.faceOut,L=f.opening.leaves===2,P=.02,C=m-.02,D=rd(m,b,f.hingeAtStart,f.opening);if(D){for(let[B,k]of D.panels)se(n,v,B,B+.04,S-.03,S+.03,.02,_-.02,o,a,e,y),se(n,v,k-.04,k,S-.03,S+.03,.02,_-.02,o,a,e,y),se(n,v,B,k,S-.03,S+.03,.02,.1,o,a,e,y),Li(r,v,B+.04,k-.04,S,.1,_-.02,Yr,e,y);P=D.x0,C=D.x1}let U=L?(C-P)/2-.004:C-P,O=E?.06:.04;E&&(se(n,v,.02,m-.02,-f.faceOut-.02,f.faceRoom,0,.02,new rt(Nu),a,e,y),f.exterior&&se(n,v,m/2-.08,m/2+.08,-f.faceOut-.1,-f.faceOut,_+.1,_+.17,Gt(ei,.55),Gt(ei,.85),e,jt));let V=w?[]:[[f.hingeAtStart,x.open]];L&&!w&&V.push([!f.hingeAtStart,x.open2??0]);for(let[B,k]of V){let G=Math.min(1,Math.max(0,k)),nt=b==="sliding"?0:G*fM,Q=b==="sliding"?G*U:0,st=(de,Ht,Kt)=>{let ae=de*Math.cos(nt)-Ht*Math.sin(nt)-Q,Jt=R+I*(Ht*Math.cos(nt)+de*Math.sin(nt)+(Q?.05:0));return v(B?P+ae:C-ae,Jt,Kt)},ut=G>.05?jt:y,mt=T?!!x.sensed&&G<.05:G>.9,Y=mt?Gt(ei,.7):new rt(E?mM:dM),$=mt?Gt(ei,.9):new rt(E?gM:pM);b==="glass"?(se(n,st,0,.05,-O,0,.01,_-.01,Y,$,e,ut),se(n,st,U-.05,U,-O,0,.01,_-.01,Y,$,e,ut),se(n,st,.05,U-.05,-O,0,.01,.12,Y,$,e,ut),se(n,st,.05,U-.05,-O,0,_-.08,_-.01,Y,$,e,ut),Li(r,st,.05,U-.05,-O/2,.12,_-.08,Yr,e,ut)):se(n,st,0,U,-O,0,.01,_-.01,Y,$,e,ut),b==="front_glass"?Li(r,st,.12,U-.12,.001,_*.55,_-.18,Yr,e,ut):E&&Li(r,st,.1,.18,.001,.3,_-.3,Yr,e,ut);let ct=Math.min(1.05,_*.5),Tt=E?.3:.012,ft=E?U-.11:U-.16,zt=E?U-.08:U-.05;se(n,st,ft,zt,.004,.05,ct-Tt,ct+Tt,new rt(wp),new rt(Tp),e,ut),se(n,st,ft,zt,-O-.05,-O-.004,ct-Tt,ct+Tt,new rt(wp),new rt(Tp),e,ut)}}else if(f.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),E=new rt(13951231),I=f.faceRoom-.03,R=_*(1-b);b>.01&&Li(s,v,.02,m-.02,I,R,_,E,e,y,.5);let L=(1-b)*_;L>.01&&bM(s,v,.02,m-.02,I,I+L,_+.03,E,y,.5)}else if(Ji(f.opening,f.exterior)==="glass_wall"){se(n,v,0,.04,S-.025,S+.025,p,_,o,a,e,y),se(n,v,m-.04,m,S-.025,S+.025,p,_,o,a,e,y),se(n,v,.04,m-.04,S-.025,S+.025,p,p+.03,o,a,e,y),se(n,v,.04,m-.04,S-.025,S+.025,_-.04,_,o,a,e,y);let I=Math.max(1,Math.round((m-2*.04)/.9)),R=(m-2*.04)/I;for(let L=1;L<I;L++){let P=.04+L*R;se(n,v,P-.02,P+.02,S-.025,S+.025,p+.03,_-.04,o,a,e,y)}for(let L=0;L<I;L++){let P=.04+L*R+(L?.02:0),C=.04+(L+1)*R-(L<I-1?.02:0);Li(r,v,P,C,S,p+.03,_-.04,Yr,e,y)}}else{se(n,v,0,.06,S-.035,S+.035,p,_,o,a,e,y),se(n,v,m-.06,m,S-.035,S+.035,p,_,o,a,e,y),se(n,v,.06,m-.06,S-.035,S+.035,p,p+(p>.05?.06:.03),o,a,e,y),se(n,v,.06,m-.06,S-.035,S+.035,_-.06,_,o,a,e,y),p>.3&&(se(n,v,-.04,m+.04,S+.035,f.faceRoom+.07,p-.03,p,new rt(Nu),a,e,y),f.exterior&&se(n,v,-.03,m+.03,-f.faceOut-.06,S-.035,p-.04,p-.02,new rt(Nu),a,e,y));let I=.055,R=p+(p>.05?.06:.03),L=_-.06,P=S+.035,C=S+.035+.06,U=f.opening.leaves===2?[{atStart:f.hingeAtStart,x0:f.hingeAtStart?.06:m/2,x1:f.hingeAtStart?m/2:m-.06,open:x.open,tilt:x.tilt},{atStart:!f.hingeAtStart,x0:f.hingeAtStart?m/2:.06,x1:f.hingeAtStart?m-.06:m/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:f.hingeAtStart,x0:.06,x1:m-.06,open:x.open,tilt:x.tilt}];for(let O of U){let V=O.open>.02||O.tilt>.02,B=T?!!x.sensed&&!V:V,k=B?Gt(ei,.75):new rt(cM),G=B?Gt(ei,.95):a,nt=O.x0,Q=O.x1,st=Q-nt,ut=O.open*hM,mt=O.tilt*xM,Y=(ct,Tt,ft)=>{let zt=ft-R,de=Tt+zt*Math.sin(mt),Ht=R+zt*Math.cos(mt),Kt=ct*Math.cos(ut)-(de-P)*Math.sin(ut);de=P+(de-P)*Math.cos(ut)+ct*Math.sin(ut);let ae=O.atStart?nt+Kt:Q-Kt;return v(ae,de,Ht)},$=ut>.05?jt:y;if(se(n,Y,0,I,P,C,R,L,k,G,e,$),se(n,Y,st-I,st,P,C,R,L,k,G,e,$),se(n,Y,I,st-I,P,C,R,R+I,k,G,e,$),se(n,Y,I,st-I,P,C,L-I,L,k,G,e,$),Li(r,Y,I,st-I,(P+C)/2,R+I,L-I,B?Gt(ei,.16):Yr,e,$),Ji(f.opening,f.exterior)==="bars"){let ct=(R+L)/2,Tt=(P+C)/2;se(n,Y,I,st-I,Tt-.012,Tt+.012,ct-.012,ct+.012,k,G,e,$),se(n,Y,st/2-.012,st/2+.012,Tt-.012,Tt+.012,R+I,L-I,k,G,e,$)}}}if(x.cover!==null){let b=-f.faceOut,E=_+.2;se(n,v,-.05,m+.05,b-.15,b,_,E,new rt(uM),a,e,y);let I=Math.min(1,Math.max(0,x.cover));if(I>.01){let R=_-I*(_-p);Li(s,v,0,m,b-.07,R,_,new rt(16777215),e,y,.045)}}l.push({id:f.opening.id,start:h,end:n.count}),c.push({id:f.opening.id,start:d,end:r.count}),u.push({id:f.opening.id,start:g,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var _M=.3,Ap=2.6;function Rp(i,t=.32,e=.22,n=[]){let r=i.map(S=>S[0]),s=i.map(S=>S[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,f=e*.7071,h=S=>{let T=[S,[S[0]+e,S[1]],[S[0]-e,S[1]],[S[0],S[1]+e],[S[0],S[1]-e]],w=[...T,[S[0]+f,S[1]+f],[S[0]-f,S[1]+f],[S[0]+f,S[1]-f],[S[0]-f,S[1]-f]];return T.every(b=>ce(b,i))&&!n.some(b=>w.some(E=>ce(E,b)))},d=(S,T)=>h(u?[S,T]:[T,S]),g=(S,T)=>{let w=Math.ceil(Math.hypot(T[0]-S[0],T[1]-S[1])/.05);for(let b=1;b<w;b++)if(!h([S[0]+(T[0]-S[0])*b/w,S[1]+(T[1]-S[1])*b/w]))return!1;return!0},[x,m,p,_]=u?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let S=x+e;S<=m-e+1e-6;S+=t){let T=null,w=null,b=.05;for(let L=p;L<=_+1e-6;L+=b)if(d(S,L)&&(w??=L),(!d(S,L)||L+b>_+1e-6)&&w!==null){let P=d(S,L)?L:L-b;(!T||P-w>T[1]-T[0])&&(T=[w,P]),w=null}if(!T||T[1]-T[0]<.2)continue;let E=L=>{let[P,C]=L?T:[T[1],T[0]];return[u?[S,P]:[P,S],u?[S,C]:[C,S]]},I=E(v),R=y[y.length-1];if(R&&n.length&&!g(R,I[0])){let L=E(!v);if(!g(R,L[0]))continue;I=L,v=!v}y.push(I[0],I[1]),v=!v}return y}function Bu(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Ou=i=>Math.atan2(Math.sin(i),Math.cos(i));function Cp(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Ou(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Ap*e),!0)}let a=Math.atan2(r,s),l=Ou(a-i.heading);if(i.heading=Ou(i.heading+Math.sign(l)*Math.min(Math.abs(l),Ap*e)),Math.abs(l)<.35){let c=Math.min(o,_M*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var $r=null,Ip=new Map;function vM(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Ip.get(r);if(s)return s;e&&al(e),$r??=new Br({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),$r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),$r.setSize(t,t,!1),$r.setClearColor(0,0);let o=new oe,a=new Ve,l=De(i.type);if(l?.light)bl(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)zu(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let _={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(xl(o,a,new oe,_),i.type==="fan_ceiling"||i.type==="fan_floor"){let y=o.p.length,v=a.p.length;gl(o,a,i.type,i.w,i.d,i.h);let S=i.type==="fan_ceiling"?i.h*.18:i.h*.78,T=0;for(let w=y+1;w<o.p.length;w+=3)o.p[w]+=S;for(let w=y+2;w<o.p.length;w+=3)o.p[w]+=T;for(let w=v+1;w<a.p.length;w+=3)a.p[w]+=S;for(let w=v+2;w<a.p.length;w+=3)a.p[w]+=T}}let c=new ki,u=new Xt(o.geometry(),new le({vertexColors:!0,color:new rt(n,n,n)})),f=new xn(a.geometry(),new gn({vertexColors:!0,color:new rt(n*1.8,n*1.8,n*1.8)}));c.add(u,f);let h=new Qe().setFromObject(u),d=h.getCenter(new z),g=new Zn(-1,1,1,-1,.01,100);g.position.copy(d).add(new z(.9,.75,1.3).normalize().multiplyScalar(20)),g.lookAt(d),g.updateMatrixWorld();let x=.05;for(let _ of[h.min.x,h.max.x])for(let y of[h.min.y,h.max.y])for(let v of[h.min.z,h.max.z]){let S=new z(_,y,v).applyMatrix4(g.matrixWorldInverse);x=Math.max(x,Math.abs(S.x),Math.abs(S.y))}let m=x*1.12;g.left=-m,g.right=m,g.top=m,g.bottom=-m,g.updateProjectionMatrix(),$r.render(c,g);let p=$r.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),f.geometry.dispose(),f.material.dispose(),Ip.set(r,p),p}var Lp={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},yM=2.4,MM=1.4,SM=.22,Fp=140,Gu=32,wM=500,Dp=160,Up=33,Np=.028,TM=.09,te=2767456,EM=1911110,AM=1,Op=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),ku=450,Bp=125,RM=.08,Hu={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},CM=new rt(1714765);function IM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Wu=class{host;options;renderer;scene=new ki;camera=new $e(38,1,.1,400);controls;labels;root=new Ze;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new xn(new Zt,new gn({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Rr(new Zt,new Hi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Xt(new fs(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=PM(),this.blindTexture=FM(),this.haloTexture=NM(),this.ground=new Xt(new mi(1,1),new le({transparent:!0,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){al(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(l=>l.floor.rooms.some(c=>c.id===t)),n=e?.floor.rooms.find(l=>l.id===t);if(!e||!n)return;let r=hp(e.floor,n,e.ty),s=.72,o=this.controls.view.theta,a=Lu(r,o,s,this.camera.aspect,this.camera.fov*re,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new z).add(a.offset),radius:a.radius,phi:s})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t;let e=new Set(t.filter(r=>r.active&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,s]of this.fanRotors)s.active=e.has(r);this.labelsDirty=!0,this.effectFloors=new Set(t.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(t.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of t){n.add(r.id);let s=this.devicePins.get(r.id);s||(s={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,s),this.labels.append(s.el));let o=s.el;s.icon!==r.icon&&(s.icon=r.icon,o.querySelector(".fp3d-dev-icon").innerHTML=r.icon),s.text!==r.text&&(s.text=r.text,o.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;s.label!==c&&(s.label=c,o.title=r.name,o.setAttribute("aria-label",c)),s.active!==r.active&&(s.active=r.active,o.classList.toggle("fp3d-dev-on",r.active)),s.unavailable!==r.unavailable&&(s.unavailable=r.unavailable,o.classList.toggle("fp3d-dev-na",r.unavailable));let u=r.glow?`rgb(${r.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";s.glow!==u&&(s.glow=u,u?o.style.setProperty("--fp3d-glow",u):o.style.removeProperty("--fp3d-glow"))}for(let[r,s]of this.devicePins)n.has(r)||(s.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])eo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&eo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ze;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let f=new Xt(new xs(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:Se}));f.rotation.x=-Math.PI/2,f.position.set(c.x,o+u*.002,c.z),f.userData={sound:!0,phase:u/3,level:c.level},f.frustumCulled=!1,r.add(f)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let f=s.find(d=>d.id===u);if(!f||f===c)continue;let h=[c.id,f.id].sort().join("|");l.has(h)||(l.add(h),a.push(c.x,o+.02,c.z,f.x,o+.02,f.z))}if(a.length){let c=new Zt;c.setAttribute("position",new kt(a,3));let u=new xn(c,new gn({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Vu(r),o=zp(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=mp(t),n=e?1:0;n===Al.value&&(!e||El.value.equals(new z(...e)))||(Al.value=n,e&&El.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=pp(t);let e=Rl(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new rt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new as(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),f=s.y0+Math.random()*(s.y1-s.y0),h=s.z0+Math.random()*(s.z1-s.z0);o.set([u,f,h],c*3),n&&o.set([u,f-.45,h],c*3+3)}t.geometry.dispose();let l=new Zt;l.setAttribute("position",new kt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let f=l[u+1]-c,h=l[u]+o*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f,l[u+3]=h-o*.05,l[u+4]=f-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let f=l[u+1]-(.9+.6*e.snow)*n,h=l[u]+(o+Math.sin(c+u)*.4)*n;f<r.y0&&(f+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*re,o=(r?t.azimuth+180:t.azimuth)*re,a=Math.max(10,Math.abs(t.elevation))*re,l=this.weatherBox,c=new z((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),f=new z(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(f,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Dp),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}stepFans(t){let e=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=t*(n.type==="fan_ceiling"?.0048:.009);n.type==="fan_ceiling"?n.rotor.rotation.y=(n.rotor.rotation.y-r)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-r)%(Math.PI*2),e=!0}return e}buildFridges(t){let e=new oe;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);kd(e,n,fn(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view;return{theta:t.theta,phi:t.phi,radius:t.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&IM();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Br({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Tl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)},wM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=xp(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes),r=UM(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}t.lightSurface=n;let s=new Zt;s.setAttribute("position",new kt(n.pos,3)),s.setAttribute("color",new kt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new kt(n.fold,1));let o=new Vi(new Uint32Array(n.pos.length/3),1);o.setUsage(Dc),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let r of this.devices){let s=this.glowOf(r);if(r.floorId!==t.floor.id||!s)continue;let o=vp(t.floor,r.x,r.z),a=yp(t.lightZones,o),[l,,c]=r.size??(r.lamp?Hu[r.lamp]:[.3,.3,.3]),u=r.base??0,f={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<AM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[h,d]=r.lamp?f[r.lamp]:[r.y,"omni"],g=r.lightY??h,x=s.color;if(r.lamp==="strip"){let m=(r.rotation??0)*re,p=!!r.upright||Math.abs(r.roll??0)>45;for(let _ of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:u+l*(.5+_),z:r.z,color:x,level:s.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(m)*l*_,y:g,z:r.z+Math.sin(m)*l*_,color:x,level:s.level*.55,kind:p?"omni":d,room:a})}else n.push({x:r.x,y:g,z:r.z,color:x,level:s.level,kind:d,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(f=>{let h=t.geo.openings.find(g=>g.opening.id===f.id);if(h&&Ji(h.opening,h.exterior)==="passage")return 1;let d=t.openings.get(f.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(f=>`${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.kind},${f.level.toFixed(3)},${f.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(f=>f.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length||this.roomTint){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=_p(e,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let f=0;f<l.length/18;f++){let h=!1;for(let d=f*18;d<f*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[u++]=f*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Vn(new le({vertexColors:!0}),this.themeUniform),pattern:LM(this.patternTexture),wall:Vn(Pi(new le({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:Pi(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new le({vertexColors:!0,blending:Ss,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Se,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Vn(Pi(new gn({vertexColors:!0,transparent:!0,blending:Rl(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Pi(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Vn(Pi(new le({vertexColors:!0,side:Se}),t),this.themeUniform),glass:Pi(new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se}),t),blinds:Vn(Pi(new le({map:this.blindTexture,vertexColors:!0,side:Se}),t),this.themeUniform),flow:DM(this.flowTime),solarLive:Uu(this.flowTime),lamps:Vn(new le({vertexColors:!0}),this.themeUniform),halos:new Hi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se}),screens:new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Eu(n)?.id===s.id?o.filter(st=>st.face===Tu).map(st=>({field:st,face:qd(n,st)})):[],l=o.filter(st=>st.face.startsWith(`wall:${s.id}:`));if(l.length){let st=new Map(Xd(n,s.id).map(ut=>[ut.key,ut]));for(let ut of l){let mt=st.get(ut.face);mt&&a.push({field:ut,face:mt})}}let u=(n.settings.roof.sections??[]).some(st=>!st.open&&st.base<s.elevation+s.height-.05)?(st,ut)=>{let mt=gd(n,st,ut);return mt===null?null:mt-s.elevation}:void 0,f=op(Fu(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,ap(n.floors,s),a,u),h={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(h),g=new Ze,x=new Xt(f.floor,d.floor),m=new Xt(f.shadow,d.shadow);m.renderOrder=1;let p=new Xt(f.floor,d.pattern);p.renderOrder=2;let _=new Xt(new Zt,d.glow);_.renderOrder=3,_.visible=!1;let y=new Xt(new Zt,d.frames),v=new Xt(new Zt,d.blinds),S=new Xt(new Zt,d.glass);S.renderOrder=4;let T=new Xt(new Zt,d.lamps);T.visible=!1;let w=new Xt(new Zt,d.cones);w.visible=!1,w.renderOrder=3;let b=new Rr(new Zt,d.halos);b.visible=!1,b.renderOrder=7;let E=new Xt(new Zt,d.cones);E.visible=!1,E.renderOrder=7;let I=new Xt(new Zt,d.cones);I.visible=!1,I.renderOrder=7;let R=new Xt(new Zt,d.lamps);R.visible=!1;let L=new Xt(new Zt,d.screens);L.visible=!1,L.renderOrder=5;let P=new Xt(new Zt,d.flow);P.renderOrder=5,P.frustumCulled=!1;let C=Du(a,s.elevation),D=C?new Xt(C.geometry,d.solarLive):null;D&&(D.renderOrder=6,eo(C,this.solarLevels));for(let st of[y,v,S])st.frustumCulled=!1;let U=new Xt(f.walls,d.glassWall),O=new Xt(f.walls,d.wall);U.renderOrder=6,g.add(x,m,p,_,O,new xn(f.lines,d.lines),y,v,S,P,T,w,b,E,I,R,L,U,...D?[D]:[]);for(let st of s.furniture){if(st.type!=="fan_ceiling"&&st.type!=="fan_floor")continue;let ut=new oe,mt=new Ve;gl(ut,mt,st.type,st.w,st.d,st.h);let Y=new Ze;Y.add(new Xt(ut.geometry(),d.wall),new xn(mt.geometry(),d.lines));let $=new Ze,ct=st.rotation*re;$.position.set(st.x,fn(s,st),st.z),$.rotation.y=-ct,Y.position.set(0,st.type==="fan_ceiling"?st.h*.18:st.h*.78,0),$.add(Y),g.add($);let Tt=this.devices.some(ft=>ft.furnitureId===st.id&&ft.active);this.fanRotors.set(st.id,{rotor:Y,type:st.type,active:Tt})}this.root.add(g);let V=document.createElement("button");V.className="fp3d-pin fp3d-pin-floor",V.dataset.floor=s.id;let B=document.createElement("b");B.textContent=s.name||"\u2013";let k=document.createElement("span");k.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",V.append(B,k),V.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(V);let G=t.get(s.id),nt=[],Q=null;for(let st of s.rooms){let ut=document.createElement("button");ut.className="fp3d-pin",ut.dataset.room=st.id,ut.dataset.floor=s.id,this.fillRoomPin(ut,st.name,this.roomInfo.get(st.id)),ut.addEventListener("click",()=>this.options.onRoomTap?.(s.id,st.id)),this.labels.append(ut);let[mt,Y]=od(st.points);nt.push({pin:ut,room:st,cx:mt,cz:Y});for(let[$,ct]of st.points)Q??={x0:$,x1:$,z0:ct,z1:ct},Q.x0=Math.min(Q.x0,$),Q.x1=Math.max(Q.x1,$),Q.z0=Math.min(Q.z0,ct),Q.z1=Math.max(Q.z1,ct)}this.floors.push({floor:s,rank:r.indexOf(s),group:g,geo:f,floorMesh:x,shadowMesh:m,patternMesh:p,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:S,blindsMesh:v,flowMesh:P,solarMesh:D,solarLive:C,lampMesh:T,sunMesh:w,sunSig:"",haloMesh:b,coneMesh:E,trailMesh:I,fridgeMesh:R,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:O,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:Q,roomPins:nt,labelSize:null,materials:d,mask:h,openings:new Map,y:G?.y??0,o:G?.o??1,ty:0,to:1,appliedO:-1,label:V})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Il);this.buildOpenings(s),this.buildFlows(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(f=>f.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?tp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Xr(this.building).map(f=>[f.key,f])),n=this.building.settings.roof?.solar??[],r=Uu(this.flowTime),s=[],o=new Ze,a=Vn(new le({vertexColors:!0,transparent:!0,side:Se}),this.themeUniform),l=Vn(new gn({vertexColors:!0,transparent:!0,blending:Rl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Vn(new le({vertexColors:!0,transparent:!0,side:Se,depthWrite:!1}),this.themeUniform),u=t.map(f=>{let h=new Ze;h.add(new Xt(f.solid.geometry(),a),new xn(f.lines.geometry(),l)),f.glass.count&&h.add(new Xt(f.glass.geometry(),c));let d=n.flatMap(x=>{let m=e.get(x.face);return m&&(m.section?f.sections?.includes(m.section):f===t[0])?[{face:m,field:x}]:[]}),g=Du(d,f.floor.elevation+f.base);if(g){let x=new Xt(g.geometry,r);x.renderOrder=9,h.add(x),s.push(g),eo(g,this.solarLevels)}return h.renderOrder=8,o.add(h),{group:h,floorId:f.floor.id,base:f.base,lift:f.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:u,solid:a,lines:l,glass:c,live:r,lives:s},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,s=1-Math.exp(-t/Fp),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*MM:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:SM)):r=this.explode?n.rank*yM:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Fp);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Dp);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Il,c=(h,d)=>(h??null)===(d??null)||typeof h=="number"&&typeof d=="number"&&Math.abs(h-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},f=!1;for(let h of["open","open2","tilt","tilt2"]){let d=l[h]??0,g=a[h]??0,x=d-g;Math.abs(x)<.003?u[h]=d:(u[h]=g+x*n,f=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,f=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=f}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new rt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*RM+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=e)return 0;let h=f-e,d=h>ku?.5+.5*Math.sin(h/140):h/ku;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,f)=>`${n(u.id)},${o[f]?`${o[f].level.toFixed(3)},${o[f].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new oe,f=[],h=[],d=new Map,g=t.floor.height;for(let x of r){let m=x.lamp==="strip"?(x.base??g)>Math.min(t.floor.cut_height,g):x.lamp?Op.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||m&&this.wallMode==="cut")continue;let p=u.count,_=x.pack?De(x.pack):void 0,[y,v,S]=x.size??[.3,.3,.3];x.model?Vd(u,x.model,x.x,x.model==="camera_ceiling"?g:x.y,x.z,x.rotation??0):_?bl(u,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:v,h:S,mirror:x.mirror},x.base??0,65280):zu(u,{...x,lamp:x.lamp},g,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&f.push({id:x.id,start:p,end:u.count}),x.furnitureId&&h.push({id:x.furnitureId,start:p,end:u.count})}t.lampTris=f,t.lampFurnTris=h,t.lampRanges=d,t.lampShade=jf(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,f)=>{let h=t.lampRanges.get(u.furnitureId??u.id);if(!h)return;let d=o[f],g=d?.55+.45*d.level:0,x=d?new rt(...d.color.map(_=>Math.min(1,_*g))):new rt(EM),m=n(u.id);m>0&&x.lerp(new rt(1,1,1),.7*m);let p=new rt(x.getHex());td(c,t.lampShade,h,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.sun,n=(this.building?.settings.north??0)*re,r=this.weather?.cloud??0,s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(s===t.sunSig)return;t.sunSig=s;let o=new oe;if(e&&e.elevation>2&&r<.97){let a=Math.min(1,e.elevation/12)*(1-.8*r),l=e.elevation*re,c=e.azimuth*re,u=[Math.sin(n+c),-Math.cos(n+c)],f=1/Math.tan(l);for(let h of t.geo.openings){if(h.opening.type!=="window"||!h.exterior)continue;let d=[-h.toRoom[0],-h.toRoom[1]],g=d[0]*u[0]+d[1]*u[1];if(g<.05)continue;let x=t.openings.get(h.opening.id),m=h.top-(x?.cover??0)*(h.top-h.sill);if(m-h.sill<.05)continue;let p=(b,E)=>{let I=Math.min(7,E*f);return[h.start[0]+h.axis[0]*b+h.toRoom[0]*h.faceRoom-u[0]*I,.02,h.start[1]+h.axis[1]*b+h.toRoom[1]*h.faceRoom-u[1]*I]},_=.14*a*Math.min(1,g*1.5),y=new rt(1*_,.82*_,.55*_),v=y.clone().multiplyScalar(.45),S=t.floor.rooms.find(b=>b.id===h.opening.room_id);if(!S||S.points.length<3)continue;let T=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),w=Math.max(1,Math.ceil(h.width/.3));for(let b=0;b<T;b++){let E=h.sill+(m-h.sill)*b/T,I=h.sill+(m-h.sill)*(b+1)/T,R=b/T,L=(b+1)/T,P=y.clone().lerp(v,R),C=y.clone().lerp(v,L);for(let D=0;D<w;D++){let U=h.width*D/w,O=h.width*(D+1)/w,V=p((U+O)/2,(E+I)/2);if(!ce([V[0],V[2]],S.points))continue;let B=p(U,E),k=p(O,E),G=p(O,I),nt=p(U,I);o.tri(B,k,G,P,P,C),o.tri(B,G,nt,P,C,C)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new oe,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*re,_=[-Math.sin(p),Math.cos(p)],y=l.model==="camera_ceiling",v=l.reach??(y?3:4.5),S=(l.fov??(y?360:90))*re/2,T=l.motion?new rt(.9,.12,.16):new rt(.04,.22,.28),w=new rt(0,0,0),b=Math.max(4,Math.round(S/.15)),E=.015,I=t.geo.walls2d,R=C=>{let D=_[0]*Math.cos(C)-_[1]*Math.sin(C),U=_[1]*Math.cos(C)+_[0]*Math.sin(C),O=v;for(let V of I){let B=V.b[0]-V.a[0],k=V.b[1]-V.a[1],G=D*k-U*B;if(Math.abs(G)<1e-9)continue;let nt=((V.a[0]-l.x)*k-(V.a[1]-l.z)*B)/G,Q=((V.a[0]-l.x)*U-(V.a[1]-l.z)*D)/G;nt>.45&&nt<O&&Q>=0&&Q<=1&&(O=nt)}return O},L=C=>{let D=R(C);return[l.x+(_[0]*Math.cos(C)-_[1]*Math.sin(C))*D,E,l.z+(_[1]*Math.cos(C)+_[0]*Math.sin(C))*D]},P=s.count;for(let C=0;C<b;C++)s.tri([l.x,E,l.z],L(-S+2*S*(C+1)/b),L(-S+2*S*C/b),T,w,w);o.push({id:l.id,start:P,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Op.has(l.lamp)&&this.wallMode==="cut")continue;let[u,f,h]=l.size??Hu[l.lamp],d=l.base??0,g=(l.rotation??0)*re,x={ceiling:e-.07,downlight:e-.03,spot:e-h,panel:e-.03,pendant:Math.max(.4,e-h)+.08,floor:d+h-.15,uplight:d+h,table:d+h-.09,wall:d+h/2,strip:d+Math.max(.02,h)-.01,bollard:d+h-.08,garden:d+h-.03}[l.lamp],m=(p,_,y=1)=>{n.push(p,x,_),r.push(...c.color.map(v=>v*c.level*.7*y))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+p),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6))):m(l.x+Math.cos(g)*u*p,l.z+Math.sin(g)*u*p,.6);else l.lamp==="wall"?m(l.x-Math.sin(g)*(f/2+.05),l.z+Math.cos(g)*(f/2+.05)):m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new rt(...c.color.map(T=>T*.09*c.level)),_=new rt(0,0,0),y=Math.max(.03,u/2),v=.45+.35*c.level,S=16;for(let T=0;T<S;T++){let w=T/S*Math.PI*2,b=(T+1)/S*Math.PI*2,E=[l.x+Math.cos(w)*y,x,l.z+Math.sin(w)*y],I=[l.x+Math.cos(b)*y,x,l.z+Math.sin(b)*y],R=[l.x+Math.cos(w)*v,.02,l.z+Math.sin(w)*v],L=[l.x+Math.cos(b)*v,.02,l.z+Math.sin(b)*v];s.tri(E,R,L,p,_,_),s.tri(E,L,I,p,_,p)}}}let a=new Zt;a.setAttribute("position",new kt(n,3)),a.setAttribute("color",new kt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Fu(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new oe;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*re,l=Math.cos(a),c=Math.sin(a),u=(v,S,T)=>[s.x+v*l-T*c,S,s.z+v*c+T*l];if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),S=Math.max(.05,s.d),T=Math.max(.005,s.h),w=fn(t.floor,s);for(let b of o.faces){if(b.part==="cabin"){let B=De(s.type),k=G=>G.color.toLowerCase()==="#13283a"||G.color==="glass";if(B&&B.parts.some(k)){let G=new rt(...b.color.map(nt=>Math.min(1,nt*(.3+.5*b.level))));Su(r,B,s,w,G.getHex(),k);continue}}if(b.part==="band"||b.part==="cabin"){let B=b.part==="cabin",k=w+T*(B?.6:.42),G=B?w+T*.86:k+.07,nt=new rt(...b.color.map(mt=>Math.min(1,mt*(.3+.45*b.level)))),Q=Math.abs(v)/2+(B?.012:.02),st=S/2+(B?.012:.02),ut=[[-Q,-st],[Q,-st],[Q,st],[-Q,st]];for(let mt=0;mt<4;mt++){let Y=ut[mt],$=ut[(mt+1)%4],ct=u(Y[0]*Math.sign(v),k,Y[1]),Tt=u($[0]*Math.sign(v),k,$[1]),ft=u($[0]*Math.sign(v),G,$[1]),zt=u(Y[0]*Math.sign(v),G,Y[1]);r.tri(ct,Tt,ft,nt),r.tri(ct,ft,zt,nt)}continue}let E=b.part==="right"?.03:-Math.abs(v)/2+.03,I=b.part==="left"?-.03:Math.abs(v)/2-.03,R=w+(b.part==="bottom"?T*.45:T)+.006,L=new rt(...b.color.map(B=>Math.min(1,B*(.35+.65*b.level)))),P=new rt(0,0,0),C=(B,k,G=R)=>u(B*Math.sign(v),G,k),D=[C(E,-S/2+.03),C(I,-S/2+.03),C(I,S/2-.03),C(E,S/2-.03)];r.tri(D[0],D[2],D[1],L),r.tri(D[0],D[3],D[2],L);let U=.12+.1*b.level,O=L.clone().multiplyScalar(.5),V=[C(E-U,-S/2-U,R+.004),C(I+U,-S/2-U,R+.004),C(I+U,S/2+U,R+.004),C(E-U,S/2+U,R+.004)];for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(D[B],V[k],V[B],O,P,P),r.tri(D[B],D[k],V[k],O,O,P)}}continue}let f=De(s.type);if(f&&!f.light&&o.ring&&f.parts.some(v=>v.glow)){let v=new rt(...o.color.map(S=>Math.min(1,S*(.45+.55*o.level))));Su(r,f,s,fn(t.floor,s),v.getHex())}let h=yu(s,t.floor);if(!h)continue;let d=new rt(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),g=new rt(0,0,0),x=h.z+.004;if(r.tri(u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),d),r.tri(u(h.x0,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x),d),o.plain)continue;let m=.18+.12*o.level,p=d.clone().multiplyScalar(.5),_=[u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x)],y=[u(h.x0-m,h.y0-m,x+.01),u(h.x1+m,h.y0-m,x+.01),u(h.x1+m,h.y1+m,x+.01),u(h.x0-m,h.y1+m,x+.01)];for(let v=0;v<4;v++){let S=(v+1)%4;r.tri(_[v],y[v],y[S],p,g,g),r.tri(_[v],y[S],_[S],p,g,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=yu(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Xt(new mi(1,1),new le({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new _s().load(o.picture,f=>{if(t.screenPics.get(r)!==u){f.dispose();return}f.colorSpace=Ce,u.texture=f;let h=u.mesh.material;h.map=f,h.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,f),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,f=e.rotation*re,h=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-f,0),t.position.set(e.x+h*Math.cos(f)-d*Math.sin(f),(n.y0+n.y1)/2,e.z+h*Math.sin(f)+d*Math.cos(f))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(Vu).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let f=this.flowPhase.get(Vu(u))??{speed:zp(u.power),offset:0},h=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(_=>_*h),g=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(g<1e-4)continue;let x=[(u.b[0]-u.a[0])/g,(u.b[1]-u.a[1])/g,(u.b[2]-u.a[2])/g],m=[];if(Math.abs(x[1])<.5){let _=Math.hypot(x[0],x[2])||1;m.push([-x[2]/_,0,x[0]/_])}else m.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[Np*1.4,1]]:[[TM,.25],[Np,1]];for(let[_,y]of p)for(let v of m){let S=_/2,T=(b,E)=>[b[0]+v[0]*S*E,b[1]+v[1]*S*E,b[2]+v[2]*S*E],w=[[T(u.a,-1),u.dist,0],[T(u.b,-1),u.dist+g,0],[T(u.b,1),u.dist+g,1],[T(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[E,I,R]=w[b];n.push(E[0],E[1],E[2]),r.push(d[0]*y,d[1]*y,d[2]*y),s.push(I,R),o.push(f.speed),a.push(f.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,f]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let h=l.getAttribute(u);h.array.set(f),h.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Zt;c.setAttribute("position",new kt(n,3)),c.setAttribute("color",new kt(r,3)),c.setAttribute("uv",new kt(s,2)),c.setAttribute("flowSpeed",new kt(o,1)),c.setAttribute("flowOffset",new kt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Ep(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new rt(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new rt(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(CM,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=up(this.activeFloors());e.isEmpty()&&e.set(new z(-4,0,-4),new z(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new z),r=e.getSize(new z),s=this.startView,o=this.floorId===null,a=s?s.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),u=c<1?1.12:1.06,f=fp(e,a,c,this.camera.fov*re,u),h=s?s.theta:f.theta,d=Lu(e,h,a,this.camera.aspect,this.camera.fov*re,l),g=Math.max(8,d.radius);this.controls.maxRadius=Math.max(40,g*3),s&&o?n.y=e.min.y+r.y*(this.houseView?.45:.3):n.add(d.offset),this.floorId===null&&(this.houseRadius=g),s&&o&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,s.radius*1.5)),this.controls.flyTo({target:n,radius:s&&o?s.radius:g,phi:a,theta:h},t)}cameraFrame(){let t=this.size.w<700?12:18,e=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:t);return{width:this.size.w,height:this.size.h,left:e,right:t,top:t,bottom:t}}placeGround(){let t=new Qe,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new z(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new z(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=OM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new z),r=t.getSize(new z),s=Gu*Math.ceil((Math.max(r.x,r.z)+16)/Gu);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Ii-.02,n.z)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new ys;return r.setFromCamera(new $t(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let h=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??jt;if(h!==jt&&Math.floor(h/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),f=u?this.pickOpenings.get(u):void 0;if(f)return{entity:f}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),f=u?this.pickFurniture.get(u):void 0;if(f)return{entity:f};if(a.face&&!u){let h=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(h/16),g=h%16,x=this.wallMode==="cut"&&d===0,m=(c.mask.glass.value&1<<g)!==0;if(!x){let p=n.ray.direction,_=Math.hypot(p.x,p.z)||1,y=[a.point.x-p.x/_*.3,a.point.z-p.z/_*.3],v=c.floor.rooms.find(S=>S.points.length>=3&&ce(y,S.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!m&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+ku),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(s,!1)){if(o.faceIndex==null)continue;let a=r.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let r=this.rayAt(e,n),s=t.floor.elevation+t.y,o=r.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(s-r.ray.origin.y)/o.y;return a<=0?null:[r.ray.origin.x+o.x*a,r.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(f=>f.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(f=>f.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(f=>f.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e)}grabItem(t,e,n,r){let s=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,r);return!s||!o?!1:s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(h=>h.id===n.id),u=l&&this.floorPoint(l,t,e);if(!l||!c||!u)return;let f=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/f)*f,n.z=c.z=Math.round((u[1]+n.offset[1])/f)*f,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=this.floorPoint(s,t,e);if(!o)return;let a=this.building?.settings.grid??.05;r.x=Math.round((o[0]+r.offset[0])/a)*a,r.z=Math.round((o[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(p=>p.floor.furniture.some(_=>_.id===t)):void 0,n=e?.floor.furniture.find(p=>p.id===t);if(!e||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=De(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?fn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:fn(e.floor,n),u=n.rotation*re,f=Math.cos(u),h=Math.sin(u),d=(p,_,y)=>[r+p*f-_*h,y,s+p*h+_*f],g=new Ve,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],m=new rt(.25,.9,1);for(let p=0;p<4;p++){let[_,y]=x[p],[v,S]=x[(p+1)%4];g.seg(d(_,y,c+.01),d(v,S,c+.01),m),g.seg(d(_,y,c+l),d(v,S,c+l),m),g.seg(d(_,y,c+.01),d(_,y,c+l),m)}g.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new rt(1,1,1)),this.ghost=new xn(g.geometry(),new gn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ke(s,o);a.texture.colorSpace=Ce;let l=new Zn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,f=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),g=document.createElement("canvas");g.width=s,g.height=o;let x=g.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let P of this.floors)P.group.visible=P===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let _=p.floor.rooms.flatMap(P=>P.points),y=p.floor.elevation,v=new Qe(new z(Math.min(..._.map(P=>P[0]))-.3,y,Math.min(..._.map(P=>P[1]))-.3),new z(Math.max(..._.map(P=>P[0]))+.3,y+Math.min(p.floor.cut_height,p.floor.height),Math.max(..._.map(P=>P[1]))+.3)),S=v.getCenter(new z),T=-.6,w=.8,b=new z(Math.sin(w)*Math.sin(T),Math.cos(w),Math.sin(w)*Math.cos(T));l.position.copy(S).addScaledVector(b,100),l.lookAt(S),l.updateMatrixWorld();let E=.5,I=.5;for(let P of[v.min.x,v.max.x])for(let C of[v.min.y,v.max.y])for(let D of[v.min.z,v.max.z]){let U=new z(P,C,D).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(U.x)),I=Math.max(I,Math.abs(U.y))}let R=s/o;E/I>R?I=E/R:E=I*R,l.left=-E*1.05,l.right=E*1.05,l.top=I*1.05,l.bottom=-I*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let L=x.createImageData(s,o);for(let P=0;P<o;P++)L.data.set(d.subarray((o-1-P)*s*4,(o-P)*s*4),P*s*4);x.putImageData(L,0,0),m.push({floorId:p.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=f),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Rp(n.room,void 0,void 0,n.obstacles):Bu(n.rest),l=a.length?a:Bu(n.rest),c=0;l.forEach((u,f)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=f)}),r.motion.path=l,r.motion.next=c,n.room&&!ce(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Lp[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new oe,s=(a,l,c,u,f)=>{let h=[];for(let d=0;d<20;d++)h.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);we(r,h,l,c,u,f,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new le({vertexColors:!0});let o=new oe;we(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ze,n=new le({color:Lp[t.mode]});return e.add(new Xt(this.robotGeo,this.robotMat),new Xt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Cp(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t){let e=s=>new rt(.25-.2*s,.95-.83*s,1-.7*s),n=new rt(0,0,0),r=.02;for(let s of this.floors){let o=new oe,a=null;for(let l of t){if(l.floorId!==s.floor.id)continue;let c=e(l.age);if(a){let u=Math.hypot(l.x-a.x,l.z-a.z)||1,f=-(l.z-a.z)/u*.06,h=(l.x-a.x)/u*.06,d=e(a.age);o.tri([a.x+f,r,a.z+h],[l.x+f,r,l.z+h],[l.x-f,r,l.z-h],d,c,c),o.tri([a.x+f,r,a.z+h],[l.x-f,r,l.z-h],[a.x-f,r,a.z-h],d,c,d)}for(let u=0;u<12;u++){let f=u/12*Math.PI*2,h=(u+1)/12*Math.PI*2;o.tri([l.x,r,l.z],[l.x+Math.cos(h)*.22,r,l.z+Math.sin(h)*.22],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],c,n,n)}a=l}s.trailMesh.geometry.dispose(),s.trailMesh.geometry=o.geometry(),s.trailMesh.visible=o.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*re,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*re)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new z(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new z(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new z(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=this.stepFans(e),l=!1;if(this.flashes.size){let g=new Set;for(let[x,m]of this.flashes){let p=this.deviceFloor.get(x);p&&g.add(p),m<=t&&this.flashes.delete(x)}l=this.flashes.size>0;for(let x of this.floors)g.has(x.floor.id)&&this.buildLamps(x)}let c=this.placeRoof(e),u=this.stepRobots(t),f=this.stepWeather(t),h=r||s||o||a||l||c,d=[];if(r&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("fans"),l&&d.push("flash"),c&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),u&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let g=this.lowQuality?2*Bp:Bp;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},g)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Up:Up))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,f)=>{let h=u?u[0]*n/s+u[1]*r/s>=.25:a;!l&&h&&(c|=1<<f)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new z,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(x,u,m).project(this.camera);let p=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:_}),(!c||p>c.x)&&(c={x:p,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let f=o.labelSize.w,h=8+this.labelInset,d=l.x-f-14,g=l.y;d<h&&this.labelInset&&(d=c.x+14,g=c.y),s.push({fv:o,left:Math.max(h,Math.min(t-f-8,d)),y:g,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.floorId!==null&&(o.views!=="all"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new z(o.p[0],o.p[1]+(l?.y??0)+(o.roof?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),f=u.length(),h=u.normalize().dot(new z(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,f)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,g,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new z,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function PM(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let f of[u,u+256/2])n(o+f+.75,c,o+f+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new di(t);return s.flipY=!1,s.wrapS=ln,s.wrapT=ln,s.anisotropy=4,s.colorSpace=Ce,s}function LM(i){let t=new le({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function FM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new di(i);return e.wrapS=zi,e.wrapT=zi,e.colorSpace=Ce,e}function Vu(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function zp(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function DM(i){let t=new le({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function UM(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function NM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new di(t);return r.colorSpace=Ce,r}function OM(){let t=Gu,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new di(e);return s.anisotropy=4,s.colorSpace=Ce,s}function rE(i,t){return new Wu(i,t)}function zu(i,t,e,n){let[r,s,o]=t.size??Hu[t.lamp],a=t.base??0,l=(t.rotation??0)*re,c=Math.cos(l),u=Math.sin(l),f=(x,m)=>[t.x+x*c-m*u,t.z+x*u+m*c],h=(x,m,p,_,y,v=14)=>{let S=[];for(let T=0;T<v;T++){let w=T/v*Math.PI*2;S.push([t.x+Math.cos(w)*x,t.z+Math.sin(w)*x])}we(i,S,m,p,_,y,{aoFrom:0,bottom:!0})},d=(x,m,p,_,y,v,S,T=S)=>we(i,[f(x,p),f(m,p),f(m,_),f(x,_)],y,v,S,T,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":h(g*.25,e-.04,e,te,te,8),h(g,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);h(.06,e-.02,e,te,te,8);let m=t.variant==="globe"?x+2*g:t.variant==="drum"?x+.24:x+.2;if(h(.008,m,e-.02,te,te,5),t.variant==="globe")for(let _=0;_<7;_++){let y=Math.PI*(_/7),v=Math.PI*((_+1)/7);h(g*Math.max(.2,Math.sin((y+v)/2)),x+g-g*Math.cos(y),x+g-g*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)h(g*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?h(g,x,x+.24,n,n,18):(h(g*.35,x+.14,x+.2,n,n,12),h(g,x,x+.14,n,n,16));break}case"downlight":h(g,e-.012,e,te,te,12),h(g*.7,e-.02,e-.012,n,n,12);break;case"spot":h(g*.6,e-.02,e,te,te,10),h(g,e-Math.max(.06,o),e-.02,te,te,12),h(g*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,te,te),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":h(Math.max(.1,g*.6),a,a+.03,te,te),h(.014,a+.03,a+o-.12,te,te,6),h(g,a+o-.14,a+o-.02,te,te),h(g*.92,a+o-.02,a+o,n,n);break;case"bollard":h(g,a,a+o-.14,te,te,10),h(g*.9,a+o-.14,a+o-.03,n,n,10),h(g*1.1,a+o-.03,a+o,te,te,10);break;case"garden":h(.012,a,a+o-.08,te,te,5),h(g,a+o-.08,a+o-.01,te,te,10),h(g*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,g*.7),a,a+.03,te,te),h(.014,a+.03,a+o-.28,te,te,6),h(g,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,g*.55),a,a+.03,te,te),h(.012,a+.03,a+o-.16,te,te,6),h(g,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??cl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,te),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),m=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,m-x,m,n);break}let p=(t.roll??0)*re,_=Math.cos(p),y=Math.sin(p),v=t.upright?a+r/2:m-x/2,S=(I,R,L)=>{let P=I,C=R*_-L*y,D=R*y+L*_;return t.upright&&([P,C]=[-C,P]),[t.x+P*c-D*u,v+C,t.z+P*u+D*c]},T=[S(-r/2,-x/2,-s/2),S(r/2,-x/2,-s/2),S(r/2,-x/2,s/2),S(-r/2,-x/2,s/2),S(-r/2,x/2,-s/2),S(r/2,x/2,-s/2),S(r/2,x/2,s/2),S(-r/2,x/2,s/2)],w=new rt(n),b=[t.x,v,t.z],E=(I,R,L,P)=>{let[C,D,U]=[T[I],T[R],T[L]],O=[(D[1]-C[1])*(U[2]-C[2])-(D[2]-C[2])*(U[1]-C[1]),(D[2]-C[2])*(U[0]-C[0])-(D[0]-C[0])*(U[2]-C[2]),(D[0]-C[0])*(U[1]-C[1])-(D[1]-C[1])*(U[0]-C[0])],V=[C[0]-b[0],C[1]-b[1],C[2]-b[2]],B=O[0]*V[0]+O[1]*V[1]+O[2]*V[2]<0,[k,G,nt,Q]=B?[T[P],T[L],T[R],T[I]]:[T[I],T[R],T[L],T[P]];i.tri(k,G,nt,w,w,w),i.tri(k,nt,Q,w,w,w)};E(0,1,2,3),E(4,5,6,7),E(0,1,5,4),E(1,2,6,5),E(2,3,7,6),E(3,0,4,7);break}}}export{Wu as FloorplanViewer,rE as createViewer,vM as furniturePreview,IM as isLowEnd,zu as pushLampModel};
