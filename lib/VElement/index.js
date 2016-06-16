/**
 * Created by yetone on 16/6/14.
 */

import VNode from '../VNode';

export function processStyle(style) {
    return style
        .split(';')
        .map(piece => piece.trim().split(':'))
        .filter(pairs => pairs.length === 2)
        .reduce((acc, cur) => {
            let [ k, v ] = cur;
            return {
                ...acc,
                [k.trim()]: v.trim()
            }
        }, {});
}

export default class VElement extends VNode {
    constructor(tagName, properties = {}, children = [], key) {
        super();

        this.tagName = tagName.toUpperCase();
        this.properties = properties;
        this.children = children;
        this.key = key;

        let { style } = this.properties;
        if (typeof style === 'string') {
            this.properties.style = processStyle(style);
        }
    }
}
