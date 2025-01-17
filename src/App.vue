<script setup>
import { ref, watch } from "vue";
import dataQuiz from "./data/quiz.json";
import QuizCard from "./components/cards.vue";

const quizes = ref(dataQuiz);
const search = ref("");

watch(search, () => {
  quizes.value = dataQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <main>
    <header>
      <h1 id="title">Quiz Apps</h1>
      <input
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search Quiz..."
        v-model.trim="search"
      />
    </header>

    <!-- Quiz -->
    <section id="quiz-container">
      <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  margin: 50px 0;
  display: flex;
  align-items: center;
}

#title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  padding: 10px;
  background-color: #c9c9c9a9;
  border: none;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
