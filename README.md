soundbank-inherit
===

Inherit descriptor from target audio slot and override specified attributes.

Use as a value provider in [soundbank](https://github.com/mmckegg/soundbank).

## Install

```bash
$ npm install soundbank-inherit
```

## Example

```js
var Soundbank = require('soundbank')
var audioContext = new AudioContext()

audioContext.providers = {
  inherit: require('soundbank-inherit'),
  scale: require('soundbank-scale')
}

audioContext.sources = {
  oscillator: require('soundbank-oscillator')
}

var soundbank = Soundbank(audioContext)
soundbank.connect(audioContext.destination)

// configure the original slot
soundbank.update({
  id: 'sound0',
  offset: 0,
  sources: [
    { node: 'oscillator',
      note: {
        node: 'scale',
        scale: 'major'
      }
    }
  ]
})

// inherit from original
soundbank.update({
  id: 'sound1',
  node: 'inherit',
  from: 'sound0',
  offset: 1
})
soundbank.update({
  id: 'sound2',
  node: 'inherit',
  from: 'sound0',
  offset: 2
})

// now if any changes are made to the original slot, they will also be applied to any slots that inherit from it
```