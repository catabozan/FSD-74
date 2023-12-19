import { authMiddleware } from "../middleware/authMiddleware.js";
import { modelExists } from "../middleware/modelExistsMiddleware.js";
import { postExists } from "../middleware/postExistsMiddleware.js";
import { createPost, deletePost, getPosts, getUserPosts, updatePost } from "./postRoutes.js";
import {
  checkToken,
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  logInUser,
  updateUser,
} from "./userRoutes.js";
import { getUserSettings, updateUserSettings } from "./userSettingsRoutes.js";

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
  app.post("/users/:id/settings", updateUserSettings)

  // posts
  app.get("/posts", getPosts)
  app.post("/posts/:id", modelExists("Post"), updatePost)
  app.delete("/posts/:postId", modelExists("Post", "postId"), deletePost)
  app.get("/users/:id/posts", getUserPosts)
  app.post("/users/:id/posts", createPost)
};
