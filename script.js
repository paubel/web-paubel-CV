const navigationHeight = document.querySelector(
  ".primary-navigation"
).offsetHeight;
/* 
console.log(document.documentElement.style); */

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight - 1 + "px"
);

/* console.log(document.documentElement.style); */
