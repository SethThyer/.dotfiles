"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[335],{28177:function(e,t,a){a.r(t),a.d(t,{Allboarding:function(){return K},SEARCH_INPUT_TIMER:function(){return J},default:function(){return Y}});var n=a(27378),r=a.n(n),l=a(60042),c=a.n(l),i=a(9271),s=a(25971),o=a(18794),u=a(73521),m=a(64649);const d=e=>Boolean(e.squircleArtist);var v=a(50240);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,m.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const f=(e,t)=>t.filter(d).find((({squircleArtist:t})=>t.uri===e.squircleArtist.uri)),C=(e,t,a,n)=>{const r=[];for(let a=0;a<t.length;a+=1){const l=t[a];if(f(l,e)||r.push(l),r.length>=n)break}const l=[...e];return l.splice(a,0,...r),l};var E={wrapperContainer:"_S0c9vrZ51xHVQbkdlTp",sleeveContainer:"tb1GAt6eXBibkMxcklVW",loadingContainer:"gY_me9FLfxNLn_kwBh8I",headerSection:"XTpN9eOU_kdOmqvnAFmw",loadingText:"df1vdCyklsSxIcgOeXVr",titleContainer:"ojwjRk5GkLYVMqRXD3QU",searchBarBottomGradient:"OpbiLXEPJpvckCAL2lN0",searchContainer:"jqPwEH5_As0jAjPyk0G0",searchInput:"FC_prciSqD3kIe5wrNHL",searchInputIconContainer:"_QwxRhRGmDsNkxVs8Gsu",searchInputIcon:"_xoTx7x1C_mWWb0nNn5w",searchInputSearchIcon:"gAOvfotJyG5H3zUEvqwf",searchInputClearButton:"SbkdT5w_X050Nrvtv_4F",actionContainer:"SKeW_PPt1jqWwyIV5ujY"},b=a(33608),g=a(62758),k=a(35181),S=a(13737),y=a(91421),x=a(88319),w=a(65889),I=a(81978),N=a(8934),_="QfVgr_tlADxMs8vwvJP7",A="GBS74qCdLF0eaPCTu7XP",O="TS0HE7UFc910LLV_hFuM",T="OSrrOhDYcPi0LnOoCXG_",P=a(89614),L=a(74159);const R=(0,n.forwardRef)(((e,t)=>{const{name:a,uri:l,images:c,onSelectionChange:i}=e,[o,u]=(0,P.Z)(l),m=(0,n.useCallback)((async()=>{try{const e=!o;i(e),await u(e)}catch(e){}}),[u,i,o]);return r().createElement("button",{className:_,type:"button",onClick:m,title:a,role:"checkbox","aria-checked":o,ref:t,tabIndex:-1},o?r().createElement("span",{className:T},r().createElement(L.k,{semanticColor:"textBase"})):null,r().createElement("div",{className:A},r().createElement(I.x,{"aria-hidden":!0,isCircular:!0,images:c,fallback:{Component:N.d,viewBox:"-25 -22 100 100"}})),r().createElement(s.LF,{className:O,as:"div",variant:s.LF.mestoBold,semanticColor:"textBase"},a))})),B=e=>null!=e&&e.value?[{url:e.value}]:[];var j="IGp2J3495Jxb3Wn2_UFK";function q({stepArtists:e,lastSearchSelectedURI:t,artistButtonReference:a,handleSelectionChange:n}){if(null!=e&&e.length){const l=4,c=Math.floor(e.length-1/l)+1,i=e.map((({squircleArtist:e},c)=>{const{text:i,uri:s,image_url:o}=e,u=c%l+1,m=Math.floor(c/4)+1,d=s===t?a:null;return r().createElement("div",{key:s,role:"gridcell","aria-rowindex":m,"aria-colindex":u},r().createElement(R,{onSelectionChange:t=>n(e,t),ref:d,name:i,uri:s,images:B(o)}))}));return r().createElement(w.j,{className:j,"aria-rowcount":c,"aria-colcount":4,"aria-live":"polite","aria-label":"Artist picker",isFluid:!0},i)}return null}var F="_6GnOEcdf3NNx4lAfnIy",M="CmDk2SnA_qEkaztClbsc",D="OPMidpj9UqX51LsaY_gj";const G=e=>{const{title:t,subtitle:a,uri:l,images:c,onSelect:i}=e,[o,u]=(0,P.Z)(l),m=(0,n.useCallback)((async()=>{try{const e=!o;i(),e&&await u(e)}catch(e){}}),[u,i,o]);return r().createElement("button",{key:l,onClick:m,className:F},r().createElement("div",{className:M},r().createElement(I.x,{isCircular:!0,images:c,fallback:{Component:N.d,viewBox:"-25 -22 100 100"}})),r().createElement("div",{className:D},r().createElement("div",null,r().createElement(s.LF,{semanticColor:"textBase",variant:s.LF.mestoBold},t)),r().createElement("div",null,a&&r().createElement(s.LF,{variant:s.LF.mesto},a))))};var U="srCylNGqNZhFxYv_JkIQ",W="vq5L1CBMyP9J8ySkw8X1";function X({searchResults:e,handleSearchSelectionChange:t,searchInput:a}){if(e){const n=e.filter((e=>e)).map(((e,a)=>{const{text:n,subtitle:l,uri:c,image_url:i}=e;return r().createElement("div",{key:c,role:"row","aria-rowindex":a},r().createElement("div",{role:"gridcell","aria-colindex":0},r().createElement(G,{title:n,subtitle:null==l?void 0:l.value,uri:c,images:B(i),onSelect:()=>t(e)})))}));return r().createElement(w.j,{className:U,"aria-rowcount":n.length,"aria-colcount":1,"aria-label":"Search results"},n.length?n:r().createElement("div",{className:W},r().createElement("div",null,r().createElement(s.LF,{variant:"canon",semanticColor:"textBase"},k.ag.get("search.empty-results-title",a))),r().createElement("div",null,r().createElement(s.LF,{variant:"mesto",semanticColor:"textBase"},k.ag.get("search.empty-results-text")))))}return null}var H=a(85002),V=a(66917),z=a.n(V);const J=200,K=({entryPoint:e,onComplete:t})=>{var a,l,m,h;const w=(e=>{var t;return null===(t=z().from(e))||void 0===t?void 0:t.toURI()})((0,H.TH)().pathname),{step:I,nextAction:N,searchAction:_,loadMoreArtist:A}=((e,t)=>{const a=(0,n.useContext)(v.P),[r,l]=(0,n.useState)(null),[c,i]=(0,n.useState)({}),s=(0,n.useCallback)((async()=>{if(a){const n=await a.start(e,t);l(n)}}),[a,t,e,l]),o=(0,n.useCallback)((async t=>{var n,l;const c=null==r||null===(n=r.next.action)||void 0===n||null===(l=n.link)||void 0===l?void 0:l.value;if(!c)throw new Error("This step either does not exist, OR does not have a next action to perform!");{const n=t.map((e=>({uri:e})));await(null==a?void 0:a.submitSelection({selectedItems:n},c,e))}}),[a,r,e]),u=(0,n.useCallback)((async(e,t=0)=>{var n;const l=null==r||null===(n=r.search)||void 0===n?void 0:n.search_url;return a&&l?a.search(e,t,l):[]}),[a,r]),m=(0,n.useCallback)((async e=>{var t;const n=null==r||null===(t=r.sections[0])||void 0===t?void 0:t.items;if(!r||!n||c[e.uri])return;i(p(p({},c),{},{[e.uri]:!0}));let s=n;f({squircleArtist:e},n)||(s=C(n,[{squircleArtist:e}],0,1));const o=e.more_url.value;if(a&&o&&n){const t=s.findIndex((t=>!!d(t)&&t.squircleArtist.uri===e.uri)),n=(await a.loadMore(o)).map((e=>({squircleArtist:e})));s=C(s,n,t+1,e.expansion_limit),l(p(p({},r),{},{sections:[p(p({},r.sections[0]),{},{items:s})]}))}}),[c,a,r]);return(0,n.useEffect)((()=>{s()}),[s]),{step:r,nextAction:o,searchAction:u,loadMoreArtist:m}})(e,w),O=(0,x.o)(),[T,P]=(0,n.useState)([]),[L,R]=(0,n.useState)(""),[B,j]=(0,n.useState)(null),[F,M]=(0,n.useState)(!1),[D,G]=(0,n.useState)(null),[U,W]=(0,n.useState)(!1),[V,K]=(0,n.useState)("ARTIST_PICKER"),Y=null==I||null===(a=I.sections[0])||void 0===a?void 0:a.items,Z=(0,n.useMemo)((()=>{if(!Y)return[];return Y.filter(d)}),[Y]),[Q,$]=(0,n.useState)(""),ee=(0,n.useCallback)((async()=>{R(""),j(null),K("ARTIST_PICKER")}),[]),te=(0,n.useCallback)((e=>{e&&e.scrollIntoView({block:"center",inline:"center",behavior:"smooth"})}),[]),ae=(0,n.useCallback)(((e,t)=>{const{uri:a}=e;t?T.includes(a)||(P([...T,a]),A(e)):P(T.filter((e=>e!==a)))}),[T,P,A]),ne=(0,n.useCallback)((e=>{const{uri:t}=e;T.includes(t)||(P([...T,t]),A(e)),ee(),$(t)}),[T,ee,A]),re=(0,y.y)((async e=>{K("SEARCH");const t=await _(e);j(t)}),J),le=(0,n.useCallback)((e=>{const t=e.target.value;R(t),t.length?re(t):(j(null),K("ARTIST_PICKER"))}),[R,j,re]),ce=(0,n.useCallback)((async()=>{try{M(!0),D&&clearTimeout(D);const e=setTimeout((()=>{t&&t(!1),W(!0)}),5e3);G(e),O({intent:"taste_onboarding_done",type:"click",itemIdSuffix:`${T.length}`}),await Promise.all([N(T),new Promise((e=>setTimeout(e,500)))]),M(!1),clearTimeout(e),G(null),t&&!U&&t(!0)}catch(e){M(!1),D&&(clearTimeout(D),G(null))}}),[T,U,D,N,t,O]),ie=(0,n.useCallback)((e=>{"Enter"===e.key&&e.preventDefault(),"Escape"===e.key&&L&&ee()}),[L,ee]),[se,oe]=(0,n.useState)(!1);(0,n.useEffect)((()=>{se||(null==I?void 0:I.step)!==u.dW.ARTIST||(O({type:"view",intent:"taste_onboarding",targetUri:"/allboarding/origin/signup"}),oe(!0))}),[se,O,null==I?void 0:I.step]),(0,n.useEffect)((()=>{(null==I?void 0:I.step)===u.dW.DONE&&t&&t(!1)}),[t,I]);const ue=null==I||null===(l=I.next)||void 0===l||null===(m=l.button_label)||void 0===m?void 0:m.value,me=ue&&(null==I?void 0:I.min_selections)&&T.length>=(null==I?void 0:I.min_selections),[de,ve]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{!de&&me&&(O({intent:"taste_onboarding_done",type:"view"}),ve(!0))}),[de,me,O]),I?F?r().createElement("div",{className:c()([E.wrapperContainer,"encore-dark-theme"])},r().createElement("div",{"data-testid":"loading-container",className:E.loadingContainer},r().createElement(i.T,{indicatorSize:"md"}),r().createElement("span",{className:E.loadingText},r().createElement(s.LF,{variant:s.LF.canon,semanticColor:"textBase"},null==I||null===(he=I.next.screen)||void 0===he?void 0:he.loading_text.value)))):r().createElement("div",{className:c()([E.wrapperContainer,"encore-dark-theme"])},r().createElement("div",{className:E.sleeveContainer},r().createElement("div",{className:E.headerSection},r().createElement("div",{className:E.titleContainer},r().createElement(s.LF,{variant:s.LF.canon,semanticColor:"textBase"},null===(h=I.title)||void 0===h?void 0:h.value)),r().createElement("div",{className:E.searchContainer},I.search&&[r().createElement("form",{key:"search-form",role:"search"},r().createElement("input",{className:c()(E.searchInput,b.Z.ballad),placeholder:I.search.placeholder,"aria-label":`${I.search.placeholder.toLowerCase()}-input`,type:"text",value:L,onChange:le,onKeyDown:ie})),r().createElement("div",{key:"search-icons",className:E.searchInputIconContainer},r().createElement("span",{className:E.searchInputSearchIcon},r().createElement(g.W,{size:24,viewBox:"0 0 512 512",className:E.searchInputIcon,"aria-hidden":!0})),L&&r().createElement("button",{className:E.searchInputClearButton,onClick:ee,"aria-label":k.ag.get("search.a11y.clear-input")},r().createElement(S.T,{size:24,className:E.searchInputIcon})))])),r().createElement("div",{className:E.artistCardsContainerTopGradient}),"SEARCH"===V?r().createElement(X,{searchResults:B,handleSearchSelectionChange:ne,searchInput:L}):r().createElement(q,{stepArtists:Z,lastSearchSelectedURI:Q,artistButtonReference:te,handleSelectionChange:ae}),me&&r().createElement("div",{className:E.actionContainer},r().createElement(o.D,{"aria-hidden":!me,buttonSize:"lg",onClick:ce},ue)))):null;var he};var Y=K},62758:function(e,t,a){a.d(t,{W:function(){return c}});var n=a(27378),r=a.n(n),l=a(36988);const c=e=>r().createElement(l.J,e,r().createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor"}))}}]);
//# sourceMappingURL=xpui-routes-allboarding.js.map