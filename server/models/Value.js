import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ValueSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    // just because is claims to be a Profile, doesn't mean it is one VERIFY!
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// this is needed to get the info from the creatorId above it will look very similar to above
// you must opt into a virtual every time you make the query
// on the service, you must include it
ValueSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
