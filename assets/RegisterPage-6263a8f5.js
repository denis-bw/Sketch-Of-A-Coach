import{d as r,N as h,a as w,b as $,r as p,j as o,B as y,f as k}from"./index-5349a206.js";const v=r.div`
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
`,G=r.h1`
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
  border: 1.5px solid ${({theme:e})=>e.textGray};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  color: ${({theme:e})=>e.textBlack};
  transition: all 0.2s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.greenMain};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.lightGreen};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.textGray};
  }

  ${({error:e})=>e&&`
    border-color: ${({theme:t})=>t.red};
    &:focus {
      box-shadow: 0 0 0 2px rgba(251, 69, 102, 0.2);
    }
  `}
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
  margin-top: 0.5rem;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,F=r.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:e})=>e.textGray};
  font-size: 0.875rem;
`,S=r(h)`
  color: ${({theme:e})=>e.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,L=r.div`
  padding: 0;
  margin: 0.5rem 0;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,q=r.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  
  svg {
    color: ${({isValid:e,theme:t})=>e?t.greenMain:t.textGray};
  }
`,E=r.div`
  color: ${({theme:e})=>e.red};
`,M=r.button`
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
`,D=()=>{const e=w(),{error:t,isLoading:m}=$(n=>n.auth),[x,g]=p.useState(!1),[a,u]=p.useState({username:"",email:"",password:""}),i=n=>{const{name:s,value:f}=n.target;u(j=>({...j,[s]:f}))},b=n=>{n.preventDefault(),e(k(a)).then(()=>{}).catch(s=>{console.error("Реєстрація не вдалася: ",s)})};return o.jsxs(o.Fragment,{children:[o.jsxs(P,{children:[o.jsx(R,{to:"/",children:"Coach's Sketch"}),o.jsx(y,{})]}),o.jsx(v,{children:o.jsxs(C,{children:[o.jsx(G,{children:"Реєстрація"}),o.jsxs(B,{onSubmit:b,children:[o.jsxs(l,{children:[o.jsx(d,{htmlFor:"name",children:"Ім'я"}),o.jsx(c,{id:"name",name:"username",type:"text",value:a.name,onChange:i,minLength:3,placeholder:"Введіть ім'я",required:!0})]}),o.jsxs(l,{children:[o.jsx(d,{htmlFor:"email",children:"Email"}),o.jsx(c,{id:"email",name:"email",type:"email",value:a.email,onChange:i,placeholder:"Введіть Email",required:!0})]}),o.jsxs(l,{children:[o.jsx(d,{htmlFor:"password",children:"Пароль"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(c,{id:"password",name:"password",type:x?"text":"password",value:a.password,onChange:i,placeholder:"Введіть пароль",required:!0,minLength:6}),o.jsx(M,{type:"button",onClick:()=>g(n=>!n),children:x?"Сховати":"Показати"})]}),o.jsx(L,{children:o.jsx(q,{children:"Мінімум 6 символів"})})]}),o.jsx(z,{type:"submit",disabled:m,children:m?"Завантаження...":"Зареєструватися"}),t&&o.jsxs(E,{children:[" ",t]})]}),o.jsxs(F,{children:["Вже маєте акаунт? ",o.jsx(S,{to:"/login",children:"Увійти"})]})]})})]})};export{D as default};
