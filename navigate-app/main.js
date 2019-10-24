
// 1. 初始化數據
const keys = init().keys
let hash = init().hash

// 2. 生成鍵盤
generateKeyboard(keys, hash)

// 3. 監聽鍵盤
listenFromKeyboad(hash)

// 輔助
function listenFromKeyboad (hash) {
  document.onkeypress = function (keyboard) {
    const url = hash[keyboard.key]
    // 如果url有http就不用加
    if (url) {
      if (url.slice(0, 4) === 'http' || url.slice(0, 5) === 'https') {
        window.open(url, '_blank')
      } else {
        window.open(`http://${url}`, '_blank')
      }
    } else {
      alert(`警告：你未給我URL，請點擊編輯設定你最愛網站
          【有效url格式】：
          1. http://twitter.com,
          2. https://twitter.com,
          3. www.twitter.com
          4. twitter.com
      `)
    }
  }
}

function generateKeyboard (keys, hash) {
  for (let i=0; i<keys.length; i++) {
    const main = document.querySelector('#main')
    const div = tag('div', {className: 'row'})
    main.appendChild(div)
  
    for (let j=0; j<keys[i].length; j++) {
      const keyBoard = tag('kbd', {className: 'key'})
      const span = createSpan(keys[i][j])
      const btn = createButton()
      const img = createFaviconIco(keys[i][j])
  
      keyBoard.appendChild(span)
      keyBoard.appendChild(img)
      keyBoard.appendChild(btn)
      div.appendChild(keyBoard)
    }
  }
}

function init () {
  const keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o', 'p'],
    1: ['a', 's','d', 'f','g', 'h','j', 'k', 'l'],
    2: ['z', 'x','c', 'v','b', 'n','m'],
    length: 3
  }
  
  let hash = {
    q: undefined,
    w: undefined,
    e: undefined,
    r: undefined,
    t: undefined,
    y: 'youtube.com',
    i: undefined,
    p: undefined,
    a: undefined,
    s: undefined,
    d: undefined,
    f: 'facebook.com',
    g: undefined,
    h: undefined,
    j: undefined,
    k: undefined,
    l: undefined,
    z: undefined,
    x: undefined,
    c: undefined,
    v: undefined,
    b: undefined,
    n: undefined,
    m: undefined,
  
  }
  
  const hashInLocalStorage = getFromLocalStorage('key')
  
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }

  return { keys, hash}
}

function getFromLocalStorage (name) {
  return JSON.parse(localStorage.getItem(name)) || ''
}

function tag (tagName, attributes) {
  const element = document.createElement(tagName)
  for (let key in attributes) {
    element[key] = attributes[key]
  }
  return element
}

function createSpan (txt) {
  const span = tag('span', {className: 'text'})
  span.textContent = txt
  return span
}

function createFaviconIco (src) {
  const img = tag('img')
  const url = hash[src]
  if (url) {
    if (url.slice(0, 4) === 'http' || url.slice(0, 5) === 'https') {
      img.src =  `${url}/favicon.ico`
    } else {
      img.src =  `http://${url}/favicon.ico`
    }
  } else {
    img.src =  `p.ico`
  }
  img.onerror = function (e) {
    e.target.src = `p.ico` 
  }
  return img
}

function createButton () {
  let btn = tag('button')
  btn.textContent = '編輯'
  btn.addEventListener('click', function (e) {
    const url = prompt('給我一個URL')
    const img = btn.previousSibling

    if (url) {
      if (url.slice(0, 4) === 'http' || url.slice(0, 5) === 'https') {
        img.src =  `${url}/favicon.ico`
      } else {
        img.src =  `http://${url}/favicon.ico`
      }
    } else {
      img.src =  `p.ico`
    }
    img.onerror = function (e) {
      e.target.src = `p.ico` 
    }
    localStorage.setItem('key', JSON.stringify(hash))
  })
  return btn
}

