import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>Contact</h1>
    <p>A paragraph about why you should contact me and ask me to help you stop sniffing glue or whatever.</p>
    <form>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name" />
      <br />
      <label htmlFor="name">Email: </label>
      <input
        type="text"
        name="email"
        id="email" />
      <br />
      <label htmlFor="options">Subject:</label>
      <br />
      <select
        name="options"
        id="options"
        size="4">
        <option value="info">Desire More Information</option>
        <option value="appointment">
        Request an Appointment
        </option>
      </select>
      <br />
      <label htmlFor="message">Message</label>
      <br />
      <textarea
        type="text"
        name="message"
        id="message"
        cols="30"
        rows="8" />
      <br />
      <input type="submit" />
    </form>
    <div>
      <p>Hours?</p>
      <p>Phone number?</p>
      <p>Email address</p>
    </div>
    <div>
    Map from Google with location pointer and where you can click through to get directions
    </div>
  </Layout>
);
