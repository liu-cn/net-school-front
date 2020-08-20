import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state:{     //全局状态
        userInfo:{}
    },
    //修改数据操作等
    mutations:{
        SaveUserInfo(state,user){
            state.userInfo=user
        }
    },
    //获取数据等
    getters:{
        getUserInfo(state){
            return state.userInfo

        }
    }
})