const PORT = process.env.PORT || 3000;
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();


// expressの設定
app.set("view engine", "ejs");

// 静的コンテンツのルーティング
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

//動的コンテンツのルーティング
app.use("/", require("./routes/index.js"));

// WEBアプリの実行
app.listen(PORT, () => {
  console.log(`Application listening at :${PORT}`);
});

