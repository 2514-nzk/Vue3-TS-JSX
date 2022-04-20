import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const img = require("./assets/logo.png");
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <img alt="Vue logo" src={img} />
          <HelloWorld msg="xxx"></HelloWorld>
        </div>
      );
    };
  },
});
