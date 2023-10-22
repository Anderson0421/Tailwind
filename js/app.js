Vue.createApp({
    data() {
        return {};
    },
}).component('link-cascadia', {
    template: `
    <a href="#" class="group flex items-center text-lg font-cascadia text-do-blue-light font-bold hover:text-do-blue-medium hover:duration-200">
        <slot></slot>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:ml-1 group-hover:duration-150 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </a>
    `,
}).mount('#app');
