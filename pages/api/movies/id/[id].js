/**
* @swagger
* /api/movies/id/{id}:
*   get:
*       description: Returns movies by id
*       parameters: 
*           -   name: id
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

import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";
export default async function handler(req, res) {
    const { id } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find({_id: ObjectId(id)}).toArray();
    res.json({ status: 200, movies });
}