import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react';
import { Product } from '../../app/models/product';
import { useStore } from '../../app/stores/store';
import ProductDetail from './ProductDetail';

interface Props {
     product: Product
}

export default observer(function ProductListItem({ product }: Props) {
     const { modalStore } = useStore();

     if (!product) return <></>

     return (
          <Card fluid onClick={() => modalStore.openModal(<ProductDetail product={product}/>)}>
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
});