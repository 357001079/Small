import { HTTP } from '../utils/http'
let index = ""
let art_id = ''
let type = ''
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
                art_id = res.id
                type = res.type
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
                art_id = res.id
                type = res.type
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
                art_id = res.id
                type = res.type
            }
        })
    };
    // 进行点赞
    likelist(callBack) {
        console.log(callBack)
        this.request({
            url: 'like',
            method: 'POST',
            data: {
                'art_id': art_id,
                'type': type
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded', // 默认值
                'appkey':'5ZbxAY1FmDNQP1T1'
            },
            success: res => {
                callBack(res)
            }
        })
    };
}

export { IndexModel }
