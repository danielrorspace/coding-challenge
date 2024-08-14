import { Application } from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

export default async function swaggerLoader({ app }: { app: Application }) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Vencash API Documentation - Swagger UI",
        version: "0.1.0",
        description:
          "This is the documentation for the Vencash API using Swagger UI for documentation and made with Express and TypeScript",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Vencash",
          url: "https://vencash.pk",
          email: "contact@venrup.com",
        },
      },
      servers: [
        {
          url: "https://vencash-auth.herokuapp.com",
          variables: {},
        },
        {
          url: "http://localhost:2022",
          variables: {},
        },
      ],
      paths: {
        "/register": {
          post: {
            tags: ["Authentication"],
            summary: "Registration",
            description:
              "This will register a new user, if the user already exists it will return an error. The user has to verify its phone number to change its status to verified and to be able to login",
            operationId: "register",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/registerrequest" },
                  example: {
                    name: "Imran Afzal",
                    password: "asdfasdF1",
                    email: "anony.js.developer@gmail.com",
                    phone: "923333333333",
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [],
          },
        },
        "/register/verify": {
          post: {
            tags: ["Authentication"],
            summary: "User verification",
            description:
              "This will verify a user, if the user already verified it will return an error. The user has to verify its phone number to change its status to verified and to be able to login",
            operationId: "Verification",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/registerverifyrequest" },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [],
          },
        },
        "/authorize/login": {
          post: {
            tags: ["Authentication"],
            summary: "Login user",
            description:
              "This will login a user, if the user is not verified it will return an error. The user has to verify its phone number to change its status to verified and to be able to login",
            operationId: "login",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/loginrequest" },
                  example: {
                    email: "anony.js.developer@gmail.com",
                    password: "asdfasdF1",
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [],
          },
        },
        "/code/sendUnProtected": {
          post: {
            tags: ["Send Code"],
            summary: "Send Unprotected Code",
            description:
              "This will send a code to a user without JWT token. It will take intent and phone number or email as parameters. It will send a code to the user and return a success message",
            operationId: "sendunprotectedcode",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/sendunprotectedcoderequest" },
                  example: {
                    intent: "forget_password",
                    email: "anony.js.developer@gmail.com",
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [],
          },
        },
        "/code/send": {
          post: {
            tags: ["Send Code"],
            summary: "Send Protected Code",
            description:
              "This will send a code to a user with JWT token. It will take intent and preferred receiver as parameters. It will send a code to the user and return a success message",
            operationId: "sendprotectedcode",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/sendprotectedcoderequest" },
                  example: {
                    intent: "UPDATE_EMAIL",
                    preferred_receiver: "email",
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
        "/code/verify": {
          post: {
            tags: ["Verify Code"],
            summary: "Verify Code",
            description:
              "This will verify a code and will take JWT. It will take intent, code and preferred receiver as parameters. It will verify the code and return a success message",
            operationId: "verify",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/verifyrequest" },
                  example: {
                    intent: "UPDATE_EMAIL",
                    code: 12345,
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
        "/code/verifyUnProtected": {
          post: {
            tags: ["Verify Code"],
            summary: "verify unprotected",
            description:
              "This will verify a code without JWT. It will take intent, code and preferred receiver as parameters. It will verify the code and return a success message",
            operationId: "verifyunprotected",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/verifyunprotectedrequest" },
                  example: {
                    email: "anony.js.developer@gmail.com",
                    intent: "UPDATE_EMAIL",
                    code: 12345,
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [],
          },
        },
        "/forgetPassword/update": {
          post: {
            tags: ["Forget Password"],
            summary: "Forget Password",
            description:
              "This will update a user password. It will take email or phone number, new password and code as parameters. It will update the password and return a success message",
            operationId: "forgetpassword",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/forgetpasswordrequest" },
                  example: {
                    email: "anony.js.developer@gmail.com",
                    phone: "923333333333",
                    new_password: "asdfasdF1",
                    code: 12345,
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [],
          },
        },
        "/api/auth/updatePassword": {
          post: {
            tags: ["Authentication"],
            summary: "Update Password",
            description:
              "This will update a user password. It will take current_password, new_password, confirm_password as parameters and userId from JWT . It will update the password and return a success message",
            operationId: "updatepassword",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/updatepasswordrequest" },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
        "/api/auth/updateEmailPhone": {
          post: {
            tags: ["Authentication"],
            summary: "Update Email or Phone",
            description:
              "This will update a user email or phone number. It will take email or phone number as parameters and userId from JWT . It will update the email or phone number and return a success message",
            operationId: "updateemailphone",
            parameters: [],
            requestBody: {
              description: "",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/updateemailphonerequest" },
                  example: {
                    email: "anony.js.developer@gmail.com",
                    phone: "923333333333",
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
        "/api/user/profile": {
          get: {
            tags: ["User"],
            summary: "User Profile",
            description:
              "This will return a user profile. It will take userId from JWT . It will return a user profile",
            operationId: "userprofile",
            parameters: [],
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
          put: {
            tags: ["User"],
            summary: "Profile Update",
            description:
              "This will update a user profile. It will take userId from JWT and name, email, address etc from body. It will update the profile and return a success message",
            operationId: "userupdateprofile",
            parameters: [],
            requestBody: {
              description: "All are optional, but at least one must be provided",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/userupdateprofilerequest" },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
        "/api/user/search": {
          post: {
            tags: ["User"],
            summary: "User Search",
            description:
              "This will return a list of users. It will take search_keyword (name, phone number or both) as parameter.",
            operationId: "usersearch",
            parameters: [],
            requestBody: {
              description: "Name, Phone Number or Both",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/usersearchrequest" },
                  example: {
                    phone: "",
                    name: "",
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
        "/api/user/search/phonelist": {
          post: {
            tags: ["User"],
            summary: "User Search by Phone List",
            description:
              "This will return a list of users. It will take list of phone numbers as payload, and return list of existing users.",
            operationId: "usersearchphonelist",
            parameters: [],
            requestBody: {
              description: "List of Phone Numbers",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/usersearchphonelistrequest" },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
        "/api/user/username": {
          put: {
            tags: ["User"],
            summary: "Username Update",
            description:
              "This will update a user username. It will take username as parameter and userId from JWT . It will update the username and return a success message",
            operationId: "userupdateusername",
            parameters: [],
            requestBody: {
              description: "Username to be updated, Alphanumeric with underscore",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/userupdateusernamerequest" },
                },
              },
              required: true,
            },
            responses: {
              200: {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            security: [{ bearer: [] }],
          },
        },
      },
      components: {
        schemas: {
          registerrequest: {
            title: "User Registration",
            required: ["name", "password", "email", "phone"],
            type: "object",
            properties: {
              name: { type: "string" },
              password: { type: "string" },
              email: { type: "string" },
              phone: { type: "string" },
            },
            example: {
              name: "Imran Afzal",
              password: "asdfasdF1",
              email: "anony.js.developer@gmail.com",
              phone: "923333333333",
            },
          },
          registerverifyrequest: {
            title: "Registration Verification",
            required: ["code", "email", "phone"],
            type: "object",
            properties: {
              code: {
                type: "integer",
                format: "int32",
              },
              email: { type: "string" },
              phone: { type: "string" },
            },
            example: {
              code: 12345,
              email: "anony.js.developer@gmail.com",
              phone: "923333333333",
            },
          },
          loginrequest: {
            title: "Login",
            required: ["email", "password"],
            type: "object",
            properties: {
              email: { type: "string" },
              password: { type: "string" },
            },
            example: {
              email: "anony.js.developer@gmail.com",
              password: "asdfasdF1",
            },
          },
          sendunprotectedcoderequest: {
            title: "Send Unprotected Code",
            required: ["intent", "email"],
            type: "object",
            properties: {
              intent: { type: "string" },
              email: { type: "string" },
            },
            example: {
              intent: "forget_password",
              email: "anony.js.developer@gmail.com",
            },
          },
          sendprotectedcoderequest: {
            title: "Send Protected Code",
            required: ["intent", "preferred_receiver"],
            type: "object",
            properties: {
              intent: { type: "string" },
              preferred_receiver: { type: "string" },
            },
            example: {
              intent: "UPDATE_EMAIL",
              preferred_receiver: "email",
            },
          },
          verifyrequest: {
            title: "Verify Code",
            required: ["intent", "code"],
            type: "object",
            properties: {
              intent: { type: "string" },
              code: {
                type: "integer",
                format: "int32",
              },
            },
            example: {
              intent: "UPDATE_EMAIL",
              code: 12345,
            },
          },
          verifyunprotectedrequest: {
            title: "Verify Unprotected Code",
            required: ["email", "intent", "code"],
            type: "object",
            properties: {
              email: { type: "string" },
              intent: { type: "string" },
              code: {
                type: "integer",
                format: "int32",
              },
            },
            example: {
              email: "anony.js.developer@gmail.com",
              intent: "UPDATE_EMAIL",
              code: 12345,
            },
          },
          forgetpasswordrequest: {
            title: "Forget Password",
            required: ["email", "phone", "new_password", "code"],
            type: "object",
            properties: {
              email: { type: "string" },
              phone: { type: "string" },
              new_password: { type: "string" },
              code: {
                type: "integer",
                format: "int32",
              },
            },
            example: {
              email: "anony.js.developer@gmail.com",
              phone: "923333333333",
              new_password: "asdfasdF1",
              code: 12345,
            },
          },
          updatepasswordrequest: {
            title: "Update Password",
            required: ["current_password", "new_password", "confirm_password"],
            type: "object",
            properties: {
              current_password: { type: "string" },
              new_password: { type: "string" },
              confirm_password: { type: "string" },
            },
            example: {
              current_password: "asdfasdF1",
              new_password: "asdfasdF1",
              confirm_password: "asdfasdF1",
            },
          },
          updateemailphonerequest: {
            title: "Update Email/Phone",
            required: [],
            type: "object",
            properties: {
              phone: { type: "string" },
              email: { type: "string" },
            },
            example: {
              email: "anony.js.developer@gmail.com",
              phone: "923333333333",
            },
          },
          usersearchrequest: {
            title: "User Search",
            type: "object",
            properties: {
              phone: { type: "string" },
              name: { type: "string" },
            },
            example: {
              phone: "",
              name: "",
            },
          },
          usersearchphonelistrequest: {
            title: "User Search Phone List",
            type: "array",
            properties: { phone: { type: "array" } },
            example: { phone: ["923333333333"] },
          },
          userupdateusernamerequest: {
            title: "Update Username",
            type: "object",
            properties: { username: { type: "string" } },
            example: { username: "user_Name1" },
          },
          userupdateprofilerequest: {
            title: "Update Profile",
            type: "object",
            properties: {
              name: { type: "string" },
              email: { type: "string" },
              address: { type: "string" },
            },
            example: { name: "name", email: "anony.js.developer@gmail.com", address: "address" },
          },
        },
        securitySchemes: {
          bearer: {
            type: "http",
            scheme: "bearer",
          },
        },
      },
      security: [],
      tags: [{ name: "Authentication" }],
    },
    apis: ["./api/*.js"],
  }

  const specs = swaggerJsdoc(options)
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

  return app
}
