var baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'

// obj = {
//     url:'',
//     success:function(){

//     }
// }


function request(params){
    wx.request({
        url:baseUrl + params.url,
        success:function(res){
            if(res.data.code == 0){
                params.success(res.data.data)
            }else{
                showError()
            }
        },
        fail:function(){
            showError()
        }
    })
}

function showError() {
    wx.showToast({
        title:'请求错误',
        icon:'none'
    })
}

module.exports = request  //导出