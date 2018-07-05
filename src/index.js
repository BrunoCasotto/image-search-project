
class Core {
  
  constructor({delay}) {
    this.delay = delay
    this.queueToUp = []
    this.queueToDown = []
  }

  /**
   * function to call a elevator to up or down
   * @param {string} direction direction to up or down
   * @param {number} floor number of floot tha is calling
   * @param {function} callback function to be called when the items is finished
   */
  call(direction, floor, callback) {
    let opt = {
      floor,
      callback
    }

    if (direction === 'up') {
      this.queueToUp.push(opt)
      this.queueToUp = this.sortQueue(this.queueToUp, direction)
    } else {
      this.queueToDown.push(opt)
      this.queueToDown = this.sortQueue(this.queueToDown, direction)
    }

    this.updateQueue()
  }

  /**
   * function to sort the queues by direction
   * @param {array} list to sort
   */
  sortQueue(list, direction) {
    return list.sort(
      function(a, b) {
        if (direction === 'up') {
          return a.floor < b.floor
        } else {
          return a.floor < b.floor
        }
      }
    )
  }

  updateQueue() {
    console.log(this.state);
  }

}

module.exports = Core
