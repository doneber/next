<template>
  <header class="app-bar">
    <div class="container">
      <a
        href="/"
        class="logo"
      >
        <span class="title">Next</span> <span class="thin-weight">Project</span>
      </a>
      <ul>
        <li>
          <a
            href="https://github.com/doneber/next"
            target="_blank"
          >
            <svg
              class="_3W--KRkiCk"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="30"
              height="30"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </li>
        <li>
          <NuxtLink to="/search">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ><g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
            /><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            /><g id="SVGRepo_iconCarrier"><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              fill="#ffffff"
            /></g></svg>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
.app-bar {
  position: sticky;
  top: 0;
  z-index: 9;
  display: flex;
  width: 100%;
  height: var(--app-bar-height);
  background-color: var(--bg-app-bar-color);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgb(128 128 128 /0.4);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - var(--horizontal-page-separation));
  margin: auto;
}

.container ul {
  display: flex;
  align-items: center;
  gap: 16px;
}

a.logo {
  font-size: 1.8rem;
}
</style>
