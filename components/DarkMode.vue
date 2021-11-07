<template>
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            :color="checked ? 'black' : 'white'"
            stroke="currentColor"
            ref="svgContainerProps"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="cursor: pointer">
            <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white"/>
                <circle ref="maskedCircleProps" cx="12" cy="4" r="9" fill="black"/>
            </mask>
            <circle ref="centerCircleProps" fill="black" cx="12" cy="12" r="9" mask="url(#mask)" />
            <g ref="linesProps" stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </g>
        </svg>
    </div>
</template>

<script>
//https://jfelix.info/blog/using-react-spring-to-animate-svg-icons-dark-mode-toggle
//https://motion.vueuse.org/api/use-spring.html#spring
import { useSpring } from '@vueuse/motion'

export default {
    name: 'darkmode',
    data () {
        return {
            checked: false,
            properties: {
                dark: {
                    r: 9,
                    transform: "rotate(40deg)",
                    cx: 12,
                    cy: 4,
                    opacity: 0
                },
                light: {
                    r: 5,
                    transform: "rotate(90deg)",
                    cx: 30,
                    cy: 0,
                    opacity: 1
                },
                springConfig: { mass: 4, tension: 250, friction: 35 }
            }
        }
    },
    computed: {
        svgContainerProps(){
            //transform
            return useSpring(this.$refs.svgContainerProps, {
                transform: "rotate(40deg)"
            })
        },
        centerCircleProps(){
            //r
            return useSpring(this.$refs.centerCircleProps, {
               r: 5
            })
        },
        maskedCircleProps(){
            // cx,
            //     cy
            return useSpring(this.$refs.maskedCircleProps,{
                cx: 30,
                cy: 0,
            });
        },
        linesProps(){
            // opacity
            return useSpring(this.$refs.linesProps,{
                opacity: 0,
            });
        }
    },
    methods: {
        toggleDarkMode () {

        }
    },
    created () {
        const { set, values, stop } = useSpring(this.$refs.svgContainer, {
            mass: 4, tension: 250, friction: 35
        })
        useSpring(this.$refs.svgContainerProps, {
            transform: "rotate(40deg)"
        })
        useSpring(this.$refs.centerCircleProps, {
            r: 5
        })
        useSpring(this.$refs.maskedCircleProps,{
            cx: 30,
            cy: 0,
        });
        return useSpring(this.$refs.linesProps,{
            opacity: 1,
        });
    }
}
</script>
