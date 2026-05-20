(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const tn=()=>{};var $e={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let a=t.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},nn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const a=t[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=t[n++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=t[n++],s=t[n++],c=t[n++],l=((a&7)<<18|(o&63)<<12|(s&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|s&63)}}return e.join("")},kt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<t.length;a+=3){const o=t[a],s=a+1<t.length,c=s?t[a+1]:0,l=a+2<t.length,f=l?t[a+2]:0,A=o>>2,i=(o&3)<<4|c>>4;let d=(c&15)<<2|f>>6,m=f&63;l||(m=64,s||(d=64)),r.push(n[A],n[i],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_t(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<t.length;){const o=n[t.charAt(a++)],c=a<t.length?n[t.charAt(a)]:0;++a;const f=a<t.length?n[t.charAt(a)]:64;++a;const i=a<t.length?n[t.charAt(a)]:64;if(++a,o==null||c==null||f==null||i==null)throw new rn;const d=o<<2|c>>4;if(r.push(d),f!==64){const m=c<<4&240|f>>2;if(r.push(m),i!==64){const b=f<<6&192|i;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const an=function(t){const e=_t(t);return kt.encodeByteArray(e,!0)},Dt=function(t){return an(t).replace(/\./g,"")},on=function(t){try{return kt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=()=>sn().__FIREBASE_DEFAULTS__,ln=()=>{if(typeof process>"u"||typeof $e>"u")return;const t=$e.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&on(t[1]);return e&&JSON.parse(e)},un=()=>{try{return tn()||cn()||ln()||dn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fn=()=>{var t;return(t=un())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function mn(){try{return typeof indexedDB=="object"}catch{return!1}}function pn(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;e(((o=a.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="FirebaseError";class j extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gn,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},a=`${this.service}/${e}`,o=this.errors[e],s=o?bn(o,r):"Error",c=`${this.serviceName}: ${s} (${a}).`;return new j(a,c,r)}}function bn(t,e){return t.replace(yn,(n,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const yn=/\{\$([^}]+)}/g;function be(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const o=t[a],s=e[a];if(Oe(o)&&Oe(s)){if(!be(o,s))return!1}else if(o!==s)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function Oe(t){return t!==null&&typeof t=="object"}class ee{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(En(e))try{this.getOrInitializeService({instanceIdentifier:_})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=_){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_){return this.instances.has(e)}getOptions(e=_){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&s.resolve(a)}return a}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(r)??new Set;a.add(e),this.onInitCallbacks.set(r,a);const o=this.instances.get(r);return o&&e(o,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_){return this.component?this.component.multipleInstances?e:_:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vn(t){return t===_?void 0:t}function En(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const Cn={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},An=u.INFO,In={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},_n=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),a=In[e];if(a)console[a](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kn{constructor(e){this.name=e,this._logLevel=An,this._logHandler=_n,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const Dn=(t,e)=>e.some(n=>t instanceof n);let Re,Pe;function Tn(){return Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bn(){return Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bt=new WeakMap,ye=new WeakMap,Lt=new WeakMap,ie=new WeakMap,_e=new WeakMap;function Ln(t){const e=new Promise((n,r)=>{const a=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(I(t.result)),a()},s=()=>{r(t.error),a()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Bt.set(n,t)}).catch(()=>{}),_e.set(e,t),e}function xn(t){if(ye.has(t))return;const e=new Promise((n,r)=>{const a=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),a()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ye.set(t,e)}let Se={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ye.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qn(t){Se=t(Se)}function Nn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ce(this),e,...n);return Lt.set(r,e.sort?e.sort():[e]),I(r)}:Bn().includes(t)?function(...e){return t.apply(ce(this),e),I(Bt.get(this))}:function(...e){return I(t.apply(ce(this),e))}}function Mn(t){return typeof t=="function"?Nn(t):(t instanceof IDBTransaction&&xn(t),Dn(t,Tn())?new Proxy(t,Se):t)}function I(t){if(t instanceof IDBRequest)return Ln(t);if(ie.has(t))return ie.get(t);const e=Mn(t);return e!==t&&(ie.set(t,e),_e.set(e,t)),e}const ce=t=>_e.get(t);function $n(t,e,{blocked:n,upgrade:r,blocking:a,terminated:o}={}){const s=indexedDB.open(t,e),c=I(s);return r&&s.addEventListener("upgradeneeded",l=>{r(I(s.result),l.oldVersion,l.newVersion,I(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),a&&l.addEventListener("versionchange",f=>a(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const On=["get","getKey","getAll","getAllKeys","count"],Rn=["put","add","delete","clear"],le=new Map;function He(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(le.get(e))return le.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,a=Rn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||On.includes(n)))return;const o=async function(s,...c){const l=this.transaction(s,a?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),a&&l.done]))[0]};return le.set(e,o),o}qn(t=>({...t,get:(e,n,r)=>He(e,n)||t.get(e,n,r),has:(e,n)=>!!He(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ve="@firebase/app",Fe="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new kn("@firebase/app"),Fn="@firebase/app-compat",jn="@firebase/analytics-compat",Un="@firebase/analytics",zn="@firebase/app-check-compat",Vn="@firebase/app-check",Wn="@firebase/auth",Gn="@firebase/auth-compat",Yn="@firebase/database",Kn="@firebase/data-connect",Jn="@firebase/database-compat",Qn="@firebase/functions",Xn="@firebase/functions-compat",Zn="@firebase/installations",er="@firebase/installations-compat",tr="@firebase/messaging",nr="@firebase/messaging-compat",rr="@firebase/performance",ar="@firebase/performance-compat",or="@firebase/remote-config",sr="@firebase/remote-config-compat",ir="@firebase/storage",cr="@firebase/storage-compat",lr="@firebase/firestore",dr="@firebase/ai",ur="@firebase/firestore-compat",fr="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]",mr={[ve]:"fire-core",[Fn]:"fire-core-compat",[Un]:"fire-analytics",[jn]:"fire-analytics-compat",[Vn]:"fire-app-check",[zn]:"fire-app-check-compat",[Wn]:"fire-auth",[Gn]:"fire-auth-compat",[Yn]:"fire-rtdb",[Kn]:"fire-data-connect",[Jn]:"fire-rtdb-compat",[Qn]:"fire-fn",[Xn]:"fire-fn-compat",[Zn]:"fire-iid",[er]:"fire-iid-compat",[tr]:"fire-fcm",[nr]:"fire-fcm-compat",[rr]:"fire-perf",[ar]:"fire-perf-compat",[or]:"fire-rc",[sr]:"fire-rc-compat",[ir]:"fire-gcs",[cr]:"fire-gcs-compat",[lr]:"fire-fst",[ur]:"fire-fst-compat",[dr]:"fire-vertex","fire-js":"fire-js",[fr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map,pr=new Map,we=new Map;function je(t,e){try{t.container.addComponent(e)}catch(n){C.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ce(t){const e=t.name;if(we.has(e))return C.debug(`There were multiple attempts to register component ${e}.`),!1;we.set(e,t);for(const n of Ee.values())je(n,t);for(const n of pr.values())je(n,t);return!0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},D=new Tt("app","Firebase",gr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}function yr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hr,automaticDataCollectionEnabled:!0,...e},a=r.name;if(typeof a!="string"||!a)throw D.create("bad-app-name",{appName:String(a)});if(n||(n=fn()),!n)throw D.create("no-options");const o=Ee.get(a);if(o){if(be(n,o.options)&&be(r,o.config))return o;throw D.create("duplicate-app",{appName:a})}const s=new wn(a);for(const l of we.values())s.addComponent(l);const c=new br(n,r,s);return Ee.set(a,c),c}function Q(t,e,n){let r=mr[t]??t;n&&(r+=`-${n}`);const a=r.match(/\s|\//),o=e.match(/\s|\//);if(a||o){const s=[`Unable to register library "${r}" with version "${e}":`];a&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),C.warn(s.join(" "));return}Ce(new ee(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="firebase-heartbeat-database",vr=1,F="firebase-heartbeat-store";let de=null;function xt(){return de||(de=$n(Sr,vr,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(F)}catch(n){console.warn(n)}}}}).catch(t=>{throw D.create("idb-open",{originalErrorMessage:t.message})})),de}async function Er(t){try{const n=(await xt()).transaction(F),r=await n.objectStore(F).get(qt(t));return await n.done,r}catch(e){if(e instanceof j)C.warn(e.message);else{const n=D.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});C.warn(n.message)}}}async function Ue(t,e){try{const r=(await xt()).transaction(F,"readwrite");await r.objectStore(F).put(e,qt(t)),await r.done}catch(n){if(n instanceof j)C.warn(n.message);else{const r=D.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});C.warn(r.message)}}}function qt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=1024,Cr=30;class Ar{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _r(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ze();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>Cr){const s=kr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){C.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ze(),{heartbeatsToSend:r,unsentEntries:a}=Ir(this._heartbeatsCache.heartbeats),o=Dt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return C.warn(n),""}}}function ze(){return new Date().toISOString().substring(0,10)}function Ir(t,e=wr){const n=[];let r=t.slice();for(const a of t){const o=n.find(s=>s.agent===a.agent);if(o){if(o.dates.push(a.date),Ve(n)>e){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ve(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _r{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mn()?pn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Er(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ue(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ue(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ve(t){return Dt(JSON.stringify({version:2,heartbeats:t})).length}function kr(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){Ce(new ee("platform-logger",e=>new Pn(e),"PRIVATE")),Ce(new ee("heartbeat",e=>new Ar(e),"PRIVATE")),Q(ve,Fe,t),Q(ve,Fe,"esm2020"),Q("fire-js","")}Dr("");var Tr="firebase",Br="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Q(Tr,Br,"app");const Lr={apiKey:"AIzaSyDbNhN10wjwCupwvH2hkmxhGd3SXQRdJKE",authDomain:"nanaamama.firebaseapp.com",projectId:"nanaamama",storageBucket:"nanaamama.firebasestorage.app",messagingSenderId:"418491897806",appId:"1:418491897806:web:b28572c85c3df9c057bd9f"};yr(Lr);const G=document.querySelector(".menu-toggle"),k=document.querySelector(".site-nav"),te=document.querySelector(".basket-toggle"),w=document.querySelector(".basket-panel"),We=document.querySelector(".basket-close"),q=document.querySelector("[data-basket-items]"),N=document.querySelector("[data-cart-page-items]"),T=document.querySelector("[data-cart-page-summary]"),Ge=document.querySelector("[data-basket-count]"),Ye=document.querySelector("[data-favorites-count]"),Ke=document.querySelector("[data-basket-subtotal]"),Je=document.querySelector("[data-basket-shipping]"),Qe=document.querySelector("[data-basket-total]"),Y=document.querySelector("[data-free-shipping-message]"),B=document.querySelector("[data-checkout-start]");var At;const M=(At=document.querySelector("[data-checkout-close]"))==null?void 0:At.closest(".checkout-panel"),Xe=document.querySelector("[data-checkout-close]"),ue=document.querySelector("[data-shipping-form]"),L=document.querySelector("[data-shipping-message]");var It;const $=(It=document.querySelector("[data-review-items]"))==null?void 0:It.closest(".checkout-panel"),Ze=document.querySelector("[data-review-close]");document.querySelector("[data-review-items]");document.querySelector("[data-review-shipping]");document.querySelector("[data-review-subtotal]");document.querySelector("[data-review-shipping-cost]");document.querySelector("[data-review-total]");const S=document.querySelector("[data-payment-start]"),x=document.querySelector("[data-payment-message]"),R=document.querySelector("[data-contact-brief-form]"),g=document.querySelector("[data-contact-brief-message]"),K=document.querySelector("[data-contact-order-success]"),et=document.querySelector("[data-contact-order-reference]"),ne=document.querySelector("[data-contact-deposit-link]"),tt=document.querySelectorAll("[data-return-previous]"),nt=document.querySelector("[data-checkout-items]"),rt=document.querySelector("[data-checkout-subtotal]"),at=document.querySelector("[data-checkout-shipping]"),ot=document.querySelector("[data-checkout-total]"),J=document.querySelector("[data-checkout-form]"),P=document.querySelector("[data-checkout-message]"),st=document.querySelector("[data-favorites-auth-card]"),it=document.querySelector("[data-favorites-board]"),fe=document.querySelector("[data-favorites-grid]"),ct=document.querySelector("[data-favorites-empty]"),lt=document.querySelector("[data-favorites-greeting]"),Nt=document.querySelectorAll("[data-work-category]"),v=document.querySelector("[data-work-lightbox]"),he=document.querySelector("[data-work-lightbox-image]"),dt=document.querySelector("[data-work-lightbox-title]"),ut=document.querySelector("[data-work-lightbox-category]"),ft=document.querySelector("[data-work-lightbox-count]"),E=document.querySelector("[data-collection-carousel]"),me=document.querySelector("[data-collection-carousel-image]"),ht=document.querySelector("[data-collection-carousel-title]"),mt=document.querySelector("[data-collection-carousel-category]"),pt=document.querySelector("[data-collection-carousel-caption]"),gt=document.querySelector("[data-collection-carousel-count]"),bt=document.querySelector("[data-collection-carousel-strip]"),yt=document.querySelectorAll("[data-upcoming-event]"),pe=document.querySelector("[data-upcoming-empty]"),St=document.querySelector("[data-cart-order-reference-card]"),vt=document.querySelector("[data-cart-order-reference]"),xr=7,X=75,qr="https://us-central1-nanaamama.cloudfunctions.net/sendNanasMamaEmail",Et="https://square.link/u/8Ps1cUHZ",Nr="https://square.link/u/vBOFopQD",ge="Unable to send your message right now. Please email Nanasmamashea@gmail.com directly or try again in a moment.",Mt="nanasmama-cart",$t="nanasmama-favorites",Ot="nanasmama-previous-page",h=new Map;let Rt=null,ke="",Z=0,Pt="",H=0;const Ht={"self-care":{category:"Self-care",title:"Wellness Gift Sets",images:[{src:"./assets/gifts-home-page/gift-home-1-relaxing-shea.jpg",alt:"Relaxing Shea self-care gift product",caption:"Relaxing Shea for calm evening rituals and thoughtful care packages."},{src:"./assets/gifts-home-page/gift-home-2-shea-butter.jpg",alt:"Shea Butter self-care product",caption:"Organic Shea Butter as a simple, useful anchor for everyday wellness gifts."},{src:"./assets/gifts-home-page/gift-home-3-hair-shea.jpg",alt:"Hair Shea self-care product",caption:"Hair Shea for textured hair care, protective styles, and scalp comfort."},{src:"./assets/gifts-home-page/gift-home-4-clearing-lifestyle.jpg",alt:"Clearing Shea lifestyle product",caption:"Clearing Shea brings a focused skin-care option into the gift mix."},{src:"./assets/gifts-home-page/gift-home-5-black-soap.webp",alt:"African Black Soap self-care product",caption:"African Black Soap rounds out cleansing and moisture routines."},{src:"./assets/gifts-home-page/gift-home-6-hair-lifestyle.jpg",alt:"Hair care lifestyle self-care product",caption:"Lifestyle product shots help recipients imagine the full self-care routine."}]},wedding:{category:"Wedding",title:"Wedding & Bridal Gifts",images:[{src:"./assets/custom-gifting/hero/pink-wedding-gift-hamper.jpg",alt:"Pink floral wedding gift hamper",caption:"A soft floral hamper direction for bridal parties and wedding thank-you gifts."},{src:"./assets/custom-gifting/collections/pink-floral-wedding-hamper.jpg",alt:"Pink floral wedding hamper collection",caption:"Curated wedding packaging with romantic colors and layered finishing."},{src:"./assets/custom-gifting/gallery/outdoor-pink-tulle-wide.jpg",alt:"Outdoor pink tulle wedding gift basket",caption:"Outdoor styling gives wedding gifts a bright, keepsake-ready look."},{src:"./assets/custom-gifting/gallery/pink-tulle-outdoor-detail.jpg",alt:"Pink tulle wedding gift detail",caption:"Close-up ribbon and tulle details make the presentation feel personal."},{src:"./assets/custom-gifting/hero/outdoor-butterfly-gift-box.jpg",alt:"Outdoor butterfly gift box",caption:"Butterfly accents add a graceful finish for special-occasion gifting."}]},business:{category:"Business",title:"Client & Team Gifts",images:[{src:"./assets/custom-gifting/packaging/gold-butterfly-package-detail.jpg",alt:"Gold butterfly custom packaging detail",caption:"Brand-forward packaging details for events, clients, and campaign gifts."},{src:"./assets/custom-gifting/packaging/green-bow-butterfly-detail.jpg",alt:"Green bow custom packaging detail",caption:"Green ribbon and butterfly styling creates a refined client gift direction."},{src:"./assets/custom-gifting/packaging/wrapped-basket-tulle-detail.jpg",alt:"Wrapped custom gift basket with tulle",caption:"Wrapped baskets can support welcome boxes, event gifts, and team surprises."},{src:"./assets/custom-gifting/collections/yellow-bee-floral-basket.jpg",alt:"Yellow custom gifting basket",caption:"Bright custom baskets help business gifting feel warm rather than generic."},{src:"./assets/custom-gifting/source-sheets/batch-aa.jpg",alt:"Custom packaging batch reference sheet",caption:"Batch views show how larger custom orders can still feel consistent."},{src:"./assets/custom-gifting/source-sheets/batch-ad.jpg",alt:"Custom packaging source sheet",caption:"Reference sheets help plan a polished series of client or team gifts."}]}};G&&k&&(G.addEventListener("click",()=>{const t=k.classList.toggle("is-open");G.setAttribute("aria-expanded",String(t))}),k.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{k.classList.remove("is-open"),G.setAttribute("aria-expanded","false")})}));const Mr=()=>{if(!k)return;const t=window.location.pathname.split("/").pop()||"index.html",e=window.location.hash;k.querySelectorAll("a[aria-current='page']").forEach(r=>{r.removeAttribute("aria-current")});let n=null;k.querySelectorAll("a[href]").forEach(r=>{if(!(r instanceof HTMLAnchorElement))return;const a=r.pathname.split("/").pop()||"index.html",o=r.hash;(e&&o&&e===o&&t===a||!n&&t===a&&!o)&&(n=r)}),n==null||n.setAttribute("aria-current","page")};Mr();const p=t=>`$${t.toFixed(2)}`;let wt=0;const $r=t=>{let e=document.querySelector("[data-cart-toast]");e||(e=document.createElement("div"),e.className="cart-toast",e.setAttribute("data-cart-toast",""),e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),document.body.appendChild(e)),e.textContent=t,e.classList.add("is-visible"),window.clearTimeout(wt),wt=window.setTimeout(()=>{e.classList.remove("is-visible")},3200)},De=()=>{const t=new Date,e=[t.getFullYear(),String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0")].join(""),n=Math.random().toString(36).slice(2,6).toUpperCase();return`NM-${e}-${n}`},Ft=()=>{try{const t=`${window.location.pathname}${window.location.search}${window.location.hash}`;window.localStorage.setItem(Ot,t||"/")}catch{}},jt=t=>{ke=t,vt&&(vt.textContent=t),St&&(St.hidden=!1)},Or=()=>{if(!yt.length)return;const t=new Date;t.setHours(0,0,0,0);let e=0;yt.forEach(n=>{const r=n.getAttribute("data-event-date"),a=r?new Date(`${r}T00:00:00`):null,o=a instanceof Date&&!Number.isNaN(a.getTime())&&a<t;n.toggleAttribute("hidden",o),o||(e+=1)}),pe==null||pe.toggleAttribute("hidden",e>0)},Ut=t=>{try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):[]}catch{return[]}},zt=(t,e)=>{window.localStorage.setItem(t,JSON.stringify(e))},U=()=>Ut($t),Te=()=>{Ye&&(Ye.textContent=String(U().length))},Vt=t=>{zt($t,t)},Rr=()=>{Ut(Mt).forEach(t=>{t!=null&&t.id&&(t!=null&&t.name)&&Number.isFinite(Number(t.price))&&Number.isFinite(Number(t.quantity))&&h.set(t.id,{id:t.id,name:t.name,price:Number(t.price),quantity:Math.max(1,Number(t.quantity)),image:t.image??"",imageAlt:t.imageAlt??t.name})})},Be=()=>{zt(Mt,Array.from(h.values()))},Wt=t=>{const e=t.querySelector("[data-buy-now]");if(!(e instanceof HTMLElement))return;const n=t.querySelector("[data-product-variant].is-selected");if(!n)return;const r=n==null?void 0:n.getAttribute("data-square-payment-link");r?(e.textContent="Buy Now",e.setAttribute("data-square-payment-link",r)):(e.textContent="Buy Now",e.removeAttribute("data-square-payment-link"))},Ae=t=>{var m,b,y,O;const e=t.querySelector("[data-product-variant].is-selected"),n=e==null?void 0:e.getAttribute("data-variant-id"),r=e==null?void 0:e.getAttribute("data-variant-label"),a=Number(e==null?void 0:e.getAttribute("data-variant-price")),o=t.dataset.productId,s=t.dataset.productName,c=n??o,l=r&&s?`${s} ${r}`:s,f=Number.isNaN(a)?Number(t.dataset.productPrice):a,A=((m=t.querySelector("img"))==null?void 0:m.getAttribute("src"))??"",i=((b=t.querySelector("img"))==null?void 0:b.getAttribute("alt"))??l??"",d=((O=(y=t.querySelector(".product-summary"))==null?void 0:y.textContent)==null?void 0:O.trim())??"";return!c||!l||Number.isNaN(f)?null:{id:c,name:l,price:f,image:A,imageAlt:i,summary:d}},Ct=t=>{var n;const e=Number((n=t.querySelector("[data-quantity-value]"))==null?void 0:n.textContent);return!Number.isFinite(e)||e<1?1:Math.min(e,99)},Gt=t=>U().some(e=>e.id===t),z=()=>{document.querySelectorAll(".favorite-button").forEach(t=>{const e=t.closest(".product-card"),n=e?Ae(e):null,r=n==null?void 0:n.id,a=!!r&&Gt(r);if(t.classList.toggle("is-active",a),t.textContent=a?"♥":"♡",r&&(n!=null&&n.name)){const o=a?"Saved in":"Add";t.setAttribute("aria-label",`${o} ${n.name} ${a?"favorites":"to favorites"}`)}})},Pr=t=>{const e=U();e.some(n=>n.id===t.id)||(e.unshift(t),Vt(e)),Te(),z()},Ie=t=>{const e=U().filter(n=>n.id!==t);Vt(e),Te(),z(),Qt()},Le=t=>{v&&(v.hidden=!t,document.body.classList.toggle("modal-open",t))},xe=t=>{E&&(E.hidden=!t,document.body.classList.toggle("modal-open",t))},Yt=()=>Array.from(Nt).filter(t=>!t.hidden),Hr=t=>{var a,o,s,c;const e=t.querySelector("img"),n=((o=(a=t.querySelector("h3"))==null?void 0:a.textContent)==null?void 0:o.trim())||"Project detail",r=((c=(s=t.querySelector("span"))==null?void 0:s.textContent)==null?void 0:c.trim())||"Project image";return e?{src:e.getAttribute("src")??"",alt:e.getAttribute("alt")??n,title:n,category:r}:null},Kt=t=>{const e=Yt();if(!e.length||!he)return;Z=(t+e.length)%e.length;const n=Hr(e[Z]);n&&(he.setAttribute("src",n.src),he.setAttribute("alt",n.alt),dt&&(dt.textContent=n.title),ut&&(ut.textContent=n.category),ft&&(ft.textContent=`${Z+1} of ${e.length}`))},re=t=>{!v||v.hidden||Kt(Z+t)},Jt=t=>{const n=Yt().indexOf(t);Kt(n>=0?n:0),Le(!0)},qe=t=>{const e=Ht[Pt];if(!e||!e.images.length||!me)return;H=(t+e.images.length)%e.images.length;const n=e.images[H];me.setAttribute("src",n.src),me.setAttribute("alt",n.alt),ht&&(ht.textContent=e.title),mt&&(mt.textContent=e.category),pt&&(pt.textContent=n.caption),gt&&(gt.textContent=`${H+1} of ${e.images.length}`),bt&&(bt.innerHTML=e.images.map((r,a)=>`
      <button class="collection-carousel-thumb${a===H?" is-active":""}" type="button" data-collection-carousel-thumb="${a}" aria-label="Show ${r.alt}">
        <img loading="lazy" decoding="async" src="${r.src}" alt="">
      </button>
    `).join(""))},ae=t=>{!E||E.hidden||qe(H+t)},Fr=t=>{Ht[t]&&(Pt=t,qe(0),xe(!0))},jr=t=>{if(Gt(t.id)){Ie(t.id);return}Pr(t)},Qt=()=>{if(!fe||!it||!ct)return;const t=U();st&&(st.hidden=!0),it.hidden=!1,lt&&(lt.textContent="Your favorites"),fe.innerHTML="",ct.hidden=t.length>0,t.forEach(e=>{const n=document.createElement("article");n.className="product-card saved-favorite-card",n.dataset.productId=e.id,n.dataset.productName=e.name,n.dataset.productPrice=String(e.price),n.innerHTML=`
      <button class="favorite-button is-active" type="button" aria-label="Saved in favorites">♥</button>
      <img loading="lazy" decoding="async" src="${e.image}" alt="${e.imageAlt}">
      <div class="product-copy">
        <p class="product-brand">Nana's Mama</p>
        <h3>${e.name}</h3>
        <p class="product-summary">${e.summary||"Saved for later from the Nana's Mama product collection."}</p>
        <strong class="product-price">${p(e.price)}</strong>
        <div class="favorites-card-actions">
          <button class="button add-to-basket add-to-bag" type="button">Add to basket</button>
          <button class="favorite-remove" type="button" data-remove-favorite="${e.id}">Remove from favorites</button>
        </div>
      </div>
    `,fe.appendChild(n)}),z()},oe=t=>{!w||!te||(w.hidden=!1,w.classList.toggle("is-open",t),te.setAttribute("aria-expanded",String(t)),t||window.setTimeout(()=>{w.hidden=!0},200))},Ne=t=>{M&&(M.hidden=!1,M.classList.toggle("is-open",t),t||window.setTimeout(()=>{M.hidden=!0},250))},Xt=t=>{$&&($.hidden=!1,$.classList.toggle("is-open",t),window.setTimeout(()=>{$.hidden=!0},250))};te&&te.addEventListener("click",()=>{const t=w==null?void 0:w.classList.contains("is-open");oe(!t)});We&&We.addEventListener("click",()=>{oe(!1)});const V=()=>{let t=0,e=0;h.forEach(r=>{t+=r.quantity,e+=r.price*r.quantity});const n=t>0&&e<X?xr:0;return{itemCount:t,subtotal:e,shipping:n,total:e+n}},Ur=t=>{const e=new FormData(t);return{email:String(e.get("email")??"").trim(),phone:String(e.get("phone")??"").trim(),firstName:String(e.get("firstName")??"").trim(),lastName:String(e.get("lastName")??"").trim(),street:String(e.get("street")??"").trim(),apartment:String(e.get("apartment")??"").trim(),city:String(e.get("city")??"").trim(),state:String(e.get("state")??"").trim(),zip:String(e.get("zip")??"").trim(),country:String(e.get("country")??"United States").trim()||"United States",shippingMethod:String(e.get("shippingMethod")??"standard"),paymentMethod:String(e.get("paymentMethod")??"secure-card")}},W=()=>{if(q)if(q.innerHTML="",h.size===0){const e=(w==null?void 0:w.getAttribute("aria-label"))==="Shopping cart"?"Your cart is empty.":"Your basket is empty.";q.innerHTML=`<p class="basket-empty">${e}</p>`}else h.forEach(e=>{const n=document.createElement("article");n.className="basket-item",n.innerHTML=`
          <div>
            <div class="basket-item-name">${e.name}</div>
            <div class="basket-item-price">${p(e.price)} each</div>
          </div>
          <div class="basket-item-controls">
            <button class="qty-button" type="button" data-action="decrease" data-product-id="${e.id}">-</button>
            <span>${e.quantity}</span>
            <button class="qty-button" type="button" data-action="increase" data-product-id="${e.id}">+</button>
            <button class="remove-item" type="button" data-action="remove" data-product-id="${e.id}">Remove</button>
          </div>
        `,q.appendChild(n)});const t=V();if(Ge&&(Ge.textContent=String(t.itemCount)),Ke&&(Ke.textContent=p(t.subtotal)),Je&&(Je.textContent=t.itemCount>0&&t.shipping===0?"Free":p(t.shipping)),Qe&&(Qe.textContent=p(t.total)),Y&&(t.itemCount===0?Y.textContent=`Add ${p(X)} for free shipping.`:t.subtotal>=X?Y.textContent="You unlocked free shipping.":Y.textContent=`Add ${p(X-t.subtotal)} more for free shipping.`),B instanceof HTMLButtonElement){const e=t.itemCount===0;B.disabled=e,B.setAttribute("aria-disabled",String(e))}else if(B instanceof HTMLAnchorElement){const e=t.itemCount===0;B.setAttribute("aria-disabled",String(e)),B.classList.toggle("is-disabled",e)}nt&&(nt.textContent=String(t.itemCount)),rt&&(rt.textContent=p(t.subtotal)),at&&(at.textContent=t.itemCount>0&&t.shipping===0?"Free":p(t.shipping)),ot&&(ot.textContent=p(t.total))},Zt=()=>{if(N){if(N.innerHTML="",h.size===0){N.innerHTML=`
      <div class="cart-empty-state">
        <h2>Your cart is empty</h2>
        <a class="button button-primary" href="./products.html">Continue Shopping</a>
      </div>
    `,T==null||T.setAttribute("hidden","");return}T==null||T.removeAttribute("hidden"),h.forEach(t=>{const e=document.createElement("article");e.className="cart-page-item",e.innerHTML=`
      <img loading="lazy" decoding="async" src="${t.image}" alt="${t.imageAlt}">
      <div>
        <h2>${t.name}</h2>
        <p>${p(t.price)} each</p>
      </div>
      <div class="basket-item-controls">
        <button class="qty-button" type="button" data-action="decrease" data-product-id="${t.id}">-</button>
        <span>${t.quantity}</span>
        <button class="qty-button" type="button" data-action="increase" data-product-id="${t.id}">+</button>
        <button class="remove-item" type="button" data-action="remove" data-product-id="${t.id}">Remove</button>
      </div>
    `,N.appendChild(e)})}};document.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const n=e.closest("[data-product-variant]");if(n instanceof HTMLElement){const i=n.closest(".product-card");if(!i)return;i.querySelectorAll("[data-product-variant]").forEach(se=>{const Me=se===n;se.classList.toggle("is-selected",Me),se.setAttribute("aria-pressed",String(Me))});const d=Number(n.getAttribute("data-variant-price")),m=i.querySelector("[data-product-price-display]");m&&!Number.isNaN(d)&&(m.textContent=p(d),i.dataset.productPrice=String(d));const b=i.dataset.productName,y=n.getAttribute("data-variant-label"),O=i.querySelector(".favorite-button");O&&b&&y&&O.setAttribute("aria-label",`Add ${b} ${y} to favorites`),Wt(i),z();return}const r=e.closest("[data-quantity-action]");if(r instanceof HTMLElement){const i=r.closest(".product-card"),d=i==null?void 0:i.querySelector("[data-quantity-value]");if(!i||!d)return;const m=Ct(i),y=r.getAttribute("data-quantity-action")==="decrease"?Math.max(1,m-1):Math.min(99,m+1);d.textContent=String(y);return}const a=e.closest(".add-to-basket, [data-buy-now]");if(a instanceof HTMLElement){const i=a.closest(".product-card");if(!i)return;const d=Ae(i),m=Ct(i);if(!d)return;const b=a.getAttribute("data-square-payment-link");if(b){window.open(b,"_blank","noopener,noreferrer");return}const y=h.get(d.id);y?y.quantity+=m:h.set(d.id,{id:d.id,name:d.name,price:d.price,quantity:m,image:d.image,imageAlt:d.imageAlt}),Be(),W(),$r(`${d.name} added to cart.`),a.hasAttribute("data-buy-now")&&(window.location.href="./cart.html");return}if(e.closest("[data-checkout-start]")instanceof HTMLElement){if(V().itemCount===0)return;oe(!1),Ne(!0);return}const s=e.closest(".favorite-button");if(s instanceof HTMLElement){const i=s.closest(".product-card");if(!i)return;const d=Ae(i);if(!d)return;if(window.location.pathname.endsWith("/favorites.html")||window.location.pathname.endsWith("favorites.html")){Ie(d.id);return}jr(d);return}const c=e.closest("[data-remove-favorite]");if(c instanceof HTMLElement){const i=c.getAttribute("data-remove-favorite");i&&Ie(i);return}if(e.closest("[data-collection-carousel-close]")){xe(!1);return}if(e.closest("[data-collection-carousel-prev]")){ae(-1);return}if(e.closest("[data-collection-carousel-next]")){ae(1);return}const l=e.closest("[data-collection-carousel-thumb]");if(l instanceof HTMLElement){const i=Number(l.getAttribute("data-collection-carousel-thumb"));Number.isNaN(i)||qe(i);return}const f=e.closest("[data-featured-collection]");if(f instanceof HTMLElement){const i=f.getAttribute("data-featured-collection");i&&Fr(i);return}if(e.closest("[data-work-lightbox-close]")){Le(!1);return}if(e.closest("[data-work-lightbox-prev]")){re(-1);return}if(e.closest("[data-work-lightbox-next]")){re(1);return}const A=e.closest(".work-gallery-card");if(A instanceof HTMLElement&&!A.hidden){Jt(A);return}});q&&q.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const n=e.dataset.productId,r=e.dataset.action;if(!n||!r||!h.has(n))return;const a=h.get(n);a&&(r==="increase"&&(a.quantity+=1),r==="decrease"&&(a.quantity-=1,a.quantity<=0&&h.delete(n)),r==="remove"&&h.delete(n),Be(),W())});N&&N.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const n=e.dataset.productId,r=e.dataset.action;if(!n||!r||!h.has(n))return;const a=h.get(n);a&&(r==="increase"&&(a.quantity+=1),r==="decrease"&&(a.quantity-=1,a.quantity<=0&&h.delete(n)),r==="remove"&&h.delete(n),Be(),W(),Zt())});Xe&&Xe.addEventListener("click",()=>{Ne(!1)});Ze&&Ze.addEventListener("click",()=>{Xt(!1)});ue&&ue.addEventListener("submit",t=>{var n;if(t.preventDefault(),V().itemCount===0){L&&(L.hidden=!1,L.textContent="Add at least one product to the cart before reviewing your order.");return}Rt=Ur(ue),jt(De()),L&&(L.hidden=!1,L.textContent=`Shipping details saved. Your order reference is ${ke}. Continue to payment.`),(n=document.querySelector("#payment"))==null||n.scrollIntoView({behavior:"smooth",block:"start"})});S&&S.addEventListener("click",t=>{const e=V();if(!Rt||e.itemCount===0){t.preventDefault(),x&&(x.hidden=!1,x.textContent="Review your cart and shipping details before payment.");return}ke||jt(De()),Ft(),S.setAttribute("aria-busy","true"),S.textContent="Opening Square checkout...",x&&(x.hidden=!1,x.textContent="Square checkout is opening in a new tab."),S instanceof HTMLAnchorElement?(S.href=Et,window.setTimeout(()=>{S.textContent="Pay for Cart Items",S.removeAttribute("aria-busy")},1200)):(window.open(Et,"_blank","noopener,noreferrer"),S.textContent="Pay for Cart Items",S.removeAttribute("aria-busy"))});ne&&ne.addEventListener("click",()=>{Ft()});if(tt.length){let t="";try{t=window.localStorage.getItem(Ot)||""}catch{t=""}tt.forEach(e=>{e instanceof HTMLAnchorElement&&t&&(e.href=t)})}R&&R.addEventListener("submit",async t=>{t.preventDefault();const e=R.querySelector("[type='submit']"),n=new FormData(R),r=De(),a={name:String(n.get("name")??"").trim(),phone:String(n.get("phone")??"").trim(),email:String(n.get("email")??"").trim(),requestType:String(n.get("requestType")??"").trim(),occasion:String(n.get("occasion")??"").trim(),budget:String(n.get("budget")??"").trim(),message:String(n.get("message")??"").trim(),orderReference:r};if(!a.name||!a.email||!a.message){g&&(g.hidden=!1,g.textContent="Please add your name, email, and message before sending.");return}e&&(e.setAttribute("aria-busy","true"),e.textContent="Sending..."),g&&(g.hidden=!0,g.textContent=""),K&&(K.hidden=!0);try{const o=await fetch(qr,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...a,subject:`Nana's Mama ${a.requestType||"Website"} Inquiry`})}),s=await o.json().catch(()=>({}));if(!o.ok||s.success===!1)throw new Error(s.error||ge);R.reset(),g&&(g.hidden=!1,g.textContent=`Thanks. Your gift brief has been sent. Order Reference: ${r}.`),et&&(et.textContent=r),ne instanceof HTMLAnchorElement&&(ne.href=Nr),K&&(K.hidden=!1)}catch(o){if(g){g.hidden=!1;const s=o.message||ge;g.textContent=s.includes("testing emails")?ge:s}}finally{e&&(e.removeAttribute("aria-busy"),e.textContent="Send Gift Brief")}});J&&P&&J.addEventListener("submit",t=>{t.preventDefault();const e=V();if(e.itemCount===0){P.hidden=!1,P.textContent="Add at least one product to the basket before checking out.";return}const r=new FormData(J).get("name");P.hidden=!1,P.textContent=`Thanks${r?`, ${r}`:""}. Your demo order for ${e.itemCount} item(s) has been placed for ${p(e.total)}.`,J.reset(),h.clear(),W(),oe(!1)});document.addEventListener("keydown",t=>{t.key==="Escape"&&M&&!M.hidden&&Ne(!1),t.key==="Escape"&&$&&!$.hidden&&Xt(!1),t.key==="Escape"&&v&&!v.hidden&&Le(!1),t.key==="Escape"&&E&&!E.hidden&&xe(!1),t.key==="ArrowLeft"&&v&&!v.hidden&&(t.preventDefault(),re(-1)),t.key==="ArrowRight"&&v&&!v.hidden&&(t.preventDefault(),re(1)),t.key==="ArrowLeft"&&E&&!E.hidden&&(t.preventDefault(),ae(-1)),t.key==="ArrowRight"&&E&&!E.hidden&&(t.preventDefault(),ae(1))});document.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",()=>{const e=t.closest(".faq-item"),n=e==null?void 0:e.querySelector(".faq-answer"),r=t.getAttribute("aria-expanded")==="true";document.querySelectorAll(".faq-question").forEach(a=>{a.setAttribute("aria-expanded","false")}),document.querySelectorAll(".faq-answer").forEach(a=>{a.hidden=!0}),t.setAttribute("aria-expanded",String(!r)),n&&(n.hidden=r)})});Nt.forEach(t=>{var n,r;t.setAttribute("tabindex","0"),t.setAttribute("role","button");const e=((r=(n=t.querySelector("h3"))==null?void 0:n.textContent)==null?void 0:r.trim())||"project image";t.setAttribute("aria-label",`Enlarge ${e}`),t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Jt(t))})});const en=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),en.unobserve(e.target))})},{threshold:.2});document.querySelectorAll(".value-card, .product-card, .category-card, .story-media, .story-copy, .faq-item, .page-intro-panel, .section-note, .section-intro, .work-gallery-card").forEach(t=>{t.classList.add("reveal"),en.observe(t)});Rr();Or();document.querySelectorAll(".product-card").forEach(Wt);W();Zt();Te();z();Qt();
