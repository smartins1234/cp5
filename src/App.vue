<template>
  <div id="app">
    <router-view/>
    <div class="footer, content">
      <a href="https://github.com/smartins1234/cp4">Github</a>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  color: #2e3b43;
  background-color: #f5e5e5;
}

.content {
  margin: 3.5em 5em 5em 9em;
}

.header {
  font-size: 1.5em;
  background-color: #cc9887;
  margin: 0;
  padding: 1em;
}

.header h2 {
  margin: 0;
  margin-left: 2em;
}

.input {
  display: inline;
  margin: 2em 0;
}

.input input {
  margin-right: 1em;
}

.input button {
  margin: 0 1em;
}

.display {
  margin: 0;
}

.controls {
  margin-bottom: 1em;
}

.element {
  max-width: 700px;
  background-color: #cc9887;
  padding: 0.7em;
  margin: 0;
  border-bottom: 2px solid #8f756f;
  overflow: auto;
}

.element p {
  display: inline-block;
  width: 250px;
  margin: 0.4em 0;
}

.element input {
  margin: 0 2em;
}

.element button {
  display: inline-block;
  float: right;
  font-size: 1.5em;
  border-radius: 0.3em;
}

#label {
  width: fit-content;
  padding: 0.5em;
}

#author {
  width: 200px;
}

#delete {
  width: fit-content;
  float: right;
  margin-top: 0.9em;
}

.footer {
  bottom: 0;
  position: fixed;
  margin: 2em 0;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>