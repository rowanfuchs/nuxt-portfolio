<template>
    <div>
        <Navbar/>
        <Nuxt/>
    </div>
</template>

<script>
export default {
    head: {
        title: "Rowan Fuchs",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js with TailwindCSS portfolio",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
};
</script>
