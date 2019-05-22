const offerItems = [
    {
        category:{
            type: 'Laticineo', 
            id: 1
        },
        discount: 20,
        cta: 'Laticineos em desconto',
        product_amount: 100,
        img_url: 'https://abrilsaude.files.wordpress.com/2017/03/leite-copo.jpg'
    },
    {
        category:{
            type: 'Carnes e Aves' , 
            id: 1
        },
        discount: 20,
        cta: 'Carnes em desconto',
        product_amount: 100,
        img_url: 'https://abrilsaude.files.wordpress.com/2017/03/leite-copo.jpg'
    },
    {
        category:{
            type: 'Hortifruti', 
            id: 1
        },
        discount: 20,
        cta: 'Frutas em desconto',
        product_amount: 100,
        img_url: 'https://abrilsaude.files.wordpress.com/2017/03/leite-copo.jpg'
    },
    {
        category:{
            type: 'Doce', 
            id: 1
        },
        discount: 20,
        cta: 'Doces em desconto',
        product_amount: 100,
        img_url: 'https://abrilsaude.files.wordpress.com/2017/03/leite-copo.jpg'
    },
    {
        category:{
            type: 'Higiene', 
            id: 1
        },
        discount: 20,
        cta: 'Higiene pessoal em desconto',
        product_amount: 100,
        img_url: 'https://abrilsaude.files.wordpress.com/2017/03/leite-copo.jpg'
    },
    {
        category:{
            type: 'Farinaceo', 
            id: 1
        },
        discount: 20,
        cta: 'Farinaceos em desconto',
        product_amount: 100,
        img_url: 'https://abrilsaude.files.wordpress.com/2017/03/leite-copo.jpg'
    },
]

const productItems = [
    {
        category: {
            name: 'Padaria',
            id: 1
        },
        name: 'Pão de forma',
        brand: 'Pullman',
        price: '22.30',
        off: 10,
        id: 1,
        measure: 'unit',
        old_price: (22.30 * 0.10) + 22.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Hortifruti',
            id: 2
        },
        name: 'Uva maçã',
        brand: '',
        price: '22.30',
        off: 0,
        id: 2,
        measure: 'kg',
        old_price: (22.30 * 0) + 22.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Carnes e Aves',
            id: 3
        },
        name: 'Filet Mignon',
        brand: 'Friboi',
        price: '19.30',
        off: 15,
        id: 3,
        measure: 'kg',
        old_price: (19.30 * 0.15) + 19.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Padaria',
            id: 1
        },
        name: 'Pão de forma',
        brand: 'Pullman',
        price: '22.30',
        off: 10,
        id: 4,
        measure: 'unit',
        old_price: (22.30 * 0.10) + 22.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Hortifruti',
            id: 2
        },
        name: 'Uva maçã',
        brand: '',
        price: '22.30',
        off: 0,
        id: 5,
        measure: 'kg',
        old_price: (22.30 * 0) + 22.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Carnes e Aves',
            id: 3
        },
        name: 'Filet Mignon',
        brand: 'Friboi',
        price: '19.30',
        off: 15,
        id: 6,
        measure: 'kg',
        old_price: (19.30 * 0.15) + 19.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Padaria',
            id: 1
        },
        name: 'Pão de forma',
        brand: 'Pullman',
        price: '22.30',
        off: 10,
        id: 7,
        measure: 'unit',
        old_price: (22.30 * 0.10) + 22.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Hortifruti',
            id: 2
        },
        name: 'Uva maçã',
        brand: '',
        price: '22.30',
        off: 0,
        id: 8,
        measure: 'kg',
        old_price: (22.30 * 0) + 22.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Carnes e Aves',
            id: 3
        },
        name: 'Filet Mignon',
        brand: 'Friboi',
        price: '19.30',
        off: 15,
        id: 9,
        measure: 'kg',
        old_price: (19.30 * 0.15) + 19.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    },
    {
        category: {
            name: 'Carnes e Aves',
            id: 3
        },
        name: 'Filet Mignon',
        brand: 'Friboi',
        price: '19.30',
        off: 15,
        id: 10,
        measure: 'kg',
        old_price: (19.30 * 0.15) + 19.30,
        description: 'Lorem ipsum dolor sit amet',
        img_url: 'url'
    }
]

const Offers = (amount) => 
    new Promise((resolve) => {
        resolve(amount ? offerItems.slice(0, amount): offerItems)
    })
 
const Products = (amount) => 
    new Promise((resolve) => {
        resolve(amount ? productItems.slice(0, amount): productItems)
    })