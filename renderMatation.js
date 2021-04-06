function required_information(nextPro) {
    var Information_to_fill_out = document.getElementById('Information_to_fill_out');
    var application_list_one = document.getElementById('application_list_one');
    var applicationParent = document.getElementById('applicationParent');
    var order_application = document.getElementById('order_application');
    // var nextPros = nextPro;
    var strBox = '<div id="information_fill" class="information_fill">' +
        '<img src="./img/vector_go.png"><span>资料填写</span>' +
        '</div>' +
        '<div class="content_top">' +
        '<div class="title">申请单信息</div>' +
        '<ul>' +
        '<li><label>已选主体类型</label><span>企业</span><img src="./img/vector_bianji.png"></li>' +
        '<li><label>创建时间</label><span>2021-03-08 17:06</span></li>' +
        '<li><label>省申请单编号</label><span>2021-03-08 17:06</span></li>' +
        '</ul>' +
        '</div>' +
        '<div id="required_information">' +
        '<h6>必填信息</h6>' +
        '<ul></ul>' +
        '</div>' +
        '<div id="optional_information">' +
        '<h6>选填信息</h6>' +
        '<div class="middle">' +
        '<h5>补充材料</h5>' +
        '<p>根据实际审核情况，额外要求商家提供指定的补充资料</p>' +
        '</div>' +
        '<div class="bottom">' +
        '<p id="preview_all_information">预览</p>' +
        '</div>' +
        '</div>';

    //  console.log(strBox)
    Information_to_fill_out.innerHTML = strBox;

    var required_information = document.getElementById('required_information');
    var oUl = required_information.getElementsByTagName('ul')[0];


    var objArr = [{
            title: "主体信息",
            content: "请填与商家的营业执照置记证书、经营者法人的证件等信息",
            component:"SubjectInformation",
        },
        {
            title: "经营信息",
            content: "请填写商家的经营业务信息、售卖商品提供服务场景信息",
            component:"ManagementInformation",
        },
        {
            title: "结算规则",
            content: "请填写商家的结算费率规则、特殊资质等信息",
            component:"Settlementrules",
        },
        {
            title: "结算账户",
            content: "请填与商家提现收款的银行账户信息",
            component:"SettlementAccount ",
        },
        {
            title: "超级管理员",
            content: "请填与商家的超级管理员信息，超级管理员需在开户后进行签约，并接收日常重要管理信息和进行资金操作，请确定其为商户法定代表人或负责人",
            component:"SuperAdmin",
        }
    ]
    var str = "";
    for (var i = 0; i < objArr.length; i++) {
        str += '<li>' +
            '<div class="left">' +
            '<span>' +
            '<img src="./img/vector_gou.png">' +
            '</span>' +
            '<i></i>' +
            '</div>' +
            '<div class="middle">' +
            '<h5>' + objArr[i].title + '</h5>' +
            '<p>' + objArr[i].content + '</p>' +
            '</div>' +
            '<div class="right">' +
            '<b>修改</b>' +
            '</div>' +
            '</li>';
    }


    oUl.innerHTML = str;

    var aB = oUl.getElementsByTagName('b');
    var aLi = oUl.children;
    
    order_of_payment_and_registration();
    for (var i = 0; i < aB.length; i++) {
        aB[i].index = i;
        aB[i].onclick = function (event,i) {
            Information_to_fill_out.style.display = 'none';
            order_application.style.display = 'block';
            nextPro(objArr[this.index].component);
            pushHistory_one();
        }

        
    }

    var preview_all_information=document.getElementById('preview_all_information');
    preview_all_information.onclick=function(){
        subject_boolean=true;   // 这个是预览
        application_list_one.innerHTML='';
        new RecursiveTool(function(response){
            if(response.generate_component!=null&&typeof response.generate_component == 'function') {
               if(response.caption != "主体类型"){
                 response.generate_component();
               }
            }
        }).recursive(wechartJson);
        var authorized_application=document.getElementById('authorized_application');
        console.log(authorized_application);
        var Information_to_fill_out=document.getElementById('Information_to_fill_out');
        var order_application=document.getElementById('order_application');
        authorized_application.style.display='none';
        Information_to_fill_out.style.display='none';
        order_application.style.display='block';
        application_list_one.style.display='block';
       
        getClassName_dom(application_list_one,'upload-tips');
        getClassName_dom(application_list_one,'tips-info');
        getClassName_dom(application_list_one,'ico-msg-s');
        getClassName_dom(application_list_one,'input-group-addon');
        getClassName_dom(application_list_one,'matation_settlement_rules_bottom');
       
        var divPrev=document.createElement('div');
        divPrev.className='matation_form_div_prev';
        divPrev.setAttribute('id','matation_form_div_pren_box');
        divPrev.innerHTML+=prev_next();
        application_list_one.appendChild(divPrev);
         var li=divPrev.getElementsByTagName('li');
         li[0].onclick=function(){
            subject_boolean=false; 
            SuperAdmin();
         }
         li[2].onclick=function(){
             // ajax 请求 ;
             console.log('向后台发起请求')
         }

       //  console.log(wechartJson[2].subobject[1].subobject[0]);
         
    }


}

