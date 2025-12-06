import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome to Blood Donation App
        </h2>
        <p className="text-center text-lg">
          Join us in saving lives through blood donation
        </p>
      </div>
    </div>
  );
};

export default Home;