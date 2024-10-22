import express from 'express';
import path from 'path';
import multer from 'multer';
import { mergePdfs } from './merge.js';

const app = express()
const upload = multer({dest:'uploads/'})
const port = 3000

app.use('/static', express.static('public')) 
app.get('/', (req, res) => {
  res.sendFile(path.resolve('templates/index.html'))
})

app.post('/merge', upload.array('pdfs',2), async (req, res, next) => {
    console.log(req.files)
    let mergedFile = await mergePdfs(`uploads/${req.files[0].filename}`, `uploads/${req.files[1].filename}`)
    res.redirect(`http://localhost:3000/static/${mergedFile}.pdf`)
})

app.listen(port, ()=>{
    console.log(`App is running at http://localhost:${port}`)
})