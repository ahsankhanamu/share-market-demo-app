const METHODS = {
  GET: "GET",
};

function someMagicalTokenMechanism() {
  // magical function that returns Authorization token
  return "R29vZCBMdWNr";
}

// common function to make requests for any api. API request method can be provided as closure value, as in export module

function request(method) {
  return async (params, body) => {
    const requestOptions = {
      method,
      headers: await authHeader(),
      body,
    };
    // fetch and handle the response for various types of errors etc.
    const response = await fetch(params.url, requestOptions);
    return handleResponse(response);
  };
}

// responsible for fomatting and returning Authorization header

async function authHeader() {
  // Let's assume for now, that user is logged in
  const isLoggedIn = true;
  if (isLoggedIn) {
    return { Authorization: someMagicalTokenMechanism() };
  } else {
    return {};
  }
}

function handleResponse(response) {
  // handle the fetch api response for parsing data and handling errors, logging etc through sentry like platforms.

  return response.text().then(async (text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      let error = (data && data.detail) || response.statusText;
      if (typeof error === "object") {
        error = error.length > 0 ? error[0].msg : "Unknown Error format";
      }
      return Promise.reject(error);
    }
    return data;
  });
}

export const fetchWrapper = {
  get: request(METHODS.GET),
};
