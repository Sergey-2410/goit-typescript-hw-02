import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';
const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = (value, { resetForm }) => {
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
