import React from 'react';
import { Header } from 'semantic-ui-react';
import ProductListItem from './ProductListItem';

export default function ProductList()
{
     return (
          <>
               <Header content='Product List' />
               
               <ProductListItem />
          </>
     )
}