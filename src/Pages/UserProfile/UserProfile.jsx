import React, { Component } from "react";

import UserInfo from "../../Components/UserInfo/UserInfo";
import DiseaseList from "../../Components/DiseaseList/DiseaseList";
import MedicineList from "../../Components/MedicineList/MedicineList";
import HistoryList from "../../Components/HistoryList/HistoryList";
import VaccineList from "../../Components/VaccineList/VaccineList.jsx";

import Container from "react-bootstrap/Container";

export default class UserProfile extends Component {
  state = {
    bloodType: "",
    allergies: [],
    diseases: [],
    vaccines: [],
    history: [],
    email: "",
    emergencyContacts: [],
    firstName: "",
    height: 0,
    lastName: "",
    medicines: [],
    sex: "",
    username: "",
    weight: 0,
    organDonour: false,
  };

  handleChange = (user) => {
    this.setState({ ...user });
  };
  render() {
    const {
      firstName,
      lastName,
      bloodType,
      email,
      height,
      weight,
      allergies,
      sex,
      organDonour,
      diseases,
      medicines,
      vaccines,
      history,
      emergencyContacts,
    } = this.state;

    return (
      <Container>
        <UserInfo
          firstName={firstName}
          lastName={lastName}
          bloodType={bloodType}
          email={email}
          height={height}
          weight={weight}
          sex={sex}
          allergies={allergies}
          organDonour={organDonour}
          emergencyContacts={emergencyContacts}
          handleChange={this.handleChange}
        ></UserInfo>
        <DiseaseList diseases={diseases}></DiseaseList>
        <MedicineList medicines={medicines}></MedicineList>
        <VaccineList vaccines={vaccines}></VaccineList>
        <HistoryList history={history}></HistoryList>
      </Container>
    );
  }
  componentDidMount = async () => {
    try {
      const accessToken = localStorage.getItem("x_access_token");
      const token = "Bearer " + accessToken;
      const submitURL = await fetch("http://localhost:9121/api/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const response = await submitURL.json();
      this.setState({ ...response });
    } catch (err) {
      console.log(err);
    }
  };
}
