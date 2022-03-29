<template>
    <div class="container mx-auto">
        <div class="flex flex-col items-center mt-8">
            <h2 class="text-3xl font-bold uppercase tracking-wider">Faq</h2>
        </div>

        <div class="px-12 mt-8 h-48">
            <h2
                class="font-semibold text-lg text-rongtatext py-4 cursor-pointer"
                @click="toggleFaq"
            >Who is authorized distributor of Value-Top in Bangladesh?</h2>

            <transition
                enter-active-class="transition ease-out duration-300"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
                <h2
                    class="font-semibold text-gray-700 py-4"
                    v-if="showFaq"
                >- Computer City Technologies Limited is the authorized distributor of Value-Top in Bangladesh.</h2>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showFaq: false
        }
    },

    methods: {
        toggleFaq() {
            this.showFaq = !this.showFaq
        }
    },

    head: {
        title: 'Value-Top | FAQs',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'Frequently Asked Questions',
                content: 'description'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/fav.png' }]
    },
}

</script>