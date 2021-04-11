//  资料填写，必填信息
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
        '<li><label>已选主体类型</label><span id="zhuti_qiye">企业</span><img id="zhuti_pic" src="./img/vector_bianji.png"></li>' +
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
    Information_to_fill_out.innerHTML = strBox;
    var required_information = document.getElementById('required_information');
    var oUl = required_information.getElementsByTagName('ul')[0];
    var zhuti_pic = document.getElementById('zhuti_pic');
    var zhuti_qiye = document.getElementById('zhuti_qiye');
    zhuti_qiye.innerHTML = wechartJson[0].zhuti_leixing; // 已经选择主体类型；
    zhuti_pic.onclick = function () {
        document.getElementById('authorized_application').style.display = 'block';
        document.getElementById('Information_to_fill_out').style.display = 'none';
    }
    var objArr = [{
            title: "主体信息",
            content: "请填写商家的营业执照置记证书、经营者法人的证件等信息",
            component: "SubjectInformation",
        },
        {
            title: "经营信息",
            content: "请填写商家的经营业务信息、售卖商品提供服务场景信息",
            component: "ManagementInformation",
        },
        {
            title: "结算规则",
            content: "请填写商家的结算费率规则、特殊资质等信息",
            component: "Settlementrules",
        },
        {
            title: "结算账户",
            content: "请填与商家提现收款的银行账户信息",
            component: "SettlementAccount ",
        },
        {
            title: "超级管理员",
            content: "请填与商家的超级管理员信息，超级管理员需在开户后进行签约，并接收日常重要管理信息和进行资金操作，请确定其为商户法定代表人或负责人",
            component: "SuperAdmin",
        }
    ]

    var arr_ziduan = [];
    for (var i = 0; i < objArr.length; i++) {
        var li = document.createElement('li');
        var divL = document.createElement('div');
        li.appendChild(divL);
        divL.setAttribute('class', 'left');
        var div = document.createElement('div');
        var i_dom = document.createElement('i');
        divL.appendChild(div);
        divL.appendChild(i_dom);
        // 判断左边的是图片还是数字
        renderLeft(div, i);
        if (i == objArr.length - 1) {
            i_dom.remove();
        }


        var divM = document.createElement('div');
        divM.setAttribute('class', 'middle');
        li.appendChild(divM);
        var h5 = document.createElement('h5');
        h5.innerHTML = objArr[i].title;
        divM.appendChild(h5);
        var p = document.createElement('p');
        divM.appendChild(p);
        p.innerHTML = objArr[i].content;


        var divR = document.createElement('div');
        divR.setAttribute('class', 'right');
        var b = document.createElement('b');
        li.appendChild(divR);
        divR.appendChild(b);
        // 判断是修改，还是去填写；还是没有；
        renderRight(b, arr_ziduan, i);
        oUl.appendChild(li);
    }


    var aB = oUl.getElementsByTagName('b');
    var aLi = oUl.children;


    for (var i = 0; i < aB.length; i++) {
        aB[i].index = i;
        aB[i].onclick = function (event, i) {
            subject_boolean = false;
            Information_to_fill_out.style.display = 'none';
            order_application.style.display = 'block';
            nextPro(objArr[this.index].component);
            pushHistory_one();
            document.getElementById('order_of_payment_and_registration').innerHTML = '';
            order_of_payment_and_registration();
        }
    }

    var preview_all_information = document.getElementById('preview_all_information');
    preview_all_information.onclick = function () {   // 点击预览
        if (wechartJson[0].leixing[subject_index].subject_information && wechartJson[0].leixing[subject_index].business_information && wechartJson[0].leixing[subject_index].settlement_rules && wechartJson[0].leixing[subject_index].settlement_account && wechartJson[0].leixing[subject_index].super_administrator) {
            subject_boolean = true; // 这个是预览
            application_list_one.innerHTML = '';
            new RecursiveTool(function (response) {
                if (response.generate_component != null && typeof response.generate_component == 'function') {
                    // if(response.caption != "主体类型"){
                    //  console.log('主体类型',response.caption)
                    response.generate_component();
                    // }
                }
            }).recursive(wechartJson);
            var authorized_application = document.getElementById('authorized_application');
            console.log(authorized_application);
            var Information_to_fill_out = document.getElementById('Information_to_fill_out');
            var order_application = document.getElementById('order_application');
            authorized_application.style.display = 'none';
            Information_to_fill_out.style.display = 'none';
            order_application.style.display = 'block';
            application_list_one.style.display = 'block';

            getClassName_dom(application_list_one, 'upload-tips');
            getClassName_dom(application_list_one, 'tips-info');
            getClassName_dom(application_list_one, 'ico-msg-s');
            getClassName_dom(application_list_one, 'input-group-addon');
            getClassName_dom(application_list_one, 'matation_settlement_rules_bottom');
            //   getClassName_dom(application_list_one,'ng-binding');
            getClassName_dom(application_list_one, 'ng-scope');
            console.log(getClassName_dom(application_list_one, 'ng-scope'), '元素是否存在');
            var divPrev = document.createElement('div');
            divPrev.className = 'matation_form_div_prev';
            divPrev.setAttribute('id', 'matation_form_div_pren_box');
            divPrev.innerHTML += prev_next();
            application_list_one.appendChild(divPrev);
            var li = divPrev.getElementsByTagName('li');
            li[0].onclick = function () {
                subject_boolean = false;
                SuperAdmin();
            }
            li[2].onclick = function () {
                subject_boolean = false;
                // ajax 请求 ;
                console.log('向后台发起请求')
            }



            //  console.log(wechartJson[2].subobject[1].subobject[0]);  form-group
            var form_group = getClassName_dom_time(application_list_one, 'form-group');
            console.log(form_group);
            for (var i = 0; i < form_group.length; i++) {

                form_group[i].style.width = '100px';
            }
        }
    }


}


