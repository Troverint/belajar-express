import express from "express";
import db from "./koneksi.js";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get("/", router)
app.get("/find", router)
app.post("/create", router)
app.put("/edit", router)
app.delete("/delete", router)


// app.get("/find", (req, res) => {
    // const sql = `SELECT * FROM mahasiswa WHERE nim = ${req.query.nim}`
    // db.query(sql, (error, result) => 
    //     res.json(result)
    //     )
// })


// app.post("/create", (req,res) => {
//   const {nim,nama_lengkap, kelas, alamat } = req.body
//   const sql = "INSERT INTO mahasiswa (nim,nama_lengkap, kelas, alamat) VALUES (?,?,?,?)"
//   db.query(sql, [nim,nama_lengkap, kelas, alamat], (error,result) =>{
//     if(error){
//       res.status(400)
//       res.send(error)
//     }
//     res.json(result);
//   })
// })

// app.delete("/delete", (req,res) => {
//   const nim = req.query.nim
//   const sql = "DELETE FROM mahasiswa WHERE nim = ?"
//   db.query(sql, [nim], (error,result)=>{
//     if(error){
//       res.status(400)
//       res.send(error)
//     }
//     res.status(200)
//     res.json("data berhasil dihapus")
//   } )
// })

// app.put("/update",(req,res) => {
//   const nim = req.query.nim;
//   const {nama_lengkap, kelas, alamat} = req.body;
//   if (nim || nama_lengkap || kelas || alamat){
//     const query = ` UPDATE mahasiswa  SET nama_lengkap = "${nama_lengkap}" , kelas = "${kelas}" , alamat = "${alamat}"  WHERE nim = ${nim}`;
//     db.query(query, (error, result) => {
//       if(error) res.status(400).send(error.message);

//       res.json(result);
//     })
//   }
// })




app.listen(3000, () => {
    console.log("server berjalan di http://localhost:" + PORT )
})