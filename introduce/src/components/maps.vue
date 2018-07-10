<style scoped>
	.map_plate{
		width: 100%;
	}
</style>
<template>
	<div id="maps">
		<remote-js src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></remote-js>
		<el-amap class="map_plate" :style="{height:clintHeight+'px'}" :center="center" :zoom="zoom" vid="amapDemo">
			 <el-amap-info-window :position="center" :content="name" @click="gothere()"></el-amap-info-window>
		</el-amap>
	</div>
</template>
<script type="text/javascript">
	import VueAMap from 'vue-amap'
	import Vue from 'vue'
	Vue.use(VueAMap)
	export default{
		name : "maps",
		data(){
			return{
				name:"",
				clintHeight:"",
				zoom: 12,
          		center: [121.59996, 31.197646],
          		address: '',
			}
		},
		components:{
			'remote-js': {
			    render(createElement) {
			      return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
			    },
			    props: {
			      src: { type: String, required: true },
			    },
  			},
		},
		created(){
			//取值
			 this.$layer.loading('加载中...')
			console.log(window.lib)
			if(!this.$route.params.name){
				this.$router.push({
					name:"introduce"
				})
			}
			console.log(this.$route)
			this.name=this.$route.params.name
			this.center[1]=Number(this.$route.params.latitude)
			this.center[0]=Number(this.$route.params.longitude)
			console.log(this.center)
			//设置地图高度
			this.clintHeight=document.documentElement.clientHeight
			VueAMap.initAMapApiLoader({
			    // 高德的key
			    key: 'a994dd2fde697d7394b261c5ba27d2ab',
			    // 插件集合
			    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
			    // 高德 sdk 版本，默认为 1.4.4
			    v: '1.4.4'
			})
			this.$layer.close();
		},
		methods:{
			gothere(){
				console.log('点击了')
			}
		}
	}
</script>