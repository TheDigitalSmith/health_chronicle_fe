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

  handleDiseaseChange = (disease) => {
    this.setState({ diseases: disease });
  };

  handleMedicineChange = (medicine) => {
    this.setState({ medicines: medicine });
  };

  handleVaccineChange = (vaccine) => {
    this.setState({ vaccines: vaccine });
  };

  handleHistoryChange = (history) => {
    this.setState({ history: history });
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
        <DiseaseList
          diseases={diseases}
          handleDiseaseChange={this.handleDiseaseChange}
        ></DiseaseList>
        <MedicineList
          medicines={medicines}
          handleMedicineChange={this.handleMedicineChange}
        ></MedicineList>
        <VaccineList
          vaccines={vaccines}
          handleVaccineChange={this.handleVaccineChange}
        ></VaccineList>
        <HistoryList
          history={history}
          handleHistoryChange={this.handleHistoryChange}
        ></HistoryList>
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
