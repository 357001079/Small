// pages/components/book/book.js
//获取应用实例
import { IndexModel } from '../../../models/book'
let index = new IndexModel() // 导入对应的model

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //搜索
  search(e){
    wx.navigateTo({
      url: './book_search/search'
    })
  },
  // 跳转书单详情
  details(e) {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取热门书籍（概要）
    index.getDataList((res) => { // 调用获取到返回的数据res
      // console.log(res)
      this.setData({
        xinxi: res
      })
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