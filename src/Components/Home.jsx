import React from "react";
import Hero from "./hero/Hero";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from "./Footer";
import { connect } from "react-redux";
import { setSearchFiled } from "../Redux/actions";

const mapStateToProps = state => {
  return {
    test: state.test
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchFiled(e.target.value))
  };
};

const Home = () => {
  return (
    <>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
