<template>
    <div class="w-full">
        <div v-if="displayImages" class="flex flex-wrap justify-center py-4 lg:pt-4 pt-8">
            <img
                v-for="item in stack"
                :key="item.key"
                width="64"
                class="mr-4 p-3"
                :src="item.src"
                :alt="item.title" />
        </div>
        <div v-else class="flex flex-wrap justify-center py-4 lg:pt-4 pt-8 dark:text-gray-400">
            <span v-for="item in stack" :key="item.key" class="p-3">{{ item.title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillStack',
    props: {
        displayImages: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    data() {
        return {
            stack: [
                { key: 1, title: 'HTML', src: require('~/assets/html5.svg') },
                { key: 2, title: 'Javascript', src: require('~/assets/javascript.svg') },
                { key: 3, title: 'CSS', src: require('~/assets/css.svg') },
                { key: 4, title: 'Vue.js', src: require('~/assets/vuejs.svg') },
                { key: 5, title: 'React', src: require('~/assets/react.svg') },
                { key: 6, title: 'Tailwind CSS', src: require('~/assets/tailwindcss.svg') },
                { key: 7, title: 'Docker', src: require('~/assets/docker.svg') },
                { key: 8, title: 'Git', src: require('~/assets/git.svg') },
                { key: 9, title: 'MySQL', src: require('~/assets/mysql.svg') },
                { key: 10, title: 'PHP', src: require('~/assets/php.svg') }
            ]
        }
    }
}
</script>
