import db from "../koneksi.js";

export const getMahasiswa = (req, res) => {
  // res.send("test");
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (error, result) => res.json(result));
};

export const getMahasiswaBynim = (req, res) => {
  // res.send("test");
  const sql = `SELECT * FROM mahasiswa WHERE id = ${req.query.id}`;
  db.query(sql, (error, result) => res.json(result));
};

export const postMahasiswa = (req, res) => {
  const { nim, nama_lengkap, kelas, alamat } = req.body;
  const sql =
    "INSERT INTO mahasiswa (nim,nama_lengkap, kelas, alamat) VALUES (?,?,?,?)";
  db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.json(result);
  });
};

export const editMahasiswa = (req, res) => {
  const id = req.query.id;
    const {nama_lengkap, kelas, alamat} = req.body;
    if (id || nama_lengkap || kelas || alamat){
      const query = ` UPDATE mahasiswa  SET nama_lengkap = "${nama_lengkap}" , kelas = "${kelas}" , alamat = "${alamat}"  WHERE id = ${id}`;
      db.query(query, (error, result) => {
        if(error) res.status(400).send(error.message);
  
        res.json(result);
      })
    }
};


export const deleteMahasiswa = (req, res) => {
  const id = req.query.id
    const sql = "DELETE FROM mahasiswa WHERE id = ?"
    db.query(sql, [id], (error,result)=>{
      if(error){
        res.status(400)
        res.send(error)
      }
      res.status(200)
      res.json("data berhasil dihapus")
    } )
};
  