import clientPromise from "../../../../lib/mongodb";
import { Int32 } from 'bson';
//pages/api/year/[year].js
/**
* @swagger
* /api/movies/date/{date}:
*   get:
*       description: Returns movies by title
*       parameters: 
*           -   name: date
*               in: path
*               description: some description
*               required: true
*               type: char
*               collectionFormat: multi
*       responses:
*           200:
*               description: Hello Movies
            400:
                description: Error Response
*/

export default async function handler(req, res) {
    const { date } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find({year: Int32(date)}).toArray();
    if (movies != 0) {
        res.json({ status: 200, data: movies });
    }
    else {
    res.json({ status: 400, data: {message: "Cette date n'existe pas !"} });
    }
}