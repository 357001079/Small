// pages/components/book/book_search/search.js
import { IndexModel } from '../../../../models/book'
let index = new IndexModel() // 导入对应的model
Page({

  /**
   * 页面的初始数据
   */
  data: {
    length: 0
  },
  //书籍搜索
  value: function (e) {
    var val = e.detail.value;
    if (val != '') {
      index.bookSearch(val, res => {
        // console.log(res)
        if (res.books.length != 0) {
          this.setData({
            bookSearch: res.books,
            length: 2,
            val: val
          })
        } else {
          this.setData({
            length: 1
          })
        }
      })
    } else {
      this.setData({
        length: 0
      })
    }
  },
  //搜索详情
  detail(e){
    // console.log(e.currentTarget.dataset.id)
    //本地存储
    wx.setStorage({
      key:"index",
      data:e.currentTarget.dataset.id
    })
    wx.navigateTo({
      url: '/pages/components/book/book_details/details'
    })
  },
  //取消
  cancel() {
    console.log(11)
    wx.switchTab({
      url: '../../book/book'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取热搜关键字
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/hot',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        this.setData({
          popular: res.data.data.hot
        })
        // console.log(this.data.popular)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})