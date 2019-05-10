// pages/components/like/like_detailed/detailed.js
import { IndexModel } from '../../../../models/like'
let index = new IndexModel() // 导入对应的model

//获取音乐
const innerAudioContext = wx.createInnerAudioContext();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName: true,
  },
  //播放
  audioPlay() {
    innerAudioContext.src = this.data.xinxi.url
    innerAudioContext.play();
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  //暂停
  audioStop() {
    innerAudioContext.pause();
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    index.likeDetail(res => {
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