import './style.css';

const special = [{
    'name' : 'Dal Bati Churma',
    'intro' : "Dal Bati Churma is a traditional Rajasthani dish. It consists of hard wheat flour balls - 'bati' baked until golden, served with a flavorful lentil curry - 'dal', and a sweet crumbly mixture made from coarsely ground wheat, ghee, and sugar. - 'churma' There will be a desert and drink with some more things.",
    'img' : './dal_baati_churma.webp',
    'img_alt' : 'dal_baati_churma'
}];
const mainC = [{
    'name' : "Alu Pyaz ki Sabji",
    'intro' : "Alu Pyaz ki Sabji, or Potato-Onion Sabji, is a delightful Indian dish meant to be savored with Indian bread. This spicy and creamy vegetable medley showcases the harmonious blend of onions and potatoes, offering a balance of spice and a hint of sweetness.",
    'img' : './alu_pyaz_ki_sabji.jpg',
    'img_alt' : 'alu_pyaz_ki_sabji'
},{
    'name' : "Chana Masala",
    'intro' : "Chana Masala is a popular North Indian dish featuring chickpeas cooked in a spiced tomato-based gravy. It's a vegetarian delight, best paired with rice or Indian bread. The dish is infused with aromatic spices, providing a flavorful and satisfying experience with a perfect blend of savory and tangy notes.",
    'img' : './chana_masala.jpg',
    'img_alt' : 'chana_masala'
},{
    'name' : "Kadai Paneer",
    'intro' : "Ker Sangri is a traditional Rajasthani dish made from dried desert beans and berries, known as ker and sangri respectively. It's typically cooked with spices like red chili, turmeric, and cumin, creating a flavorful and tangy dish.",
    'img' : './kadai_paneer.jpg',
    'img_alt' : 'kadai_paneer'
},{
    'name' : "Ker Sangri",
    'intro' : "Ker Sangri is a traditional Rajasthani dish made from dried desert beans and berries, known as ker and sangri respectively. It's typically cooked with spices like red chili, turmeric, and cumin, creating a flavorful and tangy dish.",
    'img' : './ker_sangri.jpg',
    'img_alt' : 'ker_sangri'
},{
    'name' : "Palak Paneer",
    'intro' : "Palak Paneer is a popular North Indian dish that combines fresh spinach (palak) with paneer (Indian cottage cheese) in a creamy and flavorful tomato-based curry. The spinach is blanched, pureed, and then cooked with aromatic spices to create a rich and nutritious dish. Palak Paneer is enjoyed with Indian bread or rice.",
    'img' : './palak_paneer.jpg',
    'img_alt' : 'palak_paneer'
}];
const bread = [{
    'name' : "Roti",
    'intro' : "Savor our wholesome Roti, an unleavened flatbread made from nutritious whole wheat flour. Cooked on a griddle, it's a staple in Indian households, offering a healthier choice for your dining pleasure.",
    'img' : './roti.jpg',
    'img_alt' : 'roti'
},{
    'name' : "Tandoori Roti",
    'intro' : "Experience the rustic charm of our Tandoori Roti, a clay oven-baked delight. Made from whole wheat flour, it boasts a distinct chewy texture and a hint of smokiness, elevating your dining experience.",
    'img' : './tandoori_roti.jpg',
    'img_alt' : 'tandoori_roti'
},{
    'name' : "Naan",
    'intro' : "Indulge in the soft and fluffy texture of our Naan, a leavened flatbread cooked to perfection in a traditional tandoor. Made with all-purpose flour and a touch of yogurt or milk, it's a delightful accompaniment to our flavorful dishes.",
    'img' : './naan.jpg',
    'img_alt' : 'naan'
},{
    'name' : "Jeera Rice",
    'intro' : "Savor the aromatic simplicity of our Jeera Rice, a fragrant basmati rice dish cooked with cumin seeds. This subtly seasoned staple is a perfect accompaniment, enhancing your dining experience with its light and flavorful presence.",
    'img' : './jeera_rice.jpg',
    'img_alt' : 'jeera_rice'
},{
    'name' : "Pulav",
    'intro' : "Indulge in our fragrant Pulav, a flavorful rice dish cooked with aromatic spices, vegetables, and sometimes meat. Each grain is infused with rich spices, creating a delightful medley of textures and tastes for a satisfying culinary experience.",
    'img' : './pulav.jpg',
    'img_alt' : 'pulav'
}];
const desert = [{
    'name' : "Rasmalai",
    'intro' : "Soft and spongy paneer dumplings soaked in saffron-infused milk and garnished with pistachios, creating a luscious and sweet treat that concludes your meal on a decadent note.",
    'img' : './rasmalai.jpg',
    'img_alt' : 'rasmalai'
},{
    'name' : "Mango Lassi",
    'intro' : "Experience the refreshing taste of our Mango Lassi, a classic Indian yogurt-based drink blended with ripe mangoes. Indulge in the perfect balance of sweetness and tanginess, offering a delightful and cooling accompaniment to your meal.",
    'img' : './mango_lassi.jpg',
    'img_alt' : 'mango_lassi'
},{
    'name' : "Kesar Pista Lassi",
    'intro' : "Savor the royal essence of our Kesar Pista Lassi, a regal blend of yogurt, saffron, and pistachios. This rich and creamy concoction offers a luxurious twist to the classic lassi, providing a refreshing and indulgent beverage experience.",
    'img' : './kesar_pista_lassi.jpg',
    'img_alt' : 'kesar_pista_lassi'
},{
    'name' : "Chaas",
    'intro' : "Quench your thirst with our Chaas, a traditional Indian buttermilk delight. Infused with cumin, mint, and a hint of salt, this refreshing and probiotic-rich beverage complements your meal, offering a cooling and flavorful experience.",
    'img' : './chaas.jpg',
    'img_alt' : 'chaas'
},{
    'name' : "Nimbu Pani",
    'intro' : "Rejuvenate with our Nimbu Pani, a zesty lemonade crafted with freshly squeezed lemons, sugar, and a pinch of salt. This tangy and revitalizing drink provides a perfect blend of citrusy goodness, promising a refreshing experience.",
    'img' : './nimbu_pani.webp',
    'img_alt' : 'nimbu_pani'
}];
const menu = [special, mainC, bread, desert],
        heading = ["Rajasthani Kadai 's Special",'Main Course','Breads and Rice','Desert and Drinks'];
