
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const StarSchema = new Schema(
  {
    title: { type: String, required: true },
    class: { type: String, required: true },
    size: { type: Number, min: 1, max: 5 },
    galaxyId: { type: ObjectId, required: true, ref: 'Galaxy' }
    
  }, { timestamps: true, toJSON: { virtuals: true } }
)

// StarSchema.virtual('creator', {
//   localField: 'creatorId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Profile'
// })