function Component_list() {

    var application_list_one = document.getElementById('application_list_one');
    // 选择经营者类型
    this.subjectType = function (data, componentNextPro) {
        var arr = [{
                caption: '企业',
                title: "营业执照上的主体类型一般为有限公司、有限责任公<br />司",
                value: "SUBJECT_TYPE_ENTERPRISE"
            },
            {
                caption: '党政、机关及事业单位',
                title: "包括国内各级、各类政府机构、事业单位 等。如：公<br />安、党团、司法、交通、旅游 工商税务、市政、医疗、教育、学校等机构",
                value: "SUBJECT_TYPE_INSTITUTIONS"
            },
            {
                caption: '个体工商户',
                title: "营业执照上的主体类型一般为个体户、个体工商户、<br />个体经营",
                value: "SUBJECT_TYPE_INDIVIDUAL"
            },
            {
                caption: '其他组织',
                title: "不属于企业、政府事业单位的组织机构，如社会团<br />体、民办丰企业、基金会。要求机构 已か理组织机构<br />代码证",
                value: "SUBJECT_TYPE_OTHERS"
            }
        ]

        var div = document.createElement("div");
        div.setAttribute('id', 'authorized_application');
        div.className = 'authorized_application';
        var h3 = document.createElement('h3');
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'authorized_ul');
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            str += "<li><div class='title'>" + arr[i].caption + "</div><p>" + arr[i].title + "</p><button>选择</botton></li>"
        }
        var strTitle = "<p class='check_p_one'>微信特约商户支付授权申请</p><p class='check_p_two'>选择主体类型</p>"
        ul.innerHTML = str;
        div.innerHTML = strTitle;
        div.appendChild(ul);
        document.body.appendChild(div);
        var li = ul.getElementsByTagName('li');
        var aDiv = ul.getElementsByTagName("div");
        var applicationParent = document.getElementById('applicationParent');
        var Information_to_fill_out = document.getElementById('Information_to_fill_out');
        var order_application = document.getElementById('order_application');

        for (let i = 0; i < li.length; i++) {
            li[i].index = i;
            if (li[i].getElementsByTagName) {
                var btn = li[i].getElementsByTagName("button")[0];
                btn.addEventListener("click", function () {
                    var index = this.parentNode.index;
                    data.value = arr[index].value;
                    this.parentNode.parentNode.parentNode.style.display = 'none';
                    Information_to_fill_out.style.display = 'block';
                    order_application.style.display = 'none';
                    if (componentNextPro) {
                        componentNextPro(data.value, i);
                    }
                    pushHistory_one(); // 自己做的回退事件;
                })
            }
        }
    }


    // 营业执照照片
    this.photosOfBusinessLicense = function (data) {
        console.log(subject_type);
        console.log(subject_index);
        console.log(subject_boolean);
        var div_box = document.createElement('div');
        div_box.setAttribute('id', 'matation_business_pictrue_box');
        var div_box_dengji = document.createElement('div');
        div_box_dengji.setAttribute('id', 'matation_business_dengji_box');
        var div = document.createElement("div");
        div.className = 'form-item';
        div.setAttribute('id', 'form-item_jingyingxinxi');
        var str = "<div class='info-hd'><h2>主体信息</h2></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>营业执照</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>请上传营业执照，需年检章齐全，当年注册除外</p>" +
            "</div>" +
            "<div id='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden'  id='yingyezhizhao'>" +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' class='a-upload'>" +
            "<input type='file' name='' class='input_updata' id=''><span>上传</span>" +
            "</a>" +
            // "<a href='javascript:;' class='a-upload'  style='display:none'>" +
            // "<input type='file' name='' class='input_updata' id=''>重新上传" +
            // "</a>" +
            "<div class='upload-tips'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childer' class='application_list_one_ul_childer'>" +
            // "<li>" +
            // "<img src='' />" +
            // "<a href='javascript:;'  class='del'>删除</a>" +
            // "</li>" +
            "</ul>" +
            "<p class='text-error'>请填写营业执照照片</p>" +
            "<p class='text-error'>请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>"
        div.innerHTML = str;
        application_list_one.appendChild(div_box);
        application_list_one.appendChild(div_box_dengji);
        div_box.appendChild(div);
        this.publicImgUupData('yingyezhizhao', data);
        if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL' || subject_type == 'SUBJECT_TYPE_ENTERPRISE') {
            div_box.style.display = 'block';
        } else {
            div_box.style.display = 'none';
        }
        if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS') {
            div_box_dengji.style.display = 'block';
        } else {
            div_box_dengji.style.display = 'none';
        }
    }




    // 注册号 
    this.license_number = function (data) {
        this.input_box(data, function (data) {
            console.log(subject_type);
            var a = data.verification_method();
            var organization_code_certificate = document.getElementById('organization_code_certificate');
            if (a == "" && data.value.length == 15 && subject_type != 'SUBJECT_TYPE_INDIVIDUAL') {
                organization_code_certificate.style.display = "block";
                wechartJson[0].is_organization = true; // 组织机构显示
            } else {
                organization_code_certificate.style.display = "none";
                wechartJson[0].is_organization = false;
            }
        })

    }

    // 登记证书 照片
    this.cert_copy = function (data) {
        var div = document.createElement("div");
        div.className = 'form-item';
        div.setAttribute('id', 'form-item_dengjixinxi');
        var str = "<div class='info-hd'><h2 class='ng-binding'>主体信息</h2></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>登记证书</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>请上传相关部门颁发的证书，如：事业单位法人证书、统一社会信用代码证书</p>" +
            "</div>" +
            "<div class='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden'  id='dengjizhengshu_matation'>" +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' class='a-upload'>" +
            "<input type='file' class='input_updata' name='' id=''><span>上传</span>" +
            "</a>" +
            // "<a href='javascript:;' class='a-upload'  style='display:none'>" +
            // "<input type='file' name='' class='input_updata' id=''>重新上传" +
            // "</a>" +
            "<div class='upload-tips'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul class='application_list_one_ul_childer'>" +
            // "<li style='display:none'>" +
            // "<img src='' />" +
            // "<a href='javascript:;'  class='del'>删除</a>" +
            // "</li>" +
            "</ul>" +
            "<p class='text-error' style='display:none'>请填写营业执照照片</p>" +
            "<p class='text-error' style='display:none'>请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>"
        div.innerHTML = str;
        var matation_business_dengji_box = document.getElementById('matation_business_dengji_box');
        matation_business_dengji_box.appendChild(div);
        this.publicImgUupData('dengjizhengshu_matation', data);
    }

    // 登记证书 类型

    this.cert_type = function (data) {
        var divs = document.createElement("div");
        divs.setAttribute('id', 'matation_form_cert_type');
        var matation_business_dengji_box = document.getElementById('matation_business_dengji_box');
        matation_business_dengji_box.appendChild(divs);

        var arr = [{
                title: '事业单位法人证书',
                type: 'CERTIFICATE_TYPE_2388'
            },
            {
                title: '统一社会信用代码证书',
                type: 'CERTIFICATE_TYPE_2389'
            },
            {
                title: '有偿服务许可证（军队医院适用）',
                type: 'CERTIFICATE_TYPE_2390'
            },
            {
                title: '医疗机构执业许可证（军队医院适用）',
                type: 'CERTIFICATE_TYPE_2391'
            },
            {
                title: '企业营业执照（挂靠企业的党组织适用）',
                type: 'CERTIFICATE_TYPE_2392'
            },
            {
                title: '组织机构代码证（政府机关适用）',
                type: 'CERTIFICATE_TYPE_2393'
            },
            {
                title: '社会团体法人登记证书',
                type: 'CERTIFICATE_TYPE_2394'
            },
            {
                title: '民办非企业单位登记证书',
                type: 'CERTIFICATE_TYPE_2395'
            },
            {
                title: '基金会法人登记证书',
                type: 'CERTIFICATE_TYPE_2396'
            },
            {
                title: '慈善组织公开募捐资格证书',
                type: 'CERTIFICATE_TYPE_2397'
            },
            {
                title: '农民专业合作社法人营业执照',
                type: 'CERTIFICATE_TYPE_2398'
            },
            {
                title: '宗教活动场所登记证',
                type: 'CERTIFICATE_TYPE_2399'
            },
            {
                title: '其他证书/批文/证明',
                type: 'CERTIFICATE_TYPE_2400'
            }
        ]

        this.cert_type_ul(data, arr, divs, function (index) {
            console.log(index);
            data.value = arr[index].type;
            data.data_value_type = arr[index].title;
            console.log(data.value);
            var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');
            common_xuanze_zhengji_span.firstChild.nodeValue = arr[index].title;
            var common_xuanze_zhengji_p_yuansu = document.getElementById('common_xuanze_zhengji_p_yuansu');
            common_xuanze_zhengji_p_yuansu.style.display = 'none';

        });

        var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');

        if (data.value) {
            common_xuanze_zhengji_span.firstChild.nodeValue = data.data_value_type;
        }

    }

    // 登记证书 下面的 ul 
    this.cert_type_ul = function (data, arr, divs, nextPro) {
        divs.innerHTML += this.xuanze_dengji();
        divs.innerHTML += this.cert_type_innnerHTML();
        var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');
        var common_zhengjian_leixing_type = document.getElementById('common_zhengjian_leixing_type');
        common_xuanze_zhengji_span.onOff = true;
        common_zhengjian_leixing_type.style.display = 'none';
        common_xuanze_zhengji_span.onclick = function () {
            if (this.onOff) {
                common_zhengjian_leixing_type.style.display = 'block';
            } else {
                common_zhengjian_leixing_type.style.display = 'none';
            }
            this.onOff = !this.onOff;
        }

        var zhengjia_type_list_leixing = document.getElementById('zhengjia_type_list_leixing');
        var a = zhengjia_type_list_leixing.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            a[i].onclick = function () {
                nextPro(i);
                common_xuanze_zhengji_span.onOff = true;
                common_zhengjian_leixing_type.style.display = 'none';
            }
        }

        var dengji_zhengshu_list_close = document.getElementById('dengji_zhengshu_list_close');
        dengji_zhengshu_list_close.onclick = function () {
            common_xuanze_zhengji_span.onOff = true;
            common_zhengjian_leixing_type.style.display = 'none';
        }


    }

    // 登记证书 证书号
    this.cert_number = function (data) {
        this.input_box_dengji(data, function (data) {
            var a = data.verification_method();
            var organization_code_certificate = document.getElementById('organization_code_certificate');
            if (a == "" && data.value.length == 15 && subject_type == 'SUBJECT_TYPE_INSTITUTIONS') {
                organization_code_certificate.style.display = "block";
                wechartJson[0].is_organization_dang = true; // 组织机构显示
            } else {
                organization_code_certificate.style.display = "none";
                wechartJson[0].is_organization_dang = false;
            }

            if (a == "" && data.value.length == 15 && subject_type == 'SUBJECT_TYPE_OTHERS') {
                organization_code_certificate.style.display = "block";
                wechartJson[0].is_organization_gongyi = true; // 组织机构显示
            } else {
                organization_code_certificate.style.display = "none";
                wechartJson[0].is_organization_gongyi = false;
            }


        })
    }

    // 是否是受益人证件开始的时间
    this.period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, "datetimepicker9", "matation_business_dengji_box", "证件有效期限", "text_errors_timesix");

    }


    // 是否是收益人证件结束的时间
    this.period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, 'datetimepicker10', "matation_business_dengji_box", "text_errors_timesix");
    }




    // 组织机构代码证
    this.organization_copy = function (data) {
        console.log(data, 203)
        var div = document.createElement('div');
        var div = document.createElement("div");
        div.setAttribute('class', 'form-item');
        div.setAttribute('id', 'organization_code_certificate');
        div.style.position = "relative";
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>组织机构代码证</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>由于你的营业执照未三证合一，请上传“组织机构代码证”</p>" +
            "</div>" +
            "<div id='application_phone_upData'></div>" +
            "</div>" +
            "</div>" +
            "<div style='width:100%;overflow:hidden' id='zuzhijigou_matation_form'>" +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' class='a-upload'>" +
            "<input type='file'  class='input_updata' name='' id=''><span>上传</span>" +
            "</a>" +
            // "<a href='javascript:;' class='a-upload' style='display:none'>" +
            // "<input type='file' name=''  class='input_updata' id=''>重新上传" +
            // "</a>" +
            "<div class='upload-tips'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childer'>" +
            // "<li>" +
            // "<img src='' />" +
            // "<a href='javascript:;'  class='del'>删除</a>" +
            // "</li>" +
            "</ul>" +
            "<p class='text-error'>请填写组织机构代码证照片</p>" +
            "<p class='text-error'>请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        application_list_one.appendChild(div);
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        console.log(subject_type)
        // wechartJson[0].is_organization_dang
        if (wechartJson[0].is_organization && subject_type == 'SUBJECT_TYPE_ENTERPRISE') {
            organization_code_certificate.style.display = 'block';
        } else {
            organization_code_certificate.style.display = 'none';
        }

        if (wechartJson[0].is_organization_dang && subject_type == 'SUBJECT_TYPE_INSTITUTIONS') {
            organization_code_certificate.style.display = 'block';
        } else {
            organization_code_certificate.style.display = 'none';
        }
        if (wechartJson[0].is_organization_gongyi && subject_type == 'SUBJECT_TYPE_OTHERS') {
            organization_code_certificate.style.display = 'block';
        } else {
            organization_code_certificate.style.display = 'none';
        }


        this.publicImgUupData('zuzhijigou_matation_form', data);

    }

    // 组织机构生成的方法--组织机构代码
    this.input_box_organization = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);


        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '30px';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
        }

        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                p.style.display = 'none';
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }

            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            p.style.display = 'none';
        }
    }

    // 组织机构有效期限开始时间
    this.org_period_begin = function (data, componentNextPro) {
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<label class='lable_lefts_time'>有效期限</label>" +
            "<div class='col-sm-6 col-sm_time'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id='datetimepicker1'>" +
            "<input type='text' id='datetimepicker1_input' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<i class='col-sm_time_i'>至</i>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker1').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')

        });
        var input = div.getElementsByTagName('input')[0];
        if (data.value) {
            input.value = data.value;
        }

        input.onblur = function () {
            var text_errors_timeone = document.getElementById('text_errors_timeone');
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            text_errors_timeone.style.display = 'none';
        }

    }

    // 组织机构有效期限结束时间
    this.org_period_end = function (data, componentNextPro) {
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<div class='col-sm-6'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id='datetimepicker2'>" +
            "<input type='text' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.appendChild(div);
        $('#datetimepicker2').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        var p = document.createElement('p');
        p.setAttribute('id', 'text_errors_timeone');
        p.className = "text-errors_timeone";
        organization_code_certificate.appendChild(p);
        var p = document.createElement('p');
        p.setAttribute('id', 'text_errors_timetwo');
        p.className = "text-errors_timetwo";
        organization_code_certificate.appendChild(p);
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            console.log(data);
            console.log(input.value)
            var a = data.verification_method();


            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }

            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            //   p.style.display = 'none';
            p.innerHTML = '';
        }
    }



    // 证件类型 身份证还是其他类型的通行证（港澳台护照）
    this.id_doc_type = function (data) {
        var div = document.createElement("div"); // 这个是选择证件的类型
        div.setAttribute('id', 'form-item_shenfenzheng');
        div.className = 'form-item_shenfenzheng';
        var divs = document.createElement("div");
        divs.setAttribute('id', 'form_item_shenfenzhengbottom'); // 身份证
        divs.setAttribute('class', 'clear_float');
        var divTwo = document.createElement('div');
        divTwo.setAttribute('id', 'form_item_shenfenzhengbottomTwo'); // 护照类
        divTwo.setAttribute('class', 'clear_float');

        if (data.value) {
            data.value = data.value;
        } else {
            data.value = 'IDENTIFICATION_TYPE_IDCARD';
        }

        if (wechartJson[0].is_ID_or_passport) {
            divs.style.display = "block";
            divTwo.style.display = "none";
        } else {
            divs.style.display = "none";
            divTwo.style.display = "block";
        }


        div.innerHTML += this.createTitleTop('法定代表人/个体户经营者证件', '请上传法人的身份证/护照');
        var arr = [{
                name: '中国大陆居民--身份证',
                type: 'IDENTIFICATION_TYPE_IDCARD',
                types: 'radio_id_doc_type'
            }, {
                name: '中国香港居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT',
                types: 'radio_id_doc_type'
            }, {
                name: '中国澳门居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_MACAO_PASSPORT',
                types: 'radio_id_doc_type'
            },
            {
                name: '中国台湾居民--来往大陆通行证',
                type: 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT',
                types: 'radio_id_doc_type'
            }, {
                name: '其他国家或地区居民--护照',
                type: 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT',
                types: 'radio_id_doc_type'
            }
        ];


        this.three_syndromes_component(data, "证件类型", arr, div, function (value) {
            var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
            var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo');

            data.value = value;
            if (value == "IDENTIFICATION_TYPE_IDCARD") {
                //身份证照显示
                //证件照隐藏
                form_item_shenfenzhengbottom.style.display = "block";
                form_item_shenfenzhengbottomTwo.style.display = "none";
                wechartJson[0].is_ID_or_passport = true;

            } else {
                //身份证照隐藏
                //证件照显示
                form_item_shenfenzhengbottom.style.display = "none";
                form_item_shenfenzhengbottomTwo.style.display = "block";
                wechartJson[0].is_ID_or_passport = false;
            }

        });
        application_list_one.appendChild(div);
        application_list_one.appendChild(divs);
        application_list_one.appendChild(divTwo);

        var form_item_shenfenzheng = document.getElementById('form-item_shenfenzheng');
        var form_item_shenfenzheng_ul = form_item_shenfenzheng.getElementsByTagName('ul')[0];
        var form_item_shenfenzheng_input = form_item_shenfenzheng_ul.getElementsByTagName('input');
        if (data.value == 'IDENTIFICATION_TYPE_IDCARD') {
            form_item_shenfenzheng_input[0].checked = true;
        }

        if (data.value == 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT') {
            form_item_shenfenzheng_input[1].checked = true;
        }
        if (data.value == 'IDENTIFICATION_TYPE_MACAO_PASSPORT') {
            form_item_shenfenzheng_input[2].checked = true;
        }
        if (data.value == 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT') {
            form_item_shenfenzheng_input[3].checked = true;
        }
        if (data.value == 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT') {
            form_item_shenfenzheng_input[4].checked = true;
        }





    }

    // 身份证人像面照片
    this.id_card_copy = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证人像面照片', '请填写身份证人像面照片', 'shenfenzhengzhaopianzhengmian', '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）');
        var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
        form_item_shenfenzhengbottom.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianzhengmian', data);
    }


    // 身份证国徽面照片
    this.id_card_national = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证国徽面照片', '请填写身份证国徽面照片', 'shenfenzhengzhaopianfanmian', '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）');
        var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
        form_item_shenfenzhengbottom.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianfanmian', data);
    }



    // 身份证姓名和身份证号码生成dom方法
    this.id_card_name_And_number = function (data, componentNextPro) {
        var dom = 'form_item_shenfenzhengbottom';
        this.input_box_id_card(data, dom, componentNextPro);
    }

    //证件号码和证件持有人姓名
    this.id_doc_name_and_name = function (data) {
        var dom = 'form_item_shenfenzhengbottomTwo';
        this.input_box_id_card(data, dom);
    }


    // 身份证开始有效期限
    this.card_period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, "datetimepicker3", "form_item_shenfenzhengbottom", "证件有效期", "text_errors_timethree");
    }

    // 身份证结束有效期限
    this.card_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, "datetimepicker4", "form_item_shenfenzhengbottom", "text_errors_timethree");

    }


    //经营者/法人是否为受益人
    this.owner = function (data, componentNextPro) {
        var dom = document.getElementById('application_list_one');
        var arr = [{
            name: '是',
            type: true,
            types: 'radio_checked'
        }, {
            name: '否，非法定代表人/个体户经营者',
            type: false,
            types: 'radio_checked'
        }];


        if (data.value === null || data.value === '') {
            data.value = true; // 默认值
        }

        this.three_syndromes_components(data, "是否为受益所有人", arr, dom, function (value) {
            data.value = value; // 赋值给经营者/法人是否为受益人这个数据
            var divParent = document.getElementById('divParent_matation_form');
            if (data.value == true) {
                divParent.style.display = 'none';
                wechartJson[0].is_beneficiary = true;
            } else {
                divParent.style.display = 'block';
                wechartJson[0].is_beneficiary = false;
            }
        }, 'matation_form_is_shouyiren');

        var matation_form_is_shouyiren = document.getElementById('matation_form_is_shouyiren');
        var matation_form_is_shouyiren_input = matation_form_is_shouyiren.getElementsByTagName('input');
        if (data.value) {
            matation_form_is_shouyiren_input[0].checked = true;
        } else {
            matation_form_is_shouyiren_input[1].checked = true;
        }


        if (subject_boolean) {
            var matation_form_is_shouyiren = document.getElementById('matation_form_is_shouyiren');
            var div = matation_form_is_shouyiren.children[1];
            if (data.value) {
                div.innerHTML = '是';
            } else {
                div.innerHTML = '否';
            }
        }






    }



    // 其他类型证件证件照片
    this.id_doc_copy = function (data, componentNextPro) {
        var str = this.createTitleTopAndImg(data, '证件照片', '请填写证件照片', 'qitazhengjianzhaopian', '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）');
        var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo');
        form_item_shenfenzhengbottomTwo.appendChild(str);
        this.publicImgUupData('qitazhengjianzhaopian', data);
    }


    // 生成其他证件的开始时间方法
    this.doc_period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, 'datetimepicker5', "form_item_shenfenzhengbottomTwo", "证件有效期", "text_errors_timefour");
    }

    // 生成其他证件结束时间的方法
    this.doc_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, 'datetimepicker6', "form_item_shenfenzhengbottomTwo", "text_errors_timefour")
    }



    // 生成受益人信息
    this.id_type = function (data) {
        var str = this.createTitleTopTwo("受益人信息");
        var divParent = document.createElement('div');
        var divChildrenOne = document.createElement('div');
        var divChildrenTwo = document.createElement('div');
        var divChildrenThree = document.createElement('div');
        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_one');
        divPrev.innerHTML += this.prev_next();
        divParent.setAttribute('id', 'divParent_matation_form');
        divChildrenOne.setAttribute('id', 'divChildrenOne');
        divChildrenTwo.setAttribute('id', 'divChildrenTwo');
        divChildrenThree.setAttribute('id', 'divChildrenThree');
        application_list_one.appendChild(divParent);
        divParent.appendChild(divChildrenOne);
        divParent.appendChild(divChildrenTwo);
        divParent.appendChild(divChildrenThree);
        application_list_one.appendChild(divPrev);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        divChildrenThree.appendChild(div_hr);
        divChildrenOne.innerHTML += str;


        if (wechartJson[0].is_beneficiary) { // 默认隐藏
            divParent.style.display = 'none';
        } else {
            divParent.style.display = 'block';
        }


        var arr = [{
                name: '中国大陆居民--身份证',
                type: 'IDENTIFICATION_TYPE_IDCARD'
            }, {
                name: '中国香港居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT'
            }, {
                name: '中国澳门居民--来往内地通行证',
                type: 'IDENTIFICATION_TYPE_MACAO_PASSPORT'
            },
            {
                name: '中国台湾居民--来往大陆通行证',
                type: 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT'
            }, {
                name: '其他国家或地区居民--护照',
                type: 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT'
            }
        ];

        if (!data.value) {
            data.value = 'IDENTIFICATION_TYPE_IDCARD'; // 默认是身份证;
        } else {
            data.value = data.value;
        }


        this.three_syndromes_component(data, "证件类型", arr, divChildrenOne, function (values) {
            data.value = values; // 赋值给经营者/法人是否为受益人这个数据
            var shenfenzhengzhaopianzhengmian_one = document.getElementById('shenfenzhengzhaopianzhengmian_one');
            var shenfenzhengzhaopianfanmian_one = document.getElementById('shenfenzhengzhaopianfanmian_one');
            var qitazhengjianzhaopian_one = document.getElementById('qitazhengjianzhaopian_one');
            shenfenzhengzhaopianzhengmian_one.style.display = "block";
            shenfenzhengzhaopianfanmian_one.style.display = "block";
            qitazhengjianzhaopian_one.style.display = "none";

            if (values == "IDENTIFICATION_TYPE_IDCARD") {
                //身份证照显示
                //证件照隐藏
                shenfenzhengzhaopianzhengmian_one.style.display = "block";
                shenfenzhengzhaopianfanmian_one.style.display = "block";
                qitazhengjianzhaopian_one.style.display = "none";
                wechartJson[0].is_beneficiary_pic = true; // 身份证照片显示

            } else {
                //身份证照隐藏
                //证件照显示
                shenfenzhengzhaopianzhengmian_one.style.display = "none";
                shenfenzhengzhaopianfanmian_one.style.display = "none";
                qitazhengjianzhaopian_one.style.display = "block";
                wechartJson[0].is_beneficiary_pic = false; // 护照照片显示
            }

        });


        var divChildrenOne_ul = divChildrenOne.getElementsByTagName('ul')[0];
        var divChildrenOne_input = divChildrenOne_ul.getElementsByTagName('input');

        if (data.value == 'IDENTIFICATION_TYPE_IDCARD') {
            divChildrenOne_input[0].checked = true;

        }

        if (data.value == 'IDENTIFICATION_TYPE_HONGKONG_PASSPORT') {
            divChildrenOne_input[1].checked = true;

        }
        if (data.value == 'IDENTIFICATION_TYPE_MACAO_PASSPORT') {
            divChildrenOne_input[2].checked = true;

        }
        if (data.value == 'IDENTIFICATION_TYPE_TAIWAN_PASSPORT') {
            divChildrenOne_input[3].checked = true;

        }
        if (data.value == 'IDENTIFICATION_TYPE_OVERSEA_PASSPORT') {
            divChildrenOne_input[4].checked = true;

        }




        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        var _this = this;
        li[0].onclick = function () {
            subject_boolean = false;
            window.history.back();
        }
        li[2].onclick = function () {
            subject_boolean = false;
            var arr_isnext = [];
            var matation_business_pictrue_box = document.getElementById('matation_business_pictrue_box'); // 营业执照
            var matation_business_dengji_box = document.getElementById('matation_business_dengji_box'); // 登记证书
            var organization_code_certificate = document.getElementById('organization_code_certificate'); // 组织机构代码
            var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom'); // 法定代表人身份证信息
            var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo'); // 法定代表人港澳台护照信息;
            var divChildrenTwo = document.getElementById('divChildrenTwo'); // 受益人信息
            var input_zhizhao_pic = _this.getClassName_dom(matation_business_pictrue_box, 'input_updata'); //营业执照照片；
            var input_zhizhao_input = _this.getClassName_dom(matation_business_pictrue_box, 'input_public'); //营业执照input框；
            var input_dengji_pic = _this.getClassName_dom(matation_business_dengji_box, 'input_updata'); //登记执照照片；
            var input_dengji_input = _this.getClassName_dom(matation_business_dengji_box, 'input_public'); //登记执照input框；
            var input_dengji_riqi = _this.getClassName_dom(matation_business_dengji_box, 'form-control'); //登记执照到期日期；
            var input_zuzhi_pic = _this.getClassName_dom(organization_code_certificate, 'input_updata'); // 组织机构照片；
            var input_zuzhi_input = _this.getClassName_dom(organization_code_certificate, 'input_public'); // 组织机构input框
            var input_zuzhi_riqi = _this.getClassName_dom(organization_code_certificate, 'form-control'); //组织机构执照到期日期；
            var input_shenfenzheng_pic = _this.getClassName_dom(form_item_shenfenzhengbottom, 'input_updata'); //法人证件身份证照片；
            var input_shenfenzheng_input = _this.getClassName_dom(form_item_shenfenzhengbottom, 'input_public'); //法人证件身份证input框；
            var input_shenfenzheng_riqi = _this.getClassName_dom(form_item_shenfenzhengbottom, 'form-control'); //法人证件身份证input框；
            var input_huzhao_pic = _this.getClassName_dom(form_item_shenfenzhengbottomTwo, 'input_updata'); //法人证件身份证照片；
            var input_huzhao_input = _this.getClassName_dom(form_item_shenfenzhengbottomTwo, 'input_public'); //法人证件身份证input框；
            var input_huzhao_riqi = _this.getClassName_dom(form_item_shenfenzhengbottomTwo, 'form-control'); //法人证件身份证到期日期；

            var input_shouyiren_input = _this.getClassName_dom(divChildrenTwo, 'input_public'); //受益人证件身份证input框；
            var input_shouyiren_riqi = _this.getClassName_dom(divChildrenTwo, 'form-control'); //受益人证件身份证到期日期；







            if (subject_type == 'SUBJECT_TYPE_ENTERPRISE' || subject_type == 'SUBJECT_TYPE_INDIVIDUAL') { // 营业执照input 调用
                for (let i = 0; i < input_zhizhao_pic.length; i++) {
                    var ul_pic_dom = input_zhizhao_pic[i].parentNode.parentNode.nextElementSibling;
                    if (ul_pic_dom.children.length == 0) {
                        input_zhizhao_pic[i].onchange();
                    }

                    if (input_zhizhao_pic[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_zhizhao_pic[i]);
                    }
                };
                for (let i = 0; i < input_zhizhao_input.length; i++) {
                    input_zhizhao_input[i].onblur();
                    if (input_zhizhao_input[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_zhizhao_input[i]);
                    }
                }
            }
            if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS') { // 登记证书input 调用
                for (let i = 0; i < input_dengji_pic.length; i++) {
                    var ul_pic_dom = input_dengji_pic[i].parentNode.parentNode.nextElementSibling;
                    console.log(ul_pic_dom)
                    if (ul_pic_dom.children.length == 0) {
                        console.log('登记证书')
                        input_dengji_pic[i].onchange();
                    }

                    if (input_dengji_pic[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_dengji_pic[i]);
                    }
                };
                for (let i = 0; i < input_dengji_input.length; i++) {
                    input_dengji_input[i].onblur();
                    if (input_dengji_input[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_dengji_input[i]);
                    }
                }
                for (let i = 0; i < input_dengji_riqi.length; i++) {
                    input_dengji_riqi[i].onblur();
                    if (input_dengji_riqi[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_dengji_riqi[i]);
                    }
                }
            }

            if (wechartJson[0].is_organization) { // 组织机构input 调用
                for (let i = 0; i < input_zuzhi_pic.length; i++) {
                    var ul_pic_dom = input_zuzhi_pic[i].parentNode.parentNode.nextElementSibling;
                    if (ul_pic_dom.children.length == 0) {
                        input_zuzhi_pic[i].onchange();
                    }

                    if (input_zuzhi_pic[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_zuzhi_pic[i]);
                    }
                };
                for (let i = 0; i < input_zuzhi_input.length; i++) {
                    input_zuzhi_input[i].onblur();
                    if (input_zuzhi_input[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_zuzhi_input[i]);
                    }
                }
                for (let i = 0; i < input_zuzhi_riqi.length; i++) {
                    input_zuzhi_riqi[i].onblur();
                    if (input_zuzhi_riqi[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_zuzhi_riqi[i]);
                    }
                }
            }


            if (wechartJson[0].is_ID_or_passport) { // 证件类型 身份证
                for (var i = 0; i < input_shenfenzheng_pic.length; i++) {
                    var ul_pic_dom = input_shenfenzheng_pic[i].parentNode.parentNode.nextElementSibling;
                    if (ul_pic_dom.children.length == 0) {
                        input_shenfenzheng_pic[i].onchange();
                    }

                    if (input_shenfenzheng_pic[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_shenfenzheng_pic[i]);
                    }
                }
                for (let i = 0; i < input_shenfenzheng_input.length; i++) {
                    input_shenfenzheng_input[i].onblur();
                    if (input_shenfenzheng_input[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_shenfenzheng_input[i]);
                    }
                }
                for (let i = 0; i < input_shenfenzheng_riqi.length; i++) {
                    input_shenfenzheng_riqi[i].onblur();
                    if (input_shenfenzheng_riqi[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_shenfenzheng_riqi[i]);
                    }
                }

            } else { // 证件类型 护照类
                for (var i = 0; i < input_huzhao_pic.length; i++) {
                    var ul_pic_dom = input_huzhao_pic[i].parentNode.parentNode.nextElementSibling;
                    if (ul_pic_dom.children.length == 0) {
                        input_huzhao_pic[i].onchange();
                    }

                    if (input_huzhao_pic[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_huzhao_pic[i]);
                    }
                }
                for (let i = 0; i < input_huzhao_input.length; i++) {
                    input_huzhao_input[i].onblur();
                    if (input_huzhao_input[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_huzhao_input[i]);
                    }
                }
                for (let i = 0; i < input_huzhao_riqi.length; i++) {
                    input_huzhao_riqi[i].onblur();
                    if (input_huzhao_riqi[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_huzhao_riqi[i]);
                    }
                }
            }

            if (wechartJson[0].is_beneficiary == false) { // 受益人显示
                if (wechartJson[0].is_beneficiary_pic) { // 证件类型，身份证类型
                    var shenfenzhengzhaopianzhengmian_one = document.getElementById('shenfenzhengzhaopianzhengmian_one');
                    var shenfenzhengzhaopianfanmian_one = document.getElementById('shenfenzhengzhaopianfanmian_one');
                    var input_zheng = shenfenzhengzhaopianzhengmian_one.getElementsByTagName('input')[0];
                    var input_fan = shenfenzhengzhaopianfanmian_one.getElementsByTagName('input')[0];
                    var ul_pic_dom_zheng = input_zheng.parentNode.parentNode.nextElementSibling;
                    var ul_pic_dom_fan = input_fan.parentNode.parentNode.nextElementSibling;

                    if (ul_pic_dom_zheng.children.length == 0) {
                        input_zheng.onchange();
                    }
                    if (ul_pic_dom_fan.children.length == 0) {
                        input_fan.onchange();
                    }

                    if (input_zheng.hasAttribute('isnext')) {
                        arr_isnext.push(input_zheng);

                    }
                    if (input_fan.hasAttribute('isnext')) {
                        arr_isnext.push(input_fan);

                    }


                } else {
                    var qitazhengjianzhaopian_one = document.getElementById('qitazhengjianzhaopian_one');
                    var input_huzhao = qitazhengjianzhaopian_one.getElementsByTagName('input')[0];
                    var ul_pic_dom = input_huzhao.parentNode.parentNode.nextElementSibling;

                    if (ul_pic_dom.children.length == 0) {
                        input_huzhao.onchange();
                    }
                    if (input_huzhao.hasAttribute('isnext')) {
                        arr_isnext.push(input_huzhao);
                    }

                }

                for (var i = 0; i < input_shouyiren_input.length; i++) {
                    input_shouyiren_input[i].onblur();
                    if (input_shouyiren_input[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_shouyiren_input[i]);
                    }
                }


                for (var i = 0; i < input_shouyiren_riqi.length; i++) {
                    input_shouyiren_riqi[i].onblur();
                    if (input_shouyiren_riqi[i].hasAttribute('isnext')) {
                        arr_isnext.push(input_shouyiren_riqi[i]);
                    }
                }


            }





            console.log(arr_isnext);
            var common_xuanze_zhengji_span = document.getElementById('common_xuanze_zhengji_span');
            var common_xuanze_zhengji_p_yuansu = document.getElementById('common_xuanze_zhengji_p_yuansu');
            var value = common_xuanze_zhengji_span.firstChild.nodeValue;
            if ((subject_type == 'SUBJECT_TYPE_INSTITUTIONS' || subject_type == 'SUBJECT_TYPE_OTHERS') && value == '请选择') {
                common_xuanze_zhengji_p_yuansu.style.display = 'block';
                return;
            }
            if (arr_isnext.length > 0) {
                return;
            } else {
                wechartJson[0].subject_information = true; // 代表主体信息已经填写完成并且确认；
                ManagementInformation();
            }





        }

        if (subject_boolean == true) {
            divPrev.style.display = 'none';
        }


    }


    // 是否是受益人中的身份证正面照片
    this.id_card_copys = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证人像面照片', '请填写身份证人像面照片', 'shenfenzhengzhaopianzhengmian_one', "");
        console.log(str);
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianzhengmian_one', data);
        var shenfenzhengzhaopianzhengmian_one = document.getElementById('shenfenzhengzhaopianzhengmian_one');
        console.log('is_beneficiary_pic', wechartJson[0].is_beneficiary_pic)
        if (wechartJson[0].is_beneficiary_pic == false) {
            shenfenzhengzhaopianzhengmian_one.style.display = 'none';
        } else {
            shenfenzhengzhaopianzhengmian_one.style.display = 'block';
        }
    }


    // 是否是受益人中的身份证反面照片
    this.id_card_nationals = function (data) {
        var str = this.createTitleTopAndImg(data, '身份证国徽面照片', '请上传身份证国徽面照片', 'shenfenzhengzhaopianfanmian_one', "");
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianfanmian_one', data);
        var shenfenzhengzhaopianfanmian_one = document.getElementById('shenfenzhengzhaopianfanmian_one');
        console.log('is_beneficiary_pic', wechartJson[0].is_beneficiary_pic)
        if (wechartJson[0].is_beneficiary_pic == false) {
            shenfenzhengzhaopianfanmian_one.style.display = 'none';
        } else {
            shenfenzhengzhaopianfanmian_one.style.display = 'block';
        }
    }

    // 是否是受益人中的证件照片
    this.id_doc_copys = function (data) {
        var str = this.createTitleTopAndImg(data, '证件照片', '请填写证件照片', 'qitazhengjianzhaopian_one', '');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('qitazhengjianzhaopian_one', data);
        var qitazhengjianzhaopian_one = document.getElementById('qitazhengjianzhaopian_one');
        qitazhengjianzhaopian_one.style.display = "none";
        console.log('is_beneficiary_pic', wechartJson[0].is_beneficiary_pic)
        if (wechartJson[0].is_beneficiary_pic) {
            qitazhengjianzhaopian_one.style.display = 'none';
        } else {
            qitazhengjianzhaopian_one.style.display = 'block';
        }
    }

    // 是否是受益人姓名
    this.name = function (data) {
        var dom = 'divChildrenTwo';
        this.input_box_id_card(data, dom);
    }
    // 是否是受益人证件号码
    this.id_number = function (data) {
        var dom = 'divChildrenTwo';
        this.input_box_id_card(data, dom);
    }

    // 是否是受益人证件开始的时间
    this.id_period_begin = function (data, componentNextPro) {
        this.validity_start_time(data, componentNextPro, "datetimepicker7", "divChildrenTwo", "证件有效期限", "text_errors_timefive");
    }


    // 是否是收益人证件结束的时间
    this.id_period_end = function (data, componentNextPro) {
        this.validity_end_time(data, componentNextPro, 'datetimepicker8', "divChildrenTwo", "text_errors_timefive");
    }

    // 经营信息 商户简称
    this.merchant_shortname = function (data, componentNextPro) {
        var div = document.createElement("div");
        var img = document.createElement('img');
        var imgs = document.createElement('img');
        var is = document.createElement('i');
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        // imgs.setAttribute('class', 'imgs');
        // imgs.src = "../img/vector_go.png";
        var divImg = document.createElement("div");
        div.setAttribute('id', 'matation_form-item_shenfenzhengTwo');
        application_list_one.appendChild(div);
        div.innerHTML += this.matation_title('经营信息');

        var dom = 'matation_form-item_shenfenzhengTwo';
        this.input_box_id_card(data, dom);
        is.setAttribute('class', 'ico-msg-s');
        img.src = '../img/zhifu_jingyingxinxi.png';
        div.appendChild(divImg);
        divImg.appendChild(img);
        // divImg.appendChild(imgs);
        divImg.appendChild(p);
        divImg.appendChild(pTwo);
        div.appendChild(is);
        divImg.setAttribute('class', 'matation_jingying_img');
        divImg.style.display = 'none';
        var divText = document.createElement('div');
        divText.innerHTML = '① 不支持单纯以人名来命名，若为个体户经营，可用“个体户+经营者名称”或“经营者名称+业务”命名，如“个体户张三”或“张三餐饮店”；<br>② 不支持无实际意义的文案，如“XX特约商户”、“800”、“XX客服电话XXX”；'
        divText.setAttribute('class', 'tips-info');
        div.appendChild(divText);
        is.onmousemove = function () {
            console.log(this)
            divImg.style.display = 'block'
        }
        is.onmouseout = function () {
            divImg.style.display = 'none';
        }

    }

    // 经营信息 客服电话
    this.service_phone = function (data, componentNextPro) {
        var div = document.createElement("div");
        var img = document.createElement('img');
        var imgs = document.createElement('img');
        var is = document.createElement('i');
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        // imgs.setAttribute('class', 'imgs');
        // imgs.src = "../img/vector_go.png";
        var divImg = document.createElement("div");
        div.setAttribute('id', 'matation_form-item_shenfenzhengThree');
        application_list_one.appendChild(div);
        var dom = 'matation_form-item_shenfenzhengThree';
        this.input_box_id_card(data, dom);
        is.setAttribute('class', 'ico-msg-s');
        img.src = '../img/trans_record.png';
        div.appendChild(divImg);
        divImg.appendChild(img);
        // divImg.appendChild(imgs);
        divImg.appendChild(p);
        divImg.appendChild(pTwo);
        div.appendChild(is);
        divImg.setAttribute('class', 'matation_jingying_img');
        divImg.style.display = 'none';
        var divText = document.createElement('div');
        divText.innerHTML = '1、请填写真实有效的客服电话，将在交易记录中向买家展示，提供咨询服务 <br>2、请确保电话畅通，以便入驻后平台回拨确认。'
        divText.setAttribute('class', 'tips-info');
        div.appendChild(divText);
        is.onmousemove = function () {
            divImg.style.display = 'block'
        }
        is.onmouseout = function () {
            divImg.style.display = 'none';
        }


    }

    // 经营信息 经营场景
    this.sales_scenes_type = function (data) {

        var divone = document.createElement('div');
        divone.setAttribute('id', 'matation_form-item_shenfenzhengfour') // 经营场景多选框
        application_list_one.appendChild(divone);

        var divTwo = document.createElement('div');
        divTwo.setAttribute('id', 'matation_form_item_checkbox_jingying_parent') // 接收选中经营场景的信息的div
        application_list_one.appendChild(divTwo);

        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_two'); // 这个是保存 下一步按钮；
        divPrev.innerHTML += this.prev_next();
        application_list_one.appendChild(divPrev);

        var divxianxia = document.createElement('div');
        divxianxia.setAttribute('id', "matation_form_item_xianxia"); // 线下场所 
        divTwo.appendChild(divxianxia);

        var div_official_account = document.createElement('div');
        div_official_account.setAttribute('id', "matation_form_item_div_official_account"); // 公众号
        divTwo.appendChild(div_official_account);

        var div_applets_scene = document.createElement('div');
        div_applets_scene.setAttribute('id', "div_applets_scene"); // 小程序
        divTwo.appendChild(div_applets_scene);

        var div_app_scence = document.createElement('div');
        div_app_scence.setAttribute('id', "div_app_scence"); // app
        divTwo.appendChild(div_app_scence);

        var div_pc_scence = document.createElement('div');
        div_pc_scence.setAttribute('id', "div_pc_scence"); // pc
        divTwo.appendChild(div_pc_scence);

        var div_enterprise_wechat = document.createElement('div');
        div_enterprise_wechat.setAttribute('id', "div_enterprise_wechat"); // 企业微信
        divTwo.appendChild(div_enterprise_wechat);




        var arr = [{
                name: '线下场所',
                type: 'SALES_SCENES_STORE'
            }, {
                name: '公众号',
                type: 'SALES_SCENES_MP'
            }, {
                name: '小程序',
                type: 'SALES_SCENES_MINI_PROGRAM'
            },
            {
                name: 'APP',
                type: 'SALES_SCENES_APP'
            },
            {
                name: 'PC网站',
                type: 'SALES_SCENES_WEB'
            },
            {
                name: '企业微信',
                type: 'SALES_SCENES_WEWORK'
            }
        ];

        var arrType = ['SALES_SCENES_STORE', 'SALES_SCENES_MP', 'SALES_SCENES_MINI_PROGRAM', 'SALES_SCENES_APP', 'SALES_SCENES_WEB', 'SALES_SCENES_WEWORK'];
        var arrText = ['线下场所', '公众号', '小程序', 'APP', 'PC网站', '企业微信']

        divxianxia.style.display = 'none';
        div_official_account.style.display = 'none';
        div_applets_scene.style.display = 'none';
        div_app_scence.style.display = 'none';
        div_pc_scence.style.display = 'none';
        div_enterprise_wechat.style.display = 'none';
        var arrDom = [];
        arrDom.push(divxianxia);
        arrDom.push(div_official_account);
        arrDom.push(div_applets_scene);
        arrDom.push(div_app_scence);
        arrDom.push(div_pc_scence);
        arrDom.push(div_enterprise_wechat);
        var str_xianxia = '线下场所';
        var str_gongzhonghao = '公众号';
        var str_xiaochengxu = '小程序';
        var str_app = 'APP';
        var str_pc = 'PC网站';
        var str_weixin = '企业微信';
      
        if (wechartJson[0].business_scenario[0]) {
            for (var i = 0; i < wechartJson[0].business_scenario.length; i++) {
                if (wechartJson[0].business_scenario.indexOf(str_xianxia) != -1) {
                    //  console.log('线下场所有')
                    divxianxia.style.display = 'block';
                } else {
                    divxianxia.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_gongzhonghao) != -1) {
                    // console.log('公众号有')
                    div_official_account.style.display = 'block';
                } else {
                    div_official_account.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_xiaochengxu) != -1) {
                    // console.log('小程序有')
                    div_applets_scene.style.display = 'block';
                } else {
                    div_applets_scene.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_app) != -1) {
                    // console.log('APP有')
                    div_app_scence.style.display = 'block';
                } else {
                    div_app_scence.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_pc) != -1) {
                    //  console.log('PC端有')
                    div_pc_scence.style.display = 'block';
                } else {
                    div_pc_scence.style.display = 'none';
                }

                if (wechartJson[0].business_scenario.indexOf(str_weixin) != -1) {
                    //  console.log('企业微信有')
                    div_enterprise_wechat.style.display = 'block';
                } else {
                    div_enterprise_wechat.style.display = 'none';
                }



            }
        }
        var array = [];
        var array_text = [];
        array=data.value?data.value:[];
        array_text=data.data_value_text?data.data_value_text:[];
        this.checkbox_public(data, '经营场景', arr, divone, function (values, is_checked, index) {
            var arrayDom = [];
            divTwo.innerHTML = '';
            if (is_checked) {
                array.push(values);
                array_text.push(arr[index].name);
            } else {
                var index_s = array.indexOf(values);
                var index_text = array_text.indexOf(arr[index].name);
                array.splice(index, 1);
                array_text.splice(index_text);
            }
            data.data_value_text = array_text;
            data.value = array;
            wechartJson[0].business_scenario = array_text;
            for (var i = 0; i < array.length; i++) {
                var index = arrType.indexOf(array[i]);
                arrayDom.push(arrDom[index]);
            }
            for (var i = 0; i < arrayDom.length; i++) {
                divTwo.appendChild(arrayDom[i]);
                arrayDom[i].style.display = 'block';
            }

        })

        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        li[0].onclick = function () {
            subject_boolean = false;
            SubjectInformation();
        }
        var _this=this;
        li[2].onclick = function () {
            subject_boolean = false;
            var arr_isnext = [];
            var matation_form_item_shenfenzhengTwo = document.getElementById('matation_form-item_shenfenzhengTwo');
            var matation_form_item_shenfenzhengThree = document.getElementById('matation_form-item_shenfenzhengThree')
            matation_form_item_shenfenzhengTwo_input = matation_form_item_shenfenzhengTwo.getElementsByTagName('input')[0];
            matation_form_item_shenfenzhengThree_input = matation_form_item_shenfenzhengThree.getElementsByTagName('input')[0];
            var matation_form_item_xianxia=document.getElementById('matation_form_item_xianxia'); // 线下门店
            var input_xianxia_input=_this.getClassName_dom(matation_form_item_xianxia,'input_public');
            var input_xianxia_pic=_this.getClassName_dom(matation_form_item_xianxia,'input_updata')
            matation_form_item_shenfenzhengTwo_input.onblur();
            matation_form_item_shenfenzhengThree_input.onblur();
             
            if (matation_form_item_shenfenzhengTwo_input.hasAttribute('isnext')) {
                arr_isnext.push(matation_form_item_shenfenzhengTwo_input);
            }
            if (matation_form_item_shenfenzhengThree_input.hasAttribute('isnext')) {
                arr_isnext.push(matation_form_item_shenfenzhengThree_input);
            }

            if (wechartJson[0].business_scenario[0]) {
                for (var i = 0; i < wechartJson[0].business_scenario.length; i++) {
                    if (wechartJson[0].business_scenario.indexOf(str_xianxia) != -1) {
                        for(var j=0;j<input_xianxia_input.length;j++){
                            input_xianxia_input[j].onblur();
                            if(input_xianxia_input[j].hasAttribute('isnext')){
                                arr_isnext.push(input_xianxia_input[j]);
                            }
                        }
                        for(var z=0;z<input_xianxia_pic.length;z++){
                           //console.log('input_xianxia_pic', input_xianxia_pic[i]);
                            var ul_pic_dom = input_xianxia_pic[z].parentNode.parentNode.nextElementSibling;
                            if(ul_pic_dom.children.length == 0){
                                input_xianxia_pic[z].onchange();
                            }
                            if(input_xianxia_pic[z].hasAttribute('isnext')){
                                arr_isnext.push(input_xianxia_pic[z]);
                            }
                        }
                      

                    }
    
                    if (wechartJson[0].business_scenario.indexOf(str_gongzhonghao) != -1) {
                       
                    }
    
                    if (wechartJson[0].business_scenario.indexOf(str_xiaochengxu) != -1) {
                    
                    }
    
                    if (wechartJson[0].business_scenario.indexOf(str_app) != -1) {
                      
                    }
    
                    if (wechartJson[0].business_scenario.indexOf(str_pc) != -1) {
                     
                    }
    
                    if (wechartJson[0].business_scenario.indexOf(str_weixin) != -1) {
                       
                    }
    
    
    
                }
            }


            if (arr_isnext.length > 0) {
                return;
            } else {
                wechartJson[0].business_information = true; // 代表主体信息已经填写完成并且确认；
                Settlementrules();
            }



        }

        if (subject_boolean == true) {
            divPrev.style.display = 'none'; //   这个是保存 下一步按钮;
        }

        if (wechartJson[0].business_scenario[0]) {   // 复选框是否选中函数
            var matation_form_item_shenfenzhengfour = document.getElementById('matation_form-item_shenfenzhengfour');
            var inputs = matation_form_item_shenfenzhengfour.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                var input_sing_prev = inputs[i].nextElementSibling.innerHTML;
                if (wechartJson[0].business_scenario.indexOf(input_sing_prev) != -1) {
                    inputs[i].checked = true;
                }
            }

        }



    }

    // 线下场景 门店名称
    this.biz_store_name = function (data, componentNextPro) {
        var str = this.createSubtitle('你选择了“线下场所”场景，审核通过后将获得“付款码支付”、“JSAPI支付”产品');
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.innerHTML += str;
        this.input_box_id_card(data, 'matation_form_item_xianxia', componentNextPro);
    }

    // 线下场景 省市编号
    this.biz_address_code = function (data, componentNextPro) {


        this.input_box_id_card(data, 'matation_form_item_xianxia', componentNextPro);

    }

    // 线下场景 经营场所地址
    this.biz_store_address = function (data) {
        this.input_box_id_card(data, 'matation_form_item_xianxia');

        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '请填写详细的经营场所信息，如有多个场所，选择一个主要场所填写即可';
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.appendChild(divInnerText);

    }

    // 线下场景 门店门头照片
    this.store_entrance_pic = function (data) {
        var str = this.create_multiple_pictures('经营场所门前照片', '请上传门店照片', '请上传门店照片（要求门店招牌清晰可见），图片需在2M内。若为停车场、售卖机等无固定门头照片 的经营场所，请提供真实的经营现场照片即可', 'mendianmentouzhaopian');
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.appendChild(str);
        this.multiple_pictures('mendianmentouzhaopian', data);
    }

    // 线下场景 店内环境照片
    this.indoor_pic = function (data) {
        var str = this.create_multiple_pictures('经营场所店内环境照片', '请上传经营场所店内环境照片', '请上传门店内部环境照片，图片需在2M内。若为停车场、售卖机等无固定门头照片的经营场所，请提 供真实的经营现场照片即可', 'mendianneibuzhaopian');
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        matation_form_item_xianxia.appendChild(str);
        this.multiple_pictures('mendianneibuzhaopian', data);
    }

    // 线下场景 对应的公众号AppId
    this.biz_sub_appid = function (data) {
        this.input_box_id_card(data, 'matation_form_item_xianxia');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '已认证的服务号或政府媒体类型的订阅号。要求申请主体一致，且公众号需要有内容。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">APPID查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达，支付凭证小程序等业务。';
        var matation_form_item_xianxia = document.getElementById('matation_form_item_xianxia');
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_xianxia.appendChild(divInnerText);
        matation_form_item_xianxia.appendChild(div_hr);
    }

    // 公众号 服务商公众号APPID
    this.mp_appid = function (data) {
        var str = this.createSubtitle('你选择了“公众号”场景，审核通过后将获得“JSAPI支付”产品');
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account');
        matation_form_item_div_official_account.innerHTML += str;
        this.input_box_id_card(data, 'matation_form_item_div_official_account');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '1、服务商公众号APPID与商家公众号APPID，二选一必填。<br>2、可填写当前服务商商户号已绑定的公众号APPID。';
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account');
        matation_form_item_div_official_account.appendChild(divInnerText);

    }

    // 公众号 商家公众号APPID
    this.mp_sub_appid = function (data) {
        this.input_box_id_card(data, 'matation_form_item_div_official_account');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '1、服务商公众号APPID与商家公众号APPID，二选一必填。<br>2、可填写与商家主体一致且已认证的公众号APPID，需是已认证的服务号、政府或媒体类型的订阅号。<br>3、请填写已认证的公众号APPID，需是已认证的服务号、政府或媒体类型的订阅号。要求申请主体一致，且公众号需要有内容。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">查看指引</a>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // 公众号 页面截图(选填)
    this.mp_pics = function (data) {
        var str = this.create_multiple_pictures('公众号页面截图<br>(选填)', '请填写公众号页面截图(选填)', '请提供展示商品/服务的页面截图/设计稿（最多5张），若公众号未建设完善或未上线请务必提供，图片需在2M内。', 'gongzhonghao_appid');
        var matation_form_item_div_official_account = document.getElementById('matation_form_item_div_official_account');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('gongzhonghao_appid', data);
    }

    // 小程序服务商小程序APPID
    this.mini_program_appid = function (data) {
        var str = this.createSubtitle('你选择了“小程序”场景，审核通过后将获得“JSAPI支付”产品');
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.innerHTML += str;
        this.input_box_id_card(data, 'div_applets_scene');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '1、服务商小程序APPID与商家小程序APPID，二选一必填。<br />2、可填写当前服务商商户号已绑定的小程序APPID。';
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // 小程序商家小程序APPID
    this.mini_program_sub_appid = function (data) {
        this.input_box_id_card(data, 'div_applets_scene');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '1、服务商小程序APPID与商家小程序APPID，二选一必填。<br>2、请填写已认证的小程序APPID。<br>3、请填写已认证的小程序APPID，要求申请主体一致。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // 小程序小程序截图
    this.mini_program_pics = function (data) {
        var str = this.create_multiple_pictures('小程序截图', '请上传小程序截图', '请提供展示商品/服务的页面截图/设计稿（最多5张），若小程序未建设完善或未上线请务必提供。图片需在2M内。', 'xiaochengxu_appid');
        var matation_form_item_div_official_account = document.getElementById('div_applets_scene');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('xiaochengxu_appid', data);
    }

    // APP场景服务商应用APPID  // div_app_scence
    this.app_appid = function (data) {
        var str = this.createSubtitle('你选择了“APP”场景，审核通过后将获得“APP支付”产品');
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.innerHTML += str;
        this.input_box_id_card(data, 'div_app_scence');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '1、服务商应用APPID与商家应用APPID，二选一必填。<br>2、可填写当前服务商商户号已绑定的应用APPID。';
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // APP场景商家应用APPID
    this.app_sub_appid = function (data) {
        this.input_box_id_card(data, 'div_app_scence');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '1、服务商应用APPID与商家应用APPID，二选一必填。<br>2、可填写当前服务商商户号已绑定的应用APPID。<br>3、请填写与商家主体一致且已认证的应用APPID。  <a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">APPID查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    //  APP场景APP截图
    this.app_pics = function (data) {
        var str = this.create_multiple_pictures('APP截图', '请上传APP截图', '请提供APP首页截图、尾页截图、应用内截图、支付页截图各1张。<a target="_blank" href="http://kf.qq.com/faq/190130aqumuq190130A326Bf.html">查看示例</a>。', 'app_appid');
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('app_appid', data);
    }


    // PC 场景 互联网网站域名  // div_pc_scence
    this.domain = function (data) {
        var str = this.createSubtitle('你选择了“PC网站”场景，审核通过后将获得“JSAPI支付”、“Native支付”产品');
        var matation_form_item_div_official_account = document.getElementById('div_pc_scence');
        matation_form_item_div_official_account.innerHTML += str;
        this.input_box_id_card(data, 'div_pc_scence');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '若为网站售卖、智能终端等场景，可填写官网链接（格式需以http://或https://开头）<br>网站域名需ICP备案，若备案主体与申请主体不同，请在下方上传加盖公章的<a href="https://wx.gtimg.com/mch/img/icp.doc"> 网站授权函</a>，需为2M内的图片。';
        var matation_form_item_div_official_account = document.getElementById('div_pc_scence');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // PC 场景 网站授权函 
    this.web_authorisation = function (data) {
        var str = this.createTitleTopAndImg(data, '网站授权函(选填)', '请填写网站授权函(选填)', 'pcwangzhanshouquanhan', '若备案主体与申请主体不同，请务必上传加盖公章的网站授权函');
        var form_item_shenfenzhengbottomTwo = document.getElementById('div_pc_scence');
        form_item_shenfenzhengbottomTwo.appendChild(str);
        this.publicImgUupData('pcwangzhanshouquanhan', data);
    }

    // PC 场景 互联网网站对应的商家APPID
    this.web_appid = function (data) {
        this.input_box_id_card(data, 'div_pc_scence');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '请填写已认证的公众号、小程序、应用的APPID，需是已认证的服务号、政府或媒体类型的订阅号。要求申请主体一致，且公众号需要有内容。<a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">APPID查看指引</a><br>完成入驻后，系统发起商户号与该AppID的绑定，可用于支付，营销，用户触达等业务。';
        var matation_form_item_xianxia = document.getElementById('div_pc_scence');
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_xianxia.appendChild(divInnerText);
        matation_form_item_xianxia.appendChild(div_hr);
    }

    // 企业微信场景 商家企业微信CorpID
    this.wework_info = function (data) {
        var str = this.createSubtitle('你选择了“企业微信”场景，审核通过后将开通“企业微信专区”，并获得“向员工收款”产品（其他产品可在入驻后根据情况发起申请）');
        var matation_form_item_div_official_account = document.getElementById('div_enterprise_wechat');
        matation_form_item_div_official_account.innerHTML += str;
        this.input_box_id_card(data, 'div_enterprise_wechat');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '可填写与商家主体一致且已认证的企业微信CorpID。 <a href="https://kf.qq.com/faq/181105JJNbmm181105eUZfee.html">CorpID查看指引</a><br>完成入驻后，系统发起商户号与该CorpID的绑定';
        var matation_form_item_div_official_account = document.getElementById('div_enterprise_wechat');
        matation_form_item_div_official_account.appendChild(divInnerText);
    }

    // 企业微信页面截图
    this.wework_pics = function (data) {
        var str = this.create_multiple_pictures('企业微信页面截图', '请填写企业微信页面截图', '请提供展示商品/服务的页面截图/设计稿。<a target="_blank" href="http://kf.qq.com/faq/190130aqumuq190130A326Bf.html">查看示例</a>,最多可上传5张照片。', 'qiyeweixin_appid');
        var matation_form_item_div_official_account = document.getElementById('div_enterprise_wechat');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
        this.multiple_pictures('qiyeweixin_appid', data);
    }


    //结算规则 结算规则信息 入驻结算规则ID   matation_title
    this.settlement_id = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_settlement_rules');
        application_list_one.appendChild(div);
        div.innerHTML += this.matation_title('结算规则');

        var h2 = div.getElementsByTagName('h2')[0];
        console.log(h2)
        if (subject_boolean) {
            h2.style.position = 'absolute';
            h2.style.top = '-22px';
            div.style.paddingTop = '30px';
        }
        var div_bottom = document.createElement('div');
        div_bottom.setAttribute('class', 'matation_settlement_rules_bottom')
        div_bottom.innerHTML = '请根据实际经营行业选择结算规则，可看 <a href="https://kf.qq.com/faq/190610vmIfei190610AfMzii.html" target="_blank">结算规则指引</a>，若结算规则说明有单笔收款限额，请看 <a href="https://kf.qq.com/faq/201130jyeAFr201130NJVv6z.html" target="_blank">收款限额说明</a>';
        this.rules_lable(data, 'matation_settlement_rules', 'matation_settlement_rules_children');
        this.pay_rule(data, div, 'matation_settlement_rules_children');
        div.appendChild(div_bottom);

    }

    //  结算规则方法label和右边部分
    this.rules_lable = function (data, dom, dom_children) {
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        var p_rotate = document.createElement('p');
        p_rotate.className = 'rotate_ps';
        div.className = 'application_list_one_ul_li_div';
        if (subject_boolean) {
            div.style.paddingLeft = '30px';
        }
        label.className = "lable_left_rule";
        p.className = "text-errors";
        label.innerText = data.caption;
        var divs = document.createElement("div");
        divs.setAttribute('class', 'rule_divs');
        divs.setAttribute('id', dom_children);
        divs.className = "b_public";
        var span = document.createElement('span');
        var i = document.createElement('i');
        divs.appendChild(span);
        divs.appendChild(i);
        span.innerText = '请选择';
        span.style.paddingLeft = '20px';
        div.appendChild(label);
        div.appendChild(divs);
        divs.appendChild(p_rotate);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
    }

    // 结算规则所属行业
    this.qualification_type = function (data, componentNextPro) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_qualification_type');
        application_list_one.appendChild(div);
        this.rules_lable(data, 'matation_qualification_type', 'matation_qualification_type_children');
        var div_bottom = document.createElement('div');
        this.qualification_type_ul(data);
        div_bottom.setAttribute('class', 'matation_settlement_rules_bottom');
        div_bottom.innerHTML = '1、请提供为“申请商家主体”所属的特殊资质，可授权使用总公司/分公司的特殊资质；<a href="https://kf.qq.com/faq/190610B7baQb190610NN3mQN.html" target="_blank">上传特殊资质指引</a><br>2、请上传2M以内的图片。';
        div.appendChild(div_bottom);
        var p = document.createElement('p');
        p.setAttribute('id', 'matation_qualification_type_p');
        p.className = 'text-errors';
        div.appendChild(p);
        p.style.paddingTop = '10px';
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'categoryList_rules');
        ul.style.display = 'none';
        div.appendChild(ul);
    }

    // 结算规则信息方法下面生成的ul;
    this.pay_rule = function (data, dom, dom_children) {
        var arrs = [];
        var arrs_child = [];
        var that = this;
        var arr_subject_type = [
            [ // 企业
                {
                    hangye_range: '餐饮、零售批发、网上综合商城、交通出行、生活娱乐服务、培训教育机构、民营医疗机构、缴费等业务',
                    rate: '费率0.6%，入账周期T+1',
                    rule_id: '716',
                    arr: [{
                            title: '餐饮',
                            require: '选填，若贵司具备以下资质，建议提供：餐饮业态，提供《食品经营许可证》或《餐饮服务许可证》'
                        },
                        {
                            title: '食品生鲜',
                            require: '选填，若贵司具备以下资质，建议提供：食品业态，提供《食品经营许可证》或《食品生产许可证》或供销协议'
                        },
                        {
                            title: '电信运营商/宽带收费',
                            require: '《电信业务经营许可证》'
                        },
                        {
                            title: '私立/民营医院/诊所',
                            require: '《医疗机构执业许可证》'
                        },
                        {
                            title: '保健器械/医疗器械/非处方药品',
                            require: '互联网售药：提供《互联网药品交易服务证》。线下门店卖药：提供《药品经营许可证》。医疗器械：《医疗器械经营企业许可证》'
                        },

                        {
                            title: '游艺厅/KTV/网吧',
                            require: '游艺厅/KTV：《娱乐场所许可证》。网吧：《网络文化经营许可证》'
                        },
                        {
                            title: '机票/机票代理',
                            require: '《航空公司营业执照》或《航空公司机票代理资格证》'
                        },
                        {
                            title: '宠物医院',
                            require: '《动物诊疗许可证》'
                        },
                        {
                            title: '旅行社',
                            require: '《旅行社业务经营许可证》'
                        },
                        {
                            title: '宗教组织',
                            require: '宗教类提供《宗教活动场所登记证》'
                        },

                        {
                            title: '房地产/房产中介',
                            require: '房地产开发商提供以下五个资质：《建设用地规划许可证》《建设工程规划许可证》《建筑工程开工许可证》《国有土地使用证》《商品房预售许可证》，房地产中介无需特殊资质'
                        },
                        {
                            title: '共享服务',
                            require: '需提供资金监管协议。协议要求：1、主体与商业银行签订。2、内容针对交易资金使用和偿付进行监管。3、协议须在有效期内。4、结算账户须与资金监管账户一致'
                        },

                        {
                            title: '文物经营/文物复制品销售',
                            require: '销售文物，需提供《文物经营许可证》'
                        },
                        {
                            title: '拍卖典当',
                            require: '拍卖：《拍卖经营批准证书》。典当：《典当经营许可证》'
                        },
                        {
                            title: '培训机构',
                            require: '选填，若贵司具备以下资质，建议提供：1、学科类培训，提供办学许可证或相关批文。2、驾校培训，提供有“驾驶员培训”项目的《道路运输经营许可证》'
                        },
                        {
                            title: '零售批发/生活娱乐/网上商城/其他',
                            require: '无需提供特需资质'
                        },
                    ]
                },



                {
                    hangye_range: '保险公司、保险代理公司',
                    rate: '费率0.6%，入账周期T+1',
                    rule_id: '715',
                    arr: [{
                        title: '保险业务',
                        require: '保险公司提供《经营保险业务许可证》《保险业务法人等级证书》，其他公司提供相关资质'
                    }]
                },
                {
                    hangye_range: '众筹业务',
                    rate: '费率0.6%，入账周期T+3',
                    rule_id: '714',
                    arr: [{
                            title: '众筹',
                            require: '仅限实物类、公益类众筹网站接入申请，暂不支持股权类众筹商户，公益类众筹商户需要提供公募资质'
                        }

                    ]
                },
                {
                    hangye_range: '财经资讯/荐股业务',
                    rate: '费率0.6%，入账周期T+7，单笔限额3K',
                    rule_id: '713',
                    arr: [{
                        title: '财经/股票类资讯',
                        require: '若有具体的荐股行为，需资质《证券投资咨询业务资格证书》'
                    }]
                },
                {
                    hangye_range: '婚介平台、就业信息平台、话费代理充值等业务',
                    rate: '费率0.6%，入账周期T+7，单笔限额3K',
                    rule_id: '728',
                    arr: [{
                            title: '话费通讯',
                            require: '提供与运营商间的合作授权收费协议'
                        },
                        {
                            title: '婚介平台/就业信息平台/其他',
                            require: '无需提供特需资质'
                        }
                    ]
                },
                {
                    hangye_range: '在线图书/视频/音乐、游戏、网络直播、门户论坛、网络广告及推广、软件开发业务',
                    rate: '费率1%，入账周期T+7，单笔限额3K',
                    rule_id: '711',
                    arr: [{
                            title: '在线图书/视频/音乐/网络直播',
                            require: '《互联网出版许可证》或《网络文化经营许可证》'
                        },
                        {
                            title: '游戏',
                            require: '棋牌类、捕鱼类游戏提供《网络文化经营许可证》'
                        },
                        {
                            title: '门户论坛/网络广告及推广/软件开发/其他',
                            require: '无需提供特需资质'
                        }
                    ]
                },
                {
                    hangye_range: '加油、物流快递、民办中小学、幼儿园业务',
                    rate: '费率0.3%，入账周期T+1',
                    rule_id: '717',
                    arr: [{
                            title: '物流/快递',
                            require: '物流：《道路运输许可证》。快递：《快递业务经营许可证》'
                        },
                        {
                            title: '加油',
                            require: '《成品油批发经营批准证书》或《成品油仓储经营批准证书》或《成品油零售经营批准证书》，其中一个即可'
                        },
                        {
                            title: '民办中小学及幼儿园',
                            require: '民办非公立院校需提供《办学许可证》'
                        }
                    ]
                },
                {
                    hangye_range: '水电煤暖气民生缴费',
                    rate: '费率0.2%，入账周期T+1',
                    rule_id: '730',
                    arr: [{
                        title: '公共事业（水电煤气）',
                        require: '收费授权证明文件（如授权证明书或合同）'
                    }]
                },
                {
                    hangye_range: '信用还款业务（不涉及理财）',
                    rate: '费率0.2%，入账周期T+1，禁信用卡',
                    rule_id: '718',
                    arr: [{
                        title: '信用还款',
                        require: '1、银行：银监会颁发的《金融许可证》。2、消费金融：银监会颁发的《金融许可证》。3、互联网小额贷款企业：银监会颁发的互联网小额贷款资质证明。请根据企业类型提供以上三种证件中的一种，即三选一'
                    }]
                },
                {
                    hangye_range: '民办大学及院校',
                    rate: '费率0%，入账周期T+1',
                    rule_id: '739',
                    arr: [{
                        title: '民办大学及院校',
                        require: '民办非公立院校需提供《办学许可证》'
                    }]
                }
            ],




            [ // 个体户
                {
                    hangye_range: '餐饮、零售批发、交通出行、生活娱乐服务、培训教育机构、民营医疗机构、代理缴纳话费等业务',
                    rate: '费率0.6%，入账周期T+1',
                    'rule_id': '719',
                    arr: [{
                            title: '餐饮',
                            require: '选填，若贵司具备以下资质，建议提供：餐饮业态，提供《食品经营许可证》或《餐饮服务许可证》'
                        },
                        {
                            title: '食品生鲜',
                            require: '选填，若贵司具备以下资质，建议提供： 1、食品业态，提供《食品经营许可证》或《食品生产许可证》或供销协议+合作方资质。2、销售初级农产品，无需特殊资质'
                        },
                        {
                            title: '私立/民营医院/诊所',
                            require: '《医疗机构执业许可证》'
                        },
                        {
                            title: '保健器械/医疗器械/非处方药品',
                            require: '互联网售药：提供《互联网药品交易服务证》。线下门店卖药：提供《药品经营许可证》。 医疗器械：《医疗器械经营企业许可证》'
                        },
                        {
                            title: '游艺厅/KTV/网吧',
                            require: '游艺厅/KTV：《娱乐场所许可证》。网吧：《网络文化经营许可证》'
                        },
                        {
                            title: '机票/机票代理',
                            require: '《航空公司营业执照》或《航空公司机票代理资格证》'
                        },
                        {
                            title: '宠物医院',
                            require: '《动物诊疗许可证》'
                        },
                        {
                            title: '培训机构',
                            require: '选填，若贵司具备以下资质，建议提供： 1、学科类培训，提供办学许可证或相关批文。2、驾校培训，提供有“驾驶员培训”项目的《道路运输经营许可证》'
                        },
                        {
                            title: '零售批发/生活娱乐/其他',
                            require: '无需提供特需资质'
                        }
                    ]
                },
                {
                    hangye_range: '话费代理充值业务',
                    rate: '费率0.6%，入账周期T+7，单笔限额3K',
                    rule_id: '720',
                    arr: [{
                        title: '话费通讯',
                        require: '提供与运营商间的合作授权收费协议'
                    }]
                },
                {
                    hangye_range: '游戏、网络广告及推广、软件开发',
                    rate: '费率0.6%，入账周期T+7，单笔限额3K',
                    rule_id: '746',
                    arr: [{
                            title: '门户论坛/网络广告及推广/软件开发/其他',
                            require: '无需提供特需资质'
                        },
                        {
                            title: '游戏',
                            require: '棋牌类、捕鱼类游戏提供《网络文化经营许可证》'
                        }
                    ]
                },
                {
                    hangye_range: '加油业务',
                    rate: '费率0.3%，入账周期T+1',
                    rule_id: '721',
                    arr: [{
                        title: '加油',
                        require: '《成品油批发经营批准证书》或《成品油仓储经营批准证书》或《成品油零售经营批准证书》，其中一个即可'
                    }]
                }
            ],

            [ // 党政，机关及事业
                {
                    hangye_range: '党团费、停车缴费、物业缴费等其他缴费类业务',
                    rate: '费率0.6%，入账周期T+1',
                    rule_id: '725',
                    arr: [{
                        title: '其他缴费',
                        require: '收费资质'
                    }]
                },
                {
                    hangye_range: '水电煤暖气民生缴费',
                    rate: '费率0.2%，入账周期T+1',
                    rule_id: '722',
                    arr: [{
                        title: '公共事业（水电煤气）',
                        require: '收费授权证明文件（如授权证明书或合同）'
                    }]
                },
                {
                    hangye_range: '交通罚款业务',
                    rate: '费率0.1%，入账周期T+1',
                    rule_id: '723',
                    arr: [{
                        title: '交通罚款',
                        require: '收费授权证明文件（如授权证明书或合同）'
                    }]
                },
                {
                    hangye_range: '公立医院、公立院校及指定要求的挂号平台',
                    rate: '费率0%，入账周期T+1',
                    rule_id: '724',
                    arr: [{
                            title: '公立医院',
                            require: '《医疗机构执业许可证》'
                        },
                        {
                            title: '公立学校',
                            require: '无需提供特需资质'
                        },
                        {
                            title: '挂号平台',
                            require: '卫生局的批文'
                        },
                    ]
                }

            ],

            [ // 其他组织
                {
                    hangye_range: '民办非企业单位业务、社区服务、咨询、娱乐票务等',
                    rate: '费率0.6%，入账周期T+1',
                    rule_id: '727',
                    arr: [{
                            title: '宗教组织',
                            require: '宗教类提供《宗教活动场所登记证》'
                        },
                        {
                            title: '机票/机票代理',
                            require: '《航空公司营业执照》或《航空公司机票代理资格证》'
                        },
                        {
                            title: '私立/民营医院/诊所',
                            require: '《医疗机构执业许可证》'
                        },
                        {
                            title: '咨询/娱乐票务/其他',
                            require: '无需提供特需资质'
                        },
                    ]
                },
                {
                    hangye_range: '民办中小学、幼儿园',
                    rate: '费率0.3%，入账周期T+1',
                    rule_id: '738',
                    arr: [{
                        title: '民办中小学及幼儿园',
                        require: '民办非公立院校需提供《办学许可证》'
                    }]
                },
                {
                    hangye_range: '民办大学院校及公益基金会',
                    rate: '费率0%，入账周期T+1',
                    rule_id: '726',
                    arr: [{
                            title: '民办大学及院校',
                            require: '民办非公立院校需提供《办学许可证》'
                        },
                        {
                            title: '公益',
                            require: '《基金会法人登记证书》、法人资料业务范围有“接受捐款”相关字眼或有“慈善组织”标识'
                        },
                    ]
                }
            ]
        ]

        var ul = document.createElement('ul');
        ul.setAttribute('class', 'categoryList_rule');
        var arrs = arr_subject_type[subject_index];
        ul.style.display = 'none';
        var div_b_public = document.getElementById(dom_children);
        for (let j = 0; j < arrs.length; j++) {
            var li = document.createElement('li');
            var span = document.createElement('span');
            var i = document.createElement('i');
            var b = document.createElement('b');
            li.appendChild(b);
            li.appendChild(span);
            li.appendChild(i);
            span.innerText = arrs[j].hangye_range;
            i.innerHTML = arrs[j].rate;
            ul.appendChild(li);
            li.onclick = function () {
                wechartJson[4].subobject[1].value = null;
                console.log(wechartJson[4].subobject[1]);
                console.log(wechartJson[4].subobject[1].value);
                data.value = arrs[j].rule_id;
                div_b_public.children[0].innerHTML = this.children[1].innerText;
                div_b_public.children[1].innerHTML = this.children[2].innerText;
                div_b_public.style.height = this.offsetHeight + 'px';
                this.parentNode.style.display = 'none';
                var matation_qualification_type = document.getElementById('matation_qualification_type');
                var div_hangye_children = document.getElementById('matation_qualification_type_children');
                var ul_children = matation_qualification_type.getElementsByTagName('ul')[0];
                var matation_qualification_type_p = document.getElementById('matation_qualification_type_p');
                matation_qualification_type_p.innerHTML = '请选择所属行业';
                div_hangye_children.children[0].innerHTML = '请选择';
                div_hangye_children.children[1].innerHTML = '';
                div_hangye_children.children[0].style.cssText = 'padding-left: 20px;width: 340px;float: left;';
                div_hangye_children.children[1].style.cssText = 'text-align: right;width: 290px;float: left;';
                div_hangye_children.style.cssText = 'height:45px';
                var h = getComputedStyle(this.children[2])["paddingTop"];
                ul_children.style.display = 'none';
                if (j == 0) {
                    div_b_public.style.paddingTop = '10px';
                    div_b_public.children[1].style.paddingTop = parseInt(h) + 'px';
                } else if (j == 5) {
                    div_b_public.children[1].style.paddingTop = '15px';
                } else {
                    div_b_public.style.paddingTop = '15px';
                    div_b_public.children[1].style.paddingTop = '2px';
                }
                for (var n = 0; n < ul.children.length; n++) {
                    ul.children[n].children[0].style.display = 'none';
                }
                this.children[0].style.display = 'block';
                that.qualification_type_ul(arrs[j].arr);
            }
        }

        div_b_public.onclick = function () {
            var h = 63 + parseInt(this.offsetHeight);
            ul.style.display = 'block';
            ul.style.top = h + 'px';
        }

        if (subject_boolean == false) {
            dom.appendChild(ul);
        }

    }

    // 结算规则所属行业下的ul框
    this.qualification_type_ul = function (arr) {
        //  console.log(wechartJson[4].subobject[1]);
        if (Array.isArray(arr)) {
            var matation_qualification_type = document.getElementById('matation_qualification_type');
            var div_hangye_children = document.getElementById('matation_qualification_type_children');
            var ul = matation_qualification_type.getElementsByTagName('ul')[0];
            div_hangye_children.onclick = function () {
                ul.style.display = 'block';
                var h = parseInt(this.offsetHeight);
                ul.style.top = h + 'px';
            }
            ul.innerHTML = '';
            for (let j = 0; j < arr.length; j++) {
                var li = document.createElement('li');
                var span = document.createElement('span');
                var i = document.createElement('i');
                var b = document.createElement('b');
                li.appendChild(b);
                li.appendChild(span);
                li.appendChild(i);
                span.innerText = arr[j].title;
                i.innerHTML = arr[j].require;
                ul.appendChild(li);
                li.onclick = function () {
                    wechartJson[4].subobject[1].value = arr[j].title;
                    console.log(wechartJson[4].subobject[1]);
                    console.log(wechartJson[4].subobject[1].value);
                    var matation_qualification_type_p = document.getElementById('matation_qualification_type_p');
                    matation_qualification_type_p.innerHTML = '';
                    ul.style.display = 'block';
                    div_hangye_children.style.height = this.offsetHeight + 'px';
                    div_hangye_children.children[0].style.display = 'block';
                    div_hangye_children.children[0].style.fontWeight = 'bold';
                    div_hangye_children.children[1].style.float = 'block';
                    div_hangye_children.children[1].style.width = '100%';
                    div_hangye_children.style.paddingRight = '45px';
                    div_hangye_children.style.paddingLeft = '40px';
                    div_hangye_children.children[0].style.paddingLeft = '0px';
                    div_hangye_children.children[0].style.float = 'none';
                    div_hangye_children.children[1].style.float = 'none';
                    div_hangye_children.children[0].innerHTML = arr[j].title;
                    div_hangye_children.children[1].innerHTML = arr[j].require;
                    ul.style.top = this.offsetHeight + 'px';
                    for (var n = 0; n < ul.children.length; n++) {
                        ul.children[n].children[0].style.display = 'none';
                    }
                    this.children[0].style.display = 'block';
                    ul.style.display = 'none';
                }
            }
        }
    }

    // 结算规则 特殊资质图片
    this.qualifications = function (data) {
        var str = this.create_multiple_pictures('特殊资质图片', '请上传特殊资质图片', '', 'qualifications_pic');
        application_list_one.appendChild(str);
        this.multiple_pictures('qualifications_pic', data);
    }

    // 结算规则 优惠费率活动ID
    this.activities_id = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'discount_rate_id');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'discount_rate_id');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '优惠费率活动的ID值点击查看<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-8" target="_blank">优惠费率活动对照表</a>下的活动费率ID一栏，如，示例值：20191030111cff5b5e<br>';
        div.appendChild(divInnerText);
    }

    // 结算规则 优惠费率活动值
    this.activities_rate = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'activities_rate_id');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'activities_rate_id');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        divInnerText.innerHTML = '优惠费率活动值，服务商自定义填写，需在优惠费率活动ID指定费率0.2~0.6范围内，如，示例值：0.6';
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        div.appendChild(divInnerText);
        div.appendChild(div_hr);
        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_three');
        divPrev.innerHTML += this.prev_next();
        application_list_one.appendChild(divPrev);
        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        li[0].onclick = function () {
            subject_boolean = false;
            ManagementInformation();
        }
        li[2].onclick = function () {
            subject_boolean = false;
            SettlementAccount();
        }

        if (subject_boolean == true) {
            divPrev.style.display = 'none';
        }
    }


    // 结算账户 账户类型
    this.bank_account_type = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_settlement_bank_account_type');
        application_list_one.appendChild(div);
        div.innerHTML += this.matation_title('结算账户'); // 最上面的那title;
        var div = document.createElement("div");
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        div.setAttribute('id', 'matation_form_item_bank_account_type');
        application_list_one.appendChild(div);
        var str = '';

        var dom = 'matation_form_item_bank_account_type';
        if (subject_type == 'SUBJECT_TYPE_ENTERPRISE') { // 企业类型
            str = '你是企业，请务必填写开户名为商户名称的对公银行账户';
            data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
            div.innerHTML += this.createTitleTop_no_hr('法定代表人/个体户经营者证件', str);
            this.input_box_id_card_account(data, dom, subject_type); // 渲染的是账户类型和右边的框；
        }
        if (subject_type == 'SUBJECT_TYPE_INSTITUTIONS') { // 党政机关类型
            str = '你是党政、机关及事业单位，请务必填写开户名为商户名称的对公银行账户';
            data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
            div.innerHTML += this.createTitleTop_no_hr('法定代表人/个体户经营者证件', str);
            this.input_box_id_card_account(data, dom, subject_type); // 渲染的是账户类型和右边的框；
        }
        if (subject_type == 'SUBJECT_TYPE_OTHERS') { // 其他组织类型
            str = '你是其他组织，请务必填写开户名为商户名称的对公银行账户';
            data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
            div.innerHTML += this.createTitleTop_no_hr('法定代表人/个体户经营者证件', str, );
            this.input_box_id_card_account(data, dom, subject_type); // 渲染的是账户类型和右边的框；
        }
        if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL') { // 个人类型
            str = '你选择的是法人账户，请务必填写开户名为法人的银行账户';
            div.innerHTML += this.createTitleTop_no_hr('法定代表人/个体户经营者证件', str, "geren_leixing_xuanze");
            data.value = 'BANK_ACCOUNT_TYPE_PERSONAL';
            var dom = document.getElementById('matation_form_item_bank_account_type');
            var arr = [{
                name: '法人账户',
                type: true
            }, {
                name: '对公账户',
                type: false
            }];

            var onOff = true;
            var _this = this;
            this.three_syndromes_components(data, "账户类型", arr, dom, function (value) {
                var geren_leixing_xuanze = document.getElementById('geren_leixing_xuanze');
                if (value == false) { // 对公
                    data.value = 'BANK_ACCOUNT_TYPE_CORPORATE';
                    geren_leixing_xuanze.innerHTML = '你选择的是对公账户，请务必填写开户名为商户名称的银行账户';
                } else { // 法人账户
                    data.value = 'BANK_ACCOUNT_TYPE_PERSONAL';
                    geren_leixing_xuanze.innerHTML = '你选择的是法人账户，请务必填写开户名为法人的银行账户';
                }

            }, 'matation_form_zhanghuleixing');
        }






    }

    // 结算账户 开户名称
    this.account_name = function (data, componentNextPro) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_account_name');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_account_name', componentNextPro);
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '';
        if (subject_type == 'SUBJECT_TYPE_ENTERPRISE') { // 企业类型
            str = '开户名称必须与营业执照/登记证书的“商户名称”一致';
        } else if (subject_type == 'SUBJECT_TYPE_INDIVIDUAL') {
            str = '1、选择“经营者个人银行卡”时，开户名称必须与“经营者证件姓名”一致。<br />2、选择“对公银行账户”时，开户名称必须与营业执照/登记证书的“商户名称”一致。';
        }


        if (subject_boolean == false) {
            div.appendChild(divInnerText);
        }


    }

    // 结算账户 开户银行
    this.account_bank = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_account_bank');
        application_list_one.appendChild(div);
        this.banks_public_fn(data, 'matation_form_account_bank');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');

        if (subject_boolean == false) {
            div.appendChild(divInnerText);
        }
        divInnerText.innerHTML = '城市商业银行、农村商业银行、信用合作联社及其他银行,请选择“其他银行”';
        var yinghang_normal_bank_list = document.getElementById('yinghang_normal_bank_list');
        var a = yinghang_normal_bank_list.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            a[i].onclick = function () {
                var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span');
                var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two');
                var common_banks_account_bank = document.getElementById('common_banks_account_bank');
                if (this.children[1].innerHTML != '其他银行') {
                    data.value = this.children[1].innerHTML;
                    common_banks_account_bank_span.firstChild.nodeValue = data.value;
                    common_banks_account_bank_span_two.style.display = 'none';
                    common_banks_account_bank.style.display = 'none';
                    common_banks_account_bank_span.onOff = true;
                    data.other_banks = false;
                } else {
                    common_banks_account_bank_span.firstChild.nodeValue = this.children[1].innerHTML;
                    common_banks_account_bank_span_two.style.display = 'inline-block';
                    common_banks_account_bank.style.display = 'none';
                    common_banks_account_bank_span.onOff = true;
                    data.other_banks = true;
                }
            }
        }
        var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span');
        var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two');
        if (subject_boolean) {
            common_banks_account_bank_span.firstChild.nodeValue = data.value;
        }
        if (subject_boolean && data.other_banks) {
            common_banks_account_bank_span.firstChild.nodeValue = '其他银行';
            common_banks_account_bank_span_two.style.display = 'inline-block';
            common_banks_account_bank_span_two.disabled = true;
            common_banks_account_bank_span_two.value = data.value;
            common_banks_account_bank_span_two.border = 'none';
            common_banks_account_bank_span_two.style.cssText = "background:#ffffff;border:1px solid transparent";
        }


    }


    // 开户银行下面具体的银行
    this.banks_str_innerHtml = function (data, nextProx) {
        var str = '<div id="common_banks_account_bank">' +
            '<div class="bankpicker-list">' +
            '<div class="section-box">' +
            '<div class="section-tab">' +
            '<ul id="pinyinList" class="clr clear_float">' +
            '<li class="pinyinLi noHideBank selected" pinyingroup="normal">' +
            '<a href="javascript:;" class="noHideBank_a">常见银行</a>' +
            '<span></span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div class="section-cnt noHideBank">' +
            '<div class="bank-comm clr noHideBank" id="yinghang_normal_bank_list">' +
            '<a bankid="102" bankname="中国工商银行" cft_bank_code="1002" bank_property="7" class="" title="中国工商银行" href="javascript:;"><span class="bank-logo-s bank-s-icbc"></span><span>中国工商银行</span></a>' +
            '<a bankid="103" bankname="中国农业银行" cft_bank_code="1005" bank_property="7" class="" title="中国农业银行" href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>中国农业银行</span></a>' +
            '<a bankid="104" bankname="中国银行" cft_bank_code="1026" bank_property="7" class="" title="中国银行" href="javascript:;"><span class="bank-logo-s bank-s-boc"></span><span>中国银行</span></a>' +
            '<a bankid="105" bankname="中国建设银行" cft_bank_code="1003" bank_property="7" class="" title="中国建设银行" href="javascript:;"><span class="bank-logo-s bank-s-ccb"></span><span>中国建设银行</span></a>' +
            '<a bankid="301" bankname="交通银行" cft_bank_code="1020" bank_property="7" class="" title="交通银行" href="javascript:;"><span class="bank-logo-s bank-s-comm"></span><span>交通银行</span></a>' +
            '<a bankid="302" bankname="中信银行" cft_bank_code="1021" bank_property="7" class="" title="中信银行" href="javascript:;"><span class="bank-logo-s bank-s-citic"></span><span>中信银行</span></a>' +
            '<a bankid="303" bankname="中国光大银行" cft_bank_code="1022" bank_property="7" class="" title="中国光大银行" href="javascript:;"><span class="bank-logo-s bank-s-ceb"></span><span>中国光大银行</span></a>' +
            '<a bankid="304" bankname="华夏银行" cft_bank_code="1025" bank_property="5" class="" title="华夏银行" href="javascript:;"><span class="bank-logo-s bank-s-hxb"></span><span>华夏银行</span></a>' +
            '<a bankid="305" bankname="中国民生银行" cft_bank_code="1006" bank_property="7" class="" title="中国民生银行" href="javascript:;"><span class="bank-logo-s bank-s-cmbc"></span><span>中国民生银行</span></a>' +
            '<a bankid="306" bankname="广发银行" cft_bank_code="1027" bank_property="5" class="" title="广发银行" href="javascript:;"><span class="bank-logo-s bank-s-gdb"></span><span>广发银行</span></a>' +
            '<a bankid="307" bankname="平安银行" cft_bank_code="1010" bank_property="7" class="" title="平安银行" href="javascript:;"><span class="bank-logo-s bank-s-pab"></span><span>平安银行</span></a>' +
            '<a bankid="308" bankname="招商银行" cft_bank_code="1001" bank_property="7" class="" title="招商银行" href="javascript:;"><span class="bank-logo-s bank-s-cmb"></span><span>招商银行</span></a>' +
            '<a bankid="309" bankname="兴业银行" cft_bank_code="1009" bank_property="7" class="" title="兴业银行" href="javascript:;"><span class="bank-logo-s bank-s-cib"></span><span>兴业银行</span></a>' +
            '<a bankid="310" bankname="上海浦东发展银行" cft_bank_code="1004" bank_property="7" class="" title="上海浦东发展银行" href="javascript:;"><span class="bank-logo-s bank-s-spdb"></span><span>上海浦东发展银行</span></a>' +
            '<a bankid="325" bankname="上海银行" cft_bank_code="1024" bank_property="5" class="" title="上海银行" href="javascript:;"><span class="bank-logo-s bank-s-bosh"></span><span>上海银行</span></a>' +
            '<a bankid="403" bankname="中国邮政储蓄银行" cft_bank_code="1066" bank_property="7" class="" title="中国邮政储蓄银行" href="javascript:;"><span class="bank-logo-s bank-s-psbc"></span><span>中国邮政储蓄银行</span></a>' +
            '<a bankid="501" bankname="汇丰银行（中国）" cft_bank_code="1099" bank_property="4" class="" title="汇丰银行（中国）" href="javascript:;"><span class="bank-logo-s bank-s-hsbc"></span><span>汇丰银行（中国）</span></a>' +
            '<a bankid="3130001" bankname="北京银行" cft_bank_code="4836" bank_property="7" class="" title="北京银行" href="javascript:;"><span class="bank-logo-s bank-s-bob"></span><span>北京银行</span></a>' +
            '<a bankid="3130007" bankname="宁波银行" cft_bank_code="1056" bank_property="7" class="" title="宁波银行" href="javascript:;"><span class="bank-logo-s bank-s-nbcb"></span><span>宁波银行</span></a>' +
            ' <a bankid="0" bankname="其他银行" cft_bank_code="0" bank_property="0" class="green" title="其他银行" href="javascript:;"><span class="bank-logo-s bank-s-rcb"></span><span>其他银行</span></a>' +
            '</div>' +
            '<div id="pinyinBankList"> </div>' +
            '<div class="bank-tips noHideBank">城市商业银行、农村商业银行、信用合作联社及其他银行，请选择“其他银行”</div>' +
            '</div>' +
            '<a class="ico-cls" href="javascript:;" title="关闭" id="yinghang_normal_bank_list_close"></a>' +
            '</div>' +
            '</div>' +
            '</div>'
        return str;
    }

    // 登记证书 证书类型
    this.cert_type_innnerHTML = function () {
        var str = '<div id="common_zhengjian_leixing_type">' +
            '<div class="bankpicker-list">' +
            '<div class="section-box">' +
            '<div class="section-tab">' +
            '<ul id="pinyinLists" class="clr clear_float">' +
            '<li class="pinyinLi noHideBank selected" pinyingroup="normal">' +
            '<a href="javascript:;" class="noHideBank_a">证件类型</a>' +
            '<span></span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div class="section-cnt noHideBank">' +
            '<div class="bank-comm clr noHideBank" id="zhengjia_type_list_leixing">' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-icbc"></span><span>事业单位法人证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>统一社会信用代码证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>有偿服务许可证（军队医院适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>医疗机构执业许可证（军队医院适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>企业营业执照（挂靠企业的党组织适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>组织机构代码证（政府机关适用）</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>社会团体法人登记证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>民办非企业单位登记证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>基金会法人登记证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>慈善组织公开募捐资格证书</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>农民专业合作社法人营业执照</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>宗教活动场所登记证</span></a>' +
            '<a href="javascript:;"><span class="bank-logo-s bank-s-abc"></span><span>其他证书/批文/证明</span></a>' +
            '</div>' +
            '<div class="bank-tips noHideBank"></div>' +
            '</div>' +
            '<a class="ico-cls" href="javascript:;"  id="dengji_zhengshu_list_close" title="关闭"></a>' +
            '</div>' +
            '</div>' +
            '</div>'
        return str;
    }

    // 开户银行省市编号
    this.bank_address_code = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_bank_address_code');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_bank_address_code');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '至少精确到市，详细参见<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-5" target="_blank">省市区编号对照表</a>。<span class="green">示例值：110000 </span>';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
    }

    // 开户银行 开户银行联行号 
    this.bank_branch_id = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_bank_branch_id');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_bank_branch_id');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '1、开户银行全称（含支行）和开户银行联行号二选一填写。<br />2、开户银行联行号，详细参见<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-6" target="_blank">开户银行全称（含支行）对照表</a>。示例值：402713354941';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
    }

    // 开户银行 开户银行全称（含支行)
    this.bank_name = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_bank_name');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_bank_name');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = ' 1、需填写银行全称，如"深圳农村商业银行XXX支行"，开户银行全称，详细参见<a href="https://pay.weixin.qq.com/wiki/doc/apiv3_partner/terms_definition/chapter1_1_3.shtml#part-6" target="_blank">开户银行全称（含支行）对照表</a>。<br><span class="green">示例值：施秉县农村信用合作联社城关信用社 </span>';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
    }

    // 开户银行 银行账户
    this.account_number = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_account_number');
        application_list_one.appendChild(div);
        this.input_box_id_card_yinghao_number(data, 'matation_form_account_number');
        var divInnerText = document.createElement('span');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '<a href="https://kf.qq.com/faq/140225MveaUz150819mYFjuE.html" target="_blank">常用银行账号位数参考</a>';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        var inputs = div.getElementsByTagName('input')[0];

        var span = document.createElement('span');
        div.appendChild(span);
        span.setAttribute('class', 'matation_span');
        span.style.display = 'none';
        inputs.oninput = function () {
            var str_input = this.value;
            if (str_input.length > 0) {
                span.style.display = 'block';
            }
            var len = parseInt(this.value.length / 4) + 1;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(str_input.slice(i * 4, (i + 1) * 4));
            }
            var str_arr = arr.join(' ');
            console.log(str_arr);
            span.innerHTML = str_arr;
        }
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        div.appendChild(divInnerText);
        div.appendChild(div_hr);
        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_four');
        divPrev.innerHTML += this.prev_next();
        application_list_one.appendChild(divPrev);
        //  保存并下一步
        var li = divPrev.getElementsByTagName('li');
        li[0].onclick = function () {
            subject_boolean = false;
            Settlementrules();
        }
        li[2].onclick = function () {
            subject_boolean = false;
            SuperAdmin();
        }
        if (subject_boolean == true) {
            divPrev.style.display = 'none';
        }







    }

    // 这个方法主要是针对dom的移除和添加设置公共方法；和input_box；相似。身份证姓名和身份证号码的方法
    this.input_box_id_card = function (data, dom, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);

        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '30px';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
        }



        input.onblur = function () {
            data.value = input.value ? input.value : "";
            //  console.log(data)
            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                p.style.display = 'none';
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }
            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            p.style.display = 'none';
        }
    }

    // 开户银行 银行账号 
    this.input_box_id_card_yinghao_number = function (data, dom, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        console.log(organization_code_certificate)
        organization_code_certificate.appendChild(div);

        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '30px';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
        }


        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var span = organization_code_certificate.getElementsByTagName('span')[0];
            span.style.display = 'none';
            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                p.setAttribute("isNext", "nextStep");
                return;
            } else {
                if (p.hasAttribute('isNext')) {
                    p.removeAttribute("isNext");
                }

            }

            if (componentNextPro) {
                componentNextPro(data);
            }

        }
        input.onfocus = function () {
            p.style.display = 'none';
            var span = organization_code_certificate.getElementsByTagName('span')[0];
            if (data.value.length > 0) {
                span.style.display = 'block';
            }

        }
    }



    // 对公账户右边信息
    this.input_box_id_card_account = function (data, dom, subject_type) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        if (subject_boolean) {
            div.style.paddingLeft = '30px';
        }
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        div.appendChild(label);
        if (subject_type != 'SUBJECT_TYPE_INDIVIDUAL') {
            var span = document.createElement("span");
            span.className = "span_public";
            div.appendChild(span);
            span.innerHTML = '对公账户';
            span.style.cssText = ' position: absolute;top:-3px';
        }
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
    }


    // 超级管理员信息
    this.contact_name = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_settlement_contact_name');
        application_list_one.appendChild(div);
        div.innerHTML += this.matation_title('超级管理员'); // 最上面的那title;
        var div = document.createElement("div");
        var p = document.createElement('p');
        var pTwo = document.createElement('p');
        p.setAttribute('class', 'rotate_p');
        pTwo.setAttribute('class', 'rotate_p_Two');
        div.setAttribute('id', 'matation_form_contact_name');
        application_list_one.appendChild(div);
        var str = null;
        if (subject_boolean == false) {
            var str = "超级管理员信息<span style='color:#999;font-size:12px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;超级管理员将接收开户信息及日常重要管理信息，并可进行商户号的日常重要管理及资金操作，请确定超级管理为商户法定代表人或负责人再进行操作。</span>";

        } else {
            var str = "超级管理员信息";
        }


        div.innerHTML += this.createTitleTop_no_tubiao(str);
        this.input_box_id_card(data, 'matation_form_contact_name');
        var input = div.getElementsByTagName('input')[0];
        input.style.width = '300px';
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '超级管理员姓名与微信实名信息需一致。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);

        //  超级管理员资料类型选择
        var dom = document.getElementById('matation_form_contact_name');
        var arr = [{
            name: '证件号码',
            type: true
        }, {
            name: '微信openid',
            type: false
        }];

        var onOff = true;

        this.three_syndromes_components(data, "超级管理员资料  类型", arr, dom, function (value) {
            onOff = value;
            var matation_form_contact_id_number = document.getElementById('matation_form_contact_id_number');
            var matation_form_contact_openid = document.getElementById('matation_form_contact_openid');
            if (onOff == true) {
                matation_form_contact_id_number.style.display = 'block';
                matation_form_contact_openid.style.display = 'none';
            } else {
                matation_form_contact_id_number.style.display = 'none';
                matation_form_contact_openid.style.display = 'block';
            }

        }, 'matation_form_chaoji_guanli');





    }


    // 超级管理员 身份证件号码 
    this.contact_id_number = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_contact_id_number');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_contact_id_number');
        var divInnerTexts = document.createElement('div');
        divInnerTexts.setAttribute('class', 'tips-info');
        var str = '请填写超级管理员的证件号码，可传身份证，来往内地通行证、护照等证件号码。';
        divInnerTexts.innerHTML = str;
        div.appendChild(divInnerTexts);
    }

    // 超级管理员微信openid
    this.openid = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_contact_openid');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_contact_openid');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '微信号要与该微信openid一致。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        div.style.display = "none";
    }

    // 超级管理员联系手机
    this.mobile_phone = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_mobile_phone');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_mobile_phone');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '用于接收微信支付的重要管理信息及日常操作验证码。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
    }

    // 超级管理员联系邮箱
    this.contact_email = function (data) {
        var div = document.createElement('div');
        div.setAttribute('id', 'matation_form_contact_email');
        application_list_one.appendChild(div);
        this.input_box_id_card(data, 'matation_form_contact_email');
        var divInnerText = document.createElement('div');
        divInnerText.setAttribute('class', 'tips-info');
        var str = '用于接收微信支付的开户邮件及日常业务通知。';
        divInnerText.innerHTML = str;
        div.appendChild(divInnerText);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        div.appendChild(divInnerText);
        div.appendChild(div_hr);
        var divPrev = document.createElement('div');
        divPrev.className = 'matation_form_div_prev';
        divPrev.setAttribute('id', 'matation_form_div_pren_five');
        divPrev.innerHTML += this.prev_next();
        application_list_one.appendChild(divPrev);
        var li = divPrev.getElementsByTagName('li');
        var preview_all_information = document.getElementById('preview_all_information');
        li[0].onclick = function () {
            subject_boolean = false;
            SettlementAccount();
        }
        li[2].onclick = function () {
            preview_all_information.click()
        }
        if (subject_boolean == true) {
            divPrev.style.display = 'none';
        }

    }




    // 生成点击选项公共的方法
    this.three_syndromes_component = (data, caption, arr, dom, nextPro) => {
        let ul = document.createElement("ul");
        let labelCaption = document.createElement("label");
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.appendChild(labelCaption);
        ul.appendChild(div);
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var radios = null;
            if (arr[i].types) {
                radios = arr[i].types
            } else {
                radios = 'radio';
            }

            str += '<li>' +
                '<div class="label_three_syndromes">' +
                '<label class="labelone_three_syndromes">' +
                '<input type="radio" name=\'' + radios + '\' class="radioSelect">' +
                '<span></span>' +
                '<i>' + arr[i].name + '</i>' +
                '</label>' +
                '</div>' +
                '</li>';
        }

        if (subject_boolean) {
            console.log(subject_boolean)
            // div.innerHTML = data.value;
        } else {
            div.innerHTML = str;
            var inputs = ul.getElementsByTagName('input');
            inputs[0].checked = true;
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].onchange = function () {
                    nextPro(arr[i].type)
                }
            }

        }

        if (subject_boolean) {
            ul.style.paddingLeft = '30px';
        }


        dom.appendChild(ul);

    }


    // 生成复选框选项的公共方法
    this.three_syndromes_components = (data, caption, arr, dom, nextPro, ids) => {
        let ul = document.createElement("ul");
        ul.className = 'publick_checked_list';
        ul.setAttribute('id', ids);
        let labelCaption = document.createElement("label");
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.appendChild(labelCaption);

        ul.appendChild(div);

        //     application_list_one_ul_li_div
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var radios = null;
            if (arr[i].types) {
                radios = arr[i].types
            } else {
                radios = 'radio';
            }

            str += '<li>' +
                '<div class="label_three_syndromes">' +
                '<label class="labelone_three_syndromes">' +
                '<input type="radio" name=\'' + radios + '\' class="radioSelect">' +
                '<span></span>' +
                '<i>' + arr[i].name + '</i>' +
                '</label>' +
                '</div>' +
                '</li>';
        }


        if (subject_boolean == true) {
            ul.style.paddingLeft = '30px';
        }


        div.innerHTML += str;







        dom.appendChild(ul);



        ul.innerHTML += '<i class="ico-msg-s" id="ico-msg-s_ask"></i>';
        var str2 = '<div class="popup pop-left pos-top ng-hide" id="popup_ask" style="display:none">' +
            '<div class="inner">' +
            '<p class="ng-binding ng-scope">根据国家相关法律法规，您需要提供公司受益所有人信息。受益所有人需符合至少以下条件之一：1. 直接或者间接拥有超过25%公司股权或者表决权的自然人；2. 通过人事、财务等其他方式对公司进行控制的自然人；3. 公司的高级管理人员，包括公司的经理、副经理、财务负责人，上市公司董事会秘书和公司章程规定的其他人员</p>' +
            '</div>' +
            '<p class="rotate_p"></p><p class="rotate_p_Two"></p>' +
            '</div>'
        ul.innerHTML += str2;


        var inputs = ul.getElementsByTagName('input');
        inputs[0].checked = true;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                nextPro(arr[i].type);
            }
        }

        var ico_msg_s_ask = document.getElementById('ico-msg-s_ask');
        var popup_ask = document.getElementById('popup_ask');


        ico_msg_s_ask.onmousemove = function () {
            popup_ask.style.display = 'block';
        }
        ico_msg_s_ask.onmouseout = function () {
            popup_ask.style.display = 'none';
        }

        if (caption == '是否为受益所有人') {
            var div_hr = document.createElement('div');
            div_hr.setAttribute('class', 'public_hrs');
            dom.appendChild(div_hr);
        }

        caption = caption.replace(/\s+/g, '');
        if (caption == '超级管理员资料类型') {
            ico_msg_s_ask.style.display = 'none';
            var divInnerTexts = document.createElement('div');
            divInnerTexts.setAttribute('class', 'tips-info');
            var str = '证件号码和微信openid二选一必填。';
            divInnerTexts.innerHTML = str;
            ul.appendChild(divInnerTexts);
            divInnerTexts.style.paddingTop = 0;
            divInnerTexts.style.marginTop = '-15px';
            if (subject_boolean) {
                ul.style.display = 'none';
            }
        }

        var popup_ask = document.getElementById('popup_ask');
        var popup_ask_p = popup_ask.getElementsByTagName('p');
        ico_msg_s_ask.onmousemove = function () {
            var rectObject_top = this.getBoundingClientRect().bottom;
            var windowH = window.innerHeight;
            if (windowH - rectObject_top < popup_ask.offsetHeight) {
                console.log(1)
                console.log(popup_ask_p[1])
                popup_ask.style.top = '-180px';
                popup_ask.style.position = 'absolute';
                popup_ask_p[1].style.top = '195px';
                popup_ask_p[2].style.top = '184px';
            } else {
                console.log(2)
                popup_ask.style.position = 'absolute';
                popup_ask.style.top = '-18px';
                popup_ask_p[1].style.top = '35px';
                popup_ask_p[2].style.top = '23px';
            }
            popup_ask.style.display = 'block';
        }
        ico_msg_s_ask.onmouseout = function () {
            popup_ask.style.display = 'none';
        }




    }

    // 开户银行专有的方法
    this.banks_public_fn = function (data, dom) {
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        p.setAttribute('id', 'common_banks_account_bank_p');
        label.innerText = data.caption;
        var spans = document.createElement("span");
        var spans_two = document.createElement("input");
        spans.innerText = '请选择';
        spans.className = "span_public";
        spans_two.className = "span_public";
        spans.setAttribute('id', 'common_banks_account_bank_span');
        spans_two.setAttribute('id', 'common_banks_account_bank_span_two');
        spans_two.placeholder = '请输入开户银行名称';
        spans_two.style.display = 'none';
        var i = document.createElement('i');
        i.className = 'triangle_banks';
        var i_two = document.createElement('i');
        i_two.className = 'triangle_banks';
        spans.appendChild(i);
        spans_two.appendChild(i_two);
        div.appendChild(label);
        div.appendChild(spans);
        div.appendChild(spans_two);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
        div.innerHTML += this.banks_str_innerHtml(data);
        var common_banks_account_bank = document.getElementById('common_banks_account_bank');
        common_banks_account_bank.style.display = 'none';
        var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span');
        var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two');
        var common_banks_account_bank_p = document.getElementById('common_banks_account_bank_p');
        common_banks_account_bank_span.onOff = true;
        yinghang_normal_bank_list_close = document.getElementById('yinghang_normal_bank_list_close');
        yinghang_normal_bank_list_close.onclick = function () {
            common_banks_account_bank.style.display = 'none';
            common_banks_account_bank_span.onOff = true;
        }
        common_banks_account_bank_span.onclick = function () {
            if (subject_boolean == false) {
                if (this.onOff) {
                    common_banks_account_bank.style.display = 'block';
                } else {
                    common_banks_account_bank.style.display = 'none';
                }
                this.onOff = !this.onOff;
            }

        }




        common_banks_account_bank_span_two.onblur = function () {
            data.value = common_banks_account_bank_span_two.value;
            let a = data.verification_method();
            if (a) {
                common_banks_account_bank_p.style.display = 'block';
                common_banks_account_bank_p.innerHTML = a;
            }
        }

        common_banks_account_bank_span_two.onfocus = function () {
            common_banks_account_bank_p.style.display = 'none';
        }

        if (subject_boolean) {
            div.style.paddingLeft = '30px';
        }



    }


    // 登记证书 选择证件类型专有方法
    this.zhengshu_public_fn = function (data, dom) {
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        p.setAttribute('id', 'common_banks_account_bank_p');
        label.innerText = data.caption;
        var spans = document.createElement("span");
        var spans_two = document.createElement("input");
        spans.innerText = '请选择';
        spans.className = "span_public";
        spans_two.className = "span_public";
        spans.setAttribute('id', 'common_banks_account_bank_span');
        spans_two.setAttribute('id', 'common_banks_account_bank_span_two');
        spans_two.placeholder = '请输入开户银行名称';
        spans_two.style.display = 'none';
        var i = document.createElement('i');
        i.className = 'triangle_banks';
        var i_two = document.createElement('i');
        i_two.className = 'triangle_banks';
        spans.appendChild(i);
        spans_two.appendChild(i_two);
        div.appendChild(label);
        div.appendChild(spans);
        div.appendChild(spans_two);
        div.appendChild(p);
        var organization_code_certificate = document.getElementById(dom);
        organization_code_certificate.appendChild(div);
        div.innerHTML += this.banks_str_innerHtml(data);
        var common_banks_account_bank = document.getElementById('common_banks_account_bank');
        common_banks_account_bank.style.display = 'none';
        var common_banks_account_bank_span = document.getElementById('common_banks_account_bank_span');
        var common_banks_account_bank_span_two = document.getElementById('common_banks_account_bank_span_two');
        var common_banks_account_bank_p = document.getElementById('common_banks_account_bank_p');
        common_banks_account_bank_span.onOff = true;
        yinghang_normal_bank_list_close = document.getElementById('yinghang_normal_bank_list_close');
        yinghang_normal_bank_list_close.onclick = function () {
            common_banks_account_bank.style.display = 'none';
            common_banks_account_bank_span.onOff = true;
        }
        common_banks_account_bank_span.onclick = function () {
            if (this.onOff) {
                common_banks_account_bank.style.display = 'block';
            } else {
                common_banks_account_bank.style.display = 'none';
            }
            this.onOff = !this.onOff;
        }

        common_banks_account_bank_span_two.onblur = function () {
            data.value = common_banks_account_bank_span_two.value;
            let a = data.verification_method();
            if (a) {
                common_banks_account_bank_p.style.display = 'block';
                common_banks_account_bank_p.innerHTML = a;
            }
        }

        common_banks_account_bank_span_two.onfocus = function () {
            common_banks_account_bank_p.style.display = 'none';
        }


    }


    // 头部的方法 有副标题
    this.createTitleTop = function (str1, str2) {
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>" + str2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 头部的方法 没有那个图标
    this.createTitleTop_no_tubiao = function (str) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str + "</h4>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }


    // 头部的方法 有副标题
    this.createTitleTop_no_hr = function (str1, str2, ids) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding' id=\"" + ids + "\">" + str2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 头部方法，没有副标题
    this.createTitleTopTwo = function (str1) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='data-hd'>" +
            "<h4 class='fl ng-binding'>" + str1 + "</h4>" +
            "</div>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-cnt'>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }

    // 只有一个副标题的公共方法
    this.createSubtitle = function (str1) {
        var str = "<div class='form-item_children'>" +
            "<div class='application_phone'>" +
            "<div class='inner ng-scope'>" +
            "<div class='msg-ico'><i class='ico-msg-s info'></i></div>" +
            "<div class='msg-cnt'>" +
            "<p class='ng-binding'>" + str1 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        return str;
    }




    // 生成单张上传图片信息的方法
    this.createTitleTopAndImg = function (data, str1, str2, domID, str3) {
        var div = document.createElement("div");
        // console.log(str_three,data.caption)
        // var  str3 = str_three ? str_three : '请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）';
        div.setAttribute('class', 'common_header_method');
        div.setAttribute('id', domID);
        var str = '<div class="createTitleTopAndImg_top">' +
            '<label class = "labels ng-binding">' + str1 + '</label>' +
            '<div class="application_phone_div">' +
            '<a href="javascript:;" class="a-upload"><input type="file" name="" class="input_updata" id=""><span>上传</span></a >' +
            // '<a href="javascript:;" style="display:none" class="a-upload"><input type="file" name="" class="input_updata" id="">重新上传</a>' +
            '<div class="upload-tips">' + str3 + '</div>' +
            '</div>' +
            '<ul class="application_list_one_ul_childer">' +
            // '<li>' +
            // '<img src="">' +
            // '<a href="javascript:;" class="del">删除</a>' +
            // '</li>' +
            '</ul>' +
            '<p class="text-error">' + str2 + '</p>' +
            '<p class="text-error">请上传2M内的彩色图片，格式可为bmp、png、jpg</p>';
        div.innerHTML = str;
        return div;
    }

    // 多张图片上传的公共方法
    this.create_multiple_pictures = function (str1, str2, str3, domID) {
        var div = document.createElement("div");
        div.setAttribute('class', 'common_header_method');
        div.setAttribute('id', domID);
        div.style.overflow = 'hidden';
        if (subject_boolean) {
            div.style.paddingLeft = '30px';
        }
        var str = '<div class="createTitleTopAndImg_top">' +
            '<label class = "labels ng-binding">' + str1 + '</label>' +
            '<div class="application_phone_div">' +
            '<a href="javascript:;" class="a-upload"><input type="file" multiple="multiple" class="input_updata"  id=""><span>上传</span></a >' +
            // '<a href="javascript:;" style="display:none" class="a-upload"><input type="file" name="" id="">重新上传</a>' +
            '<div class="upload-tips" id="duozhangtupiande_shangchuan">' + str3 + '</div>' +
            '</div>' +
            '<ul class="application_list_one_ul_childer">' +
            // '<li>' +
            // '<img src="">' +
            // '<a href="javascript:;" class="del">删除</a>' +
            // '</li>' +
            '</ul>' +
            '<p class="text-error">' + str2 + '</p>' +
            '<p class="text-error">请上传2M内的彩色图片，格式可为bmp、png、jpg</p>' +
            '<p class="text-error">最多只能上传5张图片</p>' +
            '<p class="text-error">系统出现错误</p>';
        div.innerHTML = str;
        return div;
    }


    // 生成有效期开始时间公共方法
    this.validity_start_time = function (data, componentNextPro, idChildren, idParent, strs, idP) {
        var idChildrens = idChildren + '_input';
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<label class='lable_lefts_time'>" + strs + "</label>" +
            "<div class='col-sm-6 col-sm_time'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id=\"" + idChildren + "\">" +
            "<input type='text' id=\"" + idChildrens + "\" class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<i class='col-sm_time_i'>至</i>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById(idParent);
        console.log(organization_code_certificate)
        organization_code_certificate.appendChild(div);
        $('#' + idChildren).datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        if (subject_boolean == true) {
            console.log(input);
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '30px';
        }
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            var text_errors_timeone = document.getElementById(idP);
            data.value = input.value ? input.value : "";
            var a = data.verification_method();

            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
                input.setAttribute('isnext', 'nextStep');
            } else {
                text_errors_timeone.style.display = 'none';
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                }
            }

            if (componentNextPro) {

                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            text_errors_timeone.style.display = 'none';
        }

    }


    // 生成有效期结束时间公共方法
    this.validity_end_time = function (data, componentNextPro, idChildren, idParent, idp) {
        var idChildrens = idChildren + '_input'
        var div = document.createElement("div");
        div.className = 'application_list_one_ul_li_divs';
        var str = "<div class='col-sm-6'>" +
            "<div class='form-group'>" +
            "<div class='input-group date' id=\"" + idChildren + "\">" +
            "<input type='text' class='form-control' />" +
            "<span class='input-group-addon'>" +
            "<span class='glyphicon glyphicon-calendar'></span>" +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        var organization_code_certificate = document.getElementById(idParent);
        organization_code_certificate.appendChild(div);
        $('#' + idChildren).datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];
        var p1 = document.createElement('p');
        p1.setAttribute('id', idp);
        p1.className = "text-errors_timeone";
        organization_code_certificate.appendChild(p1);
        var p2 = document.createElement('p');
        p2.className = "text-errors_timetwo";
        organization_code_certificate.appendChild(p2);
        if (subject_boolean == true) {
            console.log(input);
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
        }
        if (data.value) {
            input.value = data.value;
        }
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                p2.style.display = 'block';
                p2.innerHTML = a;
                input.setAttribute('isnext', 'nextStep');
            } else {
                p2.innerHTML = '';
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                }
            }
            if (componentNextPro) {
                componentNextPro(data);

            }
        }
        input.onfocus = function () {
            //  p2.style.display = 'none';
            p2.innerHTML = '';
        }

    }

    // 上传单张图片验证的公共方法
    this.publicImgUupData = function (dom, data) {
        var yingyezhizhao = document.getElementById(dom);
        //  var aA = yingyezhizhao.getElementsByTagName('a');
        var inputs = yingyezhizhao.getElementsByTagName('input');
        var ul = yingyezhizhao.getElementsByTagName('ul')[0];
        var p = yingyezhizhao.getElementsByTagName('p');
        var span = yingyezhizhao.getElementsByTagName('span')[0];
        // var img = ul.getElementsByTagName('img')[0];
        // var li = ul.getElementsByTagName('li')[0];
        //li.style.display = 'none';
        p[0].style.display = 'none';
        p[1].style.display = 'none';

        if (subject_boolean) {
            yingyezhizhao.style.paddingLeft = '30px';
        }

        inputs[0].onchange = function () {
            var file = this.files[0];
            if (!file) {
                p[0].style.display = 'block';
                inputs[0].setAttribute('isnext', 'nextStep');
                return;
            }

            var sizeImg = file.size;
            if (sizeImg > 1024 * 1024 * 2) {
                p[1].style.display = 'block';
                inputs[0].setAttribute('isnext', 'nextStep');
                return;
            } else {
                p[0].style.display = 'none';
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (ev) {
                var li = document.createElement('li');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.setAttribute('class', 'del');
                img.src = ev.target.result;
                ul.innerHTML = '';
                ul.appendChild(li);
                li.appendChild(img);
                li.appendChild(a);
                data.value = file;
                img.src = ev.target.result;
                span.innerHTML = '重新上传';
                p[0].style.display = 'none';
                p[1].style.display = 'none';

                if (inputs[0].hasAttribute('isnext')) {
                    inputs[0].removeAttribute('isnext');
                }
                li.onmousemove = function () {
                    a.style.display = 'block';
                    a.onclick = function () { // 单张图片的删除
                        li.remove();
                        p[0].style.display = 'block';
                        data.value = "";
                        console.log(data.value);
                    }
                }
                li.onmouseout = function () {
                    a.style.display = 'none';
                }





            }

        }


        if (data.value) {
            var file = data.value;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (ev) {
                var li = document.createElement('li');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.setAttribute('class', 'del');
                img.src = ev.target.result;
                ul.appendChild(li);
                li.appendChild(img);
                li.appendChild(a);
                data.value = file;
                img.src = ev.target.result;
                span.innerHTML = '重新上传';
                p[0].style.display = 'none';
                p[1].style.display = 'none';
                if (p[0].hasAttribute('isnext')) {
                    p[0].removeAttribute('isnext');
                }
                if (p[1].hasAttribute('isnext')) {
                    p[1].removeAttribute('isnext');
                }
            }

        }


        if (subject_boolean) {
            aA[0].remove();
            ul.style.paddingLeft = '0px';
            a.remove();
        }




    }



    // 多图片上传
    this.multiple_pictures = function (dom, data) {
        var parentId = document.getElementById(dom);
        var _this = this;
        var ul_ul = parentId.getElementsByTagName('ul')[0];
        var input = parentId.getElementsByTagName('input')[0];
        var span_span = parentId.getElementsByTagName('span')[0];
        var p_p = parentId.getElementsByTagName('p');
        ul_ul.innerHTML = '';
        p_p[0].style.display = 'none';
        p_p[1].style.display = 'none';
        p_p[2].style.display = 'none';
        p_p[3].style.display = 'none';
        ul_ul.innerHTML = '';
        var arr = [];
        arr = data.value ? data.value : [];
        data.value = data.value ? data.value : [];
        input.onchange = function () {
            var that = this;
           
            _this.onchangePic(that, data, arr, ul_ul, span_span, p_p,input);
        }

        if (data.value && data.value.length > 0) {
            for (let i = 0; i < data.value.length; i++) {
                var file = data.value[i];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (ev) {
                    var li = document.createElement('li');
                    var img = document.createElement('img');
                    var a = document.createElement('a');
                    a.setAttribute('class', 'del');
                    img.src = ev.target.result;
                    ul_ul.appendChild(li);
                    li.appendChild(img);
                    li.appendChild(a);
                    var lis = null;
                    li.onmousemove = function () {
                        a.style.display = 'block';
                        lis = ul_ul.children;
                        for (let j = 0; j < lis.length; j++) {
                            var a_a = lis[j].children[1];
                            a_a.onclick = function () {
                                arr.splice(j, 1);
                                data.value = arr;
                                this.parentNode.remove();
                            }
                        }
                    }
                    li.onmouseout = function () {
                        a.style.display = 'none';
                    }
                }
            }

        }
    }


    //多图片上传onchange后的方法
    this.onchangePic = function (that, data, arr, ul, span, p,input) {

        span.innerText = '继续上传';
        var files = that.files;
        var num = 0;
        if(files.length==0){
            p[0].style.display = 'block';
            input.setAttribute('isnext', 'nextStep');
            return;
        }
        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            var sizeImg = file.size;
            
            if (sizeImg > 1024 * 1024 * 2) {
                p[1].style.display = 'block';
                input.setAttribute('isnext', 'nextStep');
                return;
            }
            num += 1;
            var len = data.value.length + num;
            if (len > 5) {
                p[2].style.display = 'block';
                console.log(input)
                input.setAttribute('isnext', 'nextStep');
                return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onload = function (ev) {
                arr.push(files[i]);
                data.value = arr;
                var li = document.createElement('li');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.setAttribute('class', 'del');
                img.src = ev.target.result;
                ul.appendChild(li);
                li.appendChild(img);
                li.appendChild(a);
                p[0].style.display = 'none';
                p[1].style.display = 'none';
                p[2].style.display = 'none';
                p[3].style.display = 'none';
                var lis = null;
                if (input.hasAttribute('isnext')) {
                    input.removeAttribute('isnext');
                };
                li.onmousemove = function () {
                    a.style.display = 'block';
                    lis = ul.children;
                    for (let j = 0; j < lis.length; j++) {
                        var a_a = lis[j].children[1];
                        a_a.onclick = function () {
                            arr.splice(j, 1);
                            data.value = arr;
                            this.parentNode.remove();
                        }
                    }
                }
                li.onmouseout = function () {
                    a.style.display = 'none';
                }



            }
        }
    }








    // 公共方法生成节点
    this.input_box = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        var matation_business_pictrue_box = document.getElementById('matation_business_pictrue_box');
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        matation_business_pictrue_box.appendChild(div);

        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '30px';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
        }



        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method(); // 前面赋值了，后面调用函数；
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                //  p.setAttribute("isNext", "nextStep");
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }

            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            p.style.display = 'none';
        }

        if (data.caption == "注册号") {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据营业执照，填写15位注册号或18位的统一社会信用代码';
            div.appendChild(divs);
        }

        if (data.caption == '商户名称' && subject_type == 'SUBJECT_TYPE_INDIVIDUAL') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '若营业执照上名称为空或为“无字号”，请填写“个体户+经营者姓名”，如“个体户张三”';
            div.appendChild(divs);
        }
    }


    this.input_box_dengji = function (data, componentNextPro) { // componentNextPro 是一个函数；
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className = 'application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        var matation_business_pictrue_box = document.getElementById('matation_business_dengji_box');
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        matation_business_pictrue_box.appendChild(div);


        if (subject_boolean == true) {
            input.value = data.value;
            input.disabled = true;
            input.border = 'none';
            input.style.cssText = "background:#ffffff;border:1px solid transparent";
            div.style.paddingLeft = '30px';
        } else {
            if (data.value) {
                input.value = data.value;
                input.disabled = false;
                input.style.cssText = "background:#ffffff;border:1px solid #e0e0e0";
            }
        }



        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method(); // 前面赋值了，后面调用函数；

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
                input.setAttribute("isNext", "nextStep");
                return;
            } else {
                if (input.hasAttribute('isNext')) {
                    input.removeAttribute("isNext");
                }
            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            p.style.display = 'none';
        }

        if (data.caption == "证书号") {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据登记证书，填写证书号码';
            div.appendChild(divs);
        }

        if (data.caption == '注册地址') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据营业执照/登记证书，填写注册地址';
            div.appendChild(divs);
        }
        if (data.caption == '商户名称') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据登记证书，填写商户名称';
            div.appendChild(divs);
        }
        if (data.caption == '法人姓名') {
            var divs = document.createElement('div');
            divs.setAttribute('class', 'upload-tips')
            divs.innerHTML = '请依据营业执照/登记证书，填写法定代表人姓名';
            div.appendChild(divs);
        }
    }

    // 生成分类标题如主体信息，经营信息等
    this.matation_title = function (str) {
        var str = '<div class="info-hd">' +
            '<h2 class="ng-binding">' + str + '</h2></div>';
        return str;
    }


    // 多选框公共方法
    this.checkbox_public = function (data, caption, arr, dom, nextPro) {
        let ul = document.createElement("ul");
        let labelCaption = document.createElement("label");
        var div = document.createElement('div');
        div.setAttribute('class', 'divs_public_shenfen');
        labelCaption.setAttribute('class', 'labels_public_shenfen');
        labelCaption.innerText = caption;
        ul.appendChild(labelCaption);
        ul.appendChild(div);
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            str += '<li>' +
                '<input type="checkbox" name=\'' + arr[i].type + '\' class="radioSelect_checkbox">' +
                '<i class="checkbox_i">' + arr[i].name + '</i>' +
                '</li>';
        }

        if (subject_boolean) {
            ul.style.paddingLeft = '30px';
            div.innerHTML = data.value;
        } else {
            div.innerHTML = str;
        }

        dom.appendChild(ul);
        var inputs = ul.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {

                nextPro(arr[i].type, this.checked, i);

            }
        }

        var divText = document.createElement('div');
        divText.innerHTML = '请勾选实际售卖商品/提供服务场景（至少一项），以便为你开通需要的支付权限。建议只勾选目前必须的场景，<br />以便尽快通过入驻审核，其他支付权限你可在入驻后再根据实际需要发起申请'
        divText.setAttribute('class', 'tips-info');
        dom.appendChild(divText);
    }


    // 选择登记证书 方法
    this.xuanze_dengji = function () {
        var str = '<label class="lable_left">登记证书类型</label><span class="span_public" id="common_xuanze_zhengji_span">请选择<i class="triangle_banks"></i></span><p id="common_xuanze_zhengji_p_yuansu">请选择证书类型</p>'
        return str;
    }

    // 上一步下一步保存草稿按钮
    this.prev_next = function () {
        var str = '<ul class="list"><li>返回</li><li>保存草稿</li><li>保存并下一步</li></ul>';
        return str;
    }

    // 根据class获取元素；
    this.getClassName_dom = function (parents, dom_class) {
        var dom = parents.getElementsByTagName('*');
        var dom_arr = [];
        for (var i = 0; i < dom.length; i++) {
            if (dom[i].className == dom_class) {
                dom_arr.push(dom[i]);
            }
        }

        return dom_arr;
    }

}


// 自己做的回退事件
function pushHistory_two() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#two");
}