//index.js
const app = getApp()

Page({
  data: {},
  onLoad: function () {},
  arrearsClick: function () {
    wx.navigateTo({
      url: '/pages/arrears/index'
    })
  },
  buildHomeClick:function(){
    wx.navigateTo({
      url: '/pages/buildHome/index'
    })
  }
})