/**
 * Created by yetone on 16/6/14.
 */

import test from 'ava';
import { transformToVNode } from '../lib/VNode/utils';

let html = `
    <div class="test'"abc></div>
    <div class="input">
        <textarea id="html"  class="xx"   name="yy y" ></textarea>
    </div>
    <div id="main" name="yetone yeah" style="   color: red;  margin: 1px 2px 3px 4px; padding: 0;  ">
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

test('VNode.transform', t => {
    let div = document.createElement('div');
    div.innerHTML = html;
    let vNode = transformToVNode(div);
    let vNode1 = transformToVNode(`<div>${html}</div>`);
    t.deepEqual(vNode, vNode1, 'should equal');
});

test('VNode.render', t => {
    let div = document.createElement('div');
    div.innerHTML = html;
    let vNode = transformToVNode(`<div>${html}</div>`);
    let div1 = vNode.render();
    t.true(div.isEqualNode(div1));
});
