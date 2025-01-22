// every commented identity contains non-recognaised symbols by the parser, but recognised by math.js
export const identities = {
    "sum(k, k, 1, n)": "(n * (n + 1)) / 2",
    "sum(k^2, k, 1, n)": "(n * (n + 1) * (2 * n + 1)) / 6",
    "sum(k^3, k, 1, n)": "((n * (n + 1)) / 2)^2",
    "sum(k^4, k, 1, n)": "(n * (n + 1) * (2n + 1) * (3n^2 + 3n - 1)) / 30",
    "sum(k^5, k, 1, n)": "(n^2 * (n + 1)^2 * (2n^2 + 2n - 1)) / 12",
    "sum(k^6, k, 1, n)": "(n * (n + 1) * (2n + 1) * (3n^4 + 6n^3 - n^2 - n + 1)) / 42",
    "sum(1 / k, k, 1, n)": "ln(n) + gamma + 1 / (2n) + O(1 / n^2)",
    "sum(1 / k^2, k, 1, n)": "pi^2 / 6 - O(1 / n^2)",
    "sum(1 / (k * (k + 1)), k, 1, n)": "1 - 1 / (n + 1)",
    "sum(k^2 + k, k, 1, n)": "(n * (n + 1) * (2n + 3)) / 3",
    "sum(k * (k + 1), k, 1, n)": "(n * (n + 1) * (n + 2)) / 3",
    "sum(k * (k - 1), k, 1, n)": "(n * (n - 1) * (n + 1)) / 3",
    "sum(k^2 + k^3, k, 1, n)": "(n^2 * (n + 1)^2 * (2n + 1)) / 12",
    "sum(k^3 - k^2, k, 1, n)": "(n * (n + 1) * (2n^2 - 1)) / 6",
    "sum(a + (k - 1) * d, k, 1, n)": "n * (a + l) / 2",
    "sum(ln(k), k, 1, n)": "n * ln(n) - n + O(ln(n))",
    "sum(1 / (k + 1), k, 1, n)": "HarmonicNumber(n) - 1 / (n + 1)",
    "sum(2k - 1, k, 1, n)": "n^2",
    "sum(2k, k, 1, n)": "n * (n + 1)",
    "cos(x)^2 + sin(x)^2": "1",
    "1 + tan(x)^2": "sec(x)^2",
    "1 + cot(x)^2": "csc(x)^2",
    "sin(2x)": "2 * sin(x) * cos(x)",
    "cos(2x)": "cos(x)^2 - sin(x)^2",
    "tan(2x)": "2 * tan(x) / (1 - tan(x)^2)",
    "cos(x + y)": "cos(x) * cos(y) - sin(x) * sin(y)",
    "sin(x + y)": "sin(x) * cos(y) + cos(x) * sin(y)",
    "tan(x + y)": "(tan(x) + tan(y)) / (1 - tan(x) * tan(y))",
    "e^(i * x)": "cos(x) + i * sin(x)",
    "ln(a * b)": "ln(a) + ln(b)",
    "ln(a / b)": "ln(a) - ln(b)",
    "ln(a^b)": "b * ln(a)",
    "d/dx(e^x)": "e^x",
    "d/dx(ln(x))": "1 / x",
    "d/dx(sin(x))": "cos(x)",
    "d/dx(cos(x))": "-sin(x)",
    "d/dx(tan(x))": "sec(x)^2",
    "d/dx(csc(x))": "-csc(x) * cot(x)",
    "d/dx(sec(x))": "sec(x) * tan(x)",
    "d/dx(cot(x))": "-csc(x)^2",
    "integral(e^x, x)": "e^x",
    "integral(sin(x), x)": "-cos(x)",
    "integral(cos(x), x)": "sin(x)",
    "integral(sec(x)^2, x)": "tan(x)",
    "integral(csc(x)^2, x)": "-cot(x)",
    "integral(sec(x) * tan(x), x)": "sec(x)",
    "integral(csc(x) * cot(x), x)": "-csc(x)",
    "sin^2(x)": "(1 - cos(2x)) / 2",
    "cos^2(x)": "(1 + cos(2x)) / 2",
    "tan^2(x)": "sec^2(x) - 1",
    "cot^2(x)": "csc^2(x) - 1",
    "sec^2(x)": "1 + tan^2(x)",
    "csc^2(x)": "1 + cot^2(x)",




    // "sum(a * r^(k - 1), k, 1, n)": "a * (1 - r^n) / (1 - r), r ≠ 1",
    // "integral(x^n, x)": "(x^(n + 1)) / (n + 1), n ≠ -1",
    // "integral(1 / x, x)": "ln|x|",

    "(a + b)^2": "a^2 + b^2 + 2 * a * b",
    "(a - b)^2": "a^2 + b^2 - 2 * a * b",
    "(a + b) * (a - b)": "a^2 - b^2",
    "(x + a) * (x + b)": "x^2 + x * (a + b) + a * b",
    "(x + y + z)^2": "x^2 + y^2 + z^2 + 2 * (x * y + y * z + z * x)",
    "(a + b)^3": "a^3 + b^3 + 3 * a^2 * b + 3 * a * b^2",
    "(a - b)^3": "a^3 - b^3 - 3 * a^2 * b + 3 * a * b^2",
    "a^3 + b^3": "(a + b) * (a^2 - a * b + b^2)",
    "a^3 - b^3": "(a - b) * (a^2 + a * b + b^2)",
    "(x + a)^3": "x^3 + 3 * x^2 * a + 3 * x * a^2 + a^3",
    "(x - a)^3": "x^3 - 3 * x^2 * a + 3 * x * a^2 - a^3",
    "(a + b + c)^2": "a^2 + b^2 + c^2 + 2 * (a * b + b * c + c * a)",
    "(a + b + c)^3": "a^3 + b^3 + c^3 + 3 * (a + b) * (b + c) * (c + a)",
    "a^n - b^n": "(a - b) * (a^(n-1) + a^(n-2) * b + ... + b^(n-1))",
    "a^n + b^n (n even)": "(a + b) * (a^(n-1) - a^(n-2) * b + ... + b^(n-1))",
    // "(a + b)^n (n >= 0)": "sum(k, C(n, k) * a^(n-k) * b^k, k, 0, n)",
    // "(x - y)^n (n >= 0)": "sum(k, C(n, k) * x^(n-k) * (-y)^k, k, 0, n)",
    // "(a + b + c + ...)^2": "a^2 + b^2 + c^2 + ... + 2 * sum(a_i * a_j, i, j)",
    // "(a + b + c)^3": "a^3 + b^3 + c^3 + 3 * (a * b^2 + b * c^2 + c * a^2)",
    "(x + y) * (x - y) * (x^2 + y^2)": "x^4 - y^4",
    "(x^2 - y^2)": "(x - y) * (x + y)",
    "(x + 1/x)^2": "x^2 + 1/x^2 + 2",
    "(x - 1/x)^2": "x^2 + 1/x^2 - 2",
    "x^2 + y^2 + 2 * x * y": "(x + y)^2",
    "x^2 + y^2 - 2 * x * y": "(x - y)^2",
    "x^3 + 3 * x^2 * y + 3 * x * y^2 + y^3": "(x + y)^3",
    "x^3 - 3 * x^2 * y + 3 * x * y^2 - y^3": "(x - y)^3",
    "1 / (a - b)": "1 / (b - a) * -1",
    "(a^2 + b^2)": "a^2 + b^2",
    "(a^2 - b^2)": "(a - b) * (a + b)",
    "(x + y + z)": "(x + y) + z",
    "(a + b) + c": "a + (b + c)",
    "(a + b) - c": "a + (b - c)",
    "k * (a + b)": "k * a + k * b",
    "k * (a - b)": "k * a - k * b",
};