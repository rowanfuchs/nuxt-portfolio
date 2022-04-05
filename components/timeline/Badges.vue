<template>
    <p class="timeline-badges">
        <span v-for="type in types" :key="type">
            <Badge :type="type" />
        </span>
    </p>
</template>

<script>
import Badge from './Badge'

export default {
    name: 'TimelineBadges',
    components: {
        Badge
    },
    props: {
        types: {
            type: Array,
            required: true
        }
    }
}
</script>
