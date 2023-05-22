import { Router } from "express";

import { send20Post, getAllPosts } from "../controllers/post.controller.js";

const router = Router();


router.post("/posts", send20Post);

router.get("/getPosts", getAllPosts);


export default router;