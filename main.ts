// console.log('hello world')
window.onload = function () {
    var Uname = document.getElementById('uname')
    var Upass = document.getElementById('upass')
    var oError = document.getElementById('error_box')
    var isError = true
    if (Uname.value.length > 20 || Uname.value.length < 6) {
        oError.innerHTML = '用户名请输入6-20位字符'
        isError = false
        return
    } else if ((Uname.value.charCodeAt(0) >= 48) && (Uname.value.charCodeAt(0) <= 57)) {
        Uname.innerHTML = "首字母必须为字母"

    }
}