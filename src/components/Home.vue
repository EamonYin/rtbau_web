<template>
  <div id="add">
    <h1>欢迎进入EamonPlanet！</h1>
    <select v-model="mybox">
      <option v-for="item in list" :value="item">{{ item }}</option>
    </select>
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
        for (var i = 0; i < res.data.length; i++) {
          this.list.push(res.data[i].regionName);
        }
      });
  },
};
</script>

<style scoped>
</style>

