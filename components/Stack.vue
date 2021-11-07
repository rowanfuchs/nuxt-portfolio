<template>
    <div class="flex flex-wrap justify-center py-4 lg:pt-4 pt-8">
        <img v-for="(image, key) in stack" :key="key" width="64" class="mr-4 p-3" :src="image.src" :alt="image.title"/>
    </div>
</template>

<script>
export default {
    name: 'stack',
    data () {
        return {
            stack: [
                {title: "HTML", src: require("~/assets/html5.svg")},
                {title: "Javascript", src: require("~/assets/javascript.svg")},
                {title: "CSS", src: require("~/assets/css.svg")},
                {title: "Vue.js", src: require("~/assets/vuejs.svg")},
                {title: "React", src: require("~/assets/react.svg")},
                {title: "Tailwind CSS", src: require("~/assets/tailwindcss.svg")},
                {title: "Docker", src: require("~/assets/docker.svg")},
                {title: "Git", src: require("~/assets/git.svg")},
                {title: "MySQL", src: require("~/assets/mysql.svg")},
                {title: "PHP", src: require("~/assets/php.svg")},
            ]
        }
    }
}
</script>
