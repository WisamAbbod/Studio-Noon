(()=>{var e={};e.id=974,e.ids=[974],e.modules={440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(1658);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},984:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Downloads\\\\Waleed\\\\Studio Noon\\\\Internship Test\\\\Internship Test\\\\src\\\\components\\\\cards\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Downloads\\Waleed\\Studio Noon\\Internship Test\\Internship Test\\src\\components\\cards\\index.tsx","default")},1135:()=>{},1163:(e,t,r)=>{Promise.resolve().then(r.bind(r,1679))},1204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(7413),i=r(5646),n=r(984);async function o(){let e=await (0,i.GE)(null,6);return(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-8 py-10",children:e&&e.nodes.length>0&&(0,s.jsx)(n.default,{...e})})}},1261:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let s=r(4985),i=r(4953),n=r(6533),o=s._(r(1933));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},1679:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(687),i=r(1261),n=r.n(i),o=r(5814),a=r.n(o);let l=e=>(0,s.jsx)(a(),{href:`/articles/${e.slug}`,className:"block",children:(0,s.jsxs)("article",{className:"group cursor-pointer",style:{fontFamily:"Inter"},children:[e.featuredImage.node.sourceUrl&&(0,s.jsx)("div",{className:"mb-4 overflow-hidden rounded-lg",children:(0,s.jsx)(n(),{src:e.featuredImage.node.sourceUrl,width:400,height:200,alt:"",className:"w-full object-cover transition-transform duration-300 group-hover:scale-105",style:{height:"200px"}})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-white uppercase mb-2 block",style:{fontSize:"12px",lineHeight:"150%",letterSpacing:"1.2px",fontWeight:"bold"},children:"ARTICLE"}),(0,s.jsx)("h3",{className:"text-white mb-2 leading-tight group-hover:text-gray-300 transition-colors",style:{fontSize:"22px",lineHeight:"120%",fontWeight:"300"},children:e.title}),(0,s.jsx)("div",{className:"text-gray-400",style:{fontSize:"14px",lineHeight:"150%",fontWeight:"300"},dangerouslySetInnerHTML:{__html:e.excerpt}})]})]})});var d=r(3210);function c({nodes:e,pageInfo:t}){let[r,i]=(0,d.useState)(e),[n,o]=(0,d.useState)(t),[a,c]=(0,d.useState)(!1),u=async()=>{if(n.hasNextPage&&!a){c(!0);try{let e=await fetch("/api/articles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first:3,after:n.endCursor})});if(!e.ok)throw Error("Failed to fetch articles");let t=await e.json();if(!t.success)throw Error(t.message||"Failed to load articles");i(e=>[...e,...t.articles.nodes]),o(t.articles.pageInfo)}catch(e){console.error("Error loading more articles:",e)}finally{c(!1)}}};return(0,s.jsx)("section",{className:"-my-16 w-screen py-16 -mx-[50vw] ml-[calc(50%-50vw)]",style:{backgroundColor:"#152636",fontFamily:"Inter"},children:(0,s.jsxs)("div",{className:"w-full px-4 sm:px-6 lg:px-8 mx-auto",children:[(0,s.jsxs)("div",{className:"mb-12",children:[(0,s.jsx)("h1",{className:"mb-6",style:{fontSize:"54px",lineHeight:"100%",fontWeight:"300",color:"white"},children:"Latest Content"}),(0,s.jsx)("p",{style:{fontSize:"18px",lineHeight:"170%",fontWeight:"300",color:"rgba(255, 255, 255, 0.7)",maxWidth:"48rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate pariatur."})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",children:r.map((e,t)=>(0,s.jsx)(l,{...e},`${e.id}-${t}`))}),n.hasNextPage&&(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("button",{onClick:u,disabled:a,className:"rounded-lg hover:bg-red-500  disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200",style:{backgroundColor:"#ef4444",color:"white",padding:"9px 18px",fontSize:"14px",fontWeight:"bold"},children:a?(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Loading..."]}):"Load More Articles"})})]})})}},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4031:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6346,23)),Promise.resolve().then(r.t.bind(r,7924,23)),Promise.resolve().then(r.t.bind(r,5656,23)),Promise.resolve().then(r.t.bind(r,99,23)),Promise.resolve().then(r.t.bind(r,8243,23)),Promise.resolve().then(r.t.bind(r,8827,23)),Promise.resolve().then(r.t.bind(r,2763,23)),Promise.resolve().then(r.t.bind(r,7173,23))},4431:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>o});var s=r(7413),i=r(5759),n=r.n(i);r(1135);let o={title:"Studio Noon | Test",description:"A short test for Studio Noon"};function a({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().variable} antialiased`,children:e})})}},4711:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6444,23)),Promise.resolve().then(r.t.bind(r,6042,23)),Promise.resolve().then(r.t.bind(r,8170,23)),Promise.resolve().then(r.t.bind(r,9477,23)),Promise.resolve().then(r.t.bind(r,9345,23)),Promise.resolve().then(r.t.bind(r,2089,23)),Promise.resolve().then(r.t.bind(r,6577,23)),Promise.resolve().then(r.t.bind(r,1307,23))},5410:()=>{},5507:(e,t,r)=>{Promise.resolve().then(r.bind(r,984))},5646:(e,t,r)=>{"use strict";r.d(t,{vO:()=>l,GE:()=>a});let s=process.env.GRAPHQL_ENDPOINT;if(!s)throw Error("No API URL found. Please set the GRAPHQL_ENDPOINT environment variable.");function i(e,t=[],r=86400,n){return new Promise(async(i,o)=>{if(!s)return o(Error("No API URL found"));let a={method:"POST",headers:{"Content-Type":"application/json",...n},body:e,next:{revalidate:r,tags:t.length>0?t:void 0}};t.length>0&&(a.next||(a.next={revalidate:r}),a.next.tags=t);try{let e=await fetch(s,a);if(!e.ok)return console.error(`Error fetching data from ${s}: ${e.status} ${e.statusText}`),o(Error("An error occurred while fetching the data."));let t=await e.json();i(t)}catch(e){o(e)}})}let n=`
query LatestArticlesQuery ($after: String, $first: Int) {
    articles(after: $after, first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
            id
            slug
            title(format: RENDERED)
            excerpt: excerptPlainText
            featuredImage {
                node {
                    altText
                    sourceUrl
                    title
                }
            }
        }
        pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
        }
    }
}`,o=`
query ArticlesQuery($slug: ID!) {
    article(id: $slug, idType: SLUG) {
        id
        slug
        title(format: RENDERED)
        featuredImage {
            node {
                altText
                sourceUrl
                title
            }
        }
        excerpt: excerptPlainText
        editorBlocks {
            name
            ... on CoreParagraph {
                anchor
                attributes {
                    align
                    content
                }
            }
            ... on CoreHeading {
                anchor
                attributes {
                    align
                    content
                    level
                }
            }
        }
    }
}
`,a=async(e=null,t=3)=>{let r=JSON.stringify({query:n,variables:{after:e,first:t}});try{let e=await i(r,["latestArticles","articles"],void 0);if(!e.data.articles)return!1;return e.data.articles}catch(e){return console.error(e),!1}},l=async e=>{let t=JSON.stringify({query:o,variables:{slug:e}});try{let r=["article",`article:${e}`],s=await i(t,r,void 0);if(!s.data.article)return!1;return s.data.article}catch(e){return console.error(e),!1}}},5658:()=>{},8030:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(5239),i=r(8088),n=r(8170),o=r.n(n),a=r(893),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d={children:["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1204)),"C:\\Downloads\\Waleed\\Studio Noon\\Internship Test\\Internship Test\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4431)),"C:\\Downloads\\Waleed\\Studio Noon\\Internship Test\\Internship Test\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Downloads\\Waleed\\Studio Noon\\Internship Test\\Internship Test\\src\\app\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,71,658,466],()=>r(8030));module.exports=s})();