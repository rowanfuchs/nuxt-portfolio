<template>
    <div class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between">
        <div class="container p-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="flex flex-grow justify-end">
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                        <Darkmode/>
                        <!--                        <DarkModeSwitch
                                                    style={{marginBottom: '2rem'}}
                                                sunColor={'white'}
                                                checked={state.darkMode}
                                                onChange={() => state.dispatch({ type: !state.darkMode})}
                                                size={32}
                                                />-->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Darkmode from './DarkMode'

export default {
    components: { Darkmode }
}
</script>
