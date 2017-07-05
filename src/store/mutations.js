/**
 * Created by luosa on 2017/5/23.
 */

import {
    INCREMENT,
    DECREMENT,
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    HIDE_LOADING,
    SHOW_LOADING,
    FOOTER_HIDE,
    FOOTER_SHOW
} from './types'

import getters from './getters'

const state = {
    count: 20,
    headShow:true,
    loading:false,
    footerShow:true
};

const mutations = {
    [INCREMENT](state) {
        state.count++;
    },
    [DECREMENT](state) {
        state.count--;
    },
    /*头部*/
    [HEAD_SHOW_SUCCESS](state){
        state.headShow=true;
    },
    [HEAD_SHOW_FAIL](state){
        state.headShow=false;
    },
    /*loading*/
    [HIDE_LOADING](state){
        state.loading=false;
    },
    [SHOW_LOADING](state){
        state.loading=true;
    },
    /*footer*/
    [FOOTER_HIDE](state){
        state.footerShow=false;
    },
    [FOOTER_SHOW](state){
        state.footerShow=true;
    }
};

export default {
    state,
    mutations,
    getters
}