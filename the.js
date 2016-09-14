function nbe(d, a, f, t) {
    "use strict";
    var r = "";
    var i;
    var limit = 1e3;
    var gen = function (b) {
        return Math.pow((1 + (1 / b)), b);
    };
    var app = function (i) {
        if (i < 10) {
            i = "     " + i;
        } else if (i < 1e2) {
            i = "    " + i;
        } else if (i < 1e3) {
            i = "   " + i;
        } else if (i < 1e4) {
            i = "  " + i;
        } else if (i < 1e5) {
            i = " " + i;
        }
        return i;
    };
    var check = function (n) {
        return n > 0 && n % 1 === 0;
    };
    if (check(a)) {
        if (t !== 1) {
            r = "The function to generate the value is: f(x) = 1 + (1/x))ˣ\n---\n";
            if (f !== 1) {
                i = 1;
                if (check(d)) {
                    i = d;
                }
                if (a - i <= limit) {
                    while (i <= a) {
                        r += "x = " + app(i) + ", result = " + gen(i) + "\n";
                        i += 1;
                    }
                } else {
                    r += "Too many iterations. This is the last result.\nx = " + app(a) + ", result = " + gen(a);
                }
            } else {
                r += "x = " + app(a) + ", result = " + gen(a);
            }
        } else {
            r = {};
            if (f !== 1) {
                i = 1;
                if (check(d)) {
                    i = d;
                }
                if (a - i <= limit) {
                    while (i <= a) {
                        r[i] = gen(i);
                        i += 1;
                    }
                } else {
                    r[a] = gen(a);
                }
            } else {
                r[a] = gen(a);
            }
        }
    }
    return r;
}
