import React from 'react';
import { Card, Header, Icon, Image } from 'semantic-ui-react';
import { Product } from '../../app/models/product';

interface Props {
     product: Product
}

export default function ProductListItem({ product }: Props) {
     return (
          <Card>
               <Image src={`/assets/productImages/${product.imgUri}`} wrapped ui={false} />
               <Card.Content>
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Description>
                         {product.description}
                    </Card.Description>
                    <Card.Meta>
                         <span>Id [{product.id}]</span>
                    </Card.Meta>
               </Card.Content>
               <Card.Content extra>
                    {`${product.price}Kč`}
               </Card.Content>
          </Card>
     )
}