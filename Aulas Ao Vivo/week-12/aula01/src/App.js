import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { postPost } from './services/posts';

import './App.css';

const schema = yup
  .object({
    userId: yup.number().positive().required('O userId é obrigatório'),
    title: yup.string().required('Campo de Titulo é obrigatório'),
    body: yup
      .string()
      .min(30, 'Deve ter no minimo 30 caracteres')
      .required('Campo de corpo é obrigatório'),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // console.log(watch("email"));

  console.log(errors);
  const onSubmit = async data => {
    try {
      const response = await postPost(data);
      alert(JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" {...register('userId')} />
      {errors.userId && <span>{errors.userId.message}</span>}

      <input type="text" {...register('title')} />
      {errors.title && <span>{errors.title.message}</span>}

      <input type="text" {...register('body', { required: true })} />
      {errors.body && <span>{errors.body.message}</span>}

      <input type="submit" />
    </form>
  );
}

export default App;
