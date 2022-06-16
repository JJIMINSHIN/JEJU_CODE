let heights = prompt('키를 입력하세요').split(' ');
function answer(heights) {
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] > heights[i + 1]) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }