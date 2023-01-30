<script setup>
import { useSeens } from '@/stores/seens'
const { path } = useRoute()
const props = defineProps({
    path: {
        type: String,
        default: () => undefined,
    },
})
const currentPath = props.path || path

/**
* Obtiene la información de la navegación de contenidos.
*/
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(currentPath))
const currentCourse = navigation['_rawValue'].find(course => course._path === currentPath)
const classList = currentCourse.children.filter((item) => item._path !== currentPath)

/**
* Obtiene la información del estado de visto de cada curso.
*/
const seens = useSeens()
const newClassList = classList.map(items => {
    const seen = seens.history.get(items._path) ? true : false
    return { ...items, seen }
})

const updateCheckbox = ({ _path }) => {
    const seen = !seens.history.get(_path)
    seens.setSeen(_path, seen)
}
// TODO: Actualizar el checkbox cuando se cambia el estado de visto
// watch(seens.history, async () => {
//     console.log('seens.history changed');
// })
</script>

<template>
  <nav>
    <ul class="list-class">
      <template
        v-for="link of newClassList"
        :key="link._path"
      >
        <NuxtLink :to="link._path">
          <li
            :class="[link._path == path ?'current-class':'']"
          >
            <div class="card-class">
              <span>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#FFF"
                >
                  <path
                    d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM8 10h8M8 18h8M8 14h4"
                    stroke="#FFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 2v3.4a.6.6 0 00.6.6H20"
                    stroke="#FFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {{ link.title }}
            </div>
            <label
              class="checkbox-container"
              @click.stop="updateCheckbox(link)"
            >
              <input
                type="checkbox"
                :checked="link.seen"
                @click.stop=""
              >
              <span class="checkmark" />
            </label>
          </li>
        </NuxtLink>
      </template>
    </ul>
  </nav>
</template>

<style>
nav {
    position: sticky;
    top: 0;
    overflow: auto;
    border: 1px solid #2c2c31;
}

.list-class li {
    display: flex;
    gap: 18px;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    padding-left: 12px;
    border-bottom: 1px solid #2c2c31;
}

.card-class {
    display: flex;
    align-items: center;
    gap: 12px;
}

.current-class {
    background-color: var(--card-bg-color-hover);
}

/* The container */
.checkbox-container {
    display: inline-block;
    position: relative;
    padding-left: 22px;
    widows: 35px;
    margin-bottom: 24px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: rgb(52, 59, 73);
    border-radius: 4px;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input~.checkmark {
    background-color: rgb(40, 46, 59);
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked~.checkmark {
    background-color: rgb(52, 59, 73);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked~.checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

@media (max-width: 900px) {
    nav {
        position: static;
        overflow: unset;
    }
}
</style>