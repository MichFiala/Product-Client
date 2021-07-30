import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Grid, GridRow, Loader } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import ProductListItem from './ProductListItem';

export default observer(function ProductList() {
     const { productStore } = useStore();
     const { products, loadProducts, loadNextProducts, hasMoreProducts } = productStore;
     const [loadingNext, setLoadingNext] = useState(false);

     function handleGetNext() {
          setLoadingNext(true);
          loadNextProducts()
               .then(() => setLoadingNext(false));
     }

     useEffect(() => {
          loadProducts();
     }, [loadProducts]);

     return (
          <>
               <Grid>
                    <GridRow>

                         <InfiniteScroll
                              pageStart={0}
                              loadMore={handleGetNext}
                              hasMore={
                                   // !loadingNext &&
                                   hasMoreProducts}
                              initialLoad={false}
                         >
                              {
                                   products.map(p => (
                                        <ProductListItem key={p.id} product={p} />
                                   ))
                              }
                         </InfiniteScroll>
                    </GridRow>
                    <GridRow>
                         <Loader active={loadingNext} />
                    </GridRow>
               </Grid>
          </>
     )
});