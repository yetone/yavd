/**
 * Created by yetone on 16/6/14.
 */

import VNode from '../VNode';

let enableStyleEncode = false;

export function processStyle(style) {
    if (!enableStyleEncode) {
        return style;
    }
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
    constructor(tagName, properties = {}, children = [], key, namespace) {
        super();

        this.tagName = tagName;
        this.properties = properties;
        this.children = children;
        this.key = key;
        this.namespace = namespace;

        let { style } = this.properties;
        if (typeof style === 'string') {
            this.properties.style = processStyle(style);
        }

        this.count = this.children.reduce((count, child) => {
            child.parent = this;
            return count + (child.count || 0) + 1;
        }, 0);
    }

    pushChild(child) {
        let count = child.count || 0;
        this.changeCount(count + 1);
        child.parent = this;
        this.children.push(child);
    }

    changeCount(count) {
        if (this.parent) {
            this.parent.changeCount(count);
        }
        this.count += count;
    }

    render() {
        let el = document.createElement(this.tagName);
        Object.keys(this.properties).forEach(propName => {
            let v = this.properties[propName];
            el.setAttribute(propName, v);
        });
        this.children.forEach(child => {
            el.appendChild(child.render());
        });
        return el;
    }
}
