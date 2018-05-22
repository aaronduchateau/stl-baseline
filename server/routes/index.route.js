import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import meRoutes from './me.route';
import chartRoutes from './charts.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

// mount user routes at /me
router.use('/me', meRoutes);

// mount user routes at /charts
router.use('/charts', chartRoutes);

export default router;