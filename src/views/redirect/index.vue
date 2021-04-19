<script>
import { h } from 'vue';
export default {
  created() {
    this.$router.replace(this.$route.fullPath.replace(/^\/redirect/, ''));
  },
  render() {
    return h('div');
  },
};
</script>
