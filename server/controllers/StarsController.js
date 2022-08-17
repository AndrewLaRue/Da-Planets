import { planetsService } from '../services/PlanetsService.js';
import { starsService } from '../services/StarsService.js';
import BaseController from '../utils/BaseController';


export class StarsController extends BaseController {

  constructor() {
    super('api/stars')
    this.router
      .post('', this.createStar)
      .get('/:starId', this.getStarById)
      .delete('/:starId', this.deleteStar)
      
      .get('/:starId/planets', this.getPlanetsByStarId)
  }

  async getPlanetsByStarId(req, res, next) {
    try {
      let planetsOfStar = await planetsService.getPlanetsByStarId(req.params.starId)
    res.send(planetsOfStar)
    } catch (error) {
      next(error)
    }
  }
  async deleteStar(req, res, next) {
    try {
      let star = await starsService.deleteStar(req.params.starId)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
  
  async createStar(req, res, next) {
    try {
      let starData = req.body
      let star = await starsService.createStar(starData)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStarById(req, res, next) {
    try {
      let star = await starsService.getStarById(req.params.starId)
      res.send(star)
    
    } catch (error) {
      next(error)
    }
  }


}