let i = 0;

const MENU = document.getElementById('MENU'),
        intro = document.getElementById('intro');

function showMenu() {
    const mi = document.createElement('div');
    mi.id = 'mi';

    menu.forEach(category => {
        const categoryDiv = document.createElement('div');
        const headingDiv = document.createElement('div');
        const itemsDiv = document.createElement('div');

        headingDiv.classList.add('heading');
        headingDiv.textContent = heading[i]; // Use the name of the first item as the heading

        itemsDiv.id = 'items';

        category.forEach(item => {
            const itemDiv = document.createElement('div');

            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.img_alt;

            const itemNameDiv = document.createElement('div');
            itemNameDiv.classList.add('itemName');
            itemNameDiv.innerHTML = `<br>${item.name}<br><div>${item.intro}</div>`;

            itemDiv.appendChild(img);
            itemDiv.appendChild(itemNameDiv);
            itemsDiv.appendChild(itemDiv);
        });

        categoryDiv.appendChild(headingDiv);
        categoryDiv.appendChild(itemsDiv);
        mi.appendChild(categoryDiv);
        i = i+1;
    });

    document.body.appendChild(mi);
    document.body.removeChild(intro);
}

MENU.addEventListener('click', showMenu);

document.getElementById('resetButton').addEventListener('click', function() {
    location.reload();
});
