
Vue.component('message', {
    props: ['title','body'],
    template: `
    <article class="message">
        <div class="message-header">
            {{ title }}
            <span class="close">x</span>
        </div>
            <div class="message-body">
                {{ body }}
            </div> 
    </article>
  `
});

new Vue({
    el: '#root'
});
