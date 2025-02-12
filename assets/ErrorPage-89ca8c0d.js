import{d as t,j as e}from"./index-1a28774f.js";import{H as o}from"./HeaderForUnlogged-28dd4982.js";const i=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
`,s=t.h1`
  font-size: 70px;
  color: ${r=>r.theme.textColor};
  @media (max-width: 640px) {
    font-size: 58px;
  }
`,a=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`,n=t.img`
  width: 300px;
  max-height: 300px;
  @media (max-width: 640px) {
    width: 200px;
    max-height: 200px;
  }
`,x="/coaching-draft/assets/error-b574aa8e.png",c=()=>(localStorage.removeItem("lastPrivatePath"),e.jsxs(a,{children:[e.jsx(o,{}),e.jsxs(i,{children:[e.jsx(s,{children:"Oops 404"}),e.jsx(n,{src:x,alt:"error-img"})]})]}));export{c as default};
