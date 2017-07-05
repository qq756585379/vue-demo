/**
 * Created by luosa on 2017/5/23.
 */

import * as types from './types'

export default {
    increment: ({commit}) => {
        commit(types.INCREMENT);
    },
    decrement: ({commit}) => {
        commit(types.DECREMENT);
    },
    clickOdd: ({commit, state}) => {
        if (state.mutations.count % 2 == 0) {
            commit(types.INCREMENT);
        }
    },
    clickAsync: ({commit}) => {
        // Promise  es6里面的
        new Promise((resolve) => {
            setTimeout(function() {
                commit(types.INCREMENT);
            }, 1000);
        })
    },
    /*头部信息*/
    SHOW_HEAD_SUCC: ({commit})=>{
        commit(types.HEAD_SHOW_SUCCESS);
    },
    SHOW_HEAD_FAIL: ({commit})=>{
        commit(types.HEAD_SHOW_FAIL);
    },
    /*loading*/
    hideLoading: ({commit})=>{
        commit(types.HIDE_LOADING)
    },
    showLoading: ({commit})=>{
        commit(types.SHOW_LOADING)
    },
    /*底部条*/
    hideFooter: ({commit})=>{
        commit(types.FOOTER_HIDE);
    },
    showFooter: ({commit})=>{
        commit(types.FOOTER_SHOW)
    }
}