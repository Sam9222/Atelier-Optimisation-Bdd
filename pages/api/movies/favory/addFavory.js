import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

/**
* @swagger
* /api/movies/favory/addFavory:
*   post:
*     requestBody:
*       description: Endpoint for adding an comment from a user on a specific movie.
*       content:
*         application/x-www-form-urlencoded:
*           schema:
*             type: object
*             required:
*               - idUser
*               - idMovie
*             properties:
*               idUser:
*                 type: string
*                 description: user identity
*               idMovie:
*                 type: string
*                 description: movie identity
*       responses:
*           200:                                                                     
*               description: Hello Movies
*           400:
*               description: Error Response
*/

export default async function handler(req, res) {
    const bodyParams = req.body;
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const favory = await db.collection("favory").insert(
        [
            {
            movie_id: ObjectId(bodyParams.idMovie), users_id: ObjectId(bodyParams.idUser), date: new Date()
            }
        ]
    )
    res.json({ status: 200, data: favory });
}