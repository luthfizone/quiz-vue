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
</style>
