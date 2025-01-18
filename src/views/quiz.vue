<script setup>
import QuizContent from "@/components/quizContent.vue";
import QuizHeader from "@/components/quizHeader.vue";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import quizes from "@/data/quiz.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((quiz) => {
  return quiz.id === quizId;
});

const currentQuestionsIndex = ref(0);

// const questionPage = ref(
//   `${currentQuestionsIndex.value + 1} / ${quiz.questions.length}`
// );

// watch(
//   () => currentQuestionsIndex.value,
//   () =>
//     (questionPage.value = `${currentQuestionsIndex.value + 1} / ${
//       quiz.questions.length
//     } `)
// );

// BEST PRACTICE USE THIS
/**
 * karena menggunakan computed tidak di render ulang kalo gaada perubahan
 */

/**
 * jika menggunakan watch maka lebih cocok untuk mengambil data API
 * atau triggernya dari luar state
 */
const questionPage = computed(() => {
  return `${currentQuestionsIndex.value + 1} / ${quiz.questions.length}`;
});
</script>

<template>
  <!-- Header -->
  <QuizHeader :questionPage="questionPage" />

  <!-- Quiz content -->
  <QuizContent :question="quiz.questions[currentQuestionsIndex]" />

  <!-- just for hardcode (will remove later) -->
  <button
    @click="currentQuestionsIndex++"
    :disabled="currentQuestionsIndex === quiz.questions.length - 1"
  >
    Next
  </button>
</template>

<style scoped></style>
