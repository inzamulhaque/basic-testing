export const validatedEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format!");
  }
};

export const validateArrayNotEmpty = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array cannot be empty!");
  }
};
