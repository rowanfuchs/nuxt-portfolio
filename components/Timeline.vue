<template>
    <div class="timeline mt-6">
        <div
            v-for="(project, index) in portfolio"
            :key="index"
            :class="index % 2 === 0 ? 'timeline-grid' : 'timeline-grid timeline-grid-right'">
            <span :class="index % 2 === 0 ? 'timeline-before' : 'timeline-before left-0'" />
            <div
                :class="
                    index % 2 === 0 ? 'timeline-post-marker' : 'timeline-post-marker -left-2'
                " />
            <TimelineItem :project="project" />
        </div>
        <TimelineModal />
    </div>
</template>

<script>
import portfolio from 'assets/portfolio'
import TimelineItem from './timeline/Item'
import TimelineModal from './timeline/Modal'

export default {
    name: 'CareerTimeline',
    components: {
        TimelineItem,
        TimelineModal
    },
    data() {
        return {
            portfolio
        }
    }
}
</script>
