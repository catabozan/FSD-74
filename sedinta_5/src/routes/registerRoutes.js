import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  checkToken,
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  logInUser,
  updateUser,
} from "./userRoutes.js";
import { getUserSettings } from "./userSettingsRoutes.js";

export const registerRoutes = (app) => {
  // register all routes

  // user
  app.get("/users", getAllUsers);
  app.get("/users/:id", getUserById);
  app.post("/users", createUser);
  app.patch("/users/:id", updateUser);
  app.delete("/users/:id", deleteUser);
  app.post("/users/login", logInUser);
  app.post("/check-token", checkToken);

  // user settings
  app.get("/users/:id/settings", getUserSettings)
};
