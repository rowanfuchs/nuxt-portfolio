<template>
    <div ref="modal" class="timeline-modal transform scale-0 transition-transform duration-300">
        <div class="timeline-modal-card">
            <p class="timeline-modal-image">
                <img
                    v-if="data"
                    class="max-h-full py-5"
                    :alt="data.title"
                    :title="data.title"
                    :src="data.image" />
            </p>
            <button type="button" class="timeline-modal-close" @click="toggle">
                <svg
                    class="h-6 w-6 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimelineModal',
    data() {
        return {
            data: {
                title: null,
                image: null
            }
        }
    },
    created() {
        this.$nuxt.$on('modal', (event) => {
            this.toggle(event.data)
        })
    },
    methods: {
        toggle(obj = null) {
            this.data = obj || null
            this.$refs.modal.classList.toggle('scale-100')
        }
    }
}
</script>
