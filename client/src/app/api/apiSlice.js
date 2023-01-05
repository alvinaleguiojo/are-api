import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization"`${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptios) => {
  let results = await baseQuery(args, api, extraOptios);

  if (results?.error?.originalStatus === 403) {
    console.log("sending refresh token");

    const refreshResult = await baseQuery("/refresh", api, extraOptios);
    console.log(refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;

      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));

      //   retry the original query
      results = await baseQuery(args, api, extraOptios);
    } else {
      api.dispatch(logOut());
    }
  }
  return results;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
