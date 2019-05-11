// miniprogram/pages/type/type.js
var request = require('../../utils/request.js');//必须写相对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleInfo:{},
    articleList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
//      console.log(options)
      var that = this;
      var typeId = options.typeId;
      this.getData(typeId)
      
    console.log(wx)
    wx.request({
      url:"https://www.easy-mock.com/mock/5c2cb3b28d1b36437710d716/magazine/home",
      success:function(res){
    // console.log(res.data);
        that.setData({
          recomend:res.data.recomend,
          markType:res.data.markType,
          articleList:res.data.articleList
        })
      }
    })
    
    
  },

  getData:function(typeId){
    var that = this;
     request({
        url:'/getRecommendInfo/'+ typeId,
        success:function(res){
//          console.log(res)
            that.setData({
                titleInfo:res
            })
        }
      })

     request({
        url:'/getMarkTypeList/'+ typeId,
        success:function(res){
//          console.log(res)
            that.setData({
              articleList:res
            })
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