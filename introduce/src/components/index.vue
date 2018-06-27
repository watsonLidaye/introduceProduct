<style scoped>
#index{
  width: 7.5rem;
  margin:0 auto;
  position: relative;
}
.header{
  width: 100%;
  height: 4.25rem;
  background: url('../assets/06.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: .9rem
}
.inputSearch{
  width: 6rem;
  height: .88rem;
  font-size: .28rem;
  box-sizing: border-box;
  margin: 0 auto .78rem;

  position: relative;
}
.inputSearch input{
 padding:0rem .88rem ;
 width:100%;
 height: 100%;
 line-height: .88rem;
 border-radius: .44rem;
 border: .01rem solid #ddd;
 box-sizing: border-box;
}
.inputSearch input:focus{
  outline: 0
}
.inputLogo{
  width: .88rem;
  height: .88rem;
  box-sizing:border-box;
  padding-top: .24rem;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
}
.inputLogo img{
  width:.4rem;
  height: .4rem;
}
button{
  width: 2.7rem;
  height: .88rem;
  display: block;
  margin: 0 auto;
  color: #fff;
  background:#dcdfe1;
  border:0;
  border-radius: .14rem;
  font-size: .3rem;
}
button:focus{
  outline: 0;
}
.act{
 background:#038adc;
}
.logo_bottom{
  width: 7.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding-bottom: .3rem;
}
.logo_bottom img{
  width: 1.85rem;
  height: .48rem;
}
.map_plate{
  height: 3rem;
}
</style>
<template>
  <div id="index" :style="{height:heights+'px'}">
    <div class="header"></div>
    <div class="inputSearch">
      <input type="number" name="code" placeholder="请输入缴费编号"  autocomplete="off" v-model="inputValue" >
      <div class="inputLogo">
        <img src="../assets/05.png">
      </div>
    </div>
    <button :class="{'act':allow_click}" @click="nextOp()">下一步</button>
    <div class="logo_bottom">
      <img src="http://e2862-wx-app.oss-cn-hangzhou.aliyuncs.com/storeCustomer/customer/default/module/logo.png">
    </div>
  </el-amap>
</div>


</template>

<script>
  import config from '../assets/js/api.js'
  export default {
    name: 'index',
    data () {
      return {
       allow_click:false,
       inputValue:"",
       heights:""
     }
   },
   watch:{
     inputValue:{
      handler(val,oldval){
       this.allow_click=val.length>=5?true:false
     },
     deep:true
   }
 },
created(){
  this.heights=document.documentElement.clientHeight
},
 methods: {
  nextOp(){
    this.$layer.loading('登陆中...')
    let appId =config.appid
    let formData={}
    formData.studentCode = this.inputValue
    if(this.allow_click){
      this.inputValue="",
      this.$http.post(config.url+config.api.index,{
        appId,
        formData
      },{}).then((response)=>{
        if(response.body.status=='success'){
          this.$layer.toast({
            icon: 'icon-check',
            content: '欢迎回来',
            time: 1000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            });
          let info = JSON.stringify(response.body.data)
          this.$localStorage.set('info',info )
          setTimeout(()=>{
            this.$router.push({
              name:"main_plate"
            })},1000)
        }else{
          this.$layer.open({
            title: [
            '温馨提示',
            'background-color: #038adc; color:#fff;'
            ]
            ,content: response.body.info
          });
        }
      },(response)=>{
        this.$layer.open({
          title: [
          '温馨提示',
          'background-color: #038adc; color:#fff;'
          ]
          ,content: response.body.info
        });
      });
    }
  },
}
}
</script>


