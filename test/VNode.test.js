/**
 * Created by yetone on 16/6/14.
 */

import test from 'ava';
import { transformToVNode } from '../lib/VNode/utils';

test('VNode', t => {
    let div = document.createElement('div');
    div.className = `test"aa'`;
    let html = `
        <div class="input">
            <textarea id="html"></textarea>
        </div>
        <div id="main" name="yetone yeah">
            <img>
            <!--comment-->
            <img/>
            <img />
            I am text
            <meta />
            <div class="1">
                <h1>I am h1</h1>
                <p>I am p</p>
                <div class="1" name="yetone wow"></div>
            </div>
        </div>
    `;
    div.innerHTML = html;
    let vNode = transformToVNode(div);
    let vNode1 = transformToVNode(`<div class="test"aa'">${html}</div>`);
    t.deepEqual(vNode, vNode1, 'should equal');
});
