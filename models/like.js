import {HTTP} from '../utils/http';
class IndexModel extends HTTP {
    //获取喜欢书籍数量
    likeBook(callBack){
        this.request({
            url:'book/favor/count',
            success:res=>{
                callBack(res)
            }
        })
    }
    // 获取我喜欢的期刊
    likeJournal(callBack){
        this.request({
            url:'classic/favor',
            success: res => {
                callBack(res)
            }
        })
    }
}

export { IndexModel }