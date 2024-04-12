import React from 'react'

export default function TodoItems(props) {
    let {todoName,todoDate}=props;
  
  return (
    <div class="container text-center">
        <div class="row">
        <div class="col-6">
         {todoName}
        </div>
          <div class="col-4"> 
          {todoDate}
          </div>
          <div class="col-2">
            <button type='button' className='btn btn-danger'>Add </button>
          </div>
        </div>
      </div>
  )
}
