import { createContext, useReducer, useContext } from 'react';

const initialState = {
  status: 'IDLE',
  data: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'IDLE':
    case 'PENDING':
    case 'ERROR':
      return {
        status: action.type,
        data: undefined,
      };
    case 'SUCCESS':
      return {
        status: action.type,
        data: action.data,
      };
    default:
      return state;
  }
};

const ApiContext = createContext();

const useApi = () => {
  const context = useContext(ApiContext);

  if (context === undefined) {
    throw Error('useApi must be used inside a ApiProvider');
  }

  return context;
};

const ApiProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ApiContext.Provider value={{ state, dispatch }} {...props} />;
};

export { ApiProvider, useApi };
