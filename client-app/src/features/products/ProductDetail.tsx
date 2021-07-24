import React from 'react';
import { Button, Card, Form, Header, Image, Segment } from 'semantic-ui-react';
import { Product } from '../../app/models/product';
import modalStore from '../../app/stores/modalStore';
import ProductForm from './form/ProductForm';

interface Props {
     product: Product
}

export default function ProductDetail({ product }: Props) {
     return (
          <Card fluid>
               <Image src={`/assets/productImages/${product.imgUri}`} wrapped ui={false} />
               <Card.Content>
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Meta>
                         <span>Id [{product.id}]</span>
                    </Card.Meta>
               </Card.Content>
               <Card.Content extra>
                    {`${product.price}Kč`}
               </Card.Content>
               <Segment clearing>
                    <ProductForm selectedProduct={product}/>
               </Segment>
          </Card>
     )
}