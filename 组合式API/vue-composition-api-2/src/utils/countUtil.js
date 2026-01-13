import { watch } from "vue";
export function watchCount(count) {
    watch(count, (newValue, oldValue) => {
        console.log(newValue, oldValue);
    })
}
