const app = require('express')()
app.get('/',(req,res)=>{
    res.send('hhhhhhhh')
    console.log('succeed two')
})

app.listen(3600,()=>{
    console.log('succeed')
})