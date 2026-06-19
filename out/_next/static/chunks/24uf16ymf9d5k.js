(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var r=e.i(43476),t=e.i(71645);let o=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim(),s=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:l="",children:i,iconNode:d,...c},m)=>(0,t.createElement)("svg",{ref:m,...a,width:r,height:r,stroke:e,strokeWidth:n?24*Number(s)/Number(r):s,className:o("lucide",l),...!i&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(i)?i:[i]])),l=(e,r)=>{let a=(0,t.forwardRef)(({className:a,...l},i)=>(0,t.createElement)(n,{ref:i,iconNode:r,className:o(`lucide-${s(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a),...l}));return a.displayName=s(e),a},i=l("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),d=l("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),c=l("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),m=l("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),p=l("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),u=l("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),b=l("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]),h=(e=new Map,r=null,t)=>({nextPart:e,validators:r,classGroupId:t}),x=[],f=(e,r,t)=>{if(0==e.length-r)return t.classGroupId;let o=e[r],s=t.nextPart.get(o);if(s){let t=f(e,r+1,s);if(t)return t}let a=t.validators;if(null===a)return;let n=0===r?e.join("-"):e.slice(r).join("-"),l=a.length;for(let e=0;e<l;e++){let r=a[e];if(r.validator(n))return r.classGroupId}},g=(e,r)=>{let t=h();for(let o in e)v(e[o],t,o,r);return t},v=(e,r,t,o)=>{let s=e.length;for(let a=0;a<s;a++)w(e[a],r,t,o)},w=(e,r,t,o)=>{"string"==typeof e?y(e,r,t):"function"==typeof e?k(e,r,t,o):j(e,r,t,o)},y=(e,r,t)=>{(""===e?r:R(r,e)).classGroupId=t},k=(e,r,t,o)=>{N(e)?v(e(o),r,t,o):(null===r.validators&&(r.validators=[]),r.validators.push({classGroupId:t,validator:e}))},j=(e,r,t,o)=>{let s=Object.entries(e),a=s.length;for(let e=0;e<a;e++){let[a,n]=s[e];v(n,R(r,a),t,o)}},R=(e,r)=>{let t=e,o=r.split("-"),s=o.length;for(let e=0;e<s;e++){let r=o[e],s=t.nextPart.get(r);s||(s=h(),t.nextPart.set(r,s)),t=s}return t},N=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,S=[],z=(e,r,t,o,s)=>({modifiers:e,hasImportantModifier:r,baseClassName:t,maybePostfixModifierPosition:o,isExternal:s}),T=/\s+/,A=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=A(e[o]))&&(t&&(t+=" "),t+=r);return t},_=[],H=e=>{let r=r=>r[e]||_;return r.isThemeGetter=!0,r},I=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,B=/^\((?:(\w[\w-]*):)?(.+)\)$/i,P=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,C=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Q=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,q=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,L=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,D=e=>P.test(e),O=e=>!!e&&!Number.isNaN(Number(e)),V=e=>!!e&&Number.isInteger(Number(e)),$=e=>e.endsWith("%")&&O(e.slice(0,-1)),M=e=>C.test(e),G=()=>!0,W=e=>Q.test(e)&&!E.test(e),U=()=>!1,X=e=>q.test(e),F=e=>L.test(e),K=e=>!J(e)&&!el(e),Y=e=>e.startsWith("@container")&&("/"===e[10]&&void 0!==e[11]||"s"===e[11]&&void 0!==e[16]&&e.startsWith("-size/",10)||"n"===e[11]&&void 0!==e[18]&&e.startsWith("-normal/",10)),Z=e=>eh(e,ev,U),J=e=>I.test(e),ee=e=>eh(e,ew,W),er=e=>eh(e,ey,O),et=e=>eh(e,ej,G),eo=e=>eh(e,ek,U),es=e=>eh(e,ef,U),ea=e=>eh(e,eg,F),en=e=>eh(e,eR,X),el=e=>B.test(e),ei=e=>ex(e,ew),ed=e=>ex(e,ek),ec=e=>ex(e,ef),em=e=>ex(e,ev),ep=e=>ex(e,eg),eu=e=>ex(e,eR,!0),eb=e=>ex(e,ej,!0),eh=(e,r,t)=>{let o=I.exec(e);return!!o&&(o[1]?r(o[1]):t(o[2]))},ex=(e,r,t=!1)=>{let o=B.exec(e);return!!o&&(o[1]?r(o[1]):t)},ef=e=>"position"===e||"percentage"===e,eg=e=>"image"===e||"url"===e,ev=e=>"length"===e||"size"===e||"bg-size"===e,ew=e=>"length"===e,ey=e=>"number"===e,ek=e=>"family-name"===e,ej=e=>"number"===e||"weight"===e,eR=e=>"shadow"===e,eN=((e,...r)=>{let t,o,s,a,n=e=>{let r=o(e);if(r)return r;let a=((e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:a,postfixLookupClassGroupIds:n}=r,l=[],i=e.trim().split(T),d="";for(let e=i.length-1;e>=0;e-=1){let r,c=i[e],{isExternal:m,modifiers:p,hasImportantModifier:u,baseClassName:b,maybePostfixModifierPosition:h}=t(c);if(m){d=c+(d.length>0?" "+d:d);continue}let x=!!h;if(x){let e=(r=o(b.substring(0,h)))&&n[r]?o(b):void 0;e&&e!==r&&(r=e,x=!1)}else r=o(b);if(!r){if(!x||!(r=o(b))){d=c+(d.length>0?" "+d:d);continue}x=!1}let f=0===p.length?"":1===p.length?p[0]:a(p).join(":"),g=u?f+"!":f,v=g+r;if(l.indexOf(v)>-1)continue;l.push(v);let w=s(r,x);for(let e=0;e<w.length;++e){let r=w[e];l.push(g+r)}d=c+(d.length>0?" "+d:d)}return d})(e,t);return s(e,a),a};return a=l=>{var i;let d;return o=(t={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=Object.create(null),o=Object.create(null),s=(s,a)=>{t[s]=a,++r>e&&(r=0,o=t,t=Object.create(null))};return{get(e){let r=t[e];return void 0!==r?r:void 0!==(r=o[e])?(s(e,r),r):void 0},set(e,r){e in t?t[e]=r:s(e,r)}}})((i=r.reduce((e,r)=>r(e),e())).cacheSize),parseClassName:(e=>{let{prefix:r,experimentalParseClassName:t}=e,o=e=>{let r,t=[],o=0,s=0,a=0,n=e.length;for(let l=0;l<n;l++){let n=e[l];if(0===o&&0===s){if(":"===n){t.push(e.slice(a,l)),a=l+1;continue}if("/"===n){r=l;continue}}"["===n?o++:"]"===n?o--:"("===n?s++:")"===n&&s--}let l=0===t.length?e:e.slice(a),i=l,d=!1;return l.endsWith("!")?(i=l.slice(0,-1),d=!0):l.startsWith("!")&&(i=l.slice(1),d=!0),z(t,d,i,r&&r>a?r-a:void 0)};if(r){let e=r+":",t=o;o=r=>r.startsWith(e)?t(r.slice(e.length)):z(S,!1,r,void 0,!0)}if(t){let e=o;o=r=>t({className:r,parseClassName:e})}return o})(i),sortModifiers:(d=new Map,i.orderSensitiveModifiers.forEach((e,r)=>{d.set(e,1e6+r)}),e=>{let r=[],t=[];for(let o=0;o<e.length;o++){let s=e[o],a="["===s[0],n=d.has(s);a||n?(t.length>0&&(t.sort(),r.push(...t),t=[]),r.push(s)):t.push(s)}return t.length>0&&(t.sort(),r.push(...t)),r}),postfixLookupClassGroupIds:(e=>{let r=Object.create(null),t=e.postfixLookupClassGroups;if(t)for(let e=0;e<t.length;e++)r[t[e]]=!0;return r})(i),...(e=>{let r=(e=>{let{theme:r,classGroups:t}=e;return g(t,r)})(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var t;let r,o,s;return -1===(t=e).slice(1,-1).indexOf(":")?void 0:(o=(r=t.slice(1,-1)).indexOf(":"),(s=r.slice(0,o))?"arbitrary.."+s:void 0)}let o=e.split("-"),s=+(""===o[0]&&o.length>1);return f(o,s,r)},getConflictingClassGroupIds:(e,r)=>{if(r){let r=o[e],s=t[e];if(r){if(s){let e=Array(s.length+r.length);for(let r=0;r<s.length;r++)e[r]=s[r];for(let t=0;t<r.length;t++)e[s.length+t]=r[t];return e}return r}return s||x}return t[e]||x}}})(i)}).cache.get,s=t.cache.set,a=n,n(l)},(...e)=>a(((...e)=>{let r,t,o=0,s="";for(;o<e.length;)(r=e[o++])&&(t=A(r))&&(s&&(s+=" "),s+=t);return s})(...e))})(()=>{let e=H("color"),r=H("font"),t=H("text"),o=H("font-weight"),s=H("tracking"),a=H("leading"),n=H("breakpoint"),l=H("container"),i=H("spacing"),d=H("radius"),c=H("shadow"),m=H("inset-shadow"),p=H("text-shadow"),u=H("drop-shadow"),b=H("blur"),h=H("perspective"),x=H("aspect"),f=H("ease"),g=H("animate"),v=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],y=()=>[...w(),el,J],k=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],R=()=>[el,J,i],N=()=>[D,"full","auto",...R()],S=()=>[V,"none","subgrid",el,J],z=()=>["auto",{span:["full",V,el,J]},V,el,J],T=()=>[V,"auto",el,J],A=()=>["auto","min","max","fr",el,J],_=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],I=()=>["start","end","center","stretch","center-safe","end-safe"],B=()=>["auto",...R()],P=()=>[D,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],C=()=>[D,"screen","full","dvw","lvw","svw","min","max","fit",...R()],Q=()=>[D,"screen","full","lh","dvh","lvh","svh","min","max","fit",...R()],E=()=>[e,el,J],q=()=>[...w(),ec,es,{position:[el,J]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],W=()=>["auto","cover","contain",em,Z,{size:[el,J]}],U=()=>[$,ei,ee],X=()=>["","none","full",d,el,J],F=()=>["",O,ei,ee],eh=()=>["solid","dashed","dotted","double"],ex=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ef=()=>[O,$,ec,es],eg=()=>["","none",b,el,J],ev=()=>["none",O,el,J],ew=()=>["none",O,el,J],ey=()=>[O,el,J],ek=()=>[D,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[M],breakpoint:[M],color:[G],container:[M],"drop-shadow":[M],ease:["in","out","in-out"],font:[K],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[M],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[M],shadow:[M],spacing:["px",O],text:[M],"text-shadow":[M],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",D,J,el,x]}],container:["container"],"container-type":[{"@container":["","normal","size",el,J]}],"container-named":[Y],columns:[{columns:[O,J,el,l]}],"break-after":[{"break-after":v()}],"break-before":[{"break-before":v()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:y()}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:N()}],"inset-x":[{"inset-x":N()}],"inset-y":[{"inset-y":N()}],start:[{"inset-s":N(),start:N()}],end:[{"inset-e":N(),end:N()}],"inset-bs":[{"inset-bs":N()}],"inset-be":[{"inset-be":N()}],top:[{top:N()}],right:[{right:N()}],bottom:[{bottom:N()}],left:[{left:N()}],visibility:["visible","invisible","collapse"],z:[{z:[V,"auto",el,J]}],basis:[{basis:[D,"full","auto",l,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[O,D,"auto","initial","none",J]}],grow:[{grow:["",O,el,J]}],shrink:[{shrink:["",O,el,J]}],order:[{order:[V,"first","last","none",el,J]}],"grid-cols":[{"grid-cols":S()}],"col-start-end":[{col:z()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":S()}],"row-start-end":[{row:z()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":A()}],"auto-rows":[{"auto-rows":A()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[..._(),"normal"]}],"justify-items":[{"justify-items":[...I(),"normal"]}],"justify-self":[{"justify-self":["auto",...I()]}],"align-content":[{content:["normal",..._()]}],"align-items":[{items:[...I(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...I(),{baseline:["","last"]}]}],"place-content":[{"place-content":_()}],"place-items":[{"place-items":[...I(),"baseline"]}],"place-self":[{"place-self":["auto",...I()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pbs:[{pbs:R()}],pbe:[{pbe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:B()}],mx:[{mx:B()}],my:[{my:B()}],ms:[{ms:B()}],me:[{me:B()}],mbs:[{mbs:B()}],mbe:[{mbe:B()}],mt:[{mt:B()}],mr:[{mr:B()}],mb:[{mb:B()}],ml:[{ml:B()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:P()}],"inline-size":[{inline:["auto",...C()]}],"min-inline-size":[{"min-inline":["auto",...C()]}],"max-inline-size":[{"max-inline":["none",...C()]}],"block-size":[{block:["auto",...Q()]}],"min-block-size":[{"min-block":["auto",...Q()]}],"max-block-size":[{"max-block":["none",...Q()]}],w:[{w:[l,"screen",...P()]}],"min-w":[{"min-w":[l,"screen","none",...P()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[n]},...P()]}],h:[{h:["screen","lh",...P()]}],"min-h":[{"min-h":["screen","lh","none",...P()]}],"max-h":[{"max-h":["screen","lh",...P()]}],"font-size":[{text:["base",t,ei,ee]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,eb,et]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",$,J]}],"font-family":[{font:[ed,eo,r]}],"font-features":[{"font-features":[J]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,el,J]}],"line-clamp":[{"line-clamp":[O,"none",el,er]}],leading:[{leading:[a,...R()]}],"list-image":[{"list-image":["none",el,J]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",el,J]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:E()}],"text-color":[{text:E()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...eh(),"wavy"]}],"text-decoration-thickness":[{decoration:[O,"from-font","auto",el,ee]}],"text-decoration-color":[{decoration:E()}],"underline-offset":[{"underline-offset":[O,"auto",el,J]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"tab-size":[{tab:[V,el,J]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",el,J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",el,J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:q()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:W()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},V,el,J],radial:["",el,J],conic:[V,el,J]},ep,ea]}],"bg-color":[{bg:E()}],"gradient-from-pos":[{from:U()}],"gradient-via-pos":[{via:U()}],"gradient-to-pos":[{to:U()}],"gradient-from":[{from:E()}],"gradient-via":[{via:E()}],"gradient-to":[{to:E()}],rounded:[{rounded:X()}],"rounded-s":[{"rounded-s":X()}],"rounded-e":[{"rounded-e":X()}],"rounded-t":[{"rounded-t":X()}],"rounded-r":[{"rounded-r":X()}],"rounded-b":[{"rounded-b":X()}],"rounded-l":[{"rounded-l":X()}],"rounded-ss":[{"rounded-ss":X()}],"rounded-se":[{"rounded-se":X()}],"rounded-ee":[{"rounded-ee":X()}],"rounded-es":[{"rounded-es":X()}],"rounded-tl":[{"rounded-tl":X()}],"rounded-tr":[{"rounded-tr":X()}],"rounded-br":[{"rounded-br":X()}],"rounded-bl":[{"rounded-bl":X()}],"border-w":[{border:F()}],"border-w-x":[{"border-x":F()}],"border-w-y":[{"border-y":F()}],"border-w-s":[{"border-s":F()}],"border-w-e":[{"border-e":F()}],"border-w-bs":[{"border-bs":F()}],"border-w-be":[{"border-be":F()}],"border-w-t":[{"border-t":F()}],"border-w-r":[{"border-r":F()}],"border-w-b":[{"border-b":F()}],"border-w-l":[{"border-l":F()}],"divide-x":[{"divide-x":F()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":F()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...eh(),"hidden","none"]}],"divide-style":[{divide:[...eh(),"hidden","none"]}],"border-color":[{border:E()}],"border-color-x":[{"border-x":E()}],"border-color-y":[{"border-y":E()}],"border-color-s":[{"border-s":E()}],"border-color-e":[{"border-e":E()}],"border-color-bs":[{"border-bs":E()}],"border-color-be":[{"border-be":E()}],"border-color-t":[{"border-t":E()}],"border-color-r":[{"border-r":E()}],"border-color-b":[{"border-b":E()}],"border-color-l":[{"border-l":E()}],"divide-color":[{divide:E()}],"outline-style":[{outline:[...eh(),"none","hidden"]}],"outline-offset":[{"outline-offset":[O,el,J]}],"outline-w":[{outline:["",O,ei,ee]}],"outline-color":[{outline:E()}],shadow:[{shadow:["","none",c,eu,en]}],"shadow-color":[{shadow:E()}],"inset-shadow":[{"inset-shadow":["none",m,eu,en]}],"inset-shadow-color":[{"inset-shadow":E()}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:E()}],"ring-offset-w":[{"ring-offset":[O,ee]}],"ring-offset-color":[{"ring-offset":E()}],"inset-ring-w":[{"inset-ring":F()}],"inset-ring-color":[{"inset-ring":E()}],"text-shadow":[{"text-shadow":["none",p,eu,en]}],"text-shadow-color":[{"text-shadow":E()}],opacity:[{opacity:[O,el,J]}],"mix-blend":[{"mix-blend":[...ex(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ex()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[O]}],"mask-image-linear-from-pos":[{"mask-linear-from":ef()}],"mask-image-linear-to-pos":[{"mask-linear-to":ef()}],"mask-image-linear-from-color":[{"mask-linear-from":E()}],"mask-image-linear-to-color":[{"mask-linear-to":E()}],"mask-image-t-from-pos":[{"mask-t-from":ef()}],"mask-image-t-to-pos":[{"mask-t-to":ef()}],"mask-image-t-from-color":[{"mask-t-from":E()}],"mask-image-t-to-color":[{"mask-t-to":E()}],"mask-image-r-from-pos":[{"mask-r-from":ef()}],"mask-image-r-to-pos":[{"mask-r-to":ef()}],"mask-image-r-from-color":[{"mask-r-from":E()}],"mask-image-r-to-color":[{"mask-r-to":E()}],"mask-image-b-from-pos":[{"mask-b-from":ef()}],"mask-image-b-to-pos":[{"mask-b-to":ef()}],"mask-image-b-from-color":[{"mask-b-from":E()}],"mask-image-b-to-color":[{"mask-b-to":E()}],"mask-image-l-from-pos":[{"mask-l-from":ef()}],"mask-image-l-to-pos":[{"mask-l-to":ef()}],"mask-image-l-from-color":[{"mask-l-from":E()}],"mask-image-l-to-color":[{"mask-l-to":E()}],"mask-image-x-from-pos":[{"mask-x-from":ef()}],"mask-image-x-to-pos":[{"mask-x-to":ef()}],"mask-image-x-from-color":[{"mask-x-from":E()}],"mask-image-x-to-color":[{"mask-x-to":E()}],"mask-image-y-from-pos":[{"mask-y-from":ef()}],"mask-image-y-to-pos":[{"mask-y-to":ef()}],"mask-image-y-from-color":[{"mask-y-from":E()}],"mask-image-y-to-color":[{"mask-y-to":E()}],"mask-image-radial":[{"mask-radial":[el,J]}],"mask-image-radial-from-pos":[{"mask-radial-from":ef()}],"mask-image-radial-to-pos":[{"mask-radial-to":ef()}],"mask-image-radial-from-color":[{"mask-radial-from":E()}],"mask-image-radial-to-color":[{"mask-radial-to":E()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[O]}],"mask-image-conic-from-pos":[{"mask-conic-from":ef()}],"mask-image-conic-to-pos":[{"mask-conic-to":ef()}],"mask-image-conic-from-color":[{"mask-conic-from":E()}],"mask-image-conic-to-color":[{"mask-conic-to":E()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:q()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:W()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",el,J]}],filter:[{filter:["","none",el,J]}],blur:[{blur:eg()}],brightness:[{brightness:[O,el,J]}],contrast:[{contrast:[O,el,J]}],"drop-shadow":[{"drop-shadow":["","none",u,eu,en]}],"drop-shadow-color":[{"drop-shadow":E()}],grayscale:[{grayscale:["",O,el,J]}],"hue-rotate":[{"hue-rotate":[O,el,J]}],invert:[{invert:["",O,el,J]}],saturate:[{saturate:[O,el,J]}],sepia:[{sepia:["",O,el,J]}],"backdrop-filter":[{"backdrop-filter":["","none",el,J]}],"backdrop-blur":[{"backdrop-blur":eg()}],"backdrop-brightness":[{"backdrop-brightness":[O,el,J]}],"backdrop-contrast":[{"backdrop-contrast":[O,el,J]}],"backdrop-grayscale":[{"backdrop-grayscale":["",O,el,J]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[O,el,J]}],"backdrop-invert":[{"backdrop-invert":["",O,el,J]}],"backdrop-opacity":[{"backdrop-opacity":[O,el,J]}],"backdrop-saturate":[{"backdrop-saturate":[O,el,J]}],"backdrop-sepia":[{"backdrop-sepia":["",O,el,J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",el,J]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[O,"initial",el,J]}],ease:[{ease:["linear","initial",f,el,J]}],delay:[{delay:[O,el,J]}],animate:[{animate:["none",g,el,J]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[h,el,J]}],"perspective-origin":[{"perspective-origin":y()}],rotate:[{rotate:ev()}],"rotate-x":[{"rotate-x":ev()}],"rotate-y":[{"rotate-y":ev()}],"rotate-z":[{"rotate-z":ev()}],scale:[{scale:ew()}],"scale-x":[{"scale-x":ew()}],"scale-y":[{"scale-y":ew()}],"scale-z":[{"scale-z":ew()}],"scale-3d":["scale-3d"],skew:[{skew:ey()}],"skew-x":[{"skew-x":ey()}],"skew-y":[{"skew-y":ey()}],transform:[{transform:[el,J,"","none","gpu","cpu"]}],"transform-origin":[{origin:y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ek()}],"translate-x":[{"translate-x":ek()}],"translate-y":[{"translate-y":ek()}],"translate-z":[{"translate-z":ek()}],"translate-none":["translate-none"],zoom:[{zoom:[V,el,J]}],accent:[{accent:E()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:E()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",el,J]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":E()}],"scrollbar-track-color":[{"scrollbar-track":E()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mbs":[{"scroll-mbs":R()}],"scroll-mbe":[{"scroll-mbe":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pbs":[{"scroll-pbs":R()}],"scroll-pbe":[{"scroll-pbe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",el,J]}],fill:[{fill:["none",...E()]}],"stroke-w":[{stroke:[O,ei,ee,er]}],stroke:[{stroke:["none",...E()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function eS(...e){return eN(function(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=function e(r){var t,o,s="";if("string"==typeof r||"number"==typeof r)s+=r;else if("object"==typeof r)if(Array.isArray(r)){var a=r.length;for(t=0;t<a;t++)r[t]&&(o=e(r[t]))&&(s&&(s+=" "),s+=o)}else for(o in r)r[o]&&(s&&(s+=" "),s+=o);return s}(e))&&(o&&(o+=" "),o+=r);return o}(e))}function ez({code:e,title:o,description:s}){let[a,n]=(0,t.useState)(!1),l=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)};return(0,r.jsxs)("div",{className:"group relative my-3 rounded-lg border border-border bg-card overflow-hidden",children:[o&&(0,r.jsxs)("div",{className:"px-4 py-2 border-b border-border bg-muted/50",children:[(0,r.jsx)("span",{className:"text-sm font-medium text-foreground",children:o}),s&&(0,r.jsx)("p",{className:"text-xs text-muted-foreground mt-0.5",children:s})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-foreground bg-zinc-950 dark:bg-zinc-900 leading-relaxed",children:(0,r.jsx)("code",{children:e})}),(0,r.jsx)("button",{onClick:l,className:eS("absolute top-2 right-2 p-2 rounded-md transition-all duration-200","bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white","opacity-0 group-hover:opacity-100 focus:opacity-100"),"aria-label":"Копировать код",children:a?(0,r.jsx)(i,{className:"w-4 h-4 text-green-400"}):(0,r.jsx)(d,{className:"w-4 h-4"})})]})]})}function eT({children:e}){return(0,r.jsx)("div",{className:"my-3 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm text-foreground leading-relaxed",children:e})}function eA({id:e,title:o,device:s,children:a,defaultOpen:n=!1}){let[l,i]=(0,t.useState)(n);return(0,r.jsxs)("div",{id:e,className:"border border-border rounded-xl mb-4 overflow-hidden bg-card scroll-mt-44",children:[(0,r.jsx)("button",{onClick:()=>i(!l),className:"w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors",children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[l?(0,r.jsx)(c,{className:"w-5 h-5 text-primary shrink-0"}):(0,r.jsx)(m,{className:"w-5 h-5 text-muted-foreground shrink-0"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold text-foreground",children:o}),(0,r.jsxs)("span",{className:"text-xs text-muted-foreground flex items-center gap-1 mt-0.5",children:[(0,r.jsx)(b,{className:"w-3 h-3"})," ",s]})]})]})}),l&&(0,r.jsx)("div",{className:"px-4 pb-4 border-t border-border pt-2",children:a})]})}function e_({children:e}){return(0,r.jsxs)("h4",{className:"font-semibold mt-5 mb-2 text-foreground flex items-center gap-2",children:[(0,r.jsx)("span",{className:"inline-block w-1.5 h-1.5 rounded-full bg-primary"}),e]})}function eH({title:e,time:t,children:o}){return(0,r.jsxs)("div",{className:"mb-10",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-4 pb-3 border-b border-border",children:[(0,r.jsx)("div",{className:"p-2 rounded-lg bg-primary/10",children:(0,r.jsx)(u,{className:"w-5 h-5 text-primary"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-xl font-bold text-foreground",children:e}),(0,r.jsx)("span",{className:"text-sm text-muted-foreground",children:t})]})]}),o]})}let eI=[{href:"#hostname",label:"Hostname",module:"module1"},{href:"#network",label:"Сеть",module:"module1"},{href:"#gre",label:"GRE",module:"module1"},{href:"#ospf",label:"OSPF",module:"module1"},{href:"#dns",label:"DNS",module:"module1"},{href:"#dhcp",label:"DHCP",module:"module1"},{href:"#ssh",label:"SSH",module:"module1"},{href:"#timezone",label:"Таймзоны",module:"module1"},{href:"#chrony",label:"Chrony",module:"module2"},{href:"#nginx",label:"Nginx",module:"module2"},{href:"#portfwd",label:"Проброс портов",module:"module2"},{href:"#samba",label:"Samba DC",module:"module2"},{href:"#domain",label:"Домен",module:"module2"},{href:"#ansible",label:"Ansible",module:"module2"},{href:"#docker",label:"Docker",module:"module2"},{href:"#raid",label:"RAID0",module:"module2"},{href:"#nfs",label:"NFS",module:"module2"},{href:"#web",label:"Web/LAMP",module:"module2"},{href:"#yandex",label:"Яндекс",module:"module2"}];e.s(["default",0,function(){let[e,o]=(0,t.useState)(""),[s,a]=(0,t.useState)("all"),n=eI.filter(e=>"all"===s||e.module===s);return(0,r.jsxs)("div",{className:"min-h-screen bg-background",children:[(0,r.jsx)("header",{className:"sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border",children:(0,r.jsxs)("div",{className:"max-w-5xl mx-auto px-4 py-4",children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h1",{className:"text-2xl font-bold text-foreground",children:"Документация по использованию Linux"})}),(0,r.jsx)("div",{className:"flex items-center gap-2",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(p,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"}),(0,r.jsx)("input",{type:"text",placeholder:"Поиск команд...",value:e,onChange:e=>o(e.target.value),className:"pl-9 pr-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"})]})})]}),(0,r.jsx)("div",{className:"flex gap-2 mt-4",children:[{id:"all",label:"Все"},{id:"module1",label:"Модуль изучения сети"},{id:"module2",label:"Модуль использования служб в корпоративной сети"}].map(e=>(0,r.jsx)("button",{onClick:()=>a(e.id),className:eS("px-4 py-2 rounded-lg text-sm font-medium transition-colors",s===e.id?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:bg-muted/80"),children:e.label},e.id))})]})}),(0,r.jsx)("nav",{className:"sticky top-[125px] z-40 bg-muted/30 backdrop-blur border-b border-border py-2 overflow-x-auto",children:(0,r.jsx)("div",{className:"max-w-5xl mx-auto px-4",children:(0,r.jsx)("div",{className:"flex gap-2 text-xs",children:n.map(e=>(0,r.jsx)("a",{href:e.href,className:"px-3 py-1.5 rounded-full bg-card border border-border hover:bg-muted transition-colors whitespace-nowrap",children:e.label},e.href))})})}),(0,r.jsxs)("main",{className:"max-w-5xl mx-auto px-4 py-6",children:[("all"===s||"module1"===s)&&(0,r.jsxs)(eH,{title:"Модуль изучения сети: Сеть, DNS, DHCP, SSH, время",time:"Базовая инфраструктура",children:[(0,r.jsxs)(eA,{id:"hostname",title:"Задание 1: Настройка hostname",device:"Все устройства",defaultOpen:!0,children:[(0,r.jsx)(ez,{title:"ISP",code:`hostnamectl hostname isp
exec bash`}),(0,r.jsx)(ez,{title:"HQ-RTR (EcoRouter)",code:`en
conf t
hostname hq-rtr.au-team.irpo`}),(0,r.jsx)(ez,{title:"BR-RTR (EcoRouter)",code:`en
conf t
hostname br-rtr.au-team.irpo`}),(0,r.jsx)(ez,{title:"HQ-SRV",code:`hostnamectl hostname hq-srv.au-team.irpo
exec bash`}),(0,r.jsx)(ez,{title:"BR-SRV",code:`hostnamectl hostname br-srv.au-team.irpo
exec bash`}),(0,r.jsx)(ez,{title:"CLI",code:`hostnamectl hostname cli.au-team.irpo
exec bash`})]}),(0,r.jsxs)(eA,{id:"network",title:"Задание 2: Настройка сети и NAT",device:"ISP, HQ-RTR, BR-RTR, HQ-SRV, BR-SRV",children:[(0,r.jsx)(e_,{children:"ISP"}),(0,r.jsx)(ez,{title:"Копирование интерфейсов",code:`cd /etc/net/ifaces

cp -r ens18 /etc/net/ifaces/ens19
cp -r ens19 /etc/net/ifaces/ens20`}),(0,r.jsx)(ez,{title:"ens19 — options + адрес",code:`cd ens19
vim options
# BOOTPROTO=static

echo 172.16.4.1/28 > ipv4address`}),(0,r.jsx)(ez,{title:"ens20 — options + адрес",code:`cd /etc/net/ifaces/ens20
vim options
# BOOTPROTO=static

echo 172.16.5.1/28 > ipv4address`}),(0,r.jsx)(ez,{title:"Включение forwarding",code:`vim /etc/net/sysctl.conf
# net.ipv4.ip_forward = 1`}),(0,r.jsx)(ez,{title:"NAT (iptables) + проверка",code:`apt-get update
apt-get -y install iptables
iptables -t nat -A POSTROUTING -o ens18 -j MASQUERADE
iptables-save >> /etc/sysconfig/iptables
systemctl enable --now iptables
systemctl restart network

ping ya.ru
ping ya.ru -I 172.16.4.1
ping ya.ru -I 172.16.5.1`}),(0,r.jsx)(e_,{children:"HQ-RTR (EcoRouter)"}),(0,r.jsx)(ez,{title:"Интерфейсы и сервисы",code:`do sh port br

int isp
ip address 172.16.4.14/28
ex

int 100
ip address 192.168.1.1/26
ex

int 200
ip address 192.168.1.65/28
ex

int 999
ip address 192.168.1.81/29
ex

port te0
service-instance isp
encapsulation untagged
connect ip interface isp
ex
ex

port te1
service-instance 100
encapsulation dot1q 100
rewrite pop 1
connect ip interface 100
ex

service-instance 200
encapsulation dot1q 200
rewrite pop 1
connect ip interface 200
ex

service-instance 999
encapsulation dot1q 999
rewrite pop 1
connect ip interface 999
ex
ex`}),(0,r.jsx)(ez,{title:"Маршрут, DNS и NAT",code:`ip route 0.0.0.0/0 172.16.4.1
ip name-server 77.88.8.8
ip nat pool INTERNET 192.168.1.1-192.168.1.87
ip nat source dynamic inside-to-outside pool INTERNET overload 172.16.4.14

int isp
ip nat outside
ex

int 100
ip nat inside
ex

int 200
ip nat inside
ex

int 999
ip nat inside
ex
ex

wr`}),(0,r.jsx)(e_,{children:"BR-RTR (EcoRouter)"}),(0,r.jsx)(ez,{title:"Интерфейсы и сервисы",code:`do sh port br

int isp
ip address 172.16.5.14/28
ex

int lan
ip address 192.168.2.1/27
ex

port te0
service-instance isp
encapsulation untaged
connect ip interface isp
ex
ex

port te1
service-instance lan
encapsulation untaged
connect ip interface lan
ex
ex`}),(0,r.jsx)(ez,{title:"Маршрут, DNS и NAT",code:`ip route 0.0.0.0/0 172.16.5.1
ip name-server 77.88.8.8
ip nat pool INTERNET 192.168.2.1-192.168.2.30
ip nat source dynamic inside-to-outside pool INTERNET overload 172.16.5.14

int isp
ip nat outside
ex

int lan
ip nat inside
ex
ex

wr`}),(0,r.jsx)(e_,{children:"HQ-SRV"}),(0,r.jsx)(ez,{code:`cd /etc/net/ifaces/ens18
echo 192.168.1.2/26 > ipv4address
echo default via 192.168.1.1 > ipv4route
echo nameserver 77.88.8.8 > resolv.conf
systemctl restart network`}),(0,r.jsx)(e_,{children:"BR-SRV"}),(0,r.jsx)(ez,{code:`cd /etc/net/ifaces/ens18
echo 192.168.2.2/26 > ipv4address
echo default via 192.168.2.1 > ipv4route
echo nameserver 77.88.8.8 > resolv.conf
systemctl restart network`})]}),(0,r.jsxs)(eA,{id:"gre",title:"Задание 3: GRE туннель",device:"HQ-RTR, BR-RTR",children:[(0,r.jsx)(e_,{children:"BR-RTR"}),(0,r.jsx)(ez,{code:`en
conf t

int tunnel.1
ip address 10.10.10.10/30
ip tunnel 172.16.5.14 172.16.4.14 mode gre
ex
ex

wr`}),(0,r.jsx)(e_,{children:"HQ-RTR"}),(0,r.jsx)(ez,{code:`en
conf t

int tunnel.1
ip address 10.10.10.9/30
ip tunnel 172.16.4.14 172.16.5.14 mode gre
ex
ex

wr`})]}),(0,r.jsxs)(eA,{id:"ospf",title:"Задание 4: Настройка OSPF",device:"HQ-RTR, BR-RTR",children:[(0,r.jsx)(e_,{children:"BR-RTR"}),(0,r.jsx)(ez,{code:`en
conf t

router ospf 1
network 10.10.10.8/30 area 0
network 192.168.2.0/27 area 0
area 0 authentication message-digest
passive-interface isp
passive-interface lan
ex

int tunnel.1
ip ospf authentication-key P@ssw0rd
ip ospf authentication message-digest
ex
ex

wr
do sh ip route`}),(0,r.jsx)(e_,{children:"HQ-RTR"}),(0,r.jsx)(ez,{code:`en
conf t

router ospf 1
network 10.10.10.8/30 area 0
network 192.168.1.0/26 area 0
network 192.168.1.64/28 area 0
network 192.168.1.80/29 area 0
passive-interface isp
passive-interface 100
passive-interface 200
passive-interface 999
area 0 authentication message-digest
ex

int tunnel.1
ip ospf authentication-key P@ssw0rd
ip ospf authentication message-digest
ex
ex

wr
do sh ip route`})]}),(0,r.jsxs)(eA,{id:"dns",title:"Задание 5: Настройка DNS",device:"HQ-SRV, HQ-RTR, BR-RTR",children:[(0,r.jsx)(e_,{children:"HQ-SRV — установка"}),(0,r.jsx)(ez,{code:`apt-get update
apt-get install bind bind-utils -y

cd /etc/bind`}),(0,r.jsxs)(eT,{children:["В ",(0,r.jsx)("code",{className:"font-mono",children:"named.conf"})," закомментировать строку"," ",(0,r.jsx)("code",{className:"font-mono",children:'#include "/etc/bind/rndc.conf";'})," (поставить"," ",(0,r.jsx)("code",{className:"font-mono",children:"#"})," перед строкой)."]}),(0,r.jsx)(ez,{title:"options.conf",code:`listen-on { 192.168.1.2; };

//listen-on-v6 { ::1; };

forwaders { 77.88.8.8; };

allow-query { any; };

allow-query-cache { any; };

allow-recursion { any; };`}),(0,r.jsx)(ez,{title:"local.conf",code:`zone "au-team.irpo" {
    type master;
    file "/etc/bind/zone/db.au";
};

zone "1.168.192.in-addr.arpa" {
    type master;
    file "/etc/bind/zone/db.revers";
};`}),(0,r.jsx)(ez,{title:"Создание файлов зон",code:`cd zone
cp localhost db.au
mcedit db.au
# заменить localhost -> au-team.irpo, 127.0.0.1 -> 192.168.1.2

cp db.au db.revers
chown root:named db.*`}),(0,r.jsx)(ez,{title:"db.au — прямая зона (дописать)",code:`hq-srv IN A 192.168.1.2
hq-rtr IN A 192.168.1.1
br-srv IN A 192.168.2.2
bt-rtr IN A 192.168.2.1
hq-cli IN A 192.168.1.66
moodle IN CNAME hq-rtr
wiki IN CNAME hq-rtr`}),(0,r.jsx)(ez,{title:"db.revers — обратная зона (дописать)",code:`1 IN PTR hq-rtr.au-team.irpo.
2 IN PTR hq-srv.au-team.irpo.
66 IN PTR hq-cli.au-team.irpo.`}),(0,r.jsx)(ez,{title:"Проверка зон и запуск",code:`named-checkzone au-team.irpo db.au
named-checkzone 1.168.192.in-addr.arpa db.revers
systemctl restart bind`}),(0,r.jsx)(ez,{title:"resolv.conf + проверки",code:`cd /etc/net/iface/ens19
mcedit resolv.conf
# nameserver 192.168.1.2
# search au-team.irpo

systemctl restart network
systemctl restart bind

host hq-srv
host 192.168.1.2
host wiki
host ya.ru`}),(0,r.jsx)(e_,{children:"HQ-RTR"}),(0,r.jsx)(ez,{code:`en
conf t
ip name-server 192.168.1.2
ip domain-name au-team.irpo
ip domain-lookup
no ip name-server 77.88.8.8
do wr
do ping hq-srv`}),(0,r.jsx)(e_,{children:"BR-RTR"}),(0,r.jsx)(ez,{code:`en
conf t
ip name-server 192.168.1.2
ip domain-name au-team.irpo
ip domain-lookup
no ip name-server 77.88.8.8
do wr
do ping hq-srv`})]}),(0,r.jsx)(eA,{id:"dhcp",title:"Задание 6: Настройка DHCP",device:"HQ-RTR",children:(0,r.jsx)(ez,{code:`en
conf t

ip pool hq 192.168.1.67-192.168.1.78

dhcp-server 1
static ip 192.168.1.66
client-id mac XX:XX:XX:XX:XX:XX
mask 255.255.255.240
gateway 192.168.1.65
dns 192.168.1.2
domain_search au-team.irpo
ex

pool hq 1
mask 255.255.255.240
gateway 192.168.165
dns 192.168.1.2
domain_search au-team.irpo

do wr

int lan
int 200
dhcp-server 1

do wr`})}),(0,r.jsxs)(eA,{id:"ssh",title:"Задания 7–8: Пользователи и SSH",device:"HQ-SRV, BR-SRV, HQ-RTR, BR-RTR",children:[(0,r.jsx)(e_,{children:"HQ-SRV и BR-SRV — пользователь"}),(0,r.jsx)(ez,{code:`useradd sshuser -u 1010
passwd sshuser
# P@ssw0rd
usermod -aG wheel sshuser`}),(0,r.jsx)(ez,{title:"/etc/sudoers",code:"sshuser ALL=(ALL) NOPASSWD:ALL"}),(0,r.jsx)(e_,{children:"HQ-RTR и BR-RTR — пользователь"}),(0,r.jsx)(ez,{code:`username net_admin
password P@ssw0rd
role admin`}),(0,r.jsx)(e_,{children:"HQ-SRV и BR-SRV — настройка SSH"}),(0,r.jsx)(ez,{title:"/etc/openssh/sshd_config",code:`Port 2024
AllowUsers sshuser
MaxAuthTries 2
Banner /etc/banner.net`}),(0,r.jsx)(ez,{title:"/etc/banner.net",code:`----------------------
Authorized access only
----------------------`}),(0,r.jsx)(ez,{title:"Перезапуск службы",code:"systemctl restart sshd.service"})]}),(0,r.jsxs)(eA,{id:"timezone",title:"Задание 9: Настройка часового пояса",device:"Все устройства",children:[(0,r.jsx)(e_,{children:"ISP, BR-SRV, HQ-SRV, CLI (Alt Linux)"}),(0,r.jsx)(ez,{code:`timedatectl set-timezone Europe/Moscow
timedatectl status`}),(0,r.jsx)(e_,{children:"BR-RTR, HQ-RTR (EcoRouter)"}),(0,r.jsx)(ez,{code:`ntp timezone utc+3
show ntp timezone`})]})]}),("all"===s||"module2"===s)&&(0,r.jsxs)(eH,{title:"Модуль использования служб в корпоративной сети: Службы и сервисы",time:"Samba DC, Docker, NFS, Web",children:[(0,r.jsxs)(eA,{id:"chrony",title:"1. Настройка NTP/Chrony",device:"ISP + клиенты",defaultOpen:!0,children:[(0,r.jsx)(e_,{children:"ISP — сервер Chrony"}),(0,r.jsx)(ez,{code:`control chrony server

sed -i 's/pool pool.ntp.org iburst/pool pool.ntp.org iburst prefer minstratum 4/' /etc/chrony.conf
sed -i 's/#local stratum 10/local stratum 5/' /etc/chrony.conf

systemctl restart chronyd
chronyc sources`}),(0,r.jsx)(e_,{children:"Клиенты"}),(0,r.jsx)(ez,{code:`sed -i 's/pool pool.ntp.org iburst/server 172.16.1.1 iburst/' /etc/chrony.conf
systemctl restart chronyd
chronyc sources`})]}),(0,r.jsxs)(eA,{id:"nginx",title:"2. Nginx reverse proxy + Basic Auth",device:"ISP",children:[(0,r.jsx)(ez,{title:"Установка",code:`apt-get update
apt-get install nginx -y`}),(0,r.jsx)(ez,{title:"/etc/nginx/sites-available.d/r-proxy.conf",code:`server {
    listen 80;
    server_name web.au-team.irpo;

    location / {
        proxy_pass http://172.16.1.10:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
    }
}

server {
    listen 80;
    server_name docker.au-team.irpo;

    location / {
        proxy_pass http://172.16.2.10:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`}),(0,r.jsx)(ez,{title:"Симлинк и запуск",code:`ln -s /etc/nginx/sites-available.d/r-proxy.conf /etc/nginx/sites-enabled.d/
nginx -t
systemctl enable --now nginx
systemctl status nginx`}),(0,r.jsx)(ez,{title:"HTTP Basic Auth",code:`apt-get install apache2-htpasswd -y
htpasswd -c /etc/nginx/.htpasswd WEB
cat /etc/nginx/.htpasswd

nginx -t
systemctl restart nginx`})]}),(0,r.jsxs)(eA,{id:"portfwd",title:"3. Статическая трансляция портов",device:"HQ-RTR, BR-RTR",children:[(0,r.jsx)(e_,{children:"HQ-RTR"}),(0,r.jsx)(ez,{code:`nft add chain nat prerouting { type nat hook prerouting priority dstnat \\; }

nft add rule nat prerouting iif "enp7s1" tcp dport 2026 dnat to 192.168.1.10
nft add rule nat prerouting iif "enp7s1" tcp dport 8080 dnat to 192.168.1.10:80

nft list ruleset
nft list ruleset > /etc/nftables/nftables.nft
systemctl restart nftables
nft list ruleset`}),(0,r.jsx)(e_,{children:"BR-RTR"}),(0,r.jsx)(ez,{code:`nft add chain nat prerouting { type nat hook prerouting priority dstnat \\; }

nft add rule nat prerouting iif "enp7s1" tcp dport { 8080, 2026 } dnat to 192.168.3.10

nft list ruleset
nft list ruleset > /etc/nftables/nftables.nft
systemctl restart nftables
nft list ruleset`})]}),(0,r.jsxs)(eA,{id:"samba",title:"5.1 Samba DC",device:"BR-SRV",children:[(0,r.jsx)(ez,{title:"Подготовка DNS и сети",code:`echo "nameserver 192.168.1.10" >> /etc/net/ifaces/enp7s1/resolv.conf
systemctl restart network
cat /etc/resolv.conf

ping ya.ru -c 2`}),(0,r.jsx)(ez,{title:"Установка Samba DC",code:`apt-get update
apt-get install -y task-samba-dc
rm -f /etc/samba/smb.conf
rm -rf {/var/lib/samba, /var/cache/samba}
mkdir -p /var/lib/samba/sysvol`}),(0,r.jsx)(ez,{title:"Развёртывание домена",code:"samba-tool domain provision"}),(0,r.jsx)(ez,{title:"Подмена krb5.conf",code:`mv /etc/krb5.conf /etc/krb5.conf.back
cp /var/lib/samba/private/krb5.conf /etc/krb5.conf`}),(0,r.jsx)(ez,{title:"Запуск службы",code:`systemctl enable --now samba
systemctl status samba
samba-tool domain info 127.0.0.1`}),(0,r.jsx)(ez,{title:"Добавление DNS-записей",code:`samba-tool dns add br-srv.au-team.irpo au-team.irpo hq-srv A 192.168.1.10 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo hq-rtr A 192.168.1.1 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo br-rtr A 192.168.3.1 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo web.au-team.irpo A 172.16.1.1 -U Administrator
samba-tool dns add br-srv.au-team.irpo au-team.irpo docker.au-team.irpo A 172.16.2.1 -U Administrator

samba-tool dns query br-srv.au-team.irpo au-team.irpo @ ALL -U administrator`}),(0,r.jsx)(ez,{title:"Перевод DNS на локальный Samba DNS",code:`sed -i 's/nameserver 192.168.1.10/nameserver 127.0.0.1/' /etc/net/ifaces/enp7s1/resolv.conf
systemctl restart network
cat /etc/resolv.conf`}),(0,r.jsx)(ez,{title:"Создание групп и пользователей",code:`samba-tool group add hq

for i in {1..5}; do samba-tool user add hquser$i P@ssw0rd; done
for i in {1..5}; do samba-tool group addmembers hq hquser$i; done

samba-tool group listmembers hq`})]}),(0,r.jsxs)(eA,{id:"domain",title:"5.2 Ввод HQ-CLI в домен",device:"HQ-RTR, HQ-CLI",children:[(0,r.jsx)(e_,{children:"HQ-RTR — настройка DNS"}),(0,r.jsx)(ez,{code:`sed -i 's/192.168.1.10/192.168.3.10/' /etc/dnsmasq.conf
systemctl restart dnsmasq
cat /etc/dnsmasq.conf`}),(0,r.jsx)(e_,{children:"HQ-CLI — ограничение входа группой hq"}),(0,r.jsx)(ez,{code:`control libnss-role
roleadd hq wheel`}),(0,r.jsx)(ez,{title:"Ограничение sudo (/etc/sudoers)",code:"WHEEL_USERS ALL=(ALL:ALL) /usr/bin/cat, /usr/bin/grep, /usr/bin/id"}),(0,r.jsx)(ez,{title:"Проверка",code:"sudo id"})]}),(0,r.jsxs)(eA,{id:"ansible",title:"5.3 Ansible",device:"BR-SRV",children:[(0,r.jsx)(ez,{title:"Установка",code:"apt-get install ansible sshpass -y"}),(0,r.jsx)(ez,{title:"/etc/ansible/ansible.cfg",code:`[defaults]
host_key_checking = False
interpreter_python = /usr/bin/python3`}),(0,r.jsx)(ez,{title:"/etc/ansible/hosts",code:`HQ-SRV ansible_user=user ansible_password=resu ansible_port=2026
HQ-RTR ansible_user=net_admin ansible_password=P@ssw0rd
BR-RTR ansible_user=net_admin ansible_password=P@ssw0rd
HQ-CLI ansible_user=user ansible_password=resu`}),(0,r.jsx)(ez,{title:"Проверка",code:"ansible all -m ping"})]}),(0,r.jsxs)(eA,{id:"docker",title:"5.4 Docker",device:"BR-SRV",children:[(0,r.jsx)(ez,{title:"Установка и загрузка образов",code:`apt-get install docker-engine docker-compose-v2 -y
systemctl enable --now docker.service

mount -o loop /dev/sr0 /mnt/ -v
ls -l /mnt/docker/
cat /mnt/docker/readme.txt

docker load < /mnt/docker/site_latest.tar
docker load < /mnt/docker/mariadb_latest.tar
docker image ls`}),(0,r.jsx)(ez,{title:"docker-compose.yml",code:`services:
  database:
    container_name: db
    image: mariadb:latest
    restart: always
    ports:
      - "3306:3306"
    environment:
      MARIADB_DATABASE: testdb
      MARIADB_USER: test
      MARIADB_PASSWORD: P@ssw0rd
      MARIADB_ROOT_PASSWORD: P@ssw0rd
    volumes:
      - db_data:/var/lib/mysql

  app:
    container_name: testapp
    image: site:latest
    restart: always
    ports:
      - "8080:8000"
    environment:
      DB_HOST: database
      DB_PORT: 3306
      DB_NAME: testdb
      DB_USER: test
      DB_PASS: P@ssw0rd
      DB_TYPE: maria
    depends_on:
      - database

volumes:
  db_data:`}),(0,r.jsx)(ez,{title:"Запуск",code:`docker compose config
docker compose up -d
docker ps
ss -ltnp4 | grep 8080`}),(0,r.jsxs)(eT,{children:["Проверка с HQ-CLI: ",(0,r.jsx)("code",{className:"font-mono",children:"http://docker.au-team.irpo"})," и"," ",(0,r.jsx)("code",{className:"font-mono",children:"http://192.168.3.10:8080"})]}),(0,r.jsx)(ez,{title:"Пересоздать стек (если нужно)",code:`docker rm -f $(docker ps -qa)
docker compose up -d`})]}),(0,r.jsxs)(eA,{id:"raid",title:"6. RAID0",device:"HQ-SRV",children:[(0,r.jsx)(ez,{title:"Разметка дисков",code:`lsblk
parted /dev/sdb`}),(0,r.jsx)(ez,{title:"В parted (для /dev/sdb и /dev/sdc)",code:`mklabel msdos
mkpart primary 1MiB 100%
set 1 raid on
print

# затем для второго диска:
select /dev/sdc`}),(0,r.jsx)(ez,{title:"Создание массива",code:`mdadm --create /dev/md0 --level=0 --raid-devices=2 /dev/sdb1 /dev/sdc1
mdadm --detail --scan >> /etc/mdadm.conf
mkfs.ext4 /dev/md0
mkdir /raid
cp /etc/fstab /etc/fstab.back
echo "/dev/md0 /raid ext4 defaults 0 0" >> /etc/fstab
mount -av
df -T`})]}),(0,r.jsxs)(eA,{id:"nfs",title:"7. NFS и автомонтирование",device:"HQ-SRV, HQ-CLI",children:[(0,r.jsx)(e_,{children:"HQ-SRV"}),(0,r.jsx)(ez,{code:`apt-get update
apt-get install nfs-server nfs-utils -y
mkdir /raid/nfs
chmod 777 /raid/nfs
cp /etc/exports /etc/exports.back
echo "/raid/nfs 192.168.2.0/27(rw,no_subtree_check,no_root_squash)" >> /etc/exports
systemctl enable --now nfs-server`}),(0,r.jsx)(e_,{children:"HQ-CLI"}),(0,r.jsx)(ez,{code:`mkdir /mnt/nfs
chmod -R 777 /mnt/nfs
showmount -e hq-srv
cp /etc/fstab /etc/fstab.back
echo "192.168.1.10:/raid/nfs /mnt/nfs nfs rw,soft,_netdev 0 0" >> /etc/fstab
mount -av
df -T`}),(0,r.jsxs)(eT,{children:["Проверка: создать файл в ",(0,r.jsx)("code",{className:"font-mono",children:"/mnt/nfs"})," и увидеть его на стороне сервера."]})]}),(0,r.jsxs)(eA,{id:"web",title:"8. Веб-приложение (LAMP)",device:"HQ-SRV, HQ-CLI",children:[(0,r.jsx)(ez,{title:"Установка LAMP и копирование файлов",code:`mount -o loop /dev/sr0 /mnt/ -v
apt-get install lamp-server -y
cp /mnt/web/index.php /var/www/html
cp /mnt/web/logo.png /var/www/html

systemctl enable --now mariadb`}),(0,r.jsx)(ez,{title:"БД и пользователь",code:`mariadb -e "CREATE DATABASE webdb;"
mariadb -e "
CREATE USER 'web'@'localhost' IDENTIFIED BY 'P@ssw0rd';
GRANT ALL PRIVILEGES ON webdb.* TO 'web'@'localhost';
"`}),(0,r.jsx)(ez,{title:"Импорт дампа",code:`mariadb webdb < /mnt/web/dump.sql
mariadb -e "USE webdb; SHOW TABLES;"`}),(0,r.jsx)(ez,{title:"index.php — параметры подключения",code:`$servername = "localhost";
$username = "web";
$password = "P@ssw0rd";
$dbname = "webdb";`}),(0,r.jsx)(ez,{title:"Запуск веб-сервера",code:"systemctl enable --now httpd2.service"}),(0,r.jsxs)(eT,{children:["Проверка на HQ-CLI: открыть ",(0,r.jsx)("code",{className:"font-mono",children:"web.au-team.irpo"}),", авторизация"," ",(0,r.jsx)("code",{className:"font-mono",children:"WEB / P@ssw0rd"})]})]}),(0,r.jsx)(eA,{id:"yandex",title:"10. Установка Яндекс Браузера",device:"HQ-CLI",children:(0,r.jsx)(ez,{code:`apt-get update
apt-get install yandex-browser-stable -y`})}),(0,r.jsxs)("div",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[(0,r.jsx)("h3",{className:"font-semibold text-foreground mb-3",children:"Чек-лист перед сдачей"}),(0,r.jsx)("ul",{className:"space-y-2 text-sm text-muted-foreground leading-relaxed",children:["Chrony на ISP работает","Nginx reverse proxy и Basic Auth подняты","NAT портов на HQ-RTR и BR-RTR настроен","Samba DC на BR-SRV создан","Пользователи hquser1..hquser5 добавлены в группу hq","Ansible с BR-SRV отвечает pong","Docker-стек на BR-SRV работает","RAID0 и NFS на HQ-SRV настроены","Веб-приложение на HQ-SRV запускается","Яндекс Браузер установлен на HQ-CLI"].map(e=>(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(i,{className:"w-4 h-4 text-primary mt-0.5 shrink-0"}),(0,r.jsx)("span",{children:e})]},e))})]})]})]}),(0,r.jsx)("footer",{className:"border-t border-border py-6",children:(0,r.jsx)("div",{className:"max-w-5xl mx-auto px-4 text-center text-xs text-muted-foreground",children:"Шпаргалка-подстраховка. Нажмите на блок и используйте кнопку копирования."})})]})}],31713)}]);