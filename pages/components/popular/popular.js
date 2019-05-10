
//获取应用实例
import { IndexModel } from '../../../models/popular'
let index = new IndexModel() // 导入对应的model
let last = new IndexModel() // 导入对应的model
let next = new IndexModel() // 导入对应的model
let like = new IndexModel() // 导入对应的model
//获取音乐
const innerAudioContext = wx.createInnerAudioContext();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName: true,
    give: 1,
    fav_nums:''
  },



  //获取当前一期的上一期
  up_last: function () {
    last.lastlist((res) => { // 调用获取到返回的数据res
      // console.log(res)
      this.setData({
        xinxi: res,
        give: res.like_status,
        fav_nums:res.fav_nums
      })
    })
  },
  //获取当前一期的下一期
  up_next: function () {
    next.nextlist((res) => { // 调用获取到返回的数据res
      // console.log(res)
      this.setData({
        xinxi: res,
        give: res.like_status,
        fav_nums:res.fav_nums
      })
    })
  },
  // //点赞
  fnZan: function (ev) {
    // console.log(ev)
    wx.setStorageSync("ev", { art_id: ev.currentTarget.dataset.id, type: ev.currentTarget.dataset.replyType })
    if (!this.data.give) {
      index.likeList((res) => {
        // console.log(res)
        if (!res.error_code) {
          this.setData({
            give: !this.data.give,
            fav_nums:this.data.fav_nums+1
          })
        }
      })
    } else {
      index.disLikeList((res) => {
        // console.log(res)
        if (!res.error_code) {
          this.setData({
            give: !this.data.give,
            fav_nums:this.data.fav_nums-1
          })
        }
      })
    }
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
    // 获取最新一期
    index.getDataList((res) => { // 调用获取到返回的数据res
      // console.log(res)
      this.setData({
        xinxi: res,
        give: res.like_status,
        fav_nums:res.fav_nums
      })
    });
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