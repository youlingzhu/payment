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
        div.setAttribute('class', 'authorized_application');
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

        for (var i = 0; i < li.length; i++) {
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
                        componentNextPro(data.value);
                    }
                })
            }

        }



    }

    // 营业执照照片
    this.photosOfBusinessLicense = function (data) {
        console.log(subject_type);
        var div = document.createElement("div");
        div.setAttribute('class', 'form-item');
        var str = "<div class='public_hr'></div>" +
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
            "<input type='file' name='' id=''>上传" +
            "</a>" +
            "<a href='javascript:;' class='a-upload'  style='display:none'>" +
            "<input type='file' name='' id=''>重新上传" +
            "</a>" +
            "<div class='upload-tips ng-binding'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childer'>" +
            "<li>" +
            "<img src='' />" +
            "<a href='javascript:;'  class='del'>删除</a>" +
            "</li>" +
            "</ul>" +
            "<p class='text-error'>请填写营业执照照片</p>" +
            "<p class='text-error'>请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>"
        div.innerHTML = str;
        application_list_one.appendChild(div);
        this.publicImgUupData('yingyezhizhao', data);




    }



    this.license_number = function (data) {
        this.input_box(data, function (data) {
            console.log(subject_type);
            var a = data.verification_method();
            var organization_code_certificate = document.getElementById('organization_code_certificate');
            if (a == "" && data.value.length == 15) {
                organization_code_certificate.style.display = "block";
            } else {
                organization_code_certificate.style.display = "none";
            }

        })
    }


    // 组织机构代码证
    this.organization_copy = function (data) {
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
            "<div style='width:100%;overflow:hidden' id='zuzhijigou'>" +
            "<label class='labels ng-binding'>" + data.caption + "</label>" +
            "<div class='application_phone_div'>" +
            "<a href='javascript:;' class='a-upload'>" +
            "<input type='file' name='' id=''>上传" +
            "</a>" +
            "<a href='javascript:;' class='a-upload' style='display:none'>" +
            "<input type='file' name='' id=''>重新上传" +
            "</a>" +
            "<div class='upload-tips ng-binding'>请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）</div>" +
            "</div>" +
            "<ul id='application_list_one_ul_childer'>" +
            "<li>" +
            "<img src='' />" +
            "<a href='javascript:;'  class='del'>删除</a>" +
            "</li>" +
            "</ul>" +
            "<p class='text-error'>请填写组织机构代码证照片</p>" +
            "<p class='text-error'>请上传2M内的彩色图片，格式可为bmp、png、jpeg、jpg或gif</p>" +
            "</div>" +
            "</div>";
        div.innerHTML = str;
        application_list_one.appendChild(div);
        var organization_code_certificate = document.getElementById('organization_code_certificate');
        organization_code_certificate.style.display = 'none';
        this.publicImgUupData('zuzhijigou', data);

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
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
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

        input.onblur = function () {
            var text_errors_timeone = document.getElementById('text_errors_timeone');
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
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
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            console.log(data);
            console.log(input.value)
            var a = data.verification_method();

            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            p.style.display = 'none';
        }
    }



    // 证件类型 身份证还是其他类型的通行证（港澳台护照）
    this.id_doc_type = function (data) {
        var div = document.createElement("div");
        div.setAttribute('class', 'form-item_shenfenzheng');
        var divs = document.createElement("div");
        divs.setAttribute('id', 'form_item_shenfenzhengbottom');
        divs.setAttribute('class', 'clear_float');
        var divTwo = document.createElement('div');
        divTwo.setAttribute('id', 'form_item_shenfenzhengbottomTwo');
        divTwo.setAttribute('class', 'clear_float');
        divTwo.style.display = "none";

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


        this.three_syndromes_component("证件类型", arr, div, function (value) {

            var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
            var form_item_shenfenzhengbottomTwo = document.getElementById('form_item_shenfenzhengbottomTwo');

            data.value = value;
            if (value == "IDENTIFICATION_TYPE_IDCARD") {
                //身份证照显示
                //证件照隐藏
                form_item_shenfenzhengbottom.style.display = "block";
                form_item_shenfenzhengbottomTwo.style.display = "none";

            } else {
                //身份证照隐藏
                //证件照显示
                form_item_shenfenzhengbottom.style.display = "none";
                form_item_shenfenzhengbottomTwo.style.display = "block";
            }
        });
        application_list_one.appendChild(div);
        application_list_one.appendChild(divs);
        application_list_one.appendChild(divTwo);
        div.querySelectorAll("input")[0].click();
    }

    // 身份证人像面照片
    this.id_card_copy = function (data) {
        var str = this.createTitleTopAndImg('身份证人像面照片', '请填写身份证人像面照片', 'shenfenzhengzhaopianzhengmian');
        var form_item_shenfenzhengbottom = document.getElementById('form_item_shenfenzhengbottom');
        form_item_shenfenzhengbottom.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianzhengmian', data);
    }


    // 身份证国徽面照片
    this.id_card_national = function (data) {
        var str = this.createTitleTopAndImg('身份证国徽面照片', '请填写身份证国徽面照片', 'shenfenzhengzhaopianfanmian');
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
        data.value = true; // 
        console.log(data);
        this.three_syndromes_components("是否为受益所有人", arr, dom, function (value) {
            data.value = value; // 赋值给经营者/法人是否为受益人这个数据
            var divParent = document.getElementById('divParent');

            if (data.value == true) {
                divParent.style.display = 'none';
            } else {
                divParent.style.display = 'block';
            }


        });

    }



    // 其他类型证件证件照片
    this.id_doc_copy = function (data, componentNextPro) {
        var str = this.createTitleTopAndImg('证件照片', '请填写证件照片', 'qitazhengjianzhaopian');
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
        divParent.setAttribute('id', 'divParent');
        divChildrenOne.setAttribute('id', 'divChildrenOne');
        divChildrenTwo.setAttribute('id', 'divChildrenTwo');
        divChildrenThree.setAttribute('id', 'divChildrenThree');
        application_list_one.appendChild(divParent);
        divParent.appendChild(divChildrenOne);
        divParent.appendChild(divChildrenTwo);
        divParent.appendChild(divChildrenThree);
        divChildrenOne.innerHTML += str;
        divParent.style.display = 'none';
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

        data.value = 'IDENTIFICATION_TYPE_IDCARD'; // 默认是身份证;

        this.three_syndromes_component("证件类型", arr, divChildrenOne, function (values) {
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

            } else {
                //身份证照隐藏
                //证件照显示
                shenfenzhengzhaopianzhengmian_one.style.display = "none";
                shenfenzhengzhaopianfanmian_one.style.display = "none";
                qitazhengjianzhaopian_one.style.display = "block";
            }

        });

    }


    // 是否是受益人中的身份证正面照片
    this.id_card_copys = function (data) {
        var str = this.createTitleTopAndImg('身份证人像面照片', '请填写身份证人像面照片', 'shenfenzhengzhaopianzhengmian_one');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianzhengmian_one', data);
    }


    // 是否是受益人中的身份证反面照片
    this.id_card_nationals = function (data) {
        var str = this.createTitleTopAndImg('身份证国徽面照片', '请上传身份证国徽面照片', 'shenfenzhengzhaopianfanmian_one');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('shenfenzhengzhaopianfanmian_one', data);
    }

    // 是否是受益人中的证件照片
    this.id_doc_copys = function (data) {
        var str = this.createTitleTopAndImg('证件照片', '请填写证件照片', 'qitazhengjianzhaopian_one');
        var divChildrenTwo = document.getElementById('divChildrenTwo');
        divChildrenTwo.appendChild(str);
        this.publicImgUupData('qitazhengjianzhaopian_one', data);
        var qitazhengjianzhaopian_one = document.getElementById('qitazhengjianzhaopian_one');
        qitazhengjianzhaopian_one.style.display = "none";

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
        this.validity_end_time(data, componentNextPro, 'datetimepicker8', "divChildrenTwo", "text_errors_timefive")
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
        divone.setAttribute('id', 'matation_form-item_shenfenzhengfour')
        application_list_one.appendChild(divone);

        var divTwo = document.createElement('div');
        divTwo.setAttribute('id', 'matation_form_item_checkbox_jingying_parent')
        application_list_one.appendChild(divone);
        application_list_one.appendChild(divTwo);

        var divxianxia = document.createElement('div');
        divxianxia.setAttribute('id', "matation_form_item_xianxia");
        divTwo.appendChild(divxianxia);

        var div_official_account = document.createElement('div');
        div_official_account.setAttribute('id', "matation_form_item_div_official_account");
        divTwo.appendChild(div_official_account);

        var div_applets_scene = document.createElement('div');
        div_applets_scene.setAttribute('id', "div_applets_scene");
        divTwo.appendChild(div_applets_scene);

        var div_app_scence = document.createElement('div');
        div_app_scence.setAttribute('id', "div_app_scence");
        divTwo.appendChild(div_app_scence);

        var div_pc_scence = document.createElement('div');
        div_pc_scence.setAttribute('id', "div_pc_scence");
        divTwo.appendChild(div_pc_scence);

        var div_enterprise_wechat = document.createElement('div');
        div_enterprise_wechat.setAttribute('id', "div_enterprise_wechat");
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

        var arrType = ['SALES_SCENES_STORE', 'SALES_SCENES_MP', 'SALES_SCENES_MINI_PROGRAM', 'SALES_SCENES_APP', 'SALES_SCENES_WEB', 'SALES_SCENES_WEWORK']

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
        var array = [];

        this.checkbox_public('经营场景', arr, divone, function (values, is_checked) {
            var arrayDom = [];
            divTwo.innerHTML = '';
            if (is_checked) {
                array.push(values)
            } else {
                console.log(array.indexOf(values));
                var index = array.indexOf(values);
                array.splice(index, 1);
            }
            data.value = array;
            for (var i = 0; i < array.length; i++) {
                var index = arrType.indexOf(array[i]);
                arrayDom.push(arrDom[index]);
            }
            for (var i = 0; i < arrayDom.length; i++) {
                divTwo.appendChild(arrayDom[i]);
                arrayDom[i].style.display = 'block';
            }

        })
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
        var str = this.create_multiple_pictures('小程序截图', '请上传小程序截图','请提供展示商品/服务的页面截图/设计稿（最多5张），若小程序未建设完善或未上线请务必提供。图片需在2M内。', 'xiaochengxu_appid');
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
        var str = this.create_multiple_pictures('小程序截图', '请上传小程序截图', '请提供APP首页截图、尾页截图、应用内截图、支付页截图各1张。<a target="_blank" href="http://kf.qq.com/faq/190130aqumuq190130A326Bf.html">查看示例</a>。', 'xiaochengxu_appid');
        var matation_form_item_div_official_account = document.getElementById('div_app_scence');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);
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
        var str = this.createTitleTopAndImg('网站授权函(选填)','请填写网站授权函(选填)', 'pcwangzhanshouquanhan','若备案主体与申请主体不同，请务必上传加盖公章的网站授权函');
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
        var str = this.create_multiple_pictures('企业微信页面截图', '请填写企业微信页面截图', '请提供展示商品/服务的页面截图/设计稿。<a target="_blank" href="http://kf.qq.com/faq/190130aqumuq190130A326Bf.html">查看示例</a>,最多可上传5张照片。', 'xiaochengxu_appid');
        var matation_form_item_div_official_account = document.getElementById('div_enterprise_wechat');
        matation_form_item_div_official_account.appendChild(str);
        var div_hr = document.createElement('div');
        div_hr.setAttribute('class', 'public_hrs');
        matation_form_item_div_official_account.appendChild(div_hr);

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
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            console.log(data);
            console.log(data.value);
            var a = data.verification_method();
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            p.style.display = 'none';
        }
    }


    // 生成点击选项公共的方法
    this.three_syndromes_component = (caption, arr, dom, nextPro) => {
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

        div.innerHTML += str;
        dom.appendChild(ul);
        var inputs = ul.getElementsByTagName('input');
        inputs[0].checked = true;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                nextPro(arr[i].type)
            }
        }

    }


    // 生成复选框选项的公共方法
    this.three_syndromes_components = (caption, arr, dom, nextPro) => {
        let ul = document.createElement("ul");
        ul.setAttribute('class', 'publick_checked_list')
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

        div.innerHTML += str;
        dom.appendChild(ul);
        ul.innerHTML += '<i class="ico-msg-s ask" id="ico-msg-s_ask"></i>';
        var str2 = '<div class="popup pop-left pos-top ng-hide" id="popup_ask" style="display:none">' +
            '<div class="inner">' +
            '<p class="ng-binding ng-scope">根据国家相关法律法规，您需要提供公司受益所有人信息。受益所有人需符合至少以下条件之一：1. 直接或者间接拥有超过25%公司股权或者表决权的自然人；2. 通过人事、财务等其他方式对公司进行控制的自然人；3. 公司的高级管理人员，包括公司的经理、副经理、财务负责人，上市公司董事会秘书和公司章程规定的其他人员</p>' +
            '</div>' +
            '<i class="arrow arrow-out"></i>' +
            '<i class="arrow arrow-in"></i>' +
            '</div>'
        ul.innerHTML += str2;
        var ico_msg_s_ask = document.getElementById('ico-msg-s_ask');
        var popup_ask = document.getElementById('popup_ask');
        ico_msg_s_ask.onmousemove = function () {
            popup_ask.style.display = 'block';
        }
        ico_msg_s_ask.onmouseout = function () {
            popup_ask.style.display = 'none';
        }



        var inputs = ul.getElementsByTagName('input');
        inputs[0].checked = true;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {
                nextPro(arr[i].type);
            }
        }

    }



    // 头部的方法 有副标题
    this.createTitleTop = function (str1, str2) {
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
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


    // 头部方法，没有副标题
    this.createTitleTopTwo = function (str1) {
        var str = "<div class='public_hr'></div>" +
            "<div class='form-item_children'>" +
            "<div class='application_phone' id='application_phone'>" +
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
            "<div class='application_phone' id='application_phone'>" +
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
    this.createTitleTopAndImg = function (str1, str2, domID,str3) {
        var div = document.createElement("div");
        str3=str3?str3:'请上传2M内的彩色照片 or 彩色扫描件 or 加盖公章鲜章的复印件，可添加“微信支付”相关水印（如微信支付认证）';
        div.setAttribute('class', 'common_header_method');
        div.setAttribute('id', domID);
        var str = '<div class="createTitleTopAndImg_top">' +
            '<label class = "labels ng-binding">' + str1 + '</label>' +
            '<div class="application_phone_div">' +
            '<a href="javascript:;" class="a-upload"><input type="file" name="" id="">上传</a >' +
            '<a href="javascript:;" style="display:none" class="a-upload"><input type="file" name="" id="">重新上传</a>' +
            '<div class="upload-tips ng-binding">'+str3+'</div>' +
            '</div>' +
            '</div>' +
            '<ul class="application_list_one_ul_childer">' +
            '<li>' +
            '<img src="">' +
            '<a href="javascript:;" class="del">删除</a>' +
            '</li>' +
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
        var str = '<div class="createTitleTopAndImg_top">' +
            '<label class = "labels ng-binding">' + str1 + '</label>' +
            '<div class="application_phone_div">' +
            '<a href="javascript:;" class="a-upload"><input type="file" multiple="multiple"  id=""><span>上传</span></a >' +
            // '<a href="javascript:;" style="display:none" class="a-upload"><input type="file" name="" id="">重新上传</a>' +
            '<div class="upload-tips ng-binding">' + str3 + '</div>' +
            '</div>' +
            '</div>' +
            '<ul class="application_list_one_ul_childer">' +
            // '<li>' +
            // '<img src="">' +
            // '<a href="javascript:;" class="del">删除</a>' +
            // '</li>' +
            '</ul>' +
            '<p class="text-error">' + str2 + '</p>' +
            '<p class="text-error">请上传2M内的彩色图片，格式可为bmp、png、jpg</p>'+
            '<p class="text-error">最多只能上传5张图片</p>'+
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
        organization_code_certificate.appendChild(div);
        $('#' + idChildren).datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        var input = div.getElementsByTagName('input')[0];

        input.onblur = function () {
            var text_errors_timeone = document.getElementById(idP);
            data.value = input.value ? input.value : "";
            var a = data.verification_method();

            if (a) {
                text_errors_timeone.style.display = 'block';
                text_errors_timeone.innerHTML = a;
            } else {
                text_errors_timeone.style.display = 'none';
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
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            console.log(data.value)
            var a = data.verification_method();
            console.log(a);
            if (a) {
                p2.style.display = 'block';
                p2.innerHTML = a;
            }
            if (componentNextPro) {
                componentNextPro(data);
            }
        }
        input.onfocus = function () {
            p2.style.display = 'none';
        }
    }

    // 上传单张图片验证的公共方法
    this.publicImgUupData = function (dom, data) {
        var yingyezhizhao = document.getElementById(dom);
        var aA = yingyezhizhao.getElementsByTagName('a');
        var inputs = yingyezhizhao.getElementsByTagName('input');
        var ul = yingyezhizhao.getElementsByTagName('ul')[0];
        var p = yingyezhizhao.getElementsByTagName('p');
        var img = ul.getElementsByTagName('img')[0];
        var li = ul.getElementsByTagName('li')[0];
        li.style.display = 'none';
        p[0].style.display = 'none';
        p[1].style.display = 'none';
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function (e) {
                var file = this.files[0];
                console.log(file);
                var sizeImg = file.size;
                if (sizeImg > 1024 * 1024 * 2) {
                    p[1].style.display = 'block';
                    return;
                } else {
                    p[0].style.display = 'none';
                }
                console.log(e.target.files);
               // data.value = e.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (ev) {
                    li.style.display = 'block';
                    data.value=ev.target.result;
                    img.src = ev.target.result;
                    aA[1].style.display = 'block';
                    aA[0].style.display = 'none';
                    inputs[1].style.width = '100px';
                    aA[1].style.width = '100px';
                    aA[1].style.paddingLeft = '0px';
                    aA[1].style.paddingRight = '0px';
                    p[0].style.display = 'none';
                    p[1].style.display = 'none';
                }
            }
        }
        li.onmousemove=function(){
            this.children[1].style.display='block';
        }
        li.onmouseout=function(){
            this.children[1].style.display='none';
        }
        var a = ul.getElementsByTagName('a')[0];
        a.onclick = function () {
            li.style.display = 'none';
            p[0].style.display = 'block';
            data.value = "";
        }

    }

    // 上传多图片验证的公共方法
 /* 
    this.multiple_pictures = function (dom, data) {
        var parentId = document.getElementById(dom);
        var ul = parentId.getElementsByTagName('ul')[0];
       // console.log(data.caption);
        var input = parentId.getElementsByTagName('input')[0];
        var span=parentId.getElementsByTagName('span')[0];
        var p = parentId.getElementsByTagName('p');
        p[0].style.display = 'none';
        p[1].style.display = 'none';
        p[2].style.display = 'none';
        p[3].style.display = 'none';
        ul.innerHTML = '';
        var allArr = [];
        var data_arr=[];
        var data_arr_obj=[];
        var num=0;
        input.onchange = function (e) {
            span.innerText='继续上传';
            var files = this.files;
            for (let i = 0; i < files.length; i++) {
                var file = e.target.files[i];
                var sizeImg = file.size;
                console.log(e.target.files[i]);
                if (sizeImg > 1024 * 1024 * 2) {
                    p[1].style.display = 'block';
                    return;
                } else {
                    if(data.caption=='小程序截图'||data.caption=='公众号页面截图'){
                        var len=parseInt(data_arr.length)+parseInt(files.length);
                        if(len>5){
                            p[2].style.display = 'block';
                            return;
                        }else{
                            allArr.push(file);
                        }
                    }else{
                        allArr.push(file);
                    }
                    console.log(allArr);
                    p[0].style.display = 'none';  
                }   
                var reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = function (ev) {
                    var li = document.createElement('li');
                    var img = document.createElement('img');
                    var a = document.createElement('a');
                    a.setAttribute('class', 'del');
                    console.log(num)
                    img.src = ev.target.result;
                    data_arr.push(ev.target.result);
                    data.value=data_arr;
                    var datas={
                        name:num,
                        data:ev.target.result
                    }
                    console.log(num)
                    li.setAttribute('index',num)
                    data_arr_obj.push(datas);
                    ul.appendChild(li);
                    li.appendChild(img);
                    li.appendChild(a);
                    p[0].style.display = 'none';
                    p[1].style.display = 'none';
                    p[2].style.display = 'none';
                    p[3].style.display = 'none';
                    num+=1;
                    console.log(data_arr_obj);
                    li.onmousemove=function(){
                        this.children[1].style.display='block';
                    }
                    li.onmouseout=function(){
                        this.children[1].style.display='none';
                    }
                    a.onclick = function () {
                        var indexLi=this.parentNode.getAttribute('index');
                        li.remove();
                        data_arr_obj = data_arr_obj.filter(function(item,index){
                            return item.name!=indexLi;
                        })
                        console.log(data_arr_obj);
                        data_arr=[];
                        for(let i=0;i<data_arr_obj.length;i++){
                            data_arr.push(data_arr_obj[i].data);
                        }
                      //  console.log(data_arr);
                        data.value=data_arr;
                    }
                   
                }
            }
 
        }

    }

*/




    this.multiple_pictures = function (dom, data) {
        var parentId = document.getElementById(dom);
        var ul = parentId.getElementsByTagName('ul')[0];
       // console.log(data.caption);
        var input = parentId.getElementsByTagName('input')[0];
        var span=parentId.getElementsByTagName('span')[0];
        var p = parentId.getElementsByTagName('p');
        p[0].style.display = 'none';
        p[1].style.display = 'none';
        p[2].style.display = 'none';
        p[3].style.display = 'none';
        ul.innerHTML = '';
        var allArr = [];
        var data_arr=[];
        var data_arr_obj=[];
        var num=0;
        input.onchange = function (e) {
            span.innerText='继续上传';
            var files = this.files;
            for (let i = 0; i < files.length; i++) {
                var file = e.target.files[i];
                var sizeImg = file.size;
                console.log(e.target.files[i]);
                if (sizeImg > 1024 * 1024 * 2) {
                    p[1].style.display = 'block';
                    return;
                } else {
                    if(data.caption=='小程序截图'||data.caption=='公众号页面截图'){
                        var len=parseInt(data_arr.length)+parseInt(files.length);
                        if(len>5){
                            p[2].style.display = 'block';
                            return;
                        }else{
                            allArr.push(file);
                        }
                    }else{
                        allArr.push(file);
                    }
                    console.log(allArr);
                    p[0].style.display = 'none';  
                }   
                var reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = function (ev) {
                    var li = document.createElement('li');
                    var img = document.createElement('img');
                    var a = document.createElement('a');
                    a.setAttribute('class', 'del');
                    console.log(num)
                    img.src = ev.target.result;
                    data_arr.push(ev.target.result);
                    data.value=data_arr;
                    var datas={
                        name:num,
                        data:ev.target.result
                    }
                    console.log(num)
                    li.setAttribute('index',num)
                    data_arr_obj.push(datas);
                    ul.appendChild(li);
                    li.appendChild(img);
                    li.appendChild(a);
                    p[0].style.display = 'none';
                    p[1].style.display = 'none';
                    p[2].style.display = 'none';
                    p[3].style.display = 'none';
                    num+=1;
                    console.log(data_arr_obj);
                    li.onmousemove=function(){
                        this.children[1].style.display='block';
                    }
                    li.onmouseout=function(){
                        this.children[1].style.display='none';
                    }
                    a.onclick = function () {
                        var indexLi=this.parentNode.getAttribute('index');
                        li.remove();
                        data_arr_obj = data_arr_obj.filter(function(item,index){
                            return item.name!=indexLi;
                        })
                        console.log(data_arr_obj);
                        data_arr=[];
                        for(let i=0;i<data_arr_obj.length;i++){
                            data_arr.push(data_arr_obj[i].data);
                        }
                      //  console.log(data_arr);
                        data.value=data_arr;
                    }
                   
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
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        application_list_one.appendChild(div);
        input.onblur = function () {
            data.value = input.value ? input.value : "";
            var a = data.verification_method();
            if (a) {
                p.style.display = 'block';
                p.innerHTML = a;
            }

            if (componentNextPro) {
                componentNextPro(data);
            }
        }

        input.onfocus = function () {
            p.style.display = 'none';
        }

    }

    // 生成分类标题如主体信息，经营信息等
    this.matation_title = function (str) {
        var str = '<div class="info-hd">' +
            '<h2 class="ng-binding">' + str + '</h2></div>';
        return str;
    }


    // 多选框公共方法
    this.checkbox_public = function (caption, arr, dom, nextPro) {
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

        div.innerHTML += str;
        dom.appendChild(ul);
        var inputs = ul.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].onchange = function () {

                nextPro(arr[i].type, this.checked);

            }
        }

        var divText = document.createElement('div');
        divText.innerHTML = '请勾选实际售卖商品/提供服务场景（至少一项），以便为你开通需要的支付权限。建议只勾选目前必须的场景，<br />以便尽快通过入驻审核，其他支付权限你可在入驻后再根据实际需要发起申请'
        divText.setAttribute('class', 'tips-info');
        dom.appendChild(divText);
    }


}























// 个体户经营者/法人 姓名
/*   this.legal_person=function(data,componentNextPro){
        var div = document.createElement("div");
        var label = document.createElement("label");
        var p = document.createElement('p');
        div.className='application_list_one_ul_li_div';
        label.className = "lable_left";
        p.className = "text-errors";
        label.innerText = data.caption;
        var input = document.createElement("input");
        input.className = "input_public";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(p);
        application_list_one.appendChild(div);
        input.onblur = function(){
            data.value=input.value ? input.value:"";
            var a = data.verification_method();
            if(a){
                p.style.display = 'block';
                p.innerHTML = a;
            }
        }

        input.onfocus = function(){
            p.style.display = 'none';
        }
        var div = document.createElement("div");
        div.className='three_zhengOne';
        var p = document.createElement('p');
        p.innerHTML='若营业执照注册号为18位统一社会信用代码，请选择“已三证合一”，否则请选择“未三证合一”';
        div.innerHTML=three_syndromes_component();
        div.appendChild(p);
        application_list_one.appendChild(div);

        var label_three_syndromes=document.getElementById('label_three_syndromes');
        var inputs=label_three_syndromes.getElementsByTagName('input');
        for(var i=0;i<inputs.length;i++){
            inputs.onclick=function(){
                console.log(this)
            }
        }

    }

*/


/*
function three_syndromes_component(arr){
    console.log(arr);
    var str='';
    for(var i=0;i<arr.length;i++){
        str += '<div class="application_list_one_ul_li_div">'+
        '<label class="three_syndromes_lable_left">类型</label>'+
        '<div class="label_three_syndromes" id="label_three_syndromes">'+
            '<label class="labelone_three_syndromes">'+
                '<input type="radio" name="radio" class="radioSelect">'+
                '<span></span>'+
                '<i>已三证合一</i>'+
            '</label>'+
            '<label class="labeltwo_three_syndromes">'+
                '<input type="radio" name="radio" checked class="radioSelect">'+
                '<span></span>'+
                '<i>未三证合一</i>'+
            '</label>'+
        '</div>'+
      '</div>';
    }
      return str;
}

*/