/**
 * Created by yetone on 16/6/14.
 */

import test from 'ava';
import { transformToVNode } from '../lib/VNode/utils';

test('VNode', t => {
    let div = document.createElement('div');
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
    div.innerHTML = html;
    let vNode = transformToVNode(div);
    let vNode1 = transformToVNode(`<div>${html}</div>`);
    t.deepEqual(vNode, vNode1, 'should equal');
    t.deepEqual(vNode1.children[5].properties.style, {
        color: 'red',
        margin: '1px 2px 3px 4px',
        padding: '0'
    });
});
