export function getTimeDiff(now, then) {
    return Math.abs(now.getTime() - then.getTime());
}
