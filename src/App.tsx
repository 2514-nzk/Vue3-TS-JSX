import { defineComponent } from "vue";
import Helloworld from "./components/helloworld";
export default defineComponent({
  setup() {
    return () => (
      <div>
        <Helloworld></Helloworld>
      </div>
    );
  },
});
