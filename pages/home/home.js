import {
  getMultiData
} from "../../service/home.js"

// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: null,
    recommends: null,
    popular: 8,
    goods: {
      pop: {
        page: 30,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      },
    },
    currentSel: 0,
    backTop: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._getMultiData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  // 监听页面滚动
  onPageScroll(options) {
    let flag = options.scrollTop < 1000

    if(flag != this.data.backTop) {
      this.setData({
        backTop: options.scrollTop < 1000
      })
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    const newPage = this.data.goods.pop.page + 30

    this.setData({
      // 较复杂的数据结构
      "goods.pop.page": newPage
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 各种事件函数处理
  pageSwitch() {
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  switchScroll() {
    wx.navigateTo({
      url: '/pages/scroll/scroll',
      success: function() {}
    })
  },
  switchTab(e) {
    this.setData({
      currentSel: e.detail.index
    })
  },
  backTopE() {
    this.setData({
      backTop: true
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  // ----------网络请求---------
  // 获取轮播图和推荐数据
  _getMultiData() {
    getMultiData().then(res => {
      console.log(res)
      this.setData({
        banners: res.data.data.banner.list,
        recommends: res.data.data.recommend.list
      })
    })
  }
})