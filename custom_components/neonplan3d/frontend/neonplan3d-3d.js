var of=0,Dc=1,sf=2;var Do=1,af=2,Gr=3,Ii=0,rn=1,Mt=2,Gn=0,Pi=1,Lt=2,Uc=3,Uo=4,lf=5;var er=100,cf=101,uf=102,hf=103,ff=104,df=200,pf=201,mf=202,gf=203,Nc=204,Oc=205,_f=206,bf=207,xf=208,yf=209,vf=210,Mf=211,Sf=212,Tf=213,wf=214,$s=0,Zs=1,Ks=2,Fr=3,Js=4,Qs=5,js=6,ea=7,Bc=0,Ef=1,Af=2,Cn=0,zc=1,kc=2,Vc=3,Gc=4,Hc=5,Wc=6,Xc=7;var Yc=300,Fi=301,tr=302,Ra=303,Ca=304,No=306,$i=1e3,hn=1001,ta=1002,kt=1003,Rf=1004;var Oo=1005;var Ht=1006,Ia=1007;var Li=1008;var pn=1009,qc=1010,$c=1011,Hr=1012,Pa=1013,In=1014,Pn=1015,Fn=1016,Fa=1017,La=1018,Wr=1020,Zc=35902,Kc=35899,Jc=1021,Qc=1022,vn=1023,zn=1026,Di=1027,jc=1028,Da=1029,Ui=1030,Ua=1031;var Na=1033,Bo=33776,zo=33777,ko=33778,Vo=33779,Oa=35840,Ba=35841,za=35842,ka=35843,Va=36196,Ga=37492,Ha=37496,Wa=37488,Xa=37489,Go=37490,Ya=37491,qa=37808,$a=37809,Za=37810,Ka=37811,Ja=37812,Qa=37813,ja=37814,el=37815,tl=37816,nl=37817,il=37818,rl=37819,ol=37820,sl=37821,al=36492,ll=36494,cl=36495,ul=36283,hl=36284,Ho=36285,fl=36286;var po=2300,na=2301,Xs=2302,Sc=2303,Tc=2400,wc=2401,Ec=2402;var Cf=3200;var eu=0,If=1,si="",Ct="srgb",mo="srgb-linear",go="linear",dt="srgb";var Ys=7680;var Pf=519,Ff=512,Lf=513,Df=514,dl=515,Uf=516,Nf=517,pl=518,Of=519,Bf=35044,tu=35048;var nu="300 es",Rn=2e3,_o=2001;function im(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zf(){let i=Lr("canvas");return i.style.display="block",i}var Ah={},Dr=null;function iu(...i){let e="THREE."+i.shift();Dr?Dr("log",e,...i):console.log(e,...i)}function kf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=kf(i);let e="THREE."+i.shift();if(Dr)Dr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ke(...i){i=kf(i);let e="THREE."+i.shift();if(Dr)Dr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){let e=i.join(" ");e in Ah||(Ah[e]=!0,ze(...i))}function Vf(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var Gf={[$s]:Zs,[Ks]:js,[Js]:ea,[Fr]:Qs,[Zs]:$s,[js]:Ks,[ea]:Js,[Qs]:Fr},kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ec=Math.PI/180,ia=180/Math.PI;function Wo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function om(i,e){return(i%e+e)%e}function tc(i,e,t){return(1-t)*i+t*e}function so(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lu=class lu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lu.prototype.isVector2=!0;var Je=lu,Vn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=o[s+0],p=o[s+1],g=o[s+2],b=o[s+3];if(f!==b||l!==h||c!==p||u!==g){let _=l*h+c*p+u*g+f*b;_<0&&(h=-h,p=-p,g=-g,b=-b,_=-_);let m=1-a;if(_<.9995){let y=Math.acos(_),M=Math.sin(y);m=Math.sin(m*y)/M,a=Math.sin(a*y)/M,l=l*m+h*a,c=c*m+p*a,u=u*m+g*a,f=f*m+b*a}else{l=l*m+h*a,c=c*m+p*a,u=u*m+g*a,f=f*m+b*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=o[s],h=o[s+1],p=o[s+2],g=o[s+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(o/2),h=l(n/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cu=class cu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),f=2*(o*n-s*t);return this.x=t+l*c+s*f-a*u,this.y=n+l*u+a*c-o*f,this.z=r+l*f+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cu.prototype.isVector3=!0;var H=cu,nc=new H,Rh=new Vn,uu=class uu{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],b=r[0],_=r[3],m=r[6],y=r[1],M=r[4],v=r[7],S=r[2],w=r[5],A=r[8];return o[0]=s*b+a*y+l*S,o[3]=s*_+a*M+l*w,o[6]=s*m+a*v+l*A,o[1]=c*b+u*y+f*S,o[4]=c*_+u*M+f*w,o[7]=c*m+u*v+f*A,o[2]=h*b+p*y+g*S,o[5]=h*_+p*M+g*w,o[8]=h*m+p*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,h=a*l-u*o,p=c*o-s*l,g=t*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=f*b,e[1]=(r*c-u*n)*b,e[2]=(a*n-r*s)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*o-a*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(s*t-n*o)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uu.prototype.isMatrix3=!0;var We=uu,ic=new We,Ch=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){let i={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===dt&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===dt&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?go:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mo]:{primaries:e,whitePoint:n,transfer:go,toXYZ:Ch,fromXYZ:Ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Ch,fromXYZ:Ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var tt=sm();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,ra=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_r===void 0&&(_r=Lr("canvas")),_r.width=e.width,_r.height=e.height;let r=_r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_r}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ii(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},am=0,Ur=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(rc(r[s].image)):o.push(rc(r[s]))}else o=rc(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var lm=0,oc=new H,Qt=class i extends kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hn,r=hn,o=Ht,s=Li,a=vn,l=pn,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Wo(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Yc;Qt.DEFAULT_ANISOTROPY=1;var hu=class hu{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],b=l[2],_=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,S=(m+1)/2,w=(u+h)/4,A=(f+b)/4,x=(g+_)/4;return M>v&&M>S?M<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(M),r=w/n,o=A/n):v>S?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=w/r,o=x/r):S<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),n=A/o,r=x/o),this.set(n,r,o,t),this}let y=Math.sqrt((_-g)*(_-g)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(_-g)/y,this.y=(f-b)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;var At=hu,oa=class extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new Qt(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ur(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bo=class extends Qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sa=class extends Qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Aa=class Aa{constructor(e,t,n,r,o,s,a,l,c,u,f,h,p,g,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,f,h,p,g,b,_)}set(e,t,n,r,o,s,a,l,c,u,f,h,p,g,b,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=g,m[11]=b,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),o=1/br.setFromMatrixColumn(e,1).length(),s=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){let h=s*u,p=s*f,g=a*u,b=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-b*c,t[9]=-a*l,t[2]=b-h*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,g=c*u,b=c*f;t[0]=h+b*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-a,t[2]=p*a-g,t[6]=b+h*a,t[10]=s*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,g=c*u,b=c*f;t[0]=h-b*a,t[4]=-s*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*u,t[9]=b-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let h=s*u,p=s*f,g=a*u,b=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,p=s*c,g=a*l,b=a*c;t[0]=l*u,t[4]=b-h*f,t[8]=g*f+p,t[1]=f,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-b*f}else if(e.order==="XZY"){let h=s*l,p=s*c,g=a*l,b=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=s*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,um)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),ys.crossVectors(cn,gi),r[0]=gi.x,r[4]=ys.x,r[8]=cn.x,r[1]=gi.y,r[5]=ys.y,r[9]=cn.y,r[2]=gi.z,r[6]=ys.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],b=n[6],_=n[10],m=n[14],y=n[3],M=n[7],v=n[11],S=n[15],w=r[0],A=r[4],x=r[8],T=r[12],C=r[1],I=r[5],F=r[9],P=r[13],E=r[2],D=r[6],N=r[10],O=r[14],k=r[3],z=r[7],G=r[11],V=r[15];return o[0]=s*w+a*C+l*E+c*k,o[4]=s*A+a*I+l*D+c*z,o[8]=s*x+a*F+l*N+c*G,o[12]=s*T+a*P+l*O+c*V,o[1]=u*w+f*C+h*E+p*k,o[5]=u*A+f*I+h*D+p*z,o[9]=u*x+f*F+h*N+p*G,o[13]=u*T+f*P+h*O+p*V,o[2]=g*w+b*C+_*E+m*k,o[6]=g*A+b*I+_*D+m*z,o[10]=g*x+b*F+_*N+m*G,o[14]=g*T+b*P+_*O+m*V,o[3]=y*w+M*C+v*E+S*k,o[7]=y*A+M*I+v*D+S*z,o[11]=y*x+M*F+v*N+S*G,o[15]=y*T+M*P+v*O+S*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],b=e[7],_=e[11],m=e[15],y=l*p-c*h,M=a*p-c*f,v=a*h-l*f,S=s*p-c*u,w=s*h-l*u,A=s*f-a*u;return t*(b*y-_*M+m*v)-n*(g*y-_*S+m*w)+r*(g*M-b*S+m*A)-o*(g*v-b*w+_*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(s*u-a*c)-n*(o*u-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],b=e[13],_=e[14],m=e[15],y=t*a-n*s,M=t*l-r*s,v=t*c-o*s,S=n*l-r*a,w=n*c-o*a,A=r*c-o*l,x=u*b-f*g,T=u*_-h*g,C=u*m-p*g,I=f*_-h*b,F=f*m-p*b,P=h*m-p*_,E=y*P-M*F+v*I+S*C-w*T+A*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return e[0]=(a*P-l*F+c*I)*D,e[1]=(r*F-n*P-o*I)*D,e[2]=(b*A-_*w+m*S)*D,e[3]=(h*w-f*A-p*S)*D,e[4]=(l*C-s*P-c*T)*D,e[5]=(t*P-r*C+o*T)*D,e[6]=(_*v-g*A-m*M)*D,e[7]=(u*A-h*v+p*M)*D,e[8]=(s*F-a*C+c*x)*D,e[9]=(n*C-t*F-o*x)*D,e[10]=(g*w-b*v+m*y)*D,e[11]=(f*v-u*w-p*y)*D,e[12]=(a*T-s*I-l*x)*D,e[13]=(t*I-n*T+r*x)*D,e[14]=(b*M-g*S-_*y)*D,e[15]=(u*S-f*M+h*y)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,f=a+a,h=o*c,p=o*u,g=o*f,b=s*u,_=s*f,m=a*f,y=l*c,M=l*u,v=l*f,S=n.x,w=n.y,A=n.z;return r[0]=(1-(b+m))*S,r[1]=(p+v)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(p-v)*w,r[5]=(1-(h+m))*w,r[6]=(_+y)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(_-y)*A,r[10]=(1-(h+b))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=br.set(r[0],r[1],r[2]).length(),a=br.set(r[4],r[5],r[6]).length(),l=br.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Tn.copy(this);let c=1/s,u=1/a,f=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=Rn,l=!1){let c=this.elements,u=2*o/(t-e),f=2*o/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),g,b;if(l)g=o/(s-o),b=s*o/(s-o);else if(a===Rn)g=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===_o)g=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Rn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),g,b;if(l)g=1/(s-o),b=s/(s-o);else if(a===Rn)g=-2/(s-o),b=-(s+o)/(s-o);else if(a===_o)g=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Aa.prototype.isMatrix4=!0;var Tt=Aa,br=new H,Tn=new Tt,cm=new H(0,0,0),um=new H(1,1,1),gi=new H,ys=new H,cn=new H,Ph=new Tt,Fh=new Vn,Mi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hm=0,Lh=new H,xr=new Vn,Qn=new Tt,vs=new H,ao=new H,fm=new H,dm=new Vn,Dh=new H(1,0,0),Uh=new H(0,1,0),Nh=new H(0,0,1),Oh={type:"added"},pm={type:"removed"},yr={type:"childadded",child:null},sc={type:"childremoved",child:null},an=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Mi,n=new Vn,r=new H(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new We}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ao,vs,this.up):Qn.lookAt(vs,ao,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Qn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),yr.child=e,this.dispatchEvent(yr),yr.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pm),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new H(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let b of e.hand.values()){let _=t.getJointPose(b,n),m=this._getHandJoint(c,b);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=om(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=ac(s,o,e+1/3),this.g=ac(s,o,e),this.b=ac(s,o,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function n(o){o!==void 0&&parseFloat(o)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return tt.workingToColorSpace(Zt.copy(this),e),Math.round(nt(Zt.r*255,0,255))*65536+Math.round(nt(Zt.g*255,0,255))*256+Math.round(nt(Zt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Zt.copy(this),t);let n=Zt.r,r=Zt.g,o=Zt.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let f=s-a;switch(c=u<=.5?f/(s+a):f/(2-s-a),s){case n:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-n)/f+2;break;case o:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ct){tt.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,r=Zt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ms);let n=tc(_i.h,Ms.h,t),r=tc(_i.s,Ms.s,t),o=tc(_i.l,Ms.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new ae;ae.NAMES=Hf;var xo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zi=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new H,jn=new H,lc=new H,ei=new H,vr=new H,Mr=new H,Bh=new H,cc=new H,uc=new H,hc=new H,fc=new At,dc=new At,pc=new At,vi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){wn.subVectors(r,t),jn.subVectors(n,t),lc.subVectors(e,t);let s=wn.dot(wn),a=wn.dot(jn),l=wn.dot(lc),c=jn.dot(jn),u=jn.dot(lc),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;let h=1/f,p=(c*l-a*u)*h,g=(s*u-a*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ei.x),l.addScaledVector(s,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(e,t),dc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(fc,o.x),s.addScaledVector(dc,o.y),s.addScaledVector(pc,o.z),s}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),jn.subVectors(e,t),wn.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;vr.subVectors(r,n),Mr.subVectors(o,n),cc.subVectors(e,n);let l=vr.dot(cc),c=Mr.dot(cc);if(l<=0&&c<=0)return t.copy(n);uc.subVectors(e,r);let u=vr.dot(uc),f=Mr.dot(uc);if(u>=0&&f<=u)return t.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(vr,s);hc.subVectors(e,o);let p=vr.dot(hc),g=Mr.dot(hc);if(g>=0&&p<=g)return t.copy(o);let b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Mr,a);let _=u*g-p*f;if(_<=0&&f-u>=0&&p-g>=0)return Bh.subVectors(o,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Bh,a);let m=1/(_+b+h);return s=b*m,a=h*m,t.copy(n).addScaledVector(vr,s).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},en=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,En):En.fromBufferAttribute(o,s),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ts.subVectors(this.max,lo),Sr.subVectors(e.a,lo),Tr.subVectors(e.b,lo),wr.subVectors(e.c,lo),bi.subVectors(Tr,Sr),xi.subVectors(wr,Tr),Hi.subVectors(Sr,wr);let t=[0,-bi.z,bi.y,0,-xi.z,xi.y,0,-Hi.z,Hi.y,bi.z,0,-bi.x,xi.z,0,-xi.x,Hi.z,0,-Hi.x,-bi.y,bi.x,0,-xi.y,xi.x,0,-Hi.y,Hi.x,0];return!mc(t,Sr,Tr,wr,Ts)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,Sr,Tr,wr,Ts))?!1:(ws.crossVectors(bi,xi),t=[ws.x,ws.y,ws.z],mc(t,Sr,Tr,wr,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new H,new H,new H,new H,new H,new H,new H,new H],En=new H,Ss=new en,Sr=new H,Tr=new H,wr=new H,bi=new H,xi=new H,Hi=new H,lo=new H,Ts=new H,ws=new H,Wi=new H;function mc(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Wi.fromArray(i,o);let a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ft=new H,Es=new Je,gm=0,bn=class extends kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=so(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),o=sn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var yo=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ki=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}},_m=new en,co=new H,gc=new H,Si=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_m.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(co,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(gc)),this.expandByPoint(co.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bm=0,_n=new Tt,_c=new an,Er=new H,un=new en,uo=new en,zt=new H,Qe=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(im(e)?Ki:yo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new We().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];un.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(un.min,uo.min),un.expandByPoint(zt),zt.addVectors(un.max,uo.max),un.expandByPoint(zt)):(un.expandByPoint(uo.min),un.expandByPoint(uo.max))}un.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)zt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(zt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),zt.add(Er)),r=Math.max(r,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new H,l[x]=new H;let c=new H,u=new H,f=new H,h=new Je,p=new Je,g=new Je,b=new H,_=new H;function m(x,T,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),h.fromBufferAttribute(o,x),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,C),u.sub(c),f.sub(c),p.sub(h),g.sub(h);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[x].add(b),a[T].add(b),a[C].add(b),l[x].add(_),l[T].add(_),l[C].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let C=y[x],I=C.start,F=C.count;for(let P=I,E=I+F;P<E;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new H,v=new H,S=new H,w=new H;function A(x){S.fromBufferAttribute(r,x),w.copy(S);let T=a[x];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(w,T);let I=v.dot(l[x])<0?-1:1;s.setXYZW(x,M.x,M.y,M.z,I)}for(let x=0,T=y.length;x<T;++x){let C=y[x],I=C.start,F=C.count;for(let P=I,E=I+F;P<E;P+=3)A(e.getX(P+0)),A(e.getX(P+1)),A(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new H,o=new H,s=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),b=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,b),s.fromBufferAttribute(t,_),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let b=0,_=l.length;b<_;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*u;for(let m=0;m<u;m++)h[g++]=c[p++]}return new bn(h,u,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],f=o[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bc=new H,xm=new H,ym=new We,An=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=bc.subVectors(n,t).cross(xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(bc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ym.getNormalMatrix(e),r=this.coplanarPoint(bc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vm=0,ri=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Pi,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Oc,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ni=new H,xc=new H,As=new H,Rs=new H,Ji=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xc.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Rs.copy(this.origin).sub(xc);let o=e.distanceTo(t)*.5,s=-this.direction.dot(As),a=Rs.dot(this.direction),l=-Rs.dot(As),c=Rs.lengthSq(),u=Math.abs(1-s*s),f,h,p,g;if(u>0)if(f=s*l-a,h=s*a-l,g=o*u,f>=0)if(h>=-g)if(h<=g){let b=1/u;f*=b,h*=b,p=f*(f+s*h+2*a)+h*(s*f+h+2*l)+c}else h=o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xc).addScaledVector(As,h),p}intersectSphere(e,t){if(e.radius<0)return null;ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-s.x,h=e.y-s.y,p=e.z-s.z,g=t.x-s.x,b=t.y-s.y,_=t.z-s.z,m=n.x-s.x,y=n.y-s.y,M=n.z-s.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(u),A,x,T,C,I,F,P,E,D,N,O,k;if(v>=S&&v>=w?(T=l,F=f,D=g,k=m,l>=0?(A=c,x=u,C=h,I=p,P=b,E=_,N=y,O=M):(A=u,x=c,C=p,I=h,P=_,E=b,N=M,O=y)):S>=w?(T=c,F=h,D=b,k=y,c>=0?(A=u,x=l,C=p,I=f,P=_,E=g,N=M,O=m):(A=l,x=u,C=f,I=p,P=g,E=_,N=m,O=M)):(T=u,F=p,D=_,k=M,u>=0?(A=l,x=c,C=f,I=h,P=g,E=b,N=m,O=y):(A=c,x=l,C=h,I=f,P=b,E=g,N=y,O=m)),T===0)return null;let z=A/T,G=x/T,V=1/T,ie=C-z*F,K=I-G*F,se=P-z*D,Q=E-G*D,he=N-z*k,Y=O-G*k,j=he*Q-Y*se,fe=ie*Y-K*he,me=se*K-Q*ie;if(r){if(j<0||fe<0||me<0)return null}else if((j<0||fe<0||me<0)&&(j>0||fe>0||me>0))return null;let pe=j+fe+me;if(pe===0)return null;let Ae=V*(j*F+fe*D+me*k);return(pe>0?Ae<0:Ae>0)?null:this.at(Ae/pe,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zh=new Tt,Xi=new Ji,Cs=new Si,kh=new H,Is=new H,Ps=new H,Fs=new H,yc=new H,Ls=new H,Vh=new H,Ds=new H,Ye=class extends an{constructor(e=new Qe,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Ls.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],f=o[l];u!==0&&(yc.fromBufferAttribute(f,e),s?Ls.addScaledVector(yc,u):Ls.addScaledVector(yc.sub(t),u))}t.add(Ls)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(o),Xi.copy(e.ray).recast(e.near),!(Cs.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Cs,kh)===null||Xi.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(zh.copy(o).invert(),Xi.copy(e.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,b=h.length;g<b;g++){let _=h[g],m=s[_.materialIndex],y=Math.max(_.start,p.start),M=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let v=y,S=M;v<S;v+=3){let w=a.getX(v),A=a.getX(v+1),x=a.getX(v+2);r=Us(this,m,e,n,c,u,f,w,A,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let _=g,m=b;_<m;_+=3){let y=a.getX(_),M=a.getX(_+1),v=a.getX(_+2);r=Us(this,s,e,n,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,b=h.length;g<b;g++){let _=h[g],m=s[_.materialIndex],y=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=y,S=M;v<S;v+=3){let w=v,A=v+1,x=v+2;r=Us(this,m,e,n,c,u,f,w,A,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let _=g,m=b;_<m;_+=3){let y=_,M=_+1,v=_+2;r=Us(this,s,e,n,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function Mm(i,e,t,n,r,o,s,a){let l;if(e.side===rn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Ii,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:i}}function Us(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Is),i.getVertexPosition(l,Ps),i.getVertexPosition(c,Fs);let u=Mm(i,e,t,n,Is,Ps,Fs,Vh);if(u){let f=new H;vi.getBarycoord(Vh,Is,Ps,Fs,f),r&&(u.uv=vi.getInterpolatedAttribute(r,a,l,c,f,new Je)),o&&(u.uv1=vi.getInterpolatedAttribute(o,a,l,c,f,new Je)),s&&(u.normal=vi.getInterpolatedAttribute(s,a,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};vi.getNormal(Is,Ps,Fs,h.normal),u.face=h,u.barycoord=f}return u}var aa=class extends Qt{constructor(e=null,t=1,n=1,r,o,s,a,l,c=kt,u=kt,f,h){super(null,s,a,l,c,u,r,o,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yi=new Si,Sm=new Je(.5,.5),Ns=new H,vo=class{constructor(e=new An,t=new An,n=new An,r=new An,o=new An,s=new An){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],f=o[5],h=o[6],p=o[7],g=o[8],b=o[9],_=o[10],m=o[11],y=o[12],M=o[13],v=o[14],S=o[15];if(r[0].setComponents(c-s,p-u,m-g,S-y).normalize(),r[1].setComponents(c+s,p+u,m+g,S+y).normalize(),r[2].setComponents(c+a,p+f,m+b,S+M).normalize(),r[3].setComponents(c-a,p-f,m-b,S-M).normalize(),n)r[4].setComponents(l,h,_,v).normalize(),r[5].setComponents(c-l,p-h,m-_,S-v).normalize();else if(r[4].setComponents(c-l,p-h,m-_,S-v).normalize(),t===Rn)r[5].setComponents(c+l,p+h,m+_,S+v).normalize();else if(t===_o)r[5].setComponents(l,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);let t=Sm.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xn=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},la=new H,ca=new H,Gh=new Tt,ho=new Ji,Os=new Si,vc=new H,Hh=new H,ua=class extends an{constructor(e=new Qe,t=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)la.fromBufferAttribute(t,r-1),ca.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=la.distanceTo(ca);e.setAttribute("lineDistance",new Ge(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Os.radius+=o,e.ray.intersectsSphere(Os)===!1)return;Gh.copy(r).invert(),ho.copy(e.ray).applyMatrix4(Gh);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let b=p,_=g-1;b<_;b+=c){let m=u.getX(b),y=u.getX(b+1),M=Bs(this,e,ho,l,m,y,b);M&&t.push(M)}if(this.isLineLoop){let b=u.getX(g-1),_=u.getX(p),m=Bs(this,e,ho,l,b,_,g-1);m&&t.push(m)}}else{let p=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let b=p,_=g-1;b<_;b+=c){let m=Bs(this,e,ho,l,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=Bs(this,e,ho,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Bs(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if(la.fromBufferAttribute(a,r),ca.fromBufferAttribute(a,o),t.distanceSqToSegment(la,ca,vc,Hh)>n)return;vc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vc);if(!(c<e.near||c>e.far))return{distance:c,point:Hh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Wh=new H,Xh=new H,yn=class extends ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Wh.fromBufferAttribute(t,r),Xh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wh.distanceTo(Xh);e.setAttribute("lineDistance",new Ge(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qi=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yh=new Tt,Ac=new Ji,zs=new Si,ks=new H,Br=class extends an{constructor(e=new Qe,t=new Qi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),zs.radius+=o,e.ray.intersectsSphere(zs)===!1)return;Yh.copy(r).invert(),Ac.copy(e.ray).applyMatrix4(Yh);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=h,b=p;g<b;g++){let _=c.getX(g);ks.fromBufferAttribute(f,_),qh(ks,_,l,r,e,t,this)}}else{let h=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=h,b=p;g<b;g++)ks.fromBufferAttribute(f,g),qh(ks,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function qh(i,e,t,n,r,o,s){let a=Ac.distanceSqToPoint(i);if(a<t){let l=new H;Ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Mo=class extends Qt{constructor(e=[],t=Fi,n,r,o,s,a,l,c,u){super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ti=class extends Qt{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends Qt{constructor(e,t,n=In,r,o,s,a=kt,l=kt,c,u=zn,f=1){if(u!==zn&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ha=class extends wi{constructor(e,t=In,n=Fi,r,o,s=kt,a=kt,l,c=zn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,o,s,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},So=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zr=class i extends Qe{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,s,o,0),g("z","y","x",1,-1,n,t,-e,s,o,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,o,4),g("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(f,2));function g(b,_,m,y,M,v,S,w,A,x,T){let C=v/A,I=S/x,F=v/2,P=S/2,E=w/2,D=A+1,N=x+1,O=0,k=0,z=new H;for(let G=0;G<N;G++){let V=G*I-P;for(let ie=0;ie<D;ie++){let K=ie*C-F;z[b]=K*y,z[_]=V*M,z[m]=E,c.push(z.x,z.y,z.z),z[b]=0,z[_]=0,z[m]=w>0?1:-1,u.push(z.x,z.y,z.z),f.push(ie/A),f.push(1-G/x),O+=1}}for(let G=0;G<x;G++)for(let V=0;V<A;V++){let ie=h+V+D*G,K=h+V+D*(G+1),se=h+(V+1)+D*(G+1),Q=h+(V+1)+D*G;l.push(ie,K,Q),l.push(K,se,Q),k+=6}a.addGroup(p,k,T),p+=k,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var To=class i extends Qe{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new H,u=new Je;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let p=n+f/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[h]/e+1)/2,u.y=(s[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};function Tm(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=Wf(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Cm(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<r;h+=t){let p=i[h],g=i[h+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return wo(o,s,t,a,l,c,0),s}function Wf(i,e,t,n,r){let o;if(r===km(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=$h(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=$h(s/n|0,i[s],i[s+1],o);return o&&kr(o,o.next)&&(Ao(o),o=o.next),o}function ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||Et(t.prev,t,t.next)===0)){if(Ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,r,o,s){if(!i)return;!s&&o&&Dm(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?Em(i,n,r,o):wm(i)){e.push(l.i,i.i,c.i),Ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Am(ji(i),e),wo(i,e,t,n,r,o,2)):s===2&&Rm(i,e,t,n,r,o):wo(ji(i),e,t,n,r,o,1);break}}}function wm(i){let e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,o,s),f=Math.min(a,l,c),h=Math.max(r,o,s),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&fo(r,a,o,l,s,c,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Em(i,e,t,n){let r=i.prev,o=i,s=i.next;if(Et(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,u=r.y,f=o.y,h=s.y,p=Math.min(a,l,c),g=Math.min(u,f,h),b=Math.max(a,l,c),_=Math.max(u,f,h),m=Rc(p,g,e,t,n),y=Rc(b,_,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=y;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=_&&M!==r&&M!==s&&fo(a,u,l,f,c,h,M.x,M.y)&&Et(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=b&&v.y>=g&&v.y<=_&&v!==r&&v!==s&&fo(a,u,l,f,c,h,v.x,v.y)&&Et(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=b&&M.y>=g&&M.y<=_&&M!==r&&M!==s&&fo(a,u,l,f,c,h,M.x,M.y)&&Et(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=_&&v!==r&&v!==s&&fo(a,u,l,f,c,h,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Am(i,e){let t=i;do{let n=t.prev,r=t.next.next;!kr(n,r)&&Yf(n,t,t.next,r)&&Eo(n,r)&&Eo(r,n)&&(e.push(n.i,t.i,r.i),Ao(t),Ao(t.next),t=i=r),t=t.next}while(t!==i);return ji(t)}function Rm(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Om(s,a)){let l=qf(s,a);s=ji(s,s.next),l=ji(l,l.next),wo(s,e,t,n,r,o,0),wo(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Cm(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=Wf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Nm(c))}r.sort(Im);for(let o=0;o<r.length;o++)t=Pm(r[o],t);return t}function Im(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Pm(i,e){let t=Fm(i,e);if(!t)return e;let n=qf(t,i);return ji(n,n.next),ji(t,t.next)}function Fm(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(kr(i,t))return t;do{if(kr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>o&&(o=f,s=t.x<t.next.x?t:t.next,f===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xf(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let f=Math.abs(r-t.y)/(n-t.x);Eo(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&Lm(s,t)))&&(s=t,u=f)}t=t.next}while(t!==a);return s}function Lm(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function Dm(i,e,t,n){let r=i;do r.z===0&&(r.z=Rc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Um(r)}function Um(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Rc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Nm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xf(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function fo(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&Xf(i,e,t,n,r,o,s,a)}function Om(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Bm(i,e)&&(Eo(i,e)&&Eo(e,i)&&zm(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||kr(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function kr(i,e){return i.x===e.x&&i.y===e.y}function Yf(i,e,t,n){let r=Gs(Et(i,e,t)),o=Gs(Et(i,e,n)),s=Gs(Et(t,n,i)),a=Gs(Et(t,n,e));return!!(r!==o&&s!==a||r===0&&Vs(i,t,e)||o===0&&Vs(i,n,e)||s===0&&Vs(t,i,n)||a===0&&Vs(t,e,n))}function Vs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Gs(i){return i>0?1:i<0?-1:0}function Bm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Eo(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function zm(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qf(i,e){let t=Cc(i.i,i.x,i.y),n=Cc(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function $h(i,e,t,n){let r=Cc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function km(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Ic=class{static triangulate(e,t,n=2){return Tm(e,t,n)}},Ro=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];Zh(e),Kh(n,e);let s=e.length;t.forEach(Zh);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Kh(n,t[l]);let a=Ic.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Zh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ei=class i extends Qe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],b=[],_=[];for(let m=0;m<u;m++){let y=m*h-s;for(let M=0;M<c;M++){let v=M*f-o;g.push(v,-y,0),b.push(0,0,1),_.push(M/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let M=y+c*m,v=y+c*(m+1),S=y+1+c*(m+1),w=y+1+c*m;p.push(M,v,w),p.push(v,S,w)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Co=class i extends Qe{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=e,h=(t-e)/r,p=new H,g=new Je;for(let b=0;b<=r;b++){for(let _=0;_<=n;_++){let m=o+_/n*s;p.x=f*Math.cos(m),p.y=f*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let b=0;b<r;b++){let _=b*(n+1);for(let m=0;m<n;m++){let y=m+_,M=y,v=y+n+1,S=y+n+2,w=y+1;a.push(M,v,w),a.push(v,S,w)}}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Jh(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Jh(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let r in n)e[r]=n[r]}return e}function Jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ru(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var $f={clone:nr,merge:tn},Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(r.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new At().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fa=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var da=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pa=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ai=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends Ai{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case wc:o=e,a=2*t-n;break;case Ec:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:s=e,l=2*n-t;break;case Ec:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),b=g*g,_=b*g,m=-h*_+2*h*b-h*g,y=(1+h)*_+(-1.5-2*h)*b+(-.5+h)*g+1,M=(-1-p)*_+(1.5+p)*b+.5*g,v=p*_-p*b;for(let S=0;S!==a;++S)o[S]=m*s[u+S]+y*s[c+S]+M*s[l+S]+v*s[f+S];return o}},ga=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)o[h]=s[c+h]*f+s[l+h]*u;return o}},_a=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ba=class extends Ai{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-t)/(r-t),b=1-g;for(let _=0;_!==a;++_)o[_]=s[c+_]*b+s[l+_]*g;return o}let h=a*2,p=e-1;for(let g=0;g!==a;++g){let b=s[c+g],_=s[l+g],m=p*h+g*2,y=f[m],M=f[m+1],v=e*h+g*2,S=u[v],w=u[v+1],A=Xm(n,t,y,S,r);o[g]=Zf(A,b,M,w,_)}return o}};function Zf(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function Wm(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function Xm(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=Zf(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Wm(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var dn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Mc(e.settings)&&(n.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case po:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case Xs:t=this.InterpolantFactoryMethodSmooth;break;case Sc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Xs;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Mc(this.settings)&&(Qh(this.settings.inTangents,e),Qh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){ke("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&rm(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Xs,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){let b=t[f+g];if(b!==t[h+g]||b!==t[p+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let f=a*n,h=s*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Mc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Qh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=na;var Ri=class extends dn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=po;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};xa.prototype.ValueTypeName="color";var ya=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};ya.prototype.ValueTypeName="number";var va=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Vn.slerpFlat(o,0,s,c-a,s,c,l);return o}},Io=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends dn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=po;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends dn{constructor(e,t,n,r){super(e,t,n,r)}};Ma.prototype.ValueTypeName="vector";var qs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Sa=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kf=new Sa,Vr=class{constructor(e){this.manager=e!==void 0?e:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=new WeakMap,Ta=class extends Vr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=qs.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let f=Rr.get(s);f===void 0&&(f=[],Rr.set(s,f)),f.push({onLoad:t,onError:r})}return s}let a=Lr("img");function l(){u(),t&&t(this);let f=Rr.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onLoad&&p.onLoad(this)}Rr.delete(this),o.manager.itemEnd(e)}function c(f){u(),r&&r(f),qs.remove(`image:${e}`);let h=Rr.get(this)||[];for(let p=0;p<h.length;p++){let g=h[p];g.onError&&g.onError(f)}Rr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qs.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var Po=class extends Vr{constructor(e){super(e)}load(e,t,n,r){let o=new Qt,s=new Ta(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var Hs=new H,Ws=new Vn,Bn=new H,Fo=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hs,Ws,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hs,Ws,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new H,ef=new Je,tf=new Je,Kt=class extends Fo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ec*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var oi=class extends Fo{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Cr=-90,Ir=1,wa=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Cr,Ir,e,t);r.layers=this.layers,this.add(r);let o=new Kt(Cr,Ir,e,t);o.layers=this.layers,this.add(o);let s=new Kt(Cr,Ir,e,t);s.layers=this.layers,this.add(s);let a=new Kt(Cr,Ir,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Cr,Ir,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Cr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ea=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ou="\\[\\]\\.:\\/",Ym=new RegExp("["+ou+"]","g"),su="[^"+ou+"]",qm="[^"+ou.replace("\\.","")+"]",$m=/((?:WC+[\/:])*)/.source.replace("WC",su),Zm=/(WCOD+)?/.source.replace("WCOD",qm),Km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),Jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),Qm=new RegExp("^"+$m+Zm+Km+Jm+"$"),jm=["material","materials","bones","map"],Pc=class{constructor(e,t,n){let r=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ym,"")}static parseTrackName(e){let t=Qm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);jm.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Pc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JS=new Float32Array(1);var nf=new Tt,Lo=class{constructor(e,t,n=0,r=1/0){this.ray=new Ji(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(e,t=!0,n=[]){return Fc(e,this,n,t),n.sort(rf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Fc(e[r],this,n,t);return n.sort(rf),n}};function rf(i,e){return i.distance-e.distance}function Fc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Fc(o[s],e,t,!0)}}var fu=class fu{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};fu.prototype.isMatrix2=!0;var Lc=fu;function au(i,e,t,n){let r=eg(n);switch(t){case Jc:return i*e;case jc:return i*e/r.components*r.byteLength;case Da:return i*e/r.components*r.byteLength;case Ui:return i*e*2/r.components*r.byteLength;case Ua:return i*e*2/r.components*r.byteLength;case Qc:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case Na:return i*e*4/r.components*r.byteLength;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:case ka:return Math.max(i,16)*Math.max(e,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(e,8)/2;case Va:case Ga:case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Go:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case al:case ll:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ul:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ho:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eg(i){switch(i){case pn:case qc:return{byteLength:1,components:1};case Hr:case $c:case Fn:return{byteLength:2,components:1};case Fa:case La:return{byteLength:2,components:4};case In:case Pa:case Pn:return{byteLength:4,components:1};case Zc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bd(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function ng(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],b=f[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let b=f[p];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
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
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gg=`#ifdef USE_IRIDESCENCE
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
#endif`,_g=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Eg=`#define PI 3.141592653589793
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
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
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
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
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
#endif`,t_=`uniform sampler2D dfgLUT;
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d_=`#if defined( USE_POINTS_UV )
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
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
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
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G_=`float getShadowMask() {
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
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rb=`uniform sampler2D t2D;
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`#include <common>
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
}`,ub=`#if DEPTH_PACKING == 3200
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
}`,hb=`#define DISTANCE
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
}`,fb=`#define DISTANCE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,bb=`uniform vec3 diffuse;
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
}`,xb=`#define LAMBERT
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
}`,yb=`#define LAMBERT
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
}`,vb=`#define MATCAP
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
}`,Mb=`#define MATCAP
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
}`,Sb=`#define NORMAL
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
}`,Tb=`#define NORMAL
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
}`,wb=`#define PHONG
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
}`,Eb=`#define PHONG
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
}`,Ab=`#define STANDARD
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
}`,Rb=`#define STANDARD
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
}`,Cb=`#define TOON
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
}`,Ib=`#define TOON
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
}`,Pb=`uniform float size;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Db=`uniform vec3 color;
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
}`,Ub=`uniform float rotation;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:ig,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:sg,alphatest_fragment:ag,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:ug,batching_pars_vertex:hg,batching_vertex:fg,begin_vertex:dg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:_g,clipping_planes_fragment:bg,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:vg,color_fragment:Mg,color_pars_fragment:Sg,color_pars_vertex:Tg,color_vertex:wg,common:Eg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Ig,emissivemap_fragment:Pg,emissivemap_pars_fragment:Fg,colorspace_fragment:Lg,colorspace_pars_fragment:Dg,envmap_fragment:Ug,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Og,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Zg,envmap_vertex:zg,fog_vertex:kg,fog_pars_vertex:Vg,fog_fragment:Gg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:qg,lights_pars_begin:$g,lights_toon_fragment:Kg,lights_toon_pars_fragment:Jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:jg,lights_physical_fragment:e_,lights_physical_pars_fragment:t_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:r_,lightprobes_pars_fragment:o_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:c_,map_fragment:u_,map_pars_fragment:h_,map_particle_fragment:f_,map_particle_pars_fragment:d_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:m_,morphinstance_vertex:g_,morphcolor_vertex:__,morphnormal_vertex:b_,morphtarget_pars_vertex:x_,morphtarget_vertex:y_,normal_fragment_begin:v_,normal_fragment_maps:M_,normal_pars_fragment:S_,normal_pars_vertex:T_,normal_vertex:w_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:I_,opaque_fragment:P_,packing:F_,premultiplied_alpha_fragment:L_,project_vertex:D_,dithering_fragment:U_,dithering_pars_fragment:N_,roughnessmap_fragment:O_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:k_,shadowmap_vertex:V_,shadowmask_pars_fragment:G_,skinbase_vertex:H_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:Y_,specularmap_fragment:q_,specularmap_pars_fragment:$_,tonemapping_fragment:Z_,tonemapping_pars_fragment:K_,transmission_fragment:J_,transmission_pars_fragment:Q_,uv_pars_fragment:j_,uv_pars_vertex:eb,uv_vertex:tb,worldpos_vertex:nb,background_vert:ib,background_frag:rb,backgroundCube_vert:ob,backgroundCube_frag:sb,cube_vert:ab,cube_frag:lb,depth_vert:cb,depth_frag:ub,distance_vert:hb,distance_frag:fb,equirect_vert:db,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:_b,meshbasic_frag:bb,meshlambert_vert:xb,meshlambert_frag:yb,meshmatcap_vert:vb,meshmatcap_frag:Mb,meshnormal_vert:Sb,meshnormal_frag:Tb,meshphong_vert:wb,meshphong_frag:Eb,meshphysical_vert:Ab,meshphysical_frag:Rb,meshtoon_vert:Cb,meshtoon_frag:Ib,points_vert:Pb,points_frag:Fb,shadow_vert:Lb,shadow_frag:Db,sprite_vert:Ub,sprite_frag:Nb},Se={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Wn={basic:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ae(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:tn([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:tn([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:tn([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:tn([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:tn([Se.lights,Se.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Wn.physical={uniforms:tn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var ml={r:0,b:0,g:0},Ob=new Tt,xd=new We;xd.set(-1,0,0,0,1,0,0,0,1);function Bb(i,e,t,n,r,o){let s=new ae(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(y){let M=!1,v=p(y);v===null?_(s,a):v&&v.isColor&&(_(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===No)?(c===void 0&&(c=new Ye(new zr(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:nr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xd),c.material.toneMapped=tt.getTransfer(v.colorSpace)!==dt,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new Ei(2,2),new fn({name:"BackgroundMaterial",uniforms:nr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,M){y.getRGB(ml,ru(i)),t.buffers.color.setClear(ml.r,ml.g,ml.b,M,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,M=1){s.set(y),a=M,_(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,_(s,a)},render:g,addToRenderList:b,dispose:m}}function zb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),o=r,s=!1;function a(I,F,P,E,D){let N=!1,O=f(I,E,P,F);o!==O&&(o=O,c(o.object)),N=p(I,E,P,D),N&&g(I,E,P,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(N||s)&&(s=!1,v(I,F,P,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,F,P,E){let D=E.wireframe===!0,N=n[F.id];N===void 0&&(N={},n[F.id]=N);let O=I.isInstancedMesh===!0?I.id:0,k=N[O];k===void 0&&(k={},N[O]=k);let z=k[P.id];z===void 0&&(z={},k[P.id]=z);let G=z[D];return G===void 0&&(G=h(l()),z[D]=G),G}function h(I){let F=[],P=[],E=[];for(let D=0;D<t;D++)F[D]=0,P[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:P,attributeDivisors:E,object:I,attributes:{},index:null}}function p(I,F,P,E){let D=o.attributes,N=F.attributes,O=0,k=P.getAttributes();for(let z in k)if(k[z].location>=0){let V=D[z],ie=N[z];if(ie===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),V===void 0||V.attribute!==ie||ie&&V.data!==ie.data)return!0;O++}return o.attributesNum!==O||o.index!==E}function g(I,F,P,E){let D={},N=F.attributes,O=0,k=P.getAttributes();for(let z in k)if(k[z].location>=0){let V=N[z];V===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));let ie={};ie.attribute=V,V&&V.data&&(ie.data=V.data),D[z]=ie,O++}o.attributes=D,o.attributesNum=O,o.index=E}function b(){let I=o.newAttributes;for(let F=0,P=I.length;F<P;F++)I[F]=0}function _(I){m(I,0)}function m(I,F){let P=o.newAttributes,E=o.enabledAttributes,D=o.attributeDivisors;P[I]=1,E[I]===0&&(i.enableVertexAttribArray(I),E[I]=1),D[I]!==F&&(i.vertexAttribDivisor(I,F),D[I]=F)}function y(){let I=o.newAttributes,F=o.enabledAttributes;for(let P=0,E=F.length;P<E;P++)F[P]!==I[P]&&(i.disableVertexAttribArray(P),F[P]=0)}function M(I,F,P,E,D,N,O){O===!0?i.vertexAttribIPointer(I,F,P,D,N):i.vertexAttribPointer(I,F,P,E,D,N)}function v(I,F,P,E){b();let D=E.attributes,N=P.getAttributes(),O=F.defaultAttributeValues;for(let k in N){let z=N[k];if(z.location>=0){let G=D[k];if(G===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let V=G.normalized,ie=G.itemSize,K=e.get(G);if(K===void 0)continue;let se=K.buffer,Q=K.type,he=K.bytesPerElement,Y=Q===i.INT||Q===i.UNSIGNED_INT||G.gpuType===Pa;if(G.isInterleavedBufferAttribute){let j=G.data,fe=j.stride,me=G.offset;if(j.isInstancedInterleavedBuffer){for(let pe=0;pe<z.locationSize;pe++)m(z.location+pe,j.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pe=0;pe<z.locationSize;pe++)_(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,se);for(let pe=0;pe<z.locationSize;pe++)M(z.location+pe,ie/z.locationSize,Q,V,fe*he,(me+ie/z.locationSize*pe)*he,Y)}else{if(G.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)m(z.location+j,G.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let j=0;j<z.locationSize;j++)_(z.location+j);i.bindBuffer(i.ARRAY_BUFFER,se);for(let j=0;j<z.locationSize;j++)M(z.location+j,ie/z.locationSize,Q,V,ie*he,ie/z.locationSize*j*he,Y)}}else if(O!==void 0){let V=O[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(z.location,V);break;case 3:i.vertexAttrib3fv(z.location,V);break;case 4:i.vertexAttrib4fv(z.location,V);break;default:i.vertexAttrib1fv(z.location,V)}}}}y()}function S(){T();for(let I in n){let F=n[I];for(let P in F){let E=F[P];for(let D in E){let N=E[D];for(let O in N)u(N[O].object),delete N[O];delete E[D]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let P in F){let E=F[P];for(let D in E){let N=E[D];for(let O in N)u(N[O].object),delete N[O];delete E[D]}}delete n[I.id]}function A(I){for(let F in n){let P=n[F];for(let E in P){let D=P[E];if(D[I.id]===void 0)continue;let N=D[I.id];for(let O in N)u(N[O].object),delete N[O];delete D[I.id]}}}function x(I){for(let F in n){let P=n[F],E=I.isInstancedMesh===!0?I.id:0,D=P[E];if(D!==void 0){for(let N in D){let O=D[N];for(let k in O)u(O[k].object),delete O[k];delete D[N]}delete P[E],Object.keys(P).length===0&&delete n[F]}}}function T(){C(),s=!0,o!==r&&(o=r,c(o.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:_,disableUnusedAttributes:y}}function kb(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function Vb(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Pn&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Gb(i){let e=this,t=null,n=0,r=!1,o=!1,s=new An,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,b=f.clipIntersection,_=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||o&&!_)o?u(null):c();else{let y=o?0:n,M=y*4,v=m.clippingState||null;l.value=v,v=u(g,h,M,p);for(let S=0;S!==M;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){let b=f!==null?f.length:0,_=null;if(b!==0){if(_=l.value,g!==!0||_===null){let m=p+b*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,v=p;M!==b;++M,v+=4)s.copy(f[M]).applyMatrix4(y,a),s.normal.toArray(_,v),_[v+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}var Yr=4,Hb=6,Wb=20,Xb=256,Xo=new oi,Jf=new ae,du=null,pu=0,mu=0,gu=!1,Yb=new H,ir=new H,_l=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=Yb}=o;du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(du,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Fn,format:vn,colorSpace:mo,depthBuffer:!1},r=Qf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qb(o)),this._blurMaterial=Zb(o,e,t),this._ggxMaterial=$b(o,e,t)}return r}_compileMaterial(e){let t=new Ye(new Qe,e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,r,o){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Jf),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new zr,new lt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,_=b.material,m=!1,y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,m=!0):(_.color.copy(Jf),m=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[M],o.y,o.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[M]));let S=this._cubeSize;Xr(r,v*S,M>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(b,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Fi||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Xo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:g}=this,b=this._sizeLods[n],_=3*b*(n>g-Yr?n-g+Yr:0),m=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Xr(o,_,m,3*b,2*b),r.setRenderTarget(o),r.render(a,Xo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-n,Xr(e,_,m,3*b,2*b),r.setRenderTarget(e),r.render(a,Xo)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Yr?r-this._lodMax+Yr:0),h=4*(this._cubeSize-u);Xr(t,f,h,3*u,2*u),s.setRenderTarget(t),s.render(l,Xo)}};function qb(i){let e=[],t=[],n=i,r=i-Yr+1+Hb;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,g=new Float32Array(p*h*f),b=new Float32Array(p*h*f);for(let m=0;m<f;m++){let y=m%3*2/3-1,M=m>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(v,p*h*m);for(let S=0;S<h;S++){let w=u[S*2]*2-1,A=u[S*2+1]*2-1;m===0?ir.set(1,A,w):m===1?ir.set(-w,1,-A):m===2?ir.set(-w,A,1):m===3?ir.set(-1,A,-w):m===4?ir.set(-w,-1,A):ir.set(w,A,-1),ir.toArray(b,(m*h+S)*p)}}let _=new Qe;_.setAttribute("position",new bn(g,p)),_.setAttribute("outputDirection",new bn(b,p)),t.push(new Ye(_,null)),n>Yr&&n--}return{lodMeshes:t,sizeLods:e}}function Qf(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $b(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Zb(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Wb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function jf(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ed(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bl=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Mo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),o=new fn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Gn});o.uniforms.tEquirect.value=t;let s=new Ye(r,o),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=Ht),new wa(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function Kb(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?s(h):o(h)}function o(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ra||p===Ca)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let b=new bl(g.height);return b.fromEquirectangularTexture(i,h),e.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let p=h.mapping,g=p===Ra||p===Ca,b=p===Fi||p===tr;if(g||b){let _=t.get(h),m=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new _l(i)),_=g?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{let y=h.image;return g&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new _l(i)),_=g?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function a(h,p){return p===Ra?h.mapping=Fi:p===Ca&&(h.mapping=tr),h}function l(h){let p=0,g=6;for(let b=0;b<g;b++)h[b]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Jb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&qi("WebGLRenderer: "+n+" extension not supported."),r}}}function Qb(i,e,t,n){let r={},o=new WeakMap;function s(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete r[h.id];let p=o.get(h);p&&(e.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,g=f.attributes.position,b=0;if(g===void 0)return;if(p!==null){let y=p.array;b=p.version;for(let M=0,v=y.length;M<v;M+=3){let S=y[M+0],w=y[M+1],A=y[M+2];h.push(S,w,w,A,A,S)}}else{let y=g.array;b=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let S=M+0,w=M+1,A=M+2;h.push(S,w,w,A,A,S)}}let _=new(g.count>=65535?Ki:yo)(h,1);_.version=b;let m=o.get(f);m&&e.remove(m),o.set(f,_)}function u(f){let h=o.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function jb(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){i.drawElements(n,h,o,f*s),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,o,f*s,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,f,0,p);let b=0;for(let _=0;_<p;_++)b+=h[_];t.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ex(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:ke("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function tx(i,e,t){let n=new WeakMap,r=new At;function o(s,a,l){let c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*f),A=new bo(w,v,S,f);A.type=Pn,A.needsUpdate=!0;let x=M*4;for(let C=0;C<f;C++){let I=_[C],F=m[C],P=y[C],E=v*S*4*C;for(let D=0;D<I.count;D++){let N=D*x;p===!0&&(r.fromBufferAttribute(I,D),w[E+N+0]=r.x,w[E+N+1]=r.y,w[E+N+2]=r.z,w[E+N+3]=0),g===!0&&(r.fromBufferAttribute(F,D),w[E+N+4]=r.x,w[E+N+5]=r.y,w[E+N+6]=r.z,w[E+N+7]=0),b===!0&&(r.fromBufferAttribute(P,D),w[E+N+8]=r.x,w[E+N+9]=r.y,w[E+N+10]=r.z,w[E+N+11]=P.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Je(v,S)},n.set(a,h),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function nx(i,e,t,n,r){let o=new WeakMap;function s(c){let u=r.render.frame,f=c.geometry,h=e.get(c,f);if(o.get(h)!==u&&(e.update(h),o.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;o.get(p)!==u&&(p.update(),o.set(p,u))}return h}function a(){o=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var ix={[zc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Gc]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[Xc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function rx(i,e,t,n,r,o){let s=new jt(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Qe;c.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let u=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ye(c,u),h=new oi(-1,1,1,-1,0,1),p=null,g=null,b=!1,_,m=null,y=[],M=!1;this.setSize=function(v,S){s.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let S=s.width,w=s.height;y.length>0&&a===null&&(a=new jt(S,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new jt(S,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let x=y[A];x.setSize&&x.setSize(S,w)}},this.begin=function(v,S){if(b||v.toneMapping===Cn&&y.length===0)return!1;if(m=S,S!==null){let w=S.width,A=S.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return M===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=Cn,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=_,b=!0;let w=s,A=a;for(let x=0;x<y.length;x++){let T=y[x];T.enabled!==!1&&(T.render(v,A,w,S),T.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,u.defines={},tt.getTransfer(p)===dt&&(u.defines.SRGB_TRANSFER="");let x=ix[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(f,h),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var yd=new Qt,xu=new wi(1,1),vd=new bo,Md=new sa,Sd=new Mo,td=[],nd=[],id=new Float32Array(16),rd=new Float32Array(9),od=new Float32Array(4);function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=td[r];if(o===void 0&&(o=new Float32Array(r),td[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yl(i,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;od.set(n),i.uniformMatrix2fv(this.addr,!1,od),Nt(t,n)}}function ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;rd.set(n),i.uniformMatrix3fv(this.addr,!1,rd),Nt(t,n)}}function hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;id.set(n),i.uniformMatrix4fv(this.addr,!1,id),Nt(t,n)}}function fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function yx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(xu.compareFunction=t.isReversedDepthBuffer()?pl:dl,o=xu):o=yd,t.setTexture2D(e||o,r)}function vx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Md,r)}function Mx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Sd,r)}function Sx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vd,r)}function Tx(i){switch(i){case 5126:return ox;case 35664:return sx;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return bx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function wx(i,e){i.uniform1fv(this.addr,e)}function Ex(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ax(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function Rx(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Cx(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ix(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Px(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fx(i,e){i.uniform1iv(this.addr,e)}function Lx(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Ux(i,e){i.uniform4iv(this.addr,e)}function Nx(i,e){i.uniform1uiv(this.addr,e)}function Ox(i,e){i.uniform2uiv(this.addr,e)}function Bx(i,e){i.uniform3uiv(this.addr,e)}function zx(i,e){i.uniform4uiv(this.addr,e)}function kx(i,e,t){let n=this.cache,r=e.length,o=yl(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=xu:s=yd;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function Vx(i,e,t){let n=this.cache,r=e.length,o=yl(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Md,o[s])}function Gx(i,e,t){let n=this.cache,r=e.length,o=yl(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Sd,o[s])}function Hx(i,e,t){let n=this.cache,r=e.length,o=yl(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Nt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||vd,o[s])}function Wx(i){switch(i){case 5126:return wx;case 35664:return Ex;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Ix;case 35676:return Px;case 5124:case 35670:return Fx;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Hx}}var yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tx(t.type)}},vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wx(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},_u=/(\w+)(\])?(\[|\.)?/g;function sd(i,e){i.seq.push(e),i.map[e.id]=e}function Xx(i,e,t){let n=i.name,r=n.length;for(_u.lastIndex=0;;){let o=_u.exec(n),s=_u.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){sd(t,c===void 0?new yu(a,i,e):new vu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Mu(a),sd(t,f)),t=f}}}var qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);Xx(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Yx=37297,qx=0;function $x(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var ld=new We;function Zx(i){tt._getMatrix(ld,tt.workingColorSpace,i);let e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case go:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+$x(i.getShaderSource(e),a)}else return o}function Kx(i,e){let t=Zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Jx={[zc]:"Linear",[kc]:"Reinhard",[Vc]:"Cineon",[Gc]:"ACESFilmic",[Wc]:"AgX",[Xc]:"Neutral",[Hc]:"Custom"};function Qx(i,e){let t=Jx[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gl=new H;function jx(){tt.getLuminanceCoefficients(gl);let i=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function ty(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ny(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function qo(i){return i!==""}function ud(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(i){return i.replace(iy,oy)}var ry=new Map;function oy(i,e){let t=Ze[e];if(t===void 0){let n=ry.get(e);if(n!==void 0)t=Ze[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Su(t)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(i){return i.replace(sy,ay)}function ay(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function dd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var ly={[Do]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function cy(i){return ly[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uy={[Fi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function hy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":uy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fy={[tr]:"ENVMAP_MODE_REFRACTION"};function dy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var py={[Bc]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Af]:"ENVMAP_BLENDING_ADD"};function my(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":py[i.combine]||"ENVMAP_BLENDING_NONE"}function gy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _y(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=cy(t),c=hy(t),u=dy(t),f=my(t),h=gy(t),p=ey(t),g=ty(o),b=r.createProgram(),_,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qo).join(`
`),m.length>0&&(m+=`
`)):(_=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),m=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Kx("linearToOutputTexel",t.outputColorSpace),jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),s=Su(s),s=ud(s,t),s=hd(s,t),a=Su(a),a=ud(a,t),a=hd(a,t),s=fd(s),a=fd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+_+s,v=y+m+a,S=ad(r,r.VERTEX_SHADER,M),w=ad(r,r.FRAGMENT_SHADER,v);r.attachShader(b,S),r.attachShader(b,w),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(I){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(b)||"",P=r.getShaderInfoLog(S)||"",E=r.getShaderInfoLog(w)||"",D=F.trim(),N=P.trim(),O=E.trim(),k=!0,z=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,S,w);else{let G=cd(r,S,"vertex"),V=cd(r,w,"fragment");ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+G+`
`+V)}else D!==""?ze("WebGLProgram: Program Info Log:",D):(N===""||O==="")&&(z=!1);z&&(I.diagnostics={runnable:k,programLog:D,vertexShader:{log:N,prefix:_},fragmentShader:{log:O,prefix:m}})}r.deleteShader(S),r.deleteShader(w),x=new qr(r,b),T=ny(r,b)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,Yx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=w,this}var by=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=by++,this.code=e,this.usedTimes=0}};function xy(i){return i===Ui||i===Go||i===Ho}function yy(i,e,t,n,r,o){let s=new Nr,a=new Tu,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,T,C,I,F,P){let E=I.fog,D=F.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||N,O),z=k&&k.mapping===No?k.image.height:null,G=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=V!==void 0?V.length:0,K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let se,Q,he,Y;if(G){let bt=Wn[G];se=bt.vertexShader,Q=bt.fragmentShader}else{se=x.vertexShader,Q=x.fragmentShader;let bt=a.getVertexShaderStage(x),ht=a.getFragmentShaderStage(x);a.update(x,bt,ht),he=bt.id,Y=ht.id}let j=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),me=F.isInstancedMesh===!0,pe=F.isBatchedMesh===!0,Ae=!!x.map,rt=!!x.matcap,Ve=!!k,Ke=!!x.aoMap,ot=!!x.lightMap,je=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,Bt=!!x.displacementMap,on=!!x.emissiveMap,wt=!!x.metalnessMap,It=!!x.roughnessMap,$=x.anisotropy>0,Yt=x.clearcoat>0,pt=x.dispersion>0,B=x.retroreflectivity>0,R=x.iridescence>0,J=x.sheen>0,ne=x.transmission>0,oe=$&&!!x.anisotropyMap,ge=Yt&&!!x.clearcoatMap,_e=Yt&&!!x.clearcoatNormalMap,le=Yt&&!!x.clearcoatRoughnessMap,ue=R&&!!x.iridescenceMap,be=R&&!!x.iridescenceThicknessMap,De=J&&!!x.sheenColorMap,Me=J&&!!x.sheenRoughnessMap,xe=!!x.specularMap,Ue=!!x.specularColorMap,Be=!!x.specularIntensityMap,qe=ne&&!!x.transmissionMap,q=ne&&!!x.thicknessMap,ye=!!x.gradientMap,ce=!!x.alphaMap,ve=x.alphaTest>0,Ee=!!x.alphaHash,de=!!x.extensions,Ne=Cn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let Fe={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:Q,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:pe,batchingColor:pe&&F._colorsTexture!==null,instancing:me,instancingColor:me&&F.instanceColor!==null,instancingMorph:me&&F.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:rt,envMap:Ve,envMapMode:Ve&&k.mapping,envMapCubeUVHeight:z,aoMap:Ke,lightMap:ot,bumpMap:je,normalMap:St,displacementMap:Bt,emissiveMap:on,normalMapObjectSpace:St&&x.normalMapType===If,normalMapTangentSpace:St&&x.normalMapType===eu,packedNormalMap:St&&x.normalMapType===eu&&xy(x.normalMap.format),metalnessMap:wt,roughnessMap:It,anisotropy:$,anisotropyMap:oe,clearcoat:Yt,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:le,dispersion:pt,retroreflection:B,iridescence:R,iridescenceMap:ue,iridescenceThicknessMap:be,sheen:J,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:xe,specularColorMap:Ue,specularIntensityMap:Be,transmission:ne,transmissionMap:qe,thicknessMap:q,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Pi&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:ve,alphaHash:Ee,combine:x.combine,mapUv:Ae&&g(x.map.channel),aoMapUv:Ke&&g(x.aoMap.channel),lightMapUv:ot&&g(x.lightMap.channel),bumpMapUv:je&&g(x.bumpMap.channel),normalMapUv:St&&g(x.normalMap.channel),displacementMapUv:Bt&&g(x.displacementMap.channel),emissiveMapUv:on&&g(x.emissiveMap.channel),metalnessMapUv:wt&&g(x.metalnessMap.channel),roughnessMapUv:It&&g(x.roughnessMap.channel),anisotropyMapUv:oe&&g(x.anisotropyMap.channel),clearcoatMapUv:ge&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:Ue&&g(x.specularColorMap.channel),specularIntensityMapUv:Be&&g(x.specularIntensityMap.channel),transmissionMapUv:qe&&g(x.transmissionMap.channel),thicknessMapUv:q&&g(x.thicknessMap.channel),alphaMapUv:ce&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(St||$),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Ae||ce),fog:!!E,useFog:x.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:K,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:on&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mt,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function _(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function M(x){let T=p[x.type],C;if(T){let I=Wn[T];C=$f.clone(I.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new _y(i,T,x,r),c.push(C),u.set(T,C)),C}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function vy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function My(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function md(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,b,_,m){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:p,material:g,materialVariant:s(h),groupOrder:b,renderOrder:h.renderOrder,z:_,group:m},i[e]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=g,y.materialVariant=s(h),y.groupOrder=b,y.renderOrder=h.renderOrder,y.z=_,y.group=m),e++,y}function l(h,p,g,b,_,m,y){y.reversedDepth===!0&&(_=-_);let M=a(h,p,g,b,_,m);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function c(h,p,g,b,_,m){let y=a(h,p,g,b,_,m);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(h,p){t.length>1&&t.sort(h||My),n.length>1&&n.sort(p||pd),r.length>1&&r.sort(p||pd)}function f(){for(let h=e,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:f,sort:u}}function Sy(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new md,i.set(n,[s])):r>=o.length?(s=new md,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ty(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new ae};break;case"SpotLight":t={position:new H,direction:new H,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function wy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ey=0;function Ay(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ry(i){let e=new Ty,t=wy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,o=new Tt,s=new Tt;function a(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,b=0,_=0,m=0,y=0,M=0,v=0,S=0,w=0,A=0,x=0,T=0,C=0;c.sort(Ay);for(let F=0,P=c.length;F<P;F++){let E=c[F],D=E.color,N=E.intensity,O=E.distance,k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ui?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=D.r*N,f+=D.g*N,h+=D.b*N;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],N);C++}else if(E.isSunLight){let z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,V=t.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=k;let ie=G.getViewportCount();for(let K=0;K<ie;K++)n.sunShadowMatrix[b+K]=G.getMatrix(K),n.sunShadowCascade[b+K]=G._cascadeData[K];b+=ie,g++}n.sun[p]=z,p++}else if(E.isDirectionalLight){let z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,V=t.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=k,n.directionalShadowMatrix[_]=E.shadow.matrix,S++}n.directional[_]=z,_++}else if(E.isSpotLight){let z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(D).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[y]=z;let G=E.shadow;if(E.map&&(n.spotLightMap[x]=E.map,x++,G.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[y]=G.matrix,E.castShadow){let V=t.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=k,A++}y++}else if(E.isRectAreaLight){let z=e.get(E);z.color.copy(D).multiplyScalar(N),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[M]=z,M++}else if(E.isPointLight){let z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let G=E.shadow,V=t.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=E.shadow.matrix,w++}n.point[m]=z,m++}else if(E.isHemisphereLight){let z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(N),z.groundColor.copy(E.groundColor).multiplyScalar(N),n.hemi[v]=z,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==p||I.directionalLength!==_||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==x||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=_,n.spot.length=y,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=p,I.directionalLength=_,I.pointLength=m,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=x,I.numLightProbes=C,n.version=Ey++)}function l(c,u){let f=0,h=0,p=0,g=0,b=0,_=0,m=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function gd(i){let e=new Ry(i),t=[],n=[],r=[];function o(h){f.camera=h,t.length=0,n.length=0,r.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function Cy(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new gd(i),e.set(r,[a])):o>=s.length?(a=new gd(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`,Fy=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Ly=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],_d=new Tt,Yo=new H,bu=new H;function Dy(i,e,t){let n=new vo,r=new Je,o=new Je,s=new At,a=new da,l=new pa,c={},u=t.maxTextureSize,f={[Ii]:rn,[rn]:Ii,[Mt]:Mt},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Iy,fragmentShader:Py}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ye(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let m=this.type;this.render=function(w,A,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===af&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Do);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let P=m!==this.type;P&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=w.length;E<D;E++){let N=w[E],O=N.shadow;if(O===void 0){ze("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let k=O.getFrameExtents();r.multiply(k),o.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/k.x),r.x=o.x*k.x,O.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/k.y),r.y=o.y*k.y,O.mapSize.y=o.y));let z=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=z,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Gr){if(N.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new jt(r.x,r.y,{format:Ui,type:Fn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new wi(r.x,r.y,Pn),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=zn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt}else N.isPointLight?(O.map=new bl(r.x),O.map.depthTexture=new ha(r.x,In)):(O.map=new jt(r.x,r.y),O.map.depthTexture=new wi(r.x,r.y,In)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=zn,this.type===Do?(O.map.depthTexture.compareFunction=z?pl:dl,O.map.depthTexture.minFilter=Ht,O.map.depthTexture.magFilter=Ht):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();N.isPointLight!==!0&&O.updateMatrices(N,x);for(let V=0;V<G;V++){let ie=O.getCamera(V);if(N.isPointLight){let K=O.camera,se=O.matrix,Q=N.distance||K.far;Q!==K.far&&(K.far=Q,K.updateProjectionMatrix()),Yo.setFromMatrixPosition(N.matrixWorld),K.position.copy(Yo),bu.copy(K.position),bu.add(Fy[V]),K.up.copy(Ly[V]),K.lookAt(bu),K.updateMatrixWorld(),se.makeTranslation(-Yo.x,-Yo.y,-Yo.z),_d.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O._frustum.setFromProjectionMatrix(_d,K.coordinateSystem,K.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,V),i.clear();else{V===0&&(i.setRenderTarget(O.map),i.clear());let K=O.getViewport(V);s.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),F.viewport(s)}n=O.getFrustum(V),v(A,x,ie,N,this.type)}O.isPointLightShadow!==!0&&this.type===Gr&&y(O,x),O.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(T,C,I)};function y(w,A){let x=e.update(b);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new jt(r.x,r.y,{format:Ui,type:Fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,x,h,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,x,p,b,null)}function M(w,A,x,T){let C=null,I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=C.uuid,P=A.uuid,E=c[F];E===void 0&&(E={},c[F]=E);let D=E[P];D===void 0&&(D=C.clone(),E[P]=D,A.addEventListener("dispose",S)),C=D}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Gr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=x}return C}function v(w,A,x,T,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Gr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let P=e.update(w),E=w.material;if(Array.isArray(E)){let D=P.groups;for(let N=0,O=D.length;N<O;N++){let k=D[N],z=E[k.materialIndex];if(z&&z.visible){let G=M(w,z,T,C);w.onBeforeShadow(i,w,A,x,P,G,k),i.renderBufferDirect(x,null,P,G,w,k),w.onAfterShadow(i,w,A,x,P,G,k)}}}else if(E.visible){let D=M(w,E,T,C);w.onBeforeShadow(i,w,A,x,P,D,null),i.renderBufferDirect(x,null,P,D,w,null),w.onAfterShadow(i,w,A,x,P,D,null)}}let F=w.children;for(let P=0,E=F.length;P<E;P++)v(F[P],A,x,T,C)}function S(w){w.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Uy(i,e){function t(){let q=!1,ye=new At,ce=null,ve=new At(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!q&&(i.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,de,Ne,Fe,bt){bt===!0&&(Ee*=Fe,de*=Fe,Ne*=Fe),ye.set(Ee,de,Ne,Fe),ve.equals(ye)===!1&&(i.clearColor(Ee,de,Ne,Fe),ve.copy(ye))},reset:function(){q=!1,ce=null,ve.set(-1,0,0,0)}}}function n(){let q=!1,ye=!1,ce=null,ve=null,Ee=null;return{setReversed:function(de){if(ye!==de){let Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ye=de;let Fe=Ee;Ee=null,this.setClear(Fe)}},getReversed:function(){return ye},setTest:function(de){de?j(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(de){ce!==de&&!q&&(i.depthMask(de),ce=de)},setFunc:function(de){if(ye&&(de=Gf[de]),ve!==de){switch(de){case $s:i.depthFunc(i.NEVER);break;case Zs:i.depthFunc(i.ALWAYS);break;case Ks:i.depthFunc(i.LESS);break;case Fr:i.depthFunc(i.LEQUAL);break;case Js:i.depthFunc(i.EQUAL);break;case Qs:i.depthFunc(i.GEQUAL);break;case js:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=de}},setLocked:function(de){q=de},setClear:function(de){Ee!==de&&(Ee=de,ye&&(de=1-de),i.clearDepth(de))},reset:function(){q=!1,ce=null,ve=null,Ee=null,ye=!1}}}function r(){let q=!1,ye=null,ce=null,ve=null,Ee=null,de=null,Ne=null,Fe=null,bt=null;return{setTest:function(ht){q||(ht?j(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ht){ye!==ht&&!q&&(i.stencilMask(ht),ye=ht)},setFunc:function(ht,Sn,Nn){(ce!==ht||ve!==Sn||Ee!==Nn)&&(i.stencilFunc(ht,Sn,Nn),ce=ht,ve=Sn,Ee=Nn)},setOp:function(ht,Sn,Nn){(de!==ht||Ne!==Sn||Fe!==Nn)&&(i.stencilOp(ht,Sn,Nn),de=ht,Ne=Sn,Fe=Nn)},setLocked:function(ht){q=ht},setClear:function(ht){bt!==ht&&(i.clearStencil(ht),bt=ht)},reset:function(){q=!1,ye=null,ce=null,ve=null,Ee=null,de=null,Ne=null,Fe=null,bt=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,g=[],b=null,_=!1,m=null,y=null,M=null,v=null,S=null,w=null,A=null,x=new ae(0,0,0),T=0,C=!1,I=null,F=null,P=null,E=null,D=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,k=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=k>=2);let G=null,V={},ie=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),se=new At().fromArray(ie),Q=new At().fromArray(K);function he(q,ye,ce,ve){let Ee=new Uint8Array(4),de=i.createTexture();i.bindTexture(q,de),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ce;Ne++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ye+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return de}let Y={};Y[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(i.DEPTH_TEST),s.setFunc(Fr),je(!1),St(Dc),j(i.CULL_FACE),Ke(Gn);function j(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function fe(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function me(q,ye){return h[q]!==ye?(i.bindFramebuffer(q,ye),h[q]=ye,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function pe(q,ye){let ce=g,ve=!1;if(q){ce=p.get(ye),ce===void 0&&(ce=[],p.set(ye,ce));let Ee=q.textures;if(ce.length!==Ee.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ne=Ee.length;de<Ne;de++)ce[de]=i.COLOR_ATTACHMENT0+de;ce.length=Ee.length,ve=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ce)}function Ae(q){return b!==q?(i.useProgram(q),b=q,!0):!1}let rt={[er]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};rt[hf]=i.MIN,rt[ff]=i.MAX;let Ve={[df]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[Oc]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[bf]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(q,ye,ce,ve,Ee,de,Ne,Fe,bt,ht){if(q===Gn){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),q!==lf){if(q!==m||ht!==C){if((y!==er||S!==er)&&(i.blendEquation(i.FUNC_ADD),y=er,S=er),ht)switch(q){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lt:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke("WebGLState: Invalid blending: ",q);break}else switch(q){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",q);break}M=null,v=null,w=null,A=null,x.set(0,0,0),T=0,m=q,C=ht}return}Ee=Ee||ye,de=de||ce,Ne=Ne||ve,(ye!==y||Ee!==S)&&(i.blendEquationSeparate(rt[ye],rt[Ee]),y=ye,S=Ee),(ce!==M||ve!==v||de!==w||Ne!==A)&&(i.blendFuncSeparate(Ve[ce],Ve[ve],Ve[de],Ve[Ne]),M=ce,v=ve,w=de,A=Ne),(Fe.equals(x)===!1||bt!==T)&&(i.blendColor(Fe.r,Fe.g,Fe.b,bt),x.copy(Fe),T=bt),m=q,C=!1}function ot(q,ye){q.side===Mt?fe(i.CULL_FACE):j(i.CULL_FACE);let ce=q.side===rn;ye&&(ce=!ce),je(ce),q.blending===Pi&&q.transparent===!1?Ke(Gn):Ke(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),s.setFunc(q.depthFunc),s.setTest(q.depthTest),s.setMask(q.depthWrite),o.setMask(q.colorWrite);let ve=q.stencilWrite;a.setTest(ve),ve&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),on(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(q){I!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),I=q)}function St(q){q!==of?(j(i.CULL_FACE),q!==F&&(q===Dc?i.cullFace(i.BACK):q===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),F=q}function Bt(q){q!==P&&(O&&i.lineWidth(q),P=q)}function on(q,ye,ce){q?(j(i.POLYGON_OFFSET_FILL),(E!==ye||D!==ce)&&(E=ye,D=ce,s.getReversed()&&(ye=-ye),i.polygonOffset(ye,ce))):fe(i.POLYGON_OFFSET_FILL)}function wt(q){q?j(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function It(q){q===void 0&&(q=i.TEXTURE0+N-1),G!==q&&(i.activeTexture(q),G=q)}function $(q,ye,ce){ce===void 0&&(G===null?ce=i.TEXTURE0+N-1:ce=G);let ve=V[ce];ve===void 0&&(ve={type:void 0,texture:void 0},V[ce]=ve),(ve.type!==q||ve.texture!==ye)&&(G!==ce&&(i.activeTexture(ce),G=ce),i.bindTexture(q,ye||Y[q]),ve.type=q,ve.texture=ye)}function Yt(){let q=V[G];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(q){ke("WebGLState:",q)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(q){ke("WebGLState:",q)}}function R(){try{i.texSubImage2D(...arguments)}catch(q){ke("WebGLState:",q)}}function J(){try{i.texSubImage3D(...arguments)}catch(q){ke("WebGLState:",q)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(q){ke("WebGLState:",q)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(q){ke("WebGLState:",q)}}function ge(){try{i.texStorage2D(...arguments)}catch(q){ke("WebGLState:",q)}}function _e(){try{i.texStorage3D(...arguments)}catch(q){ke("WebGLState:",q)}}function le(){try{i.texImage2D(...arguments)}catch(q){ke("WebGLState:",q)}}function ue(){try{i.texImage3D(...arguments)}catch(q){ke("WebGLState:",q)}}function be(q){return f[q]!==void 0?f[q]:i.getParameter(q)}function De(q,ye){f[q]!==ye&&(i.pixelStorei(q,ye),f[q]=ye)}function Me(q){se.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),se.copy(q))}function xe(q){Q.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function Ue(q,ye){let ce=c.get(ye);ce===void 0&&(ce=new WeakMap,c.set(ye,ce));let ve=ce.get(q);ve===void 0&&(ve=i.getUniformBlockIndex(ye,q.name),ce.set(q,ve))}function Be(q,ye){let ve=c.get(ye).get(q);l.get(ye)!==ve&&(i.uniformBlockBinding(ye,ve,q.__bindingPointIndex),l.set(ye,ve))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,V={},h={},p=new WeakMap,g=[],b=null,_=!1,m=null,y=null,M=null,v=null,S=null,w=null,A=null,x=new ae(0,0,0),T=0,C=!1,I=null,F=null,P=null,E=null,D=null,se.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:j,disable:fe,bindFramebuffer:me,drawBuffers:pe,useProgram:Ae,setBlending:Ke,setMaterial:ot,setFlipSided:je,setCullFace:St,setLineWidth:Bt,setPolygonOffset:on,setScissorTest:wt,activeTexture:It,bindTexture:$,unbindTexture:Yt,compressedTexImage2D:pt,compressedTexImage3D:B,texImage2D:le,texImage3D:ue,pixelStorei:De,getParameter:be,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:ge,texStorage3D:_e,texSubImage2D:R,texSubImage3D:J,compressedTexSubImage2D:ne,compressedTexSubImage3D:oe,scissor:Me,viewport:xe,reset:qe}}function Ny(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap,f=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,R){return g?new OffscreenCanvas(B,R):Lr("canvas")}function _(B,R,J){let ne=1,oe=pt(B);if((oe.width>J||oe.height>J)&&(ne=J/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let ge=Math.floor(ne*oe.width),_e=Math.floor(ne*oe.height);h===void 0&&(h=b(ge,_e));let le=R?b(ge,_e):h;return le.width=ge,le.height=_e,le.getContext("2d").drawImage(B,0,0,ge,_e),ze("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ge+"x"+_e+")."),le}else return"data"in B&&ze("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),B;return B}function m(B){return B.generateMipmaps}function y(B){i.generateMipmap(B)}function M(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(B,R,J,ne,oe,ge=!1){if(B!==null){if(i[B]!==void 0)return i[B];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let _e;ne&&(_e=e.get("EXT_texture_norm16"),_e||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=R;if(R===i.RED&&(J===i.FLOAT&&(le=i.R32F),J===i.HALF_FLOAT&&(le=i.R16F),J===i.UNSIGNED_BYTE&&(le=i.R8),J===i.UNSIGNED_SHORT&&_e&&(le=_e.R16_EXT),J===i.SHORT&&_e&&(le=_e.R16_SNORM_EXT)),R===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.R8UI),J===i.UNSIGNED_SHORT&&(le=i.R16UI),J===i.UNSIGNED_INT&&(le=i.R32UI),J===i.BYTE&&(le=i.R8I),J===i.SHORT&&(le=i.R16I),J===i.INT&&(le=i.R32I)),R===i.RG&&(J===i.FLOAT&&(le=i.RG32F),J===i.HALF_FLOAT&&(le=i.RG16F),J===i.UNSIGNED_BYTE&&(le=i.RG8),J===i.UNSIGNED_SHORT&&_e&&(le=_e.RG16_EXT),J===i.SHORT&&_e&&(le=_e.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.RG8UI),J===i.UNSIGNED_SHORT&&(le=i.RG16UI),J===i.UNSIGNED_INT&&(le=i.RG32UI),J===i.BYTE&&(le=i.RG8I),J===i.SHORT&&(le=i.RG16I),J===i.INT&&(le=i.RG32I)),R===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.RGB8UI),J===i.UNSIGNED_SHORT&&(le=i.RGB16UI),J===i.UNSIGNED_INT&&(le=i.RGB32UI),J===i.BYTE&&(le=i.RGB8I),J===i.SHORT&&(le=i.RGB16I),J===i.INT&&(le=i.RGB32I)),R===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),J===i.UNSIGNED_INT&&(le=i.RGBA32UI),J===i.BYTE&&(le=i.RGBA8I),J===i.SHORT&&(le=i.RGBA16I),J===i.INT&&(le=i.RGBA32I)),R===i.RGB&&(J===i.UNSIGNED_SHORT&&_e&&(le=_e.RGB16_EXT),J===i.SHORT&&_e&&(le=_e.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),R===i.RGBA){let ue=ge?go:tt.getTransfer(oe);J===i.FLOAT&&(le=i.RGBA32F),J===i.HALF_FLOAT&&(le=i.RGBA16F),J===i.UNSIGNED_BYTE&&(le=ue===dt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&_e&&(le=_e.RGBA16_EXT),J===i.SHORT&&_e&&(le=_e.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function S(B,R){let J;return B?R===null||R===In||R===Wr?J=i.DEPTH24_STENCIL8:R===Pn?J=i.DEPTH32F_STENCIL8:R===Hr&&(J=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===In||R===Wr?J=i.DEPTH_COMPONENT24:R===Pn?J=i.DEPTH_COMPONENT32F:R===Hr&&(J=i.DEPTH_COMPONENT16),J}function w(B,R){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==kt&&B.minFilter!==Ht?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function A(B){let R=B.target;R.removeEventListener("dispose",A),T(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function x(B){let R=B.target;R.removeEventListener("dispose",x),I(R)}function T(B){let R=n.get(B);if(R.__webglInit===void 0)return;let J=B.source,ne=p.get(J);if(ne){let oe=ne[R.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(B),Object.keys(ne).length===0&&p.delete(J)}n.remove(B)}function C(B){let R=n.get(B);i.deleteTexture(R.__webglTexture);let J=B.source,ne=p.get(J);delete ne[R.__cacheKey],s.memory.textures--}function I(B){let R=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(R.__webglFramebuffer[ne]))for(let oe=0;oe<R.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(R.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(R.__webglFramebuffer[ne]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ne])}else{if(Array.isArray(R.__webglFramebuffer))for(let ne=0;ne<R.__webglFramebuffer.length;ne++)i.deleteFramebuffer(R.__webglFramebuffer[ne]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ne=0;ne<R.__webglColorRenderbuffer.length;ne++)R.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ne]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let J=B.textures;for(let ne=0,oe=J.length;ne<oe;ne++){let ge=n.get(J[ne]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),s.memory.textures--),n.remove(J[ne])}n.remove(B)}let F=0;function P(){F=0}function E(){return F}function D(B){F=B}function N(){let B=F;return B>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,B}function O(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function k(B,R){let J=n.get(B);if(B.isVideoTexture&&$(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){let ne=B.image;if(ne===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(J,B,R);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+R)}function z(B,R){let J=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){fe(J,B,R);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+R)}function G(B,R){let J=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){fe(J,B,R);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+R)}function V(B,R){let J=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&J.__version!==B.version){me(J,B,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+R)}let ie={[$i]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},K={[kt]:i.NEAREST,[Rf]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},se={[Ff]:i.NEVER,[Of]:i.ALWAYS,[Lf]:i.LESS,[dl]:i.LEQUAL,[Df]:i.EQUAL,[pl]:i.GEQUAL,[Uf]:i.GREATER,[Nf]:i.NOTEQUAL};function Q(B,R){if(R.type===Pn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ht||R.magFilter===Ia||R.magFilter===Oo||R.magFilter===Li||R.minFilter===Ht||R.minFilter===Ia||R.minFilter===Oo||R.minFilter===Li)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ie[R.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ie[R.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ie[R.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,K[R.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,K[R.minFilter]),R.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,se[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===kt||R.minFilter!==Oo&&R.minFilter!==Li||R.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function he(B,R){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",A));let ne=R.source,oe=p.get(ne);oe===void 0&&(oe={},p.set(ne,oe));let ge=O(R);if(ge!==B.__cacheKey){oe[ge]===void 0&&(oe[ge]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,J=!0),oe[ge].usedTimes++;let _e=oe[B.__cacheKey];_e!==void 0&&(oe[B.__cacheKey].usedTimes--,_e.usedTimes===0&&C(R)),B.__cacheKey=ge,B.__webglTexture=oe[ge].texture}return J}function Y(B,R,J){return Math.floor(Math.floor(B/J)/R)}function j(B,R,J,ne){let ge=B.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,J,ne,R.data);else{ge.sort((De,Me)=>De.start-Me.start);let _e=0;for(let De=1;De<ge.length;De++){let Me=ge[_e],xe=ge[De],Ue=Me.start+Me.count,Be=Y(xe.start,R.width,4),qe=Y(Me.start,R.width,4);xe.start<=Ue+1&&Be===qe&&Y(xe.start+xe.count-1,R.width,4)===Be?Me.count=Math.max(Me.count,xe.start+xe.count-Me.start):(++_e,ge[_e]=xe)}ge.length=_e+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let De=0,Me=ge.length;De<Me;De++){let xe=ge[De],Ue=Math.floor(xe.start/4),Be=Math.ceil(xe.count/4),qe=Ue%R.width,q=Math.floor(Ue/R.width),ye=Be,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,qe,q,ye,ce,J,ne,R.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function fe(B,R,J){let ne=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ne=i.TEXTURE_3D);let oe=he(B,R),ge=R.source;t.bindTexture(ne,B.__webglTexture,i.TEXTURE0+J);let _e=n.get(ge);if(ge.version!==_e.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ce=tt.getPrimaries(tt.workingColorSpace),ve=R.colorSpace===si?null:tt.getPrimaries(R.colorSpace),Ee=R.colorSpace===si||ce===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let ue=_(R.image,!1,r.maxTextureSize);ue=Yt(R,ue);let be=o.convert(R.format,R.colorSpace),De=o.convert(R.type),Me=v(R.internalFormat,be,De,R.normalized,R.colorSpace,R.isVideoTexture);Q(ne,R);let xe,Ue=R.mipmaps,Be=R.isVideoTexture!==!0,qe=_e.__version===void 0||oe===!0,q=ge.dataReady,ye=w(R,ue);if(R.isDepthTexture)Me=S(R.format===Di,R.type),qe&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Me,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Me,ue.width,ue.height,0,be,De,null));else if(R.isDataTexture)if(Ue.length>0){Be&&qe&&t.texStorage2D(i.TEXTURE_2D,ye,Me,Ue[0].width,Ue[0].height);for(let ce=0,ve=Ue.length;ce<ve;ce++)xe=Ue[ce],Be?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,be,De,xe.data):t.texImage2D(i.TEXTURE_2D,ce,Me,xe.width,xe.height,0,be,De,xe.data);R.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(i.TEXTURE_2D,ye,Me,ue.width,ue.height),q&&j(R,ue,be,De)):t.texImage2D(i.TEXTURE_2D,0,Me,ue.width,ue.height,0,be,De,ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Be&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Me,Ue[0].width,Ue[0].height,ue.depth);for(let ce=0,ve=Ue.length;ce<ve;ce++)if(xe=Ue[ce],R.format!==vn)if(be!==null)if(Be){if(q)if(R.layerUpdates.size>0){let Ee=au(xe.width,xe.height,R.format,R.type);for(let de of R.layerUpdates){let Ne=xe.data.subarray(de*Ee/xe.data.BYTES_PER_ELEMENT,(de+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,de,xe.width,xe.height,1,be,Ne)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,ue.depth,be,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Me,xe.width,xe.height,ue.depth,0,xe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,ue.depth,be,De,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Me,xe.width,xe.height,ue.depth,0,be,De,xe.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Be&&qe&&t.texStorage2D(i.TEXTURE_2D,ye,Me,Ue[0].width,Ue[0].height);for(let ce=0,ve=Ue.length;ce<ve;ce++)xe=Ue[ce],R.format!==vn?be!==null?Be?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Me,xe.width,xe.height,0,xe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,be,De,xe.data):t.texImage2D(i.TEXTURE_2D,ce,Me,xe.width,xe.height,0,be,De,xe.data)}else if(R.isDataArrayTexture)if(Be){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Me,ue.width,ue.height,ue.depth),q)if(R.layerUpdates.size>0){let ce=au(ue.width,ue.height,R.format,R.type);for(let ve of R.layerUpdates){let Ee=ue.data.subarray(ve*ce/ue.data.BYTES_PER_ELEMENT,(ve+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,ue.width,ue.height,1,be,De,Ee)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,De,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ue.width,ue.height,ue.depth,0,be,De,ue.data);else if(R.isData3DTexture)Be?(qe&&t.texStorage3D(i.TEXTURE_3D,ye,Me,ue.width,ue.height,ue.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,De,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ue.width,ue.height,ue.depth,0,be,De,ue.data);else if(R.isFramebufferTexture){if(qe)if(Be)t.texStorage2D(i.TEXTURE_2D,ye,Me,ue.width,ue.height);else{let ce=ue.width,ve=ue.height;for(let Ee=0;Ee<ye;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Me,ce,ve,0,be,De,null),ce>>=1,ve>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ue.parentNode!==ce){ce.appendChild(ue),f.add(R),ce.onpaint=ve=>{let Ee=ve.changedElements;for(let de of f)Ee.includes(de.image)&&(de.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Ee=i.RGBA,de=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,de,Ne,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Be&&qe){let ce=pt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ye,Me,ce.width,ce.height)}for(let ce=0,ve=Ue.length;ce<ve;ce++)xe=Ue[ce],Be?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,be,De,xe):t.texImage2D(i.TEXTURE_2D,ce,Me,be,De,xe);R.generateMipmaps=!1}else if(Be){if(qe){let ce=pt(ue);t.texStorage2D(i.TEXTURE_2D,ye,Me,ce.width,ce.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,De,ue)}else t.texImage2D(i.TEXTURE_2D,0,Me,be,De,ue);m(R)&&y(ne),_e.__version=ge.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function me(B,R,J){if(R.image.length!==6)return;let ne=he(B,R),oe=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+J);let ge=n.get(oe);if(oe.version!==ge.__version||ne===!0){t.activeTexture(i.TEXTURE0+J);let _e=tt.getPrimaries(tt.workingColorSpace),le=R.colorSpace===si?null:tt.getPrimaries(R.colorSpace),ue=R.colorSpace===si||_e===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let be=R.isCompressedTexture||R.image[0].isCompressedTexture,De=R.image[0]&&R.image[0].isDataTexture,Me=[];for(let de=0;de<6;de++)!be&&!De?Me[de]=_(R.image[de],!0,r.maxCubemapSize):Me[de]=De?R.image[de].image:R.image[de],Me[de]=Yt(R,Me[de]);let xe=Me[0],Ue=o.convert(R.format,R.colorSpace),Be=o.convert(R.type),qe=v(R.internalFormat,Ue,Be,R.normalized,R.colorSpace),q=R.isVideoTexture!==!0,ye=ge.__version===void 0||ne===!0,ce=oe.dataReady,ve=w(R,xe);Q(i.TEXTURE_CUBE_MAP,R);let Ee;if(be){q&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,xe.width,xe.height);for(let de=0;de<6;de++){Ee=Me[de].mipmaps;for(let Ne=0;Ne<Ee.length;Ne++){let Fe=Ee[Ne];R.format!==vn?Ue!==null?q?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Fe.width,Fe.height,Ue,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,qe,Fe.width,Fe.height,0,Fe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Fe.width,Fe.height,Ue,Be,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,qe,Fe.width,Fe.height,0,Ue,Be,Fe.data)}}}else{if(Ee=R.mipmaps,q&&ye){Ee.length>0&&ve++;let de=pt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,de.width,de.height)}for(let de=0;de<6;de++)if(De){q?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Me[de].width,Me[de].height,Ue,Be,Me[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Me[de].width,Me[de].height,0,Ue,Be,Me[de].data);for(let Ne=0;Ne<Ee.length;Ne++){let bt=Ee[Ne].image[de].image;q?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,bt.width,bt.height,Ue,Be,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,qe,bt.width,bt.height,0,Ue,Be,bt.data)}}else{q?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,Be,Me[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Ue,Be,Me[de]);for(let Ne=0;Ne<Ee.length;Ne++){let Fe=Ee[Ne];q?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,Ue,Be,Fe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,qe,Ue,Be,Fe.image[de])}}}m(R)&&y(i.TEXTURE_CUBE_MAP),ge.__version=oe.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function pe(B,R,J,ne,oe,ge){let _e=o.convert(J.format,J.colorSpace),le=o.convert(J.type),ue=v(J.internalFormat,_e,le,J.normalized,J.colorSpace),be=n.get(R),De=n.get(J);if(De.__renderTarget=R,!be.__hasExternalTextures){let Me=Math.max(1,R.width>>ge),xe=Math.max(1,R.height>>ge);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ge,ue,Me,xe,R.depth,0,_e,le,null):t.texImage2D(oe,ge,ue,Me,xe,0,_e,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),It(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,De.__webglTexture,0,wt(R)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,De.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(B,R,J){if(i.bindRenderbuffer(i.RENDERBUFFER,B),R.depthBuffer){let ne=R.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,ge=S(R.stencilBuffer,oe),_e=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(R),ge,R.width,R.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(R),ge,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,B)}else{let ne=R.textures;for(let oe=0;oe<ne.length;oe++){let ge=ne[oe],_e=o.convert(ge.format,ge.colorSpace),le=o.convert(ge.type),ue=v(ge.internalFormat,_e,le,ge.normalized,ge.colorSpace);It(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(R),ue,R.width,R.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(R),ue,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ue,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(B,R,J){let ne=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(R.depthTexture);if(oe.__renderTarget=R,(!oe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ne){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(i.TEXTURE_CUBE_MAP,R.depthTexture);let be=o.convert(R.depthTexture.format),De=o.convert(R.depthTexture.type),Me;R.depthTexture.format===zn?Me=i.DEPTH_COMPONENT24:R.depthTexture.format===Di&&(Me=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Me,R.width,R.height,0,be,De,null)}}else k(R.depthTexture,0);let ge=oe.__webglTexture,_e=wt(R),le=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,ue=R.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===zn)It(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,le,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ue,le,ge,0);else if(R.depthTexture.format===Di)It(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,le,ge,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ue,le,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(B){let R=n.get(B),J=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let ne=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ne){let oe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),R.__depthDisposeCallback=oe}R.__boundDepthTexture=ne}if(B.depthTexture&&!R.__autoAllocateDepthBuffer)if(J)for(let ne=0;ne<6;ne++)rt(R.__webglFramebuffer[ne],B,ne);else{let ne=B.texture.mipmaps;ne&&ne.length>0?rt(R.__webglFramebuffer[0],B,0):rt(R.__webglFramebuffer,B,0)}else if(J){R.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ne]),R.__webglDepthbuffer[ne]===void 0)R.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ae(R.__webglDepthbuffer[ne],B,!1);else{let oe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ge)}}else{let ne=B.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Ae(R.__webglDepthbuffer,B,!1);else{let oe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(B,R,J){let ne=n.get(B);R!==void 0&&pe(ne.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Ve(B)}function ot(B){let R=B.texture,J=n.get(B),ne=n.get(R);B.addEventListener("dispose",x);let oe=B.textures,ge=B.isWebGLCubeRenderTarget===!0,_e=oe.length>1;if(_e||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=R.version,s.memory.textures++),ge){J.__webglFramebuffer=[];for(let le=0;le<6;le++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[le]=[];for(let ue=0;ue<R.mipmaps.length;ue++)J.__webglFramebuffer[le][ue]=i.createFramebuffer()}else J.__webglFramebuffer[le]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let le=0;le<R.mipmaps.length;le++)J.__webglFramebuffer[le]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(_e)for(let le=0,ue=oe.length;le<ue;le++){let be=n.get(oe[le]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),s.memory.textures++)}if(B.samples>0&&It(B)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){let ue=oe[le];J.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[le]);let be=o.convert(ue.format,ue.colorSpace),De=o.convert(ue.type),Me=v(ue.internalFormat,be,De,ue.normalized,ue.colorSpace,B.isXRRenderTarget===!0),xe=wt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Me,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,J.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(J.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Q(i.TEXTURE_CUBE_MAP,R);for(let le=0;le<6;le++)if(R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)pe(J.__webglFramebuffer[le][ue],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else pe(J.__webglFramebuffer[le],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(R)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let le=0,ue=oe.length;le<ue;le++){let be=oe[le],De=n.get(be),Me=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Me=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,De.__webglTexture),Q(Me,be),pe(J.__webglFramebuffer,B,be,i.COLOR_ATTACHMENT0+le,Me,0),m(be)&&y(Me)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(le=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),Q(le,R),R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)pe(J.__webglFramebuffer[ue],B,R,i.COLOR_ATTACHMENT0,le,ue);else pe(J.__webglFramebuffer,B,R,i.COLOR_ATTACHMENT0,le,0);m(R)&&y(le),t.unbindTexture()}B.depthBuffer&&Ve(B)}function je(B){let R=B.textures;for(let J=0,ne=R.length;J<ne;J++){let oe=R[J];if(m(oe)){let ge=M(B),_e=n.get(oe).__webglTexture;t.bindTexture(ge,_e),y(ge),t.unbindTexture()}}}let St=[],Bt=[];function on(B){if(B.samples>0){if(It(B)===!1){let R=B.textures,J=B.width,ne=B.height,oe=i.COLOR_BUFFER_BIT,ge=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(B),le=R.length>1;if(le)for(let be=0;be<R.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let ue=B.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let be=0;be<R.length;be++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let De=n.get(R[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,J,ne,0,0,J,ne,oe,i.NEAREST),l===!0&&(St.length=0,Bt.length=0,St.push(i.COLOR_ATTACHMENT0+be),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(St.push(ge),Bt.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<R.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let De=n.get(R[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let R=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function wt(B){return Math.min(r.maxSamples,B.samples)}function It(B){let R=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function $(B){let R=s.render.frame;u.get(B)!==R&&(u.set(B,R),B.update())}function Yt(B,R){let J=B.colorSpace,ne=B.format,oe=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==mo&&J!==si&&(tt.getTransfer(J)===dt?(ne!==vn||oe!==pn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",J)),R}function pt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=E,this.setTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=Ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Oy(i,e){function t(n,r=si){let o,s=tt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===$c)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===vn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Bo||n===zo||n===ko||n===Vo)if(s===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Oa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===Go||n===Ya)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Va||n===Ga)return s===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ha)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wa)return o.COMPRESSED_R11_EAC;if(n===Xa)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Go)return o.COMPRESSED_RG11_EAC;if(n===Ya)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===$a||n===Za||n===Ka||n===Ja||n===Qa||n===ja||n===el||n===tl||n===nl||n===il||n===rl||n===ol||n===sl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===qa)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===al||n===ll||n===cl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===al)return s===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===hl||n===Ho||n===fl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ul)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zy=`
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

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new So(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:By,fragmentShader:zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends kn{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null,b=typeof XRWebGLBinding<"u",_=new Eu,m={},y=t.getContextAttributes(),M=null,v=null,S=[],w=[],A=new Je,x=null,T=null,C=new Kt;C.viewport=new At;let I=new Kt;I.viewport=new At;let F=[C,I],P=new Ea,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=S[Y];return j===void 0&&(j=new Or,S[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=S[Y];return j===void 0&&(j=new Or,S[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=S[Y];return j===void 0&&(j=new Or,S[Y]=j),j.getHandSpace()};function N(Y){let j=w.indexOf(Y.inputSource);if(j===-1)return;let fe=S[j];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||s),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<S.length;Y++){let j=w[Y];j!==null&&(w[Y]=null,S[Y].disconnect(j))}E=null,D=null,_.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(M),p=null,h=null,f=null,r=null,v=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",O),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,me=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Di:zn,me=y.stencil?Wr:In);let Ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};f=this.getBinding(),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new jt(h.textureWidth,h.textureHeight,{format:vn,type:pn,depthTexture:new wi(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jt(p.framebufferWidth,p.framebufferHeight,{format:vn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(Y){for(let j=0;j<Y.removed.length;j++){let fe=Y.removed[j],me=w.indexOf(fe);me>=0&&(w[me]=null,S[me].disconnect(fe))}for(let j=0;j<Y.added.length;j++){let fe=Y.added[j],me=w.indexOf(fe);if(me===-1){for(let Ae=0;Ae<S.length;Ae++)if(Ae>=w.length){w.push(fe),me=Ae;break}else if(w[Ae]===null){w[Ae]=fe,me=Ae;break}if(me===-1)break}let pe=S[me];pe&&pe.connect(fe)}}let z=new H,G=new H;function V(Y,j,fe){z.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);let me=z.distanceTo(G),pe=j.projectionMatrix.elements,Ae=fe.projectionMatrix.elements,rt=pe[14]/(pe[10]-1),Ve=pe[14]/(pe[10]+1),Ke=(pe[9]+1)/pe[5],ot=(pe[9]-1)/pe[5],je=(pe[8]-1)/pe[0],St=(Ae[8]+1)/Ae[0],Bt=rt*je,on=rt*St,wt=me/(-je+St),It=wt*-je;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pe[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let $=rt+wt,Yt=Ve+wt,pt=Bt-It,B=on+(me-It),R=Ke*Ve/Yt*$,J=ot*Ve/Yt*$;Y.projectionMatrix.makePerspective(pt,B,R,J,$,Yt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let j=Y.near,fe=Y.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),P.near=I.near=C.near=j,P.far=I.far=C.far=fe,(E!==P.near||D!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),E=P.near,D=P.far),P.layers.mask=Y.layers.mask|6,C.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let me=Y.parent,pe=P.cameras;ie(P,me);for(let Ae=0;Ae<pe.length;Ae++)ie(pe[Ae],me);pe.length===2?V(P,C,I):P.projectionMatrix.copy(C.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),K(Y,P,me)};function K(Y,j,fe){fe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ia*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(Y){return m[Y]};let se=null;function Q(Y,j){if(u=j.getViewerPose(c||s),g=j,u!==null){let fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let me=!1;fe.length!==P.cameras.length&&(P.cameras.length=0,me=!0);for(let Ve=0;Ve<fe.length;Ve++){let Ke=fe[Ve],ot=null;if(p!==null)ot=p.getViewport(Ke);else{let St=f.getViewSubImage(h,Ke);ot=St.viewport,Ve===0&&(e.setRenderTargetTextures(v,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(v))}let je=F[Ve];je===void 0&&(je=new Kt,je.layers.enable(Ve),je.viewport=new At,F[Ve]=je),je.matrix.fromArray(Ke.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ke.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(P.matrix.copy(je.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),me===!0&&P.cameras.push(je)}let pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let Ve=f.getDepthInformation(fe[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(Ve,r.renderState)}if(pe&&pe.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let Ve=0;Ve<fe.length;Ve++){let Ke=fe[Ve].camera;if(Ke){let ot=m[Ke];ot||(ot=new So,m[Ke]=ot);let je=f.getCameraImage(Ke);ot.sourceTexture=je}}}}for(let fe=0;fe<S.length;fe++){let me=w[fe],pe=S[fe];me!==null&&pe!==void 0&&pe.update(me,j,c||s)}se&&se(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let he=new bd;he.setAnimationLoop(Q),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}},ky=new Tt,Td=new We;Td.set(-1,0,0,0,1,0,0,0,1);function Vy(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,ru(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,y,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(_,m):m.isMeshLambertMaterial?(o(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(_,m),f(_,m)):m.isMeshPhongMaterial?(o(_,m),u(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(_,m),h(_,m),m.isMeshPhysicalMaterial&&p(_,m,v)):m.isMeshMatcapMaterial?(o(_,m),g(_,m)):m.isMeshDepthMaterial?o(_,m):m.isMeshDistanceMaterial?(o(_,m),b(_,m)):m.isMeshNormalMaterial?o(_,m):m.isLineBasicMaterial?(s(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,y,M):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===rn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===rn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let y=e.get(m),M=y.envMap,v=y.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Td),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function s(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,y,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*y,_.scale.value=M*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function h(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,y){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function b(_,m){let y=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gy(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=r[v.id];w===void 0&&(_(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",y));let A=S.program;n.updateUBOMapping(v,A);let x=e.render.frame;o[v.id]!==x&&(h(v),o[v.id]=x)}function u(v){let S=f();v.__bindingPointIndex=S;let w=i.createBuffer(),A=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let S=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,T=w.length;x<T;x++){let C=w[x];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)p(C[I],x,I,A);else p(C,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,w,A){if(b(v,S,w,A)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let F=T[I],P=m(F);g(F,v.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function b(v,S,w,A){let x=v.value,T=S+"_"+w;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let C=A[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function _(v){let S=v.uniforms,w=0,A=16;for(let T=0,C=S.length;T<C;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,P=I.length;F<P;F++){let E=I[F],D=Array.isArray(E.value)?E.value:[E.value];for(let N=0,O=D.length;N<O;N++){let k=D[N],z=m(k),G=w%A,V=G%z.boundary,ie=G+V;w+=V,ie!==0&&A-ie<z.storage&&(w+=A-ie),E.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,w+=z.storage}}}let x=w%A;return x>0&&(w+=A-x),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let w=s.indexOf(S.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function M(){for(let v in r)i.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:M}}var Hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function Wy(){return Hn===null&&(Hn=new aa(Hy,16,16,Ui,Fn),Hn.name="DFG_LUT",Hn.minFilter=Ht,Hn.magFilter=Ht,Hn.wrapS=hn,Hn.wrapT=hn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var $r=class{constructor(e={}){let{canvas:t=zf(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;let b=p,_=new Set([Na,Ua,Da]),m=new Set([pn,In,Hr,Wr,Fa,La]),y=new Uint32Array(4),M=new Int32Array(4),v=new H,S=null,w=null,A=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,F=null,P=null,E=null,D=null;this._outputColorSpace=Ct;let N=0,O=0,k=null,z=-1,G=null,V=new At,ie=new At,K=null,se=new ae(0),Q=0,he=t.width,Y=t.height,j=1,fe=null,me=null,pe=new At(0,0,he,Y),Ae=new At(0,0,he,Y),rt=!1,Ve=new vo,Ke=!1,ot=!1,je=new Tt,St=new H,Bt=new At,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function It(){return k===null?j:1}let $=n;function Yt(L,X){return t.getContext(L,X)}let pt,B,R,J,ne,oe,ge,_e,le,ue,be,De,Me,xe,Ue,Be,qe,q,ye,ce,ve,Ee,de;try{let L={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),$===null){let X="webgl2";if($=Yt(X,L),$===null)throw Yt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(L){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),ke("WebGLRenderer: "+L.message),L}function Ne(){pt=new Jb($),pt.init(),ve=new Oy($,pt),B=new Vb($,pt,e,ve),R=new Uy($,pt),B.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),P=$.createFramebuffer(),E=$.createFramebuffer(),D=$.createFramebuffer(),J=new ex($),ne=new vy,oe=new Ny($,pt,R,ne,B,ve,J),ge=new Kb(C),_e=new ng($),Ee=new zb($,_e),le=new Qb($,_e,J,Ee),ue=new nx($,le,_e,Ee,J),q=new tx($,B,oe),Ue=new Gb(ne),be=new yy(C,ge,pt,B,Ee,Ue),De=new Vy(C,ne),Me=new Sy,xe=new Cy(pt),qe=new Bb(C,ge,R,ue,g,l),Be=new Dy(C,ue,B),de=new Gy($,J,B,R),ye=new kb($,pt,J),ce=new jb($,pt,J),J.programs=be.programs,C.capabilities=B,C.extensions=pt,C.properties=ne,C.renderLists=Me,C.shadowMap=Be,C.state=R,C.info=J}b!==pn&&(T=new rx(b,t.width,t.height,a,r,o));let Fe=new Au(C,$);this.xr=Fe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let L=pt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=pt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(L){L!==void 0&&(j=L,this.setSize(he,Y,!1))},this.getSize=function(L){return L.set(he,Y)},this.setSize=function(L,X,re=!0){if(Fe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}he=L,Y=X,t.width=Math.floor(L*j),t.height=Math.floor(X*j),re===!0&&(t.style.width=L+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(he*j,Y*j).floor()},this.setDrawingBufferSize=function(L,X,re){he=L,Y=X,j=re,t.width=Math.floor(L*re),t.height=Math.floor(X*re),this.setViewport(0,0,L,X)},this.setEffects=function(L){if(b===pn){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let X=0;X<L.length;X++)if(L[X].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(pe)},this.setViewport=function(L,X,re,ee){L.isVector4?pe.set(L.x,L.y,L.z,L.w):pe.set(L,X,re,ee),R.viewport(V.copy(pe).multiplyScalar(j).round())},this.getScissor=function(L){return L.copy(Ae)},this.setScissor=function(L,X,re,ee){L.isVector4?Ae.set(L.x,L.y,L.z,L.w):Ae.set(L,X,re,ee),R.scissor(ie.copy(Ae).multiplyScalar(j).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(L){R.setScissorTest(rt=L)},this.setOpaqueSort=function(L){fe=L},this.setTransparentSort=function(L){me=L},this.getClearColor=function(L){return L.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,re=!0){let ee=0;if(L){let te=!1;if(k!==null){let we=k.texture.format;te=_.has(we)}if(te){let we=k.texture.type,Ce=m.has(we),Te=qe.getClearColor(),Ie=qe.getClearAlpha(),Le=Te.r,$e=Te.g,et=Te.b;Ce?(y[0]=Le,y[1]=$e,y[2]=et,y[3]=Ie,$.clearBufferuiv($.COLOR,0,y)):(M[0]=Le,M[1]=$e,M[2]=et,M[3]=Ie,$.clearBufferiv($.COLOR,0,M))}else ee|=$.COLOR_BUFFER_BIT}X&&(ee|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&$.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),F=L},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),qe.dispose(),Me.dispose(),xe.dispose(),ne.dispose(),ge.dispose(),ue.dispose(),Ee.dispose(),de.dispose(),be.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",bh),Fe.removeEventListener("sessionend",xh),Gi.stop()};function bt(L){L.preventDefault(),iu("WebGLRenderer: Context Lost."),I=!0}function ht(){iu("WebGLRenderer: Context Restored."),I=!1;let L=J.autoReset,X=Be.enabled,re=Be.autoUpdate,ee=Be.needsUpdate,te=Be.type;Ne(),J.autoReset=L,Be.enabled=X,Be.autoUpdate=re,Be.needsUpdate=ee,Be.type=te}function Sn(L){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Nn(L){let X=L.target;X.removeEventListener("dispose",Nn),Kp(X)}function Kp(L){Jp(L),ne.remove(L)}function Jp(L){let X=ne.get(L).programs;X!==void 0&&(X.forEach(function(re){be.releaseProgram(re)}),L.isShaderMaterial&&be.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,re,ee,te,we){X===null&&(X=on);let Ce=te.isMesh&&te.matrixWorld.determinantAffine()<0,Te=em(L,X,re,ee,te);R.setMaterial(ee,Ce);let Ie=re.index,Le=1;if(ee.wireframe===!0){if(Ie=le.getWireframeAttribute(re),Ie===void 0)return;Le=2}let $e=re.drawRange,et=re.attributes.position,Pe=$e.start*Le,ft=($e.start+$e.count)*Le;we!==null&&(Pe=Math.max(Pe,we.start*Le),ft=Math.min(ft,(we.start+we.count)*Le)),Ie!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,Ie.count)):et!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,et.count));let Pt=ft-Pe;if(Pt<0||Pt===1/0)return;Ee.setup(te,ee,Te,re,Ie);let yt,_t=ye;if(Ie!==null&&(yt=_e.get(Ie),_t=ce,_t.setIndex(yt)),te.isMesh)ee.wireframe===!0?(R.setLineWidth(ee.wireframeLinewidth*It()),_t.setMode($.LINES)):_t.setMode($.TRIANGLES);else if(te.isLine){let qt=ee.linewidth;qt===void 0&&(qt=1),R.setLineWidth(qt*It()),te.isLineSegments?_t.setMode($.LINES):te.isLineLoop?_t.setMode($.LINE_LOOP):_t.setMode($.LINE_STRIP)}else te.isPoints?_t.setMode($.POINTS):te.isSprite&&_t.setMode($.TRIANGLES);if(te.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))_t.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let qt=te._multiDrawStarts,Re=te._multiDrawCounts,nn=te._multiDrawCount,st=Ie?_e.get(Ie).bytesPerElement:1,gn=ne.get(ee).currentProgram.getUniforms();for(let On=0;On<nn;On++)gn.setValue($,"_gl_DrawID",On),_t.render(qt[On]/st,Re[On])}else if(te.isInstancedMesh)_t.renderInstances(Pe,Pt,te.count);else if(re.isInstancedBufferGeometry){let qt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Re=Math.min(re.instanceCount,qt);_t.renderInstances(Pe,Pt,Re)}else _t.render(Pe,Pt)};function _h(L,X,re,ee){F!==null&&L.isNodeMaterial&&F.setObject(ee,L),Ke===!0&&Ue.setState(L,re,!1),L.transparent===!0&&L.side===Mt&&L.forceSinglePass===!1?(L.side=rn,L.needsUpdate=!0,xs(L,X,ee),L.side=Ii,L.needsUpdate=!0,xs(L,X,ee),L.side=Mt):xs(L,X,ee)}this.compile=function(L,X,re=null){re===null&&(re=L),F!==null&&F.renderStart(L,X,re),w=xe.get(re),w.init(X),x.push(w),re.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),L!==re&&L.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(w.pushLight(te),te.castShadow&&w.pushShadow(te))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,Ke=Ue.init(this.clippingPlanes,ot),Ke===!0&&Ue.setGlobalState(this.clippingPlanes,X),F!==null&&Be.render(w.state.shadowsArray,re,X);let ee=new Set;return L.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let we=te.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){let Te=we[Ce];_h(Te,re,X,te),ee.add(Te)}else _h(we,re,X,te),ee.add(we)}),w=x.pop(),F!==null&&F.renderEnd(),ee},this.compileAsync=function(L,X,re=null){let ee=this.compile(L,X,re);return new Promise(te=>{function we(){if(ee.forEach(function(Ce){let Ie=ne.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&ee.delete(Ce)}),ee.size===0){te(L);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ql=null;function Qp(L){Ql&&Ql(L)}function bh(){Gi.stop()}function xh(){Gi.start()}let Gi=new bd;Gi.setAnimationLoop(Qp),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(L){Ql=L,Fe.setAnimationLoop(L),L===null?Gi.stop():Gi.start()},Fe.addEventListener("sessionstart",bh),Fe.addEventListener("sessionend",xh),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(L,X);let re=Fe.enabled===!0&&Fe.isPresenting===!0,ee=T!==null&&(k===null||re)&&T.begin(C,k);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(X),X=Fe.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,X,k),w=xe.get(L,x.length),w.init(X),w.state.textureUnits=oe.getTextureUnits(),x.push(w),je.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ve.setFromProjectionMatrix(je,Rn,X.reversedDepth),ot=this.localClippingEnabled,Ke=Ue.init(this.clippingPlanes,ot),S=Me.get(L,A.length),S.init(),A.push(S),Fe.enabled===!0&&Fe.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&jl(Ce,X,-1/0,C.sortObjects)}jl(L,X,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(w.state.lightsArray),C.sortObjects===!0&&S.sort(fe,me),wt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,wt&&qe.addToRenderList(S,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Ue.beginShadows();let te=w.state.shadowsArray;if(Be.render(te,L,X),Ke===!0&&Ue.endShadows(),(ee&&T.hasRenderPass())===!1){let Ce=S.opaque,Te=S.transmissive;if(w.setupLights(),X.isArrayCamera){let Ie=X.cameras;if(Te.length>0)for(let Le=0,$e=Ie.length;Le<$e;Le++){let et=Ie[Le];vh(Ce,Te,L,et)}wt&&qe.render(L);for(let Le=0,$e=Ie.length;Le<$e;Le++){let et=Ie[Le];yh(S,L,et,et.viewport)}}else Te.length>0&&vh(Ce,Te,L,X),wt&&qe.render(L),yh(S,L,X)}k!==null&&O===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),ee&&T.end(C),L.isScene===!0&&L.onAfterRender(C,L,X),Ee.resetDefaultState(),z=-1,G=null,x.pop(),x.length>0?(w=x[x.length-1],oe.setTextureUnits(w.state.textureUnits),Ke===!0&&Ue.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,F!==null&&F.renderEnd()};function jl(L,X,re,ee){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLightProbeGrid)w.pushLightProbeGrid(L);else if(L.isLight)w.pushLight(L),L.castShadow&&w.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(Ve)){ee&&Bt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(je);let Ce=ue.update(L),Te=L.material;Te.visible&&S.push(L,Ce,Te,re,Bt.z,null,X)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(Ve))){let Ce=ue.update(L),Te=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Bt.copy(L.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Bt.copy(Ce.boundingSphere.center)),Bt.applyMatrix4(L.matrixWorld).applyMatrix4(je)),Array.isArray(Te)){let Ie=Ce.groups;for(let Le=0,$e=Ie.length;Le<$e;Le++){let et=Ie[Le],Pe=Te[et.materialIndex];Pe&&Pe.visible&&S.push(L,Ce,Pe,re,Bt.z,et,X)}}else Te.visible&&S.push(L,Ce,Te,re,Bt.z,null,X)}}let we=L.children;for(let Ce=0,Te=we.length;Ce<Te;Ce++)jl(we[Ce],X,re,ee)}function yh(L,X,re,ee){let{opaque:te,transmissive:we,transparent:Ce}=L;w.setupLightsView(re),Ke===!0&&Ue.setGlobalState(C.clippingPlanes,re),ee&&R.viewport(V.copy(ee)),te.length>0&&bs(te,X,re),we.length>0&&bs(we,X,re),Ce.length>0&&bs(Ce,X,re),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function vh(L,X,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ee.id]===void 0){let Pe=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ee.id]=new jt(1,1,{generateMipmaps:!0,type:Pe?Fn:pn,minFilter:Li,samples:Math.max(4,B.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let we=w.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||V;we.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let Te=C.getRenderTarget(),Ie=C.getActiveCubeFace(),Le=C.getActiveMipmapLevel();C.setRenderTarget(we),C.getClearColor(se),Q=C.getClearAlpha(),Q<1&&C.setClearColor(16777215,.5),C.clear(),wt&&qe.render(re);let $e=C.toneMapping;C.toneMapping=Cn;let et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),w.setupLightsView(ee),Ke===!0&&Ue.setGlobalState(C.clippingPlanes,ee),bs(L,re,ee),oe.updateMultisampleRenderTarget(we),oe.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,Pt=X.length;ft<Pt;ft++){let yt=X[ft],{object:_t,geometry:qt,material:Re,group:nn}=yt;if(Re.side===Mt&&_t.layers.test(ee.layers)){let st=Re.side;Re.side=rn,Re.needsUpdate=!0,Mh(_t,re,ee,qt,Re,nn),Re.side=st,Re.needsUpdate=!0,Pe=!0}}Pe===!0&&(oe.updateMultisampleRenderTarget(we),oe.updateRenderTargetMipmap(we))}C.setRenderTarget(Te,Ie,Le),C.setClearColor(se,Q),et!==void 0&&(ee.viewport=et),C.toneMapping=$e}function bs(L,X,re){let ee=X.isScene===!0?X.overrideMaterial:null;for(let te=0,we=L.length;te<we;te++){let Ce=L[te],{object:Te,geometry:Ie,group:Le}=Ce,$e=Ce.material;$e.allowOverride===!0&&ee!==null&&($e=ee),Te.layers.test(re.layers)&&Mh(Te,X,re,Ie,$e,Le)}}function Mh(L,X,re,ee,te,we){F!==null&&te.isNodeMaterial&&F.setObject(L,te),L.onBeforeRender(C,X,re,ee,te,we),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),te.onBeforeRender(C,X,re,ee,L,we),te.transparent===!0&&te.side===Mt&&te.forceSinglePass===!1?(te.side=rn,te.needsUpdate=!0,C.renderBufferDirect(re,X,ee,te,L,we),te.side=Ii,te.needsUpdate=!0,C.renderBufferDirect(re,X,ee,te,L,we),te.side=Mt):C.renderBufferDirect(re,X,ee,te,L,we),L.onAfterRender(C,X,re,ee,te,we)}function xs(L,X,re){X.isScene!==!0&&(X=on);let ee=ne.get(L),te=w.state.lights,we=w.state.shadowsArray,Ce=te.state.version,Te=be.getParameters(L,te.state,we,X,re,w.state.lightProbeGridArray),Ie=be.getProgramCacheKey(Te),Le=ee.programs;ee.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?X.environment:null,ee.fog=X.fog;let $e=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ee.envMap=ge.get(L.envMap||ee.environment,$e),ee.envMapRotation=ee.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,Le===void 0&&(L.addEventListener("dispose",Nn),Le=new Map,ee.programs=Le);let et=Le.get(Ie);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Ce)return Th(L,Te),et}else Te.uniforms=be.getUniforms(L),F!==null&&L.isNodeMaterial&&F.build(L,re,Te),L.onBeforeCompile(Te,C),et=be.acquireProgram(Te,Ie),Le.set(Ie,et),ee.uniforms=Te.uniforms;let Pe=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),Th(L,Te),ee.needsLights=nm(L),ee.lightsStateVersion=Ce,ee.needsLights&&(Pe.ambientLightColor.value=te.state.ambient,Pe.lightProbe.value=te.state.probe,Pe.sunLights.value=te.state.sun,Pe.sunLightShadows.value=te.state.sunShadow,Pe.directionalLights.value=te.state.directional,Pe.directionalLightShadows.value=te.state.directionalShadow,Pe.spotLights.value=te.state.spot,Pe.spotLightShadows.value=te.state.spotShadow,Pe.rectAreaLights.value=te.state.rectArea,Pe.ltc_1.value=te.state.rectAreaLTC1,Pe.ltc_2.value=te.state.rectAreaLTC2,Pe.pointLights.value=te.state.point,Pe.pointLightShadows.value=te.state.pointShadow,Pe.hemisphereLights.value=te.state.hemi,Pe.sunShadowMatrix.value=te.state.sunShadowMatrix,Pe.sunShadowCascade.value=te.state.sunShadowCascade,Pe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Pe.spotLightMatrix.value=te.state.spotLightMatrix,Pe.spotLightMap.value=te.state.spotLightMap,Pe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=w.state.lightProbeGridArray.length>0,ee.currentProgram=et,ee.uniformsList=null,et}function Sh(L){if(L.uniformsList===null){let X=L.currentProgram.getUniforms();L.uniformsList=qr.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Th(L,X){let re=ne.get(L);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function jp(L,X){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;v.setFromMatrixPosition(X.matrixWorld);for(let re=0,ee=L.length;re<ee;re++){let te=L[re];if(te.texture!==null&&te.boundingBox.containsPoint(v))return te}return null}function em(L,X,re,ee,te){X.isScene!==!0&&(X=on),oe.resetTextureUnits();let we=X.fog,Ce=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?X.environment:null,Te=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:tt.workingColorSpace,Ie=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Le=ge.get(ee.envMap||Ce,Ie),$e=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Pe=!!re.morphAttributes.position,ft=!!re.morphAttributes.normal,Pt=!!re.morphAttributes.color,yt=Cn;ee.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(yt=C.toneMapping);let _t=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,qt=_t!==void 0?_t.length:0,Re=ne.get(ee),nn=w.state.lights;if(Ke===!0&&(ot===!0||L!==G)){let xt=L===G&&ee.id===z;Ue.setState(ee,L,xt)}let st=!1;ee.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==nn.state.version||Re.outputColorSpace!==Te||te.isBatchedMesh&&Re.batching===!1||!te.isBatchedMesh&&Re.batching===!0||te.isBatchedMesh&&Re.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Re.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Re.instancing===!1||!te.isInstancedMesh&&Re.instancing===!0||te.isSkinnedMesh&&Re.skinning===!1||!te.isSkinnedMesh&&Re.skinning===!0||te.isInstancedMesh&&Re.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Re.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Re.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Re.instancingMorph===!1&&te.morphTexture!==null||Re.envMap!==Le||ee.fog===!0&&Re.fog!==we||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ue.numPlanes||Re.numIntersection!==Ue.numIntersection)||Re.vertexAlphas!==$e||Re.vertexTangents!==et||Re.morphTargets!==Pe||Re.morphNormals!==ft||Re.morphColors!==Pt||Re.toneMapping!==yt||Re.morphTargetsCount!==qt||!!Re.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Re.__version=ee.version);let gn=Re.currentProgram;st===!0&&(gn=xs(ee,X,te),F&&ee.isNodeMaterial&&F.onUpdateProgram(ee,gn,Re));let On=!1,di=!1,mr=!1,gt=gn.getUniforms(),Rt=Re.uniforms;if(R.useProgram(gn.program)&&(On=!0,di=!0,mr=!0),ee.id!==z&&(z=ee.id,di=!0),Re.needsLights){let xt=jp(w.state.lightProbeGridArray,te);Re.lightProbeGrid!==xt&&(Re.lightProbeGrid=xt,di=!0)}if(On||G!==L){R.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),gt.setValue($,"projectionMatrix",L.projectionMatrix),gt.setValue($,"viewMatrix",L.matrixWorldInverse);let mi=gt.map.cameraPosition;mi!==void 0&&mi.setValue($,St.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&gt.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&gt.setValue($,"isOrthographic",L.isOrthographicCamera===!0),G!==L&&(G=L,di=!0,mr=!0)}if(Re.needsLights&&(nn.state.sunShadowMap.length>0&&gt.setValue($,"sunShadowMap",nn.state.sunShadowMap,oe),nn.state.directionalShadowMap.length>0&&gt.setValue($,"directionalShadowMap",nn.state.directionalShadowMap,oe),nn.state.spotShadowMap.length>0&&gt.setValue($,"spotShadowMap",nn.state.spotShadowMap,oe),nn.state.pointShadowMap.length>0&&gt.setValue($,"pointShadowMap",nn.state.pointShadowMap,oe)),te.isSkinnedMesh){gt.setOptional($,te,"bindMatrix"),gt.setOptional($,te,"bindMatrixInverse");let xt=te.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),gt.setValue($,"boneTexture",xt.boneTexture,oe))}te.isBatchedMesh&&(gt.setOptional($,te,"batchingTexture"),gt.setValue($,"batchingTexture",te._matricesTexture,oe),gt.setOptional($,te,"batchingIdTexture"),gt.setValue($,"batchingIdTexture",te._indirectTexture,oe),gt.setOptional($,te,"batchingColorTexture"),te._colorsTexture!==null&&gt.setValue($,"batchingColorTexture",te._colorsTexture,oe));let pi=re.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&q.update(te,re,gn),(di||Re.receiveShadow!==te.receiveShadow)&&(Re.receiveShadow=te.receiveShadow,gt.setValue($,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&X.environment!==null&&(Rt.envMapIntensity.value=X.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=Wy()),di){if(gt.setValue($,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&tm(Rt,mr),we&&ee.fog===!0&&De.refreshFogUniforms(Rt,we),De.refreshMaterialUniforms(Rt,ee,j,Y,w.state.transmissionRenderTarget[L.id]),Re.needsLights&&Re.lightProbeGrid){let xt=Re.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}qr.upload($,Sh(Re),Rt,oe)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(qr.upload($,Sh(Re),Rt,oe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&gt.setValue($,"center",te.center),gt.setValue($,"modelViewMatrix",te.modelViewMatrix),gt.setValue($,"normalMatrix",te.normalMatrix),gt.setValue($,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let xt=ee.uniformsGroups;for(let mi=0,gr=xt.length;mi<gr;mi++){let Eh=xt[mi];de.update(Eh,gn),de.bind(Eh,gn)}}return gn}function tm(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.sunLights.needsUpdate=X,L.sunLightShadows.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function nm(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,X,re){let ee=ne.get(L);ee.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ne.get(L.texture).__webglTexture=X,ne.get(L.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){let re=ne.get(L);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,re=0){k=L,N=X,O=re;let ee=null,te=!1,we=!1;if(L){let Te=ne.get(L);if(Te.__useDefaultFramebuffer!==void 0){R.bindFramebuffer($.FRAMEBUFFER,Te.__webglFramebuffer),V.copy(L.viewport),ie.copy(L.scissor),K=L.scissorTest,R.viewport(V),R.scissor(ie),R.setScissorTest(K),z=-1;return}else if(Te.__webglFramebuffer===void 0)oe.setupRenderTarget(L);else if(Te.__hasExternalTextures)oe.rebindTextures(L,ne.get(L.texture).__webglTexture,ne.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let $e=L.depthTexture;if(Te.__boundDepthTexture!==$e){if($e!==null&&ne.has($e)&&(L.width!==$e.image.width||L.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(L)}}let Ie=L.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Le=ne.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Le[X])?ee=Le[X][re]:ee=Le[X],te=!0):L.samples>0&&oe.useMultisampledRTT(L)===!1?ee=ne.get(L).__webglMultisampledFramebuffer:Array.isArray(Le)?ee=Le[re]:ee=Le,V.copy(L.viewport),ie.copy(L.scissor),K=L.scissorTest}else V.copy(pe).multiplyScalar(j).floor(),ie.copy(Ae).multiplyScalar(j).floor(),K=rt;if(re!==0&&(ee=P),R.bindFramebuffer($.FRAMEBUFFER,ee)&&R.drawBuffers(L,ee),R.viewport(V),R.scissor(ie),R.setScissorTest(K),te){let Te=ne.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,re)}else if(we){let Te=X;for(let Ie=0;Ie<L.textures.length;Ie++){let Le=ne.get(L.textures[Ie]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ie,Le.__webglTexture,re,Te)}}else if(L!==null&&re!==0){let Te=ne.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Te.__webglTexture,re)}z=-1};function wh(L){let X=ne.get(L);return(X.__readFormat!==L.format||X.__readType!==L.type)&&(X.__readFormat=L.format,X.__readType=L.type,X.__formatReadable=B.textureFormatReadable(L.format),X.__typeReadable=B.textureTypeReadable(L.type)),X}this.readRenderTargetPixels=function(L,X,re,ee,te,we,Ce,Te=0){if(!(L&&L.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ne.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){R.bindFramebuffer($.FRAMEBUFFER,Ie);try{let Le=L.textures[Te],$e=Le.format,et=Le.type;L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Te);let Pe=wh(Le);if(Pe.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-ee&&re>=0&&re<=L.height-te&&$.readPixels(X,re,ee,te,ve.convert($e),ve.convert(et),we)}finally{let Le=k!==null?ne.get(k).__webglFramebuffer:null;R.bindFramebuffer($.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(L,X,re,ee,te,we,Ce,Te=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ne.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(X>=0&&X<=L.width-ee&&re>=0&&re<=L.height-te){R.bindFramebuffer($.FRAMEBUFFER,Ie);let Le=L.textures[Te],$e=Le.format,et=Le.type;L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Te);let Pe=wh(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ft),$.bufferData($.PIXEL_PACK_BUFFER,we.byteLength,$.STREAM_READ),$.readPixels(X,re,ee,te,ve.convert($e),ve.convert(et),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Pt=k!==null?ne.get(k).__webglFramebuffer:null;R.bindFramebuffer($.FRAMEBUFFER,Pt);let yt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Vf($,yt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ft),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,we),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(ft),$.deleteSync(yt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,re=0){let ee=Math.pow(2,-re),te=Math.floor(L.image.width*ee),we=Math.floor(L.image.height*ee),Ce=X!==null?X.x:0,Te=X!==null?X.y:0;oe.setTexture2D(L,0),$.copyTexSubImage2D($.TEXTURE_2D,re,0,0,Ce,Te,te,we),R.unbindTexture()},this.copyTextureToTexture=function(L,X,re=null,ee=null,te=0,we=0){let Ce,Te,Ie,Le,$e,et,Pe,ft,Pt,yt=L.isCompressedTexture?L.mipmaps[we]:L.image;if(re!==null)Ce=re.max.x-re.min.x,Te=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,Le=re.min.x,$e=re.min.y,et=re.isBox3?re.min.z:0;else{let Rt=Math.pow(2,-te);Ce=Math.floor(yt.width*Rt),Te=Math.floor(yt.height*Rt),L.isDataArrayTexture?Ie=yt.depth:L.isData3DTexture?Ie=Math.floor(yt.depth*Rt):Ie=1,Le=0,$e=0,et=0}ee!==null?(Pe=ee.x,ft=ee.y,Pt=ee.z):(Pe=0,ft=0,Pt=0);let _t=ve.convert(X.format),qt=ve.convert(X.type),Re;X.isData3DTexture?(oe.setTexture3D(X,0),Re=$.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(oe.setTexture2DArray(X,0),Re=$.TEXTURE_2D_ARRAY):(oe.setTexture2D(X,0),Re=$.TEXTURE_2D),R.activeTexture($.TEXTURE0),R.pixelStorei($.UNPACK_FLIP_Y_WEBGL,X.flipY),R.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),R.pixelStorei($.UNPACK_ALIGNMENT,X.unpackAlignment);let nn=R.getParameter($.UNPACK_ROW_LENGTH),st=R.getParameter($.UNPACK_IMAGE_HEIGHT),gn=R.getParameter($.UNPACK_SKIP_PIXELS),On=R.getParameter($.UNPACK_SKIP_ROWS),di=R.getParameter($.UNPACK_SKIP_IMAGES);R.pixelStorei($.UNPACK_ROW_LENGTH,yt.width),R.pixelStorei($.UNPACK_IMAGE_HEIGHT,yt.height),R.pixelStorei($.UNPACK_SKIP_PIXELS,Le),R.pixelStorei($.UNPACK_SKIP_ROWS,$e),R.pixelStorei($.UNPACK_SKIP_IMAGES,et);let mr=L.isDataArrayTexture||L.isData3DTexture,gt=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){let Rt=ne.get(L),pi=ne.get(X),xt=ne.get(Rt.__renderTarget),mi=ne.get(pi.__renderTarget);R.bindFramebuffer($.READ_FRAMEBUFFER,xt.__webglFramebuffer),R.bindFramebuffer($.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gr=0;gr<Ie;gr++)mr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ne.get(L).__webglTexture,te,et+gr),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,we,Pt+gr)),$.blitFramebuffer(Le,$e,Ce,Te,Pe,ft,Ce,Te,$.DEPTH_BUFFER_BIT,$.NEAREST);R.bindFramebuffer($.READ_FRAMEBUFFER,null),R.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(te!==0||L.isRenderTargetTexture||ne.has(L)){let Rt=ne.get(L),pi=ne.get(X);R.bindFramebuffer($.READ_FRAMEBUFFER,E),R.bindFramebuffer($.DRAW_FRAMEBUFFER,D);for(let xt=0;xt<Ie;xt++)mr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Rt.__webglTexture,te,et+xt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Rt.__webglTexture,te),gt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,pi.__webglTexture,we,Pt+xt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,pi.__webglTexture,we),te!==0?$.blitFramebuffer(Le,$e,Ce,Te,Pe,ft,Ce,Te,$.COLOR_BUFFER_BIT,$.NEAREST):gt?$.copyTexSubImage3D(Re,we,Pe,ft,Pt+xt,Le,$e,Ce,Te):$.copyTexSubImage2D(Re,we,Pe,ft,Le,$e,Ce,Te);R.bindFramebuffer($.READ_FRAMEBUFFER,null),R.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else gt?L.isDataTexture||L.isData3DTexture?$.texSubImage3D(Re,we,Pe,ft,Pt,Ce,Te,Ie,_t,qt,yt.data):X.isCompressedArrayTexture?$.compressedTexSubImage3D(Re,we,Pe,ft,Pt,Ce,Te,Ie,_t,yt.data):$.texSubImage3D(Re,we,Pe,ft,Pt,Ce,Te,Ie,_t,qt,yt):L.isDataTexture?$.texSubImage2D($.TEXTURE_2D,we,Pe,ft,Ce,Te,_t,qt,yt.data):L.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,we,Pe,ft,yt.width,yt.height,_t,yt.data):$.texSubImage2D($.TEXTURE_2D,we,Pe,ft,Ce,Te,_t,qt,yt);R.pixelStorei($.UNPACK_ROW_LENGTH,nn),R.pixelStorei($.UNPACK_IMAGE_HEIGHT,st),R.pixelStorei($.UNPACK_SKIP_PIXELS,gn),R.pixelStorei($.UNPACK_SKIP_ROWS,On),R.pixelStorei($.UNPACK_SKIP_IMAGES,di),we===0&&X.generateMipmaps&&$.generateMipmap(Re),R.unbindTexture()},this.initRenderTarget=function(L){ne.get(L).__webglFramebuffer===void 0&&oe.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?oe.setTextureCube(L,0):L.isData3DTexture?oe.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?oe.setTexture2DArray(L,0):oe.setTexture2D(L,0),R.unbindTexture()},this.resetState=function(){N=0,O=0,k=null,R.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};function wd(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function Ed(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}var Xy=[],Ru=new Map,Yy=0;function Ml(i){Xy=i,Ru=new Map(i.flatMap(e=>e.items.map(t=>[qy(e.id,t.id),t]))),Yy++}function qy(i,e){return`pack:${i}:${e}`}function $y(i){return i.startsWith("pack:")}var Zy={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ad(i){return Dt(i)?.parts.find(e=>e.screen)}function Dt(i){if(!$y(i))return;let e=Ru.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=Zy[t];return r?Ru.get(`pack:${r}:${n.join(":")}`):void 0}function mn(i,e){let t=Dt(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall"||e.type==="lamp_wall_updown")return $o;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));if(e.type==="fan_ceiling"||e.type==="fan_ceiling_light")return Math.max(0,i.height-Math.max(.05,e.h));if(e.type==="access_point"||e.type==="smoke_detector")return Math.max(0,i.height-Math.max(.02,e.h));if(e.type==="fan_wall")return 1.55;if(e.type==="altar_wall")return 1.45;if(e.type==="floating_shelf")return 1.35;if(e.type==="nightstand_floating")return .48;if(e.type==="water_heater")return 1.7;if(e.type==="range_hood")return 1.35;if(e.type==="microwave")return vl(i,e.x,e.z);if(e.type==="modem_router"||e.type==="smart_display")return vl(i,e.x,e.z);if((e.type==="water_pump"||e.type==="heat_pump_outdoor")&&!i.rooms.some(n=>n.points.length>=3&&ut([e.x,e.z],n.points)))return Sl(i,e.x,e.z);switch(t?.mount){case"surface":return vl(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return t?0:Zo(e)}}var Cu=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden","lamp_column","lamp_tv_bars","lamp_orb_table","lamp_portable","lamp_ambient_spot","lamp_cube","lamp_panel_round","lamp_garden_spots","lamp_wall_updown"]),Rd=new Set([...Cu,"radiator","air_conditioner","water_pump","fan_ceiling","fan_ceiling_light","fan_wall","fan_floor","water_heater","range_hood","microwave","water_purifier","air_purifier","smart_speaker","security_camera","smart_lock","smart_curtain","network_cabinet","nas_server","access_point","wall_thermostat","smoke_detector","siren_alarm","electrical_panel","ups_unit","modem_router","heat_pump_outdoor","hot_water_tank","ventilation_fan","humidifier","smart_display","wall_switch","wall_outlet","smart_plug","motion_sensor","contact_sensor","water_leak_sensor","temperature_humidity_sensor","video_doorbell","robot_vacuum","robot_mower","inverter","home_battery","wallbox","meter","tv_board","tv_wall","tv_stand","media_wall_tv","fireplace_wall_electric","bed_ambient_180","wardrobe_light","alarm_sunrise","vanity_light","mirror_round_light","mirror_80_light","mirror_cabinet_light","electric_towel_heater","bathroom_fan","washer_vanity","rain_shower_led","mirror_led_clock","fireplace_builtin","led_niche","light_cove","desk","fridge","fridge_smart","stove","kitchen_tall","kitchen_display","dishwasher","washer","dryer","washer_dryer_tower","balcony_solar","kitchen","island","sink"]);function Xn(i){return i.kind==="veranda"||i.kind==="balcony"||i.kind==="canopy"}function Tl(i,e){if(i.length<2)return 0;if(e<0){let f=0,h=-1;for(let p=0;p<i.length;p++){let g=i[p],b=i[(p+1)%i.length],_=Math.hypot(b[0]-g[0],b[1]-g[1]);_>h&&([f,h]=[p,_])}return f}let t=i[e],n=i[(e+1)%i.length],r=n[0]-t[0],o=n[1]-t[1],s=Math.hypot(r,o)||1,a=(t[0]+n[0])/2,l=(t[1]+n[1])/2,c=0,u=-1;for(let f=0;f<i.length;f++){if(f===e)continue;let h=i[f],p=i[(f+1)%i.length],g=p[0]-h[0],b=p[1]-h[1],_=Math.hypot(g,b)||1,m=Math.abs((g*r+b*o)/(_*s)),M=Math.abs(r*((h[1]+p[1])/2-l)-o*((h[0]+p[0])/2-a))/s*m;M>u&&([c,u]=[f,M])}return c}var Kr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2},Jy={canopy:.02,veranda:.12,balcony:.12};function Ko(i){return Jy[i]}function ai(i){return i==="hedge"||i==="fence"||i==="pergola"}function Jo(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of i.points){let f=o(c,u);s=Math.min(s,f),a=Math.max(a,f)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function Qy(i,e,t,n){return li(i)+(e.offset??0)+Kr[e.type]-Jo(e,t,n)}function li(i){return i.elevation>.3?0:-.2}function Sl(i,e,t){let n=(i.outdoor??[]).filter(o=>!ai(o.type)&&o.type!=="pool"&&ut([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?Qy(i,r,e,t):li(i)}var jy={type:"none",pitch:35,overhang:.4},OA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...jy}};var $o=1.75;function Cd(i){return Cu.has(i)||!!Dt(i)?.light}var e1=new Set(["table","table_round","coffee_table","coffee_table_round","coffee_table_glass","nesting_tables","side_table_round","console_table","lowboard_120","lowboard_160","lowboard_200","table_120","table_160","table_200","table_solid_220","tv_console","desk","nightstand","nightstand_drawer","nightstand_slim","nightstand_floating","vanity_mirror","vanity_light","changing_table","vanity_60","vanity_80","vanity_100","double_vanity_120","bathroom_cabinet_mid","bathroom_wall_shelf","washer_vanity","builtin_shelf_niche","window_seat","platform_steps","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Zo(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"floating_shelf":return 1.35;case"nightstand_floating":return .48;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"air_conditioner":return 1.9;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;case"security_camera":return 1.85;case"smart_lock":return .95;case"wall_thermostat":return 1.35;case"siren_alarm":return 1.85;case"electrical_panel":return .85;case"ventilation_fan":return 1.8;case"wall_switch":return 1.05;case"wall_outlet":case"smart_plug":return .3;case"motion_sensor":return 1.9;case"contact_sensor":return 1.1;case"temperature_humidity_sensor":return 1.35;case"video_doorbell":return 1.25;default:return 0}}function vl(i,e,t){let n=0;for(let r of i.furniture)!(e1.has(r.type)||Dt(r.type)?.surface)||!ut([e,t],wl(r))||(n=Math.max(n,r.h));return n}var t1=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],n1=["standard","bars","glass_wall"];function rr(i,e){return i.type==="door"?i.style&&t1.includes(i.style)?i.style:e?"front":"interior":i.style&&n1.includes(i.style)?i.style:"standard"}function Id(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=o-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Pd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function or(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function Qo(i){return Math.abs(or(i))}function Fd(i){let e=or(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Ld(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Dd(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function wl(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function ut(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}var Wt=(i,e)=>[i[0]-e[0],i[1]-e[1]],Ni=(i,e)=>[i[0]+e[0],i[1]+e[1]],ci=(i,e)=>[i[0]*e,i[1]*e],ts=(i,e)=>i[0]*e[0]+i[1]*e[1],jo=(i,e)=>i[0]*e[1]-i[1]*e[0],es=i=>Math.hypot(i[0],i[1]),ui=i=>{let e=es(i)||1;return[i[0]/e,i[1]/e]},Ud=i=>[-i[1],i[0]],Nd=i=>[i[1],-i[0]];function ns(i,e,t=[]){let n=e.eps??.005,r=[],o=i.filter(x=>!Xn(x)),s=t.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),a=[],l=x=>{for(let T=0;T<a.length;T++)if(Math.abs(a[T][0]-x[0])<=n&&Math.abs(a[T][1]-x[1])<=n)return T;return a.push([x[0],x[1]]),a.length-1},c=[];for(let x of o){let T=x.points;if(T.length<3||Math.abs(or(T))<1e-6)continue;let C=or(T)>0,I=T.map(l);for(let F=0;F<T.length;F++){let P=I[F],E=I[(F+1)%T.length];P!==E&&c.push(C?{u:P,v:E,room:x.id,edge:F,forward:!0}:{u:E,v:P,room:x.id,edge:F,forward:!1})}}let u=s.map(x=>[l(x.a),l(x.b)]),f=new Set;for(let x of o){let T=x.points;T.length<3||(x.wall_splits??[]).forEach((C,I)=>{if(!C||I>=T.length)return;let F=T[I],P=Wt(T[(I+1)%T.length],F),E=es(P);for(let D of C)D>n&&D<E-n&&f.add(l(Ni(F,ci(P,D/E))))})}let h=[];for(let x of c){let T=a[x.u],C=a[x.v],I=Wt(C,T),F=es(I),P=ci(I,1/F),E=[];for(let N=0;N<a.length;N++){if(N===x.u||N===x.v)continue;let O=Wt(a[N],T),k=ts(O,P);k<=n||k>=F-n||Math.abs(jo(P,O))<=n&&E.push({t:k,id:N})}E.sort((N,O)=>N.t-O.t);let D=[{t:0,id:x.u},...E,{t:F,id:x.v}];for(let N=0;N+1<D.length;N++){let O=D[N],k=D[N+1],z=x.forward?O.t:F-k.t,G=x.forward?k.t:F-O.t;h.push({u:O.id,v:k.id,room:x.room,edge:x.edge,t0:z,t1:G})}}let p=new Map;for(let x of h){let T=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,C=p.get(T);C||p.set(T,C=[]),C.push(x)}let g=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),b=new Map;for(let x of h){let T=`${x.room}:${x.edge}`;b.set(T,[...b.get(T)??[],x.t0].sort((C,I)=>C-I))}let _=x=>{let T=o.find(I=>I.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray(T))return T;let C=b.get(`${x.room}:${x.edge}`)??[];return T[C.indexOf(x.t0)]??null},m=x=>{let T=x.map(_).filter(C=>typeof C=="number"&&C>0);return T.length?Math.min(...T):void 0},y=x=>{let T=x.map(C=>o.find(I=>I.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return T.length?Math.max(...T):void 0},M=x=>x.some(T=>_(T)===0),v=[],S=[];for(let x of p.values()){let T=x[0],C=x.find(I=>I!==T&&I.u===T.v&&I.v===T.u&&I.room!==T.room);for(let I of x)I!==T&&I!==C&&I.room!==T.room&&r.push(`overlap:${T.room}:${I.room}`);if(M(C?[T,C]:[T])){C&&v.push([T.room,C.room]);continue}if(C){let I=y([T,C])??e.interior;S.push({a:T.u,b:T.v,left:I/2,right:I/2,exterior:!1,roomLeft:T.room,roomRight:C.room,sources:[g(T),g(C)],height:m([T,C])})}else S.push({a:T.u,b:T.v,left:0,right:y([T])??e.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[g(T)],height:m([T])})}s.forEach((x,T)=>{let[C,I]=u[T];if(C===I)return;let F=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],P=i.find(N=>N.points.length>=3&&ut(F,N.points))?.id??null,E=(x.thickness??e.interior)/2,D=typeof x.height=="number"&&x.height>0?x.height:void 0;S.push({free:x.id,a:C,b:I,left:E,right:E,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:D})}),S=r1(S,a,f);let w=s1(S,a);return{walls:S.map((x,T)=>{let C=a[x.a],I=a[x.b],F=w.get(`${T}:a`),P=w.get(`${T}:b`),E=a1([F.right,P.left,I,P.right,F.left,C],1e-6);return{id:i1(C,I),a:[C[0],C[1]],b:[I[0],I[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:E,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{}}}),warnings:[...new Set(r)],open:v}}function i1(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Od(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function r1(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=Od(l)),c.a!==s&&(c=Od(c)),l.a===c.b)continue;let u=ui(Wt(e[l.b],e[l.a])),f=ui(Wt(e[c.b],e[c.a]));if(Math.abs(jo(u,f))>1e-6||ts(u,f)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:o1(l.sources,c.sources)},p=n.filter((g,b)=>b!==a[0]&&b!==a[1]);p.push(h),n.length=0,n.push(...p),r=!0;break}}return n}function o1(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function s1(i,e){let t=new Map;i.forEach((r,o)=>{let s=ui(Wt(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:ci(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Ni(s,ci(Ud(c.d),c.left)),right:Ni(s,ci(Nd(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],f=o[(c+1)%o.length],h=Ni(s,ci(Ud(u.d),u.left)),p=Ni(s,ci(Nd(f.d),f.right)),g=jo(u.d,f.d);if(Math.abs(g)<1e-4)continue;let b=jo(Wt(p,h),f.d)/g,_=Ni(h,ci(u.d,b));es(Wt(_,s))>l||(n.get(u.key).left=_,n.get(f.key).right=_)}}return n}function a1(i,e){let t=i.filter((r,o)=>es(Wt(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Wt(s,o),c=Wt(a,s);if(Math.abs(jo(ui(l),ui(c)))<1e-7&&ts(l,c)>0){t=t.filter((u,f)=>f!==r),n=!0;break}}}return t}function Bd(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=ui(Wt(r,n));return Ni(n,ci(o,t))}function zd(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=ui(Wt(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ni(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function kd(i,e,t){if(!e.wall)return l1(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=Bd(t.room,0,e.offset);return{wall:n,s:ts(Wt(r,n.a),ui(Wt(n.b,n.a)))}}function l1(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Bd(e,t,n);return{wall:r,s:ts(Wt(s,r.a),ui(Wt(r.b,r.a)))}}return null}var rs=Math.PI/180;function Yn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(o,s)=>[i.flip?t-s:e+s,o]}}function Ln(i){let e=Yn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*rs),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*rs);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=Wd(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}var c1=.14;function Gd(i,e,t){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let o of i.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),c=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||o.points&&o.points.length>=3&&!ut([e,t],o.points))continue;let[u,f]=Oi(o,e,t),h=o.shape==="flat"||o.shape==="parapet",p=Math.max(0,o.overhang??r),b=((h?null:ss(Qr(o,{u0:p,u1:p,a:p,b:p}),u,f))??Ln(o).y(f))-c1;n=n===null?b:Math.max(n,b)}return n}function os(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Qo(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=Vd([a[0]-s[0],a[1]-s[1]]),u=Vd([l[0]-a[0],l[1]-a[1]]),f=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],p=f[0]+h[0],g=f[1]+h[1],b=Math.hypot(p,g);if(b<1e-6){r.push([a[0]+f[0]*e,a[1]+f[1]*e]);continue}let _=(p*f[0]+g*f[1])/b,m=Math.min(4,1/Math.max(.25,_));r.push([a[0]+p/b*e*m,a[1]+g/b*e*m])}return r}function Vd(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Hd(i,e){if(i.points&&i.points.length>=3)return os(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,o],[t,o]]}var is=Math.tan(30*rs);function Wd(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+is*(i-s+o))/(2*is))),u=a+(c-o)*is;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=o?e+h*n:h<=c?a+(h-o)*is:h<=i-s?l+(i-s-h)*is:t+(i-h)*r}}function Qr(i,e){let t=Yn(i),n=Ln(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(y,M)=>[y,M,n.y(M)],u=c(a,-o),f=c(l,-o),h=c(l,r+s),p=c(a,r+s),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*rs),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*rs);if(i.shape==="pent"){let y=[u,f,h,p];return{faces:[y],rim:y,ridges:[[h,p]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let y=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),M=[t.u0+y,n.vr,n.rh],v=[t.u1-y,n.vr,n.rh],S=i.shape==="pyramid"?[[u,f,M],[f,h,M],[h,p,M],[p,u,M]]:[[u,f,v,M],[M,v,h,p],[p,u,M],[f,h,v]],w=i.shape==="pyramid"?[[u,M],[p,M],[f,M],[h,M]]:[[M,v],[u,M],[p,M],[f,v],[h,v]];return{faces:S,rim:[u,f,h,p],ridges:w,gable:null}}if(i.shape==="halfhip"){let y=Math.min(n.y(0),n.y(r)),M=y+(n.rh-y)*.55,v=g>1e-6?Math.min(n.vr,(M-i.eave_a)/g):n.vr,S=b>1e-6?Math.max(n.vr,r-(M-i.eave_b)/b):n.vr,w=Math.min((t.u1-t.u0)/2-.1,(n.rh-M)/Math.max(.2,g)),A=[t.u0+w,n.vr,n.rh],x=[t.u1-w,n.vr,n.rh],T=[a,v,M],C=[a,S,M],I=[l,v,M],F=[l,S,M];return{faces:[[u,f,I,x,A,T],[A,x,F,h,p,C],[C,T,A],[I,F,x]],rim:[u,f,I,F,h,p,C,T],ridges:[[A,x],[T,A],[C,A],[I,x],[F,x]],gable:[[0,n.y(0)],[v,M],[S,M],[r,n.y(r)]]}}if(i.shape==="mansard"){let y=Wd(r,i.eave_a,i.eave_b,g,b),M=[a,y.vla,y.yla],v=[l,y.vla,y.yla],S=[a,r-y.vlb,y.ylb],w=[l,r-y.vlb,y.ylb],A=[a,y.vr,y.rh],x=[l,y.vr,y.rh];return{faces:[[u,f,v,M],[M,v,x,A],[A,x,w,S],[S,w,h,p]],rim:[u,f,v,x,w,h,p,S,A,M],ridges:[[A,x],[M,v],[S,w]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[r-y.vlb,y.ylb],[r,n.y(r)]]}}let _=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[u,f,m,_],[_,m,h,p]],rim:[u,f,m,h,p,_],ridges:[[_,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function ss(i,e,t){let n=null;for(let r of i.faces){if(!ut([e,t],r.map(y=>[y[0],y[1]])))continue;let[o,s]=r,a=r.slice(2).find(y=>Math.abs((s[0]-o[0])*(y[1]-o[1])-(s[1]-o[1])*(y[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],u=s[1]-o[1],f=a[0]-o[0],h=a[2]-o[2],p=a[1]-o[1],g=c*p-u*h,b=u*f-l*p,_=l*h-c*f;if(Math.abs(b)<1e-9)continue;let m=o[2]-(g*(e-o[0])+_*(t-o[1]))/b;n=n===null?m:Math.min(n,m)}return n}function Oi(i,e,t){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?s-t:t-o]:[t,i.flip?r-e:e-n]}function u1(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Iu(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=u1(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function Pu(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Yn(e),n=Ln(e).rh,r=Qr(i,{u0:0,u1:0,a:0,b:0}),o=Ln(i),s=g=>{let[b,_]=t.at(g,t.w/2),[m,y]=Oi(i,b,_);return ss(r,m,y)??o.y(y)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,u=a?1:-1,f=Math.abs(c-l),h=c;for(let g=.5;g<f;g+=.05)if(s(l+u*g)>=n-.02){h=l+u*g;break}if(Math.abs(h-c)<.05)return e;let p={...e};return e.axis==="x"?c===t.u1?p.x1=h:p.x0=h:c===t.u1?p.z1=h:p.z0=h,p}function Xd(i,e){let t=Pu(i,e),n=Yn(t),r=Ln(t),o=Qr(i,{u0:0,u1:0,a:0,b:0}),s=Ln(i),a=h=>{let[p,g]=n.at(h,n.w/2),[b,_]=Oi(i,p,g);return ss(o,b,_)??s.y(_)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],f=Math.max(1,Math.ceil(c/.15));for(let h=0;h<f;h++){let p=c*h/f,g=c*(h+1)/f,b=l?n.u0+p:n.u1-p,_=l?n.u0+g:n.u1-g,m=a(_),y=1/0,M=-1/0;for(let x=0;x<=40;x++){let T=n.w*x/40;r.y(T)>m+.02&&(y=Math.min(y,T),M=Math.max(M,T))}if(!(M-y>.05))continue;let v=n.at(b,y),S=n.at(_,M),w=Oi(i,v[0],v[1]),A=Oi(i,S[0],S[1]);u.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return u}function Jr(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c&&o.push(a),c!==u){let f=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*f,a[1]+(l[1]-a[1])*f,a[2]+(l[2]-a[2])*f])}}return o}function Yd(i,e){let t=Jr(i,0,e.u0,!0),n=Jr(i,0,e.u1,!1),r=Jr(Jr(i,0,e.u0,!1),0,e.u1,!0),o=Jr(r,1,e.v0,!0),s=Jr(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(Qo(a.map(l=>[l[0],l[1]])))>1e-6)}function El(i,e,t){let n=Yn(e),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(u=>r.some(f=>ut(u,f.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function qd(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}var Dn=1e-4;function Fu(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function $d(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>Dn&&a<1-Dn&&l>-Dn&&l<1+Dn?a:null}function Lu(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=Dn||s>=1-Dn?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<Dn?s:null}function h1(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if($d(n,r,s,a)!==null||Lu(s,n,r)!==null||Lu(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Dn)return!0}}return ut(i[0],e)||ut(e[0],i)}function f1(i){let e=i.map(o=>Fu(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],u=[0,1];e.forEach((f,h)=>{if(h!==s)for(let p=0;p<f.length;p++){let g=f[p],b=f[(p+1)%f.length],_=$d(l,c,g,b)??Lu(g,l,c);_!==null&&u.push(_)}}),u.sort((f,h)=>f-h);for(let f=1;f<u.length;f++){if(u[f]-u[f-1]<Dn)continue;let h=[l[0]+(c[0]-l[0])*u[f-1],l[1]+(c[1]-l[1])*u[f-1]],p=[l[0]+(c[0]-l[0])*u[f],l[1]+(c[1]-l[1])*u[f]],g=Math.hypot(p[0]-h[0],p[1]-h[1]),b=[(h[0]+p[0])/2+(p[1]-h[1])/g*.001,(h[1]+p[1])/2-(p[0]-h[0])/g*.001];e.some((_,m)=>m!==s&&ut(b,_))||t.some(([_,m])=>Math.hypot(_[0]-h[0],_[1]-h[1])<Dn&&Math.hypot(m[0]-p[0],m[1]-p[1])<Dn)||t.push([h,p])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([u],f)=>!r.has(f)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&Fu(s)>1e-6&&n.push(s)}return n}function Du(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&h1(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:f1(o))}function d1(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function Zd(i,e,t=.03){return i.every(n=>ut(n,e)||e.some((r,o)=>d1(n,r,e[(o+1)%e.length])<=t))}function Kd(i,e){let t=Fu(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}var sr=He(3662079,.95),Uu=He(3662079,1),Bi=He(5995775,.34),Jd=He(5995775,.22),Al=[-.55,.83],Xe=-1,Rl=16,ar=32,Qd=48,Nu=64,ct=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,o=r,s=r,a,l=Xe,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Qe;return e.setAttribute("position",new Ge(this.p,3)),e.setAttribute("color",new Ge(this.c,3)),e.setAttribute("fold",new Ge(this.f,1)),this.uv&&e.setAttribute("uv",new Ge(this.uv,2)),this.tile&&e.setAttribute("tile",new Ge(this.tile,2)),e.computeBoundingSphere(),e}},Vt=class{p=[];c=[];f=[];seg(e,t,n=sr,r=Xe){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Xe);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Xe),this.seg(c,a,n,o)}geometry(){let e=new Qe;return e.setAttribute("position",new Ge(this.p,3)),e.setAttribute("color",new Ge(this.c,3)),e.setAttribute("fold",new Ge(this.f,1)),e}};function jd(i,e,t,n){let o=i.uv?2:0,s=(f,h)=>{let p=f*3+h;return{p:i.p.slice(p*3,p*3+3),c:i.c.slice(p*3,p*3+3),uv:i.uv?i.uv.slice(p*2,p*2+2):null,tile:i.tile?i.tile.slice(p*2,p*2+2):null}},a=(f,h,p)=>({p:f.p.map((g,b)=>g+(h.p[b]-g)*p),c:f.c.map((g,b)=>g+(h.c[b]-g)*p),uv:f.uv&&h.uv?f.uv.map((g,b)=>g+(h.uv[b]-g)*p):null,tile:f.tile}),l=(f,h,p)=>{for(let g=0;g<3;g++){let b=f*3+g;for(let _=0;_<3;_++)i.p[b*3+_]=h[g].p[_],i.c[b*3+_]=h[g].c[_];if(i.uv&&h[g].uv)for(let _=0;_<o;_++)i.uv[b*2+_]=h[g].uv[_];if(i.tile&&h[g].tile)for(let _=0;_<2;_++)i.tile[b*2+_]=h[g].tile[_];i.f[b]=p}},c=(f,h)=>{let p=i.p.length/9;for(let g of f)i.p.push(...g.p),i.c.push(...g.c),i.f.push(h),i.uv?.push(...g.uv??[.5,.5]),i.tile?.push(...g.tile??[0,1]);return p},u=i.p.length/9;for(let f=e;f<u;f++){let h=[s(f,0),s(f,1),s(f,2)],p=h.map(x=>x.p[1]>t+1e-6),g=h.map(x=>x.p[1]<t-1e-6);if(!p.some(Boolean))continue;if(!g.some(Boolean)){for(let x=0;x<3;x++)i.f[f*3+x]=n;continue}let b=i.f[f*3],_=(x,T)=>a(x,T,(t-x.p[1])/(T.p[1]-x.p[1])),m=p.filter(Boolean).length,y=m===1?p.indexOf(!0):p.indexOf(!1),M=h[y],v=h[(y+1)%3],S=h[(y+2)%3],w=_(M,v),A=_(S,M);m===1?(l(f,[M,w,A],n),c([w,v,S],b),c([w,S,A],b)):(l(f,[M,w,A],b),c([w,v,S],n),c([w,S,A],n))}}function e0(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),f=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u];for(let p=0;p<3;p++)i.p[o*6+p]=l[p],i.p[o*6+3+p]=f[p];let h=i.c.slice(o*6,o*6+3);i.p.push(...f,...c),i.c.push(...h,...h),i.f.push(n,n)}}var it=Math.PI/180;function He(i,e){let t=new ae(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function p1(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function jr(i,e=[]){let t=i.map(([n,r])=>new Je(n,r));return Ro.triangulateShape(t,e.map(n=>n.map(([r,o])=>new Je(r,o))))}function t0(i,e,t,n,r,o,s){let a=new ae(s),l=p=>.5+.5*Math.min(1,Math.max(0,p/1.6));for(let p=0;p<4;p++){let g=e[p],b=e[(p+1)%4],_=t[p],m=t[(p+1)%4],y=b[0]-g[0],M=b[1]-g[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Al[0]-y/v*Al[1]+1)/2),A=(_[0]+m[0]-g[0]-b[0])/2*(-M/v)+(_[1]+m[1]-g[1]-b[1])/2*(y/v),x=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),T=He(o,l(n)*w).lerp(a,x),C=He(o,l(r)*w).lerp(a,x);i.tri([g[0],n,g[1]],[_[0],r,_[1]],[m[0],r,m[1]],T,C,C),i.tri([g[0],n,g[1]],[m[0],r,m[1]],[b[0],n,b[1]],T,C,T)}let[c,u,f,h]=t;Math.hypot(f[0]-c[0],f[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[f[0],r,f[1]],a))}function n0(i,e,t,n,r,o,s,a,l,c){let u=new ae(l),f=[];for(let p=0;p<c;p++){let g=p/c*Math.PI*2;f.push({y:o+Math.cos(g)*s,s:r+Math.sin(g)*s})}let h=(p,g)=>{let b=e(p,f[g%c].s);return[b[0],f[g%c].y,b[1]]};for(let p=0;p<c;p++){let g=(p+.5)/c*Math.PI*2,b=He(a,.62+.4*Math.max(0,Math.cos(g)));i.tri(h(t,p),h(n,p+1),h(n,p),b),i.tri(h(t,p),h(t,p+1),h(n,p+1),b)}for(let p of[t,n]){let g=e(p,r),b=[g[0],o,g[1]];for(let _=0;_<c;_++)i.tri(b,h(p,_),h(p,_+1),u)}}function mt(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:g=>Math.max(t+.002,n(g[0],g[1])),l=s.aoFrom??t,c=s.fold??Xe,u=g=>.5+.5*Math.min(1,Math.max(0,(g-l)/1.6)),f=(s.holes??[]).map(g=>p1(g)>0?[...g].reverse():g),h=f.length?[...e,...f.flat()]:e,p=s.topFace===!1&&!s.bottom?[]:jr(e,f);if(s.topFace!==!1){let g=new ae(o);for(let[b,_,m]of p){let y=h[b],M=h[_],v=h[m];i.tri([y[0],a(y),y[1]],[v[0],a(v),v[1]],[M[0],a(M),M[1]],g,g,g,void 0,s.topFold??c)}}if(s.bottom){let g=He(r,.55);for(let[b,_,m]of p){let y=h[b],M=h[_],v=h[m];i.tri([y[0],t,y[1]],[M[0],t,M[1]],[v[0],t,v[1]],g,g,g,void 0,c)}}for(let g of[e,...f])for(let b=0;b<g.length;b++){let _=g[b],m=g[(b+1)%g.length],y=m[0]-_[0],M=m[1]-_[1],v=Math.hypot(y,M);if(v<1e-6)continue;let w=.8+.28*((M/v*Al[0]-y/v*Al[1]+1)/2),A=a(_),x=a(m),T=He(r,u(t)*w),C=He(r,u(A)*w),I=He(r,u(x)*w);i.tri([_[0],t,_[1]],[_[0],A,_[1]],[m[0],x,m[1]],T,C,I,void 0,c),i.tri([_[0],t,_[1]],[m[0],x,m[1]],[m[0],t,m[1]],T,I,T,void 0,c)}}var d={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},U=He(5995775,.3),W=He(5995775,.17),Z=He(3662079,.45),qn=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=Bu(n)}rotated(e,t,n){let r=n*it,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let u=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];mt(this.buf,Ou(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Ou(l)&&(l.reverse(),c.reverse()),t0(this.buf,l,c,n,r,o,s),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,u);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,u),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,u=12,f=null){let h=Math.min(a,o-r)/2;if(h<1e-4||s<1e-4)return;let p=(r+o)/2,g=e==="x"?t:n,b=e==="x"?n:t,_=(y,M)=>e==="x"?this.tf(y,M):this.tf(M,y),m=this.buf.p.length;if(n0(this.buf,_,g-s/2,g+s/2,b,p,h,l,c,u),this.mirrored&&lr(this.buf,m),f)for(let y of[g-s/2,g+s/2])for(let M=0;M<u;M++){let v=M/u*Math.PI*2,S=(M+1)/u*Math.PI*2;this.line(_(y,b+Math.sin(v)*h),_(y,b+Math.sin(S)*h),p+Math.cos(v)*h,p+Math.cos(S)*h,f)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let u=[];for(let f=0;f<l;f++){let h=f/l*Math.PI*2;u.push(this.tf(e+Math.cos(h)*n,t+Math.sin(h)*n))}if(mt(this.buf,Ou(u),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let f=0;f<l;f++)this.line(u[f],u[(f+1)%l],o,o,c)}tubeYZ(e,t,n,r,o=8,s=null){if(t.length<2||n<1e-4)return;let a=t.map(([f,h],p)=>{let g=t[Math.max(0,p-1)],b=t[Math.min(t.length-1,p+1)],_=b[0]-g[0],m=b[1]-g[1],y=Math.hypot(_,m)||1;return Array.from({length:o},(M,v)=>{let S=v/o*Math.PI*2,w=this.tf(e+Math.cos(S)*n,h+_/y*Math.sin(S)*n);return[w[0],f-m/y*Math.sin(S)*n,w[1]]})}),l=this.buf.p.length,c=new ae(r);for(let f=0;f<a.length-1;f++)for(let h=0;h<o;h++){let p=(h+1)%o;this.buf.tri(a[f][h],a[f+1][h],a[f+1][p],c),this.buf.tri(a[f][h],a[f+1][p],a[f][p],c)}let u=(f,h)=>{let p=this.tf(e,t[f][1]),g=[p[0],t[f][0],p[1]];for(let b=0;b<o;b++){let _=(b+1)%o;this.buf.tri(g,a[f][h?_:b],a[f][h?b:_],c)}};if(u(0,!0),u(t.length-1,!1),this.mirrored&&lr(this.buf,l),s)for(let f=0;f<t.length-1;f++)this.seg(e,t[f][0],t[f][1],e,t[f+1][0],t[f+1][1],s)}seg(e,t,n,r,o,s,a=U){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,Xe)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o];this.line(s,e[(o+1)%4],n,n,r),this.line(s,s,t,n,r)}}};function Bu(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Ou(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function lr(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s;[n[a],n[l]]=[n[l],n[a]]}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function Gt(i,e,t,n,r,o,s=d.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let u of[-1,1])for(let f of[-1,1]){let h=u*l,p=f*c;a?i.loft([h-r*.3,h+r*.3,p-r*.3,p+r*.3],[h-r/2,h+r/2,p-r/2,p+r/2],0,n,s):i.box(h-r/2,h+r/2,0,n,p-r/2,p+r/2,s)}}function cr(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let u=1;u<s;u++){let f=e+c*u;i.seg(f,n,o,f,r,o,W)}for(let u=0;u<s;u++){let f=e+c*(u+.5),h=a??r-.08;if(l)i.seg(f-Math.min(.1,c/4),h,o+.012,f+Math.min(.1,c/4),h,o+.012,Z);else{let p=s>1?f+(u%2?-c/2+.06:c/2-.06):f+c/2-.06;i.seg(p,h-.08,o+.012,p,h+.08,o+.012,Z)}}}function ln(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,d.body,d.bodyTop,U),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,d.dark),cr(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function $n(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,Z)}}var Cl=.12,Il=1.9;function m1(i,e,t,n){let r=Cl;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,d.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,d.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,d.white,d.whiteTop,U);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,W)}}function g1(i,e,t,n){let r=Il,o=t/2;i.box(-e*.34,-e*.27,r+n*.2,r+n*.75,-t/2-.015,-t/2+.025,d.metal),i.box(e*.27,e*.34,r+n*.2,r+n*.75,-t/2-.015,-t/2+.025,d.metal),i.box(-e/2,e/2,r,r+n,-t/2,o,d.white,d.whiteTop,U),i.seg(-e*.42,r+n*.82,o+.003,e*.42,r+n*.82,o+.003,W);let s=r+n*.08,a=r+n*.27;i.box(-e*.43,e*.43,s,a,o-.018,o+.006,d.dark,d.dark,W),i.seg(-e*.42,s+n*.04,o+.009,e*.42,a-n*.025,o+.009,Z);for(let l=1;l<8;l++){let c=-e*.4+e*.8*(l/8);i.seg(c,s+n*.025,o+.011,c+e*.018,a-n*.025,o+.011,W)}i.seg(e*.37,r+n*.67,o+.006,e*.4,r+n*.67,o+.006,Z)}function _1(i,e,t,n){let r=Math.min(.045,n*.12),o=Math.min(e*.42,n*.48),s=r+n*.13,a=s+o;for(let p of[-e*.32,e*.32])i.box(p-e*.055,p+e*.055,0,r,-t*.34,t*.3,d.dark);i.box(-e*.43,e*.43,r,r+n*.06,-t*.4,t*.36,d.metal,d.metal,U),i.lyingCyl("z",0,-t*.13,s,a,t*.46,o,d.body,d.bodyTop,14,U),i.lyingCyl("z",0,-t*.39,s+o*.08,a-o*.08,t*.1,o*.84,d.dark,d.metal,12,W);for(let p=-2;p<=2;p++){let g=-t*.23+p*t*.055;i.box(-o*.54,o*.54,s+o*.43,s+o*.57,g-t*.012,g+t*.012,d.metal,d.metal)}let l=Math.min(e*.55,n*.65),c=r+n*.08;i.lyingCyl("z",0,t*.17,c,c+l,t*.22,l,d.accent,d.bodyTop,16,U),i.lyingCyl("z",0,t*.39,c+l*.34,c+l*.66,t*.22,l*.32,d.metal,d.dark,12,Z);let u=e*.16,f=t*.13,h=Math.min(e,t)*.075;i.cyl(u,f,h*1.35,c+l*.72,c+l*.82,d.accent,d.accent,12,U),i.cyl(u,f,h,c+l*.82,n,d.metal,d.metal,12,Z),i.box(-e*.11,e*.11,c+l*.58,c+l*.72,t*.285,t*.3,d.dark,d.dark,Z)}function i0(i,e,t,n){let r=n*.18,o=Math.min(e,t);i.cyl(0,0,o*.105,r,n*.34,d.dark,d.bodyTop,18,Z),i.cyl(0,0,o*.035,n*.3,n*.76,d.metal,d.bodyTop,10,U),i.cyl(0,0,o*.075,n*.74,n*.94,d.body,d.bodyTop,16,U),i.cyl(0,0,o*.095,n*.92,n,d.body,d.bodyTop,16,W)}function b1(i,e,t,n){i.loft([-e*.4,e*.4,-t*.33,t*.33],[-e*.34,e*.34,-t*.28,t*.28],0,n*.045,d.body,d.metal,U),i.cyl(0,0,Math.min(e,t)*.055,n*.04,n*.62,d.metal,d.metal,10),i.box(-e*.13,e*.13,n*.06,n*.14,-t*.2,t*.2,d.body,d.bodyTop,W);for(let a of[-e*.07,0,e*.07])i.cyl(a,t*.12,e*.018,n*.14,n*.155,d.accent,d.accent,8,Z);let r=n*.78,o=Math.min(e,n*.42)*.46,s=t*.075;i.box(-e*.085,e*.085,n*.58,r-o*.18,-t*.1,t*.015,d.body,d.bodyTop,U),i.lyingCyl("z",0,-t*.11,r-o*.3,r+o*.3,t*.24,o*.6,d.body,d.bodyTop,16,U);for(let a of[-s,s]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*o*.18,r+Math.sin(c)*o*.18,a,Math.cos(c)*o,r+Math.sin(c)*o,a,W)}$n(i,0,r,o,a,32),$n(i,0,r,o*.86,a,32),$n(i,0,r,o*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*o,c=r+Math.sin(a)*o;i.seg(l,c,-s,l,c,s,U)}}function x1(i,e,t,n){let r=n*.5,o=Math.min(e,n)*.46,s=t*.16;i.box(-e*.15,e*.15,n*.28,n*.72,-t/2,-t*.4,d.body,d.bodyTop,U),i.box(-e*.06,e*.06,r-n*.06,r+n*.06,-t*.42,-t*.18,d.metal,d.metal,U),i.lyingCyl("z",0,-t*.12,r-o*.3,r+o*.3,t*.24,o*.6,d.body,d.bodyTop,16,U);for(let a of[-s,s]){for(let l=0;l<16;l++){let c=l/16*Math.PI*2;i.seg(Math.cos(c)*o*.18,r+Math.sin(c)*o*.18,a,Math.cos(c)*o,r+Math.sin(c)*o,a,W)}$n(i,0,r,o,a,32),$n(i,0,r,o*.86,a,32),$n(i,0,r,o*.18,a,18)}for(let a of[0,Math.PI/2,Math.PI,Math.PI*3/2]){let l=Math.cos(a)*o,c=r+Math.sin(a)*o;i.seg(l,c,-s,l,c,s,U)}}function as(i,e,t,n,r,o,s=null){if(t==="fan_ceiling"||t==="fan_ceiling_light"){let g=new qn(i,e,(y,M)=>[y,M]),b=Math.min(n,r),_=b*.115,m=s==="3"?3:s==="4"?4:5;for(let y=0;y<m;y++){let M=y/m*360;g.rotated(0,0,M).loft([b*.08,b*.48,-_*.42,_*.42],[b*.105,b*.465,-_*.52,_*.52],0,o*.06,d.fabric,d.fabricTop,U)}g.cyl(0,0,b*.115,-o*.025,o*.07,d.dark,d.bodyTop,18,Z);return}let a=Math.min(n,o*.42)*.46,l=-Math.max(.006,r*.012),c=-l,u=new ae(d.bodyTop),f=new ae(d.body),h=(g,b)=>[Math.cos(b)*g,Math.sin(b)*g];for(let g=0;g<3;g++){let b=g/3*Math.PI*2,_=[h(a*.14,b-.12),h(a*.46,b-.34),h(a*.84,b-.16),h(a*.72,b+.22),h(a*.24,b+.34)],m=(y,M)=>[y[0],y[1],M];for(let y=1;y<_.length-1;y++)i.tri(m(_[0],c),m(_[y],c),m(_[y+1],c),u),i.tri(m(_[0],l),m(_[y+1],l),m(_[y],l),f);for(let y=0;y<_.length;y++){let M=(y+1)%_.length;i.tri(m(_[y],l),m(_[M],c),m(_[M],l),f),i.tri(m(_[y],l),m(_[y],c),m(_[M],c),f),e.seg(m(_[y],c),m(_[M],c),U,Xe)}}new qn(i,e,(g,b)=>[g,b]).lyingCyl("z",0,0,-a*.14,a*.14,r*.1,a*.28,d.body,d.bodyTop,14,Z)}function y1(i,e,t,n){let r=Math.min(t*.88,n*.92),o=(n-r)/2;i.lyingCyl("x",0,0,o,o+r,e*.9,r,d.white,d.whiteTop,22,U);for(let s of[-e*.46,e*.46])i.lyingCyl("x",s,0,o+r*.04,o+r*.96,e*.035,r*.92,d.white,d.whiteTop,18,W);for(let s of[-e*.28,e*.28])i.box(s-.025,s+.025,0,o+r*.25,-t*.42,-t*.28,d.metal,d.metal);for(let[s,a]of[[-e*.2,d.accent],[e*.2,d.fabricTop]])i.cyl(s,t*.05,Math.min(e,t)*.025,0,o+r*.18,a,a,10,W),i.cyl(s,t*.05,Math.min(e,t)*.04,o+r*.14,o+r*.2,d.metal,d.metal,10);i.box(e*.18,e*.4,o+r*.38,o+r*.68,t*.43,t*.48,d.body,d.glass,Z),i.seg(e*.24,o+r*.53,t*.485,e*.35,o+r*.53,t*.485,Z)}function v1(i,e,t,n){let r=Math.min(.035,e*.025),o=e/2-r;for(let s of[-1,1]){i.box(s*o-r,s*o+r,0,n,-t/2,-t/2+r*2,d.metal,d.metal,U),i.box(s*o-r,s*o+r,0,n,t/2-r*2,t/2,d.metal,d.metal,U);for(let a of[-t/2+r,t/2-r])i.box(s*o-r*2.2,s*o+r*2.2,0,r*1.2,a-r*2.5,a+r*2.5,d.dark,d.dark)}for(let s=0;s<7;s++){let a=-t/2+r+(t-2*r)*s/6;i.box(-e/2+r,e/2-r,n-r*2,n,a-r/2,a+r/2,d.metal,d.metal,W)}i.seg(-e/2,.05,-t/2,e/2,n-.05,-t/2,W),i.seg(e/2,.05,-t/2,-e/2,n-.05,-t/2,W),i.seg(-e/2,.05,t/2,e/2,n-.05,t/2,W),i.seg(e/2,.05,t/2,-e/2,n-.05,t/2,W)}var r0={air_conditioner:({b:i,w:e,d:t,h:n})=>(g1(i,e,t,n),!1),drying_rack:({b:i,w:e,d:t,h:n})=>(v1(i,e,t,n),.5),fan_ceiling:({b:i,w:e,d:t,h:n})=>(i0(i,e,t,n),!1),fan_ceiling_light:({b:i,w:e,d:t,h:n})=>(i0(i,e,t,n),!1),fan_floor:({b:i,w:e,d:t,h:n})=>(b1(i,e,t,n),.5),fan_wall:({b:i,w:e,d:t,h:n})=>(x1(i,e,t,n),!1),radiator:({b:i,w:e,d:t,h:n})=>(m1(i,e,t,n),!1),water_heater:({b:i,w:e,d:t,h:n})=>(y1(i,e,t,n),!1),water_pump:({b:i,w:e,d:t,h:n})=>(_1(i,e,t,n),.5)};function M1(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=t/r;for(let u=0;u<r;u++){let f=t/2-s*u,h=f-s,p=o*(u+1);i.box(-e/2,e/2,0,p,h,f,d.wood,d.woodTop),i.seg(-e/2,p,f,e/2,p,f,U)}i.seg(-e/2,0,t/2,-e/2,o,t/2,U);for(let u of[-e/2,e/2])i.seg(u,o,t/2,u,n,-t/2+s,W);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,t/2-s/2,l,o*c+a,t/2-s*(c-.5),Z);for(let u=0;u<c;u+=3){let f=t/2-s*(u+.5),h=o*(u+1);i.seg(l,h,f,l,h+a,f,W)}}function S1(i,e,t,n){let r=Math.max(6,Math.round(n/.18)),o=Math.floor(r/2),s=r-o,a=n/r,l=a*o,c=Math.min(.16,e*.12),u=(e-c)/2,f=Math.min(t*.34,Math.max(t*.22,u)),h=-t/2+f,p=t-f,g=p/o,b=p/s,_=-e/2,m=-c/2,y=c/2,M=e/2;for(let P=0;P<o;P++){let E=t/2-g*P,D=E-g,N=a*(P+1);i.box(_,m,0,N,D,E,d.white,d.whiteTop),i.seg(_,N,E,m,N,E,U)}i.box(-e/2,e/2,0,l,-t/2,h,d.white,d.whiteTop,U);for(let P=0;P<s;P++){let E=h+b*P,D=E+b,N=l+a*(P+1);i.box(y,M,0,N,E,D,d.white,d.whiteTop),i.seg(y,N,E,M,N,E,U)}let v=Math.min(.9,Math.max(.55,n*.32)),S=[_+.03,m-.03],w=[y+.03,M-.03];for(let P of S){i.seg(P,a+v,t/2-g/2,P,l+v,h,Z);for(let E=0;E<o;E+=3){let D=t/2-g*(E+.5),N=a*(E+1);i.seg(P,N,D,P,N+v,D,W)}}let A=Math.max(1,s-3);for(let P of w){i.seg(P,l+v,h,P,l+a*A+v,h+b*(A-.5),Z);for(let E=0;E<A;E+=3){let D=h+b*(E+.5),N=l+a*(E+1);i.seg(P,N,D,P,N+v,D,W)}}let x=S[0],T=S[1],C=w[0],I=w[1],F=-t/2+.03;i.seg(T,l+v,h,C,l+v,h,Z),i.seg(x,l+v,h,x,l+v,F,Z),i.seg(x,l+v,F,I,l+v,F,Z),i.seg(I,l+v,F,I,l+v,h,Z);for(let[P,E]of[[T,h],[C,h],[x,h],[x,F],[I,F],[I,h]])i.seg(P,l,E,P,l+v,E,W)}function T1(i,e,t,n){let r=Math.min(e*.58,t*.22,n*.42),o=e*.66,s=t*.34,a=-t*.34;for(let l of[a,s])i.lyingCyl("x",0,l,0,r,o,r,d.dark,d.metal,14,U),i.lyingCyl("x",0,l,r*.16,r*.84,o+.012,r*.46,d.metal,d.metal,12,W);i.loft([-e*.3,e*.3,a,t*.12],[-e*.2,e*.2,-t*.18,t*.06],r*.45,n*.58,d.body,d.bodyTop,U),i.box(-e*.3,e*.3,r*.37,r*.44,-t*.08,t*.22,d.dark,d.metal,W),i.lyingCyl("z",e*.24,a-t*.04,r*.2,r*.47,t*.4,r*.25,d.metal,d.dark,10,W),i.pad(-e*.3,e*.3,n*.52,n*.62,-t*.25,t*.05,d.dark,d.fabricTop,.025,U),i.seg(-e*.18,n*.48,t*.02,-e*.08,n*.86,s,U),i.seg(e*.18,n*.48,t*.02,e*.08,n*.86,s,U),i.seg(-e*.19,r*.63,a,-e*.21,n*.54,-t*.12,W),i.seg(e*.19,r*.63,a,e*.21,n*.54,-t*.12,W),i.seg(-e*.36,n*.9,s,e*.36,n*.9,s,Z),i.box(-e*.23,e*.23,n*.72,n*.98,s-t*.07,s+t*.07,d.body,d.bodyTop,U),i.cyl(0,s+t*.075,Math.min(e,t)*.07,n*.82,n*.94,d.white,d.accent,12,Z);for(let l of[-1,1])i.seg(l*e*.22,n*.9,s,l*e*.39,n,s-t*.04,U),i.cyl(l*e*.39,s-t*.04,e*.045,n*.97,n,d.glass,d.metal,10,Z);i.seg(-e*.31,n*.66,-t*.31,e*.31,n*.66,-t*.31,U)}function w1(i,e,t,n){let r=Math.min(.07,e*.035);for(let a of[-e/2+r,e/2-r])i.box(a-r/2,a+r/2,0,n,-r,r,d.metal,d.metal,U),i.box(a-t*.25,a+t*.25,0,r,-t*.36,t*.36,d.metal,d.metal,U);let o=-e/2+r,s=e/2-r;i.loft([o,-e*.14,-t*.34,t*.34],[o+.08,-e*.14,-t*.3,t*.3],n*.36,n*.42,d.fabric,d.fabricTop,W),i.loft([-e*.14,e*.14,-t*.34,t*.34],[-e*.13,e*.13,-t*.3,t*.3],n*.25,n*.31,d.fabric,d.fabricTop,W),i.loft([e*.14,s,-t*.34,t*.34],[e*.14,s-.08,-t*.3,t*.3],n*.36,n*.42,d.fabric,d.fabricTop,W),i.seg(o,n*.8,0,-e*.14,n*.42,0,U),i.seg(e*.14,n*.42,0,s,n*.8,0,U)}function E1(i,e,t,n){let r=Math.min(e,t);i.cyl(0,0,r*.08,0,n-.07,d.metal,d.metal,12),i.cyl(0,0,r*.22,n-.07,n,d.body,d.bodyTop,16,U);for(let[o,s]of[[0,-.38],[.38,0],[0,.38],[-.38,0]])i.cyl(o*e,s*t,r*.065,0,n*.52,d.metal,d.metal,10),i.cyl(o*e,s*t,r*.105,n*.52,n*.61,d.body,d.bodyTop,12,W)}function A1(i,e,t,n){let r=Math.min(e,t)*.46;i.cyl(0,0,r*.84,0,n*.08,d.metal,d.metal,12,U),i.cyl(0,0,r,n*.08,n*.92,d.metal,d.whiteTop,20,U);for(let o of[n*.28,n*.5,n*.72])for(let s=0;s<24;s++){let a=s/24*Math.PI*2,l=(s+1)/24*Math.PI*2;i.seg(Math.cos(a)*r,o,Math.sin(a)*r,Math.cos(l)*r,o,Math.sin(l)*r,W)}i.cyl(0,0,r*.18,n*.92,n,d.dark,d.bodyTop,12,W)}function o0(i,e,t,n,r){let o=Math.min(.12,e*.05);for(let l of[-e/2+o/2,e/2-o/2])i.box(l-o/2,l+o/2,0,n,-t/2,t/2,d.body,d.bodyTop,U);let s=r?2:Math.max(3,Math.round(e/.4)),a=e-2*o;for(let l=0;l<s;l++){let c=-a/2+a*l/s+o*.25,u=-a/2+a*(l+1)/s-o*.25;i.box(c,u,n*.08,n*.92,-t*.18,t*.18,r?d.metal:d.wood,r?d.metal:d.woodTop,W),r&&i.seg(l===0?u:c,n*.46,t*.2,l===0?u-.08:c+.08,n*.46,t*.2,Z)}if(!r)for(let l of[n*.22,n*.76])i.box(-a/2,a/2,l-.025,l+.025,-t/2,t/2,d.wood,d.woodTop,U)}var s0={fence:({b:i,w:e,d:t,h:n})=>(o0(i,e,t,n,!1),.5),gate:({b:i,w:e,d:t,h:n})=>(o0(i,e,t,n,!0),.5),hammock:({b:i,w:e,d:t,h:n})=>(w1(i,e,t,n),.5),motorbike:({b:i,w:e,d:t,h:n})=>(T1(i,e,t,n),.5),stairs:({b:i,w:e,d:t,h:n})=>(M1(i,e,t,n),.5),stairs_landing:({b:i,w:e,d:t,h:n})=>(S1(i,e,t,n),.5),stone_table_set:({b:i,w:e,d:t,h:n})=>(E1(i,e,t,n),.5),water_tank:({b:i,w:e,d:t,h:n})=>(A1(i,e,t,n),.5)};function zu(i,e,t,n,r){r==="round"?i.cyl(0,0,Math.min(e,t)/2,0,n,d.white,d.whiteTop,20,U):r==="square"?i.box(-e/2,e/2,0,n,-t/2,t/2,d.white,d.whiteTop,U):(i.box(-e/2,e/2,0,n,-t*.12,t*.12,d.metal,d.metal,U),i.box(-e*.12,e*.12,0,n,-t/2,t/2,d.metal,d.metal,W))}function R1(i,e,t,n){let r=2.7-n;for(let o=0;o<5;o++){let s=-t/2+t*o/4;i.box(-e/2,e/2,r,r+n,s-.055,s+.055,d.wood,d.woodTop,U)}}function C1(i,e,t,n){i.box(-e/2,e/2,2.7-n,2.7,-t/2,t/2,d.white,d.whiteTop,U)}function I1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.body,d.bodyTop,U);for(let r=.24;r<n;r+=.24)i.seg(-e/2,r,t/2+.003,e/2,r,t/2+.003,W)}function P1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.body,d.bodyTop,U),i.box(-e*.38,e*.38,n*.14,n*.68,t/2,t/2+.012,d.dark,d.dark,Z),i.box(-e*.31,e*.31,n*.18,n*.24,t/2+.014,t/2+.025,d.accent,d.accent,Z)}function F1(i,e,t,n){for(let o=0;o<3;o++){let s=-e/2+e*o/3,a=-e/2+e*(o+1)/3,l=(o-1)*t*.16;i.box(s+.015,a-.015,.04,n,l-t*.12,l+t*.12,d.body,d.bodyTop,U),i.seg(a-.07,n*.42,l+t*.13,a-.07,n*.58,l+t*.13,Z)}i.box(-e/2,e/2,n,n+.04,-t/2,t/2,d.metal,d.metal,W)}function a0(i,e,t,n,r){i.box(-e/2,-e/2+.06,0,n,-t/2,t/2,d.body,d.bodyTop,U),i.box(e/2-.06,e/2,0,n,-t/2,t/2,d.body,d.bodyTop,U),i.box(-e/2,e/2,n-.06,n,-t/2,t/2,d.body,d.bodyTop,U);for(let s of[n*.25,n*.5,n*.75])i.box(-e/2+.06,e/2-.06,s-.018,s+.018,-t/2,t/2,d.wood,d.woodTop,r?Z:W);r&&i.box(-e*.42,e*.42,n*.08,n*.12,t/2,t/2+.012,d.accent,d.accent,Z)}function L1(i,e,t,n){let r=2.7-n;i.box(-e/2,e/2,r,r+n,-t/2,t/2,d.white,d.whiteTop,U),i.box(-e*.44,e*.44,r-.015,r+.015,t*.22,t*.4,d.accent,d.accent,Z)}function D1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t*.12,d.wood,d.woodTop,U),i.box(-e/2,e/2,0,n*.5,t*.12,t/2,d.wood,d.woodTop,W)}function U1(i,e,t,n){for(let r of[-e/2,0,e/2])i.box(r-.02,r+.02,0,n,-t/2,t/2,d.metal,d.metal,U);i.box(-e/2,e/2,n-.045,n,-t/2,t/2,d.metal,d.metal,Z),i.seg(-e/2,n*.08,0,e/2,n*.08,0,W)}function N1(i,e,t,n){i.box(-e/2,e/2,0,n*.72,-t/2,t/2,d.wood,d.woodTop,U),i.pad(-e*.47,e*.47,n*.7,n,-t*.46,t*.46,d.fabric,d.cushion,.035,Z),i.seg(0,.06,t/2+.004,0,n*.58,t/2+.004,W)}var O1=(i,e,t)=>({x0:-i*.37,x1:i*.37,y0:t*.15,y1:t*.67,z:e/2+.014}),B1=(i,e,t)=>({x0:-i*.4,x1:i*.4,y0:t*.07,y1:t*.13,z:e/2+.014}),z1=(i,e,t)=>({x0:-i*.42,x1:i*.42,y0:2.7-t-.018,y1:2.7-t+.018,z:e*.32}),l0={column_round:({b:i,w:e,d:t,h:n})=>(zu(i,e,t,n,"round"),.5),column_square:({b:i,w:e,d:t,h:n})=>(zu(i,e,t,n,"square"),.5),column_steel:({b:i,w:e,d:t,h:n})=>(zu(i,e,t,n,"steel"),.5),ceiling_beams:({b:i,w:e,d:t,h:n})=>(R1(i,e,t,n),!1),downstand_beam:({b:i,w:e,d:t,h:n})=>(C1(i,e,t,n),!1),chimney_inside:({b:i,w:e,d:t,h:n})=>(I1(i,e,t,n),.5),fireplace_builtin:({b:i,w:e,d:t,h:n})=>(P1(i,e,t,n),.5),sliding_wall:({b:i,w:e,d:t,h:n})=>(F1(i,e,t,n),.5),builtin_shelf_niche:({b:i,w:e,d:t,h:n})=>(a0(i,e,t,n,!1),!1),led_niche:({b:i,w:e,d:t,h:n})=>(a0(i,e,t,n,!0),!1),light_cove:({b:i,w:e,d:t,h:n})=>(L1(i,e,t,n),!1),platform_steps:({b:i,w:e,d:t,h:n})=>(D1(i,e,t,n),.5),gallery_railing_glass:({b:i,w:e,d:t,h:n})=>(U1(i,e,t,n),.5),window_seat:({b:i,w:e,d:t,h:n})=>(N1(i,e,t,n),.5)},c0={fireplace_builtin:O1,led_niche:B1,light_cove:z1};function Zn(i,e,t,n,r){let o=r==="futon"?n*.72:n,s=r==="boxspring"?n*.42:r==="futon"?n*.22:n*.3,a=r==="boxspring"?n*.34:Math.min(.24,n*.3),l=r==="upholstered"?d.fabric:d.wood;i.box(-e/2,e/2,.08,s,-t/2,t/2,l,r==="upholstered"?d.fabricTop:d.woodTop,U),r==="boxspring"&&i.pad(-e/2,e/2,.08,s,-t/2,t/2,d.fabric,d.fabricTop,.04,U),i.pad(-e*.48,e*.48,s,s+a,-t*.47,t*.47,d.white,d.whiteTop,.035,W);let c=r==="upholstered"?.12:.075;r==="upholstered"?i.pad(-e/2,e/2,.08,o,-t/2,-t/2+c,d.fabric,d.cushion,.045,U):i.box(-e/2,e/2,.08,o,-t/2,-t/2+c,l,r==="futon"?d.woodTop:d.wood,U);let u=e<1.2?1:2,f=e*.84/u;for(let h=0;h<u;h++){let p=-e*.42+f*h+.035;i.pad(p,p+f-.07,s+a,s+a+.08,-t*.4,-t*.22,d.cushion,d.whiteTop,.025,W)}if(r==="upholstered")for(let h of[-e*.24,0,e*.24])i.seg(h,n*.48,-t/2-.002,h,n*.92,-t/2-.002,Z)}function ls(i,e,t,n,r,o=!1){i.box(-e/2,e/2,0,n,-t/2,t/2,d.wood,d.woodTop,U);let s=t/2+.004;for(let a=1;a<r;a++){let l=-e/2+e*a/r;i.seg(l,.04,s,l,n-.04,s,W)}for(let a=0;a<r;a++){let l=-e/2+e*(a+.5)/r,c=a<r/2?1:-1;i.seg(l+c*e/r*.3,n*.45,s,l+c*e/r*.3,n*.58,s,Z)}o&&i.box(-e*.14,e*.14,n*.08,n*.92,t/2+.006,t/2+.012,d.glass,d.glass,Z)}function k1(i,e,t,n){let r=Math.min(e,t)*.48;i.box(-e/2,-e/2+r,0,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2+r,e/2,0,n,-t/2,-t/2+r,d.wood,d.woodTop,U),i.seg(-e/2+r,.04,t/2,-e/2+r,n-.04,t/2,W),i.seg(e/2,.04,-t/2+r,e/2,n-.04,-t/2+r,W)}function ur(i,e,t,n,r,o=1){i.box(-e/2,e/2,0,n,-t/2,t/2,d.wood,d.woodTop,U);let s=t/2+.004;for(let a=1;a<r;a++)i.seg(-e/2+.025,n*a/r,s,e/2-.025,n*a/r,s,W);for(let a=1;a<o;a++)i.seg(-e/2+e*a/o,.03,s,-e/2+e*a/o,n-.03,s,W);for(let a=0;a<r;a++)for(let l=0;l<o;l++){let c=-e/2+e*(l+.5)/o,u=n*(a+.5)/r;i.seg(c-Math.min(.06,e/o*.16),u,s,c+Math.min(.06,e/o*.16),u,s,Z)}for(let a of[-e*.4,e*.4])i.box(a-.02,a+.02,0,.06,-t*.4,t*.4,d.dark,d.dark)}function V1(i,e,t,n){i.box(-e/2,e/2,.48,.48+n,-t/2,t/2,d.wood,d.woodTop,U),i.seg(-e/2+.025,.48+n*.55,t/2+.004,e/2-.025,.48+n*.55,t/2+.004,W),i.seg(-e*.08,.48+n*.28,t/2+.006,e*.08,.48+n*.28,t/2+.006,Z)}function G1(i,e,t,n){for(let r of[-e*.44,e*.44])i.box(r-.025,r+.025,0,n,-.025,.025,d.metal,d.metal,U);i.box(-e*.46,e*.46,n*.82,n*.86,-.025,.025,d.metal,d.metal,Z),i.box(-e/2,e/2,0,.045,-t/2,t/2,d.wood,d.woodTop,W)}function H1(i,e,t,n){Zn(i,e,t,n*.46,"frame");for(let r of[-e*.47,e*.47])for(let o of[-t*.47,t*.47])i.box(r-.025,r+.025,0,n,o-.025,o+.025,d.wood,d.wood,U);i.box(-e*.48,e*.48,n*.94,n,-t*.48,-t*.45,d.wood,d.wood,W),i.box(-e*.48,e*.48,n*.94,n,t*.45,t*.48,d.wood,d.wood,W)}function u0(i,e,t,n,r=!1){i.box(-e/2,e/2,0,n,-t/2,t/2,d.wood,d.woodTop,U);let o=t/2+.005;i.seg(0,.04,o,0,n-.04,o,U),i.seg(-e*.46,n*.04,o,e*.46,n*.04,o,W),i.seg(-e*.46,n*.96,o,e*.46,n*.96,o,W),r&&i.box(-e*.42,e*.42,n*.86,n*.89,o,o+.012,d.accent,d.accent,Z)}function W1(i,e,t,n){let r=Math.min(.38,Math.min(e,t)*.24);i.box(-e/2,-e/2+r,0,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2+r,e/2,0,n,-t/2,-t/2+r,d.wood,d.woodTop,U);for(let o of[n*.32,n*.65])i.seg(-e/2,o,t/2,-e/2+r,o,t/2,W),i.seg(e/2,o,-t/2,e/2,o,-t/2+r,W)}function h0(i,e,t,n,r){let o=n*.48;i.box(-e/2,e/2,o-.06,o,-t/2,t/2,d.wood,d.woodTop,U);for(let s of[-e*.43,e*.43])i.box(s-.025,s+.025,0,o,-t*.38,t*.38,d.wood,d.wood);i.box(-e*.32,e*.32,o+.08,n,-t/2,-t/2+.035,d.glass,d.glass,r?Z:U)}function X1(i,e,t,n){for(let r of[-e*.4,e*.4])i.box(r-.025,r+.025,0,n*.72,-t*.35,t*.35,d.wood,d.wood);i.pad(-e/2,e/2,n*.68,n,-t/2,t/2,d.fabric,d.cushion,.035,U)}function Y1(i,e,t,n){ur(i,e,t,n*.78,3),i.pad(-e/2,e/2,n*.78,n,-t/2,t/2,d.white,d.whiteTop,.04,U)}function q1(i,e,t,n){i.box(-e*.46,e*.46,.08,n,-.035,.035,d.glass,d.glass,Z),i.box(-e/2,e/2,0,.06,-t/2,t/2,d.wood,d.woodTop,U)}function $1(i,e,t,n){i.pad(-e*.42,e*.42,.12,n*.45,-t*.3,t*.42,d.fabric,d.fabricTop,.05,U),i.pad(-e*.38,e*.38,n*.42,n,-t*.42,-t*.25,d.fabric,d.cushion,.04,U),i.box(e*.38,e/2,0,n*.52,-t/2,t/2,d.wood,d.woodTop,W)}function Z1(i,e,t,n){i.box(-e/2,e/2,0,n*.28,-t/2,t/2,d.dark,d.dark,U),i.cyl(0,0,Math.min(e,t)*.42,n*.28,n,d.white,d.whiteTop,18,Z)}var K1=(i,e,t)=>({x0:-i*.44,x1:i*.44,y0:t*.22,y1:t*.27,z:e/2+.006}),J1=(i,e,t)=>({x0:-i*.42,x1:i*.42,y0:t*.86,y1:t*.89,z:e/2+.018}),Q1=(i,e,t)=>({x0:-i*.3,x1:i*.3,y0:t*.42,y1:t*.8,z:e*.43}),j1=(i,e,t)=>({x0:-i*.33,x1:i*.33,y0:t*.55,y1:t*.96,z:-e/2-.004}),f0={bed_90:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_140:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_160:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_200:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"frame"),.5),bed_upholstered_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"upholstered"),.5),bed_boxspring_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"boxspring"),.5),bed_futon_160:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"futon"),.5),wardrobe_2door:({b:i,w:e,d:t,h:n})=>(ls(i,e,t,n,2),.5),wardrobe_3door:({b:i,w:e,d:t,h:n})=>(ls(i,e,t,n,3),.5),wardrobe_4door:({b:i,w:e,d:t,h:n})=>(ls(i,e,t,n,4),.5),wardrobe_6door:({b:i,w:e,d:t,h:n})=>(ls(i,e,t,n,6),.5),wardrobe_mirror:({b:i,w:e,d:t,h:n})=>(ls(i,e,t,n,3,!0),.5),wardrobe_corner:({b:i,w:e,d:t,h:n})=>(k1(i,e,t,n),.5),nightstand_drawer:({b:i,w:e,d:t,h:n})=>(ur(i,e,t,n,1),.5),nightstand_slim:({b:i,w:e,d:t,h:n})=>(ur(i,e,t,n,2),.5),nightstand_floating:({b:i,w:e,d:t,h:n})=>(V1(i,e,t,n),!1),dresser_80_3:({b:i,w:e,d:t,h:n})=>(ur(i,e,t,n,3),.5),dresser_140_6:({b:i,w:e,d:t,h:n})=>(ur(i,e,t,n,3,2),.5),chest_tall_5:({b:i,w:e,d:t,h:n})=>(ur(i,e,t,n,5),.5),clothes_rail:({b:i,w:e,d:t,h:n})=>(G1(i,e,t,n),.35),bed_canopy:({b:i,w:e,d:t,h:n})=>(H1(i,e,t,n),.5),wardrobe_sliding:({b:i,w:e,d:t,h:n})=>(u0(i,e,t,n),.5),closet_walkin:({b:i,w:e,d:t,h:n})=>(W1(i,e,t,n),.5),vanity_mirror:({b:i,w:e,d:t,h:n})=>(h0(i,e,t,n,!1),.5),bed_bench:({b:i,w:e,d:t,h:n})=>(X1(i,e,t,n),.5),changing_table:({b:i,w:e,d:t,h:n})=>(Y1(i,e,t,n),.5),mirror_floor:({b:i,w:e,d:t,h:n})=>(q1(i,e,t,n),.35),chest_tall:({b:i,w:e,d:t,h:n})=>(ur(i,e,t,n,4),.5),reading_nook:({b:i,w:e,d:t,h:n})=>($1(i,e,t,n),.5),bed_ambient_180:({b:i,w:e,d:t,h:n})=>(Zn(i,e,t,n,"upholstered"),.5),wardrobe_light:({b:i,w:e,d:t,h:n})=>(u0(i,e,t,n,!0),.5),alarm_sunrise:({b:i,w:e,d:t,h:n})=>(Z1(i,e,t,n),.35),vanity_light:({b:i,w:e,d:t,h:n})=>(h0(i,e,t,n,!0),.5)},d0={bed_ambient_180:K1,wardrobe_light:J1,alarm_sunrise:Q1,vanity_light:j1};function eo(i,e,t,n,r){ln(i,e,t-.02,n-.12,Math.max(1,Math.round(e/.48)),n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,d.white,d.whiteTop,U);for(let o=0;o<r;o++){let s=-e/2+e*(o+.5)/r,a=Math.min(e/r*.34,.24);i.cyl(s,.03,a,n-.006,n+.004,d.glass,d.glass,18,Z),i.cyl(s,-t*.3,.018,n,n+.2,d.metal,d.metal,8),i.box(s-.015,s+.015,n+.16,n+.2,-t*.3,-t*.08,d.metal,d.metal)}}function ev(i,e,t,n){i.loft([-e*.18,e*.18,-t*.2,t*.18],[-e*.28,e*.28,-t*.36,t*.36],0,n*.78,d.white,d.whiteTop,U),i.box(-e/2,e/2,n*.76,n,-t/2,t/2,d.white,d.whiteTop,U),i.cyl(0,.04,Math.min(e,t)*.3,n-.006,n+.004,d.glass,d.glass,18,Z),i.cyl(0,-t*.3,.018,n,n+.2,d.metal,d.metal,8)}function Fl(i,e,t,n,r){let o=r?.09:.07;i.box(-e/2,e/2,0,n-.02,-t/2,t/2,d.white,d.whiteTop,U),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+o,d.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-o,t/2,d.whiteTop),i.box(-e/2,-e/2+o,n-.02,n,-t/2+o,t/2-o,d.whiteTop),i.box(e/2-o,e/2,n-.02,n,-t/2+o,t/2-o,d.whiteTop),i.box(-e/2+o,e/2-o,n-.03,n-.02,-t/2+o,t/2-o,d.glass,d.glass,Z),i.cyl(-e/2+o*.7,0,.02,n,n+.12,d.metal,d.metal,8)}function tv(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.white,d.whiteTop,U),i.cyl(e*.08,t*.08,Math.min(e,t)*.38,n-.018,n+.003,d.glass,d.glass,24,Z),i.box(-e*.42,e*.42,n-.02,n+.004,-t/2,-t*.34,d.whiteTop,d.whiteTop),i.box(-e/2,-e*.34,n-.02,n+.004,-t*.42,t*.42,d.whiteTop,d.whiteTop)}function Pl(i,e,t,n,r){i.box(-e/2,e/2,0,.045,-t/2,t/2,d.whiteTop,d.whiteTop,U),i.cyl(0,0,.04,.045,.05,d.metal,d.metal,10);let o=r==="corner"?[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]]:r==="niche"?[[-e/2,t/2,e/2,t/2]]:[[-e*.05,t/2,e/2,t/2],[e*.12,-t/2,e*.12,t/2]];for(let[s,a,l,c]of o)i.seg(s,.05,a,l,.05,c,Z),i.seg(s,n,a,l,n,c,Z),i.seg(s,.05,a,s,n,a,W),i.seg(l,.05,c,l,n,c,Z);i.cyl(-e/2+.07,-t/2+.07,.015,.05,n-.08,d.metal,d.metal,7),i.cyl(-e/2+.2,-t/2+.2,.1,n-.1,n-.07,d.metal,d.metal,14,Z)}function nv(i,e,t,n){let r=Math.min(.025,Math.max(.01,t*.35));i.box(-e/2,e/2,0,.025,-r,r,d.metal,d.metal,Z);for(let o of[-e/2,0,e/2])i.box(o-r,o+r,0,n,-r,r,d.metal,d.metal,Z);i.seg(-e/2,n,0,e/2,n,0,Z),i.seg(e*.32,n*.42,r+.003,e*.32,n*.62,r+.003,U)}function p0(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,d.white,d.whiteTop,U),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,d.white,d.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,d.white,d.whiteTop,12,U)}function m0(i,e,t,n,r=!1){let o=r?0:.18;i.loft([-e*.34,e*.34,-t/2,t*.22],[-e/2,e/2,-t/2,t/2],o,n*.82,d.white,d.whiteTop,U),i.cyl(0,t*.08,e*.36,n*.8,n,d.white,d.whiteTop,18,U),r&&(i.cyl(0,-t*.26,.016,n,n+.17,d.metal,d.metal,8),i.box(-.012,.012,n+.13,n+.17,-t*.26,-t*.04,d.metal,d.metal))}function g0(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,d.body,d.bodyTop,U);let r=t/2+.004,o=n>1.5?4:3;for(let s=1;s<o;s++)i.seg(-e/2+.02,n*s/o,r,e/2-.02,n*s/o,r,W);i.seg(0,.08,r,0,n-.04,r,W),i.seg(-e*.08,n*.5,r+.004,e*.08,n*.5,r+.004,Z)}function ku(i,e,t,n,r){r?i.lyingCyl("z",0,0,1.12,1.12+n,t,Math.min(e,n),d.glass,d.glass,28,Z):i.box(-e/2,e/2,1.12,1.12+n,-t/2,t/2,d.glass,d.glass,Z)}function iv(i,e,t,n){for(let o of[1.15,1.15+n*.48,1.15+n])i.box(-e/2,e/2,o-.018,o+.018,-t/2,t/2,d.wood,d.woodTop,U);for(let o of[-e/2,e/2])i.box(o-.018,o+.018,1.15,1.15+n,-t/2,-t/2+.04,d.metal,d.metal,W)}function rv(i,e,t,n){for(let o of[-e*.46,e*.46])i.box(o-.018,o+.018,.85,.85+n,-t*.1,t*.1,d.metal,d.metal,U);for(let o=0;o<5;o++){let s=.85+n*o/4;i.box(-e*.46,e*.46,s-.012,s+.012,-t*.1,t*.1,d.metal,d.metal,Z)}i.pad(-e*.32,e*.32,.85+n*.23,.85+n*.66,0,t/2,d.fabric,d.cushion,.018,W)}function ov(i,e,t,n){i.box(-e/2,-e/2+.06,0,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(e/2-.06,e/2,0,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2,e/2,0,n,-t/2,-t/2+.06,d.wood,d.woodTop,U),i.box(-e/2,e/2,n-.06,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e*.42,e*.42,n*.18,n*.38,-t*.32,t*.3,d.wood,d.woodTop,W),i.box(-e*.18,e*.18,0,n*.2,t*.12,t*.42,d.dark,d.metal,Z)}function _0(i,e,t,n,r){for(let s of[-e*.46,e*.46])i.box(s-.018,s+.018,.55,.55+n,-t*.1,t*.1,d.metal,d.metal,U);for(let s=0;s<8;s++){let a=.55+n*s/7;i.box(-e*.46,e*.46,a-.012,a+.012,-t*.1,t*.1,r?d.accent:d.metal,d.metal,r?Z:W)}}function sv(i,e,t,n){Fl(i,e,t,n,!0);for(let r of[-e*.28,0,e*.28])for(let o of[-t*.25,t*.25])i.cyl(r,o,.025,n-.012,n+.006,d.accent,d.accent,8,Z)}function b0(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2,d.body,d.bodyTop,U);let o=t/2+.006;i.cyl(0,o,e*.31,.12,Math.min(n*.38,.68),d.dark,d.glass,20,Z),i.seg(-e*.42,n*.5,o,e*.42,n*.5,o,W),r&&i.box(-e*.38,e*.38,n*.56,n*.86,-t*.34,t*.38,d.fabric,d.fabricTop,U)}function av(i,e,t,n){i.loft([-e*.42,e*.42,-t*.42,t*.42],[-e/2,e/2,-t/2,t/2],0,n,d.fabric,d.fabricTop,U);for(let r of[-e*.28,0,e*.28])i.seg(r,n*.12,t/2+.002,r,n*.88,t/2+.002,W)}function lv(i,e,t,n){for(let r of[-e*.45,e*.45])i.box(r-.025,r+.025,0,n,-t*.18,t*.18,d.wood,d.wood,U);for(let r=1;r<5;r++){let o=n*r/5;i.box(-e*.45,e*.45,o-.018,o+.018,-t*.18,t*.18,d.wood,d.wood,W)}i.pad(-e*.32,e*.32,n*.52,n*.76,0,t/2,d.fabric,d.cushion,.015,Z)}function cv(i,e,t,n){i.box(-e/2,e/2,1.05,1.05+n,-t/2,t/2,d.body,d.bodyTop,U),i.box(-e*.46,e*.46,1.05+n*.06,1.05+n*.94,t/2,t/2+.012,d.glass,d.glass,Z),i.seg(0,1.05+n*.08,t/2+.014,0,1.05+n*.92,t/2+.014,W)}function uv(i,e,t,n){i.box(-e/2,e/2,1.75,1.75+n,-t/2,t/2,d.white,d.whiteTop,U),i.lyingCyl("z",0,t*.51,1.75+n*.12,1.75+n*.88,t*.08,n*.76,d.dark,d.metal,16,Z)}function hv(i,e,t,n){let r=Math.min(.62,e*.5);i.box(-e/2,-e/2+r,0,n-.05,-t/2,t/2,d.white,d.whiteTop,U),i.lyingCyl("z",-e/2+r/2,t/2+.006,n*.18,n*.72,.03,r*.54,d.dark,d.glass,18,Z),eo(i,e-r,t,n,1),i.box(-e/2,e/2,n-.05,n,-t/2,t/2,d.whiteTop,d.whiteTop,U)}function fv(i,e,t,n){i.cyl(0,-t*.35,.018,.1,n,d.metal,d.metal,8,U),i.box(-e*.38,e*.38,n-.035,n,-t*.35,t*.25,d.metal,d.metal,Z),i.box(-e*.32,e*.32,n-.041,n-.035,-t*.29,t*.19,d.accent,d.accent,Z)}var dv=(i,e,t)=>({x0:-i*.46,x1:i*.46,y0:1.12+t*.04,y1:1.12+t*.96,z:e/2+.004}),x0=(i,e,t)=>({x0:-i*.47,x1:i*.47,y0:1.12+t*.03,y1:1.12+t*.97,z:e/2+.004}),pv=(i,e,t)=>({x0:-i*.44,x1:i*.44,y0:1.05+t*.08,y1:1.05+t*.92,z:e/2+.016}),mv=(i,e,t)=>({x0:-i*.44,x1:i*.44,y0:.55+t*.08,y1:.55+t*.92,z:e/2+.004}),gv=(i,e,t)=>({x0:-i*.36,x1:i*.36,y0:1.75+t*.14,y1:1.75+t*.86,z:e/2+.008}),_v=(i,e,t)=>({x0:-i*.3,x1:i*.3,y0:t-.045,y1:t-.032,z:e*.18}),y0={bathtub:({b:i,w:e,d:t,h:n})=>(Fl(i,e,t,n,!0),.5),bathtub_builtin:({b:i,w:e,d:t,h:n})=>(Fl(i,e,t,n,!1),.5),bathtub_corner:({b:i,w:e,d:t,h:n})=>(tv(i,e,t,n),.5),shower:({b:i,w:e,d:t,h:n})=>(Pl(i,e,t,n,"corner"),.5),shower_corner_90:({b:i,w:e,d:t,h:n})=>(Pl(i,e,t,n,"corner"),.5),shower_niche_120:({b:i,w:e,d:t,h:n})=>(Pl(i,e,t,n,"niche"),.5),shower_walkin_140:({b:i,w:e,d:t,h:n})=>(Pl(i,e,t,n,"walkin"),.5),shower_screen:({b:i,w:e,d:t,h:n})=>(nv(i,e,t,n),.5),wc:({b:i,w:e,d:t,h:n})=>(p0(i,e,t,n),.5),washbasin:({b:i,w:e,d:t,h:n})=>(eo(i,e,t,n,1),.5),vanity_60:({b:i,w:e,d:t,h:n})=>(eo(i,e,t,n,1),.5),vanity_80:({b:i,w:e,d:t,h:n})=>(eo(i,e,t,n,1),.5),vanity_100:({b:i,w:e,d:t,h:n})=>(eo(i,e,t,n,1),.5),double_vanity_120:({b:i,w:e,d:t,h:n})=>(eo(i,e,t,n,2),.5),pedestal_basin:({b:i,w:e,d:t,h:n})=>(ev(i,e,t,n),.5),toilet_close_coupled:({b:i,w:e,d:t,h:n})=>(p0(i,e,t,n),.5),toilet_wall_hung:({b:i,w:e,d:t,h:n})=>(m0(i,e,t,n),!1),bidet:({b:i,w:e,d:t,h:n})=>(m0(i,e,t,n,!0),.5),bathroom_cabinet_tall:({b:i,w:e,d:t,h:n})=>(g0(i,e,t,n),.5),bathroom_cabinet_mid:({b:i,w:e,d:t,h:n})=>(g0(i,e,t,n),.5),mirror_round_light:({b:i,w:e,d:t,h:n})=>(ku(i,e,t,n,!0),!1),mirror_80_light:({b:i,w:e,d:t,h:n})=>(ku(i,e,t,n,!1),!1),bathroom_wall_shelf:({b:i,w:e,d:t,h:n})=>(iv(i,e,t,n),!1),towel_rail:({b:i,w:e,d:t,h:n})=>(rv(i,e,t,n),!1),bathtub_freestanding:({b:i,w:e,d:t,h:n})=>(Fl(i,e,t,n,!0),.5),sauna:({b:i,w:e,d:t,h:n})=>(ov(i,e,t,n),.5),towel_radiator:({b:i,w:e,d:t,h:n})=>(_0(i,e,t,n,!1),!1),whirlpool_indoor:({b:i,w:e,d:t,h:n})=>(sv(i,e,t,n),.5),washing_machine_cabinet:({b:i,w:e,d:t,h:n})=>(b0(i,e,t,n,!1),.5),laundry_basket:({b:i,w:e,d:t,h:n})=>(av(i,e,t,n),.5),ladder_shelf_towels:({b:i,w:e,d:t,h:n})=>(lv(i,e,t,n),.5),mirror_cabinet_light:({b:i,w:e,d:t,h:n})=>(cv(i,e,t,n),!1),electric_towel_heater:({b:i,w:e,d:t,h:n})=>(_0(i,e,t,n,!0),!1),bathroom_fan:({b:i,w:e,d:t,h:n})=>(uv(i,e,t,n),!1),washer_vanity:({b:i,w:e,d:t,h:n})=>(hv(i,e,t,n),.5),rain_shower_led:({b:i,w:e,d:t,h:n})=>(fv(i,e,t,n),!1),mirror_led_clock:({b:i,w:e,d:t,h:n})=>(ku(i,e,t,n,!1),!1),laundry_cabinet_basket:({b:i,w:e,d:t,h:n})=>(b0(i,e,t,n,!0),.5)},v0={mirror_round_light:dv,mirror_80_light:x0,mirror_cabinet_light:pv,electric_towel_heater:mv,bathroom_fan:gv,rain_shower_led:_v,mirror_led_clock:x0};function bv(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,d.dark,d.body,U),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,Z),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,d.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,d.white,d.whiteTop,U),$n(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,Z);for(let a of[-1,1])$n(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,d.white,d.whiteTop,U),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,d.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,Z);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,W)}function xv(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.dark,d.body,U),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,d.dark,d.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,Z),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,W)}function yv(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,d.dark,d.body,U);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(u)*o,s+Math.sin(u)*o,t/2+.003,Z)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,d.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,d.dark,d.body)}function vv(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,d.white,d.whiteTop,U),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,W),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,W),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,d.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,d.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,Z)}function Mv(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,d.white,d.whiteTop,U),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,Z),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,W);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,d.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,d.dark,d.body,U),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,Z),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,d.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,d.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,d.white,d.whiteTop,U);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,Z)}}var M0={grid_point:({b:i,w:e,d:t,h:n})=>(xv(i,e,t,n),.5),home_battery:({b:i,w:e,d:t,h:n,variant:r})=>(Mv(i,e,t,n,r),r==="wall"?!1:.5),inverter:({b:i,w:e,d:t,h:n,variant:r})=>(bv(i,e,t,n,r),!1),meter:({b:i,w:e,d:t,h:n})=>(vv(i,e,t,n),!1),wallbox:({b:i,w:e,d:t,h:n})=>(yv(i,e,t,n),!1)};function hr(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,f=Math.min(.24,t*.28);Gt(i,e,t,.07,.05,.05,d.wood,!0),i.pad(o,s,.07,u-.08,a+.02,l,d.fabric,d.fabricTop,.04,U),i.loft([o,s,a,a+f],[o+.01,s-.01,a,a+f*.5],u-.08,n,d.fabric,d.fabricTop,U),i.pad(o,o+c,u-.08,n*.72,a+.02,l-.02,d.fabric,d.fabricTop,.04,U),i.pad(s-c,s,u-.08,n*.72,a+.02,l-.02,d.fabric,d.fabricTop,.04,U);let p=(s-c-(o+c))/r;for(let g=0;g<r;g++){let b=o+c+p*g+.02,_=b+p-.04;i.pad(b,_,u-.08,u+.05,a+f+.02,l-.06,d.cushion,d.cushion,.04),i.loft([b+.01,_-.01,a+f*.55,a+f+.14],[b+.03,_-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,d.cushion)}}function Vu(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Gt(i,e,t,.08,.06,.03,d.wood,!0),i.box(s,a,.08,l,r+.06,o,d.wood,d.woodTop,U),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,d.white,d.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,d.wood,d.woodTop,U),i.box(s,a,n-.05,n,r,r+.09,d.wood,d.woodTop,W);let c=l+.2,u=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,u,o-.01,d.cushion,d.fabricTop,.025,W),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,d.cushion,d.fabricTop,8);let f=e>1.2?2:1,h=(e-.2)/f;for(let p=0;p<f;p++){let g=s+.1+h*p,b=r+.12,_=Math.min(.42,t*.2),m=.1;i.loft([g+.03+m,g+h-.03-m,b+m*.5,b+_-m*.5],[g+.03,g+h-.03,b,b+_],c,c+.06,d.whiteTop),i.loft([g+.03,g+h-.03,b,b+_],[g+.03+m,g+h-.03-m,b+m*.5,b+_-m*.5],c+.06,c+.12,d.whiteTop,d.whiteTop,W)}}function Wu(i,e,t,n){let r=Math.min(.46,n*.52);Gt(i,e,t,r-.04,.035,.02,d.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,d.wood,d.woodTop,U),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,d.cushion,d.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,d.wood,d.woodTop,U)}function Sv(i,e,t,n){Gt(i,e,t,n-.04,.06,.05,d.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,d.wood,d.woodTop,Z),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,d.body)}function Tv(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,d.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,d.body,d.bodyTop,U);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,W);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Z);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,d.dark,d.dark,Z),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,d.metal)}function S0(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(e/2-.025,e/2,0,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,d.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,d.wood,d.woodTop,W),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,f=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+f,-t/2+.04,t/2-.05,c%3?d.fabric:d.cushion,d.fabricTop),l+=u+.006,c++}}}}function wv(i,e,t,n){ln(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,d.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,d.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,d.dark,d.dark,Z)}function T0(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,d.pot,d.pot,10,U),i.cyl(0,0,r*.08,o,n*.55,d.wood,d.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),u=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-o)*.16,d.plant,d.plantTop,8,a===s-1?W:null)}}function Ev(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,d.fabric,d.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,U)}function Av(i,e,t,n){Gt(i,e,t,.12,.03,.04,d.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,d.wood,d.woodTop,U),cr(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function w0(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,d.wood,d.woodTop,U),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,d.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,W)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Z)}}function Rv(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,d.wood,d.woodTop,U),cr(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,d.body,d.bodyTop,U),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,d.wood,d.woodTop,U);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,d.metal,d.metal)}}function E0(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,d.wood,d.woodTop,U),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,d.wood,d.woodTop,U),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,d.cushion,d.cushion,W),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,d.wood,d.woodTop,U),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,d.wood,d.woodTop,U),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,d.cushion,d.cushion,W))}function Cv(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,d.metal,d.metal,12),i.cyl(0,0,.025,.02,n-.05,d.metal,d.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,d.metal,d.metal,12,W),i.cyl(0,0,r,n-.05,n,d.cushion,d.fabricTop,14,U)}function Iv(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,d.metal),i.box(-.03,.03,.04,.08,-r,r,d.metal),i.cyl(0,0,.06,.02,.1,d.dark,d.dark,8),i.cyl(0,0,.025,.1,.44,d.metal,d.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,d.fabric,d.cushion,U),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,d.fabric,d.fabricTop,U),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,d.metal)}function Pv(i,e,t,n){Gt(i,e,t,.08,.04,.05,d.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,d.fabric,d.cushion,U)}function Fv(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),d.wood,d.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,d.white,d.whiteTop,W),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,d.whiteTop,d.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,d.wood,d.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,U);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,W)}function Lv(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,d.metal,d.metal,12),i.cyl(0,0,.05,.03,n-.04,d.wood,d.wood,8),i.cyl(0,0,r,n-.04,n,d.wood,d.woodTop,20,U)}function Dv(i,e,t,n){Gt(i,e,t,n-.03,.04,.03,d.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,d.body,d.bodyTop,W)}function A0(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.42,0,.035,d.dark,d.dark,14),i.cyl(0,0,Math.min(.075,r*.18),.03,n-.045,d.metal,d.metal,10),i.cyl(0,0,r,n-.045,n,d.wood,d.woodTop,24,U)}function Uv(i,e,t,n){let r=Math.min(.1,Math.min(e,t)*.15);Gt(i,e-r,t-r,n-.035,.025,.03,d.metal),i.box(-e/2,e/2,n-.035,n,-t/2,t/2,d.glass,d.glass,Z),i.box(-e/2+r,e/2-r,n*.28,n*.31,-t/2+r,t/2-r,d.glass,d.glass,W)}function Nv(i,e,t,n){let r=[[-e*.22,-t*.12,e*.58,t*.72,n],[e*.22,t*.12,e*.48,t*.62,n*.82]];for(let[o,s,a,l,c]of r){for(let f of[o-a/2+.025,o+a/2-.025])for(let h of[s-l/2+.025,s+l/2-.025])i.box(f-.025,f+.025,0,c-.03,h-.025,h+.025,d.metal);i.box(o-a/2,o+a/2,c-.03,c,s-l/2,s+l/2,d.wood,d.woodTop,U)}}function Dl(i,e,t,n,r,o){let s=Math.min(.035,Math.min(e/r,n/o)*.12);for(let a=0;a<=r;a++){let l=-e/2+e*a/r;i.box(l-s/2,l+s/2,0,n,-t/2,t/2,d.wood,d.woodTop,a===0||a===r?U:W)}for(let a=0;a<=o;a++){let l=n*a/o;i.box(-e/2,e/2,Math.max(0,l-s/2),Math.min(n,l+s/2),-t/2,t/2,d.wood,d.woodTop,a===0||a===o?U:W)}}function Ov(i,e,t,n){i.box(-e/2,e/2,1.35,1.35+n,-t/2,t/2,d.wood,d.woodTop,U);for(let o of[-e*.34,e*.34])i.box(o-.018,o+.018,1.35,1.35+n,-t/2-.012,-t*.12,d.metal,d.metal,W)}function Bv(i,e,t,n){let r=n*.72;Gt(i,e,t,r-.06,.055,.04,d.wood,!0),i.box(-e/2,e/2,r-.07,r,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e*.43,e*.43,r-n*.22,r-.07,t/2-.045,t/2,d.wood,d.woodTop,W),i.cyl(0,t*.06,Math.min(e,t)*.085,r,r+n*.07,d.accent,d.woodTop,12,Z),i.box(-e*.2,e*.2,r+n*.04,n,-t*.35,-t*.29,d.wood,d.woodTop,U)}function zv(i,e,t,n){let r=n*.7;ln(i,e,t,r,3,r*.58,!0);let o=t/2+.006;for(let s of[-e*.27,0,e*.27])i.seg(s,r*.18,o,s,r*.82,o,W);i.cyl(0,t*.08,Math.min(e,t)*.08,r,r+n*.06,d.accent,d.woodTop,12,Z),i.box(-e*.19,e*.19,r+n*.04,n*.9,-t*.36,-t*.3,d.wood,d.woodTop,U),i.loft([-e*.28,e*.28,-t*.4,-t*.25],[-e*.22,e*.22,-t*.37,-t*.28],n*.9,n,d.wood,d.woodTop,U)}function kv(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,d.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,d.dark,d.dark,Z)}function Vv(i,e,t,n){let r=n*.68,o=Math.min(.09,e*.08);for(let s of[-e/2+o,e/2-o])for(let a of[-t/2+o,t/2-o])i.loft([s-o*.36,s+o*.36,a-o*.36,a+o*.36],[s-o/2,s+o/2,a-o/2,a+o/2],0,r-.03,d.wood,d.woodTop);i.box(-e/2,e/2,r-.08,r,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e*.43,e*.43,n*.18,r-.1,t/2-.065,t/2,d.wood,d.woodTop,U);for(let s of[-e*.28,0,e*.28])i.seg(s,n*.23,t/2+.004,s,r-.16,t/2+.004,W);i.seg(-e*.12,n*.4,t/2+.006,0,n*.52,t/2+.006,Z),i.seg(0,n*.52,t/2+.006,e*.12,n*.4,t/2+.006,Z),i.seg(e*.12,n*.4,t/2+.006,0,n*.28,t/2+.006,Z),i.seg(0,n*.28,t/2+.006,-e*.12,n*.4,t/2+.006,Z),i.cyl(0,t*.06,Math.min(e,t)*.09,r,r+n*.075,d.accent,d.woodTop,14,Z);for(let s of[-e*.035,0,e*.035])i.box(s-.006,s+.006,r+n*.06,r+n*.2,t*.05,t*.065,d.accent);for(let s of[-e*.28,e*.28])i.cyl(s,t*.02,Math.min(e,t)*.035,r,r+n*.035,d.metal,d.metal,10),i.cyl(s,t*.02,Math.min(e,t)*.017,r+n*.035,r+n*.15,d.metal,d.metal,8);i.box(-e*.18,e*.18,r+n*.04,n*.85,-t*.33,-t*.27,d.wood,d.woodTop,Z),i.box(-e*.46,e*.46,n*.875,n*.92,-t*.42,t*.36,d.wood,d.woodTop,U);for(let s of[-e*.4,e*.4])i.box(s-o/2,s+o/2,r,n*.92,-t*.36,-t*.26,d.wood,d.woodTop,U);i.loft([-e/2,e/2,-t/2,t*.42],[-e*.42,e*.42,-t*.42,t*.31],n*.92,n,d.wood,d.woodTop,U)}function Gv(i,e,t,n){let r=n*.18;i.box(-e/2,e/2,r,r+n*.14,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e*.43,e*.43,r+n*.14,n*.86,-t/2,-t/2+Math.min(.05,t*.18),d.wood,d.woodTop,U);for(let o of[-e*.36,e*.36])i.box(o-.025,o+.025,0,r,-t/2,-t*.18,d.wood,d.woodTop,U),i.seg(o,n*.02,-t*.18,o,r,t*.34,U);i.loft([-e/2,e/2,-t/2,t/2],[-e*.42,e*.42,-t*.42,t*.36],n*.86,n,d.wood,d.woodTop,U),i.cyl(0,t*.08,Math.min(e,t)*.09,r+n*.14,r+n*.28,d.accent,d.woodTop,12,Z);for(let o of[-e*.03,0,e*.03])i.box(o-.005,o+.005,r+n*.25,r+n*.5,t*.075,t*.09,d.accent)}function Hv(i,e,t,n){i.box(-e*.43,e*.43,0,n*.06,-t*.34,t*.34,d.dark),ln(i,e,t,n-.025,Math.max(2,Math.round(e/.45)),n*.55,!0);for(let r of[n*.32,n*.63])i.seg(-e/2+.03,r,t/2+.003,e/2-.03,r,t/2+.003,W);for(let r of[-e*.25,e*.25])for(let o=-1;o<=1;o++)i.seg(r-e*.07,n*(.32+o*.018),t/2+.006,r+e*.07,n*(.32+o*.018),t/2+.006,W);i.box(-e/2,e/2,n-.025,n,-t/2,t/2,d.woodTop,d.woodTop,Z)}function Wv(i,e,t,n){let r=Math.min(.045,e*.04);for(let s of[-e/2+r,e/2-r])i.box(s-r,s+r,0,n*.64,-t/2+r,t/2-r,d.wood,d.woodTop,U);for(let s of[n*.18,n*.4])i.box(-e/2+r,e/2-r,s-r/2,s+r/2,-t/2+r,t/2-r,d.wood,d.woodTop,W);let o=Math.max(2,Math.round(e/.35));for(let s=1;s<o;s++)i.seg(-e/2+e*s/o,n*.08,t/2+.003,-e/2+e*s/o,n*.58,t/2+.003,W);i.pad(-e/2,e/2,n*.62,n,-t/2,t/2,d.cushion,d.fabricTop,.025,U)}function Xv(i,e,t,n){let r=Math.min(.05,e*.035);i.box(-e/2,e/2,0,r,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2,e/2,n-r,n,-t/2,t/2,d.wood,d.woodTop,U);let o=Math.max(5,Math.round(e/.22));for(let s=0;s<o;s++){let a=-e/2+e*(s+.5)/o;i.box(a-r/2,a+r/2,r,n-r,-t/2,t/2,s%2?d.wood:d.body,d.woodTop,W)}}function Yv(i,e,t,n){let r=Math.min(.76,n*.52);i.box(-e/2,e/2,r-.06,r,-t/2,t/2,d.wood,d.woodTop,U);for(let o of[-e/2+.05,e/2-.05])i.box(o-.025,o+.025,0,r-.06,-t/2+.04,t/2-.04,d.wood);i.box(-e*.32,e*.32,r+.12,n,-t/2,-t/2+.025,d.glass,d.glass,Z),i.box(-e*.2,e*.2,r-.01,r+.09,-t*.1,t*.18,d.body,d.bodyTop,U)}function qv(i,e,t,n){let r=Math.min(.045,e*.06);i.box(-e/2,e/2,n*.24,n*.32,-t/2,t/2,d.wood,d.woodTop,U),i.pad(-e/2+r,e/2-r,n*.32,n*.42,-t/2+r,t/2-r,d.white,d.whiteTop,.025);for(let o of[-t/2,t/2]){for(let s=0;s<7;s++){let a=-e/2+r+(e-2*r)*s/6;i.box(a-r/2,a+r/2,n*.3,n,o-r/2,o+r/2,d.wood,d.woodTop,W)}i.box(-e/2,e/2,n-r,n,o-r,o+r,d.wood,d.woodTop,U)}for(let o of[-e/2,e/2])i.box(o-r,o+r,0,n,-t/2,t/2,d.wood,d.woodTop,U)}function Gu(i,e,t,n,r="left"){let o=Math.min(.9,t*.53),s=Math.min(.9,e*.38),a=n*.52,l=r==="left"?-e/2:e/2-s,c=r==="left"?-e/2+s:e/2,u=r==="left"?-e/2:e/2-Math.min(.2,s*.25),f=r==="left"?-e/2+Math.min(.2,s*.25):e/2,h=r==="left"?c:l;i.pad(-e/2,e/2,.08,a,-t/2,-t/2+o,d.fabric,d.fabricTop,.04,U),i.pad(l,c,.08,a,-t/2+o,t/2,d.fabric,d.fabricTop,.04,U),i.box(-e/2,e/2,a,n,-t/2,-t/2+Math.min(.2,o*.25),d.fabric,d.fabricTop,U),i.box(u,f,a,n,-t/2+o,t/2,d.fabric,d.fabricTop,U),i.seg(h,a+.01,-t/2+o*.1,h,a+.01,-t/2+o*.9,W)}function $v(i,e,t,n){hr(i,e,t,n,3);let r=n*.73,o=-t/2+Math.min(.22,t*.28)+.006;for(let s=0;s<2;s++)for(let a=0;a<7;a++){let l=-e*.34+e*.68*a/6+(s?e*.035:0);i.seg(l-.012,r+s*n*.12,o,l+.012,r+s*n*.12,o,Z)}}function Zv(i,e,t,n){let r=n*.5;Gt(i,e,t,.08,.045,.035,d.wood,!0),i.pad(-e/2,e/2,.08,r,-t/2+t*.18,t/2,d.fabric,d.fabricTop,.04,U),i.loft([-e/2,e/2,-t/2,-t/2+t*.22],[-e/2+.03,e/2-.03,-t/2,-t/2+t*.1],r,n,d.fabric,d.fabricTop,U);for(let o=1;o<3;o++)i.seg(-e/2+e*o/3,r+.006,-t*.18,-e/2+e*o/3,r+.006,t/2-.04,W)}function Kv(i,e,t,n){let r=n*.5,o=Math.min(e*.36,.88),s=Math.min(t*.52,.82);i.pad(-e/2,e/2,.08,r,-t/2,-t/2+s,d.fabric,d.fabricTop,.04,U),i.pad(-e/2,-e/2+o,.08,r,-t/2+s,t/2,d.fabric,d.fabricTop,.04,U),i.box(-e/2,e/2,r,n,-t/2,-t/2+.18,d.fabric,d.fabricTop,U),i.pad(-e/2,-e/2+.18,r,n*.72,-t/2+.03,t/2,d.fabric,d.fabricTop,.035,U),i.pad(e/2-.18,e/2,r,n*.72,-t/2+.03,-t/2+s,d.fabric,d.fabricTop,.035,U)}function Jv(i,e,t,n){let r=n*.5,o=Math.min(e*.27,.82),s=Math.min(t*.48,.82);i.pad(-e/2,e/2,.08,r,-t/2,-t/2+s,d.fabric,d.fabricTop,.04,U);for(let[a,l]of[[-e/2,-e/2+o],[e/2-o,e/2]])i.pad(a,l,.08,r,-t/2+s,t/2,d.fabric,d.fabricTop,.04,U);i.box(-e/2,e/2,r,n,-t/2,-t/2+.18,d.fabric,d.fabricTop,U);for(let a of[-e/2,e/2-.18])i.box(a,a+.18,r,n*.76,-t/2+.18,t/2,d.fabric,d.fabricTop,U)}function R0(i,e,t,n){let r=n*.48;i.pad(-e/2,e/2,.06,r,-t/2,t/2,d.fabric,d.fabricTop,.06,U),i.pad(-e/2,-e*.28,r,n*.78,-t/2,t/2,d.fabric,d.cushion,.05,U),i.pad(e*.28,e/2,r,n*.78,-t/2,t/2,d.fabric,d.cushion,.05,U),i.loft([-e/2,e/2,-t/2,-t*.2],[-e*.42,e*.42,-t/2,-t*.34],r,n,d.fabric,d.cushion,U)}function Qv(i,e,t,n){R0(i,e,t,n*.72),i.loft([-e*.42,e*.42,-t/2,-t*.3],[-e/2,e/2,-t/2,-t*.34],n*.48,n,d.fabric,d.cushion,U);for(let r of[-e/2,e/2-e*.14])i.pad(r,r+e*.14,n*.68,n,-t/2,-t*.02,d.fabric,d.cushion,.04,U)}function jv(i,e,t,n){Wu(i,e*.86,t*.72,n);let r=.035;for(let o of[-e*.38,e*.38])i.seg(o,r,-t/2,o,.005,t*.3,U),i.seg(o,.005,t*.3,o,r,t/2,U);for(let o of[-t*.25,t*.25])i.seg(-e*.38,.05,o,e*.38,.05,o,W)}function e2(i,e,t,n){Dl(i,e,t,n,5,4);let r=e/5,o=n/4;for(let[s,a]of[[0,0],[2,0],[4,0],[1,1],[3,1],[0,2],[2,2],[4,2]]){let l=-e/2+r*(s+.5);i.box(l-r*.28,l+r*.28,o*a+.04,o*(a+1)-.05,-t*.18,t*.18,d.body,d.bodyTop,W)}}function t2(i,e,t,n){Gt(i,e,t,n-.12,.035,.035,d.wood,!0),i.box(-e/2,e/2,n-.12,n-.035,-t/2,t/2,d.wood,d.woodTop,U),i.box(-e/2,e/2,n-.035,n,-t/2,t/2,d.woodTop,d.woodTop,Z),i.seg(0,n-.115,t/2+.004,0,n-.04,t/2+.004,W);for(let r of[-e*.25,e*.25])i.seg(r-.045,n-.077,t/2+.008,r+.045,n-.077,t/2+.008,Z)}function n2(i,e,t,n){let r=n*.42;Gt(i,e,t,.09,.04,.04,d.wood,!0),i.pad(-e/2,e/2,.09,r,-t/2+t*.28,t/2,d.fabric,d.fabricTop,.05,U),i.loft([-e/2,e/2,-t/2,-t/2+t*.4],[-e*.44,e*.44,-t/2,-t/2+t*.2],r*.85,n,d.fabric,d.cushion,U),i.pad(-e/2,-e/2+e*.13,r,n*.62,-t/2+t*.22,t/2-.04,d.fabric,d.cushion,.035,W)}function i2(i,e,t,n){let r=n*.46;i.cyl(0,0,Math.min(e,t)*.42,.04,r,d.fabric,d.cushion,14,U),i.loft([-e/2,e/2,-t/2,t*.08],[-e*.38,e*.38,-t*.44,-t*.18],r*.7,n,d.fabric,d.cushion,U),i.pad(-e*.34,e*.34,r,r+n*.08,-t*.12,t*.34,d.cushion,d.fabricTop,.03,W)}function r2(i,e,t,n){let r=t*.58,o=n*.43,s=-t/2;i.pad(-e/2,e/2,.08,o,s,s+r,d.fabric,d.cushion,.05,U),i.loft([-e*.46,e*.46,s,s+r*.32],[-e*.4,e*.4,s,s+r*.16],o,n,d.fabric,d.cushion,U);for(let l of[-e/2,e/2-e*.14])i.pad(l,l+e*.14,o,n*.64,s+.03,s+r,d.fabric,d.cushion,.04,U);let a=t*.31;i.box(-e*.34,e*.34,0,o*.55,a-t*.14,a+t*.14,d.dark,d.dark),i.pad(-e*.4,e*.4,o*.5,o*.72,a-t*.16,a+t*.16,d.fabric,d.cushion,.04,U)}function o2(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.92,0,n*.28,d.fabric,d.cushion,16,U),i.loft([-r*.92,r*.92,-r*.92,r*.92],[-r*.58,r*.58,-r*.62,r*.62],n*.28,n*.78,d.fabric,d.cushion,W),i.loft([-r*.58,r*.58,-r*.62,r*.62],[-r*.18,r*.18,-r*.2,r*.2],n*.78,n,d.cushion,d.cushion,U)}function s2(i,e,t,n){Wu(i,e,t,n);let r=Math.min(.46,n*.52);i.pad(-e/2+.035,e/2-.035,r,r+.055,-t/2+.08,t/2-.025,d.fabric,d.cushion,.018,W),i.pad(-e/2+.04,e/2-.04,r+.08,n-.04,-t/2,-t/2+.065,d.fabric,d.cushion,.025,U)}function a2(i,e,t,n){let r=n*.5;i.cyl(0,0,Math.min(e,t)*.34,0,.025,d.metal,d.metal,12),i.cyl(0,0,.035,.025,r,d.metal,d.metal,8),i.loft([-e*.46,e*.46,-t*.38,t*.4],[-e*.4,e*.4,-t*.46,t*.2],r,n*.66,d.body,d.bodyTop,U),i.loft([-e*.4,e*.4,-t*.46,-t*.18],[-e*.3,e*.3,-t*.42,-t*.28],n*.66,n,d.body,d.bodyTop,U)}function Hu(i,e,t,n){let r=Math.min(.1,n*.2);Gt(i,e,t,r,.025,.04,d.metal),i.box(-e/2,e/2,r,n,-t/2,t/2,d.wood,d.woodTop,U);let o=Math.max(2,Math.round(e/.55)),s=t/2+.005;for(let a=1;a<o;a++){let l=-e/2+e*a/o;i.seg(l,r+.03,s,l,n-.03,s,W)}i.seg(-e/2+.03,r+(n-r)*.52,s,e/2-.03,r+(n-r)*.52,s,W);for(let a=0;a<o;a++){let l=-e/2+e*(a+.5)/o;i.seg(l-.045,n*.58,s+.004,l+.045,n*.58,s+.004,Z)}}function l2(i,e,t,n){ln(i,e,t,n,3,n*.58,!0);let r=t/2+.005;for(let o of[n*.34,n*.68])i.seg(-e/2+.03,o,r,e/2-.03,o,r,W)}function c2(i,e,t,n){hr(i,e,t,n,3);let r=-t/2+Math.min(.24,t*.28)+.008;for(let o=1;o<6;o++){let s=-e*.4+e*.8*o/6;i.seg(s,n*.56,r,s,n*.9,r,W)}}function u2(i,e,t,n){let r=Math.min(.025,e*.01),o=(e-r*2)/3,s=t*.58,a=n*.52;for(let l=0;l<3;l++){let c=-e/2+l*(o+r),u=c+o;i.pad(c,u,.07,a,-t/2,-t/2+s,d.fabric,d.fabricTop,.045,U),i.pad(c,u,a,n,-t/2,-t/2+t*.14,d.fabric,d.cushion,.04,U)}for(let l of[0,2]){let c=-e/2+l*(o+r);i.pad(c,c+o,.07,a,-t/2+s+r,t/2,d.fabric,d.fabricTop,.045,U)}}function Ll(i,e,t,n,r){let o=r?.075:.045;Gt(i,e,t,n-o,r?.085:.055,.05,d.wood,!0),i.box(-e/2,e/2,n-o,n,-t/2,t/2,d.wood,d.woodTop,U),r&&(i.box(-e*.38,e*.38,n-o-.1,n-o,-t*.36,t*.36,d.wood,d.woodTop,W),i.seg(-e*.38,n+.003,-t*.05,e*.38,n+.003,t*.04,Z))}function h2(i,e,t,n){Gt(i,e,t,n-.08,.055,.045,d.wood,!0),i.pad(-e/2,e/2,n-.08,n,-t/2,t/2,d.fabric,d.cushion,.025,U)}function f2(i,e,t,n){let r=e*.9,o=Math.min(n*.56,r*.56),s=n-o;i.box(-e*.32,e*.32,0,.035,-t*.34,t*.34,d.metal,d.metal,U),i.box(-.045,.045,.035,s+o*.45,-t*.08,t*.08,d.metal,d.metal),i.box(-r/2,r/2,s,n,-.035,.035,d.dark,d.dark,Z)}var d2=(i,e,t)=>{let n=i*.9,r=Math.min(t*.56,n*.56);return{x0:-n/2+.02,x1:n/2-.02,y0:t-r+.02,y1:t-.02,z:.039}};function p2(i,e,t,n){let r=n*.75;Gt(i,e,t,n*.1,.035,.035,d.dark),i.box(-e/2,e/2,n*.1,r,-t/2,t/2,d.dark,d.metal,U),i.box(-e*.34,e*.34,n*.25,n*.62,t/2,t/2+.012,d.glass,d.glass,Z),i.box(-e*.25,e*.25,n*.28,n*.35,t/2+.014,t/2+.02,d.accent,d.accent,Z),i.cyl(0,0,Math.min(e,t)*.13,r,n,d.dark,d.dark,12,W)}function m2(i,e,t,n){i.box(-e*.42,e*.42,0,n*.14,-t*.4,t*.4,d.dark,d.dark),i.pad(-e/2,e/2,n*.12,n,-t/2,t/2,d.fabric,d.cushion,.06,U),i.seg(0,n+.002,-t*.42,0,n+.002,t*.42,W),i.seg(-e*.42,n+.002,0,e*.42,n+.002,0,W)}function g2(i,e,t,n){let r=Math.min(.12,n*.22);Gt(i,e,t,r,.025,.04,d.metal),i.box(-e/2,e/2,r,n,-t/2,t/2,d.wood,d.woodTop,U);let o=Math.min(e*.38,.72),s=t/2+.004;i.box(-o/2,o/2,r+n*.13,n-n*.1,-t/2+.04,t/2+.008,d.dark,d.dark,W),i.seg(-o/2,r+(n-r)*.52,s,o/2,r+(n-r)*.52,s,W);for(let a of[-o/2,o/2])i.seg(a,r+.03,s,a,n-.03,s,U);for(let a of[-e*.34,e*.34])i.seg(a-.055,n*.53,s,a+.055,n*.53,s,Z)}function _2(i,e,t,n){let r=Math.min(.055,e*.06),o=t/2;i.box(-e/2,e/2,0,r,-t/2,o,d.wood,d.woodTop,U),i.box(-e/2,e/2,n-r,n,-t/2,o,d.wood,d.woodTop,U);for(let a of[-e/2,e/2-r])i.box(a,a+r,r,n-r,-t/2,o,d.wood,d.woodTop,U);i.box(-e/2+r,e/2-r,r,n-r,-t/2,-t/2+.025,d.body,d.bodyTop);let s=Math.max(3,Math.round(n/.45));for(let a=1;a<s;a++){let l=n*a/s;i.box(-e/2+r,e/2-r,l-.018,l+.018,-t/2+.025,o-.025,d.glass,d.glass,W)}i.box(-e/2+r,-.012,r,n-r,o-.025,o,d.glass,d.glass,Z),i.box(.012,e/2-r,r,n-r,o-.025,o,d.glass,d.glass,Z);for(let a of[-.035,.035])i.box(a-.008,a+.008,n*.46,n*.59,o,o+.018,d.metal,d.metal)}function b2(i,e,t,n){let r=n*.5;i.pad(-e/2,e/2,.08,r,-t/2+t*.12,t/2,d.fabric,d.fabricTop,.04,U),i.pad(-e/2+.05,e/2-.05,r,r+.1,-t/2+t*.3,t/2-.04,d.cushion,d.fabricTop,.03,W),i.loft([-e/2,e/2,-t/2,-t/2+t*.22],[-e/2+.03,e/2-.03,-t/2,-t/2+t*.1],r,n,d.fabric,d.fabricTop,U),i.seg(0,r+.105,-t*.05,0,r+.105,t/2-.06,W)}var C0={altar:({b:i,w:e,d:t,h:n})=>(Vv(i,e,t,n),.5),altar_table:({b:i,w:e,d:t,h:n})=>(Bv(i,e,t,n),.5),altar_cabinet:({b:i,w:e,d:t,h:n})=>(zv(i,e,t,n),.5),altar_wall:({b:i,w:e,d:t,h:n})=>(Gv(i,e,t,n),!1),armchair:({b:i,w:e,d:t,h:n})=>(hr(i,e,t,n,1),.5),club_chair:({b:i,w:e,d:t,h:n})=>(R0(i,e,t,n),.5),cocktail_chair:({b:i,w:e,d:t,h:n})=>(i2(i,e,t,n),.5),wingback_chair:({b:i,w:e,d:t,h:n})=>(Qv(i,e,t,n),.5),recliner:({b:i,w:e,d:t,h:n})=>(r2(i,e,t,n),.5),rocking_chair:({b:i,w:e,d:t,h:n})=>(jv(i,e,t,n),.5),chaise_longue:({b:i,w:e,d:t,h:n})=>(n2(i,e,t,n),.5),bean_bag:({b:i,w:e,d:t,h:n})=>(o2(i,e,t,n),.5),chair_upholstered:({b:i,w:e,d:t,h:n})=>(s2(i,e,t,n),.5),chair_shell:({b:i,w:e,d:t,h:n})=>(a2(i,e,t,n),.5),bar_stool:({b:i,w:e,d:t,h:n})=>(Cv(i,e,t,n),.5),bed:({b:i,w:e,d:t,h:n})=>(Vu(i,e,t,n),.5),bed_double:({b:i,w:e,d:t,h:n})=>(Vu(i,e,t,n),.5),bed_single:({b:i,w:e,d:t,h:n})=>(Vu(i,e,t,n),.5),bench:({b:i,w:e,d:t,h:n})=>(E0(i,e,t,n,!1),.5),bunk_bed:({b:i,w:e,d:t,h:n})=>(Fv(i,e,t,n),.5),chair:({b:i,w:e,d:t,h:n})=>(Wu(i,e,t,n),.5),coat_rack:({b:i,w:e,d:t,h:n})=>(Rv(i,e,t,n),.5),coffee_table:({b:i,w:e,d:t,h:n})=>(Dv(i,e,t,n),.5),coffee_table_round:({b:i,w:e,d:t,h:n})=>(A0(i,e,t,n),.5),coffee_table_glass:({b:i,w:e,d:t,h:n})=>(Uv(i,e,t,n),.5),nesting_tables:({b:i,w:e,d:t,h:n})=>(Nv(i,e,t,n),.5),side_table_round:({b:i,w:e,d:t,h:n})=>(A0(i,e,t,n),.5),console_table:({b:i,w:e,d:t,h:n})=>(t2(i,e,t,n),.5),lowboard_120:({b:i,w:e,d:t,h:n})=>(Hu(i,e,t,n),.5),lowboard_160:({b:i,w:e,d:t,h:n})=>(Hu(i,e,t,n),.5),lowboard_200:({b:i,w:e,d:t,h:n})=>(Hu(i,e,t,n),.5),highboard:({b:i,w:e,d:t,h:n})=>(l2(i,e,t,n),.5),chest_drawers_3:({b:i,w:e,d:t,h:n})=>(w0(i,e,t,n),.5),corner_bench:({b:i,w:e,d:t,h:n})=>(E0(i,e,t,n,!0),.5),crib:({b:i,w:e,d:t,h:n})=>(qv(i,e,t,n),.5),desk:({b:i,w:e,d:t,h:n})=>(Tv(i,e,t,n),.5),dresser:({b:i,w:e,d:t,h:n})=>(w0(i,e,t,n),.5),nightstand:({b:i,w:e,d:t,h:n})=>(ln(i,e,t,n,1,n*.72,!0),i.seg(-e/2,n*.5,t/2-.02,e/2,n*.5,t/2-.02,W),.5),office_chair:({b:i,w:e,d:t,h:n})=>(Iv(i,e,t,n),.5),plant:({b:i,w:e,d:t,h:n})=>(T0(i,e,t,n),.35),planter_large:({b:i,w:e,d:t,h:n})=>(T0(i,e,t,n),.5),room_divider:({b:i,w:e,d:t,h:n})=>(Xv(i,e,t,n),.5),rug:({b:i,w:e,d:t})=>(Ev(i,e,t),!1),shelf:({b:i,w:e,d:t,h:n})=>(S0(i,e,t,n),.5),bookshelf_wide:({b:i,w:e,d:t,h:n})=>(S0(i,e,t,n),.5),cube_shelf_2x2:({b:i,w:e,d:t,h:n})=>(Dl(i,e,t,n,2,2),.5),cube_shelf_4x2:({b:i,w:e,d:t,h:n})=>(Dl(i,e,t,n,4,2),.5),cube_shelf_4x4:({b:i,w:e,d:t,h:n})=>(Dl(i,e,t,n,4,4),.5),room_divider_shelf:({b:i,w:e,d:t,h:n})=>(e2(i,e,t,n),.5),floating_shelf:({b:i,w:e,d:t,h:n})=>(Ov(i,e,t,n),!1),shoe_bench:({b:i,w:e,d:t,h:n})=>(Wv(i,e,t,n),.5),shoe_cabinet:({b:i,w:e,d:t,h:n})=>(Hv(i,e,t,n),.5),sideboard:({b:i,w:e,d:t,h:n})=>(Av(i,e,t,n),.5),sofa:({b:i,w:e,d:t,h:n})=>(hr(i,e,t,n,Math.max(1,Math.round((e-.4)/.62))),.5),sofa_2:({b:i,w:e,d:t,h:n})=>(hr(i,e,t,n,2),.5),sofa_3:({b:i,w:e,d:t,h:n})=>(hr(i,e,t,n,3),.5),sofa_4:({b:i,w:e,d:t,h:n})=>(hr(i,e,t,n,4),.5),sofa_bed:({b:i,w:e,d:t,h:n})=>(b2(i,e,t,n),.5),sofa_l:({b:i,w:e,d:t,h:n})=>(Gu(i,e,t,n),.5),sofa_corner_left:({b:i,w:e,d:t,h:n})=>(Gu(i,e,t,n,"left"),.5),sofa_corner_right:({b:i,w:e,d:t,h:n})=>(Gu(i,e,t,n,"right"),.5),sofa_chesterfield:({b:i,w:e,d:t,h:n})=>($v(i,e,t,n),.5),sofa_velvet_3:({b:i,w:e,d:t,h:n})=>(c2(i,e,t,n),.5),sofa_modular_5:({b:i,w:e,d:t,h:n})=>(u2(i,e,t,n),.5),sofa_armless:({b:i,w:e,d:t,h:n})=>(Zv(i,e,t,n),.5),sofa_chaise:({b:i,w:e,d:t,h:n})=>(Kv(i,e,t,n),.5),sofa_u:({b:i,w:e,d:t,h:n})=>(Jv(i,e,t,n),.5),ottoman:({b:i,w:e,d:t,h:n})=>(m2(i,e,t,n),.5),tv_console:({b:i,w:e,d:t,h:n})=>(g2(i,e,t,n),.5),display_cabinet:({b:i,w:e,d:t,h:n})=>(_2(i,e,t,n),.5),stool:({b:i,w:e,d:t,h:n})=>(Pv(i,e,t,n),.5),table:({b:i,w:e,d:t,h:n})=>(Sv(i,e,t,n),.5),table_120:({b:i,w:e,d:t,h:n})=>(Ll(i,e,t,n,!1),.5),table_160:({b:i,w:e,d:t,h:n})=>(Ll(i,e,t,n,!1),.5),table_200:({b:i,w:e,d:t,h:n})=>(Ll(i,e,t,n,!1),.5),table_solid_220:({b:i,w:e,d:t,h:n})=>(Ll(i,e,t,n,!0),.5),bench_dining_160:({b:i,w:e,d:t,h:n})=>(h2(i,e,t,n),.5),table_round:({b:i,w:e,d:t,h:n})=>(Lv(i,e,t,n),.5),tall_cabinet:({b:i,w:e,d:t,h:n})=>(ln(i,e,t,n,1,n*.5),.5),tv_board:({b:i,w:e,d:t,h:n})=>(wv(i,e,t,n),.5),tv_stand:({b:i,w:e,d:t,h:n})=>(f2(i,e,t,n),.5),tv_wall:({b:i,w:e,d:t,h:n})=>(kv(i,e,t,n),!1),wood_stove:({b:i,w:e,d:t,h:n})=>(p2(i,e,t,n),.5),vanity:({b:i,w:e,d:t,h:n})=>(Yv(i,e,t,n),.5),wardrobe:({b:i,w:e,d:t,h:n})=>(ln(i,e,t,n,Math.max(2,Math.round(e/.5)),n*.5),.5)},I0={tv_stand:d2};var P0=.06;function x2(i,e,t,n){let r=Math.max(1,Math.round(e/.6));ln(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,d.whiteTop,d.whiteTop,U)}function y2(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.white,d.whiteTop,U);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,W);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,Z),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,Z)}function v2(i,e,t,n){let r=t/2-P0;i.box(-e/2,e/2,.02,n,-t/2,r,d.body,d.bodyTop,U),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,d.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,W),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,W))}function Xu(i,e,t,n,r){let o=i.p.length;M2(i,e,t,n,r),e.mirror&&lr(i,o)}function M2(i,e,t,n,r){let o=e.rotation*it,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(v,S)=>[e.x+l*v*s-S*a,e.z+l*v*a+S*s],u=t+.05,f=t+e.h-.02,h=new ae(.75,.1,.14),p=new ae(d.dark),g=new ae(d.accent),b=e.w/2-.006,_=(v,S,w)=>{let A=w/m,x=new ae(2043212).lerp(h,A),T=new ae(d.body).lerp(h,A*.8),C=Math.cos(w),I=Math.sin(w),F=(D,N)=>c(v+S*(D*C-N*I),e.d/2+D*I+N*C),P=(D,N,O,k)=>{let[z,G,V,ie]=D;i.tri([z[0],N,z[1]],[G[0],N,G[1]],[V[0],O,V[1]],k),i.tri([z[0],N,z[1]],[V[0],O,V[1]],[ie[0],O,ie[1]],k)},E=(D,N,O,k,z,G,V,ie=V)=>{let K=[F(D,G),F(N,G),F(N,z),F(D,z)];P([K[0],K[1],K[1],K[0]],O,k,ie),P([K[3],K[2],K[2],K[3]],O,k,V),P([K[0],K[3],K[3],K[0]],O,k,V),P([K[1],K[2],K[2],K[1]],O,k,V),P([K[0],K[1],K[2],K[3]],k,k,V),P([K[3],K[2],K[1],K[0]],O,O,V)};return E(0,b,u,f,-P0,0,T,x),E(b-.05,b-.03,t+e.h*.45,t+e.h*.75,.005,.025,g),E},m=1.83;_(-e.w/2,1,n*m)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,p),_(e.w/2,-1,r*m)(.06,b-.06,t+e.h*.52,t+e.h*.86,.001,.005,p)}function S2(i,e,t,n){ln(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,d.dark,d.dark,U);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,d.dark,1451583,12,Z)}}function T2(i,e,t,n){ln(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,d.whiteTop,d.whiteTop,U),i.box(r/2,e/2,n-.04,n,-t/2,t/2,d.whiteTop,d.whiteTop,U),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,d.whiteTop,d.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,d.whiteTop,d.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,d.metal,d.metal,Z),i.cyl(0,-t/2+.05,.02,n,n+.28,d.metal,d.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,d.metal)}function w2(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,d.body,d.bodyTop,U),cr(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function E2(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,d.body,d.bodyTop,U),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,d.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,d.dark,d.dark,Z),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,Z);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,W);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,Z),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,Z)}function A2(i,e,t,n){let r=Math.min(.055,e*.075),o=t/2,s=-t/2,a=Math.min(.62,n*.3);i.box(-e/2,e/2,.02,n,s,s+.035,d.body,d.bodyTop,U),i.box(-e/2,-e/2+r,.02,n,s,o,d.body,d.bodyTop,U),i.box(e/2-r,e/2,.02,n,s,o,d.body,d.bodyTop,U),i.box(-e/2,e/2,n-r,n,s,o,d.body,d.bodyTop,U),i.box(-e/2,e/2,.02,a,s,o-.015,d.body,d.bodyTop,U),i.box(-e/2+.02,e/2-.02,0,.08,s+.02,o-.04,d.dark),i.box(-e/2+r,e/2-r,a,n-r,s+.036,s+.05,d.dark,d.dark);for(let l of[a+(n-a)*.25,a+(n-a)*.5,a+(n-a)*.75])i.box(-e/2+r,e/2-r,l-.012,l+.012,s+.05,o-.025,d.glass,d.glass,Z);i.box(-e/2+r,-r*.35,a+r,n-r*1.5,o-.012,o,d.glass,d.glass,W),i.box(r*.35,e/2-r,a+r,n-r*1.5,o-.012,o,d.glass,d.glass,W),i.box(-r*.35,r*.35,a,n-r,o-.02,o+.005,d.metal,d.metal,U),i.box(-e/2,e/2,a-r*.5,a+r*.5,o-.02,o+.005,d.body,d.bodyTop,U),i.seg(-r*1.4,a+(n-a)*.46,o+.012,-r*1.4,a+(n-a)*.62,o+.012,Z),i.seg(r*1.4,a+(n-a)*.46,o+.012,r*1.4,a+(n-a)*.62,o+.012,Z),i.seg(0,.12,o+.012,0,a-.12,o+.012,W)}function R2(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,d.body,d.bodyTop,U),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,d.dark),cr(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,d.whiteTop,d.whiteTop,U)}function C2(i,e,t,n){i.box(-e*.16,e*.16,n*.42,n,-t/2,-t*.18,d.metal,d.metal,U),i.loft([-e/2,e/2,-t/2,t/2],[-e*.18,e*.18,-t/2,-t*.1],0,n*.48,d.metal,d.whiteTop,U),i.box(-e*.4,e*.4,0,n*.06,t*.18,t/2,d.dark,d.dark,Z)}function I2(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.body,d.bodyTop,U),i.box(-e*.4,e*.18,n*.17,n*.82,t/2,t/2+.006,d.dark,d.glass,Z),i.cyl(e*.34,t/2+.008,Math.min(e,n)*.055,n*.58,n*.69,d.accent,d.accent,10,Z),i.seg(e*.28,n*.34,t/2+.009,e*.4,n*.34,t/2+.009,W)}function P2(i,e,t,n){let r=n*.8,o=t/2;i.box(-e*.46,e*.46,.025,r,-t/2,o,d.white,d.whiteTop,U),i.box(-e*.48,e*.48,0,.035,-t*.44,t*.44,d.dark,d.dark),i.box(-e*.42,e*.42,.055,r-.035,o,o+.012,d.white,d.whiteTop,U),i.seg(-e*.4,r*.28,o+.014,e*.4,r*.28,o+.014,W),i.seg(-e*.28,r*.58,o+.015,e*.28,r*.58,o+.015,Z),i.seg(-e*.2,r*.62,o+.015,e*.2,r*.62,o+.015,W),i.box(-e/2,e/2,r-.025,r,-t/2,t/2,d.white,d.whiteTop,U);let s=Math.min(.012,e*.03),a=e*.1,l=-t*.16,c=t*.08,u=6718637;i.cyl(a,l,s*1.55,r,r+s*1.8,u,u,12,U),i.cyl(a,c,e*.16,r,r+.01,d.whiteTop,d.whiteTop,18,W),i.seg(a-e*.1,r+.012,c,a+e*.1,r+.012,c,W),i.seg(a,r+.012,c-t*.11,a,r+.012,c+t*.11,W);let f=n*.925,h=n*.055,p=(l+c)/2,g=(c-l)/2,b=[[r+s,l],[f,l]];for(let _=1;_<=8;_++){let m=Math.PI-Math.PI*_/8;b.push([f+Math.sin(m)*h,p+Math.cos(m)*g])}b.push([n*.89,c]),i.tubeYZ(a,b,s,u,10),i.cyl(a,c,s*1.25,n*.89-s,n*.905,d.dark,u,10,W),i.lyingCyl("x",a+e*.055,l,r+s*1.6,r+s*2.5,e*.15,s*.9,d.dark,u,8)}function F2(i,e,t,n){let r=Math.max(.42,Math.min(e,t)*.46);i.box(-e/2,e/2,0,n-.04,-t/2,-t/2+r,d.body,d.bodyTop,U),i.box(-e/2,-e/2+r,0,n-.04,-t/2+r,t/2,d.body,d.bodyTop,U),i.box(-e/2,e/2,n-.04,n,-t/2,-t/2+r,d.whiteTop,d.whiteTop,Z),i.box(-e/2,-e/2+r,n-.04,n,-t/2+r,t/2,d.whiteTop,d.whiteTop,Z),i.seg(-e/2+r,.08,-t/2+r,-e/2+r,n-.08,-t/2+r,W);let o=-t/2+r+.006,s=-e/2+r+.006;for(let a=1;a<3;a++){let l=-e/2+r+(e-r)*a/3;i.seg(l,.08,o,l,n-.08,o,W);let c=-t/2+r+(t-r)*a/3;i.seg(s,.08,c,s,n-.08,c,W)}i.seg(-e/2+r+.08,n*.72,o+.004,-e/2+r+.22,n*.72,o+.004,Z),i.seg(s+.004,n*.72,-t/2+r+.08,s+.004,n*.72,-t/2+r+.22,Z)}var F0={fridge:({b:i,w:e,d:t,h:n})=>(y2(i,e,t,n),.5),fridge_smart:({b:i,w:e,d:t,h:n})=>(v2(i,e,t,n),.5),island:({b:i,w:e,d:t,h:n})=>(R2(i,e,t,n),.5),kitchen:({b:i,w:e,d:t,h:n})=>(x2(i,e,t,n),.5),kitchen_corner:({b:i,w:e,d:t,h:n})=>(F2(i,e,t,n),.5),kitchen_display:({b:i,w:e,d:t,h:n})=>(A2(i,e,t,n),.5),kitchen_tall:({b:i,w:e,d:t,h:n})=>(E2(i,e,t,n),.5),kitchen_wall:({b:i,w:e,d:t,h:n})=>(w2(i,e,t,n),!1),microwave:({b:i,w:e,d:t,h:n,base:r})=>(I2(i,e,t,n),r>.05?!1:.5),range_hood:({b:i,w:e,d:t,h:n})=>(C2(i,e,t,n),!1),sink:({b:i,w:e,d:t,h:n})=>(T2(i,e,t,n),.5),stove:({b:i,w:e,d:t,h:n})=>(S2(i,e,t,n),.5),water_purifier:({b:i,w:e,d:t,h:n})=>(P2(i,e,t,n),.5)};function L2(i,e,t,n){let r=e*.56,o=n*.45,s=n*.38;i.box(-e/2,e/2,0,n,-t/2,-t/2+.06,d.wood,d.woodTop,U),i.box(-r/2,r/2,s,s+o,t/2-.045,t/2,d.dark,d.dark,Z),i.box(-e/2,e/2,.04,n*.2,-t/2,t/2,d.wood,d.woodTop,U);for(let a of[-1,1]){let l=a<0?-e/2:e*.37,c=a<0?-e*.37:e/2;i.box(l,c,n*.23,n*.92,-t/2+.04,t*.22,d.wood,d.woodTop,U);for(let u of[n*.45,n*.68])i.seg(l+.025,u,t*.225,c-.025,u,t*.225,W)}}var D2=(i,e,t)=>({x0:-i*.28+.02,x1:i*.28-.02,y0:t*.38+.02,y1:t*.83-.02,z:e/2+.004});function U2(i,e,t,n){let r=t*.48;i.box(-e/2,e/2,0,n,-t/2,-t/2+r,d.wood,d.woodTop,U);let o=n*.58;i.box(-e*.43,e*.43,o,o+.055,-t/2+r,t*.05,d.white,d.whiteTop,U);for(let s=1;s<14;s++){let a=-e*.43+e*.86*s/14;i.seg(a,o+.057,-t/2+r,a,o+.057,t*.05,W)}i.box(-e*.32,e*.32,0,n*.36,t*.16,t/2,d.wood,d.woodTop,U),i.box(-e*.38,e*.38,n*.36,n*.43,t*.12,t/2,d.fabric,d.cushion,U)}function N2(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.44,0,n*.35,d.pot,d.pot,12,U);for(let o=0;o<7;o++){let s=o/7*Math.PI*2,a=Math.cos(s)*r*.2,l=Math.sin(s)*r*.2;i.seg(0,n*.3,0,a,n*.87,l,W),i.cyl(a,l,r*.08,n*.72,n,d.wood,d.woodTop,7,o<3?Z:null)}}function O2(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.38,0,n*.25,d.pot,d.pot,12,U),i.cyl(0,0,r*.07,n*.2,n*.8,d.wood,d.wood,7);for(let o=0;o<8;o++){let s=o/8*Math.PI*2,a=Math.cos(s)*r*.38,l=Math.sin(s)*r*.38,c=n*(.42+o%3*.14);i.rotated(a,l,s*180/Math.PI).loft([-r*.28,r*.28,-.03,.03],[-r*.08,r*.08,-.02,.02],c,c+n*.12,d.plant,d.plantTop,W)}}function B2(i,e,t,n){i.cyl(0,0,Math.min(e,t)/2,0,n,d.fabric,d.fabricTop,28,W)}function z2(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.dark,d.metal,U),i.box(-e*.42,e*.42,n*.14,n*.82,t/2,t/2+.012,d.glass,d.glass,Z);for(let r=0;r<6;r++){let o=-e*.34+e*.68*r/5;i.loft([o-.045,o+.045,t/2+.014,t/2+.024],[o-.012,o+.012,t/2+.014,t/2+.024],n*.18,n*(.43+r%2*.1),d.accent,d.accent,Z)}}var L0={media_wall_tv:({b:i,w:e,d:t,h:n})=>(L2(i,e,t,n),.5),piano_upright:({b:i,w:e,d:t,h:n})=>(U2(i,e,t,n),.5),vase_pampas:({b:i,w:e,d:t,h:n})=>(N2(i,e,t,n),.35),plant_monstera:({b:i,w:e,d:t,h:n})=>(O2(i,e,t,n),.4),rug_round:({b:i,w:e,d:t,h:n})=>(B2(i,e,t,n),!1),fireplace_wall_electric:({b:i,w:e,d:t,h:n})=>(z2(i,e,t,n),.25)},D0={media_wall_tv:D2};function k2(i,e,t,n){i.box(-e/2,e/2,Math.max(0,n-.04),n,-t/2,t/2,d.whiteTop,d.whiteTop,U)}function V2(i,e,t){let r=[[-e/2,-t/2],[e/2,-t/2],[e/2,t/2],[-e/2,t/2]];for(let o=0;o<4;o++)i.seg(r[o][0],.012,r[o][1],r[(o+1)%4][0],.012,r[(o+1)%4][1],W);i.seg(-e*.15,.012,t/2-.45,0,.012,t/2-.2,U),i.seg(0,.012,t/2-.2,e*.15,.012,t/2-.45,U)}function G2(i,e,t,n){i.box(-e*.38,e*.38,0,n*.05,-t/2-t*.02,-t*.1,d.dark,d.body,W),i.box(-e*.32,e*.32,n*.04,n*.92,-t/2,-t*.18,d.body,d.bodyTop,U),i.box(-e*.34,e*.34,n*.9,n,-t/2-t*.01,-t*.17,d.metal,d.bodyTop,U),i.box(-e*.23,e*.23,n*.75,n*.82,-t*.175,-t*.15,d.accent,d.accent,Z),i.box(-e*.22,e*.22,n*.02,n*.055,-t*.18,t*.17,d.dark,d.bodyTop,W)}function H2(i,e,t,n){let r=Math.min(.055,e*.07);i.box(-e*.48,e*.48,0,n*.045,-t*.48,t*.4,d.dark,d.bodyTop,W);for(let o of[-e*.43,e*.43])i.box(o-r/2,o+r/2,n*.04,n*.7,-t*.44,t*.28,d.body,d.bodyTop,U);i.box(-e*.45,e*.45,n*.06,n*.52,-t*.48,-t*.42,d.body,d.bodyTop,W),i.box(-e/2,e/2,n*.69,n*.84,-t/2,t*.42,d.body,d.metal,U),i.loft([-e*.33,e*.33,-t*.17,t*.34],[-e*.27,e*.27,-t*.12,t*.27],n*.05,n*.31,d.white,d.whiteTop,U),i.box(-e*.23,e*.23,n*.16,n*.22,t*.325,t*.345,d.accent,d.accent,Z);for(let o of[-e*.29,e*.29])i.lyingCyl("x",o,t*.08,n*.015,n*.145,r*2,n*.13,d.dark,d.metal,10,W)}var U0={parking:({b:i,w:e,d:t})=>(V2(i,e,t),!1),robot_mower:({b:i,w:e,d:t,h:n})=>(H2(i,e,t,n),!1),robot_vacuum:({b:i,w:e,d:t,h:n})=>(G2(i,e,t,n),!1),stairwell:()=>!1,worktop:({b:i,w:e,d:t,h:n})=>(k2(i,e,t,n),!1)};function W2(i,e,t,n){i.pad(-e/2,e/2,0,n,-t/2,t/2,d.white,d.whiteTop,Math.min(.04,e*.1),U);let r=t/2+.006;i.cyl(0,t/2,e*.095,n*.69,n*.705,d.dark,d.dark,18,Z);for(let o=0;o<7;o++){let s=n*(.16+o*.055);i.seg(-e*.34,s,r,e*.34,s,r,W)}for(let o=-3;o<=3;o++)i.seg(o*e*.085,n+.003,-t*.27,o*e*.085,n+.003,t*.22,W)}function X2(i,e,t,n){let r=Math.min(e,t)*.46;i.cyl(0,0,r,n*.06,n*.9,d.dark,d.fabricTop,18,U),i.cyl(0,0,r*.94,n*.9,n,d.dark,d.dark,18,Z),i.cyl(0,0,r*.72,n,n+.006,d.dark,d.dark,18,W);for(let o of[-e*.12,e*.12])i.cyl(o,0,e*.014,n+.007,n+.01,d.white,d.white,8)}function Y2(i,e,t,n){i.box(-e*.28,e*.28,1.85,1.85+n*.7,-t/2,-t/2+t*.12,d.white,d.whiteTop,U),i.box(-e*.08,e*.08,1.85+n*.3,1.85+n*.45,-t/2+t*.1,0,d.metal,d.metal,W),i.lyingCyl("z",0,t*.16,1.85+n*.17,1.85+n*.78,t*.58,n*.58,d.white,d.whiteTop,14,U),i.lyingCyl("z",0,t*.47,1.85+n*.28,1.85+n*.67,t*.08,n*.38,d.dark,d.dark,16,Z),i.lyingCyl("z",0,t*.515,1.85+n*.38,1.85+n*.57,t*.025,n*.18,d.accent,d.dark,14)}function q2(i,e,t,n){let o=t/2;i.pad(-e/2,e/2,.95,.95+n,-t/2,o,d.dark,d.metal,Math.min(.018,e*.12),U);for(let s=0;s<3;s++)for(let a=0;a<3;a++){let l=(a-1)*e*.22,c=.95+n*(.7-s*.105);i.seg(l-e*.025,c,o+.005,l+e*.025,c,o+.005,Z)}i.cyl(0,o,e*.12,.95+n*.22,.95+n*.235,d.accent,d.dark,14,Z),i.lyingCyl("x",e*.22,o+t*.12,.95+n*.31,.95+n*.4,e*.75,n*.085,d.metal,d.metal,10,U)}function $2(i,e,t,n){let r=n*.96;i.lyingCyl("x",0,-t*.18,r,n,e,t*.16,d.metal,d.metal,10,U),i.box(-e*.06,e*.06,r-n*.055,r+n*.015,-t*.28,t*.02,d.dark,d.dark,Z);let o=e*.12,s=6;for(let a of[-1,1]){let l=a<0?-e/2:o,u=((a<0?-o:e/2)-l)/s;for(let f=0;f<s;f++){let h=l+f*u,p=f%2?t*.12:-t*.04;i.box(h,h+u*.82,n*.04,r,p-t*.18,p+t*.18,d.fabric,d.fabricTop,f===0||f===s-1?U:null)}}}function Z2(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.dark,d.bodyTop,U),i.box(-e*.42,e*.42,n*.06,n*.94,t*.48,t*.515,d.glass,d.glass,W);for(let r=0;r<7;r++){let o=n*(.16+r*.105);i.box(-e*.34,e*.34,o,o+n*.035,t*.505,t*.535,r%3===1?d.metal:d.bodyTop,d.bodyTop,W)}i.box(-e*.22,e*.22,n*.82,n*.86,t*.525,t*.545,d.accent,d.accent,Z),i.cyl(e*.38,t*.525,e*.018,n*.48,n*.5,d.metal,d.metal,8,W)}function K2(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.dark,d.bodyTop,U);let r=e*.035,o=(e*.72-r*3)/4;for(let s=0;s<4;s++){let a=-e*.36+s*(o+r);i.box(a,a+o,n*.13,n*.86,t*.49,t*.525,d.body,d.metal,W),i.box(a+o*.18,a+o*.82,n*.18,n*.205,t*.52,t*.54,d.accent,d.accent,Z)}i.cyl(e*.41,t*.52,e*.025,n*.7,n*.73,d.accent,d.accent,10,Z)}function J2(i,e,t,n){let r=Math.min(e,t)*.47;i.cyl(0,0,r,0,n*.58,d.white,d.whiteTop,16,U),i.cyl(0,0,r*.82,n*.58,n,d.white,d.whiteTop,16,W),i.seg(-e*.16,n*.18,t*.455,e*.16,n*.18,t*.455,Z)}function Q2(i,e,t,n){i.pad(-e/2,e/2,1.35,1.35+n,-t/2,t/2,d.body,d.bodyTop,Math.min(.018,e*.1),U),i.box(-e*.37,e*.37,1.35+n*.34,1.35+n*.82,t*.48,t*.54,d.glass,d.glass,Z),i.box(-e*.28,e*.28,1.35+n*.12,1.35+n*.22,t*.5,t*.55,d.metal,d.metal,W)}function j2(i,e,t,n){let r=Math.min(e,t)*.47;i.cyl(0,0,r,0,n*.7,d.white,d.whiteTop,16,U),i.cyl(0,0,r*.78,n*.7,n,d.white,d.whiteTop,16,W);for(let o=0;o<8;o++){let s=o/8*Math.PI*2,a=Math.cos(s)*r*.62,l=Math.sin(s)*r*.62;i.cyl(a,l,r*.055,n*.12,n*.16,d.dark,d.dark,6)}i.seg(-e*.1,n*.12,t*.46,e*.1,n*.12,t*.46,Z)}function eM(i,e,t,n){i.box(-e/2,e/2,1.85,1.85+n,-t/2,t/2,d.body,d.bodyTop,U),i.loft([-e*.32,e*.32,t*.42,t*.56],[-e*.25,e*.25,t*.45,t*.58],1.85+n*.48,1.85+n*.82,8003636,16725592,Z),i.box(-e*.23,e*.23,1.85+n*.13,1.85+n*.25,t*.48,t*.56,d.accent,d.accent,W)}function tM(i,e,t,n){i.box(-e/2,e/2,.85,.85+n,-t/2,t/2,d.body,d.bodyTop,U),i.box(-e*.43,e*.43,.85+n*.07,.85+n*.93,t*.47,t*.54,d.glass,d.glass,W);for(let o=0;o<3;o++)for(let s=0;s<5;s++){let a=(s-2)*e*.145,l=.85+n*(.22+o*.25);i.box(a-e*.045,a+e*.045,l,l+n*.075,t*.51,t*.56,o===0?d.accent:d.metal,d.metal,W)}}function nM(i,e,t,n){i.pad(-e/2,e/2,0,n,-t/2,t/2,d.dark,d.bodyTop,Math.min(.025,e*.06),U),i.box(-e*.32,e*.32,n*.58,n*.78,t*.49,t*.54,d.glass,d.glass,Z),i.cyl(0,t*.51,e*.045,n*.4,n*.43,d.accent,d.accent,10,W);for(let r=0;r<4;r++)i.seg(-e*.28,n*(.12+r*.06),t*.51,e*.28,n*(.12+r*.06),t*.51,W)}function iM(i,e,t,n){i.pad(-e/2,e/2,0,n*.62,-t/2,t/2,d.body,d.bodyTop,Math.min(.018,n*.12),U);for(let r of[-e*.38,e*.38])i.cyl(r,-t*.35,e*.025,n*.2,n,d.dark,d.metal,8,W);for(let r=-2;r<=2;r++)i.cyl(r*e*.095,t*.48,e*.012,n*.2,n*.23,r===0?d.accent:d.metal,r===0?d.accent:d.metal,6,Z)}function rM(i,e,t,n){i.box(-e/2,e/2,n*.04,n,-t/2,t/2,d.white,d.whiteTop,U),i.box(-e*.42,e*.2,n*.17,n*.82,t*.5,t*.54,d.dark,d.dark,W);for(let r=0;r<6;r++){let o=n*(.23+r*.09);i.box(-e*.4,e*.18,o,o+n*.025,t*.535,t*.555,d.bodyTop,d.bodyTop,W)}i.box(e*.29,e*.43,n*.2,n*.8,t*.5,t*.54,d.body,d.bodyTop,W),i.box(e*.32,e*.41,n*.62,n*.69,t*.53,t*.56,d.accent,d.accent,Z)}function oM(i,e,t,n){let r=Math.min(e,t)*.45;i.cyl(0,0,r,n*.035,n*.94,d.white,d.whiteTop,18,U),i.cyl(0,0,r*.88,n*.94,n,d.white,d.whiteTop,18,W),i.box(-e*.12,e*.12,n*.57,n*.66,t*.44,t*.49,d.glass,d.glass,Z);for(let o of[-e*.18,e*.18])i.cyl(o,0,e*.035,0,n*.05,d.metal,d.metal,8,W)}function sM(i,e,t,n){i.box(-e/2,e/2,1.8,1.8+n,-t/2,-t*.18,d.white,d.whiteTop,U);let o=Math.min(e,n)*.38;i.lyingCyl("z",0,t*.12,1.8+n*.12,1.8+n*.12+o*2,t*.52,o*2,d.dark,d.bodyTop,16,U);for(let s=0;s<6;s++){let a=1.8+n*(.24+s*.09);i.seg(-e*.34,a,t*.42,e*.34,a,t*.42,W)}}function aM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,d.body,d.bodyTop,U),i.box(-e*.34,e*.34,n*.12,n*.56,t*.49,t*.54,d.dark,d.dark,W),i.box(-e*.35,e*.35,n*.61,n*.69,t*.49,t*.55,d.accent,d.accent,Z),i.box(e*.12,e*.31,n*.78,n*.84,t*.5,t*.55,d.accent,d.accent,W);for(let r=-2;r<=2;r++)i.seg(r*e*.11,n+.003,-t*.22,r*e*.11,n+.003,t*.18,W)}function lM(i,e,t,n){i.box(-e*.48,e*.48,n*.18,n,-t*.2,t*.2,d.dark,d.bodyTop,U),i.box(-e*.39,e*.39,n*.35,n*.89,t*.19,t*.24,d.glass,d.glass,Z),i.box(-e*.28,e*.28,n*.03,n*.17,-t*.03,t*.25,d.body,d.bodyTop,U)}function cM(i,e,t,n){i.pad(-e/2,e/2,1.05,1.05+n,-t/2,t/2,d.white,d.whiteTop,Math.min(.012,e*.12),U),i.box(-e*.32,e*.32,1.05+n*.14,1.05+n*.82,t*.42,t*.55,d.body,d.bodyTop,W),i.seg(-e*.16,1.05+n*.2,t*.56,e*.16,1.05+n*.2,t*.56,Z)}function uM(i,e,t,n){i.pad(-e/2,e/2,.3,.3+n,-t/2,t/2,d.white,d.whiteTop,Math.min(.012,e*.12),U);for(let o of[-e*.17,e*.17])i.cyl(o,t*.51,e*.065,.3+n*.38,.3+n*.43,d.dark,d.dark,8,W);i.seg(-e*.12,.3+n*.18,t*.55,e*.12,.3+n*.18,t*.55,Z)}function hM(i,e,t,n){i.pad(-e/2,e/2,.3,.3+n,-t/2,t/2,d.body,d.bodyTop,Math.min(.014,e*.12),U),i.cyl(0,t*.49,e*.27,.3+n*.28,.3+n*.34,d.dark,d.dark,14,W),i.box(-e*.25,e*.25,.3+n*.1,.3+n*.17,t*.48,t*.56,d.accent,d.accent,Z)}function fM(i,e,t,n){i.pad(-e/2,e/2,1.9,1.9+n,-t/2,t/2,d.white,d.whiteTop,Math.min(.014,e*.13),U),i.loft([-e*.38,e*.38,t*.4,t*.55],[-e*.27,e*.27,t*.43,t*.58],1.9+n*.3,1.9+n*.78,d.glass,d.glass,Z);for(let o=0;o<3;o++)i.seg(-e*.23,1.9+n*(.39+o*.1),t*.59,e*.23,1.9+n*(.39+o*.1),t*.59,W)}function dM(i,e,t,n){i.pad(-e/2,e*.12,1.1,1.1+n,-t/2,t/2,d.white,d.whiteTop,Math.min(.008,n*.14),U),i.pad(e*.24,e/2,1.1+n*.12,1.1+n*.88,-t*.42,t*.42,d.metal,d.metal,Math.min(.006,n*.1),W),i.seg(-e*.28,1.1+n*.16,t*.54,-e*.03,1.1+n*.16,t*.54,Z)}function pM(i,e,t,n){let r=Math.min(e,t)*.47;i.cyl(0,0,r,0,n,d.white,d.whiteTop,12,U),i.cyl(0,t*.12,r*.2,n,n*1.08,d.accent,d.accent,8,Z);for(let o of[-e*.24,e*.24])i.box(o-e*.055,o+e*.055,0,n*.12,-t*.18,t*.18,d.metal,d.metal,W)}function mM(i,e,t,n){i.pad(-e/2,e/2,1.35,1.35+n,-t/2,t/2,d.white,d.whiteTop,Math.min(.012,e*.12),U),i.box(-e*.35,e*.35,1.35+n*.3,1.35+n*.78,t*.46,t*.55,d.glass,d.glass,Z),i.seg(-e*.22,1.35+n*.18,t*.56,e*.22,1.35+n*.18,t*.56,W)}function gM(i,e,t,n){i.pad(-e/2,e/2,1.25,1.25+n,-t/2,t/2,d.dark,d.bodyTop,Math.min(.012,e*.18),U),i.cyl(0,t*.48,e*.25,1.25+n*.67,1.25+n*.7,d.glass,d.glass,12,Z),i.cyl(0,t*.49,e*.2,1.25+n*.18,1.25+n*.21,d.body,d.bodyTop,12,W),i.seg(-e*.18,1.25+n*.1,t*.56,e*.18,1.25+n*.1,t*.56,Z)}var N0={air_purifier:({b:i,w:e,d:t,h:n})=>(W2(i,e,t,n),.5),smart_speaker:({b:i,w:e,d:t,h:n})=>(X2(i,e,t,n),.5),security_camera:({b:i,w:e,d:t,h:n})=>(Y2(i,e,t,n),!1),smart_lock:({b:i,w:e,d:t,h:n})=>(q2(i,e,t,n),!1),smart_curtain:({b:i,w:e,d:t,h:n})=>($2(i,e,t,n),!1),network_cabinet:({b:i,w:e,d:t,h:n})=>(Z2(i,e,t,n),.5),nas_server:({b:i,w:e,d:t,h:n})=>(K2(i,e,t,n),.5),access_point:({b:i,w:e,d:t,h:n})=>(J2(i,e,t,n),!1),wall_thermostat:({b:i,w:e,d:t,h:n})=>(Q2(i,e,t,n),!1),smoke_detector:({b:i,w:e,d:t,h:n})=>(j2(i,e,t,n),!1),siren_alarm:({b:i,w:e,d:t,h:n})=>(eM(i,e,t,n),!1),electrical_panel:({b:i,w:e,d:t,h:n})=>(tM(i,e,t,n),!1),ups_unit:({b:i,w:e,d:t,h:n})=>(nM(i,e,t,n),.5),heat_pump_outdoor:({b:i,w:e,d:t,h:n})=>(rM(i,e,t,n),.5),hot_water_tank:({b:i,w:e,d:t,h:n})=>(oM(i,e,t,n),.5),ventilation_fan:({b:i,w:e,d:t,h:n})=>(sM(i,e,t,n),!1),humidifier:({b:i,w:e,d:t,h:n})=>(aM(i,e,t,n),.5),wall_switch:({b:i,w:e,d:t,h:n})=>(cM(i,e,t,n),!1),wall_outlet:({b:i,w:e,d:t,h:n})=>(uM(i,e,t,n),!1),smart_plug:({b:i,w:e,d:t,h:n})=>(hM(i,e,t,n),!1),motion_sensor:({b:i,w:e,d:t,h:n})=>(fM(i,e,t,n),!1),contact_sensor:({b:i,w:e,d:t,h:n})=>(dM(i,e,t,n),!1),water_leak_sensor:({b:i,w:e,d:t,h:n})=>(pM(i,e,t,n),.5),temperature_humidity_sensor:({b:i,w:e,d:t,h:n})=>(mM(i,e,t,n),!1),video_doorbell:({b:i,w:e,d:t,h:n})=>(gM(i,e,t,n),!1),modem_router:({b:i,w:e,d:t,h:n,base:r})=>(iM(i,e,t,n),r>.05?!1:.5),smart_display:({b:i,w:e,d:t,h:n,base:r})=>(lM(i,e,t,n),r>.05?!1:.5)};function Ul(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,Z)}}function _M(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,d.body,d.bodyTop,U),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,d.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,Z),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,d.whiteTop,d.whiteTop,U)}function O0(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,d.white,d.whiteTop,U);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,W),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,Z);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42);Ul(i,0,s,a,o),r||Ul(i,0,s,a*.72,o)}function bM(i,e,t,n){let r=Math.min(.035,n*.025),o=(n-r)/2,s=t/2-.012;for(let a=0;a<2;a++){let l=a*(o+r);i.box(-e/2,e/2,l,l+o,-t/2,t/2-.02,d.white,d.whiteTop,U),i.seg(-e/2,l+o-.14,s,e/2,l+o-.14,s,W),i.seg(e/2-.16,l+o-.07,s,e/2-.08,l+o-.07,s,Z);let c=l+(o-.14)/2+.04,u=Math.min(e*.34,(o-.2)*.42);Ul(i,0,c,u,s),a===0&&Ul(i,0,c,u*.72,s+.002)}i.box(-e*.46,e*.46,o,o+r,-t*.46,t*.46,d.dark,d.metal,W)}function xM(i,e,t,n){let r=Math.min(.045,e*.035);for(let s of[-e*.4,e*.4])i.box(s-r,s+r,0,n*.88,-t*.32,-t*.23,d.metal,d.metal,U),i.box(s-r,s+r,0,n*.62,t*.23,t*.32,d.metal,d.metal,U);i.loft([-e/2,e/2,-t*.43,t*.43],[-e/2,e/2,-t*.38,t*.48],n*.88,n*.98,d.dark,d.glass,Z);let o=n*.985;for(let s=1;s<6;s++)i.seg(-e/2+e*s/6,o,-t*.37,-e/2+e*s/6,o,t*.47,W);for(let s=1;s<3;s++)i.seg(-e/2,o,-t*.37+t*.84*s/3,e/2,o,-t*.37+t*.84*s/3,W);i.box(-e*.16,e*.16,n*.34,n*.48,t*.2,t*.34,d.body,d.bodyTop,U),i.seg(-e*.1,n*.43,t*.345,e*.1,n*.43,t*.345,Z)}var z0={dishwasher:({b:i,w:e,d:t,h:n})=>(_M(i,e,t,n),.5),washer:({b:i,w:e,d:t,h:n})=>(O0(i,e,t,n,!1),.5),dryer:({b:i,w:e,d:t,h:n})=>(O0(i,e,t,n,!0),.5),washer_dryer_tower:({b:i,w:e,d:t,h:n})=>(bM(i,e,t,n),.5),balcony_solar:({b:i,w:e,d:t,h:n})=>(xM(i,e,t,n),.5)},B0=(i,e,t)=>{let n=(t-.14)/2+.04,r=Math.min(i*.36,(t-.2)*.42)*.8;return{x0:-r,x1:r,y0:n-r,y1:n+r,z:e/2-.004}},k0={dishwasher:(i,e,t)=>({x0:-i/2+.06,x1:i/2-.06,y0:t-.16,y1:t-.08,z:e/2-.004}),washer:B0,dryer:B0,washer_dryer_tower:(i,e,t)=>({x0:i*.22,x1:i*.39,y0:t*.91,y1:t*.96,z:e/2-.004}),balcony_solar:(i,e,t)=>({x0:-i*.1,x1:i*.1,y0:t*.4,y1:t*.46,z:e*.35})};var yM={...C0,...f0,...L0,...F0,...y0,...s0,...l0,...r0,...N0,...M0,...U0,...z0},vM={...c0,...v0,...d0,...I0,...D0,...k0};function V0(i,e){let t=yM[i];return t?t(e):null}function G0(i,e,t,n){let r=vM[i];return r?r(e,t,n):void 0}function $u(i,e){let t=MM(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function MM(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=Ad(i.type);if(o){let l=e?mn(e,i):0,c=(o.x-o.w/2)*t,u=(o.x+o.w/2)*t,f=Math.min(.02,(u-c)*.05);return{x0:c+f,x1:u-f,y0:l+o.y*r+f,y1:l+(o.y+o.h)*r-f,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?mn(e,i)-Zo(i):0,a=SM(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function SM(i,e,t,n,r){let o=G0(i.type,e,t,n);if(o!==void 0)return o;if(i.type==="tv_board"){let s=Math.min(e*.8,1.45),a=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+a,z:-t/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:s+.02,y1:s+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let s=r?mn(r,i):0;return{x0:.06,x1:e/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Cl+.02,y1:Cl+n-.02,z:t/2+.004};if(i.type==="air_conditioner")return{x0:-e*.43,x1:e*.43,y0:Il+n*.08,y1:Il+n*.27,z:t/2+.008};if(i.type==="water_pump")return{x0:-e*.1,x1:e*.1,y0:n*.56,y1:n*.65,z:t*.3+.004};if(i.type==="water_heater"){let s=Math.min(t*.88,n*.92),a=(n-s)/2;return{x0:e*.18,x1:e*.4,y0:a+s*.38,y1:a+s*.68,z:t*.48+.006}}return i.type==="range_hood"?{x0:-e*.4,x1:e*.4,y0:.005,y1:n*.06,z:t/2+.003}:i.type==="microwave"?{x0:-e*.4,x1:e*.18,y0:n*.17,y1:n*.82,z:t/2+.008}:i.type==="water_purifier"?{x0:-e*.28,x1:e*.28,y0:n*.8*.56,y1:n*.8*.64,z:t/2+.016}:i.type==="air_purifier"?{x0:-e*.11,x1:e*.11,y0:n*.66,y1:n*.74,z:t/2+.008}:i.type==="robot_mower"?{x0:-e*.22,x1:e*.22,y0:n*.16,y1:n*.24,z:t*.31+.008}:i.type==="smart_speaker"?{x0:-e*.42,x1:e*.42,y0:n*.9,y1:n+.008,z:t*.05}:i.type==="security_camera"?{x0:-e*.12,x1:e*.12,y0:1.85+n*.37,y1:1.85+n*.58,z:t*.53}:i.type==="smart_lock"?{x0:-e*.36,x1:e*.36,y0:.95+n*.43,y1:.95+n*.78,z:t/2+.006}:i.type==="network_cabinet"?{x0:-e*.22,x1:e*.22,y0:n*.82,y1:n*.86,z:t*.545}:i.type==="nas_server"?{x0:-e*.34,x1:e*.34,y0:n*.18,y1:n*.205,z:t*.54}:i.type==="access_point"?{x0:-e*.16,x1:e*.16,y0:n*.12,y1:n*.24,z:t*.47}:i.type==="wall_thermostat"?{x0:-e*.37,x1:e*.37,y0:1.35+n*.34,y1:1.35+n*.82,z:t*.54}:i.type==="smoke_detector"?{x0:-e*.1,x1:e*.1,y0:n*.05,y1:n*.22,z:t*.47}:i.type==="siren_alarm"?{x0:-e*.32,x1:e*.32,y0:1.85+n*.48,y1:1.85+n*.82,z:t*.58}:i.type==="electrical_panel"?{x0:-e*.34,x1:e*.34,y0:.85+n*.2,y1:.85+n*.8,z:t*.56}:i.type==="ups_unit"?{x0:-e*.32,x1:e*.32,y0:n*.58,y1:n*.78,z:t*.54}:i.type==="modem_router"?{x0:-e*.25,x1:e*.25,y0:n*.16,y1:n*.3,z:t*.54}:i.type==="heat_pump_outdoor"?{x0:e*.32,x1:e*.41,y0:n*.62,y1:n*.69,z:t*.56}:i.type==="hot_water_tank"?{x0:-e*.12,x1:e*.12,y0:n*.57,y1:n*.66,z:t*.49}:i.type==="ventilation_fan"?{x0:-e*.12,x1:e*.12,y0:1.8+n*.44,y1:1.8+n*.58,z:t*.45}:i.type==="humidifier"?{x0:-e*.35,x1:e*.35,y0:n*.61,y1:n*.69,z:t*.55}:i.type==="smart_display"?{x0:-e*.39,x1:e*.39,y0:n*.35,y1:n*.89,z:t*.24}:i.type==="wall_switch"?{x0:-e*.2,x1:e*.2,y0:1.05+n*.13,y1:1.05+n*.25,z:t*.56}:i.type==="wall_outlet"?{x0:-e*.16,x1:e*.16,y0:.3+n*.12,y1:.3+n*.24,z:t*.56}:i.type==="smart_plug"?{x0:-e*.25,x1:e*.25,y0:.3+n*.1,y1:.3+n*.17,z:t*.56}:i.type==="motion_sensor"?{x0:-e*.27,x1:e*.27,y0:1.9+n*.3,y1:1.9+n*.78,z:t*.59}:i.type==="contact_sensor"?{x0:-e*.28,x1:-e*.03,y0:1.1+n*.1,y1:1.1+n*.24,z:t*.54}:i.type==="water_leak_sensor"?{x0:-e*.2,x1:e*.2,y0:n*.72,y1:n*1.08,z:t*.12}:i.type==="temperature_humidity_sensor"?{x0:-e*.35,x1:e*.35,y0:1.35+n*.3,y1:1.35+n*.78,z:t*.55}:i.type==="video_doorbell"?{x0:-e*.2,x1:e*.2,y0:1.25+n*.06,y1:1.25+n*.18,z:t*.56}:null}function Yu(i,e,t,n,r){let o=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),s=new ae(1-r,1-r,1-r),a=new ae(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-o,-n/2-o),e(t/2+o,-n/2-o),e(t/2+o,n/2+o),e(-t/2-o,n/2+o)],f=p=>[p[0],l,p[1]],h=i.p.length;i.tri(f(c[0]),f(c[1]),f(c[2]),s),i.tri(f(c[0]),f(c[2]),f(c[3]),s);for(let p=0;p<4;p++){let g=(p+1)%4;i.tri(f(c[p]),f(u[p]),f(u[g]),s,a,a),i.tri(f(c[p]),f(u[g]),f(c[g]),s,a,s)}Bu(e)&&lr(i,h)}function Nl(i,e,t,n,r=0){TM(i,e,t,n,r)}function TM(i,e,t,n,r){let o=Dt(n.type)?0:r-Zo(n);if(Dt(n.type)||Math.abs(o)<.001)return H0(i,e,t,n,r);let s=i.p.length,a=e.p.length,l=t.p.length;H0(i,e,r<.05?t:new ct,n,0);for(let c=s+1;c<i.p.length;c+=3)i.p[c]+=o;for(let c=a+1;c<e.p.length;c+=3)e.p[c]+=o;for(let c=l+1;c<t.p.length;c+=3)t.p[c]+=o}function H0(i,e,t,n,r){let o=n.rotation*it,s=Math.cos(o),a=Math.sin(o),l=n.mirror?-1:1,c=(_,m)=>[n.x+l*_*s-m*a,n.z+l*_*a+m*s],u=new qn(i,e,c),f=Math.max(.05,n.w),h=Math.max(.05,n.d),p=Math.max(.005,n.h),g=V0(n.type,{b:u,w:f,d:h,h:p,base:r,variant:n.variant??null});if(g!==null){g!==!1&&Yu(t,c,f,h,g);return}let b=Dt(n.type);if(b){Zu(u,b,f,h,p,r,null),r<=.05&&Yu(t,c,f,h,.5);return}u.box(-f/2,f/2,0,p,-h/2,h/2,d.body,d.bodyTop,U),Yu(t,c,f,h,.5)}function qu(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=d;return(e?t[`${i}Top`]:void 0)??t[i]??null}function Zu(i,e,t,n,r,o,s,a=null){let l=!!a;for(let c of e.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/t,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,f=u.glow&&s!==null,h=f?s:qu(u.color,!1)??d.body,p=f?s:qu(u.top,!1)??qu(u.color,!0)??He(h,1.25).getHex(),g=o+u.y*r,b=o+Math.min(r,(u.y+u.h)*r),_=u.edges==="glow"?sr:u.edges==="faint"?W:u.edges?U:null,m=u.rot?i.rotated(u.x*t,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))m.lyingCyl(u.axis,u.x*t,u.z*n,g,b,u.axis==="x"?u.w*t:u.d*n,u.axis==="x"?u.d*n:u.w*t,h,p,14,_);else if(u.shape==="cyl")m.cyl(u.x*t,u.z*n,Math.min(u.w*t,u.d*n)/2,g,b,h,p,14,_);else if(u.shape==="loft"){let y=u.tx??u.x,M=u.tz??u.z,v=u.tw??u.w,S=u.td??u.d;m.loft([(u.x-u.w/2)*t,(u.x+u.w/2)*t,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-v/2)*t,(y+v/2)*t,(M-S/2)*n,(M+S/2)*n],g,b,h,p,_)}else m.box((u.x-u.w/2)*t,(u.x+u.w/2)*t,g,b,(u.z-u.d/2)*n,(u.z+u.d/2)*n,h,p,_)}}function W0(i,e,t,n,r,o){let s=o*it,a=Math.cos(s),l=Math.sin(s),c=(g,b)=>[t+g*a-b*l,r+g*l+b*a],u=new qn(i,new Vt,c),f=1713728,h=2373216,p=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,p,f),u.cyl(0,0,.012,n-.075,n-.06,d.accent,d.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,p,d.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Ku(i,e,t,n,r,o=s=>!!s.glow){let s=t.rotation*it,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,u=(f,h)=>[t.x+c*f*a-h*l,t.z+c*f*l+h*a];Zu(new qn(i,new Vt,u),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o)}function Ol(i,e,t,n,r){let o=t.rotation*it,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(u,f)=>[t.x+l*u*s-f*a,t.z+l*u*a+f*s];Zu(new qn(i,new Vt,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r)}var Xt={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},to={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}};var wM={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}},EM={canopy:{color:Xt.wallTop,side:Xt.wall,edge:Xt.edge,edgeAlpha:.5},veranda:{color:Xt.wallTop,side:Xt.wall,edge:Xt.edge,edgeAlpha:.58},balcony:{color:Xt.wallTop,side:Xt.wall,edge:Xt.edge,edgeAlpha:.58}},AM=.35,$0=3232102,RM=5404812,CM=5,IM=i=>i.type==="canopy"||i.type==="veranda"||i.type==="balcony";function X0(i,e){let t=i.roof_style==="glass"?3234418:i.roomColor??e.color,n=i.roof_style==="glass"?2112592:e.side;return{roof:t,under:n}}function Z0(i,e){return li(i)+(e.offset??0)+(ai(e.type)?.01:Kr[e.type])}function Kn(i){return or(i)>=0?i:[...i].reverse()}function PM(i,e){let t=i[e];if(ai(t.type)||t.type==="pool")return[];let n=[];for(let r=e+1;r<i.length;r++){let o=i[r];!o.cut||o.points.length<3||o.points.every(s=>ut(s,t.points))&&n.push(Kn(o.points))}return n}function Mn(i,e,t,n,r,o,s,a){let l=t[0]-e[0],c=t[1]-e[1],u=Math.hypot(l,c);if(u<1e-6)return;let f=-c/u*n*.5,h=l/u*n*.5;mt(i,Kn([[e[0]+f,e[1]+h],[t[0]+f,t[1]+h],[t[0]-f,t[1]-h],[e[0]-f,e[1]-h]]),r,o,s,a,{aoFrom:r-1})}function Jn(i,e,t,n,r){i.seg([e[0],n+.004,e[1]],[t[0],n+.004,t[1]],r,Xe)}function Y0(i,e,t,n,r,o,s){for(let[a,l]of[[-n,-n],[n,-n],[n,n],[-n,n]])i.seg([e+a,r,t+l],[e+a,o,t+l],s,Xe)}function Bl(i,e,t,n,r,o,s,a,l){let c=Math.hypot(n[0]-t[0],n[1]-t[1]);if(c<.04||o<.2)return;Mn(i,t,n,.14,r,r+Math.min(.24,o*.24),s,a),Mn(i,t,n,.07,r+o*.5,r+o*.57,s,a),Mn(i,t,n,.1,r+o-.1,r+o,s,a),Jn(e,t,n,r+Math.min(.24,o*.24),l),Jn(e,t,n,r+o*.57,l),Jn(e,t,n,r+o,l);let u=Math.max(2,Math.ceil(c/.22));for(let f=0;f<=u;f++){let h=f/u,p=t[0]+(n[0]-t[0])*h,g=t[1]+(n[1]-t[1])*h;mt(i,Kn([[p-.018,g-.018],[p+.018,g-.018],[p+.018,g+.018],[p-.018,g+.018]]),r+.12,r+o-.07,s,a),e.seg([p,r+.12,g],[p,r+o-.07,g],l,Xe)}}function FM(i,e,t,n,r,o,s,a,l){let c=n[0]-t[0],u=n[1]-t[1],f=Math.hypot(c,u);if(f<.3)return;let h=c/f,p=u/f,g=M=>[t[0]+h*M,t[1]+p*M],b=(M,v,S,w)=>{let[A,x]=g(M);mt(i,Kn([[A-v,x-v],[A+v,x-v],[A+v,x+v],[A-v,x+v]]),S,w,s,a)},_=Math.min(.45,o*.32),m=M=>r+o+_*Math.sin(Math.PI*M),y=Math.max(8,Math.ceil(f/.18));Mn(i,t,n,.11,r+.06,r+.16,s,a),Mn(i,t,n,.08,r+o*.47,r+o*.54,s,a),Jn(e,t,n,r+.16,l),Jn(e,t,n,r+o*.54,l);for(let M=0;M<=y;M++){let v=M/y,S=M===0||M===y||Math.abs(v-.5)<.5/y;b(f*v,S?.038:.016,r+.08,m(v)-.04);let[w,A]=g(f*v);if(e.seg([w,r+.08,A],[w,m(v)-.04,A],l,Xe),M<y){let x=g(f*v),T=g(f*(M+1)/y),C=(m(v)+m((M+1)/y))/2;Mn(i,x,T,.075,C-.045,C+.02,s,a),Jn(e,x,T,C+.02,l)}}}function q0(i,e,t,n,r,o,s=Xe){let a=new ae(o),l=new ae(He(r,.72)),c=new ae(r);for(let[u,f,h]of jr(e)){let p=e[u],g=e[f],b=e[h],_=[p[0],t(p[0],p[1]),p[1]],m=[g[0],t(g[0],g[1]),g[1]],y=[b[0],t(b[0],b[1]),b[1]],M=[_[0],_[1]-n,_[2]],v=[m[0],m[1]-n,m[2]],S=[y[0],y[1]-n,y[2]];i.tri(_,y,m,a,a,a,void 0,s),i.tri(M,v,S,l,l,l,void 0,s)}for(let u=0;u<e.length;u++){let f=e[u],h=e[(u+1)%e.length],p=[f[0],t(f[0],f[1]),f[1]],g=[h[0],t(h[0],h[1]),h[1]],b=[p[0],p[1]-n,p[2]],_=[g[0],g[1]-n,g[2]];i.tri(b,p,g,c,c,c,void 0,s),i.tri(b,g,_,c,c,c,void 0,s)}}function LM(i,e,t){let n=Tl(i,e),r=os(i,t),o=r[n],s=r[(n+1)%r.length],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l);if(c<1e-6)return r;let u=Math.max(0,AM-t),f=l/c*u,h=-a/c*u;return r.map(([p,g],b)=>b===n||b===(n+1)%r.length?[p+f,g+h]:[p,g])}function DM(i,e,t,n,r){let o=[];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=l[0]-e[0],f=l[1]-e[1],h=c[0]-e[0],p=c[1]-e[1],g=u*n[0]+f*n[1],b=h*n[0]+p*n[1];if(!(g<=r&&b>r||b<=r&&g>r))continue;let _=(r-g)/(b-g),m=u*t[0]+f*t[1],y=h*t[0]+p*t[1];o.push(m+(y-m)*_)}o.sort((a,l)=>a-l);let s=[];for(let a=0;a+1<o.length;a+=2)o[a+1]-o[a]>.05&&s.push([o[a],o[a+1]]);return s}function UM(i,e,t,n,r){let o=e[n],s=e[(n+1)%e.length],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l);if(c<1e-6)return;let u=o,f=[a/c,l/c],h=[f[1],-f[0]],p=e.map(([M,v])=>(M-u[0])*f[0]+(v-u[1])*f[1]),g=Math.min(...p),b=Math.max(...p),_=Math.max(1,Math.ceil((b-g)/.18)),m=new ae($0),y=new ae(RM);for(let M=0;M<_;M++){let v=g+(M+.5)*(b-g)/_;for(let[S,w]of DM(e,u,h,f,v)){let A=[u[0]+h[0]*S+f[0]*v,u[1]+h[1]*S+f[1]*v],x=[u[0]+h[0]*w+f[0]*v,u[1]+h[1]*w+f[1]*v],T=x[0]-A[0],C=x[1]-A[1],I=Math.hypot(T,C),F=-C/I*.018,P=T/I*.018,E=-C/I*.007,D=T/I*.007,N=(Q,he)=>[Q[0],t(Q[0],Q[1])+he,Q[1]],O=N([A[0]+F,A[1]+P],.004),k=N([A[0]-F,A[1]-P],.004),z=N([x[0]+F,x[1]+P],.004),G=N([x[0]-F,x[1]-P],.004),V=N([A[0]+E,A[1]+D],.03),ie=N([A[0]-E,A[1]-D],.03),K=N([x[0]+E,x[1]+D],.03),se=N([x[0]-E,x[1]-D],.03);i.tri(V,K,se,y,y,y,void 0,r),i.tri(V,se,ie,y,y,y,void 0,r),i.tri(O,z,K,m,m,m,void 0,r),i.tri(O,K,V,m,m,m,void 0,r),i.tri(ie,se,G,m,m,m,void 0,r),i.tri(ie,G,k,m,m,m,void 0,r)}}}function K0(i,e,t,n,r){let o=li(t),s=[];return n.forEach((a,l)=>{if(a.points.length<3)return;let c=i.count,u,f,h=o+(a.offset??0),p=(w,A)=>h-Jo(a,w,A),g=h-(a.type==="pool"?0:a.slope??0),b=IM(a),_=b?a.height??2.4:ai(a.type)&&a.height?a.height:Kr[a.type],m={...b?EM[a.type]:wM[a.type],top:_},y=Kn(a.points),M=He(m.edge,m.edgeAlpha),v=a.open&&(a.type==="fence"||a.type==="pergola"||b)?y.length-1:-1,S=(w,A=Xe)=>{if(a.outline!==!1)for(let x=0;x<y.length;x++){if(x===v)continue;let T=y[x],C=y[(x+1)%y.length];e.seg([T[0],w(T[0],T[1]),T[1]],[C[0],w(C[0],C[1]),C[1]],M,A)}};switch(a.type){case"pool":{let w=new ae(m.color);for(let[x,T,C]of jr(y)){let I=y[x],F=y[T],P=y[C];i.tri([I[0],h+m.top,I[1]],[P[0],h+m.top,P[1]],[F[0],h+m.top,F[1]],w,w,w,void 0,Xe)}let A=new ae(m.side);for(let x=0;x<y.length;x++){let T=y[x],C=y[(x+1)%y.length];i.tri([C[0],h+m.top,C[1]],[C[0],h+.06,C[1]],[T[0],h+.06,T[1]],A,A,A,void 0,Xe),i.tri([C[0],h+m.top,C[1]],[T[0],h+.06,T[1]],[T[0],h+m.top,T[1]],A,A,A,void 0,Xe)}S(()=>h+.06),S(()=>h+m.top+.005);break}case"fence":{for(let w=0;w<y.length;w++){if(w===v)continue;let A=y[w],x=y[(w+1)%y.length],T=Math.hypot(x[0]-A[0],x[1]-A[1]),C=Math.max(1,Math.round(T/2)),I=v>=0&&w===v-1?C:C-1;for(let F=0;F<=I;F++){let P=F/C,E=A[0]+(x[0]-A[0])*P,D=A[1]+(x[1]-A[1])*P,N=p(E,D);mt(i,Kn([[E-.04,D-.04],[E+.04,D-.04],[E+.04,D+.04],[E-.04,D+.04]]),N,N+m.top,m.side,m.color)}for(let F of[.35,.85])e.seg([A[0],p(A[0],A[1])+F*m.top,A[1]],[x[0],p(x[0],x[1])+F*m.top,x[1]],M,Xe)}break}case"pergola":{let w=m.top;for(let[A,x]of y){let T=p(A,x);mt(i,Kn([[A-.06,x-.06],[A+.06,x-.06],[A+.06,x+.06],[A-.06,x+.06]]),T,T+w,m.side,m.color)}for(let A=0;A<y.length;A++){if(A===v)continue;let x=y[A],T=y[(A+1)%y.length],C=p(x[0],x[1])+w;if(Mn(i,x,T,.12,C-.16,C,m.side,m.color),a.bracing){let I=p(x[0],x[1]),F=p(T[0],T[1]);e.seg([x[0],I+.25,x[1]],[T[0],F+w-.25,T[1]],M,Xe),e.seg([T[0],F+.25,T[1]],[x[0],I+w-.25,x[1]],M,Xe)}}if(Ld(y)){let A=Dd(y),x=A.x1-A.x0,T=A.z1-A.z0,C=x>=T,I=C?x:T,F=Math.max(1,Math.round(I/.6));for(let P=1;P<F;P++){let E=(C?A.x0:A.z0)+I*P/F,D=C?[E,A.z0+.06]:[A.x0+.06,E],N=C?[E,A.z1-.06]:[A.x1-.06,E],O=p(D[0],D[1])+w;Mn(i,D,N,.06,O-.04,O+.08,m.side,m.color)}}S((A,x)=>p(A,x)+w+.004);break}case"canopy":{let w=m.top,A=X0(a,m),x=h+Ko(a.type),T=(D,N)=>x+w-Jo(a,D,N),C=Tl(y,v),I=r===Xe?Xe:r+CM*16,F=Math.min(.4,Math.max(.04,(a.column_size??.12)/2)),P=Math.max(F,(a.wallThickness??.24)/2);for(let[D,N]of y){let O=T(D,N)-.08;mt(i,Kn([[D-F,N-F],[D+F,N-F],[D+F,N+F],[D-F,N+F]]),x,O,A.under,A.roof),Y0(e,D,N,F,x,O,M)}if(a.railing!==!1&&w>=.4){let D=Math.min(1.45,w*.62);for(let N=0;N<y.length;N++){if(N===v)continue;let O=y[N],k=y[(N+1)%y.length];if(N!==C){Bl(i,e,O,k,x,D,A.under,A.roof,M);continue}let z=Math.hypot(k[0]-O[0],k[1]-O[1]);if(z<.6){Bl(i,e,O,k,x,D,A.under,A.roof,M);continue}let G=Math.min(2.4,Math.max(.9,z*.45),Math.max(.3,z-.3)),V=Math.max(0,(z-G)/(2*z)),ie=Math.min(1,1-V),K=[O[0]+(k[0]-O[0])*V,O[1]+(k[1]-O[1])*V],se=[O[0]+(k[0]-O[0])*ie,O[1]+(k[1]-O[1])*ie];Bl(i,e,O,K,x,D,A.under,A.roof,M),Bl(i,e,se,k,x,D,A.under,A.roof,M),FM(i,e,K,se,x,D,A.under,A.roof,M)}}for(let D=0;D<y.length;D++){if(D===v)continue;let N=y[D],O=y[(D+1)%y.length],k=(T(N[0],N[1])+T(O[0],O[1]))/2;Mn(i,N,O,.12,k-.18,k-.08,A.under,A.roof),Jn(e,N,O,k-.08,M)}let E=LM(y,v,P);if(u=i.count,q0(i,E,T,.045,A.under,$0,I),UM(i,E,T,C,I),f=i.count,a.outline!==!1)for(let D=0;D<E.length;D++){if(D===v)continue;let N=E[D],O=E[(D+1)%E.length];e.seg([N[0],T(N[0],N[1])+.034,N[1]],[O[0],T(O[0],O[1])+.034,O[1]],M,I)}break}case"balcony":case"veranda":{let w=m.top,A=a.type==="veranda",x=X0(a,m),T=h+Ko(a.type),C=(V,ie)=>T,I=(V,ie)=>T+w-Jo(a,V,ie),F=A?I:(V,ie)=>T+w,P=Math.min(1.1,w*.48),E=(V,ie,K,se,Q,he=m.side,Y=m.color)=>{mt(i,Kn([[V-K,ie-K],[V+K,ie-K],[V+K,ie+K],[V-K,ie+K]]),se,Q,he,Y),Y0(e,V,ie,K,se,Q,M)};if(a.railing!==!1)for(let V=0;V<y.length;V++){if(V===v)continue;let ie=y[V],K=y[(V+1)%y.length],se=Math.hypot(K[0]-ie[0],K[1]-ie[1]),Q=Math.max(1,Math.ceil(se/.36)),he=T;Mn(i,ie,K,.07,he+.3,he+.38,x.under,x.roof),Mn(i,ie,K,.09,he+P-.09,he+P,x.under,x.roof),Jn(e,ie,K,he+.38,M),Jn(e,ie,K,he+P,M);for(let Y=0;Y<=Q;Y++){let j=Y/Q,fe=ie[0]+(K[0]-ie[0])*j,me=ie[1]+(K[1]-ie[1])*j,pe=C(fe,me),Ae=.012;mt(i,Kn([[fe-Ae,me-Ae],[fe+Ae,me-Ae],[fe+Ae,me+Ae],[fe-Ae,me+Ae]]),pe+.08,pe+P-.07,x.under,x.roof),e.seg([fe,pe+.08,me],[fe,pe+P-.07,me],M,Xe)}}let D=Tl(y,v),N=y[D],O=y[(D+1)%y.length],k=Math.min(12,Math.max(0,Math.round(a.columns??2))),z=Math.min(.4,Math.max(.04,(a.column_size??.32)/2));for(let V=0;V<k;V++){let ie=k===1?.5:V/(k-1),K=N[0]+(O[0]-N[0])*ie,se=N[1]+(O[1]-N[1])*ie,Q=C(K,se);E(K,se,z*1.375,Q,Q+.28,x.under,x.roof),E(K,se,z,Q+.2,F(K,se)-.2,x.under,x.roof),E(K,se,z*1.375,F(K,se)-.28,F(K,se),x.under,x.roof),e.seg([K,Q+.28,se],[K,F(K,se)-.28,se],M,Xe)}let G=(F(N[0],N[1])+F(O[0],O[1]))/2;Mn(i,N,O,Math.max(.2,z*2.6),G-.28,G,x.under,x.roof),Jn(e,N,O,G,M),A&&(u=i.count,q0(i,y,I,.1,x.under,x.roof,r),f=i.count,S((V,ie)=>I(V,ie)+.004,r)),S((V,ie)=>C(V,ie)+(a.railing===!1?.004:P+.004));break}default:{let w=(x,T)=>p(x,T)+m.top,A=PM(n,l);if(mt(i,y,g,a.slope?w:h+m.top,m.side,m.color,{aoFrom:g,holes:A}),S((x,T)=>w(x,T)+.004),a.type==="hedge"&&S((x,T)=>p(x,T)+.004),a.outline!==!1)for(let x of A)for(let T=0;T<x.length;T++){let C=x[T],I=x[(T+1)%x.length];e.seg([C[0],w(C[0],C[1])+.004,C[1]],[I[0],w(I[0],I[1])+.004,I[1]],M,Xe)}}}i.count>c&&s.push({id:a.id,start:c,end:i.count,...u!==void 0&&f!==void 0?{roofStart:u,roofEnd:f}:{}})}),s}function J0(i,e,t){return K0(i,e,t,t.outdoor??[],Xe)}function Q0(i,e,t,n,r=Xe){return K0(i,e,t,n,r)}var kl=Math.PI/180,NM=1.13,OM=1.72,Ju=.025,fr=.07,j0=.25;function ep(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=ns(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<1.2)continue;let c=a/l,u=-s/l,f=Math.min(n.height,o.height??n.height),h=(p,g,b,_)=>t.push({key:p,section:null,side:"top",flat:!1,o:g,eu:b,es:[0,1,0],n:_,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&h(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var Qu="ground";function ju(i){return[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation)[0]??i.floors[0]??null}function tp(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=ju(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Sl(o,s,a)):e.base??0;return{key:Qu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function BM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function no(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>zM(y,El(i,y,y.overhang??e.overhang)));let t=BM(i);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(M=>M[0])),r=t.rooms.flatMap(y=>y.points.map(M=>M[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=t.elevation+t.height;if(e.type==="flat")return[np("main",null,s,l,a,c,u+j0)];let f=a-s>=c-l,h=e.ridge==="short"?!f:f,p=(h?c-l:a-s)/2,g=p*Math.tan(e.pitch*kl),b=(y,M,v)=>h?[y,u+v,(l+c)/2+M]:[(s+a)/2+M,u+v,y],[_,m]=h?[s,a]:[l,c];return[-1,1].map(y=>zl(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",b(_,y*p,0),b(m,y*p,0),b(_,0,g),e.pitch,()=>[0,m-_]))}function zM(i,e){let t=Yn(i),n=Ln(i),r=(b,_,m)=>{let[y,M]=t.at(b,_);return[y,m,M]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let b=t.at(a,-o),_=t.at(l,t.w+s);return[np(i.id,i.id,Math.min(b[0],_[0]),Math.min(b[1],_[1]),Math.max(b[0],_[0]),Math.max(b[1],_[1]),i.eave_a+j0)]}if(i.shape==="pent")return[zl(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",f=i.shape==="pyramid"?(t.u1-t.u0)/2:u?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=u?t.u0+f-a:0,p=u?l-(t.u1-f):0,g=[];if(n.vr>.3){let b=Math.hypot(n.vr+o,n.rh-n.y(-o));g.push(zl(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,_=>[h*(_/b),c-p*(_/b)]))}if(t.w-n.vr>.3){let b=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));g.push(zl(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,_=>[p*(_/b),c-h*(_/b)]))}if(u){let b=n.y(-o),_=n.y(t.w+s),m=[[`${i.id}:c`,"c",r(a,t.w+s,_),r(a,-o,b),r(t.u0+f,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-o,b),r(l,t.w+s,_),r(t.u1-f,n.vr,n.rh)]];for(let[y,M,v,S,w]of m){let A=kM(y,i.id,M,v,S,w);A&&g.push(A)}}return g}function kM(i,e,t,n,r,o){let s=cs(dr(r,n));if(s<.3)return null;let a=zi(dr(r,n)),l=dr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],f=cs(u);if(f<.3)return null;let h=zi(u),p=zi(op(a,h));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let g=zi([-h[0],0,-h[2]]),b=Math.atan2(h[1],Math.hypot(h[0],h[2]))/kl;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:p,lu:s,ls:f,pitch:b,span:m=>{let y=Math.min(1,Math.max(0,m/f));return[c*y,s-(s-c)*y]},facing:[g[0],g[2]]}}function zl(i,e,t,n,r,o,s,a){let l=zi(dr(r,n)),c=zi(dr(o,n)),u=zi(op(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=zi([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:u,lu:cs(dr(r,n)),ls:cs(dr(o,n)),pitch:s,span:a,facing:[f[0],f[2]]}}function np(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function ip(i){let e=i.module_w||NM,t=i.module_h||OM;return i.portrait===!1?[t,e]:[e,t]}function VM(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function rp(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*kl:i.wall?Math.min(90,Math.max(0,e.tilt??0))*kl:0}function GM(i,e){let[,t]=ip(e),n=rp(i,e);return i.wall?t*Math.cos(n)+Ju:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Ju}function us(i,e,t=!1){let[n,r]=ip(e),o=[],s=rp(i,e),a=r*Math.cos(s),l=GM(i,e),c=VM(e),u=Math.max(1,...c),f=new Set(e.skip??[]),h=(g,b,_)=>[i.o[0]+i.eu[0]*g+i.es[0]*b+i.n[0]*_,i.o[1]+i.eu[1]*g+i.es[1]*b+i.n[1]*_,i.o[2]+i.eu[2]*g+i.es[2]*b+i.n[2]*_],p=(g,b)=>{if(i.unbounded)return!0;if(b<-1e-6||b>i.ls+1e-6)return!1;let[_,m]=i.span(b);return g>=_-1e-6&&g<=m+1e-6};return c.forEach((g,b)=>{let _=e.align==="right"?u-g:e.align==="center"?(u-g)/2:0;for(let m=0;m<g;m++){let y=`${b}:${m}`,M=f.has(y);if(M&&!t)continue;let v=e.u+(m+_)*(n+Ju),S=e.v+b*l,w=v+n,A=S+(i.flat||i.wall?a:r);if(![[v,S],[w,S],[w,A],[v,A]].every(([P,E])=>p(P,E)))continue;if(i.wall&&s>.001){let P=fr+r*Math.sin(s),[E,D]=e.flip?[P,fr]:[fr,P],N=[h(v,S,E),h(w,S,E),h(w,A,D),h(v,A,D)],O=e.flip?S:A,k=[v+.05,w-.05].map(z=>[h(z,O,0),h(z,O,P)]);o.push({corners:N,posts:k,cell:y,skipped:M});continue}if(!i.flat){o.push({corners:[h(v,S,fr),h(w,S,fr),h(w,A,fr),h(v,A,fr)],posts:[],cell:y,skipped:M});continue}let x=.15,T=x+r*Math.sin(s),[C,I]=e.flip?[A,S]:[S,A],F=[h(v,C,x),h(w,C,x),h(w,I,T),h(v,I,T)];o.push({corners:F,posts:[v+.05,w-.05].flatMap(P=>[[h(P,C,0),h(P,C,x)],[h(P,I,0),h(P,I,T)]]),cell:y,skipped:M})}}),o}function dr(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function cs(i){return Math.hypot(i[0],i[1],i[2])}function zi(i){let e=cs(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function op(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var HM=.78,WM=1.18;function XM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||HM,module_h:i.h||WM}}function eh(i,e){let t=us(i,XM(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}var hs=1712952,fs=2239816,lp=1318193,pr=He(3662079,.9),io=He(5995775,.45),Ot=.14,YM=9427199,qM=13226982,$M=14936565,ZM={black:{glass:new ae(329483),edge:He(9082544,.32),cells:He(2766160,.22)},blue:{glass:new ae(1386842),edge:He(10467583,.55),cells:He(4025599,.35)}},KM=He(13226982,.5),JM=He(13226982,.85),QM=He(16757575,.95),sp=new ae(2845583),ap=new ae(3818072);function jM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function cp(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:nS(i),r=t?.type==="custom"?iS(i,t.sections??[],t.overhang):n?[n]:[];return tS(i,r),eS(i,r,e),r}function eS(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map(no(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?eh(s,o):null;if(!s||!a)continue;let l=s.section?e.find(I=>I.sections?.includes(s.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,u=I=>[I[0],I[1]-c,I[2]],[f,h,p,g]=a.map(u),b=t.get(o.id)??{open:0,tilt:0,cover:0},_=(I,F)=>[I[0]+s.n[0]*F,I[1]+s.n[1]*F,I[2]+s.n[2]*F],m=(I,F,P)=>[I[0]+(F[0]-I[0])*P,I[1]+(F[1]-I[1])*P,I[2]+(F[2]-I[2])*P],y=b.open>.02||b.tilt>.02?QM:JM,M=[f,h,p,g].map(I=>_(I,.06));for(let I=0;I<4;I++)l.lines.seg(M[I],M[(I+1)%4],y);let v=(b.open>.02?30*Math.min(1,b.open):b.tilt>.5?12:0)*it,S=Math.hypot(p[0]-h[0],p[1]-h[1],p[2]-h[2]),w=I=>{let F=s.es;return[I[0]-F[0]*S*Math.cos(v)+s.n[0]*S*Math.sin(v),I[1]-F[1]*S*Math.cos(v)+s.n[1]*S*Math.sin(v),I[2]-F[2]*S*Math.cos(v)+s.n[2]*S*Math.sin(v)]},A=_(g,.065),x=_(p,.065),T=w(A),C=w(x);l.solid.tri(T,C,x,sp),l.solid.tri(T,x,A,sp);for(let[I,F]of[[T,C],[C,x],[x,A],[A,T]])l.lines.seg(I,F,y);if(b.cover>.02){let I=Math.min(1,b.cover),F=_(m(A,T,I),.01),P=_(m(x,C,I),.01),E=_(A,.01),D=_(x,.01);l.solid.tri(F,P,D,ap),l.solid.tri(F,D,E,ap)}}}function tS(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(no(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];s&&th(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function th(i,e,t,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=ZM[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of us(t,n)){let[u,f,h,p]=c.corners.map(o);i.tri(u,f,h,s.glass),i.tri(u,h,p,s.glass),i.tri(u,h,f,s.glass),i.tri(u,p,h,s.glass);let g=(m,y=.004)=>[m[0]+t.n[0]*y,m[1]+t.n[1]*y,m[2]+t.n[2]*y],b=(m,y,M)=>[m[0]+(y[0]-m[0])*M,m[1]+(y[1]-m[1])*M,m[2]+(y[2]-m[2])*M],_=[u,f,h,p].map(m=>g(m));for(let m=0;m<4;m++)e.seg(_[m],_[(m+1)%4],s.edge);for(let m=1;m<a;m++)e.seg(g(b(u,f,m/a)),g(b(p,h,m/a)),s.cells);for(let m=1;m<l;m++)e.seg(g(b(u,p,m/l)),g(b(f,h,m/l)),s.cells);for(let[m,y]of c.posts)e.seg(o(m),o(y),KM)}}function nS(i){let e=i.settings.roof,t=jM(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(C=>C.points.map(I=>I[0])),r=t.rooms.flatMap(C=>C.points.map(I=>I[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=new ct,f=new Vt;if(e.type==="flat"){mt(u,[[s,l],[a,l],[a,c],[s,c]],0,.25,hs,fs,{bottom:!0});let C=.252;for(let[I,F]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])f.seg([I[0],C,I[1]],[F[0],C,F[1]],pr),f.seg([I[0],0,I[1]],[F[0],0,F[1]],io);return{floor:t,base:t.height,solid:u,lines:f,glass:new ct}}let h=a-s>=c-l,p=e.ridge==="short"?!h:h,g=(p?c-l:a-s)/2,b=g*Math.tan(e.pitch*it),_=(C,I,F)=>p?[C,F,(l+c)/2+I]:[(s+a)/2+I,F,C],[m,y]=p?[s,a]:[l,c],M=new ae(fs),v=new ae(hs),S=(C,I,F,P,E)=>{u.tri(C,I,F,E),u.tri(C,F,P,E)};for(let C of[-1,1]){S(_(m,C*g,0),_(y,C*g,0),_(y,0,b),_(m,0,b),M),S(_(m,C*g,-Ot),_(m,0,b-Ot),_(y,0,b-Ot),_(y,C*g,-Ot),v),S(_(m,C*g,-Ot),_(y,C*g,-Ot),_(y,C*g,0),_(m,C*g,0),v);for(let I of[m,y])S(_(I,C*g,-Ot),_(I,C*g,0),_(I,0,b),_(I,0,b-Ot),v);f.seg(_(m,C*g,0),_(y,C*g,0),io);for(let I of[m,y])f.seg(_(I,C*g,0),_(I,0,b),io)}let w=e.overhang,A=new ae(lp),x=g-w,T=x*Math.tan(e.pitch*it);for(let C of[m+w,y-w])u.tri(_(C,-x,-Ot),_(C,x,-Ot),_(C,0,T-Ot),A),u.tri(_(C,x,-Ot),_(C,-x,-Ot),_(C,0,T-Ot),A);return f.seg(_(m,0,b+.004),_(y,0,b+.004),pr),{floor:t,base:t.height,solid:u,lines:f,glass:new ct}}function iS(i,e,t){let n=i.floors.filter(s=>s.rooms.length>0).sort((s,a)=>s.elevation-a.elevation);if(!n.length)return[];let r=new Map,o=new Map(no(i).map(s=>[s.key,s]));for(let s of e){if(Math.abs(s.x1-s.x0)<.1||Math.abs(s.z1-s.z0)<.1)continue;let a=qd(i,s)??n[0],l=s.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ct,lines:new Vt,glass:new ct,sections:[],lift:!s.open}),c.sections.push(s.id);let u=Iu(e,s),f=a.elevation+a.height>s.base+.05&&!s.dormer&&!u,h=e.filter(b=>b!==s&&Iu(e,b)===s).flatMap(b=>Xd(s,b));for(let b of i.settings.roof.windows??[]){let _=o.get(b.face),m=_&&_.section===s.id?eh(_,b):null;if(!m)continue;let y=m.map(M=>Oi(s,M[0],M[2]));h.push({u0:Math.min(...y.map(M=>M[0])),u1:Math.max(...y.map(M=>M[0])),v0:Math.min(...y.map(M=>M[1])),v1:Math.max(...y.map(M=>M[1]))})}let p=u?Pu(u,s):s,g=null;if(u){let b=Yn(p),_=Qr(u,{u0:0,u1:0,a:0,b:0}),m=y=>{let[M,v]=b.at(y,b.w/2),[S,w]=Oi(u,M,v);return ss(_,S,w)??Ln(u).y(w)};g=m(b.u0)<=m(b.u1)?0:1}rS(c.solid,c.lines,p,El(i,p,p.overhang??t),a.elevation,c.glass,f,h,g)}return[...r.values()].sort((s,a)=>+(s.lift===!1)-+(a.lift===!1))}function rS(i,e,t,n,r,o=i,s=!1,a=[],l=null){let c=Yn(t),u=Ln(t),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,f.a),p=Math.max(0,f.b),g=c.w,b=c.u0-Math.max(0,f.u0),_=c.u1+Math.max(0,f.u1),m=(P,E,D)=>{let[N,O]=c.at(P,E);return[N,D-r,O]},y=new ae(fs),M=new ae(hs),v=new ae(lp),S=(P,E)=>{for(let D=1;D+1<P.length;D++)i.tri(P[0],P[D],P[D+1],E)},w=[],A=[],x=[],T=null;if(t.shape==="flat"||t.shape==="parapet"){let P=t.eave_a,E=t.shape==="parapet",D=t.points&&t.points.length>=3?Hd(t,E?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(b,-h),c.at(_,-h),c.at(_,g+p),c.at(b,g+p)];mt(i,D,P-r,P-r+.25,hs,fs,{bottom:!0});for(let N=0;N<D.length;N++){let O=D[N],k=D[(N+1)%D.length];e.seg([O[0],P-r+.252,O[1]],[k[0],P-r+.252,k[1]],pr),e.seg([O[0],P-r,O[1]],[k[0],P-r,k[1]],io)}if(E){let N=G=>Qo(G)>=0?G:[...G].reverse(),O=N(D),k=os(O,-.2),z=O.length;for(let G=0;G<z;G++){let V=N([O[G],O[(G+1)%z],k[(G+1)%z],k[G]]);mt(i,V,P-r+.25,P-r+.65,hs,fs),e.seg([O[G][0],P-r+.652,O[G][1]],[O[(G+1)%z][0],P-r+.652,O[(G+1)%z][1]],pr),e.seg([k[G][0],P-r+.652,k[G][1]],[k[(G+1)%z][0],P-r+.652,k[(G+1)%z][1]],pr)}}}else{let P=Qr(t,f);w=P.faces;for(let E of a)w=w.flatMap(D=>Yd(D,E));A=P.rim,x=P.ridges,T=P.gable}let C=!!t.open,I=new ae(YM);for(let P of w){if(C){for(let E=1;E+1<P.length;E++)o.tri(m(P[0][0],P[0][1],P[0][2]),m(P[E][0],P[E][1],P[E][2]),m(P[E+1][0],P[E+1][1],P[E+1][2]),I);continue}S(P.map(([E,D,N])=>m(E,D,N)),y),S(P.map(([E,D,N])=>m(E,D,N-Ot)),M)}for(let P=0;P<A.length;P++){let[E,D,N]=A[P],[O,k,z]=A[(P+1)%A.length];C||S([m(E,D,N),m(O,k,z),m(O,k,z-Ot),m(E,D,N-Ot)],M),e.seg(m(E,D,N),m(O,k,z),C?pr:io)}if(C){oS(i,e,c,u,f,m,r);return}for(let[[P,E,D],[N,O,k]]of x)e.seg(m(P,E,D+.004),m(N,O,k+.004),pr);let F=t.base;if(!s){if(T){let P=sS(T,F-Ot),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(P.length>=3)for(let D of E)S(P.map(([N,O])=>m(D,N,O)),v)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let P of[0,g]){let E=u.y(P)-Ot;E>F+.02&&S([m(c.u0,P,F),m(c.u1,P,F),m(c.u1,P,E),m(c.u0,P,E)],v)}else if(t.eave_a>F+.02)for(let[P,E,D,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])S([m(P,E,F),m(D,N,F),m(D,N,t.eave_a),m(P,E,t.eave_a)],v)}}function oS(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,u=r.a>0,f=r.b>0,h=r.u0>0,p=r.u1>0,g=(m,y,M,v,S,w)=>{let A=[t.at(m,M),t.at(y,M),t.at(y,v),t.at(m,v)],x=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);mt(i,x<0?[...A].reverse():A,S-s,w-s,qM,$M,{bottom:!0})},b=s;for(let[m,y]of[[0,u],[a,f]]){if(!y)continue;let M=n.y(m)-.03,v=m===0?0:a-l;g(t.u0,t.u1,v,v+l,M-c,M),e.seg(o(t.u0,m,M-c),o(t.u1,m,M-c),io)}for(let[m,y]of[[t.u0,h],[t.u1-l,p]])if(y)for(let M=0;M<6;M++){let v=a*M/6,S=a*(M+1)/6,w=Math.min(n.y(v),n.y(S))-.03;g(m,m+l,v,S,w-c,w)}let _=[];for(let[m,y]of[[0,u],[a-l,f]]){if(!y)continue;let M=t.u1-t.u0-l,v=Math.max(1,Math.ceil(M/3.5));for(let S=0;S<=v;S++){let w=t.u0+M*S/v;S===0&&!h||S===v&&!p||_.push([w,m])}}if(!u&&!f)for(let m of[t.u0,t.u1-l])(m===t.u0&&h||m!==t.u0&&p)&&_.push([m,a/2-l/2]);for(let[m,y]of _){let M=n.y(y+l/2)-.03-c;g(m,m+l,y,y+l,b,M)}}function sS(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var ki=.2,pp=15;function mp(i){return i?65535&~(1<<pp):65535}var ds=8,Vl=.42,nh=.42;function gp(i,e,t,n=[],r=[],o){let{walls:s,open:a}=ns(i.rooms,{exterior:e,interior:t},i.walls??[]),l=(E,D,N)=>{let O=o?o(E,D):null;return O===null?N:Math.max(.05,Math.min(N,O))},c=(E,D,N,O,k)=>{if(!o)return k;let z=k,G=Math.max(2,Math.ceil((O-N)/.25)+1);for(let V=0;V<G;V++){let ie=N+(O-N)*V/(G-1);z=Math.min(z,l(E[0]+D[0]*ie,E[1]+D[1]*ie,k))}return z},u=new ct(!0,!0),f=[],h=new Vt,p=[];for(let E of i.rooms){if(E.points.length<3)continue;let D=dp(Xn(E)?fS(E):E.points),N=to[E.floor_material]??to.wood,O=new ae(N.color),k=n.filter(K=>Zd(K,D)).map(K=>Kd(K,.003));p.push(...k);let z=[...D,...k.flat()],G=u.count;for(let[K,se,Q]of jr(D,k)){let he=z[K],Y=z[se],j=z[Q];u.tri([he[0],0,he[1]],[j[0],0,j[1]],[Y[0],0,Y[1]],O,O,O,[he[0],he[1],j[0],j[1],Y[0],Y[1]],Xe,N.tile)}f.push({roomId:E.id,start:G,end:u.count,color:N.color});let V=new ae(Xt.slab),ie=K=>{for(let se=0;se<K.length;se++){let Q=K[se],he=K[(se+1)%K.length];u.tri([Q[0],-ki,Q[1]],[Q[0],0,Q[1]],[he[0],0,he[1]],V),u.tri([Q[0],-ki,Q[1]],[he[0],0,he[1]],[he[0],-ki,he[1]],V)}};ie(D);for(let K of k){ie([...dp(K)].reverse());for(let se=0;se<K.length;se++){let Q=K[se],he=K[(se+1)%K.length];h.seg([Q[0],.006,Q[1]],[he[0],.006,he[1]],sr),h.seg([Q[0],-ki,Q[1]],[he[0],-ki,he[1]],Bi)}}}let g=new Map,b=[],_=new Map;for(let E of s){let D="interior",N=null;if(E.exterior){let k=E.b[0]-E.a[0],z=E.b[1]-E.a[1],G=Math.hypot(k,z)||1,V=[z/G,-k/G],ie=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*ds)%ds+ds)%ds;D=`s${ie}`;let K=ie/ds*2*Math.PI;N=[Math.cos(K),Math.sin(K)]}let O=g.get(D);O===void 0&&(O=b.length,g.set(D,O),b.push(N)),_.set(E,O)}let m=new Map,y=[];for(let E of i.openings){let D=zd(E,i.rooms,i.walls??[]);if(!D)continue;let N=kd(s,E,D);if(!N)continue;let{wall:O,s:k}=N,z=Wl([O.b[0]-O.a[0],O.b[1]-O.a[1]]),G=Math.hypot(O.b[0]-O.a[0],O.b[1]-O.a[1]),V=Math.min(E.width,G),ie=Math.max(0,Math.min(G-V,k-V/2)),K=D.room.points,se=O.free?z[0]*(K[1][0]-K[0][0])+z[1]*(K[1][1]-K[0][1])>0:O.roomLeft===E.room_id,Q=[-z[1],z[0]],he=se?Q:[-Q[0],-Q[1]],Y=Math.min(c(O.a,z,ie,ie+V,Gl(O,i.height))-.02,E.sill+E.height),j=Math.max(0,Math.min(E.sill,Y-.1)),fe=[he[1],-he[0]],me=z[0]*fe[0]+z[1]*fe[1]>0,pe={opening:E,bucket:_.get(O),start:[O.a[0]+z[0]*ie,O.a[1]+z[1]*ie],axis:z,width:V,toRoom:he,faceRoom:se?O.left:O.right,faceOut:se?O.right:O.left,sill:j,top:Y,hingeAtStart:E.hinge==="left"===me,exterior:O.exterior};y.push(pe);let Ae=m.get(O);Ae||m.set(O,Ae=[]),Ae.push({s0:ie,s1:ie+V,sill:j,top:Y,info:pe})}let M=Math.min(i.cut_height,i.height),v=new ct;for(let E of s){let D=_.get(E),N=Wl([E.b[0]-E.a[0],E.b[1]-E.a[1]]),O=(m.get(E)??[]).sort((se,Q)=>se.s0-Q.s0),k=Gl(E,i.height),z=[],G=[-1/0,...new Set(O.flatMap(se=>[se.s0,se.s1])).values(),1/0].sort((se,Q)=>se-Q);for(let se=0;se+1<G.length;se++){let Q=G[se],he=G[se+1];if(he-Q<1e-6)continue;let Y=Number.isFinite(Q)&&Number.isFinite(he)?(Q+he)/2:Number.isFinite(Q)?Q+1:he-1,j=O.filter(pe=>pe.s0<Y&&pe.s1>Y).map(pe=>[pe.sill,pe.top]).sort((pe,Ae)=>pe[0]-Ae[0]),fe=[],me=-ki;for(let[pe,Ae]of j)pe>me+1e-4&&fe.push([me,pe]),me=Math.max(me,Ae);k>me+1e-4&&fe.push([me,k]),z.push({t0:Q,t1:he,ranges:fe})}let V=Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1]),ie=o&&c(E.a,N,0,V,k)<k-.001,K=ie?z.flatMap(se=>{let Q=Math.max(se.t0,-.5),he=Math.min(se.t1,V+.5),Y=Math.max(1,Math.ceil((he-Q)/.3));return Array.from({length:Y},(j,fe)=>({t0:fe===0?se.t0:Q+(he-Q)*fe/Y,t1:fe===Y-1?se.t1:Q+(he-Q)*(fe+1)/Y,ranges:se.ranges}))}):z;for(let se of K){let Q=lS(E.footprint,E.a,N,se.t0,se.t1);if(Q.length<3)continue;let he=ie?Math.min(...Q.map(([Y,j])=>l(Y,j,k))):k;for(let[Y,j]of se.ranges){let fe=Math.min(j,ie?Math.max(...Q.map(([rt,Ve])=>l(rt,Ve,k))):j);if(fe-Y<1e-4||he-Y<.01)continue;let me=Y>.01,pe=ie&&j>he,Ae=(rt,Ve)=>Math.min(j,l(rt,Ve,k));if(Y<M-1e-6){let rt=fe>M+1e-6?Qd+D:ar+D,Ve=pe&&he<M?(Ke,ot)=>Math.min(M,Ae(Ke,ot)):Math.min(fe,M);mt(v,Q,Y,Ve,Xt.wall,Xt.wallTop,{aoFrom:0,bottom:me,fold:ar+D,topFold:rt})}fe>M+1e-6&&he>M+1e-6&&mt(v,Q,Math.max(Y,M),pe?Ae:fe,Xt.wall,Xt.wallTop,{aoFrom:0,fold:D,bottom:me&&Y>=M})}}}let S=s.flatMap(E=>E.footprint),w=uS(s,S),A=new Vt;A.p.push(...h.p),A.c.push(...h.c),A.f.push(...h.f);let x=(E,D)=>(m.get(E)??[]).filter(D);for(let E of w.edges){let D=_.get(E.wall);for(let[O,k]of Hl(E,x(E.wall,z=>z.sill<=.005)))A.seg([O[0],.004,O[1]],[k[0],.004,k[1]],Jd);for(let[O,k]of Hl(E,x(E.wall,z=>z.sill<M&&z.top>M)))A.seg([O[0],M,O[1]],[k[0],M,k[1]],Uu,Rl+D);let N=Gl(E.wall,i.height);for(let[O,k]of Hl(E,x(E.wall,z=>z.top>=N-.021))){if(!o){A.seg([O[0],N,O[1]],[k[0],N,k[1]],sr,N<=M+1e-6?ar+D:D);continue}let z=Math.max(1,Math.ceil(Math.hypot(k[0]-O[0],k[1]-O[1])/.3));for(let G=0;G<z;G++){let V=[O[0]+(k[0]-O[0])*G/z,O[1]+(k[1]-O[1])*G/z],ie=[O[0]+(k[0]-O[0])*(G+1)/z,O[1]+(k[1]-O[1])*(G+1)/z],K=l(V[0],V[1],N),se=l(ie[0],ie[1],N);A.seg([V[0],K,V[1]],[ie[0],se,ie[1]],sr,Math.max(K,se)<=M+1e-6?ar+D:D)}}}for(let E of w.corners){let D=l(E.p[0],E.p[1],Gl(E.wall,i.height));A.segSplit([E.p[0],.004,E.p[1]],[E.p[0],D,E.p[1]],Bi,Math.min(M,D),_.get(E.wall))}for(let E of m.values())for(let D of E)aS(A,D,M);let T=hS(w.edges,i.rooms,m),C=i.rooms.filter(Xn).map(E=>({id:E.id,type:E.kind,points:E.points,roof_style:E.roof_style,railing:E.railing,columns:E.columns,column_size:E.column_size,height:E.height??i.height,slope:E.slope,slope_dir:E.slope_dir,open:E.open??!0,roomColor:(to[E.floor_material]??to.wood).color,wallThickness:e,offset:-li(i)-Ko(E.kind)})),I=Q0(v,A,i,C,pp),F=J0(v,A,i);for(let E of r)th(v,A,E.face,E.field,i.elevation);let P=[];for(let E of i.furniture){if(Cd(E.type))continue;let D=v.count,N=A.p.length/6,O=mn(i,E);Nl(v,A,T,E,O),O+E.h>M+.05&&(jd(v,D,M,Nu),e0(A,N,M,Nu)),P.push({id:E.id,start:D,end:v.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:v.geometry(),lines:A.geometry(),shadow:T.geometry(),buckets:b,openings:y,walls2d:s,openRooms:a,wallBuckets:s.map(E=>_.get(E)),furnitureTris:P,outdoorTris:F,coveredRoomTris:I}}function aS(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:Xe,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),Bi,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),Bi,s(e.top)),e.sill>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),Bi,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),Bi,s(e.top)),e.sill>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),Bi,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),Uu,Rl+r)}function lS(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=up(s,a=>o(a)-n)),Number.isFinite(r)&&(s=up(s,a=>r-o(a))),s}function up(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var hp=i=>Math.round(i*1e3),ps=i=>`${hp(i[0])},${hp(i[1])}`,fp=(i,e)=>{let t=ps(i),n=ps(e);return t<n?`${t}|${n}`:`${n}|${t}`};function cS(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let f of e){let h=((f[0]-r[0])*s+(f[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((f[0]-r[0])*a-(f[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((f,h)=>f-h);let u=r;for(let f of c){let h=[r[0]+s*f,r[1]+a*f];ps(h)!==ps(u)&&t.push([u,h]),u=h}t.push([u,o])}return t}function uS(i,e){let t=i.map(l=>({wall:l,edges:cS(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let f=fp(c,u);n.set(f,(n.get(f)??0)+1)}let r=[],o=new Map,s=(l,c,u)=>{let f=ps(l),h=o.get(f);h||o.set(f,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,f]of c){if(n.get(fp(u,f))!==1)continue;let h=Math.hypot(f[0]-u[0],f[1]-u[1]);if(h<1e-4)continue;r.push({a:u,b:f,wall:l});let p=[(f[0]-u[0])/h,(f[1]-u[1])/h];s(u,l,p),s(f,l,p)}let a=[];for(let{p:l,wall:c,d:u}of o.values())u.some(f=>u.some(h=>Math.abs(f[0]*h[1]-f[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Hl(i,e){if(!e.length)return[[i.a,i.b]];let t=Wl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Wl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=f=>(f[0]-i.wall.a[0])*t[0]+(f[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let f of e)c=c.flatMap(([h,p])=>{if(f.s1<=h||f.s0>=p)return[[h,p]];let g=[];return f.s0>h&&g.push([h,f.s0]),f.s1<p&&g.push([f.s1,p]),g});let u=f=>{let h=(f-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([f,h])=>h-f>1e-4).map(([f,h])=>o<=s?[u(f),u(h)]:[u(h),u(f)])}function hS(i,e,t){let n=new ct,r=new ae(nh,nh,nh),o=new ae(1,1,1),s=.002;for(let a of i)for(let[l,c]of Hl(a,(t.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],f=c[1]-l[1],h=Math.hypot(u,f);if(h<.05)continue;let p=[f/h,-u/h],g=[(l[0]+c[0])/2+p[0]*.05,(l[1]+c[1])/2+p[1]*.05];if(!e.some(m=>m.points.length>=3&&ut(g,m.points)))continue;let b=[l[0]+p[0]*Vl,l[1]+p[1]*Vl],_=[c[0]+p[0]*Vl,c[1]+p[1]*Vl];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[_[0],s,_[1]],r,o,o),n.tri([l[0],s,l[1]],[_[0],s,_[1]],[c[0],s,c[1]],r,o,r)}return n}function _p(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(wl),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return Du(t);let r=n.furniture.filter(o=>(o.type==="stairs"||o.type==="stairs_landing"||Dt(o.type)?.hole)&&n.elevation+o.h>=e.elevation-.3).map(wl);return Du([...t,...r])}function Gl(i,e){return Math.min(e,i.height??e)}function Wl(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function dp(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function fS(i){let e=i.points,t=e.length;if(t<3)return e;let n=0;for(let c=0;c<t;c++)n+=e[c][0]*e[(c+1)%t][1]-e[(c+1)%t][0]*e[c][1];let r=n>=0?1:-1,o=(i.column_size??(i.kind==="canopy"?.12:.32))/2,s=i.kind==="canopy"?o:o*1.375,a=i.open!==!1?t-1:-1,l=e.map((c,u)=>{let f=e[(u+1)%t],h=f[0]-c[0],p=f[1]-c[1],g=Math.hypot(h,p)||1,b=u===a?0:s,_=[p/g*r,-h/g*r];return{p:[c[0]+_[0]*b,c[1]+_[1]*b],d:[h/g,p/g],normal:_,offset:b}});return e.map((c,u)=>{let f=l[(u-1+t)%t],h=l[u],p=f.d[0]*h.d[1]-f.d[1]*h.d[0];if(Math.abs(p)<1e-6)return[c[0]+h.normal[0]*h.offset,c[1]+h.normal[1]*h.offset];let g=((h.p[0]-f.p[0])*h.d[1]-(h.p[1]-f.p[1])*h.d[0])/p;return[f.p[0]+f.d[0]*g,f.p[1]+f.d[1]*g]})}var dS=500,bp=.12,xp=1.35,pS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Xl=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,f=Math.min(1,(e-c)/u),h=pS(f);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,f>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=ih(this.view.phi+this.velocity.phi,bp,xp),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},r=e.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let o={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:r,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:n,to:o,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},dS)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}if(t.button===1||t.button===2||e.shiftKey)this.pan(n,r);else{let s=this.el.clientHeight||1,a=-n/s*3.2,l=-r/s*2.4;this.view.theta+=a,this.view.phi=ih(this.view.phi+l,bp,xp),this.velocity={theta:a,phi:l}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=ih(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function ih(i,e,t){return Math.min(t,Math.max(e,i))}function hi(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= mix(${.78.toFixed(2)}, ${.42.toFixed(2)}, vFp3dCanopy);`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i}var ms=(i,e,t,n,r)=>{i.expandByPoint(new H(e,n,t)),i.expandByPoint(new H(e,r,t))};function yp(i){let e=new en;for(let{floor:t,ty:n}of i){let r=t.elevation+n;for(let o of t.rooms)for(let[s,a]of o.points)ms(e,s,a,r,r+t.height);for(let o of t.outdoor??[]){let s=r+li(t)+(o.offset??0),a=s-(o.type==="pool"?0:o.slope??0),l=ai(o.type)&&o.height?o.height:Kr[o.type],c=s+(o.type==="pool"?.06:l);for(let[u,f]of o.points)ms(e,u,f,a,c)}for(let o of t.walls??[]){let s=r+Math.min(t.height,o.height??t.height);ms(e,o.a[0],o.a[1],r,s),ms(e,o.b[0],o.b[1],r,s)}}return e}function vp(i,e,t){let n=new en,r=i.elevation+t;for(let[o,s]of e.points)ms(n,o,s,r,r+(Xn(e)?e.height??i.height:i.height));return n}function rh(i,e,t,n,r,o=1){if(i.isEmpty())return 0;let s=i.getCenter(new H),a=new H(Math.sin(t)*Math.sin(e),Math.cos(t),Math.sin(t)*Math.cos(e)),l=new H(Math.cos(e),0,-Math.sin(e)),c=new H(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),u=Math.tan(r/2),f=u*Math.max(.01,n),h=0;for(let p of[i.min.x,i.max.x])for(let g of[i.min.y,i.max.y])for(let b of[i.min.z,i.max.z]){let _=new H(p,g,b).sub(s),m=_.dot(a);h=Math.max(h,m+Math.abs(_.dot(l))*o/f,m+Math.abs(_.dot(c))*o/u)}return h}function Mp(i,e,t,n,r=1){let o=i.getSize(new H),s=Math.max(.01,Math.min(o.x,o.z)),a=Math.max(o.x,o.z)/s>=2,l=-.6;return a&&t>=1.2&&(l=o.z>=o.x?-.95:-.35),{theta:l,radius:rh(i,l,e,t,n,r)}}function oh(i,e,t,n,r,o,s=8){if(i.isEmpty())return{radius:0,offset:new H};let a=Math.max(1,o.width),l=Math.max(1,o.height),c=-1+2*Math.max(0,o.left)/a,u=1-2*Math.max(0,o.right)/a,f=-1+2*Math.max(0,o.bottom)/l,h=1-2*Math.max(0,o.top)/l;if(c>=u||f>=h)return{radius:rh(i,e,t,n,r),offset:new H};let p=i.getCenter(new H),g=new H(Math.sin(t)*Math.sin(e),Math.cos(t),Math.sin(t)*Math.cos(e)),b=new H(Math.cos(e),0,-Math.sin(e)),_=new H(-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),m=Math.tan(r/2),y=m*Math.max(.01,n),M=[];for(let F of[i.min.x,i.max.x])for(let P of[i.min.y,i.max.y])for(let E of[i.min.z,i.max.z]){let D=new H(F,P,E).sub(p);M.push({x:D.dot(b),y:D.dot(_),near:D.dot(g)})}let v=F=>{let P=-1/0,E=1/0,D=-1/0,N=1/0;for(let O of M){let k=F-O.near;P=Math.max(P,O.x-u*y*k),E=Math.min(E,O.x-c*y*k),D=Math.max(D,O.y-h*m*k),N=Math.min(N,O.y-f*m*k)}return{x0:P,x1:E,y0:D,y1:N}},S=Math.max(...M.map(F=>F.near))+.1,w=F=>{let P=v(F);return P.x0<=P.x1&&P.y0<=P.y1},A=Math.max(S,s),x=Math.max(A,rh(i,e,t,n,r));for(;!w(x);)x*=2;for(let F=0;F<60;F++){let P=(A+x)/2;w(P)?x=P:A=P}let T=v(x),C=(T.x0+T.x1)/2,I=(T.y0+T.y1)/2;return{radius:x,offset:b.multiplyScalar(C).add(_.multiplyScalar(I))}}function mS(i,e){let t=Dt(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}function sh(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?mS(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function ah(i,e){let t=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let u=t.length/3,f=c.portrait===!1?10:6,h=c.portrait===!1?6:10,p=gS(c.id)%1e3/1e3;for(let b of us(l,c)){let[_,m,y,M]=b.corners.map(S=>[S[0]+l.n[0]*.006,S[1]+l.n[1]*.006-e,S[2]+l.n[2]*.006]),v=[[_,0,0],[m,1,0],[y,1,1],[M,0,1]];for(let S of[0,1,2,0,2,3]){let[w,A,x]=v[S];t.push(w[0],w[1],w[2]),n.push(A,x),r.push(f,h),o.push(p)}}let g=t.length/3-u;g&&s.push({id:c.id,start:u,count:g})}if(!t.length)return null;let a=new Qe;return a.setAttribute("position",new Ge(t,3)),a.setAttribute("uv",new Ge(n,2)),a.setAttribute("aCells",new Ge(r,2)),a.setAttribute("aPhase",new Ge(o,1)),a.setAttribute("aLevel",new Ge(new Float32Array(t.length/3),1)),{geometry:a,ranges:s}}function gs(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function lh(i){let e=new lt({transparent:!0,blending:Lt,depthWrite:!1,side:Mt});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function gS(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var Sp=["neon","blueprint","day"];function Tp(i){return Sp.indexOf(i)}var Yl={value:new H(.22,.88,1)},ql={value:0};function wp(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var _S=`
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
`;function Un(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=Yl,o.uniforms.uAccentOn=ql,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${_S}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}function $l(i){return i==="day"?Pi:Lt}var _s=.012,bS=.012;function Ap(i,e,t,n,r,o=[]){let s=[],a=[],l=[],c=[],u=(g,b,_,m,y,M,v)=>{for(let S of[g,b,_,g,_,m])s.push(S[0],S[1],S[2]),a.push(y[0],y[1],y[2]),l.push(M),c.push(v)};i.rooms.forEach((g,b)=>{if(g.points.length<3)return;let _=g.points.map(w=>w[0]),m=g.points.map(w=>w[1]),y=Math.min(..._),M=Math.min(...m),v=Math.max(1,Math.ceil((Math.max(..._)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){let x=y+(w+.5)*r,T=M+(A+.5)*r;if(!ut([x,T],g.points)||o.some(F=>ut([x,T],F)))continue;let C=y+w*r,I=M+A*r;u([C,_s,I],[C,_s,I+r],[C+r,_s,I+r],[C+r,_s,I],[0,1,0],b,-1)}});let f=i.rooms.length;for(let g of i.outdoor??[]){if(g.points.length<3||ai(g.type))continue;let b=Z0(i,g)+_s,_=g.points.map(w=>w[0]),m=g.points.map(w=>w[1]),y=Math.min(..._),M=Math.min(...m),v=Math.max(1,Math.ceil((Math.max(..._)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...m)-M)/r));for(let w=0;w<v;w++)for(let A=0;A<S;A++){if(!ut([y+(w+.5)*r,M+(A+.5)*r],g.points))continue;let x=y+w*r,T=M+A*r;u([x,b,T],[x,b,T+r],[x+r,b,T+r],[x+r,b,T],[0,1,0],f,-1)}}let h=Math.min(i.cut_height,i.height);e.forEach((g,b)=>{let _=Math.min(i.height,g.height??i.height),m=Math.min(h,_-.02),y=g.b[0]-g.a[0],M=g.b[1]-g.a[1],v=Math.hypot(y,M);if(v<.05)return;let S=[y/v,M/v],w=[-S[1],S[0]],A=t[b],x=xS(g,S,v,n),T=(F,P,E)=>[P,E,...F.filter(D=>D>P+.005&&D<E-.005)].sort((D,N)=>D-N).filter((D,N,O)=>N===0||D>O[N-1]+.005),C=T([m,(m+_)/2,...x.flatMap(F=>[F.y0+.01,F.y1-.01])],.02,_-.02),I=T(x.flatMap(F=>[F.s0,F.s1]),0,v);for(let F of[1,-1]){let P=F>0?g.roomLeft:g.roomRight,E=P?i.rooms.findIndex(k=>k.id===P):g.exterior?f:-1;if(E<0)continue;let D=(F>0?g.left:g.right)+bS,N=[w[0]*F,w[1]*F],O=(k,z)=>[g.a[0]+S[0]*k+N[0]*D,z,g.a[1]+S[1]*k+N[1]*D];for(let k=0;k<I.length-1;k++){let z=I[k+1]-I[k],G=Math.max(1,Math.ceil(z/r));for(let V=0;V<G;V++){let ie=I[k]+z/G*V,K=I[k]+z/G*(V+1),se=(ie+K)/2;for(let Q=0;Q<C.length-1;Q++){let he=C[Q],Y=C[Q+1];if(Y-he<.01)continue;let j=(he+Y)/2;if(x.some(me=>se>me.s0&&se<me.s1&&j>me.y0&&j<me.y1))continue;let fe=he>=h-1e-6?A:ar+A;u(O(ie,he),O(K,he),O(K,Y),O(ie,Y),[N[0],0,N[1]],E,fe)}}}}});let p=[];for(let g of n){if(g.opening.type!=="door")continue;let b=e.find(y=>Rp(y,g));if(!b||!b.roomLeft||!b.roomRight)continue;let _=i.rooms.findIndex(y=>y.id===b.roomLeft),m=i.rooms.findIndex(y=>y.id===b.roomRight);_<0||m<0||p.push({id:g.opening.id,a:_,b:m,x:g.start[0]+g.axis[0]*(g.width/2),y:Math.min(1.1,g.top*.55),z:g.start[1]+g.axis[1]*(g.width/2)})}return{pos:new Float32Array(s),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:p}}function Rp(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function xS(i,e,t,n){let r=[];for(let o of n){if(!Rp(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function yS(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function vS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Ep(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,u=a*a+l*l+c*c,f=Math.sqrt(u)||1e-6,h=vS(i),p=1/(1+u/(h*h)),g=p*Math.sqrt(p),b=Math.max(0,-(a*r+l*o+c*s)/f);return i.level*g*(.2+.8*b)*yS(i.kind,l/f)}function Cp(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((u,f)=>{let h=n[f]??.5;if(!(h<=.01))for(let[p,g]of[[u.a,u.b],[u.b,u.a]]){let b=[0,0,0];for(let m of e){if(m.room!==p)continue;let y=m.x-u.x,M=m.y-u.y,v=m.z-u.z,S=Math.hypot(y,M,v)||1,w=Ep(m,u.x,u.y,u.z,y/S,M/S,v/S);b[0]+=m.color[0]*w,b[1]+=m.color[1]*w,b[2]+=m.color[2]*w}let _=Math.max(b[0],b[1],b[2]);_<.01||r.push({x:u.x,y:u.y,z:u.z,color:[b[0]/_,b[1]/_,b[2]/_],level:Math.min(1,_*.9*(.35+.65*h)),kind:"wall",room:g})}});let o=new Map;for(let u of r){let f={...u,color:u.color.map(h=>Math.pow(h,1.5))};o.set(u.room,[...o.get(u.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let u=0;u<l.length;u++){let f=o.get(l[u]);if(!f)continue;let h=u*3,p=0,g=0,b=0;for(let _ of f){let m=Ep(_,s[h],s[h+1],s[h+2],a[h],a[h+1],a[h+2]);p+=_.color[0]*m,g+=_.color[1]*m,b+=_.color[2]*m}c[h]=1-Math.exp(-p*t*1.6),c[h+1]=1-Math.exp(-g*t*1.6),c[h+2]=1-Math.exp(-b*t*1.6)}return c}function Ip(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&ut([e,t],r.points));return n<0?i.rooms.length:n}function Pp(i,e){return i&&e>=0&&e<i.length?i[e]:e}var Kl={open:0,open2:0,tilt:0,tilt2:0,cover:null},Fp=2043986,Lp=2769520,MS=2242399,ch=1845831,SS=1450554,fi=16758087,TS=1.2,wS=1.5,ES=1846349,AS=2572395,RS=1120816,CS=1845831,Dp=5995775,Up=9085695,ro=He(3662079,.08),IS=.2;function Zl(i,e,t,n,r,o,s,a,l,c,u){let f=(p,g,b)=>e(p,g,b),h=[[f(t,r,a),f(n,r,a),f(n,o,a),f(t,o,a),c],[f(t,r,s),f(n,r,s),f(n,o,s),f(t,o,s),He(l.getHex(),.6)],[f(t,o,s),f(n,o,s),f(n,o,a),f(t,o,a),l],[f(t,r,s),f(n,r,s),f(n,r,a),f(t,r,a),He(l.getHex(),.85)],[f(t,r,s),f(t,o,s),f(t,o,a),f(t,r,a),He(l.getHex(),.92)],[f(n,r,s),f(n,o,s),f(n,o,a),f(n,r,a),He(l.getHex(),.92)]];for(let[p,g,b,_,m]of h)i.tri(p,g,b,m,m,m,void 0,u),i.tri(p,b,_,m,m,m,void 0,u)}function at(i,e,t,n,r,o,s,a,l,c,u,f){if(a<=u+1e-6)return Zl(i,e,t,n,r,o,s,a,l,c,Xe);if(s>=u-1e-6)return Zl(i,e,t,n,r,o,s,a,l,c,f);Zl(i,e,t,n,r,o,s,u,l,c,Xe),Zl(i,e,t,n,r,o,u,a,l,c,f)}function Vi(i,e,t,n,r,o,s,a,l,c,u=0){let f=(h,p,g)=>{let b=v=>u?(s-v)/u:.5,_=e(t,r,h),m=e(n,r,h),y=e(n,r,p),M=e(t,r,p);i.tri(_,m,y,a,a,a,[0,b(h),1,b(h),1,b(p)],g),i.tri(_,y,M,a,a,a,[0,b(h),1,b(p),0,b(p)],g)};s<=l+1e-6?f(o,s,Xe):o>=l-1e-6?f(o,s,c):(f(o,l,Xe),f(l,s,c))}function PS(i,e,t,n,r,o,s,a,l,c){let u=e(t,r,s),f=e(n,r,s),h=e(n,o,s),p=e(t,o,s),g=0,b=(o-r)/c;i.tri(u,f,h,a,a,a,[0,g,1,g,1,b],l),i.tri(u,h,p,a,a,a,[0,g,1,b,0,b],l)}function Np(i,e,t){let n=new ct,r=new ct,o=new ct(!0),s=new ae(Fp),a=new ae(Lp),l=[],c=[],u=[];for(let f of i){let h=n.count,p=r.count,g=o.count,b=e.get(f.opening.id)??Kl,_=f.width,{sill:m,top:y,bucket:M}=f,v=(x,T,C)=>[f.start[0]+f.axis[0]*x+f.toRoom[0]*T,C,f.start[1]+f.axis[1]*x+f.toRoom[1]*T],S=(f.faceRoom-f.faceOut)/2,w=f.opening.mark==="closed",A=f.opening.type==="door"&&rr(f.opening,f.exterior)==="passage";if(f.opening.type==="door"&&!A||f.opening.type==="garage"){let x=-f.faceOut-.012,T=f.faceRoom+.012,C=f.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),I=C?He(fi,.8):new ae(Fp),F=C?He(fi,1):new ae(Lp);at(n,v,-.045,.02,x,T,0,y+.045,I,F,t,M),at(n,v,_-.02,_+.045,x,T,0,y+.045,I,F,t,M),at(n,v,.02,_-.02,x,T,y-.02,y+.045,I,F,t,M)}if(f.opening.type==="door"){let x=rr(f.opening,f.exterior),T=Pd(x),C=f.opening.swing==="out"?-1:1,I=C>0?f.faceRoom:-f.faceOut,F=f.opening.leaves===2,P=.02,E=_-.02,D=Id(_,x,f.hingeAtStart,f.opening);if(D){for(let[z,G]of D.panels)at(n,v,z,z+.04,S-.03,S+.03,.02,y-.02,s,a,t,M),at(n,v,G-.04,G,S-.03,S+.03,.02,y-.02,s,a,t,M),at(n,v,z,G,S-.03,S+.03,.02,.1,s,a,t,M),Vi(r,v,z+.04,G-.04,S,.1,y-.02,ro,t,M);P=D.x0,E=D.x1}let N=F?(E-P)/2-.004:E-P,O=T?.06:.04;T&&(at(n,v,.02,_-.02,-f.faceOut-.02,f.faceRoom,0,.02,new ae(ch),a,t,M),f.exterior&&at(n,v,_/2-.08,_/2+.08,-f.faceOut-.1,-f.faceOut,y+.1,y+.17,He(fi,.55),He(fi,.85),t,Xe));let k=A?[]:[[f.hingeAtStart,b.open]];F&&!A&&k.push([!f.hingeAtStart,b.open2??0]);for(let[z,G]of k){let V=Math.min(1,Math.max(0,G)),ie=x==="sliding"?0:V*wS,K=x==="sliding"?V*N:0,se=(rt,Ve,Ke)=>{let ot=rt*Math.cos(ie)-Ve*Math.sin(ie)-K,je=I+C*(Ve*Math.cos(ie)+rt*Math.sin(ie)+(K?.05:0));return v(z?P+ot:E-ot,je,Ke)},Q=V>.05?Xe:M,he=w?!!b.sensed&&V<.05:V>.9,Y=he?He(fi,.7):new ae(T?RS:ES),j=he?He(fi,.9):new ae(T?CS:AS);x==="glass"?(at(n,se,0,.05,-O,0,.01,y-.01,Y,j,t,Q),at(n,se,N-.05,N,-O,0,.01,y-.01,Y,j,t,Q),at(n,se,.05,N-.05,-O,0,.01,.12,Y,j,t,Q),at(n,se,.05,N-.05,-O,0,y-.08,y-.01,Y,j,t,Q),Vi(r,se,.05,N-.05,-O/2,.12,y-.08,ro,t,Q)):at(n,se,0,N,-O,0,.01,y-.01,Y,j,t,Q),x==="front_glass"?Vi(r,se,.12,N-.12,.001,y*.55,y-.18,ro,t,Q):T&&Vi(r,se,.1,.18,.001,.3,y-.3,ro,t,Q);let fe=Math.min(1.05,y*.5),me=T?.3:.012,pe=T?N-.11:N-.16,Ae=T?N-.08:N-.05;at(n,se,pe,Ae,.004,.05,fe-me,fe+me,new ae(Dp),new ae(Up),t,Q),at(n,se,pe,Ae,-O-.05,-O-.004,fe-me,fe+me,new ae(Dp),new ae(Up),t,Q)}}else if(f.opening.type==="garage"){let x=Math.min(1,Math.max(0,b.cover??1)),T=new ae(13951231),C=f.faceRoom-.03,I=y*(1-x);x>.01&&Vi(o,v,.02,_-.02,C,I,y,T,t,M,.5);let F=(1-x)*y;F>.01&&PS(o,v,.02,_-.02,C,C+F,y+.03,T,M,.5)}else if(rr(f.opening,f.exterior)==="glass_wall"){at(n,v,0,.04,S-.025,S+.025,m,y,s,a,t,M),at(n,v,_-.04,_,S-.025,S+.025,m,y,s,a,t,M),at(n,v,.04,_-.04,S-.025,S+.025,m,m+.03,s,a,t,M),at(n,v,.04,_-.04,S-.025,S+.025,y-.04,y,s,a,t,M);let C=Math.max(1,Math.round((_-2*.04)/.9)),I=(_-2*.04)/C;for(let F=1;F<C;F++){let P=.04+F*I;at(n,v,P-.02,P+.02,S-.025,S+.025,m+.03,y-.04,s,a,t,M)}for(let F=0;F<C;F++){let P=.04+F*I+(F?.02:0),E=.04+(F+1)*I-(F<C-1?.02:0);Vi(r,v,P,E,S,m+.03,y-.04,ro,t,M)}}else{at(n,v,0,.06,S-.035,S+.035,m,y,s,a,t,M),at(n,v,_-.06,_,S-.035,S+.035,m,y,s,a,t,M),at(n,v,.06,_-.06,S-.035,S+.035,m,m+(m>.05?.06:.03),s,a,t,M),at(n,v,.06,_-.06,S-.035,S+.035,y-.06,y,s,a,t,M),m>.3&&(at(n,v,-.04,_+.04,S+.035,f.faceRoom+.07,m-.03,m,new ae(ch),a,t,M),f.exterior&&at(n,v,-.03,_+.03,-f.faceOut-.06,S-.035,m-.04,m-.02,new ae(ch),a,t,M));let C=.055,I=m+(m>.05?.06:.03),F=y-.06,P=S+.035,E=S+.035+.06,N=f.opening.leaves===2?[{atStart:f.hingeAtStart,x0:f.hingeAtStart?.06:_/2,x1:f.hingeAtStart?_/2:_-.06,open:b.open,tilt:b.tilt},{atStart:!f.hingeAtStart,x0:f.hingeAtStart?_/2:.06,x1:f.hingeAtStart?_-.06:_/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:f.hingeAtStart,x0:.06,x1:_-.06,open:b.open,tilt:b.tilt}];for(let O of N){let k=O.open>.02||O.tilt>.02,z=w?!!b.sensed&&!k:k,G=z?He(fi,.75):new ae(MS),V=z?He(fi,.95):a,ie=O.x0,K=O.x1,se=K-ie,Q=O.open*TS,he=O.tilt*IS,Y=(fe,me,pe)=>{let Ae=pe-I,rt=me+Ae*Math.sin(he),Ve=I+Ae*Math.cos(he),Ke=fe*Math.cos(Q)-(rt-P)*Math.sin(Q);rt=P+(rt-P)*Math.cos(Q)+fe*Math.sin(Q);let ot=O.atStart?ie+Ke:K-Ke;return v(ot,rt,Ve)},j=Q>.05?Xe:M;if(at(n,Y,0,C,P,E,I,F,G,V,t,j),at(n,Y,se-C,se,P,E,I,F,G,V,t,j),at(n,Y,C,se-C,P,E,I,I+C,G,V,t,j),at(n,Y,C,se-C,P,E,F-C,F,G,V,t,j),Vi(r,Y,C,se-C,(P+E)/2,I+C,F-C,z?He(fi,.16):ro,t,j),rr(f.opening,f.exterior)==="bars"){let fe=(I+F)/2,me=(P+E)/2;at(n,Y,C,se-C,me-.012,me+.012,fe-.012,fe+.012,G,V,t,j),at(n,Y,se/2-.012,se/2+.012,me-.012,me+.012,I+C,F-C,G,V,t,j)}}}if(b.cover!==null){let x=-f.faceOut,T=y+.2;at(n,v,-.05,_+.05,x-.15,x,y,T,new ae(SS),a,t,M);let C=Math.min(1,Math.max(0,b.cover));if(C>.01){let I=y-C*(y-m);Vi(o,v,0,_,x-.07,I,y,new ae(16777215),t,M,.045)}}l.push({id:f.opening.id,start:h,end:n.count}),c.push({id:f.opening.id,start:p,end:r.count}),u.push({id:f.opening.id,start:g,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:u}}var FS=.3,Op=2.6;function Bp(i,e=.32,t=.22,n=[]){let r=i.map(S=>S[0]),o=i.map(S=>S[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),u=c-l>=a-s,f=t*.7071,h=S=>{let w=[S,[S[0]+t,S[1]],[S[0]-t,S[1]],[S[0],S[1]+t],[S[0],S[1]-t]],A=[...w,[S[0]+f,S[1]+f],[S[0]-f,S[1]+f],[S[0]+f,S[1]-f],[S[0]-f,S[1]-f]];return w.every(x=>ut(x,i))&&!n.some(x=>A.some(T=>ut(T,x)))},p=(S,w)=>h(u?[S,w]:[w,S]),g=(S,w)=>{let A=Math.ceil(Math.hypot(w[0]-S[0],w[1]-S[1])/.05);for(let x=1;x<A;x++)if(!h([S[0]+(w[0]-S[0])*x/A,S[1]+(w[1]-S[1])*x/A]))return!1;return!0},[b,_,m,y]=u?[s,a,l,c]:[l,c,s,a],M=[],v=!0;for(let S=b+t;S<=_-t+1e-6;S+=e){let w=null,A=null,x=.05;for(let F=m;F<=y+1e-6;F+=x)if(p(S,F)&&(A??=F),(!p(S,F)||F+x>y+1e-6)&&A!==null){let P=p(S,F)?F:F-x;(!w||P-A>w[1]-w[0])&&(w=[A,P]),A=null}if(!w||w[1]-w[0]<.2)continue;let T=F=>{let[P,E]=F?w:[w[1],w[0]];return[u?[S,P]:[P,S],u?[S,E]:[E,S]]},C=T(v),I=M[M.length-1];if(I&&n.length&&!g(I,C[0])){let F=T(!v);if(!g(I,F[0]))continue;C=F,v=!v}M.push(C[0],C[1]),v=!v}return M}function hh(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var uh=i=>Math.atan2(Math.sin(i),Math.cos(i));function zp(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=uh(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Op*t),!0)}let a=Math.atan2(r,o),l=uh(a-i.heading);if(i.heading=uh(i.heading+Math.sign(l)*Math.min(Math.abs(l),Op*t)),Math.abs(l)<.35){let c=Math.min(s,FS*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var oo=null,kp=new Map;function LS(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=kp.get(r);if(o)return o;t&&Ml(t),oo??=new $r({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),oo.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),oo.setSize(e,e,!1),oo.setClearColor(0,0);let s=new ct,a=new Vt,l=Dt(i.type);if(l?.light)Ol(s,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Jl(s,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let y={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};if(Nl(s,a,new ct,y),i.type==="robot_vacuum"){let M=(w,A,x,T,C,I,F)=>{let P=Array.from({length:20},(E,D)=>{let N=D/20*Math.PI*2;return[w+Math.cos(N)*x,A+Math.sin(N)*x]});mt(s,P,T,C,I,F,{aoFrom:0,bottom:!1})},v=i.d*.28,S=Math.min(i.w*.4,i.d*.27);M(0,v,S,.012,.08,2371657,3424863),M(0,v,S*.32,.08,.1,3820138,5070726)}if(i.type==="fan_ceiling"||i.type==="fan_ceiling_light"||i.type==="fan_wall"||i.type==="fan_floor"){let M=s.p.length,v=a.p.length;as(s,a,i.type,i.w,i.d,i.h,i.variant??null);let S=i.type==="fan_ceiling"||i.type==="fan_ceiling_light"?i.h*.18:i.type==="fan_wall"?i.h*.5:i.h*.78,w=0;for(let A=M+1;A<s.p.length;A+=3)s.p[A]+=S;for(let A=M+2;A<s.p.length;A+=3)s.p[A]+=w;for(let A=v+1;A<a.p.length;A+=3)a.p[A]+=S;for(let A=v+2;A<a.p.length;A+=3)a.p[A]+=w;i.type==="fan_ceiling_light"&&Jl(s,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:null,lamp:"fan"},i.h,16758087)}}let c=new Zi,u=new Ye(s.geometry(),new lt({vertexColors:!0,color:new ae(n,n,n)})),f=new yn(a.geometry(),new xn({vertexColors:!0,color:new ae(n*1.8,n*1.8,n*1.8)}));c.add(u,f);let h=new en().setFromObject(c),p=h.getCenter(new H),g=new oi(-1,1,1,-1,.01,100);g.position.copy(p).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),g.lookAt(p),g.updateMatrixWorld();let b=.05;for(let y of[h.min.x,h.max.x])for(let M of[h.min.y,h.max.y])for(let v of[h.min.z,h.max.z]){let S=new H(y,M,v).applyMatrix4(g.matrixWorldInverse);b=Math.max(b,Math.abs(S.x),Math.abs(S.y))}let _=b*1.12;g.left=-_,g.right=_,g.top=_,g.bottom=-_,g.updateProjectionMatrix(),oo.render(c,g);let m=oo.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),f.geometry.dispose(),f.material.dispose(),kp.set(r,m),m}var Gp={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},DS=2.4,US=1.4,NS=.22,Hp=140,ph=32,OS=500,Wp=160,Xp=33,Yp=.028,BS=.09,Oe=2767456,zS=1911110,kS=1,qp=new Set(["ceiling","downlight","spot","panel","round_panel","pendant","strip","fan"]),fh=450,$p=125,VS=.08,mh={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03],fan:[1.4,1.4,.4],column:[.12,.12,1.45],tv_bars:[.65,.16,.38],orb_table:[.28,.28,.24],portable:[.24,.24,.26],ambient:[.2,.2,.2],cube:[.26,.26,.24],round_panel:[.42,.42,.045],garden_set:[.65,.18,.32],wall_updown:[.14,.12,.32]},GS=new ae(1714765);function HS(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var gh=class{host;options;renderer;scene=new Zi;camera=new Kt(38,1,.1,400);controls;labels;root=new Jt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];fanRotors=new Map;devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new yn(new Qe,new xn({color:10471679,transparent:!0,opacity:.4,blending:Lt,depthWrite:!1}));snow=new Br(new Qe,new Qi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ye(new To(1,28),new lt({color:16767370,transparent:!0,opacity:0,blending:Lt,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=WS(),this.blindTexture=YS(),this.haloTexture=ZS(),this.ground=new Ye(new Ei(1,1),new lt({transparent:!0,blending:Lt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.building&&this.fit(350),this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(e){Ml(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(l=>l.floor.rooms.some(c=>c.id===e)),n=t?.floor.rooms.find(l=>l.id===e);if(!t||!n)return;let r=vp(t.floor,n,t.ty),o=.72,s=this.controls.view.theta,a=oh(r,s,o,this.camera.aspect,this.camera.fov*it,this.cameraFrame(),4);this.controls.flyTo({target:r.getCenter(new H).add(a.offset),radius:a.radius,phi:o})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e;let t=new Set(e.filter(r=>r.active&&r.fanMotor!==!1&&r.furnitureId&&this.fanRotors.has(r.furnitureId)).map(r=>r.furnitureId));for(let[r,o]of this.fanRotors)o.active=t.has(r);this.labelsDirty=!0,this.effectFloors=new Set(e.filter(r=>r.effect&&r.glow).map(r=>r.floorId)),this.deviceFloor=new Map(e.map(r=>[r.id,r.floorId]));let n=new Set;for(let r of e){n.add(r.id);let o=this.devicePins.get(r.id);o||(o={el:this.makeDevicePin(r.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r.id,o),this.labels.append(o.el));let s=o.el;o.icon!==r.icon&&(o.icon=r.icon,s.querySelector(".fp3d-dev-icon").innerHTML=r.icon),o.text!==r.text&&(o.text=r.text,s.querySelector(".fp3d-dev-text").textContent=r.text);let a=r.caption??"";o.caption!==a&&(o.caption=a,s.querySelector(".fp3d-dev-name").textContent=a);let l=r.power!==null&&r.power!==void 0&&r.power>=1?r.powerText??`${Math.round(r.power)} W`:"";o.watt!==l&&(o.watt=l,s.querySelector(".fp3d-dev-watt").textContent=l);let c=`${r.name}: ${r.text}`;o.label!==c&&(o.label=c,s.title=r.name,s.setAttribute("aria-label",c)),o.active!==r.active&&(o.active=r.active,s.classList.toggle("fp3d-dev-on",r.active)),o.unavailable!==r.unavailable&&(o.unavailable=r.unavailable,s.classList.toggle("fp3d-dev-na",r.unavailable));let u=r.glow?`rgb(${r.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";o.glow!==u&&(o.glow=u,u?s.style.setProperty("--fp3d-glow",u):s.style.removeProperty("--fp3d-glow"))}for(let[r,o]of this.devicePins)n.has(r)||(o.el.remove(),this.devicePins.delete(r));for(let r of this.floors)this.buildGlow(r),this.buildLamps(r);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])gs(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&gs(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Jt;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=n.floor.elevation+.03;for(let c of o)if(c.playing)for(let u=0;u<3;u++){let f=new Ye(new Co(.92,1,48),new lt({color:3662079,transparent:!0,opacity:0,blending:Lt,depthWrite:!1,side:Mt}));f.rotation.x=-Math.PI/2,f.position.set(c.x,s+u*.002,c.z),f.userData={sound:!0,phase:u/3,level:c.level},f.frustumCulled=!1,r.add(f)}let a=[],l=new Set;for(let c of o)for(let u of c.members){let f=o.find(p=>p.id===u);if(!f||f===c)continue;let h=[c.id,f.id].sort().join("|");l.has(h)||(l.add(h),a.push(c.x,s+.02,c.z,f.x,s+.02,f.z))}if(a.length){let c=new Qe;c.setAttribute("position",new Ge(a,3));let u=new yn(c,new xn({color:3662079,transparent:!0,opacity:.45,blending:Lt,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=dh(r),s=Zp(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=wp(e),n=t?1:0;n===ql.value&&(!t||Yl.value.equals(new H(...t)))||(ql.value=n,t&&Yl.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=Tp(e);let t=$l(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.placeSky(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new ae(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new xo(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let u=o.x0+Math.random()*(o.x1-o.x0),f=o.y0+Math.random()*(o.y1-o.y0),h=o.z0+Math.random()*(o.z1-o.z0);s.set([u,f,h],c*3),n&&s.set([u,f-.45,h],c*3+3)}e.geometry.dispose();let l=new Qe;l.setAttribute("position",new Ge(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let u=0;u<l.length;u+=6){let f=l[u+1]-c,h=l[u]+s*n;f<r.y0&&(f+=o,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f,l[u+3]=h-s*.05,l[u+4]=f-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let u=0;u<l.length;u+=3){let f=l[u+1]-(.9+.6*t.snow)*n,h=l[u]+(s+Math.sin(c+u)*.4)*n;f<r.y0&&(f+=o,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=f}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*it,s=(r?e.azimuth+180:e.azimuth)*it,a=Math.max(10,Math.abs(e.elevation))*it,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),f=new H(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(f,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/Wp),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}stepFans(e){let t=!1;for(let n of this.fanRotors.values()){if(!n.active)continue;let r=n.type==="fan_ceiling"||n.type==="fan_ceiling_light",o=e*(r?.0048:.009);r?n.rotor.rotation.y=(n.rotor.rotation.y-o)%(Math.PI*2):n.rotor.rotation.z=(n.rotor.rotation.z-o)%(Math.PI*2),t=!0}return t}buildFridges(e){let t=new ct;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Xu(t,n,mn(e.floor,n),r?.l??0,r?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view;return{theta:e.theta,phi:e.phi,radius:e.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&HS();this.lowQuality=t,this.applyWeather(),this.highQuality=e==="high";let n=new $r({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ct,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Xl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&"roomId"in n&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let t of e.screenPics.values())t.mesh.material.dispose(),t.texture?.dispose();e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map,this.fanRotors=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let f=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,f.left+f.width/2-h.left,f.top+f.height/2-h.top)},OS)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let f=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=Ap(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes),r=$S(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}e.lightSurface=n;let o=new Qe;o.setAttribute("position",new Ge(n.pos,3)),o.setAttribute("color",new Ge(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Ge(n.fold,1));let s=new Ki(new Uint32Array(n.pos.length/3),1);s.setUsage(tu),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=o,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=e.floor.height,n=[];for(let r of this.devices){let o=this.glowOf(r);if(r.floorId!==e.floor.id||!o)continue;let s=Ip(e.floor,r.x,r.z),a=Pp(e.lightZones,s),[l,,c]=r.size??(r.lamp?mh[r.lamp]:[.3,.3,.3]),u=r.base??0,f={ceiling:[t-.12,"ceiling"],downlight:[t-.03,"spot"],spot:[t-c,"spot"],panel:[t-.05,"ceiling"],pendant:[Math.max(.5,t-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<kS?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"],fan:[u+c*.08,"ceiling"],column:[u+c*.55,"omni"],tv_bars:[u+c*.55,"omni"],orb_table:[u+c*.55,"omni"],portable:[u+c*.55,"omni"],ambient:[u+c,"up"],cube:[u+c*.55,"omni"],round_panel:[t-.05,"ceiling"],garden_set:[u+c,"up"],wall_updown:[u+c/2,"wall"]},[h,p]=r.lamp?f[r.lamp]:[r.y,"omni"],g=r.lightY??h,b=o.color;if(r.lamp==="strip"){let _=(r.rotation??0)*it,m=!!r.upright||Math.abs(r.roll??0)>45;for(let y of[-1/3,0,1/3])r.upright?n.push({x:r.x,y:u+l*(.5+y),z:r.z,color:b,level:o.level*.55,kind:"omni",room:a}):n.push({x:r.x+Math.cos(_)*l*y,y:g,z:r.z+Math.sin(_)*l*y,color:b,level:o.level*.55,kind:m?"omni":p,room:a})}else n.push({x:r.x,y:g,z:r.z,color:b,level:o.level,kind:p,room:a})}return n}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),r=t.doors.map(f=>{let h=e.geo.openings.find(g=>g.opening.id===f.id);if(h&&rr(h.opening,h.exterior)==="passage")return 1;let p=e.openings.get(f.id);return p?Math.max(p.open,p.open2??0):.5}),o=n.map(f=>`${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.kind},${f.level.toFixed(3)},${f.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(f=>f.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length||this.roomTint){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=Cp(t,n,.42,r);a.array.set(l),a.needsUpdate=!0;let c=s.index.array,u=0;for(let f=0;f<l.length/18;f++){let h=!1;for(let p=f*18;p<f*18+18&&!h;p++)h=l[p]>.004;if(h)for(let p=0;p<6;p++)c[u++]=f*6+p}s.index.needsUpdate=!0,s.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:Un(new lt({vertexColors:!0}),this.themeUniform),pattern:XS(this.patternTexture),wall:Un(hi(new lt({vertexColors:!0}),e,"solid"),this.themeUniform),glassWall:hi(new lt({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),coveredRoof:Un(hi(new lt({vertexColors:!0,transparent:!0,depthWrite:!1,side:Mt}),e,"roof"),this.themeUniform),shadow:new lt({vertexColors:!0,blending:Uo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Un(hi(new xn({vertexColors:!0,transparent:!0,blending:$l(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:hi(new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:Un(hi(new lt({vertexColors:!0,side:Mt}),e),this.themeUniform),glass:hi(new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt}),e),blinds:Un(hi(new lt({map:this.blindTexture,vertexColors:!0,side:Mt}),e),this.themeUniform),flow:qS(this.flowTime),solarLive:lh(this.flowTime),lamps:Un(new lt({vertexColors:!0}),this.themeUniform),halos:new Qi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1}),cones:new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt}),screens:new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt})}}rebuild(){let e=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),t=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=ju(n)?.id===o.id?s.filter(Q=>Q.face===Qu).map(Q=>({field:Q,face:tp(n,Q)})):[],l=s.filter(Q=>Q.face.startsWith(`wall:${o.id}:`));if(l.length){let Q=new Map(ep(n,o.id).map(he=>[he.key,he]));for(let he of l){let Y=Q.get(he.face);Y&&a.push({field:he,face:Y})}}let u=(n.settings.roof.sections??[]).some(Q=>!Q.open&&Q.base<o.elevation+o.height-.05)?(Q,he)=>{let Y=Gd(n,Q,he);return Y===null?null:Y-o.elevation}:void 0,f=gp(sh(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,_p(n.floors,o),a,u),h={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(h),g=new Jt,b=new Ye(f.floor,p.floor),_=new Ye(f.shadow,p.shadow);_.renderOrder=1;let m=new Ye(f.floor,p.pattern);m.renderOrder=2;let y=new Ye(new Qe,p.glow);y.renderOrder=3,y.visible=!1;let M=new Ye(new Qe,p.frames),v=new Ye(new Qe,p.blinds),S=new Ye(new Qe,p.glass);S.renderOrder=4;let w=new Ye(new Qe,p.lamps);w.visible=!1;let A=new Ye(new Qe,p.cones);A.visible=!1,A.renderOrder=3;let x=new Br(new Qe,p.halos);x.visible=!1,x.renderOrder=7;let T=new Ye(new Qe,p.cones);T.visible=!1,T.renderOrder=7;let C=new Ye(new Qe,p.cones);C.visible=!1,C.renderOrder=7;let I=new Ye(new Qe,p.lamps);I.visible=!1;let F=new Ye(new Qe,p.screens);F.visible=!1,F.renderOrder=5;let P=new Ye(new Qe,p.flow);P.renderOrder=5,P.frustumCulled=!1;let E=ah(a,o.elevation),D=E?new Ye(E.geometry,p.solarLive):null;D&&(D.renderOrder=6,gs(E,this.solarLevels));for(let Q of[M,v,S])Q.frustumCulled=!1;let N=new Ye(f.walls,p.glassWall),O=new Ye(f.walls,p.coveredRoof),k=new Ye(f.walls,p.wall);N.renderOrder=6,O.renderOrder=5,g.add(b,_,m,y,k,new yn(f.lines,p.lines),M,v,S,P,w,A,x,T,C,I,F,O,N,...D?[D]:[]);for(let Q of o.furniture){if(Q.type!=="fan_ceiling"&&Q.type!=="fan_ceiling_light"&&Q.type!=="fan_wall"&&Q.type!=="fan_floor")continue;let he=new ct,Y=new Vt;as(he,Y,Q.type,Q.w,Q.d,Q.h,Q.variant);let j=new Jt;j.add(new Ye(he.geometry(),p.wall),new yn(Y.geometry(),p.lines));let fe=new Jt,me=Q.rotation*it;fe.position.set(Q.x,mn(o,Q),Q.z),fe.rotation.y=-me,j.position.set(0,Q.type==="fan_ceiling"||Q.type==="fan_ceiling_light"?Q.h*.18:Q.type==="fan_wall"?Q.h*.5:Q.h*.78,0),fe.add(j),g.add(fe);let pe=this.devices.some(Ae=>Ae.furnitureId===Q.id&&Ae.active);this.fanRotors.set(Q.id,{rotor:j,type:Q.type,active:pe})}this.root.add(g);let z=document.createElement("button");z.className="fp3d-pin fp3d-pin-floor",z.dataset.floor=o.id;let G=document.createElement("b");G.textContent=o.name||"\u2013";let V=document.createElement("span");V.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",z.append(G,V),z.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(z);let ie=e.get(o.id),K=[],se=null;for(let Q of o.rooms){let he=document.createElement("button");he.className="fp3d-pin",he.dataset.room=Q.id,he.dataset.floor=o.id,this.fillRoomPin(he,Q.name,this.roomInfo.get(Q.id)),he.addEventListener("click",()=>this.options.onRoomTap?.(o.id,Q.id)),this.labels.append(he);let[Y,j]=Fd(Q.points);K.push({pin:he,room:Q,cx:Y,cz:j});for(let[fe,me]of Q.points)se??={x0:fe,x1:fe,z0:me,z1:me},se.x0=Math.min(se.x0,fe),se.x1=Math.max(se.x1,fe),se.z0=Math.min(se.z0,me),se.z1=Math.max(se.z1,me)}this.floors.push({floor:o,rank:r.indexOf(o),group:g,geo:f,floorMesh:b,shadowMesh:_,patternMesh:m,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:S,blindsMesh:v,flowMesh:P,solarMesh:D,solarLive:E,lampMesh:w,sunMesh:A,sunSig:"",haloMesh:x,coneMesh:T,trailMesh:C,fridgeMesh:I,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:k,screenMesh:F,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:se,roomPins:K,labelSize:null,materials:p,mask:h,openings:new Map,y:ie?.y??0,o:ie?.o??1,ty:0,to:1,appliedO:-1,label:z})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=t.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Kl);this.buildOpenings(o),this.buildFlows(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(f=>f.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?cp(this.building,this.roofWindows):[];if(!e.length)return;let t=new Map(no(this.building).map(f=>[f.key,f])),n=this.building.settings.roof?.solar??[],r=lh(this.flowTime),o=[],s=new Jt,a=Un(new lt({vertexColors:!0,transparent:!0,side:Mt}),this.themeUniform),l=Un(new xn({vertexColors:!0,transparent:!0,blending:$l(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Un(new lt({vertexColors:!0,transparent:!0,side:Mt,depthWrite:!1}),this.themeUniform),u=e.map(f=>{let h=new Jt;h.add(new Ye(f.solid.geometry(),a),new yn(f.lines.geometry(),l)),f.glass.count&&h.add(new Ye(f.glass.geometry(),c));let p=n.flatMap(b=>{let _=t.get(b.face);return _&&(_.section?f.sections?.includes(_.section):f===e[0])?[{face:_,field:b}]:[]}),g=ah(p,f.floor.elevation+f.base);if(g){let b=new Ye(g.geometry,r);b.renderOrder=9,h.add(b),o.push(g),gs(g,this.solarLevels)}return h.renderOrder=8,s.add(h),{group:h,floorId:f.floor.id,base:f.base,lift:f.lift!==!1}});s.renderOrder=8,this.scene.add(s),this.roof={group:s,parts:u,solid:a,lines:l,glass:c,live:r,lives:o},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-e/Hp),s=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let a of t.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*US:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.live.opacity=this.roofO,this.roofO!==s&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:NS)):r=this.explode?n.rank*DS:0,n.ty=r,n.to=o,e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.coveredRoof.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/Hp);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/Wp);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??Kl,c=(h,p)=>(h??null)===(p??null)||typeof h=="number"&&typeof p=="number"&&Math.abs(h-p)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},f=!1;for(let h of["open","open2","tilt","tilt2"]){let p=l[h]??0,g=a[h]??0,b=p-g;Math.abs(b)<.003?u[h]=p:(u[h]=g+b*n,f=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,f=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(s,u),o=!0),t||=f}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new ae(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*VS+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=t)return 0;let h=f-t,p=h>fh?.5+.5*Math.sin(h/140):h/fh;return Math.round(p*10)/10},r=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,f)=>`${n(u.id)},${s[f]?`${s[f].level.toFixed(3)},${s[f].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let u=new ct,f=[],h=[],p=new Map,g=e.floor.height;for(let b of r){let _=b.lamp==="strip"?(b.base??g)>Math.min(e.floor.cut_height,g):b.lamp?qp.has(b.lamp):b.model==="camera_ceiling";if(!b.lamp&&!b.model||_&&this.wallMode==="cut")continue;let m=u.count,y=b.pack?Dt(b.pack):void 0,[M,v,S]=b.size??[.3,.3,.3];b.model?W0(u,b.model,b.x,b.model==="camera_ceiling"?g:b.y,b.z,b.rotation??0):y?Ol(u,y,{x:b.x,z:b.z,rotation:b.rotation??0,w:M,d:v,h:S,mirror:b.mirror},b.base??0,65280):Jl(u,{...b,lamp:b.lamp},g,65280),p.set(b.furnitureId??b.id,{start:m,end:u.count}),b.pickable!==!1&&f.push({id:b.id,start:m,end:u.count}),b.furnitureId&&h.push({id:b.furnitureId,start:m,end:u.count})}e.lampTris=f,e.lampFurnTris=h,e.lampRanges=p,e.lampShade=wd(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,f)=>{let h=e.lampRanges.get(u.furnitureId??u.id);if(!h)return;let p=s[f],g=p?.55+.45*p.level:0,b=p?new ae(...p.color.map(y=>Math.min(1,y*g))):new ae(zS),_=n(u.id);_>0&&b.lerp(new ae(1,1,1),.7*_);let m=new ae(b.getHex());Ed(c,e.lampShade,h,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.sun,n=(this.building?.settings.north??0)*it,r=this.weather?.cloud??0,o=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(o===e.sunSig)return;e.sunSig=o;let s=new ct;if(t&&t.elevation>2&&r<.97){let a=Math.min(1,t.elevation/12)*(1-.8*r),l=t.elevation*it,c=t.azimuth*it,u=[Math.sin(n+c),-Math.cos(n+c)],f=1/Math.tan(l);for(let h of e.geo.openings){if(h.opening.type!=="window"||!h.exterior)continue;let p=[-h.toRoom[0],-h.toRoom[1]],g=p[0]*u[0]+p[1]*u[1];if(g<.05)continue;let b=e.openings.get(h.opening.id),_=h.top-(b?.cover??0)*(h.top-h.sill);if(_-h.sill<.05)continue;let m=(x,T)=>{let C=Math.min(7,T*f);return[h.start[0]+h.axis[0]*x+h.toRoom[0]*h.faceRoom-u[0]*C,.02,h.start[1]+h.axis[1]*x+h.toRoom[1]*h.faceRoom-u[1]*C]},y=.14*a*Math.min(1,g*1.5),M=new ae(1*y,.82*y,.55*y),v=M.clone().multiplyScalar(.45),S=e.floor.rooms.find(x=>x.id===h.opening.room_id);if(!S||S.points.length<3)continue;let w=Math.max(1,Math.ceil(Math.min(7,_*f)/.25)),A=Math.max(1,Math.ceil(h.width/.3));for(let x=0;x<w;x++){let T=h.sill+(_-h.sill)*x/w,C=h.sill+(_-h.sill)*(x+1)/w,I=x/w,F=(x+1)/w,P=M.clone().lerp(v,I),E=M.clone().lerp(v,F);for(let D=0;D<A;D++){let N=h.width*D/A,O=h.width*(D+1)/A,k=m((N+O)/2,(T+C)/2);if(!ut([k[0],k[2]],S.points))continue;let z=m(N,T),G=m(O,T),V=m(O,C),ie=m(N,C);s.tri(z,G,V,P,P,E),s.tri(z,V,ie,P,E,E)}}}}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=s.geometry(),e.sunMesh.visible=s.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new ct,s=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let m=(l.rotation??0)*it,y=[-Math.sin(m),Math.cos(m)],M=l.model==="camera_ceiling",v=l.reach??(M?3:4.5),S=(l.fov??(M?360:90))*it/2,w=l.motion?new ae(.9,.12,.16):new ae(.04,.22,.28),A=new ae(0,0,0),x=Math.max(4,Math.round(S/.15)),T=.015,C=e.geo.walls2d,I=E=>{let D=y[0]*Math.cos(E)-y[1]*Math.sin(E),N=y[1]*Math.cos(E)+y[0]*Math.sin(E),O=v;for(let k of C){let z=k.b[0]-k.a[0],G=k.b[1]-k.a[1],V=D*G-N*z;if(Math.abs(V)<1e-9)continue;let ie=((k.a[0]-l.x)*G-(k.a[1]-l.z)*z)/V,K=((k.a[0]-l.x)*N-(k.a[1]-l.z)*D)/V;ie>.45&&ie<O&&K>=0&&K<=1&&(O=ie)}return O},F=E=>{let D=I(E);return[l.x+(y[0]*Math.cos(E)-y[1]*Math.sin(E))*D,T,l.z+(y[1]*Math.cos(E)+y[0]*Math.sin(E))*D]},P=o.count;for(let E=0;E<x;E++)o.tri([l.x,T,l.z],F(-S+2*S*(E+1)/x),F(-S+2*S*E/x),w,A,A);s.push({id:l.id,start:P,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||qp.has(l.lamp)&&this.wallMode==="cut")continue;let[u,f,h]=l.size??mh[l.lamp],p=l.base??0,g=(l.rotation??0)*it,b={ceiling:t-.07,downlight:t-.03,spot:t-h,panel:t-.03,pendant:Math.max(.4,t-h)+.08,floor:p+h-.15,uplight:p+h,table:p+h-.09,wall:p+h/2,strip:p+Math.max(.02,h)-.01,bollard:p+h-.08,garden:p+h-.03,fan:p+h*.08,column:p+h*.55,tv_bars:p+h*.55,orb_table:p+h*.55,portable:p+h*.55,ambient:p+h,cube:p+h*.55,round_panel:t-.03,garden_set:p+h-.03,wall_updown:p+h/2}[l.lamp],_=(m,y,M=1)=>{n.push(m,b,y),r.push(...c.color.map(v=>v*c.level*.7*M))};if(l.lamp==="strip")for(let m of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+u*(.5+m),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):_(l.x+Math.cos(g)*u*m,l.z+Math.sin(g)*u*m,.6);else l.lamp==="wall"||l.lamp==="wall_updown"?_(l.x-Math.sin(g)*(f/2+.05),l.z+Math.cos(g)*(f/2+.05)):_(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let m=new ae(...c.color.map(w=>w*.09*c.level)),y=new ae(0,0,0),M=Math.max(.03,u/2),v=.45+.35*c.level,S=16;for(let w=0;w<S;w++){let A=w/S*Math.PI*2,x=(w+1)/S*Math.PI*2,T=[l.x+Math.cos(A)*M,b,l.z+Math.sin(A)*M],C=[l.x+Math.cos(x)*M,b,l.z+Math.sin(x)*M],I=[l.x+Math.cos(A)*v,.02,l.z+Math.sin(A)*v],F=[l.x+Math.cos(x)*v,.02,l.z+Math.sin(x)*v];o.tri(T,I,F,m,y,y),o.tri(T,F,C,m,y,m)}}}let a=new Qe;a.setAttribute("position",new Ge(n,3)),a.setAttribute("color",new Ge(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0,e.coneTris=s}buildScreens(e){let t=sh(e.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),n=t.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=n;let r=new ct;for(let o of t){let s=this.screens.get(o.id),a=o.rotation*it,l=Math.cos(a),c=Math.sin(a),u=(v,S,w)=>[o.x+v*l-w*c,S,o.z+v*c+w*l];if(s.faces){let v=Math.max(.05,o.w)*(o.mirror?-1:1),S=Math.max(.05,o.d),w=Math.max(.005,o.h),A=mn(e.floor,o);for(let x of s.faces){if(x.part==="cabin"){let z=Dt(o.type),G=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(z&&z.parts.some(G)){let V=new ae(...x.color.map(ie=>Math.min(1,ie*(.3+.5*x.level))));Ku(r,z,o,A,V.getHex(),G);continue}}if(x.part==="band"||x.part==="cabin"){let z=x.part==="cabin",G=A+w*(z?.6:.42),V=z?A+w*.86:G+.07,ie=new ae(...x.color.map(he=>Math.min(1,he*(.3+.45*x.level)))),K=Math.abs(v)/2+(z?.012:.02),se=S/2+(z?.012:.02),Q=[[-K,-se],[K,-se],[K,se],[-K,se]];for(let he=0;he<4;he++){let Y=Q[he],j=Q[(he+1)%4],fe=u(Y[0]*Math.sign(v),G,Y[1]),me=u(j[0]*Math.sign(v),G,j[1]),pe=u(j[0]*Math.sign(v),V,j[1]),Ae=u(Y[0]*Math.sign(v),V,Y[1]);r.tri(fe,me,pe,ie),r.tri(fe,pe,Ae,ie)}continue}let T=x.part==="right"?.03:-Math.abs(v)/2+.03,C=x.part==="left"?-.03:Math.abs(v)/2-.03,I=A+(x.part==="bottom"?w*.45:w)+.006,F=new ae(...x.color.map(z=>Math.min(1,z*(.35+.65*x.level)))),P=new ae(0,0,0),E=(z,G,V=I)=>u(z*Math.sign(v),V,G),D=[E(T,-S/2+.03),E(C,-S/2+.03),E(C,S/2-.03),E(T,S/2-.03)];r.tri(D[0],D[2],D[1],F),r.tri(D[0],D[3],D[2],F);let N=.12+.1*x.level,O=F.clone().multiplyScalar(.5),k=[E(T-N,-S/2-N,I+.004),E(C+N,-S/2-N,I+.004),E(C+N,S/2+N,I+.004),E(T-N,S/2+N,I+.004)];for(let z=0;z<4;z++){let G=(z+1)%4;r.tri(D[z],k[G],k[z],O,P,P),r.tri(D[z],D[G],k[G],O,O,P)}}continue}let f=Dt(o.type);if(f&&!f.light&&s.ring&&f.parts.some(v=>v.glow)){let v=new ae(...s.color.map(S=>Math.min(1,S*(.45+.55*s.level))));Ku(r,f,o,mn(e.floor,o),v.getHex())}let h=$u(o,e.floor);if(!h)continue;let p=new ae(...s.color.map(v=>Math.min(1,v*(.35+.65*s.level)))),g=new ae(0,0,0),b=h.z+.004;if(r.tri(u(h.x0,h.y0,b),u(h.x1,h.y0,b),u(h.x1,h.y1,b),p),r.tri(u(h.x0,h.y0,b),u(h.x1,h.y1,b),u(h.x0,h.y1,b),p),s.plain)continue;let _=.18+.12*s.level,m=p.clone().multiplyScalar(.5),y=[u(h.x0,h.y0,b),u(h.x1,h.y0,b),u(h.x1,h.y1,b),u(h.x0,h.y1,b)],M=[u(h.x0-_,h.y0-_,b+.01),u(h.x1+_,h.y0-_,b+.01),u(h.x1+_,h.y1+_,b+.01),u(h.x0-_,h.y1+_,b+.01)];for(let v=0;v<4;v++){let S=(v+1)%4;r.tri(y[v],M[v],M[S],m,g,g),r.tri(y[v],M[S],y[S],m,g,m)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=$u(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new Ye(new Ei(1,1),new lt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let u=l;new Po().load(s.picture,f=>{if(e.screenPics.get(r)!==u){f.dispose();return}f.colorSpace=Ct,u.texture=f;let h=u.mesh.material;h.map=f,h.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,a,f),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(e,t,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*s),u=c/s,f=t.rotation*it,h=(n.x0+n.x1)/2,p=n.z+.008;e.scale.set(c,u,1),e.rotation.set(0,-f,0),e.position.set(t.x+h*Math.cos(f)-p*Math.sin(f),(n.y0+n.y1)/2,t.z+h*Math.sin(f)+p*Math.cos(f))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){let t=this.flows.filter(u=>u.floorId===e.floor.id).map(dh).join(";"),n=[],r=[],o=[],s=[],a=[];for(let u of this.flows){if(u.floorId!==e.floor.id)continue;let f=this.flowPhase.get(dh(u))??{speed:Zp(u.power),offset:0},h=u.power>.5?Math.min(1,.5+u.power/2500):.22,p=u.color.map(y=>y*h),g=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(g<1e-4)continue;let b=[(u.b[0]-u.a[0])/g,(u.b[1]-u.a[1])/g,(u.b[2]-u.a[2])/g],_=[];if(Math.abs(b[1])<.5){let y=Math.hypot(b[0],b[2])||1;_.push([-b[2]/y,0,b[0]/y])}else _.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[Yp*1.4,1]]:[[BS,.25],[Yp,1]];for(let[y,M]of m)for(let v of _){let S=y/2,w=(x,T)=>[x[0]+v[0]*S*T,x[1]+v[1]*S*T,x[2]+v[2]*S*T],A=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+g,0],[w(u.b,1),u.dist+g,1],[w(u.a,1),u.dist,1]];for(let x of[0,1,2,0,2,3]){let[T,C,I]=A[x];n.push(T[0],T[1],T[2]),r.push(p[0]*M,p[1]*M,p[2]*M),o.push(C,I),s.push(f.speed),a.push(f.offset)}}}let l=e.flowMesh.geometry;if(t===e.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,f]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let h=l.getAttribute(u);h.array.set(f),h.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let c=new Qe;c.setAttribute("position",new Ge(n,3)),c.setAttribute("color",new Ge(r,3)),c.setAttribute("uv",new Ge(o,2)),c.setAttribute("flowSpeed",new Ge(s,1)),c.setAttribute("flowOffset",new Ge(a,1)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=c,e.flowMesh.visible=n.length>0}buildOpenings(e){let t=Np(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new ae(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new ae(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(GS,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)t.setXYZ(s,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=yp(this.activeFloors());t.isEmpty()&&t.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new H),r=t.getSize(new H),o=this.startView,s=this.floorId===null,a=o?o.phi:.85,l=this.cameraFrame(),c=Math.max(.1,(this.size.w-l.left-l.right)/Math.max(1,this.size.h-l.top-l.bottom)),u=c<1?1.12:1.06,f=Mp(t,a,c,this.camera.fov*it,u),h=o?o.theta:f.theta,p=oh(t,h,a,this.camera.aspect,this.camera.fov*it,l),g=Math.max(8,p.radius);this.controls.maxRadius=Math.max(40,g*3),o&&s?n.y=t.min.y+r.y*(this.houseView?.45:.3):n.add(p.offset),this.floorId===null&&(this.houseRadius=g),o&&s&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,o.radius*1.5)),this.controls.flyTo({target:n,radius:o&&s?o.radius:g,phi:a,theta:h},e)}cameraFrame(){let e=this.size.w<700?12:18,t=Math.min(this.size.w*.4,this.labelInset?this.labelInset+8:e);return{width:this.size.w,height:this.size.h,left:t,right:e,top:e,bottom:e}}placeGround(){let e=new en,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new H(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new H(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=KS();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new H),r=e.getSize(new H),o=ph*Math.ceil((Math.max(r.x,r.z)+16)/ph);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-ki-.02,n.z)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new Lo;return r.setFromCamera(new Je(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let h=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Xe;if(h!==Xe&&Math.floor(h/16)===0)continue}let u=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),f=u?this.pickOpenings.get(u):void 0;if(f)return{entity:f}}else if(a.object===c.wallMesh){let u=c.geo.coveredRoomTris.find(g=>l>=g.start&&l<g.end);if(u){if(this.roomId!==null&&c.floor.rooms.some(b=>b.id===this.roomId&&Xn(b))&&u.roofStart!==void 0&&u.roofEnd!==void 0&&l>=u.roofStart&&l<u.roofEnd)continue;return{floorId:c.floor.id,roomId:u.id}}let f=s(c.geo.outdoorTris,l);if(f)return{floorId:c.floor.id,outdoorId:f};let h=s(c.geo.furnitureTris,l),p=h?this.pickFurniture.get(h):void 0;if(p)return{entity:p};if(a.face&&!h){let g=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,b=Math.floor(g/16),_=g%16,m=this.wallMode==="cut"&&b===0,y=(c.mask.glass.value&1<<_)!==0;if(!m){let M=n.ray.direction,v=Math.hypot(M.x,M.z)||1,S=[a.point.x-M.x/v*.3,a.point.z-M.z/v*.3],w=c.floor.rooms.find(A=>A.points.length>=3&&ut(S,A.points))?.id??null;if(this.roomId!==null){if(w===this.roomId)return{floorId:c.floor.id,roomId:w}}else if(!y&&w)return{floorId:c.floor.id,roomId:w}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+fh),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}if(n&&"outdoorId"in n){this.options.onOutdoorTap?this.options.onOutdoorTap(n.floorId,n.outdoorId):this.options.onRoomTap?.(n.floorId,null);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=r.flatMap(s=>[s.lampMesh,s.wallMesh].filter(a=>a.visible));for(let s of n.intersectObjects(o,!1)){if(s.faceIndex==null)continue;let a=r.find(u=>u.group===s.object.parent),c=(s.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>s.faceIndex>=u.start&&s.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let r=this.rayAt(t,n),o=e.floor.elevation+e.y,s=r.ray.direction;if(Math.abs(s.y)<1e-4)return null;let a=(o-r.ray.origin.y)/s.y;return a<=0?null:[r.ray.origin.x+s.x*a,r.ray.origin.z+s.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(f=>f.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(f=>f.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(f=>f.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t)}grabItem(e,t,n,r){let o=e.floor.furniture.find(a=>a.id===t),s=this.floorPoint(e,n,r);return!o||!s?!1:o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:e.floor.id,id:o.id,offset:[o.x-s[0],o.z-s[1]],x:o.x,z:o.z,moved:!1},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(h=>h.id===n.id),u=l&&this.floorPoint(l,e,t);if(!l||!c||!u)return;let f=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/f)*f,n.z=c.z=Math.round((u[1]+n.offset[1])/f)*f,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=this.floorPoint(o,e,t);if(!s)return;let a=this.building?.settings.grid??.05;r.x=Math.round((s[0]+r.offset[0])/a)*a,r.z=Math.round((s[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(m=>m.floor.furniture.some(y=>y.id===e)):void 0,n=t?.floor.furniture.find(m=>m.id===e);if(!t||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,s=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=Dt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?mn(t.floor,n):a?n.type==="lamp_pendant"?s-n.h-.1:s-l:mn(t.floor,n),u=n.rotation*it,f=Math.cos(u),h=Math.sin(u),p=(m,y,M)=>[r+m*f-y*h,M,o+m*h+y*f],g=new Vt,b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],_=new ae(.25,.9,1);for(let m=0;m<4;m++){let[y,M]=b[m],[v,S]=b[(m+1)%4];g.seg(p(y,M,c+.01),p(v,S,c+.01),_),g.seg(p(y,M,c+l),p(v,S,c+l),_),g.seg(p(y,M,c+.01),p(y,M,c+l),_)}g.seg(p(-n.w/2,n.d/2+.03,c+.02),p(n.w/2,n.d/2+.03,c+.02),new ae(1,1,1)),this.ghost=new yn(g.geometry(),new xn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(m=>m.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new jt(o,s);a.texture.colorSpace=Ct;let l=new oi(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,f=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),p=new Uint8Array(o*s*4),g=document.createElement("canvas");g.width=o,g.height=s;let b=g.getContext("2d"),_=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let P of this.floors)P.group.visible=P===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let y=m.floor.rooms.flatMap(P=>P.points),M=m.floor.elevation,v=new en(new H(Math.min(...y.map(P=>P[0]))-.3,M,Math.min(...y.map(P=>P[1]))-.3),new H(Math.max(...y.map(P=>P[0]))+.3,M+Math.min(m.floor.cut_height,m.floor.height),Math.max(...y.map(P=>P[1]))+.3)),S=v.getCenter(new H),w=-.6,A=.8,x=new H(Math.sin(A)*Math.sin(w),Math.cos(A),Math.sin(A)*Math.cos(w));l.position.copy(S).addScaledVector(x,100),l.lookAt(S),l.updateMatrixWorld();let T=.5,C=.5;for(let P of[v.min.x,v.max.x])for(let E of[v.min.y,v.max.y])for(let D of[v.min.z,v.max.z]){let N=new H(P,E,D).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(N.x)),C=Math.max(C,Math.abs(N.y))}let I=o/s;T/C>I?C=T/I:T=C*I,l.left=-T*1.05,l.right=T*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,p);let F=b.createImageData(o,s);for(let P=0;P<s;P++)F.data.set(p.subarray((s-1-P)*o*4,(s-P)*o*4),P*o*4);b.putImageData(F,0,0),_.push({floorId:m.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=f),a.dispose(),this.invalidate()}return _}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?Bp(n.room,void 0,void 0,n.obstacles):hh(n.rest),l=a.length?a:hh(n.rest),c=0;l.forEach((u,f)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=f)}),r.motion.path=l,r.motion.next=c,n.room&&!ut(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Gp[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new ct,o=(a,l,c,u,f)=>{let h=[];for(let p=0;p<20;p++)h.push([Math.cos(p/20*Math.PI*2)*a,Math.sin(p/20*Math.PI*2)*a]);mt(r,h,l,c,u,f,{aoFrom:0,bottom:!1})};o(.17,.012,.08,2371657,3424863),o(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new lt({vertexColors:!0});let s=new ct;mt(s,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=s.geometry()}let t=new Jt,n=new lt({color:Gp[e.mode]});return t.add(new Ye(this.robotGeo,this.robotMat),new Ye(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=zp(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e){let t=o=>new ae(.25-.2*o,.95-.83*o,1-.7*o),n=new ae(0,0,0),r=.02;for(let o of this.floors){let s=new ct,a=null;for(let l of e){if(l.floorId!==o.floor.id)continue;let c=t(l.age);if(a){let u=Math.hypot(l.x-a.x,l.z-a.z)||1,f=-(l.z-a.z)/u*.06,h=(l.x-a.x)/u*.06,p=t(a.age);s.tri([a.x+f,r,a.z+h],[l.x+f,r,l.z+h],[l.x-f,r,l.z-h],p,c,c),s.tri([a.x+f,r,a.z+h],[l.x-f,r,l.z-h],[a.x-f,r,a.z-h],p,c,p)}for(let u=0;u<12;u++){let f=u/12*Math.PI*2,h=(u+1)/12*Math.PI*2;s.tri([l.x,r,l.z],[l.x+Math.cos(h)*.22,r,l.z+Math.sin(h)*.22],[l.x+Math.cos(f)*.22,r,l.z+Math.sin(f)*.22],c,n,n)}a=l}o.trailMesh.geometry.dispose(),o.trailMesh.geometry=s.geometry(),o.trailMesh.visible=s.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*it,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*it)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:t.y),l=new H(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new H(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}focus(e,t,n,r,o){let s=this.floorMap.get(e);if(s){if(this.controls.flyTo({target:new H(t,s.floor.elevation+s.ty+r,n),radius:5.5,phi:.78},900),o){this.flashes.set(o,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=this.stepOpenings(t)||this.stepFridges(t),a=this.stepFans(t),l=!1;if(this.flashes.size){let g=new Set;for(let[b,_]of this.flashes){let m=this.deviceFloor.get(b);m&&g.add(m),_<=e&&this.flashes.delete(b)}l=this.flashes.size>0;for(let b of this.floors)g.has(b.floor.id)&&this.buildLamps(b)}let c=this.placeRoof(t),u=this.stepRobots(e),f=this.stepWeather(e),h=r||o||s||a||l||c,p=[];if(r&&p.push("camera"),o&&p.push("floors"),s&&p.push("openings"),a&&p.push("fans"),l&&p.push("flash"),c&&p.push("roof"),this.flowActive&&p.push("flow"),this.soundActive&&p.push("sound"),this.solarActive&&p.push("solar"),this.effectTick&&p.push("effect"),u&&p.push("robot"),n&&p.push("orbit"),this.tintTick&&p.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,p),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let g=this.lowQuality?2*$p:$p;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=g/1e3,this.effectTick=!0;for(let b of this.floors)b.o<.02||!this.effectFloors.has(b.floor.id)||(this.buildLamps(b),this.buildGlow(b));this.invalidate()},g)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Xp:Xp))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((f,h)=>{let p=f?f[0]*n/o+f[1]*r/o>=.25:a;!l&&p&&(c|=1<<h)});let u=this.roomId!==null&&s.floor.rooms.some(f=>f.id===this.roomId&&Xn(f));s.mask.standing.value=l?0:mp(this.floorId!==null||u),s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new H,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,u=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let _ of[a.z0,a.z1]){n.set(b,u,_).project(this.camera);let m=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||m<l.x)&&(l={x:m,y}),(!c||m>c.x)&&(c={x:m,y})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let f=s.labelSize.w,h=8+this.labelInset,p=l.x-f-14,g=l.y;p<h&&this.labelInset&&(p=c.x+14,g=c.y),o.push({fv:s,left:Math.max(h,Math.min(e-f-8,p)),y:g,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.floorId!==null&&(s.views!=="all"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(s.p[0],s.p[1]+(l?.y??0)+(s.roof?(1-this.roofO)*2.2:0),s.p[2]),u=this.camera.position.clone().sub(c),f=u.length(),h=u.normalize().dot(new H(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let p=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,f)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!p,g,h)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new H,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==u&&(this.pinMode.set(s,u),s.classList.toggle("fp3d-dev-full",u==="full"),s.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function WS(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let u=s+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let u=l?256/4:0;for(let f of[u,u+256/2])n(s+f+.75,c,s+f+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new Ti(e);return o.flipY=!1,o.wrapS=hn,o.wrapT=hn,o.anisotropy=4,o.colorSpace=Ct,o}function XS(i){let e=new lt({map:i,transparent:!0,blending:Lt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function YS(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new Ti(i);return t.wrapS=$i,t.wrapT=$i,t.colorSpace=Ct,t}function dh(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}`}function Zp(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function qS(i){let e=new lt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:Mt});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function $S(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function ZS(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Ti(e);return r.colorSpace=Ct,r}function KS(){let e=ph,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new Ti(t);return o.anisotropy=4,o.colorSpace=Ct,o}function FC(i,e){return new gh(i,e)}function Jl(i,e,t,n){let[r,o,s]=e.size??mh[e.lamp],a=e.base??0,l=(e.rotation??0)*it,c=Math.cos(l),u=Math.sin(l),f=(b,_)=>[e.x+b*c-_*u,e.z+b*u+_*c],h=(b,_,m,y,M,v=14)=>{let S=[];for(let w=0;w<v;w++){let A=w/v*Math.PI*2;S.push([e.x+Math.cos(A)*b,e.z+Math.sin(A)*b])}mt(i,S,_,m,y,M,{aoFrom:0,bottom:!0})},p=(b,_,m,y,M,v,S,w=S)=>mt(i,[f(b,m),f(_,m),f(_,y),f(b,y)],M,v,S,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,o)/2);switch(e.lamp){case"ceiling":h(g*.25,t-.04,t,Oe,Oe,8),h(g,t-Math.max(.04,s)-.035,t-.04,n,n);break;case"fan":{let b=Math.min(r,o)*.105;h(b*1.18,a,a+s*.05,Oe,Oe,12),h(b,a-s*.065,a,n,n,6);break}case"pendant":{let b=Math.max(.4,t-s);h(.06,t-.02,t,Oe,Oe,8);let _=e.variant==="globe"?b+2*g:e.variant==="drum"?b+.24:b+.2;if(h(.008,_,t-.02,Oe,Oe,5),e.variant==="globe")for(let y=0;y<7;y++){let M=Math.PI*(y/7),v=Math.PI*((y+1)/7);h(g*Math.max(.2,Math.sin((M+v)/2)),b+g-g*Math.cos(M),b+g-g*Math.cos(v),n,n,14)}else if(e.variant==="cone")for(let y=0;y<4;y++)h(g*(.25+.75*(4-y)/4),b+.06*y,b+.06*(y+1),n,n,16);else e.variant==="drum"?h(g,b,b+.24,n,n,18):(h(g*.35,b+.14,b+.2,n,n,12),h(g,b,b+.14,n,n,16));break}case"downlight":h(g,t-.012,t,Oe,Oe,12),h(g*.7,t-.02,t-.012,n,n,12);break;case"spot":h(g*.6,t-.02,t,Oe,Oe,10),h(g,t-Math.max(.06,s),t-.02,Oe,Oe,12),h(g*.8,t-Math.max(.06,s)-.008,t-Math.max(.06,s),n,n,12);break;case"panel":p(-r/2,r/2,-o/2,o/2,t-Math.max(.015,s),t,Oe,Oe),p(-r/2+.02,r/2-.02,-o/2+.02,o/2-.02,t-Math.max(.015,s)-.004,t-Math.max(.015,s),n);break;case"round_panel":h(g,t-Math.max(.025,s),t,Oe,Oe,18),h(g*.92,t-Math.max(.025,s)-.006,t-Math.max(.025,s),n,n,18);break;case"uplight":h(Math.max(.1,g*.6),a,a+.03,Oe,Oe),h(.014,a+.03,a+s-.12,Oe,Oe,6),h(g,a+s-.14,a+s-.02,Oe,Oe),h(g*.92,a+s-.02,a+s,n,n);break;case"bollard":h(g,a,a+s-.14,Oe,Oe,10),h(g*.9,a+s-.14,a+s-.03,n,n,10),h(g*1.1,a+s-.03,a+s,Oe,Oe,10);break;case"garden":h(.012,a,a+s-.08,Oe,Oe,5),h(g,a+s-.08,a+s-.01,Oe,Oe,10),h(g*.8,a+s-.01,a+s,n,n,10);break;case"floor":h(Math.max(.1,g*.7),a,a+.03,Oe,Oe),h(.014,a+.03,a+s-.28,Oe,Oe,6),h(g,a+s-.3,a+s,n,n);break;case"table":h(Math.max(.05,g*.55),a,a+.03,Oe,Oe),h(.012,a+.03,a+s-.16,Oe,Oe,6),h(g,a+s-.18,a+s,n,n);break;case"column":p(-r*.42,r*.42,-o*.42,o*.42,a,a+s*.035,Oe),p(-r*.18,r*.18,-o*.18,o*.18,a+s*.035,a+s,n);break;case"tv_bars":for(let b of[-r*.31,r*.31])p(b-r*.13,b+r*.13,-o*.42,o*.42,a,a+s*.06,Oe),p(b-r*.065,b+r*.065,-o*.18,o*.18,a+s*.06,a+s,n);break;case"orb_table":{h(g*.52,a,a+s*.08,Oe,Oe,14);let b=[.55,.82,1,.92,.66];for(let _=0;_<b.length;_++)h(g*b[_],a+s*(.08+_*.18),a+s*(.08+(_+1)*.18),n,n,12);break}case"portable":{p(-r*.42,r*.42,-o*.42,o*.42,a,a+s*.06,Oe);for(let b=0;b<4;b++){let _=.48-b*.07;p(-r*_,r*_,-o*_,o*_,a+s*(.06+b*.2),a+s*(.06+(b+1)*.2),n)}p(-r*.18,r*.18,-o*.18,o*.18,a+s*.86,a+s,Oe);break}case"ambient":h(g*.92,a,a+s*.22,Oe,Oe,14),p(-r*.42,r*.42,-o*.42,o*.42,a+s*.22,a+s,n);break;case"cube":p(-r/2,r/2,-o/2,o/2,a,a+s*.08,Oe),p(-r*.46,r*.46,-o*.46,o*.46,a+s*.08,a+s,n);break;case"garden_set":for(let b of[-r*.34,0,r*.34])p(b-r*.012,b+r*.012,-o*.06,o*.06,a,a+s*.68,Oe),p(b-r*.065,b+r*.065,-o*.25,o*.25,a+s*.68,a+s*.92,Oe),p(b-r*.052,b+r*.052,-o*.2,o*.2,a+s*.92,a+s,n);break;case"wall":{let b=e.base??$o;p(-r/2+.03,r/2-.03,-o/2,-o/2+.02,b,b+s,Oe),p(-r/2,r/2,-o/2+.02,o/2,b+s*.15,b+s*.85,n);break}case"wall_updown":{let b=e.base??$o;p(-r*.42,r*.42,-o/2,-o*.25,b+s*.08,b+s*.92,Oe),p(-r/2,r/2,-o*.24,o/2,b,b+s*.18,n),p(-r/2,r/2,-o*.24,o/2,b+s*.82,b+s,n);break}case"strip":{let b=Math.max(.02,s),_=e.base!=null?e.base+b:t-.04;if(!e.roll&&!e.upright){p(-r/2,r/2,-o/2,o/2,_-b,_,n);break}let m=(e.roll??0)*it,y=Math.cos(m),M=Math.sin(m),v=e.upright?a+r/2:_-b/2,S=(C,I,F)=>{let P=C,E=I*y-F*M,D=I*M+F*y;return e.upright&&([P,E]=[-E,P]),[e.x+P*c-D*u,v+E,e.z+P*u+D*c]},w=[S(-r/2,-b/2,-o/2),S(r/2,-b/2,-o/2),S(r/2,-b/2,o/2),S(-r/2,-b/2,o/2),S(-r/2,b/2,-o/2),S(r/2,b/2,-o/2),S(r/2,b/2,o/2),S(-r/2,b/2,o/2)],A=new ae(n),x=[e.x,v,e.z],T=(C,I,F,P)=>{let[E,D,N]=[w[C],w[I],w[F]],O=[(D[1]-E[1])*(N[2]-E[2])-(D[2]-E[2])*(N[1]-E[1]),(D[2]-E[2])*(N[0]-E[0])-(D[0]-E[0])*(N[2]-E[2]),(D[0]-E[0])*(N[1]-E[1])-(D[1]-E[1])*(N[0]-E[0])],k=[E[0]-x[0],E[1]-x[1],E[2]-x[2]],z=O[0]*k[0]+O[1]*k[1]+O[2]*k[2]<0,[G,V,ie,K]=z?[w[P],w[F],w[I],w[C]]:[w[C],w[I],w[F],w[P]];i.tri(G,V,ie,A,A,A),i.tri(G,ie,K,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{gh as FloorplanViewer,FC as createViewer,LS as furniturePreview,HS as isLowEnd,Jl as pushLampModel};
