<template>
    <div class="timeline-card" :class="project.cancelled ? 'timeline-cancelled' : ''">
        <span class="timeline-date">
            {{ project.date }}
        </span>
        <span class="float-right cursor-pointer" @click="$nuxt.$emit('modal', { data: project })">
            <div class="absolute w-4 h-4 bg-blue-300 animate-ping-slow opacity-50" />
            <svg class="fill-current text-gray-400" width="16" height="16" viewBox="0 0 512 512">
                <g>
                    <path
                        d="M31.5,34.5v443h449v-443H31.5z M57.5,61.5h399v316.478l-57.26-99.177L323,146.747l-76.24,132.053l-23.813,41.246 l-0.706-1.223L179.5,244.795l-42.741,74.029L98.264,385.5H57.5V61.5z" />
                    <circle cx="139" cy="133" r="40.5" />
                </g>
            </svg>
        </span>
        <p class="timeline-title">
            {{ project.title }}
        </p>
        <p class="timeline-description">
            {{ project.description }}
        </p>
        <Badges :types="project.types" />
    </div>
</template>

<script>
import Badges from './Badges'

export default {
    name: 'TimelineItem',
    components: {
        Badges
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>
