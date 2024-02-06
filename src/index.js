import express from "express"
const app = express()
const port = 3000

app.get("/", (req, res) => {
  let lim = 20
  for (let i = 0; i < lim; i++) {
    console.log(`this is a log line ${i + 1}`)
  }
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
