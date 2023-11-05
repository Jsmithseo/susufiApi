
const { portfolios } = require('./data');
const Portfolio = require('../db/models/Portfolio');


class FakeDB {

  async clean() {
    await Portfolio.deleteMany({});
    // await Blog.deleteMany({});
  }

  async addData() {
    
    try{
      Portfolio.insertMany([...portfolios])
      console.log('HEY')
    }catch(e){
      console.error(e)
    }
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();