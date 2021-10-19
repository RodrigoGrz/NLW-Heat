import { Router } from "express";
import { AuthenticateUseController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUseController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

export { router };