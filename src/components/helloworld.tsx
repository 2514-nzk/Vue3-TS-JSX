import { defineComponent } from "vue";
import styles from "./helloworld.module.scss";
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <span class={styles.title}>HelloWorld</span>
        </div>
      );
    };
  },
});
