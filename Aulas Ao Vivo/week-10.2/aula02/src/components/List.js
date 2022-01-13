import React from 'react';

import { useApi } from '../context/api-context';

export default function List(props) {
  const { state } = useApi();

  if (state.status === 'SUCCESS') return <p>{JSON.stringify(state.data)}</p>;

  return null;
}
