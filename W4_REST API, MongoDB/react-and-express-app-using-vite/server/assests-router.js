const express = require("express");
const router = express.Router();

// Regular expressions to match image and video file types
const imageRegex = /\/.+\.(svg|png|jpg|jpeg)$/;
const videoRegex = /\/.+\.(mp4|ogv)$/;

// Redirect image requests to localhost:3000
router.get(imageRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

// Redirect video requests to localhost:3000
router.get(videoRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

module.exports = router;
2.	Update server.js to include this new router:
const assetsRouter = require("./server/assets-router");

app.use("/src", assetsRouter);
