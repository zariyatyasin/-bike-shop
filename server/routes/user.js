import express from "express"
import { DeleteUser, getAllUser, getUser, stats, UpdateUser } from "../Controller/userController.js";

import {  verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";

const router = express.Router();

//Update user

router.route("/:id").put(verifyTokenAndAuthorization,UpdateUser).delete(verifyTokenAndAuthorization,DeleteUser)

router.get("/find/:id",verifyTokenAndAdmin,getUser)
//getAlluser
router.get("/find/",verifyTokenAndAdmin,getAllUser)
router.get("/stats/",verifyTokenAndAdmin,stats)
//delete

 
 

export default router