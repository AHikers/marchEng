const app = getApp()
Page({
  tomap () {
    wx.navigateTo({
      url: '../camera/camera'
    })
  },
  // async getImgData() {
  //   const count = app.nodeApiCall({path:'/api/getText',method:'POST', data:{action: 'inc'}})
  //   console.log('count:', count)
  // },
  onShareAppMessage () {
    return {
      title: '快来使用LBS定位小工具',
      imageUrl: '../../asset/logo.png'
    }
  }
  
})
