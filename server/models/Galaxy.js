import mongoose from 'mongoose'
const Schema = mongoose.Schema



export const GalaxySchema = new Schema(
  {
    title: { type: String, required: true },
    class: { type: String, required: true },
    size: { type: Number, min: 1, max: 5}
  },
  { timestamps: true, toJSON: { virtuals: true} }
)

GalaxySchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})



