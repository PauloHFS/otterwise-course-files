import { useForm } from 'react-hook-form';

import { post } from '../services/posts';

const Form = () => {
  const { handleSubmit, register } = useForm();

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
      <input type="text" {...register('description')} />
      <button type="submit">Postar</button>
    </form>
  );
};

export default Form;
