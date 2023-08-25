import client from "@sendgrid/client";
client.setApiKey(process.env.SENDGRID_API_KEY);

export default eventHandler(async (event) => {
  const { email, sign } = await readBody(event);
  const data = {
    contacts: [
      {
        email: email,
      },
    ],
    list_ids: ["122b0c51-6a71-45db-ab40-75af8b65c218"],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
  };

  client
    .request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(response.body);
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
});
