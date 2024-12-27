import { Field, Form, Formik, FormikHelpers } from 'formik';
import s from './SearchBar.module.css';
import { SearchBarProps, FormValues } from '../App/App.types';
const SearchBar: React.FC<SearchBarProps> = ({ onChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = (
    value: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log(value);
    onChangeQuery(value.query);
    resetForm();
  };
  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.btnSubmit} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
