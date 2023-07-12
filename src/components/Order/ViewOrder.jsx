import React from 'react'
import { useFetch } from '../../Hooks/useFetch'
const ViewOrder = () => {
    const [data,error,loading] = useFetch(`/orders`)
  return (
    <div>
      <table class="table">
  <thead class="table-light">
  <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
  </thead>
  <tbody>
  <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
  </tbody>
</table>
    </div>
  )
}

export default ViewOrder
