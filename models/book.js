import { HTTP } from '../utils/http'
// 通过extends继承父类（也可以实例化后调用）
// let book_id = ""
class IndexModel extends HTTP {
    //获取热门书籍（概要）
    getDataList(callBack) {
        //  封装后的请求调用
        this.request({
            url: 'book/hot_list',
            success: res => {
                callBack(res)
            }
        })
    };
    // 获取书籍详细信息
    details(callBack) {
       let id= wx.getStorageSync('index')
    //    console.log(id)
        this.request({
            url: '/book/' + id + '/detail',
            success: res => {
                callBack(res)
                // book_id=res.book_id
            }
        })
    };
    //获取书籍短评
    essay(callBack){
       let book_id= wx.getStorageSync('index')
        this.request({
            url:'book/'+book_id+'/short_comment',
            success:res=>{
                callBack(res)
            }
        })
    }
    //获取书籍点赞情况
    booklike(callBack){
        let book_id= wx.getStorageSync('index')
        this.request({
            url:'book/'+book_id+'/favor',
            success:res=>{
                callBack(res)
            }
        })
    }
    
    //书籍搜索
    bookSearch(val,callBack){
        this.request({
            url:'book/search'+'?'+val,
            success:res=>{
                callBack(res)
            }
        })
    }
    //获取热搜关键字
    popular(callBack){
        this.request({
            url:'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/hot',
            success:res=>{
                callBack(res)
            }
        })
    }
}

export { IndexModel }
