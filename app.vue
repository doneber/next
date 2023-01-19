<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  height: 100%;
  background-color: rgb(30, 30, 32);
}

main {
  width: min(1050px, 100% - 2em);
  /* height: 100%; */
  margin: auto;
}

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: whitesmoke;
}

h1 {
  margin: 32px 0;
  font-size: xxx-large;
}

h2 {
  margin: 24px 0;
  font-size: xx-large;
}

p {
  margin: 16px 0;
  font-size: large;
}

span.thin-weight {
  font-weight: 500;
}

span.title {
  font-weight: bold;
  color: rgb(0, 150, 150);
}
</style>
