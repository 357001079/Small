
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
  },



  //获取当前一期的上一期
  up_last: function () {
    last.lastlist((res) => { // 调用获取到返回的数据res
      // console.log(res)
      this.setData({
        xinxi: res
      })
    })
  },
  //获取当前一期的下一期
  up_next: function () {
    next.nextlist((res) => { // 调用获取到返回的数据res
      // console.log(res)
      this.setData({
        xinxi: res
      })
    })
  },
  //点赞
  like: function () {
    index.likelist((res)=>{
      console.log(res)
    })

    // wx.request({
    //   url: "http://bl.7yue.pro/v1/like",
    //   method: "POST",
    //   appkey: '5ZbxAY1FmDNQP1T1',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
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
      console.log(res)
      // this.data.xinxi=res
      this.setData({
        xinxi: res
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