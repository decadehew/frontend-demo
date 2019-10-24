let colors = generateRandomColors(6);
//使用这个随机生产颜色函数
// [
//   'rgb(255, 0, 0)',
//   'rgb(255, 255, 0)',
//   'rgb(0, 255, 0)',
//   'rgb(0, 255, 255)',
//   'rgb(0, 0, 255)',
//   'rgb(255, 0, 255)'
// ]

//设 一个用来追踪的变数值，是一个全局变数
let numOfSquare = 6;
const squares = document.querySelectorAll('.square');
let i = 0
let pickedColor = pickColor();
const colorDisplay = document.getElementById('display');
const messageDisplay = document.getElementById('message');
let h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const easyButton = document.querySelector('#easy');
const hardButton = document.querySelector('#hard');
// 标题显示rgb
colorDisplay.textContent = pickedColor;

// Reset Button event
resetButton.addEventListener('click', () => {
  colors = generateRandomColors(numOfSquare);
  //重新 取得随机颜色
  pickedColor = pickColor();
  //显示标题颜色值
  colorDisplay.textContent = pickedColor;
  //把每个颜色显示出每个square
  for(let i=0; i<squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  //清空提示
  messageDisplay.textContent = '';
  //把标题默认颜色
  h1.style.background = 'steelblue';
  resetButton.textContent = 'New Colors';
})

// Easy Button event
easyButton.addEventListener('click', () => {
  // 当click easy button事件
  // 就会自动加/删selected class去这个button元素
  hardButton.classList.remove('selected');
  easyButton.classList.add('selected');
  // 重新设定追踪变数
  numOfSquare = 3;
  // 启动了随机生产颜色函数
  colors = generateRandomColors(numOfSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  // 这是一个把颜色配给每个square，
  // 因为colors里只有三种颜色
  // 判断语句： 颜色三种，给三个square元素颜色
  // 否则语句： 第四种square开始，
  // 把每个剩下元素显示none = hide隐藏
  for(let i=0; i<squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  messageDisplay.textContent = '';
  h1.style.background = 'steelblue';
})

// Hard Button event
hardButton.addEventListener('click', () => {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numOfSquare = 6;
  colors = generateRandomColors(numOfSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  // 这是一个把颜色配给每个square，
  // 把colors里每个颜色配给square
  // 把所有的square都显示出来
  for(let i=0; i<squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = 'block';
  }
  messageDisplay.textContent = '';
  h1.style.background = 'steelblue';
})


squares.forEach( (square) => {
  //设每个square元素颜色
  square.style.background = colors[i]
  square.addEventListener('click', () => {
    //设 当每个square事件被clicked时的颜色
    let clickedColor = square.style.background;
    console.log(clickedColor);
    //比较是否一样颜色
    if(clickedColor === pickedColor) {
      //Message提示
      messageDisplay.textContent = 'Correct';
      //使用函数 correct就会变成全部颜色一样
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = 'Play Again?'
    } else {
      //判断错误 把颜色设为背景图【消失】
      square.style.background = '#232323';
      messageDisplay.textContent = 'try again';
    }
  })
  i++;
})


//设函数 把被clickedColor颜色赋给square
function changeColors(color) {
  squares.forEach((square) => {
    square.style.background = color;
  });
}

//设函数 取得一个颜色函数
function pickColor() {
  let random = Math.floor(Math.random() * colors.length + 1);
  // 已有颜色阵列colors
  return colors[random];
}

// 随机生产颜色函数
// num是想要生产多少种颜色，以num为参数
// 每生产一个颜色push去arr阵列里
// 只要每次启动这个函数就会生产随机颜色
function generateRandomColors(num) {
  let arr = [];
  for(let i=0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr
}


// 随机颜色函数
// 使用Math object生产随机
// 只要每次启动这个函数就会生产随机颜色
function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
