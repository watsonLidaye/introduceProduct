<style scoped="">
	.empty{
		width: 400px;
		height: 230px;
		background: url('../assets/14.png');
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
<template>
	<div id="empty">
		<div class="empty"></div>
		<div class="text">请在微信客户端或者手机浏览器上打开</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"empty",
		methods:{
			// nav(){
			// 	window.location.href='http://www.baidu.com'
			// }
		}
	}
</script>