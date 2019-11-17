import PropTypes from 'prop-types';
import Link from 'next/link';
import * as S from './styles/Item';
import formatMoney from '../utils/formatMoney';

const Item = ({ item }) => (
  <S.Item>
    {item.image && <img src={item.image} alt={item.title} />}
    <S.Title>
      <Link
        href={{
          pathname: 'item',
          query: { id: item.id },
        }}
      >
        <a>{item.title}</a>
      </Link>
    </S.Title>
    <S.PriceTag>{formatMoney(item.price)}</S.PriceTag>
    <p>{item.description}</p>

    <div className="buttonList">
      <Link
        href={{
          pathname: 'update',
          query: { id: item.id },
        }}
      >
        <a>Edit ✏️</a>
      </Link>
      <button type="button">Add to Cart</button>
      <button type="button">Delete</button>
    </div>
  </S.Item>
);

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    largeImage: PropTypes.string,
  }).isRequired,
};

export default Item;