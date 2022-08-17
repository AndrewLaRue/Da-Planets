import { galaxiesService } from '../services/GalaxiesService.js';
import { starsService } from '../services/StarsService.js';
import BaseController from '../utils/BaseController';

export class GalaxiesController extends BaseController {
    constructor() {
    super('api/galaxies')
    this.router
        .get('', this.getAllGalaxies)
        .post('', this.createGalaxy)
        .get('/:galaxyId', this.getGalaxyById)
        .get('/:galaxyId/stars', this.getStarsByGalaxyId)
        .delete('/:galaxyId', this.deleteGalaxy)


  }

    async getStarsByGalaxyId(req, res, next) {
    try {
      let starsOfGalaxy = await starsService.getStarsByGalaxyId(req.params.galaxyId)
      res.send(starsOfGalaxy)
    } catch (error) {
      next(error)
    }
  }

  async deleteGalaxy(req, res, next) {
    try {
      let galaxy = await galaxiesService.deleteGalaxy(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }


  async getGalaxyById(req, res, next) {
    try {
      let galaxy = await galaxiesService.getGalaxyById(req.params.galaxyId)
      res.send(galaxy)
    
    } catch (error) {
      next(error)
    }
  }


  async getAllGalaxies(req, res, next) {
    try {
      let galaxies = await galaxiesService.getAllGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      let galaxyData = req.body
      let galaxy = await galaxiesService.createGalaxy(galaxyData)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
 }
