(self["webpackChunksportscube"]=self["webpackChunksportscube"]||[]).push([[945],{1945:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var s=a(3673),r=a(2323),o=a(8229),n=a.n(o);const i=(0,s._)("img",{alt:"Quasar logo",src:n(),style:{width:"300px",height:"300px",margin:"0 auto","margin-top":"0px"}},null,-1),l=(0,s._)("h1",{style:{"text-align":"center","font-size":"40px","margin-top":"-20px"}}," Scorebord Sportscube ",-1),g={style:{"margin-left":"50px","margin-right":"50px"}},d={style:{"margin-bottom":"30px"}},p=(0,s._)("label",{style:{"margin-right":"20px"},for:"Naam"},"Username",-1),m={style:{"margin-bottom":"30px"}},c=(0,s._)("label",{style:{"margin-right":"20px"},for:"Wachtwoord"},"Password",-1),h={style:{"text-align":"center","margin-top":"20px"}},u={class:"form-group"},x={key:0,class:"alert alert-danger",role:"alert"};function f(e,t,a,o,n,f){const b=(0,s.up)("Field"),w=(0,s.up)("ErrorMessage"),y=(0,s.up)("q-btn"),_=(0,s.up)("q-card"),v=(0,s.up)("Form"),W=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(W,{class:"flex flex-center",style:{"background-color":"#44c8f5"}},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{onSubmit:f.handleLogin,"validation-schema":n.schema},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{style:{width:"500px",height:"700px"}},{default:(0,s.w5)((()=>[i,l,(0,s._)("div",g,[(0,s._)("div",d,[p,(0,s.Wm)(b,{name:"Naam",type:"text",class:"form-control"}),(0,s.Wm)(w,{style:{"margin-left":"10px"},name:"Naam",class:"error-feedback"})]),(0,s._)("div",m,[c,(0,s.Wm)(b,{name:"Wachtwoord",type:"password",class:"form-control"}),(0,s.Wm)(w,{style:{"margin-left":"10px"},name:"Wachtwoord",class:"error-feedback"})]),(0,s._)("div",h,[(0,s.Wm)(y,{disabled:n.loading,loading:e.loadingAuth,ripple:{color:"white"},label:"Login",type:"submit",style:{width:"100%",height:"50px","font-size":"18px","margin-top":"30px"},color:"primary"},null,8,["disabled","loading"])]),(0,s._)("div",u,[n.message?((0,s.wg)(),(0,s.iD)("div",x,(0,r.zw)(n.message),1)):(0,s.kq)("",!0)])])])),_:1})])),_:1},8,["onSubmit","validation-schema"])])),_:1})}var b=a(8500),w=a(8233);const y={name:"Login",components:{Form:b.l0,Field:b.gN,ErrorMessage:b.Bc},data(){const e=w.Ry().shape({Naam:w.Z_().required("Username is required!"),Wachtwoord:w.Z_().required("Password is required!")});return{loading:!1,message:"",schema:e}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/Group")},methods:{handleLogin(e){this.loading=!0,this.$store.dispatch("auth/login",e).then((()=>{this.$router.push("/Group")}),(e=>{this.loading=!1,this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}}};var _=a(4260),v=a(4379),W=a(151),k=a(4607),q=a(7518),S=a.n(q);const Z=(0,_.Z)(y,[["render",f]]),L=Z;S()(y,"components",{QPage:v.Z,QCard:W.Z,QBtn:k.Z})},8229:(e,t,a)=>{e.exports=a.p+"img/Logo-howest-SPORT.ba781407.png"}}]);