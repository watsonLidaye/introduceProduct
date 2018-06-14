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
</style>
<template>
  <div id="main_plate">
    <router-link :to="{path:'/introduce'}" >
      <div class="headerImage"></div>
    </router-link>
    <!-- 学籍辅号 -->
    <div class=" bottom_item">
      <div class="bottom_main">
        <p class="main_left">学籍辅号:</p>
        <p class="main_right">2012312321312312</p>
      </div>
    </div>
     <!-- 姓名 -->
    <div class=" bottom_item">
      <div class="bottom_main">
        <p class="main_left">姓名:</p>
        <p class="main_right">李二狗</p>
      </div>
    </div>
    <!-- 班级 -->
    <div class=" bottom_item">
      <div class="bottom_main">
        <p class="main_left">班级:</p>
        <p class="main_right">高一</p>
      </div>
    </div>
    <!-- 统一学籍号 -->
    <div class=" bottom_item">
      <div class="bottom_main">
        <p class="main_left">统一学籍号:</p>
        <p class="main_right">483773728221811128</p>
      </div>
    </div>
     <!-- 手机号码 -->
    <div class=" bottom_item">
      <div class="bottom_main">
        <p class="main_left">手机号码:</p>
        <p class="main_right">15653675645</p>
      </div>
    </div>
     <!-- 应缴费用 -->
     <div class="pb200">
    <div @click="showDetail" class=" bottom_item">
      <div class="bottom_main">
        <p class="main_left">应缴费用:</p>
        <p class="main_right red_color">
          <span class="money">¥</span>
          <span class="cost">40000</span>
          <img src="../assets/03.png" class="rigth_arrow" :class="{'arrow_act':detail_info.show}"></img>
        </p>
      </div>
    </div>
    <!-- 详情信息 -->
      <div v-if="detail_info.show">
        <div v-for="item in detail_info.list" class="detail_info">
          <p class="detail_left">{{item.title}}</p>
          <p class="detail_right">¥{{item.cost}}</p>
        </div>
    </div>
    </div>
    <!-- 底部结算部分 -->
    <div class="bottom">
      <div class="bottom_Operation">
        <div class="pay">立即支付</div>
        <router-link :to="{path:'/list'}" class="pay goList">缴费记录</router-link>
      </div>
      <router-link :to="{path:'/introduce'}" class="bottom_logo">
        张家界国光实验中学
      </router-link>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'main_plate',
    data () {
      return {
          detail_info:{
            show:false,
            list:[
              {title:"伙食费用:",cost:'1000'},
              {title:"教辅费用:",cost:'3000'},
              {title:"作业费用:",cost:'3000'},
              {title:"课后服务费:",cost:'3000'},
              {title:"其他:",cost:'3000'},
            ]
          }
      }
    },
    methods:{
      showDetail(){
        this.detail_info.show=!this.detail_info.show
      }
    }
  }
</script>


