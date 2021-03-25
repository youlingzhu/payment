


     var wechartJson = [

        // 业务申请编号
        {
            key_name: "business_code", // 变量 具体名称
            caption: '业务申请编号', // 标题
            value: null, // 组件值
            fieldType: "text", //数据类型
            component_type: "qingzhuId", //组件类型
            generate_component: null, //根据组件类型来注册对应组件生成的方法	 
            verification_type: null, //验证类型
            verification_method: null, //通过验证类型来注册对应的加密方法，		
            encryption_type: null, //加密类型
            encryption_method: null, //通过加密类型来注册对应的加密方法，
            is_it_required: true, // 是否必填  true代码必填，true代码选填， false 为不填

            // 如果还有子属性就按照上面的继续复制一遍，要修改第一项属性的key值，和对应的类型，
        },

        // 超级管理员信息
        {
            key_name: "contact_info", // 变量具体名称
            caption: '超级管理员信息', // 标题
            value: null,
            is_it_required: true,
            subobject: [{
                    key_name: 'contact_name',
                    caption: '超级管理员姓名', // 标题
                    value: null, // 组件值
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },

                {
                    key_name: 'contact_id_number',
                    caption: '超级管理员身份证件号码',
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true,
                    // contact_id_number 与 openid 二选一
                },

                {
                    key_name: 'openid',
                    caption: '超级管理员微信openid',
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true,
                    // contact_id_number 与 openid 二选一

                },


                {
                    key_name: 'mobile_phone',
                    caption: '联系手机',
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: 'contact_email',
                    caption: '联系邮箱',
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                }
            ]
        },


        // 主体资料
        {
            key_name: "subject_info",
            caption: "主体资料",
            value: null,
            is_it_required: true,
            subobject: [
                {
                    key_name: "subject_type",
                    caption: "主体类型",
                    value: null,
                    fieldType: "text",
                    component_type: 'subjectType',
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: "business_license_info",
                    caption: "营业执照",
                    value: null,
                    is_it_required: true,
                    subobject: [ // 营业执照照片
                        {
                            key_name: "license_copy",
                            caption: "营业执照照片",
                            value: null,
                            fieldType: "text",
                            component_type: "photosOfBusinessLicense",
                            generate_component: "",
                            verification_type: "license_copy_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: false
                        },
                        {
                            key_name: "license_number",
                            caption: "注册号",
                            value: null,
                            fieldType: "text",
                            component_type: "license_number",
                            generate_component: null,
                            verification_type: "license_number_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "merchant_name",
                            caption: "商户名称",
                            value: null,
                            fieldType: "text",
                            component_type: "input_box",
                            generate_component: null,
                            verification_type: "merchant_name_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "legal_person",         // 营业执照
                            caption: "个体户经营者/法人 姓名",
                            value: null,
                            fieldType: "text",
                            component_type: "input_box",
                            generate_component: null,
                            verification_type: 'legal_person_type',
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        }
                    ]
                },
                {
                    key_name: "certificate_info",
                    caption: "登记证书",
                    value: null,
                    is_it_required: true,
                    subobject: [ // 登记证书
                        {
                            key_name: "cert_copy",
                            caption: "登记证书照片",
                            value: null,
                            fieldType: "text",
                            component_type: null,
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "cert_type",
                            caption: "登记证书类型",
                            value: null,
                            fieldType: "text",
                            component_type: null,
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "cert_number",
                            caption: "证书号",
                            value: null,
                            fieldType: "text",
                            component_type: "cert_number",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "merchant_name",
                            caption: "商户名称",
                            value: null,
                            fieldType: "text",
                            component_type: "merchant_name",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "company_address",
                            caption: "注册地址",
                            value: null,
                            fieldType: "text",
                            component_type: "company_address",
                            generate_component: null,
                            verification_type: 'company_address_type',
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "legal_person",
                            caption: "法人姓名",
                            value: null,
                            fieldType: "text",
                            component_type: null,
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "period_begin",
                            caption: "有效期限开始日期",
                            value: null,
                            fieldType: "text",
                            component_type: "period_begin",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "period_end",
                            caption: "有效期限结束日期",
                            value: null,
                            fieldType: "text",
                            component_type:"period_end",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        }
                    ]
                },
                {
                    key_name: "organization_info",
                    caption: "组织机构代码证",
                    value: null,
                    is_it_required: true,
                    subobject: [ // 组织机构代码证照片
                        {
                            key_name: "organization_copy",
                            caption: "组织机构代码证照片",
                            value: null,
                            organization_copy: null,
                            fieldType: "text",
                            component_type: "organization_copy",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "organization_code",
                            caption: "组织机构代码",
                            value: null,
                            fieldType: "text",
                            component_type: 'input_box_organization',
                            generate_component: null,
                            verification_type: 'organization_code_type',
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "org_period_begin",
                            caption: "组织机构代码证有效期开始日期",
                            value: null,
                            fieldType: "text",
                            component_type: 'org_period_begin',
                            generate_component: null,
                            verification_type: "org_period_begin_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "org_period_end",
                            caption: "组织机构代码证有效期结束日期",
                            value: null,
                            fieldType: "text",
                            component_type: 'org_period_end',
                            generate_component: null,
                            verification_type: "org_period_end_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        }
                    ]
                },
                {
                    key_name: "certificate_letter_copy",
                    caption: "单位证明函照片",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true // 条件选填
                },
                {
                    key_name: "identity_info",
                    caption: "经营者/法人身份证件",
                    value: null,
                    is_it_required: true,
                    subobject: [ // 经营者/法人身份证件
                        {
                            key_name: "id_doc_type",
                            caption: "证件类型",
                            value: null,
                            fieldType: "text",
                            component_type: "id_doc_type",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "id_card_info",
                            caption: "身份证信息",
                            value: null,
                            is_it_required: false,
                            subobject: [ // 身份证信息
                                {
                                    key_name: "id_card_copy",
                                    caption: "身份证人像面照片",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "id_card_copy",
                                    generate_component: null,
                                    verification_type: "id_card_copy_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "id_card_national",
                                    caption: "身份证国徽面照片",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "id_card_national",
                                    generate_component: null,
                                    verification_type: null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "id_card_name",
                                    caption: "身份证姓名",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "id_card_name_And_number",
                                    generate_component: null,
                                    verification_type: "id_card_name_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "id_card_number",
                                    caption: "身份证号码",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "id_card_name_And_number",
                                    generate_component: null,
                                    verification_type: "id_card_number_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "card_period_begin",
                                    caption: "身份证有效期开始时间",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "card_period_begin",
                                    generate_component: null,
                                    verification_type: "card_period_begin_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "card_period_end",
                                    caption: "身份证有效期结束时间",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "card_period_end",
                                    generate_component: null,
                                    verification_type: "card_period_end_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                }
                            ]
                        },
                        {
                            key_name: "id_doc_info",
                            caption: "其他类型证件信息",
                            value: null,
                            is_it_required: false,
                            subobject: [ // 其他类型证件信息
                                {
                                    key_name: "id_doc_copy",
                                    caption: "证件照片",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "id_doc_copy",
                                    generate_component: null,
                                    verification_type: null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "id_doc_name",
                                    caption: "证件姓名",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "id_doc_name_and_name",
                                    generate_component: null,
                                    verification_type: 'id_doc_name_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "id_doc_number",
                                    caption: "证件号码",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "id_doc_name_and_name",
                                    generate_component: null,
                                    verification_type: 'id_doc_number_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "doc_period_begin",
                                    caption: "证件有效期开始时间",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "doc_period_begin",
                                    generate_component: null,
                                    verification_type: "doc_period_begin_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "doc_period_end",
                                    caption: "证件有效期结束时间",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "doc_period_end",
                                    generate_component: null,
                                    verification_type: "doc_period_end_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                }
                            ]
                        },
                        {
                            key_name: "owner",
                            caption: "经营者/法人是否为受益人",
                            value: null,
                            fieldType: "bool",
                            component_type: "owner",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        }
                    ]
                },
                {
                    key_name: "ubo_info",
                    caption: "最终受益人信息(UBO]", // 条件选填
                    value: null,
                    is_it_required: true,
                    subobject: [{
                            key_name: "id_type",
                            caption: "证件类型",
                            value: null,
                            fieldType: "text",
                            component_type: "id_type",
                            generate_component: null,
                            verification_type: "id_type_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "id_card_copy",
                            caption: "身份证人像面照片",
                            value: null,
                            fieldType: "text",
                            component_type: "id_card_copys",
                            generate_component: null,
                            verification_type: "id_card_copy_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "id_card_national",
                            caption: "身份证国徽面照片",
                            value: null,
                            fieldType: "text",
                            component_type: "id_card_nationals",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "id_doc_copy",
                            caption: "证件照片",
                            value: null,
                            fieldType: "text",
                            component_type: "id_doc_copys",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "name",
                            caption: "受益人姓名",
                            value: null,
                            fieldType: "text",
                            component_type: "name",
                            generate_component: null,
                            verification_type: "id_doc_name_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "id_number",
                            caption: "证件号码",
                            value: null,
                            fieldType: "text",
                            component_type: 'id_number',
                            generate_component: null,
                            verification_type: "id_doc_number_type",
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "id_period_begin",
                            caption: "证件有效期开始时间",
                            value: null,
                            fieldType: "text",
                            component_type: "id_period_begin",
                            generate_component: null,
                            verification_type: 'doc_period_begin_type',
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "id_period_end",
                            caption: "证件有效期结束时间",
                            value: null,
                            fieldType: "text",
                            component_type: "id_period_end",
                            generate_component: null,
                            verification_type: 'id_period_end_type',
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        }
                    ]
                }




            ]



        },


        // 经营资料
        {
            key_name: "business_info",
            caption: "经营资料",
            value: null,
            is_it_required: true,
            subobject: [{
                    key_name: "merchant_shortname",
                    caption: "商户简称",
                    value: null,
                    fieldType: "text",
                    component_type: 'merchant_shortname',
                    generate_component: null,
                    verification_type: "merchant_shortname_type",
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: "service_phone",
                    caption: "客服电话",
                    value: null,
                    fieldType: "text",
                    component_type: "service_phone",
                    generate_component: null,
                    verification_type: "service_phone_type",
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },

                {
                    key_name: "sales_info",
                    caption: "经营场景",
                    value: null,
                    is_it_required: true,
                    subobject: [ // 经营场景
                        {
                            key_name: "sales_scenes_type",
                            caption: "经营场景类型",
                            value: null,
                            fieldType: "array",
                            component_type: "sales_scenes_type",
                            generate_component: null,
                            verification_type: null,
                            verification_method: null,
                            encryption_type: null,
                            encryption_method: null,
                            is_it_required: true
                        },
                        {
                            key_name: "biz_store_info",
                            caption: "线下门店场景",
                            value: null,
                            is_it_required: true,
                            subobject: [ // 线下门店场景
                                {
                                    key_name: "biz_store_name",
                                    caption: "门店名称",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "biz_store_name",
                                    generate_component: null,
                                    verification_type: 'biz_store_name_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "biz_address_code",
                                    caption: "门店省市邮政编码",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "biz_address_code",
                                    generate_component: null,
                                    verification_type: "biz_address_code_type",
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "biz_store_address",
                                    caption: "经营场所地址",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "biz_store_address",
                                    generate_component: null,
                                    verification_type: 'biz_store_address_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "store_entrance_pic",
                                    caption: "门店门头照片",
                                    value: null,
                                    fieldType: "array",
                                    component_type: "store_entrance_pic",
                                    generate_component: null,
                                    verification_type: 'store_entrance_pic_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "indoor_pic",
                                    caption: "店内环境照片",
                                    value: null,
                                    fieldType: "array",
                                    component_type: "indoor_pic",
                                    generate_component: null,
                                    verification_type: null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "biz_sub_appid",
                                    caption: "线下场所对应的商家APPID(选填)",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "biz_sub_appid",
                                    generate_component: null,
                                    verification_type: 'biz_sub_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: false
                                }

                            ]
                        },

                        {

                            key_name: "mp_info",
                            caption: "公众号场景",
                            value: null,
                            is_it_required: true,
                            subobject: [ // 公众号场景
                                {
                                    key_name: "mp_appid",
                                    caption: "服务商公众号APPID",
                                    value: null,
                                    mp_appid: null,
                                    fieldType: "text",
                                    component_type: "mp_appid",
                                    generate_component: null,
                                    verification_type: 'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "mp_sub_appid",
                                    caption: "商家公众号APPID",
                                    value: null,
                                    mp_sub_appid: null, // 二选一
                                    fieldType: "text",
                                    component_type: "mp_sub_appid",
                                    generate_component: null,
                                    verification_type: 'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "mp_pics",
                                    caption: "公众号页面截图",
                                    value: null,
                                    mp_pics: null,
                                    fieldType: "array",
                                    component_type: "mp_pics",
                                    generate_component: null,
                                    verification_type:null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                }
                            ]

                        },
                        {
                            key_name: "mini_program_info",
                            caption: "小程序场景",
                            value: null,
                            is_it_required: true,
                            subobject: [ // 小程序场景

                                {
                                    key_name: "mini_program_appid", // 二选一
                                    caption: "服务商小程序APPID",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "mini_program_appid", 
                                    generate_component: null,
                                    verification_type: 'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "mini_program_sub_appid", // 二选一
                                    caption: "商家小程序APPID",
                                    value: null,
                                    fieldType: "text",
                                    component_type:"mini_program_sub_appid",
                                    generate_component: null,
                                    verification_type: 'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "mini_program_pics",
                                    caption: "小程序截图",
                                    value: null,
                                    fieldType: "array",
                                    component_type:  "mini_program_pics",
                                    generate_component: null,
                                    verification_type: null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                }
                            ]
                        },
                        {
                            key_name: "app_info",
                            caption: "APP场景",
                            value: null,
                            is_it_required: true,
                            subobject: [{ // App场景
                                    key_name: "app_appid",
                                    caption: "服务商应用APPID",
                                    value: null,
                                    app_appid: null, // 二选一
                                    fieldType: "text",
                                    component_type: "app_appid",
                                    generate_component: null,
                                    verification_type: 'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "app_sub_appid",
                                    caption: "商家应用APPID",
                                    value: null,
                                    app_sub_appid: null, // 二选一
                                    fieldType: "text",
                                    component_type:"app_sub_appid",
                                    generate_component: null,
                                    verification_type: 'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "app_pics",
                                    caption: "APP截图",
                                    value: null,
                                    app_pics: null,
                                    fieldType: "array",
                                    component_type: "app_pics",
                                    generate_component: null,
                                    verification_type:null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                }
                            ]
                        },

                        {
                            key_name: "web_info",
                            caption: "互联网网站场景",
                            value: null,
                            is_it_required: true,
                            subobject: [{ // 互联网网站场景
                                    key_name: "domain",
                                    caption: "互联网网站域名",
                                    value: null,
                                    fieldType: "text",
                                    component_type:"domain",
                                    generate_component: null,
                                    verification_type: 'domain_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "web_authorisation",
                                    caption: "网站授权函(选填)",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "web_authorisation",
                                    generate_component: null,
                                    verification_type: null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: false
                                },
                                {
                                    key_name: "web_appid",
                                    caption: "互联网网站对应的商家APPID(选填)",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "web_appid",
                                    generate_component: null,
                                    verification_type: 'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: false
                                }
                            ]
                        },
                        {
                            key_name: "wework_info",
                            caption: "企业微信场景",
                            value: null,
                            is_it_required: true,
                            subobject: [{ // 企业微信场景
                                    key_name: "sub_corp_id",
                                    caption: "商家企业微信CorpID",
                                    value: null,
                                    fieldType: "text",
                                    component_type: "wework_info",
                                    generate_component: null,
                                    verification_type:'mp_appid_type',
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                },
                                {
                                    key_name: "wework_pics",
                                    caption: "企业微信页面截图",
                                    value: null,
                                    fieldType: "array",
                                    component_type: "wework_pics",
                                    generate_component: null,
                                    verification_type:null,
                                    verification_method: null,
                                    encryption_type: null,
                                    encryption_method: null,
                                    is_it_required: true
                                }
                            ]
                        }

                    ]
                }
            ]
        },

        // 结算规则
        {
            key_name: "settlement_info",
            caption: "结算规则",
            value: null,
            is_it_required: true,
            subobject: [{
                    key_name: "settlement_id",
                    caption: "入驻结算规则ID",
                    value: null,
                    fieldType: "text",
                    component_type: 'settlement_id',
                    generate_component: null,
                    verification_type: null,   
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: "qualification_type",
                    caption: "所属行业",
                    value: null,
                    fieldType: "text",
                    component_type: 'qualification_type',
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: "qualifications",
                    caption: "特殊资质图片",
                    value: null,
                    fieldType: "array",
                    component_type: 'qualifications',
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true // 条件选填 
                },
                {
                    key_name: "activities_id",
                    caption: "优惠费率活动ID",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true // 条件选填 
                },
                {
                    key_name: "activities_rate",
                    caption: "优惠费率活动值",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true // 条件选填 
                },
                {
                    key_name: "activities_additions",
                    caption: "优惠费率活动补充材料",
                    value: null,
                    fieldType: "array", // 数据类型是数组
                    component_type: null, // 上传的是照片
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: false // 这个可以不需要填 我没有赋值，写了一个空
                }

            ]


        },

        // 结算账户
        {
            key_name: "bank_account_info",
            caption: "结算银行账户",
            value: null,
            is_it_required: true,
            subobject: [{

                    key_name: "bank_account_type",
                    caption: "账户类型",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: "account_name",
                    caption: "开户名称",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: "account_bank",
                    caption: "开户银行",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },
                {
                    key_name: "bank_address_code",
                    caption: "开户银行省市编码",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true
                },

                {

                    key_name: "bank_branch_id",
                    caption: "开户银行联行号",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true,
                    // bank_branch_id 与 bank_name 二选一
                },

                {
                    key_name: "bank_name",
                    caption: "开户银行全称（含支行]",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true,
                    // bank_branch_id 与 bank_name 二选一


                },

                {
                    key_name: "account_number",
                    caption: "银行账号",
                    value: null,
                    fieldType: "text",
                    component_type:null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: true,
                }

            ]


        },



        // 补充材料
        {
            key_name: "addition_info",
            caption: "补充材料",
            value: null,
            is_it_required: false,
            subobject: [{
                    key_name: "legal_person_commitment",
                    caption: "法人开户承诺函",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: false // 这个可以不需要填
                },
                {
                    key_name: "legal_person_video",
                    caption: "法人开户意愿视频",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: false // 这个可以不需要填
                },
                {
                    key_name: "business_addition_pics",
                    caption: "补充材料",
                    value: null,
                    fieldType: "array", // 是数组类型
                    component_type: null, // 上传的是图片
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: false // 这个可以不需要填
                },
                {
                    key_name: "business_addition_msg",
                    caption: "补充说明",
                    value: null,
                    fieldType: "text",
                    component_type: null,
                    generate_component: null,
                    verification_type: null,
                    verification_method: null,
                    encryption_type: null,
                    encryption_method: null,
                    is_it_required: false // 这个可以不需要填 
                }
            ]
        }

    ]

