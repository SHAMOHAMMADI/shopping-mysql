import express from 'express'
import { getData , getAllData , createProducts , getAllProject, getAllAboutUs} from './database.js'
import bodyParser from 'body-parser'
import cors from "cors"
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())



const port = 8890



app.get('/products', async (req,res)=>{
    const alldata = await getAllData()
    res.send(alldata)
})

app.get('/products/:id', async (req,res)=>{
    const id = req.params.id
    const data = await getData(id)
    res.send(data)
})



app.post('/products',async(req , res)=>{
    const { title ,
        price ,
        description ,
        category ,
        image ,
        rating } = await req.body
    const product = await createProducts( title ,
        price ,
        description ,
        category ,
        image ,
        rating )
    res.status(201).send(product)
})

app.get('/projects' , async (req , res)=>{
    const alldata = await getAllProject()
    res.send(alldata)
})

app.get('/aboutus', async (req , res)=>{
    const alldata = await getAllAboutUs()
    res.send(alldata)
})
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke!')
})


app.listen(port , ()=>{
    console.log(`the server is running ${port}`)
})

