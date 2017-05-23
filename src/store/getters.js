/**
 * Created by luosa on 2017/5/23.
 */

export default {
    count: (state) => {
        return state.count;
    },
    getOdd: (state) => {
        return state.count % 2 == 0 ? '偶数' : '奇数'
    }
}