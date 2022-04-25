import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 0,
      likeClicked: false,
      more :'',
    }
  },

  mutations : {
      ChangeName(state){
          if(state.name == 'kim'){
            state.name = 'park'
          } else{
            state.name = 'kim'
          }
      },
      UpAge(state){
          state.age++
      },
      UpLikes(state){
          if(state.likeClicked == false){
              state.likes++;
              state.likeClicked = true;
          } else {
              state.likes--;
              state.likeClicked = false;
          }
      },
      setMore(state, data){
        state.more = data
    }
  },
  actions : {
    getData(context){
        axios.get('https://codingapple1.github.io/vue/more0.json').then((a) => {
            context.commit('setMore', a.data)
        })
    }
  }
})

export default store