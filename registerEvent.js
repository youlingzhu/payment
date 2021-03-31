// 
function Register(data, nextPro) {
    var validation_list = new Validation_Type(); // 这个是 registerVerification.js里面的对象；这个方法是验证信息的；
    var component_list = new Component_list(); // 这个是 registerComponent.js里面的对象；这个方法是生成组件的；

    new RecursiveTool(function (res) { // 这个是 merchantNumberRegistration.js里面的对象，该方法是循环遍历数据方法,
        for (let i in component_list) {
            if (i == res.component_type) {
                res.generate_component = function (componentNextPro) { // componentNextPro 传进来的函数参数
                    component_list[i](res, componentNextPro ? componentNextPro : null);
                }
            }
        }
        for (let x in validation_list) {
            if (x == res.verification_type) {
                res.verification_method = function (componentNextPro) {
                 //  console.log(validation_list[x](res, componentNextPro ? componentNextPro : null));
                    return validation_list[x](res, componentNextPro ? componentNextPro : null);
                }
            }
        }
    }).recursive(data);
    if (nextPro) {
        nextPro();
    }
    
}