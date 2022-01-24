import * as React from 'react'
import Layout from '../../components/layout'
import { Button, Form} from 'react-bootstrap'
const IndexPage = () => {
  return (
    <Layout pageTitle="Sign in">
      
      <div style={{ width: '40%', marginLeft: '30%'}}>
        <h2>Sign in</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="login">
            Sign in
          </Button>
          <br></br>
          <br></br>
          <div className="d-grid gap-2">
          <Button variant="primary" href="/member/signup">
            New around here? Sign up
          </Button>
          <Button variant="secondary" href="/member/password-reset">
          Forgot password?
          </Button>
        </div>
          
        </Form>
      </div>
    </Layout>
  )
}

export default IndexPage