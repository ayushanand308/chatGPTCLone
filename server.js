const PORT=8000
const express=require('express')
const cors=require('cors')
const fetch=require('isomorphic-fetch')
const app=express()
app.use(express.json())
app.use(cors())

const API_KEY="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"

app.post('/completions',async(req,res)=>{
    const userMessage=req.body.message;
    const options={
        method:"POST",
        headers:{
            "Authorization":`Bearer ${API_KEY}`,
            "Content-Type":"application/json" 
        },

        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            message:[{role:"user",content:userMessage}],
            max_tokens:100,
        })
    }

    try{
        const response=await fetch("https://api.openai.com/v1/completions",options)
        const data=await response.json()
        res.send(data)
    }
    catch(error){
        console.error(error)
    }
})

app.listen(PORT,()=>console.log("Your server us running on port "+PORT))
