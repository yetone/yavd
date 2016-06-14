/**
 * Created by yetone on 16/6/14.
 */

import VNode from '../VNode';

export default class VElement extends VNode {
    constructor(tagName, attributes = {}, children = []) {
        super();
        this.tagName = tagName.toUpperCase();
        this.attributes = attributes;
        this.children = children;
    }
}
