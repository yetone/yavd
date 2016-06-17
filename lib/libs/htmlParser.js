/**
 * Created by yetone on 16/6/14.
 */

import VText from '../VText';
import VComment from '../VComment';
import VElement, { processStyle } from '../VElement';

class HTMLParser {
    TAG_START = '<';
    TAG_END = '>';
    QUOTES = ['"', "'"];
    SPACE = ' ';
    EQUAL = '=';
    BACKSLASH = '\\';
    SLASH = '/';
    BANG = '!';
    SELF_TAG_NAMES = [
        'img', 'link', 'br', 'hr', 'col', 'area', 'meta', 'frame', 'input', 'param'
    ];

    constructor() {
        this.init();
    }

    init() {
        this.inStr = false;
        this.inTag = false;
        this.inBeginTag = false;
        this.inComment = false;
        this.depth = 0;
        this.quote = void 0;
        this.pIdx = 0;
        this.cIdx = 0;
        this.ve = void 0;
        this.rootVe = void 0;
        this.prev = void 0;
        this.str = void 0;
        this.stack = [];
        this.spaceCount = 0;
    }

    getToken() {
        return this.str.substr(this.pIdx + 1, this.cIdx - this.pIdx - 1);
    }

    getCommentData(v) {
        v = v.substr(1);
        let l = v.length;
        if (v.charAt(0) === '-' && v.charAt(1) === '-') {
            if (v.charAt(l - 2) === '-' && v.charAt(l - 1) === '-') {
                return v.substr(2, l - 4);
            } else {
                return v.substr(2);
            }
        }
        return v;
    }

    pushProp(token) {
        let l = token.length;
        let idx = token.indexOf('=');
        let k, v;
        if (idx < 0) {
            k = token;
            v = '';
        } else {
            k = token.substr(0, idx);
            v = token.substr(idx + 2, l - k.length - 3);
        }
        if (k === 'style') {
            v = processStyle(v);
        }
        this.ve.properties[k] = v;
    }

    pushChild(v) {
        if (!this.ve) {
            return;
        }
        this.ve.pushChild(v);
    }

    pushVe(ve) {
        this.stack.push(ve);
        this.depth++;
        this.ve = ve;
        if (!this.rootVe) {
            this.rootVe = ve;
        }
    }

    popVe() {
        this.stack.pop();
        this.depth--;
        this.ve = this.stack[this.depth - 1];
    }

    newElement(tagName) {
        let ve = new VElement(tagName);
        this.pushChild(ve);
        this.pushVe(ve);
    }

    parse(str) {
        str = str.trim();
        this.str = str;
        let idx = 0;
        let char = str.charAt(idx);
        let token;
        let next;
        let nextIsSlash;
        let prevIsSlash;
        let nextIsBang;
        while (char) {
            this.cIdx = idx;
            if (!this.inStr) {
                if (char === this.TAG_START) {
                    token = this.getToken();
                    next = str.charAt(idx + 1);
                    nextIsSlash = next === this.SLASH;
                    nextIsBang = next === this.BANG;

                    if (token && !this.inComment) {
                        this.pushChild(new VText(token));
                    }

                    if (nextIsBang) {
                        this.inComment = true;
                    } else {
                        this.inTag = true;
                        if (!nextIsSlash) {
                            this.inBeginTag = true;
                        }
                    }
                    this.pIdx = idx;
                }
                if (char === this.TAG_END) {
                    token = this.getToken();
                    if (this.inComment) {
                        this.pushChild(new VComment(this.getCommentData(token)));
                        this.inComment = false;
                    } else if (this.inTag) {
                        if (this.inBeginTag) {
                            prevIsSlash = this.prev === this.SLASH;
                            if (token) {
                                if (this.spaceCount !== 0 && !prevIsSlash) {
                                    this.pushProp(token);
                                } else if (!prevIsSlash) {
                                    this.newElement(token);
                                } else {
                                    this.popVe();
                                }
                                if (!prevIsSlash && this.ve && this.SELF_TAG_NAMES.indexOf(this.ve.tagName.toLowerCase()) >= 0) {
                                    this.popVe();
                                }
                            } else if (this.ve && this.SELF_TAG_NAMES.indexOf(this.ve.tagName.toLowerCase()) >= 0) {
                                this.popVe();
                            }
                        } else {
                            this.popVe();
                        }
                        this.inTag = false;
                        this.inBeginTag = false;
                        this.spaceCount = 0;
                    }
                    this.pIdx = idx;
                }
                if (this.inBeginTag && char === this.SPACE) {
                    token = this.getToken();
                    if (token) {
                        if (this.spaceCount === 0) {
                            this.newElement(token);
                        } else {
                            this.pushProp(token);
                        }
                    }
                    this.spaceCount++;
                    this.pIdx = idx;
                }
                if (this.inBeginTag && char === this.SLASH && this.spaceCount === 0 && str.charAt(idx + 1) === this.TAG_END) {
                    token = this.getToken();
                    this.newElement(token);
                }
                if (this.inBeginTag && [this.SPACE, this.SLASH, this.TAG_END].indexOf(char) < 0 && this.QUOTES.indexOf(this.prev) >= 0) {
                    this.pushProp(this.getToken());
                    this.pIdx = idx - 1;
                }
            }
            if (this.QUOTES.indexOf(char) >= 0) {
                if (this.quote === void 0) {
                    this.quote = char;
                    this.inStr = true;
                } else if (this.quote === char) {
                    this.quote = void 0;
                    this.inStr = false;
                }
            }
            this.prev = char;
            char = str.charAt(++idx);
        }
        let r = this.rootVe;
        this.init();
        return r;
    }
}

export default new HTMLParser();
