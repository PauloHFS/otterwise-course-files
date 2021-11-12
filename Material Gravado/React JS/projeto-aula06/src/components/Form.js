import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { post } from '../services/posts';

import { postSchema } from '../schemas/post.schema';

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  const onSubmit = async data => {
    try {
      console.log(data);
      const { data: resp } = await post(data);
      alert(`Post criado com o id: ${resp.id}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('title')} />
      <br />
      {errors.title?.message}
      <input type="text" {...register('description')} />
      <br />
      {errors.description?.message}
      <br />
      <button type="submit">Postar</button>
    </form>
  );
};

export default Form;
