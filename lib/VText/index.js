/**
 * Created by yetone on 16/6/14.
 */

import VNode from '../VNode';

export default class VText extends VNode {
    constructor(data, key) {
        super();
        this.data = data;
        this.key = key;
    }

    render() {
        return document.createTextNode(this.data);
    }
}
