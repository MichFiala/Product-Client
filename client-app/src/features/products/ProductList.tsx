import React, { useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import { Product } from '../../app/models/product';
import ProductListItem from './ProductListItem';

export default function ProductList()
{
     const [products, setProducts] = useState<Product[]>([]);

     useEffect(() => {
          agent.Products.list().then(value => setProducts(value));

     }, []);

     return (
          <>
               <Header content='Product List' />
               
               {
                    products.map(p => (
                         <Header key={p.id} content={p.name}/>
                    ))
               }
               <ProductListItem />
          </>
     )
}