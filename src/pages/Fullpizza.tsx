import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<{imageUrl: string, title: string, price: number}>();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://6481ccc629fa1c5c50321a8b.mockapi.io/Pizza/items/' + id,
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }
    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pizza) {
    return <p>загрузка</p>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="ass" />
      <h2>{pizza.title}</h2>
      <p> This pizza is amazing and has beautiful taste </p>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
