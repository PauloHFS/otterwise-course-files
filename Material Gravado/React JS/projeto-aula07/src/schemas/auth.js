import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
})

export const signinSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required(),
  password: yup.string().required(),
})

export const signupSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required(),
  password: yup.string().required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais'),
})
