(()=>{var e={};e.id=487,e.ids=[487],e.modules={547:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>u,serverHooks:()=>f,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>p});var a={};t.r(a),t.d(a,{POST:()=>c});var s=t(6559),n=t(8088),i=t(7719),o=t(2190),l=t(5646);async function c(e,r){try{let{after:r,first:t}=await e.json();if(!r||!t)return o.NextResponse.json({success:!1,message:"Invalid request parameters. 'after' and 'first' are required."});let a=await (0,l.GE)(r,t);if(!a)throw Error("No articles found");return o.NextResponse.json({success:!0,articles:a})}catch(e){return console.error("Error fetching articles:",e),o.NextResponse.json({success:!1,message:"An error occurred while submitting the form. Please try again."})}}let u=new s.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/articles/route",pathname:"/api/articles",filename:"route",bundlePath:"app/api/articles/route"},resolvedPagePath:"C:\\Downloads\\Waleed\\Studio Noon\\Internship Test\\Internship Test\\src\\app\\api\\articles\\route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:d,workUnitAsyncStorage:p,serverHooks:f}=u;function g(){return(0,i.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:p})}},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5646:(e,r,t)=>{"use strict";t.d(r,{vO:()=>l,GE:()=>o});let a=process.env.GRAPHQL_ENDPOINT;if(!a)throw Error("No API URL found. Please set the GRAPHQL_ENDPOINT environment variable.");function s(e,r=[],t=86400,n){return new Promise(async(s,i)=>{if(!a)return i(Error("No API URL found"));let o={method:"POST",headers:{"Content-Type":"application/json",...n},body:e,next:{revalidate:t,tags:r.length>0?r:void 0}};r.length>0&&(o.next||(o.next={revalidate:t}),o.next.tags=r);try{let e=await fetch(a,o);if(!e.ok)return console.error(`Error fetching data from ${a}: ${e.status} ${e.statusText}`),i(Error("An error occurred while fetching the data."));let r=await e.json();s(r)}catch(e){i(e)}})}let n=`
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
}`,i=`
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
`,o=async(e=null,r=3)=>{let t=JSON.stringify({query:n,variables:{after:e,first:r}});try{let e=await s(t,["latestArticles","articles"],void 0);if(!e.data.articles)return!1;return e.data.articles}catch(e){return console.error(e),!1}},l=async e=>{let r=JSON.stringify({query:i,variables:{slug:e}});try{let t=["article",`article:${e}`],a=await s(r,t,void 0);if(!a.data.article)return!1;return a.data.article}catch(e){return console.error(e),!1}}},6487:()=>{},8335:()=>{},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[447,580],()=>t(547));module.exports=a})();