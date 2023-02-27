import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Prosím zadejte platnou emailovou adresu.')
    .required(
      'Zadejte prosím svou emailovou adresu, pole nesmí zůstat prázdné.'
    ),

  password: yup
    .string()
    .required('Zadejte prosím své heslo, pole nesmí zůstat prázdné.'),
});

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Jméno je příliš krátké, minimální délka jména jsou 4 znaky.')
    .max(48, 'Jméno je příliš dlouhé, maximální délka jména je 48 znaků.')
    .required('Zadejte prosím své jméno, pole nesmí zůstat prázdné.'),
  email: yup
    .string()
    .email('Prosím zadejte platnou emailovou adresu.')
    .required(
      'Zadejte prosím svou emailovou adresu, pole nesmí zůstat prázdné.'
    ),
  password: yup
    .string()
    .min(5, 'Heslo je příliš krátké, minimální délka hesla jsou 4 znaky.')
    .matches(passwordRules, { message: 'Vytvořte si prosím silnější heslo.' })
    .required('Zadejte prosím své heslo, pole nesmí zůstat prázdné.'),
  image: yup
    .string()
    .required('Vyberte si prosím obrázek, pole nesmí zůstat prázdné.'),
});

export const updatePlaceSchema = yup.object().shape({
  title: yup
    .string()
    .max(48, 'Název je příliš dlouhý, maximální délka názvu je 48 znaků.')
    .required('Zadejte prosím název místa, pole nesmí zůstat prázdné.'),

  description: yup
    .string()
    .min(4, 'Popis je příliš krátký, minimální délka popisu je 10 znaků.')
    .max(150, 'Popis je příliš dlouhý, maximální délka názvu je 150 znaků.')
    .required('Zadejte prosím popis místa, pole nesmí zůstat prázdné.'),
});

export const newPlaceSchema = yup.object().shape({
  title: yup
    .string()
    .min(4, 'Název je příliš krátký, minimální délka názvu jsou 4 znaky.')
    .max(48, 'Název je příliš dlouhý, maximální délka názvu je 48 znaků.')
    .required('Zadejte prosím název místa, pole nesmí zůstat prázdné.'),

  description: yup
    .string()
    .min(4, 'Popis je příliš krátký, minimální délka popisu je 10 znaků.')
    .max(150, 'Popis je příliš dlouhý, maximální délka názvu je 150 znaků.')
    .required('Zadejte prosím popis místa, pole nesmí zůstat prázdné.'),
  image: yup
    .string()
    .required('Vyberte si prosím obrázek, pole nesmí zůstat prázdné.'),
});
