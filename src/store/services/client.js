import { createApi } from "@reduxjs/toolkit/query/react"
import axios from 'axios'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method, data, params }) => {
      try {
        const result = await axios({ url: baseUrl + url, method, data, params })
        return { data: result.data }
      } catch (axiosError) {
        let err = axiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    }


// client api endpoints:
// GET /clients -> Get all leads for the client id in the request body
// POST /clients -> Create a new lead. Client id and lead details in the body
// PUT /clients -> Change the status of Lead with id lead_id of the Client id as id to seen

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/api/clients"
  }),
  endpoints(builder) {
    return {
      getLeadsClient: builder.query({ query: (id) => ({ url: ('/'), method: 'patch', data: { id } }) }),
      createLeadClient: builder.mutation({ query: (body) => ({ url: '/', method: 'post', data }) }), // body should contain client's id
      seenLeadClient: builder.mutation({ query: ({ id, lead_id }) => ({ url: '/', method: 'put', data: { id, lead_id } }) })
    }
  }
})

export const {
  useGetLeadsClientQuery,
  useCreateLeadClientMutation,
  useSeenLeadClientMutation
} = clientApi