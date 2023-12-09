import randomstring from "randomstring";

export const tokenize = () =>
  randomstring.generate({ length: 8, charset: "0123456789ABCD" });
