import { Router } from "express";
// import asyncHandler from "express-async-handler";
// import { authenticateToken } from "../middleware/authenticateToken";
import userRouter from "./userRoutes";
import authRouter from "./authRoutes";
import reservationRouter from "./reservationRoutes";
import { itemRouter } from "./itemRoutes";
import { categoryRouter } from "./categoryRoutes";

const router: Router = Router();

router.use("/sign-in", authRouter);
router.use("/users", userRouter);
router.use("/reservations", reservationRouter);
router.use("/items", itemRouter);
router.use("/categories", categoryRouter);
// router.use("/sign-in", authRouter);
// router.use("/users", asyncHandler(authenticateToken), userRouter);
// router.use("/reservations", asyncHandler(authenticateToken), reservationRouter);
// router.use("/items", asyncHandler(authenticateToken), itemRouter);
// router.use("/categories", asyncHandler(authenticateToken), categoryRouter);
export default router;
