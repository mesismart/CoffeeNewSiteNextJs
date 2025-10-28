import { hash, compare } from "bcryptjs";

import { sign, verify } from "jsonwebtoken";

const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  console.log("isValid: ", isValid);
  return isValid;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.ACCESS_TOKEN_SECRETKEY, {
    expiresIn: "60d",
  });
  return token;
};

const verifyAccessToken = (token) => {
  console.log("token22: ", token);
  try {
    console.log("Verifying Access Token...");
    console.log("accessTokenSecretKey: ", process.env.ACCESS_TOKEN_SECRETKEY);

    const tokenPayload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETKEY);
    console.log("tokenPayload", tokenPayload);
    return tokenPayload;
  } catch (error) {
    console.error("Verify Access Token Error ->", error);
  }
};

const generateRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.REFRESH_TOKEN_SECRETKEY, {
    expiresIn: "15d",
  });
  return token;
};

const validatePhone = (phone) => {
  const phonePattern =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phonePattern.test(phone);
};

const validateEmail = (email) => {
  const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailPattern.test(email);
};

const validatePassword = (password) => {
  const passwordPattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  return passwordPattern.test(password);
};

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
};
