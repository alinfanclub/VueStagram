<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="Step == 1" @click="Step++">Next</li>
      <li v-if="Step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <!-- <h4>안녕 {{$store.state.name}}</h4> -->

  <Container :ClickedFilter = "ClickedFilter" :PostData = "PostData" :Step="Step" :Image = "Image" @write="writen = $event" />

  <button v-if="Step == 0" @click="more" class="moreBtn">더보기</button>
  <!-- <div class="sample-box"></div> -->

  <div v-if="Step == 0" class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
 <!-- <div v-if="Tap == 0">내용0</div>
 <div v-if="Tap == 1">내용1</div>
 <div v-if="Tap == 2">내용2</div>
 <button @click=" Tap = 0">내용0</button>
 <button @click=" Tap = 1">내용1</button>
 <button @click="Tap = 2">내용2</button> -->

</template>

<script>
import Container from './components/Container'
import PostData from './data/PostData.js'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      PostData : PostData,
      moreContent: 0,
      Step:0,
      Image : '',
      // writen: '',
      ClickedFilter : '',

      // Tap : 0,
    }
  },
  components: {
    Container : Container,
  },
  methods : {
    more(){
      // axios.post('URL', {name: 'kim'}).then().catch((err) => )

      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((result) => {
        console.log(result.data);
        this.PostData.push(result.data);
        this.moreContent++;
      })  
    },
    upload(e){
      let File = e.target.files;
      console.log(File[0]);
      let url = URL.createObjectURL(File[0]);
      console.log(url);
      this.Image = url;
      this.Step++;
    },
    publish(){
      let myContent =   {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.Image,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.writen,
      filter: this.ClickedFilter,
    };
      this.PostData.unshift(myContent);
      this.Step = 0;
    }
  },
  mounted(){
    this.emitter.on('ClickedFilter', (a)=> {
     this.ClickedFilter = a
    })
  }
}
</script>

<style>
@import 'style.css';
</style>
