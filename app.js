const app = Vue.createApp({
    data() {
        return {
            firstName: 'Kevin',
            lastName: 'Sana',
            email: 'kevinsana123@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/4.jpg',
        };
    }
});

app.mount('#app');