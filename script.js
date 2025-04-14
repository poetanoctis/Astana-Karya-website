let text = document.getElementById('text');
let right1 = document.getElementById('right1');
let left1 = document.getElementById('left1');
let right2 = document.getElementById('right2');
let left2 = document.getElementById('left2');

window.addEventListener('scroll', () => {
	let value = window.scrollY;
	
	text.style.marginTop = value * 1.0 + 'px';
	right1.style.left = value * -1.5 + 'px';
	left1.style.left = value * 1.5 + 'px';
	right2.style.left = value * 2.5 + 'px';
	left2.style.left = value * -2.5 + 'px';
});

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.transform = `translateY(${value * 0.5}px)`;
    text.style.opacity = 1 - value * 0.002; 
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".navigation a");
        const contentSection = document.querySelector(".sec");
    

        function loadPage(url) {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const newContent = doc.querySelector(".sec").innerHTML;
    
                    contentSection.style.opacity = "0";
                    setTimeout(() => {
                        contentSection.innerHTML = newContent;
                        contentSection.style.opacity = "1";
                        window.history.pushState({}, "", url); 
                    }, 300); 
                })
                .catch(err => console.error("Error loading page:", err));
        }
    
        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetPage = this.getAttribute("href");
                loadPage(targetPage);
            });
        });
    
        window.addEventListener("popstate", function () {
            loadPage(window.location.pathname);
        });
    });})

// button

