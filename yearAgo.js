export default function yearsAgo(year) {
    let d = new Date();
    let CurrentYear = d.getFullYear();

    return CurrentYear - year;
}