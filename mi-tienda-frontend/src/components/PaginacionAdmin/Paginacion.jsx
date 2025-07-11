import React from 'react';
import './Paginacion.css';

function Paginacion() {
  return (
    <div className="pagination">
      <button>{'<'}</button>
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <span>...</span>
      <button>10</button>
      <button>{'>'}</button>
    </div>
  );
}
export default Paginacion;