// 判断左边的是图片还是数字
function renderLeft(div, i) {

    if (wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_ENTERPRISE' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INSTITUTIONS' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INDIVIDUAL' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_OTHERS') {
        if (wechartJson[0].leixing[subject_index].subject_information && i == 0) {
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].subject_information == false && i == 0) {
            div.innerHTML = i + 1;
        }

        if (wechartJson[0].leixing[subject_index].business_information && i == 1) {
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].business_information == false && i == 1) {
            console.log(subject_index, i + 1)
            div.innerHTML = i + 1;
        }

        if (wechartJson[0].leixing[subject_index].settlement_rules && i == 2) {
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_rules == false && i == 2) {
            div.innerHTML = i + 1;
        }

        if (wechartJson[0].leixing[subject_index].settlement_account && i == 3) {
            console.log('wechartJson[0].leixing[subject_index].settlement_account', wechartJson[0].leixing[subject_index].settlement_account)
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_account == false && i == 3) {
            div.innerHTML = i + 1;
        }

        if (wechartJson[0].leixing[subject_index].super_administrator && i == 4) {
            console.log('wechartJson[0].leixing[subject_index].settlement_account', wechartJson[0].leixing[subject_index].settlement_account)
            var img = document.createElement('img');
            img.src = "./img/vector_gou.png";
            div.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].super_administrator == false && i == 4) {
            div.innerHTML = i + 1;
        }
    }
}

//  判断是修改，还是去填写；还是没有；
function renderRight(b, arr, i) {
    if (wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_ENTERPRISE' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INSTITUTIONS' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INDIVIDUAL' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_OTHERS') {
        if (wechartJson[0].leixing[subject_index].subject_information && i == 0) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].subject_information == false && i == 0) {
            b.innerHTML = '去填写';
            arr.push(b);
        }

        if (wechartJson[0].leixing[subject_index].business_information && i == 1) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].business_information == false && i == 1) {
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                arr.push(b);
            }
        }

        if (wechartJson[0].leixing[subject_index].settlement_rules && i == 2) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].settlement_rules == false && i == 2) {
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                arr.push(b);
            }
        }

        if (wechartJson[0].leixing[subject_index].settlement_account && i == 3) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].settlement_account == false && i == 3) {
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                arr.push(b);
            }
        }

        if (wechartJson[0].leixing[subject_index].super_administrator && i == 4) {
            b.innerHTML = '修改';
        } else if (wechartJson[0].leixing[subject_index].super_administrator == false && i == 4) {
            if (arr.length > 0) {
                b.innerHTML = '去填写';
                b.style.display = 'none';
            } else {
                b.innerHTML = '去填写';
                arr.push(b);
            }
        }
    }
}

