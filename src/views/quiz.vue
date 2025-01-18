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

const questionPage = computed(() => {
  return `${currentQuestionsIndex.value + 1} / ${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  return `${
    ((currentQuestionsIndex.value + 1) / quiz.questions.length) * 100
  }%`;
});
</script>

<template>
  <!-- Header -->
  <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage" />

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
