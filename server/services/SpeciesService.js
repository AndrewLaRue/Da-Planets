import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"


class SpeciesService {

  async createSpecies(speciesData) {
    let species = await dbContext.Species.create(speciesData)
    return species
  }

  async getSpeciesById(speciesId) {
    let species = await dbContext.Species.findById(speciesId)
    if (!species) {
      throw new BadRequest ('Species Id not found')
    }
    return species
  }

  async deleteSpecies(speciesId) {
    let species = await this.getSpeciesById(speciesId)
    await species.remove()
    return species
  }

  
  async getSpeciesByMoonId(moonId) {
    let species = await dbContext.Species.find({ moonId })
    return species
  }

  async getSpeciesByPlanetId(planetId) {
    let species = await dbContext.Species.find({ planetId })
    return species
  }

}

export const speciesService = new SpeciesService()