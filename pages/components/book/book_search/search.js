// pages/components/book/book_search/search.js
import { IndexModel } from '../../../../models/book'
let index = new IndexModel() // 导入对应的model
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  value: function (e) {
    var val = e.detail.value;
    this.setData({
      value: val
    });
    //书籍搜索
    index.bookSearch(this.data.value, res => {
      console.log(res)
    })
  },
  //取消
  cancel() {
    wx.redirectTo({
      url: '/book/book'
    })
    // wx:wx.navigateTo({
    //   url: 'book/book'
    // })
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
      success:res=>{
        this.setData({
          popular:res.data.data.hot
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