import client from "@sendgrid/client";
client.setApiKey(process.env.SENDGRID_API_KEY);

export default eventHandler(async (event) => {
  const { email } = await readBody(event);
  if (!email) {
    throw createError({
      statusCode: 400,
      message: 'No email provided',
    })
  }
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
  try {
    const result = await client.request(request)
    return result;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Something went wrong',
    })
  }
});
