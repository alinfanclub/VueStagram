<template>
 
 <div class="boxs">
    <div @click="fire" :class="F" class="filter-item" :style="`background-image:url(${Image})`">
      <!-- <button>btn</button> -->
    </div>
    <div><slot></slot></div>
 </div>
  
</template>

<script>
export default {
    name: "FileterBox",
    props: {
        Image : String,
        F : String,
    },
    methods : {
        fire(){
            this.emitter.emit('ClickedFilter', this.F)
        }
    }
}
</script>

<style>
.boxs {
    text-align: center;
    margin-right: 10px;
}
    .filter-item {
  width: 100px;
  height: 100px;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>