let tree = '';
const empty = '⬛'
const line = 5;

function addEmpty(e){
  let emptytxt = '';
  let j = line - e;
  for(let i = 1; i <j; i++ ){
    emptytxt = emptytxt + empty;
  }
  return emptytxt
}

//트리
function addStar(e){
  let star = '⭐';
  for(let i = 0; i < e; i++ ){
    star +=  '⭐⭐';
  }
  return star
}

//라인 만들기
for (let i = 0; i < line; i++) {
  let sky = addEmpty(i)
  let star = addStar(i)
  tree = sky+ star +sky;
  console.log(tree)
}