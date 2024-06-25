// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

const { createApp } = Vue;

createApp({
    data() {
        return {
            activeImage: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Vivi l\'ascesa di Miles Morales mentre il nuovo eroe padroneggia incredibili, esplosivi nuovi poteri per diventare il suo Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Salta tra le dimensioni con Ratchet e Clank mentre affrontano un imperatore malvagio di un\'altra realtà.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: 'Raduna tutti i tuoi amici e scendi in campo in Fortnite di Epic Games, un confronto tra 100 giocatori che combina saccheggio, creazione, sparatorie e caos.',
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Perso, ferito e solo, un gatto randagio deve districare un antico mistero per fuggire da una città dimenticata.',
                }, {
                    image: 'img/05.webp',
                    title: 'Marvel\'s Avengers',
                    text: 'Marvel\'s Avengers è un epico gioco d\'azione e avventura in terza persona che combina una storia originale e cinematografica con il gioco in singolo e cooperativo.',
                }
            ]
        }
    },
    methods: {
        nextImage(){
            // logica di funzionamento click next slide
            // incremento
            this.activeImage++;
            // gestiamo il caso limmite del next
            if(this.activeImage > this.slides.length - 1){
                this.activeImage = 0;

            }
        },
        prevImage(){
            // logica di funzionamento click prev slide
            // decremento
            this.activeImage--;
            // gestiamo il caso limite del prev
            if(this.activeImage < 0 ){
                this.activeImage = this.slides.length - 1;

            }

        }
    },
    mounted() {
        console.log(`the component is now mounted.`);
    }
}).mount('#app');
