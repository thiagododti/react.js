const App = () => {
  
  let name: string = 'Thiago';
  let lastName: string = 'Dantas';

  return (
    <div>Nome completo: {name.toUpperCase()} {lastName.toLocaleLowerCase()}</div>
  );
}

export default App;