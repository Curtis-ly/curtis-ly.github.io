(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(9),i=n.n(c),r=(n(94),n(12)),o=n(13),s=n(15),p=n(14),m=n(16),u=(n(96),n(98),n(179)),h=n(180),d=n(10),f=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.e,{icon:null,style:{background:"rgba(0,0,0,0.3)"},marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},l.a.createElement("span",{style:{color:"#ffffff"}},"\u606d\u559cxxxx\u6210\u529f\u901a\u5173\u6e38\u620f\uff0c\u8d62\u53d6\u5230yyyy")),l.a.createElement(d.g,{size:"lg"}),l.a.createElement(d.h,null,l.a.createElement("div",{style:{width:"100%",height:"auto",backgroundColor:"#ffffff",borderRadius:"10px",padding:"15px 0",textAlign:"center"}},l.a.createElement("label",{inline:!0,style:{fontSize:"18px",marginLeft:"4px",marginRight:"8px"}},"\u5df2\u7d2f\u8ba1\u9001\u51fa"),l.a.createElement("p",{style:{textAlign:"bottom"}},l.a.createElement("label",{inline:!0,style:{fontSize:"30px"}},"10086"),l.a.createElement("label",{inline:!0,style:{fontSize:"16px"}},"\u652f\u53e3\u7ea2")),l.a.createElement(d.b,{justify:"center"},l.a.createElement(d.c,{inline:!0,type:"check-circle-o"}),l.a.createElement("label",{inline:!0,style:{fontSize:"14px",marginLeft:"4px",marginRight:"8px"}},"\u5168\u573a\u5305\u90ae"),l.a.createElement(d.c,{inline:!0,type:"check-circle-o"}),l.a.createElement("label",{inline:!0,style:{fontSize:"14px",marginLeft:"4px",marginRight:"8px"}},"\u4e13\u67dc\u6b63\u54c1"),l.a.createElement(d.c,{inline:!0,type:"check-circle-o"}),l.a.createElement("label",{inline:!0,style:{fontSize:"14px",marginLeft:"4px"}},"\u5047\u4e00\u8d54\u767e"))),l.a.createElement(d.b,{justify:"center",style:{marginTop:"16px",flexFlow:"row nowrap",justifyContent:"space-between"}},l.a.createElement("span",{style:{color:"#363636",fontSize:"15px",fontWeight:"bold"}},"\u8fde\u95ef\u4e09\u5173\uff0c\u53e3\u7ea2\u7ee7\u56de\u5bb6!"),l.a.createElement(d.b,{justify:"center"},l.a.createElement("img",{src:"https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_game_instructions.png",style:{width:"16px",height:"16px"}}),l.a.createElement("span",{style:{color:"#EA68A2",fontSize:"15px",marginLeft:"5px"}},"\u95ef\u5173\u8bf4\u660e")))))}}]),t}(a.Component),y=n(88),g=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.itemData;return l.a.createElement("div",{style:{background:"rgba(255,255,255,1.0)",overflow:"hidden"}},l.a.createElement("img",{src:e.icon,style:{width:"100%",height:"auto"},alt:"",onClick:function(){return console.info("abcdefg")}}),l.a.createElement("div",{style:{paddingLeft:"12px",width:"100%",background:"rgba(255,255,255,1.0)"}},l.a.createElement("span",{style:{color:"#3D3D3D",fontSize:"12px",display:"block",float:"left",whiteSpace:"nowrap"}},"\u8fea\u5965 Diro#999"),l.a.createElement("div",{style:{display:"block",float:"left",whiteSpace:"nowrap",marginTop:"4px"}},l.a.createElement("span",{inline:!0,style:{color:"#FC2F2F",fontSize:"10px"}},"\xa5"),l.a.createElement("span",{inline:!0,style:{color:"#FC2F2F",fontSize:"21px"}},"2\u5143"),l.a.createElement("span",{inline:!0,style:{color:"#f73437",fontSize:"12px",marginLeft:"6px"}},"\u95ef\u5173\u8d2d")),l.a.createElement("div",{style:{display:"block",float:"left",whiteSpace:"nowrap",marginTop:"4px"}},l.a.createElement("span",{inline:!0,style:{color:"#3D3D3D",fontSize:"10px"}},"\u4e13\u67dc\u4ef7"),l.a.createElement("span",{inline:!0,style:{textDecoration:"line-through",color:"#3D3D3D",fontSize:"10px"}},"\xa5299"))),l.a.createElement("div",{style:{display:"block",float:"left",whiteSpace:"nowrap",marginTop:"8px",width:"100%",height:"30px"}},l.a.createElement(d.a,{type:"warning",size:"small",style:{fontSize:"15px",background:"linear-gradient(90deg, #FC2F2F, #FF678F, #FC2F2F)"}},"\u7acb\u5373\u95ef\u5173")))}}]),t}(a.Component);g.defaultProps={itemData:[]};var b=g,E=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getRows",value:function(e,t){for(var n=[],a=this.props,c=a.columnNum,i=a.data,r=a.onClick,o=a.itemStyle,s="".concat(100/c,"%"),p=Object(y.a)({width:s},o),m=0;m<e;m++){for(var u=[],h=function(e){var n=m*c+e,a=void 0;if(n<t){var o=i&&i[n];a=l.a.createElement(d.b.Item,{onClick:function(){return r&&r(o,n)},style:p},l.a.createElement(b,{itemData:o}))}else a=l.a.createElement(d.b.Item,{key:"griditem-".concat(n),style:p});u.push(a)},f=0;f<c;f++)h(f);n.push(l.a.createElement(d.b,{justify:"center",align:"stretch",key:"gridline-".concat(m)},u),l.a.createElement(d.g,{size:"lg"}))}return n}},{key:"render",value:function(){var e,t=this.props.data&&this.props.data.length||0,n=Math.ceil(t/this.props.columnNum);return e=this.getRows(n,t),l.a.createElement("div",null,e)}}]),t}(a.Component);E.defaultProps={data:[],columnNum:4,itemStyle:{}};var x=E,k=Array.from(new Array(15)).map(function(e,t){return{icon:"http://img.zcool.cn/community/0193cc58ccefffa801219c7727a0cc.jpg@900w_1l_2o_100sh.jpg",text:"\u53e3\u7ea2".concat(t)}}),w=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{background:"rgba(250,245,247,1.0)"}},l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(d.h,{size:"l",style:{marginTop:"20px"}},l.a.createElement(x,{data:k,columnNum:3,itemStyle:{width:"auto",height:"auto"}}))))}}]),t}(a.Component),j=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{background:"#FBF5F7"}},l.a.createElement(d.h,null,l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("img",{style:{top:"50px",right:"10px",borderRadius:"50px",border:"none",width:"83px",height:"83px"},src:"http://b.hiphotos.baidu.com/image/pic/item/8435e5dde71190ef772420c0cc1b9d16fcfa60d5.jpg",alt:""}),l.a.createElement("h2",null,"\u5965\u5df4\u9a6c")),l.a.createElement(d.d,null,l.a.createElement(d.d.Item,{extra:l.a.createElement("span",{style:{color:"#333333",fontSize:"15px"}},"\u53bb\u5145\u503c"),thumb:"https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_balance.png",multipleLine:!0,arrow:"horizontal",onClick:function(){}},l.a.createElement("span",{style:{color:"#000000",fontSize:"12px"}},"\u6211\u7684\u4f59\u989d"),l.a.createElement(d.d.Item.Brief,{style:{color:"#F85668",fontSize:"15px"}},"\xa51999\u5143"))),l.a.createElement(d.d,{renderHeader:function(){return""}},l.a.createElement(d.d.Item,{arrow:"horizontal",thumb:"https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_my_prize.png",onClick:function(){}},l.a.createElement("span",{style:{color:"#000000",fontSize:"15px"}},"\u6211\u7684\u5956\u54c1")),l.a.createElement(d.d.Item,{arrow:"horizontal",thumb:"https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_customer_service.png",onClick:function(){}},l.a.createElement("span",{style:{color:"#000000",fontSize:"15px"}},"\u8054\u7cfb\u5ba2\u670d"))),l.a.createElement(d.d,{renderHeader:function(){return""}},l.a.createElement(d.d.Item,{arrow:"horizontal",thumb:"https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_address.png",onClick:function(){}},l.a.createElement("span",{style:{color:"#000000",fontSize:"15px"}},"\u6536\u8d27\u5730\u5740"),l.a.createElement(d.d.Item.Brief,null)),l.a.createElement(d.d.Item,{multipleLine:!0},l.a.createElement("span",{inline:!0,style:{color:"#343434",fontSize:"12px"}},"\u6536\u4ef6\u4eba\uff1a"),l.a.createElement("span",{inline:!0,style:{color:"#343434",fontSize:"12px"}},"\u592a\u5148\u751f"),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"#343434",fontSize:"12px"}},"\u8054\u7cfb\u65b9\u5f0f\uff1a"),l.a.createElement("span",{inline:!0,style:{color:"#343434",fontSize:"12px"}},"13100000000"),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"#343434",fontSize:"12px"}},"\u6536\u4ef6\u5730\u5740\uff1a"),l.a.createElement("span",{inline:!0,style:{color:"#343434",fontSize:"12px"}},"\u56db\u5ddd\u7701\u6210\u90fd\u5e02\u9ad8\u65b0\u533aXXXX"))))))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={selectedTab:"homeTab"},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},l.a.createElement(d.f,{unselectedTintColor:"#949494",tintColor:"#FAA0B8",barTintColor:"white"},l.a.createElement(d.f.Item,{icon:l.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_tab_home_nor.png) center center /  21px 21px no-repeat"}}),selectedIcon:l.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_tab_home_sel.png) center center /  21px 21px no-repeat"}}),title:"\u95ef\u5173",key:"home",selected:"homeTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"homeTab"})}},l.a.createElement(w,null)),l.a.createElement(d.f.Item,{icon:l.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_tab_my_nor.png) center center /  21px 21px no-repeat"}}),selectedIcon:l.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://liuyang890-10060662.cos.ap-shanghai.myqcloud.com/lipstick/icon_tab_my_sel.png) center center /  21px 21px no-repeat"}}),title:"\u6211\u7684",key:"my",selected:"myTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"myTab"})}},l.a.createElement(j,null))))}}]),t}(a.Component),z=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:v}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(181);i.a.render(l.a.createElement(O.a,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){e.exports=n(176)},94:function(e,t,n){},96:function(e,t,n){}},[[89,2,1]]]);
//# sourceMappingURL=main.3f33dbe3.chunk.js.map