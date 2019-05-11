// miniprogram/pages/magazine/magazine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // homeData:{
    //   date:"十月七日",
    //   imgsrc:"images/avatar.png"
    // },
    // array:[1,2,3,4],
    // array1:[
    //   {
    //     id:'1'
    //   },
    //   {
    //     id:'2'
    //   }
    // ]
    aaa:false,
    listLike:{
      0:true,
      1:false,
      2:false,
      3:true,
      4:true,
      5:false,
      6:false,
      7:true
    }

  },


//传值
  likeTap:function(e){
//   console.log(e);
    var index = e.currentTarget.dataset.likeindex;
//    console.log(index);
    var listLike = this.data.listLike;
    var isLike = listLike[index];
    listLike[index] = !isLike;//改变listLike的值 
//    console.log(listLike);
    this.setData({//将新的listLike赋给listLike
      listLike:listLike
    })
//    console.log(listLike);
    wx.setStorageSync('listLike',listLike);
//    console.log(listLike);
  },


  more:function(e){
    console.log(e);
//currentTarget:事件绑定的当前组件
//target:触发事件的原组件
    var type = e.currentTarget.dataset.articletype;
    wx.showActionSheet({//显示操作菜单
          itemList:['内容过期了','内容和'+ type +'不想关','不再显示来自'+ type +'的内容'],
          //itemColor:"#f40",
          success:function(res){
            console.log(res.tapIndex);
          }
        })
  },


  // parent:function(e){
  //   console.log('parent',e)
  // },
  // child:function(e){
  //   console.log('child',e)
  // },


   //  wx.showModal({
  //    title:"模态框",
  //    content:"内容",
  //    showCancel:false
  //  })

  // wx.showToast({
  //   title:"消息提示框"
  // })
  
    // wx.showLoading({//显示 loading 提示框.需主动调用 wx.hideLoading 才能关闭提示框
    //   title:"加载中..."
    // })

    // setTimeout(function(){
    //   wx.hideLoading()
    // },1000)

    // wx.setStorage({//设置缓存
    //   key:'name',
    //   data:'wxh'
    // })

    // wx.setStorage({
    //   key:'age',
    //   data:'18'
    // })

    // wx.getStorage({//从本地缓存中异步获取指定 key 的内容
    //   key:'name',
    //   success:function(res){
    //      console.log(res.data)
    //   }
    // })

    // wx.removeStorage({//从本地缓存中移除指定 key
    //     key:'name'
    // })

    // wx.clearStorage({//清理本地数据缓存

    // })

   // wx.setStorageSync('name','wxh')//同步设置缓存


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getHomeData()
   this.getLikeData()
  },

  onArtocleType:function(e){
    var typeId = e.currentTarget.dataset.articletypeid;
//    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url:'/pages/type/type?typeId='+ typeId
    })
  },
  

  getHomeData:function (){
    var that = this;
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

  getLikeData:function(){
    var listLikeStorage = wx.getStorageSync('listLike');
    // console.log(listLikeStorage)
    if(!listLikeStorage){
      listLikeStorage = {}
    }
    // console.log(listLikeStorage)
    this.setData({
      listLike:listLikeStorage
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




