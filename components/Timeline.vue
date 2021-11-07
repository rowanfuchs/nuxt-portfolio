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
                <p class="timeline-title">
                    {{ project.title }}
                </p>
                <p class="timeline-description">
                    {{ project.description }}
                </p>
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
        }
    }
}
</script>
