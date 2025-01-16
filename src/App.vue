<script setup></script>

<template>
  <main>
    <header>
      <h1 id="title">Quiz Apps</h1>
      <input
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search Quiz..."
      />
    </header>

    <!-- Quiz -->
    <section id="quiz-container">
      <div class="card">
        <div class="card-body">
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="programming"
          />
          <h2>Programming</h2>
          <p>2 Question</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
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
