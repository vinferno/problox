import express from "express";
import { ChatModel } from '../schemas/chat.schema.js'
export const chatRouter = express.Router();

chatRouter.post("/create-message", (req, res, next) => {
  const {sender, to, text} = req.body;
  if (['js', 'php', 'python'].includes(text)) {
    next(new Error('Inavalied request'));
  }
},function(req, res) {
    const {sender, to, text} = req.body
    const chat = new ChatModel({
      sender,
      to,
      text
    });
    chat
    .save()
    .then((data) => {
      res.json((data))
    })
    .catch((err) => {
      console.log(err);
      res.status(501);
      res.json({errors: err})
    })
  })
  chatRouter.get("/", function(req, res) {
    ChatModel.find()
    .then((data) => res.json({data}))
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
  })

