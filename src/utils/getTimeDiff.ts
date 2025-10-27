export function getTimeDiff(now: Date, then: Date) {
    return Math.abs(now.getTime() - then.getTime())
}