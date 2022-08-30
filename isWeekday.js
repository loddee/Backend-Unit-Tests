export default function isWeekday(name) {
    return !(name.startsWith("Sat") || name.startsWith("Sun"))
}