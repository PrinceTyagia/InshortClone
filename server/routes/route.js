import express from 'express'
import { getNews } from '../controller/news-controller.js';

const route  = express.Router();



route.get('/news',getNews);
// route in 3 argument 1 path 2 middlware optional hota ha 3 callback option

export default route;