# 実行手順
---

準備段階として
- Herokuのアカウントを作成
- `brew install heroku/brew/heroku` などでHeroku CLIをインストール
- npmをbrewか何かでインストールする
- もしかしたら何か足りないかもしれない

Herokuにデプロイする
リポジトリを手元に持ってくる
`npm install`

変更したりしなかったりする

`node app.js`で確認する

git commitする

`git push heroku master`するとデプロイができるので
`heroku open`で確認する。



