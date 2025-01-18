export default getBidirectionalObject({
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
    "sum(2k - 1, k, 1, n)": "n^2",
    "sum(2k, k, 1, n)": "n * (n + 1)",
    "sum(a * r^(k - 1), k, 1, n)": "a * (1 - r^n) / (1 - r), r ≠ 1",
    "sum(1 / (k + 1), k, 1, n)": "HarmonicNumber(n) - 1 / (n + 1)",
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
    "integral(x^n, x)": "(x^(n + 1)) / (n + 1), n ≠ -1",
    "integral(1 / x, x)": "ln|x|",
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
    "csc^2(x)": "1 + cot^2(x)"
});

function getBidirectionalObject(input: Record<string, string>): Record<string, string> {
    const result: Record<string, string> = {};

    for (const [key, value] of Object.entries(input)) {
        // Add the original key-value pair
        result[key] = value;
        // Add the reversed key-value pair
        result[value] = key;
    }

    return result;
}