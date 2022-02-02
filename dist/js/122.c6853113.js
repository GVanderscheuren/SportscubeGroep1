"use strict";(self["webpackChunksportscube"]=self["webpackChunksportscube"]||[]).push([[122],{5122:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var l=n(3673),r=n(8880);const o=(0,l.Uk)(" Sportscube "),s={class:"flex flex-center"},a={class:"c-logoUsers"},i=(0,l._)("h1",{class:"c-welcome",style:{"font-size":"30px","margin-top":"-20px","text-align":"center"}}," Admin ",-1),u=(0,l._)("h4",{class:"c-logout",style:{"font-size":"20px",color:"#44c8f5","margin-left":"40px"}}," Log out ",-1);function c(e,t,n,c,p,d){const m=(0,l.up)("q-btn"),f=(0,l.up)("q-toolbar-title"),g=(0,l.up)("q-toolbar"),w=(0,l.up)("q-header"),h=(0,l.up)("q-icon"),k=(0,l.up)("EssentialLink"),x=(0,l.up)("q-list"),b=(0,l.up)("q-drawer"),_=(0,l.up)("router-view"),v=(0,l.up)("q-page-container"),y=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(y,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{elevated:"",style:{"background-color":"#44c8f5","padding-top":"10px","padding-bottom":"10px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,style:{"font-size":"20px"}},null,8,["onClick"]),(0,l.Wm)(f,{style:{"font-size":"30px"}},{default:(0,l.w5)((()=>[o])),_:1})])),_:1})])),_:1}),(0,l.Wm)(b,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l._)("div",a,[(0,l.Wm)(h,{name:"person",style:{"margin-top":"50px","font-size":"50px",height:"100px",width:"100px","border-radius":"50%",background:"whitesmoke"}}),i])]),(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.essentialLinks,(e=>((0,l.wg)(),(0,l.j4)(k,(0,l.dG)({key:e.title},e),null,16)))),128))])),_:1}),(0,l.Wm)(m,{onClick:(0,r.iM)(e.logOut,["prevent"]),style:{"margin-top":"400px","min-width":"299px"},flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"logout",style:{"font-size":"40px","margin-left":"-30px",color:"#44c8f5"}}),u])),_:1},8,["onClick"])])),_:1},8,["modelValue"]),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_)])),_:1})])),_:1})}var p=n(2323);function d(e,t,n,r,o,s){const a=(0,l.up)("q-icon"),i=(0,l.up)("q-item-section"),u=(0,l.up)("q-item-label"),c=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(c,{class:"c-menulinks","active-class":"activelink",clickable:"",exact:"",to:e.link},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(i,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(a,{name:e.icon,class:"","active-class":"",style:{"font-size":"40px","margin-bottom":"0px","margin-left":"20px"}},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{style:{"font-size":"20px","margin-top":"20px","margin-left":"20px","margin-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,p.zw)(e.title),1)])),_:1})])),_:1})])),_:1},8,["to"])}const m=(0,l.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}});var f=n(4260),g=n(3414),w=n(2035),h=n(4554),k=n(2350),x=n(7518),b=n.n(x);const _=(0,f.Z)(m,[["render",d]]),v=_;b()(m,"components",{QItem:g.Z,QItemSection:w.Z,QIcon:h.Z,QItemLabel:k.Z});var y=n(1959);const Z=[{title:"Group",icon:"groups",link:"/Group"},{title:"Users",icon:"recent_actors",link:"/GroupListUsers"}],L=(0,l.aZ)({name:"MainLayoutAdmin",components:{EssentialLink:v},computed:{currentUser(){return this.$store.state.auth.user},showAdminBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/")}},setup(){const e=(0,y.iH)(!1);return{essentialLinks:Z,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var q=n(3066),W=n(3812),Q=n(9570),U=n(4607),z=n(3747),D=n(6873),O=n(7011),C=n(2652);const E=(0,f.Z)(L,[["render",c]]),I=E;b()(L,"components",{QLayout:q.Z,QHeader:W.Z,QToolbar:Q.Z,QBtn:U.Z,QToolbarTitle:z.Z,QDrawer:D.Z,QIcon:h.Z,QList:O.Z,QPageContainer:C.Z})}}]);