"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[8610],{3146:function(e,a,t){t.d(a,{Z:function(){return d}});var l=t(7294),r=t(6010),n=t(3905),s=t(4973),m=t(6742),i=t(7189),c=t(1217),o="blogPostTitle_GeHD",g="blogPostDate_fNvV",u=t(9732);var d=function(e){var a,t,d=(a=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,h=e.frontMatter,E=e.metadata,v=e.truncated,b=e.isBlogPostPage,f=void 0!==b&&b,N=E.date,_=E.formattedDate,k=E.permalink,Z=E.tags,T=E.readingTime,w=h.author,P=h.title,M=h.image,y=h.keywords,L=h.author_url||h.authorURL,I=h.author_title||h.authorTitle,x=h.author_image_url||h.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:y,image:M}),l.createElement("article",{className:f?void 0:"margin-bottom--xl"},(t=f?"h1":"h2",l.createElement("header",null,l.createElement(t,{className:(0,r.Z)("margin-bottom--sm",o)},f?P:l.createElement(m.Z,{to:k},P)),l.createElement("div",{className:"margin-vert--md"},l.createElement("time",{dateTime:N,className:g},_,T&&l.createElement(l.Fragment,null," \xb7 ",d(T)))),l.createElement("div",{className:"avatar margin-vert--md"},x&&l.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:L},l.createElement("img",{src:x,alt:w})),l.createElement("div",{className:"avatar__intro"},w&&l.createElement(l.Fragment,null,l.createElement("h4",{className:"avatar__name"},l.createElement(m.Z,{href:L},w)),l.createElement("small",{className:"avatar__subtitle"},I)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:i.Z},p)),(Z.length>0||v)&&l.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&l.createElement("div",{className:"col"},l.createElement("strong",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var a=e.label,t=e.permalink;return l.createElement(m.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&l.createElement("div",{className:"col text--right"},l.createElement(m.Z,{to:E.permalink,"aria-label":"Read more about "+P},l.createElement("strong",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,a,t){t.d(a,{Z:function(){return u}});var l=t(7294),r=t(6010),n=t(6742),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";function u(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},l.createElement("h3",{className:m},a.title),l.createElement("ul",{className:i},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:g},e.title))}))))}},9404:function(e,a,t){t.r(a);var l=t(7294),r=t(8740),n=t(3146),s=t(6742),m=t(5601),i=t(4973),c=t(9732);function o(e){var a,t=e.tagName,r=e.count,n=(a=(0,c.c2)().selectMessage,function(e){return a(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return l.createElement(i.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(r),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,g=e.sidebar,u=a.allTagsPath,d=a.name,p=a.count;return l.createElement(r.Z,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--3"},l.createElement(m.Z,{sidebar:g})),l.createElement("main",{className:"col col--7"},l.createElement("h1",null,l.createElement(o,{count:p,tagName:d})),l.createElement(s.Z,{href:u},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.createElement(n.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.createElement(a,null))})))))))}}}]);