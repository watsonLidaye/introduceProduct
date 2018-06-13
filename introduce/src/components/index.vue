    <template>
      <div id="index">
        <div class="header"></div>
        <div class="inputSearch">
          <input type="number" name="code" placeholder="请输入学号" maxlength="14" autocomplete="off" v-model="inputValue" >
          <div class="inputLogo">
            <img src="../assets/05.png">
          </div>
        </div>
        <button :class="{'act':allow_click}" @click="nextOp()">下一步</button>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'index',
      data () {
        return {
         allow_click:false,
         inputValue:""
        }
      },
       watch:{
   inputValue:{
    handler(val,oldval){
     this.allow_click=val.length>12?true:false

    },
    deep:true
   }
  },
      methods: {
        nextOp(){
          this.allow_click&&console.log('点击了')
          this.inputValue=""
        },
      }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
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
    </style>
  }
  }
