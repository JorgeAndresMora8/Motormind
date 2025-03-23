import { Response } from 'express'

//SUCCESS RESPONSE
export const response = (res: Response, statusCode: number, data:any) => { 
    res.status(statusCode).json({
        error: false, 
        data
    })
}

//ERROR RESPONSE
export const errorResponse = (res: Response, statusCode: number, message: string) => { 
    res.status(statusCode).json({
        error: true, 
        message
    })
}