function order_of_payment_and_registration() {
    var order_of_payment_and_registration = document.getElementById('order_of_payment_and_registration');
    var order_application=document.getElementById('order_application');
  //  var oUl = order_of_payment_and_registration.getElementsByTagName('ul')[0];
    var objArr = [{
            title: "主体信息",
            content: "请填与商家的营业执照置记证书、经营者法人的证件等信息",
        },
        {
            title: "经营信息",
            content: "请填写商家的经营业务信息、售卖商品提供服务场景信息",
        },
        {
            title: "结算规则",
            content: "请填写商家的结算费率规则、特殊资质等信息",
        },
        {
            title: "结算账户",
            content: "请填写商家提现收款的银行账户信息",
        },
        {
            title: "超级管理员",
            content: "请填写商家的超级管理员信息，超级管理员需在开户后进行签约，并接收日常重要管理信息和进行资金操作，请确定其为商户法定代表人或负责人",
        }
    ];

 //   order_of_payment_and_registration.innerHTML += '<div class="information_fill"><img src="./img/vector_go.png"><span>主体信息</span></div>';
    var ul=document.createElement('ul');
    var div = document.createElement('div');
    var img = document.createElement('img');
    var span = document.createElement('span');
    div.setAttribute('class','information_fill');
    img.src='./img/vector_go.png';
    span.innerHTML = '主体信息';
    div.appendChild(img);
    div.appendChild(span)
    order_of_payment_and_registration.appendChild(div);
    var str = "";
    for (var i = 0; i < objArr.length; i++) {
        str += '<li>' +
            '<div class="left">' +
            '<span>' +
            '<img src="./img/vector_gou.png">' +
            '</span>' +
            '</div>' +
            '<div class="middle">' +
            '<div class="middle_solid">' +
            '<h5>' + objArr[i].title + '</h5>' +
            '<h3></h3>' +
            '</div>' +
            '<p class="p1">' + objArr[i].content + '</p>' +
            '</div>' +
            '</li>'
    }


    ul.innerHTML = str;
    order_of_payment_and_registration.appendChild(ul);

    var lastli = objArr.length - 1;


    var aLi = ul.children[lastli];

    var oP = aLi.getElementsByTagName('p')[0];
    var oH3 = aLi.getElementsByTagName('h3')[0];
    oP.setAttribute('id', 'order_of_payment_and_registration_p_last');
    oP.style.width = '260px';
    oH3.remove();

    var p1 = document.getElementById('order_of_payment_and_registration_p1');
  //  order_application.style.display='none';
    

}

 // 自己做的回退事件
 function pushHistory_one() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#two");
}

function prev_next(){
    var str='<ul class="list"><li>返回</li><li>保存草稿</li><li>保存并下一步</li></ul>';
    return str;
}

// 
function getClassName_dom(parents,dom_class){
    var dom=parents.getElementsByTagName('*');
    var dom_arr=[];
    for(var i=0;i<dom.length;i++){
        if(dom[i].className==dom_class){
            dom_arr.push(dom[i]);
        }
    }
    for(var i=0;i<dom_arr.length;i++){
        dom_arr[i].style.display='none';
    }
}