// // The code snippet you want to highlight, as a string
// const code = `body {color: red;}`;

// // Returns a highlighted HTML string
// const html = Prism.highlight(code, Prism.languages.css, 'css');
// console.log(html)

function writeCode (prefix, code, callback) {
  let domCode = document.querySelector('#code');
  let n = 0;
  let timer = setInterval(() => {
    n += 1;
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = prefix + code.substring(0, n);
    domCode.scrollTop = domCode.scrollHeight;
    if (n >= code.length) {
      window.clearInterval(timer);
      callback()
    }
  }, 70)

  // let promise = new Promise((resolve, reject) => {
  //   let timer = setInterval(() => {
  //     n += 1;
  //     domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
  //     styleTag.innerHTML = prefix + code.substring(0, n);
  //     domCode.scrollTop = domCode.scrollHeight;
  //     if (n >= code.length) {
  //       window.clearInterval(timer);
  //       resolve(callback)
  //     }
  //   }, 10)
  // })
  // return promise
}

// 把 MD 寫在 div > paper
function writeMarkdown (markdown, callback) {
  let domPaper = document.querySelector('#paper > .content');
  let n = 0;
  let timer = setInterval(() => {
    n += 1;
    domPaper.innerHTML = markdown.substring(0, n);
    // styleTag.innerHTML = markdown.substring(0, n);
    domPaper.scrollTop = domPaper.scrollHeight;
    if (n >= markdown.length) {
      window.clearInterval(timer);
      callback()
    }
  }, 35)
}



const css = `/*
* 面試官您好，我是丘梓陽，
* 我將以動畫效果來展示我的履歷。
* 只用文字介紹，太單調了，
* 我就用程式來介紹自己。
*/

* {
  transition: all 1s;
}
html {
  background: rgb(222,222,222);
  font-size: 16px;
}
#code {
  border: 1px solid #aaa;
  padding: 16px;
}

/* 加效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 我需要一張白紙 */
#code-wrapper {
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
}

#paper > .content {
  background: white;
  height: 100%;
  width: 100%;
}
`

const css2 = `
/**
 * 使用最酷 marked.js 庫
 * 把 Markdown 變成 HTML
*/
`

const css3 = `
/**
 * 已完成！ 
*/
`

const md = `
# 自我介紹
Hello，大家好, 我是丘梓陽，來自馬來西亞，畢業於東海大學（資訊工程系），是一名前端工程師。 
我熱愛追求技術不斷來提升與挑戰，我一直強調必須保持著學習態度，也希望藉由技術來提高使用者體驗及產品品質。 
我喜歡挑戰讓我人生更加精彩，目前專注於前端新技術開發。

# 經歷與教育
- 凱納股份有限公司 2019/08 ～ 至今 (前端工程師)
- 以柔資訊股份有限公司 2017／09 ～ 2018／07 (前端工程師)
`

writeCode('', css, () => {
  console.log('完成 css')
  createPaper(() => {
    console.log('創建paper')
    writeMarkdown(md, () => {
      console.log('to Markdown')
      writeCode(css, css2, () => {
        convertMarkdownToHtml(() => {
          writeCode(css+css2, css3, () => {
            console.log('finish')
          })
        })
      })
    });
  });
})


function createPaper (callback) {
  // 創建 paper
  let paper = document.createElement('div');
  paper.id = 'paper';
  let content = document.createElement('pre');
  content.className = 'content';
  paper.appendChild(content);
  document.body.appendChild(paper);
  callback();
}

function convertMarkdownToHtml (callback) {
  let div = document.createElement('div');
  div.className = 'html markdown-body';
  div.innerHTML = marked(md);

  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  callback()
}