import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  return persistReducer(
    {
      key: 'school-react',
      storage,
      whitelist: ['example'], // Add the reducers you want to persist
    },
    reducers
  );
};
