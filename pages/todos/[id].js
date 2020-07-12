import React from 'react';
import BaseLayout from 'components/layouts/base-layout';
import { fetcher } from '../../utils/fetcher';

const Todo = ({ todo }) => {
  return (
    <BaseLayout>
      <h1 className="mb-3">Todo Details</h1>

      <table className="table table-borderless table-sm">
        <tbody>
          <tr>
            <th scope="row">ID</th>
            <td>{todo.id}</td>
          </tr>

          <tr>
            <th scope="row">Title</th>
            <td>{todo.title}</td>
          </tr>
        </tbody>
      </table>
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const BASE_URL = process.env.JSON_PLACE_HOLDER_URL;
  const { id } = params;

  const todo = await fetcher(`${BASE_URL}/todos/${id}`);

  return {
    props: { todo },
  };
};

export default Todo;
