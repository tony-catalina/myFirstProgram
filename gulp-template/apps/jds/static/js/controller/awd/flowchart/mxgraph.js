define(function (require) {
    'use strict';
    require('jquery');
    require('mxclient');
    var tools = require('awd/jquery/tools');
    var container, graph, parent;
    var main = {
        init: function (id, option) {
            container = document.getElementById(id);
            var nodes = tools.isUndefined(option.nodes) ? [] : option.nodes;
            var lines = tools.isUndefined(option.lines) ? [] : option.lines;
            main.initHtml(container,nodes,lines);
            main.bindAction(nodes);
            main.initOnloadAction(id);
        },
        /**
         *
         * @param nodes[{'node1‘:{id:'id1',
         *                        style:{},
         *                        label:'验证登记<font color="red"></font>',
         *                        top:80,
         *                        left:80,
         *                        width:80,
         *                        height:80,
         *                        url:'testa/sdfasd/a'
         *                       }
         *              },
         *            ]
         * @param line[{1:{from:1,
         *                 top:2,
         *                 line:'<div style='margin-left:30px'><font  style='font-size:15px'>合格</font></div>',
         *                 type:'edgeStyle=elbowEdgeStyle;'}}
         *  ]
         */
        initHtml: function (container,nodes,lines) {
            // Checks if the browser is supported
            if (!mxClient.isBrowserSupported()) {
                // Displays an error message if the browser is not supported.
                mxUtils.error('Browser is not supported!', 200, false);
            } else {
                // Creates the graph inside the given container
                graph = new mxGraph(container);
                // Sets a background image and restricts child movement to its bounds
                // graph.setBackgroundImage(new mxImage('images/gradient_background.jpg', 360, 200));
                // graph.maximumGraphBounds = new mxRectangle(0, 0, 360, 200);
                // Resizes the container but never make it bigger than the background
                graph.minimumContainerSize = new mxRectangle(0, 0, 360, 200);
                graph.setResizeContainer(true);
                // Disables basic selection and cell handling
                graph.setEnabled(false);

                graph.setHtmlLabels(true);
                // Gets the default parent for inserting new cells. This
                // is normally the first child of the root (ie. layer 0).
                var parent = graph.getDefaultParent();
                // Adds cells to the model in a single step
                graph.getModel().beginUpdate();
                try {
                    var jds = [];
                    $.each(nodes, function (key, value) {
                        main.configureStylesheet(graph,value.id,value.style);
                        jds.push(graph.insertVertex(parent, value.id, value.label, value.top, value.left, value.width, value.height, value.id));
                    });
                    $.each(lines, function (key, value) {
                        graph.insertEdge(parent, null, value.line, jds[value.from - 1], jds[value.to - 1], value.type);
                    });
                } finally {
                    // Updates the display
                    graph.getModel().endUpdate();
                }
            }
        },
        bindAction: function (nodes) {
            //console.log("=========="+JSON.stringify(nodes));
            //定义map，将id和对应的url以key-value的形式存入map，方便后面在监听事件中添加链接
            var a=new Map();
            //遍历节点参数，将id和url存入map
            for( var j=0;j<nodes.length;j++){
                a.set(nodes[j].id,nodes[j].url);
            }
            function getEnable(id, nodes) {
                var enable=true;
                $.each(nodes,function (key, value) {
                    if (value.id == id) {
                        enable= tools.isUndefined(value.enable)?true:value.enable;
                        return false;
                    }
                });
                return enable;
            }
            var self = this;

            //添加事件
            graph.addListener(mxEvent.CLICK, function (sender, evt) {
                //获取点击元素
                var cell11 = evt.getProperty('cell');
                if (cell11 == null) {
                    $('#pictureId').css({"display": "none"});
                    return;
                } else{
                    var enable=getEnable(cell11.id,nodes);
                    if(enable) {
                        window.parent.parent.openTab(tools.delHtmlTag(cell11.value),a.get(cell11.id));
                        //window.location.href = a.get(cell11.id);
                    }
                }

            });
            //graph.setTooltips(true);
            //graph.setHtmlLabels(true);
            var track = new mxCellTracker(graph);
            track.mouseMove = function(sender, me) {
                var cell = this.getCell(me);
                // if(cell!==null){
                //     console.log(cell);
                // }
            };
        },
        initOnloadAction: function (id) {
            //自适应任何设备屏幕
            function bodyScale() {
                var main = document.getElementById(id); //获取id="main"
                var devicewidth = document.documentElement.clientWidth;
                var scale = devicewidth / 1275;//除去当前流量器分辨率1275
                main.style.zoom = scale;//zoom是设置或检索对象的缩放比例.
            }
            window.onload = window.onresize = function () {
                bodyScale();
            };
        },
        configureStylesheet: function (graph,id,option) {
            var style = graph.getStylesheet().getDefaultEdgeStyle();
            style = mxUtils.clone(style);
            style[mxConstants.STYLE_ROUNDED] = tools.isUndefined(option['STYLE_ROUNDED'])?true:option['STYLE_ROUNDED'];
            style[mxConstants.STYLE_EDGE] = tools.isUndefined(option['STYLE_EDGE'])?mxEdgeStyle.ElbowConnector:option['STYLE_EDGE'];
            style[mxConstants.STYLE_SHAPE] = tools.isUndefined(option['STYLE_SHAPE'])?mxConstants.SHAPE_LABEL:option['STYLE_SHAPE'];
            style[mxConstants.STYLE_PERIMETER] = tools.isUndefined(option['STYLE_PERIMETER'])?mxPerimeter.RectanglePerimeter:option['STYLE_PERIMETER'];
            style[mxConstants.STYLE_STROKECOLOR] = tools.isUndefined(option['STYLE_STROKECOLOR'])?'#f9f9f9':option['STYLE_STROKECOLOR'];
            style[mxConstants.STYLE_FILLCOLOR] = tools.isUndefined(option['STYLE_FILLCOLOR'])?'#f9f9f9':option['STYLE_FILLCOLOR'];
            style[mxConstants.STYLE_ALIGN] = tools.isUndefined(option['STYLE_ALIGN'])?mxConstants.ALIGN_CENTER:option['STYLE_ALIGN'];
            style[mxConstants.STYLE_VERTICAL_ALIGN] = tools.isUndefined(option['STYLE_VERTICAL_ALIGN'])?mxConstants.ALIGN_TOP:option['STYLE_VERTICAL_ALIGN'];
            style[mxConstants.STYLE_IMAGE_ALIGN] = tools.isUndefined(option['STYLE_IMAGE_ALIGN'])?mxConstants.ALIGN_CENTER:option['STYLE_IMAGE_ALIGN'];
            style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = tools.isUndefined(option['STYLE_IMAGE_VERTICAL_ALIGN'])?mxConstants.ALIGN_TOP:option['STYLE_IMAGE_VERTICAL_ALIGN'];
            style[mxConstants.STYLE_FONTCOLOR] = tools.isUndefined(option['STYLE_FONTCOLOR'])?'#000000':option['STYLE_FONTCOLOR'];
            style[mxConstants.STYLE_FONTSIZE] = tools.isUndefined(option['STYLE_FONTSIZE'])?13:option['STYLE_FONTSIZE'];
            style[mxConstants.STYLE_IMAGE] = tools.isUndefined(option['STYLE_IMAGE'])?option['STYLE_IMAGE']:option['STYLE_IMAGE'];
            style[mxConstants.STYLE_IMAGE_WIDTH] = tools.isUndefined(option['STYLE_IMAGE_WIDTH'])?'80':option['STYLE_IMAGE_WIDTH'];
            style[mxConstants.STYLE_IMAGE_HEIGHT] = tools.isUndefined(option['STYLE_IMAGE_HEIGHT'])?'80':option['STYLE_IMAGE_HEIGHT'];
            style[mxConstants.STYLE_SPACING_TOP] = tools.isUndefined(option['STYLE_SPACING_TOP'])?'85':option['STYLE_SPACING_TOP'];
            style[mxConstants.STYLE_SPACING] = tools.isUndefined(option['STYLE_SPACING'])?'0':option['STYLE_SPACING'];
            graph.getStylesheet().putCellStyle(id, style);
        }
    }
    return main;
});