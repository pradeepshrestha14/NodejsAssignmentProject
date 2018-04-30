import express from 'express';
import MulterMiddleware from '../controllers/multerController';
import ImageController from '../controllers/imageController';

let router = express.Router();

router.post('/images',MulterMiddleware,ImageController.getUploadResult);


export default router;