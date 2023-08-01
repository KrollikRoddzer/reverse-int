module.exports = function reverse (n) {
    if (n < 0) n = -n;
    str = String(n);
    str = str.split('').reverse().join('');
    return Number(str);
}
