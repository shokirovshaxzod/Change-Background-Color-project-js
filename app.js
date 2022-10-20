function color(colour) {
  let a = getComputedStyle(colour);
  let b = a.backgroundColor;
  document.querySelector('body').style.backgroundColor = b;
}
