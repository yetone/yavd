/**
 * Created by yetone on 16/6/14.
 */

import VText from '../VText';
import VComment from '../VComment';
import VElement from '../VElement';


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
        'img'
    ];

    constructor() {
        this.init();
    }

    init() {
        this.inStr = false;
        this.inTag = false;
        this.inBeginTag = false;
        this.inAttr = false;
        this.inComment = false;
        this.depth = 0;
        this.quote = void 0;
        this.pIdx = 0;
        this.cIdx = 0;
        this.ve = void 0;
        this.rootVe = void 0;
        this.prev = void 0;
        this.str = void 0;
        this.curTagName = void 0;
        this.curAttrName = void 0;
        this.stack = [];
        this.spaceCount = 0;
    }

    getToken() {
        return this.str.substr(this.pIdx + 1, this.cIdx - this.pIdx - 1);
    }

    getAttrValue(v) {
        let l = v.length;
        let s = v.charAt(0);
        if (this.QUOTES.indexOf(s) >= 0) {
            return v.substr(1, l - 2);
        }
        return v
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

    pushAttr(v) {
        if (!this.curAttrName) {
            return;
        }
        this.ve.attributes[this.curAttrName] = typeof v === 'string' ? this.getAttrValue(v) : v;
        this.curAttrName = void 0;
        this.inAttr = false;
    }

    pushChild(v) {
        if (!this.ve) {
            return;
        }
        this.ve.children.push(v);
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

    parse(str) {
        str = str.trim();
        this.str = str;
        let idx = 0;
        let char = str.charAt(idx);
        let token;
        let ve;
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

                    if (token) {
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
                    if (this.inTag) {
                        if (this.inBeginTag) {
                            prevIsSlash = this.prev === this.SLASH;
                            if (token) {
                                if (this.curAttrName) {
                                    this.pushAttr(token);
                                } else if (this.spaceCount !== 0 && !prevIsSlash) {
                                    this.curAttrName = token;
                                    this.pushAttr(true);
                                } else if (!prevIsSlash) {
                                    ve = new VElement(token);
                                    this.pushChild(ve);
                                    this.pushVe(ve);
                                } else {
                                    this.popVe();
                                }
                            }
                        } else {
                            this.popVe();
                        }
                        this.inTag = false;
                        this.inBeginTag = false;
                        this.spaceCount = 0;
                    } else if (this.inComment) {
                        this.pushChild(new VComment(this.getCommentData(token)));
                    }
                    this.pIdx = idx;
                }
                if (this.inBeginTag && char === this.SPACE) {
                    token = this.getToken();
                    if (token) {
                        if (this.spaceCount === 0) {
                            ve = new VElement(token);
                            this.pushChild(ve);
                            this.pushVe(ve);
                        } else if (!this.curAttrName) {
                            this.curAttrName = token;
                            this.pushAttr(true);
                        } else {
                            this.pushAttr(token);
                        }
                    }
                    this.spaceCount++;
                    this.pIdx = idx;
                }
                if (char === this.EQUAL) {
                    token = this.getToken();
                    if (token && this.inTag) {
                        this.curAttrName = token;
                        this.inAttr = true;
                    }
                    this.pIdx = idx;
                }
            }
            if (this.QUOTES.indexOf(char) >= 0 && this.prev !== this.BACKSLASH && !this.inAttr) {
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

