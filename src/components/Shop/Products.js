import ProductItem from './ProductItem';
import classes from './Products.module.css';

const ALL_ITEMS=[
  {
    id:'p1',
    title:"This is First Title",
    price:4,
    description:'This is a first product - amazing!'
  },
  {
    id:'p2',
    title:"This is Second Title",
    price:8,
    description:'This is a Second product - amazing item!'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ALL_ITEMS.map(item=>(
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
