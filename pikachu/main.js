!(function () {
  let duration = 50;
  // 事件
  $('.action').on('click', 'button', (e) => {
    let $button = $(e.currentTarget);
    let speed = $button.attr('data-speed');
    $button.addClass('active').siblings('.active').removeClass('active');
    console.log(speed)
    switch (speed) {
      case 'slow':
        duration = 100;
        break;
      case 'medium':
        duration = 50;
        break;
      case 'fast':
        duration = 20;
        break;
    }
  })

  function writeCode (prefix, code, callback) {
    let container = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;

    setTimeout(function fn () {
      n += 1;
      container.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      styleTag.innerHTML = code.substring(0, n);
      if (n <= code.length) {
        setTimeout(fn, duration);
      } else callback && callback();
    }, duration);
  }

  let code = `
  /**
   * 首先需要皮卡丘的皮
  */
  .preview {
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
  }
  .wrapper{
    width: 100%;
    height: 165px;
    position: relative;
  }
  /**
   * 第二步：需要皮卡丘的鼻子
  */
  .nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
  }

  /**
   * 第三步：皮卡丘的兩棵眼睛
   * 一左一右，水汪汪眼睛
  */
  .eye{
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
  .eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top:-1px;
    border: 2px solid #000;
  }
  .eye.left{
    right: 50%;
    margin-right: 90px;
  }
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }

  /**
   * 第四步：皮卡丘的臉
   * 有兩顆紅潤潤的
  */
  .face{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
  }
  .face.left{
    right: 50%;
    margin-right: 116px;
  }
  .face.right{
    left: 50%;
    margin-left: 116px;
  }

  /**
   * 第五步：皮卡丘的上嘴唇
  */
  .upperLip{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #FDE348;
  }
  .upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
  }
  .upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }

  /**
   * 第六步：皮卡丘的下嘴唇
   * 可愛撒橋向你吐👅
  */
  .lowerLip-wrapper{
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    /* z-index: -1; */
    height: 110px;
    overflow: hidden;
    width: 300px;
  }
  .lowerLip{
    height: 3000px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  .lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
  }
  // 完畢，謝謝收看
  `

  writeCode('', code)
})()