import{d as r,j as e,k as u,h as $,g as k,r as a,m as j,o as v}from"./index-277ac649.js";import{H as G}from"./HeaderForUnlogged-839b8ce6.js";const y=r.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 0.875rem;
    font-size: 1rem;
    font-weight: 500;

    color: ${({theme:o})=>o.textBlack}; 
    background-color:  ${({theme:o})=>o.ContainerBGColor};
    border: 1.6px solid ${({theme:o})=>o.textGray};
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 10px;
    height: 46px;
    &:hover {  
        background-color:  ${({theme:o})=>o.BgActiveLink}; 
        border-color: ${({theme:o})=>o.BgActiveLink};
        /* background-color:  ${({theme:o})=>o.BgActiveLinkHover};  */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({theme:o})=>`rgba(${parseInt(o.lightGreen.slice(1,3),16)}, ${parseInt(o.lightGreen.slice(3,5),16)}, ${parseInt(o.lightGreen.slice(5,7),16)}, 0.5)`};
        
    }

    svg {
        width: 20px;
        height: 20px;
    }
`,B=()=>{const o="https://coaching-draft-backend.onrender.com/api/auth/",i=()=>{window.location.href=`${o}users/google`};return e.jsxs(y,{onClick:i,children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[e.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),e.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),e.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),e.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),e.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]}),"Увійти через Google"]})},C=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 60px;
  background-color: ${({theme:o})=>o.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding-top: 40px; 
  }
`,F=r.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme:o})=>o.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,L=r.h1`
  font-size: 1.75rem;
  color: ${({theme:o})=>o.textBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`,z=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,h=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,x=r.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:o})=>o.textBlack};
`,m=r.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.6px solid ${({theme:o})=>o.textGray};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({theme:o})=>o.ContainerBGColor};
  color: ${({theme:o})=>o.textBlack};
  transition: all 0.2s ease-in-out;
  
&:focus {
    outline: none;
    border-color: ${({theme:o})=>o.lightGreen};
    box-shadow: 0 0 0 2px ${({theme:o})=>`rgba(${parseInt(o.lightGreen.slice(1,3),16)}, ${parseInt(o.lightGreen.slice(3,5),16)}, ${parseInt(o.lightGreen.slice(5,7),16)}, 0.5)`};
}

&::placeholder {
    color: ${({theme:o})=>o.textGray};
}

&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px ${({theme:o})=>o.ContainerBGColor} inset;
  -webkit-text-fill-color: ${({theme:o})=>o.textBlack};
  transition: background-color 5000s ease-in-out 0s;
  border-color: ${({theme:o})=>o.lightGreen};
}

&:valid {
    border-color: ${({theme:o})=>o.lightGreen};
}

&:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    border-color: ${({theme:o})=>o.red};
}

&:focus:not(:placeholder-shown):not(:-webkit-autofill):invalid {
    box-shadow: 0 0 0 2px ${({theme:o})=>`rgba(${parseInt(o.red.slice(1,3),16)}, ${parseInt(o.red.slice(3,5),16)}, ${parseInt(o.red.slice(5,7),16)}, 0.5)`};
}
`,I=r.button`
  width: 100%;
  padding: 0.875rem;
  background-color: ${({theme:o})=>o.greenMain};
  color: ${({theme:o})=>o.white};
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
    background-color: ${({theme:o})=>o.darkGreen};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,E=r.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({theme:o})=>o.textGray};
  font-size: 0.875rem;
`,S=r(u)`
  color: ${({theme:o})=>o.greenMain};
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  
  &:hover {
    color: ${({theme:o})=>o.darkGreen};
    text-decoration: underline;
  }
`,A=r.div`
  display: flex;
  justify-content: flex-end; 
  width: 100%;
  &:hover {
    color: ${({theme:o})=>o.darkGreen};
    text-decoration: underline;
  }
`,M=r(u)`
  color: ${({theme:o})=>o.textGray};
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: -1rem;
  width: fit-content;
  
  &:hover {
    color: ${({theme:o})=>o.greenMain};
  }
`,D=r.div`
  color: ${({theme:o})=>o.red};
`,P=r.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 14px;
  color: ${({theme:o})=>o.iconColor};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,U=()=>{const o=$(),{error:i,isLoading:l}=k(t=>t.auth),[c,f]=a.useState(!1),[s,d]=a.useState({email:"",password:""});a.useEffect(()=>{i&&o(j())},[o]),a.useEffect(()=>{const t=localStorage.getItem("loginFormData")||"";t&&d(n=>({...n,email:t}))},[]);const g=t=>{const{name:n,value:p}=t.target;n==="email"&&localStorage.setItem("loginFormData",p),d(w=>({...w,[n]:p}))},b=t=>{t.preventDefault(),o(v(s)).catch(n=>{console.error("Помилка входу: ",n)})};return e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsx(C,{children:e.jsxs(F,{children:[e.jsx(L,{children:"Вхід"}),e.jsxs(z,{onSubmit:b,children:[e.jsxs(h,{children:[e.jsx(x,{htmlFor:"email",children:"Email"}),e.jsx(m,{id:"email",name:"email",type:"email",value:s.email,onChange:g,maxLength:40,placeholder:"Введіть email",required:!0})]}),e.jsxs(h,{children:[e.jsx(x,{htmlFor:"password",children:"Пароль"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(m,{id:"password",name:"password",type:c?"text":"password",value:s.password,onChange:g,placeholder:"Введіть пароль",required:!0,minLength:6,maxLength:20}),e.jsx(P,{type:"button",onClick:()=>f(t=>!t),children:c?"Сховати":"Показати"})]})]}),e.jsxs(A,{children:[" ",e.jsx(M,{to:"/forgot-password",children:"Забули пароль?"})," "]}),e.jsx(I,{type:"submit",disabled:l,children:l?"Завантаження...":"Увійти"})]}),e.jsx(B,{}),i&&e.jsx(D,{children:i}),e.jsxs(E,{children:["Немає акаунту? ",e.jsx(S,{to:"/register",children:"Зареєструватися"})]})]})})]})};export{U as default};
