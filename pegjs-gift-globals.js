!function(t){"use strict";function Ke(t,r,e,n){this.message=t,this.expected=r,this.found=e,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,Ke)}!function(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}(Ke,Error),Ke.buildMessage=function(t,r){var e,o={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var r,e="";for(r=0;r<t.parts.length;r++)e+=t.parts[r]instanceof Array?c(t.parts[r][0])+"-"+c(t.parts[r][1]):c(t.parts[r]);return"["+(t.inverted?"^":"")+e+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}function c(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+n(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+n(t)})}return"Expected "+function(t){var r,e,n,u=new Array(t.length);for(r=0;r<t.length;r++)u[r]=(n=t[r],o[n.type](n));if(u.sort(),0<u.length){for(e=r=1;r<u.length;r++)u[r-1]!==u[r]&&(u[e]=u[r],e++);u.length=e}switch(u.length){case 1:return u[0];case 2:return u[0]+" or "+u[1];default:return u.slice(0,-1).join(", ")+", or "+u[u.length-1]}}(t)+" but "+((e=r)?'"'+u(e)+'"':"end of input")+" found."},t.giftParser={SyntaxError:Ke,parse:function(G,t){t=void 0!==t?t:{};var r,O={},e={GIFTQuestions:pe},n=pe,u=function(t){return t},o=ie("Category"),c="$",a=ce("$",!1),i="CATEGORY:",l=ce("CATEGORY:",!1),s=function(t){return{type:"Category",title:t}},f=ie("Description"),h=function(t,r){return Je(),{type:"Description",title:t,stem:r,hasEmbeddedAnswers:!1}},D="{",Q=ce("{",!1),U="}",Y=ce("}",!1),$=function(t,r,e,n){var u=null!==n,o=r?r.text+(u?" ":""):"",c=r&&r.format||n&&n.format||"moodle",a=o+(u?"_____ "+n.text:""),i={type:e.type,title:t,stem:{format:c,text:a},hasEmbeddedAnswers:u};return i=function(t,r){switch(t.globalFeedback=r.globalFeedback,t.type){case"TF":t.isTrue=r.isTrue,t.incorrectFeedback=r.feedback[1],t.correctFeedback=r.feedback[2];break;case"MC":case"Numerical":case"Short":t.choices=r.choices;break;case"Matching":t.matchPairs=r.matchPairs}return"MC"==t.type&&function(t){for(var r=!0,e=0;e<t.length;e++)r&=t[e].isCorrect;return r}(t.choices)&&(t.type="Short"),t}(i,e),Je(),i},H=ie("{= match1 -> Match1\n...}"),I=function(t,r){return{type:"Matching",matchPairs:t,globalFeedback:r}},z=ie("matches"),B=function(t){return t},p=ie("match"),d="=",g=ce("=",!1),A="->",v=ce("->",!1),b=function(t,r){return{subquestion:{format:null!==t?t.format:Be(),text:null!==t?t.text:""},subanswer:r}},J=ie("{T} or {F} or {True} or {False}"),K=function(t,r,e){return{type:"TF",isTrue:t,feedback:r,globalFeedback:e}},V=function(t){return t},W="true",X=ce("TRUE",!0),Z="t",tt=ce("T",!0),rt=function(){return!0},et="false",nt=ce("FALSE",!0),ut="f",ot=ce("F",!0),ct=function(){return!1},at=ie("{=correct choice ~incorrect choice ... }"),it=function(t,r){return{type:"MC",choices:t,globalFeedback:r}},lt=ie("Choices"),st=function(t){return t},m=ie("Choice"),C=/^[=~]/,x=ae(["=","~"],!1,!1),y=function(t,r){var e=t[2],n=t[4];return t={isCorrect:"="==t[0],weight:e,text:n,feedback:r}},w=ie("(weight)"),F="%",k=ce("%",!1),E=/^[\-]/,T=ae(["-"],!1,!1),S=function(t){return parseFloat(t.join(""))},j=ie("(percent)"),M="100",R=ce("100",!1),L=/^[0-9]/,N=ae([["0","9"]],!1,!1),_=/^[.]/,P=ae(["."],!1,!1),q=function(){return oe()},ft=ie("(feedback)"),ht="#",pt=ce("#",!1),dt="###",gt=ce("###",!1),At=function(t){return t},vt=ie("Essay question { ... }"),bt="",mt=function(t){return{type:"Essay",globalFeedback:t}},Ct=ie("Single short answer { ... }"),xt=function(t,r,e){var n=[];return n.push({isCorrect:!0,text:t,feedback:r,weight:null}),{type:"Short",choices:n,globalFeedback:e}},yt=ie("{#... }"),wt=function(t,r){return{type:"Numerical",choices:t,globalFeedback:r}},Ft=ie("Numerical Answers"),kt=ie("Multiple Numerical Choices"),Et=ie("Numerical Choice"),Tt=function(t,r){var e=t[0],n=t[1],u=t[2];return t={isCorrect:"="==e,weight:n,text:null!==u?u:{format:Be(),text:"*"},feedback:r}},St=ie("Single numeric answer"),jt=ie("(number with range)"),Mt=":",Rt=ce(":",!1),Lt=function(t,r){return{type:"range",number:t,range:r}},Nt=ie("(number with high-low)"),_t="..",Pt=ce("..",!1),qt=function(t,r){return{type:"high-low",numberHigh:r,numberLow:t}},Gt=ie("(number answer)"),Ot=function(t){return{type:"simple",number:t}},Dt=ie(":: Title ::"),Qt="::",Ut=ce("::",!1),Yt=function(t){return t.join("")},$t=ie("Question stem"),Ht=function(t){var r;return r=t.format,Ie=r,t},It=ie("(blank line separator)"),zt=ie("blank line"),Bt=ie("(Title text)"),Jt=function(t){return t},Kt=ie("(text character)"),Vt=ie("format"),Wt="[",Xt=ce("[",!1),Zt="html",tr=ce("html",!1),rr="markdown",er=ce("markdown",!1),nr="plain",ur=ce("plain",!1),or="moodle",cr=ce("moodle",!1),ar="]",ir=ce("]",!1),lr=function(t){return t},sr=ie("(escape character)"),fr="\\",hr=ce("\\",!1),pr=ie("escape sequence"),dr="~",gr=ce("~",!1),Ar=function(t){return t},vr=ie(""),br={type:"any"},mr=function(){return oe()},Cr=ie("(formatted text excluding '->'"),xr=function(t,r){return{format:null!==t?t:Be(),text:"html"!==t?ze(r.join("").trim()):r.join("").replace(/\r\n/g,"\n")}},yr=ie("(formatted text)"),wr=ie("(unformatted text)"),Fr=function(t){return ze(t.join("").trim())},kr=ie("(category text)"),Er=function(t){return t.flat().join("")},Tr=function(t,r){return parseFloat(t.join("")+r)},Sr=".",jr=ce(".",!1),Mr=function(t){return"."+t.join("")},Rr="####",Lr=ce("####",!1),Nr=function(t){return t},_r=ie("(single line whitespace)"),Pr=ie("(multiple line whitespace)"),qr=ie("(comment)"),Gr="//",Or=ce("//",!1),Dr=function(){return null},Qr=ie("(space)"),Ur=" ",Yr=ce(" ",!1),$r="\t",Hr=ce("\t",!1),Ir=ie("(end of line)"),zr="\r\n",Br=ce("\r\n",!1),Jr="\n",Kr=ce("\n",!1),Vr="\r",Wr=ce("\r",!1),Xr=function(){return"EOF"},Zr=0,te=0,re=[{line:1,column:1}],ee=0,ne=[],ue=0;if("startRule"in t){if(!(t.startRule in e))throw new Error("Can't start parsing from rule \""+t.startRule+'".');n=e[t.startRule]}function oe(){return G.substring(te,Zr)}function ce(t,r){return{type:"literal",text:t,ignoreCase:r}}function ae(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function ie(t){return{type:"other",description:t}}function le(t){var r,e=re[t];if(e)return e;for(r=t-1;!re[r];)r--;for(e={line:(e=re[r]).line,column:e.column};r<t;)10===G.charCodeAt(r)?(e.line++,e.column=1):e.column++,r++;return re[t]=e}function se(t,r){var e=le(t),n=le(r);return{start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function fe(t){Zr<ee||(ee<Zr&&(ee=Zr,ne=[]),ne.push(t))}function he(t,r,e){return new Ke(Ke.buildMessage(t,r),t,r,e)}function pe(){var t,r,e;if(t=Zr,r=[],(e=de())===O&&(e=ge())===O&&(e=Ae()),e!==O)for(;e!==O;)r.push(e),(e=de())===O&&(e=ge())===O&&(e=Ae());else r=O;return r!==O&&(e=Oe())!==O&&De()!==O?(te=t,t=r=u(r)):(Zr=t,t=O),t}function de(){var t,r,e,n;return ue++,t=Zr,De()!==O?(36===G.charCodeAt(Zr)?(r=c,Zr++):(r=O,0===ue&&fe(a)),r!==O?(G.substr(Zr,9)===i?(e=i,Zr+=9):(e=O,0===ue&&fe(l)),e!==O&&Oe()!==O&&(n=function(){var t,r,e,n,u;for(ue++,r=[],n=e=t=Zr,ue++,u=Ye(),ue--,u===O?n=void 0:(Zr=n,n=O),n!==O?(G.length>Zr?(u=G.charAt(Zr),Zr++):(u=O,0===ue&&fe(br)),u!==O?e=n=[n,u]:(Zr=e,e=O)):(Zr=e,e=O);e!==O;)r.push(e),n=e=Zr,ue++,u=Ye(),ue--,u===O?n=void 0:(Zr=n,n=O),n!==O?(G.length>Zr?(u=G.charAt(Zr),Zr++):(u=O,0===ue&&fe(br)),u!==O?e=n=[n,u]:(Zr=e,e=O)):(Zr=e,e=O);return r!==O?(e=Zr,ue++,(n=Ye())===O&&(n=$e()),ue--,n!==O?(Zr=e,e=void 0):e=O,e!==O?(te=t,r=Er(r),t=r):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&(r=O,0===ue&&fe(kr)),t}())!==O&&ke()!==O?(te=t,t=s(n)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&0===ue&&fe(o),t}function ge(){var t,r,e;return ue++,t=Zr,De()!==O?((r=we())===O&&(r=null),r!==O&&Oe()!==O&&(e=Fe())!==O&&ke()!==O?(te=t,t=h(r,e)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&0===ue&&fe(f),t}function Ae(){var t,r,e,n,u,o,c,a,i,l,s,f,h,p,d,g,A,v,b,m,C,x,y,w,F,k,E,T,S,j,M,R,L,N,_,P,q;return t=Zr,De()!==O?((r=we())===O&&(r=null),r!==O&&Oe()!==O?((e=Fe())===O&&(e=null),e!==O&&Oe()!==O?(123===G.charCodeAt(Zr)?(n=D,Zr++):(n=O,0===ue&&fe(Q)),n!==O&&Oe()!==O?(ue++,_=Zr,(P=function(){var t,r,e;if(ue++,t=Zr,r=[],(e=ve())!==O)for(;e!==O;)r.push(e),e=ve();else r=O;return r!==O&&(te=t,r=B(r)),ue--,(t=r)===O&&(r=O,0===ue&&fe(z)),t}())!==O&&Oe()!==O?((q=Ge())===O&&(q=null),q!==O&&Oe()!==O?(te=_,P=I(P,q),_=P):(Zr=_,_=O)):(Zr=_,_=O),ue--,_===O&&(P=O,0===ue&&fe(H)),(u=_)===O&&(ue++,L=S=y=Zr,G.substr(Zr,4).toLowerCase()===W?(N=G.substr(Zr,4),Zr+=4):(N=O,0===ue&&fe(X)),N===O&&(G.substr(Zr,1).toLowerCase()===Z?(N=G.charAt(Zr),Zr++):(N=O,0===ue&&fe(tt))),N!==O&&(te=L,N=rt()),(j=L=N)===O&&(M=Zr,G.substr(Zr,5).toLowerCase()===et?(R=G.substr(Zr,5),Zr+=5):(R=O,0===ue&&fe(nt)),R===O&&(G.substr(Zr,1).toLowerCase()===ut?(R=G.charAt(Zr),Zr++):(R=O,0===ue&&fe(ot))),R!==O&&(te=M,R=ct()),j=M=R),j!==O&&(te=S,j=V(j)),(w=S=j)!==O&&Oe()!==O?(F=Zr,(k=Oe())!==O?((E=Ce())===O&&(E=null),E!==O?((T=Ce())===O&&(T=null),T!==O?F=k=[k,E,T]:(Zr=F,F=O)):(Zr=F,F=O)):(Zr=F,F=O),F!==O&&(k=Oe())!==O?((E=Ge())===O&&(E=null),E!==O?(te=y,w=K(w,F,E),y=w):(Zr=y,y=O)):(Zr=y,y=O)):(Zr=y,y=O),ue--,y===O&&(w=O,0===ue&&fe(J)),(u=y)===O)&&(ue++,m=Zr,(C=function(){var t,r,e;if(ue++,t=Zr,r=[],(e=be())!==O)for(;e!==O;)r.push(e),e=be();else r=O;return r!==O&&(te=t,r=st(r)),ue--,(t=r)===O&&(r=O,0===ue&&fe(lt)),t}())!==O&&Oe()!==O?((x=Ge())===O&&(x=null),x!==O&&Oe()!==O?(te=m,C=it(C,x),m=C):(Zr=m,m=O)):(Zr=m,m=O),ue--,m===O&&(C=O,0===ue&&fe(at)),(u=m)===O)&&(ue++,d=Zr,35===G.charCodeAt(Zr)?(g=ht,Zr++):(g=O,0===ue&&fe(pt)),g!==O&&Oe()!==O&&(ue++,(b=function(){var t,r,e;if(ue++,t=Zr,r=[],(e=xe())!==O)for(;e!==O;)r.push(e),e=xe();else r=O;return r!==O&&(te=t,r=st(r)),ue--,(t=r)===O&&(r=O,0===ue&&fe(kt)),t}())===O&&(b=ye()),ue--,b===O&&0===ue&&fe(Ft),(A=b)!==O)&&Oe()!==O?((v=Ge())===O&&(v=null),v!==O?(te=d,g=wt(A,v),d=g):(Zr=d,d=O)):(Zr=d,d=O),ue--,d===O&&(g=O,0===ue&&fe(yt)),(u=d)===O)&&(ue++,s=Zr,(f=Pe())!==O&&Oe()!==O?((h=Ce())===O&&(h=null),h!==O&&Oe()!==O?((p=Ge())===O&&(p=null),p!==O&&Oe()!==O?(te=s,f=xt(f,h,p),s=f):(Zr=s,s=O)):(Zr=s,s=O)):(Zr=s,s=O),ue--,s===O&&(f=O,0===ue&&fe(Ct)),(u=s)===O)&&(ue++,a=Zr,(i=bt)!==O&&Oe()!==O?((l=Ge())===O&&(l=null),l!==O&&Oe()!==O?(te=a,i=mt(l),a=i):(Zr=a,a=O)):(Zr=a,a=O),ue--,a===O&&(i=O,0===ue&&fe(vt)),u=a),u!==O&&Oe()!==O?(125===G.charCodeAt(Zr)?(o=U,Zr++):(o=O,0===ue&&fe(Y)),o!==O&&Oe()!==O?((c=Qe())===O&&(c=Fe()),c===O&&(c=null),c!==O&&ke()!==O?(te=t,t=$(r,e,u,c)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),t}function ve(){var t,r,e,n,u;return ue++,t=Zr,Oe()!==O?(61===G.charCodeAt(Zr)?(r=d,Zr++):(r=O,0===ue&&fe(g)),r!==O&&Oe()!==O?((e=function(){var t,r,e,n;if(ue++,t=Zr,(r=Me())===O&&(r=null),r!==O)if(Oe()!==O){if(e=[],(n=je())!==O)for(;n!==O;)e.push(n),n=je();else e=O;e!==O?(te=t,r=xr(r,e),t=r):(Zr=t,t=O)}else Zr=t,t=O;else Zr=t,t=O;return ue--,t===O&&(r=O,0===ue&&fe(Cr)),t}())===O&&(e=null),e!==O&&Oe()!==O?(G.substr(Zr,2)===A?(n=A,Zr+=2):(n=O,0===ue&&fe(v)),n!==O&&Oe()!==O&&(u=function(){var t,r,e;if(ue++,t=Zr,r=[],(e=Se())!==O)for(;e!==O;)r.push(e),e=Se();else r=O;return r!==O&&(te=t,r=Fr(r)),ue--,(t=r)===O&&(r=O,0===ue&&fe(wr)),t}())!==O&&Oe()!==O?(te=t,t=b(e,u)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&0===ue&&fe(p),t}function be(){var t,r,e,n,u,o,c;return ue++,t=Zr,Oe()!==O?(r=Zr,C.test(G.charAt(Zr))?(e=G.charAt(Zr),Zr++):(e=O,0===ue&&fe(x)),e!==O&&(n=Oe())!==O?((u=me())===O&&(u=null),u!==O&&(o=Oe())!==O&&(c=Pe())!==O?r=e=[e,n,u,o,c]:(Zr=r,r=O)):(Zr=r,r=O),r!==O?((e=Ce())===O&&(e=null),e!==O&&(n=Oe())!==O?(te=t,t=y(r,e)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&0===ue&&fe(m),t}function me(){var t,r,e,n,u;return ue++,t=Zr,37===G.charCodeAt(Zr)?(r=F,Zr++):(r=O,0===ue&&fe(k)),r!==O?(e=Zr,E.test(G.charAt(Zr))?(n=G.charAt(Zr),Zr++):(n=O,0===ue&&fe(T)),n===O&&(n=null),n!==O&&(u=function(){var t,r,e,n,u,o;if(ue++,G.substr(Zr,3)===M?(t=M,Zr+=3):(t=O,0===ue&&fe(R)),t===O)if(t=Zr,L.test(G.charAt(Zr))?(r=G.charAt(Zr),Zr++):(r=O,0===ue&&fe(N)),r!==O)if(L.test(G.charAt(Zr))?(e=G.charAt(Zr),Zr++):(e=O,0===ue&&fe(N)),e===O&&(e=null),e!==O)if(_.test(G.charAt(Zr))?(n=G.charAt(Zr),Zr++):(n=O,0===ue&&fe(P)),n===O&&(n=null),n!==O){for(u=[],L.test(G.charAt(Zr))?(o=G.charAt(Zr),Zr++):(o=O,0===ue&&fe(N));o!==O;)u.push(o),L.test(G.charAt(Zr))?(o=G.charAt(Zr),Zr++):(o=O,0===ue&&fe(N));u!==O?(te=t,r=q(),t=r):(Zr=t,t=O)}else Zr=t,t=O;else Zr=t,t=O;else Zr=t,t=O;return ue--,t===O&&(r=O,0===ue&&fe(j)),t}())!==O?e=n=[n,u]:(Zr=e,e=O),e!==O?(37===G.charCodeAt(Zr)?(n=F,Zr++):(n=O,0===ue&&fe(k)),n!==O?(te=t,t=r=S(e)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&(r=O,0===ue&&fe(w)),t}function Ce(){var t,r,e,n,u;return ue++,t=Zr,35===G.charCodeAt(Zr)?(r=ht,Zr++):(r=O,0===ue&&fe(pt)),r!==O?(e=Zr,ue++,G.substr(Zr,3)===dt?(n=dt,Zr+=3):(n=O,0===ue&&fe(gt)),ue--,n===O?e=void 0:(Zr=e,e=O),e!==O&&(n=Oe())!==O?((u=Pe())===O&&(u=null),u!==O?(te=t,t=r=At(u)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&(r=O,0===ue&&fe(ft)),t}function xe(){var t,r,e,n,u;return ue++,t=Zr,Oe()!==O?(r=Zr,C.test(G.charAt(Zr))?(e=G.charAt(Zr),Zr++):(e=O,0===ue&&fe(x)),e!==O?((n=me())===O&&(n=null),n!==O?((u=ye())===O&&(u=null),u!==O?r=e=[e,n,u]:(Zr=r,r=O)):(Zr=r,r=O)):(Zr=r,r=O),r!==O&&(e=Oe())!==O?((n=Ce())===O&&(n=null),n!==O&&(u=Oe())!==O?(te=t,t=Tt(r,n)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&0===ue&&fe(Et),t}function ye(){var t,r,e,n,u,o,c,a,i,l,s;return ue++,ue++,a=Zr,(i=qe())!==O?(58===G.charCodeAt(Zr)?(l=Mt,Zr++):(l=O,0===ue&&fe(Rt)),l!==O&&(s=qe())!==O?(te=a,i=Lt(i,s),a=i):(Zr=a,a=O)):(Zr=a,a=O),ue--,a===O&&(i=O,0===ue&&fe(jt)),(t=a)===O&&(ue++,n=Zr,(u=qe())!==O?(G.substr(Zr,2)===_t?(o=_t,Zr+=2):(o=O,0===ue&&fe(Pt)),o!==O&&(c=qe())!==O?(te=n,u=qt(u,c),n=u):(Zr=n,n=O)):(Zr=n,n=O),ue--,n===O&&(u=O,0===ue&&fe(Nt)),(t=n)===O)&&(ue++,r=Zr,(e=qe())!==O&&(te=r,e=Ot(e)),ue--,(r=e)===O&&(e=O,0===ue&&fe(Gt)),t=r),ue--,t===O&&0===ue&&fe(St),t}function we(){var t,r,e,n;if(ue++,t=Zr,G.substr(Zr,2)===Qt?(r=Qt,Zr+=2):(r=O,0===ue&&fe(Ut)),r!==O){if(e=[],(n=Te())!==O)for(;n!==O;)e.push(n),n=Te();else e=O;e!==O?(G.substr(Zr,2)===Qt?(n=Qt,Zr+=2):(n=O,0===ue&&fe(Ut)),n!==O?(te=t,t=r=Yt(e)):(Zr=t,t=O)):(Zr=t,t=O)}else Zr=t,t=O;return ue--,t===O&&(r=O,0===ue&&fe(Dt)),t}function Fe(){var t,r;return ue++,t=Zr,(r=Pe())!==O&&(te=t,r=Ht(r)),ue--,(t=r)===O&&(r=O,0===ue&&fe($t)),t}function ke(){var t,r,e,n;if(ue++,t=Zr,(r=Ye())!==O){if(e=[],(n=Ee())!==O)for(;n!==O;)e.push(n),n=Ee();else e=O;e!==O?t=r=[r,e]:(Zr=t,t=O)}else Zr=t,t=O;return t===O&&(t=Zr,(r=Ye())===O&&(r=null),r!==O&&(e=$e())!==O?t=r=[r,e]:(Zr=t,t=O)),ue--,t===O&&(r=O,0===ue&&fe(It)),t}function Ee(){var t,r,e;for(ue++,t=Zr,r=[],e=Ue();e!==O;)r.push(e),e=Ue();return r!==O&&(e=Ye())!==O?t=r=[r,e]:(Zr=t,t=O),ue--,t===O&&(r=O,0===ue&&fe(zt)),t}function Te(){var t,r,e;return ue++,r=t=Zr,ue++,G.substr(Zr,2)===Qt?(e=Qt,Zr+=2):(e=O,0===ue&&fe(Ut)),ue--,e===O?r=void 0:(Zr=r,r=O),r!==O?((e=Le())===O&&(e=Ne()),e!==O?(te=t,t=r=Jt(e)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&(r=O,0===ue&&fe(Bt)),t}function Se(){var t;return ue++,(t=Ne())===O&&(t=Le())===O&&(t=Re()),ue--,t===O&&0===ue&&fe(Kt),t}function je(){var t,r,e,n;return ue++,ue++,e=r=Zr,ue++,(n=Le())===O&&(n=_e())===O&&(G.substr(Zr,2)===A?(n=A,Zr+=2):(n=O,0===ue&&fe(v)),n===O&&(n=ke())),ue--,n===O?e=void 0:(Zr=e,e=O),e!==O?(G.length>Zr?(n=G.charAt(Zr),Zr++):(n=O,0===ue&&fe(br)),n!==O?(te=r,e=mr(),r=e):(Zr=r,r=O)):(Zr=r,r=O),ue--,r===O&&(e=O,0===ue&&fe(vr)),(t=r)===O&&(t=Le())===O&&(t=Re()),ue--,t===O&&0===ue&&fe(Kt),t}function Me(){var t,r,e,n;return ue++,t=Zr,91===G.charCodeAt(Zr)?(r=Wt,Zr++):(r=O,0===ue&&fe(Xt)),r!==O?(G.substr(Zr,4)===Zt?(e=Zt,Zr+=4):(e=O,0===ue&&fe(tr)),e===O&&(G.substr(Zr,8)===rr?(e=rr,Zr+=8):(e=O,0===ue&&fe(er)),e===O&&(G.substr(Zr,5)===nr?(e=nr,Zr+=5):(e=O,0===ue&&fe(ur)),e===O&&(G.substr(Zr,6)===or?(e=or,Zr+=6):(e=O,0===ue&&fe(cr))))),e!==O?(93===G.charCodeAt(Zr)?(n=ar,Zr++):(n=O,0===ue&&fe(ir)),n!==O?(te=t,t=r=lr(e)):(Zr=t,t=O)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&(r=O,0===ue&&fe(Vt)),t}function Re(){var t;return ue++,92===G.charCodeAt(Zr)?(t=fr,Zr++):(t=O,0===ue&&fe(hr)),ue--,t===O&&0===ue&&fe(sr),t}function Le(){var t,r;return ue++,t=Zr,Re()!==O?((r=Re())===O&&(58===G.charCodeAt(Zr)?(r=Mt,Zr++):(r=O,0===ue&&fe(Rt)),r===O&&(126===G.charCodeAt(Zr)?(r=dr,Zr++):(r=O,0===ue&&fe(gr)),r===O&&(61===G.charCodeAt(Zr)?(r=d,Zr++):(r=O,0===ue&&fe(g)),r===O&&(35===G.charCodeAt(Zr)?(r=ht,Zr++):(r=O,0===ue&&fe(pt)),r===O&&(91===G.charCodeAt(Zr)?(r=Wt,Zr++):(r=O,0===ue&&fe(Xt)),r===O&&(93===G.charCodeAt(Zr)?(r=ar,Zr++):(r=O,0===ue&&fe(ir)),r===O&&(123===G.charCodeAt(Zr)?(r=D,Zr++):(r=O,0===ue&&fe(Q)),r===O&&(125===G.charCodeAt(Zr)?(r=U,Zr++):(r=O,0===ue&&fe(Y)))))))))),r!==O?(te=t,t=Ar(r)):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&0===ue&&fe(pr),t}function Ne(){var t,r,e;return ue++,r=t=Zr,ue++,(e=Le())===O&&(e=_e())===O&&(e=ke()),ue--,e===O?r=void 0:(Zr=r,r=O),r!==O?(G.length>Zr?(e=G.charAt(Zr),Zr++):(e=O,0===ue&&fe(br)),e!==O?(te=t,t=r=mr()):(Zr=t,t=O)):(Zr=t,t=O),ue--,t===O&&(r=O,0===ue&&fe(vr)),t}function _e(){var t;return 61===G.charCodeAt(Zr)?(t=d,Zr++):(t=O,0===ue&&fe(g)),t===O&&(126===G.charCodeAt(Zr)?(t=dr,Zr++):(t=O,0===ue&&fe(gr)),t===O&&(35===G.charCodeAt(Zr)?(t=ht,Zr++):(t=O,0===ue&&fe(pt)),t===O&&(123===G.charCodeAt(Zr)?(t=D,Zr++):(t=O,0===ue&&fe(Q)),t===O&&(125===G.charCodeAt(Zr)?(t=U,Zr++):(t=O,0===ue&&fe(Y)),t===O&&(92===G.charCodeAt(Zr)?(t=fr,Zr++):(t=O,0===ue&&fe(hr)),t===O&&(58===G.charCodeAt(Zr)?(t=Mt,Zr++):(t=O,0===ue&&fe(Rt)))))))),t}function Pe(){var t,r,e,n;if(ue++,t=Zr,(r=Me())===O&&(r=null),r!==O)if(Oe()!==O){if(e=[],(n=Se())!==O)for(;n!==O;)e.push(n),n=Se();else e=O;e!==O?(te=t,t=r=xr(r,e)):(Zr=t,t=O)}else Zr=t,t=O;else Zr=t,t=O;return ue--,t===O&&(r=O,0===ue&&fe(yr)),t}function qe(){var t,r,e;if(t=Zr,r=[],L.test(G.charAt(Zr))?(e=G.charAt(Zr),Zr++):(e=O,0===ue&&fe(N)),e!==O)for(;e!==O;)r.push(e),L.test(G.charAt(Zr))?(e=G.charAt(Zr),Zr++):(e=O,0===ue&&fe(N));else r=O;return r!==O?((e=function(){var t,r,e,n,u;if(t=Zr,46===G.charCodeAt(Zr)?(r=Sr,Zr++):(r=O,0===ue&&fe(jr)),r!==O)if(e=Zr,ue++,46===G.charCodeAt(Zr)?(n=Sr,Zr++):(n=O,0===ue&&fe(jr)),ue--,n===O?e=void 0:(Zr=e,e=O),e!==O){for(n=[],L.test(G.charAt(Zr))?(u=G.charAt(Zr),Zr++):(u=O,0===ue&&fe(N));u!==O;)n.push(u),L.test(G.charAt(Zr))?(u=G.charAt(Zr),Zr++):(u=O,0===ue&&fe(N));n!==O?(te=t,r=Mr(n),t=r):(Zr=t,t=O)}else Zr=t,t=O;else Zr=t,t=O;return t}())===O&&(e=null),e!==O?(te=t,t=r=Tr(r,e)):(Zr=t,t=O)):(Zr=t,t=O),t}function Ge(){var t,r,e;return t=Zr,G.substr(Zr,4)===Rr?(r=Rr,Zr+=4):(r=O,0===ue&&fe(Lr)),r!==O&&Oe()!==O&&(e=Pe())!==O&&Oe()!==O?(te=t,t=r=Nr(e)):(Zr=t,t=O),t}function Oe(){var t,r,e,n,u;for(ue++,t=[],(r=Ue())===O&&(r=Zr,(e=Ye())!==O?(n=Zr,ue++,u=Ee(),ue--,u===O?n=void 0:(Zr=n,n=O),n!==O?r=e=[e,n]:(Zr=r,r=O)):(Zr=r,r=O));r!==O;)t.push(r),(r=Ue())===O&&(r=Zr,(e=Ye())!==O?(n=Zr,ue++,u=Ee(),ue--,u===O?n=void 0:(Zr=n,n=O),n!==O?r=e=[e,n]:(Zr=r,r=O)):(Zr=r,r=O));return ue--,t===O&&(r=O,0===ue&&fe(_r)),t}function De(){var t,r;for(ue++,t=[],(r=Qe())===O&&(r=Ye())===O&&(r=Ue());r!==O;)t.push(r),(r=Qe())===O&&(r=Ye())===O&&(r=Ue());return ue--,t===O&&(r=O,0===ue&&fe(Pr)),t}function Qe(){var t,r,e,n,u,o;if(ue++,t=Zr,G.substr(Zr,2)===Gr?(r=Gr,Zr+=2):(r=O,0===ue&&fe(Or)),r!==O){for(e=[],u=n=Zr,ue++,o=Ye(),ue--,o===O?u=void 0:(Zr=u,u=O),u!==O?(G.length>Zr?(o=G.charAt(Zr),Zr++):(o=O,0===ue&&fe(br)),o!==O?n=u=[u,o]:(Zr=n,n=O)):(Zr=n,n=O);n!==O;)e.push(n),u=n=Zr,ue++,o=Ye(),ue--,o===O?u=void 0:(Zr=u,u=O),u!==O?(G.length>Zr?(o=G.charAt(Zr),Zr++):(o=O,0===ue&&fe(br)),o!==O?n=u=[u,o]:(Zr=n,n=O)):(Zr=n,n=O);e!==O?(n=Zr,ue++,(u=Ye())===O&&(u=$e()),ue--,u!==O?(Zr=n,n=void 0):n=O,n!==O?(te=t,t=r=Dr()):(Zr=t,t=O)):(Zr=t,t=O)}else Zr=t,t=O;return ue--,t===O&&(r=O,0===ue&&fe(qr)),t}function Ue(){var t;return ue++,32===G.charCodeAt(Zr)?(t=Ur,Zr++):(t=O,0===ue&&fe(Yr)),t===O&&(9===G.charCodeAt(Zr)?(t=$r,Zr++):(t=O,0===ue&&fe(Hr))),ue--,t===O&&0===ue&&fe(Qr),t}function Ye(){var t;return ue++,G.substr(Zr,2)===zr?(t=zr,Zr+=2):(t=O,0===ue&&fe(Br)),t===O&&(10===G.charCodeAt(Zr)?(t=Jr,Zr++):(t=O,0===ue&&fe(Kr)),t===O&&(13===G.charCodeAt(Zr)?(t=Vr,Zr++):(t=O,0===ue&&fe(Wr)))),ue--,t===O&&0===ue&&fe(Ir),t}function $e(){var t,r,e;return r=t=Zr,ue++,G.length>Zr?(e=G.charAt(Zr),Zr++):(e=O,0===ue&&fe(br)),ue--,e===O?r=void 0:(Zr=r,r=O),r!==O&&(te=t,r=Xr()),t=r}var He="moodle",Ie=He;function ze(t){return(t=t.replace(/[\n\r]/g," ")).replace(/\s\s+/g," ")}function Be(){return Ie}function Je(){Ie=He}if((r=n())!==O&&Zr===G.length)return r;throw r!==O&&Zr<G.length&&fe({type:"end"}),he(ne,ee<G.length?G.charAt(ee):null,ee<G.length?se(ee,ee+1):se(ee,ee))}}}(this);
