(this["webpackJsonpwux-issue-helper"]=this["webpackJsonpwux-issue-helper"]||[]).push([[0],{102:function(e,t,a){e.exports={submitBtn:"IssueForm_submitBtn__2i6iD",radioGroup:"IssueForm_radioGroup__3pcx2",similar:"IssueForm_similar__32aVZ"}},145:function(e,t){},166:function(e,t,a){e.exports={intro:"Intro_intro__3VhcL"}},187:function(e,t,a){e.exports=a(390)},192:function(e){e.exports=JSON.parse('{"intro.modal":"the reason behind our strict policy issue","issue.create":"Create","issue.weapp":"Wechat Miniprogram Version","issue.weappHelp":"Wechat Miniprogram Version, see details > local Settings > debugging basic library","issue.actually":"What is actually happening?","issue.type":"This is a","issue.expected":"What is expected?","issue.type.bug":"Bug report","issue.extra":"Any additional comments? (optional)","issue.type.feature":"Feature Request","issue.motivation":"What problem does this feature solve?","issue.extraHelp":"e.g. some background/context of how you ran into this bug.","issue.title":"Title","issue.repo":"I am opening an issue for","issue.preview":"Preview and Submit","issue.proposal":"What does the proposed API look like?","issue.repoHelp":"Please make sure to file the issue at appropriate repo.","issue.reproduction":"Link to minimal reproduction","issue.steps":"Step to reproduce","issue.version":"WuxUI Version","issue.versionHelp":"Check if the issue is reproducible with the latest stable version.","previewModal.title":"Preview Issue","repro.about":"About Reproductions"}')},193:function(e){e.exports=JSON.parse('{"intro.modal":"\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u4e48\u4e25\u683c\u7684 issue \u89c4\u5b9a","issue.create":"\u521b\u5efa","issue.weapp":"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u57fa\u7840\u5e93\u7248\u672c","issue.weappHelp":"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u57fa\u7840\u5e93\u7248\u672c\uff0c\u67e5\u770b \u8be6\u60c5 > \u672c\u5730\u8bbe\u7f6e > \u8c03\u8bd5\u57fa\u7840\u5e93","issue.react":"React","issue.reactHelp":"react / react-native \u7248\u672c","issue.browser":"\u6d4f\u89c8\u5668","issue.browserHelp":"\u6d4f\u89c8\u5668\u7248\u672c","issue.system":"\u7cfb\u7edf","issue.systemHelp":"\u7cfb\u7edf\u7248\u672c","issue.actually":"\u5b9e\u9645\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f","issue.type":"\u8fd9\u662f\u4e00\u4e2a","issue.expected":"\u671f\u671b\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f","issue.type.bug":"\u9519\u8bef\u62a5\u544a","issue.extra":"\u8865\u5145\u8bf4\u660e\uff08\u53ef\u9009\uff09","issue.type.feature":"\u529f\u80fd\u8981\u6c42","issue.motivation":"\u8fd9\u4e2a\u529f\u80fd\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f","issue.extraHelp":"\u6bd4\u5982\uff1a\u9047\u5230\u8fd9\u4e2a bug \u7684\u4e1a\u52a1\u573a\u666f\u3001\u4e0a\u4e0b\u6587\u3002","issue.title":"Issue \u6807\u9898","issue.repo":"\u76f8\u5173\u4ed3\u5e93","issue.preview":"\u9884\u89c8\u548c\u53d1\u5e03","issue.proposal":"\u4f60\u671f\u671b\u7684 API \u662f\u600e\u6837\u7684\uff1f","issue.repoHelp":"\u8bf7\u786e\u4fdd\u5c06 issue \u53d1\u5f80\u76f8\u5173\u7684\u4ed3\u5e93\u3002","issue.reproduction":"\u91cd\u73b0\u94fe\u63a5","issue.steps":"\u91cd\u73b0\u6b65\u9aa4","issue.version":"WuxUI \u7248\u672c","issue.versionHelp":"\u8bf7\u68c0\u67e5\u95ee\u9898\u662f\u5426\u5b58\u5728\u4e8e\u6700\u65b0\u7248\u672c\u4e2d\u3002","previewModal.title":"Issue \u9884\u89c8","repro.about":"\u5173\u4e8e\u91cd\u73b0"}')},201:function(e,t){},207:function(e,t){},389:function(e,t,a){},390:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(15),s=a(44),i=a(143),o=a(192);window.appLocale.en={messages:Object(s.a)({},o),locale:"en-US",data:i};var l=a(144),c=a(193);window.appLocale.zh={messages:Object(s.a)({},c),locale:"zh-CN",data:l};var u=a(38),p=a(11),m=a(402),d=a(58),f=a(401),h=a(396),E=a(12),g=a(147),b=a(148),v=a(149),w=a(150),y=a(151),x=a(152),I=a(153),O=a(154),M=a(155),C=a(156),S=a(157),k=a(158),j=a(159),H=a(160),_=a(161);var V=Object(_.a)(function(){var e=window.localStorage.getItem("locale");return e||("zh-cn"===window.navigator.language.toLowerCase()?"zh":"en")}());var F=V,W={en:{intro:H.a,introModal:j.a,motivationHelp:k.a,proposalHelp:S.a,reproHelp:C.a,reproModal:M.a,stepsHelp:O.a},zh:{intro:I.a,introModal:x.a,motivationHelp:y.a,proposalHelp:w.a,reproHelp:v.a,reproModal:b.a,stepsHelp:g.a}},z=function(e){var t=e.id,a=Object(E.a)(e,["id"]),r=n.useContext(F),s=W[r][t];return n.createElement("div",a,n.createElement(s,null))},N=function(e){var t=e.visible,a=e.onCancel;return n.createElement(h.a,{title:n.createElement(p.a,{id:"intro.modal",defaultMessage:"The reason behind our strict issue policy"}),footer:"",visible:t,onCancel:a,width:"680px"},n.createElement(z,{className:"paragraph",id:"introModal"}))},R=a(166),A=a.n(R),P=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],s=n.useRef(null);return n.useEffect((function(){s.current.addEventListener("click",(function(e){"#intro-modal"===e.target.getAttribute("href")&&(e.preventDefault(),r((function(e){return!0})))}))}),[]),n.createElement("div",{className:"".concat(A.a.intro," paragraph"),ref:s},n.createElement(N,{visible:a,onCancel:function(){return r((function(e){return!1}))}}),n.createElement(z,{id:"intro"}))},q=a(65),T=a(397),B=a(395),L=a(393),J=a(394),U=a(399),D=a(398),G=a(400),K=a(112),Z=a.n(K),$=a(167),Q=B.a.Item,X=T.a.Option,Y=D.a.TextArea,ee=function(e){var t=e.versions;return n.createElement("div",null,n.createElement(B.a.Item,null,n.createElement(L.a,null,n.createElement(J.a,{span:11},n.createElement(Q,{name:"version",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.version",defaultMessage:"Version"}),help:n.createElement(p.a,{id:"issue.versionHelp",defaultMessage:"Check if the issue is reproducible with the latest stable version."})},n.createElement(T.a,{showSearch:!0},t.map((function(e){return n.createElement(X,{key:e,value:e},e)}))))),n.createElement(J.a,{span:12,offset:1},n.createElement(Q,{name:"weapp",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.weapp",defaultMessage:"Wechat Miniprogram Version"}),help:n.createElement(p.a,{id:"issue.weappHelp",defaultMessage:"Wechat Miniprogram Version..."})},n.createElement(D.a,null))))),n.createElement(B.a.Item,null,n.createElement(L.a,null,n.createElement(J.a,{span:11},n.createElement(Q,{name:"system",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.system",defaultMessage:"System"}),help:n.createElement(p.a,{id:"issue.systemHelp",defaultMessage:"System version..."})},n.createElement(D.a,null))))),n.createElement(Q,{name:"reproduction",rules:[{required:!1,validator:function(){var e=Object($.a)(Z.a.mark((function e(t,a){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!a.includes("wuxui.com")){e.next=2;break}return e.abrupt("return",Promise.reject("Please provide valid reproduction url"));case 2:return e.abrupt("return",Promise.resolve());case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}],label:n.createElement(p.a,{id:"issue.reproduction",defaultMessage:"Link to minimal reproduction"}),extra:n.createElement(z,{id:"reproHelp"})},n.createElement(D.a,{type:"url"})),n.createElement(Q,{name:"steps",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.steps",defaultMessage:"Step to reproduce"}),help:n.createElement(z,{id:"stepsHelp"})},n.createElement(Y,{autoSize:{minRows:2}})),n.createElement(Q,{name:"expected",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.expected",defaultMessage:"What is expected?"})},n.createElement(Y,{autoSize:{minRows:2}})),n.createElement(Q,{name:"actual",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.actually",defaultMessage:"What is actually happening?"})},n.createElement(Y,{autoSize:{minRows:2}})),n.createElement(Q,{name:"extra",label:n.createElement(p.a,{id:"issue.extra",defaultMessage:"Any additional comments?(optional)"}),help:n.createElement(p.a,{id:"issue.extraHelp",defaultMessage:"e.g. some background/context of how you ran into this bug."})},n.createElement(Y,{autoSize:{minRows:2}})))},te=B.a.Item,ae=D.a.TextArea,ne=function(){return n.createElement("div",null,n.createElement(te,{name:"motivation",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.motivation",defaultMessage:"What problem does this feature solve?"}),help:n.createElement(z,{id:"motivationHelp"})},n.createElement(ae,{autoSize:{minRows:2}})),n.createElement(te,{name:"proposal",rules:[{required:!0}],label:n.createElement(p.a,{id:"issue.proposal",defaultMessage:"What does the proposed API look like?"}),help:n.createElement(z,{id:"proposalHelp"})},n.createElement(ae,{autoSize:{minRows:2}})))},re=a(177),se=new(a.n(re).a),ie=function(e){var t=e.visible,a=e.content,r=e.onCancel,s=e.onCreate;return n.createElement(h.a,{title:n.createElement(p.a,{id:"previewModal.title",defaultMessage:"Issue Preview"}),cancelText:"",width:"680px",visible:t,onCancel:r,footer:n.createElement(d.a,{onClick:s,type:"primary"},n.createElement(p.a,{id:"issue.create",defaultMessage:"Create"}))},n.createElement("div",{className:"paragraph",dangerouslySetInnerHTML:{__html:se.render(a)}}))},oe=function(e){var t=e.visible,a=e.onCancel;return n.createElement(h.a,{title:n.createElement(p.a,{id:"repro.about",defaultMessage:"About Reproductions"}),footer:"",visible:t,onCancel:a,width:"680px"},n.createElement(z,{className:"paragraph",id:"reproModal"}))};function le(e,t,a){return"bug"===e?function(e,t){var a=e.version,n=e.weapp,r=(e.react,e.system),s=(e.browser,e.reproduction),i=e.steps,o=e.expected,l=e.actual,c=e.extra;e.repo;if("zh"===t)return"\n### \u91cd\u73b0\u94fe\u63a5\n".concat(ce(s)||"\u65e0","\n\n### \u91cd\u73b0\u6b65\u9aa4\n").concat(i,"\n\n### \u671f\u671b\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f\n").concat(o,"\n\n### \u5b9e\u9645\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f\n").concat(l,"\n\n| \u73af\u5883 | \u7248\u672c |\n|---|---|\n| Wux | ").concat(a," |\n| \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u57fa\u7840\u5e93 | ").concat(n," |\n| \u7cfb\u7edf | ").concat(r," |\n\n").concat(c?"---\n".concat(c):"","\n").trim();return"\n### Reproduction link\n".concat(ce(s)||"null","\n\n### Steps to reproduce\n").concat(i,"\n\n### What is expected?\n").concat(o,"\n\n### What is actually happening?\n").concat(l,"\n\n| Environment | Info |\n|---|---|\n| Wux | ").concat(a," |\n| Wechat Miniprogram | ").concat(n," |\n| System | ").concat(r," |\n\n").concat(c?"---\n".concat(c):"","\n").trim()}(t,a):function(e,t){var a=e.motivation,n=e.proposal;if("zh"===t)return"\n### \u4f60\u671f\u671b\u7684 API \u662f\u600e\u6837\u7684\uff1f\n".concat(a,"\n\n### \u8bf7\u786e\u4fdd\u5c06 issue \u53d1\u5f80\u76f8\u5173\u7684\u4ed3\u5e93\u3002\n").concat(n,"\n").trim();return"\n### What problem does this feature solve?\n".concat(a,"\n\n### What does the proposed API look like?\n").concat(n,"\n").trim()}(t,a)}function ce(e){if(e)return e.indexOf("codesandbox.io")>=0?"[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](".concat(e,")"):"[".concat(e,"](").concat(e,")")}var ue=a(115),pe=a(380),me={"wux-weapp":"wux-weapp"};function de(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)}function fe(e){var t=[],a=[];return e.forEach((function(e){e.match(/^\d+\.\d+\.\d+$/)||e.includes("-rc.")?t.push(e):a.push(e)})),[].concat(Object(ue.a)(t.sort((function(e,t){return-pe(e,t)}))),Object(ue.a)(a.sort((function(e,t){return-pe(e,t)}))))}function he(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return{similarIssues:a,searchIssues:function(e,t){t?function(e,t){var a=encodeURIComponent("is:issue repo:wux-weapp/".concat(e," ").concat(t));return fetch("".concat("https://api.github.com","/search/issues?q=").concat(a,"&per_page=5")).then(de).then((function(e){return e.json()})).then((function(e){return e.items}))}(e,t).then((function(e){return r((function(t){return e}))})):r((function(e){return[]}))}}}function Ee(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1];return{repoVersions:a,fetchVersions:function(e){(function(e){var t=fetch("".concat("https://registry.npm.taobao.org","/").concat(me[e])).then(de).then((function(e){return e.json()})).then((function(e){var t=e.versions;return Object.keys(t).filter((function(e){return!e.includes("-")}))})).then((function(e){return fe(e)})).then((function(e){return e.slice(0,100)}));return fetch("".concat("https://api.github.com","/repos/wux-weapp/").concat(e,"/releases?per_page=100")).then(de).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return!e.prerelease}))})).then((function(e){return e.map((function(e){return e.tag_name}))})).then((function(e){return fe(e)})).catch((function(e){return console.warn(e),t}))})(e).then((function(t){return r((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(q.a)({},e,t))}))}))}}}var ge=a(102),be=a.n(ge),ve=T.a.Option,we=window.location.search.slice(1).split("&").reduce((function(e,t){var a=t.split("="),n=Object(u.a)(a,2),r=n[0],i=n[1];return Object(s.a)(Object(s.a)({},e),{},Object(q.a)({},r,i))}),{});we.repo||(we.repo="wux-weapp");var ye=function(e){var t=e.locale,a=Object(n.useState)(!1),r=Object(u.a)(a,2),i=r[0],o=r[1],l=B.a.useForm(),c=Object(u.a)(l,1)[0],m=function(e){return le(e,c.getFieldsValue(),t)},f=n.useState(""),h=Object(u.a)(f,2),E=h[0],g=h[1],b=n.useState(!1),v=Object(u.a)(b,2),w=v[0],y=v[1],x=function(e){g(m(c.getFieldValue("type"))),y(e)},I=n.useRef(null),O=he(),M=O.similarIssues,C=O.searchIssues,S=Ee(),k=S.repoVersions,j=S.fetchVersions,H=n.useCallback((function(){I.current.addEventListener("click",(function(e){"#repro-modal"===e.target.getAttribute("href")&&(e.preventDefault(),o((function(e){return!0})))}))}),[]),_=n.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=localStorage.getItem("form");if(t){var a=JSON.parse(t),n=Object.keys(a);e.forEach((function(e){delete a[e]})),a.type&&c.setFieldsValue({type:a.type}),setTimeout((function(){var e=c.getFieldsValue();n.forEach((function(t){t in e||delete a[t]})),c.setFieldsValue(a)}),100)}}),[]),V=n.useCallback((function(e){c.resetFields(["version"]),k[e]||j(e)}),[]),F=n.useCallback((function(){_(["type"])}),[]),W=n.useCallback((function(){var e=c.getFieldValue("repo"),t=c.getFieldValue("title");C(e,t)}),[]),z=n.useCallback((function(){var e=c.getFieldValue("type"),a=c.getFieldValue("repo"),n=encodeURIComponent(c.getFieldValue("title")).replace(/%2B/gi,"+"),r=m(e),s="zh"===t?"\n- [ ] \u6211\u5df2\u7ecf\u641c\u7d22\u8fc7\u76f8\u5173 [issues](https://github.com/wux-weapp/".concat(a,"/issues) \uff0c\u786e\u5b9a\u8fd9\u4e2a\u95ee\u9898\u6ca1\u6709\u4eba\u63d0\u8fc7\u3002\n\n").concat(r,"\n"):"\n- [ ] I have searched the [issues](https://github.com/wux-weapp/".concat(a,"/issues) of this repository and believe that this is not a duplicate.\n\n").concat(r,"\n"),i="".concat(s,"zh"===t?"\n\n\x3c!-- \u7531 wux issue helper \u751f\u6210\u3002\u8bf7\u52ff\u79fb\u9664 --\x3e":"\n\n\x3c!-- generated by wux-issue-helper. DO NOT REMOVE --\x3e"),o=encodeURIComponent(i).replace(/%2B/gi,"+"),l="feature"===e?"&labels=\ud83d\udca1%20Feature%20Request":"";localStorage.clear(),window.open("https://github.com/wux-weapp/".concat(a,"/issues/new?title=").concat(n,"&body=").concat(o).concat(l))}),[t]);n.useEffect((function(){j(we.repo),H(),_()}),[]);var N=c.getFieldValue("repo"),R=k[N]||[],A=n.createElement(B.a.Item,{className:be.a.similar},"zh"===t?n.createElement("h3",null,"\u7c7b\u4f3c\u95ee\u9898:"):n.createElement("h3",null,"Similar Issues:"),n.createElement("ul",null,M.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:e.html_url,target:"_blank",rel:"noreferrer noopener"},e.title))}))));return n.createElement("div",{ref:I},n.createElement(B.a,{form:c,layout:"vertical",size:"large",initialValues:{repo:we.repo,type:"bug",version:R[0]},onFinish:function(){x(!0)},onValuesChange:function(e,t){var a={};try{a=JSON.parse(localStorage.getItem("form"))||{}}catch(r){}var n=Object(s.a)({},a);Object.keys(t).forEach((function(e){t[e]&&(n[e]=t[e])})),localStorage.setItem("form",JSON.stringify(n,null,2))}},n.createElement(ie,{visible:w,content:E,onCancel:function(){x(!1)},onCreate:z}),n.createElement(oe,{visible:i,onCancel:function(){return o((function(e){return!1}))}}),n.createElement(L.a,null,n.createElement(J.a,{span:11},n.createElement(B.a.Item,{name:"repo",label:n.createElement(p.a,{id:"issue.repo",defaultMessage:"I am opening an issue for"}),help:n.createElement(p.a,{id:"issue.repoHelp",defaultMessage:"Please make sure to file the issue at appropriate repo."})},n.createElement(T.a,{onChange:V},n.createElement(ve,{value:"wux-weapp"},"wux-weapp")))),n.createElement(J.a,{span:12,offset:1},n.createElement(B.a.Item,{name:"type",label:n.createElement(p.a,{id:"issue.type",defaultMessage:"This is a"})},n.createElement(U.a.Group,{onChange:F,className:be.a.radioGroup},n.createElement(U.a.Button,{value:"bug"},n.createElement(p.a,{id:"issue.type.bug",defaultMessage:"Bug Report"})),n.createElement(U.a.Button,{value:"feature"},n.createElement(p.a,{id:"issue.type.feature",defaultMessage:"Feature Request"})))))),n.createElement(B.a.Item,{name:"title",label:n.createElement(p.a,{id:"issue.title",defaultMessage:"Title"}),rules:[{required:!0}]},n.createElement(D.a,{onBlur:W})),M.length>0&&A,n.createElement(B.a.Item,{noStyle:!0,shouldUpdate:function(e,t){return e.type!==t.type}},(function(){return"feature"===c.getFieldValue("type")?n.createElement(ne,null):n.createElement(ee,{versions:R})})),n.createElement(B.a.Item,null,n.createElement("div",{className:be.a.submitBtn},n.createElement(d.a,{type:"primary",size:"large",htmlType:"submit",icon:n.createElement(G.a,null)},n.createElement(p.a,{id:"issue.preview",defaultMessage:"Preview"}))))))},xe=a(71),Ie=a.n(xe),Oe=m.a.Header,Me=m.a.Content,Ce=m.a.Footer,Se=function(){var e=n.useContext(F),t=n.useState(e),a=Object(u.a)(t,2),r=a[0],s=a[1],i=window.appLocale[r];return Object(p.c)(i.data),n.createElement(F.Provider,null,n.createElement(m.a,{className:"layout"},n.createElement(Oe,{className:Ie.a.header},n.createElement("div",{className:Ie.a.headerContainer},n.createElement("div",{className:Ie.a.logo},n.createElement("img",{alt:"logo",src:"http://cdn.skyvow.cn/logo.png"}),n.createElement("h1",null,"Issue Helper")),n.createElement("div",{className:Ie.a.locale},n.createElement(d.a,{size:"small",onClick:function(){return function(e){var t="en"===V.read()?"zh":"en";e(t),V.write(t),window.localStorage.setItem("locale",V.read())}(s)}},"en"===r?"\u4e2d\u6587":"English")))),n.createElement(p.b,{locale:r,messages:i.messages},n.createElement(Me,{className:Ie.a.content},n.createElement(P,null),n.createElement(ye,{locale:r}))),n.createElement(Ce,{style:{textAlign:"center"}},"Inspired by"," ",n.createElement("a",{href:"https://new-issue.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},"Vue Issue Helper")," ","\xb7"," ",n.createElement("a",{href:"https://github.com/wux-weapp/wux-issue-helper"},"Source Code")),n.createElement(f.a,null)))};a(389);r.render(n.createElement(Se,null),document.getElementById("root"))},71:function(e,t,a){e.exports={header:"App_header__2L3DO",headerContainer:"App_headerContainer__3EsT6",logo:"App_logo__2qPv-",content:"App_content__1Wt3K"}}},[[187,1,2]]]);
//# sourceMappingURL=main.4123773a.chunk.js.map