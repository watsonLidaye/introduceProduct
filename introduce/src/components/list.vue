<style scoped>
  #list{
    width: 7.5rem;
    margin: 0 auto;
    font-size: .3rem;
  }
  .bottom_item{
    width: 7.5rem;
    box-sizing: border-box;
    padding-left: .4rem
  }
  .bottom_main{
    width: 100%;
    height: 100%;
    border-bottom: .01rem solid #ede7e7;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .bottom_main p{
    line-height: .9rem;

  }
  .main_left{
    font-size: .26rem;
    color: #c3c3c3;
  }
  .main_right{
    font-size: .3rem;
    padding-right: .35rem
  }
  .empty_logo{
    width: 3.43rem;
    height: 2.75rem;
    margin-top: 3rem;
    margin-bottom: .3rem;
  }
</style>
<template>
  <div id="list">
    <div class=" bottom_item" v-if="detail&&detail.length">
        <div class="bottom_main"  v-for="item in detail">
          <p class="main_left">{{item.time}}</p>
          <p class="main_right">缴费金额{{item.cost}}元</p>
        </div>
    </div>
    <div v-else>
      <img class="empty_logo" src="../assets/07.png">
      <div>暂无缴费记录</div>
    </div>
  </div>

</template>
<script>
  import config from '../assets/js/api.js'
  export default {
    name: 'list',
    data () {
      return {
          detail:[],
        }
    },
  created(){
    this.$layer.loading('加载中...')
    let appId=config.appid
    let formData={}
    formData.studentCode = JSON.parse(this.$localStorage.get('info')).studentCode
    this.$http.post(config.url+config.api.list,{
      appId,
      formData
    },{}).then((response)=>{
          if(response.body.status=='success'){
            this.detail=response.body.data
             this.$layer.close();
            }
          }
    )
    },
    }
</script>


