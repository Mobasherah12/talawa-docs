(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(175)),r={id:"core-functionalities",title:"Core Functionalities"},c={unversionedId:"functionalities/core-functionalities",id:"functionalities/core-functionalities",isDocsHomePage:!1,title:"Core Functionalities",description:"### The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable.",source:"@site/docs/functionalities/core-functionalities.md",slug:"/functionalities/core-functionalities",permalink:"/talawa-docs/docs/functionalities/core-functionalities",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/functionalities/core-functionalities.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/talawa-docs/docs/talawa-admin/talawa-admin-introduction"},next:{title:"Overview",permalink:"/talawa-docs/docs/features/installation/installation-overview"}},l=[{value:"User Registration",id:"user-registration",children:[{value:"Description",id:"description",children:[]},{value:"Front End",id:"front-end",children:[]},{value:"Back End",id:"back-end",children:[]}]},{value:"Events",id:"events",children:[{value:"Description",id:"description-1",children:[]},{value:"Back End",id:"back-end-1",children:[]}]},{value:"General News Feed",id:"general-news-feed",children:[{value:"Description",id:"description-2",children:[]},{value:"Back End",id:"back-end-2",children:[]}]},{value:"Group Chat",id:"group-chat",children:[{value:"Description",id:"description-3",children:[]},{value:"Back End",id:"back-end-3",children:[]}]},{value:"Switch Between Organizations",id:"switch-between-organizations",children:[{value:"Description",id:"description-4",children:[]},{value:"Front End",id:"front-end-1",children:[]},{value:"Back End",id:"back-end-4",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("h3",{parentName:"blockquote",id:"the-current-talawa-app-is-functional-but-does-not-meet-many-best-practices-we-need-to-refactor-the-code-to-be-internationally-acceptable"},"The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable."),Object(o.b)("h3",{parentName:"blockquote",id:"before-we-can-add-any-new-functionality-the-refactored-app-needs-to-meet-these-basic-requirements-on-which-the-original-application-was-based"},"Before we can add any new functionality. The refactored app needs to meet these basic requirements on which the original application was based.")),Object(o.b)("h2",{id:"user-registration"},"User Registration"),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"This is the ability to register in the app with an organisation. Once the user is successfully registered as a member of an organisation they are then able to interact with, via the app events and other content related to the organisation."),Object(o.b)("h3",{id:"front-end"},"Front End"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Login Screen"),Object(o.b)("li",{parentName:"ol"},"Registration screen where the user specifies an organization ID and/or servername"),Object(o.b)("li",{parentName:"ol"},"Another option would be to display existing organizations based on a registration URL"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Note:")," Currently organizations can be created in the app. This needs to be moved to a separate organization portal that interacts with the API.")),Object(o.b)("h3",{id:"back-end"},"Back End"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NB:")," endpoint does not necessarily mean endpoint"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create endpoints for user signup and login (authentication)"),Object(o.b)("li",{parentName:"ol"},"Create an endpoints for a user joining organizations"),Object(o.b)("li",{parentName:"ol"},"Create endpoint for creating an organization"),Object(o.b)("li",{parentName:"ol"},"Create endpoints for adding an admin to an organization"),Object(o.b)("li",{parentName:"ol"},"Users should be able to login using their email and password."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Note:")," In the current system users sign up using just their first and last names, email and password. We need to figure out a registration process so that only approved members can gain access. This will help with overall security.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"These features created in 2020 should be removed",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"After logging in for the first time the user searches for the organization he wishes to join and depending on whether or not membership is restricted he\u2019ll be able to join."),Object(o.b)("li",{parentName:"ol"},"Afterwards the user should be able to join other organizations"),Object(o.b)("li",{parentName:"ol"},"The user should also be presented with the option of creating an organization when logging in for the first time. This would apply to persons who intend to use the app as an admin eg. a pastor")))))),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)("h3",{id:"description-1"},"Description"),Object(o.b)("p",null,"These are scheduled events managed by cooordinators and administrators of an organisation. Information related to events in the organisation are monitored via the organisation's newsfeed by members of the organisation. "),Object(o.b)("h3",{id:"back-end-1"},"Back End"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create single and recurring events with primary contacts as well as users with other responsibilities assigned to them"),Object(o.b)("li",{parentName:"ol"},"Register for an event, if necessary"),Object(o.b)("li",{parentName:"ol"},"To create projects related to any event",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"The ability to create tasks for any of the event roles."),Object(o.b)("li",{parentName:"ol"},"Deadlines for completing any assigned tasks.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Deadlines cannot be beyond the project end date"))))),Object(o.b)("li",{parentName:"ol"},"To view the event and  project details",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Outsiders should be able to leave text messages for any person assigned a role."),Object(o.b)("li",{parentName:"ol"},"Automatic group chat for persons within a project or event"))),Object(o.b)("li",{parentName:"ol"},"To add the event to the mobile phone\u2019s own calendar system")),Object(o.b)("h2",{id:"general-news-feed"},"General News Feed"),Object(o.b)("h3",{id:"description-2"},"Description"),Object(o.b)("p",null,"This is the ability to post and interact with content to a live newsfeed for an organisation"),Object(o.b)("h3",{id:"back-end-2"},"Back End"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Users should be able to make posts including text, photos and videos"),Object(o.b)("li",{parentName:"ol"},"Users will be able to view posts made by all other members of the organization. They should be able to like the post as well as make comments.")),Object(o.b)("h2",{id:"group-chat"},"Group Chat"),Object(o.b)("h3",{id:"description-3"},"Description"),Object(o.b)("p",null,"This is the ability to chat from within the Talawa app with multiple members of the same organisation"),Object(o.b)("h3",{id:"back-end-3"},"Back End"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Any user should be able to create a group chat."),Object(o.b)("li",{parentName:"ol"},"Events should automatically have a group chat"),Object(o.b)("li",{parentName:"ol"},"Members of an organization should be able to send messages to each other in various group chats")),Object(o.b)("h2",{id:"switch-between-organizations"},"Switch Between Organizations"),Object(o.b)("h3",{id:"description-4"},"Description"),Object(o.b)("p",null,"Users can belong to multiple organizations, however they cannot create their own. For example, a person may belong to multiple clubs using the Talawa app. This is the ability for users to create their own organizations needs to be removed."),Object(o.b)("h3",{id:"front-end-1"},"Front End"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Screen to show organization(s) already apart of and allow switching"),Object(o.b)("li",{parentName:"ol"},"Screen to join new organization or create ")),Object(o.b)("h3",{id:"back-end-4"},"Back End"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create routes for changing the current organization for the user"),Object(o.b)("li",{parentName:"ol"},"Create routes for getting information regarding current organization"),Object(o.b)("li",{parentName:"ol"},"Users should be able to switch between all the organizations they have joined"),Object(o.b)("li",{parentName:"ol"},"This will change the data in the app regarding the organization ie Main feed, events, groups etc.")))}b.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);