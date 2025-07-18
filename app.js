const app = Vue.createApp({
    data() {
        return {
            steps: [
                {
                    title: 'Основы',
                    text: `В блоке вы познакомитесь со всеми основами Vue.js на практике. 
                        На протяжении блока мы напишем реактивное приложение, в процессе
                        разработки которого разберем всю базу фреймворка.`,
                },
                {
                    title: 'Компоненты',
                    text: `Один из самых важных блоков в курсе, где вы узнаете все о компонентах.
                            В блоке мы напишем 2 разных приложения и создадим более 5 различных
                            UI компонент, как в реальной разработке. Блок расскажет про абсолютно
                            все составляющие, которые есть в компонентах: взаимодействие,
                            slots, асинхронные и динамические компоненты и тонна примеров.`
                },
                {
                    title: 'Роутер',
                    text: `В данном блоке вы узнаете все о том, как работает мультиязычность
                            во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на
                            практике увидите как работать с динамическим роутером.`,
                },
                {
                    title: 'Vuex',
                    text: `В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать
                            с данными, какие есть лучшие практики по их программированию и
                            структурированию. Все на практике.`
                },
                {
                    title: 'Composition',
                    text: `Одним из наиболее важных обновлений во Vue 3 является появление
                            альтернативного синтаксиса Composition API. В этом блоке вы узнаете
                            все, чтобы полностью пользоваться данным синтаксисом на практических
                            примерах. Помимо этого вы узнаете как работать совместно с Vue
                            Router и Vuex.`
                },
            ],
            stepPosition: 0,
            againText: 'Для повтора нажмите кнопку "Начать заного"'
        }
    },
    methods: {
        stepChange(number) {
            if (this.isLastPosition) {
                this.stepPosition = ['-1', '1'].includes(number)
                                    ? this.stepPosition + Number(number) : number
            }
        },
        restartCourse() {
            this.stepPosition = 0
        }
    },
    computed: {
        stepText() {
            return this.isLastPosition
                ? this.steps[this.stepPosition].text : this.againText
        },
        isFirstPosition() {
            return this.stepPosition === 0
        },
        isLastPosition() {
            return this.stepPosition < this.steps.length
        }
    }
})

app.mount('#app')