const images = [
    {
        src: "pp1.png",
        title: "Dieng Frizz",
        description:"Jenis minuman yang kami pilih dengan tujuan untuk membantu menyegarkan badan melalui minuman bersoda dingin dengan komposisi soda sprite, es batu, sirup, dan jelly. Cocok saat musim panas ini dan terutama saat hari-h bazaar dimana akan panas sekali suasananya. Awalnya, kami rencana untuk membuat pop ice, tetapi dengan tahap yang merepotkan, kami ubah menjadi minuman ini." },
    {
        src: "pp2.png",
        title: "Wafflicious",
        description: "Hidangan penutup kami, yaitu waffle yang kami awalnya ingin buat untuk produk bioteknologi (menggunakan ragi instan) tetapi pada akhirnya tidak terpilih. Waffle yang kami sajikan ini kami persiapkan tiga topping yaitu gula aren, whipped cream, maple syrup tetapi dengan penambahan harga Rp2.000 per topping."
    },
    {
        src: "pp3.png",
        title: "Mambo Delight",
        description: "Hidangan dingin ini yang kami pilih karena tidak memerlukan bahan yang ribet dan cepat untuk dibuat. Hidangan ini berbentuk lonjong dan panjang yaitu es mambo yang mempunyai 4 rasa; bubblegum, mangga, stroberi, dan anggur yang sudah kami persiapkan dan dibeku di rumah sehingga dapat bertekstur sama seperti es batu tetapi dengan rasa-rasa yang variatif."
    },
    {
        src: "pp4.png",
        title: "Wrap & Roll",
        description: "Salah satu makanan yang pernah viral di media sosial yang kami pikir akan mudah menarik perhatian banyak orang karena dengan cara makan yang lebih unik daripada biasanya, mie instan yang dibungkus dengan rice paper. Mie instan yang sudah dibungkus dengan rice paper agar lebih krispi, digoreng lagi biar mengeluarkan bunyi yang renyah saat mengunyah makanan tersebut."
    },
    {
        src: "pp5.png",
        title: "Hairbow Batik",
        description: "Aksesoris cantik terbentuk dari kain batik khas Indonesia yang kami buat untuk produk kesenian. Awalnya kami ingin membuat brooch dan pita batik, tetapi karena terlalu sulit untuk dibuat, kami direkomendasi untuk membuat hairbow batik. Akhirnya kami memilih hairbow batik dengan ada tiga jenis warna yang indah untuk mempercantik diri dengan ikat rambut yang sudah dijahit dibelakangnya."
    },
    {
        src: "pp6.png",
        title: "Stikantara (PPKn)",
        description: "Produk umum yang banyak dibeli oleh masyarakat ini kami rencanakan dengan tema flora, fauna, makanan, alat musik, dan rumah adat yang dapat ditemukan di Indonesia. Nama produk tersebut terbentuk dari antara dua kata yaitu “Stiker” dan “Nusantara”. Stiker kami buat dengan menggunakan media aplikasi digital untuk menggambar bertujuan untuk memenuhi produk PPKn. Terdiri dari 10 jenis stiker yang berbeda dan dapat dikoleksi. Stiker ini merupakan produk PPKn yang kami telah pilih dengan latar belakang tertentu. Stiker biasa merupakan salah satu hal yang sederhana dan juga dikenal murah tetapi melalui kreativitas gambar, makna dapat diberikan secara tersirat melalui gambar tersebut. Kami pilih gambar tersebut sesuai tema yang sudah ditentukan berupa nusantara Indonesia dengan menggunakan berbagai macam makanan khas, flora fauna, alat tradisional, dan rumah adat beberapa pulau yang dapat ditemukan di Indonesia. Kami mengambil pie susu dan kamboja dari Bali, angklung dan rumah joglo dari Jawa, onde-onde ubi ungu dari Kalimantan,  rumah honai dan burung cendrawasih dari Papua, harimau sumatera dan durian dari Sumatera, dan sosok penjelajah perempuan yang di desain oleh kami. Hal ini menunjukkan bahwa kami ingin mempromosikan keunikan dan kekhasan budaya dan keragaman hayati Indonesia yang luas dan unik melalui stiker yang sudah digambar dan dicetak cocok bagi kaum muda zaman sekarang."
    },
    {
        src: "pp7.png",
        title: "NusaPouchy (PPKn)" ,
        description: "Termasuk juga produk umum untuk menyimpan barang-barang kecil ataupun barang-barang yang penting. Nama produk tersebut terbentuk antara dua kata yaitu “Nusantara” dan “Pouch” tetapi ditambah huruf “y” untuk membuatnya lebih lucu didengar. Pouch yang sudah kami persiapkan menggunakan gambar Mbaru Niang (NTT), Monas (Jawa - Jakarta), dan Keris (Jawa) yang merupakan kebudayaan khas Indonesia dengan ada kertas yang menjelaskan tentang gambar-gambar tersebut. Menggunakan teknik menggambar digital dan bertujuan untuk memenuhi produk PPKn. Produk ini kami pilih menjadi salah satu produk PPKn karena pada umumnya dapat diketahui pouch biasanya bersifat polos, tetapi kami ingin mengekspresi budaya khas dan juga monumen Indonesia melalui gambar menggunakan sablon yang ditempel lalu disetrika. Selain pouch yang gambarnya sudah kami gambar sendiri secara digital, kami juga menyertakan definisi dan fun fact tiga gambar yang kami ambil agar dapat menyebarkan pengetahuan tentang gambar kebudayaan khas Indonesia yang begitu unik dan istimewa."
    },
    {
        src: "pp8.png",
        title: "RingRaja (PPKn)",
        description: "Produk yang seringkali dikoleksi dan dimana-mana pasti ada mau di media sosial atau secara langsung. Nama produk ini terinspirasi dari salah satu pantai yang ada di Indonesia yaitu Pantai Raja Ampat yang berada di Papua. Keychain ini dibuat dengan teknik menggambar digital yang bertema bunga-bunga khas Indonesia yang kami pilih yaitu anggrek ungu, rafflesia arnoldii, dan melati putih. Kami juga pikir bahwa akan lebih seru ketika diletakkan di dalam tempat blind box agar bisa lebih seru dan mengejutkan apa yang akan didapatkan dan karena zaman sekarang banyak sekali blind box yang sudah digunakan dimana-mana. Ini juga bertujuan untuk memenuhi produk PPKn. Produk ini yang kami sudah buat dilatarbelakangi oleh gantungan kunci yang sangat populer pada zaman sekarang dan dapat dilihat di berbagai media sosial dimana banyak warnet atau artis-artis membuat gantungan kunci dengan menggambarkan desain tersebut secara digital sehingga dijadikan merch mereka yang biasa laku ketika dijual. Kami memilih tema flora untuk gantungan kunci kami karena flora di Indonesia merupakan keanekaragaman hayati yang dapat membuat sebuah pemandangan yang memesona dan indah untuk dipandang."
    }, 
    {
        src: "pp9.png",
        title: "Treasure Bundle",
        description: "Perkumpulan produk kami dari yaitu RingRaja (gantungan kunci), NusaPouchy (pouch), dan Stikantara (stiker). Kami berpikir bahwa membuat tiga produk ini dijadikan bundle dengan harga yang sedikit murah daripada harga biasa dan terjangkau. Ketiga produk PPKn tersebut menunjukkan nilai toleransi dan tenggang rasa melalui perbedaan-perbedaan yang ada di Indonesia dengan keberagaman yang unik dan banyak yang diterima di masyarakat. Produk-produk telah dibuat dengan design yang berbeda-beda. Design tersebut melambangkan kemauan kelompok kami untuk mempelajari dan menghormati keberagaman yang ada di Indonesia. "
    },
    {
        src: "pp10.png",
        title: "Flores Ink Bundle",
        description: "Perkumpulan produk yang berisi kertas daur ulang (produk bioteknologi), washi tapes, dan feather pen. Bundle ini kami rencanakan sebagai journaling set karena cocok untuk remaja-remaja sekarang yang sedang mencari perlengkapan tulis."
    },
];



let currentIndex = 0;

function showImage(index) {
    const image = images[index];
    document.getElementById("carousel-img").src = image.src;
    document.getElementById("carousel-title").textContent = image.title;
    document.getElementById("carousel-description").textContent = image.description;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

showImage(currentIndex);

document.getElementById("prev-btn").addEventListener("click", prevImage);
document.getElementById("next-btn").addEventListener("click", nextImage);


