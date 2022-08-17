import { moonsService } from "../services/MoonsService.js";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";




export class MoonsController extends BaseController{

  constructor() {
    super('api/moons')

    this.router
      .post('', this.createMoon)
      .get('/:moonId', this.getMoonById)
      .delete('/:moonId', this.deleteMoon)
    
      .get('/:moonId/species', this.getSpeciesByMoonId)
    
  }

  async createMoon(req, res, next) {
  try {
    let moonData = req.body
    let moon = await moonsService.createMoon(moonData)
    res.send(moon)
  } catch (error) {
    next(error)
  }
  }

  async getMoonById(req, res, next) {
    try {
      let moon = await moonsService.getMoonById(req.params.moonId)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }
  
      async getSpeciesByMoonId(req, res, next) {
    try {
      let speciesOfMoon = await speciesService.getSpeciesByMoonId(req.params.moonId)
      res.send(speciesOfMoon)
    } catch (error) {
      next(error)
    }
  }

  async deleteMoon(req, res, next) {
  try {
    let moon = await moonsService.deleteMoon(req.params.moonId)
    res.send(moon)
  } catch (error) {
    next(error)
  }
  }

}