/**
* @swagger
* /api/movies/title/{title}:
*   get:
*       description: Returns movies by title
*       parameters: 
*           -   name: title
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
import clientPromise from "../../../../lib/mongodb";
export default async function handler(req, res) {
    const { title } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find({title: title}).toArray();
    if (movies != 0) {
        res.json({ status: 200, data: movies });
    }
    else {
    res.json({ status: 400, data: {message: "Ce film n'existe pas !"} });
    }
}