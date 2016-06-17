/**
 * Created by yetone on 16/6/17.
 */

import { TYPES } from './diff';
import { toArray, setAttr } from '../utils';

export default function patch(node, patches) {
    let walker = { idx: 0 };
    walk(node, walker, patches)
}

function walk(node, walker, patches) {
    let currentPatches = patches[walker.idx];

    toArray(node.childNodes).forEach(child => {
        walker.idx++;
        walk(child, walker, patches);
    });

    if (currentPatches) {
        applyPatches(node, currentPatches);
    }
}

function applyPatches(node, patches) {
    let newNode;
    patches.forEach(patch => {
        switch (patch.type) {
            case TYPES.REPLACE:
                if (patch.data) {
                    node.data = patch.node.data;
                } else {
                    newNode = patch.node.render();
                    node.parentNode.replaceChild(newNode, node);
                }
                break;
            case TYPES.REORDER:
                reorderChildren(node, patch.moves);
                break;
            case TYPES.PROPS:
                setProps(node, patch.props);
                break;
            default:
                throw new Error('Unknown patch type ' + patch.type);
        }
    })
}

function setProps(node, props) {
    let value;
    Object.getOwnPropertyNames(props).forEach(key => {
        value = props[key];
        if (value === void 0) {
            node.removeAttribute();
        } else {
            setAttr(node, key, value)
        }
    });
}

function reorderChildren(node, moves) {
    let childNodes = node.childNodes;
    let staticNodes = toArray(childNodes);
    let maps = {};

    staticNodes.forEach(node => {
        if (node.nodeType === 1) {
            let key = node.getAttribute('key');
            if (key) {
                maps[key] = node;
            }
        }
    });

    moves.forEach(move => {
        let insertNode;
        let idx = move.idx;
        if (move.type === 0) { // remove item
            if (staticNodes[idx] === childNodes[idx]) { // maybe have been removed for inserting
                node.removeChild(childNodes[idx]);
            }
            staticNodes.splice(idx, 1);
        } else if (move.type === 1) { // insert item
            insertNode = maps[move.item.key]
                ? maps[move.item.key] // reuse old item
                : move.item.render();
            staticNodes.splice(idx, 0, insertNode);
            node.insertBefore(insertNode, childNodes[idx] || null);
        }
    })
}
