<template>
    <div>
        <section class="relative block h-96 md:h-120">
            <div class="absolute top-0 w-full h-full bg-center bg-cover"
                 :style="{'background-image': `url(${backgroundImage})`}">
                <span :class="darkMode ? 'w-full h-full absolute opacity-50 bg-black' : ''"/>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-96">
                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                     preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="text-gray-300 dark:text-gray-900 fill-current" points="2560 0 2560 100 0 100"/>
                </svg>
            </div>
        </section>
        <section class="relative py-16">
            <div class="container mx-auto px-4">
                <div
                    class="bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 dark:bg-gray-800">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div class="relative">
                                    <img alt="An image of Rowan Fuchs"
                                         src="~/assets/portfolio.9940b5e4.png"
                                         width="150px"
                                         height="150px"
                                         :class="(darkMode ? 'filter grayscale ' : '') +
                                'shadow-xl rounded-full align-middle border-none -mt-16 max-w-150-px'"/>
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div class="flex justify-center md:justify-end py-6 px-3 mt-6 md:mt-0">
                                    <button
                                        class="contact-button"
                                        type="button" v-on:click="open('https://linkedin.com/in/rowanfuchs/')">
                                        Connect
                                    </button>
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                    <img v-for="(image, key) in images"
                                         :key="key"
                                         width="64"
                                         class="mx-2 p-3 hover:opacity-80 md:mr-4"
                                         :src="image.src"
                                         :alt="image.title"
                                         :title="image.title">
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-6 md:mt-12">
                            <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-700 dark:text-gray-200 mb-2">
                                Rowan <span class="hidden md:inline-block">Ryuichi</span> Fuchs
                            </h3>
                            <div class="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                                Almere, The Netherlands
                            </div>
                            <div class="mb-2 text-gray-600 dark:text-gray-300 mt-10">
                                Full Stack Web Developer
                            </div>
                        </div>
                        <div class="mt-10 py-10 border-t border-gray-300 dark:border-gray-700 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                                        I am an enthusiastic, creative and ambitious person who is always willing to
                                        learn and broaden my experience.
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        I'm always looking for a challenge and adapt easily to new environments.
                                        I enjoy working independently while also thrive when working in a team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-6">
                    <div class="mt-10 py-10 text-center">
                        <div class="text-center">
                            <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-700 dark:text-gray-400 mb-2">
                                Portfolio
                            </h3>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full lg:w-10/12 px-4">
                                <Timeline/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white w-full mb-6 shadow-xl rounded-lg dark:bg-gray-800">
                    <div class="mt-10 py-10 border-t border-gray-300 dark:border-gray-700">
                        <div class="grid grid-cols-3 px-4">
                            <div class="col-start-2 text-center">
                                <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-700 dark:text-gray-200 mb-2">
                                    Stack
                                </h3>
                            </div>
                            <div>
                                <label for="toggle-text" class=" cursor-pointer">
                                    <div class="block relative float-right">
                                        <input v-on:change="change()" type="checkbox" id="toggle-text" class="sr-only" />
                                        <div class="block bg-gray-600 w-6 h-4 rounded-full" />
                                        <div class="dot absolute left-1 top-1 bg-white w-2 h-2 rounded-full transition" />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full lg:w-10/12 px-4">
                                <Stack :display-images="displayImages"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import backgroundImage from 'assets/credits-pexels-photo-3801463.jpeg'
import Stack from '../components/Stack'
import Timeline from '../components/Timeline'

export default {
    name: 'index',
    components: {Timeline, Stack},
    data() {
        return {
            displayImages: true,
            backgroundImage: backgroundImage,
            images: [
                {title: "HTML", src: require("~/assets/html5.svg")},
                {title: "Javascript", src: require("~/assets/javascript.svg")},
                {title: "CSS", src: require("~/assets/css.svg")}
            ]
        }
    },
    computed: {
        darkMode: {
            get() {
                return this.$store.state.theme
            }
        }
    },
    methods: {
        open(url) {
            const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
            if (newWindow) {
                newWindow.opener = null
            }
        },
        change() {
            this.displayImages = !this.displayImages
        }
    }
}
</script>
