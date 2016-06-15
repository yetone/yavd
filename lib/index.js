/**
 * Created by yetone on 16/6/14.
 */

import VNode from './VNode';
import VElement from './VElement';
import VComment from './VComment';
import VText from './VText';
import { transformToVNode } from './VNode/utils';

if (typeof window !== 'undefined') {
    window.VNode = VNode;
    window.VElement = VElement;
    window.VComment = VComment;
    window.VText = VText;
    window.transformToVNode = transformToVNode;
}
