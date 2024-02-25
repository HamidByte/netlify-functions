exports.handler = async (event, context) => {
  result = {
    message: "This is a test",
  }

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    }
  } catch (err) {
    return { statusCode: 422, body: err.stack }
  }
}
