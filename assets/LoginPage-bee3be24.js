import{d as r,N as u,a as $,b as k,r as a,c as j,j as o,e as v}from"./index-c3bdf53e.js";import{H as y}from"./HeaderForUnlogged-82d209a8.js";const G=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 60px;
  background-color: ${({theme:e})=>e.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding-top: 40px; 
  }
`,C=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,B=r.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,F=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,g=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,x=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,h=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:e})=>e.textGray};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;
  
&:focus {
    outline: none;
    border-color: ${({theme:e})=>e.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.lightGreen.slice(1,3),16)}, ${parseInt(e.lightGreen.slice(3,5),16)}, ${parseInt(e.lightGreen.slice(5,7),16)}, 0.5)`};
}

&::placeholder {
    color: ${({theme:e})=>e.textGray};
}

&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px ${({theme:e})=>e.ContainerBGColor} inset;
  -webkit-text-fill-color: ${({theme:e})=>e.textBlack};
  transition: background-color 5000s ease-in-out 0s;
  border-color: ${({theme:e})=>e.lightGreen};
}

&:valid {
    border-color: ${({theme:e})=>e.lightGreen};
}

&:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({theme:e})=>e.red};
}

&:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
}
`,L=r.button`
  width: 100%;
  padding: 0.875rem;
  background-color: ${({theme:e})=>e.greenMain};
  color: ${({theme:e})=>e.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,I=r.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:e})=>e.textGray};
  font-size: 0.875rem;
`,S=r(u)`
  color: ${({theme:e})=>e.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,E=r(u)`
  color: ${({theme:e})=>e.textGray};
  text-decoration: none;
  font-size: 0.875rem;
  text-align: right;
  margin-top: -1rem;
  display: block;
  
  &:hover {
    color: ${({theme:e})=>e.greenMain};
  }
`,z=r.div`
  color: ${({theme:e})=>e.red};
`,D=r.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 14px;
  color: ${({theme:e})=>e.iconColor};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,M=()=>{const e=$(),{error:i,isLoading:l}=k(t=>t.auth),[d,f]=a.useState(!1),[s,c]=a.useState({email:"",password:""});a.useEffect(()=>{i&&e(j())},[e]),a.useEffect(()=>{const t=localStorage.getItem("loginFormData")||"";t&&c(n=>({...n,email:t}))},[]);const m=t=>{const{name:n,value:p}=t.target;console.log("a"),n==="email"&&localStorage.setItem("loginFormData",p),c(w=>({...w,[n]:p}))},b=t=>{t.preventDefault(),e(v(s)).catch(n=>{console.error("Помилка входу: ",n)})};return o.jsxs(o.Fragment,{children:[o.jsx(y,{}),o.jsx(G,{children:o.jsxs(C,{children:[o.jsx(B,{children:"Вхід"}),o.jsxs(F,{onSubmit:b,children:[o.jsxs(g,{children:[o.jsx(x,{htmlFor:"email",children:"Email"}),o.jsx(h,{id:"email",name:"email",type:"email",value:s.email,onChange:m,maxLength:40,placeholder:"Введіть email",required:!0})]}),o.jsxs(g,{children:[o.jsx(x,{htmlFor:"password",children:"Пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(h,{id:"password",name:"password",type:d?"text":"password",value:s.password,onChange:m,placeholder:"Введіть пароль",required:!0,minLength:6,maxLength:20}),o.jsx(D,{type:"button",onClick:()=>f(t=>!t),children:d?"Сховати":"Показати"})]})]}),o.jsx(E,{to:"/forgot-password",children:"Забули пароль?"}),o.jsx(L,{type:"submit",disabled:l,children:l?"Завантаження...":"Увійти"}),i&&o.jsx(z,{children:i})]}),o.jsxs(I,{children:["Немає акаунту? ",o.jsx(S,{to:"/register",children:"Зареєструватися"})]})]})})]})};export{M as default};
