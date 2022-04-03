<template>
  <div id="add">
    <h1>欢迎进入EamonPlanet！</h1>
    <el-select v-model="mybox" placeholder="请选择地区">
      <el-option
        v-for="item in list"
        :value="item.regionCode"
        :label="item.regionName"
      >
        <!-- {{ item.regionName }}
        <div v-show="false" v-text="item.regionCode"></div> -->
      </el-option>
    </el-select>
    <br />
    <span>您选择地区的编码为：{{ mybox }}</span>
    <br />
    <span>您的uid为：{{ myuid }}</span>

    <br />
    <!-- 提交表单 -->
    <el-input type="text" name="nickName" v-model="input" ref="nickName" />
    <el-input
      type="submit"
      name="goSubmitBtn"
      value="提交"
      @click.native="goSubmitBtn"
    />

    <el-alert
      title="成功提示"
      type="success"
      v-show="success"
      description="注册成功！若未来的某一天是恶劣天气，您将提前一天收到小名的推送，提醒您带伞"
      show-icon
    >
    </el-alert>

    <el-alert
      title="错误提示"
      type="error"
      v-show="error"
      description="注册有误！"
      show-icon
    >
    </el-alert>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mybox: "",
      myuid: "",
      list: [],
      input: "",
      success: false,
      error: false,
    };
  },
  methods: {
    goSubmitBtn() {
      console.log("这里是goSubmitBtn：" + this.$route.query.uid);
      const param = { uid: this.$route.query.uid };
      this.$http
        .post("/localhost_api/practice/rtbau-user/saveUserMsg", {
          uid: this.$route.query.uid,
          nickName: this.input,
          regionCode: this.mybox,
        })
        .then( (res) => {
          console.log("【后端返回的结果是】" + res.data);
          if(res.data){
            this.success=true
          }else{
            this.error=true
          }
        });
    },
  },
  components: {},
  created() {
    this.$http
      .get("/localhost_api/practice/dict-region/getProvince")
      .then((res) => {
        this.list = res.data;
        // for (var i = 0; i < res.data.length; i++) {
        //   this.list.push(res.data[i].regionName);
        // }
      });
    let uid = this.$route.query.uid;
    this.myuid = uid;
  },
};
</script>

<style scoped>
</style>

