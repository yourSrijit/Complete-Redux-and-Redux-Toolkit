import React from 'react'

export default function AppTodo() {
  return <div class="container text-center">
  <div class="row">
  <div class="col-6">
    <input type="text"  placeholder='Enter todo here'/>
  </div>
    <div class="col-4"> 
    <input type="date" />
    </div>
    <div class="col-2">
      <button type='button' className='btn btn-success'>Add </button>
    </div>
  </div>
</div>
}
