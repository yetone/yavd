/**
 * Created by yetone on 16/6/14.
 */

import VElement from '../VElement';
import VText from '../VText';
import VComment from '../VComment';
import { toArray } from '../utils';
import htmlParser from '../libs/htmlParser';

function transformNodeToVNode(node) {
    let res;
    let properties;
    let children = toArray(node.childNodes).map(transformNodeToVNode);
    if (node instanceof HTMLElement) {
        properties = toArray(node.attributes).reduce((prev, curr) => {
            return {
                ...prev,
                [curr.name]: curr.value
            }
        }, {});
        res = new VElement(node.tagName.toLowerCase(), properties, children);
    } else if (node instanceof Text) {
        res = new VText(node.data);
    } else if (node instanceof Comment) {
        res = new VComment(node.data);
    }
    return res;
}

function transformStrToVNode(str) {
    return htmlParser.parse(str);
}

export function transformToVNode(nodeOrStr) {
    if (nodeOrStr instanceof Node) {
        return transformNodeToVNode(nodeOrStr);
    }
    return transformStrToVNode(nodeOrStr);
}
