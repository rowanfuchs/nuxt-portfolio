<template>
    <div class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between">
        <div class="container p-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="text-white text-xs block">
                Built with
                <span class="text-red-700">&nbsp;♥&nbsp;</span>
                on Nuxt with Vue and Tailwind CSS
                <a class="block" href="https://react.rowanfuchs.nl/">Switch to React</a>
            </div>
            <div class="flex flex-grow justify-end">
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                        <DarkMode />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import DarkMode from './DarkMode'

export default {
    name: 'NavBar',
    components: { DarkMode }
}
</script>
