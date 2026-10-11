
import { Router } from "express";
import { testUsers } from "../controllers/user.controller.js";
import validate from "../middleware/validate.js";
import { registerUserSchema } from "../validators/user.validator.js";
import { success } from "zod";
import AppError from "../utils/AppError.js";

const router = Router();

router.get("/test", testUsers);
router.post(
    "/validate-test",
    validate(registerUserSchema),
    (req,res)=>{
        return res.status(200).json({
            success:true,
            message:"Validation successful",
            data: req.body
        });
    }
)


router.get("/error-test", (req, res, next) => {
  next(new AppError("Test error is working", 400));
});


export default router;
