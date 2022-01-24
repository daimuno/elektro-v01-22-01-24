import * as React from 'react'
import Layout from '../../components/layout'
import { Button, Form} from 'react-bootstrap'
const IndexPage = () => {
  return (
    <Layout pageTitle="Reset Password">
      
      <div style={{ width: '40%', marginLeft: '30%'}}>
        <h2>Reset Password</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I'm not a robot" />
          </Form.Group>
          <Button variant="primary" type="login">
            Reset Password
          </Button>

        </Form>
      </div>
    </Layout>
  )
}

export default IndexPage