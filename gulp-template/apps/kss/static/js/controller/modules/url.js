define(function() {
    'use strict';
    var product = false;
    var main = {
        zrapAdd: (product ? '' : '/kss') + '/kss_zrap/zrapAdd',
        //公共方法
        getMenus: (product ? '' : '/mock') + '/menus/list',
        getDictionary: (product ? '' : '/kss') + '/kss_dictionary/getDictionary',
        getJqCombotree: (product ? '' : '/kss') + '/kss_jq/getJqCombotree',
        getJsCombotree: (product ? '' : '/kss') + '/kss_js/jsCombotree',
        jqtree: (product ? '' : '/kss') + '/kss_jq/getJqTree',
        jbxxlist: (product ? '' : '/kss') + '/kss_jbxx/jbxxListFojbxxForHjbdrYwtz',
        jbxx: (product ? '' : '/kss') + '/kss_jbxx/jbxxList',
        syJbxx: (product ? '' : '/kss') + '/sy/syJbxx',
        jbxxphoto: (product ? '' : '/kss') + '/kss_photos/getPhotoSingle',
        extTreeNode: (product ? '' : '/kss') + '/kss_jq/extTreeNode',
        spdetailorderUpdateByList: (product ? '' : '/kss') + '/kss_spdetailorder/spdetailorderUpdateByList',
        gjSp: (product ? '' : '/kss') + '/kss_zbypsq/gjSp',
        addFlow: (product ? '' : '/kss') + '/kss_zbypsq/addFlow',
        findCountBySbfh: (product ? '' : '/kss') + '/kss_sbfhgl/findCountBySbfh',
        kssList: (product ? '' : '/kss') + '/kss_kss/kssList',
        zbypsqldsp: (product ? '' : '/kss') + '/kss_zbypsq/ldsp',
        jslxAdd: (product ? '' : '/kss') + '/kss_jslx/jslxAdd',
        jsswHistoryList: (product ? '' : '/kss') + '/kss_sqsw/jsswHistoryList',
        getDictionaryContent: (product ? '' : '/kss') + '/kss_dictionary/getDictionaryContent',
        //收押接待
        jbxxForHjbd: (product ? '' : '/kss') + '/kss_hjbd/jbxxForHjbd',
        firstJkjc: (product ? '' : '/kss') + '/kss_jkjc/firstJkjc',
        xyrAqjcSave: (product ? '' : '/kss') + '/kss_xyr/xyrAqjcSave',
        shffAdd: (product ? '' : '/kss') + '/kss_shff/shffAdd',
        saveSwtz: (product ? '' : '/kss') + '/kss_swtzcj/saveSwtz',
        OutSwtz: (product ? '' : '/kss') + '/kss_swtzcj/OutSwtz',
        saveGz: (product ? '' : '/kss') + '/kss_qlywgz/saveGz',
        ldspForRsdj: (product ? '' : '/kss') + '/kss_ldsp/ldspForRsdj',
        saveZbsy: (product ? '' : '/kss') + '/kss_xyr/saveZbsy',
        jjwpSave: (product ? '' : '/kss') + '/kss_jbxx/jjwpSave',
        getSykz: (product ? '' : '/kss') + '/kss_jbxx/getSykz',
        saveAsShdj: (product ? '' : '/kss') + '/kss_xyr/saveAsShdj',
        syrsYwdt: (product ? '' : '/kss') + '/kss_jbxx/syrsYwdt',
        csUpdatejbxx: (product ? '' : '/kss') + '/kss_clcs/csUpdatejbxx',
        clcsAdd: (product ? '' : '/kss') + '/kss_clcs/clcsAdd',
        tzcsSend: (product ? '' : '/kss') + '/kss_clcs/tzcsSend',
        csglJypz: (product ? '' : '/kss') + '/kss_clcs/csglJypz',
        deleteFlowSfz: (product ? '' : '/kss') + '/kss_clcs/deleteFlowSfz',
        ldspAdd: (product ? '' : '/kss') + '/kss_ldsp/ldspAdd',
        clcsYwdt: (product ? '' : '/kss') + '/kss_csgl/clcsYwdt',
        addLscsCs: (product ? '' : '/kss') + '/kss_lscs/addLscsCs',
        lscsAddFlow: (product ? '' : '/kss') + '/kss_lscs/lscsAddFlow',
        addLscsHsqr: (product ? '' : '/kss') + '/kss_lscs/addLscsHsqr',
        addLscsLdsp: (product ? '' : '/kss') + '/kss_lscs/addLscsLdsp',
        lscsYwdt: (product ? '' : '/kss') + '/kss_lscs/lscsYwdt',
        addJwzxJd: (product ? '' : '/kss') + '/kss_jwzx/addJwzxJd',
        syFwdj: (product ? '' : '/kss') + '/kss_cwgl/syFwdj',
        noFwdjFlow: (product ? '' : '/kss') + '/kss_cwgl/noFwdjFlow',
        bzcwCount: (product ? '' : '/kss') + '/kss_cwgl/bzcwCount',
        jwzxAdd: (product ? '' : '/kss') + '/kss_jwzx/jwzxAdd',
        swhyjAdd: (product ? '' : '/kss') + '/kss_jwzx/swhyjAdd',
        jwzxYwdt: (product ? '' : '/kss') + '/kss_jwzx/jwzxYwdt',
        plyqAdd: (product ? '' : '/kss') + '/kss_yq/plyqAdd',
        yqdjAdd: (product ? '' : '/kss') + '/kss_yq/yqdjAdd',
        yqYwdt: (product ? '' : '/kss') + '/kss_yq/yqYwdt',
        yqZjhd: (product ? '' : '/kss') + '/kss_yq/yqZjhd',
        hjbdPlAdd: (product ? '' : '/kss') + '/kss_hjbd/hjbdPlAdd',
        pjdjAdd: (product ? '' : '/kss') + '/kss_pjdj/pjdjAdd',
        pjdjUpdate: (product ? '' : '/kss') + '/kss_pjdj/pjdjUpdate',
        pjdjYwdt: (product ? '' : '/kss') + '/kss_pjdj/pjdjYwdt',
        startSjyy: (product ? '' : '/kss') + '/kss_sjyy/startSjyy',
        startJs: (product ? '' : '/kss') + '/kss_sjyy/startJs',
        saveSjyys: (product ? '' : '/kss') + '/kss_sjyy/saveSjyys',
        jsbjdUpdate: (product ? '' : '/kss') + '/kss_jsbjd/jsbjdUpdate',
        jsbjdAdd: (product ? '' : '/kss') + '/kss_jsbjd/jsbjdAdd',
        jsbjdCx: (product ? '' : '/kss') + '/kss_jbxx/jsbjdCx',
        updateShff: (product ? '' : '/kss') + '/kss_shff/updateShff',
        shffBf: (product ? '' : '/kss') + '/kss_shff/shffBf',
        wpglList: (product ? '' : '/kss') + '/kss_wpgl/wpglList',
        sqswList: (product ? '' : '/kss') + '/kss_sqsw/sqswList',
        syyz: (product ? '' : '/kss') + '/kss_zbypsq/syyz',
        ddgyaddflow: (product ? '' : '/kss') + '/kss_ddgy/ddgyaddflow',
        setWcshf: (product ? '' : '/kss') + '/kss_jbxx/setWcshf',

        hjbdYwdt: (product ? '' : '/kss') + '/kss_hjbd/hjbdYwdt',
        jfjdList: (product ? '' : '/kss') + '/cw/cwJfjdQuery',

        //窗口服务
        wlrylist: (product ? '' : '/kss') + '/kss_wlrydj/wlryList',
        plFlowwpgl: (product ? '' : '/kss') + '/kss_wpgl/plFlowwpgl',
        cstzlist: (product ? '' : '/kss') + '/kss_clcs/cstzList',
        saveForKsrs: (product ? '' : '/kss') + '/kss_xyr/saveForKsrs',
        rsdjJbxxAdd: (product ? '' : '/kss') + '/kss_rsdj/rsdjJbxxAdd',
        saveAsLegal: (product ? '' : '/kss') + '/kss_xyr/saveAsLegal',
        dabh: (product ? '' : '/kss') + '/kss_xyr/dabh',
        findMjJbxx: (product ? '' : '/kss') + '/kss_gwjjb/findMjJbxx',
        saveForKsrsZp: (product ? '' : '/kss') + '/kss_xyr/saveForKsrsZp',
        shdjQuery: (product ? '' : '/kss') + '/kss_xyr/QueryjbxxList', //收回登记查询方法
        jkjcQuery: (product ? '' : '/kss') + '/kss_xyr/getXyrTaskList',
        processList: (product ? '' : '/kss') + '/kss_xyr/getXyrTaskList',
        processTaskList: (product ? '' : '/kss') + '/kss_process/getProcessTaskList', //流程查询方法
        allProcessTaskList: (product ? '' : '/kss') + '/kss_process/getAllProcessTaskList', //流程查询方法
        photosList: (product ? '' : '/kss') + '/kss_photos/photosList', //人员照片查询方法
        shffList: (product ? '' : '/kss') + '/kss_shff/shffList', //手环发放查询查询方法
        fwdjList: (product ? '' : '/kss') + '/kss_xyr/getFwdjTaskList',
        csglYwtzList: (product ? '' : '/kss') + '/kss_clcs/jbxxListForYwtz', //出所管理业务台账查询
        hjdjQueryjbxx: (product ? '' : '/kss') + '/kss_jbxx/jbxxList',
        jshjywtzQuery: (product ? '' : '/kss') + '/kss_jshj/jbxxForJshj',
        lshjywtzQuery: (product ? '' : '/kss') + '/kss_lshj/jbxxForLshj',
        lshjwsbdQuery: (product ? '' : '/kss') + '/kss_jbxx/jbxxList',
        lswgdjQuery: (product ? '' : '/kss') + '/kss_lshj/lshjList',
        lswgQuery: (product ? '' : '/kss') + '/kss_lswg/lswgList',
        jstzList: (product ? '' : '/kss') + '/kss_jstz/jstzList',
        zxgsz: (product ? '' : '/kss') + '/kss_mjjbxx/zxgsz',
        csglList: (product ? '' : '/kss') + '/kss_clcs/csglList', //今日出所查询方法
        lscsList: (product ? '' : '/kss') + '/kss_lscs/LscsList', //临时出所查询
        swrypgYwtz: (product ? '' : '/kss') + '/kss_swrypg/swrypgYwtz',
        lscsjbxxList: (product ? '' : '/kss') + '/kss_lscs/jbxxForLscs',
        jwzxList: (product ? '' : '/kss') + '/kss_jwzx/jbxxForJwzx',
        yqjbxxList: (product ? '' : '/kss') + '/kss_yq/jbxxForYq',
        hjbdList: (product ? '' : '/kss') + '/kss_hjbd/hjbdList',
        cljgList: (product ? '' : '/kss') + '/kss_pjdj/jbxxForPjdj',
        sjjsList: (product ? '' : '/kss') + '/kss_sjyy/sjyyList',
        sjyylsryList: (product ? '' : '/kss') + '/kss_sjyy/lsryList',
        jsbjdList: (product ? '' : '/kss') + '/kss_jsbjd/jsbjdList',
        cwcxjbxxList: (product ? '' : '/kss') + '/kss_cwcx/cwcxList',
        rsdjyzdjList: (product ? '' : '/kss') + '/kss_xyr/xyrList?czzt=01,06',
        aqjcUpdate: (product ? '' : '/kss') + '/kss_aqjc/aqjcUpdate',
        emYwtz: (product ? '' : '/kss') + '/kss_em/emYwtz',
        xjglList: (product ? '' : '/kss') + '/kss_xjgl/xjglList',
        zdryYwtz: (product ? '' : '/kss') + '/kss_zdry/zdryYwtz',
        thjyList: (product ? '' : '/kss') + '/kss_thjy/thjyList',
        jtjyList: (product ? '' : '/kss') + '/kss_thjy/jtjyList',
        zyryjljlYwtz: (product ? '' : '/kss') + '/kss_jcjl/zyryjljlYwtz',
        zyrycfjlYwtz: (product ? '' : '/kss') + '/kss_cfgl/zyrycfjlYwtz',
        shgxYwtz: (product ? '' : '/kss') + '/kss_shgx/shgxYwtz',
        xjYwtz: (product ? '' : '/kss') + '/kss_xj/xjYwtz',
        xzpaYwtz: (product ? '' : '/kss') + '/kss_xzpa/xzpaYwtz',
        jbxxForTj: (product ? '' : '/kss') + '/kss_tj/jbxxForTj',
        getDictionaryPage: (product ? '' : '/kss') + '/kss_dictionary/getDictionaryPage', //律师单位
        ldjfList: (product ? '' : '/kss') + '/kss_ldjf/ldjfList',
        getFlowNodeCount: (product ? '' : '/kss') + '/kss_process/getFlowNodeCount',
        tszglList: (product ? '' : '/kss') + '/kss_tszgl/tszglList',
        tjHdpz: (product ? '' : '/kss') + '/kss_tj/tjHdpz',
        tjhsaqjcAdd: (product ? '' : '/kss') + '/kss_tj/tjhsaqjcAdd',
        addTjdj: (product ? '' : '/kss') + '/kss_tj/addTjdj',
        tjjqtrdjAdd: (product ? '' : '/kss') + '/kss_tj/jqtrdjAdd',
        tjYwdt: (product ? '' : '/kss') + '/kss_tj/tjYwdt',
        addTsdjHsaqjc: (product ? '' : '/kss') + '/kss_ts/addTsdjHsaqjc',
        txHdpz: (product ? '' : '/kss') + '/kss_ts/txHdpz',
        txJqtrdj: (product ? '' : '/kss') + '/kss_ts/txJqtrdj',
        txTxmcx: (product ? '' : '/kss') + '/kss_ts/addTsdj',
        txAdd: (product ? '' : '/kss') + '/kss_ts/txAdd',
        removeTaf: (product ? '' : '/kss') + '/kss_taf/removeTaf',
        tszglAdd: (product ? '' : '/kss') + '/kss_tszgl/tszglAdd',
        tszglUpdate: (product ? '' : '/kss') + '/kss_tszgl/tszglUpdate',
        jshjAqjcAdd: (product ? '' : '/kss') + '/kss_jshj/aqjcAdd',
        drjsAdd: (product ? '' : '/kss') + '/kss_jshj/drjsAdd',
        jshjAdd: (product ? '' : '/kss') + '/kss_jshj/jshjAdd',
        trdjAdd: (product ? '' : '/kss') + '/kss_jshj/trdjAdd',
        jshjldspAdd: (product ? '' : '/kss') + '/kss_jshj/ldspAdd',
        jshjHjs: (product ? '' : '/kss') + '/kss_jshj/jshjHjs',
        hjaqjcAdd: (product ? '' : '/kss') + '/kss_lshj/hjaqjcAdd',
        hjdjAdd: (product ? '' : '/kss') + '/kss_lshj/hjdjAdd',
        LshjHdpz: (product ? '' : '/kss') + '/kss_lshj/LshjHdpz',
        lshjjqtrdjAdd: (product ? '' : '/kss') + '/kss_lshj/jqtrdjAdd',
        lswgAdd: (product ? '' : '/kss') + '/kss_lswg/lswgAdd',
        lkdjUpdata: (product ? '' : '/kss') + '/kss_wlrydj/lkdjUpdata',
        rydjAdd: (product ? '' : '/kss') + '/kss_wlrydj/rydjAdd',
        wlryYwdt: (product ? '' : '/kss') + '/kss_wlrydj/wlryYwdt',
        ldjfYwdt: (product ? '' : '/kss') + '/kss_ldjf/ldjfYwdt',
        jstzAdd: (product ? '' : '/kss') + '/kss_jstz/jstzAdd',
        ldspByjstz: (product ? '' : '/kss') + '/kss_ldsp/ldspByjstz',
        jqAndList: (product ? '' : '/kss') + '/kss_js/jqAndList',
        jstzQr: (product ? '' : '/kss') + '/kss_jstz/jstzQr',
        jstzYwtz: (product ? '' : '/kss') + '/kss_jstz/jstzYwtz',
        swryAdd: (product ? '' : '/kss') + '/kss_swrypg/swry_add',
        emdjCXAdd: (product ? '' : '/kss') + '/kss_em/emdjCXAdd',
        zdjsyjAdd: (product ? '' : '/kss') + '/kss_em/zdjsyjAdd',
        emYwdt: (product ? '' : '/kss') + '/kss_em/emYwdt',
        qkfyAdd: (product ? '' : '/kss') + '/kss_qkfy/qkfyAdd',
        sldyjAdd: (product ? '' : '/kss') + '/kss_em/sldyjAdd',
        emdjAdd: (product ? '' : '/kss') + '/kss_em/emdjAdd',
        xjclAdd: (product ? '' : '/kss') + '/kss_xjgl/xjclAdd',
        xjglldspAdd: (product ? '' : '/kss') + '/kss_xjgl/ldspAdd',
        fxdjAdd: (product ? '' : '/kss') + '/kss_xjgl/fxdjAdd',
        sxdjAdd: (product ? '' : '/kss') + '/kss_xjgl/sxdjAdd',
        addcwgl: (product ? '' : '/kss') + '/kss_cwgl/addcwgl',
        addsbfhgl: (product ? '' : '/kss') + '/kss_sbfhgl/addsbfhgl',
        addzyrybxjd: (product ? '' : '/kss') + '/kss_zyrybxjd/addzyrybxjd',
        zdryjcAdd: (product ? '' : '/kss') + '/kss_zdry/zdryjcAdd',
        zdrySpAdd: (product ? '' : '/kss') + '/kss_zdry/zdrySpAdd',
        zdryAdd: (product ? '' : '/kss') + '/kss_zdry/zdryAdd',
        zdryList: (product ? '' : '/kss') + '/kss_zdry/zdryList',
        zdryYwdt: (product ? '' : '/kss') + '/kss_zdry/zdryYwdt',
        thjyjbxxList: (product ? '' : '/kss') + '/kss_thjy/jbxxList',
        jlcpAdd: (product ? '' : '/kss') + '/kss_jcjl/jlcpAdd',
        jlglDjFlow: (product ? '' : '/kss') + '/kss_jcjl/jlglDjFlow',
        ldspyjAdd: (product ? '' : '/kss') + '/kss_jcjl/ldspyjAdd',
        jcjlYwdt: (product ? '' : '/kss') + '/kss_jcjl/jcjlYwdt',
        cfcpAdd: (product ? '' : '/kss') + '/kss_cfgl/cfcpAdd',
        cfjcAdd: (product ? '' : '/kss') + '/kss_cfgl/cfjcAdd',
        cfglSpAdd: (product ? '' : '/kss') + '/kss_cfgl/cfglSpAdd',
        cfycAdd: (product ? '' : '/kss') + '/kss_cfgl/cfycAdd',
        cfglYwdt: (product ? '' : '/kss') + '/kss_cfgl/cfglYwdt',
        shgxAdd: (product ? '' : '/kss') + '/kss_shgx/shgxAdd',
        xjszAdd: (product ? '' : '/kss') + '/kss_xj/xjszAdd',
        xjAddSpflow: (product ? '' : '/kss') + '/kss_ldsp/xj_addSpflow',
        xjYwdt: (product ? '' : '/kss') + '/kss_xj/xjYwdt',
        xzpaAddflow: (product ? '' : '/kss') + '/kss_xzpa/xzpaAddflow',
        clzdflow: (product ? '' : '/kss') + '/kss_xzpa/clzdflow',
        cxzpaLdspflow: (product ? '' : '/kss') + '/kss_ldsp/xzpa_ldspflow',
        cxzpaYwdt: (product ? '' : '/kss') + '/kss_xzpa/xzpaYwdt',
        jbjcAdd: (product ? '' : '/kss') + '/kss_jb/jbjcAdd',
        jbjbList: (product ? '' : '/kss') + '/kss_jb/jbList',
        jbszAdd: (product ? '' : '/kss') + '/kss_jb/jbszAdd',
        jbycAdd: (product ? '' : '/kss') + '/kss_jb/jbycAdd',
        ldspAddByGj: (product ? '' : '/kss') + '/kss_ldsp/ldspAddByGj',
        jjwpslAdd: (product ? '' : '/kss') + '/kss_jjwpsl/jjwpslAdd',
        emkhAdd: (product ? '' : '/kss') + '/kss_em/emkhAdd',
        zrapList: (product ? '' : '/kss') + '/kss_zrap/zrapList',
        qjglAdd: (product ? '' : '/kss') + '/kss_qjgl/qjglAdd',
        jszxjcAdd: (product ? '' : '/kss') + '/kss_jszxjc/jszxjcAdd',
        jszxjcUpdate: (product ? '' : '/kss') + '/kss_jszxjc/jszxjcUpdate',
        wmjsszDelete: (product ? '' : '/kss') + '/kss_wmjs/wmjsszDelete',
        wmjsszAdd: (product ? '' : '/kss') + '/kss_wmjs/wmjsszAdd',
        xlgyAdd: (product ? '' : '/kss') + '/kss_xlgy/xlgyAdd',
        xlgyUpdate: (product ? '' : '/kss') + '/kss_xlgy/xlgyUpdate',
        xljkAdd: (product ? '' : '/kss') + '/kss_xljk/xljkAdd',
        xljkUpdate: (product ? '' : '/kss') + '/kss_xljk/xljkUpdate',
        zdzyAdd: (product ? '' : '/kss') + '/kss_zdzy/zdzyAdd',
        cypjAdd: (product ? '' : '/kss') + '/kss_fjcygl/cypjAdd',
        ygryjcAdd: (product ? '' : '/kss') + '/kss_ygry/ygryjcAdd',
        ygryszAdd: (product ? '' : '/kss') + '/kss_ygry/ygryszAdd',
        jjwplist: (product ? '' : '/kss') + '/kss_jjwpsl/jjwpslList',
        ygryycAdd: (product ? '' : '/kss') + '/kss_ygry/ygryycAdd',
        zyafList: (product ? '' : '/kss') + '/kss_zyaf/zyafList',
        zyafAdd: (product ? '' : '/kss') + '/kss_zyaf/zyafAdd',
        zyafUpdate: (product ? '' : '/kss') + '/kss_zyaf/zyafUpdate',
        xyrUpdateById: (product ? '' : '/kss') + '/kss_xyr/xyrUpdateById',
        wgsjclUpdate: (product ? '' : '/kss') + '/kss_wgcl/wgsjclUpdate',
        wgsjclyyUpdate: (product ? '' : '/kss') + '/kss_wgcl/wgsjclyyUpdate',
        drgyjsAdd: (product ? '' : '/kss') + '/kss_ddgy/drgyjsAdd',
        ddgyExecuteflow: (product ? '' : '/kss') + '/kss_ddgy/ddgyExecuteflow',
        jkfjlAdd: (product ? '' : '/kss') + '/kss_jkfjl/jkfjlAdd',
        thjyAdd: (product ? '' : '/kss') + '/kss_thjy/thjyAdd',
        ddgyLdspAdd: (product ? '' : '/kss') + '/kss_ddgy/ddgy_ldspAdd',
        fxpgAdd: (product ? '' : '/kss') + '/kss_fxpgRygkcs/fxpgAdd',
        fxpgList: (product ? '' : '/kss') + '/kss_fxpgRygkcs/fxpgList',
        jslxldsp: (product ? '' : '/kss') + '/kss_jslx/ldspAdd',
        addTary: (product ? '' : '/kss') + '/kss_taf/addTary',
        jjwpglList: (product ? '' : '/kss') + 'kss_jjwpgl/jjwpglList',
        //综合模块
        aqjcList: (product ? '' : '/kss') + '/kss_aqjc/aqjcList', //安全检查
        sqfxList: (product ? '' : '/kss') + '/kss_sqfx/sqfxList', //所请分析
        yjylList: (product ? '' : '/kss') + '/kss_yjyayl/yjyaylList', //应急演练
        wqsyYwtz: (product ? '' : '/kss') + '/kss_wqsy/wqsyAndMjxx', //武器使用业务台账
        wqsyList: (product ? '' : '/kss') + '/kss_mjjbxx/mjjbxxList', //武器使用
        wqsyProcess: (product ? '' : '/kss') + '/kss_wqsy/getProcessTaskListForMjjbxx', //武器使用流程
        mjglList: (product ? '' : '/kss') + '/kss_mjjbxx/mjjbxxList', //民警管理基本信息
        dimjSave: (product ? '' : '/kss') + '/kss_mjjbxx/mjjbxxUpdateGzzt', //调离民警
        mjjyjlList: (product ? '' : '/kss') + '/kss_mjjyjl/mjjyjlList', //民警教育记录
        mjjcjllList: (product ? '' : '/kss') + '/kss_mjjcjl/mjjcjlList', //民警奖惩记录
        mjgzjlList: (product ? '' : '/kss') + '/kss_mjgzjl/mjgzjlList', //民警工作记录
        mjshgxList: (product ? '' : '/kss') + '/kss_mjshgx/mjshgxList', //民警社会关系
        JygzzlpgList: (product ? '' : '/kss') + '/kss_jygzzlpg/JygzzlpgList', //监狱质量评估查询
        sqfxAdd: (product ? '' : '/kss') + '/kss_sqfx/sqfxAdd',
        sqfxUpdate: (product ? '' : '/kss') + '/kss_sqfx/sqfxUpdate',
        yjyaylAdd: (product ? '' : '/kss') + '/kss_yjyayl/yjyaylAdd',
        yjyaylUpdate: (product ? '' : '/kss') + '/kss_yjyayl/yjyaylUpdate',
        jxkhAdd: (product ? '' : '/kss') + '/kss_jxkh/jxkhAdd',
        jxkhUpdate: (product ? '' : '/kss') + '/kss_jxkh/jxkhUpdate',
        lstlhmcList: (product ? '' : '/kss') + '/kss_lstlhmc/lstlhmcList',
        tlhmcList: (product ? '' : '/kss') + '/kss_tlhmc/tlhmcList',
        jbxxListWithoutState: (product ? '' : '/kss') + '/kss_lstlhmc/jbxxListWithoutState',
        lstlhmcDelete: (product ? '' : '/kss') + '/kss_lstlhmc/lstlhmcDelete',
        zbdjadd: (product ? '' : '/kss') + '/kss_zbdj/zbdjAdd', //新增值日安排
        getLsjyJtqk: (product ? '' : '/kss') + '/kss_jbxx/getLsjyJtqk',
        xdrzUpdate: (product ? '' : '/kss') + '/kss_xdrz/xdrzUpdate', //修改消毒日志
        xdrzAdd: (product ? '' : '/kss') + '/kss_xdrz/xdrzAdd', //新增消毒日志
        qtgzryglUpdateState: (product ? '' : '/kss') + '/kss_qtgzrygl/updateState', //工作人员管理

        //公共事务
        ggswaqjcList: (product ? '' : '/kss') + '/kss_ggsw/aqjcList',
        scqkList: (product ? '' : '/kss') + '/kss_ggsw/scqkList', //公共事务视察情况
        ddgyList: (product ? '' : '/kss') + '/kss_ddgy/ddgyList', //单独关押根据人员编号查询数据
        jyjyList: (product ? '' : '/kss') + '/kss_ggsw/jtjyList', //集体教育
        yqfxList: (product ? '' : '/kss') + '/kss_ggsw/yqfxList', //狱情分析
        szjdjlList: (product ? '' : '/kss') + '/kss_ggsw/szjdjlList', //所长接待记录
        yjyaylList: (product ? '' : '/kss') + '/kss_ggsw/yjyaylList', //应急预案演练
        swhyList: (product ? '' : '/kss') + '/kss_ggsw/swhyList', //所务会议
        lxhyList: (product ? '' : '/kss') + '/kss_ggsw/lxhyList', //联席会议
        zydtfxhyList: (product ? '' : '/kss') + '/kss_ggsw/zydtfxhyList', //在押人员动态分析会议
        fssgList: (product ? '' : '/kss') + '/kss_sgsjdj/fssgList', //事故事件登记
        xjbList: (product ? '' : '/kss') + '/kss_xjb/xjbList',
        jjxList: (product ? '' : '/kss') + '/kss_jjx/jjxList', //加减刑

        tsclTableList: (product ? '' : '/kss') + '/kss_tscl/tsclTableList', //投诉处理人员信息
        tsclSeach: (product ? '' : '/kss') + '/kss_tscl/tsclSeach', //投诉处理
        jqfbList: (product ? '' : '/kss') + '/kss_jqfb/jqfbList', //警情管理
        zbdjList: (product ? '' : '/kss') + '/kss_zbdj/zbdjList', //值班登记
        qtgzryglList: (product ? '' : '/kss') + '/kss_qtgzrygl/qtgzryglList', //其他工作人员管理
        lybList: (product ? '' : '/kss') + '/kss_lyb/lybList', //留言簿
        xdrzList: (product ? '' : '/kss') + '/kss_xdrz/xdrzList', //消毒日志
        wmxcList: (product ? '' : '/kss') + '/kss_wmxc/wmxcList', //文秘宣传
        djglList: (product ? '' : '/kss') + '/kss_djgl/djglList', //党建管理
        zbkqList: (product ? '' : '/kss') + '/kss_zbkq/zbkqList', //值班考勤
        jxkhList: (product ? '' : '/kss') + '/kss_jxkh/jxkhList', //绩效考核
        yabzList: (product ? '' : '/kss') + '/kss_yabz/yabzList', //预案编制
        yabzAdd: (product ? '' : '/kss') + '/kss_yabz/yabzAdd', //预案编制-新增
        yabzUpdate: (product ? '' : '/kss') + '/kss_yabz/yabzUpdate', //预案编制-修改
        zbkqAdd: (product ? '' : '/kss') + '/kss_zbkq/zbkqAdd', //值班考勤-新增
        zbkqUpdate: (product ? '' : '/kss') + '/kss_zbkq/zbkqUpdate', //值班考勤-修改
        djglAdd: (product ? '' : '/kss') + '/kss_djgl/djglAdd', //党建管理-新增
        djglUpdate: (product ? '' : '/kss') + '/kss_djgl/djglUpdate', //党建管理-修改
        wmxcAdd: (product ? '' : '/kss') + '/kss_wmxc/wmxcAdd', //文秘宣传-新增
        wmxcUpdate: (product ? '' : '/kss') + '/kss_wmxc/wmxcUpdate', //文秘宣传-修改
        ryxxUpdate: (product ? '' : '/kss') + '/kss_jbxx/ryxxUpdate', //人员信息维护
        syQueryOne: (product ? '' : '/kss') + '/kss_zbdj/syQueryOne', //值班登记
        jqfbAdd: (product ? '' : '/kss') + '/kss_jqfb/jqfbAdd', //警情管理-新增
        jqfbUpdate: (product ? '' : '/kss') + '/kss_jqfb/jqfbUpdate', //警情管理-修改
        tsclLdspAdd: (product ? '' : '/kss') + '/kss_tscl/ldspAdd', //投诉处理-领导审批
        tscljgAdd: (product ? '' : '/kss') + '/kss_tscl/tscljgAdd', //投诉处理-登记处理结果
        tscldjAdd: (product ? '' : '/kss') + '/kss_tscl/tscldjAdd', //投诉处理-投诉处理登记
        JygzzlpgAdd: (product ? '' : '/kss') + '/kss_jygzzlpg/JygzzlpgAdd', //教育质量改造评估-新增
        JygzzlpgUpdate: (product ? '' : '/kss') + '/kss_jygzzlpg/JygzzlpgUpdate', //教育质量改造评估-修改
        jjxAdd: (product ? '' : '/kss') + '/kss_jjx/jjxAdd', //加减刑-加减刑新增
        jjxUpdate: (product ? '' : '/kss') + '/kss_jjx/jjxUpdate', //加减刑-加减刑修改
        ldspAddByZh: (product ? '' : '/kss') + '/kss_ldsp/ldspAddByZh', //加减刑-领导审批
        xjbAdd: (product ? '' : '/kss') + '/kss_xjb/xjbAdd', //巡检记录-新增
        xjbUpdate: (product ? '' : '/kss') + '/kss_xjb/xjbUpdate', //巡检记录-修改
        fssgAdd: (product ? '' : '/kss') + '/kss_sgsjdj/fssgAdd', //事故事件登记-新增
        fssgUpdate: (product ? '' : '/kss') + '/kss_sgsjdj/fssgUpdate', //事故事件登记-修改
        jtjyAdd: (product ? '' : '/kss') + '/kss_ggsw/jtjyAdd', //集体教育-新增
        jtjyUpdate: (product ? '' : '/kss') + '/kss_ggsw/jtjyUpdate', //集体教育-修改
        lxhyAdd: (product ? '' : '/kss') + '/kss_ggsw/lxhyAdd', //联席会议-新增
        lxhyUpdate: (product ? '' : '/kss') + '/kss_ggsw/lxhyUpdate', //联席会议-修改
        scqkAdd: (product ? '' : '/kss') + '/kss_ggsw/scqkAdd', //视察情况-新增
        scqkUpdate: (product ? '' : '/kss') + '/kss_ggsw/scqkUpdate', //视察情况-修改
        swhyAdd: (product ? '' : '/kss') + '/kss_ggsw/swhyAdd', //所务会议-新增
        swhyUpdate: (product ? '' : '/kss') + '/kss_ggsw/swhyUpdate', //所务会议-修改
        szjdjlAdd: (product ? '' : '/kss') + '/kss_ggsw/szjdjlAdd', //所长接待记录-新增
        szjdjlUpdate: (product ? '' : '/kss') + '/kss_ggsw/szjdjlUpdate', //所长接待记录-修改
        ggswyjyaylAdd: (product ? '' : '/kss') + '/kss_ggsw/yjyaylAdd', //应急预案演练-新增
        ggswyjyaylUpdate: (product ? '' : '/kss') + '/kss_ggsw/yjyaylUpdate', //应急预案演练-修改
        yqfxAdd: (product ? '' : '/kss') + '/kss_ggsw/yqfxAdd', //狱情分析-新增
        yqfxUpdate: (product ? '' : '/kss') + '/kss_ggsw/yqfxUpdate', //狱情分析-修改
        zydtfxhyAdd: (product ? '' : '/kss') + '/kss_ggsw/zydtfxhyAdd', //在押人员动态分析会议-新增
        zydtfxhyUpdate: (product ? '' : '/kss') + '/kss_ggsw/zydtfxhyUpdate', //在押人员动态分析会议-修改
        mjshgxAdd: (product ? '' : '/kss') + '/kss_mjshgx/mjshgxAdd', //民警社会关系-新增
        mjshgxUpdate: (product ? '' : '/kss') + '/kss_mjshgx/mjshgxUpdate', //民警社会关系-修改
        mjgzjlAdd: (product ? '' : '/kss') + '/kss_mjgzjl/mjgzjlAdd', //民警工作经历-新增
        mjgzjlUpdate: (product ? '' : '/kss') + '/kss_mjgzjl/mjgzjlUpdate', //民警工作经历-修改
        mjjcjlAdd: (product ? '' : '/kss') + '/kss_mjjcjl/mjjcjlAdd', //民警奖惩记录-新增
        mjjcjlUpdate: (product ? '' : '/kss') + '/kss_mjjcjl/mjjcjlUpdate', //民警奖惩记录-修改
        mjjyjlAdd: (product ? '' : '/kss') + '/kss_mjjyjl/mjjyjlAdd', //民警教育经历-新增
        mjjyjlUpdate: (product ? '' : '/kss') + '/kss_mjjyjl/mjjyjlUpdate', //民警教育经历-修改
        mjjbxxAdd: (product ? '' : '/kss') + '/kss_mjjbxx/mjjbxxAdd', //民警基本信息-新增
        mjjbxxUpdate: (product ? '' : '/kss') + '/kss_mjjbxx/mjjbxxUpdate', //民警基本信息-修改
        wqsyldspAdd: (product ? '' : '/kss') + '/kss_wqsy/ldspAdd', //武器使用-领导审批
        addWqgh: (product ? '' : '/kss') + '/kss_wqsy/addWqgh', //武器使用-武器归还
        wqsyAddFlow: (product ? '' : '/kss') + '/kss_wqsy/wqsyAddFlow', //武器使用-武器使用呈批
        findPwglByCwh: (product ? '' : '/kss') + '/kss_cwgl/findPwglByCwh',
        xjhzList: (product ? '' : '/kss') + '/kss_xjhz/xjhzList',
        xjth: (product ? '' : '/kss') + '/kss_xjhz/xjth',
        gzqkAdd: (product ? '' : '/kss') + '/kss_gzqk/gzqkAdd',
        qkfyUpdate: (product ? '' : '/kss') + '/kss_qkfy/qkfyUpdate',
        gzqkUpdate: (product ? '' : '/kss') + '/kss_gzqk/gzqkUpdate',
        jkfzdList: (product ? '' : '/kss') + '/kss_jkfzd/jkfzdList',
        thjyjtjyAdd: (product ? '' : '/kss') + '/kss_thjy/jtjyAdd',



        //医疗管理
        findJbxxByBnjc: (product ? '' : '/kss') + '/kss_jbxx/findJbxxByBnjc', //待半年检查
        zyryfyJbxxList: (product ? '' : '/kss') + '/kss_jbxx/zyryfyJbxxList', //在押人员发药记录
        findYpxxAndYpzs: (product ? '' : '/kss') + '/kss_ypkcck/findYpxxAndYpzs', //药品信息与库存
        ypxxAdd: (product ? '' : '/kss') + '/kss_ypxx/ypxxAdd', //药品库存添加
        ypxxUpdate: (product ? '' : '/kss') + '/kss_ypxx/ypxxUpdate', //药品库存修改
        ypclList: (product ? '' : '/kss') + '/kss_ypcl/ypclList', //药品处理
        ypclAdd: (product ? '' : '/kss') + '/kss_ypcl/ypclAdd', //药品处理添加
        ypjhjlList: (product ? '' : '/kss') + '/kss_ypjhjl/ypjhjlList', //药品进货记录
        ysxzList: (product ? '' : '/kss') + '/kss_ysxz/ysxzList', //医生巡诊-投送监狱人员名单
        jkqkAndTmtzList: (product ? '' : '/kss') + '/kss_jkjc/jkqkAndTmtzList', //健康检查-健康检查-投送监狱人员名单
        cxcyList: (product ? '' : '/kss') + '/kss_cxcy/cxcyList', //抽血采样-投送监狱人员名单
        rsjcList: (product ? '' : '/kss') + '/kss_rsjc/rsjcList', //妊娠检查-投送监狱人员名单
        zyryfyjlList: (product ? '' : '/kss') + '/kss_zyryfyjl/zyryfyjlList', //在押人员发药记录-投送监狱人员名单
        dcdrjs: (product ? '' : '/kss') + '/kss_process/dcdrjsAdd', //带出带入监室
        jyAdd: (product ? '' : '/kss') + '/kss_jygl/jyAdd', //就医管理-就医登记
        ldspAddByYw: (product ? '' : '/kss') + '/kss_ldsp/ldspAddByYw', //就医管理-领导审批
        saveJyzlxxlr: (product ? '' : '/kss') + '/kss_jygl/saveJyzlxxlr', //就医管理-治疗信息录入
        saveZyzlqr: (product ? '' : '/kss') + '/kss_jygl/saveZyzlqr', //就医管理-住院治疗确认
        ysxzAdd: (product ? '' : '/kss') + '/kss_ysxz/ysxzAdd', //医生巡诊-新增
        ysxzUpdate: (product ? '' : '/kss') + '/kss_ysxz/ysxzUpdate', //医生巡诊-修改
        byxxSwjyList: (product ? '' : '/kss') + '/kss_jygl/byxxSwjyList', //医生巡诊-所外就医
        byxxSnjyList: (product ? '' : '/kss') + '/kss_jygl/byxxSnjyList', //医生巡诊-所内就医
        zbhJc: (product ? '' : '/kss') + '/kss_zbhgl/zbhJc', //重病号管理-解除重病号
        zbhSave: (product ? '' : '/kss') + '/kss_zbhgl/zbhSave', //重病号管理-重病号登记
        zbhFbt: (product ? '' : '/kss') + '/kss_zbhgl/zbhFbt', //重病号管理-重病号分布图
        //zbh: (product ? '' : '/kss') + '/kss_Count/yw_ZbhQuery',//统计在押人数、普通病号数、重病号数
        zbypsqList: (product ? '' : '/kss') + '/kss_zbypsq/zbypsqList', //自备药品申请查询

        JbqkQuery: (product ? '' : '/kss') + '/kss_Count/yw_JbqkQuery', //统计心脏病、高血压、糖尿病、普通感冒、传染性疾病、重大疾病的人数
        ywJbqkQuery: (product ? '' : '/kss') + '/yw/ywJbqkQuery', //查询不同病号的人员信息
        bntjblAdd: (product ? '' : '/kss') + '/kss_ylxxbl/bntjblAdd', //医疗信息补录-半年体检补录
        rstjblAdd: (product ? '' : '/kss') + '/kss_ylxxbl/rstjblAdd', //医疗信息补录-入所体检补录
        JyxxQuery: (product ? '' : '/kss') + '/kss_Count/yw_JyxxQuery', //统计所内就医、所外就医、带就医、待观察的人数
        sqdjAdd: (product ? '' : '/kss') + '/kss_ylxxbl/sqdjAdd', //医疗信息补录-伤情补录
        saveJkqkAndTmtzByYw: (product ? '' : '/kss') + '/kss_jkjc/saveJkqkAndTmtzByYw', //健康检查-半年检查
        jkqkForWxjcUpdate: (product ? '' : '/kss') + '/kss_jkjc/jkqkForWxjcUpdate', //健康检查-五项补录
        cxcyAdd: (product ? '' : '/kss') + '/kss_cxcy/cxcyAdd', //抽血采样-新增
        cxcyUpdate: (product ? '' : '/kss') + '/kss_cxcy/cxcyUpdate', //抽血采样-修改
        addYpjhjlAndYpkc: (product ? '' : '/kss') + '/kss_ypjhjl/addYpjhjlAndYpkc', //人员药品购买
        rsjcAdd: (product ? '' : '/kss') + '/kss_rsjc/rsjcAdd',
        rsjcUpdate: (product ? '' : '/kss') + '/kss_rsjc/rsjcUpdate',
        zyryfyjlAdd: (product ? '' : '/kss') + '/kss_zyryfyjl/zyryfyjlAdd',
        jcJsyc: (product ? '' : '/kss') + '/kss_jsycgl/jcJsyc',
        saveJslx: (product ? '' : '/kss') + '/kss_jslx/saveJslx',
        saveForBlzp: (product ? '' : '/kss') + '/kss_ylxxbl/saveForBlzp',
        selectTmsq: (product ? '' : '/kss') + '/kss_ylxxbl/selectTmsq',
        ysqr: (product ? '' : '/kss') + '/kss_zbypsq/ysqr',
        getKcYpmcList: (product ? '' : '/kss') + '/kss_ypkcck/getKcYpmcList',
        xjzcjc: (product ? '' : '/kss') + '/kss_xj/xjzcjc',
        //巡控管理
        gwjjbList: (product ? '' : '/kss') + '/kss_gwjjb/gwjjbList', //岗位交接班
        qybzList: (product ? '' : '/kss') + '/kss_qybz/qybzList', //一日生活制度，后面要加bzlx
        ddfjgzList: (product ? '' : '/kss') + '/kss_ddfjgz/ddfjgzList', //督导辅警工作
        dmList: (product ? '' : '/kss') + '/kss_dm/dmList', //点名
        ffanList: (product ? '' : '/kss') + '/kss_ffan/ffanList', //发饭
        ptxzqybzList: (product ? '' : '/kss') + '/kss_ptxz/qybzList', //陪同巡诊
        wxgsqybzList: (product ? '' : '/kss') + '/kss_wxgs/qybzList', //维修跟随
        xgList: (product ? '' : '/kss') + '/kss_xg/xgList', //巡更记录
        xsjlList: (product ? '' : '/kss') + '/kss_xsjl/xsjlList', //巡视记录
        jkrzList: (product ? '' : '/kss') + '/kss_jkrz/jkrzList', //监控日志
        tfsjdjList: (product ? '' : '/kss') + '/kss_tfsjdj/tfsjdjList', //突发事件登记
        jbxxList: (product ? '' : '/kss') + '/kss_jbxx/jbxxList', //报告处理
        zyrybgclList: (product ? '' : '/kss') + '/kss_zyrybgcl/zyrybgclList', //报告处理
        jsList: (product ? '' : '/kss') + '/kss_js/jsList', //文明监室
        //wmjsList: (product ? '' : '/kss') + '/kss_wmjs/wmjsList', //
        xjjcList: (product ? '' : '/kss') + '/xksy/xjjcList', //巡控首页-本月未完成工作械具
        xkddgyList: (product ? '' : '/kss') + '/kss_process/getProcessTaskList', //巡控首页-本月未完成工作单独
        qjglList: (product ? '' : '/kss') + '/kss_qjgl/qjglList', //清监管理
        tsYWTZList: (product ? '' : '/kss') + '/kss_ts/jbxxForTs', //提讯业务台账
        tssListUseState: (product ? '' : '/kss') + '/kss_ts/tssListUseState', //提讯业务动态
        aqjcAdd: (product ? '' : '/kss') + '/kss_aqjc/aqjcAdd',
        wgsjclAdd: (product ? '' : '/kss') + '/kss_wgdj/wgsjclAdd', //违规登记
        gwjjbjbqr: (product ? '' : '/kss') + '/kss_gwjjb/gwjjbjbqr', //交接班-接班
        gwjjbflow: (product ? '' : '/kss') + '/kss_gwjjb/gwjjbflow', //交接班-交班
        qybzAdd: (product ? '' : '/kss') + '/kss_qybz/qybzAdd', //一日生活制度-新增
        ddfjgzAdd: (product ? '' : '/kss') + '/kss_ddfjgz/ddfjgzAdd', //督导辅警工作
        xsjlAdd: (product ? '' : '/kss') + '/kss_xsjl/xsjlAdd', //巡视记录-巡视登记
        xsjlUpdate: (product ? '' : '/kss') + '/kss_xsjl/xsjlUpdate', //巡视记录-修改
        jkrzAdd: (product ? '' : '/kss') + '/kss_jkrz/jkrzAdd', //监控日志-新增
        wgTree: (product ? '' : '/kss') + '/kss_classfic/getfindNode',
        dmAdd: (product ? '' : '/kss') + '/kss_dm/dmAdd',
        ffanAdd: (product ? '' : '/kss') + '/kss_ffan/ffanAdd',
        wpjsAddBycw: (product ? '' : '/kss') + '/kss_wpjs/wpjsAddBycw',
        ldspList: (product ? '' : '/kss') + '/kss_ldsp/ldspList',
        lkglAdd: (product ? '' : '/kss') + '/kss_lkgl/lkglAdd',
        zyrybgclAdd: (product ? '' : '/kss') + '/kss_zyrybgcl/zyrybgclAdd',
        tfsjdjAdd: (product ? '' : '/kss') + '/kss_tfsjdj/tfsjdjAdd',
        tfsjdjUpdate: (product ? '' : '/kss') + '/kss_tfsjdj/tfsjdjUpdate',
        wsfyAdd: (product ? '' : '/kss') + '/kss_wsfy/wsfyAdd',
        wsfyQuery: (product ? '' : '/kss') + '/kss_wsfy/wsfyQuery',
        ylyyAdd: (product ? '' : '/kss') + '/kss_ylyy/ylyyAdd',
        sjrySelected: (product ? '' : '/kss') + '/kss_jbxx/sjrySelected',
        jsycAdd: (product ? '' : '/kss') + '/kss_jsycgl/jsycAdd',
        xkfxry: (product ? '' : '/kss') + '/xksy/xk_fxryQuery', //巡控-风险人员
        xkfxryrs: (product ? '' : '/kss') + '/kss_Count/xk_fxryQuery', //巡控-风险人员-统计
        xkbywwcgz: (product ? '' : '/kss') + '/xksy/xk_bywwcgzQuery', //巡控-本月未完成
		xkbywwcgzCount: (product ? '' : '/kss') + '/kss_Count/xk_BywwcgzQuery', //巡控-本月未完成
        xkdbsxrs: (product ? '' : '/kss') + '/kss_Count/xk_DbsxQuery', //巡控-待办事项-统计
        xkdbsx: (product ? '' : '/kss') + '/xksy/xk_dbsxQuery', //巡控-待办事项
        xkTztgQuery: (product ? '' : '/kss') +'/xksy/xkTztgQuery',//巡控首页通知通告接口


        //财务平台
        getYeWithRybhAndBz: (product ? '' : '/kss') + '/kss_cwcx/getYeWithRybhAndBz', //送钱送物
        xjjsList: (product ? '' : '/kss') + '/kss_xjjj/xjjsList',
        shgxList: (product ? '' : '/kss') + '/kss_shgx/shgxList',
        JsswListByRybh: (product ? '' : '/kss') + '/kss_jssw/JsswListByRybh',
        QueryJsswByYwzt: (product ? '' : '/kss') + '/kss_jssw/QueryJsswByYwzt',
        wpcxList: (product ? '' : '/kss') + '/kss_wpgl/wpcxList',
        xjzcList: (product ? '' : '/kss') + '/kss_xjzc/xjzcList',
        xjzcJbxxList: (product ? '' : '/kss') + '/cw/cwBzcwqkQuery',
        getProcessForGwgl: (product ? '' : '/kss') + '/kss_spdetailorder/getProcessForGwgl',
        spglList: (product ? '' : '/kss') + '/kss_spgl/spglList',
        wpjsList: (product ? '' : '/kss') + '/kss_wpjs/wpjsList',
        wpjsJbxxList: (product ? '' : '/kss') + '/kss_wpjs/wpjsJbxxList',
        sqswAdd: (product ? '' : '/kss') + '/kss_sqsw/sqswAdd', //送钱送物-业务登记
        updateJsswById: (product ? '' : '/kss') + '/kss_jssw/updateJsswById', //家属送物
        saveWp: (product ? '' : '/kss') + '/kss_jssw/saveWp', //家属送物-添加
        xjthAdd: (product ? '' : '/kss') + '/kss_cwth/xjthAdd', //财务退还-现金退还
        ShForGwgl: (product ? '' : '/kss') + '/kss_spdetailorder/ShForGwgl', //购物管理-所领导审批
        gwglGjzdsp: (product ? '' : '/kss') + '/kss_spdetailorder/ShForGwgl', //购物管理-管教中队审批
        spLq: (product ? '' : '/kss') + '/kss_spdetailorder/spLq', //购物管理-在押人员确认
        saveSpdetailAndDeduct: (product ? '' : '/kss') + '/kss_spdetailorder/saveSpdetailAndDeduct', //购物管理-在押人员申请
        spglLists: (product ? '' : '/kss') + '/kss_spgl/spglLists',
        xjjsAdd: (product ? '' : '/kss') + '/kss_xjjj/xjjsAdd', //财务送钱送物保存
        xjjsUpdate: (product ? '' : '/kss') + '/kss_xjjj/xjjsUpdate', //财务送钱送物修改
        //领导办公
        jqzxList: (product ? '' : '/kss') + '/kss_ldjc/jqzxList',
        jsnwList: (product ? '' : '/kss') + '/kss_ldjc/jsnwList',
        mjzfList: (product ? '' : '/kss') + '/kss_ldjc/mjzfList',
        xggzyqList: (product ? '' : '/kss') + '/kss_ldjc/xggzyqList',
        emdjList: (product ? '' : '/kss') + '/kss_em/emdjList',
        tsdjList: (product ? '' : '/kss') + '/kss_tsdj/tsdjList',
        getXjList: (product ? '' : '/kss') + '/kss_xj/getXjList',
        jshjList: (product ? '' : '/kss') + '/kss_jshj/jshjList',
        getShgx: (product ? '' : '/kss') + '/kss_jshj/getShgx',
        zdzyList: (product ? '' : '/kss') + '/kss_zdzy/zdzyList',
        cstzList: (product ? '' : '/kss') + '/kss_cstz/cstzList',
        cszwbdList: (product ? '' : '/kss') + '/kss_cszwbd/cszwbdList',
        lsfxList: (product ? '' : '/kss') + '/kss_lsfx/lsfxList',
        djshjryList: (product ? '' : '/kss') + '/kss_djshjry/djshjryList',
        dtxscxList: (product ? '' : '/kss') + '/kss_dtxscx/dtxscxList',
        cyglcxList: (product ? '' : '/kss') + '/kss_cyglcx/cyglcxList',
        xjszDbgsList: (product ? '' : '/kss') + '/kss_xj/xjszDbgsList',
        lscsByjbxx: (product ? '' : '/kss') + '/kss_lscs/lscsByjbxx',
        getMjxx: (product ? '' : '/kss') + '/kss_ldcx_getMjxx',
        xggzyqAdd: (product ? '' : '/kss') + '/kss_ldjc/xggzyqAdd', //领导检查-相关工作要求
        jqzxAdd: (product ? '' : '/kss') + '/kss_ldjc/jqzxAdd', //领导检查-监区秩序
        jsnwAdd: (product ? '' : '/kss') + '/kss_ldjc/jsnwAdd', //领导检查-监所内务
        mjzfAdd: (product ? '' : '/kss') + '/kss_ldjc/mjzfAdd', //领导检查-民警执法.
        csgl: (product ? '' : '/kss') + '/kss_clcs/csglList', //所领导查询区-出所管理
        lshj: (product ? '' : '/kss') + '/kss_lshj/lshjList', //所领导查询区-律师会见
        jshj: (product ? '' : '/kss') + '/kss_jshj/jshjList', //所领导查询区-家属会见
        syrs: (product ? '' : '/kss') + '/kss_jbxx/jbxxList', //所领导查询区-收押入所


        //查询统计
        cqjyList: (product ? '' : '/kss') + '/kss_cqjy/cqjyList',
        cqjySevenList: (product ? '' : '/kss') + '/kss_cqjy/cqjySevenList',
        pjdjList: (product ? '' : '/kss') + '/kss_pjdj/pjdjList',
        tafList: (product ? '' : '/kss') + '/kss_taf/tafList',
        dbsxCount: (product ? '' : '/kss') + '/sy/dbsxCount',
        syDbsxQuery: (product ? '' : '/kss') + '/sy/syDbsxQuery',
        xjList: (product ? '' : '/kss') + '/kss_xj/xjList',
        jbList: (product ? '' : '/kss') + '/kss_jb/jbList',
        ygryList: (product ? '' : '/kss') + '/kss_ygry/ygryList',
        jbxxLdfList: (product ? '' : '/kss') + '/kss_ldf/jbxxLdfList',
        jkqkList: (product ? '' : '/kss') + '/kss_jkjc/jkqkList',
        jslxList: (product ? '' : '/kss') + '/kss_jslx/jslxList',
        jyList: (product ? '' : '/kss') + '/kss_jygl/jyList',
        //byywtj: (product ? '' : '/kss') + '/kss_Count/byywtj',
        csdjList: (product ? '' : '/kss') + '/kss_csdj/csdjList',
        tsList: (product ? '' : '/kss') + '/kss_ts/tsList',
        fxdjList: (product ? '' : '/kss') + '/kss_fxdj/fxdjList',
        crjjcList: (product ? '' : '/kss') + '/kss_dcdrjl/crjjcList',
        cxswhyList: (product ? '' : '/kss') + '/kss_swhy/swhyList',
        cxyqfxList: (product ? '' : '/kss') + '/kss_yqfx/yqfxList',
        sqdtfxhyList: (product ? '' : '/kss') + '/kss_sqdtfxhy/sqdtfxhyList',
        loginlogsList: (product ? '' : '/kss') + '/kss_dlrz/loginlogsList', //登录日志
        logList: (product ? '' : '/kss') + '/kss_ywczrz/logList', //业务操作日志
        getUsers: (product ? '' : '/kss') + '/kss_ldcx/getUsers',
        photosListTj: (product ? '' : '/kss') + '/kss_photos/photosListTj',
        //管教
        JsAndzxgCx: (product ? '' : '/kss') + '/kss_js/JsAndzxgCx',
        xlgyList: (product ? '' : '/kss') + '/kss_xlgy/xlgyList',
        xljkList: (product ? '' : '/kss') + '/kss_xljk/xljkList',
        cypjList: (product ? '' : '/kss') + '/kss_fjcygl/cypjList',
        ygryszList: (product ? '' : '/kss') + '/kss_ygry/ygryszList',
        ygrySyList: (product ? '' : '/kss') + '/kss_ygry/ygrySyList',
        wgclList: (product ? '' : '/kss') + '/kss_wgcl/wgclList',
        jkfjlList: (product ? '' : '/kss') + '/kss_jkfjl/jkfjlList',
        jjwpgl: (product ? '' : '/kss') + '/kss_jjwpgl/jjwpgl',
        jjwpglSave: (product ? '' : '/kss') + '/kss_jjwpgl/jjwpglSave',
        jjwpslList: (product ? '' : '/kss') + '/kss_jjwpsl/jjwpslList',
        jszxjcList: (product ? '' : '/kss') + '/kss_jszxjc/jszxjcList',
        jsxmList: (product ? '' : '/kss') + '/kss_xjgl/jsxmList', //信件管理-发信登记
        JsAndzxg: (product ? '' : '/kss') + '/kss_js/JsAndzxg',
        getByJsh: (product ? '' : '/kss') + '/kss_js/getByJsh',
        qkfyList: (product ? '' : '/kss') + '/kss_qkfy/qkfyList',
        gzqkList: (product ? '' : '/kss') + '/kss_gzqk/gzqkList',
        jjdlAdd: (product ? '' : '/kss') + '/kss_ldjf/jjdlAdd', //械具
        lfjfupdate: (product ? '' : '/kss') + '/kss_ldjf/lfjfupdate', //械具
        getJsXqList: (product ? '' : '/kss') + '/kss_jbxx/getJsXqList', //监室调整监室查询
        jbldry: (product ? '' : '/kss') + '/kss_gwjjb/findMjJbxx', //岗位交接班-交班 领导人员下拉数据查询

        //首页接口
        allModules: (product ? '' : '/kss') + '/kss_homepage/allModules', //用户首页自定义模块配置接口
        customizeSave: (product ? '' : '/kss') + '/kss_homepage/customizeSave', //用户首页自定义模块保存接口
        deleteModule: (product ? '' : '/kss') + '/kss_homepage/deleteModule', //用户首页自定义模块删除接口
        customizeQuery: (product ? '' : '/kss') + '/kss_homepage/customizeQuery', //查询用户自定义的所有模块

        syXjjjList: (product ? '' : '/kss') + '/kss_xjjj/syXjjjList', //收押岗位-本周接济清单
        syWpglList: (product ? '' : '/kss') + '/kss_wpgl/syWpgl', //收押岗位-本周物品清单
        syLscsList: (product ? '' : '/kss') + '/kss_lscs/syLscs', //收押岗位-本周临时出所
        syGwjjb: (product ? '' : '/kss') + '/kss_gwjjb/syGwjjb', //首页交接班人员
        ywsyJjbQuery: (product ? '' : '/kss') + '/yw/ywsyJjbQuery',//交接班人员信息
        zhGwjjb: (product ? '' : '/kss') + '/zh/zhGwjjb', //首页综合交接班人员
        bzxjjjtj: (product ? '' : '/kss') + '/kss_Count/cw_BzxjjjQuery', //首页财务岗位现金接济
        ywzbhQuery: (product ? '' : '/kss') + '/yw/ywzbhQuery', //查询不同病号的人员信息
        zbh: (product ? '' : '/kss') + '/kss_Count/yw_ZbhQuery', //统计在押人数、普通病号数、重病号数

        cwgwszjd: (product ? '' : '/kss') + '/cw/cwSzjdQuery', //首页财务岗位所长接待
        cwgwstcg: (product ? '' : '/kss') + '/kss_Count/cw_StcgQuery', //首页财务岗位食堂采购
        cwgwstcgmx: (product ? '' : '/kss') + '/cw/cwStcgQuery', //首页财务岗位食堂采购记录明细

        tjbzcwCount: (product ? '' : '/kss') + '/kss_Count/cw_BzcwqkQuery', //统计本周现金接收金额、现金支出金额、商品支付金额、财务退还金额
        bzxjjjlist: (product ? '' : '/kss') + '/cw/cwBzxjjjQuery', //首页财务岗位本周现金接济

        bzwpjjtj: (product ? '' : '/kss') + '/kss_Count/cw_BzwpjjQuery', //首页财务岗位本周物品接济
        wpjsmx: (product ? '' : '/kss') + '/cw/cwBzWpjjQuery', //首页财务岗位本周物品接济明细

        gdzcglxx: (product ? '' : '/kss') + '/kss_Count/cw_ZcglQuery', //首页财务岗位固定资产管理
        gdzcmx: (product ? '' : '/kss') + '/cw/cw_gdzcglQuery', //首页财务岗位固定资产管理明细


        sysy: (product ? '' : '/kss') + '/kss_jbxx/sysy', //首页收押监所统计
        syRsyy: (product ? '' : '/kss') + '/kss_jbxx/syRsyy', //收押首页-本月人员入所原因

        xkWmjs: (product ? '' : '/kss') + '/kss_Count/xkWmjs', //管教首页--文明监室查询
        gj_wmjsQuery: (product ? '' : '/kss') + '/gj/gj_wmjsQuery', //管教首页--文明监室点击查询
        bzJstzList: (product ? '' : '/kss') + '/gj/bzJstzList', //管教首页--本周监室调整记录
        bzXsjlList: (product ? '' : '/kss') + '/gj/bzXsjlList', //管教首页--本周巡视记录
        gj_bzXsjlQuery: (product ? '' : '/kss') + '/gj/gj_bzXsjlQuery', //管教首页--本周巡视记录查询
        bzXjsyList: (product ? '' : '/kss') + '/gj/bzXjsyList', //管教首页--本周械具记录
        //byYwtj: (product ? '' : '/kss') + '/kss_Count/gj_byywtj',//管教首页--本月业务统计
        gj_ByywtjQuery: (product ? '' : '/kss') + '/kss_Count/gj_ByywtjQuery', //管教首页--本月业务统计
        gj_byYwtjQuery: (product ? '' : '/kss') + '/kss_Count/gj_byYwtjQuery', //管教首页--本月业务统计点击查询信息
        gj_bzJstzQuery: (product ? '' : '/kss') + '/gj/gj_bzJstzQuery', //管教首页--查询本周监室调整记录详细信息
        gj_qybzQuery: (product ? '' : '/kss') + '/gj/gj_qybzQuery', //管教首页--权益保障点击查询
        gj_QybzQuery: (product ? '' : '/kss') + '/kss_Count/gj_QybzQuery', //管教首页--权益保障记录查询
      
       

        ywsyXzjlList: (product ? '' : '/kss') + '/yw/ywsyXzjl', //医务管理首页-巡诊记录
        ywsyYpkcList: (product ? '' : '/kss') + '/yw/ywsyYpkc', //医务管理首页-药品库存
        ywsyYpjhjlList: (product ? '' : '/kss') + '/yw/ywsyYpjhjl', //医务管理首页-药品进货记录
        jyxxList: (product ? '' : '/kss') + '/ywsy/jyxxList', //首页医务管理首页-就医信息
        swjyQuery: (product ? '' : '/kss') + '/yw/swjyQuery', //查询待就医人员信息
        ywWsfyQuery: (product ? '' : '/kss') + '/yw/ywWsfyQuery', //查询最后一个卫生防疫记录信息

        syJrtsrs: (product ? '' : '/kss') + '/kss_Count/sy_JrtsrsQuery', //收押首页-今日提审、提解待提 已提人数查询
        syJrTxtjQuery: (product ? '' : '/kss') + '/sy/syJrTxtjQuery', //收押首页-今日提审、提解待提 根据业务类型查询表格
        syJrcrs: (product ? '' : '/kss') + '/kss_Count/sy_JrcrsQuery', //收押首页-今日出入所人数
        //syJrcrsQuery: (product ? '' : '/kss') + '/sy/syJrcrsQuery ', //收押首页-今日出入所人数弹框
        syJrhjqk: (product ? '' : '/kss') + '/kss_Count/sy_JrhjqkQuery', //收押首页-今日会见情况
        //syJrhjqkQuery: (product ? '' : '/kss') + '/sy/syJrhjqkQuery', //收押首页-今日会见情况弹框
        syBahjCount: (product ? '' : '/kss') + '/kss_Count/sy_BahjCountQuery', //收押首页-办案环节
        syBzcrs: (product ? '' : '/kss') + '/kss_Count/sy_BzcrsQuery', //收押首页-本周出入所人数
        syBzCrsQuery: (product ? '' : '/kss') + '/sy/syBzCrs',

        gjFxdjtj: (product ? '' : '/kss') + '/gj/gjFxdjtj', //管教首页-风险人员
        gj_bzXjsyQuery: (product ? '' : '/kss') + '/gj/gj_bzXjsyQuery', //管教首页-本月械具查询
        syDwcgzqk: (product ? '' : '/kss') + '/gj/syDwcgzqk', //管教首页-本月械具待解除情况
        gjQybz: (product ? '' : '/kss') + '/gj/gjQybz', //管教首页-权益保障点击查询
        byYwtjList: (product ? '' : '/kss') + '/gj/byYwtj', //管教首页-本月业务统计
        byYwtj: (product ? '' : '/kss') + '/gj/byYwtj', //管教首页-本月业务统计点击弹框查询

        xkdbsxList: (product ? '' : '/kss') + '/xk/xkdbsxList',

        zhAqjc: (product ? '' : '/kss') + '/kss/zh/zhAqjc', //综合首页--安全检查情况
        syzhdwgl: (product ? '' : '/kss') + '/zh/zhDwglQuery', //首页综合-队伍管理
        syzhjcqk: (product ? '' : '/kss') + '/zh/zhMjcjQuery', //首页综合-奖惩情况
        syzhjrdbsx: (product ? '' : '/kss') + '/zh/zhDbsxQuery', //首页综合-今日待办事项
        syzhaqjcqk: (product ? '' : '/kss') + '/zh/zh_aqjcqkQuery', //首页综合-安全检查情况
        syzhwgcl: (product ? '' : '/kss') + '/zh/zhWgsjQuery', //首页综合-违规处理
        syzhdrjl: (product ? '' : '/kss') + '/zh/zh_drjlQuery', //首页综合-当日警力
        syzhjszk: (product ? '' : '/kss') + '/kss_Count/zh_JszkQuery', //首页综合-监所总控
        syzhjxgl: (product ? '' : '/kss') + '/kss_Count/zh_JxglQuery', //首页综合-绩效管理
        syzhqwbz: (product ? '' : '/kss') + '/kss_Count/zh_QwbzQuery', //首页综合-勤务保障
        syzhqwbzdetail: (product ? '' : '/kss') + '/zh/zhQwbzQuery', //首页综合-勤务保障明细
        syzhjszkdetail: (product ? '' : '/kss') + '/zh/zhJszkQuery', //首页综合-监所总控明细
        syzhjxgldetail: (product ? '' : '/kss') + '/zh/zhJxglQuery', //首页综合-绩效管理明细

        // 亲情电话接口
        qqdhStart: (product ? '' : '/kss') + '/kss_qqdh/qqdhStart',
        qqdhexecuteflow: (product ? '' : '/kss') + '/kss_qqdh/qqdhexecuteflow',
        //假数据接口
        jrcrs: (product ? '' : '/kss') + '/kss_Count/jrcrs', //收押主页-今日出入所
        jrhjqk: (product ? '' : '/kss') + '/kss_Count/jrhjqk', //收押主页-今日会见情况
        byywtj: (product ? '' : '/kss') + '/kss_Count/gj_byywtj', //管教主页-本月业务统计
        qybz: (product ? '' : '/kss') + '/kss_Count/gj_qybz', //管教主页-权益保障
        jyxx: (product ? '' : '/kss') + '/kss_Count/yw_jyxx', //医务主页-就医信息
        jkjc: (product ? '' : '/kss') + '/kss_Count/yw_jkjc', //医务主页-健康检查
        jbqk: (product ? '' : '/kss') + '/kss_Count/yw_jbqk', //医务主页-疾病情况
        dbsx: (product ? '' : '/kss') + '/kss_Count/xk_dbsx', //巡控首页-代办事项
        bywwcgz: (product ? '' : '/kss') + '/kss_Count/bywwcgz', //巡控首页-本月未完成工作
        jqss: (product ? '' : '/kss') + '/kss_Count/sld_jqss', //所领导-监区设施
        bjczqk: (product ? '' : '/kss') + '/kss_Count/bjczqk', //所领导-各类所里报警及处置情况
        db_sx: (product ? '' : '/kss') + '/kss_Count/sld_dbsx', //所领导-待办事项
        szcx: (product ? '' : '/kss') + '/kss_Count/sld_szcxq', //所领导-所长查询区
        qwbz: (product ? '' : '/kss') + '/kss_Count/zh_qwbz', //综合-勤务保障
        jxgl: (product ? '' : '/kss') + '/kss_Count/zh_jxgl', //综合-绩效管理
        jszk: (product ? '' : '/kss') + '/kss_Count/zh_jszk', //综合-监所总控
        zcgl: (product ? '' : '/kss') + '/kss_Count/cw_zcgl', //财务-固定资产产管理
        mjdrkh: (product ? '' : '/kss') + '/kss_Count/sld_MjdrjxkhQuery', //所领导-民警当日考核
        wmjsList: (product ? '' : '/kss') + '/gj/wmjsList', //管教-严管监室点击查询
        jsnryxxQuery: (product ? '' : '/kss') + '/gj/jsnryxxQuery', //严管监室点击查询
        yw_JkjcQuery: (product ? '' : '/kss') + '/kss_Count/yw_JkjcQuery', //健康检查
        ywgwYtjryList: (product ? '' : '/kss') + '/yw/ywgwYtjryList', //查询已体检的人员信息
        ywgwWtjryList: (product ? '' : '/kss') + '/yw/ywgwWtjryList', //查询未体检的人员信息

        //所领导
        JqssQuery: (product ? '' : '/kss') + '/kss_Count/sld_JqssQuery', //所领导-监区设施
		sldSzcxqQuery: (product ? '' : '/kss') + '/kss_sld/sldSzcxqQuery', //所领导-所长查询区信息详细
        DbsxQuery: (product ? '' : '/kss') + '/kss_Count/sld_DbsxQuery', //所领导-代办事项
        sldDbsxQuery: (product ? '' : '/kss') + '/kss_sld/sldDbsxQuery', //所领导-各项待办人员信息详细

        sldMjdrjxkhsQuery: (product ? '' : '/kss') + '/kss_sld/sldMjdrjxkhsQuery', //所领导--民警当日绩效考核明细

        BjczqkQuery: (product ? '' : '/kss') + '/kss_Count/sld_BjczqkQuery', //所领导-各类所里报警及处置情况
        sldGlslbjjczqkQuery: (product ? '' : '/kss') + '/kss_sld/sldGlslbjjczqkQuery', //所领导-各类报警记录明细

        sldTztgQuery: (product ? '' : '/kss') + '/kss_sld/sldTztgQuery', //所领导-通知公告

        SzcxqQuery: (product ? '' : '/kss') + '/kss_Count/sld_SzcxqQuery', //所领导-所长查询区
        getProcessTaskList: (product ? '' : '/kss') + '/kss_sld/getProcessTaskList', //所领导-所长查询区弹出层
        syJrcrsQuery: (product ? '' : '/kss') + '/sy/syJrcrsQuery', //所领导-今日入所明细和今日出所明细
        syJrhjqkQuery: (product ? '' : '/kss') + '/sy/syJrhjqkQuery', //所领导-今日律师会见明细和今日家属会见明细
        //人员详情接口
        ryxqHjbdList: (product ? '' : '/kss') + '/kss_showdetails/hjbdList', //人员详情历史环节


    };
    return main;
});