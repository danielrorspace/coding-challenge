import mongoose from "mongoose"
import config from "../../config"

export default async function mongooseLoader() {
  const { connection } = mongoose
  connection.once("connected", () => console.log("Database Connected ~"))
  connection.on("error", error => console.log("Database Error: ", error))

  await mongoose.connect(config.env.db.uri)

  return connection.db
}
