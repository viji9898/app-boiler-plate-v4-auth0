const axios = require("axios");

exports.handler = async (event) => {
  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body);
    const { name, number, email, message } = body.values;

    // Discord webhook URL
    const webhookURL =
      "https://discord.com/api/webhooks/1136574345431490660/6_-WR9-51gvkzsowVqwAXAWSbb5xjCSGfFJBUY3MmPhnTgYwNmRe2kH196NsjnHAgfmU";

    // Your message to be sent to Discord
    const discordMessage = {
      // content: `New message from Message from techForGood.lk\n*Customer Inquiry form*\n *NAME*: ${name}\n *EMAIL:* ${email}\n*NNUMBER:* ${number}\n*MESSAGE*: ${message}`,
      embeds: [
        {
          author: {
            name: "boiler-plate-app-v2",
            url: "https://www.tfg.lk",
            icon_url:
              "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyberSunil-profile-01.png",
          },
          title: "Customer Inquiry",
          url: "https://www.tfg.lk",
          description:
            "Please see the customer information from the contact form",
          color: 15258703,
          fields: [
            {
              name: "Name",
              value: name,
              inline: true,
            },
            {
              name: "Number",
              value: number,
              inline: true,
            },
            {
              name: "Email",
              value: email,
            },
            {
              name: "Message",
              value: message,
            },
            {
              name: "Thanks!",
              value: "",
            },
          ],
          thumbnail: {
            url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/gmail-profile-pic-500px.png",
          },
          image: {
            url: "",
          },
          footer: {
            text: "Please use the ✅ once you have seen the message",
            icon_url:
              "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyberSunil-profile-01.png",
          },
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
