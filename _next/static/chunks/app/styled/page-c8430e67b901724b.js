(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{1016:(e,a,n)=>{Promise.resolve().then(n.bind(n,3280))},3280:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>x});var s=n(5155),r=n(2115),t=n(6874),i=n.n(t),o=n(6134),l=n.n(o),c=n(4987);let d=(0,c.i7)(["from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}"]),m=(0,c.i7)(["0%{box-shadow:0 0 0 0 rgba(74,107,223,0.4);}70%{box-shadow:0 0 0 10px rgba(74,107,223,0);}100%{box-shadow:0 0 0 0 rgba(74,107,223,0);}"]),p=c.Ay.button.withConfig({displayName:"StyledButton__Button"})(["padding:",";background:",";color:",";border:",";border-radius:8px;font-size:",";font-weight:",";cursor:pointer;transition:all 0.3s ease;margin:0.75rem 0.5rem;box-shadow:",";position:relative;overflow:hidden;animation:"," 0.4s ease-out;animation-delay:",";animation-fill-mode:both;&::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient( 90deg,transparent,rgba(255,255,255,0.2),transparent );transition:left 0.7s ease;}&:hover{transform:translateY(-3px);box-shadow:0 6px 12px rgba(0,0,0,0.15);background-color:",";&::before{left:100%;}}&:active{transform:translateY(0);box-shadow:0 2px 4px rgba(0,0,0,0.1);}&.mounted:not(:hover){animation:"," 2s infinite;}@media (max-width:768px){padding:",";font-size:",";}"],e=>e.$primary?"12px 28px":"10px 24px",e=>e.$primary?"linear-gradient(135deg, var(--primary), var(--primary-dark))":"transparent",e=>e.$primary?"#fff":"var(--primary)",e=>e.$primary?"none":"2px solid var(--primary)",e=>e.$primary?"1rem":"0.9rem",e=>e.$primary?"600":"500",e=>e.$primary?"0 4px 6px rgba(74, 107, 223, 0.2)":"none",d,e=>e.$animationDelay||"0s",e=>e.$primary?"var(--primary-dark)":"var(--gray-light)",m,e=>e.$primary?"10px 20px":"8px 16px",e=>e.$primary?"0.9rem":"0.8rem");function h(e){let{primary:a=!1,label:n="Click Me",onClick:t=()=>{},animationDelay:i="0s"}=e,[o,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{l(!0)},500);return()=>clearTimeout(e)},[]),(0,s.jsx)(p,{$primary:a,$animationDelay:i,onClick:t,"aria-label":n,className:o?"mounted":"",children:n})}function x(){let[e,a]=(0,r.useState)("#4a6bdf"),[n,t]=(0,r.useState)(24),[o,c]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{c(!0)},[]),o)?(0,s.jsxs)("div",{className:l().container,children:[(0,s.jsxs)("header",{className:l().header,children:[(0,s.jsxs)("nav",{className:l().nav,children:[(0,s.jsx)(i(),{href:"/",className:l().navLink,children:"Home"}),(0,s.jsx)(i(),{href:"/styled",className:l().navLinkActive,children:"Styling Demo"})]}),(0,s.jsx)("h1",{className:l().title,children:"Styling Methods in React"}),(0,s.jsx)("p",{className:l().description,children:"Explore different ways to style your React applications using inline styles, CSS modules, and styled-components."})]}),(0,s.jsx)("main",{children:(0,s.jsxs)("div",{className:l().styleGrid,children:[(0,s.jsxs)("section",{className:l().section,children:[(0,s.jsxs)("h2",{className:l().sectionTitle,children:[(0,s.jsx)("span",{className:l().sectionIcon,children:"\uD83C\uDFA8"}),"Inline Styles"]}),(0,s.jsx)("p",{children:"Styling React components directly with JavaScript objects. This approach provides dynamic styling capabilities."}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{style:{color:e,fontSize:"".concat(n,"px"),fontWeight:600,marginBottom:"1rem",transition:"all 0.3s ease"},children:"Dynamic Header Style"}),(0,s.jsx)("p",{children:"The color and size of this header can be changed dynamically."}),(0,s.jsxs)("div",{className:l().buttonContainer,children:[(0,s.jsx)("button",{onClick:()=>{let e=["#4a6bdf","#61dafb","#f687b3","#10b981","#8b5cf6"];a(e[Math.floor(Math.random()*e.length)])},style:{padding:"10px 16px",backgroundColor:"#4a6bdf",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",margin:"0.5rem"},children:"Change Color"}),(0,s.jsx)("button",{onClick:()=>{t(e=>24===e?28:24)},style:{padding:"10px 16px",backgroundColor:"transparent",color:"#4a6bdf",border:"2px solid #4a6bdf",borderRadius:"6px",cursor:"pointer",margin:"0.5rem"},children:"Toggle Size"})]})]})]}),(0,s.jsxs)("section",{className:l().section,children:[(0,s.jsxs)("h2",{className:l().sectionTitle,children:[(0,s.jsx)("span",{className:l().sectionIcon,children:"\uD83D\uDCDD"}),"CSS Modules"]}),(0,s.jsx)("p",{children:"CSS Modules allow you to write traditional CSS that's scoped locally to components, preventing style conflicts."}),(0,s.jsxs)("div",{className:l().buttonContainer,children:[(0,s.jsx)("button",{className:l().moduleButton,children:"CSS Module Button"}),(0,s.jsx)("button",{className:"".concat(l().moduleButton," ").concat(l().secondary),children:"Secondary Button"})]}),(0,s.jsxs)("div",{className:l().cardGrid,children:[(0,s.jsxs)("div",{className:l().card,children:[(0,s.jsx)("h3",{children:"Scoped Styling"}),(0,s.jsx)("p",{children:"CSS Modules automatically generate unique class names to avoid conflicts."})]}),(0,s.jsxs)("div",{className:l().card,children:[(0,s.jsx)("h3",{children:"Composition"}),(0,s.jsx)("p",{children:"Compose multiple class names together for reusable style patterns."})]})]})]}),(0,s.jsxs)("section",{className:l().section,children:[(0,s.jsxs)("h2",{className:l().sectionTitle,children:[(0,s.jsx)("span",{className:l().sectionIcon,children:"✨"}),"Styled Components"]}),(0,s.jsx)("p",{children:"Styled-components let you write actual CSS within JavaScript to style your components. It removes the mapping between components and styles."}),(0,s.jsxs)("div",{className:l().buttonContainer,children:[(0,s.jsx)(h,{primary:!0,label:"Primary Button",animationDelay:"0.1s"}),(0,s.jsx)(h,{label:"Secondary Button",animationDelay:"0.2s"})]}),(0,s.jsxs)("div",{className:l().cardGrid,children:[(0,s.jsxs)("div",{className:l().card,children:[(0,s.jsx)("h3",{children:"Dynamic Props"}),(0,s.jsx)("p",{children:"Pass props to styled components to conditionally change styles."})]}),(0,s.jsxs)("div",{className:l().card,children:[(0,s.jsx)("h3",{children:"Theme Support"}),(0,s.jsx)("p",{children:"Easily implement and switch between different themes in your application."})]})]})]})]})}),(0,s.jsxs)("footer",{className:l().footer,children:[(0,s.jsxs)("p",{children:["Created with ",(0,s.jsx)("a",{href:"https://nextjs.org",className:l().link,target:"_blank",rel:"noopener noreferrer",children:"Next.js"})," and modern styling techniques"]}),(0,s.jsxs)("nav",{className:l().footerNav,children:[(0,s.jsx)(i(),{href:"/",className:l().navLink,children:"Home"}),(0,s.jsx)(i(),{href:"/styled",className:l().navLinkActive,children:"Styling Demo"})]})]})]}):(0,s.jsx)("div",{className:l().container,children:"Loading..."})}},6134:e=>{e.exports={container:"Home_container__d256j",fadeIn:"Home_fadeIn__6AUDn",header:"Home_header__y2QYS",title:"Home_title__hYX6j",description:"Home_description__uXNdx",main:"Home_main__VkIEL",card:"Home_card__E5spL",slideUp:"Home_slideUp__L90rW",featureList:"Home_featureList__dN8ZU",featureIcon:"Home_featureIcon__rV5mF",button:"Home_button__G93Ef",featureGrid:"Home_featureGrid__iCCTg",featureCard:"Home_featureCard__KC0ot",iconWrapper:"Home_iconWrapper__N19_x",footer:"Home_footer__yFiaX",nav:"Home_nav__KViFq",navLink:"Home_navLink__SvGJP"}}},e=>{var a=a=>e(e.s=a);e.O(0,[97,987,874,441,684,358],()=>a(1016)),_N_E=e.O()}]);