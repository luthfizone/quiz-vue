<script setup>
import QuizContent from "@/components/quizContent.vue";
import QuizHeader from "@/components/quizHeader.vue";
import QuizResult from "@/components/quizResult.vue";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import quizes from "@/data/quiz.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((quiz) => {
  return quiz.id === quizId;
});
const numberOfCorrectAnswer = ref(0);

const currentQuestionsIndex = ref(0);
const showResult = ref(false);

const questionPage = computed(() => {
  return `${currentQuestionsIndex.value + 1} / ${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  return `${
    ((currentQuestionsIndex.value + 1) / quiz.questions.length) * 100
  }%`;
});

function onSelectedOption(option) {
  if (option.correct) {
    numberOfCorrectAnswer.value++;
  }

  if (currentQuestionsIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
    // ini diperlukan biar kodenya langsung keluar
    // dan nggak ditambahin lagi bar progressnya
    return;
  }

  currentQuestionsIndex.value++;
}
</script>

<template>
  <!-- Header -->
  <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage" />

  <!-- Quiz content -->
  <QuizContent
    v-if="!showResult"
    :question="quiz.questions[currentQuestionsIndex]"
    @selectOption="onSelectedOption"
  />

  <!-- Quiz Result -->
  <QuizResult
    v-else
    :quizQuestionsLength="quiz.questions.length"
    :numberOfCorrectAnswers="numberOfCorrectAnswer"
  />
</template>

<style scoped></style>
