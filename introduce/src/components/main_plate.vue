<style scoped>
#main_plate{
  width: 7.5rem;
  margin: 0 auto;
}
.headerImage{
  width: 1.77rem;
  height: 1.77rem;
  margin:.4rem auto;
  background: url('../assets/02.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bottom_item{
  width: 7.5rem;
  box-sizing: border-box;
  height: 1rem;
  padding-left: .4rem
}
.bottom_main{
  width: 100%;
  height: 100%;
  border-bottom: .01rem solid #ede7e7;
  display: flex;
}
.bottom_main p{
  line-height: 1rem;

}
.main_left{
  width: 1.43rem;
  font-size: .26rem;
  text-align: right;
  color: #c3c3c3;
}
.main_right{
  flex: 1;
  text-align: left;
  font-size: .3rem;
  padding-left: .4rem;
}
.red_color{
  color: red;
  position: relative;
}
.money{
  font-size: .28rem;
}
.cost{
  font-size: .36rem;
}
.rigth_arrow{
  width: .3rem;
  height: .15rem;
  position: absolute;
  top: .425rem;
  right: .4rem;
  transition: all linear .1s;
}
.arrow_act{
  transform: rotateZ(180deg);
}
.detail_info{
  width: 100%;
  height: .75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .24rem;
  background:#eaf2f7;
}
.detail_left{
  width: 1.83rem;
  text-align:right;

}
.detail_right{
  padding-right:.4rem;
  color: red;
}
.bottom{
  width: 7.5rem;
  box-sizing: border-box;
  padding: .48rem .4rem 0rem .4rem;
  background:#fff;
  position: fixed;
  left: 0rem;
  bottom: 0rem;
  z-index: 10;
}
.bottom_Operation{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pay{
  width: 2.98rem;
  height: .98rem;
  border-radius: .14rem;
  background:#038adc;
  color: #fff;
  text-align: center;
  line-height: .98rem;
  font-size: .3rem;
  margin-right: .7rem;
}
.goList{
  margin: 0rem;
  background: #dadfe1
}
.bottom_logo{
  display: block;
  padding:1rem  0rem .7rem;
  font-size: .24rem;
  color: #d0d0d0;
}
.pb200{
  padding-bottom: 4rem;
}
.show_false{
  background: #dadfe1
}
</style>
<template>
  <div id="main_plate">
    <div v-if="empty">

    </div>
    <div v-else>
      <router-link :to="{path:'/introduce'}" >
        <div class="headerImage"></div>
      </router-link>
      <!-- 学籍辅号 -->
      <div class=" bottom_item">
        <div class="bottom_main">
          <p class="main_left">学籍辅号:</p>
          <p class="main_right">{{info.studentCode}}</p>
        </div>
      </div>
      <!-- 姓名 -->
      <div class=" bottom_item">
        <div class="bottom_main">
          <p class="main_left">姓名:</p>
          <p class="main_right">{{info.realName}}</p>
        </div>
      </div>
      <!-- 班级 -->
      <div class=" bottom_item">
        <div class="bottom_main">
          <p class="main_left">班级:</p>
          <p class="main_right">{{info.className}}</p>
        </div>
      </div>
      <!-- 统一学籍号 -->
      <div class=" bottom_item">
        <div class="bottom_main">
          <p class="main_left">统一学籍号:</p>
          <p class="main_right">{{info.studentUnionCode}}</p>
        </div>
      </div>
      <!-- 手机号码 -->
      <div class=" bottom_item" v-if="info.studentMobile.length>0">
        <div class="bottom_main">
          <p class="main_left">手机号码:</p>
          <p class="main_right">{{info.studentMobile}}</p>
        </div>
      </div>
      <!-- 应缴费用 -->
      <div class="pb200">
        <div @click="showDetail" class=" bottom_item">
          <div class="bottom_main">
            <p class="main_left">应缴费用:</p>
            <p class="main_right red_color">
              <span class="money">¥</span>
              <span class="cost">{{info.paidFee.total}}</span>
              <img src="../assets/03.png" class="rigth_arrow" :class="{'arrow_act':detail_info.show}" v-if="info.paidFee.total>0"></img>
            </p>
          </div>
        </div>
        <!-- 详情信息 -->
        <div v-if="detail_info.show">
          <div  class="detail_info">
            <p class="detail_left">伙食费用：</p>
            <p class="detail_right">¥{{info.paidFee.detail.foodFee}}</p>
          </div>
          <div  class="detail_info">
            <p class="detail_left">教辅费用：</p>
            <p class="detail_right">¥{{info.paidFee.detail.teachingMaterialsFee}}</p>
          </div>
          <div  class="detail_info">
            <p class="detail_left">作业本费：</p>
            <p class="detail_right">¥{{info.paidFee.detail.exerciseBookFee}}</p>
          </div>
          <div  class="detail_info">
            <p class="detail_left">客户服务费：</p>
            <p class="detail_right">¥{{info.paidFee.detail.schoolServiceFee}}</p>
          </div>
          <div  class="detail_info">
            <p class="detail_left">其他：</p>
            <p class="detail_right">¥{{info.paidFee.detail.otherFee}}</p>
          </div>
        </div>
      </div>
      <!-- 底部结算部分 -->
      <div class="bottom">
        <div class="bottom_Operation">
          <div class="pay" :class="{'show_false':info.paidFee.total==0}" @click="payment()">立即支付</div>
          <router-link :to="{path:'/list'}" class="pay goList">缴费记录</router-link>
        </div>
        <router-link :to="{path:'/introduce'}" class="bottom_logo">
          张家界国光实验中学
        </router-link>
      </div>
    </div>
  </div>

</template>
<script>
  import config from '../assets/js/api.js'
  export default {
    name: 'main_plate',
    data () {
      return {
        empty:false,
        info:{},
        detail_info:{
          show:false,
        }
      }
    },
    created(){
      if(this.$localStorage.get('info')==undefined){
        this.empty=true
        this.$layer.toast({
                icon: 'icon-warn', // 图标clssName 如果为空 toast位置位于下方,否则居中
                content: '请先登录',
                time: 1500 // 自动消失时间 toast类型默认消失时间为2000毫秒
              });
        setTimeout(()=>{
          this.$router.push({
            name:"index",
          })},1000)
      }else{
        this.info=JSON.parse(this.$localStorage.get('info'))
      }
    },
    methods:{
      showDetail(){
        if(this.info.paidFee.total>0){
          this.detail_info.show=!this.detail_info.show
        }
      },
      payment(){
        this.$layer.loading('支付中...')
        let formData={}
        let appId =config.appid
        formData.studentCode=this.info.studentCode
        formData.paymentFee=this.info.paidFee.total
        formData.paymentItem={}
        formData.paymentItem.foodFee=this.info.paidFee.detail.foodFee
        formData.paymentItem.teachingMaterialsFee=this.info.paidFee.detail.teachingMaterialsFee
        formData.paymentItem.exerciseBookFee=this.info.paidFee.detail.exerciseBookFee
        formData.paymentItem.schoolServiceFee=this.info.paidFee.detail.schoolServiceFee
        formData.paymentItem.otherFee=this.info.paidFee.detail.otherFee
        if(this.info.paidFee.total>0){
          this.$http.post(config.url+config.api.payment,{
            appId,
            formData
          },{}).then((response)=>{
            if(response.body.status=='success'){
              let info = JSON.parse(JSON.stringify(response.body.data))
              console.log(info.payurl)
              window.location.href=info.payurl
            }else{
              console.log(response.body.info)
             this.$layer.toast({
              icon: 'icon-check',
              content: '支付失败,请重新支付',
            time: 1000 // 自动消失时间 toast类型默认消失时间为2000毫秒
          });
           }
         },(response)=>{
           console.log(response.body)
           this.$layer.toast({
            icon: 'icon-check',
            content: '支付失败,请重新支付',
            time: 1000 // 自动消失时间 toast类型默认消失时间为2000毫秒
          });
         });
        }
      }
    }
  }
</script>


