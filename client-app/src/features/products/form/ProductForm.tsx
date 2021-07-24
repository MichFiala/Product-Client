import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Product } from '../../../app/models/product';
import { useStore } from '../../../app/stores/store';

interface Props{
     selectedProduct: Product
}

export default observer(function ProductForm({ selectedProduct }: Props) {    
     const initialState = selectedProduct;

     const [product, setProduct] = useState(initialState);
     const { productStore } = useStore();
     const { updateProduct, loading } = productStore;

     function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
          const { name, value } = event.target;
          setProduct({ ...product, [name]: value });
     }

     function handleFormSubmit() {
          updateProduct(product);
     }

     return (
          <Form>
               <Form.Field>
                    <input name='description' value={product.description ? product.description : ""} placeholder='Description' onChange={handleInputChange} />
               </Form.Field>
               <Button
                    floated='right'
                    positive
                    type='submit'
                    content='Save'
                    onClick={handleFormSubmit}
                    loading={loading}
                    disabled={loading}
               />
          </Form>
     )
});