<template>
    <div class="timeline mt-6">
        <div v-for="(project, index) in portfolio" :key="index"
             :class="(index % 2 === 0) ? 'timeline-grid' : 'timeline-grid timeline-grid-right'">
            <span :class="(index % 2 === 0) ? 'timeline-before' : 'timeline-before left-0'"/>
            <div :class="(index % 2 === 0) ? 'timeline-post-marker' : 'timeline-post-marker -left-2'"/>
            <div class="timeline-card" :class="project.cancelled ? 'timeline-cancelled' : ''">
                <span class="timeline-date">
                    {{ project.date }}
                </span>
                <span class="float-right cursor-pointer" v-on:click="openImageModal(project.index)">
                    <svg class="fill-current text-gray-400"
                         width="18"
                         height="18"
                         viewBox="0 0 512 512">
                        <g>
                            <path
                                d="M31.5,34.5v443h449v-443H31.5z M57.5,61.5h399v316.478l-57.26-99.177L323,146.747l-76.24,132.053l-23.813,41.246 l-0.706-1.223L179.5,244.795l-42.741,74.029L98.264,385.5H57.5V61.5z"/>
                            <circle
                                cx="139"
                                cy="133"
                                r="40.5"/>
                        </g>
                    </svg>
                </span>
                <p class="timeline-title">
                    {{ project.title }}
                </p>
                <p class="timeline-description">
                    {{ project.description }}
                </p>
                <p class="timeline-badges">
                    <span  v-for="type in project.types" :key="type">
                        <span v-if="type !== 'all'" class="timeline-badge"
                              :class="badgeColor(type)">
                            <span class="timeline-badge-text">{{ type }}</span>
                        </span>
                    </span>
                </p>
            </div>
            <div :ref="project.index"
                 class="timeline-modal transform scale-0 transition-transform duration-300">
                <div class="timeline-modal-card">
                    <p class="timeline-modal-image">
                        <img class="max-h-full py-5" :alt="project.title" :title="project.title" :src="project.image">
                    </p>
                    <button v-on:click="closeImageModal(project.index)" type="button" class="timeline-modal-close">
                        <svg class="h-6 w-6 dark:text-gray-400"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import portfolio from 'assets/portfolio'

export default {
    name: 'timeline',
    data () {
        return {
            portfolio: portfolio,
            types: {
                'all': 'text-gray-700 bg-gray-100 border-gray-300',
                'lumen': 'text-yellow-700 bg-yellow-100 border-yellow-300 dark:text-yellow-100 dark:bg-yellow-700 dark:border-yellow-900',
                'laravel': 'text-red-700 bg-red-100 border-red-300 dark:text-red-100 dark:bg-red-700 dark:border-red-900',
                'docker': 'text-indigo-700 bg-indigo-100 border-indigo-300 dark:text-indigo-100 dark:bg-indigo-700 dark:border-indigo-900',
                'tailwind': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
                'vue': 'text-green-700 bg-green-100 border-green-300 dark:text-green-100 dark:bg-green-700 dark:border-green-900',
                'nuxt': 'text-green-700 bg-green-100 border-green-300 dark:text-green-100 dark:bg-green-700 dark:border-green-900',
                'next': 'text-gray-700 bg-gray-100 border-gray-300 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-900',
                'react': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
                'capacitor': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
                'quasar': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
                'elasticsearch': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
                'node': 'text-green-700 bg-green-100 border-green-300 dark:text-green-100 dark:bg-green-700 dark:border-green-900',
                'jquery': 'text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-100 dark:bg-blue-700 dark:border-blue-900',
                'codeigniter': 'text-red-700 bg-red-100 border-red-300 dark:text-red-100 dark:bg-red-700 dark:border-red-900',
            }
        }
    },
    methods: {
        badgeColor(type) {
            return this.types[type];
        },
        openImageModal(imageIndex) {
            this.$refs[imageIndex][0].classList.add('scale-100')
        },
        closeImageModal(imageIndex) {
            this.$refs[imageIndex][0].classList.remove('scale-100')
        }
    }
}
</script>
