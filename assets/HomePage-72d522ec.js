import{d as o,N as n,j as r}from"./index-4673e25c.js";import{H as i}from"./HeaderForUnlogged-0dc27499.js";const a=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 100px;
  background-color: ${({theme:e})=>e.mainBGColor};
  transition: all 0.2s ease-in-out;
  @media (max-width: 640px) {
    padding: 40px; 
  }
`,s=o.div`
  text-align: center;
  max-width: 1200px;
  width: 100%;
  padding: 3rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,d=o.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
`,c=o.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  transition: color 0.2s ease-in-out;
`,l=o.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`,t=o(n)`
  padding: 0.875rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &.primary {
    background-color: ${({theme:e})=>e.greenMain};
    color: ${({theme:e})=>e.white};
    
    &:hover {
      background-color: ${({theme:e})=>e.darkGreen};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${({theme:e})=>e.textBlack};
    border: 2px solid ${({theme:e})=>e.greenMain};
    
    &:hover {
      background-color: ${({theme:e})=>e.BgActiveLink};
      border-color: ${({theme:e})=>e.BgActiveLink};
      color: ${({theme:e})=>e.white};
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    padding: 1rem 2rem;
  }
`;o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.textBlack};
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({$isDarkMode:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  opacity: ${({$isDarkMode:e})=>e?1:.8};

  &:hover {
    transform: scale(1.2) ${({$isDarkMode:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  }
`;o.button`
  background: none;
  border: none;
  cursor: pointer;
`;const x=()=>r.jsxs(r.Fragment,{children:[r.jsx(i,{}),r.jsx(a,{children:r.jsxs(s,{children:[r.jsx(d,{children:"Ласкаво просимо!"}),r.jsx(c,{children:"Приєднуйтесь до нашої спільноти та відкривайте для себе нові можливості. Почніть свою подорож прямо зараз!"}),r.jsxs(l,{children:[r.jsx(t,{to:"/login",className:"secondary",children:"Увійти"}),r.jsx(t,{to:"/register",className:"primary",children:"Реєстрація"})]})]})})]});export{x as default};
