import{d as o,a as L,k as z,r as s,b as B,c as F,y as f,h as E,j as r,L as R,l as q}from"./index-7f78446c.js";import{H as I}from"./HeaderForUnlogged-a073d375.js";const D=o.div`
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
`,M=o.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,T=o.h1`
  font-size: 1.75rem;
  color: ${({theme:e})=>e.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,H=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,b=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,j=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.textBlack};
`,y=o.input`
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
`,U=o.button`
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
  margin-top: 16px;

  &:hover {
    background-color: ${({theme:e})=>e.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,N=o.div`
  color: ${({theme:e})=>e.red};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,Y=o.p`
  color: ${({theme:e})=>e.textGray};
  text-align: center;
  font-size: 0.875rem;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`,A=o.div`
  padding: 0;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textGray};
`,J=o.p`
  display: flex;
  align-items: center;
  
`,P=o.button`
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
`,Q=()=>{const e=L(),$=z(),[d,k]=s.useState(!1),[l,C]=s.useState(!1),m=new URLSearchParams($.search),v=m.get("email"),G=m.get("token"),[n,p]=s.useState(""),[u,h]=s.useState(""),{error:a,successMessage:i,isLoading:x}=B(t=>t.auth);s.useEffect(()=>{a&&e(F())},[e]),s.useEffect(()=>{i&&(f.success(i),e(E()))},[i,e]);const g=t=>{const{name:c,value:w}=t.target;c==="newPassword"?p(w):c==="confirmPassword"&&h(w)},S=async t=>{if(t.preventDefault(),n!==u){f.error("Паролі не співпадають");return}try{await e(q({email:v,token:G,newPassword:n})).unwrap(),p(""),h("")}catch{console.error("Помилка при скиданні паролю:")}};return r.jsxs(r.Fragment,{children:[r.jsx(R,{}),r.jsx(I,{}),r.jsx(D,{children:r.jsxs(M,{children:[r.jsx(T,{children:"Створити новий пароль"}),r.jsx(Y,{children:"Введіть новий пароль і підтвердьте його."}),r.jsxs(H,{onSubmit:S,children:[r.jsxs(b,{children:[r.jsx(j,{htmlFor:"newPassword",children:"Новий пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(y,{id:"newPassword",name:"newPassword",type:d?"text":"password",value:n,onChange:g,minLength:6,maxLength:25,placeholder:"Пароль",required:!0}),r.jsx(P,{type:"button",onClick:()=>k(t=>!t),children:d?"Сховати":"Показати"})]})]}),r.jsxs(b,{children:[r.jsx(j,{htmlFor:"confirmPassword",children:"Підтвердити пароль"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(y,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:u,minLength:6,maxLength:25,onChange:g,placeholder:"Пароль",required:!0}),r.jsx(P,{type:"button",onClick:()=>C(t=>!t),children:l?"Сховати":"Показати"})]}),r.jsx(A,{children:r.jsx(J,{children:"Мінімум 6 символів"})}),a&&r.jsxs(N,{children:[" ",a]})]}),r.jsx(U,{type:"submit",disabled:x,children:x?"Завантаження...":"Створити пароль"})]})]})})]})};export{Q as default};
