exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: {
        message: "This is a test",
      },
    }
  } catch (err) {
    return { statusCode: 422, body: err.stack }
  }
}
