define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_dzda.html');
    var popwin;

    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_dzda', data);

           

            popwin = utils.showWin({
                title: '电子档案',
                area: ['90%', '600px'],
                content: html,
                button: ['', ''],
                maxmin: true,
                success: function () {
                    $.parser.parse('#fm');
                    main.bindEvent(data);


                    var jzfm = '';
                    jzfm += '<tr><td><img style="width:10%;" src="../../../static/images/moren.jpg"></td></tr>' +
                        '<tr><td class="td_title">被拘留人员姓名：' + data.xm + '</td></tr>' +
                        '<tr><td class="td_title">立卷单位：' + data.jljdjg + '</td></tr>' +
                        '<tr><td class="td_title">入所时间：' + data.rsrq + '</td></tr>' +
                        '<tr><td class="td_title">出所时间：' + data.csrq + '</td></tr>' +
                        '<tr><td class="td_title">档案编号：' + data.dah + '</td></tr>'

                    $("#jzfmTable").append(jzfm);

                    var ml = '';
                    ml += '<tr><td colspan="4" style="text-align: center;"><h2>目录</h2></td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">序号</td><td style="padding:8px 8px;border:1px solid #ccc;">题名</td><td style="padding:8px 8px;border:1px solid #ccc;">文书号</td><td style="padding:8px 8px;border:1px solid #ccc;">页数</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">1</td><td style="padding:8px 8px;border:1px solid #ccc;">行政拘留回执</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">0</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">2</td><td style="padding:8px 8px;border:1px solid #ccc;">被拘留人员入所登记表</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">1</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">3</td><td style="padding:8px 8px;border:1px solid #ccc;">谈话登记</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">2</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">4</td><td style="padding:8px 8px;border:1px solid #ccc;">家属会见提人通知单</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">3</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">5</td><td style="padding:8px 8px;border:1px solid #ccc;">律师会见提人通知单</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">4</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">6</td><td style="padding:8px 8px;border:1px solid #ccc;">解除拘留证明书</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">5</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">7</td><td style="padding:8px 8px;border:1px solid #ccc;">被拘留人员解除拘留审批表</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">6</td></tr>' +
                        '<tr><td style="padding:8px 8px;border:1px solid #ccc;">8</td><td style="padding:8px 8px;border:1px solid #ccc;">被拘留人员期满出所审批表</td><td style="padding:8px 8px;border:1px solid #ccc;"></td><td style="padding:8px 8px;border:1px solid #ccc;">7</td></tr>'
                    $("#mlTable").append(ml)

                    var xz = '';

                    xz += '<tr><td colspan="4" style="text-align: center;padding: 20px 10px 0px 10px;"><h2>行政拘留执行回执</h2></td></tr>' +
                        '<tr><td style="line-height:55px;">根据你局<span>逮捕证</span>决定书,' +
                        '<span>张三</span>已于<span>'+data.rsrq+'</span>入所。执行限期为————' +
                        '（自<span>'+data.jlrq+'</span>至<span>'+data.gyqx+'</span>）</td></tr>'
                    $("#xzTable").append(xz)

                    

                    
                    var jc;
                    jc += '<tr><td colspan="4" style="text-align: center;padding: 20px 10px 0px 10px;"><h2>解除拘留证明书</h2></td></tr>' +
                        '<tr><td style="line-height:55px;">被拘留人员<span>'+data.xm+'</span>，<span>'+data.xbString+'</span>，<span>'+data.csrq+'</span>出生，于<span>'+data.jlrq+'</span>被<span>'+data.jljdjg+'</span>决定行政（司法）拘留，' +
                        '拘留期限自<span>'+data.jlrq+'</span>至<span>'+data.gyqx+'</span>，现因拘留期满，予以解除拘留。' +
                        '</td></tr>' +
                        '<tr><td>特此证明</td></tr>' +
                        '<tr><td>北京市拘留所</td></tr>' +
                        '<tr><td></td></tr>'
                    $("#jcjlTable").append(jc);
                    
                },
                yes: function () {
                    main.submit(url, row, callback);
                }
            });
        },
        bindEvent: function (data) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $(".timeline-item").hide();
            $("#timeline .timeline-item").eq(0).show();
            $(".nextPage").click(function () {
                var numjia = $(this).parents('.timeline-item').index() + 1;
                $(".timeline-item").hide();
                $("#timeline .timeline-item").eq(numjia).show();

            });
            $(".lastPage").click(function () {
                var numjian = $(this).parents('.timeline-item').index() - 1;
                $(".timeline-item").hide();
                $("#timeline .timeline-item").eq(numjian).show();

            });



           
            var rybh = data.rybh;
            console.log('rybh-------------------------------'+rybh);
            var msg;
            util.ajax({
                url: url.shgxList,
                data: { rybh: rybh },
                func: function (row) {
                    var shgx = row.result.rows;
                    console.log(shgx);
                    var jtcy = '';
                    jtcy += '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">违法时间</td><td colspan="3" style="border:1px solid #ccc;padding:5px;">'+data.wfsj+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">违法地点</td><td colspan="3" style="border:1px solid #ccc;padding:5px;">'+data.wfdd+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">简要案情</td><td colspan="3" style="border:1px solid #ccc;padding:5px;">'+data.jyaq+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">何时何地受过何种处理</td><td style="border:1px solid #ccc;padding:5px;" colspan="3">'+data.bjlrjscfqk+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;" colspan="4">家庭主要成员</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">姓名</td><td style="border:1px solid #ccc;padding:5px;">关系</td><td style="border:1px solid #ccc;">工作单位</td><td style="border:1px solid #ccc;">电话</td>' +
                        '</tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:5px;">'+(shgx[0].xm!=null?shgx[0].xm:'')+'</td><td style="border:1px solid #ccc;padding:5px;">'+(shgx[0].gxString!=null?shgx[0].gxString:'')+'</td><td style="border:1px solid #ccc;padding:5px;"></td>'+(shgx[0].gzdw!=null?shgx[0].gzdw:'')+'<td style="border:1px solid #ccc;padding:5px;">'+(shgx[0].dh!=null?shgx[0].dh:'')+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:5px;">'+(shgx[1].xm!=null?shgx[1].xm:'')+'</td><td style="border:1px solid #ccc;padding:5px;">'+(shgx[1].gxString!=null?shgx[1].gxString:'')+'</td><td style="border:1px solid #ccc;padding:5px;"></td>'+(shgx[1].gzdw!=null?shgx[1].gzdw:'')+'<td style="border:1px solid #ccc;padding:5px;">'+(shgx[1].dh!=null?shgx[1].dh:'')+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:5px;">'+(shgx[2].xm!=null?shgx[2].xm:'')+'</td><td style="border:1px solid #ccc;padding:5px;">'+(shgx[2].gxString!=null?shgx[2].gxString:'')+'</td><td style="border:1px solid #ccc;padding:5px;"></td>'+(shgx[2].gzdw!=null?shgx[2].gzdw:'')+'<td style="border:1px solid #ccc;padding:5px;">'+(shgx[2].dh!=null?shgx[2].dh:'')+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:5px;">'+(shgx[3].xm!=null?shgx[3].xm:'')+'</td><td style="border:1px solid #ccc;padding:5px;">'+(shgx[3].gxString!=null?shgx[3].gxString:'')+'</td><td style="border:1px solid #ccc;padding:5px;"></td>'+(shgx[3].gzdw!=null?shgx[3].gzdw:'')+'<td style="border:1px solid #ccc;padding:5px;">'+(shgx[3].dh!=null?shgx[3].dh:'')+'</td></tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">出生日期</td><td style="border:1px solid #ccc;padding:5px;" colspan="3">'+data.csrq+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">出所原因</td><td style="border:1px solid #ccc;padding:5px;" colspan="3">'+data.csyy+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="border:1px solid #ccc;padding:5px;">出所去向</td><td style="border:1px solid #ccc;padding:5px;" colspan="3">'+data.csqx+'</td>' +
                        '</tr>'
                    $("#jtcyTable").append(jtcy)
                }
            })

            var clcs;
            util.ajax({
                url: url.clcslist,
                data: { rybh: rybh },
                func: function (row) {
                    var clcs = row.result.rows;
                    var jljc;
                    jljc += '<tr><td style="border:1px solid #ccc;padding:3px;">所名</td><td colspan="2" style="border:1px solid #ccc;padding:3px;">'+data.jljdjg+'</td ><td style="border:1px solid #ccc;padding:3px;">档案编号</td><td style="border:1px solid #ccc;padding:3px;" colspan="2">'+data.dah+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">姓名或绰号</td><td style="border:1px solid #ccc;padding:3px;">'+data.xm+'</td><td style="border:1px solid #ccc;padding:3px;">性别</td><td style="border:1px solid #ccc;padding:3px;">'+data.xbString+'</td><td style="border:1px solid #ccc;padding:3px;">出生日期</td><td style="border:1px solid #ccc;padding:3px;">'+data.csrq+'</td>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">送案单位</td><td style="border:1px solid #ccc;padding:3px;" colspan="5">'+data.badw+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">案由</td><td colspan="5" style="border:1px solid #ccc;padding:3px;">'+data.ayString+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">拘留期限自</td><td style="border:1px solid #ccc;padding:3px;">'+data.jlrq+'</td><td>至</td><td style="border:1px solid #ccc;padding:3px;" colspan="3">'+data.gyqx+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">拘室号</td><td style="border:1px solid #ccc;padding:3px;">'+data.jsh+'</td><td style="border:1px solid #ccc;padding:3px;">床位号</td><td style="border:1px solid #ccc;padding:3px;">'+data.cwh+'</td><td style="border:1px solid #ccc;padding:3px;">衣服号</td><td style="border:1px solid #ccc;padding:3px;">'+data.yfh+'</td>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">拘留期间表现</td><td style="border:1px solid #ccc;padding:3px;" colspan="5">'+data.bjlrjscfqk+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">管教民警</td><td style="border:1px solid #ccc;padding:3px;">'+(clcs[0].gjmj!=null?clcs[0].gjmj:'')+'</td><td>签名时间</td><td style="border:1px solid #ccc;padding:3px;" colspan="3">'+(clcs[0].gjmjrq!=null?clcs[0].gjmjrq:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">管教科（股、警组意见）</td><td style="border:1px solid #ccc;padding:3px;" colspan="5">'+(clcs[0].gjyj!=null?clcs[0].gjyj:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">组长签名</td><td style="border:1px solid #ccc;padding:3px;">'+(clcs[0].jzqm!=null?clcs[0].jzqm:'')+'</td><td>签名时间</td><td style="border:1px solid #ccc;padding:3px;"  colspan="3">'+(clcs[0].jzqmsj!=null?clcs[0].jzqmsj:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">组长意见</td><td style="border:1px solid #ccc;padding:3px;" colspan="5">'+(clcs[0].jzyjnr!=null?clcs[0].jzyjnr:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">签名</td><td style="border:1px solid #ccc;padding:3px;">'+(clcs[0].jzqm!=null?clcs[0].jzqm:'')+'</td><td>签名时间</td><td style="border:1px solid #ccc;padding:3px;" colspan="3">'+(clcs[0].jzqmsj!=null?clcs[0].jzqmsj:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">备注</td><td style="border:1px solid #ccc;padding:3px;" colspan="5">'+(clcs[0].bz!=null?clcs[0].bz:'')+'</td ></tr>'
                    $("#jljcTable").append(jljc);
                    var jlqm;
                    jlqm += '<tr><td style="border:1px solid #ccc;width: 19%">所名</td><td colspan="2" style="border:1px solid #ccc;padding:3px;">'+data.jljdjg+'</td ><td style="border:1px solid #ccc;width: 15%">档案编号</td><td style="border:1px solid #ccc;padding:3px;" colspan="2">'+data.dah+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">姓名或绰号</td><td style="width: 15%">'+data.xm+'</td><td style="border:1px solid #ccc;padding:3px;">性别</td><td style="border:1px solid #ccc;padding:3px;">'+data.xbString+'</td><td style="border:1px solid #ccc;padding:3px;">出生日期</td><td style="border:1px solid #ccc;padding:3px;">'+data.csrq+'</td>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">送案单位</td><td colspan="5" style="border:1px solid #ccc;padding:3px;">'+data.badw+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">案由</td><td colspan="5" style="border:1px solid #ccc;padding:3px;">'+data.ayString+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">拘留期限自</td><td>'+data.jlrq+'</td><td style="border:1px solid #ccc;padding:3px;">至</td><td style="border:1px solid #ccc;padding:3px;" colspan="3">'+data.gyqx+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">拘留号</td><td style="width: 15%">'+data.jsh+'</td><td style="border:1px solid #ccc;padding:3px;">床位号</td><td style="border:1px solid #ccc;padding:3px;">'+data.cwh+'</td><td style="border:1px solid #ccc;padding:3px;">衣服号</td><td style="border:1px solid #ccc;padding:3px;">'+data.yfh+'</td>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">拘留期间表现</td><td colspan="5" style="border:1px solid #ccc;padding:3px;">'+data.bjlrjscfqk+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">管教民警</td><td style="border:1px solid #ccc;padding:3px;">'+(clcs[0].gjmj!=null?clcs[0].gjmj:'')+'</td><td style="border:1px solid #ccc;padding:3px;">签名时间</td><td style="border:1px solid #ccc;padding:3px;" colspan="3">'+(clcs[0].gjqmrq!=null?clcs[0].gjqmrq:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">管教科（股、警组意见）</td><td style="border:1px solid #ccc;padding:3px;" colspan="5">'+(clcs[0].gjyj!=null?clcs[0].gjyj:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">签名</td><td style="border:1px solid #ccc;padding:3px;">'+(clcs[0].jzqm!=null?clcs[0].jzqm:'')+'</td><td style="border:1px solid #ccc;padding:3px;">签名时间</td><td  style="border:1px solid #ccc;padding:3px;" colspan="3">'+(clcs[0].gjmj!=null?clcs[0].gjmj:'')+'</td ></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:3px;">备注</td><td style="border:1px solid #ccc;padding:3px;" colspan="5">'+(clcs[0].bz!=null?clcs[0].bz:'')+'</td ></tr>'
                    $("#jlqmTable").append(jlqm);

                }

            })

            var thjy;
            util.ajax({
                url: url.thjylist,
                data: { rybh: rybh },
                func: function (row) {
                    var thjy = row.result.rows;
                    var th;
                    th += '<tr><td colspan="2" style="text-align: center;"><h2>谈话教育</h2></td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">姓名</td><td style="border:1px solid #ccc;padding:8px 5px;">'+data.xm+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">性别</td><td style="border:1px solid #ccc;padding:8px 5px;">'+data.xbString+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">出生年月</td><td style="border:1px solid #ccc;padding:8px 5px;">'+data.csrq+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">文化程度</td><td style="border:1px solid #ccc;padding:8px 5px;">'+data.whcdString+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">谈话人</td><td style="border:1px solid #ccc;padding:8px 5px;">'+(thjy[0].thr!=null?thjy[0].thr:'')+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">谈话类型</td><td style="border:1px solid #ccc;padding:8px 5px;"></td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">谈话时间</td><td style="border:1px solid #ccc;padding:8px 5px;">至'+(thjy[0].thkssj!=null?thjy[0].thkssj:'')+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">谈话内容</td><td style="border:1px solid #ccc;padding:8px 5px;">'+(thjy[0].thnr!=null?thjy[0].thnr:'')+'</td></tr>' +
                        '<tr><td style="border:1px solid #ccc;padding:8px 5px;">谈话录音</td><td style="border:1px solid #ccc;padding:8px 5px;">'+(thjy[0].thr!=null?thjy[0].thr:'')+'</td></tr>'
                    $("#thTable").append(th);
                }
            })

            var photo;
            util.ajax({
                url: url.photosList,
                data: { rybh: rybh, type: '1' },
                func: function (row) {

                }
            })
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.jsbh = row.jsbh;
                data.rybh = row.rybh;
                util.ajax({
                    url: url,
                    data: data,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                            }
                        } else {
                            utils.alert(data.msg);
                        }
                    }
                });
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});