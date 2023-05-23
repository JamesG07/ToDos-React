import "./ErrorMessage.css";
export default function ErrorMessage({ errorAddNewTask }) {
  return (
    <div className='container-errorMessage'>
      <p>{errorAddNewTask}</p>
    </div>
  );
}
