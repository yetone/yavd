/**
 * Created by yetone on 16/6/14.
 */

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
