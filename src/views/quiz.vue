<script setup></script>

<template>
  <!-- Header -->
  <header>
    <h4>Question 1/2</h4>
    <div class="bar">
      <div class="bar-progress"></div>
    </div>
  </header>

  <!-- Question -->
  <div id="question-container">
    <h1 class="question-title">What is 1 + 1</h1>
  </div>

  <!-- Option answer -->
  <div id="options-container">
    <div class="option">
      <p class="option-label">A.</p>
      <div class="option-value">1</div>
    </div>
    <div class="option">
      <p class="option-label">B.</p>
      <div class="option-value">2</div>
    </div>
    <div class="option">
      <p class="option-label">C.</p>
      <div class="option-value">10</div>
    </div>
  </div>
</template>

<style scoped>
/* header */
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}

/* bar */
.bar {
  width: 100%;
  height: 50px;
  border: 1px solid #adf7b6;
}

.bar-progress {
  height: 100%;
  width: 50%;
  background-color: #adf7b6;
}

/* questions */
#question-container {
  margin-top: 30px;
}

.question-title {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
}

/* options */
#options-container {
  margin-top: 30px;
}

.option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: #a0ced9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  font-size: 20px;
  padding: 0 20px;
  background-color: #e2eec2;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
