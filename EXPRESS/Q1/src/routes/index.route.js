import {Router} from "express"

import postRoute from "./post.route.js";

const router = Router();
router.use("/", postRoute);

export default router;