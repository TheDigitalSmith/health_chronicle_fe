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
  handleSubmit = async (e) => {
    e.preventDefault();
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWY2NWNlMjQ5NWZiZjJkZTRkOTY1ODEiLCJpYXQiOjE1OTM1MTAzODAsImV4cCI6MTU5Mzc2OTU4MH0.jejI1K23Z3ZNJMnF1T8Xxh00645157n46yZ25klx28A";
    const submitURL = await fetch("http://localhost:9121/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const response = await submitURL.json();
    console.log(response);
    this.setState({ ...response });
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
        ></UserInfo>
        <DiseaseList></DiseaseList>
        <MedicineList></MedicineList>
        <VaccineList></VaccineList>
        <HistoryList></HistoryList>
      </Container>
    );
  }
  componentDidMount = async () => {
    try {
      const token =
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWY2NWNlMjQ5NWZiZjJkZTRkOTY1ODEiLCJpYXQiOjE1OTM1MTEwNTUsImV4cCI6MTU5Mzc3MDI1NX0.NM1md8imvnBxN9SuInKH8E1_IpRY7j6MWT5HzKWDeJA";
      const submitURL = await fetch("http://localhost:9121/api/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const response = await submitURL.json();
      console.log(response);
      this.setState({ ...response });
    } catch (err) {
      console.log(err);
    }
  };
}
