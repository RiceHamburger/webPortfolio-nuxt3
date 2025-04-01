
<script setup>
const pageTopClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const handleScroll = () => {
  const pageTopEl = document.querySelector(".el-pageTop");
  if (!pageTopEl) return;

  if (window.scrollY >= 500) {
    pageTopEl.style.opacity = 1;
    pageTopEl.style.visibility = "visible";
    pageTopEl.style.transition = "opacity 0.25s";
  } else {
    pageTopEl.style.opacity = 0;
    pageTopEl.style.visibility = "hidden";
    pageTopEl.style.transition = "opacity 0.25s";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
});
</script>

<template>
  <div class="el-pageTop">
    <button @click="pageTopClick">
      <fa :icon="['fas', 'chevron-up']" class="fa-chevron-up" />
    </button>
  </div>
</template>

<style scope>
.el-pageTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
}
.el-pageTop button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 62px;
  border: none;
  border-radius: 5px;
  border-bottom: 2px solid;
  border-color: #0099ae;
  background-color: #00aeef;
  transition: 0.25s;
  color: #fff;
  font-size: 20px;
}
.el-pageTop button svg {
  width: 0.875em;
}
</style>
