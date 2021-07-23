import React, { useEffect, useState } from 'react';
import { Card, Grid, GridColumn, Header } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import { PaginatedResult } from '../../app/models/pagination';
import { Product } from '../../app/models/product';
import ProductListItem from './ProductListItem';

export default function ProductList() {
     const [productsPaginated, setProductsPaginated] = useState<PaginatedResult<Product[]> | null>(null);

     useEffect(() => {
          agent.Products.list().then(value => setProductsPaginated(value));

     }, []);

     return (
          <>

               <Card.Group stackable>

                    {
                         productsPaginated?.data.map(p => (
                              <ProductListItem key={p.id} product={p} />
                         ))
                    }
               </Card.Group>
          </>
     )
}