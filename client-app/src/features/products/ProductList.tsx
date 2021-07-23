import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Button, Card, Divider, Grid, GridColumn, GridRow, Header, Loader } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import { PaginatedResult, PagingParams } from '../../app/models/pagination';
import { Product } from '../../app/models/product';
import { useStore } from '../../app/stores/store';
import ProductListItem from './ProductListItem';

export default observer(function ProductList() {
     const { productStore } = useStore();
     const { products, loadProducts, setPagingParams, pagination } = productStore;
     const [loadingNext, setLoadingNext] = useState(false);

     function handleGetNext() {
          setLoadingNext(true);
          setPagingParams(new PagingParams(pagination!.currentPage + 1));
          loadProducts().then(() => setLoadingNext(false));
     }

     useEffect(() => {
          loadProducts();
     }, [productStore, loadProducts]);


     return (
          <>
               <Grid>
                    <GridRow>

                         <InfiniteScroll
                              pageStart={0}
                              loadMore={handleGetNext}
                              hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
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