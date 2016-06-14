/**
 * Created by yetone on 16/6/14.
 */

import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

global.expect = require('chai').expect;
global.should = require('chai').should();
