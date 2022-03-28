<template>
  <div id="add">
    <h1>欢迎进入EamonPlanet！</h1>
    <el-select v-model="mybox" placeholder="请选择地区">
      <el-option v-for="item in list" key="label" :value="item.regionCode" :label="item.regionName">
        <!-- {{ item.regionName }}
        <div v-show="false" v-text="item.regionCode"></div> -->
      </el-option>
    </el-select>
    <br>
    <!-- <span>您选择的地区为：{{ mybox }}</span> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mybox: "",
      list: [],
    };
  },
  methods: {},
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
  },
};
</script>

<style scoped>
</style>

