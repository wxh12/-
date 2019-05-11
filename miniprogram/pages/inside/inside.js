// miniprogram/pages/inside/inside.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  ceshi:function(){
    console.log(111);
  },

  parentTap:function(){
    console.log("parent");
  },

  childTap:function(){
    console.log("child");
  },

  jump:function(){
  //  console.log(123);
    // wx.redirectTo({//页面跳转 跳不回去
    //   url:'../index/index'
    // })
    // wx.navigateTo({//页面跳转 可以用wx.navigateBack跳回去
    //     url:'../index/index'
    //   })

    wx.navigateTo({
      url:'/pages/index/index?a=10'
    })
  },



    // 生命周期函数执行顺序：load show ready



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onHide: function () {//页面跳转后（之前的页面还存在）时触发    wx.navigateTo
    console.log('hide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {//页面跳转后（之前的页面不存在）时触发   wx.redirectTo
    console.log('unload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {//下拉刷新时触发
    //app.json中配置enablePullDownRefresh:true

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {//可设置触发距离

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})