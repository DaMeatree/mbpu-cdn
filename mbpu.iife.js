var MBPUBundle=function(Di){"use strict";var d1=Object.defineProperty;var p1=(Di,ui,Qs)=>ui in Di?d1(Di,ui,{enumerable:!0,configurable:!0,writable:!0,value:Qs}):Di[ui]=Qs;var wt=(Di,ui,Qs)=>p1(Di,typeof ui!="symbol"?ui+"":ui,Qs);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ui="169",$i="",ti="srgb",Ki="srgb-linear",Hl="display-p3",ia="display-p3-linear",ra="linear",Re="srgb",sa="rec709",oa="p3",_u="300 es";class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vu=1234567;const to=Math.PI/180,es=180/Math.PI;function ns(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Ze(r,t,e){return Math.max(t,Math.min(e,r))}function Vl(r,t){return(r%t+t)%t}function Um(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Nm(r,t,e){return r!==t?(e-r)/(t-r):0}function eo(r,t,e){return(1-e)*r+e*t}function Fm(r,t,e,n){return eo(r,t,1-Math.exp(-e*n))}function Om(r,t=1){return t-Math.abs(Vl(r,t*2)-t)}function Bm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function zm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function km(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Gm(r,t){return r+Math.random()*(t-r)}function Hm(r){return r*(.5-Math.random())}function Vm(r){r!==void 0&&(vu=r);let t=vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wm(r){return r*to}function Xm(r){return r*es}function qm(r){return(r&r-1)===0&&r!==0}function Ym(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $m(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Km(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function is(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ln={DEG2RAD:to,RAD2DEG:es,generateUUID:ns,clamp:Ze,euclideanModulo:Vl,mapLinear:Um,inverseLerp:Nm,lerp:eo,damp:Fm,pingpong:Om,smoothstep:Bm,smootherstep:zm,randInt:km,randFloat:Gm,randFloatSpread:Hm,seededRandom:Vm,degToRad:Wm,radToDeg:Xm,isPowerOfTwo:qm,ceilPowerOfTwo:Ym,floorPowerOfTwo:$m,setQuaternionFromProperEuler:Km,normalize:xn,denormalize:is};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],v=i[4],M=i[7],A=i[2],b=i[5],S=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*p+a*v+l*b,s[6]=o*g+a*M+l*S,s[1]=c*_+h*y+f*A,s[4]=c*p+h*v+f*b,s[7]=c*g+h*M+f*S,s[2]=u*_+d*y+m*A,s[5]=u*p+d*v+m*b,s[8]=u*g+d*M+m*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new jt;function xu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zm(){const r=aa("canvas");return r.style.display="block",r}const yu={};function la(r){r in yu||(yu[r]=!0,console.warn(r))}function Jm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function jm(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qm(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Mu=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Su=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[Ki]:{transfer:ra,primaries:sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ti]:{transfer:Re,primaries:sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ia]:{transfer:ra,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Su),fromReference:r=>r.applyMatrix3(Mu)},[Hl]:{transfer:Re,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Su),fromReference:r=>r.applyMatrix3(Mu).convertLinearToSRGB()}},tg=new Set([Ki,ia]),ge={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!tg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=no[t].toReference,i=no[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return no[r].primaries},getTransfer:function(r){return r===$i?ra:no[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(no[t].luminanceCoefficients)}};function rs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ss;class eg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=aa("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=rs(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ng=0;class Tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ql(i[o].image)):s.push(ql(i[o]))}else s=ql(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ql(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ig=0;class yn extends ts{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=1001,i=1001,s=1006,o=1008,a=1023,l=1009,c=yn.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=ns(),this.name="",this.source=new Tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null,yn.DEFAULT_MAPPING=300,yn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(d+1)/2,A=(g+1)/2,b=(h+u)/4,S=(f+_)/4,C=(m+p)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=S/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=S/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(f-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rg extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends rg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eu extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sg extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==m){let p=1-a;const g=l*u+c*d+h*m+f*_,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const A=Math.sqrt(v),b=Math.atan2(A,g*y);p=Math.sin(p*b)/A,a=Math.sin(a*b)/A}const M=a*y;if(l=l*p+u*M,c=c*p+d*M,h=h*p+m*M,f=f*p+_*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new D,bu=new Zi;class Mr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),ha.subVectors(this.max,io),os.subVectors(t.a,io),as.subVectors(t.b,io),ls.subVectors(t.c,io),Ji.subVectors(as,os),ji.subVectors(ls,as),Sr.subVectors(os,ls);let e=[0,-Ji.z,Ji.y,0,-ji.z,ji.y,0,-Sr.z,Sr.y,Ji.z,0,-Ji.x,ji.z,0,-ji.x,Sr.z,0,-Sr.x,-Ji.y,Ji.x,0,-ji.y,ji.x,0,-Sr.y,Sr.x,0];return!$l(e,os,as,ls,ha)||(e=[1,0,0,0,1,0,0,0,1],!$l(e,os,as,ls,ha))?!1:(ua.crossVectors(Ji,ji),e=[ua.x,ua.y,ua.z],$l(e,os,as,ls,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ii=[new D,new D,new D,new D,new D,new D,new D,new D],fi=new D,ca=new Mr,os=new D,as=new D,ls=new D,Ji=new D,ji=new D,Sr=new D,io=new D,ha=new D,ua=new D,Tr=new D;function $l(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Tr.fromArray(r,s);const a=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=t.dot(Tr),c=e.dot(Tr),h=n.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const og=new Mr,ro=new D,Kl=new D;class Er{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):og.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);const e=ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ro,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(Kl)),this.expandByPoint(ro.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new D,Zl=new D,fa=new D,Qi=new D,Jl=new D,da=new D,jl=new D;class pa{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zl.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(Zl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(fa),a=Qi.dot(this.direction),l=-Qi.dot(fa),c=Qi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=s*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Zl).addScaledVector(fa,u),d}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,i,s){Jl.subVectors(e,t),da.subVectors(n,t),jl.crossVectors(Jl,da);let o=this.direction.dot(jl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,t);const l=a*this.direction.dot(da.crossVectors(Qi,da));if(l<0)return null;const c=a*this.direction.dot(Jl.cross(Qi));if(c<0||l+c>o)return null;const h=-a*Qi.dot(jl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,m,_,p){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,m,_,p)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),s=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=o*h,d=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){const u=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ag,t,lg)}lookAt(t,e,n){const i=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),tr.crossVectors(n,Bn),tr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),tr.crossVectors(n,Bn)),tr.normalize(),ma.crossVectors(Bn,tr),i[0]=tr.x,i[4]=ma.x,i[8]=Bn.x,i[1]=tr.y,i[5]=ma.y,i[9]=Bn.y,i[2]=tr.z,i[6]=ma.z,i[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],v=n[7],M=n[11],A=n[15],b=i[0],S=i[4],C=i[8],P=i[12],x=i[1],E=i[5],U=i[9],B=i[13],G=i[2],q=i[6],z=i[10],$=i[14],V=i[3],it=i[7],L=i[11],st=i[15];return s[0]=o*b+a*x+l*G+c*V,s[4]=o*S+a*E+l*q+c*it,s[8]=o*C+a*U+l*z+c*L,s[12]=o*P+a*B+l*$+c*st,s[1]=h*b+f*x+u*G+d*V,s[5]=h*S+f*E+u*q+d*it,s[9]=h*C+f*U+u*z+d*L,s[13]=h*P+f*B+u*$+d*st,s[2]=m*b+_*x+p*G+g*V,s[6]=m*S+_*E+p*q+g*it,s[10]=m*C+_*U+p*z+g*L,s[14]=m*P+_*B+p*$+g*st,s[3]=y*b+v*x+M*G+A*V,s[7]=y*S+v*E+M*q+A*it,s[11]=y*C+v*U+M*z+A*L,s[15]=y*P+v*B+M*$+A*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+_*(+e*l*d-e*c*u+s*o*u-i*o*d+i*c*h-s*l*h)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*h-n*c*h)+g*(-i*a*h-e*l*f+e*a*u+i*o*f-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=f*p*c-_*u*c+_*l*d-a*p*d-f*l*g+a*u*g,v=m*u*c-h*p*c-m*l*d+o*p*d+h*l*g-o*u*g,M=h*_*c-m*f*c+m*a*d-o*_*d-h*a*g+o*f*g,A=m*f*l-h*_*l-m*a*u+o*_*u+h*a*p-o*f*p,b=e*y+n*v+i*M+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=y*S,t[1]=(_*u*s-f*p*s-_*i*d+n*p*d+f*i*g-n*u*g)*S,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*g+n*l*g)*S,t[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*S,t[4]=v*S,t[5]=(h*p*s-m*u*s+m*i*d-e*p*d-h*i*g+e*u*g)*S,t[6]=(m*l*s-o*p*s-m*i*c+e*p*c+o*i*g-e*l*g)*S,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*d+e*l*d)*S,t[8]=M*S,t[9]=(m*f*s-h*_*s-m*n*d+e*_*d+h*n*g-e*f*g)*S,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*g+e*a*g)*S,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*d-e*a*d)*S,t[12]=A*S,t[13]=(h*_*i-m*f*i+m*n*u-e*_*u-h*n*p+e*f*p)*S,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*p-e*a*p)*S,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,m=s*f,_=o*h,p=o*f,g=a*f,y=l*c,v=l*h,M=l*f,A=n.x,b=n.y,S=n.z;return i[0]=(1-(_+g))*A,i[1]=(d+M)*A,i[2]=(m-v)*A,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(u+g))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(m+v)*S,i[9]=(p-y)*S,i[10]=(1-(u+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=cs.set(i[0],i[1],i[2]).length();const o=cs.set(i[4],i[5],i[6]).length(),a=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],di.copy(this);const c=1/s,h=1/o,f=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,e.setFromRotationMatrix(di),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=2e3){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let d,m;if(a===2e3)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===2001)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=2e3){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),u=(e+t)*c,d=(n+i)*h;let m,_;if(a===2e3)m=(o+s)*f,_=-2*f;else if(a===2001)m=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new D,di=new fe,ag=new D(0,0,0),lg=new D(1,1,1),tr=new D,ma=new D,Bn=new D,wu=new fe,Au=new Zi;class Rn{constructor(t=0,e=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cg=0;const Cu=new D,hs=new Zi,Ni=new fe,ga=new D,so=new D,hg=new D,ug=new Zi,Ru=new D(1,0,0),Pu=new D(0,1,0),Lu=new D(0,0,1),Du={type:"added"},fg={type:"removed"},us={type:"childadded",child:null},tc={type:"childremoved",child:null};class ke extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new D,e=new Rn,n=new Zi,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new jt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(so,ga,this.up):Ni.lookAt(ga,so,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Ni),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fg),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,hg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new D(0,1,0),ke.DEFAULT_MATRIX_AUTO_UPDATE=!0,ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new D,Fi=new D,ec=new D,Oi=new D,fs=new D,ds=new D,Iu=new D,nc=new D,ic=new D,rc=new D,sc=new Me,oc=new Me,ac=new Me;class mi{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pi.subVectors(t,e),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pi.subVectors(i,e),Fi.subVectors(n,e),ec.subVectors(t,e);const o=pi.dot(pi),a=pi.dot(Fi),l=pi.dot(ec),c=Fi.dot(Fi),h=Fi.dot(ec),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(t,e,n,i){return pi.subVectors(n,e),Fi.subVectors(t,e),pi.cross(Fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),pi.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;fs.subVectors(i,n),ds.subVectors(s,n),nc.subVectors(t,n);const l=fs.dot(nc),c=ds.dot(nc);if(l<=0&&c<=0)return e.copy(n);ic.subVectors(t,i);const h=fs.dot(ic),f=ds.dot(ic);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(fs,o);rc.subVectors(t,s);const d=fs.dot(rc),m=ds.dot(rc);if(m>=0&&d<=m)return e.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ds,a);const p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return Iu.subVectors(s,i),a=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(Iu,a);const g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(fs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},_a={h:0,s:0,l:0};function lc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?r+(t-r)*6*e:e<.5?t:e<.6666666666666666?r+(t-r)*6*(.6666666666666666-e):r}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Vl(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=lc(o,s,t+.3333333333333333),this.g=lc(o,s,t),this.b=lc(o,s,t-.3333333333333333)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){const n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Xl(t.r),this.g=Xl(t.g),this.b=Xl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return ge.fromWorkingColorSpace(dn.copy(this),t),Math.round(Ze(dn.r*255,0,255))*65536+Math.round(Ze(dn.g*255,0,255))*256+Math.round(Ze(dn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=ti){ge.fromWorkingColorSpace(dn.copy(this),t);const e=dn.r,n=dn.g,i=dn.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(er),this.setHSL(er.h+t,er.s+e,er.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(er),t.getHSL(_a);const n=eo(er.h,_a.h,e),i=eo(er.s,_a.s,e),s=eo(er.l,_a.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Nt;Nt.NAMES=Uu;let dg=0;class br extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oo extends br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new D,va=new Mt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Nu extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fu extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pg=0;const ei=new fe,cc=new ke,ps=new D,zn=new Mr,ao=new Mr,nn=new D;class Ye extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?Fu:Nu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,n){return ei.makeTranslation(t,e,n),this.applyMatrix4(ei),this}scale(t,e,n){return ei.makeScale(t,e,n),this.applyMatrix4(ei),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(zn.min,ao.min),zn.expandByPoint(nn),nn.addVectors(zn.max,ao.max),zn.expandByPoint(nn)):(zn.expandByPoint(ao.min),zn.expandByPoint(ao.max))}zn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)nn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(nn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),nn.add(ps)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new D,l[C]=new D;const c=new D,h=new D,f=new D,u=new Mt,d=new Mt,m=new Mt,_=new D,p=new D;function g(C,P,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,P),f.fromBufferAttribute(n,x),u.fromBufferAttribute(s,C),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,x),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const E=1/(d.x*m.y-m.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(E),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(E),a[C].add(_),a[P].add(_),a[x].add(_),l[C].add(p),l[P].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,P=y.length;C<P;++C){const x=y[C],E=x.start,U=x.count;for(let B=E,G=E+U;B<G;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new D,M=new D,A=new D,b=new D;function S(C){A.fromBufferAttribute(i,C),b.copy(A);const P=a[C];v.copy(P),v.sub(A.multiplyScalar(A.dot(P))).normalize(),M.crossVectors(b,P);const E=M.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,E)}for(let C=0,P=y.length;C<P;++C){const x=y[C],E=x.start,U=x.count;for(let B=E,G=E+U;B<G;B+=3)S(t.getX(B+0)),S(t.getX(B+1)),S(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new en(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new fe,wr=new pa,xa=new Er,Bu=new D,ya=new D,Ma=new D,Sa=new D,hc=new D,Ta=new D,zu=new D,Ea=new D;class Se extends ke{constructor(t=new Ye,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(hc.fromBufferAttribute(f,t),o?Ta.addScaledVector(hc,h):Ta.addScaledVector(hc.sub(e),h))}e.add(Ta)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),wr.copy(t.ray).recast(t.near),!(xa.containsPoint(wr.origin)===!1&&(wr.intersectSphere(xa,Bu)===null||wr.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(s).invert(),wr.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=v;M<A;M+=3){const b=a.getX(M),S=a.getX(M+1),C=a.getX(M+2);i=ba(this,g,t,n,c,h,f,b,S,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=ba(this,o,t,n,c,h,f,y,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const p=u[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=v;M<A;M+=3){const b=M,S=M+1,C=M+2;i=ba(this,g,t,n,c,h,f,b,S,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=p,v=p+1,M=p+2;i=ba(this,o,t,n,c,h,f,y,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function mg(r,t,e,n,i,s,o,a){let l;if(t.side===1?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===0,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:r}}function ba(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ya),r.getVertexPosition(l,Ma),r.getVertexPosition(c,Sa);const h=mg(r,t,e,n,ya,Ma,Sa,zu);if(h){const f=new D;mi.getBarycoord(zu,ya,Ma,Sa,f),i&&(h.uv=mi.getInterpolatedAttribute(i,a,l,c,f,new Mt)),s&&(h.uv1=mi.getInterpolatedAttribute(s,a,l,c,f,new Mt)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};mi.getNormal(ya,Ma,Sa,u.normal),h.face=u,h.barycoord=f}return h}class Ar extends Ye{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2));function m(_,p,g,y,v,M,A,b,S,C,P){const x=M/S,E=A/C,U=M/2,B=A/2,G=b/2,q=S+1,z=C+1;let $=0,V=0;const it=new D;for(let L=0;L<z;L++){const st=L*E-B;for(let Bt=0;Bt<q;Bt++){const Ft=Bt*x-U;it[_]=Ft*y,it[p]=st*v,it[g]=G,c.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[g]=b>0?1:-1,h.push(it.x,it.y,it.z),f.push(Bt/S),f.push(1-L/C),$+=1}}for(let L=0;L<C;L++)for(let st=0;st<S;st++){const Bt=u+st+q*L,Ft=u+st+q*(L+1),Y=u+(st+1)+q*(L+1),Q=u+(st+1)+q*L;l.push(Bt,Ft,Q),l.push(Ft,Y,Q),V+=6}a.addGroup(d,V,P),d+=V,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Mn(r){const t={};for(let e=0;e<r.length;e++){const n=ms(r[e]);for(const i in n)t[i]=n[i]}return t}function gg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ku(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const _g={clone:ms,merge:Mn};var vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=gg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gu extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new D,Hu=new Mt,Vu=new Mt;class Sn extends Gu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,Vu),e.subVectors(Vu,Hu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,_s=1;class yg extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sn(gs,_s,t,e);i.layers=this.layers,this.add(i);const s=new Sn(gs,_s,t,e);s.layers=this.layers,this.add(s);const o=new Sn(gs,_s,t,e);o.layers=this.layers,this.add(o);const a=new Sn(gs,_s,t,e);a.layers=this.layers,this.add(a);const l=new Sn(gs,_s,t,e);l.layers=this.layers,this.add(l);const c=new Sn(gs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wu extends yn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mg extends yr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ar(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const o=new Se(i,s),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new yg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const uc=new D,Sg=new D,Tg=new jt;class Cr{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=uc.subVectors(n,e).cross(Sg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tg.getNormalMatrix(t),i=this.coplanarPoint(uc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Er,wa=new D;class fc{constructor(t=new Cr,e=new Cr,n=new Cr,i=new Cr,s=new Cr,o=new Cr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],m=i[9],_=i[10],p=i[11],g=i[12],y=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,u-c,p-d,M-g).normalize(),n[1].setComponents(l+s,u+c,p+d,M+g).normalize(),n[2].setComponents(l+o,u+h,p+m,M+y).normalize(),n[3].setComponents(l-o,u-h,p-m,M-y).normalize(),n[4].setComponents(l-a,u-f,p-_,M-v).normalize(),e===2e3)n[5].setComponents(l+a,u+f,p+_,M+v).normalize();else if(e===2001)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wa.x=i.normal.x>0?t.max.x:t.min.x,wa.y=i.normal.y>0?t.max.y:t.min.y,wa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Eg(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Aa extends Ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const y=g*u-o;for(let v=0;v<c;v++){const M=v*f-s;m.push(M,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const v=y+c*g,M=y+c*(g+1),A=y+1+c*(g+1),b=y+1+c*g;d.push(v,M,b),d.push(M,A,b)}this.setIndex(d),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.width,t.height,t.widthSegments,t.heightSegments)}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
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
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ig=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,zg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$g=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
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
}`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,__=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,T_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,G_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,$_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qt={alphahash_fragment:bg,alphahash_pars_fragment:wg,alphamap_fragment:Ag,alphamap_pars_fragment:Cg,alphatest_fragment:Rg,alphatest_pars_fragment:Pg,aomap_fragment:Lg,aomap_pars_fragment:Dg,batching_pars_vertex:Ig,batching_vertex:Ug,begin_vertex:Ng,beginnormal_vertex:Fg,bsdfs:Og,iridescence_fragment:Bg,bumpmap_pars_fragment:zg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Gg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Vg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Yg,common:$g,cube_uv_reflection_fragment:Kg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:r_,envmap_pars_fragment:s_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:__,envmap_vertex:a_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:h_,fog_pars_fragment:u_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:v_,lights_toon_pars_fragment:x_,lights_phong_fragment:y_,lights_phong_pars_fragment:M_,lights_physical_fragment:S_,lights_physical_pars_fragment:T_,lights_fragment_begin:E_,lights_fragment_maps:b_,lights_fragment_end:w_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:P_,map_fragment:L_,map_pars_fragment:D_,map_particle_fragment:I_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:F_,morphinstance_vertex:O_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:k_,morphtarget_vertex:G_,normal_fragment_begin:H_,normal_fragment_maps:V_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:$_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:J_,opaque_fragment:j_,packing:Q_,premultiplied_alpha_fragment:t0,project_vertex:e0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:a0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:f0,skinnormal_vertex:d0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:y0,uv_pars_vertex:M0,uv_vertex:S0,worldpos_vertex:T0,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},gt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ti={basic:{uniforms:Mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Mn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Mn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Mn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Mn([gt.points,gt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Mn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Mn([gt.common,gt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Mn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Mn([gt.sprite,gt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Mn([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Mn([gt.lights,gt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Ti.physical={uniforms:Mn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Ca={r:0,b:0,g:0},Pr=new Rn,E0=new fe;function b0(r,t,e,n,i,s,o){const a=new Nt(0);let l=s===!0?0:1,c,h,f=null,u=0,d=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const M=m(y);M===null?g(a,l):M&&M.isColor&&(g(M,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,v){const M=m(v);M&&(M.isCubeTexture||M.mapping===306)?(h===void 0&&(h=new Se(new Ar(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ms(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pr.copy(v.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(Pr)),h.material.toneMapped=ge.getTransfer(M.colorSpace)!==Re,(f!==M||u!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Se(new Aa(2,2),new Si({name:"BackgroundMaterial",uniforms:ms(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ge.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,v){y.getRGB(Ca,ku(r)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:_,addToRenderList:p}}function w0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(x,E,U,B,G){let q=!1;const z=f(B,U,E);s!==z&&(s=z,c(s.object)),q=d(x,B,U,G),q&&m(x,B,U,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(x,E,U,B),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function f(x,E,U){const B=U.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let q=G[E.id];q===void 0&&(q={},G[E.id]=q);let z=q[B];return z===void 0&&(z=u(l()),q[B]=z),z}function u(x){const E=[],U=[],B=[];for(let G=0;G<e;G++)E[G]=0,U[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:B,object:x,attributes:{},index:null}}function d(x,E,U,B){const G=s.attributes,q=E.attributes;let z=0;const $=U.getAttributes();for(const V in $)if($[V].location>=0){const L=G[V];let st=q[V];if(st===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),L===void 0||L.attribute!==st||st&&L.data!==st.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function m(x,E,U,B){const G={},q=E.attributes;let z=0;const $=U.getAttributes();for(const V in $)if($[V].location>=0){let L=q[V];L===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const st={};st.attribute=L,L&&L.data&&(st.data=L.data),G[V]=st,z++}s.attributes=G,s.attributesNum=z,s.index=B}function _(){const x=s.newAttributes;for(let E=0,U=x.length;E<U;E++)x[E]=0}function p(x){g(x,0)}function g(x,E){const U=s.newAttributes,B=s.enabledAttributes,G=s.attributeDivisors;U[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),G[x]!==E&&(r.vertexAttribDivisor(x,E),G[x]=E)}function y(){const x=s.newAttributes,E=s.enabledAttributes;for(let U=0,B=E.length;U<B;U++)E[U]!==x[U]&&(r.disableVertexAttribArray(U),E[U]=0)}function v(x,E,U,B,G,q,z){z===!0?r.vertexAttribIPointer(x,E,U,G,q):r.vertexAttribPointer(x,E,U,B,G,q)}function M(x,E,U,B){_();const G=B.attributes,q=U.getAttributes(),z=E.defaultAttributeValues;for(const $ in q){const V=q[$];if(V.location>=0){let it=G[$];if(it===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const L=it.normalized,st=it.itemSize,Bt=t.get(it);if(Bt===void 0)continue;const Ft=Bt.buffer,Y=Bt.type,Q=Bt.bytesPerElement,ht=Y===r.INT||Y===r.UNSIGNED_INT||it.gpuType===1013;if(it.isInterleavedBufferAttribute){const lt=it.data,bt=lt.stride,Tt=it.offset;if(lt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)g(V.location+Lt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)p(V.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let Lt=0;Lt<V.locationSize;Lt++)v(V.location+Lt,st/V.locationSize,Y,L,bt*Q,(Tt+st/V.locationSize*Lt)*Q,ht)}else{if(it.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)g(V.location+lt,it.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let lt=0;lt<V.locationSize;lt++)v(V.location+lt,st/V.locationSize,Y,L,st*Q,st/V.locationSize*lt*Q,ht)}}else if(z!==void 0){const L=z[$];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}y()}function A(){C();for(const x in n){const E=n[x];for(const U in E){const B=E[U];for(const G in B)h(B[G].object),delete B[G];delete E[U]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const U in E){const B=E[U];for(const G in B)h(B[G].object),delete B[G];delete E[U]}delete n[x.id]}function S(x){for(const E in n){const U=n[E];if(U[x.id]===void 0)continue;const B=U[x.id];for(const G in B)h(B[G].object),delete B[G];delete U[x.id]}}function C(){P(),o=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function A0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];for(let _=0;_<u.length;_++)e.update(m,n,u[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==1023&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==1009&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==1015&&!C)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,maxSamples:b}}function R0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Cr,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,g=r.get(f);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let M=g.clippingState||null;l.value=M,M=h(m,u,v,d);for(let A=0;A!==v;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=d+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function P0(r){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class qu extends Gu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,Yu=[.125,.215,.35,.446,.526,.582],Lr=20,dc=new qu,$u=new Nt;let pc=null,mc=0,gc=0,_c=!1;const Dr=(1+Math.sqrt(5))/2,xs=1/Dr,Ku=[new D(-Dr,xs,0),new D(Dr,xs,0),new D(-xs,0,Dr),new D(xs,0,Dr),new D(0,Dr,-xs),new D(0,Dr,xs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,t.scissorTest=!1,Ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Ki,depthBuffer:!1},i=Zu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(s)),this._blurMaterial=D0(s,t,e)}return i}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,i){const a=new Sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor($u),h.toneMapping=0,h.autoClear=!1;const d=new oo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new Se(new Ar,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy($u),_=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;Ra(i,y*v,g>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ra(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ku[(i-s-1)%Ku.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Se(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),_=s/m,p=isFinite(s)?1+Math.floor(h*_):Lr;p>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Lr}`);const g=[];let y=0;for(let S=0;S<Lr;++S){const C=S/_,P=Math.exp(-C*C/2);g.push(P),S===0?y+=P:S<p&&(y+=2*P)}for(let S=0;S<g.length;S++)g[S]=g[S]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-vs?i-v+vs:0),b=4*(this._cubeSize-M);Ra(e,A,b,3*M,2*M),l.setRenderTarget(e),l.render(f,dc)}}function L0(r){const t=[],e=[],n=[];let i=r;const s=r-vs+1+Yu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-vs?l=Yu[o-r+vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,_=3,p=2,g=1,y=new Float32Array(_*m*d),v=new Float32Array(p*m*d),M=new Float32Array(g*m*d);for(let b=0;b<d;b++){const S=b%3*2/3-1,C=b>2?0:-1,P=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];y.set(P,_*m*b),v.set(u,p*m*b);const x=[b,b,b,b,b,b];M.set(x,g*m*b)}const A=new Ye;A.setAttribute("position",new en(y,_)),A.setAttribute("uv",new en(v,p)),A.setAttribute("faceIndex",new en(M,g)),t.push(A),i>vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zu(r,t,e){const n=new yr(r,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function D0(r,t,e){const n=new Float32Array(Lr),i=new D(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ju(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ju(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new vc(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new vc(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function U0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&la("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N0(r,t,e,n){const i={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}u.removeEventListener("dispose",o),delete i[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)t.update(u[m],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const _=d[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,M=y.length;v<M;v+=3){const A=y[v+0],b=y[v+1],S=y[v+2];u.push(A,b,b,S,S,A)}}else if(m!==void 0){const y=m.array;_=m.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const A=v+0,b=v+1,S=v+2;u.push(A,b,b,S,S,A)}}else return;const p=new(xu(u)?Fu:Nu)(u,1);p.version=_;const g=s.get(f);g&&t.remove(g),s.set(f,p)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function F0(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function c(u,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,u*o,m),e.update(d,n,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function f(u,d,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)c(u[g]/o,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,_,0,m);let g=0;for(let y=0;y<m;y++)g+=d[y];for(let y=0;y<_.length;y++)e.update(g,n,_[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function O0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function B0(r,t,e){const n=new WeakMap,i=new Me;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let P=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*A*4*f),S=new Eu(b,M,A,f);S.type=1015,S.needsUpdate=!0;const C=v*4;for(let x=0;x<f;x++){const E=p[x],U=g[x],B=y[x],G=M*A*4*x;for(let q=0;q<E.count;q++){const z=q*C;d===!0&&(i.fromBufferAttribute(E,q),b[G+z+0]=i.x,b[G+z+1]=i.y,b[G+z+2]=i.z,b[G+z+3]=0),m===!0&&(i.fromBufferAttribute(U,q),b[G+z+4]=i.x,b[G+z+5]=i.y,b[G+z+6]=i.z,b[G+z+7]=0),_===!0&&(i.fromBufferAttribute(B,q),b[G+z+8]=i.x,b[G+z+9]=i.y,b[G+z+10]=i.z,b[G+z+11]=B.itemSize===4?i.w:1)}}u={count:f,texture:S,size:new Mt(M,A)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function z0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Qu extends yn{constructor(t,e,n,i,s,o,a,l,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tf=new yn,ef=new Qu(1,1),nf=new Eu,rf=new sg,sf=new Wu,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function ys(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=of[i];if(s===void 0&&(s=new Float32Array(i),of[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Pa(r,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function k0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function G0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2fv(this.addr,t),je(e,t)}}function H0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;r.uniform3fv(this.addr,t),je(e,t)}}function V0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4fv(this.addr,t),je(e,t)}}function W0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Je(e,n))return;hf.set(n),r.uniformMatrix2fv(this.addr,!1,hf),je(e,n)}}function X0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Je(e,n))return;cf.set(n),r.uniformMatrix3fv(this.addr,!1,cf),je(e,n)}}function q0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Je(e,n))return;lf.set(n),r.uniformMatrix4fv(this.addr,!1,lf),je(e,n)}}function Y0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function $0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2iv(this.addr,t),je(e,t)}}function K0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3iv(this.addr,t),je(e,t)}}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4iv(this.addr,t),je(e,t)}}function J0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2uiv(this.addr,t),je(e,t)}}function Q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3uiv(this.addr,t),je(e,t)}}function tv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4uiv(this.addr,t),je(e,t)}}function ev(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ef.compareFunction=515,s=ef):s=tf,e.setTexture2D(t||s,i)}function nv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rf,i)}function iv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sf,i)}function rv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nf,i)}function sv(r){switch(r){case 5126:return k0;case 35664:return G0;case 35665:return H0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return K0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return j0;case 36295:return Q0;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}function ov(r,t){r.uniform1fv(this.addr,t)}function av(r,t){const e=ys(t,this.size,2);r.uniform2fv(this.addr,e)}function lv(r,t){const e=ys(t,this.size,3);r.uniform3fv(this.addr,e)}function cv(r,t){const e=ys(t,this.size,4);r.uniform4fv(this.addr,e)}function hv(r,t){const e=ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function uv(r,t){const e=ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function fv(r,t){const e=ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function dv(r,t){r.uniform1iv(this.addr,t)}function pv(r,t){r.uniform2iv(this.addr,t)}function mv(r,t){r.uniform3iv(this.addr,t)}function gv(r,t){r.uniform4iv(this.addr,t)}function _v(r,t){r.uniform1uiv(this.addr,t)}function vv(r,t){r.uniform2uiv(this.addr,t)}function xv(r,t){r.uniform3uiv(this.addr,t)}function yv(r,t){r.uniform4uiv(this.addr,t)}function Mv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tf,s[o])}function Sv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||rf,s[o])}function Tv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||sf,s[o])}function Ev(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||nf,s[o])}function bv(r){switch(r){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return hv;case 35675:return uv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return _v;case 36294:return vv;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Ev}}class wv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sv(e.type)}}class Av{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bv(e.type)}}class Cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function uf(r,t){r.seq.push(t),r.map[t.id]=t}function Rv(r,t,e){const n=r.name,i=n.length;for(yc.lastIndex=0;;){const s=yc.exec(n),o=yc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){uf(e,c===void 0?new wv(a,r,t):new Av(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Cv(a),uf(e,f)),e=f}}}class La{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Rv(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ff(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Pv=37297;let Lv=0;function Dv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Iv(r){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(r);let n;switch(t===e?n="":t===oa&&e===sa?n="LinearDisplayP3ToLinearSRGB":t===sa&&e===oa&&(n="LinearSRGBToLinearDisplayP3"),r){case Ki:case ia:return[n,"LinearTransferOETF"];case ti:case Hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function df(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Dv(r.getShaderSource(t),o)}else return i}function Uv(r,t){const e=Iv(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Nv(r,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Da=new D;function Fv(){ge.getLuminanceCoefficients(Da);const r=Da.x.toFixed(4),t=Da.y.toFixed(4),e=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function Bv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function lo(r){return r!==""}function pf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(r){return r.replace(kv,Hv)}const Gv=new Map;function Hv(r,t){let e=Qt[t];if(e===void 0){const n=Gv.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(r){return r.replace(Vv,Wv)}function Wv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _f(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function qv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function $v(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Kv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zv(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Xv(e),c=qv(e),h=Yv(e),f=$v(e),u=Kv(e),d=Ov(e),m=Bv(s),_=i.createProgram();let p,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(lo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(lo).join(`
`),g.length>0&&(g+=`
`)):(p=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),g=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Qt.tonemapping_pars_fragment:"",e.toneMapping!==0?Nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Uv("linearToOutputTexel",e.outputColorSpace),Fv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lo).join(`
`)),o=Mc(o),o=pf(o,e),o=mf(o,e),a=Mc(a),a=pf(a,e),a=mf(a,e),o=gf(o),a=gf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=y+p+o,M=y+g+a,A=ff(i,i.VERTEX_SHADER,v),b=ff(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(E){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(A).trim(),G=i.getShaderInfoLog(b).trim();let q=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,b);else{const $=df(i,A,"vertex"),V=df(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+$+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||G==="")&&(z=!1);z&&(E.diagnostics={runnable:q,programLog:U,vertexShader:{log:B,prefix:p},fragmentShader:{log:G,prefix:g}})}i.deleteShader(A),i.deleteShader(b),C=new La(i,_),P=zv(i,_)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let P;this.getAttributes=function(){return P===void 0&&S(this),P};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Pv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let Jv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qv(t),e.set(t,n)),n}}class Qv{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}}function tx(r,t,e,n,i,s,o){const a=new Ql,l=new jv,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,E,U,B,G){const q=B.fog,z=G.geometry,$=x.isMeshStandardMaterial?B.environment:null,V=(x.isMeshStandardMaterial?e:t).get(x.envMap||$),it=V&&V.mapping===306?V.image.height:null,L=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Bt=st!==void 0?st.length:0;let Ft=0;z.morphAttributes.position!==void 0&&(Ft=1),z.morphAttributes.normal!==void 0&&(Ft=2),z.morphAttributes.color!==void 0&&(Ft=3);let Y,Q,ht,lt;if(L){const Pt=Ti[L];Y=Pt.vertexShader,Q=Pt.fragmentShader}else Y=x.vertexShader,Q=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),lt=l.getFragmentShaderID(x);const bt=r.getRenderTarget(),Tt=G.isInstancedMesh===!0,Lt=G.isBatchedMesh===!0,Kt=!!x.map,Ht=!!x.matcap,I=!!V,ce=!!x.aoMap,Vt=!!x.lightMap,qt=!!x.bumpMap,k=!!x.normalMap,ne=!!x.displacementMap,Ut=!!x.emissiveMap,R=!!x.metalnessMap,T=!!x.roughnessMap,X=x.anisotropy>0,J=x.clearcoat>0,nt=x.dispersion>0,Z=x.iridescence>0,Et=x.sheen>0,ot=x.transmission>0,pt=X&&!!x.anisotropyMap,$t=J&&!!x.clearcoatMap,rt=J&&!!x.clearcoatNormalMap,xt=J&&!!x.clearcoatRoughnessMap,yt=Z&&!!x.iridescenceMap,zt=Z&&!!x.iridescenceThicknessMap,vt=Et&&!!x.sheenColorMap,Zt=Et&&!!x.sheenRoughnessMap,Wt=!!x.specularMap,he=!!x.specularColorMap,N=!!x.specularIntensityMap,et=ot&&!!x.transmissionMap,K=ot&&!!x.thicknessMap,j=!!x.gradientMap,ct=!!x.alphaMap,ut=x.alphaTest>0,Jt=!!x.alphaHash,we=!!x.extensions;let Ue=0;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ue=r.toneMapping);const oe={shaderID:L,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:Q,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Lt,batchingColor:Lt&&G._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&G.instanceColor!==null,instancingMorph:Tt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ki,alphaToCoverage:!!x.alphaToCoverage,map:Kt,matcap:Ht,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:it,aoMap:ce,lightMap:Vt,bumpMap:qt,normalMap:k,displacementMap:d&&ne,emissiveMap:Ut,normalMapObjectSpace:k&&x.normalMapType===1,normalMapTangentSpace:k&&x.normalMapType===0,metalnessMap:R,roughnessMap:T,anisotropy:X,anisotropyMap:pt,clearcoat:J,clearcoatMap:$t,clearcoatNormalMap:rt,clearcoatRoughnessMap:xt,dispersion:nt,iridescence:Z,iridescenceMap:yt,iridescenceThicknessMap:zt,sheen:Et,sheenColorMap:vt,sheenRoughnessMap:Zt,specularMap:Wt,specularColorMap:he,specularIntensityMap:N,transmission:ot,transmissionMap:et,thicknessMap:K,gradientMap:j,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:ut,alphaHash:Jt,combine:x.combine,mapUv:Kt&&p(x.map.channel),aoMapUv:ce&&p(x.aoMap.channel),lightMapUv:Vt&&p(x.lightMap.channel),bumpMapUv:qt&&p(x.bumpMap.channel),normalMapUv:k&&p(x.normalMap.channel),displacementMapUv:ne&&p(x.displacementMap.channel),emissiveMapUv:Ut&&p(x.emissiveMap.channel),metalnessMapUv:R&&p(x.metalnessMap.channel),roughnessMapUv:T&&p(x.roughnessMap.channel),anisotropyMapUv:pt&&p(x.anisotropyMap.channel),clearcoatMapUv:$t&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&p(x.sheenRoughnessMap.channel),specularMapUv:Wt&&p(x.specularMap.channel),specularColorMapUv:he&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:et&&p(x.transmissionMap.channel),thicknessMapUv:K&&p(x.thicknessMap.channel),alphaMapUv:ct&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(k||X),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(Kt||ct),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Ft,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Kt&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function y(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(E,x),M(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const E=_[x.type];let U;if(E){const B=Ti[E];U=_g.clone(B.uniforms)}else U=x.uniforms;return U}function b(x,E){let U;for(let B=0,G=h.length;B<G;B++){const q=h[B];if(q.cacheKey===E){U=q,++U.usedTimes;break}}return U===void 0&&(U=new Zv(r,E,x,s),h.push(U)),U}function S(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function C(x){l.remove(x)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:A,acquireProgram:b,releaseProgram:S,releaseShaderCache:C,programs:h,dispose:P}}function ex(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function nx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,u,d,m,_,p){let g=r[t];return g===void 0?(g={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:p},r[t]=g):(g.id=f.id,g.object=f,g.geometry=u,g.material=d,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=_,g.group=p),t++,g}function a(f,u,d,m,_,p){const g=o(f,u,d,m,_,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function l(f,u,d,m,_,p){const g=o(f,u,d,m,_,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function c(f,u){e.length>1&&e.sort(f||nx),n.length>1&&n.sort(u||vf),i.length>1&&i.sort(u||vf)}function h(){for(let f=t,u=r.length;f<u;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function ix(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new xf,r.set(n,[o])):i>=s.length?(o=new xf,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function rx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Nt};break;case"SpotLight":e={position:new D,direction:new D,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function sx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ox=0;function ax(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function lx(r){const t=new rx,e=sx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new fe,o=new fe;function a(c){let h=0,f=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,y=0,v=0,M=0,A=0,b=0,S=0;c.sort(ax);for(let P=0,x=c.length;P<x;P++){const E=c[P],U=E.color,B=E.intensity,G=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*B,f+=U.g*B,u+=U.b*B;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],B);S++}else if(E.isDirectionalLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,V=e.get(E);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=E.shadow.matrix,y++}n.directional[d]=z,d++}else if(E.isSpotLight){const z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(U).multiplyScalar(B),z.distance=G,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[_]=z;const $=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,$.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[_]=$.matrix,E.castShadow){const V=e.get(E);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,M++}_++}else if(E.isRectAreaLight){const z=t.get(E);z.color.copy(U).multiplyScalar(B),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=z,p++}else if(E.isPointLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const $=E.shadow,V=e.get(E);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=E.shadow.matrix,v++}n.point[m]=z,m++}else if(E.isHemisphereLight){const z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(B),z.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[g]=z,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==g||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,C.directionalLength=d,C.pointLength=m,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=g,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=S,n.version=ox++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const v=c[g];if(v.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function yf(r){const t=new lx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cx(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new yf(r),t.set(i,[a])):s>=o.length?(a=new yf(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class hx extends br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ux extends br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function px(r,t,e){let n=new fc;const i=new Mt,s=new Mt,o=new Me,a=new hx({depthPacking:3201}),l=new ux,c={},h=e.maxTextureSize,f={0:1,1:0,2:2},u=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:fx,fragmentShader:dx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ye;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;this.render=function(b,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const P=r.getRenderTarget(),x=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),U=r.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=g!==3&&this.type===3,G=g===3&&this.type!==3;for(let q=0,z=b.length;q<z;q++){const $=b[q],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const it=V.getFrameExtents();if(i.multiply(it),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,V.mapSize.y=s.y)),V.map===null||B===!0||G===!0){const st=this.type!==3?{minFilter:1003,magFilter:1003}:{};V.map!==null&&V.map.dispose(),V.map=new yr(i.x,i.y,st),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const L=V.getViewportCount();for(let st=0;st<L;st++){const Bt=V.getViewport(st);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),U.viewport(o),V.updateMatrices($,st),n=V.getFrustum(),M(S,C,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===3&&y(V,C),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,x,E)};function y(b,S){const C=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yr(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(S,null,C,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(S,null,C,d,_,null)}function v(b,S,C,P){let x=null;const E=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)x=E;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=x.uuid,B=S.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let q=G[B];q===void 0&&(q=x.clone(),G[B]=q,S.addEventListener("dispose",A)),x=q}if(x.visible=S.visible,x.wireframe=S.wireframe,P===3?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:f[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=C}return x}function M(b,S,C,P,x){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===3)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const B=t.update(b),G=b.material;if(Array.isArray(G)){const q=B.groups;for(let z=0,$=q.length;z<$;z++){const V=q[z],it=G[V.materialIndex];if(it&&it.visible){const L=v(b,it,P,x);b.onBeforeShadow(r,b,S,C,B,L,V),r.renderBufferDirect(C,null,B,L,b,V),b.onAfterShadow(r,b,S,C,B,L,V)}}}else if(G.visible){const q=v(b,G,P,x);b.onBeforeShadow(r,b,S,C,B,q,null),r.renderBufferDirect(C,null,B,q,b,null),b.onAfterShadow(r,b,S,C,B,q,null)}}const U=b.children;for(let B=0,G=U.length;B<G;B++)M(U[B],S,C,P,x)}function A(b){b.target.removeEventListener("dispose",A);for(const C in c){const P=c[C],x=b.target.uuid;x in P&&(P[x].dispose(),delete P[x])}}}const mx={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function gx(r){function t(){let N=!1;const et=new Me;let K=null;const j=new Me(0,0,0,0);return{setMask:function(ct){K!==ct&&!N&&(r.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){N=ct},setClear:function(ct,ut,Jt,we,Ue){Ue===!0&&(ct*=we,ut*=we,Jt*=we),et.set(ct,ut,Jt,we),j.equals(et)===!1&&(r.clearColor(ct,ut,Jt,we),j.copy(et))},reset:function(){N=!1,K=null,j.set(-1,0,0,0)}}}function e(){let N=!1,et=!1,K=null,j=null,ct=null;return{setReversed:function(ut){et=ut},setTest:function(ut){ut?ht(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(ut){K!==ut&&!N&&(r.depthMask(ut),K=ut)},setFunc:function(ut){if(et&&(ut=mx[ut]),j!==ut){switch(ut){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ut}},setLocked:function(ut){N=ut},setClear:function(ut){ct!==ut&&(r.clearDepth(ut),ct=ut)},reset:function(){N=!1,K=null,j=null,ct=null}}}function n(){let N=!1,et=null,K=null,j=null,ct=null,ut=null,Jt=null,we=null,Ue=null;return{setTest:function(oe){N||(oe?ht(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(oe){et!==oe&&!N&&(r.stencilMask(oe),et=oe)},setFunc:function(oe,Pt,At){(K!==oe||j!==Pt||ct!==At)&&(r.stencilFunc(oe,Pt,At),K=oe,j=Pt,ct=At)},setOp:function(oe,Pt,At){(ut!==oe||Jt!==Pt||we!==At)&&(r.stencilOp(oe,Pt,At),ut=oe,Jt=Pt,we=At)},setLocked:function(oe){N=oe},setClear:function(oe){Ue!==oe&&(r.clearStencil(oe),Ue=oe)},reset:function(){N=!1,et=null,K=null,j=null,ct=null,ut=null,Jt=null,we=null,Ue=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,m=!1,_=null,p=null,g=null,y=null,v=null,M=null,A=null,b=new Nt(0,0,0),S=0,C=!1,P=null,x=null,E=null,U=null,B=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),q=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=z>=2);let V=null,it={};const L=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),Bt=new Me().fromArray(L),Ft=new Me().fromArray(st);function Y(N,et,K,j){const ct=new Uint8Array(4),ut=r.createTexture();r.bindTexture(N,ut),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<K;Jt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(et,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(et+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return ut}const Q={};Q[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(r.DEPTH_TEST),s.setFunc(3),Vt(!1),qt(1),ht(r.CULL_FACE),I(0);function ht(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function lt(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function bt(N,et){return h[N]!==et?(r.bindFramebuffer(N,et),h[N]=et,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=et),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=et),!0):!1}function Tt(N,et){let K=u,j=!1;if(N){K=f.get(et),K===void 0&&(K=[],f.set(et,K));const ct=N.textures;if(K.length!==ct.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Jt=ct.length;ut<Jt;ut++)K[ut]=r.COLOR_ATTACHMENT0+ut;K.length=ct.length,j=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,j=!0);j&&r.drawBuffers(K)}function Lt(N){return d!==N?(r.useProgram(N),d=N,!0):!1}const Kt={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};Kt[103]=r.MIN,Kt[104]=r.MAX;const Ht={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function I(N,et,K,j,ct,ut,Jt,we,Ue,oe){if(N===0){m===!0&&(lt(r.BLEND),m=!1);return}if(m===!1&&(ht(r.BLEND),m=!0),N!==5){if(N!==_||oe!==C){if((p!==100||v!==100)&&(r.blendEquation(r.FUNC_ADD),p=100,v=100),oe)switch(N){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,y=null,M=null,A=null,b.set(0,0,0),S=0,_=N,C=oe}return}ct=ct||et,ut=ut||K,Jt=Jt||j,(et!==p||ct!==v)&&(r.blendEquationSeparate(Kt[et],Kt[ct]),p=et,v=ct),(K!==g||j!==y||ut!==M||Jt!==A)&&(r.blendFuncSeparate(Ht[K],Ht[j],Ht[ut],Ht[Jt]),g=K,y=j,M=ut,A=Jt),(we.equals(b)===!1||Ue!==S)&&(r.blendColor(we.r,we.g,we.b,Ue),b.copy(we),S=Ue),_=N,C=!1}function ce(N,et){N.side===2?lt(r.CULL_FACE):ht(r.CULL_FACE);let K=N.side===1;et&&(K=!K),Vt(K),N.blending===1&&N.transparent===!1?I(0):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const j=N.stencilWrite;o.setTest(j),j&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(N){P!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),P=N)}function qt(N){N!==0?(ht(r.CULL_FACE),N!==x&&(N===1?r.cullFace(r.BACK):N===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),x=N}function k(N){N!==E&&(q&&r.lineWidth(N),E=N)}function ne(N,et,K){N?(ht(r.POLYGON_OFFSET_FILL),(U!==et||B!==K)&&(r.polygonOffset(et,K),U=et,B=K)):lt(r.POLYGON_OFFSET_FILL)}function Ut(N){N?ht(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function R(N){N===void 0&&(N=r.TEXTURE0+G-1),V!==N&&(r.activeTexture(N),V=N)}function T(N,et,K){K===void 0&&(V===null?K=r.TEXTURE0+G-1:K=V);let j=it[K];j===void 0&&(j={type:void 0,texture:void 0},it[K]=j),(j.type!==N||j.texture!==et)&&(V!==K&&(r.activeTexture(K),V=K),r.bindTexture(N,et||Q[N]),j.type=N,j.texture=et)}function X(){const N=it[V];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){Bt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Bt.copy(N))}function vt(N){Ft.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Ft.copy(N))}function Zt(N,et){let K=l.get(et);K===void 0&&(K=new WeakMap,l.set(et,K));let j=K.get(N);j===void 0&&(j=r.getUniformBlockIndex(et,N.name),K.set(N,j))}function Wt(N,et){const j=l.get(et).get(N);a.get(et)!==j&&(r.uniformBlockBinding(et,j,N.__bindingPointIndex),a.set(et,j))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,it={},h={},f=new WeakMap,u=[],d=null,m=!1,_=null,p=null,g=null,y=null,v=null,M=null,A=null,b=new Nt(0,0,0),S=0,C=!1,P=null,x=null,E=null,U=null,B=null,Bt.set(0,0,r.canvas.width,r.canvas.height),Ft.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ht,disable:lt,bindFramebuffer:bt,drawBuffers:Tt,useProgram:Lt,setBlending:I,setMaterial:ce,setFlipSided:Vt,setCullFace:qt,setLineWidth:k,setPolygonOffset:ne,setScissorTest:Ut,activeTexture:R,bindTexture:T,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:nt,texImage2D:xt,texImage3D:yt,updateUBOMapping:Zt,uniformBlockBinding:Wt,texStorage2D:$t,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:zt,viewport:vt,reset:he}}function Mf(r,t,e,n){const i=_x(n);switch(e){case 1021:return r*t;case 1024:return r*t;case 1025:return r*t*2;case 1028:return r*t/i.components*i.byteLength;case 1029:return r*t/i.components*i.byteLength;case 1030:return r*t*2/i.components*i.byteLength;case 1031:return r*t*2/i.components*i.byteLength;case 1022:return r*t*3/i.components*i.byteLength;case 1023:return r*t*4/i.components*i.byteLength;case 1033:return r*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _x(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function vx(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return d?new OffscreenCanvas(R,T):aa("canvas")}function _(R,T,X){let J=1;const nt=Ut(R);if((nt.width>X||nt.height>X)&&(J=X/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(J*nt.width),Et=Math.floor(J*nt.height);f===void 0&&(f=m(Z,Et));const ot=T?m(Z,Et):f;return ot.width=Z,ot.height=Et,ot.getContext("2d").drawImage(R,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Et+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==1003&&R.minFilter!==1006}function g(R){r.generateMipmap(R)}function y(R,T,X,J,nt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=T;if(T===r.RED&&(X===r.FLOAT&&(Z=r.R32F),X===r.HALF_FLOAT&&(Z=r.R16F),X===r.UNSIGNED_BYTE&&(Z=r.R8)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.R8UI),X===r.UNSIGNED_SHORT&&(Z=r.R16UI),X===r.UNSIGNED_INT&&(Z=r.R32UI),X===r.BYTE&&(Z=r.R8I),X===r.SHORT&&(Z=r.R16I),X===r.INT&&(Z=r.R32I)),T===r.RG&&(X===r.FLOAT&&(Z=r.RG32F),X===r.HALF_FLOAT&&(Z=r.RG16F),X===r.UNSIGNED_BYTE&&(Z=r.RG8)),T===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RG8UI),X===r.UNSIGNED_SHORT&&(Z=r.RG16UI),X===r.UNSIGNED_INT&&(Z=r.RG32UI),X===r.BYTE&&(Z=r.RG8I),X===r.SHORT&&(Z=r.RG16I),X===r.INT&&(Z=r.RG32I)),T===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),X===r.UNSIGNED_INT&&(Z=r.RGB32UI),X===r.BYTE&&(Z=r.RGB8I),X===r.SHORT&&(Z=r.RGB16I),X===r.INT&&(Z=r.RGB32I)),T===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),X===r.UNSIGNED_INT&&(Z=r.RGBA32UI),X===r.BYTE&&(Z=r.RGBA8I),X===r.SHORT&&(Z=r.RGBA16I),X===r.INT&&(Z=r.RGBA32I)),T===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),T===r.RGBA){const Et=nt?ra:ge.getTransfer(J);X===r.FLOAT&&(Z=r.RGBA32F),X===r.HALF_FLOAT&&(Z=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Z=Et===Re?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(R,T){let X;return R?T===null||T===1014||T===1020?X=r.DEPTH24_STENCIL8:T===1015?X=r.DEPTH32F_STENCIL8:T===1012&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===1014||T===1020?X=r.DEPTH_COMPONENT24:T===1015?X=r.DEPTH_COMPONENT32F:T===1012&&(X=r.DEPTH_COMPONENT16),X}function M(R,T){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){const T=R.target;T.removeEventListener("dispose",A),S(T),T.isVideoTexture&&h.delete(T)}function b(R){const T=R.target;T.removeEventListener("dispose",b),P(T)}function S(R){const T=n.get(R);if(T.__webglInit===void 0)return;const X=R.source,J=u.get(X);if(J){const nt=J[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(R),Object.keys(J).length===0&&u.delete(X)}n.remove(R)}function C(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const X=R.source,J=u.get(X);delete J[T.__cacheKey],o.memory.textures--}function P(R){const T=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let nt=0;nt<T.__webglFramebuffer[J].length;nt++)r.deleteFramebuffer(T.__webglFramebuffer[J][nt]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=R.textures;for(let J=0,nt=X.length;J<nt;J++){const Z=n.get(X[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(R)}let x=0;function E(){x=0}function U(){const R=x;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),x+=1,R}function B(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function G(R,T){const X=n.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(X,R,T);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function q(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ft(X,R,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function z(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ft(X,R,T);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function $(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Y(X,R,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}const V={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},it={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},L={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function st(R,T){if(T.type===1015&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===1006||T.magFilter===1007||T.magFilter===1005||T.magFilter===1008||T.minFilter===1006||T.minFilter===1007||T.minFilter===1005||T.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,it[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,it[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===1003||T.minFilter!==1005&&T.minFilter!==1008||T.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Bt(R,T){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",A));const J=T.source;let nt=u.get(J);nt===void 0&&(nt={},u.set(J,nt));const Z=B(T);if(Z!==R.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),nt[Z].usedTimes++;const Et=nt[R.__cacheKey];Et!==void 0&&(nt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&C(T)),R.__cacheKey=Z,R.__webglTexture=nt[Z].texture}return X}function Ft(R,T,X){let J=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=r.TEXTURE_3D);const nt=Bt(R,T),Z=T.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+X);const Et=n.get(Z);if(Z.version!==Et.__version||nt===!0){e.activeTexture(r.TEXTURE0+X);const ot=ge.getPrimaries(ge.workingColorSpace),pt=T.colorSpace===$i?null:ge.getPrimaries(T.colorSpace),$t=T.colorSpace===$i||ot===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let rt=_(T.image,!1,i.maxTextureSize);rt=ne(T,rt);const xt=s.convert(T.format,T.colorSpace),yt=s.convert(T.type);let zt=y(T.internalFormat,xt,yt,T.colorSpace,T.isVideoTexture);st(J,T);let vt;const Zt=T.mipmaps,Wt=T.isVideoTexture!==!0,he=Et.__version===void 0||nt===!0,N=Z.dataReady,et=M(T,rt);if(T.isDepthTexture)zt=v(T.format===1027,T.type),he&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,zt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,zt,rt.width,rt.height,0,xt,yt,null));else if(T.isDataTexture)if(Zt.length>0){Wt&&he&&e.texStorage2D(r.TEXTURE_2D,et,zt,Zt[0].width,Zt[0].height);for(let K=0,j=Zt.length;K<j;K++)vt=Zt[K],Wt?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,vt.width,vt.height,xt,yt,vt.data):e.texImage2D(r.TEXTURE_2D,K,zt,vt.width,vt.height,0,xt,yt,vt.data);T.generateMipmaps=!1}else Wt?(he&&e.texStorage2D(r.TEXTURE_2D,et,zt,rt.width,rt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,yt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,zt,rt.width,rt.height,0,xt,yt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Wt&&he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,zt,Zt[0].width,Zt[0].height,rt.depth);for(let K=0,j=Zt.length;K<j;K++)if(vt=Zt[K],T.format!==1023)if(xt!==null)if(Wt){if(N)if(T.layerUpdates.size>0){const ct=Mf(vt.width,vt.height,T.format,T.type);for(const ut of T.layerUpdates){const Jt=vt.data.subarray(ut*ct/vt.data.BYTES_PER_ELEMENT,(ut+1)*ct/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ut,vt.width,vt.height,1,xt,Jt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,rt.depth,xt,vt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,zt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,rt.depth,xt,yt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,zt,vt.width,vt.height,rt.depth,0,xt,yt,vt.data)}else{Wt&&he&&e.texStorage2D(r.TEXTURE_2D,et,zt,Zt[0].width,Zt[0].height);for(let K=0,j=Zt.length;K<j;K++)vt=Zt[K],T.format!==1023?xt!==null?Wt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,zt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,vt.width,vt.height,xt,yt,vt.data):e.texImage2D(r.TEXTURE_2D,K,zt,vt.width,vt.height,0,xt,yt,vt.data)}else if(T.isDataArrayTexture)if(Wt){if(he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,zt,rt.width,rt.height,rt.depth),N)if(T.layerUpdates.size>0){const K=Mf(rt.width,rt.height,T.format,T.type);for(const j of T.layerUpdates){const ct=rt.data.subarray(j*K/rt.data.BYTES_PER_ELEMENT,(j+1)*K/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,xt,yt,ct)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,yt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,rt.width,rt.height,rt.depth,0,xt,yt,rt.data);else if(T.isData3DTexture)Wt?(he&&e.texStorage3D(r.TEXTURE_3D,et,zt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,yt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,zt,rt.width,rt.height,rt.depth,0,xt,yt,rt.data);else if(T.isFramebufferTexture){if(he)if(Wt)e.texStorage2D(r.TEXTURE_2D,et,zt,rt.width,rt.height);else{let K=rt.width,j=rt.height;for(let ct=0;ct<et;ct++)e.texImage2D(r.TEXTURE_2D,ct,zt,K,j,0,xt,yt,null),K>>=1,j>>=1}}else if(Zt.length>0){if(Wt&&he){const K=Ut(Zt[0]);e.texStorage2D(r.TEXTURE_2D,et,zt,K.width,K.height)}for(let K=0,j=Zt.length;K<j;K++)vt=Zt[K],Wt?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,xt,yt,vt):e.texImage2D(r.TEXTURE_2D,K,zt,xt,yt,vt);T.generateMipmaps=!1}else if(Wt){if(he){const K=Ut(rt);e.texStorage2D(r.TEXTURE_2D,et,zt,K.width,K.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,yt,rt)}else e.texImage2D(r.TEXTURE_2D,0,zt,xt,yt,rt);p(T)&&g(J),Et.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Y(R,T,X){if(T.image.length!==6)return;const J=Bt(R,T),nt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const Z=n.get(nt);if(nt.version!==Z.__version||J===!0){e.activeTexture(r.TEXTURE0+X);const Et=ge.getPrimaries(ge.workingColorSpace),ot=T.colorSpace===$i?null:ge.getPrimaries(T.colorSpace),pt=T.colorSpace===$i||Et===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const $t=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!$t&&!rt?xt[j]=_(T.image[j],!0,i.maxCubemapSize):xt[j]=rt?T.image[j].image:T.image[j],xt[j]=ne(T,xt[j]);const yt=xt[0],zt=s.convert(T.format,T.colorSpace),vt=s.convert(T.type),Zt=y(T.internalFormat,zt,vt,T.colorSpace),Wt=T.isVideoTexture!==!0,he=Z.__version===void 0||J===!0,N=nt.dataReady;let et=M(T,yt);st(r.TEXTURE_CUBE_MAP,T);let K;if($t){Wt&&he&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,Zt,yt.width,yt.height);for(let j=0;j<6;j++){K=xt[j].mipmaps;for(let ct=0;ct<K.length;ct++){const ut=K[ct];T.format!==1023?zt!==null?Wt?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ut.width,ut.height,zt,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Zt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ut.width,ut.height,zt,vt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Zt,ut.width,ut.height,0,zt,vt,ut.data)}}}else{if(K=T.mipmaps,Wt&&he){K.length>0&&et++;const j=Ut(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,Zt,j.width,j.height)}for(let j=0;j<6;j++)if(rt){Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,zt,vt,xt[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Zt,xt[j].width,xt[j].height,0,zt,vt,xt[j].data);for(let ct=0;ct<K.length;ct++){const Jt=K[ct].image[j].image;Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Jt.width,Jt.height,zt,vt,Jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Zt,Jt.width,Jt.height,0,zt,vt,Jt.data)}}else{Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,zt,vt,xt[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Zt,zt,vt,xt[j]);for(let ct=0;ct<K.length;ct++){const ut=K[ct];Wt?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,zt,vt,ut.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Zt,zt,vt,ut.image[j])}}}p(T)&&g(r.TEXTURE_CUBE_MAP),Z.__version=nt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Q(R,T,X,J,nt,Z){const Et=s.convert(X.format,X.colorSpace),ot=s.convert(X.type),pt=y(X.internalFormat,Et,ot,X.colorSpace);if(!n.get(T).__hasExternalTextures){const rt=Math.max(1,T.width>>Z),xt=Math.max(1,T.height>>Z);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,pt,rt,xt,T.depth,0,Et,ot,null):e.texImage2D(nt,Z,pt,rt,xt,0,Et,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),qt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,nt,n.get(X).__webglTexture,0,Vt(T)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,nt,n.get(X).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(R,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const J=T.depthTexture,nt=J&&J.isDepthTexture?J.type:null,Z=v(T.stencilBuffer,nt),Et=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=Vt(T);qt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Z,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Z,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Z,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,R)}else{const J=T.textures;for(let nt=0;nt<J.length;nt++){const Z=J[nt],Et=s.convert(Z.format,Z.colorSpace),ot=s.convert(Z.type),pt=y(Z.internalFormat,Et,ot,Z.colorSpace),$t=Vt(T);X&&qt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,pt,T.width,T.height):qt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const J=n.get(T.depthTexture).__webglTexture,nt=Vt(T);if(T.depthTexture.format===1026)qt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(T.depthTexture.format===1027)qt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function bt(R){const T=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=J}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");lt(T.__webglFramebuffer,R)}else if(X){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=r.createRenderbuffer(),ht(T.__webglDepthbuffer[J],R,!1);else{const nt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ht(T.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,nt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(R,T,X){const J=n.get(R);T!==void 0&&Q(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&bt(R)}function Lt(R){const T=R.texture,X=n.get(R),J=n.get(T);R.addEventListener("dispose",b);const nt=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=T.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ot]=[];for(let pt=0;pt<T.mipmaps.length;pt++)X.__webglFramebuffer[ot][pt]=r.createFramebuffer()}else X.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ot=0;ot<T.mipmaps.length;ot++)X.__webglFramebuffer[ot]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Et)for(let ot=0,pt=nt.length;ot<pt;ot++){const $t=n.get(nt[ot]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&qt(R)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ot=0;ot<nt.length;ot++){const pt=nt[ot];X.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ot]);const $t=s.convert(pt.format,pt.colorSpace),rt=s.convert(pt.type),xt=y(pt.internalFormat,$t,rt,pt.colorSpace,R.isXRRenderTarget===!0),yt=Vt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,xt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,X.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),st(r.TEXTURE_CUBE_MAP,T);for(let ot=0;ot<6;ot++)if(T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)Q(X.__webglFramebuffer[ot][pt],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else Q(X.__webglFramebuffer[ot],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(T)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,pt=nt.length;ot<pt;ot++){const $t=nt[ot],rt=n.get($t);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),st(r.TEXTURE_2D,$t),Q(X.__webglFramebuffer,R,$t,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),p($t)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),st(ot,T),T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)Q(X.__webglFramebuffer[pt],R,T,r.COLOR_ATTACHMENT0,ot,pt);else Q(X.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,ot,0);p(T)&&g(ot),e.unbindTexture()}R.depthBuffer&&bt(R)}function Kt(R){const T=R.textures;for(let X=0,J=T.length;X<J;X++){const nt=T[X];if(p(nt)){const Z=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Et=n.get(nt).__webglTexture;e.bindTexture(Z,Et),g(Z),e.unbindTexture()}}}const Ht=[],I=[];function ce(R){if(R.samples>0){if(qt(R)===!1){const T=R.textures,X=R.width,J=R.height;let nt=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(R),ot=T.length>1;if(ot)for(let pt=0;pt<T.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let pt=0;pt<T.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[pt]);const $t=n.get(T[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,X,J,0,0,X,J,nt,r.NEAREST),l===!0&&(Ht.length=0,I.length=0,Ht.push(r.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ht.push(Z),I.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<T.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[pt]);const $t=n.get(T[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Vt(R){return Math.min(i.maxSamples,R.samples)}function qt(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(R){const T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function ne(R,T){const X=R.colorSpace,J=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Ki&&X!==$i&&(ge.getTransfer(X)===Re?(J!==1023||nt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function Ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Tt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function xx(r,t){function e(n,i=$i){let s;const o=ge.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return o===Re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return o===Re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class yx extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bi extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
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

}`;class Ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new yn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Si({vertexShader:Sx,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends ts{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=new Ex,p=e.getContextAttributes();let g=null,y=null;const v=[],M=[],A=new Mt;let b=null;const S=new Sn;S.layers.enable(1),S.viewport=new Me;const C=new Sn;C.layers.enable(2),C.viewport=new Me;const P=[S,C],x=new yx;x.layers.enable(1),x.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=v[Y];return Q===void 0&&(Q=new Sc,v[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=v[Y];return Q===void 0&&(Q=new Sc,v[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=v[Y];return Q===void 0&&(Q=new Sc,v[Y]=Q),Q.getHandSpace()};function B(Y){const Q=M.indexOf(Y.inputSource);if(Q===-1)return;const ht=v[Q];ht!==void 0&&(ht.update(Y.inputSource,Y.frame,c||o),ht.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const Q=M[Y];Q!==null&&(M[Y]=null,v[Y].disconnect(Q))}E=null,U=null,_.reset(),t.setRenderTarget(g),d=null,u=null,f=null,i=null,y=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new yr(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ht=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?1027:1026,ht=p.stencil?1020:1014);const bt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new yr(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Qu(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let Q=0;Q<Y.removed.length;Q++){const ht=Y.removed[Q],lt=M.indexOf(ht);lt>=0&&(M[lt]=null,v[lt].disconnect(ht))}for(let Q=0;Q<Y.added.length;Q++){const ht=Y.added[Q];let lt=M.indexOf(ht);if(lt===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=M.length){M.push(ht),lt=Tt;break}else if(M[Tt]===null){M[Tt]=ht,lt=Tt;break}if(lt===-1)break}const bt=v[lt];bt&&bt.connect(ht)}}const z=new D,$=new D;function V(Y,Q,ht){z.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ht.matrixWorld);const lt=z.distanceTo($),bt=Q.projectionMatrix.elements,Tt=ht.projectionMatrix.elements,Lt=bt[14]/(bt[10]-1),Kt=bt[14]/(bt[10]+1),Ht=(bt[9]+1)/bt[5],I=(bt[9]-1)/bt[5],ce=(bt[8]-1)/bt[0],Vt=(Tt[8]+1)/Tt[0],qt=Lt*ce,k=Lt*Vt,ne=lt/(-ce+Vt),Ut=ne*-ce;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ut),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=Lt+ne,T=Kt+ne,X=qt-Ut,J=k+(lt-Ut),nt=Ht*Kt/T*R,Z=I*Kt/T*R;Y.projectionMatrix.makePerspective(X,J,nt,Z,R,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,ht=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),x.near=C.near=S.near=Q,x.far=C.far=S.far=ht,(E!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,U=x.far);const lt=Y.parent,bt=x.cameras;it(x,lt);for(let Tt=0;Tt<bt.length;Tt++)it(bt[Tt],lt);bt.length===2?V(x,S,C):x.projectionMatrix.copy(S.projectionMatrix),L(Y,x,lt)};function L(Y,Q,ht){ht===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ht.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let st=null;function Bt(Y,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){const ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let lt=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Tt=0;Tt<ht.length;Tt++){const Lt=ht[Tt];let Kt=null;if(d!==null)Kt=d.getViewport(Lt);else{const I=f.getViewSubImage(u,Lt);Kt=I.viewport,Tt===0&&(t.setRenderTargetTextures(y,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let Ht=P[Tt];Ht===void 0&&(Ht=new Sn,Ht.layers.enable(Tt),Ht.viewport=new Me,P[Tt]=Ht),Ht.matrix.fromArray(Lt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Lt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Tt===0&&(x.matrix.copy(Ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(Ht)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Tt=f.getDepthInformation(ht[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,i.renderState)}}for(let ht=0;ht<v.length;ht++){const lt=M[ht],bt=v[ht];lt!==null&&bt!==void 0&&bt.update(lt,Q,c||o)}st&&st(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const Ft=new Xu;Ft.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}}const Ir=new Rn,wx=new fe;function Ax(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ku(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,v,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),f(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===1&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===1&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=t.get(g),v=y.envMap,M=y.envMapRotation;v&&(p.envMap.value=v,Ir.copy(M),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),p.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Ir)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===1&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cx(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=i[y.id];M===void 0&&(m(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(y,A);const b=t.render.frame;s[y.id]!==b&&(u(y),s[y.id]=b)}function h(y){const v=f();y.__bindingPointIndex=v;const M=r.createBuffer(),A=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const v=i[y.id],M=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,S=M.length;b<S;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let P=0,x=C.length;P<x;P++){const E=C[P];if(d(E,b,P,A)===!0){const U=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let q=0;q<B.length;q++){const z=B[q],$=_(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,U+G,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,M,A){const b=y.value,S=v+"_"+M;if(A[S]===void 0)return typeof b=="number"||typeof b=="boolean"?A[S]=b:A[S]=b.clone(),!0;{const C=A[S];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[S]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function m(y){const v=y.uniforms;let M=0;const A=16;for(let S=0,C=v.length;S<C;S++){const P=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,E=P.length;x<E;x++){const U=P[x],B=Array.isArray(U.value)?U.value:[U.value];for(let G=0,q=B.length;G<q;G++){const z=B[G],$=_(z),V=M%A,it=V%$.boundary,L=V+it;M+=it,L!==0&&A-L<$.storage&&(M+=A-L),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=$.storage}}}const b=M%A;return b>0&&(M+=A-b),y.__size=M,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}class Sf{constructor(t={}){const{canvas:e=Zm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let M=!1,A=0,b=0,S=null,C=-1,P=null;const x=new Me,E=new Me;let U=null;const B=new Nt(0);let G=0,q=e.width,z=e.height,$=1,V=null,it=null;const L=new Me(0,0,q,z),st=new Me(0,0,q,z);let Bt=!1;const Ft=new fc;let Y=!1,Q=!1;const ht=new fe,lt=new fe,bt=new D,Tt=new Me,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Ht(){return S===null?$:1}let I=n;function ce(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ui}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){const O="webgl2";if(I=ce(O,w),I===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,qt,k,ne,Ut,R,T,X,J,nt,Z,Et,ot,pt,$t,rt,xt,yt,zt,vt,Zt,Wt,he,N;function et(){Vt=new U0(I),Vt.init(),Wt=new xx(I,Vt),qt=new C0(I,Vt,t,Wt),k=new gx(I),qt.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),ne=new O0(I),Ut=new ex,R=new vx(I,Vt,k,Ut,qt,Wt,ne),T=new P0(v),X=new I0(v),J=new Eg(I),he=new w0(I,J),nt=new N0(I,J,ne,he),Z=new z0(I,nt,J,ne),zt=new B0(I,qt,R),rt=new R0(Ut),Et=new tx(v,T,X,Vt,qt,he,rt),ot=new Ax(v,Ut),pt=new ix,$t=new cx(Vt),yt=new b0(v,T,X,k,Z,u,l),xt=new px(v,Z,qt),N=new Cx(I,ne,qt,k),vt=new A0(I,Vt,ne),Zt=new F0(I,Vt,ne),ne.programs=Et.programs,v.capabilities=qt,v.extensions=Vt,v.properties=Ut,v.renderLists=pt,v.shadowMap=xt,v.state=k,v.info=ne}et();const K=new bx(v,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(q,z,!1))},this.getSize=function(w){return w.set(q,z)},this.setSize=function(w,O,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,z=O,e.width=Math.floor(w*$),e.height=Math.floor(O*$),H===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(q*$,z*$).floor()},this.setDrawingBufferSize=function(w,O,H){q=w,z=O,$=H,e.width=Math.floor(w*H),e.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(L)},this.setViewport=function(w,O,H,W){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,O,H,W),k.viewport(x.copy(L).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,O,H,W){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,O,H,W),k.scissor(E.copy(st).multiplyScalar($).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(w){k.setScissorTest(Bt=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(w=!0,O=!0,H=!0){let W=0;if(w){let F=!1;if(S!==null){const at=S.texture.format;F=at===1033||at===1031||at===1029}if(F){const at=S.texture.type,_t=at===1009||at===1014||at===1012||at===1020||at===1017||at===1018,dt=yt.getClearColor(),ft=yt.getClearAlpha(),Rt=dt.r,kt=dt.g,Ct=dt.b;_t?(d[0]=Rt,d[1]=kt,d[2]=Ct,d[3]=ft,I.clearBufferuiv(I.COLOR,0,d)):(m[0]=Rt,m[1]=kt,m[2]=Ct,m[3]=ft,I.clearBufferiv(I.COLOR,0,m))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),$t.dispose(),Ut.dispose(),T.dispose(),X.dispose(),Z.dispose(),he.dispose(),N.dispose(),Et.dispose(),K.dispose(),K.removeEventListener("sessionstart",de),K.removeEventListener("sessionend",mt),Ot.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=ne.autoReset,O=xt.enabled,H=xt.autoUpdate,W=xt.needsUpdate,F=xt.type;et(),ne.autoReset=w,xt.enabled=O,xt.autoUpdate=H,xt.needsUpdate=W,xt.type=F}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Jt(w){const O=w.target;O.removeEventListener("dispose",Jt),we(O)}function we(w){Ue(w),Ut.remove(w)}function Ue(w){const O=Ut.get(w).programs;O!==void 0&&(O.forEach(function(H){Et.releaseProgram(H)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,W,F,at){O===null&&(O=Lt);const _t=F.isMesh&&F.matrixWorld.determinant()<0,dt=ye(w,O,H,W,F);k.setMaterial(W,_t);let ft=H.index,Rt=1;if(W.wireframe===!0){if(ft=nt.getWireframeAttribute(H),ft===void 0)return;Rt=2}const kt=H.drawRange,Ct=H.attributes.position;let ue=kt.start*Rt,ae=(kt.start+kt.count)*Rt;at!==null&&(ue=Math.max(ue,at.start*Rt),ae=Math.min(ae,(at.start+at.count)*Rt)),ft!==null?(ue=Math.max(ue,0),ae=Math.min(ae,ft.count)):Ct!=null&&(ue=Math.max(ue,0),ae=Math.min(ae,Ct.count));const Te=ae-ue;if(Te<0||Te===1/0)return;he.setup(F,W,dt,H,ft);let an,ie=vt;if(ft!==null&&(an=J.get(ft),ie=Zt,ie.setIndex(an)),F.isMesh)W.wireframe===!0?(k.setLineWidth(W.wireframeLinewidth*Ht()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(F.isLine){let It=W.linewidth;It===void 0&&(It=1),k.setLineWidth(It*Ht()),F.isLineSegments?ie.setMode(I.LINES):F.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else F.isPoints?ie.setMode(I.POINTS):F.isSprite&&ie.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const It=F._multiDrawStarts,un=F._multiDrawCounts,ve=F._multiDrawCount,Mi=ft?J.get(ft).bytesPerElement:1,js=Ut.get(W).currentProgram.getUniforms();for(let Qn=0;Qn<ve;Qn++)js.setValue(I,"_gl_DrawID",Qn),ie.render(It[Qn]/Mi,un[Qn])}else if(F.isInstancedMesh)ie.renderInstances(ue,Te,F.count);else if(H.isInstancedBufferGeometry){const It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,un=Math.min(H.instanceCount,It);ie.renderInstances(ue,Te,un)}else ie.render(ue,Te)};function oe(w,O,H){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,We(w,O,H),w.side=0,w.needsUpdate=!0,We(w,O,H),w.side=2):We(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),p=$t.get(H),p.init(O),y.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==H&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const dt=at[_t];oe(dt,H,F),W.add(dt)}else oe(at,H,F),W.add(at)}),y.pop(),p=null,W},this.compileAsync=function(w,O,H=null){const W=this.compile(w,O,H);return new Promise(F=>{function at(){if(W.forEach(function(_t){Ut.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){F(w);return}setTimeout(at,10)}Vt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Pt=null;function At(w){Pt&&Pt(w)}function de(){Ot.stop()}function mt(){Ot.start()}const Ot=new Xu;Ot.setAnimationLoop(At),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(w){Pt=w,K.setAnimationLoop(w),w===null?Ot.stop():Ot.start()},K.addEventListener("sessionstart",de),K.addEventListener("sessionend",mt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,S),p=$t.get(w,y.length),p.init(O),y.push(p),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ft.setFromProjectionMatrix(lt),Q=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,Q),_=pt.get(w,g.length),_.init(),g.push(_),K.enabled===!0&&K.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&Dt(at,O,-1/0,v.sortObjects)}Dt(w,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,it),Kt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Kt&&yt.addToRenderList(_,w),this.info.render.frame++,Y===!0&&rt.beginShadows();const H=p.state.shadowsArray;xt.render(H,w,O),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(p.setupLights(),O.isArrayCamera){const at=O.cameras;if(F.length>0)for(let _t=0,dt=at.length;_t<dt;_t++){const ft=at[_t];Ve(W,F,w,ft)}Kt&&yt.render(w);for(let _t=0,dt=at.length;_t<dt;_t++){const ft=at[_t];Yt(_,w,ft,ft.viewport)}}else F.length>0&&Ve(W,F,w,O),Kt&&yt.render(w),Yt(_,w,O);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(v,w,O),he.resetDefaultState(),C=-1,P=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Dt(w,O,H,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ft.intersectsSprite(w)){W&&Tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);const _t=Z.update(w),dt=w.material;dt.visible&&_.push(w,_t,dt,H,Tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ft.intersectsObject(w))){const _t=Z.update(w),dt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Tt.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Tt.copy(_t.boundingSphere.center)),Tt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(dt)){const ft=_t.groups;for(let Rt=0,kt=ft.length;Rt<kt;Rt++){const Ct=ft[Rt],ue=dt[Ct.materialIndex];ue&&ue.visible&&_.push(w,_t,ue,H,Tt.z,Ct)}}else dt.visible&&_.push(w,_t,dt,H,Tt.z,null)}}const at=w.children;for(let _t=0,dt=at.length;_t<dt;_t++)Dt(at[_t],O,H,W)}function Yt(w,O,H,W){const F=w.opaque,at=w.transmissive,_t=w.transparent;p.setupLightsView(H),Y===!0&&rt.setGlobalState(v.clippingPlanes,H),W&&k.viewport(x.copy(W)),F.length>0&&te(F,O,H),at.length>0&&te(at,O,H),_t.length>0&&te(_t,O,H),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Ve(w,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new yr(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const at=p.state.transmissionRenderTarget[W.id],_t=W.viewport||x;at.setSize(_t.z,_t.w);const dt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&yt.render(H);const ft=v.toneMapping;v.toneMapping=0;const Rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Y===!0&&rt.setGlobalState(v.clippingPlanes,W),te(w,H,W),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Ct=0,ue=O.length;Ct<ue;Ct++){const ae=O[Ct],Te=ae.object,an=ae.geometry,ie=ae.material,It=ae.group;if(ie.side===2&&Te.layers.test(W.layers)){const un=ie.side;ie.side=1,ie.needsUpdate=!0,Ne(Te,H,W,an,ie,It),ie.side=un,ie.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}v.setRenderTarget(dt),v.setClearColor(B,G),Rt!==void 0&&(W.viewport=Rt),v.toneMapping=ft}function te(w,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let F=0,at=w.length;F<at;F++){const _t=w[F],dt=_t.object,ft=_t.geometry,Rt=W===null?_t.material:W,kt=_t.group;dt.layers.test(H.layers)&&Ne(dt,O,H,ft,Rt,kt)}}function Ne(w,O,H,W,F,at){w.onBeforeRender(v,O,H,W,F,at),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,O,H,W,w,at),F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,v.renderBufferDirect(H,O,W,F,w,at),F.side=0,F.needsUpdate=!0,v.renderBufferDirect(H,O,W,F,w,at),F.side=2):v.renderBufferDirect(H,O,W,F,w,at),w.onAfterRender(v,O,H,W,F,at)}function We(w,O,H){O.isScene!==!0&&(O=Lt);const W=Ut.get(w),F=p.state.lights,at=p.state.shadowsArray,_t=F.state.version,dt=Et.getParameters(w,F.state,at,O,H),ft=Et.getProgramCacheKey(dt);let Rt=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?X:T).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Jt),Rt=new Map,W.programs=Rt);let kt=Rt.get(ft);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===_t)return Ae(w,dt),kt}else dt.uniforms=Et.getUniforms(w),w.onBeforeCompile(dt,v),kt=Et.acquireProgram(dt,ft),Rt.set(ft,kt),W.uniforms=dt.uniforms;const Ct=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Ae(w,dt),W.needsLights=De(w),W.lightsStateVersion=_t,W.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function Le(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=La.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Ae(w,O){const H=Ut.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function ye(w,O,H,W,F){O.isScene!==!0&&(O=Lt),R.resetTextureUnits();const at=O.fog,_t=W.isMeshStandardMaterial?O.environment:null,dt=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ki,ft=(W.isMeshStandardMaterial?X:T).get(W.envMap||_t),Rt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!H.morphAttributes.position,ue=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let Te=0;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Te=v.toneMapping);const an=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=an!==void 0?an.length:0,It=Ut.get(W),un=p.state.lights;if(Y===!0&&(Q===!0||w!==P)){const hi=w===P&&W.id===C;rt.setState(W,w,hi)}let ve=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==un.state.version||It.outputColorSpace!==dt||F.isBatchedMesh&&It.batching===!1||!F.isBatchedMesh&&It.batching===!0||F.isBatchedMesh&&It.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&It.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&It.instancing===!1||!F.isInstancedMesh&&It.instancing===!0||F.isSkinnedMesh&&It.skinning===!1||!F.isSkinnedMesh&&It.skinning===!0||F.isInstancedMesh&&It.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&It.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&It.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&It.instancingMorph===!1&&F.morphTexture!==null||It.envMap!==ft||W.fog===!0&&It.fog!==at||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==rt.numPlanes||It.numIntersection!==rt.numIntersection)||It.vertexAlphas!==Rt||It.vertexTangents!==kt||It.morphTargets!==Ct||It.morphNormals!==ue||It.morphColors!==ae||It.toneMapping!==Te||It.morphTargetsCount!==ie)&&(ve=!0):(ve=!0,It.__version=W.version);let Mi=It.currentProgram;ve===!0&&(Mi=We(W,O,F));let js=!1,Qn=!1,pu=!1;const Xe=Mi.getUniforms(),xr=It.uniforms;if(k.useProgram(Mi.program)&&(js=!0,Qn=!0,pu=!0),W.id!==C&&(C=W.id,Qn=!0),js||P!==w){qt.reverseDepthBuffer?(ht.copy(w.projectionMatrix),jm(ht),Qm(ht),Xe.setValue(I,"projectionMatrix",ht)):Xe.setValue(I,"projectionMatrix",w.projectionMatrix),Xe.setValue(I,"viewMatrix",w.matrixWorldInverse);const hi=Xe.map.cameraPosition;hi!==void 0&&hi.setValue(I,bt.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&Xe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Xe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,Qn=!0,pu=!0)}if(F.isSkinnedMesh){Xe.setOptional(I,F,"bindMatrix"),Xe.setOptional(I,F,"bindMatrixInverse");const hi=F.skeleton;hi&&(hi.boneTexture===null&&hi.computeBoneTexture(),Xe.setValue(I,"boneTexture",hi.boneTexture,R))}F.isBatchedMesh&&(Xe.setOptional(I,F,"batchingTexture"),Xe.setValue(I,"batchingTexture",F._matricesTexture,R),Xe.setOptional(I,F,"batchingIdTexture"),Xe.setValue(I,"batchingIdTexture",F._indirectTexture,R),Xe.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Xe.setValue(I,"batchingColorTexture",F._colorsTexture,R));const mu=H.morphAttributes;if((mu.position!==void 0||mu.normal!==void 0||mu.color!==void 0)&&zt.update(F,H,Mi),(Qn||It.receiveShadow!==F.receiveShadow)&&(It.receiveShadow=F.receiveShadow,Xe.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xr.envMap.value=ft,xr.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(xr.envMapIntensity.value=O.environmentIntensity),Qn&&(Xe.setValue(I,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&jn(xr,pu),at&&W.fog===!0&&ot.refreshFogUniforms(xr,at),ot.refreshMaterialUniforms(xr,W,$,z,p.state.transmissionRenderTarget[w.id]),La.upload(I,Le(It),xr,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(La.upload(I,Le(It),xr,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Xe.setValue(I,"center",F.center),Xe.setValue(I,"modelViewMatrix",F.modelViewMatrix),Xe.setValue(I,"normalMatrix",F.normalMatrix),Xe.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const hi=W.uniformsGroups;for(let gu=0,f1=hi.length;gu<f1;gu++){const Im=hi[gu];N.update(Im,Mi),N.bind(Im,Mi)}}return Mi}function jn(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function De(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,O,H){Ut.get(w.texture).__webglTexture=O,Ut.get(w.depthTexture).__webglTexture=H;const W=Ut.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const H=Ut.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,H=0){S=w,A=O,b=H;let W=!0,F=null,at=!1,_t=!1;if(w){const ft=Ut.get(w);if(ft.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(ft.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(ft.__hasExternalTextures)R.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ct=w.depthTexture;if(ft.__boundDepthTexture!==Ct){if(Ct!==null&&Ut.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(_t=!0);const kt=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?F=kt[O][H]:F=kt[O],at=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?F=Ut.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?F=kt[H]:F=kt,x.copy(w.viewport),E.copy(w.scissor),U=w.scissorTest}else x.copy(L).multiplyScalar($).floor(),E.copy(st).multiplyScalar($).floor(),U=Bt;if(k.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&k.drawBuffers(w,F),k.viewport(x),k.scissor(E),k.setScissorTest(U),at){const ft=Ut.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ft.__webglTexture,H)}else if(_t){const ft=Ut.get(w.texture),Rt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ft.__webglTexture,H||0,Rt)}C=-1},this.readRenderTargetPixels=function(w,O,H,W,F,at,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(dt=dt[_t]),dt){k.bindFramebuffer(I.FRAMEBUFFER,dt);try{const ft=w.texture,Rt=ft.format,kt=ft.type;if(!qt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&H>=0&&H<=w.height-F&&I.readPixels(O,H,W,F,Wt.convert(Rt),Wt.convert(kt),at)}finally{const ft=S!==null?Ut.get(S).__webglFramebuffer:null;k.bindFramebuffer(I.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,W,F,at,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(dt=dt[_t]),dt){const ft=w.texture,Rt=ft.format,kt=ft.type;if(!qt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-W&&H>=0&&H<=w.height-F){k.bindFramebuffer(I.FRAMEBUFFER,dt);const Ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(O,H,W,F,Wt.convert(Rt),Wt.convert(kt),0);const ue=S!==null?Ut.get(S).__webglFramebuffer:null;k.bindFramebuffer(I.FRAMEBUFFER,ue);const ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Jm(I,ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Ct),I.deleteSync(ae),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,H=0){w.isTexture!==!0&&(la("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-H),F=Math.floor(w.image.width*W),at=Math.floor(w.image.height*W),_t=O!==null?O.x:0,dt=O!==null?O.y:0;R.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,_t,dt,F,at),k.unbindTexture()},this.copyTextureToTexture=function(w,O,H=null,W=null,F=0){w.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,H=null);let at,_t,dt,ft,Rt,kt;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,dt=H.min.x,ft=H.min.y):(at=w.image.width,_t=w.image.height,dt=0,ft=0),W!==null?(Rt=W.x,kt=W.y):(Rt=0,kt=0);const Ct=Wt.convert(O.format),ue=Wt.convert(O.type);R.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const ae=I.getParameter(I.UNPACK_ROW_LENGTH),Te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),ie=I.getParameter(I.UNPACK_SKIP_ROWS),It=I.getParameter(I.UNPACK_SKIP_IMAGES),un=w.isCompressedTexture?w.mipmaps[F]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,un.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,un.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Rt,kt,at,_t,Ct,ue,un.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Rt,kt,un.width,un.height,Ct,un.data):I.texSubImage2D(I.TEXTURE_2D,F,Rt,kt,at,_t,Ct,ue,un),I.pixelStorei(I.UNPACK_ROW_LENGTH,ae),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,It),F===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(w,O,H=null,W=null,F=0){w.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0);let at,_t,dt,ft,Rt,kt,Ct,ue,ae;const Te=w.isCompressedTexture?w.mipmaps[F]:w.image;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,dt=H.max.z-H.min.z,ft=H.min.x,Rt=H.min.y,kt=H.min.z):(at=Te.width,_t=Te.height,dt=Te.depth,ft=0,Rt=0,kt=0),W!==null?(Ct=W.x,ue=W.y,ae=W.z):(Ct=0,ue=0,ae=0);const an=Wt.convert(O.format),ie=Wt.convert(O.type);let It;if(O.isData3DTexture)R.setTexture3D(O,0),It=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),It=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const un=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mi=I.getParameter(I.UNPACK_SKIP_PIXELS),js=I.getParameter(I.UNPACK_SKIP_ROWS),Qn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(It,F,Ct,ue,ae,at,_t,dt,an,ie,Te.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(It,F,Ct,ue,ae,at,_t,dt,an,Te.data):I.texSubImage3D(It,F,Ct,ue,ae,at,_t,dt,an,ie,Te),I.pixelStorei(I.UNPACK_ROW_LENGTH,un),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mi),I.pixelStorei(I.UNPACK_SKIP_ROWS,js),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qn),F===0&&O.generateMipmaps&&I.generateMipmap(It),k.unbindTexture()},this.initRenderTarget=function(w){Ut.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),k.unbindTexture()},this.resetState=function(){A=0,b=0,S=null,k.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Hl?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===ia?"display-p3":"srgb"}}class Ia{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new Ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tc extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rx extends yn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=1003,h=1003,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tf extends en{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new fe,Ef=new fe,Ua=[],bf=new Mr,Px=new fe,co=new Se,ho=new Er;class Na extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Px)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),bf.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(bf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Er),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ho.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),t.ray.intersectsSphere(ho)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),Ef.multiplyMatrices(n,Ms),co.matrixWorld=Ef,co.raycast(t,Ua);for(let o=0,a=Ua.length;o<a;o++){const l=Ua[o];l.instanceId=s,l.object=this,e.push(l)}Ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rx(new Float32Array(i*this.count),i,this.count,1028,1015));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ec extends br{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fa=new D,Oa=new D,wf=new fe,uo=new pa,Ba=new Er,bc=new D,Af=new D;class Cf extends ke{constructor(t=new Ye,e=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Fa.fromBufferAttribute(e,i-1),Oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fa.distanceTo(Oa);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(i),Ba.radius+=s,t.ray.intersectsSphere(Ba)===!1)return;wf.copy(i).invert(),uo.copy(t.ray).applyMatrix4(wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){const g=h.getX(_),y=h.getX(_+1),v=za(this,t,uo,l,g,y);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(d),g=za(this,t,uo,l,_,p);g&&e.push(g)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){const g=za(this,t,uo,l,_,_+1);g&&e.push(g)}if(this.isLineLoop){const _=za(this,t,uo,l,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function za(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Fa.fromBufferAttribute(o,i),Oa.fromBufferAttribute(o,s),e.distanceSqToSegment(Fa,Oa,bc,Af)>n)return;bc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(bc);if(!(l<t.near||l>t.far))return{distance:l,point:Af.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Rf=new D,Pf=new D;class Lx extends Cf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Rf.fromBufferAttribute(e,i),Pf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rf.distanceTo(Pf);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wc extends br{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lf=new fe,Ac=new pa,ka=new Er,Ga=new D;class Cc extends ke{constructor(t=new Ye,e=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=s,t.ray.intersectsSphere(ka)===!1)return;Lf.copy(i).invert(),Ac.copy(t.ray).applyMatrix4(Lf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,_=d;m<_;m++){const p=c.getX(m);Ga.fromBufferAttribute(f,p),Df(Ga,p,l,i,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,_=d;m<_;m++)Ga.fromBufferAttribute(f,m),Df(Ga,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Df(r,t,e,n,i,s,o){const a=Ac.distanceSqToPoint(r);if(a<e){const l=new D;Ac.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Mt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],s=[],o=[],a=new D,l=new fe;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ze(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ze(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rc extends Ei{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dx extends Rc{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pc(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Ha=new D,Lc=new Pc,Dc=new Pc,Ic=new Pc;class If extends Ei{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Ha.subVectors(i[0],i[1]).add(i[0]),c=Ha);const f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ha.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Lc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,p),Dc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,p),Ic.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Dc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ic.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Lc.calc(l),Dc.calc(l),Ic.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Ix(r,t){const e=1-r;return e*e*t}function Ux(r,t){return 2*(1-r)*r*t}function Nx(r,t){return r*r*t}function fo(r,t,e,n){return Ix(r,t)+Ux(r,e)+Nx(r,n)}function Fx(r,t){const e=1-r;return e*e*e*t}function Ox(r,t){const e=1-r;return 3*e*e*r*t}function Bx(r,t){return 3*(1-r)*r*r*t}function zx(r,t){return r*r*r*t}function po(r,t,e,n,i){return Fx(r,t)+Ox(r,e)+Bx(r,n)+zx(r,i)}class Nf extends Ei{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(po(t,i.x,s.x,o.x,a.x),po(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kx extends Ei{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(po(t,i.x,s.x,o.x,a.x),po(t,i.y,s.y,o.y,a.y),po(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ff extends Ei{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gx extends Ei{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends Ei{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(fo(t,i.x,s.x,o.x),fo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bf extends Ei{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(fo(t,i.x,s.x,o.x),fo(t,i.y,s.y,o.y),fo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Uf(a,l.x,c.x,h.x,f.x),Uf(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}}var Uc=Object.freeze({__proto__:null,ArcCurve:Dx,CatmullRomCurve3:If,CubicBezierCurve:Nf,CubicBezierCurve3:kx,EllipseCurve:Rc,LineCurve:Ff,LineCurve3:Gx,QuadraticBezierCurve:Of,QuadraticBezierCurve3:Bf,SplineCurve:zf});class Hx extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Uc[i.type]().fromJSON(i))}return this}}class Vx extends Hx{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ff(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Of(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Nf(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Rc(t,e,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Va extends Ye{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ze(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,f=new D,u=new Mt,d=new D,m=new D,_=new D;let p=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let y=0;y<=e;y++){const v=n+y*h*i,M=Math.sin(v),A=Math.cos(v);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*M,f.y=t[b].y,f.z=t[b].x*A,o.push(f.x,f.y,f.z),u.x=y/e,u.y=b/(t.length-1),a.push(u.x,u.y);const S=l[3*b+0]*M,C=l[3*b+1],P=l[3*b+0]*A;c.push(S,C,P)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const M=v+y*t.length,A=M,b=M+t.length,S=M+t.length+1,C=M+1;s.push(A,b,C),s.push(S,C,b)}this.setIndex(s),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.points,t.segments,t.phiStart,t.phiLength)}}class Wa extends Va{constructor(t=1,e=1,n=4,i=8){const s=new Vx;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Wa(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ss extends Ye{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],u=[],d=[];let m=0;const _=[],p=n/2;let g=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(d,2));function y(){const M=new D,A=new D;let b=0;const S=(e-t)/n;for(let C=0;C<=s;C++){const P=[],x=C/s,E=x*(e-t)+t;for(let U=0;U<=i;U++){const B=U/i,G=B*l+a,q=Math.sin(G),z=Math.cos(G);A.x=E*q,A.y=-x*n+p,A.z=E*z,f.push(A.x,A.y,A.z),M.set(q,S,z).normalize(),u.push(M.x,M.y,M.z),d.push(B,1-x),P.push(m++)}_.push(P)}for(let C=0;C<i;C++)for(let P=0;P<s;P++){const x=_[P][C],E=_[P+1][C],U=_[P+1][C+1],B=_[P][C+1];t>0&&(h.push(x,E,B),b+=3),e>0&&(h.push(E,U,B),b+=3)}c.addGroup(g,b,0),g+=b}function v(M){const A=m,b=new Mt,S=new D;let C=0;const P=M===!0?t:e,x=M===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,p*x,0),u.push(0,x,0),d.push(.5,.5),m++;const E=m;for(let U=0;U<=i;U++){const G=U/i*l+a,q=Math.cos(G),z=Math.sin(G);S.x=P*z,S.y=p*x,S.z=P*q,f.push(S.x,S.y,S.z),u.push(0,x,0),b.x=q*.5+.5,b.y=z*.5*x+.5,d.push(b.x,b.y),m++}for(let U=0;U<i;U++){const B=A+U,G=E+U;M===!0?h.push(G,G+1,B):h.push(G+1,G,B),C+=3}c.addGroup(g,C,M===!0?1:2),g+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mo extends Ye{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new D,u=new D,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const y=[],v=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const b=A/e;f.x=-t*Math.cos(i+b*s)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(i+b*s)*Math.sin(o+v*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(b+M,1-v),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const v=h[g][y+1],M=h[g][y],A=h[g+1][y],b=h[g+1][y+1];(g!==0||o>0)&&d.push(v,M,b),(g!==n-1||l<Math.PI)&&d.push(M,A,b)}this.setIndex(d),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ir extends Ye{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new D,f=new D,u=new D;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*s,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,p=(i+1)*(d-1)+m-1,g=(i+1)*(d-1)+m,y=(i+1)*d+m;o.push(_,p,y),o.push(p,g,y)}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nc extends Ye{constructor(t=new Bf(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new Mt;let h=new D;const f=[],u=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(d,2));function _(){for(let v=0;v<e;v++)p(v);p(s===!1?e:0),y(),g()}function p(v){h=t.getPointAt(v/e,h);const M=o.normals[v],A=o.binormals[v];for(let b=0;b<=i;b++){const S=b/i*Math.PI*2,C=Math.sin(S),P=-Math.cos(S);l.x=P*M.x+C*A.x,l.y=P*M.y+C*A.y,l.z=P*M.z+C*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){const A=(i+1)*(v-1)+(M-1),b=(i+1)*v+(M-1),S=(i+1)*v+M,C=(i+1)*(v-1)+M;m.push(A,b,C),m.push(b,S,C)}}function y(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)c.x=v/e,c.y=M/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Nc(new Uc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ts extends br{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wx extends Ts{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xa extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xx extends Xa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fc=new fe,kf=new D,Gf=new D;class Oc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kf.setFromMatrixPosition(t.matrixWorld),e.position.copy(kf),Gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gf),e.updateMatrixWorld(),Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qx extends Oc{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=es*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yx extends Xa{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Hf=new fe,go=new D,Bc=new D;class $x extends Oc{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),go.setFromMatrixPosition(t.matrixWorld),n.position.copy(go),Bc.copy(n.position),Bc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Bc),n.updateMatrixWorld(),i.makeTranslation(-go.x,-go.y,-go.z),Hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hf)}}class zc extends Xa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $x}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kx extends Oc{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zx extends Xa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Kx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vf(){return performance.now()}const Wf=new fe;class Xf{constructor(t,e,n=0,i=1/0){this.ray=new pa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(t,e=!0,n=[]){return kc(t,this,n,e),n.sort(qf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)kc(t[i],this,n,e);return n.sort(qf),n}}function qf(r,t){return r.distance-t.distance}function kc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)kc(s[o],t,e,!0)}}class jx extends Lx{constructor(t=10,e=10,n=4473924,i=8947848){n=new Nt(n),i=new Nt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,d=0,m=-a;u<=e;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=u===s?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new Ye;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));const f=new Ec({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ui}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ui);class Qx extends Tc{constructor(){super();const t=new Ar;t.deleteAttribute("uv");const e=new Ts({side:1}),n=new Ts,i=new zc(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Se(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Se(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Se(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Se(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Se(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Se(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const f=new Se(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const u=new Se(t,Es(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const d=new Se(t,Es(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new Se(t,Es(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new Se(t,Es(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new Se(t,Es(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const g=new Se(t,Es(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Es(r){const t=new oo;return t.color.setScalar(r),t}const pe={COLORS:{ink:723725,crimsonHi:13112874,gold:13935428,goldHi:15847290,slate:2763827},QUALITY:{high:{dpr:2,shadows:!0,tunnelSegments:256,particles:24e3},medium:{dpr:1.5,shadows:!1,tunnelSegments:160,particles:12e3},low:{dpr:1.25,shadows:!1,tunnelSegments:96,particles:5e3}},CAMERA:{heroZ:9.5,mouthZ:.6,tunnelEndZ:-42,heroFovWide:38,heroFovTall:62,tunnelFov:78},BREAKPOINTS:{desktop:"(min-width: 1024px)",tablet:"(min-width: 768px) and (max-width: 1023px)",mobile:"(max-width: 767px)"},LENIS:{desktop:{lerp:.085,wheelMultiplier:1},mobile:{lerp:.12,touchMultiplier:1.4}}},tt={renderer:null,scene:null,camera:null,container:null,quality:"high",qualityCfg:pe.QUALITY.high,aspect:1,isTall:!1,isMobile:window.matchMedia("(max-width: 767px), (pointer: coarse) and (max-width: 1023px)").matches,scrollVelocity:0,clock:new Jx,elapsed:0,pointer:new Mt(0,0),pointerTarget:new Mt(0,0),progress:0,threat:0,updaters:new Set,lights:{}};function ty(r){const t=r.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"",i=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/Mali-4|Mali-T|Adreno 3|Adreno 4|Intel\(R\) HD Graphics [3-5]/i.test(n),o=navigator.hardwareConcurrency||4;return s||i&&o<=4?"low":i||o<=6?"medium":"high"}function ey(r){tt.container=r;const t=new Sf({antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1});t.outputColorSpace=ti,t.toneMapping=4,t.toneMappingExposure=1.05,t.setClearColor(0,0),Object.assign(t.domElement.style,{display:"block",position:"absolute",inset:"0"}),r.appendChild(t.domElement),tt.renderer=t,tt.quality=ty(t),tt.qualityCfg=pe.QUALITY[tt.quality],t.shadowMap.enabled=tt.qualityCfg.shadows,t.shadowMap.type=2;const e=new Tc;tt.scene=e;const n=new vc(t);e.environment=n.fromScene(new Qx,.04).texture,n.dispose();const i=new Sn(pe.CAMERA.heroFovWide,1,.05,200);i.position.set(0,0,pe.CAMERA.heroZ),e.add(i),tt.camera=i;const s=new Zx(16773590,2.2);s.position.set(4,6,6),s.castShadow=tt.qualityCfg.shadows,s.shadow.mapSize.set(2048,2048),s.shadow.bias=-4e-4,e.add(s);const o=new Yx(pe.COLORS.crimsonHi,18,40,Math.PI/5,.6,1.2);o.position.set(-6,-2,-4),e.add(o);const a=new Xx(14673663,1705480,.5);e.add(a);const l=new zc(pe.COLORS.crimsonHi,0,30,1.6);return l.position.set(0,-3,-6),e.add(l),tt.lights={key:s,rim:o,fill:a,danger:l},e.fog=new Ia(pe.COLORS.ink,0),new ResizeObserver(()=>Gc()).observe(r),Gc(),window.addEventListener("pointermove",h=>{tt.pointerTarget.set(h.clientX/window.innerWidth*2-1,-(h.clientY/window.innerHeight)*2+1)},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?tt.clock.stop():tt.clock.start()}),tt}let qa=0;function Gc(){const{renderer:r,camera:t,container:e}=tt,n=e.clientWidth;let i=e.clientHeight;qa&&Math.abs(i-qa)<120&&n===r.domElement.clientWidth&&(i=qa),qa=i;const s=Math.min(window.devicePixelRatio||1,tt.qualityCfg.dpr);r.setPixelRatio(s),r.setSize(n,i,!0),tt.aspect=n/i,tt.isTall=tt.aspect<1,t.aspect=tt.aspect,Yf(t,tt.heroFovOverride??null),t.updateProjectionMatrix()}function Yf(r,t=null){if(t!=null){r.fov=t;return}const{heroFovWide:e,heroFovTall:n}=pe.CAMERA;if(tt.isTall)r.fov=n;else{const i=ln.degToRad(e*1.6),s=2*Math.atan(Math.tan(i/2)/tt.aspect);r.fov=ln.clamp(ln.radToDeg(s),24,70)}}const _o=[];function ny(){const r=Math.min(tt.clock.getDelta(),.05);tt.elapsed+=r,tt.pointer.lerp(tt.pointerTarget,1-Math.pow(.001,r));for(const t of tt.updaters)t(r,tt.elapsed);if(tt.renderer.render(tt.scene,tt.camera),_o.push(r),_o.length>90){const t=_o.reduce((e,n)=>e+n,0)/_o.length;_o.length=0,t>.024&&tt.quality!=="low"&&(tt.quality=tt.quality==="high"?"medium":"low",tt.qualityCfg=pe.QUALITY[tt.quality],tt.renderer.shadowMap.enabled=tt.qualityCfg.shadows,Gc(),console.info(`[MBPU] quality → ${tt.quality} (avg ${(t*1e3).toFixed(1)}ms)`))}}function Ya(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ye;let c=0;for(let h=0;h<r.length;++h){const f=r[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<r.length;++u){const d=r[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=r[u].attributes.position.count}l.setIndex(f)}for(const h in s){const f=$f(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][u]);const m=$f(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function $f(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new en(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);a.setComponent(u+f,m,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Kf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vo={duration:.5,overwrite:!1,delay:0},Hc,cn,Ie,ni=1e8,Ee=1/ni,Vc=Math.PI*2,iy=Vc/4,ry=0,Zf=Math.sqrt,sy=Math.cos,oy=Math.sin,rn=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},ki=function(t){return typeof t=="number"},Wc=function(t){return typeof t>"u"},bi=function(t){return typeof t=="object"},Pn=function(t){return t!==!1},Xc=function(){return typeof window<"u"},$a=function(t){return ze(t)||rn(t)},Jf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,ay=/random\([^)]+\)/g,ly=/,\s*/g,jf=/(?:-?\.?\d|\.)+/gi,Qf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,td=/[+-]=-?[.\d]+/,cy=/[^,'"\[\]\s]+/gi,hy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,wi,Yc,$c,Gn={},Ka={},ed,nd=function(t){return(Ka=As(t,Gn))&&Un},Kc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xo=function(t,e){return!e&&console.warn(t)},id=function(t,e){return t&&(Gn[t]=e)&&Ka&&(Ka[t]=e)||Gn},yo=function(){return 0},uy={suppressEvents:!0,isStart:!0,kill:!1},Za={suppressEvents:!0,kill:!1},fy={suppressEvents:!0},Zc={},rr=[],Jc={},rd,Hn={},jc={},sd=30,Ja=[],Qc="",th=function(t){var e=t[0],n,i;if(bi(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(e););n=Ja[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Dd(t[i],n)))||t.splice(i,1);return t},Ur=function(t){return t._gsap||th(ri(t))[0]._gsap},od=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():Wc(n)&&t.getAttribute&&t.getAttribute(e)||n},Ln=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},dy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ja=function(){var t=rr.length,e=rr.slice(0),n,i;for(Jc={},rr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},eh=function(t){return!!(t._initted||t._startAt||t.add)},ad=function(t,e,n,i){rr.length&&!cn&&ja(),t.render(e,n,!!(cn&&e<0&&eh(t))),rr.length&&!cn&&ja()},ld=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(cy).length<2?e:rn(t)?t.trim():t},cd=function(t){return t},Vn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},py=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},As=function(t,e){for(var n in e)t[n]=e[n];return t},hd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Qa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Mo=function(t){var e=t.parent||Fe,n=t.keyframes?py(pn(t.keyframes)):Vn;if(Pn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},my=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ud=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},sr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Nr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},gy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},nh=function(t,e,n,i){return t._startAt&&(cn?t._startAt.revert(Za):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},_y=function r(t){return!t||t._ts&&r(t.parent)},fd=function(t){return t._repeat?Cs(t._tTime,t=t.duration()+t._rDelay)*t:0},Cs=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},el=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},nl=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},il=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),nl(t),n._dirty||Nr(n,t)),t},dd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=el(t.rawTime(),e),(!e._dur||To(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Nr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},Ai=function(t,e,n,i){return e.parent&&sr(e),e._start=Oe((ki(n)?n:n||t!==Fe?ii(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ud(t,e,"_first","_last",t._sort?"_start":0),ih(e)||(t._recent=e),i||dd(t,e),t._ts<0&&il(t,t._tTime),t},pd=function(t,e){return(Gn.ScrollTrigger||Kc("scrollTrigger",e))&&Gn.ScrollTrigger.create(e,t)},md=function(t,e,n,i,s){if(fh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rd!==Xn.frame)return rr.push(t),t._lazy=[s,i],1},vy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ih=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},xy=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&vy(t)&&!(!t._initted&&ih(t))||(t._ts<0||t._dp._ts<0)&&!ih(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=To(0,t._tDur,e),h=Cs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Cs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||cn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&md(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&nh(t,e,n,!0),t._onUpdate&&!n&&Wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&sr(t,1),!n&&!cn&&(Wn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},yy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Rs=function(t,e,n,i){var s=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Oe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&il(t,t._tTime=t._tDur*a),t.parent&&nl(t),n||Nr(t.parent,t),t},gd=function(t){return t instanceof Dn?Nr(t):Rs(t,t._dur)},My={_start:0,endTime:yo,totalDuration:yo},ii=function r(t,e,n){var i=t.labels,s=t._recent||My,o=t.duration()>=ni?s.endTime(!1):t._dur,a,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(pn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},So=function(t,e,n){var i=ki(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;o.immediateRender=Pn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new $e(e[0],o,e[s+1])},or=function(t,e){return t||t===0?e(t):e},To=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!rn(t)||!(e=hy.exec(t))?"":e[1]},Sy=function(t,e,n){return or(n,function(i){return To(t,e,i)})},rh=[].slice,_d=function(t,e){return t&&bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bi(t[0]))&&!t.nodeType&&t!==wi},Ty=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return rn(i)&&!e||_d(i,1)?(s=n).push.apply(s,ri(i)):n.push(i)})||n},ri=function(t,e,n){return Ie&&!e&&Ie.selector?Ie.selector(t):rn(t)&&!n&&(Yc||!Ls())?rh.call((e||$c).querySelectorAll(t),0):pn(t)?Ty(t,n):_d(t)?rh.call(t,0):t?[t]:[]},sh=function(t){return t=ri(t)[0]||xo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ri(e,n.querySelectorAll?n:n===t?xo("Invalid scope")||$c.createElement("div"):t)}},vd=function(t){return t.sort(function(){return .5-Math.random()})},xd=function(t){if(ze(t))return t;var e=bi(t)?t:{each:t},n=Fr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return rn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,m){var _=(m||e).length,p=o[_],g,y,v,M,A,b,S,C,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,ni])[1],!P){for(S=-ni;S<(S=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,y=P===ni?0:l?_*f/P-.5:i/P|0,S=0,C=ni,b=0;b<_;b++)v=b%P-g,M=y-(b/P|0),p[b]=A=c?Math.abs(c==="y"?M:v):Zf(v*v+M*M),A>S&&(S=A),A<C&&(C=A);i==="random"&&vd(p),p.max=S-C,p.min=C,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=mn(e.amount||e.each)||0,n=n&&_<0?Fy(n):n}return _=(p[u]-p.min)/p.max||0,Oe(p.b+(n?n(_):_)*p.v)+p.u}},oh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ki(n)?0:mn(n))}},yd=function(t,e){var n=pn(t),i,s;return!n&&bi(t)&&(i=n=t.radius||ni,t.values?(t=ri(t.values),(s=!ki(t[0]))&&(i*=i)):t=oh(t.increment)),or(e,n?ze(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||ki(o)?h:h+mn(o)}:oh(t))},Md=function(t,e,n,i){return or(pn(t)?!e:n===!0?!!(n=0):!i,function(){return pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ey=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},by=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},wy=function(t,e,n){return Td(t,e,0,1,n)},Sd=function(t,e,n){return or(n,function(i){return t[~~e(i)]})},Ay=function r(t,e,n){var i=e-t;return pn(t)?Sd(t,r(0,t.length),e):or(n,function(s){return(i+(s-t)%i)%i+t})},Cy=function r(t,e,n){var i=e-t,s=i*2;return pn(t)?Sd(t,r(0,t.length-1),e):or(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Eo=function(t){return t.replace(ay,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ly);return Md(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Td=function(t,e,n,i,s){var o=e-t,a=i-n;return or(s,function(l){return n+((l-t)/o*a||0)})},Ry=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=rn(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(pn(t)&&!pn(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(m){m*=f;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=As(pn(t)?[]:{},t));if(!h){for(l in e)hh.call(a,t,l,"get",e[l]);s=function(m){return mh(m,a)||(o?t.p:t)}}}return or(n,s)},Ed=function(t,e,n){var i=t.labels,s=ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(t,e,n){var i=t.vars,s=i[e],o=Ie,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&rr.length&&ja(),a&&(Ie=a),h=l?s.apply(c,l):s.call(c),Ie=o,h},bo=function(t){return sr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!cn),t.progress()<1&&Wn(t,"onInterrupt"),t},Ps,bd=[],wd=function(t){if(t)if(t=!t.name&&t.default||t,Xc()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:yo,render:mh,add:hh,kill:qy,modifier:Xy,rawVars:0},o={targetTest:0,get:0,getSetter:ph,aliases:{},register:0};if(Ls(),t!==i){if(Hn[e])return;Vn(i,Vn(Qa(t,s),o)),As(i.prototype,As(s,Qa(t,o))),Hn[i.prop=e]=i,t.targetTest&&(Ja.push(i),Zc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}id(e,i),t.register&&t.register(Un,i,In)}else bd.push(t)},be=255,wo={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},ah=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},Ad=function(t,e,n){var i=t?ki(t)?[t>>16,t>>8&be,t&be]:0:wo.black,s,o,a,l,c,h,f,u,d,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wo[t])i=wo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(jf),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ah(l+1/3,s,o),i[1]=ah(l,s,o),i[2]=ah(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Qf),n&&i.length<4&&(i[3]=1),i}else i=t.match(jf)||wo.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/be,o=i[1]/be,a=i[2]/be,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Cd=function(t){var e=[],n=[],i=-1;return t.split(ar).forEach(function(s){var o=s.match(bs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Rd=function(t,e,n){var i="",s=(t+i).match(ar),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Ad(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Cd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ar,"1").split(bs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ar),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ar=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Py=/hsl[a]?\(/,Pd=function(t){var e=t.join(" "),n;if(ar.lastIndex=0,ar.test(e))return n=Py.test(e),t[1]=Rd(t[1],n),t[0]=Rd(t[0],n,Cd(t[1])),!0},Ao,Xn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,m=function _(p){var g=r()-i,y=p===!0,v,M,A,b;if((g>t||g<0)&&(n+=g-e),i+=g,A=i-n,v=A-o,(v>0||y)&&(b=++f.frame,u=A-f.time*1e3,f.time=A=A/1e3,o+=v+(v>=s?4:s-v),M=1),y||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](A,u,b,p)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){ed&&(!Yc&&Xc()&&(wi=Yc=window,$c=wi.document||{},Gn.gsap=Un,(wi.gsapVersions||(wi.gsapVersions=[])).push(Un.version),nd(Ka||wi.GreenSockGlobals||!wi.gsap&&wi||{}),bd.forEach(wd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Ao=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=yo},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,g,y){var v=g?function(M,A,b,S){p(M,A,b,S),f.remove(v)}:p;return f.remove(p),a[y?"unshift":"push"](v),Ls(),v},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f}(),Ls=function(){return!Ao&&Xn.wake()},le={},Ly=/^[\d.\-M][\d.\-,\s]/,Dy=/["']/g,Iy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Dy,"").trim():+c,i=l.substr(a+1).trim();return e},Uy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ny=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Iy(e[1])]:Uy(t).split(",").map(ld)):le._CE&&Ly.test(t)?le._CE("",t):n},Fy=function(t){return function(e){return 1-t(1-e)}},Fr=function(t,e){return t&&(ze(t)?t:le[t]||Ny(t))||e},Or=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ln(t,function(a){le[a]=Gn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},Ld=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},lh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Vc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*oy((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Ld(a);return s=Vc/s,l.config=function(c,h){return r(t,c,h)},l},ch=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ld(n);return i.config=function(s){return r(t,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Or(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})}),le.Linear.easeNone=le.none=le.Linear.easeIn,Or("Elastic",lh("in"),lh("out"),lh()),function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Or("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),Or("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)}),Or("Circ",function(r){return-(Zf(1-r*r)-1)}),Or("Sine",function(r){return r===1?1:-sy(r*iy)+1}),Or("Back",ch("in"),ch("out"),ch()),le.SteppedEase=le.steps=Gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ee;return function(a){return((i*To(0,o,a)|0)+s)*n}}},vo.ease=le["quad.out"],Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qc+=r+","+r+"Params,"});var Dd=function(t,e){this.id=ry++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:od,this.set=e?e.getSetter:ph},Co=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Rs(this,+e.duration,1,1),this.data=e.data,Ie&&(this._ctx=Ie,Ie.data.push(this)),Ao||Xn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(il(this,n),!s._dp||s.parent||dd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ad(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Cs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?el(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(To(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),nl(this),gy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?el(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=fy);var i=cn;return cn=n,eh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ii(this,n),Pn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ze(n)?n:cd,l=function(){var h=i.then;i.then=null,s&&s(),ze(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){bo(this)},r}();Vn(Co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var Dn=function(r){Kf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),Fe&&Ai(n.parent||Fe,zi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&pd(zi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return So(0,arguments,this),this},e.from=function(i,s,o){return So(1,arguments,this),this},e.fromTo=function(i,s,o,a){return So(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $e(i,s,ii(this,o),1),this},e.call=function(i,s,o){return Ai(this,$e.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new $e(i,o,ii(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Mo(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Mo(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,m,_,p,g,y,v,M,A,b,S;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,M=this._start,v=this._ts,g=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(u=Oe(h%p),h===l?(_=this._repeat,u=c):(A=Oe(h/p),_=~~A,_&&_===A&&(u=c,_--),u>c&&(u=c)),A=Cs(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),b&&_&1&&(u=c-u,S=1),_!==A&&!this._lock){var C=b&&A&1,P=C===(b&&_&1);if(_<A&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(S?0:Oe(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=yy(this,Oe(a),Oe(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!A&&(Wn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||u>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=-Ee);break}}d=m}else{d=this._last;for(var x=i<0?i:u;d;){if(m=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||cn&&eh(d)),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=x?-Ee:Ee);break}}d=m}}if(y&&!s&&(this.pause(),y.render(u>=a?0:-Ee)._zTime=u>=a?1:-1,this._ts))return this._start=M,nl(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&sr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Wn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ki(s)||(s=ii(this,s,i)),!(i instanceof Co)){if(pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(rn(i))return this.addLabel(i,s);if(ze(i))i=$e.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $e?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return rn(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&tl(this,i),i===this._recent&&(this._recent=this._last),Nr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=$e.delayedCall(0,s||yo,o);return a.data="isPause",this._hasPause=1,Ai(this,a,ii(this,i))},e.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&sr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ri(i),l=this._first,c=ki(s),h;l;)l instanceof $e?dy(l._targets,a)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ii(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,m=$e.to(o,Vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Rs(m,p,0,1).render(m._time,!0,!0),d=1}h&&h.apply(m,f||[])}},s));return u?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Vn({startAt:{time:ii(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ed(this,ii(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ed(this,ii(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Nr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Nr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Rs(o,o===Fe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Fe._ts&&(ad(Fe,el(i,Fe)),rd=Xn.frame),Xn.frame>=sd){sd+=kn.autoSleep||120;var s=Fe._first;if((!s||!s._ts)&&kn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},t}(Co);Vn(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Oy=function(t,e,n,i,s,o,a){var l=new In(this._pt,t,e,0,1,Bd,null,s),c=0,h=0,f,u,d,m,_,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Eo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),u=n.match(qc)||[];f=qc.exec(i);)m=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?ws(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=qc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(td.test(i)||g)&&(l.e=0),this._pt=l,l},hh=function(t,e,n,i,s,o,a,l,c,h){ze(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:ze(f)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=ze(f)?c?Hy:Fd:dh,m;if(rn(i)&&(~i.indexOf("random(")&&(i=Eo(i)),i.charAt(1)==="="&&(m=ws(u,i)+(mn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||uh)return!isNaN(u*i)&&i!==""?(m=new In(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?Wy:Od,0,d),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!f&&!(e in t)&&Kc(e,i),Oy.call(this,t,e,u,i,d,l||kn.stringFilter,c))},By=function(t,e,n,i,s){if(ze(t)&&(t=Ro(t,s,e,n,i)),!bi(t)||t.style&&t.nodeType||pn(t)||Jf(t))return rn(t)?Ro(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ro(t[a],s,e,n,i);return o},Id=function(t,e,n,i,s,o){var a,l,c,h;if(Hn[t]&&(a=new Hn[t]).init(s,a.rawVars?e[t]:By(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new In(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ps))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},lr,uh,fh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:p,v=t._overwrite==="auto"&&!Hc,M=t.timeline,A=i.easeReverse||f,b,S,C,P,x,E,U,B,G,q,z,$,V;if(M&&(!u||!s)&&(s="none"),t._ease=Fr(s,vo.ease),t._rEase=A&&(Fr(A)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||u&&!i.stagger){if(B=p[0]?Ur(p[0]).harness:0,$=B&&i[B.prop],b=Qa(i,Zc),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&m?Za:uy),_._lazy=0),o){if(sr(t._startAt=$e.set(p,Vn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn||!a&&!d)&&t._startAt.revert(Za),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),C=Vn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Pn(l),immediateRender:a,stagger:0,parent:g},b),$&&(C[B.prop]=$),sr(t._startAt=$e.set(p,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn?t._startAt.revert(Za):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Pn(l)||l&&!m,S=0;S<p.length;S++){if(x=p[S],U=x._gsap||th(p)[S]._gsap,t._ptLookup[S]=q={},Jc[U.id]&&rr.length&&ja(),z=y===p?S:y.indexOf(x),B&&(G=new B).init(x,$||b,t,z,y)!==!1&&(t._pt=P=new In(t._pt,x,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(it){q[it]=P}),G.priority&&(E=1)),!B||$)for(C in b)Hn[C]&&(G=Id(C,b,t,z,x,y))?G.priority&&(E=1):q[C]=P=hh.call(t,x,C,"get",b[C],z,y,0,i.stringFilter);t._op&&t._op[S]&&t.kill(x,t._op[S]),v&&t._pt&&(lr=t,Fe.killTweensOf(x,q,t.globalTime(e)),V=!t.parent,lr=0),t._pt&&l&&(Jc[U.id]=1)}E&&zd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,u&&e<=0&&M.render(ni,!0,!0)},zy=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return uh=1,t.vars[e]="+=0",fh(t,a),uh=0,l?xo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ge(n)+mn(f.e)),f.b&&(f.b=h.s+mn(f.b))},ky=function(t,e){var n=t[0]?Ur(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=As({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Gy=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(pn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ro=function(t,e,n,i,s){return ze(t)?t.call(e,n,i,s):rn(t)&&~t.indexOf("random(")?Eo(t):t},Ud=Qc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nd={};Ln(Ud+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Nd[r]=1});var $e=function(r){Kf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Mo(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Fe,y=(pn(n)||Jf(n)?ki(n[0]):"length"in i)?[n]:ri(n),v,M,A,b,S,C,P,x;if(a._targets=y.length?th(y):xo("GSAP target "+n+" not found. https://gsap.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||u||$a(c)||$a(h)){i=a.vars;var E=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Dn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),v.kill(),v.parent=v._dp=zi(a),v._start=0,u||$a(c)||$a(h)){if(b=y.length,P=u&&xd(u),bi(u))for(S in u)~Ud.indexOf(S)&&(x||(x={}),x[S]=u[S]);for(M=0;M<b;M++)A=Qa(i,Nd),A.stagger=0,E&&(A.easeReverse=E),x&&As(A,x),C=y[M],A.duration=+Ro(c,zi(a),M,C,y),A.delay=(+Ro(h,zi(a),M,C,y)||0)-a._delay,!u&&b===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),v.to(C,A,P?P(M,C,y):0),v._ease=le.none;v.duration()?c=h=0:a.timeline=0}else if(m){Mo(Vn(v.vars.defaults,{ease:"none"})),v._ease=Fr(m.ease||i.ease||"none");var U=0,B,G,q;if(pn(m))m.forEach(function(z){return v.to(y,z,">")}),v.duration();else{A={};for(S in m)S==="ease"||S==="easeEach"||Gy(S,m[S],A,m.easeEach);for(S in A)for(B=A[S].sort(function(z,$){return z.t-$.t}),U=0,M=0;M<B.length;M++)G=B[M],q={ease:G.e,duration:(G.t-(M?B[M-1].t:0))/100*c},q[S]=G.v,v.to(y,q,U),U+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Hc&&(lr=zi(a),Fe.killTweensOf(y),lr=0),Ai(g,zi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!m&&a._start===Oe(g._time)&&Pn(f)&&_y(zi(a))&&g.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-h)||0)),p&&pd(zi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Ee&&!h?l:i<Ee?0:i,u,d,m,_,p,g,y,v;if(!c)xy(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Oe(f%_),f===l?(m=this._repeat,u=c):(p=Oe(f/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=Cs(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=f,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(md(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=u<a;if(M!==this._inv){var A=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(Wn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&nh(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&nh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&sr(this,1),!s&&!(h&&!a)&&(f||a||g)&&(Wn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ao||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||fh(this,c),h=this._ease(c/this._dur),zy(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(il(this,0),this.parent||ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||bo(this),this.parent&&o!==this.timeline.totalDuration()&&Rs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ri(i):a,c=this._ptLookup,h=this._pt,f,u,d,m,_,p,g;if((!s||s==="all")&&my(a,l))return s==="all"&&(this._pt=0),bo(this);for(f=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},Ln(s,function(y){return _[y]=1}),s=_),s=ky(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(f[g]=s,m=u,d={}):(d=f[g]=f[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&tl(this,p,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&bo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return So(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return So(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Fe.killTweensOf(i,s,o)},t}(Co);Vn($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Ln("staggerTo,staggerFrom,staggerFromTo",function(r){$e[r]=function(){var t=new Dn,e=rh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var dh=function(t,e,n){return t[e]=n},Fd=function(t,e,n){return t[e](n)},Hy=function(t,e,n,i){return t[e](i.fp,n)},Vy=function(t,e,n){return t.setAttribute(e,n)},ph=function(t,e){return ze(t[e])?Fd:Wc(t[e])&&t.setAttribute?Vy:dh},Od=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Wy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Bd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},mh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Xy=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},qy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Yy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zd=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},In=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Od,this.d=l||this,this.set=c||dh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Yy,this.m=n,this.mt=s,this.tween=i},r}();Ln(Qc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Zc[r]=1}),Gn.TweenMax=Gn.TweenLite=$e,Gn.TimelineLite=Gn.TimelineMax=Dn,Fe=new Dn({sortChildren:!1,defaults:vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),kn.stringFilter=Pd;var Br=[],rl={},$y=[],kd=0,Ky=0,gh=function(t){return(rl[t]||$y).map(function(e){return e()})},_h=function(){var t=Date.now(),e=[];t-kd>2&&(gh("matchMediaInit"),Br.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),gh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kd=t,gh("matchMedia"))},Gd=function(){function r(e,n){this.selector=n&&sh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ky++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ze(n)&&(s=i,i=n,n=ze);var o=this,a=function(){var c=Ie,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=sh(s)),Ie=o,f=i.apply(o,arguments),ze(f)&&o._r.push(f),Ie=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ie;Ie=null,n(this),Ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $e)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Br.length;o--;)Br[o].id===this.id&&Br.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),Zy=function(){function r(e){this.contexts=[],this.scope=e,Ie&&Ie.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){bi(n)||(n={matches:n});var o=new Gd(0,s||this.scope),a=o.conditions={},l,c,h;Ie&&!o.selector&&(o.selector=Ie.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=wi.matchMedia(n[c]),l&&(Br.indexOf(o)<0&&Br.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(_h):l.addEventListener("change",_h)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),sl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return wd(i)})},timeline:function(t){return new Dn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=ri(t)[0]);var s=Ur(t||{}).get,o=n?cd:ld;return n==="native"&&(n=""),t&&(e?o((Hn[e]&&Hn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Hn[a]&&Hn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ri(t),t.length>1){var i=t.map(function(h){return Un.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Hn[e],a=Ur(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;Ps._pt=0,f.init(t,n?h+n:h,Ps,0,[t]),f.render(1,f),Ps._pt&&mh(1,Ps)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Un.to(t,Vn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Fr(t.ease,vo.ease)),hd(vo,t||{})},config:function(t){return hd(kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Hn[a]&&!Gn[a]&&xo(e+" effect requires "+a+" plugin.")}),jc[e]=function(a,l,c){return n(ri(a),Vn(l||{},s),c)},o&&(Dn.prototype[e]=function(a,l,c){return this.add(jc[e](a,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=Fr(e)},parseEase:function(t,e){return arguments.length?Fr(t,e):le},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Dn(t),i,s;for(n.smoothChildTiming=Pn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof $e&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(Fe,n,0),n},context:function(t,e){return t?new Gd(t,e):Ie},matchMedia:function(t){return new Zy(t)},matchMediaRefresh:function(){return Br.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||_h()},addEventListener:function(t,e){var n=rl[t]||(rl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=rl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ay,wrapYoyo:Cy,distribute:xd,random:Md,snap:yd,normalize:wy,getUnit:mn,clamp:Sy,splitColor:Ad,toArray:ri,selector:sh,mapRange:Td,pipe:Ey,unitize:by,interpolate:Ry,shuffle:vd},install:nd,effects:jc,ticker:Xn,updateRoot:Dn.updateRoot,plugins:Hn,globalTimeline:Fe,core:{PropTween:In,globals:id,Tween:$e,Timeline:Dn,Animation:Co,getCache:Ur,_removeLinkedListItem:tl,reverting:function(){return cn},context:function(t){return t&&Ie&&(Ie.data.push(t),t._ctx=Ie),Ie},suppressOverwrites:function(t){return Hc=t}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sl[r]=$e[r]}),Xn.add(Dn.updateRoot),Ps=sl.to({},{duration:0});var Jy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},jy=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Jy(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},vh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(rn(s)&&(l={},Ln(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}jy(a,s)}}}},Un=sl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},vh("roundProps",oh),vh("modifiers"),vh("snap",yd))||sl;$e.version=Dn.version=Un.version="3.15.0",ed=1,Xc()&&Ls(),le.Power0,le.Power1,le.Power2,le.Power3,le.Power4,le.Linear,le.Quad,le.Cubic,le.Quart,le.Quint,le.Strong,le.Elastic,le.Back,le.SteppedEase,le.Bounce,le.Sine,le.Expo,le.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hd,cr,Ds,xh,zr,Vd,yh,Qy=function(){return typeof window<"u"},Gi={},kr=180/Math.PI,Is=Math.PI/180,Us=Math.atan2,Wd=1e8,Mh=/([A-Z])/g,tM=/(left|right|width|margin|padding|x)/i,eM=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},nM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},iM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},rM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},sM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},oM=function(t,e,n){return t.style[e]=n},aM=function(t,e,n){return t.style.setProperty(e,n)},lM=function(t,e,n){return t._gsap[e]=n},cM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},hM=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},uM=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Be="transform",Nn=Be+"Origin",fM=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Gi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Hi(i,a)}):this.tfm[t]=o.x?o[t]:Hi(i,t),t===Nn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Be)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,e,"")),t=Be}(s||e)&&this.props.push(t,e,s[t])},Yd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},dM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Mh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=yh(),(!s||!s.isStart)&&!n[Be]&&(Yd(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$d=function(t,e){var n={target:t,props:[],revert:dM,save:fM};return t._gsap||Un.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Kd,Th=function(t,e){var n=cr.createElementNS?cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cr.createElement(t);return n&&n.style?n:cr.createElement(t)},qn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Mh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ns(e)||e,1)||""},Zd="O,Moz,ms,Ms,Webkit".split(","),Ns=function(t,e,n){var i=e||zr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Zd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Zd[o]:"")+t},Eh=function(){Qy()&&window.document&&(Hd=window,cr=Hd.document,Ds=cr.documentElement,zr=Th("div")||{style:{}},Th("div"),Be=Ns(Be),Nn=Be+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kd=!!Ns("perspective"),yh=Un.core.reverting,xh=1)},Jd=function(t){var e=t.ownerSVGElement,n=Th("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ds.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ds.removeChild(n),s},jd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Qd=function(t){var e,n;try{e=t.getBBox()}catch{e=Jd(t),n=1}return e&&(e.width||e.height)||n||(e=Jd(t)),e&&!e.width&&!e.x&&!e.y?{x:+jd(t,["x","cx","x1"])||0,y:+jd(t,["y","cy","y1"])||0,width:0,height:0}:e},tp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Qd(t))},hr=function(t,e){if(e){var n=t.style,i;e in Gi&&e!==Nn&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Mh,"-$1").toLowerCase())):n.removeAttribute(e)}},ur=function(t,e,n,i,s,o){var a=new In(t._pt,e,n,0,1,o?qd:Xd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},ep={deg:1,rad:1,turn:1},pM={grid:1,flex:1},fr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=zr.style,l=tM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",m,_,p,g;if(i===o||!s||ep[i]||ep[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&tp(t),(d||o==="%")&&(Gi[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Ge(d?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===cr||!_.appendChild)&&(_=cr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Xn.time&&!p.uncache)return Ge(s/p.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,m=t[h],y?t.style[e]=y:hr(t,e)}else(d||o==="%")&&!pM[qn(_,"display")]&&(a.position=qn(t,"position")),_===t&&(a.position="static"),_.appendChild(zr),m=zr[h],_.removeChild(zr),a.position="absolute";return l&&d&&(p=Ur(_),p.time=Xn.time,p.width=_[h]),Ge(u?m*s/f:m&&s?f/m*s:0)},Hi=function(t,e,n,i){var s;return xh||Eh(),e in Ci&&e!=="transform"&&(e=Ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gi[e]&&e!=="transform"?(s=Lo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:al(qn(t,Nn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ol[e]&&ol[e](t,e,n)||qn(t,e)||od(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(t,e,s,n)+n:s},mM=function(t,e,n,i){if(!n||n==="none"){var s=Ns(e,t,1),o=s&&qn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=qn(t,"borderTopColor"))}var a=new In(this._pt,t.style,e,0,1,Bd),l=0,c=0,h,f,u,d,m,_,p,g,y,v,M,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=qn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=qn(t,e)||i,_?t.style[e]=_:hr(t,e)),h=[n,i],Pd(h),n=h[0],i=h[1],u=n.match(bs)||[],A=i.match(bs)||[],A.length){for(;f=bs.exec(i);)p=f[0],y=i.substring(l,f.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),p.charAt(1)==="="&&(p=ws(d,p)+M),g=parseFloat(p),v=p.substr((g+"").length),l=bs.lastIndex-v.length,v||(v=v||kn.units[e]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(d=fr(t,e,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?qd:Xd;return td.test(i)&&(a.e=0),this._pt=a,a},np={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=np[n]||n,e[1]=np[i]||i,e.join(" ")},_M=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Gi[a]&&(l=1,a=a==="transformOrigin"?Nn:Be),hr(n,a);l&&(hr(n,Be),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Lo(n,1),o.uncache=1,Yd(i)))}},ol={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new In(t._pt,e,n,0,0,_M);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Po=[1,0,0,1,0,0],ip={},rp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sp=function(t){var e=qn(t,Be);return rp(e)?Po:e.substr(7).match(Qf).map(Ge)},bh=function(t,e){var n=t._gsap||Ur(t),i=t.style,s=sp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Po:s):(s===Po&&!t.offsetParent&&t!==Ds&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ds.appendChild(t)),s=sp(t),l?i.display=l:hr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ds.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wh=function(t,e,n,i,s,o){var a=t._gsap,l=s||bh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],v=e.split(" "),M=parseFloat(v[0])||0,A=parseFloat(v[1])||0,b,S,C,P;n?l!==Po&&(S=d*p-m*_)&&(C=M*(p/S)+A*(-_/S)+(_*y-p*g)/S,P=M*(-m/S)+A*(d/S)-(d*y-m*g)/S,M=C,A=P):(b=Qd(t),M=b.x+(~v[0].indexOf("%")?M/100*b.width:M),A=b.y+(~(v[1]||v[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(g=M-c,y=A-h,a.xOffset=f+(g*d+y*_)-g,a.yOffset=u+(g*m+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Nn]="0px 0px",o&&(ur(o,a,"xOrigin",c,M),ur(o,a,"yOrigin",h,A),ur(o,a,"xOffset",f,a.xOffset),ur(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},Lo=function(t,e){var n=t._gsap||new Dd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=qn(t,Nn)||"0",h,f,u,d,m,_,p,g,y,v,M,A,b,S,C,P,x,E,U,B,G,q,z,$,V,it,L,st,Bt,Ft,Y,Q;return h=f=u=_=p=g=y=v=M=0,d=m=1,n.svg=!!(t.getCTM&&tp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),S=bh(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),wh(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,S)),A=n.xOrigin||0,b=n.yOrigin||0,S!==Po&&(E=S[0],U=S[1],B=S[2],G=S[3],h=q=S[4],f=z=S[5],S.length===6?(d=Math.sqrt(E*E+U*U),m=Math.sqrt(G*G+B*B),_=E||U?Us(U,E)*kr:0,y=B||G?Us(B,G)*kr+_:0,y&&(m*=Math.abs(Math.cos(y*Is))),n.svg&&(h-=A-(A*E+b*B),f-=b-(A*U+b*G))):(Q=S[6],Ft=S[7],L=S[8],st=S[9],Bt=S[10],Y=S[11],h=S[12],f=S[13],u=S[14],C=Us(Q,Bt),p=C*kr,C&&(P=Math.cos(-C),x=Math.sin(-C),$=q*P+L*x,V=z*P+st*x,it=Q*P+Bt*x,L=q*-x+L*P,st=z*-x+st*P,Bt=Q*-x+Bt*P,Y=Ft*-x+Y*P,q=$,z=V,Q=it),C=Us(-B,Bt),g=C*kr,C&&(P=Math.cos(-C),x=Math.sin(-C),$=E*P-L*x,V=U*P-st*x,it=B*P-Bt*x,Y=G*x+Y*P,E=$,U=V,B=it),C=Us(U,E),_=C*kr,C&&(P=Math.cos(C),x=Math.sin(C),$=E*P+U*x,V=q*P+z*x,U=U*P-E*x,z=z*P-q*x,E=$,q=V),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),d=Ge(Math.sqrt(E*E+U*U+B*B)),m=Ge(Math.sqrt(z*z+Q*Q)),C=Us(q,z),y=Math.abs(C)>2e-4?C*kr:0,M=Y?1/(Y<0?-Y:Y):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!rp(qn(t,Be)),$&&t.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ge(d),n.scaleY=Ge(m),n.rotation=Ge(_)+a,n.rotationX=Ge(p)+a,n.rotationY=Ge(g)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Nn]=al(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?xM:Kd?op:vM,n.uncache=0,n},al=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ah=function(t,e,n){var i=mn(e);return Ge(parseFloat(e)+parseFloat(fr(t,"x",n+"px",i)))+i},vM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,op(t,e)},Gr="0deg",Do="0px",Hr=") ",op=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,v=n.zOrigin,M="",A=g==="auto"&&t&&t!==1||g===!0;if(v&&(f!==Gr||h!==Gr)){var b=parseFloat(h)*Is,S=Math.sin(b),C=Math.cos(b),P;b=parseFloat(f)*Is,P=Math.cos(b),o=Ah(y,o,S*P*-v),a=Ah(y,a,-Math.sin(b)*-v),l=Ah(y,l,C*P*-v+v)}p!==Do&&(M+="perspective("+p+Hr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||o!==Do||a!==Do||l!==Do)&&(M+=l!==Do||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hr),c!==Gr&&(M+="rotate("+c+Hr),h!==Gr&&(M+="rotateY("+h+Hr),f!==Gr&&(M+="rotateX("+f+Hr),(u!==Gr||d!==Gr)&&(M+="skew("+u+", "+d+Hr),(m!==1||_!==1)&&(M+="scale("+m+", "+_+Hr),y.style[Be]=M||"translate(0, 0)"},xM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,v=parseFloat(o),M=parseFloat(a),A,b,S,C,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Is,c*=Is,A=Math.cos(l)*f,b=Math.sin(l)*f,S=Math.sin(l-c)*-u,C=Math.cos(l-c)*u,c&&(h*=Is,P=Math.tan(c-h),P=Math.sqrt(1+P*P),S*=P,C*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),A*=P,b*=P)),A=Ge(A),b=Ge(b),S=Ge(S),C=Ge(C)):(A=f,C=u,b=S=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=fr(d,"x",o,"px"),M=fr(d,"y",a,"px")),(m||_||p||g)&&(v=Ge(v+m-(m*A+_*S)+p),M=Ge(M+_-(m*b+_*C)+g)),(i||s)&&(P=d.getBBox(),v=Ge(v+i/100*P.width),M=Ge(M+s/100*P.height)),P="matrix("+A+","+b+","+S+","+C+","+v+","+M+")",d.setAttribute("transform",P),y&&(d.style[Be]=P)},yM=function(t,e,n,i,s){var o=360,a=rn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?kr:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Wd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Wd)%o-~~(c/o)*o)),t._pt=u=new In(t._pt,e,n,i,c,nM),u.e=h,u.u="deg",t._props.push(n),u},ap=function(t,e){for(var n in e)t[n]=e[n];return t},MM=function(t,e,n){var i=ap({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Be]=e,a=Lo(n,1),hr(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],o[Be]=e,a=Lo(n,1),o[Be]=c);for(l in Gi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=mn(c),m=mn(h),f=d!==m?fr(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new In(t._pt,a,l,f,u-f,Sh),t._pt.u=m||0,t._props.push(l));ap(a,i)};Ln("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});ol[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(m){return Hi(a,m,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(m,_){return d[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var lp={name:"css",register:Eh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,m,_,p,g,y,v,M,A,b,S,C,P;xh||Eh(),this.styles=this.styles||$d(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Hn[_]&&Id(_,e,n,i,t,s)))){if(d=typeof h,m=ol[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Eo(h)),m)m(this,t,_,h,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ar.lastIndex=0,ar.test(c)||(p=mn(c),g=mn(h),g?p!==g&&(c=fr(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=Eo(c)),mn(c+"")||c==="auto"||(c+=kn.units[_]||mn(Hi(t,_))||""),(c+"").charAt(1)==="="&&(c=Hi(t,_))):c=Hi(t,_),u=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),_ in Ci&&(_==="autoAlpha"&&(u===1&&Hi(t,"visibility")==="hidden"&&f&&(u=0),C.push("visibility",0,a.visibility),ur(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ci[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Gi,v){if(this.styles.save(_),P=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=qn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=h,h=qn(t,"perspective"),x?t.style.perspective=x:hr(t,"perspective")}f=parseFloat(h)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||Lo(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new In(this._pt,a,Be,0,1,A.renderTransform,A,0,-1),M.dep=1),_==="scale")this._pt=new In(this._pt,A,"scaleY",A.scaleY,(y?ws(A.scaleY,y+f):f)-A.scaleY||0,Sh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Nn,0,a[Nn]),h=gM(h),A.svg?wh(t,h,0,b,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==A.zOrigin&&ur(this,A,"zOrigin",A.zOrigin,g),ur(this,a,_,al(c),al(h)));continue}else if(_==="svgOrigin"){wh(t,h,1,b,0,this);continue}else if(_ in ip){yM(this,A,_,u,y?ws(u,y+h):h);continue}else if(_==="smoothOrigin"){ur(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){MM(this,h,t);continue}}else _ in a||(_=Ns(_)||_);if(v||(f||f===0)&&(u||u===0)&&!eM.test(h)&&_ in a)p=(c+"").substr((u+"").length),f||(f=0),g=mn(h)||(_ in kn.units?kn.units[_]:p),p!==g&&(u=fr(t,_,c,g)),this._pt=new In(this._pt,v?A:a,_,u,(y?ws(u,y+f):f)-u,!v&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?sM:Sh),this._pt.u=g||0,v&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=rM):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=iM);else if(_ in a)mM.call(this,t,_,c,y?y+h:h);else if(_ in t)this.add(t,_,c||t[_],y?y+h:h,i,s);else if(_!=="parseTransform"){Kc(_,h);continue}v||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}S&&zd(this)},render:function(t,e){if(e.tween._time||!yh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Hi,aliases:Ci,getSetter:function(t,e,n){var i=Ci[e];return i&&i.indexOf(",")<0&&(e=i),e in Gi&&e!==Nn&&(t._gsap.x||Hi(t,"x"))?n&&Vd===n?e==="scale"?cM:lM:(Vd=n||{})&&(e==="scale"?hM:uM):t.style&&!Wc(t.style[e])?oM:~e.indexOf("-")?aM:ph(t,e)},core:{_removeProperty:hr,_getMatrix:bh}};Un.utils.checkPrefix=Ns,Un.core.getStyleSaver=$d,function(r,t,e,n){var i=Ln(r+","+t+","+e,function(s){Gi[s]=1});Ln(t,function(s){kn.units[s]="deg",ip[s]=1}),Ci[i[13]]=r+","+t,Ln(n,function(s){var o=s.split(":");Ci[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){kn.units[r]="px"}),Un.registerPlugin(lp);var Gt=Un.registerPlugin(lp)||Un;Gt.core.Tween;const SM=[[.74,-1.2],[.74,.95],[.78,1.05],[.92,1.12],[1.02,1.2],[1.02,1.42],[.98,1.46],[1.08,1.46],[1.1,1.4],[1.1,1],[1.04,.96],[.9,.96],[.9,.9],[.86,.88],[.9,.86],[.9,-.7],[.92,-.74],[1.12,-.74],[1.12,-.98],[.94,-.98],[.9,-1.02],[.9,-1.2],[.74,-1.2]],Pe={group:new Bi,mesh:null,material:null,hover:{value:0},ready:!1};function TM(){const r=new Wx({color:pe.COLORS.gold,metalness:1,roughness:.18,clearcoat:.35,clearcoatRoughness:.12,envMapIntensity:1.1,reflectivity:1,side:2});return"anisotropy"in r&&(r.anisotropy=.5,r.anisotropyRotation=Math.PI/2),r}function EM(){const r=SM.map(([o,a])=>new Mt(o,a)),t=new Va(r,96);t.computeVertexNormals();const e=new Se(t,TM());e.name="hero_pipe",e.castShadow=e.receiveShadow=!0;const n=new Ss(.045,.045,.05,6),i=new Na(n,e.material,12),s=new fe;for(let o=0;o<12;o++){const a=o/12*Math.PI*2;s.makeRotationY(a),s.setPosition(1.02*Math.cos(a),-.72,1.02*Math.sin(a)),i.setMatrixAt(o,s)}return e.add(i),e}async function bM(){const{scene:r}=tt;Pe.group.position.set(0,0,-1.46),Pe.group.rotation.x=Math.PI/2,r.add(Pe.group),Pe.mesh=EM(),Pe.material=Pe.mesh.material,Pe.group.add(Pe.mesh),Pe.ready=!0;const t=new Xf;let e=!1;const n=Gt.timeline({paused:!0}).to(Pe.hover,{value:1,duration:.7,ease:"power3.out"},0);tt.updaters.add((i,s)=>{var f;if(!Pe.ready)return;const o=tt.progress,a=o>.18,l=ln.clamp(1-o/.18,0,1);Pe.group.position.y=Math.sin(s*.8)*.12*l;const c=tt.isTall?0:2.6;if(Pe.group.position.x=c*l,Pe.group.rotation.z=Math.sin(s*.35)*.08*l,Pe.group.rotation.y=tt.pointer.x*.18*l,Pe.group.rotation.x=Math.PI/2+-tt.pointer.y*.12*l,!a&&tt.pointerTarget.lengthSq()>0){t.setFromCamera(tt.pointerTarget,tt.camera);const u=t.intersectObject(Pe.mesh,!0).length>0;u!==e&&(e=u,u?n.play():n.reverse(),document.body.classList.toggle("is-hovering-pipe",u))}const h=Pe.hover.value;Pe.material&&(Pe.material.envMapIntensity=1.1+h*1.4,Pe.material.clearcoat=.35+h*.5,Pe.material.roughness=.18-h*.1),(f=tt.scene).environmentRotation??(f.environmentRotation=new Rn),tt.scene.environmentRotation.y=s*.08+h*tt.pointer.x*.6,Pe.material?.color&&Pe.material.color.lerpColors(new Nt(pe.COLORS.gold),new Nt(8006175),tt.threat*.7)})}const gi={tunnel:null,grid:null,uniforms:null},wM=`
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,AM=`
  precision highp float;
  uniform float uTime;
  uniform float uProgress;   // 0..1 dive
  uniform float uThreat;     // 0..1 quote slider
  uniform vec3  uGold;
  uniform vec3  uCrimson;
  uniform vec3  uInk;
  uniform float uLength;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  // cheap hash noise for brushing
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  void main() {
    // vUv.x wraps around the circumference, vUv.y runs down the length
    float along = vUv.y;                       // 0 at mouth → 1 at the end
    float around = vUv.x;

    // brushed base: streaks along the length
    float brush = hash(vec2(floor(around * 900.0), floor(along * 40.0)));
    vec3 base = mix(uInk, uGold * 0.35, 0.35 + brush * 0.25);

    // light rings sweeping toward the camera (speed ramps with progress)
    float speed = 0.6 + uProgress * 2.4;
    float ring = smoothstep(0.985, 1.0, sin((along * 60.0) - uTime * speed) * 0.5 + 0.5);
    vec3 ringCol = mix(uGold, uCrimson, uThreat) * ring * 2.5;

    // scanline grid that intensifies with threat
    float gx = step(0.97, fract(around * 48.0));
    float gy = step(0.96, fract(along * 120.0));
    float grid = max(gx, gy) * (0.15 + uThreat * 0.6);
    vec3 gridCol = mix(uGold, uCrimson, uThreat) * grid;

    // crimson pressure pulse travelling down the tube
    float pulse = exp(-pow((along - fract(uTime * 0.22)) * 18.0, 2.0));
    vec3 pulseCol = uCrimson * pulse * (0.8 + uThreat * 2.0);

    // fresnel rim so the wall curvature reads
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float fres = pow(1.0 - abs(dot(viewDir, vNormal)), 2.5);

    vec3 col = base + ringCol + gridCol + pulseCol + uGold * fres * 0.25;

    // fade the far end into ink so the tunnel feels endless
    col = mix(col, uInk, smoothstep(0.75, 1.0, along));

    gl_FragColor = vec4(col, 1.0);
  }
`;function CM(){const{scene:r,qualityCfg:t}=tt,e=pe.CAMERA,n=Math.abs(e.tunnelEndZ)+6,i=new Ss(.735,.735,n,64,t.tunnelSegments,!0);i.rotateX(Math.PI/2),i.translate(0,0,-1-n/2),gi.uniforms={uTime:{value:0},uProgress:{value:0},uThreat:{value:0},uGold:{value:new Nt(pe.COLORS.gold)},uCrimson:{value:new Nt(pe.COLORS.crimsonHi)},uInk:{value:new Nt(pe.COLORS.ink)},uLength:{value:n}};const s=new Si({uniforms:gi.uniforms,vertexShader:wM,fragmentShader:AM,side:1,depthWrite:!0}),o=new Se(i,s);o.name="tunnel",o.visible=!1,r.add(o),gi.tunnel=o;const a=new Ss(.12,.12,6,10,1),l=new Ts({color:pe.COLORS.slate,metalness:.9,roughness:.35,emissive:pe.COLORS.gold,emissiveIntensity:0}),c=220,h=new Na(a,l,c),f=new fe,u=new Zi,d=[new D(1,0,0),new D(0,1,0),new D(0,0,1)];let m=0;const _=RM(1985);for(;m<c;){const p=(Math.floor(_()*9)-4)*2.2,g=(Math.floor(_()*7)-3)*2.2,y=e.tunnelEndZ-10+Math.floor(_()*12)*2.5;if(Math.hypot(p,g)<1.8)continue;const v=d[Math.floor(_()*3)];u.setFromUnitVectors(new D(0,1,0),v),f.compose(new D(p,g,y),u,new D(1,1,1)),h.setMatrixAt(m++,f)}h.visible=!1,r.add(h),gi.grid=h,tt.updaters.add((p,g)=>{gi.uniforms.uTime.value=g,gi.uniforms.uProgress.value=tt.progress,gi.uniforms.uThreat.value=tt.threat;const y=tt.progress;r.fog.density=ln.lerp(0,.065,ln.smoothstep(y,.15,.6))*(1-ln.smoothstep(y,.8,1)*.5),l.emissiveIntensity=.15+tt.threat*1.2,l.emissive.setHex(tt.threat>.5?pe.COLORS.crimsonHi:pe.COLORS.gold),tt.lights.danger.intensity=tt.threat*40*(.8+.2*Math.sin(g*9))})}function RM(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function PM(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function LM(r,t,e){return t&&PM(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn,ll,Yn,dr,pr,Fs,cp,Vr,Os,hp,Vi,_i,up,fp=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},dp=1,Bs=[],re=[],Ri=[],Io=Date.now,Ch=function(t,e){return e},DM=function(){var t=Os.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Ri),re=n,Ri=i,Ch=function(o,a){return e[o](a)}},mr=function(t,e){return~Ri.indexOf(t)&&Ri[Ri.indexOf(t)+1][e]},Uo=function(t){return!!~hp.indexOf(t)},Tn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},En=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},cl="scrollLeft",hl="scrollTop",Rh=function(){return Vi&&Vi.isPressed||re.cache++},ul=function(t,e){var n=function i(s){if(s||s===0){dp&&(Yn.history.scrollRestoration="manual");var o=Vi&&Vi.isPressed;s=i.v=Math.round(s)||(Vi&&Vi.iOS?1:0),t(s),i.cacheID=re.cache,o&&Ch("ss",s)}else(e||re.cache!==i.cacheID||Ch("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},bn={s:cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ul(function(r){return arguments.length?Yn.scrollTo(r,Qe.sc()):Yn.pageXOffset||dr[cl]||pr[cl]||Fs[cl]||0})},Qe={s:hl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:ul(function(r){return arguments.length?Yn.scrollTo(bn.sc(),r):Yn.pageYOffset||dr[hl]||pr[hl]||Fs[hl]||0})},Fn=function(t,e){return(e&&e._ctx&&e._ctx.selector||hn.utils.toArray)(t)[0]||(typeof t=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},IM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},gr=function(t,e){var n=e.s,i=e.sc;Uo(t)&&(t=dr.scrollingElement||pr);var s=re.indexOf(t),o=i===Qe.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||Tn(t,"scroll",Rh);var a=re[s+o],l=a||(re[s+o]=ul(mr(t,n),!0)||(Uo(t)?i:ul(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=hn.getProperty(t,"scrollBehavior")==="smooth"),l},Ph=function(t,e,n){var i=t,s=t,o=Io(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Io();_||p-o>l?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(m){var _=a,p=s,g=Io();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},No=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},pp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},mp=function(){Os=hn.core.globals().ScrollTrigger,Os&&Os.core&&DM()},gp=function(t){return hn=t||fp(),!ll&&hn&&typeof document<"u"&&document.body&&(Yn=window,dr=document,pr=dr.documentElement,Fs=dr.body,hp=[Yn,dr,pr,Fs],hn.utils.clamp,up=hn.core.context||function(){},Vr="onpointerenter"in Fs?"pointer":"mouse",cp=He.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=He.eventTypes=("ontouchstart"in pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dp=0},500),ll=1),Os||mp(),ll};bn.op=Qe,re.cache=0;var He=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){ll||gp(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Os||mp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,v=n.onPress,M=n.onRelease,A=n.onRight,b=n.onLeft,S=n.onUp,C=n.onDown,P=n.onChangeX,x=n.onChangeY,E=n.onChange,U=n.onToggleX,B=n.onToggleY,G=n.onHover,q=n.onHoverEnd,z=n.onMove,$=n.ignoreCheck,V=n.isNormalizer,it=n.onGestureStart,L=n.onGestureEnd,st=n.onWheel,Bt=n.onEnable,Ft=n.onDisable,Y=n.onClick,Q=n.scrollSpeed,ht=n.capture,lt=n.allowClicks,bt=n.lockAxis,Tt=n.onLockAxis;this.target=a=Fn(a)||pr,this.vars=n,d&&(d=hn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(Fs).lineHeight)||22);var Lt,Kt,Ht,I,ce,Vt,qt,k=this,ne=0,Ut=0,R=n.passive||!h&&n.passive!==!1,T=gr(a,bn),X=gr(a,Qe),J=T(),nt=X(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_i[0]==="pointerdown",Et=Uo(a),ot=a.ownerDocument||dr,pt=[0,0,0],$t=[0,0,0],rt=0,xt=function(){return rt=Io()},yt=function(At,de){return(k.event=At)&&d&&IM(At.target,d)||de&&Z&&At.pointerType!=="touch"||$&&$(At,de)},zt=function(){k._vx.reset(),k._vy.reset(),Kt.pause(),f&&f(k)},vt=function(){var At=k.deltaX=pp(pt),de=k.deltaY=pp($t),mt=Math.abs(At)>=i,Ot=Math.abs(de)>=i;E&&(mt||Ot)&&E(k,At,de,pt,$t),mt&&(A&&k.deltaX>0&&A(k),b&&k.deltaX<0&&b(k),P&&P(k),U&&k.deltaX<0!=ne<0&&U(k),ne=k.deltaX,pt[0]=pt[1]=pt[2]=0),Ot&&(C&&k.deltaY>0&&C(k),S&&k.deltaY<0&&S(k),x&&x(k),B&&k.deltaY<0!=Ut<0&&B(k),Ut=k.deltaY,$t[0]=$t[1]=$t[2]=0),(I||Ht)&&(z&&z(k),Ht&&(p&&Ht===1&&p(k),y&&y(k),Ht=0),I=!1),Vt&&!(Vt=!1)&&Tt&&Tt(k),ce&&(st(k),ce=!1),Lt=0},Zt=function(At,de,mt){pt[mt]+=At,$t[mt]+=de,k._vx.update(At),k._vy.update(de),c?Lt||(Lt=requestAnimationFrame(vt)):vt()},Wt=function(At,de){bt&&!qt&&(k.axis=qt=Math.abs(At)>Math.abs(de)?"x":"y",Vt=!0),qt!=="y"&&(pt[2]+=At,k._vx.update(At,!0)),qt!=="x"&&($t[2]+=de,k._vy.update(de,!0)),c?Lt||(Lt=requestAnimationFrame(vt)):vt()},he=function(At){if(!yt(At,1)){At=No(At,h);var de=At.clientX,mt=At.clientY,Ot=de-k.x,Dt=mt-k.y,Yt=k.isDragging;k.x=de,k.y=mt,(Yt||(Ot||Dt)&&(Math.abs(k.startX-de)>=s||Math.abs(k.startY-mt)>=s))&&(Ht||(Ht=Yt?2:1),Yt||(k.isDragging=!0),Wt(Ot,Dt))}},N=k.onPress=function(Pt){yt(Pt,1)||Pt&&Pt.button||(k.axis=qt=null,Kt.pause(),k.isPressed=!0,Pt=No(Pt),ne=Ut=0,k.startX=k.x=Pt.clientX,k.startY=k.y=Pt.clientY,k._vx.reset(),k._vy.reset(),Tn(V?a:ot,_i[1],he,R,!0),k.deltaX=k.deltaY=0,v&&v(k))},et=k.onRelease=function(Pt){if(!yt(Pt,1)){En(V?a:ot,_i[1],he,!0);var At=!isNaN(k.y-k.startY),de=k.isDragging,mt=de&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Ot=No(Pt);!mt&&At&&(k._vx.reset(),k._vy.reset(),h&&lt&&hn.delayedCall(.08,function(){if(Io()-rt>300&&!Pt.defaultPrevented){if(Pt.target.click)Pt.target.click();else if(ot.createEvent){var Dt=ot.createEvent("MouseEvents");Dt.initMouseEvent("click",!0,!0,Yn,1,Ot.screenX,Ot.screenY,Ot.clientX,Ot.clientY,!1,!1,!1,!1,0,null),Pt.target.dispatchEvent(Dt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&de&&!V&&Kt.restart(!0),Ht&&vt(),g&&de&&g(k),M&&M(k,mt)}},K=function(At){return At.touches&&At.touches.length>1&&(k.isGesturing=!0)&&it(At,k.isDragging)},j=function(){return(k.isGesturing=!1)||L(k)},ct=function(At){if(!yt(At)){var de=T(),mt=X();Zt((de-J)*Q,(mt-nt)*Q,1),J=de,nt=mt,f&&Kt.restart(!0)}},ut=function(At){if(!yt(At)){At=No(At,h),st&&(ce=!0);var de=(At.deltaMode===1?l:At.deltaMode===2?Yn.innerHeight:1)*m;Zt(At.deltaX*de,At.deltaY*de,0),f&&!V&&Kt.restart(!0)}},Jt=function(At){if(!yt(At)){var de=At.clientX,mt=At.clientY,Ot=de-k.x,Dt=mt-k.y;k.x=de,k.y=mt,I=!0,f&&Kt.restart(!0),(Ot||Dt)&&Wt(Ot,Dt)}},we=function(At){k.event=At,G(k)},Ue=function(At){k.event=At,q(k)},oe=function(At){return yt(At)||No(At,h)&&Y(k)};Kt=k._dc=hn.delayedCall(u||.25,zt).pause(),k.deltaX=k.deltaY=0,k._vx=Ph(0,50,!0),k._vy=Ph(0,50,!0),k.scrollX=T,k.scrollY=X,k.isDragging=k.isGesturing=k.isPressed=!1,up(this),k.enable=function(Pt){return k.isEnabled||(Tn(Et?ot:a,"scroll",Rh),o.indexOf("scroll")>=0&&Tn(Et?ot:a,"scroll",ct,R,ht),o.indexOf("wheel")>=0&&Tn(a,"wheel",ut,R,ht),(o.indexOf("touch")>=0&&cp||o.indexOf("pointer")>=0)&&(Tn(a,_i[0],N,R,ht),Tn(ot,_i[2],et),Tn(ot,_i[3],et),lt&&Tn(a,"click",xt,!0,!0),Y&&Tn(a,"click",oe),it&&Tn(ot,"gesturestart",K),L&&Tn(ot,"gestureend",j),G&&Tn(a,Vr+"enter",we),q&&Tn(a,Vr+"leave",Ue),z&&Tn(a,Vr+"move",Jt)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=I=Ht=!1,k._vx.reset(),k._vy.reset(),J=T(),nt=X(),Pt&&Pt.type&&N(Pt),Bt&&Bt(k)),k},k.disable=function(){k.isEnabled&&(Bs.filter(function(Pt){return Pt!==k&&Uo(Pt.target)}).length||En(Et?ot:a,"scroll",Rh),k.isPressed&&(k._vx.reset(),k._vy.reset(),En(V?a:ot,_i[1],he,!0)),En(Et?ot:a,"scroll",ct,ht),En(a,"wheel",ut,ht),En(a,_i[0],N,ht),En(ot,_i[2],et),En(ot,_i[3],et),En(a,"click",xt,!0),En(a,"click",oe),En(ot,"gesturestart",K),En(ot,"gestureend",j),En(a,Vr+"enter",we),En(a,Vr+"leave",Ue),En(a,Vr+"move",Jt),k.isEnabled=k.isPressed=k.isDragging=!1,Ft&&Ft(k))},k.kill=k.revert=function(){k.disable();var Pt=Bs.indexOf(k);Pt>=0&&Bs.splice(Pt,1),Vi===k&&(Vi=0)},Bs.push(k),V&&Uo(a)&&(Vi=k),k.enable(_)},LM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();He.version="3.15.0",He.create=function(r){return new He(r)},He.register=gp,He.getAll=function(){return Bs.slice()},He.getById=function(r){return Bs.filter(function(t){return t.vars.id===r})[0]},fp()&&hn.registerPlugin(He);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var St,zs,se,xe,$n,_e,Lh,fl,Fo,Oo,Bo,dl,gn,pl,Dh,wn,_p,vp,ks,xp,Ih,yp,An,Uh,Mp,Sp,_r,Nh,Fh,Gs,Oh,zo,Bh,zh,ml=1,_n=Date.now,kh=_n(),si=0,ko=0,Tp=function(t,e,n){var i=Kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Ep=function(t,e){return e&&(!Kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},UM=function r(){return ko&&requestAnimationFrame(r)},bp=function(){return pl=1},wp=function(){return pl=0},Pi=function(t){return t},Go=function(t){return Math.round(t*1e5)/1e5||0},Ap=function(){return typeof window<"u"},Cp=function(){return St||Ap()&&(St=window.gsap)&&St.registerPlugin&&St},Wr=function(t){return!!~Lh.indexOf(t)},Rp=function(t){return(t==="Height"?Oh:se["inner"+t])||$n["client"+t]||_e["client"+t]},Pp=function(t){return mr(t,"getBoundingClientRect")||(Wr(t)?function(){return Cl.width=se.innerWidth,Cl.height=Oh,Cl}:function(){return Wi(t)})},NM=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=mr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Rp(s):t["client"+s])||0}},FM=function(t,e){return!e||~Ri.indexOf(t)?Pp(t):function(){return Cl}},Li=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=mr(t,n))?o()-Pp(t)()[s]:Wr(t)?($n[n]||_e[n])-Rp(i):t[n]-t["offset"+i])},gl=function(t,e){for(var n=0;n<ks.length;n+=3)(!e||~e.indexOf(ks[n+1]))&&t(ks[n],ks[n+1],ks[n+2])},Kn=function(t){return typeof t=="string"},vn=function(t){return typeof t=="function"},Ho=function(t){return typeof t=="number"},Xr=function(t){return typeof t=="object"},Vo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Hs=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Vs=Math.abs,Lp="left",Dp="top",Gh="right",Hh="bottom",qr="width",Yr="height",Wo="Right",Xo="Left",qo="Top",Yo="Bottom",Ke="padding",oi="margin",Ws="Width",Vh="Height",tn="px",ai=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},OM=function(t){var e=ai(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ip=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Wi=function(t,e){var n=e&&ai(t)[Dh]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},_l=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Up=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},BM=function(t){return function(e){return St.utils.snap(Up(t),e)}},Wh=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},zM=function(t){return function(e,n){return Wh(Up(t))(e,n.direction)}},vl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},sn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},on=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},xl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Np={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yl={toggleActions:"play",anticipatePin:0},Ml={top:0,left:0,center:.5,bottom:1,right:1},Sl=function(t,e){if(Kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ml?Ml[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Tl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,m=xe.createElement("div"),_=Wr(n)||mr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,v=y?c:h,M="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(M+=(i===Qe?Gh:Hh)+":"+(o+parseFloat(u))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=M,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],El(m,0,i,y),m},El=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ws]=1,s["border"+a+Ws]=0,s[n.p]=e+"px",St.set(t,s)},ee=[],Xh={},$o,Fp=function(){return _n()-si>34&&($o||($o=requestAnimationFrame(Xi)))},Xs=function(){(!An||!An.isPressed||An.startX>_e.clientWidth)&&(re.cache++,An?$o||($o=requestAnimationFrame(Xi)):Xi(),si||Kr("scrollStart"),si=_n())},qh=function(){Sp=se.innerWidth,Mp=se.innerHeight},Ko=function(t){re.cache++,(t===!0||!gn&&!yp&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!Uh||Sp!==se.innerWidth||Math.abs(se.innerHeight-Mp)>se.innerHeight*.25))&&fl.restart(!0)},$r={},kM=[],Op=function r(){return on(Xt,"scrollEnd",r)||Jr(!0)},Kr=function(t){return $r[t]&&$r[t].map(function(e){return e()})||kM},Zn=[],Bp=function(t){for(var e=0;e<Zn.length;e+=5)(!t||Zn[e+4]&&Zn[e+4].query===t)&&(Zn[e].style.cssText=Zn[e+1],Zn[e].getBBox&&Zn[e].setAttribute("transform",Zn[e+2]||""),Zn[e+3].uncache=1)},zp=function(){return re.forEach(function(t){return vn(t)&&++t.cacheID&&(t.rec=t())})},Yh=function(t,e){var n;for(wn=0;wn<ee.length;wn++)n=ee[wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));zo=!0,e&&Bp(e),e||Kr("revert")},kp=function(t,e){re.cache++,(e||!Cn)&&re.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),Kn(t)&&(se.history.scrollRestoration=Fh=t)},Cn,Zr=0,Gp,GM=function(){if(Gp!==Zr){var t=Gp=Zr;requestAnimationFrame(function(){return t===Zr&&Jr(!0)})}},Hp=function(){_e.appendChild(Gs),Oh=!An&&Gs.offsetHeight||se.innerHeight,_e.removeChild(Gs)},Vp=function(t){return Fo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Jr=function(t,e){if($n=xe.documentElement,_e=xe.body,Lh=[se,xe,$n,_e],si&&!t&&!zo){sn(Xt,"scrollEnd",Op);return}Hp(),Cn=Xt.isRefreshing=!0,zo||zp();var n=Kr("refreshInit");xp&&Xt.sort(),e||Yh(),re.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),zo=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Bh=1,Vp(!0),ee.forEach(function(i){var s=Li(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Vp(!1),Bh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),kp(Fh,1),fl.pause(),Zr++,Cn=2,Xi(2),ee.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=Xt.isRefreshing=!1,Kr("refresh")},$h=0,bl=1,Zo,Xi=function(t){if(t===2||!Cn&&!zo){Xt.isUpdating=!0,Zo&&Zo.update(0);var e=ee.length,n=_n(),i=n-kh>=50,s=e&&ee[0].scroll();if(bl=$h>s?-1:1,Cn||($h=s),i&&(si&&!pl&&n-si>200&&(si=0,Kr("scrollEnd")),Bo=kh,kh=n),bl<0){for(wn=e;wn-- >0;)ee[wn]&&ee[wn].update(0,i);bl=1}else for(wn=0;wn<e;wn++)ee[wn]&&ee[wn].update(0,i);Xt.isUpdating=!1}$o=0},Kh=[Lp,Dp,Hh,Gh,oi+Yo,oi+Wo,oi+qo,oi+Xo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wl=Kh.concat([qr,Yr,"boxSizing","max"+Ws,"max"+Vh,"position",oi,Ke,Ke+qo,Ke+Wo,Ke+Yo,Ke+Xo]),HM=function(t,e,n){qs(n);var i=t._gsap;if(i.spacerIsNative)qs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Zh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Kh.length,o=e.style,a=t.style,l;s--;)l=Kh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Hh]=a[Gh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[qr]=_l(t,bn)+tn,o[Yr]=_l(t,Qe)+tn,o[Ke]=a[oi]=a[Dp]=a[Lp]="0",qs(i),a[qr]=a["max"+Ws]=n[qr],a[Yr]=a["max"+Vh]=n[Yr],a[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},VM=/([A-Z])/g,qs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(VM,"-$1").toLowerCase())}},Al=function(t){for(var e=wl.length,n=t.style,i=[],s=0;s<e;s++)i.push(wl[s],n[wl[s]]);return i.t=t,i},WM=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Cl={left:0,top:0},Wp=function(t,e,n,i,s,o,a,l,c,h,f,u,d,m){vn(t)&&(t=t(l)),Kn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Sl("0"+t.substr(3),n):0));var _=d?d.time():0,p,g,y;if(d&&d.seek(0),isNaN(t)||(t=+t),Ho(t))d&&(t=St.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&El(a,n,i,!0);else{vn(e)&&(e=e(l));var v=(t||"0").split(" "),M,A,b,S;y=Fn(e,l)||_e,M=Wi(y)||{},(!M||!M.left&&!M.top)&&ai(y).display==="none"&&(S=y.style.display,y.style.display="block",M=Wi(y),S?y.style.display=S:y.style.removeProperty("display")),A=Sl(v[0],M[i.d]),b=Sl(v[1]||"0",n),t=M[i.p]-c[i.p]-h+A+s-b,a&&El(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var C=t+n,P=o._isStart;p="scroll"+i.d2,El(o,C,i,P&&C>20||!P&&(f?Math.max(_e[p],$n[p]):o.parentNode[p])<=C+1),f&&(c=Wi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+tn))}return d&&y&&(p=Wi(y),d.seek(u),g=Wi(y),d._caScrollDist=p[i.p]-g[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},XM=/(webkit|moz|length|cssText|inset)/i,Xp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=ai(t);for(o in a)!+o&&!XM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},qp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Rl=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},Yp=function(t,e){var n=gr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,m={};c=c||n();var _=qp(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Xi()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=St.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(t,"wheel",n.wheelHandler),Xt.isTouch&&sn(t,"touchmove",n.wheelHandler),s},Xt=function(){function r(e,n){zs||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ko){this.update=this.refresh=this.kill=Pi;return}n=Ip(Kn(n)||Ho(n)||n.nodeType?{trigger:n}:n,yl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,v=s.once,M=s.snap,A=s.pinReparent,b=s.pinSpacer,S=s.containerAnimation,C=s.fastScrollEnd,P=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:Qe,E=!f&&f!==0,U=Fn(n.scroller||se),B=St.core.getCache(U),G=Wr(U),q=("pinType"in n?n.pinType:mr(U,"pinType")||G&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=E&&n.toggleActions.split(" "),V="markers"in n?n.markers:yl.markers,it=G?0:parseFloat(ai(U)["border"+x.p2+Ws])||0,L=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Bt=NM(U,G,x),Ft=FM(U,G),Y=0,Q=0,ht=0,lt=gr(U,x),bt,Tt,Lt,Kt,Ht,I,ce,Vt,qt,k,ne,Ut,R,T,X,J,nt,Z,Et,ot,pt,$t,rt,xt,yt,zt,vt,Zt,Wt,he,N,et,K,j,ct,ut,Jt,we,Ue;if(L._startClamp=L._endClamp=!1,L._dir=x,p*=45,L.scroller=U,L.scroll=S?S.time.bind(S):lt,Kt=lt(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(xp=1,n.refreshPriority===-9999&&(Zo=L)),B.tweenScroll=B.tweenScroll||{top:Yp(U,Qe),left:Yp(U,bn)},L.tweenTo=bt=B.tweenScroll[x.p],L.scrubDuration=function(mt){K=Ho(mt)&&mt,K?et?et.duration(mt):et=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return g&&g(L)}}):(et&&et.progress(1).kill(),et=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),he=0,l||(l=i.vars.id)),M&&((!Xr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in _e.style&&St.set(G?[_e,$n]:U,{scrollBehavior:"auto"}),re.forEach(function(mt){return vn(mt)&&mt.target===(G?xe.scrollingElement||$n:U)&&(mt.smooth=!1)}),Lt=vn(M.snapTo)?M.snapTo:M.snapTo==="labels"?BM(i):M.snapTo==="labelsDirectional"?zM(i):M.directional!==!1?function(mt,Ot){return Wh(M.snapTo)(mt,_n()-Q<500?0:Ot.direction)}:St.utils.snap(M.snapTo),j=M.duration||{min:.1,max:2},j=Xr(j)?Oo(j.min,j.max):Oo(j,j),ct=St.delayedCall(M.delay||K/2||.1,function(){var mt=lt(),Ot=_n()-Q<500,Dt=bt.tween;if((Ot||Math.abs(L.getVelocity())<10)&&!Dt&&!pl&&Y!==mt){var Yt=(mt-I)/T,Ve=i&&!E?i.totalProgress():Yt,te=Ot?0:(Ve-N)/(_n()-Bo)*1e3||0,Ne=St.utils.clamp(-Yt,1-Yt,Vs(te/2)*te/.185),We=Yt+(M.inertia===!1?0:Ne),Le,Ae,ye=M,jn=ye.onStart,De=ye.onInterrupt,w=ye.onComplete;if(Le=Lt(We,L),Ho(Le)||(Le=We),Ae=Math.max(0,Math.round(I+Le*T)),mt<=ce&&mt>=I&&Ae!==mt){if(Dt&&!Dt._initted&&Dt.data<=Vs(Ae-mt))return;M.inertia===!1&&(Ne=Le-Yt),bt(Ae,{duration:j(Vs(Math.max(Vs(We-Ve),Vs(Le-Ve))*.185/te/.05||0)),ease:M.ease||"power3",data:Vs(Ae-mt),onInterrupt:function(){return ct.restart(!0)&&De&&Hs(L,De)},onComplete:function(){L.update(),Y=lt(),i&&!E&&(et?et.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),he=N=i&&!E?i.totalProgress():L.progress,y&&y(L),w&&Hs(L,w)}},mt,Ne*T,Ae-mt-Ne*T),jn&&Hs(L,jn,bt.tween)}}else L.isActive&&Y!==mt&&ct.restart(!0)}).pause()),l&&(Xh[l]=L),u=L.trigger=Fn(u||d!==!0&&d),Ue=u&&u._gsap&&u._gsap.stRevert,Ue&&(Ue=Ue(L)),d=d===!0?u:Fn(d),Kn(a)&&(a={targets:u,className:a}),d&&(m===!1||m===oi||(m=!m&&d.parentNode&&d.parentNode.style&&ai(d.parentNode).display==="flex"?!1:Ke),L.pin=d,Tt=St.core.getCache(d),Tt.spacer?X=Tt.pinState:(b&&(b=Fn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Tt.spacerIsNative=!!b,b&&(Tt.spacerState=Al(b))),Tt.spacer=Z=b||xe.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Tt.pinState=X=Al(d)),n.force3D!==!1&&St.set(d,{force3D:!0}),L.spacer=Z=Tt.spacer,Wt=ai(d),xt=Wt[m+x.os2],ot=St.getProperty(d),pt=St.quickSetter(d,x.a,tn),Zh(d,Z,Wt),nt=Al(d)),V){Ut=Xr(V)?Ip(V,Np):Np,k=Tl("scroller-start",l,U,x,Ut,0),ne=Tl("scroller-end",l,U,x,Ut,0,k),Et=k["offset"+x.op.d2];var oe=Fn(mr(U,"content")||U);Vt=this.markerStart=Tl("start",l,oe,x,Ut,Et,0,S),qt=this.markerEnd=Tl("end",l,oe,x,Ut,Et,0,S),S&&(we=St.quickSetter([Vt,qt],x.a,tn)),!q&&!(Ri.length&&mr(U,"fixedMarkers")===!0)&&(OM(G?_e:U),St.set([k,ne],{force3D:!0}),zt=St.quickSetter(k,x.a,tn),Zt=St.quickSetter(ne,x.a,tn))}if(S){var Pt=S.vars.onUpdate,At=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){L.update(0,0,1),Pt&&Pt.apply(S,At||[])})}if(L.previous=function(){return ee[ee.indexOf(L)-1]},L.next=function(){return ee[ee.indexOf(L)+1]},L.revert=function(mt,Ot){if(!Ot)return L.kill(!0);var Dt=mt!==!1||!L.enabled,Yt=gn;Dt!==L.isReverted&&(Dt&&(ut=Math.max(lt(),L.scroll.rec||0),ht=L.progress,Jt=i&&i.progress()),Vt&&[Vt,qt,k,ne].forEach(function(Ve){return Ve.style.display=Dt?"none":"block"}),Dt&&(gn=L,L.update(Dt)),d&&(!A||!L.isActive)&&(Dt?HM(d,Z,X):Zh(d,Z,ai(d),yt)),Dt||L.update(Dt),gn=Yt,L.isReverted=Dt)},L.refresh=function(mt,Ot,Dt,Yt){if(!((gn||!L.enabled)&&!Ot)){if(d&&mt&&si){sn(r,"scrollEnd",Op);return}!Cn&&st&&st(L),gn=L,bt.tween&&!Dt&&(bt.tween.kill(),bt.tween=0),et&&et.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ie){return ie.vars.immediateRender&&ie.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ve=Bt(),te=Ft(),Ne=S?S.duration():Li(U,x),We=T<=.01||!T,Le=0,Ae=Yt||0,ye=Xr(Dt)?Dt.end:n.end,jn=n.endTrigger||u,De=Xr(Dt)?Dt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),w=L.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,L),O=u&&Math.max(0,ee.indexOf(L))||0,H=O,W,F,at,_t,dt,ft,Rt,kt,Ct,ue,ae,Te,an;for(V&&Xr(Dt)&&(Te=St.getProperty(k,x.p),an=St.getProperty(ne,x.p));H-- >0;)ft=ee[H],ft.end||ft.refresh(0,1)||(gn=L),Rt=ft.pin,Rt&&(Rt===u||Rt===d||Rt===w)&&!ft.isReverted&&(ue||(ue=[]),ue.unshift(ft),ft.revert(!0,!0)),ft!==ee[H]&&(O--,H--);for(vn(De)&&(De=De(L)),De=Tp(De,"start",L),I=Wp(De,u,Ve,x,lt(),Vt,k,L,te,it,q,Ne,S,L._startClamp&&"_startClamp")||(d?-.001:0),vn(ye)&&(ye=ye(L)),Kn(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(Kn(De)?De.split(" ")[0]:"")+ye:(Le=Sl(ye.substr(2),Ve),ye=Kn(De)?De:(S?St.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,I):I)+Le,jn=u)),ye=Tp(ye,"end",L),ce=Math.max(I,Wp(ye||(jn?"100% 0":Ne),jn,Ve,x,lt()+Le,qt,ne,L,te,it,q,Ne,S,L._endClamp&&"_endClamp"))||-.001,Le=0,H=O;H--;)ft=ee[H]||{},Rt=ft.pin,Rt&&ft.start-ft._pinPush<=I&&!S&&ft.end>0&&(W=ft.end-(L._startClamp?Math.max(0,ft.start):ft.start),(Rt===u&&ft.start-ft._pinPush<I||Rt===w)&&isNaN(De)&&(Le+=W*(1-ft.progress)),Rt===d&&(Ae+=W));if(I+=Le,ce+=Le,L._startClamp&&(L._startClamp+=Le),L._endClamp&&!Cn&&(L._endClamp=ce||-.001,ce=Math.min(ce,Li(U,x))),T=ce-I||(I-=.01)&&.001,We&&(ht=St.utils.clamp(0,1,St.utils.normalize(I,ce,ut))),L._pinPush=Ae,Vt&&Le&&(W={},W[x.a]="+="+Le,w&&(W[x.p]="-="+lt()),St.set([Vt,qt],W)),d&&!(Bh&&L.end>=Li(U,x)))W=ai(d),_t=x===Qe,at=lt(),$t=parseFloat(ot(x.a))+Ae,!Ne&&ce>1&&(ae=(G?xe.scrollingElement||$n:U).style,ae={style:ae,value:ae["overflow"+x.a.toUpperCase()]},G&&ai(_e)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+x.a.toUpperCase()]="scroll")),Zh(d,Z,W),nt=Al(d),F=Wi(d,!0),kt=q&&gr(U,_t?bn:Qe)(),m?(yt=[m+x.os2,T+Ae+tn],yt.t=Z,H=m===Ke?_l(d,x)+T+Ae:0,H&&(yt.push(x.d,H+tn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+tn)),qs(yt),w&&ee.forEach(function(ie){ie.pin===w&&ie.vars.pinSpacing!==!1&&(ie._subPinOffset=!0)}),q&&lt(ut)):(H=_l(d,x),H&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+tn)),q&&(dt={top:F.top+(_t?at-I:kt)+tn,left:F.left+(_t?kt:at-I)+tn,boxSizing:"border-box",position:"fixed"},dt[qr]=dt["max"+Ws]=Math.ceil(F.width)+tn,dt[Yr]=dt["max"+Vh]=Math.ceil(F.height)+tn,dt[oi]=dt[oi+qo]=dt[oi+Wo]=dt[oi+Yo]=dt[oi+Xo]="0",dt[Ke]=W[Ke],dt[Ke+qo]=W[Ke+qo],dt[Ke+Wo]=W[Ke+Wo],dt[Ke+Yo]=W[Ke+Yo],dt[Ke+Xo]=W[Ke+Xo],J=WM(X,dt,A),Cn&&lt(0)),i?(Ct=i._initted,Ih(1),i.render(i.duration(),!0,!0),rt=ot(x.a)-$t+T+Ae,vt=Math.abs(T-rt)>1,q&&vt&&J.splice(J.length-2,2),i.render(0,!0,!0),Ct||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ih(0)):rt=T,ae&&(ae.value?ae.style["overflow"+x.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+x.a));else if(u&&lt()&&!S)for(F=u.parentNode;F&&F!==_e;)F._pinOffset&&(I-=F._pinOffset,ce-=F._pinOffset),F=F.parentNode;ue&&ue.forEach(function(ie){return ie.revert(!1,!0)}),L.start=I,L.end=ce,Kt=Ht=Cn?ut:lt(),!S&&!Cn&&(Kt<ut&&lt(ut),L.scroll.rec=0),L.revert(!1,!0),Q=_n(),ct&&(Y=-1,ct.restart(!0)),gn=0,i&&E&&(i._initted||Jt)&&i.progress()!==Jt&&i.progress(Jt||0,!0).render(i.time(),!0,!0),(We||ht!==L.progress||S||_||i&&!i._initted)&&(i&&!E&&(i._initted||ht||i.vars.immediateRender!==!1)&&i.totalProgress(S&&I<-.001&&!ht?St.utils.normalize(I,ce,0):ht,!0),L.progress=We||(Kt-I)/T===ht?0:ht),d&&m&&(Z._pinOffset=Math.round(L.progress*rt)),et&&et.invalidate(),isNaN(Te)||(Te-=St.getProperty(k,x.p),an-=St.getProperty(ne,x.p),Rl(k,x,Te),Rl(Vt,x,Te-(Yt||0)),Rl(ne,x,an),Rl(qt,x,an-(Yt||0))),We&&!Cn&&L.update(),h&&!Cn&&!R&&(R=!0,h(L),R=!1)}},L.getVelocity=function(){return(lt()-Ht)/(_n()-Bo)*1e3||0},L.endAnimation=function(){Vo(L.callbackAnimation),i&&(et?et.progress(1):i.paused()?E||Vo(i,L.direction<0,1):Vo(i,i.reversed()))},L.labelToScroll=function(mt){return i&&i.labels&&(I||L.refresh()||I)+i.labels[mt]/i.duration()*T||0},L.getTrailing=function(mt){var Ot=ee.indexOf(L),Dt=L.direction>0?ee.slice(0,Ot).reverse():ee.slice(Ot+1);return(Kn(mt)?Dt.filter(function(Yt){return Yt.vars.preventOverlaps===mt}):Dt).filter(function(Yt){return L.direction>0?Yt.end<=I:Yt.start>=ce})},L.update=function(mt,Ot,Dt){if(!(S&&!Dt&&!mt)){var Yt=Cn===!0?ut:L.scroll(),Ve=mt?0:(Yt-I)/T,te=Ve<0?0:Ve>1?1:Ve||0,Ne=L.progress,We,Le,Ae,ye,jn,De,w,O;if(Ot&&(Ht=Kt,Kt=S?lt():Yt,M&&(N=he,he=i&&!E?i.totalProgress():te)),p&&d&&!gn&&!ml&&si&&(!te&&I<Yt+(Yt-Ht)/(_n()-Bo)*p?te=1e-4:te===1&&ce>Yt+(Yt-Ht)/(_n()-Bo)*p&&(te=.9999)),te!==Ne&&L.enabled){if(We=L.isActive=!!te&&te<1,Le=!!Ne&&Ne<1,De=We!==Le,jn=De||!!te!=!!Ne,L.direction=te>Ne?1:-1,L.progress=te,jn&&!gn&&(Ae=te&&!Ne?0:te===1?1:Ne===1?2:3,E&&(ye=!De&&$[Ae+1]!=="none"&&$[Ae+1]||$[Ae],O=i&&(ye==="complete"||ye==="reset"||ye in i))),P&&(De||O)&&(O||f||!i)&&(vn(P)?P(L):L.getTrailing(P).forEach(function(at){return at.endAnimation()})),E||(et&&!gn&&!ml?(et._dp._time-et._start!==et._time&&et.render(et._dp._time-et._start),et.resetTo?et.resetTo("totalProgress",te,i._tTime/i._tDur):(et.vars.totalProgress=te,et.invalidate().restart())):i&&i.totalProgress(te,!!(gn&&(Q||mt)))),d){if(mt&&m&&(Z.style[m+x.os2]=xt),!q)pt(Go($t+rt*te));else if(jn){if(w=!mt&&te>Ne&&ce+1>Yt&&Yt+1>=Li(U,x),A)if(!mt&&(We||w)){var H=Wi(d,!0),W=Yt-I;Xp(d,_e,H.top+(x===Qe?W:0)+tn,H.left+(x===Qe?0:W)+tn)}else Xp(d,Z);qs(We||w?J:nt),vt&&te<1&&We||pt($t+(te===1&&!w?rt:0))}}M&&!bt.tween&&!gn&&!ml&&ct.restart(!0),a&&(De||v&&te&&(te<1||!zh))&&Fo(a.targets).forEach(function(at){return at.classList[We||v?"add":"remove"](a.className)}),o&&!E&&!mt&&o(L),jn&&!gn?(E&&(O&&(ye==="complete"?i.pause().totalProgress(1):ye==="reset"?i.restart(!0).pause():ye==="restart"?i.restart(!0):i[ye]()),o&&o(L)),(De||!zh)&&(c&&De&&Hs(L,c),z[Ae]&&Hs(L,z[Ae]),v&&(te===1?L.kill(!1,1):z[Ae]=0),De||(Ae=te===1?1:3,z[Ae]&&Hs(L,z[Ae]))),C&&!We&&Math.abs(L.getVelocity())>(Ho(C)?C:2500)&&(Vo(L.callbackAnimation),et?et.progress(1):Vo(i,ye==="reverse"?1:!te,1))):E&&o&&!gn&&o(L)}if(Zt){var F=S?Yt/S.duration()*(S._caScrollDist||0):Yt;zt(F+(k._isFlipped?1:0)),Zt(F)}we&&we(-Yt/S.duration()*(S._caScrollDist||0))}},L.enable=function(mt,Ot){L.enabled||(L.enabled=!0,sn(U,"resize",Ko),G||sn(U,"scroll",Xs),st&&sn(r,"refreshInit",st),mt!==!1&&(L.progress=ht=0,Kt=Ht=Y=lt()),Ot!==!1&&L.refresh())},L.getTween=function(mt){return mt&&bt?bt.tween:et},L.setPositions=function(mt,Ot,Dt,Yt){if(S){var Ve=S.scrollTrigger,te=S.duration(),Ne=Ve.end-Ve.start;mt=Ve.start+Ne*mt/te,Ot=Ve.start+Ne*Ot/te}L.refresh(!1,!1,{start:Ep(mt,Dt&&!!L._startClamp),end:Ep(Ot,Dt&&!!L._endClamp)},Yt),L.update()},L.adjustPinSpacing=function(mt){if(yt&&mt){var Ot=yt.indexOf(x.d)+1;yt[Ot]=parseFloat(yt[Ot])+mt+tn,yt[1]=parseFloat(yt[1])+mt+tn,qs(yt)}},L.disable=function(mt,Ot){if(mt!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Ot||et&&et.pause(),ut=0,Tt&&(Tt.uncache=1),st&&on(r,"refreshInit",st),ct&&(ct.pause(),bt.tween&&bt.tween.kill()&&(bt.tween=0)),!G)){for(var Dt=ee.length;Dt--;)if(ee[Dt].scroller===U&&ee[Dt]!==L)return;on(U,"resize",Ko),G||on(U,"scroll",Xs)}},L.kill=function(mt,Ot){L.disable(mt,Ot),et&&!Ot&&et.kill(),l&&delete Xh[l];var Dt=ee.indexOf(L);Dt>=0&&ee.splice(Dt,1),Dt===wn&&bl>0&&wn--,Dt=0,ee.forEach(function(Yt){return Yt.scroller===L.scroller&&(Dt=1)}),Dt||Cn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Ot||i.kill()),Vt&&[Vt,qt,k,ne].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),Zo===L&&(Zo=0),d&&(Tt&&(Tt.uncache=1),Dt=0,ee.forEach(function(Yt){return Yt.pin===d&&Dt++}),Dt||(Tt.spacer=0)),n.onKill&&n.onKill(L)},ee.push(L),L.enable(!1,!1),Ue&&Ue(L),i&&i.add&&!T){var de=L.update;L.update=function(){L.update=de,re.cache++,I||ce||L.refresh()},St.delayedCall(.01,L.update),T=.01,I=ce=0}else L.refresh();d&&GM()},r.register=function(n){return zs||(St=n||Cp(),Ap()&&window.document&&r.enable(),zs=ko),zs},r.defaults=function(n){if(n)for(var i in n)yl[i]=n[i];return yl},r.disable=function(n,i){ko=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),on(se,"wheel",Xs),on(xe,"scroll",Xs),clearInterval(dl),on(xe,"touchcancel",Pi),on(_e,"touchstart",Pi),vl(on,xe,"pointerdown,touchstart,mousedown",bp),vl(on,xe,"pointerup,touchend,mouseup",wp),fl.kill(),gl(on);for(var s=0;s<re.length;s+=3)xl(on,re[s],re[s+1]),xl(on,re[s],re[s+2])},r.enable=function(){if(se=window,xe=document,$n=xe.documentElement,_e=xe.body,St){if(Fo=St.utils.toArray,Oo=St.utils.clamp,Nh=St.core.context||Pi,Ih=St.core.suppressOverwrites||Pi,Fh=se.history.scrollRestoration||"auto",$h=se.pageYOffset||0,St.core.globals("ScrollTrigger",r),_e){ko=1,Gs=document.createElement("div"),Gs.style.height="100vh",Gs.style.position="absolute",Hp(),UM(),He.register(St),r.isTouch=He.isTouch,_r=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Uh=He.isTouch===1,sn(se,"wheel",Xs),Lh=[se,xe,$n,_e],St.matchMedia?(r.matchMedia=function(h){var f=St.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},St.addEventListener("matchMediaInit",function(){zp(),Yh()}),St.addEventListener("matchMediaRevert",function(){return Bp()}),St.addEventListener("matchMedia",function(){Jr(0,1),Kr("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return qh(),qh})):console.warn("Requires GSAP 3.11.0 or later"),qh(),sn(xe,"scroll",Xs);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=St.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Wi(_e),Qe.m=Math.round(a.top+Qe.sc())||0,bn.m=Math.round(a.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),dl=setInterval(Fp,250),St.delayedCall(.5,function(){return ml=0}),sn(xe,"touchcancel",Pi),sn(_e,"touchstart",Pi),vl(sn,xe,"pointerdown,touchstart,mousedown",bp),vl(sn,xe,"pointerup,touchend,mouseup",wp),Dh=St.utils.checkPrefix("transform"),wl.push(Dh),zs=_n(),fl=St.delayedCall(.2,Jr).pause(),ks=[xe,"visibilitychange",function(){var h=se.innerWidth,f=se.innerHeight;xe.hidden?(_p=h,vp=f):(_p!==h||vp!==f)&&Ko()},xe,"DOMContentLoaded",Jr,se,"load",Jr,se,"resize",Ko],gl(sn),ee.forEach(function(h){return h.enable(0,1)}),l=0;l<re.length;l+=3)xl(on,re[l],re[l+1]),xl(on,re[l],re[l+2])}else if(xe){var c=function h(){r.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(zh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(dl)||(dl=i)&&setInterval(Fp,i),"ignoreMobileResize"in n&&(Uh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gl(on)||gl(sn,n.autoRefreshEvents||"none"),yp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),o=re.indexOf(s),a=Wr(s);~o&&re.splice(o,a?6:2),i&&(a?Ri.unshift(se,i,_e,i,$n,i):Ri.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Kn(n)?Fn(n):n).getBoundingClientRect(),a=o[s?qr:Yr]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){Kn(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?qr:Yr],l=i==null?a/2:i in Ml?Ml[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=$r.killAll||[];$r={},i.forEach(function(s){return s()})}},r}();Xt.version="3.15.0",Xt.saveStyles=function(r){return r?Fo(r).forEach(function(t){if(t&&t.style){var e=Zn.indexOf(t);e>=0&&Zn.splice(e,5),Zn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Nh())}}):Zn},Xt.revert=function(r,t){return Yh(!r,t)},Xt.create=function(r,t){return new Xt(r,t)},Xt.refresh=function(r){return r?Ko(!0):(zs||Xt.register())&&Jr(!0)},Xt.update=function(r){return++re.cache&&Xi(r===!0?2:0)},Xt.clearScrollMemory=kp,Xt.maxScroll=function(r,t){return Li(r,t?bn:Qe)},Xt.getScrollFunc=function(r,t){return gr(Fn(r),t?bn:Qe)},Xt.getById=function(r){return Xh[r]},Xt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})},Xt.isScrolling=function(){return!!si},Xt.snapDirectional=Wh,Xt.addEventListener=function(r,t){var e=$r[r]||($r[r]=[]);~e.indexOf(t)||e.push(t)},Xt.removeEventListener=function(r,t){var e=$r[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)},Xt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=St.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(m){f.length||d.restart(!0),f.push(m.trigger),u.push(m),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&vn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return vn(s)&&(s=s(),sn(Xt,"refresh",function(){return s=t.batchMax()})),Fo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Xt.create(c))}),e};var $p=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Jh=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===$n&&r(_e,e)},Pl={auto:1,scroll:1},qM=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=_n(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Pl[(l=ai(s)).overflowY]||Pl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Wr(s)&&(Pl[(l=ai(s)).overflowY]||Pl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Kp=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&qM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(xe,He.eventTypes[0],Jp,!1,!0)},onDisable:function(){return on(xe,He.eventTypes[0],Jp,!0)}})},YM=/(input|label|select|textarea)/i,Zp,Jp=function(t){var e=YM.test(t.target.tagName);(e||Zp)&&(t._gsapAllow=!0,Zp=e)},$M=function(t){Xr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Fn(t.target)||$n,h=St.core.globals().ScrollSmoother,f=h&&h.get(),u=_r&&(t.content&&Fn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=gr(c,Qe),m=gr(c,bn),_=1,p=(He.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,g=0,y=vn(i)?function(){return i(a)}:function(){return i||2.8},v,M,A=Kp(c,t.type,!0,s),b=function(){return M=!1},S=Pi,C=Pi,P=function(){l=Li(c,Qe),C=Oo(_r?1:0,l),n&&(S=Oo(0,Li(c,bn))),v=Zr},x=function(){u._gsap.y=Go(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},E=function(){if(M){requestAnimationFrame(b);var V=Go(a.deltaY/2),it=C(d.v-V);if(u&&it!==d.v+d.offset){d.offset=it-d.v;var L=Go((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",u._gsap.y=L+"px",d.cacheID=re.cache,Xi()}return!0}d.offset&&x(),M=!0},U,B,G,q,z=function(){P(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return u&&St.set(u,{y:"+=0"}),t.ignoreCheck=function($){return _r&&$.type==="touchmove"&&E()||_>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){M=!1;var $=_;_=Go((se.visualViewport&&se.visualViewport.scale||1)/p),U.pause(),$!==_&&Jh(c,_>1.01?!0:n?!1:"x"),B=m(),G=d(),P(),v=Zr},t.onRelease=t.onGestureStart=function($,V){if(d.offset&&x(),!V)q.restart(!0);else{re.cache++;var it=y(),L,st;n&&(L=m(),st=L+it*.05*-$.velocityX/.227,it*=$p(m,L,st,Li(c,bn)),U.vars.scrollX=S(st)),L=d(),st=L+it*.05*-$.velocityY/.227,it*=$p(d,L,st,Li(c,Qe)),U.vars.scrollY=C(st),U.invalidate().duration(it).play(.01),(_r&&U.vars.scrollY>=l||L>=l-1)&&St.to({},{onUpdate:z,duration:it})}o&&o($)},t.onWheel=function(){U._ts&&U.pause(),_n()-g>1e3&&(v=0,g=_n())},t.onChange=function($,V,it,L,st){if(Zr!==v&&P(),V&&n&&m(S(L[2]===V?B+($.startX-$.x):m()+V-L[1])),it){d.offset&&x();var Bt=st[2]===it,Ft=Bt?G+$.startY-$.y:d()+it-st[1],Y=C(Ft);Bt&&Ft!==Y&&(G+=Y-Ft),d(Y)}(it||V)&&Xi()},t.onEnable=function(){Jh(c,n?!1:"x"),Xt.addEventListener("refresh",z),sn(se,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),A.enable()},t.onDisable=function(){Jh(c,!0),on(se,"resize",z),Xt.removeEventListener("refresh",z),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=_r,_r&&!d()&&d(1),_r&&St.ticker.add(Pi),q=a._dc,U=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qp(d,d(),function(){return U.pause()})},onUpdate:Xi,onComplete:q.vars.onComplete}),a};Xt.sort=function(r){if(vn(r))return ee.sort(r);var t=se.pageYOffset||0;return Xt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),ee.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})},Xt.observe=function(r){return new He(r)},Xt.normalizeScroll=function(r){if(typeof r>"u")return An;if(r===!0&&An)return An.enable();if(r===!1){An&&An.kill(),An=r;return}var t=r instanceof He?r:$M(r);return An&&An.target===t.target&&An.kill(),Wr(t.target)&&(An=t),t},Xt.core={_getVelocityProp:Ph,_inputObserver:Kp,_scrollers:re,_proxies:Ri,bridge:{ss:function(){si||Kr("scrollStart"),si=_n()},ref:function(){return gn}}},Cp()&&St.registerPlugin(Xt);var jp="1.3.27";function Qp(r,t,e){return Math.max(r,Math.min(t,e))}function KM(r,t,e){return(1-e)*r+e*t}function ZM(r,t,e,n){return KM(r,t,1-Math.exp(-e*n))}function JM(r,t){return(r%t+t)%t}var jM=class{constructor(){wt(this,"isRunning",!1);wt(this,"value",0);wt(this,"from",0);wt(this,"to",0);wt(this,"currentTime",0);wt(this,"lerp");wt(this,"duration");wt(this,"easing");wt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const e=Qp(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ZM(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function QM(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var tS=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){wt(this,"width",0);wt(this,"height",0);wt(this,"scrollHeight",0);wt(this,"scrollWidth",0);wt(this,"debouncedResize");wt(this,"wrapperResizeObserver");wt(this,"contentResizeObserver");wt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});wt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});wt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=QM(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},tm=class{constructor(){wt(this,"events",{})}emit(r,...t){const e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}};const eS=100/6,vr={passive:!1};function em(r,t){return r===1?eS:r===2?t:1}var nS=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){wt(this,"touchStart",{x:0,y:0});wt(this,"lastDelta",{x:0,y:0});wt(this,"window",{width:0,height:0});wt(this,"emitter",new tm);wt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});wt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});wt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});wt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=em(n,this.window.width),s=em(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});wt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,vr),this.element.addEventListener("touchstart",this.onTouchStart,vr),this.element.addEventListener("touchmove",this.onTouchMove,vr),this.element.addEventListener("touchend",this.onTouchEnd,vr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,vr),this.element.removeEventListener("touchstart",this.onTouchStart,vr),this.element.removeEventListener("touchmove",this.onTouchMove,vr),this.element.removeEventListener("touchend",this.onTouchEnd,vr)}};const nm=r=>Math.min(1,1.001-2**(-10*r));var iS=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:y=!0,autoRaf:v=!1,anchors:M=!1,autoToggle:A=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:S=!1,naiveDimensions:C=S,stopInertiaOnNavigate:P=!1,respectReducedMotion:x=!0}={}){wt(this,"_isScrolling",!1);wt(this,"_isStopped",!1);wt(this,"_isLocked",!1);wt(this,"_preventNextNativeScrollEvent",!1);wt(this,"_resetVelocityTimeout",null);wt(this,"_rafId",null);wt(this,"_isDraggingSelection",!1);wt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));wt(this,"isTouching");wt(this,"isIos");wt(this,"time",0);wt(this,"userData",{});wt(this,"lastVelocity",0);wt(this,"velocity",0);wt(this,"direction",0);wt(this,"options");wt(this,"targetScroll");wt(this,"animatedScroll");wt(this,"animate",new jM);wt(this,"emitter",new tm);wt(this,"dimensions");wt(this,"virtualScroll");wt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});wt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});wt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});wt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});wt(this,"onPointerDown",r=>{r.button===1&&this.reset()});wt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});wt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});wt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=jp,window.lenis||(window.lenis={}),window.lenis.version=jp,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=nm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:y,autoRaf:v,anchors:M,autoToggle:A,allowNestedScroll:b,naiveDimensions:C,stopInertiaOnNavigate:P,respectReducedMotion:x},this.dimensions=new tS(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new nS(e,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?M.left:M.top}const _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(v)?0:v)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=Qp(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=nm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,h,f,u,d,m;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,m=r.clientHeight,a=f>d,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,g,y,v,M,A;if(_==="horizontal")p=Math.round(r.scrollLeft),g=f-d,y=t,v=s,M=a,A=c;else if(_==="vertical")p=Math.round(r.scrollTop),g=u-m,y=e,v=o,M=l,A=h;else return!1;return!A&&(p>=g||p<=0)?!0:(y>0?p<g:p>0)&&v&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?JM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};Gt.registerPlugin(Xt);let Ll=null;function rS(){const t=window.matchMedia(pe.BREAKPOINTS.mobile).matches?pe.LENIS.mobile:pe.LENIS.desktop;Ll=new iS({lerp:t.lerp,wheelMultiplier:t.wheelMultiplier??1,touchMultiplier:t.touchMultiplier??1,smoothWheel:!0,syncTouch:!1,autoRaf:!1}),Ll.on("scroll",Xt.update),Gt.ticker.add(n=>{Ll.raf(n*1e3),ny()}),Gt.ticker.lagSmoothing(0),Xt.normalizeScroll({allowNestedScroll:!0,type:"touch"}),sS();const e=Gt.matchMedia();e.add(pe.BREAKPOINTS.desktop,()=>im()),e.add(pe.BREAKPOINTS.tablet,()=>im()),e.add(pe.BREAKPOINTS.mobile,()=>oS()),aS(),document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",i=>{const s=document.querySelector(n.getAttribute("href"));s&&(i.preventDefault(),Ll.scrollTo(s,{duration:1.6,easing:o=>1-Math.pow(1-o,4)}))})}),window.addEventListener("load",()=>Xt.refresh())}function sS(){const r=tt.camera,t=pe.CAMERA,e=document.getElementById("depth-readout"),n={z:t.heroZ,fov:t.tunnelFov,fovMix:0,shake:0};Gt.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:'[data-section="hero"]',start:"top top",endTrigger:'[data-section="infrastructure"]',end:"top top",scrub:1.2,onUpdate:s=>{if(tt.progress=s.progress,tt.scrollVelocity=s.getVelocity(),e){const o=rm(0,428.5,s.progress);e.textContent=(o<.05?"+":"-")+o.toFixed(1).padStart(5,"0")}document.body.dataset.theme=s.progress>.2?"underground":"surface"}}}).to(n,{z:t.heroZ-1.2,duration:.15},0).to(n,{z:t.mouthZ,duration:.07,ease:"power2.in"},.15).to(n,{fovMix:1,duration:.07},.15).to(n,{shake:1,duration:.07},.15).to(n,{z:t.tunnelEndZ,duration:.53},.22).to(n,{shake:.35,duration:.53},.22).to(n,{z:t.tunnelEndZ-14,duration:.25,ease:"power2.out"},.75).to(n,{shake:0,fov:t.heroFovTall,duration:.25},.75),Xt.create({trigger:'[data-section="dive"]',start:"top 80%",onEnter:()=>{gi.tunnel.visible=!0,gi.grid.visible=!0},onLeaveBack:()=>{gi.tunnel.visible=!1,gi.grid.visible=!1}}),Xt.create({trigger:'[data-section="dive"]',start:"top top",end:"+=140%",pin:!0,pinSpacing:!0}),tt.updaters.add((s,o)=>{const l=tt.progress>.2;r.position.z=n.z;const c=tt.pointer.x,h=tt.pointer.y,f=l?.28:.9;r.position.x=c*f+Math.sin(o*1.3)*n.shake*.05,r.position.y=h*f*.6+Math.cos(o*1.7)*n.shake*.04;const u=l?n.z-6:-1;r.lookAt(c*.2,h*.2,u),r.rotation.z+=Math.sin(o*.9)*n.shake*.01,Yf(r),r.fov=rm(r.fov,n.fov,n.fovMix),r.updateProjectionMatrix()})}function im(){const r=document.querySelector("[data-horizontal]");if(!r)return;const t=()=>r.scrollWidth-window.innerWidth,e=Gt.to(r,{x:()=>-t(),ease:"none",scrollTrigger:{trigger:'[data-section="infrastructure"]',start:"top top",end:()=>"+="+t(),pin:!0,scrub:.8,invalidateOnRefresh:!0,anticipatePin:1}}),n=r.querySelectorAll(".infra-panel"),i=Gt.quickTo(n,"skewX",{duration:.5,ease:"power3"}),s=e.scrollTrigger,o=()=>i(Gt.utils.clamp(-10,10,s.getVelocity()/-300));return Gt.ticker.add(o),()=>{Gt.ticker.remove(o)}}function oS(){Gt.utils.toArray(".infra-panel").forEach(r=>{Gt.from(r,{y:60,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%"}})})}function aS(){document.querySelectorAll("[data-kinetic] .line").forEach(r=>{const t=r.textContent;r.textContent="",[...t].forEach(e=>{const n=document.createElement("span");n.className="char",n.textContent=e===" "?" ":e,r.appendChild(n)})}),document.querySelectorAll("[data-kinetic]").forEach(r=>{const t=r.querySelectorAll(".char");Gt.from(t,{yPercent:120,rotateX:-60,skewY:8,opacity:0,duration:1.1,ease:"expo.out",stagger:{each:.018,from:"start"},scrollTrigger:{trigger:r,start:"top 85%",once:!0}});const e=Gt.quickTo(t,"skewX",{duration:.35,ease:"power2"}),n=Gt.quickTo(t,"scaleY",{duration:.35,ease:"power2"});Xt.create({trigger:r,start:"top bottom",end:"bottom top",onUpdate:i=>{const s=Gt.utils.clamp(-1,1,i.getVelocity()/2500);e(s*-18),n(1+Math.abs(s)*.35)},onLeave:()=>{e(0),n(1)},onLeaveBack:()=>{e(0),n(1)}})})}function rm(r,t,e){return r+(t-r)*e}const vi=r=>document.querySelector(r);function lS(r){const t=vi("#loader"),e=vi(".loader-fill"),n=vi(".loader-pct");if(!t||!e||!n)return;const i={v:0},s=Gt.timeline().to(i,{v:86,duration:1.4,ease:"power2.out",onUpdate:()=>{e.style.width=i.v+"%",n.textContent=String(Math.round(i.v)).padStart(2,"0")}}),o=new Promise(a=>setTimeout(a,5e3));Promise.race([r,o]).then(()=>{s.to(i,{v:100,duration:.35,ease:"power3.in",onUpdate:()=>{e.style.width=i.v+"%",n.textContent="100"}}).to(t,{yPercent:-100,duration:1,ease:"expo.inOut"}).set(t,{display:"none"}).add(()=>window.dispatchEvent(new Event("scroll")),"-=0.6")})}function cS(){const r=vi("#cursor");if(!r||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const t=r.querySelector(".cursor-label"),e=r.querySelector(".cursor-ring"),n=Gt.quickTo(r,"x",{duration:.18,ease:"power3"}),i=Gt.quickTo(r,"y",{duration:.18,ease:"power3"});window.addEventListener("pointermove",o=>{n(o.clientX),i(o.clientY)},{passive:!0}),document.querySelectorAll("[data-cursor]").forEach(o=>{o.addEventListener("pointerenter",()=>{t.textContent=o.dataset.cursor,r.classList.add("cursor-active")}),o.addEventListener("pointerleave",()=>r.classList.remove("cursor-active"))}),new MutationObserver(()=>{const o=document.body.classList.contains("is-hovering-pipe");Gt.to(e,{scale:o?2.2:1,borderWidth:o?2:1,duration:.5,ease:"expo.out"}),t.textContent=o?"DIVE IN":t.textContent,r.classList.toggle("cursor-active",o||r.classList.contains("cursor-active"))}).observe(document.body,{attributes:!0,attributeFilter:["class"]})}const sm=[{max:20,name:"MUSHROOM KINGDOM OUTPOST",crew:2},{max:40,name:"ROYAL ESTATE",crew:6},{max:60,name:"SKY TOWER",crew:14},{max:80,name:"SUBTERRANEAN FORTRESS",crew:32},{max:101,name:"BOWSER'S CASTLE SCALE",crew:88}];function hS(){const r=vi("#quote-slider");if(!r)return;const t=vi("#quote-tier"),e=vi("#quote-value"),n=vi("#quote-threat"),i=vi("#quote-km"),s=vi("#quote-crew"),o={v:48e3},a=h=>Math.round(h).toLocaleString("en-US");let l=-1;const c=()=>{const h=Number(r.value)/100,f=48e3*Math.pow(1+h*9,2.4);Gt.to(o,{v:f,duration:.6,ease:"power3.out",overwrite:!0,onUpdate:()=>{e.textContent=a(o.v)}});const u=sm.findIndex(m=>r.value<m.max),d=sm[u];if(t.textContent=d.name,s.textContent=d.crew,i.textContent=(.4+h*41).toFixed(1),n.textContent=String(Math.round(h*99)).padStart(2,"0"),Gt.to(tt,{threat:h,duration:.8,ease:"power2.out",overwrite:"auto"}),Gt.to(document.documentElement,{"--crimson-hi":h>.6?"#ff2a3c":"#c8162a",duration:.6}),u!==l){const m=l===-1;l=u,m||(Qh(t,1+h*2),jh([12+h*30]))}};r.addEventListener("input",c,{passive:!0}),c()}function jh(r=[10]){if(navigator.vibrate)try{navigator.vibrate(r)}catch{}}function Qh(r,t=1){Gt.killTweensOf(r),Gt.fromTo(r,{x:0,y:0},{keyframes:[{x:3*t,y:-2*t,duration:.04},{x:-3*t,y:2*t,duration:.04},{x:2*t,y:1*t,duration:.04},{x:-1*t,y:-1*t,duration:.04},{x:0,y:0,duration:.08}]})}function uS(){window.matchMedia("(pointer: coarse)").matches&&document.querySelectorAll("a, button, .infra-panel").forEach(r=>{r.addEventListener("pointerdown",()=>{Qh(r,.8),jh([8])},{passive:!0})})}function fS(r){const t=vi("#btn-clear");t&&t.addEventListener("click",e=>{e.preventDefault(),Qh(t,2.5),jh([20,40,60]),Gt.fromTo("#blueprint-stage",{boxShadow:"0 0 0 0 rgba(200,22,42,0.9)"},{boxShadow:"0 0 0 40px rgba(200,22,42,0)",duration:.9,ease:"expo.out"}),r?.()})}const xi=pe.COLORS;class dS{constructor(t="blueprint-stage"){this.container=document.getElementById(t),this.container&&(this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.visible=!1,this.blocked=!0,this.initScene(),this.createHologramPipes(),this.createBlockageParticles(),this.initInteractions(),new ResizeObserver(()=>this.onResize()).observe(this.container),new IntersectionObserver(([e])=>{this.visible=e.isIntersecting},{threshold:.05}).observe(this.container),tt.updaters.add((e,n)=>this.update(e,n)))}initScene(){this.scene=new Tc,this.scene.fog=new Ia(xi.ink,.03),this.camera=new Sn(42,this.width/this.height,.1,100),this.camera.position.set(0,4,15),this.camera.lookAt(0,0,0),this.renderer=new Sf({alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,tt.qualityCfg.dpr)),this.renderer.outputColorSpace=ti,Object.assign(this.renderer.domElement.style,{position:"absolute",inset:"0",width:"100%",height:"100%",touchAction:"none",cursor:"grab"}),this.container.prepend(this.renderer.domElement),this.hologramGroup=new Bi,this.scene.add(this.hologramGroup);const t=new jx(16,32,xi.gold,xi.slate);t.material.transparent=!0,t.material.opacity=.18,t.position.y=-4.2,this.hologramGroup.add(t),this.isDragging=!1,this.prev={x:0,y:0},this.targetRotation={x:.25,y:.5}}createHologramPipes(){const t=[[new D(-4,-2,0),new D(-1,-2,0),new D(-1,2,0),new D(4,2,0)],[new D(-2,3,-2),new D(-2,0,-2),new D(2,0,2),new D(2,-3,2)],[new D(0,-4,-1),new D(0,1,-1),new D(3,1,3)]];this.lineMat=new Ec({color:xi.goldHi,transparent:!0,opacity:.85,blending:2}),this.tubeMat=new oo({color:xi.gold,transparent:!0,opacity:.12,blending:2,depthWrite:!1,side:2});const e=new oo({color:xi.goldHi,transparent:!0,opacity:.6});t.forEach((n,i)=>{const s=new If(n,!1,"catmullrom",.2),o=s.getPoints(160);this.hologramGroup.add(new Cf(new Ye().setFromPoints(o),this.lineMat));const a=new Se(new Nc(s,120,.16,12,!1),this.tubeMat);this.hologramGroup.add(a),n.forEach(l=>{const c=new Se(new ir(.22,.015,8,32),e);c.position.copy(l),c.lookAt(l.clone().add(new D(0,0,1))),this.hologramGroup.add(c)}),i===0&&(this.mainBlastCurve=s)}),this.blockageCenter=new D(-1,2,0)}createBlockageParticles(){this.particleCount=Math.min(600,Math.floor(tt.qualityCfg.particles/20)),this.particleGeometry=new Ye,this.homePositions=new Float32Array(this.particleCount*3),this.seedBlockage(this.homePositions),this.particleGeometry.setAttribute("position",new en(this.homePositions.slice(),3)),this.particleMaterial=new wc({color:xi.crimsonHi,size:.09,transparent:!0,opacity:.95,blending:2,depthWrite:!1,sizeAttenuation:!0}),this.blockagePoints=new Cc(this.particleGeometry,this.particleMaterial),this.hologramGroup.add(this.blockagePoints),this.warnLight=new zc(xi.crimsonHi,0,4),this.warnLight.position.copy(this.blockageCenter),this.hologramGroup.add(this.warnLight)}seedBlockage(t){const e=this.blockageCenter;for(let n=0;n<t.length;n+=3){const i=Math.pow(Math.random(),.6)*.32,s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1);t[n]=e.x+i*Math.sin(o)*Math.cos(s),t[n+1]=e.y+i*Math.sin(o)*Math.sin(s),t[n+2]=e.z+i*Math.cos(o)}}initInteractions(){const t=this.renderer.domElement;t.addEventListener("pointerdown",n=>{this.isDragging=!0,this.prev={x:n.clientX,y:n.clientY},t.setPointerCapture(n.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",n=>{this.isDragging&&(this.targetRotation.y+=(n.clientX-this.prev.x)*.006,this.targetRotation.x+=(n.clientY-this.prev.y)*.006,this.targetRotation.x=ln.clamp(this.targetRotation.x,-1.2,1.2),this.prev={x:n.clientX,y:n.clientY})});const e=()=>{this.isDragging=!1,t.style.cursor="grab"};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}triggerPressureBlast(){if(!this.mainBlastCurve||!this.blocked)return;if(this.blocked=!1,navigator.vibrate)try{navigator.vibrate([40,30,60])}catch{}const t=this.particleGeometry.attributes.position,e=t.array,n=new Float32Array(e.length);for(let u=0;u<e.length;u+=3){const d=new D().randomDirection().multiplyScalar(.8+Math.random()*1.6);n[u]=d.x,n[u+1]=d.y,n[u+2]=d.z}const i=e.slice(),s={k:0};Gt.to(s,{k:1,duration:.7,ease:"power3.out",onUpdate:()=>{for(let u=0;u<e.length;u++)e[u]=i[u]+n[u]*s.k;t.needsUpdate=!0}}),Gt.to(this.particleMaterial,{opacity:0,duration:.45,delay:.25}),Gt.fromTo(this.warnLight,{intensity:30},{intensity:0,duration:.6});const o=Math.min(400,Math.floor(tt.qualityCfg.particles/30)),a=new Ye,l=new Float32Array(o*3);a.setAttribute("position",new en(l,3));const c=new wc({color:xi.goldHi,size:.14,transparent:!0,opacity:1,blending:2,depthWrite:!1}),h=new Cc(a,c);this.hologramGroup.add(h),Gt.fromTo(this.tubeMat,{opacity:.12},{opacity:.45,duration:.3,yoyo:!0,repeat:1});const f={t:0};Gt.to(f,{t:1.12,duration:1.4,ease:"power2.inOut",onUpdate:()=>{for(let u=0;u<o;u++){const d=u/o*.12,m=ln.clamp(f.t-d,0,1),_=this.mainBlastCurve.getPointAt(m),p=.11*(1-Math.abs(u/o-.5)*2);l[u*3]=_.x+(Math.random()-.5)*p,l[u*3+1]=_.y+(Math.random()-.5)*p,l[u*3+2]=_.z+(Math.random()-.5)*p}a.attributes.position.needsUpdate=!0},onComplete:()=>{Gt.to(c,{opacity:0,duration:.3,onComplete:()=>{this.hologramGroup.remove(h),a.dispose(),c.dispose()}}),this.rearm()}})}rearm(){Gt.delayedCall(2.5,()=>{const t=this.particleGeometry.attributes.position,e=t.array,n=e.slice(),i=this.homePositions,s={v:0};Gt.to(this.particleMaterial,{opacity:.95,duration:1.2}),Gt.to(s,{v:1,duration:1.4,ease:"power2.inOut",onUpdate:()=>{for(let o=0;o<e.length;o++)e[o]=n[o]+(i[o]-n[o])*s.v;t.needsUpdate=!0},onComplete:()=>{this.blocked=!0}})})}update(t,e){if(!this.visible)return;const n=this.hologramGroup;n.rotation.y+=(this.targetRotation.y-n.rotation.y)*.1,n.rotation.x+=(this.targetRotation.x-n.rotation.x)*.1,this.isDragging||(this.targetRotation.y+=t*.12),this.blocked&&(this.particleMaterial.size=.09+Math.sin(e*6)*.015,this.warnLight.intensity=4+Math.sin(e*6)*3),this.lineMat.opacity=.75+Math.sin(e*31)*.05+Math.sin(e*7)*.05,this.lineMat.color.lerpColors(new Nt(xi.goldHi),new Nt(xi.crimsonHi),tt.threat*.6),this.renderer.render(this.scene,this.camera)}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,!(!this.width||!this.height)&&(this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height))}}/*!
 * paths 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pS=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,mS=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,gS=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,_S=/(^[#\.][a-z]|[a-y][a-z])/i,vS=Math.PI/180,xS=180/Math.PI,Dl=Math.sin,Il=Math.cos,li=Math.abs,qi=Math.sqrt,yS=Math.atan2,tu=1e8,om=function(t){return typeof t=="string"},am=function(t){return typeof t=="number"},MS=function(t){return typeof t>"u"},SS={},TS={},Ul=1e5,lm=function(t){return Math.round((t+tu)%1*Ul)/Ul||(t<0?0:1)},me=function(t){return Math.round(t*Ul)/Ul||0},cm=function(t){return Math.round(t*1e10)/1e10||0},hm=function(t){return t.closed=Math.abs(t[0]-t[t.length-2])<.001&&Math.abs(t[1]-t[t.length-1])<.001},um=function(t,e,n,i){var s=t[e],o=i===1?6:eu(s,n,i);if((o||!i)&&o+n+2<s.length)return t.splice(e,0,s.slice(0,n+o+2)),s.splice(0,n+o),1},fm=function(t,e,n){var i=t.length,s=~~(n*i);if(t[s]>e){for(;--s&&t[s]>e;);s<0&&(s=0)}else for(;t[++s]<e&&s<i;);return s<i?s:i-1},ES=function(t,e){var n=t.length;for(t.reverse();n--;)t[n].reversed||AS(t[n])},dm=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e},bS=function(t,e){var n=t.length,i=t[n-1]||[],s=i.length;n&&e[0]===i[s-2]&&e[1]===i[s-1]&&(e=i.concat(e.slice(2)),n--),t[n]=e};function Nl(r){r=om(r)&&_S.test(r)&&document.querySelector(r)||r;var t=r.getAttribute?r:0,e;return t&&(r=r.getAttribute("d"))?(t._gsPath||(t._gsPath={}),e=t._gsPath[r],e&&!e._dirty?e:t._gsPath[r]=Jo(r)):r?om(r)?Jo(r):am(r[0])?[r]:r:console.warn("Expecting a <path> element or an SVG path data string")}function wS(r){for(var t=[],e=0;e<r.length;e++)t[e]=dm(r[e],r[e].slice(0));return dm(r,t)}function AS(r){var t=0,e;for(r.reverse();t<r.length;t+=2)e=r[t],r[t]=r[t+1],r[t+1]=e;r.reversed=!r.reversed}var CS=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(t.attributes),s=i.length,o;for(e=","+e+",";--s>-1;)o=i[s].nodeName.toLowerCase(),e.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,i[s].nodeValue);return n},RS={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},PS=function(t,e){for(var n=e?e.split(","):[],i={},s=n.length;--s>-1;)i[n[s]]=+t.getAttribute(n[s])||0;return i};function LS(r,t){var e=r.tagName.toLowerCase(),n=.552284749831,i,s,o,a,l,c,h,f,u,d,m,_,p,g,y,v,M,A,b,S,C,P;return e==="path"||!r.getBBox?r:(c=CS(r,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),P=PS(r,RS[e]),e==="rect"?(a=P.rx,l=P.ry||a,s=P.x,o=P.y,d=P.width-a*2,m=P.height-l*2,a||l?(_=s+a*(1-n),p=s+a,g=p+d,y=g+a*n,v=g+a,M=o+l*(1-n),A=o+l,b=A+m,S=b+l*n,C=b+l,i="M"+v+","+A+" V"+b+" C"+[v,S,y,C,g,C,g-(g-p)/3,C,p+(g-p)/3,C,p,C,_,C,s,S,s,b,s,b-(b-A)/3,s,A+(b-A)/3,s,A,s,M,_,o,p,o,p+(g-p)/3,o,g-(g-p)/3,o,g,o,y,o,v,M,v,A].join(",")+"z"):i="M"+(s+d)+","+o+" v"+m+" h"+-d+" v"+-m+" h"+d+"z"):e==="circle"||e==="ellipse"?(e==="circle"?(a=l=P.r,f=a*n):(a=P.rx,l=P.ry,f=l*n),s=P.cx,o=P.cy,h=a*n,i="M"+(s+a)+","+o+" C"+[s+a,o+f,s+h,o+l,s,o+l,s-h,o+l,s-a,o+f,s-a,o,s-a,o-f,s-h,o-l,s,o-l,s+h,o-l,s+a,o-f,s+a,o].join(",")+"z"):e==="line"?i="M"+P.x1+","+P.y1+" L"+P.x2+","+P.y2:(e==="polyline"||e==="polygon")&&(u=(r.getAttribute("points")+"").match(mS)||[],s=u.shift(),o=u.shift(),i="M"+s+","+o+" L"+u.join(","),e==="polygon"&&(i+=","+s+","+o+"z")),c.setAttribute("d",iu(c._gsRawPath=Jo(i))),t&&r.parentNode&&(r.parentNode.insertBefore(c,r),r.parentNode.removeChild(r)),c)}function pm(r,t,e){var n=r[t],i=r[t+2],s=r[t+4],o;return n+=(i-n)*e,i+=(s-i)*e,n+=(i-n)*e,o=i+(s+(r[t+6]-s)*e-i)*e-n,n=r[t+1],i=r[t+3],s=r[t+5],n+=(i-n)*e,i+=(s-i)*e,n+=(i-n)*e,me(yS(i+(s+(r[t+7]-s)*e-i)*e-n,o)*xS)}function mm(r,t,e){e=MS(e)?1:cm(e)||0,t=cm(t)||0;var n=Math.max(0,~~(li(e-t)-1e-8)),i=wS(r);if(t>e&&(t=1-t,e=1-e,ES(i),i.totalLength=0),t<0||e<0){var s=Math.abs(~~Math.min(t,e))+1;t+=s,e+=s}i.totalLength||jr(i);var o=e>1,a=gm(i,t,SS,!0),l=gm(i,e,TS),c=l.segment,h=a.segment,f=l.segIndex,u=a.segIndex,d=l.i,m=a.i,_=u===f,p=d===m&&_,g,y,v,M,A,b,S,C;if(o||n){for(g=f<u||_&&d<m||p&&l.t<a.t,um(i,u,m,a.t)&&(u++,g||(f++,p?(l.t=(l.t-a.t)/(1-a.t),d=0):_&&(d-=m))),Math.abs(1-(e-t))<1e-5?f=u-1:!l.t&&f?f--:um(i,f,d,l.t)&&g&&u++,a.t===1&&(u=(u+1)%i.length),A=[],b=i.length,S=1+b*n,C=u,S+=(b-u+f)%b,M=0;M<S;M++)bS(A,i[C++%b]);i=A}else if(v=l.t===1?6:eu(c,d,l.t),t!==e)for(y=eu(h,m,p?a.t/l.t:a.t),_&&(v+=y),c.splice(d+v+2),(y||m)&&h.splice(0,m+y),M=i.length;M--;)(M<u||M>f)&&i.splice(M,1);else c.angle=pm(c,d+v,0),d+=v,a=c[d],l=c[d+1],c.length=c.totalLength=0,c.totalPoints=i.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return i.totalLength=0,i}function DS(r,t,e){t=t||0,r.samples||(r.samples=[],r.lookup=[]);var n=~~r.resolution||12,i=1/n,s=r.length,o=r[t],a=r[t+1],l=t?t/6*n:0,c=r.samples,h=r.lookup,f=(t?r.minLength:tu)||tu,u=c[l+e*n-1],d=t?c[l-1]:0,m,_,p,g,y,v,M,A,b,S,C,P,x,E,U,B,G;for(c.length=h.length=0,_=t+2;_<s;_+=6){if(p=r[_+4]-o,g=r[_+2]-o,y=r[_]-o,A=r[_+5]-a,b=r[_+3]-a,S=r[_+1]-a,v=M=C=P=0,li(p)<.01&&li(A)<.01&&li(y)+li(S)<.01)r.length>8&&(r.splice(_,6),_-=6,s-=6);else for(m=1;m<=n;m++)E=i*m,x=1-E,v=M-(M=(E*E*p+3*x*(E*g+x*y))*E),C=P-(P=(E*E*A+3*x*(E*b+x*S))*E),B=qi(C*C+v*v),B<f&&(f=B),d+=B,c[l++]=d;o+=p,a+=A}if(u)for(u-=d;l<c.length;l++)c[l]+=u;if(c.length&&f){if(r.totalLength=G=c[c.length-1]||0,r.minLength=f,G/f<9999)for(B=U=0,m=0;m<G;m+=f)h[B++]=c[U]<m?++U:U}else r.totalLength=c[0]=0;return t?d-c[t/2-1]:d}function jr(r,t){var e,n,i;for(i=e=n=0;i<r.length;i++)r[i].resolution=~~t||12,e+=DS(r[i]),n+=r[i].length;return r.totalPoints=n,r.totalLength=e,r}function eu(r,t,e){if(e<=0||e>=1)return 0;var n=r[t],i=r[t+1],s=r[t+2],o=r[t+3],a=r[t+4],l=r[t+5],c=r[t+6],h=r[t+7],f=n+(s-n)*e,u=s+(a-s)*e,d=i+(o-i)*e,m=o+(l-o)*e,_=f+(u-f)*e,p=d+(m-d)*e,g=a+(c-a)*e,y=l+(h-l)*e;return u+=(g-u)*e,m+=(y-m)*e,r.splice(t+2,4,me(f),me(d),me(_),me(p),me(_+(u-_)*e),me(p+(m-p)*e),me(u),me(m),me(g),me(y)),r.samples&&r.samples.splice(t/6*r.resolution|0,0,0,0,0,0,0,0),6}function gm(r,t,e,n){e=e||{},r.totalLength||jr(r),(t<0||t>1)&&(t=lm(t));var i=0,s=r[0],o,a,l,c,h,f,u;if(!t)u=f=i=0,s=r[0];else if(t===1)u=1,i=r.length-1,s=r[i],f=s.length-8;else{if(r.length>1){for(l=r.totalLength*t,h=f=0;(h+=r[f++].totalLength)<l;)i=f;s=r[i],c=h-s.totalLength,t=(l-c)/(h-c)||0}o=s.samples,a=s.resolution,l=s.totalLength*t,f=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:fm(o,l,t),c=f?o[f-1]:0,h=o[f],h<l&&(c=h,h=o[++f]),u=1/a*((l-c)/(h-c)+f%a),f=~~(f/a)*6,n&&u===1&&(f+6<s.length?(f+=6,u=0):i+1<r.length&&(f=u=0,s=r[++i]))}return e.t=u,e.i=f,e.path=r,e.segment=s,e.segIndex=i,e}function _m(r,t,e,n){var i=r[0],s=n||{},o,a,l,c,h,f,u,d,m;if((t<0||t>1)&&(t=lm(t)),i.lookup||jr(r),r.length>1){for(l=r.totalLength*t,h=f=0;(h+=r[f++].totalLength)<l;)i=r[f];c=h-i.totalLength,t=(l-c)/(h-c)||0}return o=i.samples,a=i.resolution,l=i.totalLength*t,f=i.lookup.length?i.lookup[t<1?~~(l/i.minLength):i.lookup.length-1]||0:fm(o,l,t),c=f?o[f-1]:0,h=o[f],h<l&&(c=h,h=o[++f]),u=1/a*((l-c)/(h-c)+f%a)||0,m=1-u,f=~~(f/a)*6,d=i[f],s.x=me((u*u*(i[f+6]-d)+3*m*(u*(i[f+4]-d)+m*(i[f+2]-d)))*u+d),s.y=me((u*u*(i[f+7]-(d=i[f+1]))+3*m*(u*(i[f+5]-d)+m*(i[f+3]-d)))*u+d),e&&(s.angle=i.totalLength?pm(i,f,u>=1?.999999999:u||1e-9):i.angle||0),s}function Ys(r,t,e,n,i,s,o){for(var a=r.length,l,c,h,f,u;--a>-1;)for(l=r[a],c=l.length,h=0;h<c;h+=2)f=l[h],u=l[h+1],l[h]=f*t+u*n+s,l[h+1]=f*e+u*i+o;return r._dirty=1,r}function IS(r,t,e,n,i,s,o,a,l){if(!(r===a&&t===l)){e=li(e),n=li(n);var c=i%360*vS,h=Il(c),f=Dl(c),u=Math.PI,d=u*2,m=(r-a)/2,_=(t-l)/2,p=h*m+f*_,g=-f*m+h*_,y=p*p,v=g*g,M=y/(e*e)+v/(n*n);M>1&&(e=qi(M)*e,n=qi(M)*n);var A=e*e,b=n*n,S=(A*b-A*v-b*y)/(A*v+b*y);S<0&&(S=0);var C=(s===o?-1:1)*qi(S),P=C*(e*g/n),x=C*-(n*p/e),E=(r+a)/2,U=(t+l)/2,B=E+(h*P-f*x),G=U+(f*P+h*x),q=(p-P)/e,z=(g-x)/n,$=(-p-P)/e,V=(-g-x)/n,it=q*q+z*z,L=(z<0?-1:1)*Math.acos(q/qi(it)),st=(q*V-z*$<0?-1:1)*Math.acos((q*$+z*V)/qi(it*($*$+V*V)));isNaN(st)&&(st=u),!o&&st>0?st-=d:o&&st<0&&(st+=d),L%=d,st%=d;var Bt=Math.ceil(li(st)/(d/4)),Ft=[],Y=st/Bt,Q=4/3*Dl(Y/2)/(1+Il(Y/2)),ht=h*e,lt=f*e,bt=f*-n,Tt=h*n,Lt;for(Lt=0;Lt<Bt;Lt++)i=L+Lt*Y,p=Il(i),g=Dl(i),q=Il(i+=Y),z=Dl(i),Ft.push(p-Q*g,g+Q*p,q+Q*z,z-Q*q,q,z);for(Lt=0;Lt<Ft.length;Lt+=2)p=Ft[Lt],g=Ft[Lt+1],Ft[Lt]=p*ht+g*bt+B,Ft[Lt+1]=p*lt+g*Tt+G;return Ft[Lt-2]=a,Ft[Lt-1]=l,Ft}}function Jo(r){var t=(r+"").replace(gS,function(P){var x=+P;return x<1e-4&&x>-1e-4?0:x}).match(pS)||[],e=[],n=0,i=0,s=2/3,o=t.length,a=0,l="ERROR: malformed path: "+r,c,h,f,u,d,m,_,p,g,y,v,M,A,b,S,C=function(x,E,U,B){y=(U-x)/3,v=(B-E)/3,_.push(x+y,E+v,U-y,B-v,U,B)};if(!r||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(c=0;c<o;c++)if(A=d,isNaN(t[c])?(d=t[c].toUpperCase(),m=d!==t[c]):c--,f=+t[c+1],u=+t[c+2],m&&(f+=n,u+=i),c||(p=f,g=u),d==="M")_&&(_.length<8?e.length-=1:a+=_.length,hm(_)),n=p=f,i=g=u,_=[f,u],e.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),m||(n=i=0),_.push(f,u,n+t[c+3]*1,i+t[c+4]*1,n+=t[c+5]*1,i+=t[c+6]*1),c+=6;else if(d==="S")y=n,v=i,(A==="C"||A==="S")&&(y+=n-_[_.length-4],v+=i-_[_.length-3]),m||(n=i=0),_.push(y,v,f,u,n+=t[c+3]*1,i+=t[c+4]*1),c+=4;else if(d==="Q")y=n+(f-n)*s,v=i+(u-i)*s,m||(n=i=0),n+=t[c+3]*1,i+=t[c+4]*1,_.push(y,v,n+(f-n)*s,i+(u-i)*s,n,i),c+=4;else if(d==="T")y=n-_[_.length-4],v=i-_[_.length-3],_.push(n+y,i+v,f+(n+y*1.5-f)*s,u+(i+v*1.5-u)*s,n=f,i=u),c+=2;else if(d==="H")C(n,i,n=f,i),c+=1;else if(d==="V")C(n,i,n,i=f+(m?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(f=p,u=g,_.closed=!0),(d==="L"||li(n-f)>.5||li(i-u)>.5)&&(C(n,i,f,u),d==="L"&&(c+=2)),n=f,i=u;else if(d==="A"){if(b=t[c+4],S=t[c+5],y=t[c+6],v=t[c+7],h=7,b.length>1&&(b.length<3?(v=y,y=S,h--):(v=S,y=b.substr(2),h-=2),S=b.charAt(1),b=b.charAt(0)),M=IS(n,i,+t[c+1],+t[c+2],+t[c+3],+b,+S,(m?n:0)+y*1,(m?i:0)+v*1),c+=h,M)for(h=0;h<M.length;h++)_.push(M[h]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(e.pop(),c=0):hm(_),e.totalPoints=a+c,e}function US(r,t){t===void 0&&(t=1);for(var e=r[0],n=0,i=[e,n],s=2;s<r.length;s+=2)i.push(e,n,r[s],n=(r[s]-e)*t/2,e=r[s],-n);return i}function nu(r,t){li(r[0]-r[2])<1e-4&&li(r[1]-r[3])<1e-4&&(r=r.slice(2));var e=r.length-2,n=+r[0],i=+r[1],s=+r[2],o=+r[3],a=[n,i,n,i],l=s-n,c=o-i,h=r.nonSmooth||[],f=Math.abs(r[e]-n)<.001&&Math.abs(r[e+1]-i)<.001,u,d,m,_,p,g,y,v,M,A,b,S,C,P,x;if(!e)return[n,i,n,i,n,i,n,i];for(f&&(r.push(s,o),s=n,o=i,n=r[e-2],i=r[e-1],r.unshift(n,i),e+=4,h=[0,0].concat(h)),t=t||t===0?+t:1,m=2;m<e;m+=2)if(u=n,d=i,n=s,i=o,s=+r[m+2],o=+r[m+3],!(n===s&&i===o)){if(_=l,p=c,l=s-n,c=o-i,h[m]){a.push(n-(n-u)/4,i-(i-d)/4,n,i,n+(s-n)/4,i+(o-i)/4);continue}g=qi(_*_+p*p),y=qi(l*l+c*c),v=qi(Math.pow(l/y+_/g,2)+Math.pow(c/y+p/g,2)),M=(g+y)*t*.25/v,A=n-(n-u)*(g?M/g:0),b=n+(s-n)*(y?M/y:0),S=n-(A+((b-A)*(g*3/(g+y)+.5)/4||0)),C=i-(i-d)*(g?M/g:0),P=i+(o-i)*(y?M/y:0),x=i-(C+((P-C)*(g*3/(g+y)+.5)/4||0)),a.push(me(A+S),me(C+x),me(n),me(i),me(b+S),me(P+x))}return n!==s||i!==o||a.length<4?a.push(me(s),me(o),me(s),me(o)):a.length-=2,a.length===2?a.push(n,i,n,i,n,i):f&&(a.splice(0,6),a.length-=6),a.closed=f,a}function iu(r){am(r[0])&&(r=[r]);var t="",e=r.length,n,i,s,o;for(i=0;i<e;i++){for(o=r[i],t+="M"+me(o[0])+","+me(o[1])+" C",n=o.length,s=2;s<n;s++)t+=me(o[s++])+","+me(o[s++])+" "+me(o[s++])+","+me(o[s++])+" "+me(o[s++])+","+me(o[s])+" ";o.closed&&(t+="z")}return t}/*!
 * matrix 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yi,Qr,ru,Fl,jo,Ol,Bl,Qo,yi="transform",su=yi+"Origin",vm,xm=function(t){var e=t.ownerDocument||t;for(!(yi in t.style)&&("msTransform"in t.style)&&(yi="msTransform",su=yi+"Origin");e.parentNode&&(e=e.parentNode););if(Qr=window,Bl=new ta,e){Yi=e,ru=e.documentElement,Fl=e.body,Qo=Yi.createElementNS("http://www.w3.org/2000/svg","g"),Qo.style.transform="none";var n=e.createElement("div"),i=e.createElement("div"),s=e&&(e.body||e.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.style.position="static",n.style.transform="translate3d(0,0,1px)",vm=i.offsetParent!==n,s.removeChild(n))}return e},NS=function(t){for(var e,n;t&&t!==Fl;)n=t._gsap,n&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},ym=[],Mm=[],FS=function(){return Qr.pageYOffset||Yi.scrollTop||ru.scrollTop||Fl.scrollTop||0},OS=function(){return Qr.pageXOffset||Yi.scrollLeft||ru.scrollLeft||Fl.scrollLeft||0},ou=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},BS=function r(t){if(Qr.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return r(t)},au=function r(t,e){if(t.parentNode&&(Yi||xm(t))){var n=ou(t),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?e?"rect":"g":"div",o=e!==2?0:100,a=e===3?100:0,l={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},c=Yi.createElementNS?Yi.createElementNS(i.replace(/^https/,"http"),s):Yi.createElement(s);return e&&(n?(Ol||(Ol=r(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),c.setAttribute("fill","transparent"),Ol.appendChild(c)):(jo||(jo=r(t),Object.assign(jo.style,l)),Object.assign(c.style,l,{width:"0.1px",height:"0.1px",top:a+"px",left:o+"px"}),jo.appendChild(c))),c}throw"Need document and parent."},zS=function(t){for(var e=new ta,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},kS=function(t){var e=t.getCTM(),n;return e||(n=t.style[yi],t.style[yi]="none",t.appendChild(Qo),e=Qo.getCTM(),t.removeChild(Qo),n?t.style[yi]=n:t.style.removeProperty(yi.replace(/([A-Z])/g,"-$1").toLowerCase())),e||Bl.clone()},GS=function(t,e){var n=ou(t),i=t===n,s=n?ym:Mm,o=t.parentNode,a=o&&!n&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,h,f,u,d;if(t===Qr)return t;if(s.length||s.push(au(t,1),au(t,2),au(t,3)),l=n?Ol:jo,n)i?(h=kS(t),f=-h.e/h.a,u=-h.f/h.d,c=Bl):t.getBBox?(h=t.getBBox(),c=t.transform?t.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?zS(c):c.getItem(0).matrix:Bl,f=c.a*h.x+c.c*h.y,u=c.b*h.x+c.d*h.y):(c=new ta,f=u=0),e&&t.tagName.toLowerCase()==="g"&&(f=u=0),(i||!t.getBoundingClientRect().width?n:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+f)+","+(c.f+u)+")");else{if(f=u=0,vm)for(c=t.offsetParent,h=t;h&&(h=h.parentNode)&&h!==c&&h.parentNode;)(Qr.getComputedStyle(h)[yi]+"").length>4&&(f=h.offsetLeft,u=h.offsetTop,h=0);if(d=Qr.getComputedStyle(t),d.position!=="absolute"&&d.position!=="fixed")for(c=t.offsetParent;o&&o!==c;)f+=o.scrollLeft||0,u+=o.scrollTop||0,o=o.parentNode;h=l.style,h.top=t.offsetTop-u+"px",h.left=t.offsetLeft-f+"px",h[yi]=d[yi],h[su]=d[su],h.position=d.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},lu=function(t,e,n,i,s,o,a){return t.a=e,t.b=n,t.c=i,t.d=s,t.e=o,t.f=a,t},ta=function(){function r(e,n,i,s,o,a){e===void 0&&(e=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),lu(this,e,n,i,s,o,a)}var t=r.prototype;return t.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return lu(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},t.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,f=n.c,u=n.b,d=n.d,m=n.e,_=n.f;return lu(this,h*i+u*o,h*s+u*a,f*i+d*o,f*s+d*a,l+m*i+_*o,c+m*s+_*a)},t.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},t.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,f=this.e,u=this.f;return i.x=s*a+o*c+f||0,i.y=s*l+o*h+u||0,i},r}();function $s(r,t,e,n){if(!r||!r.parentNode||(Yi||xm(r)).documentElement===r)return new ta;var i=NS(r),s=ou(r),o=s?ym:Mm,a=GS(r,e),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),f=a.parentNode,u=!n&&BS(r),d=new ta((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(u?0:OS()),l.top+(u?0:FS()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return t?d.inverse():d}/*!
 * MotionPathPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var HS="x,translateX,left,marginLeft,xPercent".split(","),VS="y,translateY,top,marginTop,yPercent".split(","),WS=Math.PI/180,ci,Sm,Ks,cu,hu,Tm,XS=function(){return ci||typeof window<"u"&&(ci=window.gsap)&&ci.registerPlugin&&ci},ea=function(t,e,n,i){for(var s=e.length,o=i===2?0:i,a=0;a<s;a++)t[o]=parseFloat(e[a][n]),i===2&&(t[o+1]=0),o+=2;return t},Zs=function(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0},Em=function(t){var e=t[0],n=t[1],i;for(i=2;i<t.length;i+=2)e=t[i]+=e,n=t[i+1]+=n},bm=function(t,e,n,i,s,o,a,l,c){if(a.type==="cubic")e=[e];else{a.fromCurrent!==!1&&e.unshift(Zs(n,i,l),s?Zs(n,s,c):0),a.relative&&Em(e);var h=s?nu:US;e=[h(e,a.curviness)]}return e=o(Am(e,n,a)),zl(t,n,i,e,"x",l),s&&zl(t,n,s,e,"y",c),jr(e,a.resolution||(a.curviness===0?20:12))},qS=function(t){return t},YS=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,wm=function(t,e,n){var i=$s(t),s=0,o=0,a;return(t.tagName+"").toLowerCase()==="svg"?(a=t.viewBox.baseVal,a.width||(a={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):a=e&&t.getBBox&&t.getBBox(),e&&e!=="auto"&&(s=e.push?e[0]*(a?a.width:t.offsetWidth||0):e.x,o=e.push?e[1]*(a?a.height:t.offsetHeight||0):e.y),n.apply(s||o?i.apply({x:s,y:o}):{x:i.e,y:i.f})},uu=function(t,e,n,i){var s=$s(t.parentNode,!0,!0),o=s.clone().multiply($s(e)),a=wm(t,n,s),l=wm(e,i,s),c=l.x,h=l.y,f;return o.e=o.f=0,i==="auto"&&e.getTotalLength&&e.tagName.toLowerCase()==="path"&&(f=e.getAttribute("d").match(YS)||[],f=o.apply({x:+f[0],y:+f[1]}),c+=f.x,h+=f.y),f&&(f=o.apply(e.getBBox()),c-=f.x,h-=f.y),o.e=c-a.x,o.f=h-a.y,o},Am=function(t,e,n){var i=n.align,s=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=t[0][0],h=t[0][1],f=Zs(e,"x"),u=Zs(e,"y"),d,m,_;return!t||!t.length?Nl("M0,0L0,0"):(i&&(i==="self"||(d=cu(i)[0]||e)===e?Ys(t,1,0,0,1,f-c,u-h):(l&&l[2]!==!1?ci.set(e,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[Zs(e,"xPercent")/-100,Zs(e,"yPercent")/-100],m=uu(e,d,l,"auto"),_=m.apply({x:c,y:h}),Ys(t,m.a,m.b,m.c,m.d,f+m.e-(_.x-m.e),u+m.f-(_.y-m.f)))),s?Ys(t,s.a,s.b,s.c,s.d,s.e,s.f):(o||a)&&Ys(t,1,0,0,1,o||0,a||0),t)},zl=function(t,e,n,i,s,o){var a=e._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],h=c&&c.indexOf(",")<0?c:n,f=t._pt=new Sm(t._pt,e,h,0,0,qS,0,a.set(e,h,t));f.u=Ks(a.get(e,h,o))||0,f.path=i,f.pp=s,t._props.push(h)},$S=function(t,e){return function(n){return t||e!==1?mm(n,t,e):n}},Cm={version:"3.15.0",name:"motionPath",register:function(t,e,n){ci=t,Ks=ci.utils.getUnit,cu=ci.utils.toArray,hu=ci.core.getStyleSaver,Tm=ci.core.reverting||function(){},Sm=n},init:function(t,e,n){if(!ci)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof e=="object"&&!e.style)||!e.path)&&(e={path:e});var i=[],s=e,o=s.path,a=s.autoRotate,l=s.unitX,c=s.unitY,h=s.x,f=s.y,u=o[0],d=$S(e.start,"end"in e?e.end:1),m,_;if(this.rawPaths=i,this.target=t,this.tween=n,this.styles=hu&&hu(t,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=Ks(t._gsap.get(t,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof u!="number"){for(_ in u)!h&&~HS.indexOf(_)?h=_:!f&&~VS.indexOf(_)&&(f=_);h&&f?i.push(bm(this,ea(ea([],o,h,0),o,f,1),t,h,f,d,e,l||Ks(o[0][h]),c||Ks(o[0][f]))):h=f=0;for(_ in u)_!==h&&_!==f&&i.push(bm(this,ea([],o,_,2),t,_,0,d,e,Ks(o[0][_])))}else m=d(Am(Nl(e.path),t,e)),jr(m,e.resolution),i.push(m),zl(this,t,e.x||"x",m,"x",e.unitX||"px"),zl(this,t,e.y||"y",m,"y",e.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(t,e){var n=e.rawPaths,i=n.length,s=e._pt;if(e.tween._time||!Tm()){for(t>1?t=1:t<0&&(t=0);i--;)_m(n[i],t,!i&&e.rotate,n[i]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,t),s=s._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?WS:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function(t){return jr(Nl(t)).totalLength},sliceRawPath:mm,getRawPath:Nl,pointsToSegment:nu,stringToRawPath:Jo,rawPathToString:iu,transformRawPath:Ys,getGlobalMatrix:$s,getPositionOnPath:_m,cacheRawPathMeasurements:jr,convertToPath:function(t,e){return cu(t).map(function(n){return LS(n,e!==!1)})},convertCoordinates:function(t,e,n){var i=$s(e,!0,!0).multiply($s(t));return n?i.apply(n):i},getAlignMatrix:uu,getRelativePosition:function(t,e,n,i){var s=uu(t,e,n,i);return{x:s.e,y:s.f}},arrayToRawPath:function(t,e){e=e||{};var n=ea(ea([],t,e.x||"x",0),t,e.y||"y",1);return e.relative&&Em(n),[e.type==="cubic"?n:nu(n,e.curviness)]}};XS()&&ci.registerPlugin(Cm),Gt.registerPlugin(Xt,Cm);const na="http://www.w3.org/2000/svg",Jn={gold:"#f1cf7a",crimson:"#ff2a3c",ink:"#0b0b0d",cyan:"#7ae1f1"};class Rm{constructor(t,e={}){var i;if(this.section=document.querySelector(t),!this.section)return;this.opts={lanes:tt.isMobile?2:3,seed:1,anchorSelector:"h1, h2, p, .infra-panel, .blueprint-stage",...e},this.sparks=[],this.visible=!1,this.lastEmit=0,(i=this.section.style).position||(i.position="relative"),this.buildLayers(),this.buildPath(),this.buildRacers(),this.buildScroll(),new IntersectionObserver(([s])=>{this.visible=s.isIntersecting},{rootMargin:"20%"}).observe(this.section);let n;new ResizeObserver(()=>{clearTimeout(n),n=setTimeout(()=>this.layout(),120)}).observe(this.section),tt.updaters.add((s,o)=>this.update(s,o))}buildLayers(){this.svg=document.createElementNS(na,"svg"),this.svg.setAttribute("class","hw-svg"),this.svg.setAttribute("aria-hidden","true"),Object.assign(this.svg.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"3",overflow:"visible"});const t=document.createElementNS(na,"defs");t.innerHTML=`
      <filter id="hw-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <linearGradient id="hw-lane" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${Jn.crimson}"/><stop offset="0.5" stop-color="${Jn.gold}"/><stop offset="1" stop-color="${Jn.cyan}"/>
      </linearGradient>`,this.svg.appendChild(t),this.track=document.createElementNS(na,"g"),this.svg.appendChild(this.track),this.canvas=document.createElement("canvas"),Object.assign(this.canvas.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"4",mixBlendMode:"screen"}),this.ctx=this.canvas.getContext("2d"),this.section.appendChild(this.svg),this.section.appendChild(this.canvas)}waypoints(){const t=this.section.getBoundingClientRect(),e=t.width,n=t.height,i=[...this.section.querySelectorAll(this.opts.anchorSelector)].map(o=>o.getBoundingClientRect()).filter(o=>o.width>40&&o.height>20).map(o=>({x:o.left-t.left,y:o.top-t.top,w:o.width,h:o.height})),s=[{x:-e*.1,y:n*.5}];return i.sort((o,a)=>o.y-a.y||o.x-a.x),i.forEach((o,a)=>{const l=a%2===0,c=40;s.push({x:o.x-c,y:l?o.y-c:o.y+o.h+c}),s.push({x:o.x+o.w+c,y:l?o.y-c*.4:o.y+o.h+c*.4})}),i.length===0&&s.push({x:e*.3,y:n*.2},{x:e*.6,y:n*.8}),s.push({x:e*1.1,y:n*.5}),s}pathD(t){if(t.length<2)return"";let e=`M ${t[0].x} ${t[0].y}`;for(let n=0;n<t.length-1;n++){const i=t[n-1]||t[n],s=t[n],o=t[n+1],a=t[n+2]||o,l=s.x+(o.x-i.x)/6,c=s.y+(o.y-i.y)/6,h=o.x-(a.x-s.x)/6,f=o.y-(a.y-s.y)/6;e+=` C ${l} ${c}, ${h} ${f}, ${o.x} ${o.y}`}return e}buildPath(){const t=(e,n,i,s,o)=>{const a=document.createElementNS(na,"path");return a.setAttribute("class",e),a.setAttribute("fill","none"),a.setAttribute("stroke",n),a.setAttribute("stroke-width",i),a.setAttribute("stroke-linecap","round"),a.setAttribute("opacity",o),s&&a.setAttribute("stroke-dasharray",s),this.track.appendChild(a),a};this.road=t("hw-road",Jn.ink,34,null,.75),this.edgeL=t("hw-edge","url(#hw-lane)",3,null,.9),this.center=t("hw-center",Jn.gold,2,"18 22",.9),this.edgeL.setAttribute("filter","url(#hw-glow)"),this.layout()}layout(){const t=this.section.getBoundingClientRect();if(Math.abs(t.width-(this.W||0))<2&&Math.abs(t.height-(this.H||0))<2)return;this.W=t.width,this.H=t.height,this.svg.setAttribute("viewBox",`0 0 ${this.W} ${this.H}`);const e=Math.min(devicePixelRatio,2);this.canvas.width=this.W*e,this.canvas.height=this.H*e,this.ctx.setTransform(e,0,0,e,0,0);const n=this.pathD(this.waypoints());[this.road,this.edgeL,this.center].forEach(i=>i.setAttribute("d",n)),this.pathLen=this.center.getTotalLength?.()||1e3,this.tl&&this.buildScroll()}racer(t,e){const n=document.createElementNS(na,"g");return n.setAttribute("class","hw-racer"),n.setAttribute("filter","url(#hw-glow)"),n.innerHTML=`
      <g class="hw-racer-body" transform="scale(1.7)">
        <path d="M -26 6 L -18 -6 L 14 -8 L 28 0 L 14 8 L -18 8 Z" fill="${Jn.ink}" stroke="${t}" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M -4 -6 Q 4 -16 12 -6" fill="none" stroke="${t}" stroke-width="2.5"/>
        <rect x="-30" y="-12" width="6" height="24" rx="1.5" fill="${t}"/>
        <circle cx="-14" cy="10" r="5" fill="${Jn.ink}" stroke="${t}" stroke-width="2.5"/>
        <circle cx="14"  cy="10" r="5" fill="${Jn.ink}" stroke="${t}" stroke-width="2.5"/>
        <circle cx="-14" cy="-10" r="5" fill="${Jn.ink}" stroke="${t}" stroke-width="2.5"/>
        <circle cx="14"  cy="-10" r="5" fill="${Jn.ink}" stroke="${t}" stroke-width="2.5"/>
        <text x="-2" y="3" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="${t}" text-anchor="middle">0${e+1}</text>
      </g>`,this.svg.appendChild(n),n}buildRacers(){const t=[Jn.crimson,Jn.gold,Jn.cyan];this.racers=Array.from({length:this.opts.lanes},(e,n)=>({el:this.racer(t[n%3],n),body:null,lag:n*.08,lane:(n-(this.opts.lanes-1)/2)*14,color:t[n%3],u:0,prevU:0})),this.racers.forEach(e=>{e.body=e.el.querySelector(".hw-racer-body")})}buildScroll(){this.tl?.scrollTrigger?.kill(),this.tl?.kill(),this.tl=Gt.timeline({scrollTrigger:{trigger:this.section,start:"top bottom",end:"bottom top",scrub:.6,invalidateOnRefresh:!0}}),this.racers.forEach(t=>{const e={u:0};this.tl.to(e,{u:1,ease:"none",duration:1,onUpdate:()=>{t.u=e.u}},0),this.tl.to(t.el,{duration:1,ease:"none",motionPath:{path:this.center,align:this.center,alignOrigin:[.5,.5],autoRotate:!0,start:-t.lag*.5,end:1-t.lag*.5,offsetY:t.lane}},0)}),this.tl.to(this.center,{strokeDashoffset:-this.pathLen*.5,ease:"none",duration:1},0)}update(t,e){if(!this.visible)return;const n=tt.scrollVelocity,i=Gt.utils.clamp(-1,1,n/2500);this.racers.forEach(o=>{o.body.setAttribute("transform",`scale(1.7) skewX(${-i*22}) scale(${1+Math.abs(i)*.25}, ${1-Math.abs(i)*.12})`);const a=Math.abs(o.u-o.prevU)/Math.max(t,.001);o.prevU=o.u;const l=(tt.isMobile?.5:1)*Math.min(6,a*40+Math.abs(i)*4);if(l>.4){const c=o.el.getCTM?.();if(!c)return;const h=this.svg.getBoundingClientRect(),f=c.e-(h.left-this.section.getBoundingClientRect().left),u=c.f-(h.top-this.section.getBoundingClientRect().top);for(let d=0;d<l;d++)this.sparks.push({x:f+(Math.random()-.5)*10,y:u+(Math.random()-.5)*10,vx:-Math.cos(Math.atan2(c.b,c.a))*(120+Math.random()*240)*Math.sign(n||1)+(Math.random()-.5)*80,vy:-Math.sin(Math.atan2(c.b,c.a))*(120+Math.random()*240)*Math.sign(n||1)+(Math.random()-.5)*80-60,life:.45+Math.random()*.35,age:0,color:o.color,size:1.5+Math.random()*2.5})}});const s=this.ctx;s.clearRect(0,0,this.W,this.H),this.sparks.length>900&&this.sparks.splice(0,this.sparks.length-900);for(let o=this.sparks.length-1;o>=0;o--){const a=this.sparks[o];if(a.age+=t,a.age>=a.life){this.sparks.splice(o,1);continue}a.vy+=520*t,a.x+=a.vx*t,a.y+=a.vy*t;const l=1-a.age/a.life;s.globalAlpha=l,s.fillStyle=a.color,s.fillRect(a.x,a.y,a.size*l+1,a.size*l+1)}s.globalAlpha=1}}const KS=`
  attribute float aSize;
  attribute float aLife;     // 0..1 remaining
  attribute float aSeed;
  varying float vLife; varying float vSeed;
  void main() {
    vLife = aLife; vSeed = aSeed;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (300.0 / -mv.z) * (0.6 + 0.4 * aLife);
    gl_Position = projectionMatrix * mv;
  }
`,ZS=`
  precision highp float;
  uniform float uTime; uniform vec3 uCore; uniform vec3 uMid; uniform vec3 uRim;
  varying float vLife; varying float vSeed;

  // hash-based value noise, cheap enough for thousands of sprites
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    // flame flicker: distort the radius with scrolling noise; flames lean upward
    float n = noise(uv * 6.0 + vec2(vSeed * 10.0, -uTime * 6.0 + vSeed));
    float n2 = noise(uv * 14.0 + vec2(-uTime * 9.0, vSeed * 7.0));
    float r = length(uv * vec2(1.0, 0.85 + 0.25 * uv.y)) + (n - 0.5) * 0.22 + (n2 - 0.5) * 0.08;
    float body = 1.0 - smoothstep(0.18, 0.5, r);
    if (body <= 0.01) discard;
    float core = 1.0 - smoothstep(0.0, 0.22, r);
    vec3 col = mix(uRim, uMid, body);
    col = mix(col, uCore, core * core);
    col *= 1.1 + 0.3 * n2;
    gl_FragColor = vec4(col, body * (0.35 + 0.65 * vLife));
  }
`;class JS{constructor({capacity:t=900,depth:e=7}={}){this.cap=Math.floor(t*(tt.isMobile?.5:1)*(tt.quality==="low"?.6:1)),this.depth=e,this.count=0,this.group=new Bi,tt.camera.add(this.group),this.group.position.set(0,0,-e),this.px=new Float32Array(this.cap),this.py=new Float32Array(this.cap),this.pz=new Float32Array(this.cap),this.vx=new Float32Array(this.cap),this.vy=new Float32Array(this.cap),this.vz=new Float32Array(this.cap),this.life=new Float32Array(this.cap),this.maxLife=new Float32Array(this.cap),this.geo=new Ye,this.aPos=new en(new Float32Array(this.cap*3),3).setUsage(35048),this.aSize=new en(new Float32Array(this.cap),1).setUsage(35048),this.aLife=new en(new Float32Array(this.cap),1).setUsage(35048),this.aSeed=new en(new Float32Array(this.cap).map(()=>Math.random()),1),this.geo.setAttribute("position",this.aPos),this.geo.setAttribute("aSize",this.aSize),this.geo.setAttribute("aLife",this.aLife),this.geo.setAttribute("aSeed",this.aSeed),this.geo.setDrawRange(0,0),this.mat=new Si({uniforms:{uTime:{value:0},uCore:{value:new Nt(16774856)},uMid:{value:new Nt(pe.COLORS.goldHi)},uRim:{value:new Nt(pe.COLORS.crimsonHi)}},vertexShader:KS,fragmentShader:ZS,transparent:!0,depthWrite:!1,blending:2}),this.points=new Cc(this.geo,this.mat),this.points.frustumCulled=!1,this.group.add(this.points),this.bounds={w:10,h:6},this.computeBounds(),window.addEventListener("resize",()=>this.computeBounds());const n={on:!1,t:0};this.stream=n,Xt.create({trigger:'[data-section="infrastructure"]',start:"top 70%",end:"bottom 30%",onEnter:()=>{n.on=!0,n.t=3},onEnterBack:()=>{n.on=!0,n.t=1.5}}),tt.updaters.add((i,s)=>this.update(i,s))}computeBounds(){const t=tt.camera,e=2*this.depth*Math.tan(ln.degToRad(t.fov)/2);this.bounds={w:e*t.aspect,h:e}}burst(t=60,e=0,n=-.6,i=1){this.computeBounds();const{w:s,h:o}=this.bounds;for(let a=0;a<t&&this.count<this.cap;a++){const l=this.count++;this.px[l]=e*s/2+(Math.random()-.5)*.4,this.py[l]=n*o/2,this.pz[l]=(Math.random()-.5)*1.5;const c=(Math.random()-.5)*Math.PI*.8,h=(4+Math.random()*6)*i;this.vx[l]=Math.sin(c)*h,this.vy[l]=Math.cos(c)*h*1.3,this.vz[l]=(Math.random()-.5)*2,this.maxLife[l]=this.life[l]=2.2+Math.random()*2.2,this.aSize.array[l]=.35+Math.random()*.45,this.aSeed.array[l]=Math.random()}this.aSeed.needsUpdate=!0}update(t,e){if(this.mat.uniforms.uTime.value=e,this.stream.on&&(this.stream.t-=t,this.stream.t<=0?this.stream.on=!1:Math.random()<.9&&this.burst(tt.isMobile?2:4,-.7+Math.sin(e*1.7)*.5,-.95,1.1)),this.count===0){this.geo.setDrawRange(0,0);return}const{w:n,h:i}=this.bounds,s=-i/2+.2,o=n/2-.2,a=12.5,l=.62,c=.995,h=this.aPos.array,f=this.aLife.array;for(let u=0;u<this.count;u++){if(this.life[u]-=t,this.life[u]<=0){const d=--this.count;this.px[u]=this.px[d],this.py[u]=this.py[d],this.pz[u]=this.pz[d],this.vx[u]=this.vx[d],this.vy[u]=this.vy[d],this.vz[u]=this.vz[d],this.life[u]=this.life[d],this.maxLife[u]=this.maxLife[d],this.aSize.array[u]=this.aSize.array[d],this.aSeed.array[u]=this.aSeed.array[d],u--;continue}this.vy[u]-=a*t,this.vx[u]*=c,this.vz[u]*=c,this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t,this.py[u]<s&&(this.py[u]=s,this.vy[u]=-this.vy[u]*l,this.vx[u]*=.9,this.life[u]-=.15),this.px[u]>o&&(this.px[u]=o,this.vx[u]=-Math.abs(this.vx[u])*l),this.px[u]<-o&&(this.px[u]=-o,this.vx[u]=Math.abs(this.vx[u])*l),h[u*3]=this.px[u],h[u*3+1]=this.py[u],h[u*3+2]=this.pz[u],f[u]=this.life[u]/this.maxLife[u]}this.aPos.needsUpdate=!0,this.aLife.needsUpdate=!0,this.aSize.needsUpdate=!0,this.geo.setDrawRange(0,this.count)}}const kl=pe.COLORS;function fu(r,t,e=6){const n=new Ts({color:r,metalness:.55,roughness:.35,emissive:t,emissiveIntensity:0});return n.onBeforeCompile=i=>{i.uniforms.uPlate={value:new Nt(t)},i.uniforms.uScale={value:e},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObj = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vObj; uniform vec3 uPlate; uniform float uScale;
        // hexagonal tiling distance — returns 0 at cell centre, 1 at edges
        float hexDist(vec2 p){ p = abs(p); return max(dot(p, normalize(vec2(1.0, 1.732))), p.x); }
        float hexPattern(vec2 p){
          vec2 r = vec2(1.0, 1.732); vec2 h = r * 0.5;
          vec2 a = mod(p, r) - h; vec2 b = mod(p - h, r) - h;
          vec2 g = dot(a, a) < dot(b, b) ? a : b;
          return hexDist(g);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        // project the object onto its dominant axis plane for a stable tiling
        vec2 uvp = (abs(vObj.y) > 0.35) ? vObj.xz : vObj.xy;
        float hd = hexPattern(uvp * uScale);
        float plateMask = smoothstep(0.30, 0.34, hd);           // thin grout lines
        float dot_ = 1.0 - smoothstep(0.10, 0.16, hd);          // raised centre stud
        diffuseColor.rgb = mix(diffuseColor.rgb, uPlate, plateMask * 0.9 + dot_ * 0.6);`)},n}class jS{constructor({depth:t=11,caps:e=10,shells:n=8}={}){tt.isMobile||(this.depth=t,this.group=new Bi,tt.camera.add(this.group),this.group.position.set(0,0,-t),this.bounds=this.frustum(),this.families=[],this.buildCaps(e),this.buildShells(n),this.buildBoss(),this.ray=new Xf,this.hot=null,this.tmpM=new fe,this.tmpQ=new Zi,this.tmpP=new D,this.tmpS=new D,this.pipeLocal=new D,window.addEventListener("resize",()=>{this.bounds=this.frustum()}),tt.updaters.add((i,s)=>this.update(i,s)))}frustum(){const t=2*this.depth*Math.tan(ln.degToRad(tt.camera.fov)/2);return{w:t*tt.camera.aspect,h:t}}buildCaps(t){const e=new Wa(.22,.55,6,12);e.translate(0,-.25,0);const n=new mo(.58,20,12,0,Math.PI*2,0,Math.PI*.52);n.translate(0,.1,0);const i=new ir(.5,.07,8,24);i.rotateX(Math.PI/2),i.translate(0,.12,0);const s=Ya([e,n,i],!1),o=fu(kl.crimsonHi,kl.goldHi,5.5);this.addFamily("cap",s,o,t,{r:[3.2,5.2],speed:[.25,.5],scale:[.7,1.15]})}buildShells(t){const e=new ir(.55,.14,10,28),n=new ir(.34,.11,10,24);n.rotateX(Math.PI/2);const i=new mo(.18,6,4),s=Ya([e,n,i],!1),o=fu(2763827,kl.goldHi,9);this.addFamily("shell",s,o,t,{r:[2.4,4.4],speed:[.45,.9],scale:[.6,1]})}buildBoss(){const t=[new Ss(1.15,1.15,.32,32)];for(let s=0;s<16;s++){const o=s/16*Math.PI*2,a=new Ar(.42,.3,.26);a.translate(1.3,0,0),a.rotateY(o),t.push(a)}const e=new ir(.42,.1,8,24);e.rotateX(Math.PI/2),e.translate(0,.17,0),t.push(e);for(let s=0;s<6;s++){const o=s/6*Math.PI*2,a=new ir(.16,.05,6,16);a.rotateX(Math.PI/2),a.translate(Math.cos(o)*.78,.17,Math.sin(o)*.78),t.push(a)}const n=Ya(t,!1),i=fu(2763827,kl.goldHi,2.5);i.metalness=.9,i.roughness=.3,this.addFamily("boss",n,i,1,{r:[6.2,6.2],speed:[-.12,-.12],scale:[1,1]})}addFamily(t,e,n,i,s){if(!e){console.warn("[MBPU] obstacle family skipped (merge failed):",t);return}const o=new Na(e,n,i);o.instanceMatrix.setUsage(35048),o.castShadow=!1,o.frustumCulled=!1,this.group.add(o);const a=Array.from({length:i},(l,c)=>({angle:c/i*Math.PI*2+Math.random(),r:ln.lerp(s.r[0],s.r[1],Math.random()),speed:ln.lerp(s.speed[0],s.speed[1],Math.random())*(Math.random()<.5?1:-1),tilt:(Math.random()-.5)*1.2,scale:ln.lerp(s.scale[0],s.scale[1],Math.random()),spin:t==="boss"?new D(0,1.2,0):new D(Math.random(),Math.random(),Math.random()).multiplyScalar(.8),rot:t==="boss"?new Rn(1.1,0,.2):new Rn(Math.random()*6,Math.random()*6,0),free:!1,pos:new D,vel:new D,heat:0}));this.families.push({name:t,mesh:o,inst:a})}update(t,e){const n=tt.progress,i=ln.clamp(1-n/.16,0,1),s=ln.smoothstep(n,.78,1),o=Math.max(i,s*.7),a=1+s*.8,l=1+tt.threat*3+s*1.5;this.pipeLocal.copy(Pe.group.position),tt.camera.worldToLocal(this.pipeLocal);const c=i>0?this.pipeLocal.x:0,h=i>0?this.pipeLocal.y:0;this.ray.setFromCamera(tt.pointerTarget,tt.camera);const u=this.ray.intersectObjects(this.families.map(_=>_.mesh),!1)[0];if(u){const p=this.families.find(g=>g.mesh===u.object).inst[u.instanceId];if(!p.free&&(p.free=!0,p.heat=1,p.pos.set(c+Math.cos(p.angle)*p.r,h+Math.sin(p.angle)*p.r*.55,0),p.vel.set((Math.random()-.5)*16,6+Math.random()*8,0),p.spin.set(8+Math.random()*10,10+Math.random()*12,6+Math.random()*8),Gt.delayedCall(4.5+Math.random()*2,()=>{p.free=!1,p.spin.setScalar(.8)}),document.body.classList.add("is-hovering-obstacle"),navigator.vibrate))try{navigator.vibrate(15)}catch{}}else document.body.classList.remove("is-hovering-obstacle");const{w:d,h:m}=this.bounds;for(const _ of this.families){const{mesh:p,inst:g}=_;for(let y=0;y<g.length;y++){const v=g[y];if(v.rot.x+=v.spin.x*t,v.rot.y+=v.spin.y*t,v.rot.z+=v.spin.z*t,v.heat=Math.max(0,v.heat-t*.25),v.free){v.vel.y-=9*t,v.pos.addScaledVector(v.vel,t);const A=d/2-.6,b=m/2-.6;v.pos.x>A&&(v.pos.x=A,v.vel.x=-Math.abs(v.vel.x)*.92),v.pos.x<-A&&(v.pos.x=-A,v.vel.x=Math.abs(v.vel.x)*.92),v.pos.y>b&&(v.pos.y=b,v.vel.y=-Math.abs(v.vel.y)*.92),v.pos.y<-b&&(v.pos.y=-b,v.vel.y=Math.abs(v.vel.y)*.85,v.vel.x*=.98),this.tmpP.copy(v.pos)}else{v.angle+=v.speed*l*t;const A=Math.sin(e*1.3+v.angle*3)*.3;this.tmpP.set(c+Math.cos(v.angle)*v.r*a,h+Math.sin(v.angle)*v.r*.55*a+A,Math.sin(v.angle*2)*1.2*v.tilt)}const M=v.scale*o*(1+v.heat*.35);this.tmpQ.setFromEuler(v.rot),this.tmpS.setScalar(Math.max(M,1e-4)),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),p.setMatrixAt(y,this.tmpM)}p.instanceMatrix.needsUpdate=!0,p.material.emissiveIntensity=.15+tt.threat*.8+(_.inst.some(y=>y.heat>0)?.5:0),p.visible=o>.001}}}/*!
 * CustomEase 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On,Pm,Lm=function(){return On||typeof window<"u"&&(On=window.gsap)&&On.registerPlugin&&On},Dm=function(){On=Lm(),On?(On.registerEase("_CE",Js.create),Pm=1):console.warn("Please gsap.registerPlugin(CustomEase)")},QS=1e20,Gl=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},t1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,e1=/[cLlsSaAhHvVtTqQ]/g,n1=function(t){var e=t.length,n=QS,i;for(i=1;i<e;i+=6)+t[i]<n&&(n=+t[i]);return n},i1=function(t,e,n){!n&&n!==0&&(n=Math.max(+t[t.length-1],+t[1]));var i=+t[0]*-1,s=-n,o=t.length,a=1/(+t[o-2]+i),l=-e||(Math.abs(+t[o-1]-+t[1])<.01*(+t[o-2]-+t[0])?n1(t)+s:+t[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)t[c]=(+t[c]+i)*a,t[c+1]=(+t[c+1]+s)*l},r1=function r(t,e,n,i,s,o,a,l,c,h,f){var u=(t+n)/2,d=(e+i)/2,m=(n+s)/2,_=(i+o)/2,p=(s+a)/2,g=(o+l)/2,y=(u+m)/2,v=(d+_)/2,M=(m+p)/2,A=(_+g)/2,b=(y+M)/2,S=(v+A)/2,C=a-t,P=l-e,x=Math.abs((n-a)*P-(i-l)*C),E=Math.abs((s-a)*P-(o-l)*C),U;return h||(h=[{x:t,y:e},{x:a,y:l}],f=1),h.splice(f||h.length-1,0,{x:b,y:S}),(x+E)*(x+E)>c*(C*C+P*P)&&(U=h.length,r(t,e,u,d,y,v,b,S,c,h,f),r(b,S,M,A,p,g,a,l,c,h,f+1+(h.length-U))),h},Js=function(){function r(e,n,i){Pm||Dm(),this.id=e,this.setData(n,i)}var t=r.prototype;return t.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(t1),o=1,a=[],l=[],c=i.precision||1,h=c<=1,f,u,d,m,_,p,g,y,v;if(this.data=n,(e1.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=Jo(n)[0]),f=s.length,f===4)s.unshift(0,0),s.push(1,1),f=8;else if((f-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[f-2]!=1)&&i1(s,i.height,i.originY),this.segment=s,m=2;m<f;m+=6)u={x:+s[m-2],y:+s[m-1]},d={x:+s[m+4],y:+s[m+5]},a.push(u,d),r1(u.x,u.y,+s[m],+s[m+1],+s[m+2],+s[m+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(f=a.length,m=0;m<f;m++)g=a[m],y=a[m-1]||g,(g.x>y.x||y.y!==g.y&&y.x===g.x||g===y)&&g.x<=1?(y.cx=g.x-y.x,y.cy=g.y-y.y,y.n=g,y.nx=g.x,h&&m>1&&Math.abs(y.cy/y.cx-a[m-2].cy/a[m-2].cx)>2&&(h=0),y.cx<o&&(y.cx?o=y.cx:(y.cx=.001,m===f-1&&(y.x-=.001,o=Math.min(o,.001),h=0)))):(a.splice(m--,1),f--);if(f=1/o+1|0,_=1/f,p=0,g=a[0],h){for(m=0;m<f;m++)v=m*_,g.nx<v&&(g=a[++p]),u=g.y+(v-g.x)/g.cx*g.cy,l[m]={x:v,cx:_,y:u,cy:0,nx:9},m&&(l[m-1].cy=u-l[m-1].y);p=a[a.length-1],l[f-1].cy=p.y-u,l[f-1].cx=p.x-l[l.length-1].x}else{for(m=0;m<f;m++)g.nx<m*_&&(g=a[++p]),l[m]=g;p<a.length-1&&(l[m-1]=a[a.length-2])}return this.ease=function(M){var A=l[M*f|0]||l[f-1];return A.nx<M&&(A=A.n),A.y+(M-A.x)/A.cx*A.cy},this.ease.custom=this,this.id&&On&&On.registerEase(this.id,this.ease),this},t.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){On=n,Dm()},r.get=function(n){return On.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=On.utils.toArray(i.path)[0],h,f,u,d,m,_,p,g,y,v;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=On.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)h=iu(Ys([n.segment.slice(0)],s,0,0,-o,a,l));else{for(h=[a,l],p=Math.max(5,(i.precision||1)*200),d=1/p,p+=2,g=5/p,y=Gl(a+d*s),v=Gl(l+n(d)*-o),f=(v-l)/(y-a),u=2;u<p;u++)m=Gl(a+u*d*s),_=Gl(l+n(u*d)*-o),(Math.abs((_-v)/(m-y)-f)>g||u===p-1)&&(h.push(y,v),f=(_-v)/(m-y)),y=m,v=_;h="M"+h.join(",")}return c&&c.setAttribute("d",h),h},r}();Js.version="3.15.0",Js.headless=!0,Lm()&&On.registerPlugin(Js),Gt.registerPlugin(Xt,Js);const s1=Js.create("mbpuBounce","M0,0 C0.2,0 0.45,1 0.5,1 0.55,1 0.62,0.55 0.68,0.55 0.74,0.55 0.8,1 0.83,1 0.86,1 0.9,0.8 0.92,0.8 0.94,0.8 0.97,1 1,1"),o1=`
<svg viewBox="0 0 64 64" aria-hidden="true">
  <g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round">
    <path d="M14 14 L50 50"/><path d="M50 14 L14 50"/>
  </g>
  <g fill="currentColor">
    <circle cx="11" cy="9" r="6"/><circle cx="9" cy="17" r="6"/>
    <circle cx="53" cy="9" r="6"/><circle cx="55" cy="17" r="6"/>
    <circle cx="11" cy="55" r="6"/><circle cx="9" cy="47" r="6"/>
    <circle cx="53" cy="55" r="6"/><circle cx="55" cy="47" r="6"/>
  </g>
</svg>`;class a1{constructor(t='[data-section="footer"]',e="MARIO BROS PLUMBING"){this.footer=document.querySelector(t),this.footer&&(this.buildGrid(e),this.buildTimeline(),tt.isMobile||this.buildDebris())}buildGrid(t){const e=document.createElement("div");e.className="cb-grid",e.setAttribute("aria-label",t),t.split(" ").forEach((s,o)=>{const a=document.createElement("div");a.className="cb-row",[...s].forEach(l=>{const c=document.createElement("div");c.className="cb-tile",c.innerHTML=`<span class="cb-glyph">${l}</span><span class="cb-bone">${o1}</span>`,a.appendChild(c)}),e.appendChild(a)});const i=this.footer.querySelector(".grid")||this.footer.firstElementChild;this.footer.insertBefore(e,i),this.grid=e,this.tiles=[...e.querySelectorAll(".cb-tile")]}buildTimeline(){const t=this.tiles,e=()=>window.innerHeight*.55;this.tl=Gt.timeline({paused:!0,scrollTrigger:{trigger:this.footer,start:"top 60%",onEnter:()=>this.tl.play(),onLeaveBack:()=>this.tl.reverse()}}),this.tl.to(t,{rotation:()=>Gt.utils.random(-3,3),y:-4,duration:.25,ease:"power2.in",stagger:{each:.012,from:"random"}}),t.forEach((n,i)=>{const s=.3+(t.length-i)*.03+Math.random()*.15;this.tl.add(()=>n.classList.toggle("is-bone",!this.tl.reversed()),s),this.tl.to(n,{y:e,rotation:()=>Gt.utils.random(-540,540),x:()=>Gt.utils.random(-80,80),duration:1.35,ease:s1},s),this.tl.to(n,{opacity:.25,duration:.6,ease:"power1.in"},s+1.3)}),this.tl.add(()=>{this.tl.reversed()||this.rain?.()},.3)}buildDebris(){this.depth=9,this.group=new Bi,tt.camera.add(this.group),this.group.position.set(0,0,-9);const e=new Wa(.06,.9,4,8),n=()=>new mo(.11,8,6),i=e.clone().rotateZ(Math.PI/4),s=e.clone().rotateZ(-Math.PI/4),o=[];[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([c,h])=>{o.push(n().translate(c*.4,h*.4+.08*c,0),n().translate(c*.4+.08*h,h*.4,0))});const a=Ya([i,s,...o],!1),l=new Ts({color:15131352,roughness:.55,metalness:.1,emissive:pe.COLORS.goldHi,emissiveIntensity:.08});this.n=tt.quality==="low"?40:90,this.mesh=new Na(a,l,this.n),this.mesh.instanceMatrix.setUsage(35048),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.group.add(this.mesh),this.bodies=Array.from({length:this.n},()=>({p:new D,v:new D,r:new Rn,w:new D,s:1,alive:!1})),this.m4=new fe,this.q=new Zi,this.sv=new D,tt.updaters.add(c=>this.integrate(c))}rain(){if(!this.bodies)return;const t=2*this.depth*Math.tan(ln.degToRad(tt.camera.fov)/2),e=t*tt.camera.aspect;this.bounds={w:e,h:t},this.mesh.visible=!0,this.bodies.forEach((n,i)=>{Gt.delayedCall(i*.025,()=>{n.alive=!0,n.s=.6+Math.random()*.8,n.p.set((Math.random()-.5)*e*.9,t/2+1+Math.random()*3,(Math.random()-.5)*2),n.v.set((Math.random()-.5)*3,-Math.random()*2,0),n.r.set(Math.random()*6,Math.random()*6,Math.random()*6),n.w.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12)})}),Gt.delayedCall(9,()=>{this.mesh.visible=!1,this.bodies.forEach(n=>n.alive=!1)})}integrate(t){if(!this.mesh?.visible)return;const e=-this.bounds.h/2+.5,n=this.bounds.w/2-.5;this.bodies.forEach((i,s)=>{if(!i.alive){this.m4.makeScale(0,0,0),this.mesh.setMatrixAt(s,this.m4);return}i.v.y-=14*t,i.p.addScaledVector(i.v,t),i.r.x+=i.w.x*t,i.r.y+=i.w.y*t,i.r.z+=i.w.z*t,i.p.y<e&&(i.p.y=e,i.v.y=-i.v.y*.42,i.v.x*=.8,i.w.multiplyScalar(.6),Math.abs(i.v.y)<.4&&(i.v.y=0)),i.p.x>n&&(i.p.x=n,i.v.x=-Math.abs(i.v.x)*.7),i.p.x<-n&&(i.p.x=-n,i.v.x=Math.abs(i.v.x)*.7),this.q.setFromEuler(i.r),this.sv.setScalar(i.s),this.m4.compose(i.p,this.q,this.sv),this.mesh.setMatrixAt(s,this.m4)}),this.mesh.instanceMatrix.needsUpdate=!0}}const l1=`
/* ── arcade shared ── */
body.is-hovering-obstacle { cursor: crosshair; }
.hw-svg text { paint-order: stroke; }

/* crossbone collapse grid */
.cb-grid { display: flex; flex-direction: column; gap: 10px; padding: 0 var(--gutter, 24px) 6vh; width: 100%; max-width: 2400px; margin: 0 auto; }
.cb-row { display: flex; gap: 8px; flex-wrap: wrap; }
.cb-tile { position: relative; width: clamp(34px, 6.2vw, 120px); aspect-ratio: 1; display: grid; place-items: center;
  border: 1.5px solid currentColor; font-weight: 900; font-size: clamp(18px, 4vw, 76px); line-height: 1; letter-spacing: -0.04em;
  will-change: transform; background: color-mix(in srgb, currentColor 6%, transparent); }
.cb-tile .cb-bone { display: none; width: 68%; color: var(--gold-hi, #f1cf7a); }
.cb-tile.is-bone { border-color: var(--gold-hi, #f1cf7a); background: color-mix(in srgb, var(--gold-hi, #f1cf7a) 10%, transparent); }
.cb-tile.is-bone .cb-glyph { display: none; }
.cb-tile.is-bone .cb-bone { display: block; }
.cb-tile .cb-bone svg { width: 100%; height: 100%; display: block; }

/* mobile sprites */
.sp-layer { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 2; }
.sp { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; pointer-events: auto; transform-origin: 0 0;
  animation: sp-orbit var(--dur, 9s) linear infinite; animation-delay: var(--delay, 0s); }
.sp > i { display: block; width: 100%; height: 100%; animation: sp-spin 3s linear infinite; }
.sp.is-hit > i { animation: sp-spinout 1.2s cubic-bezier(.2,.9,.3,1) 1; }
@keyframes sp-orbit { from { transform: rotate(0deg) translateX(var(--r, 120px)) rotate(0deg); } to { transform: rotate(360deg) translateX(var(--r, 120px)) rotate(-360deg); } }
@keyframes sp-spin { to { transform: rotate(360deg); } }
@keyframes sp-spinout { 0% { transform: rotate(0) scale(1); } 40% { transform: rotate(900deg) scale(1.5) translate(40px, -60px); } 100% { transform: rotate(1800deg) scale(1) translate(0, 0); } }
/* spore cap: dome + stem, hex grout via repeating gradient */
.sp-cap > i { background:
   radial-gradient(circle at 50% 42%, transparent 55%, rgba(0,0,0,.35) 56%),
   repeating-conic-gradient(from 0deg, var(--gold-hi,#f1cf7a) 0 8deg, transparent 8deg 60deg),
   radial-gradient(circle at 50% 40%, var(--crimson-hi,#c8162a) 0 48%, transparent 49%),
   linear-gradient(var(--chrome,#e6e2d8), var(--chrome,#e6e2d8)) 50% 100% / 34% 50% no-repeat;
   border-radius: 50% 50% 40% 40%; }
/* gyro ring */
.sp-ring > i { border: 6px solid var(--gold-hi,#f1cf7a); border-radius: 50%; box-shadow: inset 0 0 0 6px #2a2c33, inset 0 0 0 9px var(--gold-hi,#f1cf7a); }
/* boss cog */
.sp-cog > i { background: conic-gradient(from 0deg, #2a2c33 0 18deg, var(--crimson-hi,#c8162a) 18deg 26deg, #2a2c33 26deg 44deg, var(--crimson-hi,#c8162a) 44deg 52deg, #2a2c33 52deg 70deg, var(--crimson-hi,#c8162a) 70deg 78deg, #2a2c33 78deg 96deg, var(--crimson-hi,#c8162a) 96deg 104deg, #2a2c33 104deg 122deg, var(--crimson-hi,#c8162a) 122deg 130deg, #2a2c33 130deg 148deg, var(--crimson-hi,#c8162a) 148deg 156deg, #2a2c33 156deg 174deg, var(--crimson-hi,#c8162a) 174deg 182deg, #2a2c33 182deg 200deg, var(--crimson-hi,#c8162a) 200deg 208deg, #2a2c33 208deg 226deg, var(--crimson-hi,#c8162a) 226deg 234deg, #2a2c33 234deg 252deg, var(--crimson-hi,#c8162a) 252deg 260deg, #2a2c33 260deg 278deg, var(--crimson-hi,#c8162a) 278deg 286deg, #2a2c33 286deg 304deg, var(--crimson-hi,#c8162a) 304deg 312deg, #2a2c33 312deg 330deg, var(--crimson-hi,#c8162a) 330deg 338deg, #2a2c33 338deg 360deg);
   border-radius: 50%; width: 80px; height: 80px; margin: -17px; box-shadow: inset 0 0 0 10px #0b0b0d, inset 0 0 0 14px var(--crimson-hi,#c8162a); }
`;function c1(){if(document.getElementById("mbpu-arcade-css"))return;const r=document.createElement("style");r.id="mbpu-arcade-css",r.textContent=l1,document.head.appendChild(r)}function h1(r='[data-section="hero"]'){var i;if(!tt.isMobile)return;const t=document.querySelector(r);if(!t)return;(i=t.style).position||(i.position="relative");const e=document.createElement("div");e.className="sp-layer",[["sp-cap",150,11,0],["sp-cap",190,14,-4],["sp-ring",120,8,-2],["sp-ring",170,10,-7],["sp-cog",215,26,-9]].forEach(([s,o,a,l])=>{const c=document.createElement("div");c.className=`sp ${s}`,c.style.setProperty("--r",o+"px"),c.style.setProperty("--dur",a+"s"),c.style.setProperty("--delay",l+"s"),c.innerHTML="<i></i>",c.addEventListener("pointerdown",()=>{if(c.classList.remove("is-hit"),c.offsetWidth,c.classList.add("is-hit"),navigator.vibrate)try{navigator.vibrate([10,20,10])}catch{}},{passive:!0}),e.appendChild(c)}),t.appendChild(e)}function u1({hologram:r}={}){c1();const t=[new Rm('[data-section="dive"]',{seed:2}),new Rm('[data-section="blueprint"]',{seed:4,anchorSelector:"h2, .section-eyebrow, .blueprint-stage"})],e=new JS({capacity:900,depth:7}),n=new jS({depth:11,caps:10,shells:8});h1('[data-section="hero"]');const i=new a1('[data-section="footer"]',"MARIO BROS PLUMBING");document.getElementById("btn-clear")?.addEventListener("click",()=>{const a=document.getElementById("blueprint-stage")?.getBoundingClientRect(),l=a?(a.left+a.width/2)/innerWidth*2-1:0,c=a?-((a.top+a.height)/innerHeight*2-1):-.6;e.burst(tt.isMobile?60:140,l,c,1.4)});let s=-1;return document.getElementById("quote-slider")?.addEventListener("input",a=>{const l=Math.floor(Number(a.target.value)/20);l!==s&&s!==-1&&e.burst(20+l*15,.1,-.9,.8+l*.25),s=l}),new MutationObserver(()=>{if(!n.families)return;const a=document.body.classList.contains("is-hovering-pipe");n.families.forEach(l=>Gt.to(l.mesh.material,{emissiveIntensity:a?1.2:.15,duration:.4}))}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),{highways:t,fire:e,obstacles:n,collapse:i}}async function du(){const r=document.getElementById("canvas-container");if(!r){console.error('[MBPU] #canvas-container not found — add <div id="canvas-container"></div>');return}window.matchMedia("(prefers-reduced-motion: reduce)").matches&&document.documentElement.classList.add("reduce-motion"),ey(r);const e=Promise.all([bM()]).then(()=>(CM(),rS(),new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s)))));lS(e),cS(),hS(),uS();const n=new dS("blueprint-stage");fS(()=>n.triggerPressureBlast?.());let i=null;e.then(()=>{i=u1({hologram:n}),window.MBPU.arcade=i}),window.MBPU={state:tt,hologram:n}}return document.readyState==="loading"?document.addEventListener("DOMContentLoaded",du):du(),Di.boot=du,Object.defineProperty(Di,Symbol.toStringTag,{value:"Module"}),Di}({});
