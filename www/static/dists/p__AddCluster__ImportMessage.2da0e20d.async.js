(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"62Da":function(e,t,a){e.exports={importCard:"importCard___3rLkA",checkbox:"checkbox___1rv2o",resource:"resource___Kwyfp",miscellaneous_assets:"miscellaneous_assets___BeKY9",titles:"titles___3TTxC",WorkLoads:"WorkLoads___ctIbr",hleft:"hleft___2gjFU",hright:"hright___2fCSs",WorkLoads_value:"WorkLoads_value___Aelp_",box:"box___3J9ww",leftKey:"leftKey___3-BKW",rightValue:"rightValue___2wcbx",value:"value___3s4WG",zhichi:"zhichi___1uXdM",is_support:"is_support___1hLjP",loadingstyle:"loadingstyle___wQhN1"}},ZJT7:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var s=l(a("bx4M"));a("+L6B");var n=l(a("2/Rp"));a("R9oj");var i=l(a("ECub"));a("5Dmo");var d=l(a("3S7+"));a("T2oS");var o=l(a("W9HT"));a("14J3");var c=l(a("BMrR"));a("Pwec");var u=l(a("CtXQ"));a("y8nQ");var p=l(a("Vl3Y"));a("OaEy");var m=l(a("2fM7"));a("fu2T");var f,h,_,g,v=l(a("gK9i")),E=a("MuoO"),y=a("7DNP"),x=r(a("q1tI")),b=(l(a("3a4m")),l(a("XZXw"))),k=l(a("+iC2")),w=l(a("62Da")),N=v.default.Panel,S=m.default.Option,C=(m.default.OptGroup,f=p.default.create(),h=(0,E.connect)(e=>{var t=e.user,a=e.list,l=e.loading,r=e.global,s=e.index,n=e.region;return{user:t.currentUser,list:a,loading:l.models.list,rainbondInfo:r.rainbondInfo,enterprise:r.enterprise,isRegist:r.isRegist,oauthLongin:l.effects["global/creatOauth"],overviewInfo:s.overviewInfo,baseConfiguration:n.base_configuration}}),f(_=h((g=class extends x.PureComponent{constructor(e){super(e),this.handleNameSpace=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid;t({type:"region/fetchImportMessage",payload:{eid:a,region_id:this.props.location.query.region_id},callback:e=>{this.setState({nameSpaceArr:e.bean,namespace:e.bean[0]}),this.handleResource(e.bean[0])}})}),this.handleResource=(e=>{var t=this.props,a=t.dispatch,l=t.match.params.eid;a({type:"region/fetchNameSpaceResource",payload:{eid:l,region_id:this.props.location.query.region_id,namespace:e},callback:e=>{this.setState({resourceData:e.bean,loadingSwitch:!1},()=>{var e=this.state.resourceData;Object.keys(e).map(t=>{return e[t]})})}})}),this.handleChange=(e=>{console.log(e,"value"),this.handleResource(e),this.setState({namespace:e,loadingSwitch:!0})}),this.genExtra=(()=>x.default.createElement(u.default,{onClick:e=>{e.stopPropagation()}})),this.callback=(e=>{console.log(e,"key")}),this.onNext=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid,l=this.props.location.query&&this.props.location.query.region_id;t(y.routerRedux.push("/enterprise/".concat(a,"/ResourceConversion?region_id=").concat(l,"&namespace=").concat(this.state.namespace)))});var t=this.props.user,a=k.default.isCompanyAdmin(t);this.state={adminer:a,text:"\u8fd9\u662f\u6298\u53e0\u9762\u677f",nameSpaceArr:[],resourceData:{},namespace:"",loadingSwitch:!0}}componentWillMount(){var e=this.state.adminer,t=this.props.dispatch;e||t(y.routerRedux.push("/"))}componentDidMount(){this.handleNameSpace()}render(){this.props.match.params.eid;console.log(this.props);var e=this.state,t=(e.text,e.nameSpaceArr),a=e.resourceData,l=e.loadingSwitch;return x.default.createElement(b.default,{title:"\u5bfc\u5165\u8d44\u6e90",content:""},x.default.createElement(s.default,{style:{padding:"24px 12px"}},x.default.createElement(c.default,{type:"flex",style:{alignItems:"center",padding:"24px 0px"}},x.default.createElement("div",{style:{width:"120px",textAlign:"right"}},x.default.createElement("h3",{style:{marginBottom:"0em"}},"NameSpace\uff1a")),x.default.createElement(m.default,{placeholder:t[0],style:{width:200},onChange:this.handleChange},t.length>0&&t.map(e=>{return x.default.createElement(S,{value:e},e)}))),x.default.createElement(c.default,{type:"flex",style:{width:"100%",padding:"24px 0px",minHeight:"400px"}},x.default.createElement("div",{style:{width:"120px",textAlign:"right"}},x.default.createElement("h3",null,"\u8d44\u6e90\u5217\u8868\uff1a")),l?x.default.createElement("div",{className:w.default.loadingstyle},x.default.createElement(o.default,{size:"large"})):x.default.createElement(c.default,{className:w.default.importCard},a&&Object.keys(a).length>0?x.default.createElement(v.default,{defaultActiveKey:[0,1,2,3,4,5],onChange:this.callback,expandIconPosition:"right"},a&&Object.keys(a).map((e,t)=>{var l=a[e];return x.default.createElement(N,{header:x.default.createElement("div",null,"label: app=",e),key:t,extra:this.genExtra()},x.default.createElement(c.default,{type:"flex",style:{width:"100%"}},x.default.createElement("div",{className:w.default.resource},x.default.createElement("div",{className:w.default.WorkLoads},x.default.createElement("div",{className:w.default.WorkLoads_value},l.workloads&&Object.keys(l.workloads).map((e,t)=>{var a=l.workloads[e];return x.default.createElement("div",{className:w.default.box},x.default.createElement("div",{className:w.default.leftKey},e,"\uff1a"),x.default.createElement("div",{className:w.default.rightValue},a.length>0&&a.map(e=>{return x.default.createElement(d.default,{title:e},x.default.createElement("div",{className:w.default.value},e))})))}))),x.default.createElement("div",{className:w.default.miscellaneous_assets},x.default.createElement("div",{className:w.default.WorkLoads_value},l.others&&Object.keys(l.others).map(e=>{var t=l.others[e];return x.default.createElement("div",{className:w.default.box},x.default.createElement("div",{className:w.default.leftKey},e,"\uff1a"),x.default.createElement("div",{className:w.default.rightValue},t.length>0&&t.map(e=>{return x.default.createElement(d.default,{title:e},x.default.createElement("div",{className:w.default.value},e))})))}))))))})):x.default.createElement(i.default,{image:i.default.PRESENTED_IMAGE_SIMPLE}))),x.default.createElement(c.default,{style:{textAlign:"center"}},x.default.createElement(n.default,{type:"primary",onClick:this.onNext,style:{marginLeft:"120px",padding:"0px 36px"}},"\u4e0b\u4e00\u6b65"))))}},_=g))||_)||_);t.default=C}}]);