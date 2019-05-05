// pages/components/book/book_details/details.js
import { IndexModel } from '../../../../models/book'
let index = new IndexModel() // 导入对应的model
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //搜索
  search(){
    wx.navigateTo({
      url: '../book_search/search'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取书籍详细信息
    index.details((res) => { // 调用获取到返回的数据res
      // console.log(res)
      this.setData({   
        xinxi: res
      })
    });
    //获取书籍短评
    index.essay((res)=>{
      // console.log(res)
      this.setData({
        essay:res.comments
      })
    })
    //获取书籍点赞情况
    index.booklike((res)=>{
      // console.log(res)
      this.setData({
        booklike:res
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