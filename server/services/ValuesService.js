import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ValuesService {
  async find(query = {}) {
    const values = await dbContext.Values.find(query)
    return values
  }


  // keep an eye out for circular references
  //  on a remove, remember to convert the creatorId toString

  // on a create it also needs to populate, but it looks a little different
  // add the virtual to any function you want the info to return on
  // 
  // same as above with the virtual added_______________vvvv__creator is the class, name picture is what its limited to

  // async find(query = {}) {
  //   const values = await dbContext.Values.find(query).populate('creator' 'name picture')
  //   return values
  // }

  async findById(id) {
    const value = await dbContext.Values.findById(id)
    if (!value) {
      throw new BadRequest('Invalid Id')
    }
    return value
  }
}

export const valuesService = new ValuesService()


