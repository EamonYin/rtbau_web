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
    };
  },
  methods: {
    goSubmitBtn() {
      console.log("这里是goSubmitBtn：" + this.$route.query.uid);
      const param = { uid: this.$route.query.uid };
      this.$http
        .post(
          '/localhost_api/practice/rtbau-user/saveUserMsg',
          {
            uid: this.$route.query.uid,
            nickName: this.input,
            regionCode: this.mybox,
          }
        )
        .then(function (res) {
          console.log("【结果是】" + res);
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

