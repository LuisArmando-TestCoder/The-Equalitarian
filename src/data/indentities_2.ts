// --------------------------------------------------------------------------------------
// The following is an extensive list of rules covering cases 1 to 15.
// Note: The list contains many rules (some overlapping); you may wish to refine this set
// to avoid duplicates or conflicts in a production system.
export const rules: { l: string; r: string; condition?: string }[] = [
  // -------------------------------
  // Basic arithmetic simplifications
  // -------------------------------
  { l: "a + 0", r: "a" },
  { l: "0 + a", r: "a" },
  { l: "a - 0", r: "a" },
  { l: "0 - a", r: "-a" },
  { l: "a * 1", r: "a" },
  { l: "1 * a", r: "a" },
  { l: "a / 1", r: "a" },
  { l: "a - a", r: "0" },
  { l: "a / a", r: "1" },
  { l: "a * 0", r: "0" },
  { l: "0 * a", r: "0" },

  // -------------------------------
  // Exponent rules
  // -------------------------------
  { l: "a^1", r: "a" },
  { l: "a^0", r: "1" },
  { l: "a^(-b)", r: "1/(a^b)" },
  { l: "a^b * a^c", r: "a^(b+c)" },
  { l: "(a^b)^c", r: "a^(b*c)" },

  // -------------------------------
  // Negative numbers and subtraction
  // -------------------------------
  { l: "-(-a)", r: "a" },
  { l: "a - (-b)", r: "a + b" },
  { l: "a - b", r: "a + (-b)" },
  { l: "-(a + b)", r: "-a - b" },

  // -------------------------------
  // Division and fractions
  // -------------------------------
  { l: "a/b", r: "a * (1/b)" },
  { l: "1/(a/b)", r: "b/a" },
  { l: "a/b + c/b", r: "(a+c)/b" },
  { l: "a/b - c/b", r: "(a-c)/b" },
  { l: "(a/b)/c", r: "a/(b*c)" },
  { l: "(a*b)/a", r: "b" },
  { l: "(a*b)/b", r: "a" },

  // -------------------------------
  // Distributive properties
  // -------------------------------
  { l: "a*(b + c)", r: "a*b + a*c" },
  { l: "(a + b)*c", r: "a*c + b*c" },
  { l: "a*b + a*c", r: "a*(b+c)" },
  { l: "b*a + c*a", r: "(b+c)*a" },

  // -------------------------------
  // Combining like terms and additional rewrites
  // -------------------------------
  { l: "a + a", r: "2*a" },
  { l: "a - (a - b)", r: "b" },
  { l: "-1*a", r: "-a" },
  { l: "a*-1", r: "-a" },

  // -------------------------------
  // Identity and Function Identities
  // -------------------------------
  { l: "1^a", r: "1" },
  { l: "log_a(a)", r: "1" },
  { l: "log_a(1)", r: "0" },
  { l: "a^(log_a(b))", r: "b" },
  { l: "(a)", r: "a" },
  { l: "((a))", r: "a" },
  { l: "(((a)))", r: "a" },
  { l: "sin(0)", r: "0" },
  { l: "cos(0)", r: "1" },
  { l: "tan(0)", r: "0" },
  { l: "sec(0)", r: "1" },
  { l: "sinh(0)", r: "0" },
  { l: "cosh(0)", r: "1" },
  { l: "tanh(0)", r: "0" },
  { l: "|0|", r: "0" },
  { l: "|a|", r: "a", condition: "a >= 0" },
  { l: "|-a|", r: "a" },

  // -------------------------------
  // Complex Number Identities
  // -------------------------------
  { l: "i^1", r: "i" },
  { l: "i^2", r: "-1" },
  { l: "i^0", r: "1" },
  { l: "conj(0)", r: "0" },
  { l: "conj(1)", r: "1" },

  // -------------------------------
  // Additional Zero and Negation Rules
  // -------------------------------
  { l: "-(-(-a))", r: "-a" },
  { l: "-(-(-(-a)))", r: "a" },
  { l: "(-a) - (-b)", r: "-a + b" },
  { l: "-a - b", r: "-(a + b)" },

  // -------------------------------
  // Commutative Rules
  // -------------------------------
  { l: "a + b", r: "b + a" },
  { l: "a * b", r: "b * a" },
  { l: "a + (b + c)", r: "(b + c) + a" },

  // -------------------------------
  // Associative Rules
  // -------------------------------
  { l: "(a + b) + c", r: "a + (b + c)" },
  { l: "(a * b) * c", r: "a * (b * c)" },
  { l: "(x + y) + z", r: "x + (y + z)" },
  { l: "(a + b + c) + d", r: "a + (b + c + d)" },
  { l: "(a * b * c) * d", r: "a * (b * c * d)" },

  // -------------------------------
  // Special Commutative and Grouping Cases
  // -------------------------------
  { l: "(a + b) + (c + d)", r: "(a + c) + (b + d)" },
  { l: "(a * b) * (c * d)", r: "(a * c) * (b * d)" },
  { l: "A && B", r: "B && A" },
  { l: "A || B", r: "B || A" },
  { l: "A ∪ B", r: "B ∪ A" },
  { l: "A ∩ B", r: "B ∩ A" },
  { l: "gcd(a, b)", r: "gcd(b, a)" },
  { l: "lcm(a, b)", r: "lcm(b, a)" },

  // -------------------------------
  // More Associative Rules (including logical and set operations)
  // -------------------------------
  { l: "(A && B) && C", r: "A && (B && C)" },
  { l: "(A || B) || C", r: "A || (B || C)" },
  { l: "(A ∪ B) ∪ C", r: "A ∪ (B ∪ C)" },
  { l: "(A ∩ B) ∩ C", r: "A ∩ (B ∩ C)" },
  { l: "(A . B) . C", r: "A . (B . C)" },
  { l: "(a ⋅ b) ⋅ c", r: "a ⋅ (b ⋅ c)" },

  // -------------------------------
  // More Distributive Rules
  // -------------------------------
  { l: "(a + b) * c", r: "a * c + b * c" },
  { l: "(a / b) + (c / d)", r: "(a*d + b*c) / (b*d)" },
  { l: "a^(1/n)", r: "root(a, n)" },
  { l: "a^(m/n)", r: "root(a^m, n)" },
  { l: "a^(m/n) * a^(p/q)", r: "a^((m*q+p*n)/(n*q))" },
  { l: "(a^(m/n)) / (a^(p/q))", r: "a^((m*q-p*n)/(n*q))" },
  { l: "a / b", r: "floor(a/b) + (a mod b)/b", condition: "a > b" },

  // -------------------------------
  // Negative Fractions and Complex Fractions
  // -------------------------------
  { l: "(-a)/b", r: "-(a/b)" },
  { l: "a/(-b)", r: "-(a/b)" },
  { l: "(-a)/(-b)", r: "a/b" },
  { l: "(a/b)/c", r: "a/(b*c)" },
  { l: "a/(b/c)", r: "(a*c)/b" },
  { l: "a/1", r: "a" },
  { l: "0/a", r: "0" },

  // -------------------------------
  // Radical and Root Rules
  // -------------------------------
  { l: "sqrt(a)", r: "a^(1/2)" },
  { l: "root(a, 3)", r: "a^(1/3)" },
  { l: "root(a, n)", r: "a^(1/n)" },
  { l: "sqrt(a)*sqrt(b)", r: "sqrt(a*b)" },
  { l: "(sqrt(a))/(sqrt(b))", r: "sqrt(a/b)" },
  { l: "sqrt(sqrt(a))", r: "a^(1/4)" },
  { l: "root(root(a, m), n)", r: "a^(1/(m*n))" },
  { l: "1/sqrt(a)", r: "sqrt(a)/a" },
  { l: "1/(a+sqrt(b))", r: "(a - sqrt(b))/(a^2-b)" },
  { l: "1/(sqrt(a)+sqrt(b))", r: "(sqrt(a)-sqrt(b))/(a-b)" },
  { l: "sqrt(-a)", r: "i*sqrt(a)" },
  { l: "sqrt(0)", r: "0" },
  { l: "root(1, n)", r: "1" },
  { l: "(a^(1/n))^m", r: "a^(m/n)" },

  // -------------------------------
  // Polynomial Rules
  // -------------------------------
  { l: "(a+b)^2", r: "a^2 + 2*a*b + b^2" },
  { l: "(a-b)^2", r: "a^2 - 2*a*b + b^2" },
  { l: "(a+b)*(a-b)", r: "a^2 - b^2" },
  { l: "a^2 - b^2", r: "(a+b)*(a-b)" },
  { l: "a^2 + 2*a*b + b^2", r: "(a+b)^2" },
  { l: "a^2 - 2*a*b + b^2", r: "(a-b)^2" },
  { l: "(a*x^m)/(b*x^n)", r: "(a/b)*x^(m-n)" },
  { l: "(a+b)^3", r: "a^3+3*a^2*b+3*a*b^2+b^3" },
  { l: "(a-b)^3", r: "a^3-3*a^2*b+3*a*b^2-b^3" },
  { l: "a^3+b^3", r: "(a+b)*(a^2-a*b+b^2)" },
  { l: "a^3-b^3", r: "(a-b)*(a^2+a*b+b^2)" },
  { l: "x^2 - (r1+r2)*x + r1*r2", r: "0" },

  // -------------------------------
  // Trigonometric Rules
  // -------------------------------
  { l: "sin(x)^2+cos(x)^2", r: "1" },
  { l: "1+tan(x)^2", r: "sec(x)^2" },
  { l: "tan(x)", r: "sin(x)/cos(x)" },
  { l: "sin(a+b)", r: "sin(a)*cos(b)+cos(a)*sin(b)" },
  { l: "cos(a+b)", r: "cos(a)*cos(b)-sin(a)*sin(b)" },
  { l: "tan(a+b)", r: "(tan(a)+tan(b))/(1-tan(a)*tan(b))" },
  { l: "sin(2x)", r: "2*sin(x)*cos(x)" },
  { l: "cos(2x)", r: "cos(x)^2-sin(x)^2" },
  { l: "tan(2x)", r: "2*tan(x)/(1-tan(x)^2)" },
  { l: "sin(x/2)", r: "sqrt((1-cos(x))/2)" },
  { l: "cos(x/2)", r: "sqrt((1+cos(x))/2)" },
  { l: "tan(x/2)", r: "sqrt((1-cos(x))/(1+cos(x)))" },

  // -------------------------------
  // Hyperbolic Rules
  // -------------------------------
  { l: "sinh(x)", r: "(e^x-e^(-x))/2" },
  { l: "cosh(x)", r: "(e^x+e^(-x))/2" },
  { l: "tanh(x)", r: "sinh(x)/cosh(x)" },
  { l: "cosh(x)^2-sinh(x)^2", r: "1" },
  { l: "1-tanh(x)^2", r: "sech(x)^2" },
  { l: "coth(x)^2-1", r: "csch(x)^2" },
  { l: "sinh(a+b)", r: "sinh(a)*cosh(b)+cosh(a)*sinh(b)" },
  { l: "cosh(a+b)", r: "cosh(a)*cosh(b)+sinh(a)*sinh(b)" },
  { l: "tanh(a+b)", r: "(tanh(a)+tanh(b))/(1+tanh(a)*tanh(b))" },
  { l: "sinh(2x)", r: "2*sinh(x)*cosh(x)" },
  { l: "cosh(2x)", r: "cosh(x)^2+sinh(x)^2" },
  { l: "tanh(2x)", r: "2*tanh(x)/(1+tanh(x)^2)" },
  { l: "sinh^-1(x)", r: "ln(x+sqrt(x^2+1))" },
  { l: "cosh^-1(x)", r: "ln(x+sqrt(x^2-1))" },
  { l: "tanh^-1(x)", r: "1/2*ln((1+x)/(1-x))" },

  // -------------------------------
  // Complex Number Rules
  // -------------------------------
  { l: "i^2", r: "-1" },
  { l: "i^3", r: "-i" },
  { l: "i^4", r: "1" },
  { l: "i^5", r: "i" },
  { l: "(a+bi)+(c+di)", r: "(a+c)+(b+d)i" },
  { l: "(a+bi)-(c+di)", r: "(a-c)+(b-d)i" },
  { l: "(a+bi)*(c+di)", r: "(a*c-b*d)+(a*d+b*c)i" },
  { l: "(a+bi)/(c+di)", r: "((a+bi)*(c-di))/(c^2+d^2)" },
  { l: "1/(a+bi)", r: "(a-bi)/(a^2+b^2)" },
  { l: "conj(a+bi)", r: "a-bi" },
  { l: "conj(z1*z2)", r: "conj(z1)*conj(z2)" },
  { l: "conj(z1/z2)", r: "conj(z1)/conj(z2)" },
  { l: "z*conj(z)", r: "a^2+b^2" },
  { l: "e^(i*theta)", r: "cos(theta)+i*sin(theta)" },
  { l: "r*e^(i*theta)", r: "r*(cos(theta)+i*sin(theta))" },
  {
    l: "(r1*e^(i*theta1))*(r2*e^(i*theta2))",
    r: "(r1*r2)*e^(i*(theta1+theta2))",
  },
  { l: "(r*e^(i*theta))^n", r: "r^n*e^(i*(n*theta))" },
  { l: "ln(a+bi)", r: "ln(sqrt(a^2+b^2))+i*atan2(b,a)" },
  { l: "1/i", r: "-i" },
  { l: "1/(a+bi)", r: "(a-bi)/(a^2+b^2)" },

  // -------------------------------
  // Miscellaneous Rules
  // -------------------------------
  { l: "|a|", r: "a", condition: "a>=0" },
  { l: "log_a(a)", r: "1" },
  { l: "log_a(x*y)", r: "log_a(x)+log_a(y)" },
  { l: "n!", r: "n*(n-1)!" },
  { l: "0!", r: "1" },
  { l: "a mod b", r: "a - b*floor(a/b)" },
  { l: "gcd(a,b)", r: "gcd(b,a)" },
  { l: "lcm(a,b)", r: "(a*b)/gcd(a,b)" },
  { l: "sgn(x)", r: "x/|x|" },
  { l: "step(x)", r: "1", condition: "x>=0" },
  { l: "step(x)", r: "0", condition: "x<0" },

  // -------------------------------
  // Matrix Rules
  // -------------------------------
  { l: "A+B", r: "B+A" },
  { l: "(A+B)+C", r: "A+(B+C)" },
  { l: "A+0", r: "A" },
  { l: "A-A", r: "0" },
  { l: "(A B) C", r: "A (B C)" },
  { l: "A(B+C)", r: "A B+A C" },
  { l: "I A", r: "A" },
  { l: "A I", r: "A" },
  { l: "A 0", r: "0" },
  { l: "c (A B)", r: "(c A) B" },
  { l: "c (A+B)", r: "c A+c B" },
  { l: "1 A", r: "A" },
  { l: "(A+B)^T", r: "A^T+B^T" },
  { l: "(A B)^T", r: "B^T A^T" },
  { l: "(A^T)^T", r: "A" },
  { l: "det(A B)", r: "det(A)det(B)" },
  { l: "det(A^T)", r: "det(A)" },
  { l: "det(A^{-1})", r: "1/det(A)" },
  { l: "(A B)^{-1}", r: "B^{-1}A^{-1}" },
  { l: "(A^T)^{-1}", r: "(A^{-1})^T" },
  { l: "tr(A+B)", r: "tr(A)+tr(B)" },
  { l: "tr(A^T)", r: "tr(A)" },
  { l: "lambda(A B)", r: "lambda(A)lambda(B)" },
  { l: "lambda(A^T)", r: "lambda(A)" },

  // -------------------------------
  // Set Theory Rules
  // -------------------------------
  { l: "A∪∅", r: "A" },
  { l: "A∩U", r: "A" },
  { l: "A∪U", r: "U" },
  { l: "A∩∅", r: "∅" },
  { l: "A∪A", r: "A" },
  { l: "A∩A", r: "A" },
  { l: "A∪U", r: "U" },
  { l: "A∩∅", r: "∅" },
  { l: "A∪B", r: "B∪A" },
  { l: "A∩B", r: "B∩A" },
  { l: "(A∪B)∪C", r: "A∪(B∪C)" },
  { l: "(A∩B)∩C", r: "A∩(B∩C)" },
  { l: "A∪(B∩C)", r: "(A∪B)∩(A∪C)" },
  { l: "A∩(B∪C)", r: "(A∩B)∪(A∩C)" },
  { l: "¬(A∪B)", r: "¬A∩¬B" },
  { l: "¬(A∩B)", r: "¬A∪¬B" },
  { l: "¬(¬A)", r: "A" },
  { l: "A∪¬A", r: "U" },
  { l: "A∩¬A", r: "∅" },
  { l: "A∪(A∩B)", r: "A" },
  { l: "A∩(A∪B)", r: "A" },
  { l: "A-B", r: "A∩¬B" },
  { l: "¬(A-B)", r: "¬A∪B" },
  { l: "A×(B∪C)", r: "(A×B)∪(A×C)" },
  { l: "A×∅", r: "∅" },
  { l: "P(∅)", r: "{∅}" },
  { l: "|P(A)|", r: "2^|A|" },
];
