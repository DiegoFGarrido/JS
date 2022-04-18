
//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    // método construtor para definir os parâmetros de cada
    // item do Carrossel (imagem, titulo e url)
    constructor(img, title, url) {
        this.img = img;
        this.title = title;
        this.url = url;
    }

    // método para aplicar a imagem do Carrossel na div#carousel
    applyImg(carousel) {
        const carouselDiv = document.getElementById('carousel');
        carouselDiv.style.backgroundImage = `url('/img/${carousel.img}')`;
    }

    // método para criar o título com o link, do item do Carrossel
    createTitleLink(carousel) {
        const anchorTag = document.createElement('a');
        const carouselTitle = document.getElementById('carousel-title');
        
        anchorTag.innerText = carousel.title;
        anchorTag.href = `/${carousel.url}`;

        carouselTitle.innerHTML = "";
        carouselTitle.appendChild(anchorTag);
    }

    static Start(arr) {
        if (arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._interval = setInterval(() => Carousel.Next(), 2000);
            Carousel.Next(); //start
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        let carousel = null;

        // verifica chegou ao último item
        if (Carousel._sequence == Carousel._size) {
            // reseta o valor da sequência quando chegar no último item
            Carousel._sequence = 0;
        }

        // encontra o item com base no valor da atual da sequência (Carousel._sequence)
        carousel = carouselArr[Carousel._sequence];
        // aplica a imagem do item atual
        carousel.applyImg(carousel);
        // cria o título para o item atual
        carousel.createTitleLink(carousel);

        // atualiza o valor da sequência para o próximo item
        Carousel._sequence++;
    }
};
