window.mxBasePath ='/apps/jds/static/lib/flowchart';
define(function (require) {
    var mxgraph = require('awd/flowchart/mxgraph');
    var main = {
        init: function () {
            mxgraph.init('main', {
                        nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../static/images/lcttx.png'},label: 'node1(<font color="red">1</font>)',top: 80,left: 80,width: 80,height: 80,url: 'testa/sdfasd/a' },
                            {id: 'node2',style: {STYLE_IMAGE:'../../static/images/lcttx.png'},label: 'node2(<font color="red">2</font>)',top: 280,left: 80,width: 80,height: 80,url: 'testa/sdfasd/a' },
                            {id: 'node3',style: {STYLE_IMAGE:'../../static/images/lcttx.png'},label: 'node3(<font color="red">3</font>)',top: 480,left: 180,width: 80,height: 80,url: 'testa/sdfasd/a' },
                            {id: 'node4',style: {STYLE_IMAGE:'../../static/images/lcttx.png'},label: 'node4(<font color="red">4</font>)',top: 680,left: 80,width: 80,height: 80,url: 'testa/sdfasd/a' },
                            {id: 'node5',style: {STYLE_IMAGE:'../../static/images/lcttx.png'},label: 'node5(<font color="red">5</font>)',top: 880,left: 80,width: 80,height: 80,url: 'testa/sdfasd/a' }],
                        lines:[{from:1,to:2,line:'hkhkk',type:'dashed=1;startArrow=oval;endArrow=block;sourcePerimeterSpacing=4;startFill=0;endFill=0;'},
                            {from:2,to:3,line:'提前儿童去',type:'edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;shadow=0;comic=0;jumpStyle=gap;'},
                            {from:3,to:4,line:'日期五二',type:'edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;shadow=0;comic=0;jumpStyle=gap;'},
                            {from:4,to:5,line:'测试',type:'edgeStyle=elbowEdgeStyle;strokeColor=#B85450;'}]
                });
        }
    };
    $(main.init);
});