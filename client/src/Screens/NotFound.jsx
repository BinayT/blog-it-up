import Helmet from '../components/Helmet';

const NotFound = () => {
  return (
    <div className='notFound'>
      <Helmet
        title={`404 Not Found`}
        content='The page searched in Blog It Up website is not found.'
      />
      <div className='notFound__container'>
        <h1 className='notFound__container__h1'>404</h1>
        <p className='notFound__container__p'>
          Opps! The page could not be found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
