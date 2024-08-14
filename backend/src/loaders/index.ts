import express, { Application } from "express"
import expressLoader from "./express"
import swaggerLoader from "./swagger"
import mongooseLoader from "./mongoose"

export default {
  expressLoader,
  expressLoaderTest: () => expressLoader({ app: express() }),

  init: async ({ expressApp }: { expressApp: Application }) => {
    await expressLoader({ app: expressApp })
    await swaggerLoader({ app: expressApp })
    await mongooseLoader()
  },
}
