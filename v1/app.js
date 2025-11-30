const express =require('express');
const cron = require('node-cron')



const app = express();



app.use(express.json())

cron.schedule("17 17 * * *",()=>{
    console.log('Rodando script diario')
})


const PORT = 3000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`rodando em http://localhost:${PORT}`);

});