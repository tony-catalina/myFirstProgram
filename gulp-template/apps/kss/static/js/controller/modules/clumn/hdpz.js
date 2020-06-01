/*
 * Copyright 2008 [rapid-framework], Inc. All rights reserved.
 * Website: http://www.rapid-framework.org.cn
 */


/**
 * Xjzc 数据列表
 */
define(function (require) {
    var tools=require('awd/jquery/tools');
    var util=require('awd/easyui/util');
    var main=function(option){
        var clumns=[];
        if(tools.isTrue(option.check)){
            clumns.push({field: 'oid',title: '',formatter: function(value, rowData, rowIndex){return '<input type="checkbox" name="selectCheckBox" id="selectCheckBox' + rowIndex + '" value="' + rowData.oid + '" />';}});
        }else{
            clumns.push({field: 'oid',title: '',formatter: function(value, rowData, rowIndex){return '<input type="radio" name="selectRadio" id="selectRadio' + rowIndex + '" value="' + rowData.oid + '" />';}});
        }
        if(util.getArrayIndex(option.clumns,'id')>-1){
            clumns.push({field : 'id',title : 'ID',width : 200,hidden:util.getArrayIndex(option.hidden,'id')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.id==null?"":row.id)+'>'+(row.id==null?"":row.id)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'tjdw')>-1){
            clumns.push({field : 'tjdw',width:200,title:'提解单位',hidden:util.getArrayIndex(option.hidden,'tjdw')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+(row.tjdw==null?"":row.tjdw)+'>'+(row.tjdw==null?"":row.tjdw)+'</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'tjry')>-1){
            clumns.push(
                {field : 'tjry',width:200,title:'提解人',hidden:util.getArrayIndex(option.hidden,'tjry')>-1?true:false,sortable:'true',formatter: function(value,row,index){
                        var tjr = "";
                        var tjr1 = row.tjry1;
                        var tjr2 = row.tjry2;
                        if ((tjr1 != null && tjr1 != "") && (tjr2 != null && tjr2 != "")){
                            tjr=tjr1+","+tjr2;
                        } else if (tjr1 != null){
                            tjr = tjr1;
                        } else if (tjr2 != null){
                            tjr =tjr2;
                        }
                        return '<span title='+ tjr+ '>'+ tjr + '</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'tjkksjString')>-1){
            clumns.push({field : 'tjkksjString',width:200,title:'提解开始时间',hidden:util.getArrayIndex(option.hidden,'tjkksjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+ (row.tjkssjString == null ? "": row.tjkssjString)+ '>'+ (row.tjkssjString == null ? "": row.tjkssjString) + '</span>'}});
        }
        if(util.getArrayIndex(option.clumns,'tjjssjString')>-1){
            clumns.push({field : 'tjjssjString',width:200,title:'提解结束时间',hidden:util.getArrayIndex(option.hidden,'tjjssjString')>-1?true:false,sortable:'true',formatter: function(value,row,index){return '<span title='+ (row.tjjssjString == null ? "": row.tjjssjString)+ '>'+ (row.tjjssjString == null ? "": row.tjjssjString) + '</span>'}});
        }

        return clumns;
    };
    return main;
});