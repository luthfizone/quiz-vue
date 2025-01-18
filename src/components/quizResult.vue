<script setup>
import { computed } from "vue";

const { quizQuestionsLength, numberOfCorrectAnswers } = defineProps([
  "quizQuestionsLength",
  "numberOfCorrectAnswers",
]);

const resultScore = computed(() => {
  if (quizQuestionsLength === numberOfCorrectAnswers) {
    return `Congratulation your Score is 100 🥳`;
  } else {
    return `Try again, next time 😥`;
  }
});
</script>

<template>
  <div class="results">
    <p>Score:</p>
    <h1>{{ resultScore }}</h1>
    <a @click="$router.back()">Go Back</a>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
}

p {
  font-size: 25px;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #e0e0e0;
}

a:focus {
  outline: 2px solid #007bff;
}
</style>
