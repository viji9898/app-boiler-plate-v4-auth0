const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  });

  const updateProgram = [{ programId: "test7787" }];
  const profileId = "380466966828155461";

  return client
    .query(
      q.Update(q.Ref(q.Collection("Profiles"), profileId), {
        data: {
          programs: q.Append(
            ...updateProgram,
            q.Select(
              ["data", "programs"],
              q.Get(q.Ref(q.Collection("Profiles"), profileId))
            )
          ),
        },
      })
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
