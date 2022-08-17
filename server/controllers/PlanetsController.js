import { moonsService } from "../services/MoonsService.js";
import { planetsService } from "../services/PlanetsService.js";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";



export class PlanetsController extends BaseController{

  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('/:planetId', this.getPlanetById)
      .delete('/:planetId', this.deletePlanet)
      
      .get('/:planetId/moons', this.getMoonsByPlanetId)
      .get('/:planetId/species', this.getSpeciesByPlanetId)
    }

  
  async createPlanet(req, res, next) {
    try {
      let planetData = req.body
      let planet = await planetsService.createPlanet(planetData)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetById(req, res, next) {
    try {
      let planet = await planetsService.getPlanetById(req.params.planetId)
    res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getMoonsByPlanetId(req, res, next) {
    try {
      let moonsOfPlanet = await moonsService.getMoonsByPlanetId(req.params.planetId)
      res.send(moonsOfPlanet)
    } catch (error) {
      next(error)
    }
  }

    async getSpeciesByPlanetId(req, res, next) {
    try {
      let speciesOfPlanet = await speciesService.getSpeciesByPlanetId(req.params.planetId)
      res.send(speciesOfPlanet)
    } catch (error) {
      next(error)
    }
  }

  async deletePlanet(req, res, next) {
    try {
      let planet = await planetsService.deletePlanet(req.params.planetId)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

}