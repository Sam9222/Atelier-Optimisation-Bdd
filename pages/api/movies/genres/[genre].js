import clientPromise from "../../../../lib/mongodb";
/**
* @swagger
* /api/movies/genres/{genre}:
*   get:
*       description: Returns movies by genre
*       parameters: 
*           -   name: genre
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
    const { genre } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find({genres: genre}).toArray();
    if (movies != 0) {
        res.json({ status: 200, data: movies });
    }
    else {
    res.json({ status: 400, data: {message: "Ce genre n'existe pas !"} });
    }
}