<script setup>
const { questionPage } = defineProps(["questionPage"]);

console.log(questionPage);
</script>

<template>
  <header>
    <h4>Question {{ questionPage }}</h4>
    <div class="bar">
      <div class="bar-progress"></div>
    </div>
  </header>
</template>

<style scoped>
/* header */
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}

/* bar */
.bar {
  width: 100%;
  height: 50px;
  border: 1px solid #adf7b6;
}

.bar-progress {
  height: 100%;
  width: 50%;
  background-color: #adf7b6;
}
</style>
