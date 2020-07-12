import React from 'react';
import Head from 'next/head';
import BaseLayout from 'components/layouts/base-layout';
import { fetcher } from '../../utils/fetcher';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';

const Todos = ({ todos }) => {
  return (
    <BaseLayout>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 &&
              todos.map(({ id, title }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <Link href="/todos/[id]" as={`/todos/${id}`}>
                      <a>{title}</a>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </>
    </BaseLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const BASE_URL = process.env.JSON_PLACE_HOLDER_URL;
  let todos = await fetcher(`${BASE_URL}/todos`);

  todos = todos.splice(0, 10);

  return {
    props: { todos },
  };
};

export default Todos;
