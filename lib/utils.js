/**
 * Created by yetone on 16/6/14.
 */
import VElement from './VElement';
import VText from './VText';
import VComment from './VComment';

export function isVElement(obj) {
    return obj instanceof VElement;
}

export function isVText(obj) {
    return obj instanceof VText;
}

export function isVComment(obj) {
    return obj instanceof VComment;
}

const toString = Object.prototype.toString;

export function getType(obj) {
    return toString.call(obj).slice(8, -1);
}

function _isArray(obj) {
    return getType(obj) === 'Array';
}

export const isArray = Array.isArray || _isArray;

export function toArray(obj) {
    return Array.prototype.slice.call(obj);
}

export function objExtend(obj, rest, filter = () => true) {
    Object.keys(rest).filter(filter).forEach(k => {
        obj[k] = rest[k];
    });
}

export function setAttr(node, key, value) {
    switch (key) {
        case 'style':
            node.style.cssText = value;
            break;
        case 'value':
            var tagName = node.tagName || '';
            tagName = tagName.toLowerCase();
            if (['input', 'textarea'].indexOf(tagName) + 1) {
                node.value = value
            } else {
                // if it is not a input or textarea, use `setAttribute` to set
                node.setAttribute(key, value);
            }
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}
