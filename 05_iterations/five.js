const coding = ["js", "cpp", "py", "rb"];

coding.forEach(function (val) {
  // console.log(val);
});
coding.forEach((val) => {
  //   console.log(val);
});
function printme(val) {
  console.log(val);
}

coding.forEach(printme);

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
