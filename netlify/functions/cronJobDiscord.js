const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    // Parse the incoming request body
    // const body = JSON.parse(event.body);
    // const { name, number, email } = body.values;

    // Discord webhook URL
    const webhookURL =
      "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703";

    // Your message to be sent to Discord
    const discordMessage = {
      // content: `New message from Message from techForGood.lk\n*Customer Inquiry form*\n *NAME*: ${name}\n *EMAIL:* ${email}\n*NNUMBER:* ${number}\n*MESSAGE*: ${message}`,
      embeds: [
        {
          author: {
            name: "Bolier-Plate-V3",
            url: "https://viji.com",
            icon_url:
              "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyberSunil-profile-01.png",
          },
          title: "CRON",
          url: "https://boiler-plate-v3.netlify.app/",
          description: "testing from cron schedule via netlify functions",
          color: 15258703,
          fields: [
            // {
            //   name: "Name",
            //   value: "CronJob",
            //   inline: true,
            // },
            // {
            //   name: "Number",
            //   value: number,
            //   inline: true,
            // },
            // {
            //   name: "Email",
            //   value: email,
            // },
            // {
            //   name: "Thanks!",
            //   value: "",
            // },
          ],
          // thumbnail: {
          //   url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/gmail-profile-pic-500px.png",
          // },
          // image: {
          //   url: "",
          // },
          // footer: {
          //   text: "Please use the ✅ once you have seen the message",
          //   icon_url:
          //     "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyberSunil-profile-01.png",
          // },
        },
      ],
    };

    // Send the POST request using Axios
    await axios.post(webhookURL, discordMessage);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent to Discord successfully" }),
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending message to Discord" }),
    };
  }
};
