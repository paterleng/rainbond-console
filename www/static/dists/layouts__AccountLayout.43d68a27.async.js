(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"qzb/":function(e,t,r){"use strict";var a=r("tAuX"),n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("B9cy");var l,i=n(r("Ol7k")),s=n(r("TSYQ")),o=r("MuoO"),d=r("7DNP"),c=r("4zCG"),u=r("s4NR"),p=a(r("q1tI")),f=r("LLXN"),h=r("E6Dt"),m=n(r("ZFw/")),E=n(r("W2Kv")),g=n(r("NtFa")),v=n(r("h3zL")),b=n(r("xqX8")),y=n(r("IamK")),x=n(r("HZnN")),C=n(r("mWxT")),L=n(r("R1Dz")),M=(n(r("u95X")),i.default.Content);(0,c.enquireScreen)(e=>{l=e});class w extends p.PureComponent{constructor(e){super(e),this.getEnterpriseList=(()=>{var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"global/fetchEnterpriseList",callback:e=>{e&&200===e.status_code&&this.setState({enterpriseList:e.list,ready:!0},()=>{this.fetchEnterpriseInfo()})}})}),this.handleMenuCollapse=(e=>{var t=this.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})}),this.fetchEnterpriseInfo=(()=>{var e=this.props,t=e.dispatch,r=e.currentUser;r&&r.enterprise_id&&t({type:"global/fetchEnterpriseInfo",payload:{enterprise_id:r.enterprise_id}})}),this.fetchEnterpriseService=(e=>{var t=this.props.dispatch;t({type:"order/fetchEnterpriseService",payload:{enterprise_id:e}})}),this.onJumpPersonal=(()=>{var e=this.props,t=e.enterprise,r=e.dispatch,a=t&&t.enterprise_id;r(d.routerRedux.replace("/enterprise/".concat(a,"/personal")))}),this.state={ready:!1,isMobiles:l,enterpriseList:[]}}componentDidMount(){this.getEnterpriseList()}getContext(){var e=this.props.location;return{location:e}}render(){var e=this.props,t=e.children,r=e.currentUser,a=e.rainbondInfo,n=e.collapsed,l=e.enterprise,o=e.location,c=this.state,w=c.enterpriseList,W=c.isMobiles,_=c.ready,I=l&&l.enterprise_id,k=C.default.fetchLogo(a,l)||E.default;if(!_||!l)return p.default.createElement(b.default,null);var N=(0,u.stringify)({redirect:window.location.href});if(!r||!a||0===w.length)return p.default.createElement(d.Redirect,{to:"/user/login?".concat(N)});var P={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200}},S="calc(100% -48px)",z=()=>{return p.default.createElement("div",{className:v.default.enterprise,onClick:this.onJumpPersonal},p.default.createElement("img",{src:k,alt:""}))},U=()=>{return p.default.createElement(d.Link,{style:{color:"#fff",fontSize:"16px",fontWeight:"bolder"},to:"/enterprise/".concat(I,"/personal")},(0,f.formatMessage)({id:"enterpriseTeamManagement.other.personal"}))},q=()=>{return p.default.createElement(i.default,null,p.default.createElement(y.default,{currentEnterprise:r,enterpriseList:w,currentUser:r,logo:k,Authorized:x.default,collapsed:n,location:o,isMobile:W,onCollapse:this.handleMenuCollapse}),p.default.createElement(i.default,null,p.default.createElement(g.default,{logo:k,isPubCloud:a&&a.is_public&&a.is_public.enable,eid:I,currentUser:r,collapsed:n,onCollapse:this.handleMenuCollapse,isMobile:W,customHeader:U,customHeaderImg:z}),p.default.createElement(M,{key:"sdfds",style:{height:"calc(100vh - 64px)",overflow:"auto",width:S}},p.default.createElement("div",{style:{margin:"24px 24px 0"}},p.default.createElement(x.default,{logined:!0,authority:["admin","user"],noMatch:p.default.createElement(d.Redirect,{to:"/user/login"})},t)))))},R=C.default.fetchSiteTitle(a);return p.default.createElement(p.Fragment,null,p.default.createElement(m.default,{title:R},p.default.createElement(h.ContainerQuery,{query:P},e=>p.default.createElement(L.default.Provider,{value:this.getContext()},p.default.createElement("div",{className:(0,s.default)(e)},q())))))}}var W=(0,o.connect)(e=>{var t=e.user,r=e.global;return{currentUser:t.currentUser,rainbondInfo:r.rainbondInfo,collapsed:r.collapsed,enterprise:r.enterprise}})(w);t.default=W}}]);