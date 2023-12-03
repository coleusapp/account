import{_ as xe}from"./index.m-3221c546.js";import{o as A,c as k,b as x,h as Oe,j as z,F as je,k as P,p as B,l as re,m as V,n as H,r as E,q as O,s as ae,v as Te,x as le,a as U,e as oe,u as ie,y as Ce,t as I,f as Fe,g as Le}from"./app-53d9385d.js";const Ae={},ke={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Be=x("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Ve=x("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),He=[Be,Ve];function Pe(e,t){return A(),k("svg",ke,He)}const Me=xe(Ae,[["render",Pe]]);function j(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),b=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(b||{});function ue({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...a}){var l;let o=fe(r,n),i=Object.assign(a,{props:o});if(e||t&2&&o.static)return q(i);if(t&1){let u=(l=o.unmount)==null||l?0:1;return j(u,{0(){return null},1(){return q({...a,props:{...o,hidden:!0,style:{display:"none"}}})}})}return q(i)}function q({props:e,attrs:t,slots:n,slot:r,name:a}){var l,o;let{as:i,...u}=ce(e,["unmount","static"]),s=(l=n.default)==null?void 0:l.call(n,r),c={};if(r){let m=!1,p=[];for(let[y,v]of Object.entries(r))typeof v=="boolean"&&(m=!0),v===!0&&p.push(y);m&&(c["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(s=de(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[m,...p]=s??[];if(!Ne(m)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(d=>d.trim()).filter((d,f,T)=>T.indexOf(d)===f).sort((d,f)=>d.localeCompare(f)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let y=fe((o=m.props)!=null?o:{},u),v=Oe(m,y);for(let d in y)d.startsWith("on")&&(v.props||(v.props={}),v.props[d]=y[d]);return v}return Array.isArray(s)&&s.length===1?s[0]:s}return z(i,Object.assign({},u,c),{default:()=>s})}function de(e){return e.flatMap(t=>t.type===je?de(t.children):[t])}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(r[a])):t[a]=r[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](a,...l){let o=n[r];for(let i of o){if(a instanceof Event&&a.defaultPrevented)return;i(a,...l)}}});return t}function ce(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Ne(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ie=0;function qe(){return++Ie}function Re(){return qe()}function ee(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let pe=Symbol("Context");var h=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(h||{});function Ue(){return me()!==null}function me(){return P(pe,null)}function De(e){B(pe,e)}var ze=Object.defineProperty,We=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t,n)=>(We(e,typeof t!="symbol"?t+"":t,n),n);class Ye{constructor(){te(this,"current",this.detect()),te(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Ke=new Ye;function Qe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function W(){let e=[],t={addEventListener(n,r,a,l){return n.addEventListener(r,a,l),t.add(()=>n.removeEventListener(r,a,l))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Qe(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,a){let l=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:a}),this.add(()=>{Object.assign(n.style,{[r]:l})})},group(n){let r=W();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let a of e.splice(r,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}function Xe(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function R(e,...t){e&&t.length>0&&e.classList.add(...t)}function L(e,...t){e&&t.length>0&&e.classList.remove(...t)}var D=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(D||{});function Ze(e,t){let n=W();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:a}=getComputedStyle(e),[l,o]=[r,a].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,c)=>c-s);return u});return l!==0?n.setTimeout(()=>t("finished"),l+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function ne(e,t,n,r,a,l){let o=W(),i=l!==void 0?Xe(l):()=>{};return L(e,...a),R(e,...t,...n),o.nextFrame(()=>{L(e,...n),R(e,...r),o.add(Ze(e,u=>(L(e,...r,...t),R(e,...a),i(u))))}),o.add(()=>L(e,...t,...n,...r,...a)),o.add(()=>i("cancelled")),o.dispose}function S(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Y=Symbol("TransitionContext");var Ge=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ge||{});function Je(){return P(Y,null)!==null}function _e(){let e=P(Y,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function et(){let e=P(K,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let K=Symbol("NestingContext");function M(e){return"children"in e?M(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ve(e){let t=E([]),n=E(!1);O(()=>n.value=!0),ae(()=>n.value=!1);function r(l,o=b.Hidden){let i=t.value.findIndex(({id:u})=>u===l);i!==-1&&(j(o,{[b.Unmount](){t.value.splice(i,1)},[b.Hidden](){t.value[i].state="hidden"}}),!M(t)&&n.value&&(e==null||e()))}function a(l){let o=t.value.find(({id:i})=>i===l);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:l,state:"visible"}),()=>r(l,b.Unmount)}return{children:t,register:a,unregister:r}}let he=se.RenderStrategy,tt=re({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:a}){let l=E(0);function o(){l.value|=h.Opening,t("beforeEnter")}function i(){l.value&=~h.Opening,t("afterEnter")}function u(){l.value|=h.Closing,t("beforeLeave")}function s(){l.value&=~h.Closing,t("afterLeave")}if(!Je()&&Ue())return()=>z(Q,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},r);let c=E(null),m=V(()=>e.unmount?b.Unmount:b.Hidden);a({el:c,$el:c});let{show:p,appear:y}=_e(),{register:v,unregister:d}=et(),f=E(p.value?"visible":"hidden"),T={value:!0},$=Re(),C={value:!1},X=ve(()=>{!C.value&&f.value!=="hidden"&&(f.value="hidden",d($),s())});O(()=>{let g=v($);ae(g)}),H(()=>{if(m.value===b.Hidden&&$){if(p.value&&f.value!=="visible"){f.value="visible";return}j(f.value,{hidden:()=>d($),visible:()=>v($)})}});let Z=S(e.enter),G=S(e.enterFrom),ye=S(e.enterTo),J=S(e.entered),ge=S(e.leave),be=S(e.leaveFrom),we=S(e.leaveTo);O(()=>{H(()=>{if(f.value==="visible"){let g=ee(c);if(g instanceof Comment&&g.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Se(g){let N=T.value&&!y.value,w=ee(c);!w||!(w instanceof HTMLElement)||N||(C.value=!0,p.value&&o(),p.value||u(),g(p.value?ne(w,Z,G,ye,J,F=>{C.value=!1,F===D.Finished&&i()}):ne(w,ge,be,we,J,F=>{C.value=!1,F===D.Finished&&(M(X)||(f.value="hidden",d($),s()))})))}return O(()=>{Te([p],(g,N,w)=>{Se(w),T.value=!1},{immediate:!0})}),B(K,X),De(V(()=>j(f.value,{visible:h.Open,hidden:h.Closed})|l.value)),()=>{let{appear:g,show:N,enter:w,enterFrom:F,enterTo:st,entered:ut,leave:dt,leaveFrom:ft,leaveTo:ct,..._}=e,Ee={ref:c},$e={..._,...y.value&&p.value&&Ke.isServer?{class:le([n.class,_.class,...Z,...G])}:{}};return ue({theirProps:$e,ourProps:Ee,slot:{},slots:r,attrs:n,features:he,visible:f.value==="visible",name:"TransitionChild"})}}}),nt=tt,Q=re({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let a=me(),l=V(()=>e.show===null&&a!==null?(a.value&h.Open)===h.Open:e.show);H(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=E(l.value?"visible":"hidden"),i=ve(()=>{o.value="hidden"}),u=E(!0),s={show:l,appear:V(()=>e.appear||!u.value)};return O(()=>{H(()=>{u.value=!1,l.value?o.value="visible":M(i)||(o.value="hidden")})}),B(K,i),B(Y,s),()=>{let c=ce(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return ue({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[z(nt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...c},r.default)]},attrs:{},features:he,visible:o.value==="visible",name:"Transition"})}}});const rt=["disabled","type"],vt={__name:"ButtonForm",props:{type:{type:String,default:"button"},form:{type:Object,default(){return{processing:!1}}}},setup(e){return(t,n)=>(A(),k("button",{disabled:e.form.processing,type:e.type,class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"},[U(ie(Q),{id:"button-spinner",show:e.form.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:oe(()=>[U(Me,{class:"w-4 h-4"})]),_:1},8,["show"]),Ce(t.$slots,"default")],8,rt))}},at=["for"],lt={class:"mt-1"},ot=["id","name","placeholder","type","value"],it=["id"],ht={__name:"InputForm",props:{name:String,label:String,modelValue:String,id:{type:String,default:e=>e.name},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup(e){return(t,n)=>(A(),k("div",null,[x("label",{for:e.id,class:"block text-sm font-medium text-gray-700"},I(e.label),9,at),x("div",lt,[x("input",{id:e.id,class:le([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"],"shadow-sm block w-full sm:text-sm rounded-md text-gray-700 p-2 border border-gray-300"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:n[0]||(n[0]=r=>t.$emit("update:modelValue",r.target.value)),onKeydown:n[1]||(n[1]=r=>e.form.clearErrors(e.name))},null,42,ot)]),e.help!==""?(A(),k("p",{key:0,id:`${e.name}-description`,class:"mt-2 text-sm text-gray-500"},I(e.help),9,it)):Fe("",!0),U(ie(Q),{id:`${e.name}-error`,show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:oe(()=>[Le(I(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]),_:1},8,["id","show"])]))}};export{Q as S,ht as _,vt as a};