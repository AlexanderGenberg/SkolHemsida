import{s as R,n as O,r as D,c as F,o as J}from"../chunks/cZ3GyHdV.js";import{S as V,i as W,e as i,s as w,c as u,a as M,k as N,f as x,d as I,l as p,q as U,g as j,h as s,r as E,u as q,v as G}from"../chunks/CGbEUmDr.js";import{b as K}from"../chunks/BhqCAjOi.js";import{u as Q}from"../chunks/CQ6tFKUM.js";function X(m){let a,n,r,v="Inloggning",c,e,f,k="Namn:",L,t,_,g,z="Lösenord:",P,d,S,C,A,h,B="Har du inget konto? Registrera",T,H;return{c(){a=i("main"),n=i("div"),r=i("h1"),r.textContent=v,c=w(),e=i("form"),f=i("label"),f.textContent=k,L=w(),t=i("input"),_=w(),g=i("label"),g.textContent=z,P=w(),d=i("input"),S=w(),C=i("input"),A=w(),h=i("a"),h.textContent=B,this.h()},l(l){a=u(l,"MAIN",{class:!0});var y=M(a);n=u(y,"DIV",{class:!0});var b=M(n);r=u(b,"H1",{"data-svelte-h":!0}),N(r)!=="svelte-58kgg2"&&(r.textContent=v),c=x(b),e=u(b,"FORM",{});var o=M(e);f=u(o,"LABEL",{for:!0,"data-svelte-h":!0}),N(f)!=="svelte-t4ghih"&&(f.textContent=k),L=x(o),t=u(o,"INPUT",{type:!0,id:!0}),_=x(o),g=u(o,"LABEL",{for:!0,"data-svelte-h":!0}),N(g)!=="svelte-1weckky"&&(g.textContent=z),P=x(o),d=u(o,"INPUT",{type:!0,id:!0}),S=x(o),C=u(o,"INPUT",{type:!0,style:!0}),o.forEach(I),A=x(b),h=u(b,"A",{style:!0,href:!0,"data-svelte-h":!0}),N(h)!=="svelte-1wl60re"&&(h.textContent=B),b.forEach(I),y.forEach(I),this.h()},h(){p(f,"for","name"),p(t,"type","text"),p(t,"id","name"),p(g,"for","password"),p(d,"type","password"),p(d,"id","password"),p(C,"type","Submit"),C.value="Logga in",U(C,"display","block"),U(h,"display","block"),U(h,"align-self","center"),p(h,"href",K+"/register"),p(n,"class","container svelte-14hvnz4"),p(a,"class","svelte-14hvnz4")},m(l,y){j(l,a,y),s(a,n),s(n,r),s(n,c),s(n,e),s(e,f),s(e,L),s(e,t),E(t,m[0]),s(e,_),s(e,g),s(e,P),s(e,d),E(d,m[1]),s(e,S),s(e,C),s(n,A),s(n,h),T||(H=[q(t,"input",m[3]),q(d,"input",m[4]),q(e,"submit",G(m[2]))],T=!0)},p(l,[y]){y&1&&t.value!==l[0]&&E(t,l[0]),y&2&&d.value!==l[1]&&E(d,l[1])},i:O,o:O,d(l){l&&I(a),T=!1,D(H)}}}function Y(m,a,n){let r;F(m,Q,t=>n(6,r=t));let v="",c="",e=[];J(()=>{r.length>2?e=JSON.parse(r):e=[]});function f(){let t={username:v,password:c};t.username==""||t.password==""?alert("Please enter your credentials"):e.filter(_=>_.username==t.username).length>0?e.filter(_=>_.password==t.password).length>0?alert("Login Success"):alert("Wrong password"):alert("No account with that name")}function k(){v=this.value,n(0,v)}function L(){c=this.value,n(1,c)}return[v,c,f,k,L]}class se extends V{constructor(a){super(),W(this,a,Y,X,R,{})}}export{se as component};
