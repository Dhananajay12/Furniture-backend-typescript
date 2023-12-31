import express = require('express');
import {  createCategoryController, deleteCategoryController, getAllCategoriesController, getCategoryByIdCotroller, updateCategoryController } from './controller';
import { Request , Response } from 'express';
import { ProductVariant } from '../../model';

const router: express.Router = express.Router();


router.get('/' , async (req:Request,res:Response) =>{
	const response = await getAllCategoriesController();
	res.json(response);
})

router.get('/getById/:id', async (req: Request, res: Response) => {
	const response = await getCategoryByIdCotroller(req.params.id);
	res.json(response);
})

router.post('/create', async (req: Request, res: Response) => {
	const response = await createCategoryController(req.body)
	res.json(response);
})

router.put('/update', async (req: Request, res: Response) => {
	const response = await updateCategoryController(req.body)
	res.json(response);
})

router.delete('/detele', async (req: Request, res: Response) => {
	const response = await deleteCategoryController(req.body)
	res.json(response);
})

export { router }