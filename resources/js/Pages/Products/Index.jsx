import React from 'react';
import { Head } from '@inertiajs/react';
import App from '../App';

export default function ProductList({ products }) {
    return (
        <App>
            <Head title="Products" />
            <h1 className="text-3xl font-bold mb-6">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 bg-white shadow">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </App>
    );
}