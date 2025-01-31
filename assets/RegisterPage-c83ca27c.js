import{d as r,N as h,a as $,b as j,r as x,j as o,B as y,f as k}from"./index-90425674.js";const v=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 40px;
  background-color: ${({theme:e})=>e.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 20px; 
  }
`,G=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,C=r.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,B=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,l=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`,d=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,c=r.input`
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

&:-webkit-autofill {
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
`;r.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;const z=r.button`
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

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,L=r.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:e})=>e.textGray};
  font-size: 0.875rem;
`,F=r(h)`
  color: ${({theme:e})=>e.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,I=r.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,S=r.p`
  display: flex;
  align-items: center;
  
  svg {
    color: ${({isValid:e,theme:n})=>e?n.greenMain:n.textGray};
  }
`,q=r.div`
  color: ${({theme:e})=>e.red};
`,E=r.button`
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
`,P=r.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({theme:e})=>e.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,R=r(h)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({theme:e})=>e.greenMain};
`,D=()=>{const e=$(),{error:n,isLoading:m}=j(t=>t.auth),[p,g]=x.useState(!1),[a,u]=x.useState({username:"",email:"",password:""}),i=t=>{const{name:s,value:f}=t.target;u(w=>({...w,[s]:f}))},b=t=>{t.preventDefault(),e(k(a)).then(()=>{}).catch(s=>{console.error("Реєстрація не вдалася: ",s)})};return o.jsxs(o.Fragment,{children:[o.jsxs(P,{children:[o.jsx(R,{to:"/",children:"Coach's Sketch"}),o.jsx(y,{})]}),o.jsx(v,{children:o.jsxs(G,{children:[o.jsx(C,{children:"Реєстрація"}),o.jsxs(B,{onSubmit:b,children:[o.jsxs(l,{children:[o.jsx(d,{htmlFor:"name",children:"Ім'я"}),o.jsx(c,{id:"name",name:"username",type:"text",value:a.name,onChange:i,minLength:3,maxLength:25,placeholder:"Введіть ім'я",required:!0})]}),o.jsxs(l,{children:[o.jsx(d,{htmlFor:"email",children:"Email"}),o.jsx(c,{id:"email",name:"email",type:"email",value:a.email,onChange:i,maxLength:40,placeholder:"Введіть Email",required:!0})]}),o.jsxs(l,{children:[o.jsx(d,{htmlFor:"password",children:"Пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(c,{id:"password",name:"password",type:p?"text":"password",value:a.password,onChange:i,placeholder:"Введіть пароль",required:!0,minLength:6,maxLength:20}),o.jsx(E,{type:"button",onClick:()=>g(t=>!t),children:p?"Сховати":"Показати"})]}),o.jsx(I,{children:o.jsx(S,{children:"Мінімум 6 символів"})})]}),o.jsx(z,{type:"submit",disabled:m,children:m?"Завантаження...":"Зареєструватися"}),n&&o.jsxs(q,{children:[" ",n]})]}),o.jsxs(L,{children:["Вже маєте акаунт? ",o.jsx(F,{to:"/login",children:"Увійти"})]})]})})]})};export{D as default};
