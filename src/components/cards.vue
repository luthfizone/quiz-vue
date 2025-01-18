<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const { quiz } = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});

function goToQuiz() {
  router.push({
    name: "quiz",
    params: {
      id: quiz.id,
    },
  });
}
</script>

<template>
  <div class="card" @click="goToQuiz">
    <div class="card-body">
      <img :src="quiz.img" :alt="quiz.title" />
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} Question</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 280px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 0 10px;
}

.card-body h2 {
  font-size: 1.5rem;
  margin: 10px 0;
}
</style>
