<script setup>
import { computed } from "vue";

const { question } = defineProps(["question"]);

const options = computed(() => {
  return question.answers;
});
</script>

<template>
  <!-- Question -->
  <div id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </div>

  <!-- Option answer -->
  <div id="options-container">
    <div class="option" v-for="option in options" :key="option.id">
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </div>
</template>

<style scoped>
/* questions */
#question-container {
  margin-top: 30px;
}

.question-title {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
}

/* options */
#options-container {
  margin-top: 30px;
}

.option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: #a0ced9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  font-size: 20px;
  padding: 0 20px;
  background-color: #e2eec2;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
