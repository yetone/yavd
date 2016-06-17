/**
 * Created by yetone on 16/6/17.
 */

import listDiff from 'list-diff2';
import { isVElement } from '../utils';

export const TYPES = {
    REPLACE: 0,
    REORDER: 1,
    PROPS: 2
};

export default function diff(oldVN, newVN) {
    let idx = 0;
    let patches = {};
    walk(oldVN, newVN, idx, patches);
    return patches;
}

function walk(oldVN, newVN, idx, patches) {
    let currentPatch = [];
    if (!newVN) {
        // pass
    } else if (isVElement(oldVN) && isVElement(newVN)) {
        if (oldVN.tagName === newVN.tagName && oldVN.key === newVN.key) {
            // Diff props
            let propsPatches = diffProps(oldVN, newVN);
            if (propsPatches) {
                currentPatch.push({ type: TYPES.PROPS, props: propsPatches });
            }
            // Diff children. If the node has a `ignore` property, do not diff children
            if (!isIgnoreChildren(newVN)) {
                diffChildren(
                    oldVN.children,
                    newVN.children,
                    idx,
                    patches,
                    currentPatch
                )
            }
        } else {
            currentPatch.push({ type: TYPES.REPLACE, node: newVN });
        }
    } else {
        if (oldVN.constructor === newVN.constructor) {
            if (oldVN.data !== newVN.data) {
                currentPatch.push({ type: TYPES.REPLACE, node: newVN, data: true });
            }
        } else {
            currentPatch.push({ type: TYPES.REPLACE, node: newVN });
        }
    }

    if (currentPatch.length) {
        patches[idx] = currentPatch
    }
}

function diffProps(oldVN, newVN) {
    let count = 0;
    let oldProps = oldVN.properties;
    let newProps = newVN.properties;

    let value;
    let propsPatches = {};

    // Find out different properties
    Object.getOwnPropertyNames(oldProps).forEach(key => {
        value = oldProps[key];
        if (newProps[key] !== value) {
            count++;
            propsPatches[key] = newProps[key];
        }
    });

    // Find out new property
    Object.getOwnPropertyNames(newProps).forEach(key => {
        value = newProps[key];
        if (!oldProps.hasOwnProperty(key)) {
            count++;
            propsPatches[key] = newProps[key];
        }
    });

    // If properties all are identical
    if (count === 0) {
        return null;
    }

    return propsPatches;
}

function diffChildren(oldChildren, newChildren, idx, patches, currentPatch) {
    let diffs = listDiff(oldChildren, newChildren, 'key');
    let reorderPatch;
    newChildren = diffs.children;

    if (diffs.moves.length) {
        reorderPatch = {
            type: TYPES.REORDER,
            moves: diffs.moves
        };
        currentPatch.push(reorderPatch);
    }

    let leftVN = null;
    let currentIdx = idx;
    oldChildren.forEach((child, i) => {
        let newChild = newChildren[i];
        let count = leftVN ? leftVN.count || 0 : 0;
        currentIdx = currentIdx + count + 1;
        walk(child, newChild, currentIdx, patches);
        leftVN = child;
    })
}

function isIgnoreChildren(vn) {
    return vn.properties && vn.properties.hasOwnProperty('ignore');
}
