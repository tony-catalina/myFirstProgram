define(function () {
    'use strict';
    return{
        //业务查询
        'jjxqk':'/swj/kss/getJjxFx/',//加减刑情况
        'shgx':'/swj/kss/getShgxFx/',//社会关系
        'jshj':'/swj/kss/getJshjFx/',//家属会见
        'jjqk':'/swj/kss/getJjFx/',//戒具情况
        'tjjl':'/swj/kss/getJstzFx/',//调监记录
        'rscx':'/swj/kss/getRscx/',//入所查询
        'tscx':'/swj/kss/getTsdj/',//提审查询
        'hjbd':'/swj/kss/getHjbd/',//环节变动
        'yqqk':'/swj/kss/getYq/',//延期执行
        'tafqk':'/swj/kss/getTaf/',//同案犯情况
        'thjy':'/swj/kss/getThjyFx/',//谈话教育
        'jbqk':'/swj/kss/getJbFx/',//禁闭情况
        'emqk':'/swj/kss/getEmdjFx',//耳目情况
        'sgqk':'/swj/kss/getFssgFx',//事故情况
        'cscx':'/swj/kss/getClcsFx',//出所查询
        'lshj':'/swj/kss/getLshjFx',//律师会见
        'pjdj':'/swj/kss/getPjdjFx',//判决登记
        //人员查询
        'zyrycx':'',//在押人员查询
        'mjxxcx':'',//民警信息查询
        'gzrycx':'',//工作人员查询
        'barycx':'',//办案人员查询
        'lsxxcx':'',//律师信息查询
        //信息研判
        'cljyfx':'',//超期羁押分析
        'cqjyqkfx':'',//超期羁押情况分析
        'zdryfx':'',//重点人员分析
        'ylqkfx':'',//医疗情况分析
        'ryflfx':'',//人员分类分析
        'ajqkfx':'',//案件情况分析
        'wgqkfx':'',//违规情况分析
        'lsfxfx':'',//留所服刑分析
        'lslsfx':'',//临时离所分析
        'sjwslryfx':'',//送监未收录人员分析
        'xdryfx':'',//吸毒人员分析
        'yzjbryfx':'',//严重疾病人员分析
        'gyqxfx':'',//严重疾病人员分析
        'gjfx':'',//国籍分析

        // '不同类型所新收总数':'/mock/kss/jssw',
        // '各地区新收人数':'',
        // '各所新收人数':'',
        // '近10日新收人数-看守所':'',
        // '近10日新收人数-拘留所':'',
        // '近10日新收人数-戒毒所':'',
        // '近10日新收人数-监护医疗':'',
        // '近10日新收人数-强制医疗':'',
        // //-----------------------------
        // '不同类型所出所总数':'/mock/kss/jssw',
        // '各地区出所人数':'',
        // '各所出所人数':'',
        // '近10日出所人数-看守所':'',
        // '近10日出所人数-拘留所':'',
        // '近10日出所人数-戒毒所':'',
        // '近10日出所人数-监护医疗':'',
        // '近10日出所人数-强制医疗':'',
        // //-----------------------------
        // '不同类型所提审总数':'/mock/kss/jssw',
        // '各地区提审人数':'',
        // '各所提审人数':'',
        // '近10日提审人数-看守所':'',
        // '近10日提审人数-拘留所':'',
        // '近10日提审人数-戒毒所':'',
        // '近10日提审人数-监护医疗':'',
        // '近10日提审人数-强制医疗':'',
        // //-----------------------------
        // '不同类型所提解总数':'/mock/kss/jssw',
        // '各地区提解人数':'',
        // '各所提解人数':'',
        // '近10日提解人数-看守所':'',
        // '近10日提解人数-拘留所':'',
        // '近10日提解人数-戒毒所':'',
        // '近10日提解人数-监护医疗':'',
        // '近10日提解人数-强制医疗':'',
        // //-----------------------------
        // '不同类型所律师会见总数':'/mock/kss/jssw',
        // '各地区律师会见人数':'',
        // '各所律师会见人数':'',
        // '近10日律师会见人数-看守所':'',
        // '近10日律师会见人数-拘留所':'',
        // '近10日律师会见人数-戒毒所':'',
        // '近10日律师会见人数-监护医疗':'',
        // '近10日律师会见人数-强制医疗':'',
        // //-----------------------------
        // '不同类型所家属会见总数':'/mock/kss/jssw',
        // '各地区家属会见人数':'',
        // '各所家属会见人数':'',
        // '近10日家属会见人数-看守所':'',
        // '近10日家属会见人数-拘留所':'',
        // '近10日家属会见人数-戒毒所':'',
        // '近10日家属会见人数-监护医疗':'',
        // '近10日家属会见人数-强制医疗':'',
        // //-----------------------------
        // '不同类型所临时出所总数':'/mock/kss/jssw',
        // '各地区临时出所人数':'',
        // '各所临时出所人数':'',
        // '近10日临时出所人数-看守所':'',
        // '近10日临时出所人数-拘留所':'',
        // '近10日临时出所人数-戒毒所':'',
        // '近10日临时出所人数-监护医疗':'',
        // '近10日临时出所人数-强制医疗':'',
        // //-----------------------------
        // '不同类型所所外就医总数':'/mock/kss/jssw',
        // '各地区所外就医人数':'',
        // '各所所外就医人数':'',
        // '近10日所外就医人数-看守所':'',
        // '近10日所外就医人数-拘留所':'',
        // '近10日所外就医人数-戒毒所':'',
        // '近10日所外就医人数-监护医疗':'',
        // '近10日所外就医人数-强制医疗':'',
        // //-----------------------------
        // '不同类型暂予监外执行总数':'/mock/kss/jssw',
        // '各地区暂予监外执行人数':'',
        // '各所暂予监外执行人数':'',
        // '近10日暂予监外执行人数-看守所':'',
        // '近10日暂予监外执行人数-拘留所':'',
        // '近10日暂予监外执行人数-戒毒所':'',
        // '近10日暂予监外执行人数-监护医疗':'',
        // '近10日暂予监外执行人数-强制医疗':''
    };
  });