// 必填信息表
function order_of_payment_and_registration() {
    var order_of_payment_and_registration = document.getElementById('order_of_payment_and_registration');
    var order_application = document.getElementById('order_application');
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
    var ul = document.createElement('ul');
    var div = document.createElement('div');
    var img = document.createElement('img');
    var span = document.createElement('span');
    div.setAttribute('class', 'information_fill');
    img.src = './img/vector_go.png';
    span.innerHTML = '主体信息';
    div.appendChild(img);
    div.appendChild(span)
    order_of_payment_and_registration.appendChild(div);
    var str = "";

    for (var i = 0; i < objArr.length; i++) {

        var li = document.createElement('li');
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'left');
        li.appendChild(div1);
        var span_left = document.createElement('span');
        div1.appendChild(span_left)
        // 判断是打钩 还是 数字
        render_next(span_left, i);



        var div2 = document.createElement('div');
        div2.setAttribute('class', 'middle');
        li.appendChild(div2);
        var div2_middle = document.createElement('div');
        div2_middle.setAttribute('class', 'middle_solid');
        div2.appendChild(div2_middle);
        var h5 = document.createElement('h5');
        var h3 = document.createElement('h3');
        div2_middle.appendChild(h5);
        div2_middle.appendChild(h3);
        h5.innerHTML = objArr[i].title;

        var p = document.createElement('p');
        p.setAttribute('class', 'p1');
        div2.appendChild(p);
        p.innerHTML = objArr[i].content;




        ul.appendChild(li);

    }


    // ul.innerHTML = str;
    order_of_payment_and_registration.appendChild(ul);

    var lastli = objArr.length - 1;


    var aLi = ul.children[lastli];

    var oP = aLi.getElementsByTagName('p')[0];
    var oH3 = aLi.getElementsByTagName('h3')[0];
    oP.setAttribute('id', 'order_of_payment_and_registration_p_last');
    oP.style.width = '260px';
    oH3.remove();

    var p1 = document.getElementById('order_of_payment_and_registration_p1');


}

// 自己做的回退事件
function pushHistory_one() {
    window.history.pushState("", "", "");
}

function prev_next() {
    var str = '<ul class="list"><li>返回</li><li>保存草稿</li><li>保存并下一步</li></ul>';
    return str;
}

// 具体的组件到了哪一步了里面是数字还是，图片 打钩
function render_next(span_left, i) {
    console.log('leixing[subject_index]',wechartJson[0].leixing[subject_index])
    if (wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_ENTERPRISE' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INSTITUTIONS' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_INDIVIDUAL' || wechartJson[0].zhuti_leixing_ziduan == 'SUBJECT_TYPE_OTHERS') {
        // wechartJson[0].leixing[subject_index].subject_information
        if (wechartJson[0].leixing[subject_index].subject_information && i == 0) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].subject_information == false && i == 0) {
            span_left.innerHTML = i + 1;
        }

        if (wechartJson[0].leixing[subject_index].business_information && i == 1) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].business_information == false && i == 1) {
            span_left.innerHTML = i + 1;
        }


        if (wechartJson[0].leixing[subject_index].settlement_rules && i == 2) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_rules == false && i == 2) {
            span_left.innerHTML = i + 1;
        }

        if (wechartJson[0].leixing[subject_index].settlement_account && i == 3) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].settlement_account == false && i == 3) {
            span_left.innerHTML = i + 1;
        }
        if (wechartJson[0].leixing[subject_index].super_administrator && i == 4) {
            var img = document.createElement('img');
            img.src = './img/vector_gou.png';
            span_left.appendChild(img);
        } else if (wechartJson[0].leixing[subject_index].super_administrator == false && i == 4) {
            span_left.innerHTML = i + 1;
        }
    }
}





function getClassName_dom(parents, dom_class) {
    var dom = parents.getElementsByTagName('*');
    var dom_arr = [];
    for (var i = 0; i < dom.length; i++) {
        if (dom[i].className == dom_class) {
            dom_arr.push(dom[i]);
        }
    }
    for (var i = 0; i < dom_arr.length; i++) {
        dom_arr[i].style.display = 'none';
    }
}

function getClassName_dom_time(parents, dom_class) {
    var dom = parents.getElementsByTagName('*');
    var dom_arr = [];
    for (var i = 0; i < dom.length; i++) {
        if (dom[i].className == dom_class) {
            dom_arr.push(dom[i]);
        }
    }
    return dom_arr;
}