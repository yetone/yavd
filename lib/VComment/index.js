/**
 * Created by yetone on 16/6/14.
 */

import VNode from '../VNode';

export default class VComment extends VNode {
    constructor(data, key) {
        super();
        this.data = data;
        this.key = key;
    }
}
