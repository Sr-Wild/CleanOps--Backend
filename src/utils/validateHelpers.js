import {validationResult} from 'express-validator'
import {makeResponsesException}from'./responses.js'

export const validateResult = (req,res,next)=>{
	try {
		validationResult(req).throw()
		return next()
	} catch (err) {
		makeResponsesException(res,err)
	}

}