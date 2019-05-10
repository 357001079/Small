import { HTTP } from '../utils/http'
let index = ""
// 通过extends继承父类（也可以实例化后调用）
class IndexModel extends HTTP {
    //获取最新一期
    getDataList(callBack) {
        this.request({
            url: 'classic/latest',
            success: res => {
                callBack(res)
                // console.log(callBack)
                index = res.index
            }
        })
    };
    //获取当前一期的上一期
    lastlist(nuu) {
        // console.log(index)
        this.request({
            url: 'classic/' + index + '/previous',
            success: res => {
                nuu(res)
                index = res.index
            }
        })
    };
    //获取当前一期的下一期
    nextlist(nuu) {
        // console.log(index)
        this.request({
            url: 'classic/' + index + '/next',
            success: res => {
                nuu(res)
                index = res.index
            }
        })
    };
    // 进行点赞
    likeList(callBack) {
        let ev =wx.getStorageSync('ev')
        // console.log(ev)
        this.request({
            url: 'like',
            method: 'POST',
            data:ev,
            success: res => {
                callBack(res)
            }
        })
    };
    //取消点赞
    disLikeList(callBack){
        let ev=wx.getStorageSync('ev');
        this.request({
            url:'like/cancel',
            method: 'POST',
            data:ev,
            success: res => {
                callBack(res)
            }
        })
    }
}

export { IndexModel }
