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

// admin api endpoints:
// GET  /leads -> returns all leads
// POST /leads -> creates a new lead
// PUT  /leads -> marks a lead as read

// GET  /clients -> returns all clients
// POST /clients -> creates a new client
// PUT  /clients -> updates a client

// Add automatic data refetching 

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/api/admin"
  }),
  endpoints(builder) {
    return {
      getLeads: builder.query({ query: () => ({ url: '/leads', method: 'get' }) }),
      newLead: builder.mutation({ query: (body) => ({ url: '/leads', method: 'post', data: body }) }),
      seenLead: builder.mutation({ query: (id) => ({ url: '/leads', method: 'put', data: { lead_id: id } }) }),
      getClients: builder.query({ query: () => ({ url: '/clients', method: 'get' }) }),
      newClient: builder.mutation({ query: (body) => ({ url: '/clients', method: 'post', data: body }) }),
      updateClient: builder.mutation({ query: (body) => ({ url: '/clients', method: 'put', data: body }) })  // make sure to put in client id inside the body


    }
  }
})

export const {
  useGetLeadsQuery,
  useNewLeadMutation,
  useSeenLeadMutation,
  useGetClientsQuery,
  useNewClientMutation,
  useUpdateClientMutation
} = adminApi