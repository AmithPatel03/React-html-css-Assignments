function validatePasswordStrength(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  const password1 = "Abcdefg1";
const password2 = "abc123";

console.log(validatePasswordStrength(password1));
console.log(validatePasswordStrength(password2));
