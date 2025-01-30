import{d as r,N as t,j as o,B as s}from"./index-5349a206.js";const d=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 60px;
  background-color: ${({theme:e})=>e.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 20px; 
  }
`,l=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,c=r.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,m=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,n=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,i=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,a=r.input`
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
`,x=r.button`
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
`,p=r.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:e})=>e.textGray};
  font-size: 0.875rem;
`,g=r(t)`
  color: ${({theme:e})=>e.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:e})=>e.darkGreen};
    text-decoration: underline;
  }
`,h=r(t)`
  color: ${({theme:e})=>e.textGray};
  text-decoration: none;
  font-size: 0.875rem;
  text-align: right;
  margin-top: -1rem;
  display: block;
  
  &:hover {
    color: ${({theme:e})=>e.greenMain};
  }
`,u=r.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({theme:e})=>e.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,f=r(t)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({theme:e})=>e.greenMain};
`,j=()=>o.jsxs(o.Fragment,{children:[o.jsxs(u,{children:[o.jsx(f,{to:"/",children:"Coach's Sketch"}),o.jsx(s,{})]}),o.jsx(d,{children:o.jsxs(l,{children:[o.jsx(c,{children:"Вхід"}),o.jsxs(m,{children:[o.jsxs(n,{children:[o.jsx(i,{htmlFor:"email",children:"Email"}),o.jsx(a,{id:"email",name:"email",type:"email",placeholder:"Введіть email",required:!0})]}),o.jsxs(n,{children:[o.jsx(i,{htmlFor:"password",children:"Пароль"}),o.jsx(a,{id:"password",name:"password",type:"password",placeholder:"Введіть пароль",required:!0})]}),o.jsx(h,{to:"/forgot-password",children:"Забули пароль?"}),o.jsx(x,{type:"submit",children:"Увійти"})]}),o.jsxs(p,{children:["Немає акаунту?",o.jsx(g,{to:"/register",children:"Зареєструватися"})]})]})})]});export{j as default};
