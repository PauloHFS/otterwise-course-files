import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { StyledForm } from './Form.styles';

import { post } from '../../services/posts';

import { postSchema } from '../../schemas/post.schema';

const Form = () => {
  const {
    control,
    handleSubmit,
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultvalue=""
        render={({ field }) => (
          <TextField
            label="Title"
            margin="dense"
            variant="outlined"
            error={Boolean(errors.title)}
            helperText={errors.title?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        defaultvalue=""
        render={({ field }) => (
          <TextField
            label="Description"
            margin="dense"
            variant="outlined"
            multiline
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
            {...field}
          />
        )}
      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </StyledForm>
  );
};

export default Form;
