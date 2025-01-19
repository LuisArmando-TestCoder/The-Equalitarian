export default [
    // Basic algebraic identities
    (a, b) => (a + b) ** 2,                      // (a + b)^2
    (a, b) => (a - b) ** 2,                      // (a - b)^2
    (a, b) => (a ** 2 - b ** 2),                 // a^2 - b^2
    (a, b) => (a + b) ** 3,                      // (a + b)^3
    (a, b) => (a - b) ** 3,                      // (a - b)^3
    (a, b) => a ** 3 + b ** 3,                   // a^3 + b^3
    (a, b) => a ** 3 - b ** 3,                   // a^3 - b^3
    (a, b) => (a + b) ** 4,                      // (a + b)^4
    (a, b) => (a - b) ** 4,                      // (a - b)^4
    (x, y, z) => x ** 2 + y ** 2 + z ** 2 + 2 * (x * y + y * z + z * x), // (x + y + z)^2

    // Quadratic expressions
    (a, b, c) => a * (b ** 2 - c ** 2),          // a(x^2 - y^2)
    (a, b, c) => a * (b ** 2) - b * c + c ** 2,  // ax^2 + bx + c
    (a, b) => -b / a,                            // Sum of roots: -b/a
    (a, b, c) => c / a,                          // Product of roots: c/a

    // Arithmetic series
    (n) => (n * (n + 1)) / 2,                    // Sum of first n natural numbers
    (n) => (n * (n + 1) * (2 * n + 1)) / 6,      // Sum of squares of first n numbers
    (n) => ((n * (n + 1)) / 2) ** 2,             // Sum of cubes of first n numbers

    // Logarithmic identities
    (a, b) => Math.log(a) + Math.log(b),         // log(a) + log(b)
    (a, b) => Math.log(a) - Math.log(b),         // log(a) - log(b)
    (a, n) => n * Math.log(a),                   // log(a^n)
    (x, a) => Math.log(x) / Math.log(a),         // log_a(x)
    (a, b, x) => x ** (Math.log(b) / Math.log(a)), // a^(log_b(x))

    // Exponential identities
    (a, b) => a ** b,                            // a^b
    (a, b) => a ** (b + 1),                      // a^(b+1)
    (a, b) => 1 / a ** b,                        // a^(-b)
    (a, b) => a ** b + b ** a,                   // a^b + b^a

    // Trigonometric identities
    (x) => Math.sin(x) ** 2 + Math.cos(x) ** 2,  // sin^2(x) + cos^2(x)
    (x) => 1 + Math.tan(x) ** 2,                 // 1 + tan^2(x)
    (x) => 1 + (1 / Math.tan(x)) ** 2,           // 1 + cot^2(x)
    (a, b) => Math.sin(a) * Math.cos(b) + Math.cos(a) * Math.sin(b), // sin(a+b)
    (a, b) => Math.cos(a) * Math.cos(b) - Math.sin(a) * Math.sin(b), // cos(a+b)
    (a, b) => Math.sin(a) * Math.cos(b) - Math.cos(a) * Math.sin(b), // sin(a-b)
    (a, b) => Math.tan(a) + Math.tan(b),         // tan(a) + tan(b)

    // More algebraic series
    (n) => n * n,                                // n^2
    (a, b) => a * (b + 1),                       // a(b+1)
    (a, b) => a ** 2 * b ** 3,                   // a^2*b^3
    (a, b) => (a + b) ** 3,                      // (a+b)^3 expanded

    // Hyperbolic functions
    (x) => Math.sinh(x),                         // sinh(x)
    (x) => Math.cosh(x),                         // cosh(x)
    (x) => Math.tanh(x),                         // tanh(x)
    (x) => Math.cosh(x) ** 2 - Math.sinh(x) ** 2, // cosh^2(x) - sinh^2(x)

    // Custom combinatorics
    (n, k) => factorial(n) / (factorial(k) * factorial(n - k)), // C(n, k)
    (a, b, n) => Math.pow(a + b, n),            // Binomial expansion
    (x) => factorial(x),                        // n!
    (a, b) => Math.abs(a - b),                  // |a - b|

    // Add more based on request!
];

const factorial = (n: number): number => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};
