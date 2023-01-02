const express = require("express");
const app = express();

const port = parseInt(process.argv[2]);
app.listen(port, () => console.log(`serving on port ${port}`));

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/schedule",(req,res)=>{
    res.sendFile("./views/schedule.html", {root : __dirname});
})