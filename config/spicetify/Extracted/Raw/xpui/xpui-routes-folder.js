"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[124],{43011:function(e,t,n){n.d(t,{$:function(){return u}});var l=n(35181),a=n(27378),r=n.n(a),i=n(97015),c=n(18291),o=n(42044),s=n(39519);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const u=({children:e})=>{let t=m(e);const n=(0,c.Y)(s.yA)===o.q9.PLAYING,a=(0,c.Y)((e=>null==e?void 0:e.item));return a&&n&&((0,o.G_)(a)?t=[a.name,a.artists.map((e=>e.name)).join(l.ag.getSeparator())].join(" · "):(0,o.iw)(a)?t=[a.name,a.show.name].join(" · "):(0,o.k6)(a)&&(t=m(l.ag.get("ad-formats.advertisement")))),r().createElement(i.q,{defaultTitle:l.ag.get("page.generic-title"),defer:!1},r().createElement("title",null,t))}},17088:function(e,t,n){n.d(t,{u:function(){return p}});var l=n(27378),a=n.n(l),r=n(60042),i=n.n(r),c=n(9807),o=n(64954),s="Q_xcvxUwTPIjE0ynC2aS",m="h583MKYluGNK5tIRd4h1",u="C5ebkS6AZZ_pLama9OvS",d="xdnwBuzDn_9__446NcEo",g="zh9pnCpMrRu85u4ZSMFK",f=n(17830);const p=a().memo((e=>{const{children:t,message:n,title:l,linkTitle:r,linkTo:p,onClick:E,renderInline:y=!1}=e,{isXSOnly:v,isSMOnly:k}=(0,f.e)(),h=v||k;return a().createElement("section",{className:i()(s,{[m]:y})},t,a().createElement(c.Dy.h1,{variant:h?c.Dy.cello:c.Dy.alto,className:d},l),a().createElement(c.Dy,{variant:h?c.Dy.mesto:c.Dy.ballad,className:g},n),r&&(p||E)&&a().createElement(o.z,{version:"secondary",className:u,linkTo:p,onClick:E},r))}))},86910:function(e,t,n){n.r(t),n.d(t,{Folder:function(){return I},default:function(){return C}});var l=n(27378),a=n.n(l),r=n(75260),i=n(85002),c=n(66917),o=n.n(c),s=n(35181),m=n(36726),u=n(66027),d=n(76385),g="Rci1DFckB9T_0Q8SaGdg",f=n(90849),p=n(41805),E=n(8751),y=n(35511),v=n(26425),k=n(98079),h=n(75610),S=n(17088),b=n(23),D=n(43011);const I=e=>{const{id:t}=e,n=(0,r.v9)((({session:e})=>{var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}))||null,i=o().folderURI(n,t).toURI(),c=(0,k.C)({folderUri:i,decorateImagesAndOwner:!0}),I=(0,r.v9)((e=>e.platform.isDesktop)),{isPlaying:C,togglePlay:N}=(0,b.n)({uri:i},{featureIdentifier:"folder"}),U=(0,l.useMemo)((()=>{const e=t=>t.items.reduce(((t,n)=>(0,h.lU)(n)?t.concat(e(n)):((0,h.no)(n)&&t.push(n),t)),[]);return c?e(c):[]}),[c]),w=U.length>0;return c?a().createElement("section",{className:g},a().createElement(D.$,null,s.ag.get("playlist.page-title",c.name)),a().createElement(u.gF,null,a().createElement(f.W,null,a().createElement(p.i,{text:c.name,dragUri:i,dragLabel:c.name})),a().createElement(u.sP,null,a().createElement(u.dy,{small:!0,uppercase:!0},s.ag.get("folder.title")),a().createElement(u.xd,{dragUri:i,dragLabel:c.name},c.name))),a().createElement(d.o,null,a().createElement(d.F,null,I&&a().createElement(v.$,{onClick:()=>N(),isPlaying:C,size:y.qE.lg,disabled:!w,uri:c.uri}))),a().createElement("div",{className:"contentSpacing"},w?a().createElement(E.D,{entities:U}):a().createElement(S.u,{title:s.ag.get("folder.empty.title"),message:s.ag.get("folder.empty.subtitle"),renderInline:!0}))):a().createElement(m.h,{errorMessage:s.ag.get("error.generic")})};var C=a().memo((()=>{const{folderId:e}=(0,i.UO)();return a().createElement(I,{id:e})}))}}]);
//# sourceMappingURL=xpui-routes-folder.js.map