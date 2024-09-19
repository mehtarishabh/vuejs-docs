import { onMounted, onUnmounted } from "vue";

export function useEventListener(target, event, callback) {
  // if you want, you can also make this
  // support selector strings as target
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}


/*

Usage with a component:

import { useEventListener } from './event'

useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

*/