"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeDiff = getTimeDiff;
function getTimeDiff(now, then) {
    return Math.abs(now.getTime() - then.getTime());
}
