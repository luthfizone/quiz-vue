<script setup>
import { ref, watch } from "vue";
import dataQuiz from "./data/quiz.json";

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
      <div v-for="quiz in quizes" :key="quiz.id">
        <div class="card">
          <div class="card-body">
            <img :src="quiz.img" :alt="quiz.title" />
            <h2>{{ quiz.title }}</h2>
            <p>{{ quiz.questions.length }} Question</p>
          </div>
        </div>
      </div>
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

.card {
  width: 280px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
