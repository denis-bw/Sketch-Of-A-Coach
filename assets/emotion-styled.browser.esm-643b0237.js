import{R as se,r as M}from"./index-bf588e3e.js";function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ee.apply(null,arguments)}function ge(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Oe=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Re=ge(function(e){return Oe.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Te=!1;function _e(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function $e(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Me=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!Te:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($e(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=_e(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",Y="-moz-",l="-webkit-",ye="comm",ne="rule",ae="decl",Ie="@import",be="@keyframes",Ne="@layer",Fe=Math.abs,K=String.fromCharCode,Le=Object.assign;function De(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function ve(e){return e.trim()}function ze(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function re(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function z(e,r,t){return e.slice(r,t)}function T(e){return e.length}function ie(e){return e.length}function V(e,r){return r.push(e),e}function He(e,r){return e.map(r).join("")}var Z=1,F=1,xe=0,C=0,x=0,L="";function J(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:Z,column:F,length:s,return:""}}function D(e,r){return Le(J("",null,null,"",null,null,0),e,{length:-e.length},r)}function We(){return x}function Ue(){return x=C>0?w(L,--C):0,F--,x===10&&(F=1,Z--),x}function E(){return x=C<xe?w(L,C++):0,F++,x===10&&(F=1,Z++),x}function $(){return w(L,C)}function j(){return C}function U(e,r){return z(L,e,r)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function we(e){return Z=F=1,xe=T(L=e),C=0,[]}function ke(e){return L="",e}function B(e){return ve(U(C-1,te(e===91?e+2:e===40?e+1:e)))}function qe(e){for(;(x=$())&&x<33;)E();return H(e)>2||H(x)>3?"":" "}function Ge(e,r){for(;--r&&E()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return U(e,j()+(r<6&&$()==32&&E()==32))}function te(e){for(;E();)switch(x){case e:return C;case 34:case 39:e!==34&&e!==39&&te(x);break;case 40:e===41&&te(e);break;case 92:E();break}return C}function Ve(e,r){for(;E()&&e+x!==47+10;)if(e+x===42+42&&$()===47)break;return"/*"+U(r,C-1)+"*"+K(e===47?e:E())}function je(e){for(;!H($());)E();return U(e,C)}function Be(e){return ke(X("",null,null,null,[""],e=we(e),0,[0],e))}function X(e,r,t,n,a,i,s,c,p){for(var g=0,f=0,d=s,R=0,P=0,m=0,o=1,b=1,y=1,v=0,k="",I=a,O=i,A=n,h=k;b;)switch(m=v,v=E()){case 40:if(m!=108&&w(h,d-1)==58){re(h+=u(B(v),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:h+=B(v);break;case 9:case 10:case 13:case 32:h+=qe(m);break;case 92:h+=Ge(j()-1,7);continue;case 47:switch($()){case 42:case 47:V(Xe(Ve(E(),j()),r,t),p);break;default:h+="/"}break;case 123*o:c[g++]=T(h)*y;case 125*o:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+f:y==-1&&(h=u(h,/\f/g,"")),P>0&&T(h)-d&&V(P>32?ce(h+";",n,t,d-1):ce(u(h," ","")+";",n,t,d-2),p);break;case 59:h+=";";default:if(V(A=oe(h,r,t,g,f,a,c,k,I=[],O=[],d),i),v===123)if(f===0)X(h,r,A,A,I,i,d,c,O);else switch(R===99&&w(h,3)===110?100:R){case 100:case 108:case 109:case 115:X(e,A,A,n&&V(oe(e,A,A,0,0,a,c,k,a,I=[],d),O),a,O,d,c,n?I:O);break;default:X(h,A,A,A,[""],O,0,c,O)}}g=f=P=0,o=y=1,k=h="",d=s;break;case 58:d=1+T(h),P=m;default:if(o<1){if(v==123)--o;else if(v==125&&o++==0&&Ue()==125)continue}switch(h+=K(v),v*o){case 38:y=f>0?1:(h+="\f",-1);break;case 44:c[g++]=(T(h)-1)*y,y=1;break;case 64:$()===45&&(h+=B(E())),R=$(),f=d=T(k=h+=je(j())),v++;break;case 45:m===45&&T(h)==2&&(o=0)}}return i}function oe(e,r,t,n,a,i,s,c,p,g,f){for(var d=a-1,R=a===0?i:[""],P=ie(R),m=0,o=0,b=0;m<n;++m)for(var y=0,v=z(e,d+1,d=Fe(o=s[m])),k=e;y<P;++y)(k=ve(o>0?R[y]+" "+v:u(v,/&\f/g,R[y])))&&(p[b++]=k);return J(e,r,t,a===0?ne:c,p,g,f)}function Xe(e,r,t){return J(e,r,t,ye,K(We()),z(e,2,-2),0)}function ce(e,r,t,n){return J(e,r,t,ae,z(e,0,n),z(e,n+1,-1),n)}function N(e,r){for(var t="",n=ie(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Ye(e,r,t,n){switch(e.type){case Ne:if(e.children.length)break;case Ie:case ae:return e.return=e.return||e.value;case ye:return"";case be:return e.return=e.value+"{"+N(e.children,n)+"}";case ne:e.value=e.props.join(",")}return T(t=N(e.children,n))?e.return=e.value+"{"+t+"}":""}function Ke(e){var r=ie(e);return function(t,n,a,i){for(var s="",c=0;c<r;c++)s+=e[c](t,n,a,i)||"";return s}}function Ze(e){return function(r){r.root||(r=r.return)&&e(r)}}var Je=function(r,t,n){for(var a=0,i=0;a=i,i=$(),a===38&&i===12&&(t[n]=1),!H(i);)E();return U(r,C)},Qe=function(r,t){var n=-1,a=44;do switch(H(a)){case 0:a===38&&$()===12&&(t[n]=1),r[n]+=Je(C-1,t,n);break;case 2:r[n]+=B(a);break;case 4:if(a===44){r[++n]=$()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=K(a)}while(a=E());return r},er=function(r,t){return ke(Qe(we(r),t))},fe=new WeakMap,rr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!fe.get(n))&&!a){fe.set(r,!0);for(var i=[],s=er(t,i),c=n.props,p=0,g=0;p<s.length;p++)for(var f=0;f<c.length;f++,g++)r.props[g]=i[p]?s[p].replace(/&\f/g,c[f]):c[f]+" "+s[p]}}},tr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Se(e,r){switch(De(e,r)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+Y+e+S+e+e;case 6828:case 4268:return l+e+S+e+e;case 6165:return l+e+S+"flex-"+e+e;case 5187:return l+e+u(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return l+e+S+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return l+e+S+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return l+e+S+u(e,"shrink","negative")+e;case 5292:return l+e+S+u(e,"basis","preferred-size")+e;case 6060:return l+"box-"+u(e,"-grow","")+l+e+S+u(e,"grow","positive")+e;case 4554:return l+u(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+Y+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~re(e,"stretch")?Se(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,T(e)-3-(~re(e,"!important")&&10))){case 107:return u(e,":",":"+l)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+l+(w(e,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return l+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+S+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return l+e+S+e+e}return e}var nr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ae:r.return=Se(r.value,r.length);break;case be:return N([D(r,{value:u(r.value,"@","@"+l)})],a);case ne:if(r.length)return He(r.props,function(i){switch(ze(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return N([D(r,{props:[u(i,/:(read-\w+)/,":"+Y+"$1")]})],a);case"::placeholder":return N([D(r,{props:[u(i,/:(plac\w+)/,":"+l+"input-$1")]}),D(r,{props:[u(i,/:(plac\w+)/,":"+Y+"$1")]}),D(r,{props:[u(i,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},ar=[nr],ir=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(o){var b=o.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(o),o.setAttribute("data-s",""))})}var a=r.stylisPlugins||ar,i={},s,c=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(o){for(var b=o.getAttribute("data-emotion").split(" "),y=1;y<b.length;y++)i[b[y]]=!0;c.push(o)});var p,g=[rr,tr];{var f,d=[Ye,Ze(function(o){f.insert(o)})],R=Ke(g.concat(a,d)),P=function(b){return N(Be(b),R)};p=function(b,y,v,k){f=v,P(b?b+"{"+y.styles+"}":y.styles),k&&(m.inserted[y.name]=!0)}}var m={key:t,sheet:new Me({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:p};return m.sheet.hydrate(c),m},sr=!0;function or(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Ce=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||sr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},cr=function(r,t,n){Ce(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function fr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var lr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur=!1,dr=/[A-Z]|^ms/g,hr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pe=function(r){return r.charCodeAt(1)===45},le=function(r){return r!=null&&typeof r!="boolean"},Q=ge(function(e){return Pe(e)?e:e.replace(dr,"-$&").toLowerCase()}),ue=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(hr,function(n,a,i){return _={name:a,styles:i,next:_},a})}return lr[r]!==1&&!Pe(r)&&typeof t=="number"&&t!==0?t+"px":t},pr="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function W(e,r,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return _={name:a.name,styles:a.styles,next:_},a.name;var i=t;if(i.styles!==void 0){var s=i.next;if(s!==void 0)for(;s!==void 0;)_={name:s.name,styles:s.styles,next:_},s=s.next;var c=i.styles+";";return c}return mr(e,r,t)}case"function":{if(e!==void 0){var p=_,g=t(e);return _=p,W(e,r,g)}break}}var f=t;if(r==null)return f;var d=r[f];return d!==void 0?d:f}function mr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=W(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object"){var c=s;r!=null&&r[c]!==void 0?n+=i+"{"+r[c]+"}":le(c)&&(n+=Q(i)+":"+ue(i,c)+";")}else{if(i==="NO_COMPONENT_SELECTOR"&&ur)throw new Error(pr);if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var p=0;p<s.length;p++)le(s[p])&&(n+=Q(i)+":"+ue(i,s[p])+";");else{var g=W(e,r,s);switch(i){case"animation":case"animationName":{n+=Q(i)+":"+g+";";break}default:n+=i+"{"+g+"}"}}}}return n}var de=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_;function gr(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";_=void 0;var i=e[0];if(i==null||i.raw===void 0)n=!1,a+=W(t,r,i);else{var s=i;a+=s[0]}for(var c=1;c<e.length;c++)if(a+=W(t,r,e[c]),n){var p=i;a+=p[c]}de.lastIndex=0;for(var g="",f;(f=de.exec(a))!==null;)g+="-"+f[1];var d=fr(a)+g;return{name:d,styles:a,next:_}}var yr=function(r){return r()},br=se["useInsertionEffect"]?se["useInsertionEffect"]:!1,vr=br||yr,Ae=M.createContext(typeof HTMLElement<"u"?ir({key:"css"}):null);Ae.Provider;var xr=function(r){return M.forwardRef(function(t,n){var a=M.useContext(Ae);return r(t,a,n)})},wr=M.createContext({}),kr=Re,Sr=function(r){return r!=="theme"},he=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?kr:Sr},pe=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},Cr=!1,Pr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Ce(t,n,a),vr(function(){return cr(t,n,a)}),null},Ar=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var c=pe(r,t,n),p=c||he(a),g=!p("as");return function(){var f=arguments,d=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var R=f.length,P=1;P<R;P++)d.push(f[P],f[0][P])}var m=xr(function(o,b,y){var v=g&&o.as||a,k="",I=[],O=o;if(o.theme==null){O={};for(var A in o)O[A]=o[A];O.theme=M.useContext(wr)}typeof o.className=="string"?k=or(b.registered,I,o.className):o.className!=null&&(k=o.className+" ");var h=gr(d.concat(I),b.registered,O);k+=b.key+"-"+h.name,s!==void 0&&(k+=" "+s);var Ee=g&&c===void 0?he(v):p,q={};for(var G in o)g&&G==="as"||Ee(G)&&(q[G]=o[G]);return q.className=k,y&&(q.ref=y),M.createElement(M.Fragment,null,M.createElement(Pr,{cache:b,serialized:h,isStringTag:typeof v=="string"}),M.createElement(v,q))});return m.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",m.defaultProps=r.defaultProps,m.__emotion_real=m,m.__emotion_base=a,m.__emotion_styles=d,m.__emotion_forwardProp=c,Object.defineProperty(m,"toString",{value:function(){return s===void 0&&Cr?"NO_COMPONENT_SELECTOR":"."+s}}),m.withComponent=function(o,b){return e(o,ee({},t,b,{shouldForwardProp:pe(m,b,!0)})).apply(void 0,d)},m}},Er=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],me=Ar.bind();Er.forEach(function(e){me[e]=me(e)});export{me as n};