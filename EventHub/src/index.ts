class EventHub {
  cache: { [key: string]: Array<(data?: unknown) => void> } = {};

  on(eventName: string, fn: (data?: unknown) => void) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }

  emit(eventName: string) {
    (this.cache[eventName] || []).forEach(fn => {
      fn()
    })
  }

  off(eventName: string, fn: (data?: unknown) => void) {
    let index = this.cache[eventName] ? indexof(this.cache[eventName], fn) : -1
    if (index === -1) return
    console.log(index)
    this.cache[eventName].splice(index, 1)
  }
}


function indexof(arr: Array<any>, fn: (data?: unknown) => void) {
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === fn) {
      index = i
      break;
    }
  }
  return index
}

export default EventHub;