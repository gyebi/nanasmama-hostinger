(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const ta=()=>{};var $e={};/**
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
 */const It=function(t){const e=[];let a=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[a++]=r:r<2048?(e[a++]=r>>6|192,e[a++]=r&63|128):(r&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++n)&1023),e[a++]=r>>18|240,e[a++]=r>>12&63|128,e[a++]=r>>6&63|128,e[a++]=r&63|128):(e[a++]=r>>12|224,e[a++]=r>>6&63|128,e[a++]=r&63|128)}return e},aa=function(t){const e=[];let a=0,n=0;for(;a<t.length;){const r=t[a++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[a++];e[n++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[a++],s=t[a++],c=t[a++],l=((r&7)<<18|(o&63)<<12|(s&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const o=t[a++],s=t[a++];e[n++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},_t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<t.length;r+=3){const o=t[r],s=r+1<t.length,c=s?t[r+1]:0,l=r+2<t.length,f=l?t[r+2]:0,k=o>>2,i=(o&3)<<4|c>>4;let d=(c&15)<<2|f>>6,g=f&63;l||(g=64,s||(d=64)),n.push(a[k],a[i],a[d],a[g])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(It(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aa(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<t.length;){const o=a[t.charAt(r++)],c=r<t.length?a[t.charAt(r)]:0;++r;const f=r<t.length?a[t.charAt(r)]:64;++r;const i=r<t.length?a[t.charAt(r)]:64;if(++r,o==null||c==null||f==null||i==null)throw new na;const d=o<<2|c>>4;if(n.push(d),f!==64){const g=c<<4&240|f>>2;if(n.push(g),i!==64){const b=f<<6&192|i;n.push(b)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class na extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ra=function(t){const e=It(t);return _t.encodeByteArray(e,!0)},Dt=function(t){return ra(t).replace(/\./g,"")},oa=function(t){try{return _t.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ia=()=>sa().__FIREBASE_DEFAULTS__,ca=()=>{if(typeof process>"u"||typeof $e>"u")return;const t=$e.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},la=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oa(t[1]);return e&&JSON.parse(e)},da=()=>{try{return ta()||ia()||ca()||la()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ua=()=>{var t;return(t=da())==null?void 0:t.config};/**
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
 */class fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,n)=>{a?this.reject(a):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,n))}}}function ha(){try{return typeof indexedDB=="object"}catch{return!1}}function ga(){return new Promise((t,e)=>{try{let a=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),a||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{a=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(a){e(a)}})}/**
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
 */const ma="FirebaseError";class j extends Error{constructor(e,a,n){super(a),this.code=e,this.customData=n,this.name=ma,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(e,a,n){this.service=e,this.serviceName=a,this.errors=n}create(e,...a){const n=a[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?pa(o,n):"Error",c=`${this.serviceName}: ${s} (${r}).`;return new j(r,c,n)}}function pa(t,e){return t.replace(ba,(a,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const ba=/\{\$([^}]+)}/g;function be(t,e){if(t===e)return!0;const a=Object.keys(t),n=Object.keys(e);for(const r of a){if(!n.includes(r))return!1;const o=t[r],s=e[r];if(Oe(o)&&Oe(s)){if(!be(o,s))return!1}else if(o!==s)return!1}for(const r of n)if(!a.includes(r))return!1;return!0}function Oe(t){return t!==null&&typeof t=="object"}class ee{constructor(e,a,n){this.name=e,this.instanceFactory=a,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const I="[DEFAULT]";/**
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
 */class ya{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const n=new fa;if(this.instancesDeferred.set(a,n),this.isInitialized(a)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:a});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(va(e))try{this.getOrInitializeService({instanceIdentifier:I})}catch{}for(const[a,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(a);try{const o=this.getOrInitializeService({instanceIdentifier:r});n.resolve(o)}catch{}}}}clearInstance(e=I){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=I){return this.instances.has(e)}getOptions(e=I){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:a});for(const[o,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&s.resolve(r)}return r}onInit(e,a){const n=this.normalizeInstanceIdentifier(a),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const o=this.instances.get(n);return o&&e(o,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,a){const n=this.onInitCallbacks.get(a);if(n)for(const r of n)try{r(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Sa(e),options:a}),this.instances.set(e,n),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=I){return this.component?this.component.multipleInstances?e:I:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sa(t){return t===I?void 0:t}function va(t){return t.instantiationMode==="EAGER"}/**
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
 */class wa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new ya(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const Ea={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Ca=u.INFO,ka={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Aa=(t,e,...a)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),r=ka[e];if(r)console[r](`[${n}]  ${t.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ia{constructor(e){this.name=e,this._logLevel=Ca,this._logHandler=Aa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ea[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const _a=(t,e)=>e.some(a=>t instanceof a);let Pe,Re;function Da(){return Pe||(Pe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ba(){return Re||(Re=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tt=new WeakMap,ye=new WeakMap,xt=new WeakMap,ie=new WeakMap,Ie=new WeakMap;function Ta(t){const e=new Promise((a,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{a(A(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(a=>{a instanceof IDBCursor&&Tt.set(a,t)}).catch(()=>{}),Ie.set(e,t),e}function xa(t){if(ye.has(t))return;const e=new Promise((a,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{a(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ye.set(t,e)}let Se={get(t,e,a){if(t instanceof IDBTransaction){if(e==="done")return ye.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xt.get(t);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return A(t[e])},set(t,e,a){return t[e]=a,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function La(t){Se=t(Se)}function qa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const n=t.call(ce(this),e,...a);return xt.set(n,e.sort?e.sort():[e]),A(n)}:Ba().includes(t)?function(...e){return t.apply(ce(this),e),A(Tt.get(this))}:function(...e){return A(t.apply(ce(this),e))}}function Na(t){return typeof t=="function"?qa(t):(t instanceof IDBTransaction&&xa(t),_a(t,Da())?new Proxy(t,Se):t)}function A(t){if(t instanceof IDBRequest)return Ta(t);if(ie.has(t))return ie.get(t);const e=Na(t);return e!==t&&(ie.set(t,e),Ie.set(e,t)),e}const ce=t=>Ie.get(t);function Ma(t,e,{blocked:a,upgrade:n,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),c=A(s);return n&&s.addEventListener("upgradeneeded",l=>{n(A(s.result),l.oldVersion,l.newVersion,A(s.transaction),l)}),a&&s.addEventListener("blocked",l=>a(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const $a=["get","getKey","getAll","getAllKeys","count"],Oa=["put","add","delete","clear"],le=new Map;function He(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(le.get(e))return le.get(e);const a=e.replace(/FromIndex$/,""),n=e!==a,r=Oa.includes(a);if(!(a in(n?IDBIndex:IDBObjectStore).prototype)||!(r||$a.includes(a)))return;const o=async function(s,...c){const l=this.transaction(s,r?"readwrite":"readonly");let f=l.store;return n&&(f=f.index(c.shift())),(await Promise.all([f[a](...c),r&&l.done]))[0]};return le.set(e,o),o}La(t=>({...t,get:(e,a,n)=>He(e,a)||t.get(e,a,n),has:(e,a)=>!!He(e,a)||t.has(e,a)}));/**
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
 */class Pa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(Ra(a)){const n=a.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(a=>a).join(" ")}}function Ra(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ve="@firebase/app",Fe="0.14.11";/**
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
 */const C=new Ia("@firebase/app"),Ha="@firebase/app-compat",Fa="@firebase/analytics-compat",ja="@firebase/analytics",za="@firebase/app-check-compat",Ua="@firebase/app-check",Wa="@firebase/auth",Va="@firebase/auth-compat",Ga="@firebase/database",Ya="@firebase/data-connect",Ka="@firebase/database-compat",Ja="@firebase/functions",Qa="@firebase/functions-compat",Xa="@firebase/installations",Za="@firebase/installations-compat",en="@firebase/messaging",tn="@firebase/messaging-compat",an="@firebase/performance",nn="@firebase/performance-compat",rn="@firebase/remote-config",on="@firebase/remote-config-compat",sn="@firebase/storage",cn="@firebase/storage-compat",ln="@firebase/firestore",dn="@firebase/ai",un="@firebase/firestore-compat",fn="firebase";/**
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
 */const hn="[DEFAULT]",gn={[ve]:"fire-core",[Ha]:"fire-core-compat",[ja]:"fire-analytics",[Fa]:"fire-analytics-compat",[Ua]:"fire-app-check",[za]:"fire-app-check-compat",[Wa]:"fire-auth",[Va]:"fire-auth-compat",[Ga]:"fire-rtdb",[Ya]:"fire-data-connect",[Ka]:"fire-rtdb-compat",[Ja]:"fire-fn",[Qa]:"fire-fn-compat",[Xa]:"fire-iid",[Za]:"fire-iid-compat",[en]:"fire-fcm",[tn]:"fire-fcm-compat",[an]:"fire-perf",[nn]:"fire-perf-compat",[rn]:"fire-rc",[on]:"fire-rc-compat",[sn]:"fire-gcs",[cn]:"fire-gcs-compat",[ln]:"fire-fst",[un]:"fire-fst-compat",[dn]:"fire-vertex","fire-js":"fire-js",[fn]:"fire-js-all"};/**
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
 */const we=new Map,mn=new Map,Ee=new Map;function je(t,e){try{t.container.addComponent(e)}catch(a){C.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,a)}}function Ce(t){const e=t.name;if(Ee.has(e))return C.debug(`There were multiple attempts to register component ${e}.`),!1;Ee.set(e,t);for(const a of we.values())je(a,t);for(const a of mn.values())je(a,t);return!0}/**
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
 */const pn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},D=new Bt("app","Firebase",pn);/**
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
 */class bn{constructor(e,a,n){this._isDeleted=!1,this._options={...e},this._config={...a},this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}function yn(t,e={}){let a=t;typeof e!="object"&&(e={name:e});const n={name:hn,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw D.create("bad-app-name",{appName:String(r)});if(a||(a=ua()),!a)throw D.create("no-options");const o=we.get(r);if(o){if(be(a,o.options)&&be(n,o.config))return o;throw D.create("duplicate-app",{appName:r})}const s=new wa(r);for(const l of Ee.values())s.addComponent(l);const c=new bn(a,n,s);return we.set(r,c),c}function Q(t,e,a){let n=gn[t]??t;a&&(n+=`-${a}`);const r=n.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const s=[`Unable to register library "${n}" with version "${e}":`];r&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&o&&s.push("and"),o&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),C.warn(s.join(" "));return}Ce(new ee(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Sn="firebase-heartbeat-database",vn=1,F="firebase-heartbeat-store";let de=null;function Lt(){return de||(de=Ma(Sn,vn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(F)}catch(a){console.warn(a)}}}}).catch(t=>{throw D.create("idb-open",{originalErrorMessage:t.message})})),de}async function wn(t){try{const a=(await Lt()).transaction(F),n=await a.objectStore(F).get(qt(t));return await a.done,n}catch(e){if(e instanceof j)C.warn(e.message);else{const a=D.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});C.warn(a.message)}}}async function ze(t,e){try{const n=(await Lt()).transaction(F,"readwrite");await n.objectStore(F).put(e,qt(t)),await n.done}catch(a){if(a instanceof j)C.warn(a.message);else{const n=D.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});C.warn(n.message)}}}function qt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const En=1024,Cn=30;class kn{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new In(a),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,a;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ue();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)==null?void 0:a.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>Cn){const s=_n(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){C.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=Ue(),{heartbeatsToSend:n,unsentEntries:r}=An(this._heartbeatsCache.heartbeats),o=Dt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=a,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(a){return C.warn(a),""}}}function Ue(){return new Date().toISOString().substring(0,10)}function An(t,e=En){const a=[];let n=t.slice();for(const r of t){const o=a.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),We(a)>e){o.dates.pop();break}}else if(a.push({agent:r.agent,dates:[r.date]}),We(a)>e){a.pop();break}n=n.slice(1)}return{heartbeatsToSend:a,unsentEntries:n}}class In{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ha()?ga().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await wn(this.app);return a!=null&&a.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return ze(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return ze(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function We(t){return Dt(JSON.stringify({version:2,heartbeats:t})).length}function _n(t){if(t.length===0)return-1;let e=0,a=t[0].date;for(let n=1;n<t.length;n++)t[n].date<a&&(a=t[n].date,e=n);return e}/**
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
 */function Dn(t){Ce(new ee("platform-logger",e=>new Pa(e),"PRIVATE")),Ce(new ee("heartbeat",e=>new kn(e),"PRIVATE")),Q(ve,Fe,t),Q(ve,Fe,"esm2020"),Q("fire-js","")}Dn("");var Bn="firebase",Tn="12.12.1";/**
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
 */Q(Bn,Tn,"app");const xn={apiKey:"AIzaSyDbNhN10wjwCupwvH2hkmxhGd3SXQRdJKE",authDomain:"nanaamama.firebaseapp.com",projectId:"nanaamama",storageBucket:"nanaamama.firebasestorage.app",messagingSenderId:"418491897806",appId:"1:418491897806:web:b28572c85c3df9c057bd9f"};yn(xn);const G=document.querySelector(".menu-toggle"),_=document.querySelector(".site-nav"),te=document.querySelector(".basket-toggle"),E=document.querySelector(".basket-panel"),Ve=document.querySelector(".basket-close"),q=document.querySelector("[data-basket-items]"),N=document.querySelector("[data-cart-page-items]"),B=document.querySelector("[data-cart-page-summary]"),Ge=document.querySelector("[data-basket-count]"),Ye=document.querySelector("[data-favorites-count]"),Ke=document.querySelector("[data-basket-subtotal]"),Je=document.querySelector("[data-basket-shipping]"),Qe=document.querySelector("[data-basket-total]"),Y=document.querySelector("[data-free-shipping-message]"),T=document.querySelector("[data-checkout-start]");var kt;const M=(kt=document.querySelector("[data-checkout-close]"))==null?void 0:kt.closest(".checkout-panel"),Xe=document.querySelector("[data-checkout-close]"),ue=document.querySelector("[data-shipping-form]"),x=document.querySelector("[data-shipping-message]");var At;const $=(At=document.querySelector("[data-review-items]"))==null?void 0:At.closest(".checkout-panel"),Ze=document.querySelector("[data-review-close]");document.querySelector("[data-review-items]");document.querySelector("[data-review-shipping]");document.querySelector("[data-review-subtotal]");document.querySelector("[data-review-shipping-cost]");document.querySelector("[data-review-total]");const S=document.querySelector("[data-payment-start]"),L=document.querySelector("[data-payment-message]"),P=document.querySelector("[data-contact-brief-form]"),p=document.querySelector("[data-contact-brief-message]"),K=document.querySelector("[data-contact-order-success]"),et=document.querySelector("[data-contact-order-reference]"),ae=document.querySelector("[data-contact-deposit-link]"),tt=document.querySelectorAll("[data-return-previous]"),at=document.querySelector("[data-checkout-items]"),nt=document.querySelector("[data-checkout-subtotal]"),rt=document.querySelector("[data-checkout-shipping]"),ot=document.querySelector("[data-checkout-total]"),J=document.querySelector("[data-checkout-form]"),R=document.querySelector("[data-checkout-message]"),st=document.querySelector("[data-favorites-auth-card]"),it=document.querySelector("[data-favorites-board]"),fe=document.querySelector("[data-favorites-grid]"),ct=document.querySelector("[data-favorites-empty]"),lt=document.querySelector("[data-favorites-greeting]"),Nt=document.querySelectorAll("[data-work-category]"),v=document.querySelector("[data-work-lightbox]"),he=document.querySelector("[data-work-lightbox-image]"),dt=document.querySelector("[data-work-lightbox-title]"),ut=document.querySelector("[data-work-lightbox-category]"),ft=document.querySelector("[data-work-lightbox-count]"),w=document.querySelector("[data-collection-carousel]"),ge=document.querySelector("[data-collection-carousel-image]"),ht=document.querySelector("[data-collection-carousel-title]"),gt=document.querySelector("[data-collection-carousel-category]"),mt=document.querySelector("[data-collection-carousel-caption]"),pt=document.querySelector("[data-collection-carousel-count]"),bt=document.querySelector("[data-collection-carousel-strip]"),yt=document.querySelectorAll("[data-upcoming-event]"),me=document.querySelector("[data-upcoming-empty]"),St=document.querySelector("[data-cart-order-reference-card]"),vt=document.querySelector("[data-cart-order-reference]"),Ln=7,X=75,qn="https://us-central1-nanaamama.cloudfunctions.net/sendNanasMamaEmail",wt="https://square.link/u/8Ps1cUHZ",Nn="https://square.link/u/vBOFopQD",pe="Unable to send your message right now. Please email Nanasmamashea@gmail.com directly or try again in a moment.",Mt="nanasmama-cart",$t="nanasmama-favorites",Ot="nanasmama-previous-page",h=new Map;let Pt=null,_e="",Z=0,Rt="",H=0;const Ht={"self-care":{category:"Self-care",title:"Wellness Gift Sets",images:[{src:"./assets/gifts-home-page/gift-home-1-relaxing-shea.jpg",alt:"Relaxing Shea self-care gift product",caption:"Relaxing Shea for calm evening rituals and thoughtful care packages."},{src:"./assets/gifts-home-page/gift-home-2-shea-butter.jpg",alt:"Shea Butter self-care product",caption:"Organic Shea Butter as a simple, useful anchor for everyday wellness gifts."},{src:"./assets/gifts-home-page/gift-home-3-hair-shea.jpg",alt:"Hair Shea self-care product",caption:"Hair Shea for textured hair care, protective styles, and scalp comfort."},{src:"./assets/gifts-home-page/gift-home-4-clearing-lifestyle.jpg",alt:"Clearing Shea lifestyle product",caption:"Clearing Shea brings a focused skin-care option into the gift mix."},{src:"./assets/gifts-home-page/gift-home-5-black-soap.webp",alt:"African Black Soap self-care product",caption:"African Black Soap rounds out cleansing and moisture routines."},{src:"./assets/gifts-home-page/gift-home-6-hair-lifestyle.jpg",alt:"Hair care lifestyle self-care product",caption:"Lifestyle product shots help recipients imagine the full self-care routine."}]},wedding:{category:"Wedding",title:"Wedding & Bridal Gifts",images:[{src:"./assets/custom-gifting/hero/pink-wedding-gift-hamper.jpg",alt:"Pink floral wedding gift hamper",caption:"A soft floral hamper direction for bridal parties and wedding thank-you gifts."},{src:"./assets/custom-gifting/collections/pink-floral-wedding-hamper.jpg",alt:"Pink floral wedding hamper collection",caption:"Curated wedding packaging with romantic colors and layered finishing."},{src:"./assets/custom-gifting/gallery/outdoor-pink-tulle-wide.jpg",alt:"Outdoor pink tulle wedding gift basket",caption:"Outdoor styling gives wedding gifts a bright, keepsake-ready look."},{src:"./assets/custom-gifting/gallery/pink-tulle-outdoor-detail.jpg",alt:"Pink tulle wedding gift detail",caption:"Close-up ribbon and tulle details make the presentation feel personal."},{src:"./assets/custom-gifting/hero/outdoor-butterfly-gift-box.jpg",alt:"Outdoor butterfly gift box",caption:"Butterfly accents add a graceful finish for special-occasion gifting."}]},business:{category:"Business",title:"Client & Team Gifts",images:[{src:"./assets/custom-gifting/packaging/gold-butterfly-package-detail.jpg",alt:"Gold butterfly custom packaging detail",caption:"Brand-forward packaging details for events, clients, and campaign gifts."},{src:"./assets/custom-gifting/packaging/green-bow-butterfly-detail.jpg",alt:"Green bow custom packaging detail",caption:"Green ribbon and butterfly styling creates a refined client gift direction."},{src:"./assets/custom-gifting/packaging/wrapped-basket-tulle-detail.jpg",alt:"Wrapped custom gift basket with tulle",caption:"Wrapped baskets can support welcome boxes, event gifts, and team surprises."},{src:"./assets/custom-gifting/collections/yellow-bee-floral-basket.jpg",alt:"Yellow custom gifting basket",caption:"Bright custom baskets help business gifting feel warm rather than generic."},{src:"./assets/custom-gifting/source-sheets/batch-aa.jpg",alt:"Custom packaging batch reference sheet",caption:"Batch views show how larger custom orders can still feel consistent."},{src:"./assets/custom-gifting/source-sheets/batch-ad.jpg",alt:"Custom packaging source sheet",caption:"Reference sheets help plan a polished series of client or team gifts."}]},"baby-gifts":{category:"Baby gifts",title:"Baby Welcome Baskets",images:[{src:"./assets/custom-gifting/baby-gifts/baby-girl-floral-basket-front.jpg",alt:"Pink baby girl floral gift basket",caption:"Soft florals, plush textures, and keepsake details for a baby welcome gift."},{src:"./assets/custom-gifting/baby-gifts/baby-girl-basket-close.jpg",alt:"Close-up of pink baby girl gift basket",caption:"Layered ribbons and flowers make the basket feel full, personal, and photo-ready."},{src:"./assets/custom-gifting/baby-gifts/baby-girl-doll-basket.jpg",alt:"Baby girl doll gift basket",caption:"A playful doll centerpiece turns the gift into a sweet nursery moment."},{src:"./assets/custom-gifting/baby-gifts/baby-boy-gift-close.jpg",alt:"Blue baby boy gift basket close-up",caption:"Blue florals and baby essentials create a polished welcome gift for a new arrival."},{src:"./assets/custom-gifting/baby-gifts/baby-boy-logistics-crate.jpg",alt:"Baby boy logistics crate gift",caption:"Themed crates give baby gifts a custom story from the first look."},{src:"./assets/custom-gifting/baby-gifts/daisy-baby-gift-basket.jpg",alt:"Personalized Daisy baby gift basket",caption:"Personalized baby baskets can be styled around names, colors, and keepsake details."}]},"message-boards":{category:"Personalized",title:"Message Board Gifts",images:[{src:"./assets/custom-gifting/packaging/blue-ribbon-thank-you-gift-bags.jpg",alt:"Blue ribbon thank-you gift bags",caption:"Coordinated blue ribbons and florals make thank-you gifts feel bright and intentional."},{src:"./assets/custom-gifting/packaging/blue-ribbon-personalized-gift-bag.jpg",alt:"Personalized blue ribbon thank-you gift bag",caption:"Personalized message boards help each recipient feel directly remembered."},{src:"./assets/custom-gifting/packaging/yellow-floral-message-board-full.jpg",alt:"Yellow floral message board gift",caption:"Yellow floral styling brings warmth to appreciation gifts and family thank-yous."},{src:"./assets/custom-gifting/packaging/yellow-floral-message-board-close.jpg",alt:"Close-up of yellow floral message board",caption:"Close floral details add texture and a handcrafted finish."},{src:"./assets/custom-gifting/packaging/yellow-thank-you-board-arrangement.jpg",alt:"Yellow thank-you board arrangement",caption:"Message boards can be styled with flowers, products, and ribbon for a complete gift."},{src:"./assets/custom-gifting/collections/green-mummy-message-board.jpg",alt:"Green mummy message board gift",caption:"Custom names and messages make each board feel made for one person."}]},"black-gold":{category:"Birthday",title:"Black & Gold Gift Sets",images:[{src:"./assets/custom-gifting/packaging/black-gold-gift-stack-side.jpg",alt:"Black and gold custom birthday gift stack",caption:"Black paper, gold studs, and satin ribbon create a bold birthday presentation."},{src:"./assets/custom-gifting/packaging/black-gold-gift-stack-front.jpg",alt:"Front view of black and gold gift stack",caption:"A framed message anchors the gift and gives the packaging a keepsake feel."},{src:"./assets/custom-gifting/packaging/black-gold-gift-stack-centered.jpg",alt:"Centered black and gold gift stack",caption:"Stacked boxes make milestone gifts feel substantial and celebratory."},{src:"./assets/custom-gifting/packaging/black-gold-birthday-ribbon-detail.jpg",alt:"Black and gold birthday ribbon detail",caption:"Ribbon and pearl accents add shine without losing the clean black-and-gold theme."},{src:"./assets/custom-gifting/packaging/black-gold-framed-message-gift.jpg",alt:"Black and gold gift with framed message",caption:"A framed note turns the outside of the gift into part of the experience."}]}};G&&_&&(G.addEventListener("click",()=>{const t=_.classList.toggle("is-open");G.setAttribute("aria-expanded",String(t))}),_.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{_.classList.remove("is-open"),G.setAttribute("aria-expanded","false")})}));const Mn=()=>{if(!_)return;const t=window.location.pathname.split("/").pop()||"index.html",e=window.location.hash;_.querySelectorAll("a[aria-current='page']").forEach(n=>{n.removeAttribute("aria-current")});let a=null;_.querySelectorAll("a[href]").forEach(n=>{if(!(n instanceof HTMLAnchorElement))return;const r=n.pathname.split("/").pop()||"index.html",o=n.hash;(e&&o&&e===o&&t===r||!a&&t===r&&!o)&&(a=n)}),a==null||a.setAttribute("aria-current","page")};Mn();const m=t=>`$${t.toFixed(2)}`;let Et=0;const $n=t=>{let e=document.querySelector("[data-cart-toast]");e||(e=document.createElement("div"),e.className="cart-toast",e.setAttribute("data-cart-toast",""),e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),document.body.appendChild(e)),e.textContent=t,e.classList.add("is-visible"),window.clearTimeout(Et),Et=window.setTimeout(()=>{e.classList.remove("is-visible")},3200)},De=()=>{const t=new Date,e=[t.getFullYear(),String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0")].join(""),a=Math.random().toString(36).slice(2,6).toUpperCase();return`NM-${e}-${a}`},Ft=()=>{try{const t=`${window.location.pathname}${window.location.search}${window.location.hash}`;window.localStorage.setItem(Ot,t||"/")}catch{}},jt=t=>{_e=t,vt&&(vt.textContent=t),St&&(St.hidden=!1)},On=()=>{if(!yt.length)return;const t=new Date;t.setHours(0,0,0,0);let e=0;yt.forEach(a=>{const n=a.getAttribute("data-event-date"),r=n?new Date(`${n}T00:00:00`):null,o=r instanceof Date&&!Number.isNaN(r.getTime())&&r<t;a.toggleAttribute("hidden",o),o||(e+=1)}),me==null||me.toggleAttribute("hidden",e>0)},zt=t=>{try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):[]}catch{return[]}},Ut=(t,e)=>{window.localStorage.setItem(t,JSON.stringify(e))},z=()=>zt($t),Be=()=>{Ye&&(Ye.textContent=String(z().length))},Wt=t=>{Ut($t,t)},Pn=()=>{zt(Mt).forEach(t=>{t!=null&&t.id&&(t!=null&&t.name)&&Number.isFinite(Number(t.price))&&Number.isFinite(Number(t.quantity))&&h.set(t.id,{id:t.id,name:t.name,price:Number(t.price),quantity:Math.max(1,Number(t.quantity)),image:t.image??"",imageAlt:t.imageAlt??t.name})})},Te=()=>{Ut(Mt,Array.from(h.values()))},Vt=t=>{const e=t.querySelector("[data-buy-now]");if(!(e instanceof HTMLElement))return;const a=t.querySelector("[data-product-variant].is-selected");if(!a)return;const n=a==null?void 0:a.getAttribute("data-square-payment-link");n?(e.textContent="Buy Now",e.setAttribute("data-square-payment-link",n)):(e.textContent="Buy Now",e.removeAttribute("data-square-payment-link"))},ke=t=>{var g,b,y,O;const e=t.querySelector("[data-product-variant].is-selected"),a=e==null?void 0:e.getAttribute("data-variant-id"),n=e==null?void 0:e.getAttribute("data-variant-label"),r=Number(e==null?void 0:e.getAttribute("data-variant-price")),o=t.dataset.productId,s=t.dataset.productName,c=a??o,l=n&&s?`${s} ${n}`:s,f=Number.isNaN(r)?Number(t.dataset.productPrice):r,k=((g=t.querySelector("img"))==null?void 0:g.getAttribute("src"))??"",i=((b=t.querySelector("img"))==null?void 0:b.getAttribute("alt"))??l??"",d=((O=(y=t.querySelector(".product-summary"))==null?void 0:y.textContent)==null?void 0:O.trim())??"";return!c||!l||Number.isNaN(f)?null:{id:c,name:l,price:f,image:k,imageAlt:i,summary:d}},Ct=t=>{var a;const e=Number((a=t.querySelector("[data-quantity-value]"))==null?void 0:a.textContent);return!Number.isFinite(e)||e<1?1:Math.min(e,99)},Gt=t=>z().some(e=>e.id===t),U=()=>{document.querySelectorAll(".favorite-button").forEach(t=>{const e=t.closest(".product-card"),a=e?ke(e):null,n=a==null?void 0:a.id,r=!!n&&Gt(n);if(t.classList.toggle("is-active",r),t.textContent=r?"♥":"♡",n&&(a!=null&&a.name)){const o=r?"Saved in":"Add";t.setAttribute("aria-label",`${o} ${a.name} ${r?"favorites":"to favorites"}`)}})},Rn=t=>{const e=z();e.some(a=>a.id===t.id)||(e.unshift(t),Wt(e)),Be(),U()},Ae=t=>{const e=z().filter(a=>a.id!==t);Wt(e),Be(),U(),Qt()},xe=t=>{v&&(v.hidden=!t,document.body.classList.toggle("modal-open",t))},Le=t=>{w&&(w.hidden=!t,document.body.classList.toggle("modal-open",t))},Yt=()=>Array.from(Nt).filter(t=>!t.hidden),Hn=t=>{var r,o,s,c;const e=t.querySelector("img"),a=((o=(r=t.querySelector("h3"))==null?void 0:r.textContent)==null?void 0:o.trim())||"Project detail",n=((c=(s=t.querySelector("span"))==null?void 0:s.textContent)==null?void 0:c.trim())||"Project image";return e?{src:e.getAttribute("src")??"",alt:e.getAttribute("alt")??a,title:a,category:n}:null},Kt=t=>{const e=Yt();if(!e.length||!he)return;Z=(t+e.length)%e.length;const a=Hn(e[Z]);a&&(he.setAttribute("src",a.src),he.setAttribute("alt",a.alt),dt&&(dt.textContent=a.title),ut&&(ut.textContent=a.category),ft&&(ft.textContent=`${Z+1} of ${e.length}`))},ne=t=>{!v||v.hidden||Kt(Z+t)},Jt=t=>{const a=Yt().indexOf(t);Kt(a>=0?a:0),xe(!0)},qe=t=>{const e=Ht[Rt];if(!e||!e.images.length||!ge)return;H=(t+e.images.length)%e.images.length;const a=e.images[H];ge.setAttribute("src",a.src),ge.setAttribute("alt",a.alt),ht&&(ht.textContent=e.title),gt&&(gt.textContent=e.category),mt&&(mt.textContent=a.caption),pt&&(pt.textContent=`${H+1} of ${e.images.length}`),bt&&(bt.innerHTML=e.images.map((n,r)=>`
      <button class="collection-carousel-thumb${r===H?" is-active":""}" type="button" data-collection-carousel-thumb="${r}" aria-label="Show ${n.alt}">
        <img loading="lazy" decoding="async" src="${n.src}" alt="">
      </button>
    `).join(""))},re=t=>{!w||w.hidden||qe(H+t)},Fn=t=>{Ht[t]&&(Rt=t,qe(0),Le(!0))},jn=t=>{if(Gt(t.id)){Ae(t.id);return}Rn(t)},Qt=()=>{if(!fe||!it||!ct)return;const t=z();st&&(st.hidden=!0),it.hidden=!1,lt&&(lt.textContent="Your favorites"),fe.innerHTML="",ct.hidden=t.length>0,t.forEach(e=>{const a=document.createElement("article");a.className="product-card saved-favorite-card",a.dataset.productId=e.id,a.dataset.productName=e.name,a.dataset.productPrice=String(e.price),a.innerHTML=`
      <button class="favorite-button is-active" type="button" aria-label="Saved in favorites">♥</button>
      <img loading="lazy" decoding="async" src="${e.image}" alt="${e.imageAlt}">
      <div class="product-copy">
        <p class="product-brand">Nana's Mama</p>
        <h3>${e.name}</h3>
        <p class="product-summary">${e.summary||"Saved for later from the Nana's Mama product collection."}</p>
        <strong class="product-price">${m(e.price)}</strong>
        <div class="favorites-card-actions">
          <button class="button add-to-basket add-to-bag" type="button">Add to basket</button>
          <button class="favorite-remove" type="button" data-remove-favorite="${e.id}">Remove from favorites</button>
        </div>
      </div>
    `,fe.appendChild(a)}),U()},oe=t=>{!E||!te||(E.hidden=!1,E.classList.toggle("is-open",t),te.setAttribute("aria-expanded",String(t)),t||window.setTimeout(()=>{E.hidden=!0},200))},Ne=t=>{M&&(M.hidden=!1,M.classList.toggle("is-open",t),t||window.setTimeout(()=>{M.hidden=!0},250))},Xt=t=>{$&&($.hidden=!1,$.classList.toggle("is-open",t),window.setTimeout(()=>{$.hidden=!0},250))};te&&te.addEventListener("click",()=>{const t=E==null?void 0:E.classList.contains("is-open");oe(!t)});Ve&&Ve.addEventListener("click",()=>{oe(!1)});const W=()=>{let t=0,e=0;h.forEach(n=>{t+=n.quantity,e+=n.price*n.quantity});const a=t>0&&e<X?Ln:0;return{itemCount:t,subtotal:e,shipping:a,total:e+a}},zn=t=>{const e=new FormData(t);return{email:String(e.get("email")??"").trim(),phone:String(e.get("phone")??"").trim(),firstName:String(e.get("firstName")??"").trim(),lastName:String(e.get("lastName")??"").trim(),street:String(e.get("street")??"").trim(),apartment:String(e.get("apartment")??"").trim(),city:String(e.get("city")??"").trim(),state:String(e.get("state")??"").trim(),zip:String(e.get("zip")??"").trim(),country:String(e.get("country")??"United States").trim()||"United States",shippingMethod:String(e.get("shippingMethod")??"standard"),paymentMethod:String(e.get("paymentMethod")??"secure-card")}},V=()=>{if(q)if(q.innerHTML="",h.size===0){const e=(E==null?void 0:E.getAttribute("aria-label"))==="Shopping cart"?"Your cart is empty.":"Your basket is empty.";q.innerHTML=`<p class="basket-empty">${e}</p>`}else h.forEach(e=>{const a=document.createElement("article");a.className="basket-item",a.innerHTML=`
          <div>
            <div class="basket-item-name">${e.name}</div>
            <div class="basket-item-price">${m(e.price)} each</div>
          </div>
          <div class="basket-item-controls">
            <button class="qty-button" type="button" data-action="decrease" data-product-id="${e.id}">-</button>
            <span>${e.quantity}</span>
            <button class="qty-button" type="button" data-action="increase" data-product-id="${e.id}">+</button>
            <button class="remove-item" type="button" data-action="remove" data-product-id="${e.id}">Remove</button>
          </div>
        `,q.appendChild(a)});const t=W();if(Ge&&(Ge.textContent=String(t.itemCount)),Ke&&(Ke.textContent=m(t.subtotal)),Je&&(Je.textContent=t.itemCount>0&&t.shipping===0?"Free":m(t.shipping)),Qe&&(Qe.textContent=m(t.total)),Y&&(t.itemCount===0?Y.textContent=`Add ${m(X)} for free shipping.`:t.subtotal>=X?Y.textContent="You unlocked free shipping.":Y.textContent=`Add ${m(X-t.subtotal)} more for free shipping.`),T instanceof HTMLButtonElement){const e=t.itemCount===0;T.disabled=e,T.setAttribute("aria-disabled",String(e))}else if(T instanceof HTMLAnchorElement){const e=t.itemCount===0;T.setAttribute("aria-disabled",String(e)),T.classList.toggle("is-disabled",e)}at&&(at.textContent=String(t.itemCount)),nt&&(nt.textContent=m(t.subtotal)),rt&&(rt.textContent=t.itemCount>0&&t.shipping===0?"Free":m(t.shipping)),ot&&(ot.textContent=m(t.total))},Zt=()=>{if(N){if(N.innerHTML="",h.size===0){N.innerHTML=`
      <div class="cart-empty-state">
        <h2>Your cart is empty</h2>
        <a class="button button-primary" href="./products.html">Continue Shopping</a>
      </div>
    `,B==null||B.setAttribute("hidden","");return}B==null||B.removeAttribute("hidden"),h.forEach(t=>{const e=document.createElement("article");e.className="cart-page-item",e.innerHTML=`
      <img loading="lazy" decoding="async" src="${t.image}" alt="${t.imageAlt}">
      <div>
        <h2>${t.name}</h2>
        <p>${m(t.price)} each</p>
      </div>
      <div class="basket-item-controls">
        <button class="qty-button" type="button" data-action="decrease" data-product-id="${t.id}">-</button>
        <span>${t.quantity}</span>
        <button class="qty-button" type="button" data-action="increase" data-product-id="${t.id}">+</button>
        <button class="remove-item" type="button" data-action="remove" data-product-id="${t.id}">Remove</button>
      </div>
    `,N.appendChild(e)})}};document.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const a=e.closest("[data-product-variant]");if(a instanceof HTMLElement){const i=a.closest(".product-card");if(!i)return;i.querySelectorAll("[data-product-variant]").forEach(se=>{const Me=se===a;se.classList.toggle("is-selected",Me),se.setAttribute("aria-pressed",String(Me))});const d=Number(a.getAttribute("data-variant-price")),g=i.querySelector("[data-product-price-display]");g&&!Number.isNaN(d)&&(g.textContent=m(d),i.dataset.productPrice=String(d));const b=i.dataset.productName,y=a.getAttribute("data-variant-label"),O=i.querySelector(".favorite-button");O&&b&&y&&O.setAttribute("aria-label",`Add ${b} ${y} to favorites`),Vt(i),U();return}const n=e.closest("[data-quantity-action]");if(n instanceof HTMLElement){const i=n.closest(".product-card"),d=i==null?void 0:i.querySelector("[data-quantity-value]");if(!i||!d)return;const g=Ct(i),y=n.getAttribute("data-quantity-action")==="decrease"?Math.max(1,g-1):Math.min(99,g+1);d.textContent=String(y);return}const r=e.closest(".add-to-basket, [data-buy-now]");if(r instanceof HTMLElement){const i=r.closest(".product-card");if(!i)return;const d=ke(i),g=Ct(i);if(!d)return;const b=r.getAttribute("data-square-payment-link");if(b){window.open(b,"_blank","noopener,noreferrer");return}const y=h.get(d.id);y?y.quantity+=g:h.set(d.id,{id:d.id,name:d.name,price:d.price,quantity:g,image:d.image,imageAlt:d.imageAlt}),Te(),V(),$n(`${d.name} added to cart.`),r.hasAttribute("data-buy-now")&&(window.location.href="./cart.html");return}if(e.closest("[data-checkout-start]")instanceof HTMLElement){if(W().itemCount===0)return;oe(!1),Ne(!0);return}const s=e.closest(".favorite-button");if(s instanceof HTMLElement){const i=s.closest(".product-card");if(!i)return;const d=ke(i);if(!d)return;if(window.location.pathname.endsWith("/favorites.html")||window.location.pathname.endsWith("favorites.html")){Ae(d.id);return}jn(d);return}const c=e.closest("[data-remove-favorite]");if(c instanceof HTMLElement){const i=c.getAttribute("data-remove-favorite");i&&Ae(i);return}if(e.closest("[data-collection-carousel-close]")){Le(!1);return}if(e.closest("[data-collection-carousel-prev]")){re(-1);return}if(e.closest("[data-collection-carousel-next]")){re(1);return}const l=e.closest("[data-collection-carousel-thumb]");if(l instanceof HTMLElement){const i=Number(l.getAttribute("data-collection-carousel-thumb"));Number.isNaN(i)||qe(i);return}const f=e.closest("[data-featured-collection]");if(f instanceof HTMLElement){const i=f.getAttribute("data-featured-collection");i&&Fn(i);return}if(e.closest("[data-work-lightbox-close]")){xe(!1);return}if(e.closest("[data-work-lightbox-prev]")){ne(-1);return}if(e.closest("[data-work-lightbox-next]")){ne(1);return}const k=e.closest(".work-gallery-card");if(k instanceof HTMLElement&&!k.hidden){Jt(k);return}});q&&q.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const a=e.dataset.productId,n=e.dataset.action;if(!a||!n||!h.has(a))return;const r=h.get(a);r&&(n==="increase"&&(r.quantity+=1),n==="decrease"&&(r.quantity-=1,r.quantity<=0&&h.delete(a)),n==="remove"&&h.delete(a),Te(),V())});N&&N.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const a=e.dataset.productId,n=e.dataset.action;if(!a||!n||!h.has(a))return;const r=h.get(a);r&&(n==="increase"&&(r.quantity+=1),n==="decrease"&&(r.quantity-=1,r.quantity<=0&&h.delete(a)),n==="remove"&&h.delete(a),Te(),V(),Zt())});Xe&&Xe.addEventListener("click",()=>{Ne(!1)});Ze&&Ze.addEventListener("click",()=>{Xt(!1)});ue&&ue.addEventListener("submit",t=>{var a;if(t.preventDefault(),W().itemCount===0){x&&(x.hidden=!1,x.textContent="Add at least one product to the cart before reviewing your order.");return}Pt=zn(ue),jt(De()),x&&(x.hidden=!1,x.textContent=`Shipping details saved. Your order reference is ${_e}. Continue to payment.`),(a=document.querySelector("#payment"))==null||a.scrollIntoView({behavior:"smooth",block:"start"})});S&&S.addEventListener("click",t=>{const e=W();if(!Pt||e.itemCount===0){t.preventDefault(),L&&(L.hidden=!1,L.textContent="Review your cart and shipping details before payment.");return}_e||jt(De()),Ft(),S.setAttribute("aria-busy","true"),S.textContent="Opening Square checkout...",L&&(L.hidden=!1,L.textContent="Square checkout is opening in a new tab."),S instanceof HTMLAnchorElement?(S.href=wt,window.setTimeout(()=>{S.textContent="Pay for Cart Items",S.removeAttribute("aria-busy")},1200)):(window.open(wt,"_blank","noopener,noreferrer"),S.textContent="Pay for Cart Items",S.removeAttribute("aria-busy"))});ae&&ae.addEventListener("click",()=>{Ft()});if(tt.length){let t="";try{t=window.localStorage.getItem(Ot)||""}catch{t=""}tt.forEach(e=>{e instanceof HTMLAnchorElement&&t&&(e.href=t)})}P&&P.addEventListener("submit",async t=>{t.preventDefault();const e=P.querySelector("[type='submit']"),a=new FormData(P),n=De(),r={name:String(a.get("name")??"").trim(),phone:String(a.get("phone")??"").trim(),email:String(a.get("email")??"").trim(),requestType:String(a.get("requestType")??"").trim(),occasion:String(a.get("occasion")??"").trim(),budget:String(a.get("budget")??"").trim(),message:String(a.get("message")??"").trim(),orderReference:n};if(!r.name||!r.email||!r.message){p&&(p.hidden=!1,p.textContent="Please add your name, email, and message before sending.");return}e&&(e.setAttribute("aria-busy","true"),e.textContent="Sending..."),p&&(p.hidden=!0,p.textContent=""),K&&(K.hidden=!0);try{const o=await fetch(qn,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r,subject:`Nana's Mama ${r.requestType||"Website"} Inquiry`})}),s=await o.json().catch(()=>({}));if(!o.ok||s.success===!1)throw new Error(s.error||pe);P.reset(),p&&(p.hidden=!1,p.textContent=`Thanks. Your gift brief has been sent. Order Reference: ${n}.`),et&&(et.textContent=n),ae instanceof HTMLAnchorElement&&(ae.href=Nn),K&&(K.hidden=!1)}catch(o){if(p){p.hidden=!1;const s=o.message||pe;p.textContent=s.includes("testing emails")?pe:s}}finally{e&&(e.removeAttribute("aria-busy"),e.textContent="Send Gift Brief")}});J&&R&&J.addEventListener("submit",t=>{t.preventDefault();const e=W();if(e.itemCount===0){R.hidden=!1,R.textContent="Add at least one product to the basket before checking out.";return}const n=new FormData(J).get("name");R.hidden=!1,R.textContent=`Thanks${n?`, ${n}`:""}. Your demo order for ${e.itemCount} item(s) has been placed for ${m(e.total)}.`,J.reset(),h.clear(),V(),oe(!1)});document.addEventListener("keydown",t=>{t.key==="Escape"&&M&&!M.hidden&&Ne(!1),t.key==="Escape"&&$&&!$.hidden&&Xt(!1),t.key==="Escape"&&v&&!v.hidden&&xe(!1),t.key==="Escape"&&w&&!w.hidden&&Le(!1),t.key==="ArrowLeft"&&v&&!v.hidden&&(t.preventDefault(),ne(-1)),t.key==="ArrowRight"&&v&&!v.hidden&&(t.preventDefault(),ne(1)),t.key==="ArrowLeft"&&w&&!w.hidden&&(t.preventDefault(),re(-1)),t.key==="ArrowRight"&&w&&!w.hidden&&(t.preventDefault(),re(1))});document.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",()=>{const e=t.closest(".faq-item"),a=e==null?void 0:e.querySelector(".faq-answer"),n=t.getAttribute("aria-expanded")==="true";document.querySelectorAll(".faq-question").forEach(r=>{r.setAttribute("aria-expanded","false")}),document.querySelectorAll(".faq-answer").forEach(r=>{r.hidden=!0}),t.setAttribute("aria-expanded",String(!n)),a&&(a.hidden=n)})});Nt.forEach(t=>{var a,n;t.setAttribute("tabindex","0"),t.setAttribute("role","button");const e=((n=(a=t.querySelector("h3"))==null?void 0:a.textContent)==null?void 0:n.trim())||"project image";t.setAttribute("aria-label",`Enlarge ${e}`),t.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),Jt(t))})});const ea=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),ea.unobserve(e.target))})},{threshold:.2});document.querySelectorAll(".value-card, .product-card, .category-card, .story-media, .story-copy, .faq-item, .page-intro-panel, .section-note, .section-intro, .work-gallery-card").forEach(t=>{t.classList.add("reveal"),ea.observe(t)});Pn();On();document.querySelectorAll(".product-card").forEach(Vt);V();Zt();Be();U();Qt();
