import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"




class GalaxiesService {


  async deleteGalaxy(galaxyId) {
    let galaxy = await this.getGalaxyById(galaxyId)
    await galaxy.remove()
    return galaxy
  }


  async getGalaxyById(galaxyId) {
    let galaxy = await dbContext.Galaxies.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('Galaxy Id not found')
    }
  return galaxy
  }


  async createGalaxy(galaxyData) {
    let galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }


  async getAllGalaxies() {
    let galaxies = await dbContext.Galaxies.find()
    return galaxies
  }


}

export const galaxiesService = new GalaxiesService()
