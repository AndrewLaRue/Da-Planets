import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"



class PlanetsService {

  async deletePlanet(planetId) {
    let planet = await this.getPlanetById(planetId)
    await planet.remove()
    return planet
  }

  async createPlanet(planetData) {
    let planet = await dbContext.Planets.create(planetData)
    return planet
  }

  async getPlanetById(planetId) {
    let planet = await dbContext.Planets.findById(planetId)
    if (!planet) {
      throw new BadRequest ('Planet Id not found')
    }
    return planet
  }

  async getPlanetsByStarId(starId) {
    let planets = await dbContext.Planets.find({ starId })
    return planets
  }


}

export const planetsService = new PlanetsService()