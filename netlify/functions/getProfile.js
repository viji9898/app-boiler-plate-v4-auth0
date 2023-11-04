const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
    const client = new faunadb.Client({
        secret: process.env.FAUNA_SECRET_KEY,
    });

    const userId = event.queryStringParameters.userId;

    return client
        .query(
            q.Let(
                {
                    userDoc: q.Get(q.Match(q.Index("profile_by_auth0_user_id"), userId)),
                },
                {
                    ref: q.Select(["ref", "id"], q.Var("userDoc")),
                    userId: q.Select(["data", "userId"], q.Var("userDoc")),
                    userEmail: q.Select(["data", "userEmail"], q.Var("userDoc")),
                    profileComplete: q.Select(["data", "profileComplete"], q.Var("userDoc")),
                    profileData: q.Select(["data"], q.Var("userDoc"))
                }
            )
        )
        .then((response) => {
            console.log("success", response);
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            };
        })
        .catch((error) => {
            console.log("error", error);
            return {
                statusCode: 400,
                body: JSON.stringify(error),
            };
        });
};
