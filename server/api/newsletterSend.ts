import client from "@sendgrid/client";
client.setApiKey(process.env.SENDGRID_API_KEY);

export default eventHandler(async (event) => {
    const data = {
        from: {
            email: 'ruslan@pixeldevs.digital'
        },
        
        template_id: 'd-1a1a811fbba548e78dbf2a74be17a56a',
        dynamic_template_data:
        {
            horoscopes: [
                {
                    sign: 'Aries',
                    horoscope: 'You will have a great day!'

                }
            ]
        },
    };

    const request = {
        url: `/v3/mail/send`,
        method: "POST",
        body: data,
    };
    try {
        const result = await client.request(request)
        return result;
    } catch (error) {
        console.log(error.response.body);
        throw createError({
            statusCode: 500,
            message: 'Something went wrong',
        })
    }
});
