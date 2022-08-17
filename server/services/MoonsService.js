import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"


class MoonsService {

  async createMoon(moonData) {
    let moon = await dbContext.Moons.create(moonData)
    return moon
  }

  async getMoonById(moonId) {
    let moon = await dbContext.Moons.findById(moonId)
    if (!moon) {
      throw new BadRequest ('Moon Id not found')
    }
    return moon
  }

  async deleteMoon(moonId) {
    let moon = await this.getMoonById(moonId)
    await moon.remove()
    return moon
  }

  async getMoonsByPlanetId(planetId) {
    let moons = await dbContext.Moons.find({ planetId })
    return moons
  }

}

export const moonsService = new MoonsService()