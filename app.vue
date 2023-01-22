<template>
  <div>
    <AppBar />
    <NuxtPage />
  </div>
</template>

<style>
/** Global Styles **/

/* general */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: whitesmoke;
}

:root {
  --primary-color: rgb(0 160 160);
  --bg-color: rgb(28 31 39);
  --bg-app-bar-color: rgb(28 31 39 /0.75);
  --card-bg-color: rgb(37 42 54);
  --card-bg-color-hover: rgb(35 40 51 /.85);
  --horizontal-page-separation: 2em;
  --app-bar-height: 70px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}


/* Handle */
::-webkit-scrollbar-thumb {
  background: #404047;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2c2c31;
}

main {
  width: 100%;
}

body {
  height: 100%;
  background-color: var(--bg-color);
}

.container {
  width: min(1050px, 100% - var(--horizontal-page-separation));
  margin: auto;
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
  color: var(--primary-color);
}
</style>
