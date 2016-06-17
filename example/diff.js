/**
 * Created by yetone on 16/6/17.
 */
;(function() {
    var vNode, newVNode;
    var cm = CodeMirror.fromTextArea(html, {
        mode: 'text/html',
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        theme: 'dracula'
    });
    var node;

    function draw() {
        if (!node) {
            node = vNode.render();
            main.appendChild(node);
        } else {
            console.log(newVNode);
            var patches = VD.diff(vNode, newVNode);
            console.log(patches);
            VD.patch(node, patches);
            vNode = newVNode;
        }
    }

    function _draw() {
        var myChart = echarts.init(main);
        var option = {
            title: {
                text: 'YAVD'
            },
            toolbox: {
                show: true,
                feature: {
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                name: '树图',
                type: 'tree',
                orient: 'horizontal', // vertical horizontal
                rootLocation: {
                    x: 'left',
                    y: 'center'
                }, // 根节点位置  {x: 100, y: 'center'}
                nodePadding: 8,
                layerPadding: 100,
                hoverable: false,
                roam: true,
                symbolSize: 6,
                itemStyle: {
                    normal: {
                        color: '#4883b4',
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            textStyle: {
                                color: '#000',
                                fontSize: 5
                            }
                        },
                        lineStyle: {
                            color: '#ccc',
                            type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                        },
                        areaStyle:{
                            color:'#000'
                        }
                    },
                    emphasis: {
                        color: '#4883b4',
                        label: {
                            show: false
                        },
                        borderWidth: 0
                    }
                },
                data: [getChartData(vNode)]
            }]
        };
        myChart.setOption(option);
    }

    function getChartData(vn) {
        if (vn instanceof VD.VText) {
            if (!vn.data.trim()) {
                return;
            }
            return {
                name: '#Text'
            }
        }
        if (vn instanceof VD.VComment) {
            return {
                name: '<!--comment-->'
            }
        }
        var children = vn.children.map(getChartData).filter(function(item) { return item });
        return {
            name: vn.tagName,
            children: children
        }
    }

    cm.on('change', function() {
        var value = cm.doc.getValue();
        newVNode = VD.transformToVNode(value);
        location.hash = encodeURIComponent(value);
        draw();
    }, false);

    var hash = location.hash.substr(1);
    var value;

    if (hash) {
        value = decodeURIComponent(hash);
    } else {
        value = '<div>\n\
  <!--这是注释-->\n\
  <p>Hello,World!</p>\n\
  <div>\n\
    Test haha!\n\
    <input type="text">\n\
  </div>\n\
</div>'
    }

    vNode = VD.transformToVNode(value);
    cm.doc.setValue(value);
})();
