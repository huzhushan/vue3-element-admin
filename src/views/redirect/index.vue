<script>
export default {
  created() {
    this.$router.replace(this.$route.fullPath.replace(/^\/redirect/, ""));
  },
  render() {},
};
</script>
