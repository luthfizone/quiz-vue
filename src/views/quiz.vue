<script setup>
import QuizContent from "@/components/quizContent.vue";
import QuizHeader from "@/components/quizHeader.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "@/data/quiz.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((quiz) => {
  return quiz.id === quizId;
});

const currentQuestionsIndex = ref(0);
</script>

<template>
  <!-- Header -->
  <QuizHeader />

  <!-- Quiz content -->
  <QuizContent :question="quiz.questions[currentQuestionsIndex]" />
</template>

<style scoped></style>
