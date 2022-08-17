import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js';
import { MoonSchema } from '../models/Moon.js';
import { PlanetSchema } from '../models/Planet.js';
import { SpeciesSchema } from '../models/Species.js';
import { StarSchema } from '../models/Star.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Star', StarSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Moons = mongoose.model('Moon', MoonSchema)
  Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
