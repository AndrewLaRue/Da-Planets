import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const SpeciesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    population: { type: Number, required: true, min: 1 },
    tech: { type: Number, min: 0, max: 5 },
    planetId: { type: ObjectId, ref: 'Planet' },
    moonId: { type: ObjectId, ref: 'Moon' }
}
)
SpeciesSchema.virtual('Planet', {
  justOne: true,
  localField: 'planetId',
  foreignField: '_id',
  ref: 'Planet'
})

SpeciesSchema.virtual('Moon', {
  justOne: true,
  localField: 'moonId',
  foreignField: '_id',
  ref: 'Moon'
})