(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{RRtQ:function(e,t,a){"use strict";var r=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var s=r(a("bx4M"));a("g9YV");var i=r(a("wCAj"));a("5Dmo");var l=r(a("3S7+"));a("14J3");var o=r(a("BMrR"));a("+L6B");var d=r(a("2/Rp"));a("5NDa");var p=r(a("5rEg"));a("/xke");var m=r(a("TeRw"));a("y8nQ");var u,c,h,g=r(a("Vl3Y")),f=a("MuoO"),y=a("7DNP"),A=r(a("wd/R")),E=n(a("q1tI")),M=a("LLXN"),v=r(a("qCJ4")),_=r(a("puxM")),w=r(a("XZXw")),N=a("vSx2"),S=r(a("QDog")),T=r(a("hMqj")),b=r(a("51sS")),k=g.default.Item,C=(u=(0,f.connect)(e=>{var t=e.list,a=e.loading,r=e.teamControl,n=e.enterprise;return{list:t,loading:a.models.list,currentTeam:r.currentTeam,currentRegionName:r.currentRegionName,currentEnterprise:n.currentEnterprise,currentTeamPermissionsInfo:r.currentTeamPermissionsInfo}}),u((h=class extends E.PureComponent{constructor(e){super(e),this.onPageChange=(e=>{this.setState({page:e,loading:!0},()=>{this.getTeamAppList()})}),this.onAddGroup=(()=>{this.setState({addGroup:!0})}),this.getTeamAppList=(()=>{var e=this.props.match.params,t=e.teamName,a=e.regionName,r=this.state,n=r.page,s=r.pageSize,i=r.query;this.props.dispatch({type:"global/getTeamAppList",payload:{team_name:t,region:a,query:i,page:n,page_size:s},callback:e=>{e&&200===e.status_code&&this.setState({loading:!1,apps:e.list,total:e.bean&&e.bean.total})}})}),this.handlePermissions=(e=>{var t=this.props.currentTeamPermissionsInfo;return T.default.querySpecifiedPermissionsInfo(t,e)}),this.cancelAddGroup=(()=>{this.setState({addGroup:!1})}),this.handleSearch=(()=>{this.getTeamAppList()}),this.handelChange=(e=>{this.setState({query:e.target.value})}),this.handleEnter=(()=>{this.handleSearch()}),this.handleAddGroup=(()=>{m.default.success({message:(0,M.formatMessage)({id:"notification.success.new_success"})}),this.getTeamAppList(),this.cancelAddGroup()}),this.jumpToAllbackup=(()=>{var e=this.props.match.params,t=e.teamName,a=e.regionName;this.props.dispatch(y.routerRedux.push("/team/".concat(t,"/region/").concat(a,"/allbackup")))}),this.state={apps:[],loading:!0,page:1,query:"",pageSize:10,operationPermissions:this.handlePermissions("queryAppInfo")}}componentWillMount(){var e=this.props.dispatch,t=this.state.operationPermissions.isAccess;t||S.default.withoutPermission(e)}componentDidMount(){this.getTeamAppList()}render(){var e=this.props,t=e.currentEnterprise,a=e.currentTeam,r=e.currentRegionName,n=e.match,m=n.params,u=m.teamName,c=m.regionName,h=this.state,f=h.apps,T=h.loading,C=h.page,x=h.pageSize,I=h.total,P=h.addGroup,L=h.operationPermissions.isCreate,G=[];return G=(0,N.createTeam)((0,N.createEnterprise)(G,t),a,r),G.push({title:(0,M.formatMessage)({id:"teamOverview.appList"})}),E.default.createElement(w.default,{breadcrumbList:G,title:E.default.createElement(M.FormattedMessage,{id:"teamApply.title"}),content:E.default.createElement(M.FormattedMessage,{id:"teamApply.desc"})},E.default.createElement(o.default,null,E.default.createElement(g.default,{layout:"inline",style:{display:"inline-block"}},E.default.createElement(k,null,E.default.createElement(p.default,{placeholder:(0,M.formatMessage)({id:"teamApply.searchTips"}),onChange:this.handelChange,onPressEnter:this.handleEnter,style:{width:250}})),E.default.createElement(k,null,E.default.createElement(d.default,{type:"primary",onClick:this.handleSearch,icon:"search"},E.default.createElement(M.FormattedMessage,{id:"teamApply.search"})))),L&&E.default.createElement(d.default,{type:"primary",icon:"plus",style:{float:"right",marginBottom:"20px"},onClick:this.onAddGroup},E.default.createElement(M.FormattedMessage,{id:"teamApply.createApp"}))),E.default.createElement(s.default,null,P&&E.default.createElement(v.default,{teamName:u,regionName:c,isGetGroups:!1,onCancel:this.cancelAddGroup,onOk:this.handleAddGroup}),E.default.createElement(_.default,{sm:800},E.default.createElement(i.default,{loading:T,size:"default",scroll:{x:!(window.innerWidth>1500)&&1500},pagination:{size:"default",current:C,pageSize:x,total:I,onChange:this.onPageChange},dataSource:f||[],columns:[{title:(0,M.formatMessage)({id:"teamApply.appName"}),dataIndex:"group_name",width:300,render:(e,t)=>{return E.default.createElement(y.Link,{className:b.default.verticalCen,to:"/team/".concat(u,"/region/").concat(c,"/apps/").concat(t.group_id)},S.default.fetchSvg("helm"===t.app_type?"HelmSvg":"localMarket"),e)}},{title:(0,M.formatMessage)({id:"teamApply.updateTime"}),dataIndex:"update_time",width:200,render:e=>{return e?(0,A.default)(e).format("YYYY-MM-DD HH:mm:ss"):"-"}},{title:(0,M.formatMessage)({id:"teamApply.createTime"}),dataIndex:"create_time",width:200,render:e=>{return e?(0,A.default)(e).format("YYYY-MM-DD HH:mm:ss"):"-"}},{title:(0,M.formatMessage)({id:"teamApply.componentNumComparison"}),dataIndex:"services_num",align:"center",width:150,render:(e,t)=>{return E.default.createElement("p",{style:{marginBottom:0}},t.run_service_num,"/",t.services_num)}},{title:(0,M.formatMessage)({id:"teamApply.memoryNumComparison"}),dataIndex:"used_mem",align:"center",width:200,render:(e,t)=>{return E.default.createElement("p",{style:{marginBottom:0}},t.used_mem,"/",t.allocate_mem)}},{title:(0,M.formatMessage)({id:"teamApply.duplicateRecord"}),width:150,dataIndex:"backup_record_num",align:"center",render:(e,t)=>{return E.default.createElement(y.Link,{to:"/team/".concat(u,"/region/").concat(c,"/apps/").concat(t.group_id,"/backup")},e)}},{title:(0,M.formatMessage)({id:"teamApply.releaseRecord"}),width:150,dataIndex:"share_record_num",align:"center",render:(e,t)=>{return E.default.createElement(y.Link,{to:"/team/".concat(u,"/region/").concat(c,"/apps/").concat(t.group_id,"/publish")},e)}},{title:(0,M.formatMessage)({id:"teamApply.remarks"}),dataIndex:"group_note",width:100,render:e=>{return E.default.createElement(l.default,{placement:"top",title:e},E.default.createElement("p",{className:b.default.groupnote},e))}}]}))))}},c=h))||c);t.default=C}}]);