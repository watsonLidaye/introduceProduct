<style scoped>
  #introduce{
    width: 7.5rem;
    margin: 0 auto;
    font-size: .3rem;
  }
  .header{
    width: 100%;
    height: 4.04rem;
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
    <img class="header" src="../assets/10.jpg">
    <div class="introduce_text">
      <div class="textcontent">
      <div class="text_item" v-for="item in introduce.text">{{item}}</div>
      </div>
    </div>
    <div class="bottom_item">
      <div class="item_content">
        <div class="item_left">
          <img src="../assets/11.png" class="phone">
        </div>
        <div class="item_right">
          <p>16213323231</p>
          <img src="../assets/03.png" class="rigth_arrow">
        </div>
      </div>
    </div>
    <div class="bottom_item">
      <div class="item_content">
        <div class="item_left">
          <img src="../assets/12.png" class="call">
        </div>
        <div class="item_right">
          <p>0731-88374576</p>
          <img src="../assets/03.png" class="rigth_arrow">
        </div>
      </div>
    </div>
    <div class="bottom_item">
      <div class="item_content">
        <div class="item_left">
          <img src="../assets/13.png" class="address">
        </div>
        <div class="item_right">
          <p class="text_clamp1">湖南省张家界市永定区崇文路386</p>
          <img src="../assets/03.png" class="rigth_arrow">
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'introduce',
    data () {
      return {
            introduce:{
              text:[
                "学校教育教学设施先进完善。现有教学办公综合楼、教学楼、科学馆、教师宿舍、男女生公寓各1栋，灯光篮球场、400米标准塑胶运动场。校园内还修建有学校主题文化公园、校史馆，文化长廊。整个校园还安装了音乐铃声系统、监控系统，开通了校园局域网，有3间多媒体教室、2个电脑室，160台教学电脑，安装了远程教育技术装备，配备了3个“电子白板”，教室按省颁A类标准配置，配置了理化生实验仪器。此外，学校还拥有湖南省十大校办农厂（场）之一的生物园30亩作为学生的实验基地。并办有养殖基地，每年为教师在传统节日提供充足的肉类、水产、水果等丰富物资。学校房屋总资产达2000多万元，教学设备仪器资产达1000多万元。",
                "学校十分注重教学研究，积极推动教师开展课题研究，形成科科有课题，人人有任务的格局。",
                "学校根植于70年办学历史的张家界市一中校园内，校园文化底蕴十分深厚，文化建设成效显著。每年一届的体育节、艺术节、科技节开展得红红火火。教室文化、墙壁文化、寝室文化、草地文化、建筑文化、雕塑文化、活动文化、“弯腰工程”等特色鲜明，尤其是心海导航辩论赛更是魅力十足。",
                "学校师资力量雄厚，共有94名教职工，学历全部本科以上，其中22人获中教高级职称，45人获中教一级职称，3人为区名优教师，1人为市名优教师，120多人次获省、市、区各种奖励，1人获全国优秀教师、全国中小学师德标兵称号。学校共有教学学科带头人17人，骨干教师22人。",
                "学校注重教师的继续教育与学习，教师普通话水平全部达标，计算机应用水平全部达到高级应用水平。",
                "学校现有29个教学班，在籍学生达1845人。",
              ],

            }
    }
  }
  }
</script>


