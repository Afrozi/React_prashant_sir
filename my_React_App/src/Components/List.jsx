import React from 'react'

const List = ({list}) => {
  return (
    <>
    {!list || list.length === 0 ? <h1>student not found</h1>
                                 :<h1>student found</h1>}
     {list && list.length > 0 &&  <ol className='list'>
        {list.map((item) => <li>{item}</li>)}
      </ol>}
    </>
  );
};

export default List
