import React from 'react';
import TopNavbar from '../../Components/Navbar/TopNavbar';
import { Container } from 'react-bootstrap'
import CardStatistik from '../../Components/CardStatistik/CardStatistik';

function Dashboard(props) {
    return (
        <div>
            <TopNavbar />
            {/* <Container> */}
                <CardStatistik/>
            {/* </Container> */}
            <Container>
                <p style={{ marginTop: "200px" }}>halo Dashboard</p>
            </Container>

        </div>
    );
}

export default Dashboard;