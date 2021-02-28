import EventHub from '../src/index'

const eventHub = new EventHub()
console.log(JSON.stringify(eventHub))


let called = false

function use() {
  called = true
}
eventHub.on('xxx', use)

eventHub.off('xxx', use)

eventHub.emit('xxx')

setTimeout(() => {
  console.log(called)
}, 1000);