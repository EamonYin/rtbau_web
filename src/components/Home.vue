<template>
  <div id="add">
    <h1>欢迎进入EamonPlanet！</h1>
    <select v-model="mybox">
      <option v-for="item in list" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default{
    name: "Home",
    data(){
        return{
            mybox:'',
            list:['北京','上海','深圳']
        }
    }
}
</script>

<style scoped>
</style>

