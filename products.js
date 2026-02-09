const products = [
    {
        id: 'h1',
        name: 'Classic Leather Tote',
        category: 'handbags',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600',
        description: 'Exquisite genuine leather tote bag with premium gold accents. Perfect for work and everyday elegance.'
    },
    {
        id: 'h2',
        name: 'Midnight Clutch',
        category: 'handbags',
        price: 7800,
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fd15dbc4?auto=format&fit=crop&q=80&w=600',
        description: 'Sleek and sophisticated evening clutch with a detachable chain strap.'
    },
    {
        id: 'j1',
        name: 'Diamond Stud Earrings',
        category: 'jewelry',
        price: 24500,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
        description: 'Elegant diamond stud earrings set in 18k white gold. A timeless classic.'
    },
    {
        id: 'j2',
        name: 'Gold Layered Necklace',
        category: 'jewelry',
        price: 5900,
        image: 'https://images.unsplash.com/photo-1599643478123-242f279105ea?auto=format&fit=crop&q=80&w=600',
        description: 'Delicate gold-plated layered necklace, perfect for adding a touch of glamour to any outfit.'
    },
    {
        id: 'f1',
        name: 'Velvet Stiletto Heels',
        category: 'footwear',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600',
        description: 'Luxurious velvet stiletto heels designed for comfort and style.'
    },
    {
        id: 'f2',
        name: 'Nude Pointed Flats',
        category: 'footwear',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
        description: 'Versatile nude pointed flats that transition perfectly from office to dinner.'
    },
    {
        id: 'h3',
        name: 'Pastel Crossbody Bag',
        category: 'handbags',
        price: 6200,
        image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=600',
        description: 'Chic pastel crossbody bag, compact yet spacious enough for your essentials.'
    },
    {
        id: 'j3',
        name: 'Pearl Drop Bracelet',
        category: 'jewelry',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600',
        description: 'Dainty bracelet featuring fresh water pearl drops on a silver chain.'
    }
];

// Reusable functions
function formatPrice(price) {
    return 'Rs. ' + price.toLocaleString();
}

// Export for other scripts if needed (though we'll include it in HTML)
if (typeof module !== 'undefined') {
    module.exports = products;
}
