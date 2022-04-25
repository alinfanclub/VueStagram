<template> 
  <div>
      <div v-if="Step == 0">
        <Post :PostData ="PostData[i]" v-for="(post, i) in PostData" :key="i" ></Post>
      </div>

      <!-- 필터선택페이지 -->
    <div v-if="Step == 1">
        <div :class="ClickedFilter"  class="upload-image" :style="`background-image:url(${Image})`"></div>
        <div class="filters">
            <FilterBox :Image ="Image"  v-for="(F, i) in Filter" :key="i" :F="F">
                {{F}}
            </FilterBox>
        </div>
    </div>

<!-- 글작성페이지 -->
    <div v-if="Step == 2">
        <div :class="ClickedFilter"  class="upload-image" :style="`background-image:url(${Image})`"></div>
        <div class="write">
            <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
        </div>
    </div>
  </div>
</template>

<script>
import PostVue from './Post'
import FilterBox from "./FilterBox.vue"
import Filter from "../data/Filter.js"

export default {
    name: 'ContainerVue',
    components : {
        Post : PostVue,
        FilterBox : FilterBox,
    },
    props : {
        PostData : Array,
        Step: Number,
        Image : String,
        ClickedFilter : String,
    },
    data(){
        return {
            Filter : Filter,
        }
    }
}
</script>

<style>
 .post {
     border-bottom: 1px solid #ddd;
 }
 .upload-image{
width: 100%;
height: 450px;
background:#fff;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
display: flex;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: #fff;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
resize: none;
}
</style>