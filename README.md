# 前端 Demo

### [Move Pikachu](https://decadehew.github.io/frontend-demo/pikachu/)

這是會動繪製皮卡丘過程，很酷吧，這個和會動履歷差不多，但還是有點難度。主要核心由 `CSS` 技巧來呈現，而且會由三個 Button 分別控制慢中快繪製整個過程。

使用技術：
- `setTimeout` 方式每隔執行。但 `setTimeout` 只會執行一次，如何做到？
- 使用 recursive 方式不停執行，但條件滿足就會停止。
- 整個過程 `CSS` 內容都是先寫好，存在變數中。
- 執行過程中，每隔時間讀取 `CSS` 內容，插入到 `style tag` 中。

### [Move Resume](https://decadehew.github.io/frontend-demo/move-resume/)

這是會動的履歷，很酷。全程在頁面自動編寫程式，同時呈現在頁面上，會以 `markdown` 格式來展現。

使用技術：
- `CSS` 基本排版
- `JS` `setInterval` 來每隔時間執行程式，當內容沒有了會 `clearInterval` 停止。
- 整個過程 `CSS` 和 履歷內容都是先寫好，存在變數中。
- `JS` 程式分別處理 `CSS` 控制 和 `markdown` 呈現。
- 自動邊寫 `CSS`同時呈現效果 ，接著邊寫 `markdown`。
- 使用兩個套件 `Prism` 和 `markdown` 來豐富畫面感。
- 執行過程中，每隔時間讀取 `CSS` 內容，插入到 `style tag` 中。

### [Navigate App](https://decadehew.github.io/frontend-demo/navigate-app/)

這導航應用程式讓使用者便利，透過捷徑方式達到你常訪問網站，而且還可以新增和編輯喜歡網站連接到這個導航應用程式中。

使用技術：
- `CSS` 基本排版
- 使用 `kbd` tag 來表示鍵盤，透過 `onkeypress` 監聽使用者輸入去觸發對應事件。
- 函數式封裝單一職責方式利於管理。

### [List Interactive](https://decadehew.github.io/frontend-demo/list-interactive/)

讓使用者可以新增刪除和編輯

使用技術：
- 鞏固 DOM API 知識來操作頁面。
- 使用事件委託來處理 `up down remove` button。
- 事件委託是利用事件泡沫實現 ex: `ul > li`

### [Color Game](https://decadehew.github.io/frontend-demo/color-game/)

顏色遊戲，玩家必須要懂 `rgb` 。選擇 `New Colors`, 開始在選項中選擇對的顏色。玩家可以根據 level 去選擇對應 `Easy` & `Hard`

使用技術：
- `CSS` 基本排版
- `JS` 來操作 `DOM`，以及使用者互動。
- `DOM API`，`JS API`

### Image Grid
[link](https://decadehew.github.io/frontend-demo/image-grid/)

早期學習前端時候其一作業 (回顧)。這個很單純，主要是以排版為主。

使用技術：
- `CSS` 基本排版
- 使用 google font API


