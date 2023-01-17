const products = [
    { 
        id: '1', 
        name: 'iphone 12', 
        price: 1000, 
        category: 'celular', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { id: '2', name: 'samsung s21', price: 800, category: 'celular', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'MacBook Air 13', price: 4000, category: 'notebooks', img:"./images/applenotebook.webp", stock: 8, description:'Descripcion de MacBook Air 13'},
    { id: '4', name: 'Notebook HP Probook', price: 2500, category: 'notebooks', img:"./images/hpnotebbok.jpeg", stock: 20, description:'Descripcion de Notebook HP Probook 450 Fhd I7 11 16gb 512ssd W10'},
    { id: '5', name: 'Ipad 9na generacion', price: 1600, category: 'tablet', img:"./images/ipad.jpg", stock: 5, description:'Descripcion de ipad'},
    { id: '6', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 10, description:'Descripcion de Ipad'}
]


export const getProducts = (categoryId) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}