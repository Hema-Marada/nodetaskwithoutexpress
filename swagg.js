const express=require('express')
const swaggerJsDoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')

const app=express()

const swaggerOptions= {
    swaggerDefinition: {
        info: {
            title: 'Library Api',
            version:'1.0.0'
        }
    },
    apis: ['swagg.js'],
};

const swaggerDocs=swaggerJsDoc(swaggerOptions)

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */

app.get('/books', (req,res)=>
{
    res.send([
        {
            id:1,
            title:"harry Poter",
            year:1985
        }
    ])
})

/**
 * @swagger
 * /books:
 *   post:
 *     description: Create a new Book
 *     parameters:
 *     - name: title
 *       description: title of the book
 *       in: formdata
 *       required: true
 *       type: string
 *     - name: year
 *       description: year of book published
 *       in: formdata
 *       required: true
 *       type: number
 *     responses:
 *       201:
 *         description: Created
 * 
 */
app.post('/books', (req,res)=>
{
    res.status(201).send();
})

/**
 * @swagger
 * /books:
 *   put:
 *     description: Update a  Book
 *     parameters:
 *     - name: title
 *       description: title of the book
 *       in: formdata
 *       required: true
 *       type: string
 *     responses:
 *       201:
 *         description: Updated
 * 
 */
app.put('/books', (req,res)=>
{
    res.status(201).send();
})

app.listen(4030,()=>
{
    console.log("Listening on Port")
})