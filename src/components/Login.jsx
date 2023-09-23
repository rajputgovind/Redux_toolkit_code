import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div><center>
     <Container className=" max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <Form.Group controlId="email">
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@company.com"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group controlId="password">
            <Form.Label>Your password</Form.Label>
            <Form.Control
              type="password"
              placeholder="••••••••"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </Form.Group>
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <Form.Check
                id="remember"
                type="checkbox"
                label="Remember me"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
          </div>
          <LinkContainer to="/forgot-password">
            <a className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </a>
          </LinkContainer>
        </div>
        <Button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </Button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{' '}
          <LinkContainer to="/register">
            <a className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </a>
          </LinkContainer>
        </div>
      </Form>
    </Container>
</center>
    </div>
  );
}

export default Login;
