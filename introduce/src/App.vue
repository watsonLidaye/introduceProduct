<template>
  <div id="app">
    <div  v-if="promises">
      <router-view/>
    </div>
    <div v-else>
      <div class="empty"></div>
      <div class="text">请在微信客户端或者手机浏览器上打开</div>
    </div>
  </div>
</template>

<script>
  import '@/assets/js/public.js'

  export default {
    name: 'App',
    data(){
      return{
        promises:false
      }
    },
    created(){
      if(document.documentElement.clientWidth>751){
       this.$layer.toast({
            icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
            content: '请在微信客户端或者手机浏览器上打开',
            time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
          });
     }else{
      this.promises=true
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.empty{
  width: 400px;
  height: 230px;
  background: url('assets/14.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 300px auto 0;
}
.text{
  width: 100%;
  text-align: center;
  font-size: 18px;
  line-height: 23px;
  margin-top: 26px;
  color: #aaa;
}
</style>
