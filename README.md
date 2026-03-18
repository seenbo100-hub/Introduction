# Keita Shimbo - Self Introduction

## このリポジトリについて
自己紹介ページのHTMLファイルをまとめています。

## 公開URL
- GitHub Pages: https://seenbo100-hub.github.io/Introduction/
- Surge（手動デプロイ）: https://keita-shimbo-self-intro.surge.sh

## ファイル構成
```
Self-Introduction/
├── index.html        # メインの自己紹介ページ
├── Kilimanjaro.mp4   # 動画ファイル
├── runnning.mp4      # 動画ファイル
├── server.js         # ローカル確認用サーバー（node server.js で起動）
├── deploy.bat        # Surge へのデプロイスクリプト
└── README.md         # このファイル
```

## 更新手順　
//READMEの更新手順を見ながらやってと伝えればOK//

### ① ローカルで確認する
ターミナルで以下を実行してブラウザで確認：
```bash
node server.js
```
→ http://localhost:8080 をブラウザで開く

### ② GitHub Pages に反映する
```bash
git add .
git commit -m "変更内容を一言で書く"
git push origin main
```
push後、数分で自動反映される。

### ③ Surge に反映する
`deploy.bat` をダブルクリックして実行するだけ。

## 使用技術
- HTML
- CSS
- JavaScript
