(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"6q2T":function(e,a,t){e.exports={antd_row:"antd_row___2ZxCH",antd_form:"antd_form___FnyMd",antd_row_btn:"antd_row_btn___dxhPI",antd_btn:"antd_btn___2Vepk",antd_rows:"antd_rows___2e42f",titleBox:"titleBox___2mDBL",title:"title___3l-N2",titleSpan:"titleSpan___2sTOp",config:"config___dc7A1",desc:"desc___3k23Q"}},BLxL:function(e,a,t){"use strict";var l=t("g09b"),s=t("tAuX");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var r=l(t("bx4M"));t("+L6B");var n=l(t("2/Rp")),d=l(t("jehZ"));t("5NDa");var u=l(t("5rEg"));t("14J3");var o=l(t("BMrR"));t("FJo9");var m=l(t("L41K"));t("y8nQ");var i,c,f,p,b=l(t("Vl3Y")),g=t("MuoO"),_=t("7DNP"),h=l(t("Qyje")),E=s(t("q1tI")),v=l(t("3a4m")),w=l(t("XZXw")),N=l(t("+iC2")),y=l(t("KrRZ")),D=l(t("6q2T")),x=b.default.Item,S=m.default.Step,I={enableHA:!0,gatewayIngressIPs:"",imageHub:{enable:!1,domain:"",namespace:"",username:"",password:""},etcd:{enable:!1,endpoints:[],secretName:""},estorage:{enable:!1,RWX:{enable:!1,config:{server:"",storageClassName:""}},RWO:{enable:!1,storageClassName:""},NFS:{enable:!1,server:"",path:""}},type:"aliyun",database:{enable:!1,uiDatabase:{host:"",port:"",username:"",password:"",dbname:"",enable:!1},regionDatabase:{host:"",port:"",username:"",password:"",dbname:"",enable:!1}},nodesForChaos:{enable:!1,nodes:[]},nodesForGateway:{enable:!0,nodes:[]}},C=(i=b.default.create(),c=(0,g.connect)(e=>{var a=e.user,t=e.list,l=e.loading,s=e.global,r=e.index;e.region;return{user:a.currentUser,list:t,loading:l.models.list,rainbondInfo:s.rainbondInfo,enterprise:s.enterprise,isRegist:s.isRegist,oauthLongin:l.effects["global/creatOauth"],overviewInfo:r.overviewInfo}}),i(f=c((p=class extends E.PureComponent{constructor(e){super(e),this.loadSteps=(()=>{var e=[{title:"\u57fa\u672c\u914d\u7f6e"},{title:"\u9ad8\u7ea7\u914d\u7f6e"},{title:"\u6267\u884c\u5b89\u88c5"},{title:"\u5bf9\u63a5\u96c6\u7fa4"}];return e}),this.handleSubmit=(e=>{}),this.toLinkNext=(e=>{this.props.dispatch;var a=this.props.match.params.eid;this.props.form.validateFields((t,l)=>{t||l&&(I.gatewayIngressIPs=l.gatewayIngressIPs||"",I.nodesForGateway.nodes=l.nodesForGateway||[],l.domain||l.namespace||l.username||l.password?I.imageHub.enable=!0:I.imageHub.enable=!1,I.imageHub.domain=l.domain||"",I.imageHub.namespace=l.namespace||"",I.imageHub.username=l.username||"",I.imageHub.password=l.password||"",I.etcd.endpoints=l.endpoints||[],I.etcd.secretName=l.secretName||"",l.server?(I.estorage.enable=!0,I.estorage.RWX.enable=!0,I.estorage.RWO.enable=!0):(I.estorage.enable=!1,I.estorage.RWX.enable=!1,I.estorage.RWO.enable=!1),I.estorage.RWX.config.server=l.server||"",l.regionDatabase_host||l.regionDatabase_port||l.regionDatabase_username||l.regionDatabase_password||l.regionDatabase_dbname?(I.database.enable=!0,I.database.regionDatabase.enable=!0):(I.database.enable=!1,I.database.regionDatabase.enable=!1),I.database.regionDatabase.host=l.regionDatabase_host||"",I.database.regionDatabase.port=l.regionDatabase_port||"",I.database.regionDatabase.username=l.regionDatabase_username||"",I.database.regionDatabase.password=l.regionDatabase_password||"",I.database.regionDatabase.dbname=l.regionDatabase_dbname||"",I.nodesForChaos.nodes=[],I.etcd.endpoints=l.endpoints||[],I.etcd.secretName=l.secretName||"","advanced"===e?v.default.push({pathname:"/enterprise/".concat(a,"/provider/ACksterList/advanced"),search:h.default.stringify({data:I,name:"ack",cloudserver:"aliyun"})}):v.default.push({pathname:"/enterprise/".concat(a,"/provider/ACksterList/install"),search:h.default.stringify({data:I,name:"ack",step:"base",cloudserver:"aliyun"})}))})}),this.handleValidatorsGateway=((e,a,t)=>{var l=!1;a&&a.length>0?(a.some(e=>{if(!(e.externalIP&&e.internalIP&&e.name))return l=!1,!0;var a=/^[^\s]*$/;e.externalIP.match(a)&&e.internalIP.match(a)&&e.name.match(a)?t():t(new Error("\u7981\u6b62\u8f93\u5165\u7a7a\u683c")),l=!0}),l?t():t(new Error("\u9700\u586b\u5199\u5b8c\u6574\u7684\u7f51\u5173\u5b89\u88c5\u8282\u70b9"))):t()});var a=this.props.user,t=N.default.isCompanyAdmin(a);this.state={adminer:t}}componentWillMount(){var e=this.state.adminer,a=this.props.dispatch;e||a(_.routerRedux.push("/"))}componentDidMount(){}render(){var e=this.props,a=e.match.params,t=a.eid,l=(a.provider,a.clusterID,e.form.getFieldDecorator),s={labelCol:{xs:{span:0},sm:{span:0}},wrapperCol:{xs:{span:5},sm:{span:5}}},i={labelCol:{xs:{span:3},sm:{span:3}},wrapperCol:{xs:{span:10},sm:{span:10}}},c={labelCol:{xs:{span:3},sm:{span:3}},wrapperCol:{xs:{span:6},sm:{span:6}}};return E.default.createElement(w.default,{title:"\u6dfb\u52a0\u96c6\u7fa4",content:"\u96c6\u7fa4\u662f\u8d44\u6e90\u7684\u96c6\u5408\uff0c\u4ee5Kubernetes\u96c6\u7fa4\u4e3a\u57fa\u7840\uff0c\u90e8\u7f72\u5e73\u53f0Region\u670d\u52a1\u5373\u53ef\u6210\u4e3a\u5e73\u53f0\u96c6\u7fa4\u8d44\u6e90\u3002"},E.default.createElement(o.default,{style:{marginBottom:"16px"}},E.default.createElement(m.default,{current:0},this.loadSteps().map(e=>E.default.createElement(S,{key:e.title,title:e.title})))),E.default.createElement(r.default,{style:{padding:"24px 12px"}},E.default.createElement(b.default,{onSubmit:this.handleSubmit},E.default.createElement("div",{className:D.default.base_configuration},E.default.createElement(o.default,{className:D.default.antd_row},E.default.createElement("div",null,E.default.createElement("span",{style:{fontWeight:"bold",fontSize:"16px"}},"SLB \u8d1f\u8f7d\u5747\u8861:")),E.default.createElement(x,(0,d.default)({},s,{extra:E.default.createElement("div",null,"\u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u63d0\u524d\u5728\u963f\u91cc\u4e91\u5b98\u7f51\u51c6\u5907\u597d\u4e91\u8d44\u6e90\uff1aSLB\u8d1f\u8f7d\u5747\u8861,SLB\u8d1f\u8f7d\u6d41\u91cf\u5230\u540e\u7aef\u7f51\u5173\u8282\u70b9\u7684 80\u3001443\u30016060\u30016443\u30017070\u30018443 \u7aef\u53e3\uff0c\u6240\u4ee5\u9700\u8981\u914d\u7f6eSLB\u76d1\u542c\u7aef\u53e3\uff0c",E.default.createElement("a",{target:"_blank",href:"https://help.aliyun.com/document_detail/29863.html?spm=5176.21213303.J_6704733920.9.6ff053c9SQg0bg&scm=20140722.S_help%40%40%E6%96%87%E6%A1%A3%40%4029863._.ID_help%40%40%E6%96%87%E6%A1%A3%40%4029863-RL_SLB-LOC_main-OR_ser-V_2-P0_1"},"\u8be6\u7ec6\u914d\u7f6e\u89c1\u5b98\u65b9\u6587\u6863\u3002")),className:D.default.antd_form}),l("gatewayIngressIPs",{rules:[{required:!0,message:"\u8bf7\u586b\u5199IP\u5730\u5740"},{pattern:/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g,message:"\u8bf7\u586b\u5199\u6b63\u786e\u7684IP\u5730\u5740"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199IP\u5730\u5740  \u4f8b\uff1a1.2.3.4"})))),E.default.createElement(o.default,{className:D.default.antd_row},E.default.createElement("div",null,E.default.createElement("span",{style:{fontWeight:"bold",fontSize:"16px"}},"\u7f51\u5173\u5b89\u88c5\u8282\u70b9:")),E.default.createElement(x,(0,d.default)({},s,{className:D.default.antd_form,extra:"rainbond\u7f51\u5173\u5b89\u88c5\u5230\u7684\u8282\u70b9\uff0c\u53ef\u4ee5\u5b89\u88c5\u5230\u591a\u4e2a\u8282\u70b9\uff0c\u5b9e\u73b0\u7f51\u5173\u9ad8\u53ef\u7528\uff0c\u8282\u70b9\u540d\u79f0\u586b\u5199k8s\u96c6\u7fa4\u4e2dnode\u540d\u79f0\u3002"}),l("nodesForGateway",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u7f51\u5173\u5b89\u88c5\u8282\u70b9"},{validator:this.handleValidatorsGateway}]})(E.default.createElement(y.default,null)))),E.default.createElement(o.default,{className:D.default.antd_rows},E.default.createElement("div",{className:D.default.titleBox},E.default.createElement("div",{className:D.default.title},E.default.createElement("span",{className:D.default.titleSpan},"NAS \u5b58\u50a8:")),E.default.createElement("div",{className:D.default.desc},"(\u975e\u5fc5\u586b) \u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u5728\u963f\u91cc\u4e91\u5b98\u7f51\u51c6\u5907\u597dNAS\u6587\u4ef6\u7cfb\u7edf\uff0c\u7528\u4e8e\u6301\u4e45\u5316\u6570\u636e\uff0c",E.default.createElement("a",{target:"_blank",href:"https://help.aliyun.com/document_detail/312360.html"},"\u8be6\u7ec6\u914d\u7f6e\u89c1\u5b98\u65b9\u6587\u6863\u3002"))),E.default.createElement("div",{className:D.default.config},E.default.createElement(x,(0,d.default)({},i,{label:"\u6302\u8f7d\u70b9\u5730\u5740"}),l("server",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u6302\u8f7d\u70b9\u5730\u5740"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u6302\u8f7d\u70b9\u5730\u5740  \u4f8b\uff1a123456789-var48.cn-shanghai.nas.aliyuncs.com:/"}))))),E.default.createElement(o.default,{className:D.default.antd_rows},E.default.createElement("div",{className:D.default.titleBox},E.default.createElement("div",{className:D.default.title},E.default.createElement("span",{className:D.default.titleSpan},"RDS \u6570\u636e\u5e93:")),E.default.createElement("div",{className:D.default.desc},"(\u975e\u5fc5\u586b) \u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u5728\u963f\u91cc\u4e91\u5b98\u7f51\u51c6\u5907\u597d\u201dRDS\u6570\u636e\u5e93 MySQL\u72488.0\u201c\uff0c\u5e76\u5f00\u653e3306\u8fde\u63a5\u7aef\u53e3\uff0c\u767b\u5f55RDS\u521b\u5efa\uff0c\u6388\u6743\u7528\u6237\uff0c\u521b\u5efa\u597d\u76f8\u5bf9\u5e94\u7684\u6570\u636e\u5e93\uff0c",E.default.createElement("a",{target:"_blank",href:"https://help.aliyun.com/document_detail/309008.html"},"\u8be6\u7ec6\u914d\u7f6e\u89c1\u5b98\u65b9\u6587\u6863\u3002"))),E.default.createElement("div",{className:D.default.config},E.default.createElement(x,(0,d.default)({},c,{label:"\u8fde\u63a5\u5730\u5740"}),l("regionDatabase_host",{rules:[{required:!1,message:"\u8fde\u63a5\u5730\u5740"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740"}))),E.default.createElement(x,(0,d.default)({},c,{label:"\u8fde\u63a5\u7aef\u53e3"}),l("regionDatabase_port",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u8fde\u63a5\u7aef\u53e3"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u8fde\u63a5\u7aef\u53e3  \u4f8b\uff1a3306"}))),E.default.createElement(x,(0,d.default)({},c,{label:"\u7528\u6237\u540d"}),l("regionDatabase_username",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u7528\u6237\u540d  \u4f8b\uff1aroot"}))),E.default.createElement(x,(0,d.default)({},c,{label:"\u5bc6\u7801"}),l("regionDatabase_password",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u5bc6\u7801"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{type:"password",placeholder:"\u8bf7\u586b\u5199\u5bc6\u7801"}))),E.default.createElement(x,(0,d.default)({},c,{label:"\u6570\u636e\u5e93\u540d\u79f0"}),l("regionDatabase_dbname",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u6570\u636e\u5e93\u540d\u79f0"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u6570\u636e\u5e93\u5e93\u540d\u79f0  \u4f8b\uff1aregion"}))))),E.default.createElement(o.default,{className:D.default.antd_rows},E.default.createElement("div",{className:D.default.titleBox},E.default.createElement("div",{className:D.default.title},E.default.createElement("span",{className:D.default.titleSpan},"\u5bb9\u5668\u955c\u50cf\u670d\u52a1:")),E.default.createElement("div",{className:D.default.desc},"(\u975e\u5fc5\u586b) \u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u5728\u963f\u91cc\u4e91\u5b98\u7f51\u51c6\u5907\u597d\u201d\u5bb9\u5668\u955c\u50cf\u670d\u52a1\u79f0\u4e3aACR\u201c\uff0c\u6839\u636e\u63d0\u793a\u5f00\u901a\u4e4b\u540e\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a\u4ed3\u5e93\u57df\u540d\uff0c\u7ec4\u7ec7\u540d\u79f0\uff08\u6216\u547d\u540d\u7a7a\u95f4\uff09\uff0c\u767b\u5f55\u955c\u50cf\u4ed3\u5e93\u7684\u7528\u6237\u540d\uff0c\u5bc6\u7801\u3002")),E.default.createElement("div",{className:D.default.config},E.default.createElement(x,(0,d.default)({},c,{label:"\u955c\u50cf\u4ed3\u5e93\u57df\u540d",className:D.default.antd_form}),l("domain",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u955c\u50cf\u4ed3\u5e93\u57df\u540d"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u955c\u50cf\u4ed3\u5e93\u57df\u540d"}))),E.default.createElement(x,(0,d.default)({},c,{label:"\u547d\u540d\u7a7a\u95f4",className:D.default.antd_form}),l("namespace",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u547d\u540d\u7a7a\u95f4"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u547d\u540d\u7a7a\u95f4"}))),E.default.createElement(x,(0,d.default)({},c,{label:"\u7528\u6237\u540d",className:D.default.antd_form}),l("username",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{placeholder:"\u8bf7\u586b\u5199\u7528\u6237\u540d"}))),E.default.createElement(x,(0,d.default)({},c,{label:"\u5bc6\u7801",className:D.default.antd_form}),l("password",{rules:[{required:!1,message:"\u8bf7\u586b\u5199\u5bc6\u7801"},{pattern:/^[^\s]*$/,message:"\u7981\u6b62\u8f93\u5165\u7a7a\u683c"}]})(E.default.createElement(u.default,{type:"password",placeholder:"\u8bf7\u586b\u5199\u5bc6\u7801"})))))),E.default.createElement(o.default,null,E.default.createElement(x,{className:D.default.antd_row_btn},E.default.createElement(n.default,{className:D.default.antd_btn,type:"primary",onClick:()=>{this.props.dispatch(_.routerRedux.push("/enterprise/".concat(t,"/addCluster")))}},"\u8fd4\u56de"),E.default.createElement(n.default,{className:D.default.antd_btn,type:"primary",onClick:()=>{this.toLinkNext("advanced")}},"\u9ad8\u7ea7\u914d\u7f6e"),E.default.createElement(n.default,{className:D.default.antd_btn,type:"primary",onClick:()=>{this.toLinkNext("next")}},"\u4e0b\u4e00\u6b65"))))))}},f=p))||f)||f);a.default=C}}]);