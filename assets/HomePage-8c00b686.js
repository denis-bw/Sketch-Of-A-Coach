import{d as r,N as n,j as o,B as a}from"./index-cbb0e3d2.js";const i=r.div`
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
`,s=r.div`
  text-align: center;
  max-width: 1200px;
  width: 100%;
  padding: 3rem;
  background-color: ${({theme:e})=>e.ContainerBGColor};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,c=r.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({theme:e})=>e.textBlack};
  margin-bottom: 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
`,d=r.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({theme:e})=>e.textGray};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  transition: color 0.2s ease-in-out;
`,l=r.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`,t=r(n)`
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
`,m=r.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color:  ${({theme:e})=>e.ContainerBGColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,g=r(n)`
  font-size: 24px;
  font-weight: bold;
  color:  ${({theme:e})=>e.greenMain};
`;r.div`
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
`;r.button`
  background: none;
  border: none;
  cursor: pointer;
`;const p=()=>o.jsxs(o.Fragment,{children:[o.jsxs(m,{children:[o.jsx(g,{to:"/",children:"Coach's Sketch"}),o.jsx(a,{})]}),o.jsx(i,{children:o.jsxs(s,{children:[o.jsx(c,{children:"Ласкаво просимо!"}),o.jsx(d,{children:"Приєднуйтесь до нашої спільноти та відкривайте для себе нові можливості. Почніть свою подорож прямо зараз!"}),o.jsxs(l,{children:[o.jsx(t,{to:"/login",className:"secondary",children:"Увійти"}),o.jsx(t,{to:"/register",className:"primary",children:"Реєстрація"})]})]})})]});export{p as default};
