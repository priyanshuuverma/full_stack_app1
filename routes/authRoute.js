import express from 'express';
import { registerController,loginController, testController } from '../controllers/authController.js';
import { isAdmin, requiresignIn } from '../middlewares/authMiddleware.js';

// Router object
const router = express.Router();

// Routing 
// REGISTER || POST method
router.post('/register', registerController);
//LOGIN || POST
router.post('/login',loginController)
//test Route || post
router.get('/test',requiresignIn,isAdmin,  testController)
export default router;
