/**
 * Created by yetone on 16/6/15.
 */

function draw() {
    var myChart = echarts.init(main);
    var option = {
        title: {
            text: 'DOM Drawer'
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
            data: [toChartData(transformToVNode(html.value))]
        }]
    };
    myChart.setOption(option);
}

function toChartData(vn) {
    if (vn instanceof VText) {
        if (!vn.data.trim()) {
            return;
        }
        return {
            name: '#Text'
        }
    }
    if (vn instanceof VComment) {
        return {
            name: '<!--comment-->'
        }
    }
    var children = vn.children.map(toChartData).filter(function(item) { return item });
    return {
        name: vn.tagName,
        children: children
    }
}

html.addEventListener('keyup', function() {
    draw();
    location.hash = encodeURIComponent(html.value);
}, false);

var hash = location.hash.substr(1);

if (hash) {
    html.value = decodeURIComponent(hash);
} else {
    html.value = '<!DOCTYPE html>\n\
<html>\n\
<head>\n\
    <meta charset="UTF-8">\n\
    <title>DOM-Drawer</title>\n\
    <link rel="stylesheet" type="text/css" href="style.css">\n\
    <script type="text/javascript" herf="index.js"></script>\n\
</head>\n\
<body>\n\
    <!--这是注释-->\n\
    <p>Hello,World!</p>\n\
    <div>\n\
        Hello,World!\n\
        <img />\n\
        <hr/>\n\
        <area>\n\
        <input >\n\
        <frame  >\n\
    </div>\n\
</body>\n\
</html>';
}

draw();
