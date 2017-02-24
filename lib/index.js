/**
 * Created by yetone on 16/6/14.
 */

import VNode from './VNode';
import VElement from './VElement';
import VComment from './VComment';
import VText from './VText';
import diff from './libs/diff';
import patch from './libs/patch';
import { transformToVNode } from './VNode/utils';

if (typeof window !== 'undefined') {
    window.VD = {
      VNode,
      VElement,
      VComment,
      VText,
      transformToVNode,
      diff,
      patch
    };
}
