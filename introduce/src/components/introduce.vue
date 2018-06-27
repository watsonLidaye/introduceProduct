<style scoped>
  #introduce{
    width: 7.5rem;
    margin: 0 auto;
    font-size: .3rem;
  }
  .header{
    width: 100%;
    height: 4.04rem;
    background:#ddd;
  }
  .introduce_text{
    width: 100%;
    box-sizing: border-box;
  }
  .introduce_text:after{
    content: "";
    display: block;
    width: 100%;
    height: .2rem;
    background: #f2f3f8;
  }
  .textcontent{
        margin: .3rem .3rem .6rem;
        text-align: left;
  }
  .text_item{
    padding: .1rem 0rem;
    font-size: .3rem;
    line-height: .4rem;
    color: #333;
    text-indent: .6rem;
  }
  .bottom_item{
    width: 100%;
    box-sizing: border-box;
    padding-left: .4rem;
  }
  .item_content{
    width: 100%;
    height: .88rem;
    border-bottom: .01rem solid #b3acac;
    display: flex;
    align-items:center;
  }
  .item_left{
    width: .7rem;
    height: 100%;
    box-sizing: border-box;
    padding-top: .2rem;
    text-align: left;
  }
  .phone{

    width: .3rem;
    height: .46rem;
  }
  .item_right{
    width: 6.3rem;
    height: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .rigth_arrow{
    width: .3rem;
    height: .15rem;
    transform: rotateZ(-90deg);
    margin-right: .3rem;
  }
  .call{
    width: .38rem;
    height: .44rem;
  }
  .address{
    width: .34rem;
    height: .46rem;
  }
  .text_clamp1{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
</style>
<template>
  <div id="introduce">
     <img class="header" :src="detail_info.topImage" onerror="this.style.display='none'">
    <div class="introduce_text">
      <div class="textcontent">
      <div class="text_item" v-for="item in detail_info.introduce">{{item.item}}</div>
      </div>
    </div>
    <div class="bottom_item" @click="_callPhone('tele')" v-if="detail_info.contact">
      <div class="item_content">
        <div class="item_left">
          <img src="../assets/11.png" class="phone">
        </div>
        <div class="item_right">
          <p>{{detail_info.contact.mobile}}</p>
          <img src="../assets/03.png" class="rigth_arrow">
        </div>
      </div>
    </div>
    <div class="bottom_item" @click="_callPhone('call')" v-if="detail_info.contact&&detail_info.contact.phone.length>0">
      <div class="item_content">
        <div class="item_left">
          <img src="../assets/12.png" class="call">
        </div>
        <div class="item_right">
          <p>{{detail_info.contact.phone}}</p>
          <img src="../assets/03.png" class="rigth_arrow">
        </div>
      </div>
    </div>
    <div class="bottom_item" v-if="detail_info.contact" @click="_toAdress()">
      <div class="item_content">
        <div class="item_left">
          <img src="../assets/13.png" class="address">
        </div>
        <div class="item_right">
          <p class="text_clamp1">{{detail_info.contact.location.name}}</p>
          <img src="../assets/03.png" class="rigth_arrow">
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import config from '../assets/js/api.js'
  export default {
    name: 'introduce',
    data () {
      return {
            detail_info:{},
      }
    },
  created(){
     this.$layer.loading('加载中...')
    let appId=config.appid
    this.$http.post(config.url+config.api.aboutUs,{
      appId
    },{}).then((response)=>{
          if(response.body.status=='success'){
            this.detail_info=response.body.data
             this.$layer.close();
            }
          }
    )
    },
    methods:{
      _callPhone(msg){
        let phone =msg=='call'?this.detail_info.contact.phone:this.detail_info.contact.mobile
        window.location.href = 'tel://'+phone
      },
      _toAdress(){
        console.log(this.detail_info.contact.location.name)
        this.$router.push({
              name:"maps",
              params:{
                name:this.detail_info.contact.location.name,
                longitude:this.detail_info.contact.location.longitude,
                latitude:this.detail_info.contact.location.latitude,
              }
            })
      }
    }
  }
</script>


