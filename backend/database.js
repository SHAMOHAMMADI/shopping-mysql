import express from "express";
import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const app = express();
import cors from "cors";

app.use(cors());

app.use(express.json());

// const corsOption = {
//     origin: ['http://localhost:8890'],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }
// app.use(cors(corsOption));

// app.options("*", cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }));

// app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }));

// const pool = mysql.createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// }).promise()

const pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
  }).promise()

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "foo",
//     database: "newbase"
// }).promise()

// const pool = mysql
//   .createPool({
//     host: "localhost",
//     user: "root",
//     password: "foo",
//     database: "newbase",
//   })
//   .promise();

// app.use(cors())
export async function getAllData() {
  const [row] = await pool.query("SELECT * FROM products");
  return row;
}

export async function getAllProject() {
  const [row] = await pool.query("SELECT * FROM Projects");
  return row;
}

export async function getData(id) {
  const [rows] = await pool.query(
    `
        SELECT *
         FROM products 
         WHERE id=?
    `,
    [id]
  );
  return rows;
}

export const getAllAboutUs = async () => {
  const [rows] = await pool.query(`SELECT * FROM aboutUs`);
  return rows;
};

export async function createProducts(
  title,
  price,
  description,
  category,
  image,
  rating
) {
  const result = await pool.query(
    `
        INSERT INTO products ( title ,
        price ,
        description ,
        category ,
        image ,
        rating ) 
        values(? , ? , ? , ? , ? , ?)`,
    [title, price, description, category, image, rating]
  );
  const id = result.id;
  return getData(id);
}

//  const result = await createBooks('the oldman and the sea', 'hemingway')
//  const datas = await getdatas()

//  const data = await getdata(1)
//  console.log(data)

// app.get("/",(req ,res)=>{
//     res.send("Page Home")
// })

// app.get("/books",(req , res)=>{
//     const q = "SELECT * FROM books";
//     pool.query(q , (err, data)=>{
//         if(err) return res.json(err)
//         return res.json(data[0])
//     })
// })

// const port = 8801
// app.listen(port , ()=>{
//     console.log(`the server is running on ${port}`)
// })
