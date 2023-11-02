const axios = require("axios");

exports.handler = async function (event) {
  //prefer is to use discord as it a free and has more functionality

  const body = JSON.parse(event.body);
  const { blocks, url } = body.params;
  console.log(blocks);
  try {
    await axios({
      method: "post",
      url: url
        ? url
        : "https://hooks.slack.com/services/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",
      data: {
        blocks,
      },
    })
      .then(() => {
        return {
          statusCode: 200,
        };
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    return {
      statusCode: 422,
      body: `Error: ${error}`,
    };
  }
  return { statusCode: 200 };
};
