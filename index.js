const express = require("express")
const app = express()

// req=requests   res: response

// http://localhost:3000/itzamar/789
app.get("/:user/:password", (req,res) => { // :/ es el segmento de valor dinamico
    const {user, password} =req.params //desestructuración
    if(user === 'ana' & password === '123'){

    res.json({msg: 'Inicio de sesión exitoso'}) //ponerlo una vez hace que el atributo se llame igual a la variable
        return
}
    res.json({msg: 'Fallo en el usuario o contraseña'})
}) 
// http://localhost:3000/login?fullname=Ana%20Lilia%20Cruz%20Roque

// http://localhost:3000/login?user=ana&password=123
app.get('/login', (req, res) => {
    const {user, password} =req.query //desestructuración

    if(!user || !password) {
        res.status(400).json({msg: 'You need to provide <user> and <password> params'})
    }

    if(user === 'ana' & password === '123'){

    res.json({msg: 'Sign In succesfully'}) //ponerlo una vez hace que el atributo se llame igual a la variable
        return
}
    res.status(404).json({msg: 'Wrong user or password'})
})

app.post("/", (req,res) => {
    res.json({msg:'Hola POST!'})
})

app.put("/", (req,res) => {
    res.send("Hola PUT!")
})

app.patch("/", (req,res) => {
    res.json({msg:"Hola PATCH!"})
})

app.delete("/", (req,res) => {
    res.json({msg:"Hola DELETE!"})
})
/**
 * 
 * Funcionalidad
 * 
 */
// http://localhost:3000
app.listen(3000,() => {
    console.log("listening on port 3000")
})