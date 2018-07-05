
class Core {
  
  constructor({delay}) {
    this.delay = delay
    this.state = {
      queueToUp: [],
      queueToDown: []
    }
  }

  /**
   * function to call a elevator to up or down
   * @param {string} action action to up or down
   * @param {number} floor number of floot tha is calling 
   */
  call(action, floor) {
    if (action === 'up') {
      this.state.queueToUp.push(floor)
    } else {
      this.state.queueToDown.push(floor)
    }
  
    this.updateQueue()
  }

  updateQueue() {
    console.log(this.state);
  }

}

export default Core
