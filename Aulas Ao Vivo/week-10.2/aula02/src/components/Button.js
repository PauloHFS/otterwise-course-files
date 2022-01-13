import React from 'react';
import { useApi } from '../context/api-context';

export default function Button(props) {
  const { children, endpoint = '' } = props;

  const { dispatch } = useApi();

  const handleOnClickButton = async () => {
    dispatch({ type: 'PENDING' });

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com${endpoint}`
      );
      const data = await response.json();
      dispatch({ type: 'SUCCESS', data: data });
    } catch (error) {
      dispatch({ type: 'ERROR' });
    }
  };

  return <button onClick={handleOnClickButton}>{children}</button>;
}
