import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";



export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .post('', this.createSpecies)
      .get('/:speciesId', this.getSpeciesById)
      .delete('/:speciesId', this.deleteSpecies)

  }
  async createSpecies(req, res, next) {
  try {
    let speciesData = req.body
    let species = await speciesService.createSpecies(speciesData)
    res.send(species)
  } catch (error) {
    next(error)
  }
  }

  async getSpeciesById(req, res, next) {
  try {
    let species = await speciesService.getSpeciesById(req.params.speciesId)
    res.send(species)
  } catch (error) {
    next(error)
  }
  }
  
  async deleteSpecies(req, res, next) {
  try {
    let species = await speciesService.deleteSpecies(req.params.speciesId)
    res.send(species)
  } catch (error) {
    next(error)
  }
  }
}