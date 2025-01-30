import{d as o,N as h,a as $,b as j,r as x,j as r,B as y,f as v}from"./index-cbb0e3d2.js";const k=o.div`
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
`,G=o.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,C=o.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,B=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,l=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`,d=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,c=o.input`
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

  &:valid {
    border-color:  ${({theme:e})=>e.lightGreen}
  }
  &:not(:placeholder-shown):invalid  {
    border-color: ${({theme:e})=>e.red};
  }
  &:focus:not(:placeholder-shown):invalid{
     box-shadow: 0 0 0 2px ${({theme:e})=>`rgba(${parseInt(e.red.slice(1,3),16)}, ${parseInt(e.red.slice(3,5),16)}, ${parseInt(e.red.slice(5,7),16)}, 0.5)`};
  }
`;o.span`
  color: ${({theme:e})=>e.red};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;const z=o.button`
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
`,L=o.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:e})=>e.textGray};
  font-size: 0.875rem;
`,F=o(h)`
  color: ${({theme:e})=>e.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,I=o.div`
  padding: 0;
  margin: 0.5rem 0;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,S=o.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  
  svg {
    color: ${({isValid:e,theme:n})=>e?n.greenMain:n.textGray};
  }
`,q=o.div`
  color: ${({theme:e})=>e.red};
`,E=o.button`
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
`,P=o.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({theme:e})=>e.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,R=o(h)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({theme:e})=>e.greenMain};
`,D=()=>{const e=$(),{error:n,isLoading:m}=j(t=>t.auth),[p,g]=x.useState(!1),[a,u]=x.useState({username:"",email:"",password:""}),i=t=>{const{name:s,value:f}=t.target;u(w=>({...w,[s]:f}))},b=t=>{t.preventDefault(),e(v(a)).then(()=>{}).catch(s=>{console.error("Реєстрація не вдалася: ",s)})};return r.jsxs(r.Fragment,{children:[r.jsxs(P,{children:[r.jsx(R,{to:"/",children:"Coach's Sketch"}),r.jsx(y,{})]}),r.jsx(k,{children:r.jsxs(G,{children:[r.jsx(C,{children:"Реєстрація"}),r.jsxs(B,{onSubmit:b,children:[r.jsxs(l,{children:[r.jsx(d,{htmlFor:"name",children:"Ім'я"}),r.jsx(c,{id:"name",name:"username",type:"text",value:a.name,onChange:i,minLength:3,maxLength:25,placeholder:"Введіть ім'я",required:!0})]}),r.jsxs(l,{children:[r.jsx(d,{htmlFor:"email",children:"Email"}),r.jsx(c,{id:"email",name:"email",type:"email",value:a.email,onChange:i,maxLength:40,placeholder:"Введіть Email",required:!0})]}),r.jsxs(l,{children:[r.jsx(d,{htmlFor:"password",children:"Пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(c,{id:"password",name:"password",type:p?"text":"password",value:a.password,onChange:i,placeholder:"Введіть пароль",required:!0,minLength:6,maxLength:20}),r.jsx(E,{type:"button",onClick:()=>g(t=>!t),children:p?"Сховати":"Показати"})]}),r.jsx(I,{children:r.jsx(S,{children:"Мінімум 6 символів"})})]}),r.jsx(z,{type:"submit",disabled:m,children:m?"Завантаження...":"Зареєструватися"}),n&&r.jsxs(q,{children:[" ",n]})]}),r.jsxs(L,{children:["Вже маєте акаунт? ",r.jsx(F,{to:"/login",children:"Увійти"})]})]})})]})};export{D as default};
