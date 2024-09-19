app.directive('demo', (el, binding) => {
    console.log(binding.value.color) // => "white"
    console.log(binding.value.text) // => "hello!"
  })

/*

Usage with a component:

<div v-demo="{ color: 'white', text: 'hello!' }"></div>

*/