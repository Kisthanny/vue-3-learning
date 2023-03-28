import md5 from "md5";

const before = "apex imma fuck it up";
const after = md5(before);
console.log({ before, after });
