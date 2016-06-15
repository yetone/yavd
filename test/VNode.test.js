/**
 * Created by yetone on 16/6/14.
 */

import test from 'ava';
import VNode from '../lib/VNode';
import { transformToVNode } from '../lib/VNode/utils';

test('VNode', t => {
    let div = document.createElement('div');
    let html = `
        <div class="input">
            <textarea id="html"></textarea>
        </div>
        <div id="main">
            <img>
            <!--comment-->
            <img/>
            <img />
            I am text
            <meta />
            <div>
                <h1>I am h1</h1>
                <p>I am p</p>
            </div>
        </div>
    `;
    div.innerHTML = html;
    let vNode = transformToVNode(div);
    let vNode1 = transformToVNode(`<div>${html}</div>`);
    t.deepEqual(vNode, vNode1, 'should equal');
});
