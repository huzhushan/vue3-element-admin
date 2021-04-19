<script>
export default {
  created() {
    this.$router.replace(this.$route.fullPath.replace(/^\/redirect/, ''));
  },
  render(h) {
    return h();
  },
};
</script>
