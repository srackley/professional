import Header from './Header';


const Layout = props => (
  <div>
    <Header />
    {props.children}

    <style jsx>
      {`
        div {
          padding: 20px;
          border: 1px solid black;
        }
      `}
    </style>
  </div>
);

export default Layout;
