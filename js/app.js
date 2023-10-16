Vue.createApp({
    data() {
        return {};
    },
}).component('panel', {
    template: `
        <div class="pannel">
            <div class="pannel-title">
                <slot name='title'></slot>
            </div>
            <div class="py-5 px-4">
                <p class="leading-loose mb-4">
                    <slot name='body'></slot>
                </p>
                <a href="index.html" class="btn-primary">Index</a>
            </div>
        </div>
    `,
}).mount('#app');
