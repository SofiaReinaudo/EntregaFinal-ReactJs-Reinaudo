const products =[
    { id: '1', nombre:'Falda Turia', precio: 18000, img: '../images/faldaTuria.jpg', stock: 10, category: 'Faldas', description: 'falda de gabardina de tablas, con cierre lateral. Posee detalle de monedero colgante con cierre.'},
    { id: '2', nombre:'Remera Bianca', precio: 15000, img: '../images/remeraBianca.jpg', stock: 10, category: 'Remeras', description: 'Remera manga corta de algodón con lycra batik. Escote cruzado con tiras largas para cruzar por la cintura. Grifa institucional en ruedo izquierdo. Importante: el batik de esta prenda puede ser distinto al de la foto ya que es un proceso artesanal.'},
    { id: '3', nombre:'Vestido Doha', precio: 11000, img: '../images/vestidoDoha.jpg', stock: 10, category: 'Vestidos', description: 'vestido vatik en hilado tejido morley. Por su elasticidad se adapta muy bien al cuerpo ideal para toda ocasion de uso.'},   
    { id: '4', nombre:'Falda Mini', precio: 19000, img: '../images/faldaMini.jpg', stock: 10, category: 'Faldas', description: 'falda corta de jean, tiro bajo. Tableada en el frente. Terminación de ruedo al corte desflecado. Bolsa de bolsillo que se asoma por debajo.'},
    { id: '5', nombre:'Remera What', precio: 41050, img: '../images/remeraWhat.jpg', stock: 10, category: 'Remeras', description: 'Remera basica manga corta de ribb con cuello redondo aplicado con terminacion de collareta. Largo a la cintura. Estampa full centrada solo en delantero. Grifa institucional en ruedo izquierdo.'},
    { id: '6', nombre:'Vestido Jenna', precio: 17700, img: '../images/vestidoJenna.jpg', stock: 10, category: 'Vestidos', description: 'Vestido de microtul. Escote recto con buche. Breteles con posibilidad de regular a traves de nudos.'},
    { id: '7', nombre:'Falda Nova', precio: 17900, img: '../images/faldaNova.jpg', stock: 10, category: 'Faldas', description: 'Falda en cuero ecologico tableada. Con cierre lateral.'},  
    { id: '8', nombre:'Remera Fire', precio: 15600, img: '../images/remeraFire.jpg', stock: 10, category: 'Remeras', description: 'Remera manga corta ranglan cuello redondo de ribb. Detalle de costura bordador a contratono de la base en mangas, cuello y ruedo. Estampa central en delantero con apliques de strass. Largo a la cintura. Grifa institucional en ruedo izquierdo. Importante: es una prenda delicada, lavar a mano.'},    
    { id: '9', nombre:'Vestido Silver', precio: 14500, img: '../images/vestidoSilver.jpg', stock: 10, category: 'Vestidos', description: 'Vestido corto con escote en buche, color plateado. Lleva breteles regulables.'},   
    { id: '10', nombre:'Falda Pixel', precio: 112000, img: '../images/faldaPixel.jpg', stock: 10, category: 'Faldas', description: 'falda corta de viyela, tableada, con cintura ancha tipo caderín en la misma tela y cierre lateral para acceso.'}, 
    { id: '11', nombre:'Remera Disney', precio: 16000, img: '../images/remeraDisney.jpg', stock: 10, category: 'Remeras', description: 'Remera Marie Disney. Manga corta de jersey 30/1. Cuello redondo. Estampa centrada en frente. Largo por debajo de la cintura. Grifa innstitucional en ruedo izquierdo.'}, 
    { id: '12', nombre:'Vestido Nina', precio: 113000, img: '../images/vestidoNina.jpg', stock: 10, category: 'Vestidos', description: 'Vestido corto en símil cuero, espalda con escote profundo. Breteles elásticos regulables.'}   
];


export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
};

export const getProductsById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(el => el.id === productId))
        }, 500)
    })
};

export const getProductsByCategory = (prodCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === prodCategory);
            resolve(filteredProducts);
        }, 500);
    });
};