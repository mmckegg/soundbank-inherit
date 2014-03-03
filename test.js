var inherit = require('./index')
var test = require('tape')

test('root inherit', function(t){

  var audioContext = {
    descriptors: {
      '1': {
        id: "1",
        offset: 0,
        sources: [
          { node: 'oscillator' }
        ]
      }
    },
    slotReferences: []
  }

  var descriptor = {
    id: '2',
    from: '1',
    offset: 1
  }

  var expected = {
    id: '2',
    offset: 1,
    sources: [
      { node: 'oscillator' }
    ]
  }

  t.deepEqual(inherit(audioContext, descriptor), expected)
  t.deepEqual(audioContext.slotReferences, ['1'])
  t.end()

})

test('sub inherit', function(t){

  var audioContext = {
    descriptors: {
      '1': {
        id: "1",
        offset: 0,
        sources: [
          { node: 'oscillator' }
        ]
      }
    },
    slotReferences: []
  }

  var descriptor = {
    from: '1/sources[0]',
    note: 60
  }

  var expected = {
    node: 'oscillator',
    note: 60
  }

  t.deepEqual(inherit(audioContext, descriptor), expected)
  t.deepEqual(audioContext.slotReferences, ['1'])
  t.end()

})