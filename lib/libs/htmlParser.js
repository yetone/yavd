/**
 * Created by yetone on 16/6/14.
 */

import VText from '../VText';
import VElement from '../VElement';


class HTMLParser {
    TAG_START = '<';
    TAG_END = '>';
    QUOTES = ['"', "'"];
    SPACE = ' ';
    EQUAL = '=';
    BACKSLASH = '\\';
    SLASH = '/';
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
        this.inEndTag = false;
        this.inAttr = false;
        this.depth = 0;
        this.quote = void 0;
        this.pIdx = 0;
        this.cIdx = 0;
        this.vn = void 0;
        this.rootVn = void 0;
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

    pushAttr(v) {
        this.vn.attributes[this.curAttrName] = typeof v === 'string' ? this.getAttrValue(v) : v;
        this.curAttrName = void 0;
        this.inAttr = false;
    }

    pushChild(v) {
        if (!this.vn) {
            return;
        }
        this.vn.children.push(v);
    }

    pushVn(vn) {
        this.stack.push(vn);
        this.depth++;
        this.vn = vn;
        if (!this.rootVn) {
            this.rootVn = vn;
        }
    }

    popVn() {
        this.stack.pop();
        this.depth--;
        this.vn = this.stack[this.depth - 1];
    }

    parse(str) {
        str = str.trim();
        this.str = str;
        let idx = 0;
        let char = str.charAt(idx);
        let token;
        let vn;
        let nextIsSlash;
        let prevIsSlash;
        while (char) {
            this.cIdx = idx;
            if (!this.inStr) {
                if (char === this.TAG_START) {
                    token = this.getToken();
                    nextIsSlash = str.charAt(idx + 1) === this.SLASH;
                    if (token) {
                        this.pushChild(new VText(token));
                    }
                    this.inTag = true;
                    if (nextIsSlash) {
                        this.inEndTag = true;
                    } else {
                        this.inBeginTag = true;
                    }
                    this.pIdx = idx;
                }
                if (this.inTag && char === this.TAG_END) {
                    token = this.getToken();
                    if (this.inBeginTag) {
                        prevIsSlash = this.prev === this.SLASH;
                        if (this.curAttrName) {
                            this.pushAttr(token);
                        } else if (this.spaceCount !== 0 && !prevIsSlash) {
                            this.curAttrName = token;
                            this.pushAttr(true);
                        } else if (this.SELF_TAG_NAMES.indexOf(token.toLowerCase()) < 0 && !prevIsSlash) {
                            vn = new VElement(token);
                            this.pushChild(vn);
                            this.pushVn(vn);
                        } else {
                            this.popVn();
                        }
                    } else {
                        this.popVn();
                    }
                    this.inTag = false;
                    this.inBeginTag = false;
                    this.inEndTag = false;
                    this.spaceCount = 0;
                    this.pIdx = idx;
                }
                if (this.inBeginTag && char === this.SPACE) {
                    token = this.getToken();
                    if (token) {
                        if (this.spaceCount === 0) {
                            vn = new VElement(token);
                            this.pushChild(vn);
                            this.pushVn(vn);
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
        let r = this.rootVn;
        this.init();
        return r;
    }
}


export default new HTMLParser();

