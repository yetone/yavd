/**
 * Created by yetone on 16/6/14.
 */

import VNode from '../VNode';

export default class VElement extends VNode {
    constructor(tagName, properties = {}, children = [], key) {
        super();
        let { style } = properties;
        if (typeof style === 'string') {
            properties.style = style.split(';')
                .map(piece => piece.trim().split('='))
                .filter(pairs => pairs.length === 2)
                .reduce((acc, cur) => {
                    let [ k, v ] = cur;
                    return {
                        ...acc,
                        [k]: v
                    }
                }, {});
        }
        this.tagName = tagName.toUpperCase();
        this.properties = properties;
        this.children = children;
        this.key = key;
    }
}
