import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const PlanetSchema = new Schema(
  {
      title: { type: String, required: true },
    class: { type: String, required: true },
    size: { type: Number, min: 1, max: 5 },
    starId: { type: ObjectId, required: true, ref: 'Star' }
}
)
