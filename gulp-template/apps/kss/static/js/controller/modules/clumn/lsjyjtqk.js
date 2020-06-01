/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Gzqk 数据列表
 */
define(function (require) {
    var tools=require('awd/jquery/tools');
    var util=require('awd/easyui/util');
    var main=function(option){
        var clumns=[];

        if(util.getArrayIndex(option.clumns,'xmmc')>-1){
            clumns.push({field : 'xmmc',title : '项目',width : 200,hidden:util.getArrayIndex(option.hidden,'xmmc')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.xmmc==null?"":row.xmmc)+'>'+(row.xmmc==null?"":row.xmmc)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'num')>-1){
            clumns.push({field : 'num',title : '次数',width : 200,hidden:util.getArrayIndex(option.hidden,'num')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.num==null?"":row.num)+'>'+(row.num==null?"":row.num)+'</span>'}});
        }


        return clumns;
    };
    return main;
});